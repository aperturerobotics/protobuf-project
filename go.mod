module github.com/aperturerobotics/protobuf-project

go 1.21

replace google.golang.org/protobuf => github.com/aperturerobotics/protobuf-go v1.32.1-0.20231231025138-7d69d9b7299c

require (
	google.golang.org/grpc v1.60.1
	google.golang.org/protobuf v1.31.0
)

require (
	github.com/golang/protobuf v1.5.3 // indirect
	golang.org/x/net v0.16.0 // indirect
	golang.org/x/sys v0.13.0 // indirect
	golang.org/x/text v0.13.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20231002182017-d307bd883b97 // indirect
)
