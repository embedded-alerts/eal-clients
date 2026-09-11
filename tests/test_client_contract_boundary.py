"""Deterministic tests for public/private JSON Schema client boundaries."""

from __future__ import annotations

import json
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "scripts"
if str(SCRIPTS) not in sys.path:
    sys.path.insert(0, str(SCRIPTS))

from client_contract_boundary import (  # noqa: E402
    boundary_errors,
    client_directory_names,
    missing_core_targets,
    private_leak_canary,
)
from verify_client_contract import implementation_evidence  # noqa: E402

SURFACE_PATH = ROOT / "clients" / "api-surface.json"
CLIENTS_ROOT = ROOT / "clients"


class ClientContractBoundaryTest(unittest.TestCase):
    def setUp(self) -> None:
        self.surface = json.loads(SURFACE_PATH.read_text(encoding="utf-8"))

    def test_committed_public_surface_does_not_expose_private_symbols(self) -> None:
        self.assertEqual((), boundary_errors(self.surface))

    def test_private_reference_negative_canary_is_rejected(self) -> None:
        mutant = private_leak_canary(self.surface)
        self.assertTrue(boundary_errors(mutant))

    def test_polyglot_floor_and_core_runtimes(self) -> None:
        names = client_directory_names(
            tuple(
                path.name
                for path in CLIENTS_ROOT.iterdir()
                if path.is_dir()
            )
        )
        self.assertGreaterEqual(len(names), 15, names)
        self.assertEqual((), missing_core_targets(names), names)

    def test_implementation_evidence_ignores_test_directories_case_insensitively(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            source = root / "Sources" / "Client.swift"
            source.parent.mkdir(parents=True)
            source.write_text("public struct Client {}\n", encoding="utf-8")
            baseline = implementation_evidence(root)

            test_source = root / "Tests" / "ClientTests.swift"
            test_source.parent.mkdir(parents=True)
            test_source.write_text("import XCTest\n", encoding="utf-8")

            self.assertEqual((1, baseline[1]), implementation_evidence(root))


if __name__ == "__main__":
    unittest.main()
