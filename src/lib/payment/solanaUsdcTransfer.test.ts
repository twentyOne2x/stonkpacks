import assert from "node:assert/strict";
import { test } from "node:test";

import {
  assertSupportedMintTokenProgram,
  CLASSIC_SPL_TOKEN_PROGRAM_ID,
  requireFinalizedTransactionConfirmation,
} from "./solanaUsdcTransfer";

const TOKEN_2022_PROGRAM_ID = "TokenzQdYc1i4pzqJF5ygW8oVNHWv4WJ5rqYmkEDJxZ2";

test("requires an error-free finalized confirmation before reporting success", async () => {
  const commitments: string[] = [];

  const status = await requireFinalizedTransactionConfirmation(async (commitment) => {
    commitments.push(commitment);
    return { value: { err: null } };
  });

  assert.equal(status, "finalized");
  assert.deepEqual(commitments, ["finalized"]);
});

test("rejects a finalized transaction whose result contains an instruction error", async () => {
  await assert.rejects(
    requireFinalizedTransactionConfirmation(async () => ({
      value: { err: { InstructionError: [0, "Custom"] } },
    })),
    /solana_transaction_failed/,
  );
});

test("accepts a classic SPL mint only when its on-chain owner matches the plan", async () => {
  const result = await assertSupportedMintTokenProgram({
    mint: "mint",
    plannedTokenProgramId: CLASSIC_SPL_TOKEN_PROGRAM_ID,
    readMintAccount: async () => ({ owner: { toBase58: () => CLASSIC_SPL_TOKEN_PROGRAM_ID } }),
  });

  assert.equal(result, CLASSIC_SPL_TOKEN_PROGRAM_ID);
});

test("rejects Token-2022 before constructing or sending a transfer", async () => {
  let readCalls = 0;

  await assert.rejects(
    assertSupportedMintTokenProgram({
      mint: "mint",
      plannedTokenProgramId: TOKEN_2022_PROGRAM_ID,
      readMintAccount: async () => {
        readCalls += 1;
        return { owner: { toBase58: () => TOKEN_2022_PROGRAM_ID } };
      },
    }),
    /unsupported_token_program/,
  );
  assert.equal(readCalls, 0);
});

test("rejects a mint whose on-chain owner disagrees with the planned token program", async () => {
  await assert.rejects(
    assertSupportedMintTokenProgram({
      mint: "mint",
      plannedTokenProgramId: CLASSIC_SPL_TOKEN_PROGRAM_ID,
      readMintAccount: async () => ({ owner: { toBase58: () => TOKEN_2022_PROGRAM_ID } }),
    }),
    /token_program_mint_owner_mismatch/,
  );
});

test("rejects a missing mint account", async () => {
  await assert.rejects(
    assertSupportedMintTokenProgram({
      mint: "mint",
      plannedTokenProgramId: CLASSIC_SPL_TOKEN_PROGRAM_ID,
      readMintAccount: async () => null,
    }),
    /mint_account_not_found/,
  );
});
