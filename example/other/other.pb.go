// Code generated by protoc-gen-go-lite. DO NOT EDIT.
// source: github.com/aperturerobotics/protobuf-project/example/other/other.proto

package other

import (
	_ "github.com/aperturerobotics/vtprotobuf-lite/types/known/emptypb"
	timestamppb "github.com/aperturerobotics/vtprotobuf-lite/types/known/timestamppb"
)

type OtherMessage struct {
	unknownFields []byte
	// Timestamp is an example of a Date encoding.
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *OtherMessage) Reset() {
	*x = OtherMessage{}
}

func (*OtherMessage) ProtoMessage() {}

func (x *OtherMessage) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}
