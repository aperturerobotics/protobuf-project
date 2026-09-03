module github.com/aperturerobotics/protobuf-project

go 1.25.0

replace google.golang.org/protobuf => github.com/aperturerobotics/protobuf-go v1.33.1-0.20240411062030-e36f75e0a3b8 // aperture

require (
	github.com/aperturerobotics/protobuf-go-lite v0.18.0 // latest
	github.com/aperturerobotics/starpc v0.52.1 // latest
	github.com/aperturerobotics/util v1.34.9 // indirect
)

require (
	github.com/aperturerobotics/common v0.35.3
	github.com/sirupsen/logrus v1.10.2
)

require (
	github.com/aperturerobotics/abseil-cpp v0.0.0-20260131110040-4bb56e2f9017 // indirect
	github.com/aperturerobotics/cli v1.1.0 // indirect
	github.com/aperturerobotics/go-protoc-gen-prost v0.0.0-20260705010911-9f53feac967b // indirect
	github.com/aperturerobotics/go-protoc-wasi v0.0.0-20260808023521-7b1595380c3f // indirect
	github.com/aperturerobotics/go-websocket v1.8.15-0.20260619192713-a096778f08c1 // indirect
	github.com/aperturerobotics/json-iterator-lite v1.1.0 // indirect
	github.com/aperturerobotics/protobuf v0.0.0-20260203024654-8201686529c4 // indirect
	github.com/libp2p/go-buffer-pool v0.1.0 // indirect
	github.com/libp2p/go-yamux/v4 v4.0.2 // indirect
	github.com/libp2p/go-yamux/v5 v5.1.0 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/tetratelabs/wazero v1.12.0 // indirect
	github.com/xrash/smetrics v0.0.0-20250705151800-55b8f293f342 // indirect
	golang.org/x/mod v0.39.0 // indirect
	golang.org/x/sys v0.47.0 // indirect
)
