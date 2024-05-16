module github.com/aperturerobotics/protobuf-project

go 1.22

replace google.golang.org/protobuf => github.com/aperturerobotics/protobuf-go v1.33.1-0.20240411062030-e36f75e0a3b8 // aperture

require (
	github.com/aperturerobotics/common v0.16.4 // latest
	github.com/aperturerobotics/protobuf-go-lite v0.6.5 // latest
	github.com/aperturerobotics/starpc v0.32.9 // latest
	github.com/aperturerobotics/util v1.23.1 // indirect
)

require (
	github.com/sirupsen/logrus v1.9.3
	google.golang.org/protobuf v1.34.1
)

require (
	github.com/aperturerobotics/json-iterator-lite v1.0.0 // indirect
	github.com/decred/dcrd/dcrec/secp256k1/v4 v4.2.0 // indirect
	github.com/ipfs/go-cid v0.4.1 // indirect
	github.com/klauspost/cpuid/v2 v2.2.7 // indirect
	github.com/libp2p/go-buffer-pool v0.1.0 // indirect
	github.com/libp2p/go-libp2p v0.33.2 // indirect
	github.com/libp2p/go-yamux/v4 v4.0.2-0.20240322071716-53ef5820bd48 // indirect
	github.com/minio/sha256-simd v1.0.1 // indirect
	github.com/mr-tron/base58 v1.2.0 // indirect
	github.com/multiformats/go-base32 v0.1.0 // indirect
	github.com/multiformats/go-base36 v0.2.0 // indirect
	github.com/multiformats/go-multiaddr v0.12.3 // indirect
	github.com/multiformats/go-multibase v0.2.0 // indirect
	github.com/multiformats/go-multicodec v0.9.0 // indirect
	github.com/multiformats/go-multihash v0.2.3 // indirect
	github.com/multiformats/go-multistream v0.5.0 // indirect
	github.com/multiformats/go-varint v0.0.7 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/spaolacci/murmur3 v1.1.0 // indirect
	golang.org/x/crypto v0.19.0 // indirect
	golang.org/x/exp v0.0.0-20240506185415-9bf2ced13842 // indirect
	golang.org/x/sys v0.18.0 // indirect
	lukechampine.com/blake3 v1.2.1 // indirect
	nhooyr.io/websocket v1.8.11 // indirect
)
