module github.com/aperturerobotics/protobuf-project

go 1.23

toolchain go1.23.2

replace google.golang.org/protobuf => github.com/aperturerobotics/protobuf-go v1.33.1-0.20240411062030-e36f75e0a3b8 // aperture

require (
	github.com/aperturerobotics/common v0.18.8 // latest
	github.com/aperturerobotics/protobuf-go-lite v0.7.0 // latest
	github.com/aperturerobotics/starpc v0.35.1 // latest
	github.com/aperturerobotics/util v1.26.0 // indirect
)

require (
	github.com/sirupsen/logrus v1.9.3
	google.golang.org/protobuf v1.35.1
)

require (
	github.com/aperturerobotics/json-iterator-lite v1.0.0 // indirect
	github.com/coder/websocket v1.8.12 // indirect
	github.com/decred/dcrd/dcrec/secp256k1/v4 v4.3.0 // indirect
	github.com/ipfs/go-cid v0.4.1 // indirect
	github.com/klauspost/cpuid/v2 v2.2.8 // indirect
	github.com/libp2p/go-buffer-pool v0.1.0 // indirect
	github.com/libp2p/go-libp2p v0.36.5 // indirect
	github.com/libp2p/go-yamux/v4 v4.0.2-0.20240826150533-e92055b23e0e // indirect
	github.com/minio/sha256-simd v1.0.1 // indirect
	github.com/mr-tron/base58 v1.2.0 // indirect
	github.com/multiformats/go-base32 v0.1.0 // indirect
	github.com/multiformats/go-base36 v0.2.0 // indirect
	github.com/multiformats/go-multiaddr v0.13.0 // indirect
	github.com/multiformats/go-multibase v0.2.0 // indirect
	github.com/multiformats/go-multicodec v0.9.0 // indirect
	github.com/multiformats/go-multihash v0.2.3 // indirect
	github.com/multiformats/go-multistream v0.5.0 // indirect
	github.com/multiformats/go-varint v0.0.7 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/spaolacci/murmur3 v1.1.0 // indirect
	golang.org/x/crypto v0.25.0 // indirect
	golang.org/x/exp v0.0.0-20241009180824-f66d83c29e7c // indirect
	golang.org/x/sys v0.22.0 // indirect
	lukechampine.com/blake3 v1.3.0 // indirect
	nhooyr.io/websocket v1.8.11 // indirect
)
