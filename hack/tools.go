package hack

import (
	// _ imports protowrap
	_ "github.com/square/goprotowrap"
	// _ imports grpc
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"
	// _ imports protoc-gen-go-vtproto
	_ "github.com/planetscale/vtprotobuf/cmd/protoc-gen-go-vtproto"
	// _ imports grpc
	_ "google.golang.org/grpc/cmd/protoc-gen-go-grpc"
	// _ imports golangci-lint
	_ "github.com/golangci/golangci-lint/pkg/golinters"
	// _ imports golangci-lint commands
	_ "github.com/golangci/golangci-lint/pkg/commands"
	// _ imports go-mod-outdated
	_ "github.com/psampaz/go-mod-outdated"
)
