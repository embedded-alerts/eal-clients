# embedded-alerts/eal-clients#12 — chore: nightly polyglot client hardening

head: automation/nightly-client-hardening  base: main  author: ORESoftware  updated: 2026-08-19T08:42:30Z
dir: /Users/maca5/codes/.claude-fleet/scratch/merge/embedded-alerts_eal-clients__12

## conflicted files
- .zpkg.toml
- clients/.api-surface.sha256
- clients/api-surface.json
- clients/c/.zed-api-surface.sha256
- clients/c/.zed-client-contract.json
- clients/client-api.schema.json
- clients/contract-manifest.json
- clients/cpp/.zed-api-surface.sha256
- clients/cpp/.zed-client-contract.json
- clients/dart/.zed-api-surface.sha256
- clients/dart/.zed-client-contract.json
- clients/elixir/.zed-api-surface.sha256
- clients/elixir/.zed-client-contract.json
- clients/erlang/.zed-api-surface.sha256
- clients/erlang/.zed-client-contract.json
- clients/gleam/.zed-api-surface.sha256
- clients/gleam/.zed-client-contract.json
- clients/golang/.zed-api-surface.sha256
- clients/golang/.zed-client-contract.json
- clients/java/.zed-api-surface.sha256
- clients/java/.zed-client-contract.json
- clients/kotlin/.zed-api-surface.sha256
- clients/kotlin/.zed-client-contract.json
- clients/php/.zed-api-surface.sha256
- clients/php/.zed-client-contract.json
- clients/python/.zed-api-surface.sha256
- clients/python/.zed-client-contract.json
- clients/ruby/.zed-api-surface.sha256
- clients/ruby/.zed-client-contract.json
- clients/rust/.zed-api-surface.sha256
- clients/rust/.zed-client-contract.json
- clients/swift/.zed-api-surface.sha256
- clients/swift/.zed-client-contract.json
- clients/typescript/.zed-contracts/nodejs/.zed-api-surface.sha256
- clients/typescript/.zed-contracts/nodejs/.zed-client-contract.json
- clients/typescript/bun/.zed-api-surface.sha256
- clients/typescript/bun/.zed-client-contract.json
- clients/typescript/deno/.zed-api-surface.sha256
- clients/typescript/deno/.zed-client-contract.json
- clients/typescript/edge/.zed-api-surface.sha256
- clients/typescript/edge/.zed-client-contract.json
- clients/wasm/.zed-api-surface.sha256
- clients/wasm/.zed-client-contract.json
- clients/zig/.zed-api-surface.sha256
- clients/zig/.zed-client-contract.json

## base (main) last 8 commits
c849ea7 feat(validation): consume public lib-core SDKs (#16)
09dd090 Merge branch 'agent/den-3580-canonical-client-schema' into main
4a89eb4 DEN-3580 Adopt the canonical JSON Schema client contract.
0b9ac95 Merge branch 'agent-sync/20260823/main' into main
e751a16 chore: ignore tmp/temp worktree scratch directories
dc22f67 Merge remote:agent/full-polyglot-client-matrix into main with semantic hunk reconciliation
6bd22c7 Merge remote:agent/polyglot-client-matrix-20260805 into main with semantic hunk reconciliation
abb100d Merge remote:agent/zed-dependency-graph-20260804 into main with canonical policy reconciliation

## head (automation/nightly-client-hardening) last 8 commits
7d8b825 feat: harden canonical polyglot client contract
dc22f67 Merge remote:agent/full-polyglot-client-matrix into main with semantic hunk reconciliation
6bd22c7 Merge remote:agent/polyglot-client-matrix-20260805 into main with semantic hunk reconciliation
abb100d Merge remote:agent/zed-dependency-graph-20260804 into main with canonical policy reconciliation
618199c Merge remote:agent/zed-dependency-graph into main with canonical policy reconciliation
d80503d Merge remote:agent/standardize-zed-client-matrix-20260805 into main
4baddfa chore: ignore generated client build caches
ed2972b Prefer primary branches and avoid agent worktrees

## merge-base: dc22f67a49250bf88f83f81a71b2deaf095dca8d

## PR diff stat (merge-base..head)
 clients/golang/.zed-api-surface.sha256             |   1 +
 clients/golang/.zed-client-contract.json           |  10 +
 clients/java/.zed-api-surface.sha256               |   1 +
 clients/java/.zed-client-contract.json             |  10 +
 clients/kotlin/.zed-api-surface.sha256             |   1 +
 clients/kotlin/.zed-client-contract.json           |  10 +
 clients/php/.zed-api-surface.sha256                |   1 +
 clients/php/.zed-client-contract.json              |  10 +
 clients/python/.zed-api-surface.sha256             |   1 +
 clients/python/.zed-client-contract.json           |  10 +
 clients/ruby/.zed-api-surface.sha256               |   1 +
 clients/ruby/.zed-client-contract.json             |  10 +
 clients/rust/.zed-api-surface.sha256               |   1 +
 clients/rust/.zed-client-contract.json             |  10 +
 clients/sdk-matrix.json                            | 109 ++++
 clients/swift/.zed-api-surface.sha256              |   1 +
 clients/swift/.zed-client-contract.json            |  10 +
 .../.zed-contracts/nodejs/.zed-api-surface.sha256  |   1 +
 .../nodejs/.zed-client-contract.json               |  10 +
 clients/typescript/bun/.zed-api-surface.sha256     |   1 +
 clients/typescript/bun/.zed-client-contract.json   |  10 +
 clients/typescript/deno/.zed-api-surface.sha256    |   1 +
 clients/typescript/deno/.zed-client-contract.json  |  10 +
 clients/typescript/edge/.zed-api-surface.sha256    |   1 +
 clients/typescript/edge/.zed-client-contract.json  |  10 +
 clients/wasm/.zed-api-surface.sha256               |   1 +
 clients/wasm/.zed-client-contract.json             |  10 +
 clients/zig/.zed-api-surface.sha256                |   1 +
 clients/zig/.zed-client-contract.json              |  10 +
 47 files changed, 1716 insertions(+), 30 deletions(-)

## base diff stat (merge-base..base)
 clients/typescript/bun/.zed-api-surface.sha256     |    1 +
 clients/typescript/bun/.zed-client-contract.json   |   10 +
 clients/typescript/deno/.zed-api-surface.sha256    |    1 +
 clients/typescript/deno/.zed-client-contract.json  |   10 +
 clients/typescript/edge/.zed-api-surface.sha256    |    1 +
 clients/typescript/edge/.zed-client-contract.json  |   10 +
 clients/wasm/.zed-api-surface.sha256               |    1 +
 clients/wasm/.zed-client-contract.json             |   10 +
 clients/zig/.zed-api-surface.sha256                |    1 +
 clients/zig/.zed-client-contract.json              |   10 +
 schemas/client-api.schema.json                     |  718 +++++++++
 scripts/check-validation-imports.py                |   11 +
 scripts/client_contract_boundary.py                |  123 ++
 scripts/harden_client_contract.py                  | 1573 ++++++++++++++++++++
 scripts/verify_client_contract.py                  |  279 ++++
 tests/test_client_contract_boundary.py             |   50 +
 validation-consumer/README.md                      |    5 +
 validation-consumer/gleam/gleam.toml               |    9 +
 .../gleam/src/eal_validation_consumer.gleam        |    4 +
 .../gleam/test/eal_validation_consumer_test.gleam  |   15 +
 validation-consumer/golang/consumer.go             |   12 +
 validation-consumer/golang/consumer_test.go        |   11 +
 validation-consumer/golang/go.mod                  |    7 +
 validation-consumer/rust/Cargo.toml                |   13 +
 validation-consumer/rust/src/lib.rs                |   23 +
 validation-consumer/typescript/package.json        |    9 +
 validation-consumer/typescript/src/index.ts        |   14 +
 .../typescript/test/consumer.test.ts               |   11 +
 validation-consumer/typescript/tsconfig.json       |   15 +
 73 files changed, 4873 insertions(+), 25 deletions(-)

## merge output
Auto-merging .zpkg.toml
CONFLICT (content): Merge conflict in .zpkg.toml
Auto-merging clients/.api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/.api-surface.sha256
Auto-merging clients/api-surface.json
CONFLICT (add/add): Merge conflict in clients/api-surface.json
Auto-merging clients/c/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/c/.zed-api-surface.sha256
Auto-merging clients/c/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/c/.zed-client-contract.json
Auto-merging clients/client-api.schema.json
CONFLICT (add/add): Merge conflict in clients/client-api.schema.json
Auto-merging clients/contract-manifest.json
CONFLICT (add/add): Merge conflict in clients/contract-manifest.json
Auto-merging clients/cpp/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/cpp/.zed-api-surface.sha256
Auto-merging clients/cpp/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/cpp/.zed-client-contract.json
Auto-merging clients/dart/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/dart/.zed-api-surface.sha256
Auto-merging clients/dart/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/dart/.zed-client-contract.json
Auto-merging clients/elixir/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/elixir/.zed-api-surface.sha256
Auto-merging clients/elixir/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/elixir/.zed-client-contract.json
Auto-merging clients/erlang/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/erlang/.zed-api-surface.sha256
Auto-merging clients/erlang/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/erlang/.zed-client-contract.json
Auto-merging clients/gleam/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/gleam/.zed-api-surface.sha256
Auto-merging clients/gleam/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/gleam/.zed-client-contract.json
Auto-merging clients/golang/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/golang/.zed-api-surface.sha256
Auto-merging clients/golang/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/golang/.zed-client-contract.json
Auto-merging clients/java/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/java/.zed-api-surface.sha256
Auto-merging clients/java/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/java/.zed-client-contract.json
Auto-merging clients/kotlin/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/kotlin/.zed-api-surface.sha256
Auto-merging clients/kotlin/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/kotlin/.zed-client-contract.json
Auto-merging clients/php/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/php/.zed-api-surface.sha256
Auto-merging clients/php/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/php/.zed-client-contract.json
Auto-merging clients/python/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/python/.zed-api-surface.sha256
Auto-merging clients/python/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/python/.zed-client-contract.json
Auto-merging clients/ruby/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/ruby/.zed-api-surface.sha256
Auto-merging clients/ruby/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/ruby/.zed-client-contract.json
Auto-merging clients/rust/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/rust/.zed-api-surface.sha256
Auto-merging clients/rust/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/rust/.zed-client-contract.json
Auto-merging clients/swift/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/swift/.zed-api-surface.sha256
Auto-merging clients/swift/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/swift/.zed-client-contract.json
Auto-merging clients/typescript/.zed-contracts/nodejs/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/typescript/.zed-contracts/nodejs/.zed-api-surface.sha256
Auto-merging clients/typescript/.zed-contracts/nodejs/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/typescript/.zed-contracts/nodejs/.zed-client-contract.json
Auto-merging clients/typescript/bun/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/typescript/bun/.zed-api-surface.sha256
Auto-merging clients/typescript/bun/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/typescript/bun/.zed-client-contract.json
Auto-merging clients/typescript/deno/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/typescript/deno/.zed-api-surface.sha256
Auto-merging clients/typescript/deno/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/typescript/deno/.zed-client-contract.json
Auto-merging clients/typescript/edge/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/typescript/edge/.zed-api-surface.sha256
Auto-merging clients/typescript/edge/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/typescript/edge/.zed-client-contract.json
Auto-merging clients/wasm/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/wasm/.zed-api-surface.sha256
Auto-merging clients/wasm/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/wasm/.zed-client-contract.json
Auto-merging clients/zig/.zed-api-surface.sha256
CONFLICT (add/add): Merge conflict in clients/zig/.zed-api-surface.sha256
Auto-merging clients/zig/.zed-client-contract.json
CONFLICT (add/add): Merge conflict in clients/zig/.zed-client-contract.json
Automatic merge failed; fix conflicts and then commit the result.
