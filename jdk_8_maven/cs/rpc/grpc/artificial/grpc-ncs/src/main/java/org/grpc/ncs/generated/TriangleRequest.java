// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ncs.proto

package org.grpc.ncs.generated;

/**
 * Protobuf type {@code TriangleRequest}
 */
public final class TriangleRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:TriangleRequest)
    TriangleRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TriangleRequest.newBuilder() to construct.
  private TriangleRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TriangleRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TriangleRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private TriangleRequest(
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

            a_ = input.readInt32();
            break;
          }
          case 16: {

            b_ = input.readInt32();
            break;
          }
          case 24: {

            c_ = input.readInt32();
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
    return org.grpc.ncs.generated.Ncs.internal_static_TriangleRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.grpc.ncs.generated.Ncs.internal_static_TriangleRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.grpc.ncs.generated.TriangleRequest.class, org.grpc.ncs.generated.TriangleRequest.Builder.class);
  }

  public static final int A_FIELD_NUMBER = 1;
  private int a_;
  /**
   * <code>int32 a = 1;</code>
   * @return The a.
   */
  @java.lang.Override
  public int getA() {
    return a_;
  }

  public static final int B_FIELD_NUMBER = 2;
  private int b_;
  /**
   * <code>int32 b = 2;</code>
   * @return The b.
   */
  @java.lang.Override
  public int getB() {
    return b_;
  }

  public static final int C_FIELD_NUMBER = 3;
  private int c_;
  /**
   * <code>int32 c = 3;</code>
   * @return The c.
   */
  @java.lang.Override
  public int getC() {
    return c_;
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
    if (a_ != 0) {
      output.writeInt32(1, a_);
    }
    if (b_ != 0) {
      output.writeInt32(2, b_);
    }
    if (c_ != 0) {
      output.writeInt32(3, c_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (a_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, a_);
    }
    if (b_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, b_);
    }
    if (c_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(3, c_);
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
    if (!(obj instanceof org.grpc.ncs.generated.TriangleRequest)) {
      return super.equals(obj);
    }
    org.grpc.ncs.generated.TriangleRequest other = (org.grpc.ncs.generated.TriangleRequest) obj;

    if (getA()
        != other.getA()) return false;
    if (getB()
        != other.getB()) return false;
    if (getC()
        != other.getC()) return false;
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
    hash = (37 * hash) + A_FIELD_NUMBER;
    hash = (53 * hash) + getA();
    hash = (37 * hash) + B_FIELD_NUMBER;
    hash = (53 * hash) + getB();
    hash = (37 * hash) + C_FIELD_NUMBER;
    hash = (53 * hash) + getC();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.grpc.ncs.generated.TriangleRequest parseFrom(
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
  public static Builder newBuilder(org.grpc.ncs.generated.TriangleRequest prototype) {
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
   * Protobuf type {@code TriangleRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:TriangleRequest)
      org.grpc.ncs.generated.TriangleRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.grpc.ncs.generated.Ncs.internal_static_TriangleRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.grpc.ncs.generated.Ncs.internal_static_TriangleRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.grpc.ncs.generated.TriangleRequest.class, org.grpc.ncs.generated.TriangleRequest.Builder.class);
    }

    // Construct using org.grpc.ncs.generated.TriangleRequest.newBuilder()
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
      a_ = 0;

      b_ = 0;

      c_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.grpc.ncs.generated.Ncs.internal_static_TriangleRequest_descriptor;
    }

    @java.lang.Override
    public org.grpc.ncs.generated.TriangleRequest getDefaultInstanceForType() {
      return org.grpc.ncs.generated.TriangleRequest.getDefaultInstance();
    }

    @java.lang.Override
    public org.grpc.ncs.generated.TriangleRequest build() {
      org.grpc.ncs.generated.TriangleRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public org.grpc.ncs.generated.TriangleRequest buildPartial() {
      org.grpc.ncs.generated.TriangleRequest result = new org.grpc.ncs.generated.TriangleRequest(this);
      result.a_ = a_;
      result.b_ = b_;
      result.c_ = c_;
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
      if (other instanceof org.grpc.ncs.generated.TriangleRequest) {
        return mergeFrom((org.grpc.ncs.generated.TriangleRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.grpc.ncs.generated.TriangleRequest other) {
      if (other == org.grpc.ncs.generated.TriangleRequest.getDefaultInstance()) return this;
      if (other.getA() != 0) {
        setA(other.getA());
      }
      if (other.getB() != 0) {
        setB(other.getB());
      }
      if (other.getC() != 0) {
        setC(other.getC());
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
      org.grpc.ncs.generated.TriangleRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.grpc.ncs.generated.TriangleRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int a_ ;
    /**
     * <code>int32 a = 1;</code>
     * @return The a.
     */
    @java.lang.Override
    public int getA() {
      return a_;
    }
    /**
     * <code>int32 a = 1;</code>
     * @param value The a to set.
     * @return This builder for chaining.
     */
    public Builder setA(int value) {
      
      a_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 a = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearA() {
      
      a_ = 0;
      onChanged();
      return this;
    }

    private int b_ ;
    /**
     * <code>int32 b = 2;</code>
     * @return The b.
     */
    @java.lang.Override
    public int getB() {
      return b_;
    }
    /**
     * <code>int32 b = 2;</code>
     * @param value The b to set.
     * @return This builder for chaining.
     */
    public Builder setB(int value) {
      
      b_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 b = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearB() {
      
      b_ = 0;
      onChanged();
      return this;
    }

    private int c_ ;
    /**
     * <code>int32 c = 3;</code>
     * @return The c.
     */
    @java.lang.Override
    public int getC() {
      return c_;
    }
    /**
     * <code>int32 c = 3;</code>
     * @param value The c to set.
     * @return This builder for chaining.
     */
    public Builder setC(int value) {
      
      c_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 c = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearC() {
      
      c_ = 0;
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


    // @@protoc_insertion_point(builder_scope:TriangleRequest)
  }

  // @@protoc_insertion_point(class_scope:TriangleRequest)
  private static final org.grpc.ncs.generated.TriangleRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.grpc.ncs.generated.TriangleRequest();
  }

  public static org.grpc.ncs.generated.TriangleRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TriangleRequest>
      PARSER = new com.google.protobuf.AbstractParser<TriangleRequest>() {
    @java.lang.Override
    public TriangleRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new TriangleRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<TriangleRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TriangleRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public org.grpc.ncs.generated.TriangleRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
