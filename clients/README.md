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
