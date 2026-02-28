module github.com/aperturerobotics/protobuf-project

go 1.25

replace google.golang.org/protobuf => github.com/aperturerobotics/protobuf-go v1.33.1-0.20240411062030-e36f75e0a3b8 // aperture

require (
	github.com/aperturerobotics/protobuf-go-lite v0.12.2 // latest
	github.com/aperturerobotics/starpc v0.47.2-0.20260228105112-f1337c4314e9 // latest
	github.com/aperturerobotics/util v1.32.4 // indirect
)

require (
	github.com/aperturerobotics/common v0.30.7
	github.com/sirupsen/logrus v1.9.5-0.20260226151524-34027eac4204
)

require (
	github.com/aperturerobotics/abseil-cpp v0.0.0-20260131110040-4bb56e2f9017 // indirect
	github.com/aperturerobotics/cli v1.1.0 // indirect
	github.com/aperturerobotics/go-protoc-gen-prost v0.0.0-20260204215916-dc1f0fed8cfc // indirect
	github.com/aperturerobotics/go-protoc-wasi v0.0.0-20260131050911-b5f94b044584 // indirect
	github.com/aperturerobotics/go-websocket v1.8.15-0.20260228104546-35e37959349c // indirect
	github.com/aperturerobotics/json-iterator-lite v1.0.1-0.20251104042408-0c9eb8a3f726 // indirect
	github.com/aperturerobotics/protobuf v0.0.0-20260203024654-8201686529c4 // indirect
	github.com/libp2p/go-buffer-pool v0.1.0 // indirect
	github.com/libp2p/go-yamux/v4 v4.0.2 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/tetratelabs/wazero v1.11.0 // indirect
	github.com/xrash/smetrics v0.0.0-20250705151800-55b8f293f342 // indirect
	golang.org/x/mod v0.33.0 // indirect
	golang.org/x/sys v0.40.0 // indirect
)
