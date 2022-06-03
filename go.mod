module github.com/aperturerobotics/protobuf-project

go 1.21

replace google.golang.org/protobuf => github.com/aperturerobotics/protobuf-go v1.32.1-0.20231231025138-7d69d9b7299c // aperture

require (
	github.com/twitchtv/twirp v8.1.3+incompatible
	google.golang.org/protobuf v0.0.0-00010101000000-000000000000
)

require github.com/pkg/errors v0.9.1 // indirect
