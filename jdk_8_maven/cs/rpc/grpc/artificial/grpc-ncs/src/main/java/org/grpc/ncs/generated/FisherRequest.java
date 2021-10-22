// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ncs.proto

package org.grpc.ncs.generated;

/**
 * Protobuf type {@code FisherRequest}
 */
public final class FisherRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:FisherRequest)
    FisherRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use FisherRequest.newBuilder() to construct.
  private FisherRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private FisherRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new FisherRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private FisherRequest(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 8: {

            m_ = input.readInt32();
            break;
          }
          case 16: {

            n_ = input.readInt32();
            break;
          }
          case 25: {

            x_ = input.readDouble();
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return org.grpc.ncs.generated.Ncs.internal_static_FisherRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.grpc.ncs.generated.Ncs.internal_static_FisherRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.grpc.ncs.generated.FisherRequest.class, org.grpc.ncs.generated.FisherRequest.Builder.class);
  }

  public static final int M_FIELD_NUMBER = 1;
  private int m_;
  /**
   * <code>int32 m = 1;</code>
   * @return The m.
   */
  @java.lang.Override
  public int getM() {
    return m_;
  }

  public static final int N_FIELD_NUMBER = 2;
  private int n_;
  /**
   * <code>int32 n = 2;</code>
   * @return The n.
   */
  @java.lang.Override
  public int getN() {
    return n_;
  }

  public static final int X_FIELD_NUMBER = 3;
  private double x_;
  /**
   * <code>double x = 3;</code>
   * @return The x.
   */
  @java.lang.Override
  public double getX() {
    return x_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (m_ != 0) {
      output.writeInt32(1, m_);
    }
    if (n_ != 0) {
      output.writeInt32(2, n_);
    }
    if (x_ != 0D) {
      output.writeDouble(3, x_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (m_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, m_);
    }
    if (n_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, n_);
    }
    if (x_ != 0D) {
      size += com.google.protobuf.CodedOutputStream
        .computeDoubleSize(3, x_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof org.grpc.ncs.generated.FisherRequest)) {
      return super.equals(obj);
    }
    org.grpc.ncs.generated.FisherRequest other = (org.grpc.ncs.generated.FisherRequest) obj;

    if (getM()
        != other.getM()) return false;
    if (getN()
        != other.getN()) return false;
    if (java.lang.Double.doubleToLongBits(getX())
        != java.lang.Double.doubleToLongBits(
            other.getX())) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + M_FIELD_NUMBER;
    hash = (53 * hash) + getM();
    hash = (37 * hash) + N_FIELD_NUMBER;
    hash = (53 * hash) + getN();
    hash = (37 * hash) + X_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        java.lang.Double.doubleToLongBits(getX()));
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.grpc.ncs.generated.FisherRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.grpc.ncs.generated.FisherRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.grpc.ncs.generated.FisherRequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(org.grpc.ncs.generated.FisherRequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code FisherRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:FisherRequest)
      org.grpc.ncs.generated.FisherRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.grpc.ncs.generated.Ncs.internal_static_FisherRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.grpc.ncs.generated.Ncs.internal_static_FisherRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.grpc.ncs.generated.FisherRequest.class, org.grpc.ncs.generated.FisherRequest.Builder.class);
    }

    // Construct using org.grpc.ncs.generated.FisherRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      m_ = 0;

      n_ = 0;

      x_ = 0D;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.grpc.ncs.generated.Ncs.internal_static_FisherRequest_descriptor;
    }

    @java.lang.Override
    public org.grpc.ncs.generated.FisherRequest getDefaultInstanceForType() {
      return org.grpc.ncs.generated.FisherRequest.getDefaultInstance();
    }

    @java.lang.Override
    public org.grpc.ncs.generated.FisherRequest build() {
      org.grpc.ncs.generated.FisherRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public org.grpc.ncs.generated.FisherRequest buildPartial() {
      org.grpc.ncs.generated.FisherRequest result = new org.grpc.ncs.generated.FisherRequest(this);
      result.m_ = m_;
      result.n_ = n_;
      result.x_ = x_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof org.grpc.ncs.generated.FisherRequest) {
        return mergeFrom((org.grpc.ncs.generated.FisherRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.grpc.ncs.generated.FisherRequest other) {
      if (other == org.grpc.ncs.generated.FisherRequest.getDefaultInstance()) return this;
      if (other.getM() != 0) {
        setM(other.getM());
      }
      if (other.getN() != 0) {
        setN(other.getN());
      }
      if (other.getX() != 0D) {
        setX(other.getX());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      org.grpc.ncs.generated.FisherRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.grpc.ncs.generated.FisherRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int m_ ;
    /**
     * <code>int32 m = 1;</code>
     * @return The m.
     */
    @java.lang.Override
    public int getM() {
      return m_;
    }
    /**
     * <code>int32 m = 1;</code>
     * @param value The m to set.
     * @return This builder for chaining.
     */
    public Builder setM(int value) {
      
      m_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 m = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearM() {
      
      m_ = 0;
      onChanged();
      return this;
    }

    private int n_ ;
    /**
     * <code>int32 n = 2;</code>
     * @return The n.
     */
    @java.lang.Override
    public int getN() {
      return n_;
    }
    /**
     * <code>int32 n = 2;</code>
     * @param value The n to set.
     * @return This builder for chaining.
     */
    public Builder setN(int value) {
      
      n_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 n = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearN() {
      
      n_ = 0;
      onChanged();
      return this;
    }

    private double x_ ;
    /**
     * <code>double x = 3;</code>
     * @return The x.
     */
    @java.lang.Override
    public double getX() {
      return x_;
    }
    /**
     * <code>double x = 3;</code>
     * @param value The x to set.
     * @return This builder for chaining.
     */
    public Builder setX(double value) {
      
      x_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>double x = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearX() {
      
      x_ = 0D;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:FisherRequest)
  }

  // @@protoc_insertion_point(class_scope:FisherRequest)
  private static final org.grpc.ncs.generated.FisherRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.grpc.ncs.generated.FisherRequest();
  }

  public static org.grpc.ncs.generated.FisherRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<FisherRequest>
      PARSER = new com.google.protobuf.AbstractParser<FisherRequest>() {
    @java.lang.Override
    public FisherRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new FisherRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<FisherRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<FisherRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public org.grpc.ncs.generated.FisherRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

