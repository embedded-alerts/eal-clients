# Embedded Alerts client matrix

Every SDK exposes `health`, `ready`, `config`, `emitEvent`, `createLead`, `createAlert`, and a generic authenticated request primitive. Shared wire contracts and runtime-light behavior come from the sibling `eal-interfaces` and `eal-libs` Zed packages.

The TypeScript SDK has explicit Node.js, Deno, Bun, and edge-runtime entry points. Kotlin and Swift are included because alert acknowledgement, device enrollment, and field-operator workflows apply to Android and iOS clients.

`matrix.json` is validated in CI and prevents a language package, runtime entry point, or required Zed edge from silently disappearing.
