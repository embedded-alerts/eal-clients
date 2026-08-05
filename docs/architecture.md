# Architecture

`eal-clients` contains generated and hand-written Embedded Alerts clients for supported application runtimes.

## Canonical package fleet

- `eal-interfaces` owns wire formats and generated contract types.
- `eal-libs` owns reusable, runtime-light domain behavior.
- `eal-clients` consumes versioned interfaces and exposes language-specific SDKs.
- `eal-sync` owns offline-first reconciliation boundaries.
- `eal-api` and the MASH, Leptos, and Dioxus web runtimes own deployment behavior.
- `eal-cli` composes clients, interfaces, and libraries for operator workflows.
- `eal-infra` owns deployment configuration.
- `eal-monorepo` coordinates pinned revisions without becoming a second package identity.

The long-name bootstrap repositories are historical aliases, not package sources. New dependencies must use the short `embedded-alerts/eal-*` coordinates.

## Zed and Git submodules

Prefer Zed for reusable dependency resolution. A repository retained as a Git submodule must have an explicit editable-workspace, inventory, embedded-source, experiment-reference, or legacy role. Do not represent the same repository as both a Zed dependency and a gitlink in one composition.

`zed overtake --git-submodules` imports each initialized submodule that declares its own `.zpkg.toml` into the root manifest and lockfile while retaining `.gitmodules` as a reversible transport mirror. Edge code is allowlisted and never a generic proxy.
