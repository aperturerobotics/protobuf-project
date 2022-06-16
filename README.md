## protobuf-project template

This is a repository template for projects using protobuf.

Supports **Go and TypeScript** with Go-style import paths.

Uses a Makefile to download tools to ./hack/bin.

Includes targets for linting, checking outdated modules, etc.

You can create a new repository with this template [on GitHub].

[on GitHub]: https://github.com/aperturerobotics/protobuf-project

## Makefile

The available make targets are:

 - `gengo`: Generate protobuf files.
 - `test`: run go test -v ./...
 - `lint`: run golangci-lint on the project.
 - `fix`: run golangci-lint --fix on the project.
 - `list`: list go module dependencies
 - `outdated`: list outdated go module dependencies

## Branches

Other available branches:

 - **twirp**: uses the twirp rpc library instead of grpc.
 - **drpc**: uses the drpc rpc library instead of grpc.
 - **starpc**: uses the [starpc] rpc library instead of grpc.
 
[starpc**: https://github.com/aperturerobotics/starpc

**Starpc** supports client-to-server RPC streams in the web browser.

## Usage

Protobuf imports use Go paths and package names:

```protobuf
syntax = "proto3";
package example;

import "github.com/aperturerobotics/controllerbus/controller/controller.proto";

// GetBusInfoResponse is the response type for GetBusInfo.
message GetBusInfoResponse {
  // RunningControllers is the list of running controllers.
  repeated controller.Info running_controllers = 1;
}
```

To generate the protobuf files:

```bash
$ git add -A
$ make gengo
```

The Makefile will download the tools using Go to a bin dir.

## Support

`protobuf-project` is supported by Aperture Robotics, LLC.

Community contributions and discussion are welcomed!

Please open a [GitHub issue] with any questions / issues.

[GitHub issue]: https://github.com/aperturerobotics/protobuf-project/issues/new

... or feel free to reach out on [Matrix Chat] or [Discord].

[Discord]: https://discord.gg/KJutMESRsT
[Matrix Chat]: https://matrix.to/#/#aperturerobotics:matrix.org

## License

MIT
