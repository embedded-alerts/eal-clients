# Repository lineage: `embedded-alerts-clients`

This record preserves and semantically reconciles the complete reachable history of the
superseded repository
[`embedded-alerts/embedded-alerts-clients`](https://github.com/embedded-alerts/embedded-alerts-clients)
inside the canonical repository
[`embedded-alerts/eal-clients`](https://github.com/embedded-alerts/eal-clients).

The repositories have unrelated Git roots. Their histories are therefore combined by the
manual replay procedure in `ORESoftware/my-ai/AGENTS.md`: inspect both current trees and
commit histories, classify every source change, replay only still-needed behavior, preserve
immutable source identities, and never replace a stronger current implementation with an
older scaffold.

## Immutable heads reviewed

- Superseded source head: [`a4f80c3ec90d745c9f0aaa0fbca35f75e873c903`](https://github.com/embedded-alerts/embedded-alerts-clients/commit/a4f80c3ec90d745c9f0aaa0fbca35f75e873c903)
- Canonical base head: [`f58e3a578b34bb2e33859c07dd27dfcd40b6356a`](https://github.com/embedded-alerts/eal-clients/commit/f58e3a578b34bb2e33859c07dd27dfcd40b6356a)
- Earlier partial consolidation: [`eal-clients#5`](https://github.com/embedded-alerts/eal-clients/pull/5), merge commit [`635e3a578b34bb2e33859c07dd27dfcd40b6356a`](https://github.com/embedded-alerts/eal-clients/commit/635e3a578b34bb2e33859c07dd27dfcd40b6356a)
- Tracking: `DEN-1949` and [`agent-pontifex/.github#22`](https://github.com/agent-pontifex/.github/issues/22)

The earlier consolidation correctly moved durable agent and architecture guidance, but the
long-name repository continued to receive automation and client-hardening commits afterward.
This replay closes that gap at the exact source head above.

## Complete reachable source history

The source head contains the following 24 reachable commits, newest first. Merge commits are
listed because they preserve reviewed provenance even when their effective tree changes are
also represented by a parent commit.

| Commit | Subject | Manual replay classification |
| --- | --- | --- |
| `a4f80c3ec90d745c9f0aaa0fbca35f75e873c903` | Merge PR #6: nightly polyglot client hardening | Already landed semantically in canonical PR #12; source tree remains a weaker long-name variant. |
| `15144cb20a67bd4777d08efe0781d468cd6feaa3` | Reconcile nightly hardening with source main | Already landed semantically; canonical reconciliation retained the larger client matrix. |
| `b427855bc173aab5776a85dbef9ad0f07493a680` | Adopt Ores source policy v2 | Still needed; replay final pinned workflow. |
| `ca5f548ebc43186b03bc76ded41374d3b7b80c03` | Merge commit-embeddings PR | Provenance for still-needed commit-embeddings workflow. |
| `c33c3ccdfd79e84f04d3f542c0cbc83753c001ac` | Merge canonical JSON Schema contract PR | Already landed semantically in canonical PR #15/#16 and later hardening. |
| `9acb70a3e4a8d1cbb4e3004bed0bc9ad74f1f4d7` | Adopt canonical JSON Schema client contract | Already landed; current shared schema blob is byte-identical. |
| `fec33151dc229efa85a653252390b26b50ebfdfb` | Use local commit embeddings | Still needed; replay final credential-minimized workflow state. |
| `b74436f461ddb8209ef50bf2afebec2e6e175582` | Generate commit embeddings after pushes | Still needed, as amended by `fec3315`. |
| `1292ea9f18b4daf8a97719ce4e26f435835f8ebb` | Update pre-build source policy pin | Superseded by the final immutable pin, replayed once. |
| `bf6f80b7bb862ad223f9d2bae30534de5414b044` | Update pre-build source policy pin | Superseded by the final immutable pin. |
| `fed691d02b8f98b43c43b698f41e24c695f776d1` | Update pre-build source policy pin | Superseded by the final immutable pin. |
| `2c232de364b8d28bf82a10bddeca5cff7449d03a` | Update pre-build source policy pin | Superseded by the final immutable pin. |
| `00d313cbda300c056d05cd3e33adae12fce8c2d1` | Add pre-build JS and Rust source lint | Still-needed intent; replay final v2 workflow rather than obsolete intermediate pins. |
| `26b28f764ccdb774b7f0924c77d91ce215b4102d` | Harden canonical polyglot client contract | Already landed semantically; three hardening scripts and their boundary test are byte-identical. |
| `c0d2c8d2795d354bda5c94e65142de243c3304b4` | Merge source main | Merge-only provenance; no independently required current behavior. |
| `59c54728c7528035178536d790b272598014d348` | Ignore tmp/temp worktree scratch directories | Already landed in the canonical `.gitignore`, which is a strict superset. |
| `406da1a132dbc0dcec6aecff56b47f60225da856` | Merge Zed dependency graph branch | Already landed with canonical short-name coordinates and a stronger target matrix. |
| `baa37bb4ba8ac769aad07899df2fbb455a21389e` | Prefer primary branches and avoid agent worktrees | Durable guidance already landed through canonical AGENTS/architecture documentation and fleet policy. |
| `efe53710a92d8f7a15e3e97aec5a1da38edda404` | Retire superseded long-name Zed identity | Intent remains authoritative; the old repository must not publish or resolve as a package. |
| `e48bd8838602d56ca4f63e55b28789c45292a1e0` | Normalize Zed interface installation | Already landed with canonical `.vendor/.zed` and short-name package coordinates. |
| `d6351575e9963dab607059b47a22f71a2f404993` | Wire interfaces Zed dependency | Already landed and expanded in canonical `.zpkg.toml`. |
| `d9cdb5f5e901aa5ab20fd296b47d94f863bb0b9c` | Add interfaces Zed dependency | Already landed and expanded. |
| `49c41920de7880d76a1512c9a3e7c7cac4eb6509` | Bootstrap generated and handwritten clients | Translated into the canonical implementation; do not copy the older long-name source tree over it. |
| `77aa12c04dc25c634c6a84b82d252efec43064f0` | Initial commit | Historical provenance only. |

## Current-tree reconciliation

### Byte-identical evidence already present

The following source artifacts have exactly the same Git blob or tree identity at both
reviewed heads and therefore require no replay:

- `schemas/` tree: `af332cad8de0dbc7b2f275a77637594c31a443c8`
- `.github/workflows/client-api-contract.yml`: `aa64ae6c43e3fc69fb871550a0c655c7b8d249ff`
- `scripts/client_contract_boundary.py`: `99695e8cf9731985ef56fb3b8214c553a8dc7132`
- `scripts/harden_client_contract.py`: `891a53e0fa8b2828897db2669cb365eae610f872`
- `scripts/verify_client_contract.py`: `130048dc6e253b41c6c067e9819356cf229791e3`
- `tests/test_client_contract_boundary.py`: `b12314957ed982f35d120071915c761ba92fd314`

### Canonical implementation is the semantic superset

The canonical repository has the maintained package identity, private-package publication,
OpenAPI source, public validation adapters, generated contract evidence, language aliases,
more complete tests, and the larger client matrix. The old tree uses long-name package and
symbol identities and carries smaller or older generated manifests. Copying it wholesale
would regress reviewed work and revive a competing package identity.

Accordingly, differences under `clients/`, `.zpkg.toml`, `.zed/operation.lock`, `README.md`,
`AGENTS.md`, `docs/architecture.md`, and the old `ci.yml` are classified as already landed,
translated, or obsolete—not as files to overwrite.

### Still-needed behavior replayed by this migration

Two final-state workflows existed only in the superseded tree and remain valid for the
canonical repository:

1. `.github/workflows/commit-embeddings.yml`, final source blob
   `abd2c454cdb1612523361097a9ab478ff5c50b6d`, using the credential-minimized local feature
   hashing action at immutable commit `453974465371d21ffb59ae2a125f5a04404720db`;
2. `.github/workflows/source-policy-lint.yml`, final source blob
   `211072554d4bf402950e03cdf37489f681e1120e`, calling the reusable Ores source-policy
   workflow at immutable commit `34a36017bfa4da0a820f4a82f8d206958296ebbb`.

Both workflows use `github.repository`, so replaying their final state in `eal-clients`
correctly changes the execution target without carrying the obsolete repository name.

### Deliberately not replayed

- `project.json` names `embedded-alerts-clients`, describes a bootstrap-era reduced file
  inventory, and points to `scripts/verify_repo.py`; prior canonical PR #5 already classified
  it as obsolete metadata.
- `scripts/verify_repo.py` validates that obsolete bootstrap manifest rather than the current
  contract, matrix, and package gates.
- The long-name `.zpkg.toml` would revive a competing package identity and conflicts with the
  repository's own deprecation contract.
- Long-name client source and generated fingerprints are not copied because the canonical
  tree is newer, broader, and independently validated; shared durable hardening artifacts
  are already byte-identical as documented above.

## Result

After this replay, all durable and still-applicable source behavior is represented in the
canonical repository, every source commit remains addressable through its immutable link,
and the old repository can remain present solely as a deprecated historical waypoint. No
source repository is deleted, no history is rewritten, and no canonical implementation is
replaced by an older duplicate.
