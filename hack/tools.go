package hack

import (
	// _ imports protowrap
	_ "github.com/square/goprotowrap"
	// _ imports protoc-gen-go
	_ "github.com/golang/protobuf/proto"
	// _ imports protoc-gen-go-vtproto
	_ "github.com/planetscale/vtprotobuf/cmd/protoc-gen-go-vtproto"
	// _ imports drpc
	_ "storj.io/drpc/cmd/protoc-gen-go-drpc"
	// _ imports golangci-lint
	_ "github.com/golangci/golangci-lint/pkg/golinters"
	// _ imports golangci-lint commands
	_ "github.com/golangci/golangci-lint/pkg/commands"
	// _ imports go-mod-outdated
	_ "github.com/psampaz/go-mod-outdated"
)
