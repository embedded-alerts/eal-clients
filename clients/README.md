# eal client SDKs

These runtime-specific SDK baselines depend on the `eal-interfaces`
and `eal-lib` Zed packages. Existing product bindings are preserved;
missing targets receive a transport-neutral client configuration baseline.
# Embedded Alerts client matrix

This repository publishes one Zed package with isolated language targets. Every client
shares the versioned `eal-interfaces` contracts and reusable `eal-libs` behavior.

Required client slices:

| Family | Directory |
| --- | --- |
| Gleam | `clients/gleam` |
| Erlang | `clients/erlang` |
| Elixir | `clients/elixir` |
| Dart / Flutter | `clients/dart` |
| Rust | `clients/rust` |
| Rust / WASM | `clients/wasm` |
| Java | `clients/java` |
| Go | `clients/go` |
| Python 3 | `clients/python` |
| Ruby | `clients/ruby` |
| PHP | `clients/php` |
| TypeScript / Node.js | `clients/typescript/nodejs` |
| TypeScript / Deno | `clients/typescript/deno` |
| TypeScript / Bun | `clients/typescript/bun` |
| TypeScript / edge runtimes | `clients/typescript/edge` |
| Kotlin Multiplatform | `clients/kotlin` |
| Swift | `clients/swift` |

Language packages may expose richer domain methods over time, but every slice must at
minimum provide a configurable base URL, authentication headers, and a generic request
boundary. Run `python3 scripts/validate-client-matrix.py` before publishing.
# Embedded Alerts client matrix

Every SDK exposes `health`, `ready`, `config`, `emitEvent`, `createLead`, `createAlert`, and a generic authenticated request primitive. Shared wire contracts and runtime-light behavior come from the sibling `eal-interfaces` and `eal-libs` Zed packages.

The TypeScript SDK has explicit Node.js, Deno, Bun, and edge-runtime entry points. Kotlin and Swift are included because alert acknowledgement, device enrollment, and field-operator workflows apply to Android and iOS clients.

`matrix.json` is validated in CI and prevents a language package, runtime entry point, or required Zed edge from silently disappearing.
