//go:build deps_only
// +build deps_only

package hack

import (
	// _ imports golangci-lint
	_ "github.com/golangci/golangci-lint/pkg/golinters"
	// _ imports golangci-lint commands
	_ "github.com/golangci/golangci-lint/pkg/commands"
	// _ imports goimports
	_ "golang.org/x/tools/cmd/goimports"
	// _ imports gofumpt
	_ "mvdan.cc/gofumpt"
	// _ imports protoc-gen-go-lite
	_ "github.com/aperturerobotics/protobuf-go-lite/cmd/protoc-gen-go-lite"
	// _ imports protoc-gen-go-lite-vtproto
	_ "github.com/aperturerobotics/vtprotobuf-lite/cmd/protoc-gen-go-lite-vtproto"
	// _ imports protowrap
	_ "github.com/aperturerobotics/goprotowrap/cmd/protowrap"
	// _ imports protoc-gen-go-lite
	_ "github.com/aperturerobotics/protobuf-go-lite/cmd/protoc-gen-go-lite"
	// _ imports protoc-gen-go-lite-vtproto
	_ "github.com/aperturerobotics/vtprotobuf-lite/cmd/protoc-gen-go-lite-vtproto"
	// _ imports go-mod-outdated
	_ "github.com/psampaz/go-mod-outdated"
	// _ imports protoc-gen-starpc
	_ "github.com/aperturerobotics/starpc/cmd/protoc-gen-go-starpc"
	// _ imports esbuild
	_ "github.com/evanw/esbuild/cmd/esbuild"
	// _ imports goimports
	_ "golang.org/x/tools/cmd/goimports"
	// _ imports gofumpt
	_ "mvdan.cc/gofumpt"
	// _ imports protoc-gen-debug
	_ "github.com/lyft/protoc-gen-star/v2/protoc-gen-debug"
)
