/*
 * Copyright 2013-2021 Signal Messenger, LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 */

package org.whispersystems.textsecuregcm.push;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.Mockito.when;

import com.google.protobuf.ByteString;
import java.util.UUID;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.whispersystems.textsecuregcm.entities.MessageProtos;
import org.whispersystems.textsecuregcm.storage.Account;
import org.whispersystems.textsecuregcm.storage.Device;
import org.whispersystems.textsecuregcm.storage.MessagesManager;

class MessageSenderTest {

  private Account account;
  private Device device;
  private MessageProtos.Envelope message;

  private ClientPresenceManager clientPresenceManager;
  private MessagesManager messagesManager;
  private PushNotificationManager pushNotificationManager;
  private MessageSender messageSender;

  private static final UUID ACCOUNT_UUID = UUID.randomUUID();
  private static final long DEVICE_ID = 1L;

  @BeforeEach
  void setUp() {

    account = mock(Account.class);
    device = mock(Device.class);
    message = generateRandomMessage();

    clientPresenceManager = mock(ClientPresenceManager.class);
    messagesManager = mock(MessagesManager.class);
    pushNotificationManager = mock(PushNotificationManager.class);
    messageSender = new MessageSender(clientPresenceManager,
        messagesManager,
        pushNotificationManager,
        mock(PushLatencyManager.class));

    when(account.getUuid()).thenReturn(ACCOUNT_UUID);
    when(device.getId()).thenReturn(DEVICE_ID);
  }

  @Test
  void testSendOnlineMessageClientPresent() throws Exception {
    when(clientPresenceManager.isPresent(ACCOUNT_UUID, DEVICE_ID)).thenReturn(true);
    when(device.getGcmId()).thenReturn("gcm-id");

    messageSender.sendMessage(account, device, message, true);

    ArgumentCaptor<MessageProtos.Envelope> envelopeArgumentCaptor = ArgumentCaptor.forClass(
        MessageProtos.Envelope.class);

    verify(messagesManager).insert(any(), anyLong(), envelopeArgumentCaptor.capture());

    assertTrue(envelopeArgumentCaptor.getValue().getEphemeral());

    verifyNoInteractions(pushNotificationManager);
  }

  @Test
  void testSendOnlineMessageClientNotPresent() throws Exception {
    when(clientPresenceManager.isPresent(ACCOUNT_UUID, DEVICE_ID)).thenReturn(false);
    when(device.getGcmId()).thenReturn("gcm-id");

    messageSender.sendMessage(account, device, message, true);

    verify(messagesManager, never()).insert(any(), anyLong(), any());
    verifyNoInteractions(pushNotificationManager);
  }

  @Test
  void testSendMessageClientPresent() throws Exception {
    when(clientPresenceManager.isPresent(ACCOUNT_UUID, DEVICE_ID)).thenReturn(true);
    when(device.getGcmId()).thenReturn("gcm-id");

    messageSender.sendMessage(account, device, message, false);

    final ArgumentCaptor<MessageProtos.Envelope> envelopeArgumentCaptor = ArgumentCaptor.forClass(
        MessageProtos.Envelope.class);

    verify(messagesManager).insert(eq(ACCOUNT_UUID), eq(DEVICE_ID), envelopeArgumentCaptor.capture());

    assertFalse(envelopeArgumentCaptor.getValue().getEphemeral());
    assertEquals(message, envelopeArgumentCaptor.getValue());
    verifyNoInteractions(pushNotificationManager);
  }

  @Test
  void testSendMessageGcmClientNotPresent() throws Exception {
    when(clientPresenceManager.isPresent(ACCOUNT_UUID, DEVICE_ID)).thenReturn(false);
    when(device.getGcmId()).thenReturn("gcm-id");

    messageSender.sendMessage(account, device, message, false);

    verify(messagesManager).insert(ACCOUNT_UUID, DEVICE_ID, message);
    verify(pushNotificationManager).sendNewMessageNotification(account, device.getId(), message.getUrgent());
  }

  @Test
  void testSendMessageApnClientNotPresent() throws Exception {
    when(clientPresenceManager.isPresent(ACCOUNT_UUID, DEVICE_ID)).thenReturn(false);
    when(device.getApnId()).thenReturn("apn-id");

    messageSender.sendMessage(account, device, message, false);

    verify(messagesManager).insert(ACCOUNT_UUID, DEVICE_ID, message);
    verify(pushNotificationManager).sendNewMessageNotification(account, device.getId(), message.getUrgent());
  }

  @Test
  void testSendMessageFetchClientNotPresent() throws Exception {
    when(clientPresenceManager.isPresent(ACCOUNT_UUID, DEVICE_ID)).thenReturn(false);
    when(device.getFetchesMessages()).thenReturn(true);

    doThrow(NotPushRegisteredException.class)
        .when(pushNotificationManager).sendNewMessageNotification(account, DEVICE_ID, message.getUrgent());

    assertDoesNotThrow(() -> messageSender.sendMessage(account, device, message, false));
    verify(messagesManager).insert(ACCOUNT_UUID, DEVICE_ID, message);
  }

  private MessageProtos.Envelope generateRandomMessage() {
    return MessageProtos.Envelope.newBuilder()
        .setTimestamp(System.currentTimeMillis())
        .setServerTimestamp(System.currentTimeMillis())
        .setContent(ByteString.copyFromUtf8(RandomStringUtils.randomAlphanumeric(256)))
        .setType(MessageProtos.Envelope.Type.CIPHERTEXT)
        .setServerGuid(UUID.randomUUID().toString())
        .build();
  }
}
