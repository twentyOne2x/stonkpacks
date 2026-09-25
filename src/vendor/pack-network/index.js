// Vendored from attn-packs packages/pack-network (see PROVENANCE.md). This file is a
// generated, tree-shaken bundle of only the response schemas, parsers and client-side
// quote and receipt checks that the STONKPACKS pages import: the same code the live
// site ships to every browser. Do not edit by hand; regenerate from the source commit.
// canonical.ts
import { sha256 } from "@noble/hashes/sha2.js";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils.js";
var encoder = new TextEncoder();
var HEX_DIGEST = /^[0-9a-f]{64}$/u;
function fail(path, reason) {
  throw new Error(`pack_network_canonical_json_${reason}:${path}`);
}
function assertUnicodeScalarText(value, path) {
  for (let index = 0; index < value.length; index += 1) {
    const codeUnit = value.charCodeAt(index);
    if (codeUnit >= 55296 && codeUnit <= 56319) {
      if (index + 1 >= value.length) fail(path, "unpaired_high_surrogate");
      const next = value.charCodeAt(index + 1);
      if (next < 56320 || next > 57343) fail(path, "unpaired_high_surrogate");
      index += 1;
    } else if (codeUnit >= 56320 && codeUnit <= 57343) {
      fail(path, "unpaired_low_surrogate");
    }
  }
}
function canonicalJsonAt(value, path) {
  if (value === null) return "null";
  if (typeof value === "string") {
    assertUnicodeScalarText(value, path);
    return JSON.stringify(value);
  }
  if (typeof value === "boolean") {
    return JSON.stringify(value);
  }
  if (typeof value === "number") {
    if (!Number.isSafeInteger(value)) fail(path, "non_integer_number");
    if (Object.is(value, -0)) fail(path, "negative_zero");
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    const rows = [];
    for (let index = 0; index < value.length; index += 1) {
      if (!Object.hasOwn(value, index)) fail(`${path}[${index}]`, "sparse_array");
      rows.push(canonicalJsonAt(value[index], `${path}[${index}]`));
    }
    return `[${rows.join(",")}]`;
  }
  if (typeof value !== "object") fail(path, `unsupported_${typeof value}`);
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) {
    fail(path, "non_plain_object");
  }
  const keys = Object.keys(value);
  if (Reflect.ownKeys(value).length !== keys.length) fail(path, "hidden_or_symbol_key");
  const record = value;
  return `{${keys.sort().map((key) => {
    assertUnicodeScalarText(key, `${path}.<key>`);
    if (record[key] === void 0) fail(`${path}.${key}`, "undefined");
    return `${JSON.stringify(key)}:${canonicalJsonAt(record[key], `${path}.${key}`)}`;
  }).join(",")}}`;
}
function canonicalJson(value) {
  return canonicalJsonAt(value, "$");
}
function sha256Hex(value) {
  return bytesToHex(sha256(typeof value === "string" ? encoder.encode(value) : value));
}
function canonicalDigest(value) {
  return sha256Hex(canonicalJson(value));
}
function stripDisplayMetadataFromChainAssets(value) {
  if (Array.isArray(value)) return value.map(stripDisplayMetadataFromChainAssets);
  if (value === null || typeof value !== "object") return value;
  const record = value;
  const isChainAsset = record.schema === "attn.packNetwork.chainAsset.v1";
  return Object.fromEntries(
    Object.entries(record).filter(([key]) => !isChainAsset || key !== "displayMetadata").map(([key, item]) => [key, stripDisplayMetadataFromChainAssets(item)])
  );
}
function authorizationMaterial(value) {
  canonicalJson(value);
  return stripDisplayMetadataFromChainAssets(value);
}
function canonicalAuthorizationDigest(value) {
  return canonicalDigest(authorizationMaterial(value));
}
function inventoryRootDigest(lots) {
  return canonicalAuthorizationDigest({
    schema: "attn.packNetwork.inventoryRoot.v1",
    lots
  });
}
function lotRecipeEligibilityDigest(lot, recipe) {
  return canonicalAuthorizationDigest({
    schema: "attn.packNetwork.recipeEligibility.v1",
    lotId: lot.lotId,
    positionId: lot.positionId,
    positionTermsDigest: lot.positionTermsDigest,
    marketId: lot.marketId,
    assetIdentityDigest: lot.asset.identityDigest,
    exactAssetAmount: lot.exactAssetAmount,
    floorStatus: lot.floorStatus,
    riskAdjustedFloorQuoteUnits: lot.riskAdjustedFloorQuoteUnits,
    quoteId: lot.quoteId,
    quoteIssuedAt: lot.quoteIssuedAt,
    quoteExpiresAt: lot.quoteExpiresAt,
    selectionWeight: lot.selectionWeight,
    recipeVersion: recipe.recipeVersion,
    recipeTermsDigest: recipe.termsDigest,
    packDenominationId: recipe.packDenominationId
  });
}
function ownerActorBindingReceiptDigest(position) {
  return canonicalAuthorizationDigest({
    schema: "attn.packNetwork.ownerActorBinding.v1",
    actorDirectoryId: position.actorDirectoryId,
    marketId: position.marketId,
    actorId: position.ownerActorId,
    namespace: position.asset.namespace,
    chainId: position.asset.chainId,
    ownerWallet: position.ownerWallet
  });
}
function assetCreatorActorBindingReceiptDigest(position) {
  return canonicalAuthorizationDigest({
    schema: "attn.packNetwork.assetCreatorActorBinding.v1",
    actorDirectoryId: position.actorDirectoryId,
    marketId: position.marketId,
    actorId: position.assetCreatorActorId,
    assetIdentityDigest: position.asset.identityDigest
  });
}
function canonicalAuthorizationDigestWithoutFields(value, omittedFields) {
  canonicalJson(value);
  const omitted = new Set(omittedFields);
  const material = Object.fromEntries(
    Object.entries(value).filter(([key]) => !omitted.has(key))
  );
  return canonicalAuthorizationDigest(material);
}
function assertCanonicalDigestField(value, digestField) {
  const actual = value[digestField];
  if (typeof actual !== "string" || !HEX_DIGEST.test(actual)) {
    throw new Error(`pack_network_digest_field_invalid:${digestField}`);
  }
  const expected = canonicalAuthorizationDigestWithoutFields(value, [digestField]);
  if (actual !== expected) {
    throw new Error(`pack_network_digest_mismatch:${digestField}`);
  }
}
function assertProjectedAuthorizationDigest(value, digestField, omittedFields) {
  const actual = value[digestField];
  if (typeof actual !== "string" || !HEX_DIGEST.test(actual)) {
    throw new Error(`pack_network_digest_field_invalid:${digestField}`);
  }
  const expected = canonicalAuthorizationDigestWithoutFields(value, omittedFields);
  if (actual !== expected) throw new Error(`pack_network_digest_mismatch:${digestField}`);
}
var POSITION_TERMS_OMITTED_FIELDS = ["exactAvailableAmount", "state", "termsDigest"];
var RECIPE_TERMS_OMITTED_FIELDS = ["status", "termsDigest"];
var OPEN_REQUEST_INTENT_OMITTED_FIELDS = [
  "acceptanceReceiptDigest",
  "acceptedAt",
  "originTransactionId",
  "recipeStatusAtAcceptance",
  "requestDigest",
  "state"
];
function assertPositionTermsDigest(position) {
  assertProjectedAuthorizationDigest(
    position,
    "termsDigest",
    POSITION_TERMS_OMITTED_FIELDS
  );
}
function assertRecipeTermsDigest(recipe) {
  assertProjectedAuthorizationDigest(
    recipe,
    "termsDigest",
    RECIPE_TERMS_OMITTED_FIELDS
  );
}
function assertOpenRequestIntentDigest(request) {
  assertProjectedAuthorizationDigest(
    request,
    "requestDigest",
    OPEN_REQUEST_INTENT_OMITTED_FIELDS
  );
}
function chainAssetIdentityMaterial(asset) {
  return Object.freeze({
    schema: asset.schema,
    namespace: asset.namespace,
    chainId: asset.chainId,
    assetAddress: asset.assetAddress,
    assetStandard: asset.assetStandard,
    decimals: asset.decimals
  });
}
function chainAssetIdentityDigest(asset) {
  return canonicalDigest(chainAssetIdentityMaterial(asset));
}
function assertChainAssetIdentity(asset) {
  canonicalJson(asset);
  if (asset.identityDigest !== chainAssetIdentityDigest(asset)) {
    throw new Error("pack_network_chain_asset_identity_mismatch");
  }
}

// stockPacks.ts
import * as z2 from "zod/v4";

// schemas.ts
import * as z from "zod/v4";
var CanonicalUintSchema = z.string().regex(/^(?:0|[1-9][0-9]*)$/u);
var CanonicalPositiveUintSchema = z.string().regex(/^[1-9][0-9]*$/u);
var HexDigestSchema = z.string().regex(/^[0-9a-f]{64}$/u);
var ShareBasisPointsSchema = z.number().int().min(0).max(1e4);
var ExtendedBasisPointsSchema = z.number().int().min(0).max(1e6);
var IsoTimestampSchema = z.iso.datetime({ offset: false, precision: 3 });
var IdentifierSchema = z.string().min(1).max(256).regex(/^[^\u0000-\u001f\u007f]+$/u);
var AddressSchema = z.string().min(1).max(512).regex(/^\S+$/u);
var SolanaAddressTextSchema = z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/u);
var SOLANA_BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function base58DecodedLength(value) {
  if (!/^[1-9A-HJ-NP-Za-km-z]+$/u.test(value)) return null;
  let decoded = 0n;
  for (const character of value) {
    const digit = SOLANA_BASE58_ALPHABET.indexOf(character);
    if (digit < 0) return null;
    decoded = decoded * 58n + BigInt(digit);
  }
  let decodedBytes = 0;
  while (decoded > 0n) {
    decodedBytes += 1;
    decoded >>= 8n;
  }
  const leadingZeroBytes = value.match(/^1*/u)?.[0].length ?? 0;
  return leadingZeroBytes + decodedBytes;
}
function isCanonicalSolanaPublicKey(address) {
  return address.length >= 32 && address.length <= 44 && base58DecodedLength(address) === 32;
}
var SolanaPublicKeySchema = SolanaAddressTextSchema.refine(isCanonicalSolanaPublicKey, {
  message: "solana_public_key_not_32_bytes"
});
var SolanaAssetAddressSchema = z.union([z.literal("native"), SolanaPublicKeySchema]);
var Eip155AssetAddressSchema = z.string().regex(/^(?:native|0x[0-9a-f]{40})$/u);
var Eip155AccountAddressSchema = z.string().regex(/^0x[0-9a-f]{40}$/u);
function isStrictlyLexicographicallySorted(values) {
  return values.every((value, index) => index === 0 || (values[index - 1] ?? "") < value);
}
var PackNetworkChainIdV1Schema = z.enum([
  "solana:mainnet-beta",
  "solana:devnet",
  "eip155:4663",
  "eip155:46630"
]);
function isCanonicalAccountAddressForChain(address, chainId) {
  if (chainId.startsWith("solana:")) return isCanonicalSolanaPublicKey(address);
  if (chainId.startsWith("eip155:")) return Eip155AccountAddressSchema.safeParse(address).success;
  return false;
}
function isCanonicalTransactionIdForChain(transactionId, chainId) {
  if (chainId.startsWith("solana:")) {
    return transactionId.length >= 64 && transactionId.length <= 88 && base58DecodedLength(transactionId) === 64;
  }
  if (chainId.startsWith("eip155:")) return /^0x[0-9a-f]{64}$/u.test(transactionId);
  return false;
}
function isCanonicalBlockHashForChain(blockHash, chainId) {
  if (chainId.startsWith("solana:")) return isCanonicalSolanaPublicKey(blockHash);
  if (chainId.startsWith("eip155:")) return /^0x[0-9a-f]{64}$/u.test(blockHash);
  return false;
}
var ChainAssetDisplayMetadataSchema = z.object({
  symbol: z.string().min(1).max(32).optional(),
  name: z.string().min(1).max(128).optional(),
  imageUrl: z.string().min(1).max(2048).optional()
}).strict();
var chainAssetCommon = {
  schema: z.literal("attn.packNetwork.chainAsset.v1"),
  assetAddress: AddressSchema,
  decimals: z.number().int().min(0).max(255),
  identityDigest: HexDigestSchema,
  displayMetadata: ChainAssetDisplayMetadataSchema.optional()
};
var SolanaChainAssetV1Schema = z.object({
  ...chainAssetCommon,
  namespace: z.literal("solana"),
  chainId: z.enum(["solana:mainnet-beta", "solana:devnet"]),
  assetAddress: SolanaAssetAddressSchema,
  assetStandard: z.enum(["native", "spl_token", "token_2022"])
}).strict().superRefine((value, context) => {
  if (value.assetStandard === "native" !== (value.assetAddress === "native")) {
    context.addIssue({ code: "custom", message: "solana_native_asset_address_mismatch" });
  }
});
var Eip155ChainAssetV1Schema = z.object({
  ...chainAssetCommon,
  namespace: z.literal("eip155"),
  chainId: z.enum(["eip155:4663", "eip155:46630"]),
  assetAddress: Eip155AssetAddressSchema,
  assetStandard: z.enum(["native", "erc20"])
}).strict().superRefine((value, context) => {
  if (value.assetStandard === "native" !== (value.assetAddress === "native")) {
    context.addIssue({ code: "custom", message: "eip155_native_asset_address_mismatch" });
  }
});
var ChainAssetV1Schema = z.discriminatedUnion("namespace", [
  SolanaChainAssetV1Schema,
  Eip155ChainAssetV1Schema
]);
var PackInventoryModeV1Schema = z.enum([
  "sponsored",
  "protocol_owned",
  "market_backed_consignment",
  "self_backed_standing_bid",
  "launch_allocation"
]);
var PackSettlementChoiceKindV1Schema = z.enum([
  "keep_asset",
  "instant_sell",
  "standing_bid",
  "arena_commit"
]);
var PackInventoryPositionV1Schema = z.object({
  schema: z.literal("attn.packNetwork.inventoryPosition.v1"),
  positionId: IdentifierSchema,
  marketId: IdentifierSchema,
  actorDirectoryId: IdentifierSchema,
  ownerActorId: IdentifierSchema,
  assetCreatorActorId: IdentifierSchema,
  ownerActorBindingReceiptDigest: HexDigestSchema,
  assetCreatorActorBindingReceiptDigest: HexDigestSchema,
  ownerWallet: AddressSchema,
  beneficiaryWallet: AddressSchema,
  asset: ChainAssetV1Schema,
  exactDepositedAmount: CanonicalUintSchema,
  exactAvailableAmount: CanonicalUintSchema,
  mode: PackInventoryModeV1Schema,
  custodyAddress: AddressSchema,
  quoteAsset: ChainAssetV1Schema,
  backingAmount: CanonicalUintSchema.nullable(),
  externalMarketPolicyId: IdentifierSchema.nullable(),
  minimumSettlementAmount: CanonicalUintSchema,
  minimumActiveUntil: IsoTimestampSchema,
  withdrawalDelaySeconds: CanonicalUintSchema,
  maximumLotAmount: CanonicalPositiveUintSchema,
  admittedPackDenominationIds: z.array(IdentifierSchema).min(1).max(64),
  creatorFeeBps: ShareBasisPointsSchema,
  protocolFeeBps: ShareBasisPointsSchema,
  chaseFeeBps: ShareBasisPointsSchema,
  termsDigest: HexDigestSchema,
  state: z.enum([
    "draft",
    "funding_prepared",
    "funded",
    "validating",
    "active",
    "partially_reserved",
    "draining",
    "withdrawn",
    "exhausted",
    "blocked"
  ])
}).strict().superRefine((value, context) => {
  if (BigInt(value.exactAvailableAmount) > BigInt(value.exactDepositedAmount)) {
    context.addIssue({ code: "custom", message: "available_amount_exceeds_deposit" });
  }
  if (value.creatorFeeBps + value.protocolFeeBps + value.chaseFeeBps > 1e4) {
    context.addIssue({ code: "custom", message: "position_fees_exceed_10000_bps" });
  }
  if (new Set(value.admittedPackDenominationIds).size !== value.admittedPackDenominationIds.length) {
    context.addIssue({ code: "custom", message: "duplicate_pack_denomination" });
  }
  if (!isStrictlyLexicographicallySorted(value.admittedPackDenominationIds)) {
    context.addIssue({ code: "custom", message: "pack_denominations_not_canonically_ordered" });
  }
  if (BigInt(value.maximumLotAmount) > BigInt(value.exactDepositedAmount)) {
    context.addIssue({ code: "custom", message: "maximum_lot_exceeds_deposit" });
  }
  if (value.asset.chainId !== value.quoteAsset.chainId) {
    context.addIssue({ code: "custom", message: "position_asset_chain_mismatch" });
  }
  for (const [field, address] of [
    ["ownerWallet", value.ownerWallet],
    ["beneficiaryWallet", value.beneficiaryWallet],
    ["custodyAddress", value.custodyAddress]
  ]) {
    if (!isCanonicalAccountAddressForChain(address, value.asset.chainId)) {
      context.addIssue({ code: "custom", message: `position_${field}_chain_mismatch`, path: [field] });
    }
  }
});
var PackInventoryLotV1Schema = z.object({
  schema: z.literal("attn.packNetwork.inventoryLot.v1"),
  lotId: IdentifierSchema,
  /** Immutable round target this lot resizes; absent on tables published before targets were stamped. */
  targetId: IdentifierSchema.optional(),
  positionId: IdentifierSchema,
  positionTermsDigest: HexDigestSchema,
  marketId: IdentifierSchema,
  asset: ChainAssetV1Schema,
  exactAssetAmount: CanonicalPositiveUintSchema,
  referenceMarketValueQuoteUnits: CanonicalUintSchema.nullable(),
  riskAdjustedFloorQuoteUnits: CanonicalUintSchema,
  floorStatus: z.enum(["guaranteed", "reserved_quote", "indicative", "none"]),
  quoteId: IdentifierSchema.nullable(),
  quoteIssuedAt: IsoTimestampSchema.nullable(),
  quoteExpiresAt: IsoTimestampSchema.nullable(),
  selectionWeight: CanonicalPositiveUintSchema,
  recipeEligibilityDigest: HexDigestSchema,
  state: z.enum(["available", "reserved", "selected", "released", "settling", "terminal"])
}).strict().superRefine((value, context) => {
  const quoteFields = [value.quoteId, value.quoteIssuedAt, value.quoteExpiresAt];
  const populated = quoteFields.filter((field) => field !== null).length;
  if (populated !== 0 && populated !== quoteFields.length) {
    context.addIssue({ code: "custom", message: "lot_quote_context_incomplete" });
  }
  if (value.floorStatus === "none" !== (populated === 0)) {
    context.addIssue({ code: "custom", message: "lot_quote_context_floor_status_mismatch" });
  }
  if (value.quoteIssuedAt && value.quoteExpiresAt && Date.parse(value.quoteExpiresAt) <= Date.parse(value.quoteIssuedAt)) {
    context.addIssue({ code: "custom", message: "lot_quote_expiry_not_after_issue" });
  }
  if (value.floorStatus === "none" && value.riskAdjustedFloorQuoteUnits !== "0") {
    context.addIssue({ code: "custom", message: "floor_none_must_be_zero" });
  }
});
var PackRecipeV1Schema = z.object({
  schema: z.literal("attn.packNetwork.recipe.v1"),
  marketId: IdentifierSchema,
  recipeVersion: IdentifierSchema,
  actorDirectoryId: IdentifierSchema,
  creatorActorId: IdentifierSchema,
  creatorBeneficiaryWallet: AddressSchema,
  protocolBeneficiaryWallet: AddressSchema,
  chaseBeneficiaryWallet: AddressSchema,
  settlementChainId: PackNetworkChainIdV1Schema,
  quoteAsset: ChainAssetV1Schema,
  packDenominationId: IdentifierSchema,
  exactPackPrincipalQuoteUnits: CanonicalPositiveUintSchema,
  evaluationProfile: z.literal("sponsor_funded_delivery_v1").optional(),
  admittedInventoryModes: z.array(PackInventoryModeV1Schema).min(1).max(5),
  minimumInventoryPositions: CanonicalPositiveUintSchema,
  minimumExpectedFloorBps: ExtendedBasisPointsSchema,
  maximumAssetConcentrationBps: ShareBasisPointsSchema,
  maximumCreatorConcentrationBps: ShareBasisPointsSchema,
  maximumLpConcentrationBps: ShareBasisPointsSchema,
  maximumSingleOutcomeQuoteUnits: CanonicalPositiveUintSchema,
  maximumInstantSellPriceImpactBps: ShareBasisPointsSchema,
  maximumQuoteAgeMs: CanonicalPositiveUintSchema,
  allowedSettlementChoices: z.array(PackSettlementChoiceKindV1Schema).min(1).max(4),
  weightCurve: z.enum(["equal_lots", "creator_table"]),
  creatorWeightTableDigest: HexDigestSchema.nullable(),
  protocolFeeBps: ShareBasisPointsSchema,
  creatorFeeBps: ShareBasisPointsSchema,
  chaseFeeBps: ShareBasisPointsSchema,
  rewardCampaignIds: z.array(IdentifierSchema).max(64),
  randomnessPolicyId: IdentifierSchema,
  requestQueuePolicyId: IdentifierSchema,
  status: z.enum(["draft", "simulated", "sealed", "scheduled", "active", "paused", "closed"]),
  termsDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  if (value.evaluationProfile === "sponsor_funded_delivery_v1" && (value.minimumExpectedFloorBps !== 0 || value.maximumAssetConcentrationBps !== 1e4 || value.maximumCreatorConcentrationBps !== 1e4 || value.maximumLpConcentrationBps !== 1e4)) {
    context.addIssue({ code: "custom", message: "sponsor_delivery_profile_disclosure_mismatch" });
  }
  if (new Set(value.admittedInventoryModes).size !== value.admittedInventoryModes.length) {
    context.addIssue({ code: "custom", message: "duplicate_inventory_mode" });
  }
  if (new Set(value.rewardCampaignIds).size !== value.rewardCampaignIds.length) {
    context.addIssue({ code: "custom", message: "duplicate_reward_campaign" });
  }
  if (new Set(value.allowedSettlementChoices).size !== value.allowedSettlementChoices.length) {
    context.addIssue({ code: "custom", message: "duplicate_settlement_choice" });
  }
  for (const [field, values] of [
    ["admittedInventoryModes", value.admittedInventoryModes],
    ["allowedSettlementChoices", value.allowedSettlementChoices],
    ["rewardCampaignIds", value.rewardCampaignIds]
  ]) {
    if (!isStrictlyLexicographicallySorted(values)) {
      context.addIssue({ code: "custom", message: `recipe_${field}_not_canonically_ordered`, path: [field] });
    }
  }
  if (value.protocolFeeBps + value.creatorFeeBps + value.chaseFeeBps > 1e4) {
    context.addIssue({ code: "custom", message: "recipe_fees_exceed_10000_bps" });
  }
  if (value.weightCurve === "creator_table" !== (value.creatorWeightTableDigest !== null)) {
    context.addIssue({ code: "custom", message: "creator_weight_table_digest_mismatch" });
  }
  if (value.settlementChainId !== value.quoteAsset.chainId) {
    context.addIssue({ code: "custom", message: "recipe_settlement_chain_mismatch" });
  }
  for (const [field, address] of [
    ["creatorBeneficiaryWallet", value.creatorBeneficiaryWallet],
    ["protocolBeneficiaryWallet", value.protocolBeneficiaryWallet],
    ["chaseBeneficiaryWallet", value.chaseBeneficiaryWallet]
  ]) {
    if (!isCanonicalAccountAddressForChain(address, value.settlementChainId)) {
      context.addIssue({ code: "custom", message: `recipe_${field}_chain_mismatch`, path: [field] });
    }
  }
});
var PackSponsorDeliveryReservationV1Schema = z.object({
  schema: z.literal("attn.packNetwork.sponsorDeliveryReservation.v1"),
  maximumConcurrentOrders: CanonicalPositiveUintSchema,
  positionStateRoot: HexDigestSchema,
  positions: z.array(z.object({
    positionId: IdentifierSchema,
    positionTermsDigest: HexDigestSchema,
    maximumPerOrderAssetAmount: CanonicalPositiveUintSchema,
    reservedForConcurrentOrdersAssetAmount: CanonicalPositiveUintSchema,
    availableAtSealAssetAmount: CanonicalPositiveUintSchema,
    reservationReceiptDigest: HexDigestSchema
  }).strict()).min(1),
  reservationPlanDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  if (!isStrictlyLexicographicallySorted(value.positions.map((position) => position.positionId))) {
    context.addIssue({ code: "custom", message: "sponsor_reservation_positions_not_canonically_ordered" });
  }
  if (!CanonicalPositiveUintSchema.safeParse(value.maximumConcurrentOrders).success) return;
  for (const position of value.positions) {
    if (![
      position.maximumPerOrderAssetAmount,
      position.reservedForConcurrentOrdersAssetAmount,
      position.availableAtSealAssetAmount
    ].every((amount) => CanonicalPositiveUintSchema.safeParse(amount).success)) continue;
    const reserved = BigInt(position.reservedForConcurrentOrdersAssetAmount);
    if (reserved !== BigInt(position.maximumPerOrderAssetAmount) * BigInt(value.maximumConcurrentOrders) || reserved > BigInt(position.availableAtSealAssetAmount)) {
      context.addIssue({ code: "custom", message: "sponsor_reservation_concurrent_capacity_mismatch" });
    }
  }
});
var PackSnapshotV1Schema = z.object({
  schema: z.literal("attn.packNetwork.snapshot.v1"),
  snapshotId: IdentifierSchema,
  marketId: IdentifierSchema,
  recipeVersion: IdentifierSchema,
  recipeTermsDigest: HexDigestSchema,
  requestSequence: CanonicalUintSchema,
  positionStateRoot: HexDigestSchema,
  inventoryRoot: HexDigestSchema,
  lotCount: CanonicalPositiveUintSchema,
  totalSelectionWeight: CanonicalPositiveUintSchema,
  expectedReferenceValueQuoteUnits: CanonicalUintSchema.nullable(),
  expectedRiskAdjustedFloorQuoteUnits: CanonicalUintSchema,
  worstCaseSettlementLiabilityQuoteUnits: CanonicalUintSchema,
  reservedQuoteLiquidityQuoteUnits: CanonicalUintSchema,
  solvencyCoverageBps: ExtendedBasisPointsSchema,
  sponsorDeliveryReservation: PackSponsorDeliveryReservationV1Schema.optional(),
  quoteContext: z.object({
    issuedAt: IsoTimestampSchema,
    validUntil: IsoTimestampSchema,
    chainId: PackNetworkChainIdV1Schema,
    blockHeight: CanonicalUintSchema,
    blockHash: IdentifierSchema
  }).strict(),
  snapshotDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  if (value.sponsorDeliveryReservation && value.sponsorDeliveryReservation.positionStateRoot !== value.positionStateRoot) {
    context.addIssue({ code: "custom", message: "sponsor_reservation_position_root_mismatch" });
  }
  if (Date.parse(value.quoteContext.validUntil) <= Date.parse(value.quoteContext.issuedAt)) {
    context.addIssue({ code: "custom", message: "snapshot_quote_expiry_not_after_issue" });
  }
  if (!isCanonicalBlockHashForChain(value.quoteContext.blockHash, value.quoteContext.chainId)) {
    context.addIssue({ code: "custom", message: "snapshot_block_hash_chain_mismatch" });
  }
});
var PackOpenRequestV1Schema = z.object({
  schema: z.literal("attn.packNetwork.openRequest.v1"),
  requestId: IdentifierSchema,
  operationId: IdentifierSchema,
  actorAccountId: IdentifierSchema,
  payerWallet: AddressSchema,
  recipientWallet: AddressSchema,
  marketId: IdentifierSchema,
  recipeVersion: IdentifierSchema,
  recipeTermsDigest: HexDigestSchema,
  snapshotId: IdentifierSchema,
  snapshotDigest: HexDigestSchema,
  exactPrincipalQuoteUnits: CanonicalPositiveUintSchema,
  maximumTotalCostQuoteUnits: CanonicalPositiveUintSchema,
  paymentAsset: ChainAssetV1Schema,
  paymentAmount: CanonicalPositiveUintSchema,
  paymentRouteDigest: HexDigestSchema.nullable(),
  originChainId: PackNetworkChainIdV1Schema,
  originTransactionId: IdentifierSchema.nullable(),
  idempotencyNonce: IdentifierSchema,
  acceptedAt: IsoTimestampSchema.nullable(),
  recipeStatusAtAcceptance: z.literal("active").nullable(),
  acceptanceReceiptDigest: HexDigestSchema.nullable(),
  expiresAt: IsoTimestampSchema,
  state: z.enum([
    "prepared",
    "funded",
    "queued",
    "snapshot_sealed",
    "randomness_requested",
    "randomness_fulfilled",
    "outcome_selected",
    "settlement_prepared",
    "terminal",
    "reconciliation_required",
    "expired_refundable"
  ]),
  requestDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  if (BigInt(value.maximumTotalCostQuoteUnits) < BigInt(value.exactPrincipalQuoteUnits)) {
    context.addIssue({ code: "custom", message: "maximum_cost_below_principal" });
  }
  if (value.originChainId !== value.paymentAsset.chainId) {
    context.addIssue({ code: "custom", message: "request_payment_chain_mismatch" });
  }
  if (value.acceptedAt && Date.parse(value.acceptedAt) > Date.parse(value.expiresAt)) {
    context.addIssue({ code: "custom", message: "request_accepted_after_expiry" });
  }
  const acceptanceFieldsPresent = [
    value.acceptedAt !== null,
    value.recipeStatusAtAcceptance !== null,
    value.acceptanceReceiptDigest !== null
  ];
  if (acceptanceFieldsPresent.some(Boolean) && !acceptanceFieldsPresent.every(Boolean)) {
    context.addIssue({ code: "custom", message: "request_acceptance_fields_incomplete" });
  }
  if (value.originTransactionId !== null && !isCanonicalTransactionIdForChain(value.originTransactionId, value.originChainId)) {
    context.addIssue({ code: "custom", message: "request_origin_transaction_chain_mismatch" });
  }
  for (const [field, address] of [
    ["payerWallet", value.payerWallet],
    ["recipientWallet", value.recipientWallet]
  ]) {
    if (!isCanonicalAccountAddressForChain(address, value.originChainId)) {
      context.addIssue({ code: "custom", message: `request_${field}_chain_mismatch`, path: [field] });
    }
  }
});
var PackSelectionReceiptV1Schema = z.object({
  schema: z.literal("attn.packNetwork.selectionReceipt.v1"),
  requestId: IdentifierSchema,
  snapshotId: IdentifierSchema,
  snapshotDigest: HexDigestSchema,
  randomnessRequestId: IdentifierSchema,
  randomnessProofDigest: HexDigestSchema,
  randomnessReceiptDigest: HexDigestSchema,
  randomWord: CanonicalUintSchema,
  selectedWeightOffset: CanonicalUintSchema,
  acceptanceReceiptDigest: HexDigestSchema,
  reservationId: IdentifierSchema,
  reservationReceiptDigest: HexDigestSchema,
  selectedLotId: IdentifierSchema,
  selectedPositionId: IdentifierSchema,
  selectedPositionTermsDigest: HexDigestSchema,
  selectedAsset: ChainAssetV1Schema,
  selectedAssetAmount: CanonicalPositiveUintSchema,
  selectedFloorQuoteUnits: CanonicalUintSchema,
  selectedReferenceValueQuoteUnits: CanonicalUintSchema.nullable(),
  selectionDigest: HexDigestSchema
}).strict();
var PackSettlementChoiceV1Schema = z.object({
  schema: z.literal("attn.packNetwork.settlementChoice.v1"),
  requestId: IdentifierSchema,
  selectionDigest: HexDigestSchema,
  actorAccountId: IdentifierSchema,
  recipientWallet: AddressSchema,
  choice: PackSettlementChoiceKindV1Schema,
  quoteId: IdentifierSchema.nullable(),
  quoteReceiptDigest: HexDigestSchema.nullable(),
  minimumOutputQuoteUnits: CanonicalUintSchema.nullable(),
  priceImpactBps: ShareBasisPointsSchema.nullable(),
  arenaRoundId: IdentifierSchema.nullable(),
  arenaTileId: IdentifierSchema.nullable(),
  chosenAt: IsoTimestampSchema,
  expiresAt: IsoTimestampSchema,
  choiceDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  const quoteFields = [
    value.quoteId,
    value.quoteReceiptDigest,
    value.minimumOutputQuoteUnits,
    value.priceImpactBps
  ];
  const populatedQuoteFields = quoteFields.filter((field) => field !== null).length;
  const hasQuote = populatedQuoteFields === quoteFields.length;
  if (populatedQuoteFields !== 0 && !hasQuote) {
    context.addIssue({ code: "custom", message: "instant_sell_quote_incomplete" });
  }
  const hasArenaTarget = value.arenaRoundId !== null && value.arenaTileId !== null;
  if (value.choice === "instant_sell" !== hasQuote) {
    context.addIssue({ code: "custom", message: "instant_sell_quote_mismatch" });
  }
  if (value.choice === "arena_commit" !== hasArenaTarget) {
    context.addIssue({ code: "custom", message: "arena_target_mismatch" });
  }
  if (Date.parse(value.chosenAt) > Date.parse(value.expiresAt)) {
    context.addIssue({ code: "custom", message: "choice_made_after_expiry" });
  }
});
var PackSettlementReceiptV1Schema = z.object({
  schema: z.literal("attn.packNetwork.settlementReceipt.v1"),
  requestId: IdentifierSchema,
  requestDigest: HexDigestSchema,
  operationId: IdentifierSchema,
  marketId: IdentifierSchema,
  recipeVersion: IdentifierSchema,
  recipeTermsDigest: HexDigestSchema,
  snapshotId: IdentifierSchema,
  snapshotDigest: HexDigestSchema,
  acceptanceReceiptDigest: HexDigestSchema,
  terminalSequence: CanonicalPositiveUintSchema,
  originChainId: PackNetworkChainIdV1Schema,
  selectionDigest: HexDigestSchema,
  selectedPositionId: IdentifierSchema,
  selectedPositionTermsDigest: HexDigestSchema,
  choiceDigest: HexDigestSchema,
  outcome: z.enum(["asset_delivered", "instant_sell_paid", "standing_bid_paid", "arena_committed", "refunded"]),
  recipientWallet: AddressSchema,
  deliveredAsset: ChainAssetV1Schema.nullable(),
  deliveredAssetAmount: CanonicalUintSchema,
  paidQuoteAsset: ChainAssetV1Schema.nullable(),
  paidQuoteAmount: CanonicalUintSchema,
  accountingQuoteAsset: ChainAssetV1Schema,
  exactPrincipalQuoteUnits: CanonicalPositiveUintSchema,
  externalQuoteInflowQuoteUnits: CanonicalUintSchema,
  lpRecipient: AddressSchema.nullable(),
  lpPaidQuoteAmount: CanonicalUintSchema,
  creatorRecipient: AddressSchema.nullable(),
  creatorFeeQuoteAmount: CanonicalUintSchema,
  protocolRecipient: AddressSchema.nullable(),
  protocolFeeQuoteAmount: CanonicalUintSchema,
  chaseRecipient: AddressSchema.nullable(),
  chaseFeeQuoteAmount: CanonicalUintSchema,
  venueAndNetworkCostQuoteAmount: CanonicalUintSchema,
  reserveDeltaQuoteAmount: z.string().regex(/^(?:0|-?[1-9][0-9]*)$/u),
  originTransactionIds: z.array(IdentifierSchema).min(1).max(32),
  originFinality: z.literal("finalized"),
  terminalAt: IsoTimestampSchema,
  terminalDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  const delivered = value.deliveredAsset !== null && value.deliveredAssetAmount !== "0";
  const noDelivery = value.deliveredAsset === null && value.deliveredAssetAmount === "0";
  if (!delivered && !noDelivery) {
    context.addIssue({ code: "custom", message: "delivered_asset_pair_incomplete" });
  }
  if (value.outcome === "asset_delivered" !== delivered) {
    context.addIssue({ code: "custom", message: "delivered_asset_outcome_mismatch" });
  }
  const paid = value.paidQuoteAsset !== null && value.paidQuoteAmount !== "0";
  const noPayment = value.paidQuoteAsset === null && value.paidQuoteAmount === "0";
  if (!paid && !noPayment) {
    context.addIssue({ code: "custom", message: "paid_quote_pair_incomplete" });
  }
  const paidOutcome = value.outcome === "instant_sell_paid" || value.outcome === "standing_bid_paid" || value.outcome === "refunded";
  if (paidOutcome !== paid) {
    context.addIssue({ code: "custom", message: "paid_quote_outcome_mismatch" });
  }
  if (value.paidQuoteAsset && value.paidQuoteAsset.identityDigest !== value.accountingQuoteAsset.identityDigest) {
    context.addIssue({ code: "custom", message: "paid_quote_asset_accounting_asset_mismatch" });
  }
  if (value.lpRecipient === null !== (value.lpPaidQuoteAmount === "0")) {
    context.addIssue({ code: "custom", message: "lp_payment_recipient_mismatch" });
  }
  if (value.creatorRecipient === null !== (value.creatorFeeQuoteAmount === "0")) {
    context.addIssue({ code: "custom", message: "creator_fee_recipient_mismatch" });
  }
  if (value.protocolRecipient === null !== (value.protocolFeeQuoteAmount === "0")) {
    context.addIssue({ code: "custom", message: "protocol_fee_recipient_mismatch" });
  }
  if (value.chaseRecipient === null !== (value.chaseFeeQuoteAmount === "0")) {
    context.addIssue({ code: "custom", message: "chase_fee_recipient_mismatch" });
  }
  if (new Set(value.originTransactionIds).size !== value.originTransactionIds.length) {
    context.addIssue({ code: "custom", message: "duplicate_origin_transaction" });
  }
  if (value.originTransactionIds.some(
    (transactionId) => !isCanonicalTransactionIdForChain(transactionId, value.originChainId)
  )) {
    context.addIssue({ code: "custom", message: "receipt_origin_transaction_chain_mismatch" });
  }
  if (value.accountingQuoteAsset.chainId !== value.originChainId) {
    context.addIssue({ code: "custom", message: "receipt_accounting_chain_mismatch" });
  }
  if (value.deliveredAsset && value.deliveredAsset.chainId !== value.originChainId) {
    context.addIssue({ code: "custom", message: "receipt_delivered_asset_chain_mismatch" });
  }
  if (value.paidQuoteAsset && value.paidQuoteAsset.chainId !== value.originChainId) {
    context.addIssue({ code: "custom", message: "receipt_paid_asset_chain_mismatch" });
  }
  for (const [field, address] of [
    ["recipientWallet", value.recipientWallet],
    ["lpRecipient", value.lpRecipient],
    ["creatorRecipient", value.creatorRecipient],
    ["protocolRecipient", value.protocolRecipient],
    ["chaseRecipient", value.chaseRecipient]
  ]) {
    if (address !== null && !isCanonicalAccountAddressForChain(address, value.originChainId)) {
      context.addIssue({ code: "custom", message: `receipt_${field}_chain_mismatch`, path: [field] });
    }
  }
  const inflow = BigInt(value.exactPrincipalQuoteUnits) + BigInt(value.externalQuoteInflowQuoteUnits);
  const outflow = BigInt(value.paidQuoteAmount) + BigInt(value.lpPaidQuoteAmount) + BigInt(value.creatorFeeQuoteAmount) + BigInt(value.protocolFeeQuoteAmount) + BigInt(value.chaseFeeQuoteAmount) + BigInt(value.venueAndNetworkCostQuoteAmount);
  if (BigInt(value.reserveDeltaQuoteAmount) !== inflow - outflow) {
    context.addIssue({ code: "custom", message: "terminal_quote_accounting_not_conserved" });
  }
});
var PackEntitlementLeafV1Schema = z.object({
  schema: z.literal("attn.packNetwork.entitlementLeaf.v1"),
  epochId: IdentifierSchema,
  distributor: AddressSchema,
  marketId: IdentifierSchema,
  requestId: IdentifierSchema,
  terminalDigest: HexDigestSchema,
  terminalSequence: CanonicalPositiveUintSchema,
  originChainId: PackNetworkChainIdV1Schema,
  asset: ChainAssetV1Schema,
  exactAmount: CanonicalPositiveUintSchema,
  recipientWallet: AddressSchema,
  leafIndex: CanonicalUintSchema,
  leafDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  if (value.asset.chainId !== value.originChainId) {
    context.addIssue({ code: "custom", message: "entitlement_asset_chain_mismatch" });
  }
  for (const [field, address] of [
    ["distributor", value.distributor],
    ["recipientWallet", value.recipientWallet]
  ]) {
    if (!isCanonicalAccountAddressForChain(address, value.originChainId)) {
      context.addIssue({ code: "custom", message: `entitlement_${field}_chain_mismatch`, path: [field] });
    }
  }
});
var PackEntitlementRootV1Schema = z.object({
  schema: z.literal("attn.packNetwork.entitlementRoot.v1"),
  epochId: IdentifierSchema,
  distributor: AddressSchema,
  originChainId: PackNetworkChainIdV1Schema,
  marketIds: z.array(IdentifierSchema).min(1).max(1024),
  firstTerminalSequence: CanonicalUintSchema,
  lastTerminalSequence: CanonicalUintSchema,
  leafCount: CanonicalPositiveUintSchema,
  totalByAssetRoot: HexDigestSchema,
  merkleRoot: HexDigestSchema,
  publisherPolicyId: IdentifierSchema,
  publishedTransactionId: IdentifierSchema.nullable(),
  finality: z.enum(["prepared", "submitted", "finalized", "reconciliation_required"]),
  rootDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  if (BigInt(value.lastTerminalSequence) < BigInt(value.firstTerminalSequence)) {
    context.addIssue({ code: "custom", message: "terminal_sequence_range_invalid" });
  }
  if (new Set(value.marketIds).size !== value.marketIds.length) {
    context.addIssue({ code: "custom", message: "duplicate_market_id" });
  }
  if (!isStrictlyLexicographicallySorted(value.marketIds)) {
    context.addIssue({ code: "custom", message: "market_ids_not_canonically_ordered" });
  }
  if (value.finality === "prepared" && value.publishedTransactionId !== null) {
    context.addIssue({ code: "custom", message: "prepared_entitlement_root_has_transaction" });
  }
  if ((value.finality === "submitted" || value.finality === "finalized") && value.publishedTransactionId === null) {
    context.addIssue({ code: "custom", message: "published_entitlement_root_missing_transaction" });
  }
  if (!isCanonicalAccountAddressForChain(value.distributor, value.originChainId)) {
    context.addIssue({ code: "custom", message: "entitlement_root_distributor_chain_mismatch" });
  }
  if (value.publishedTransactionId !== null && !isCanonicalTransactionIdForChain(value.publishedTransactionId, value.originChainId)) {
    context.addIssue({ code: "custom", message: "entitlement_publication_transaction_chain_mismatch" });
  }
});

// validation.ts
function assertDigest(value, field) {
  assertCanonicalDigestField(value, field);
}
function assertAsset(asset) {
  if (asset !== null) assertChainAssetIdentity(asset);
}
function parseCanonicalChainAssetV1(input) {
  const value = ChainAssetV1Schema.parse(input);
  assertAsset(value);
  return value;
}
function parseCanonicalInventoryPositionV1(input) {
  const value = PackInventoryPositionV1Schema.parse(input);
  assertAsset(value.asset);
  assertAsset(value.quoteAsset);
  assertPositionTermsDigest(value);
  if (value.ownerActorBindingReceiptDigest !== ownerActorBindingReceiptDigest(value)) {
    throw new Error("pack_network_owner_actor_binding_receipt_digest_mismatch");
  }
  if (value.assetCreatorActorBindingReceiptDigest !== assetCreatorActorBindingReceiptDigest(value)) {
    throw new Error("pack_network_asset_creator_actor_binding_receipt_digest_mismatch");
  }
  return value;
}
function parseCanonicalInventoryLotV1(input) {
  const value = PackInventoryLotV1Schema.parse(input);
  assertAsset(value.asset);
  return value;
}
function parseCanonicalRecipeV1(input) {
  const value = PackRecipeV1Schema.parse(input);
  assertAsset(value.quoteAsset);
  assertRecipeTermsDigest(value);
  return value;
}
function parseCanonicalSponsorDeliveryReservationV1(input) {
  const value = PackSponsorDeliveryReservationV1Schema.parse(input);
  assertDigest(value, "reservationPlanDigest");
  return value;
}
function parseCanonicalSnapshotV1(input) {
  const value = PackSnapshotV1Schema.parse(input);
  if (value.sponsorDeliveryReservation) parseCanonicalSponsorDeliveryReservationV1(value.sponsorDeliveryReservation);
  assertDigest(value, "snapshotDigest");
  return value;
}
function parseCanonicalOpenRequestV1(input) {
  const value = PackOpenRequestV1Schema.parse(input);
  assertAsset(value.paymentAsset);
  assertOpenRequestIntentDigest(value);
  return value;
}
function parseCanonicalSelectionReceiptV1(input) {
  const value = PackSelectionReceiptV1Schema.parse(input);
  assertAsset(value.selectedAsset);
  assertDigest(value, "selectionDigest");
  return value;
}
function parseCanonicalSettlementReceiptV1(input) {
  const value = PackSettlementReceiptV1Schema.parse(input);
  assertAsset(value.deliveredAsset);
  assertAsset(value.paidQuoteAsset);
  assertAsset(value.accountingQuoteAsset);
  assertDigest(value, "terminalDigest");
  return value;
}

// stockPacks.ts
var Id = z2.string().min(1).max(256);
var Wallet = z2.string().refine(isCanonicalSolanaPublicKey);
var SolanaAsset = ChainAssetV1Schema.superRefine((asset, context) => {
  try {
    parseCanonicalChainAssetV1(asset);
  } catch {
    context.addIssue({ code: "custom", message: "asset_identity_mismatch" });
  }
  if (asset.namespace !== "solana") {
    context.addIssue({ code: "custom", message: "stock_pack_requires_solana" });
  }
});
var Asset = SolanaAsset.refine((asset) => asset.assetStandard !== "native", "stock_pack_requires_token");
var STOCK_PACK_WEIGHT_DENOMINATOR = "10000";
var STOCK_PACK_ADMITTED_PRINCIPALS = Object.freeze({
  starter25: "25000000",
  prime100: "100000000",
  legendary250: "250000000",
  grail1000: "1000000000"
});
var STOCK_PACK_LAUNCH_DENOMINATION_ID = "starter25";
var STOCK_PACK_LAUNCH_PRINCIPAL_QUOTE_UNITS = STOCK_PACK_ADMITTED_PRINCIPALS[STOCK_PACK_LAUNCH_DENOMINATION_ID];
var ADMITTED_PRINCIPAL_ENTRIES = Object.entries(STOCK_PACK_ADMITTED_PRINCIPALS);
var STOCK_PACK_TOKEN_PROGRAMS = {
  spl_token: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  token_2022: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
};
var StockPackAssetV1Schema = z2.object({
  asset: Asset,
  kind: z2.enum(["stock_token", "community_token"]),
  tokenProgram: Wallet,
  admittedExtensions: z2.array(Id),
  admissionDigest: HexDigestSchema,
  observedAt: IsoTimestampSchema,
  displayMultiplier: z2.object({
    numerator: CanonicalPositiveUintSchema,
    denominator: CanonicalPositiveUintSchema,
    observedAt: IsoTimestampSchema
  }).strict()
}).strict().superRefine((value, context) => {
  const standard = value.asset.assetStandard;
  if (standard !== "spl_token" && standard !== "token_2022" || value.tokenProgram !== STOCK_PACK_TOKEN_PROGRAMS[standard]) {
    context.addIssue({ code: "custom", message: "token_program_asset_mismatch" });
  }
  if (new Set(value.admittedExtensions).size !== value.admittedExtensions.length) {
    context.addIssue({ code: "custom", message: "duplicate_extension" });
  }
});
var Amount = z2.object({ asset: SolanaAsset, rawAmount: CanonicalUintSchema }).strict();
var StockPackReferenceV1Schema = z2.discriminatedUnion("state", [
  z2.object({ state: z2.literal("unavailable"), reason: Id }).strict(),
  z2.object({
    state: z2.enum(["available", "stale"]),
    input: Amount,
    value: Amount,
    observedAt: IsoTimestampSchema,
    validUntil: IsoTimestampSchema,
    evidenceDigest: HexDigestSchema
  }).strict()
]).superRefine((value, context) => {
  if (value.state !== "unavailable" && Date.parse(value.validUntil) <= Date.parse(value.observedAt)) {
    context.addIssue({ code: "custom", message: "reference_expiry_invalid" });
  }
});
function stockPackReferenceAt(reference, now) {
  const parsed = StockPackReferenceV1Schema.parse(reference);
  const time = Date.parse(IsoTimestampSchema.parse(now));
  if (parsed.state === "unavailable") return parsed;
  return { ...parsed, state: time < Date.parse(parsed.observedAt) || time >= Date.parse(parsed.validUntil) || parsed.state === "stale" ? "stale" : "available" };
}
var RouteLeg = z2.object({
  legId: Id,
  venue: z2.enum(["launchlab", "cpmm", "clmm", "aggregator"]),
  programIds: z2.array(Wallet).min(1),
  input: Amount,
  minimumOutput: Amount
}).strict();
var StockPackSaleQuoteV1Schema = z2.object({
  quoteId: Id,
  quoteDigest: HexDigestSchema,
  actorAccountId: Id,
  wallet: Wallet,
  input: Amount,
  minimumOutput: Amount,
  fees: z2.array(z2.object({ kind: z2.enum(["venue", "network", "platform"]), amount: Amount }).strict()),
  issuedAt: IsoTimestampSchema,
  expiresAt: IsoTimestampSchema,
  execution: z2.enum(["atomic", "sequential"]),
  legs: z2.array(RouteLeg).min(1).max(2)
}).strict().superRefine((value, context) => {
  const bad = (message) => context.addIssue({ code: "custom", message });
  if (Date.parse(value.expiresAt) <= Date.parse(value.issuedAt)) bad("quote_expiry_invalid");
  if (value.input.rawAmount === "0") bad("quote_input_zero");
  if (value.input.asset.assetStandard === "native") bad("quote_input_requires_token");
  const first = value.legs[0];
  const last = value.legs.at(-1);
  if (!first || !last) return;
  const sameAmount = (a, b) => a.asset.identityDigest === b.asset.identityDigest && a.rawAmount === b.rawAmount;
  if (!sameAmount(first.input, value.input) || !sameAmount(last.minimumOutput, value.minimumOutput)) {
    bad("quote_route_endpoints_mismatch");
  }
  if (new Set(value.legs.map((leg) => leg.legId)).size !== value.legs.length) bad("duplicate_leg_id");
  for (const [index, leg] of value.legs.entries()) {
    if (leg.input.asset.chainId !== value.input.asset.chainId || leg.minimumOutput.asset.chainId !== value.input.asset.chainId) bad("quote_route_chain_mismatch");
    const next = value.legs[index + 1];
    if (next && !sameAmount(leg.minimumOutput, next.input)) bad("quote_route_intermediate_mismatch");
  }
  if (value.fees.some((fee) => fee.amount.asset.chainId !== value.input.asset.chainId)) bad("quote_fee_chain_mismatch");
  const { quoteDigest: _digest, ...material } = value;
  if (value.quoteDigest !== canonicalAuthorizationDigest(material)) bad("quote_digest_mismatch");
});
var StockPackErrorCodeSchema = z2.enum([
  "intent_conflict",
  "not_found",
  "unauthorized",
  "unsupported_asset",
  "missing_evidence",
  "stale_evidence",
  "invalid_weights",
  "invalid_contract",
  "quote_expired",
  "quote_mismatch",
  "insufficient_inventory",
  "inventory_committed",
  "campaign_paused",
  "payment_pending",
  "delivery_pending",
  "reconciliation_required",
  "signature_rejected",
  "route_unavailable",
  "rate_limited"
]);
var StockPackContractError = class extends Error {
  constructor(code, message = code) {
    super(message);
    this.code = code;
    this.name = "StockPackContractError";
  }
};
var StockPackOperationIdentityV1Schema = z2.object({
  kind: z2.enum(["launch", "deposit", "reservation", "open", "claim", "fee_claim", "sale", "publish", "withdrawal"]),
  operationId: Id,
  actorAccountId: Id,
  nonce: Id,
  requestDigest: HexDigestSchema
}).strict();
function stockPackOperationIdentity(kind, actorAccountId, nonce, intent, retainedOperationId) {
  const key = { kind, actorAccountId, nonce };
  return StockPackOperationIdentityV1Schema.parse({
    ...key,
    operationId: retainedOperationId ?? `stock-pack-${canonicalAuthorizationDigest(key)}`,
    requestDigest: canonicalAuthorizationDigest(intent)
  });
}
function validateStockPackTable(input) {
  const recipe = parseCanonicalRecipeV1(input.recipe);
  const snapshot = parseCanonicalSnapshotV1(input.snapshot);
  const lots = input.lots.map(parseCanonicalInventoryLotV1);
  if (snapshot.totalSelectionWeight !== STOCK_PACK_WEIGHT_DENOMINATOR || lots.reduce((total, lot) => total + BigInt(lot.selectionWeight), 0n) !== 10000n) {
    throw new StockPackContractError("invalid_weights");
  }
  const targetIds = lots.flatMap((lot) => lot.targetId === void 0 ? [] : [lot.targetId]);
  if (BigInt(snapshot.lotCount) !== BigInt(lots.length) || new Set(lots.map((lot) => lot.lotId)).size !== lots.length || targetIds.length !== 0 && (targetIds.length !== lots.length || new Set(targetIds).size !== lots.length) || snapshot.recipeTermsDigest !== recipe.termsDigest || snapshot.recipeVersion !== recipe.recipeVersion || snapshot.marketId !== recipe.marketId || snapshot.inventoryRoot !== inventoryRootDigest(lots) || lots.some((lot) => lot.marketId !== recipe.marketId || lot.asset.chainId !== recipe.settlementChainId)) {
    throw new StockPackContractError("invalid_contract", "table_binding_mismatch");
  }
}
function assertStockPackExecutableQuote(quote, input) {
  const parsed = StockPackSaleQuoteV1Schema.parse(quote);
  const now = Date.parse(IsoTimestampSchema.parse(input.now));
  if (now < Date.parse(parsed.issuedAt) || now >= Date.parse(parsed.expiresAt)) {
    throw new StockPackContractError("quote_expired");
  }
  const amount = Amount.parse(input.amount);
  if (parsed.actorAccountId !== input.actorAccountId || parsed.wallet !== input.wallet || parsed.input.asset.identityDigest !== amount.asset.identityDigest || parsed.input.rawAmount !== amount.rawAmount || parsed.minimumOutput.asset.identityDigest !== input.outputAssetDigest) {
    throw new StockPackContractError("quote_mismatch");
  }
}
var STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS = 100;
var STOCK_PACK_SALE_ROUTE_FEE_DENOMINATOR = 10000n;
function stockPackSaleRouteFeeRaw(minimumOutputRaw, feeBps) {
  if (!/^(?:0|[1-9][0-9]*)$/u.test(minimumOutputRaw) || !Number.isSafeInteger(feeBps) || feeBps < 0 || feeBps > STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS) {
    throw new StockPackContractError("invalid_contract", "sale_route_fee_input_invalid");
  }
  return (BigInt(minimumOutputRaw) * BigInt(feeBps) / STOCK_PACK_SALE_ROUTE_FEE_DENOMINATOR).toString();
}
function stockPackSaleQuoteProceeds(quote) {
  const parsed = StockPackSaleQuoteV1Schema.parse(quote);
  const platform = parsed.fees.filter((fee) => fee.kind === "platform");
  const entry = platform[0];
  if (platform.length > 1 || entry && (entry.amount.asset.identityDigest !== parsed.minimumOutput.asset.identityDigest || BigInt(entry.amount.rawAmount) > BigInt(stockPackSaleRouteFeeRaw(parsed.minimumOutput.rawAmount, STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS)) || BigInt(entry.amount.rawAmount) >= BigInt(parsed.minimumOutput.rawAmount))) {
    throw new StockPackContractError("quote_mismatch", "quote_platform_fee_invalid");
  }
  const platformFee = entry ? entry.amount : { asset: parsed.minimumOutput.asset, rawAmount: "0" };
  return Object.freeze({
    executableOutput: parsed.minimumOutput,
    platformFee,
    proceedsAfterFee: {
      asset: parsed.minimumOutput.asset,
      rawAmount: (BigInt(parsed.minimumOutput.rawAmount) - BigInt(platformFee.rawAmount)).toString()
    }
  });
}
function validateStockPackCard(card, snapshot) {
  const lot = parseCanonicalInventoryLotV1(card.lot);
  const instrument = StockPackAssetV1Schema.parse(card.instrument);
  parseCanonicalSnapshotV1(snapshot);
  StockPackReferenceV1Schema.parse(card.reference);
  if (card.reference.state !== "unavailable" && (card.reference.input.asset.identityDigest !== lot.asset.identityDigest || card.reference.input.rawAmount !== lot.exactAssetAmount)) {
    throw new StockPackContractError("invalid_contract", "reference_input_mismatch");
  }
  if (card.cardId !== lot.lotId || card.snapshotId !== snapshot.snapshotId || card.snapshotDigest !== snapshot.snapshotDigest || card.probability.total !== "10000" || snapshot.totalSelectionWeight !== "10000" || card.probability.weight !== lot.selectionWeight || BigInt(lot.selectionWeight) > 10000n || instrument.asset.identityDigest !== lot.asset.identityDigest) {
    throw new StockPackContractError("invalid_contract", "card_binding_mismatch");
  }
  if (card.saleQuote.state !== "unavailable") {
    const quote = StockPackSaleQuoteV1Schema.parse(card.saleQuote.quote);
    if (quote.input.asset.identityDigest !== lot.asset.identityDigest || quote.input.rawAmount !== lot.exactAssetAmount) {
      throw new StockPackContractError("quote_mismatch");
    }
  }
  if (card.delivery) {
    Wallet.parse(card.delivery.recipientWallet);
    if (card.delivery.state === "delivered") {
      const receipt = parseCanonicalSettlementReceiptV1(card.delivery.receipt);
      if (receipt.outcome !== "asset_delivered" || receipt.deliveredAsset?.identityDigest !== lot.asset.identityDigest || receipt.deliveredAssetAmount !== lot.exactAssetAmount || receipt.snapshotDigest !== card.snapshotDigest || receipt.selectedPositionId !== lot.positionId || receipt.selectedPositionTermsDigest !== lot.positionTermsDigest || receipt.recipientWallet !== card.delivery.recipientWallet || receipt.originTransactionIds.join(",") !== card.delivery.transactionIds.join(",")) {
        throw new StockPackContractError("invalid_contract", "delivery_binding_mismatch");
      }
    } else if (card.delivery.receipt !== null) {
      throw new StockPackContractError("invalid_contract", "nonfinal_delivery_has_receipt");
    }
  }
}
function stockPackRemainingSaleLeg(sale) {
  const quote = StockPackSaleQuoteV1Schema.parse(sale.quote);
  StockPackOperationIdentityV1Schema.parse(sale.identity);
  if (sale.identity.kind !== "sale" || sale.wallet !== quote.wallet || sale.identity.actorAccountId !== quote.actorAccountId) throw new StockPackContractError("invalid_contract");
  const prefix = quote.legs.slice(0, sale.completedLegIds.length).map((leg) => leg.legId);
  if (prefix.join(",") !== sale.completedLegIds.join(",") || sale.completedLegIds.length > quote.legs.length) {
    throw new StockPackContractError("invalid_contract", "sale_completed_legs_not_prefix");
  }
  if (sale.state !== "intermediate_held") return null;
  const next = quote.legs[sale.completedLegIds.length];
  if (quote.execution !== "sequential" || sale.completedLegIds.length !== 1 || !next || !sale.actualHolding || !sale.observedAt || sale.transactionIds.length === 0) {
    throw new StockPackContractError("reconciliation_required");
  }
  IsoTimestampSchema.parse(sale.observedAt);
  const holding = Amount.parse(sale.actualHolding);
  if (holding.rawAmount === "0" || holding.asset.identityDigest !== next.input.asset.identityDigest) {
    throw new StockPackContractError("reconciliation_required");
  }
  return next.legId;
}
function assertStockPackSelectionLot(selection, lot) {
  const parsed = parseCanonicalSelectionReceiptV1(selection);
  parseCanonicalInventoryLotV1(lot);
  if (parsed.selectedLotId !== lot.lotId || parsed.selectedPositionId !== lot.positionId || parsed.selectedPositionTermsDigest !== lot.positionTermsDigest || parsed.selectedAsset.identityDigest !== lot.asset.identityDigest || parsed.selectedAssetAmount !== lot.exactAssetAmount) {
    throw new StockPackContractError("invalid_contract", "selection_lot_mismatch");
  }
}
function canonicalResponse(schema, parse) {
  return schema.superRefine((value, context) => {
    try {
      parse(value);
    } catch {
      context.addIssue({ code: "custom", message: "canonical_response_integrity_invalid" });
    }
  });
}
var SettlementReceipt = canonicalResponse(PackSettlementReceiptV1Schema, parseCanonicalSettlementReceiptV1);
var StockPackDeliveryV1Schema = z2.discriminatedUnion("state", [
  z2.object({
    state: z2.enum(["selected", "pending", "reconciling"]),
    recipientWallet: Wallet,
    transactionIds: z2.array(Id),
    receipt: z2.null()
  }).strict(),
  z2.object({
    state: z2.literal("delivered"),
    recipientWallet: Wallet,
    transactionIds: z2.array(Id).min(1),
    receipt: SettlementReceipt
  }).strict()
]).superRefine((value, context) => {
  if (value.state === "delivered" && (value.receipt.outcome !== "asset_delivered" || value.receipt.recipientWallet !== value.recipientWallet || value.receipt.originTransactionIds.length !== value.transactionIds.length || value.receipt.originTransactionIds.some((id, index) => id !== value.transactionIds[index]))) {
    context.addIssue({ code: "custom", message: "delivery_receipt_binding_mismatch" });
  }
});
var StockPackPayoffCardV1Schema = z2.object({
  cardId: Id,
  snapshotId: Id,
  snapshotDigest: HexDigestSchema,
  lot: canonicalResponse(PackInventoryLotV1Schema, parseCanonicalInventoryLotV1),
  instrument: StockPackAssetV1Schema,
  probability: z2.object({ weight: CanonicalPositiveUintSchema, total: z2.literal("10000") }).strict(),
  reference: StockPackReferenceV1Schema,
  saleQuote: z2.discriminatedUnion("state", [
    z2.object({ state: z2.literal("unavailable"), reason: Id }).strict(),
    z2.object({ state: z2.enum(["indicative", "executable", "expired"]), quote: StockPackSaleQuoteV1Schema }).strict()
  ]),
  delivery: StockPackDeliveryV1Schema.nullable()
}).strict();
var StockPackOpenV1Schema = z2.object({
  identity: StockPackOperationIdentityV1Schema,
  campaignId: Id,
  reservationId: Id,
  request: canonicalResponse(PackOpenRequestV1Schema, parseCanonicalOpenRequestV1),
  selection: canonicalResponse(PackSelectionReceiptV1Schema, parseCanonicalSelectionReceiptV1).nullable(),
  delivery: StockPackDeliveryV1Schema.nullable()
}).strict().superRefine((value, context) => {
  if (value.identity.kind !== "open" || value.identity.actorAccountId !== value.request.actorAccountId || value.identity.operationId !== value.request.operationId || value.identity.nonce !== value.request.idempotencyNonce) {
    context.addIssue({ code: "custom", message: "open_identity_binding_mismatch" });
  }
  if (value.selection && (value.selection.requestId !== value.request.requestId || value.selection.snapshotDigest !== value.request.snapshotDigest || value.selection.acceptanceReceiptDigest !== value.request.acceptanceReceiptDigest)) {
    context.addIssue({ code: "custom", message: "open_selection_binding_mismatch" });
  }
  if (value.delivery && value.delivery.recipientWallet !== value.request.recipientWallet) {
    context.addIssue({ code: "custom", message: "open_delivery_wallet_mismatch" });
  }
  if (value.delivery?.state === "delivered" && (!value.selection || value.delivery.receipt.operationId !== value.request.operationId || value.delivery.receipt.requestId !== value.request.requestId || value.delivery.receipt.snapshotDigest !== value.request.snapshotDigest || value.delivery.receipt.requestDigest !== value.request.requestDigest || value.delivery.receipt.selectionDigest !== value.selection.selectionDigest)) {
    context.addIssue({ code: "custom", message: "open_delivery_receipt_mismatch" });
  }
});
var StockPackSaleV1Schema = z2.object({
  identity: StockPackOperationIdentityV1Schema,
  wallet: Wallet,
  deliveryReceiptDigest: HexDigestSchema.nullable(),
  quote: StockPackSaleQuoteV1Schema,
  state: z2.enum(["prepared", "pending", "reconciling", "intermediate_held", "completed", "rejected"]),
  completedLegIds: z2.array(Id),
  transactionIds: z2.array(Id),
  actualHolding: Amount.nullable(),
  observedAt: IsoTimestampSchema.nullable()
}).strict().superRefine((value, context) => {
  try {
    stockPackRemainingSaleLeg(value);
  } catch {
    context.addIssue({ code: "custom", message: "sale_projection_binding_invalid" });
  }
  if (value.state === "completed" && value.completedLegIds.length !== value.quote.legs.length) {
    context.addIssue({ code: "custom", message: "completed_sale_has_remaining_legs" });
  }
});
function parseStockPackOpenV1(input) {
  return StockPackOpenV1Schema.parse(input);
}
function parseStockPackSaleV1(input) {
  return StockPackSaleV1Schema.parse(input);
}

// stockPacksPorts.ts
import * as z3 from "zod/v4";
var PortId = z3.string().min(1).max(256);
var FundingWallet = z3.string().refine(isCanonicalSolanaPublicKey);
var FundingAmount = z3.object({ asset: ChainAssetV1Schema, rawAmount: CanonicalUintSchema }).strict();
var PositiveFundingAmount = FundingAmount.extend({ rawAmount: CanonicalPositiveUintSchema });
var StockPackRoundFixedTargetV1Schema = z3.object({
  targetId: PortId,
  positionId: PortId,
  initialAmount: PositiveFundingAmount,
  quoteValue: PositiveFundingAmount
}).strict();
var StockPackRoundCandidateV1Schema = z3.object({
  targetId: PortId,
  positionId: PortId,
  amount: PositiveFundingAmount
}).strict();
var StockPackRoundBindingV1Schema = z3.object({
  initialPublishDigest: HexDigestSchema,
  policyDigest: HexDigestSchema,
  roundId: PortId,
  roundNumber: CanonicalUintSchema,
  fixedTargets: z3.array(StockPackRoundFixedTargetV1Schema).min(1),
  candidates: z3.array(StockPackRoundCandidateV1Schema).min(1),
  bindingDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    assertCanonicalDigestField(value, "bindingDigest");
    const fixed = new Map(value.fixedTargets.map((target) => [target.targetId, target]));
    const candidateIds = new Set(value.candidates.map((candidate) => candidate.targetId));
    if (fixed.size !== value.fixedTargets.length || candidateIds.size !== value.candidates.length || candidateIds.size !== fixed.size || value.fixedTargets.some((target, index) => {
      const previous = value.fixedTargets[index - 1];
      return index > 0 && previous !== void 0 && target.targetId <= previous.targetId;
    }) || value.candidates.some((candidate, index) => {
      const previous = value.candidates[index - 1];
      return index > 0 && previous !== void 0 && candidate.targetId <= previous.targetId;
    })) {
      throw new Error("round_target_mapping_not_canonical");
    }
    for (const candidate of value.candidates) {
      const target = fixed.get(candidate.targetId);
      if (!target || target.positionId !== candidate.positionId || target.initialAmount.asset.identityDigest !== candidate.amount.asset.identityDigest) {
        throw new Error("round_candidate_target_mismatch");
      }
    }
  } catch {
    context.addIssue({ code: "custom", message: "round_binding_invalid" });
  }
});
var StockPackContributionTypeV1Schema = z3.enum(["liquidity", "sponsored_reward"]);
var StockPackDepositContributionV1Schema = z3.object({
  type: StockPackContributionTypeV1Schema,
  usdBasis: FundingAmount
}).strict();
var StockPackDepositIntentV1Schema = z3.object({
  campaignId: PortId,
  sourceWallet: FundingWallet,
  custodyWallet: FundingWallet,
  amount: FundingAmount.extend({ rawAmount: CanonicalPositiveUintSchema }),
  transactionId: PortId,
  position: PackInventoryPositionV1Schema,
  contribution: StockPackDepositContributionV1Schema.optional()
}).strict().superRefine((value, context) => {
  try {
    const position = parseCanonicalInventoryPositionV1(value.position);
    const asset = parseCanonicalChainAssetV1(value.amount.asset);
    if (asset.namespace !== "solana" || asset.assetStandard === "native" || position.asset.identityDigest !== asset.identityDigest || position.custodyAddress !== value.custodyWallet || value.contribution && value.contribution.usdBasis.asset.identityDigest !== position.quoteAsset.identityDigest) {
      throw new Error("funding_position_binding_mismatch");
    }
  } catch {
    context.addIssue({ code: "custom", message: "funding_position_binding_invalid" });
  }
});
var StockPackLpPositionV1Schema = z3.object({
  campaignId: PortId,
  positionId: PortId,
  asset: ChainAssetV1Schema,
  actorAccountId: PortId,
  wallet: FundingWallet,
  contributionType: StockPackContributionTypeV1Schema,
  creditedRawAmount: CanonicalUintSchema,
  attributedDeliveredRawAmount: CanonicalUintSchema,
  withdrawalHoldRawAmount: CanonicalUintSchema,
  withdrawnRawAmount: CanonicalUintSchema,
  pendingRawAmount: CanonicalUintSchema,
  availableRawAmount: CanonicalUintSchema,
  committedRawAmount: CanonicalUintSchema,
  withdrawableRawAmount: CanonicalUintSchema,
  basis: FundingAmount,
  feeDebt: CanonicalUintSchema,
  feeCredit: FundingAmount,
  feePending: FundingAmount,
  feeClaimable: FundingAmount,
  feeClaimed: FundingAmount,
  principalCredit: FundingAmount,
  feePayoutPending: FundingAmount.optional(),
  lastCreditedRevision: CanonicalUintSchema.nullable()
}).strict().superRefine((value, context) => {
  try {
    const asset = parseCanonicalChainAssetV1(value.asset);
    const net = BigInt(value.creditedRawAmount) - BigInt(value.attributedDeliveredRawAmount) - BigInt(value.withdrawalHoldRawAmount) - BigInt(value.withdrawnRawAmount);
    if (value.positionId !== `${value.campaignId}:${asset.identityDigest}` || net < 0n || BigInt(value.availableRawAmount) !== net || BigInt(value.withdrawableRawAmount) > net || BigInt(value.committedRawAmount) + BigInt(value.withdrawableRawAmount) !== net || BigInt(value.feeCredit.rawAmount) + BigInt(value.feePending.rawAmount) !== BigInt(value.feeClaimable.rawAmount) || value.contributionType === "sponsored_reward" && (value.basis.rawAmount !== "0" || value.feeDebt !== "0" || value.feeClaimable.rawAmount !== "0" || value.feeClaimed.rawAmount !== "0" || value.principalCredit.rawAmount !== "0") || value.contributionType === "sponsored_reward" && value.feePayoutPending && value.feePayoutPending.rawAmount !== "0" || [value.feeCredit, value.feePending, value.feeClaimable, value.feeClaimed, value.principalCredit, ...value.feePayoutPending ? [value.feePayoutPending] : []].some((amount) => amount.asset.identityDigest !== value.basis.asset.identityDigest)) {
      throw new Error("lp_position_binding_mismatch");
    }
  } catch {
    context.addIssue({ code: "custom", message: "lp_position_binding_invalid" });
  }
});
var StockPackLpInventoryV1Schema = z3.object({
  campaignId: PortId,
  revision: CanonicalUintSchema,
  observedAt: IsoTimestampSchema,
  liquidityBasisTotal: FundingAmount,
  sponsoredBasisTotal: FundingAmount,
  accFeePerBasis: CanonicalUintSchema,
  feeDust: FundingAmount,
  platformFeeCredit: FundingAmount,
  positions: z3.array(StockPackLpPositionV1Schema)
}).strict().superRefine((value, context) => {
  const keys = new Set(value.positions.map((row) => `${row.positionId}:${row.actorAccountId}:${row.contributionType}`));
  let liquidity = 0n, sponsored = 0n;
  for (const row of value.positions) {
    if (row.campaignId !== value.campaignId) context.addIssue({ code: "custom", message: "lp_position_campaign_mismatch" });
    if (row.contributionType === "liquidity") liquidity += BigInt(row.basis.rawAmount);
    else sponsored += BigInt(row.basis.rawAmount);
  }
  if (keys.size !== value.positions.length) context.addIssue({ code: "custom", message: "lp_position_duplicate" });
  if (liquidity > BigInt(value.liquidityBasisTotal.rawAmount) || sponsored > BigInt(value.sponsoredBasisTotal.rawAmount)) {
    context.addIssue({ code: "custom", message: "lp_basis_total_mismatch" });
  }
});
var StockPackPoolFeeCreditV1Schema = z3.object({
  campaignId: PortId,
  source: PortId,
  feeAsset: ChainAssetV1Schema,
  rawAmount: CanonicalUintSchema,
  lpRawAmount: CanonicalUintSchema,
  platformRawAmount: CanonicalUintSchema,
  basisTotal: CanonicalUintSchema,
  accFeePerBasis: CanonicalUintSchema,
  revision: CanonicalUintSchema
}).strict().superRefine((value, context) => {
  if (BigInt(value.lpRawAmount) + BigInt(value.platformRawAmount) !== BigInt(value.rawAmount) || value.basisTotal === "0" && value.lpRawAmount !== "0") {
    context.addIssue({ code: "custom", message: "pool_fee_credit_split_invalid" });
  }
});
var StockPackFundedPositionV1Schema = z3.object({
  positionId: PortId,
  instrument: StockPackAssetV1Schema,
  amount: FundingAmount,
  position: PackInventoryPositionV1Schema
}).strict().superRefine((value, context) => {
  try {
    const position = parseCanonicalInventoryPositionV1(value.position);
    const asset = parseCanonicalChainAssetV1(value.amount.asset);
    if (position.positionId !== value.positionId || position.asset.identityDigest !== asset.identityDigest || position.asset.identityDigest !== value.instrument.asset.identityDigest || position.exactAvailableAmount !== value.amount.rawAmount) {
      throw new Error("funded_position_binding_mismatch");
    }
  } catch {
    context.addIssue({ code: "custom", message: "funded_position_binding_invalid" });
  }
});
var StockPackRefundExclusionV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.refundExclusion.v1"),
  reservationId: PortId,
  requestId: PortId,
  requestDigest: HexDigestSchema,
  snapshotDigest: HexDigestSchema,
  selectedLotId: PortId,
  selectionDigest: HexDigestSchema,
  orderOperationId: PortId,
  orderRequestDigest: HexDigestSchema,
  orderVersion: CanonicalUintSchema,
  resolutionDigest: HexDigestSchema,
  refundTerminalDigest: HexDigestSchema,
  evidence: z3.discriminatedUnion("kind", [
    z3.object({ kind: z3.literal("never_prepared") }).strict(),
    z3.object({
      kind: z3.literal("finalized_failed"),
      deliveryTransactionId: PortId,
      finalizedSlot: CanonicalUintSchema,
      evidenceDigest: HexDigestSchema,
      classification: z3.literal("finalized_failure")
    }).strict()
  ]),
  proofDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    assertCanonicalDigestField(value, "proofDigest");
  } catch {
    context.addIssue({ code: "custom", message: "refund_exclusion_digest_mismatch" });
  }
});
var StockPackPreviewV1Schema = z3.object({
  previewId: PortId,
  previewDigest: HexDigestSchema,
  campaignId: PortId,
  inventoryRevision: PortId,
  recipe: PackRecipeV1Schema,
  snapshot: PackSnapshotV1Schema,
  lots: z3.array(PackInventoryLotV1Schema).min(1),
  cards: z3.array(StockPackPayoffCardV1Schema).min(1),
  maximumPurchaseCount: CanonicalUintSchema,
  referenceExpectedValue: StockPackReferenceV1Schema,
  indicativeLiquidationExpectedValue: StockPackReferenceV1Schema,
  evaluatorReceiptDigest: HexDigestSchema,
  validUntil: IsoTimestampSchema
}).strict().superRefine((value, context) => {
  try {
    validateStockPackTable(value);
    for (const card of value.cards) {
      validateStockPackCard(card, value.snapshot);
      const lot = value.lots.find((candidate) => candidate.lotId === card.lot.lotId);
      if (!lot || canonicalAuthorizationDigest(lot) !== canonicalAuthorizationDigest(card.lot)) {
        throw new Error("preview_card_lot_substitution");
      }
    }
  } catch {
    context.addIssue({ code: "custom", message: "preview_canonical_table_binding_invalid" });
  }
  const cardLots = new Set(value.cards.map((card) => card.lot.lotId));
  if (value.cards.length !== value.lots.length || cardLots.size !== value.lots.length || value.lots.some((lot) => !cardLots.has(lot.lotId))) {
    context.addIssue({ code: "custom", message: "preview_cards_do_not_cover_exact_lots" });
  }
});
var StockPackCampaignV1Schema = z3.object({
  campaignId: PortId,
  creatorActorId: PortId,
  state: z3.enum(["draft", "published", "paused", "exhausted"]),
  preview: StockPackPreviewV1Schema,
  publishIdentity: StockPackOperationIdentityV1Schema.extend({ kind: z3.literal("publish") }).nullable()
}).strict().superRefine((value, context) => {
  if (value.campaignId !== value.preview.campaignId || value.publishIdentity && (value.publishIdentity.kind !== "publish" || value.publishIdentity.actorAccountId !== value.creatorActorId)) {
    context.addIssue({ code: "custom", message: "campaign_projection_binding_invalid" });
  }
  if (value.state !== "draft" && !value.publishIdentity) {
    context.addIssue({ code: "custom", message: "published_campaign_identity_missing" });
  }
});
function parseStockPackPreviewV1(input) {
  return StockPackPreviewV1Schema.parse(input);
}
function parseStockPackCampaignV1(input) {
  return StockPackCampaignV1Schema.parse(input);
}
var StockPackCampaignAccessV1Schema = z3.discriminatedUnion("mode", [
  z3.object({ mode: z3.literal("paid") }).strict(),
  z3.object({ mode: z3.literal("sponsored_reward"), rewardCampaignId: PortId }).strict()
]);
var StockPackInventoryAllocationV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.inventoryAllocation.v1"),
  allocationId: PortId,
  paidCampaignId: PortId,
  sponsoredCampaignId: PortId,
  rewardCampaignId: PortId,
  asset: ChainAssetV1Schema,
  allocationDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    parseCanonicalChainAssetV1(value.asset);
    assertCanonicalDigestField(value, "allocationDigest");
    if (value.paidCampaignId === value.sponsoredCampaignId || value.asset.namespace !== "solana" || value.asset.assetStandard === "native") throw new Error("allocation_campaign_or_asset_mismatch");
  } catch {
    context.addIssue({ code: "custom", message: "stock_allocation_binding_invalid" });
  }
});
var StockPackRewardEntitlementV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.rewardEntitlement.v1"),
  authority: z3.enum(["board_rewards", "stock_paid_open"]),
  sourceCampaignId: PortId,
  campaignAssetId: PortId,
  epochId: PortId,
  entitlementVersion: CanonicalUintSchema,
  entitlementDigest: HexDigestSchema,
  cumulativeEntitlementRoot: HexDigestSchema,
  leafDigest: HexDigestSchema,
  actorAccountId: PortId,
  recipientWallet: FundingWallet,
  stockCampaignId: PortId,
  snapshotDigest: HexDigestSchema,
  asset: ChainAssetV1Schema,
  rawAmount: CanonicalPositiveUintSchema,
  allocationDigest: HexDigestSchema,
  inventoryAllocationDigest: HexDigestSchema,
  routeDigest: HexDigestSchema,
  bindingDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    parseCanonicalChainAssetV1(value.asset);
    assertCanonicalDigestField(value, "bindingDigest");
    if (value.asset.namespace !== "solana" || value.asset.assetStandard === "native") throw new Error("reward_requires_token");
  } catch {
    context.addIssue({ code: "custom", message: "reward_entitlement_binding_invalid" });
  }
});
var StockPackRewardClaimRequestV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.rewardClaimRequest.v1"),
  requestId: PortId,
  operationId: PortId,
  actorAccountId: PortId,
  recipientWallet: FundingWallet,
  idempotencyNonce: PortId,
  campaignId: PortId,
  snapshotId: PortId,
  snapshotDigest: HexDigestSchema,
  entitlement: StockPackRewardEntitlementV1Schema,
  expiresAt: IsoTimestampSchema,
  requestDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    assertCanonicalDigestField(value, "requestDigest");
    const entitlement = value.entitlement;
    if (value.actorAccountId !== entitlement.actorAccountId || value.recipientWallet !== entitlement.recipientWallet || value.campaignId !== entitlement.stockCampaignId || value.snapshotDigest !== entitlement.snapshotDigest) {
      throw new Error("reward_request_entitlement_mismatch");
    }
  } catch {
    context.addIssue({ code: "custom", message: "reward_request_binding_invalid" });
  }
});
var StockPackAccessIntentV1Schema = z3.discriminatedUnion("mode", [
  z3.object({ mode: z3.literal("paid"), campaignId: PortId, request: PackOpenRequestV1Schema }).strict(),
  z3.object({ mode: z3.literal("sponsored_reward"), campaignId: PortId, request: StockPackRewardClaimRequestV1Schema }).strict()
]).superRefine((value, context) => {
  try {
    if (value.mode === "paid") parseCanonicalOpenRequestV1(value.request);
    else if (value.campaignId !== value.request.campaignId) throw new Error("reward_campaign_mismatch");
  } catch {
    context.addIssue({ code: "custom", message: "access_request_binding_invalid" });
  }
});
var StockPackRewardClaimCommandV1Schema = z3.object({
  identity: StockPackOperationIdentityV1Schema,
  intent: StockPackAccessIntentV1Schema
}).strict().superRefine((value, context) => {
  const { identity, intent } = value;
  if (identity.kind !== "claim" || intent.mode !== "sponsored_reward" || identity.operationId !== intent.request.operationId || identity.actorAccountId !== intent.request.actorAccountId || identity.nonce !== intent.request.idempotencyNonce || identity.requestDigest !== stockPackOperationIdentity("claim", identity.actorAccountId, identity.nonce, intent).requestDigest) {
    context.addIssue({ code: "custom", message: "reward_claim_identity_mismatch" });
  }
});
var StockPackRewardConsumptionV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.rewardConsumption.v1"),
  consumptionId: PortId,
  operationId: PortId,
  requestDigest: HexDigestSchema,
  entitlementBindingDigest: HexDigestSchema,
  routeDigest: HexDigestSchema,
  consumptionDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    assertCanonicalDigestField(value, "consumptionDigest");
  } catch {
    context.addIssue({ code: "custom", message: "reward_consumption_digest_invalid" });
  }
});
var StockPackRewardDeliveryReceiptV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.rewardDeliveryReceipt.v1"),
  operationId: PortId,
  requestId: PortId,
  requestDigest: HexDigestSchema,
  campaignId: PortId,
  actorAccountId: PortId,
  recipientWallet: FundingWallet,
  snapshotId: PortId,
  snapshotDigest: HexDigestSchema,
  entitlementBindingDigest: HexDigestSchema,
  reservationId: PortId,
  selectedLotId: PortId,
  selectedPositionId: PortId,
  selectedPositionTermsDigest: HexDigestSchema,
  selectionDigest: HexDigestSchema,
  asset: ChainAssetV1Schema,
  rawAmount: CanonicalPositiveUintSchema,
  consumption: StockPackRewardConsumptionV1Schema,
  transactionIds: z3.array(PortId).min(1).max(16),
  finalityEvidenceDigest: HexDigestSchema,
  terminalDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    parseCanonicalChainAssetV1(value.asset);
    assertCanonicalDigestField(value, "terminalDigest");
    if (value.asset.namespace !== "solana" || value.asset.assetStandard === "native" || new Set(value.transactionIds).size !== value.transactionIds.length || value.transactionIds.some((id) => !isCanonicalTransactionIdForChain(id, value.asset.chainId)) || value.consumption.operationId !== value.operationId || value.consumption.requestDigest !== value.requestDigest || value.consumption.entitlementBindingDigest !== value.entitlementBindingDigest) throw new Error("reward_delivery_mismatch");
  } catch {
    context.addIssue({ code: "custom", message: "reward_delivery_binding_invalid" });
  }
});
var StockPackSaleDeliveryReceiptV1Schema = z3.union([
  PackSettlementReceiptV1Schema.superRefine((value, context) => {
    try {
      parseCanonicalSettlementReceiptV1(value);
      if (value.outcome !== "asset_delivered" || !value.deliveredAsset || value.deliveredAssetAmount === "0") {
        throw new Error("sale_requires_delivered_asset");
      }
    } catch {
      context.addIssue({ code: "custom", message: "sale_delivery_receipt_invalid" });
    }
  }),
  StockPackRewardDeliveryReceiptV1Schema
]);
var StockPackRewardSelectionV1Schema = z3.object({
  schema: z3.literal("attn.stockPacks.rewardSelection.v1"),
  requestId: PortId,
  snapshotId: PortId,
  snapshotDigest: HexDigestSchema,
  entitlementBindingDigest: HexDigestSchema,
  reservationId: PortId,
  selectedLotId: PortId,
  selectedPositionId: PortId,
  selectedPositionTermsDigest: HexDigestSchema,
  selectedAsset: ChainAssetV1Schema,
  selectedAssetAmount: CanonicalPositiveUintSchema,
  selectionDigest: HexDigestSchema
}).strict().superRefine((value, context) => {
  try {
    parseCanonicalChainAssetV1(value.selectedAsset);
    assertCanonicalDigestField(value, "selectionDigest");
    if (value.selectedAsset.namespace !== "solana" || value.selectedAsset.assetStandard === "native") throw new Error("reward_requires_token");
  } catch {
    context.addIssue({ code: "custom", message: "reward_selection_binding_invalid" });
  }
});
var StockPackRewardClaimV1Schema = z3.object({
  identity: StockPackOperationIdentityV1Schema,
  campaignId: PortId,
  request: StockPackRewardClaimRequestV1Schema,
  state: z3.enum(["prepared", "reserved", "selected", "delivering", "reconciling", "delivered", "rejected"]),
  reservationId: PortId.nullable(),
  selection: StockPackRewardSelectionV1Schema.nullable(),
  consumption: StockPackRewardConsumptionV1Schema.nullable(),
  receipt: StockPackRewardDeliveryReceiptV1Schema.nullable()
}).strict().superRefine((value, context) => {
  try {
    const { request, selection, consumption, receipt } = value;
    StockPackRewardClaimCommandV1Schema.parse({
      identity: value.identity,
      intent: { mode: "sponsored_reward", campaignId: value.campaignId, request }
    });
    if (selection) {
      if (!value.reservationId || selection.reservationId !== value.reservationId || selection.requestId !== request.requestId || selection.snapshotId !== request.snapshotId || selection.snapshotDigest !== request.snapshotDigest || selection.entitlementBindingDigest !== request.entitlement.bindingDigest || selection.selectedAsset.identityDigest !== request.entitlement.asset.identityDigest || selection.selectedAssetAmount !== request.entitlement.rawAmount) {
        throw new Error("reward_selection_mismatch");
      }
    }
    if (consumption && (consumption.operationId !== request.operationId || consumption.requestDigest !== request.requestDigest || consumption.entitlementBindingDigest !== request.entitlement.bindingDigest || consumption.routeDigest !== request.entitlement.routeDigest)) throw new Error("reward_consumption_mismatch");
    if (value.state === "delivered" !== (receipt !== null)) throw new Error("reward_terminal_state_mismatch");
    if (["prepared", "rejected"].includes(value.state) && (selection || consumption)) throw new Error("reward_obligation_cannot_be_discarded");
    if (value.state === "reserved" && (selection || consumption)) throw new Error("reward_reserved_state_mismatch");
    if (["reserved", "selected", "delivering", "delivered"].includes(value.state) && !value.reservationId) throw new Error("reward_reservation_missing");
    if (["selected", "delivering", "delivered"].includes(value.state) && !selection) throw new Error("reward_selection_missing");
    if (["delivering", "delivered"].includes(value.state) && !consumption) throw new Error("reward_consumption_missing");
    if (receipt && (!selection || !consumption || receipt.operationId !== request.operationId || receipt.requestId !== request.requestId || receipt.requestDigest !== request.requestDigest || receipt.campaignId !== request.campaignId || receipt.actorAccountId !== request.actorAccountId || receipt.recipientWallet !== request.recipientWallet || receipt.snapshotId !== request.snapshotId || receipt.snapshotDigest !== request.snapshotDigest || receipt.entitlementBindingDigest !== request.entitlement.bindingDigest || receipt.reservationId !== value.reservationId || receipt.selectionDigest !== selection.selectionDigest || receipt.selectedLotId !== selection.selectedLotId || receipt.selectedPositionId !== selection.selectedPositionId || receipt.selectedPositionTermsDigest !== selection.selectedPositionTermsDigest || receipt.asset.identityDigest !== request.entitlement.asset.identityDigest || receipt.rawAmount !== request.entitlement.rawAmount || receipt.consumption.consumptionDigest !== consumption.consumptionDigest)) throw new Error("reward_terminal_mismatch");
  } catch {
    context.addIssue({ code: "custom", message: "reward_claim_binding_invalid" });
  }
});
function parseStockPackCampaignAccessV1(input) {
  return StockPackCampaignAccessV1Schema.parse(input);
}
function parseStockPackRewardClaimCommandV1(input) {
  return StockPackRewardClaimCommandV1Schema.parse(input);
}
function parseStockPackRewardClaimV1(input) {
  return StockPackRewardClaimV1Schema.parse(input);
}
export {
  STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS,
  STOCK_PACK_TOKEN_PROGRAMS,
  StockPackErrorCodeSchema,
  StockPackOperationIdentityV1Schema,
  StockPackPayoffCardV1Schema,
  StockPackSaleQuoteV1Schema,
  assertStockPackExecutableQuote,
  assertStockPackSelectionLot,
  canonicalAuthorizationDigest,
  lotRecipeEligibilityDigest,
  parseCanonicalChainAssetV1,
  parseCanonicalInventoryLotV1,
  parseCanonicalOpenRequestV1,
  parseCanonicalSettlementReceiptV1,
  parseStockPackCampaignAccessV1,
  parseStockPackCampaignV1,
  parseStockPackOpenV1,
  parseStockPackPreviewV1,
  parseStockPackRewardClaimCommandV1,
  parseStockPackRewardClaimV1,
  parseStockPackSaleV1,
  stockPackReferenceAt,
  stockPackRemainingSaleLeg,
  stockPackSaleQuoteProceeds,
  stockPackSaleRouteFeeRaw,
  validateStockPackCard,
  validateStockPackTable
};
