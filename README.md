## protobuf-project template

This is a repository template for projects using protobuf.

Supports **Go and TypeScript** with Go-style import paths.

Uses a Makefile to download tools to ./hack/bin.

Includes targets for linting, checking outdated modules, etc.

You can create a new repository with this template [on GitHub].

[on GitHub]: https://github.com/aperturerobotics/protobuf-project

## Demo

**This branch implements a starpc service and demo.**

To run the demo: **yarn** then **yarn run demo**.

## Makefile

The available make targets are:

 - `gengo`: Generate protobuf files.
 - `test`: run go test -v ./...
 - `lint`: run golangci-lint on the project.
 - `fix`: run golangci-lint --fix on the project.
 - `list`: list go module dependencies
 - `outdated`: list outdated go module dependencies

To generate the TypeScript and Go code:

 - `yarn install`
 - `yarn gen`

## Branches

Other available branches:

 - **norpc**: does not have any RPC library.
 - **drpc**: uses the [dRPC] rpc library instead of [starpc].
 - **grpc**: uses the [gRPC] rpc library instead of [starpc].
 - **starpc**: uses the [starpc] rpc library (same as main).
 - **twirp**: uses the [Twirp] rpc library instead of [starpc].

[dRPC]: https://github.com/storj/drpc
[gRPC]: https://github.com/grpc/grpc
[starpc]: https://github.com/aperturerobotics/starpc
[Twirp]: https://github.com/twitchtv/twirp

**starpc** is the only RPC library currently to support bidirectional RPC streams in the web browser over WebSocket or other two-way channels.

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

## Developing on MacOS

On MacOS, some homebrew packages are required for `yarn gen`:

```
brew install bash make coreutils gnu-sed findutils protobuf
brew link --overwrite protobuf
```

Add to your .bashrc or .zshrc:

```
export PATH="/opt/homebrew/opt/coreutils/libexec/gnubin:$PATH"
export PATH="/opt/homebrew/opt/gnu-sed/libexec/gnubin:$PATH"
export PATH="/opt/homebrew/opt/findutils/libexec/gnubin:$PATH"
export PATH="/opt/homebrew/opt/make/libexec/gnubin:$PATH"
```

## Support

Please open a [GitHub issue] with any questions / issues.

[GitHub issue]: https://github.com/aperturerobotics/protobuf-project/issues/new

... or feel free to reach out on [Matrix Chat] or [Discord].

[Discord]: https://discord.gg/KJutMESRsT
[Matrix Chat]: https://matrix.to/#/#aperturerobotics:matrix.org

## License

MIT
