## protobuf-project template

This template uses [protobuf-go-lite] to generate reflection-free Go code and [protobuf-es-lite] for TypeScript interfaces.

[protobuf-go-lite]: https://github.com/aperturerobotics/protobuf-go-lite
[protobuf-es-lite]: https://github.com/aperturerobotics/protobuf-es-lite

Uses the `aptre` CLI to download tools and generate code.

Includes targets for linting, checking outdated modules, etc.

You can create a new repository with this template [on GitHub].

[on GitHub]: https://github.com/aperturerobotics/protobuf-project

Also check out the managed template at [template].

[template]: https://github.com/aperturerobotics/template

## Usage

Protobuf imports use Go paths and package names:

```protobuf
syntax = "proto3";
package example;

// Import .proto files using Go-style import paths.
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
$ bun install
$ bun run gen
```

## Commands

The `aptre` CLI replaces Make for building Go projects with protobuf support.

Available bun scripts:

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `bun run gen`       | Generate protobuf code (Go, TypeScript, C++) |
| `bun run gen:force` | Force regenerate all protobuf files          |
| `bun run test`      | Run all tests (Go + JS)                      |
| `bun run lint`      | Run linters (Go + JS)                        |
| `bun run lint:go`   | Run golangci-lint                            |
| `bun run lint:js`   | Run ESLint on TypeScript                     |
| `bun run format`    | Format all code (Go + JS)                    |

To generate the TypeScript and Go code:

- `bun install`
- `bun run gen`

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

## Demo

**This branch implements a starpc service and demo.**

To run the demo: **bun install** then **bun run demo**.

## Support

Please open a [GitHub issue] with any questions / issues.

[GitHub issue]: https://github.com/aperturerobotics/protobuf-project/issues/new

... or feel free to reach out on [Matrix Chat] or [Discord].

[Discord]: https://discord.gg/KJutMESRsT
[Matrix Chat]: https://matrix.to/#/#aperturerobotics:matrix.org

## License

MIT
