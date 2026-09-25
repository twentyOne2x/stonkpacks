// Generated type declarations for index.js (dts-bundle-generator). Do not edit by hand.
import * as z from "zod/v4";

declare const ChainAssetV1Schema: z.ZodDiscriminatedUnion<[
	z.ZodObject<{
		namespace: z.ZodLiteral<"solana">;
		chainId: z.ZodEnum<{
			"solana:mainnet-beta": "solana:mainnet-beta";
			"solana:devnet": "solana:devnet";
		}>;
		assetAddress: z.ZodUnion<readonly [
			z.ZodLiteral<"native">,
			z.ZodString
		]>;
		assetStandard: z.ZodEnum<{
			native: "native";
			spl_token: "spl_token";
			token_2022: "token_2022";
		}>;
		schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
		decimals: z.ZodNumber;
		identityDigest: z.ZodString;
		displayMetadata: z.ZodOptional<z.ZodObject<{
			symbol: z.ZodOptional<z.ZodString>;
			name: z.ZodOptional<z.ZodString>;
			imageUrl: z.ZodOptional<z.ZodString>;
		}, z.core.$strict>>;
	}, z.core.$strict>,
	z.ZodObject<{
		namespace: z.ZodLiteral<"eip155">;
		chainId: z.ZodEnum<{
			"eip155:4663": "eip155:4663";
			"eip155:46630": "eip155:46630";
		}>;
		assetAddress: z.ZodString;
		assetStandard: z.ZodEnum<{
			native: "native";
			erc20: "erc20";
		}>;
		schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
		decimals: z.ZodNumber;
		identityDigest: z.ZodString;
		displayMetadata: z.ZodOptional<z.ZodObject<{
			symbol: z.ZodOptional<z.ZodString>;
			name: z.ZodOptional<z.ZodString>;
			imageUrl: z.ZodOptional<z.ZodString>;
		}, z.core.$strict>>;
	}, z.core.$strict>
], "namespace">;
declare const PackInventoryLotV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.inventoryLot.v1">;
	lotId: z.ZodString;
	targetId: z.ZodOptional<z.ZodString>;
	positionId: z.ZodString;
	positionTermsDigest: z.ZodString;
	marketId: z.ZodString;
	asset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	exactAssetAmount: z.ZodString;
	referenceMarketValueQuoteUnits: z.ZodNullable<z.ZodString>;
	riskAdjustedFloorQuoteUnits: z.ZodString;
	floorStatus: z.ZodEnum<{
		guaranteed: "guaranteed";
		reserved_quote: "reserved_quote";
		indicative: "indicative";
		none: "none";
	}>;
	quoteId: z.ZodNullable<z.ZodString>;
	quoteIssuedAt: z.ZodNullable<z.ZodISODateTime>;
	quoteExpiresAt: z.ZodNullable<z.ZodISODateTime>;
	selectionWeight: z.ZodString;
	recipeEligibilityDigest: z.ZodString;
	state: z.ZodEnum<{
		available: "available";
		reserved: "reserved";
		selected: "selected";
		released: "released";
		settling: "settling";
		terminal: "terminal";
	}>;
}, z.core.$strict>;
declare const PackRecipeV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.recipe.v1">;
	marketId: z.ZodString;
	recipeVersion: z.ZodString;
	actorDirectoryId: z.ZodString;
	creatorActorId: z.ZodString;
	creatorBeneficiaryWallet: z.ZodString;
	protocolBeneficiaryWallet: z.ZodString;
	chaseBeneficiaryWallet: z.ZodString;
	settlementChainId: z.ZodEnum<{
		"solana:mainnet-beta": "solana:mainnet-beta";
		"solana:devnet": "solana:devnet";
		"eip155:4663": "eip155:4663";
		"eip155:46630": "eip155:46630";
	}>;
	quoteAsset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	packDenominationId: z.ZodString;
	exactPackPrincipalQuoteUnits: z.ZodString;
	evaluationProfile: z.ZodOptional<z.ZodLiteral<"sponsor_funded_delivery_v1">>;
	admittedInventoryModes: z.ZodArray<z.ZodEnum<{
		sponsored: "sponsored";
		protocol_owned: "protocol_owned";
		market_backed_consignment: "market_backed_consignment";
		self_backed_standing_bid: "self_backed_standing_bid";
		launch_allocation: "launch_allocation";
	}>>;
	minimumInventoryPositions: z.ZodString;
	minimumExpectedFloorBps: z.ZodNumber;
	maximumAssetConcentrationBps: z.ZodNumber;
	maximumCreatorConcentrationBps: z.ZodNumber;
	maximumLpConcentrationBps: z.ZodNumber;
	maximumSingleOutcomeQuoteUnits: z.ZodString;
	maximumInstantSellPriceImpactBps: z.ZodNumber;
	maximumQuoteAgeMs: z.ZodString;
	allowedSettlementChoices: z.ZodArray<z.ZodEnum<{
		keep_asset: "keep_asset";
		instant_sell: "instant_sell";
		standing_bid: "standing_bid";
		arena_commit: "arena_commit";
	}>>;
	weightCurve: z.ZodEnum<{
		equal_lots: "equal_lots";
		creator_table: "creator_table";
	}>;
	creatorWeightTableDigest: z.ZodNullable<z.ZodString>;
	protocolFeeBps: z.ZodNumber;
	creatorFeeBps: z.ZodNumber;
	chaseFeeBps: z.ZodNumber;
	rewardCampaignIds: z.ZodArray<z.ZodString>;
	randomnessPolicyId: z.ZodString;
	requestQueuePolicyId: z.ZodString;
	status: z.ZodEnum<{
		draft: "draft";
		active: "active";
		simulated: "simulated";
		sealed: "sealed";
		scheduled: "scheduled";
		paused: "paused";
		closed: "closed";
	}>;
	termsDigest: z.ZodString;
}, z.core.$strict>;
declare const PackSnapshotV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.snapshot.v1">;
	snapshotId: z.ZodString;
	marketId: z.ZodString;
	recipeVersion: z.ZodString;
	recipeTermsDigest: z.ZodString;
	requestSequence: z.ZodString;
	positionStateRoot: z.ZodString;
	inventoryRoot: z.ZodString;
	lotCount: z.ZodString;
	totalSelectionWeight: z.ZodString;
	expectedReferenceValueQuoteUnits: z.ZodNullable<z.ZodString>;
	expectedRiskAdjustedFloorQuoteUnits: z.ZodString;
	worstCaseSettlementLiabilityQuoteUnits: z.ZodString;
	reservedQuoteLiquidityQuoteUnits: z.ZodString;
	solvencyCoverageBps: z.ZodNumber;
	sponsorDeliveryReservation: z.ZodOptional<z.ZodObject<{
		schema: z.ZodLiteral<"attn.packNetwork.sponsorDeliveryReservation.v1">;
		maximumConcurrentOrders: z.ZodString;
		positionStateRoot: z.ZodString;
		positions: z.ZodArray<z.ZodObject<{
			positionId: z.ZodString;
			positionTermsDigest: z.ZodString;
			maximumPerOrderAssetAmount: z.ZodString;
			reservedForConcurrentOrdersAssetAmount: z.ZodString;
			availableAtSealAssetAmount: z.ZodString;
			reservationReceiptDigest: z.ZodString;
		}, z.core.$strict>>;
		reservationPlanDigest: z.ZodString;
	}, z.core.$strict>>;
	quoteContext: z.ZodObject<{
		issuedAt: z.ZodISODateTime;
		validUntil: z.ZodISODateTime;
		chainId: z.ZodEnum<{
			"solana:mainnet-beta": "solana:mainnet-beta";
			"solana:devnet": "solana:devnet";
			"eip155:4663": "eip155:4663";
			"eip155:46630": "eip155:46630";
		}>;
		blockHeight: z.ZodString;
		blockHash: z.ZodString;
	}, z.core.$strict>;
	snapshotDigest: z.ZodString;
}, z.core.$strict>;
declare const PackOpenRequestV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.openRequest.v1">;
	requestId: z.ZodString;
	operationId: z.ZodString;
	actorAccountId: z.ZodString;
	payerWallet: z.ZodString;
	recipientWallet: z.ZodString;
	marketId: z.ZodString;
	recipeVersion: z.ZodString;
	recipeTermsDigest: z.ZodString;
	snapshotId: z.ZodString;
	snapshotDigest: z.ZodString;
	exactPrincipalQuoteUnits: z.ZodString;
	maximumTotalCostQuoteUnits: z.ZodString;
	paymentAsset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	paymentAmount: z.ZodString;
	paymentRouteDigest: z.ZodNullable<z.ZodString>;
	originChainId: z.ZodEnum<{
		"solana:mainnet-beta": "solana:mainnet-beta";
		"solana:devnet": "solana:devnet";
		"eip155:4663": "eip155:4663";
		"eip155:46630": "eip155:46630";
	}>;
	originTransactionId: z.ZodNullable<z.ZodString>;
	idempotencyNonce: z.ZodString;
	acceptedAt: z.ZodNullable<z.ZodISODateTime>;
	recipeStatusAtAcceptance: z.ZodNullable<z.ZodLiteral<"active">>;
	acceptanceReceiptDigest: z.ZodNullable<z.ZodString>;
	expiresAt: z.ZodISODateTime;
	state: z.ZodEnum<{
		funded: "funded";
		terminal: "terminal";
		prepared: "prepared";
		queued: "queued";
		snapshot_sealed: "snapshot_sealed";
		randomness_requested: "randomness_requested";
		randomness_fulfilled: "randomness_fulfilled";
		outcome_selected: "outcome_selected";
		settlement_prepared: "settlement_prepared";
		reconciliation_required: "reconciliation_required";
		expired_refundable: "expired_refundable";
	}>;
	requestDigest: z.ZodString;
}, z.core.$strict>;
declare const PackSelectionReceiptV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.selectionReceipt.v1">;
	requestId: z.ZodString;
	snapshotId: z.ZodString;
	snapshotDigest: z.ZodString;
	randomnessRequestId: z.ZodString;
	randomnessProofDigest: z.ZodString;
	randomnessReceiptDigest: z.ZodString;
	randomWord: z.ZodString;
	selectedWeightOffset: z.ZodString;
	acceptanceReceiptDigest: z.ZodString;
	reservationId: z.ZodString;
	reservationReceiptDigest: z.ZodString;
	selectedLotId: z.ZodString;
	selectedPositionId: z.ZodString;
	selectedPositionTermsDigest: z.ZodString;
	selectedAsset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	selectedAssetAmount: z.ZodString;
	selectedFloorQuoteUnits: z.ZodString;
	selectedReferenceValueQuoteUnits: z.ZodNullable<z.ZodString>;
	selectionDigest: z.ZodString;
}, z.core.$strict>;
declare const PackSettlementReceiptV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.settlementReceipt.v1">;
	requestId: z.ZodString;
	requestDigest: z.ZodString;
	operationId: z.ZodString;
	marketId: z.ZodString;
	recipeVersion: z.ZodString;
	recipeTermsDigest: z.ZodString;
	snapshotId: z.ZodString;
	snapshotDigest: z.ZodString;
	acceptanceReceiptDigest: z.ZodString;
	terminalSequence: z.ZodString;
	originChainId: z.ZodEnum<{
		"solana:mainnet-beta": "solana:mainnet-beta";
		"solana:devnet": "solana:devnet";
		"eip155:4663": "eip155:4663";
		"eip155:46630": "eip155:46630";
	}>;
	selectionDigest: z.ZodString;
	selectedPositionId: z.ZodString;
	selectedPositionTermsDigest: z.ZodString;
	choiceDigest: z.ZodString;
	outcome: z.ZodEnum<{
		asset_delivered: "asset_delivered";
		instant_sell_paid: "instant_sell_paid";
		standing_bid_paid: "standing_bid_paid";
		arena_committed: "arena_committed";
		refunded: "refunded";
	}>;
	recipientWallet: z.ZodString;
	deliveredAsset: z.ZodNullable<z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">>;
	deliveredAssetAmount: z.ZodString;
	paidQuoteAsset: z.ZodNullable<z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">>;
	paidQuoteAmount: z.ZodString;
	accountingQuoteAsset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	exactPrincipalQuoteUnits: z.ZodString;
	externalQuoteInflowQuoteUnits: z.ZodString;
	lpRecipient: z.ZodNullable<z.ZodString>;
	lpPaidQuoteAmount: z.ZodString;
	creatorRecipient: z.ZodNullable<z.ZodString>;
	creatorFeeQuoteAmount: z.ZodString;
	protocolRecipient: z.ZodNullable<z.ZodString>;
	protocolFeeQuoteAmount: z.ZodString;
	chaseRecipient: z.ZodNullable<z.ZodString>;
	chaseFeeQuoteAmount: z.ZodString;
	venueAndNetworkCostQuoteAmount: z.ZodString;
	reserveDeltaQuoteAmount: z.ZodString;
	originTransactionIds: z.ZodArray<z.ZodString>;
	originFinality: z.ZodLiteral<"finalized">;
	terminalAt: z.ZodISODateTime;
	terminalDigest: z.ZodString;
}, z.core.$strict>;
declare const PackEntitlementLeafV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.packNetwork.entitlementLeaf.v1">;
	epochId: z.ZodString;
	distributor: z.ZodString;
	marketId: z.ZodString;
	requestId: z.ZodString;
	terminalDigest: z.ZodString;
	terminalSequence: z.ZodString;
	originChainId: z.ZodEnum<{
		"solana:mainnet-beta": "solana:mainnet-beta";
		"solana:devnet": "solana:devnet";
		"eip155:4663": "eip155:4663";
		"eip155:46630": "eip155:46630";
	}>;
	asset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	exactAmount: z.ZodString;
	recipientWallet: z.ZodString;
	leafIndex: z.ZodString;
	leafDigest: z.ZodString;
}, z.core.$strict>;
export type ChainAssetV1 = Readonly<z.infer<typeof ChainAssetV1Schema>>;
export type PackInventoryLotV1 = Readonly<z.infer<typeof PackInventoryLotV1Schema>>;
export type PackRecipeV1 = Readonly<z.infer<typeof PackRecipeV1Schema>>;
export type PackSnapshotV1 = Readonly<z.infer<typeof PackSnapshotV1Schema>>;
export type PackOpenRequestV1 = Readonly<z.infer<typeof PackOpenRequestV1Schema>>;
export type PackSelectionReceiptV1 = Readonly<z.infer<typeof PackSelectionReceiptV1Schema>>;
export type PackSettlementReceiptV1 = Readonly<z.infer<typeof PackSettlementReceiptV1Schema>>;
export type PackEntitlementLeafV1 = Readonly<z.infer<typeof PackEntitlementLeafV1Schema>>;
export declare function canonicalAuthorizationDigest(value: unknown): string;
export declare function lotRecipeEligibilityDigest(lot: Pick<PackInventoryLotV1, "asset" | "exactAssetAmount" | "floorStatus" | "lotId" | "marketId" | "positionId" | "positionTermsDigest" | "quoteExpiresAt" | "quoteId" | "quoteIssuedAt" | "riskAdjustedFloorQuoteUnits" | "selectionWeight">, recipe: Pick<PackRecipeV1, "packDenominationId" | "recipeVersion" | "termsDigest">): string;
export declare const STOCK_PACK_TOKEN_PROGRAMS: {
	readonly spl_token: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
	readonly token_2022: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
};
declare const StockPackAssetV1Schema: z.ZodObject<{
	asset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	kind: z.ZodEnum<{
		stock_token: "stock_token";
		community_token: "community_token";
	}>;
	tokenProgram: z.ZodString;
	admittedExtensions: z.ZodArray<z.ZodString>;
	admissionDigest: z.ZodString;
	observedAt: z.ZodISODateTime;
	displayMultiplier: z.ZodObject<{
		numerator: z.ZodString;
		denominator: z.ZodString;
		observedAt: z.ZodISODateTime;
	}, z.core.$strict>;
}, z.core.$strict>;
export type StockPackAssetV1 = z.infer<typeof StockPackAssetV1Schema>;
declare const Amount: z.ZodObject<{
	asset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	rawAmount: z.ZodString;
}, z.core.$strict>;
export type StockPackAmountV1 = z.infer<typeof Amount>;
declare const StockPackReferenceV1Schema: z.ZodDiscriminatedUnion<[
	z.ZodObject<{
		state: z.ZodLiteral<"unavailable">;
		reason: z.ZodString;
	}, z.core.$strict>,
	z.ZodObject<{
		state: z.ZodEnum<{
			available: "available";
			stale: "stale";
		}>;
		input: z.ZodObject<{
			asset: z.ZodDiscriminatedUnion<[
				z.ZodObject<{
					namespace: z.ZodLiteral<"solana">;
					chainId: z.ZodEnum<{
						"solana:mainnet-beta": "solana:mainnet-beta";
						"solana:devnet": "solana:devnet";
					}>;
					assetAddress: z.ZodUnion<readonly [
						z.ZodLiteral<"native">,
						z.ZodString
					]>;
					assetStandard: z.ZodEnum<{
						native: "native";
						spl_token: "spl_token";
						token_2022: "token_2022";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>,
				z.ZodObject<{
					namespace: z.ZodLiteral<"eip155">;
					chainId: z.ZodEnum<{
						"eip155:4663": "eip155:4663";
						"eip155:46630": "eip155:46630";
					}>;
					assetAddress: z.ZodString;
					assetStandard: z.ZodEnum<{
						native: "native";
						erc20: "erc20";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>
			], "namespace">;
			rawAmount: z.ZodString;
		}, z.core.$strict>;
		value: z.ZodObject<{
			asset: z.ZodDiscriminatedUnion<[
				z.ZodObject<{
					namespace: z.ZodLiteral<"solana">;
					chainId: z.ZodEnum<{
						"solana:mainnet-beta": "solana:mainnet-beta";
						"solana:devnet": "solana:devnet";
					}>;
					assetAddress: z.ZodUnion<readonly [
						z.ZodLiteral<"native">,
						z.ZodString
					]>;
					assetStandard: z.ZodEnum<{
						native: "native";
						spl_token: "spl_token";
						token_2022: "token_2022";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>,
				z.ZodObject<{
					namespace: z.ZodLiteral<"eip155">;
					chainId: z.ZodEnum<{
						"eip155:4663": "eip155:4663";
						"eip155:46630": "eip155:46630";
					}>;
					assetAddress: z.ZodString;
					assetStandard: z.ZodEnum<{
						native: "native";
						erc20: "erc20";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>
			], "namespace">;
			rawAmount: z.ZodString;
		}, z.core.$strict>;
		observedAt: z.ZodISODateTime;
		validUntil: z.ZodISODateTime;
		evidenceDigest: z.ZodString;
	}, z.core.$strict>
], "state">;
export type StockPackReferenceV1 = z.infer<typeof StockPackReferenceV1Schema>;
/** A missing estimate remains unavailable; stale evidence never silently becomes zero. */
export declare function stockPackReferenceAt(reference: StockPackReferenceV1, now: string): StockPackReferenceV1;
export declare const StockPackSaleQuoteV1Schema: z.ZodObject<{
	quoteId: z.ZodString;
	quoteDigest: z.ZodString;
	actorAccountId: z.ZodString;
	wallet: z.ZodString;
	input: z.ZodObject<{
		asset: z.ZodDiscriminatedUnion<[
			z.ZodObject<{
				namespace: z.ZodLiteral<"solana">;
				chainId: z.ZodEnum<{
					"solana:mainnet-beta": "solana:mainnet-beta";
					"solana:devnet": "solana:devnet";
				}>;
				assetAddress: z.ZodUnion<readonly [
					z.ZodLiteral<"native">,
					z.ZodString
				]>;
				assetStandard: z.ZodEnum<{
					native: "native";
					spl_token: "spl_token";
					token_2022: "token_2022";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>,
			z.ZodObject<{
				namespace: z.ZodLiteral<"eip155">;
				chainId: z.ZodEnum<{
					"eip155:4663": "eip155:4663";
					"eip155:46630": "eip155:46630";
				}>;
				assetAddress: z.ZodString;
				assetStandard: z.ZodEnum<{
					native: "native";
					erc20: "erc20";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>
		], "namespace">;
		rawAmount: z.ZodString;
	}, z.core.$strict>;
	minimumOutput: z.ZodObject<{
		asset: z.ZodDiscriminatedUnion<[
			z.ZodObject<{
				namespace: z.ZodLiteral<"solana">;
				chainId: z.ZodEnum<{
					"solana:mainnet-beta": "solana:mainnet-beta";
					"solana:devnet": "solana:devnet";
				}>;
				assetAddress: z.ZodUnion<readonly [
					z.ZodLiteral<"native">,
					z.ZodString
				]>;
				assetStandard: z.ZodEnum<{
					native: "native";
					spl_token: "spl_token";
					token_2022: "token_2022";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>,
			z.ZodObject<{
				namespace: z.ZodLiteral<"eip155">;
				chainId: z.ZodEnum<{
					"eip155:4663": "eip155:4663";
					"eip155:46630": "eip155:46630";
				}>;
				assetAddress: z.ZodString;
				assetStandard: z.ZodEnum<{
					native: "native";
					erc20: "erc20";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>
		], "namespace">;
		rawAmount: z.ZodString;
	}, z.core.$strict>;
	fees: z.ZodArray<z.ZodObject<{
		kind: z.ZodEnum<{
			venue: "venue";
			network: "network";
			platform: "platform";
		}>;
		amount: z.ZodObject<{
			asset: z.ZodDiscriminatedUnion<[
				z.ZodObject<{
					namespace: z.ZodLiteral<"solana">;
					chainId: z.ZodEnum<{
						"solana:mainnet-beta": "solana:mainnet-beta";
						"solana:devnet": "solana:devnet";
					}>;
					assetAddress: z.ZodUnion<readonly [
						z.ZodLiteral<"native">,
						z.ZodString
					]>;
					assetStandard: z.ZodEnum<{
						native: "native";
						spl_token: "spl_token";
						token_2022: "token_2022";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>,
				z.ZodObject<{
					namespace: z.ZodLiteral<"eip155">;
					chainId: z.ZodEnum<{
						"eip155:4663": "eip155:4663";
						"eip155:46630": "eip155:46630";
					}>;
					assetAddress: z.ZodString;
					assetStandard: z.ZodEnum<{
						native: "native";
						erc20: "erc20";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>
			], "namespace">;
			rawAmount: z.ZodString;
		}, z.core.$strict>;
	}, z.core.$strict>>;
	issuedAt: z.ZodISODateTime;
	expiresAt: z.ZodISODateTime;
	execution: z.ZodEnum<{
		atomic: "atomic";
		sequential: "sequential";
	}>;
	legs: z.ZodArray<z.ZodObject<{
		legId: z.ZodString;
		venue: z.ZodEnum<{
			launchlab: "launchlab";
			cpmm: "cpmm";
			clmm: "clmm";
			aggregator: "aggregator";
		}>;
		programIds: z.ZodArray<z.ZodString>;
		input: z.ZodObject<{
			asset: z.ZodDiscriminatedUnion<[
				z.ZodObject<{
					namespace: z.ZodLiteral<"solana">;
					chainId: z.ZodEnum<{
						"solana:mainnet-beta": "solana:mainnet-beta";
						"solana:devnet": "solana:devnet";
					}>;
					assetAddress: z.ZodUnion<readonly [
						z.ZodLiteral<"native">,
						z.ZodString
					]>;
					assetStandard: z.ZodEnum<{
						native: "native";
						spl_token: "spl_token";
						token_2022: "token_2022";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>,
				z.ZodObject<{
					namespace: z.ZodLiteral<"eip155">;
					chainId: z.ZodEnum<{
						"eip155:4663": "eip155:4663";
						"eip155:46630": "eip155:46630";
					}>;
					assetAddress: z.ZodString;
					assetStandard: z.ZodEnum<{
						native: "native";
						erc20: "erc20";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>
			], "namespace">;
			rawAmount: z.ZodString;
		}, z.core.$strict>;
		minimumOutput: z.ZodObject<{
			asset: z.ZodDiscriminatedUnion<[
				z.ZodObject<{
					namespace: z.ZodLiteral<"solana">;
					chainId: z.ZodEnum<{
						"solana:mainnet-beta": "solana:mainnet-beta";
						"solana:devnet": "solana:devnet";
					}>;
					assetAddress: z.ZodUnion<readonly [
						z.ZodLiteral<"native">,
						z.ZodString
					]>;
					assetStandard: z.ZodEnum<{
						native: "native";
						spl_token: "spl_token";
						token_2022: "token_2022";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>,
				z.ZodObject<{
					namespace: z.ZodLiteral<"eip155">;
					chainId: z.ZodEnum<{
						"eip155:4663": "eip155:4663";
						"eip155:46630": "eip155:46630";
					}>;
					assetAddress: z.ZodString;
					assetStandard: z.ZodEnum<{
						native: "native";
						erc20: "erc20";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>
			], "namespace">;
			rawAmount: z.ZodString;
		}, z.core.$strict>;
	}, z.core.$strict>>;
}, z.core.$strict>;
export type StockPackSaleQuoteV1 = z.infer<typeof StockPackSaleQuoteV1Schema>;
export type StockPackQuoteViewV1 = {
	state: "unavailable";
	reason: string;
} | {
	state: "indicative" | "executable" | "expired";
	quote: StockPackSaleQuoteV1;
};
export declare const StockPackErrorCodeSchema: z.ZodEnum<{
	reconciliation_required: "reconciliation_required";
	intent_conflict: "intent_conflict";
	not_found: "not_found";
	unauthorized: "unauthorized";
	unsupported_asset: "unsupported_asset";
	missing_evidence: "missing_evidence";
	stale_evidence: "stale_evidence";
	invalid_weights: "invalid_weights";
	invalid_contract: "invalid_contract";
	quote_expired: "quote_expired";
	quote_mismatch: "quote_mismatch";
	insufficient_inventory: "insufficient_inventory";
	inventory_committed: "inventory_committed";
	campaign_paused: "campaign_paused";
	payment_pending: "payment_pending";
	delivery_pending: "delivery_pending";
	signature_rejected: "signature_rejected";
	route_unavailable: "route_unavailable";
	rate_limited: "rate_limited";
}>;
export type StockPackErrorCode = z.infer<typeof StockPackErrorCodeSchema>;
export type StockPackResult<T> = {
	ok: true;
	value: T;
} | {
	ok: false;
	error: {
		code: StockPackErrorCode;
		message: string;
		operationId: string | null;
		reason?: "authorization_expired" | "cap_exceeded";
		maximumRawAmount?: string;
		requestedRawAmount?: string;
		/** The declared HTTP status of a caught StockMoneyRefusal (cap, kill-switch, or allowlist), preserved
		 * end to end so the HTTP host never collapses a distinct refusal into a generic status. */
		status?: number;
	};
};
export declare const StockPackOperationIdentityV1Schema: z.ZodObject<{
	kind: z.ZodEnum<{
		launch: "launch";
		deposit: "deposit";
		reservation: "reservation";
		open: "open";
		claim: "claim";
		fee_claim: "fee_claim";
		sale: "sale";
		publish: "publish";
		withdrawal: "withdrawal";
	}>;
	operationId: z.ZodString;
	actorAccountId: z.ZodString;
	nonce: z.ZodString;
	requestDigest: z.ZodString;
}, z.core.$strict>;
export type StockPackOperationIdentityV1 = z.infer<typeof StockPackOperationIdentityV1Schema>;
export type StockPackDeliveryV1 = {
	state: "selected" | "pending" | "reconciling";
	recipientWallet: string;
	transactionIds: readonly string[];
	receipt: null;
} | {
	state: "delivered";
	recipientWallet: string;
	transactionIds: readonly string[];
	receipt: PackSettlementReceiptV1;
};
export type StockPackPayoffCardV1 = Readonly<{
	cardId: string;
	snapshotId: string;
	snapshotDigest: string;
	lot: PackInventoryLotV1;
	instrument: StockPackAssetV1;
	probability: {
		weight: string;
		total: "10000";
	};
	reference: StockPackReferenceV1;
	saleQuote: StockPackQuoteViewV1;
	delivery: StockPackDeliveryV1 | null;
}>;
/** Validate the canonical table without reimplementing the SMM evaluator. */
export declare function validateStockPackTable(input: {
	recipe: PackRecipeV1;
	snapshot: PackSnapshotV1;
	lots: readonly PackInventoryLotV1[];
}): void;
export declare function assertStockPackExecutableQuote(quote: StockPackSaleQuoteV1, input: {
	actorAccountId: string;
	wallet: string;
	amount: StockPackAmountV1;
	outputAssetDigest: string;
	now: string;
}): void;
export declare const STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS = 100;
/** floor(executable minimum * feeBps / 10000) in exact raw units; the fee never exceeds feeBps of the floor. */
export declare function stockPackSaleRouteFeeRaw(minimumOutputRaw: string, feeBps: number): string;
export type StockPackSaleQuoteProceedsV1 = Readonly<{
	executableOutput: StockPackAmountV1;
	platformFee: StockPackAmountV1;
	proceedsAfterFee: StockPackAmountV1;
}>;
/**
 * Disclosure derived only from the digest-bound quote: at most one platform fee, in the output asset,
 * strictly below the executable minimum. A quote without a platform entry discloses a zero fee.
 */
export declare function stockPackSaleQuoteProceeds(quote: StockPackSaleQuoteV1): StockPackSaleQuoteProceedsV1;
export declare function validateStockPackCard(card: StockPackPayoffCardV1, snapshot: PackSnapshotV1): void;
export type StockPackOpenV1 = Readonly<{
	identity: StockPackOperationIdentityV1;
	campaignId: string;
	reservationId: string;
	request: PackOpenRequestV1;
	selection: PackSelectionReceiptV1 | null;
	delivery: StockPackDeliveryV1 | null;
}>;
export type StockPackSaleV1 = Readonly<{
	identity: StockPackOperationIdentityV1;
	wallet: string;
	/** Null permits the sale lane to test an already-held asset independently. */
	deliveryReceiptDigest: string | null;
	quote: StockPackSaleQuoteV1;
	state: "prepared" | "pending" | "reconciling" | "intermediate_held" | "completed" | "rejected";
	completedLegIds: readonly string[];
	transactionIds: readonly string[];
	/** Authoritative holding only; never the projected final quote output. */
	actualHolding: StockPackAmountV1 | null;
	observedAt: string | null;
}>;
/** Recovery must re-quote this actual holding, and may execute only the remaining leg. */
export declare function stockPackRemainingSaleLeg(sale: StockPackSaleV1): string | null;
/** Exact selection binding used before any delivery is attempted. */
export declare function assertStockPackSelectionLot(selection: PackSelectionReceiptV1, lot: PackInventoryLotV1): void;
export declare const StockPackPayoffCardV1Schema: z.ZodType<StockPackPayoffCardV1>;
export declare function parseStockPackOpenV1(input: unknown): StockPackOpenV1;
export declare function parseStockPackSaleV1(input: unknown): StockPackSaleV1;
/** Actor comes from existing Privy authentication; this is not a wallet or signer API. */
export type StockPackActorV1 = Readonly<{
	actorAccountId: string;
	wallet: string;
}>;
export type StockPackReadV1 = Readonly<{
	actorAccountId: string;
	operationId: string;
}>;
export type StockPackCommandV1<K extends StockPackOperationIdentityV1["kind"], T> = Readonly<{
	identity: StockPackOperationIdentityV1 & {
		kind: K;
	};
	intent: T;
}>;
export type StockPackRecoverV1 = StockPackReadV1 & Readonly<{
	requestDigest: string;
}>;
export type StockPackPreviewV1 = Readonly<{
	previewId: string;
	previewDigest: string;
	campaignId: string;
	inventoryRevision: string;
	recipe: PackRecipeV1;
	snapshot: PackSnapshotV1;
	lots: readonly PackInventoryLotV1[];
	cards: readonly StockPackPayoffCardV1[];
	maximumPurchaseCount: string;
	referenceExpectedValue: StockPackReferenceV1;
	indicativeLiquidationExpectedValue: StockPackReferenceV1;
	evaluatorReceiptDigest: string;
	validUntil: string;
}>;
export type StockPackCampaignV1 = Readonly<{
	campaignId: string;
	creatorActorId: string;
	state: "draft" | "published" | "paused" | "exhausted";
	preview: StockPackPreviewV1;
	publishIdentity: (StockPackOperationIdentityV1 & {
		kind: "publish";
	}) | null;
}>;
export interface StockPackOrderPortV1 {
	open(command: StockPackCommandV1<"open", {
		campaignId: string;
		previewId: string;
		previewDigest: string;
		inventoryRevision: string;
		request: PackOpenRequestV1;
	}>): Promise<StockPackResult<StockPackOpenV1>>;
	read(query: StockPackReadV1): Promise<StockPackResult<StockPackOpenV1>>;
	recover(query: StockPackRecoverV1): Promise<StockPackResult<StockPackOpenV1>>;
}
export interface StockPackSalePortV1 {
	/** Existing Privy reviewed-intent authorization is bound to this exact quote, not arbitrary bytes. */
	sell(command: StockPackCommandV1<"sale", {
		quote: StockPackSaleQuoteV1;
		authorizationReceiptDigest: string;
		deliveryReceipt: StockPackSaleDeliveryReceiptV1 | null;
	}>): Promise<StockPackResult<StockPackSaleV1>>;
	read(query: StockPackReadV1): Promise<StockPackResult<StockPackSaleV1>>;
	recover(query: StockPackRecoverV1): Promise<StockPackResult<StockPackSaleV1>>;
	/** Only after authoritative first-leg finality; new quote/authorization spends actual intermediate units. */
	resumeRemaining(input: StockPackRecoverV1 & {
		remainingLegId: string;
		quote: StockPackSaleQuoteV1;
		authorizationReceiptDigest: string;
	}): Promise<StockPackResult<StockPackSaleV1>>;
}
export declare function parseStockPackPreviewV1(input: unknown): StockPackPreviewV1;
export declare function parseStockPackCampaignV1(input: unknown): StockPackCampaignV1;
declare const StockPackCampaignAccessV1Schema: z.ZodDiscriminatedUnion<[
	z.ZodObject<{
		mode: z.ZodLiteral<"paid">;
	}, z.core.$strict>,
	z.ZodObject<{
		mode: z.ZodLiteral<"sponsored_reward">;
		rewardCampaignId: z.ZodString;
	}, z.core.$strict>
], "mode">;
export type StockPackCampaignAccessV1 = z.infer<typeof StockPackCampaignAccessV1Schema>;
declare const StockPackAccessIntentV1Schema: z.ZodDiscriminatedUnion<[
	z.ZodObject<{
		mode: z.ZodLiteral<"paid">;
		campaignId: z.ZodString;
		request: z.ZodObject<{
			schema: z.ZodLiteral<"attn.packNetwork.openRequest.v1">;
			requestId: z.ZodString;
			operationId: z.ZodString;
			actorAccountId: z.ZodString;
			payerWallet: z.ZodString;
			recipientWallet: z.ZodString;
			marketId: z.ZodString;
			recipeVersion: z.ZodString;
			recipeTermsDigest: z.ZodString;
			snapshotId: z.ZodString;
			snapshotDigest: z.ZodString;
			exactPrincipalQuoteUnits: z.ZodString;
			maximumTotalCostQuoteUnits: z.ZodString;
			paymentAsset: z.ZodDiscriminatedUnion<[
				z.ZodObject<{
					namespace: z.ZodLiteral<"solana">;
					chainId: z.ZodEnum<{
						"solana:mainnet-beta": "solana:mainnet-beta";
						"solana:devnet": "solana:devnet";
					}>;
					assetAddress: z.ZodUnion<readonly [
						z.ZodLiteral<"native">,
						z.ZodString
					]>;
					assetStandard: z.ZodEnum<{
						native: "native";
						spl_token: "spl_token";
						token_2022: "token_2022";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>,
				z.ZodObject<{
					namespace: z.ZodLiteral<"eip155">;
					chainId: z.ZodEnum<{
						"eip155:4663": "eip155:4663";
						"eip155:46630": "eip155:46630";
					}>;
					assetAddress: z.ZodString;
					assetStandard: z.ZodEnum<{
						native: "native";
						erc20: "erc20";
					}>;
					schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
					decimals: z.ZodNumber;
					identityDigest: z.ZodString;
					displayMetadata: z.ZodOptional<z.ZodObject<{
						symbol: z.ZodOptional<z.ZodString>;
						name: z.ZodOptional<z.ZodString>;
						imageUrl: z.ZodOptional<z.ZodString>;
					}, z.core.$strict>>;
				}, z.core.$strict>
			], "namespace">;
			paymentAmount: z.ZodString;
			paymentRouteDigest: z.ZodNullable<z.ZodString>;
			originChainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			originTransactionId: z.ZodNullable<z.ZodString>;
			idempotencyNonce: z.ZodString;
			acceptedAt: z.ZodNullable<z.ZodISODateTime>;
			recipeStatusAtAcceptance: z.ZodNullable<z.ZodLiteral<"active">>;
			acceptanceReceiptDigest: z.ZodNullable<z.ZodString>;
			expiresAt: z.ZodISODateTime;
			state: z.ZodEnum<{
				funded: "funded";
				terminal: "terminal";
				prepared: "prepared";
				queued: "queued";
				snapshot_sealed: "snapshot_sealed";
				randomness_requested: "randomness_requested";
				randomness_fulfilled: "randomness_fulfilled";
				outcome_selected: "outcome_selected";
				settlement_prepared: "settlement_prepared";
				reconciliation_required: "reconciliation_required";
				expired_refundable: "expired_refundable";
			}>;
			requestDigest: z.ZodString;
		}, z.core.$strict>;
	}, z.core.$strict>,
	z.ZodObject<{
		mode: z.ZodLiteral<"sponsored_reward">;
		campaignId: z.ZodString;
		request: z.ZodObject<{
			schema: z.ZodLiteral<"attn.stockPacks.rewardClaimRequest.v1">;
			requestId: z.ZodString;
			operationId: z.ZodString;
			actorAccountId: z.ZodString;
			recipientWallet: z.ZodString;
			idempotencyNonce: z.ZodString;
			campaignId: z.ZodString;
			snapshotId: z.ZodString;
			snapshotDigest: z.ZodString;
			entitlement: z.ZodType<Readonly<{
				schema: "attn.stockPacks.rewardEntitlement.v1";
				authority: "board_rewards" | "stock_paid_open";
				sourceCampaignId: string;
				campaignAssetId: string;
				epochId: string;
				entitlementVersion: string;
				entitlementDigest: string;
				cumulativeEntitlementRoot: string;
				leafDigest: string;
				actorAccountId: string;
				recipientWallet: PackEntitlementLeafV1["recipientWallet"];
				stockCampaignId: string;
				snapshotDigest: string;
				asset: PackEntitlementLeafV1["asset"];
				rawAmount: PackEntitlementLeafV1["exactAmount"];
				allocationDigest: string;
				inventoryAllocationDigest: string;
				routeDigest: string;
				bindingDigest: string;
			}>, unknown, z.core.$ZodTypeInternals<Readonly<{
				schema: "attn.stockPacks.rewardEntitlement.v1";
				authority: "board_rewards" | "stock_paid_open";
				sourceCampaignId: string;
				campaignAssetId: string;
				epochId: string;
				entitlementVersion: string;
				entitlementDigest: string;
				cumulativeEntitlementRoot: string;
				leafDigest: string;
				actorAccountId: string;
				recipientWallet: PackEntitlementLeafV1["recipientWallet"];
				stockCampaignId: string;
				snapshotDigest: string;
				asset: PackEntitlementLeafV1["asset"];
				rawAmount: PackEntitlementLeafV1["exactAmount"];
				allocationDigest: string;
				inventoryAllocationDigest: string;
				routeDigest: string;
				bindingDigest: string;
			}>, unknown>>;
			expiresAt: z.ZodISODateTime;
			requestDigest: z.ZodString;
		}, z.core.$strict>;
	}, z.core.$strict>
], "mode">;
export type StockPackAccessIntentV1 = z.infer<typeof StockPackAccessIntentV1Schema>;
export type StockPackRewardClaimIntentV1 = Extract<StockPackAccessIntentV1, {
	mode: "sponsored_reward";
}>;
export type StockPackRewardClaimCommandV1 = StockPackCommandV1<"claim", StockPackRewardClaimIntentV1>;
declare const StockPackRewardDeliveryReceiptV1Schema: z.ZodObject<{
	schema: z.ZodLiteral<"attn.stockPacks.rewardDeliveryReceipt.v1">;
	operationId: z.ZodString;
	requestId: z.ZodString;
	requestDigest: z.ZodString;
	campaignId: z.ZodString;
	actorAccountId: z.ZodString;
	recipientWallet: z.ZodString;
	snapshotId: z.ZodString;
	snapshotDigest: z.ZodString;
	entitlementBindingDigest: z.ZodString;
	reservationId: z.ZodString;
	selectedLotId: z.ZodString;
	selectedPositionId: z.ZodString;
	selectedPositionTermsDigest: z.ZodString;
	selectionDigest: z.ZodString;
	asset: z.ZodDiscriminatedUnion<[
		z.ZodObject<{
			namespace: z.ZodLiteral<"solana">;
			chainId: z.ZodEnum<{
				"solana:mainnet-beta": "solana:mainnet-beta";
				"solana:devnet": "solana:devnet";
			}>;
			assetAddress: z.ZodUnion<readonly [
				z.ZodLiteral<"native">,
				z.ZodString
			]>;
			assetStandard: z.ZodEnum<{
				native: "native";
				spl_token: "spl_token";
				token_2022: "token_2022";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>,
		z.ZodObject<{
			namespace: z.ZodLiteral<"eip155">;
			chainId: z.ZodEnum<{
				"eip155:4663": "eip155:4663";
				"eip155:46630": "eip155:46630";
			}>;
			assetAddress: z.ZodString;
			assetStandard: z.ZodEnum<{
				native: "native";
				erc20: "erc20";
			}>;
			schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
			decimals: z.ZodNumber;
			identityDigest: z.ZodString;
			displayMetadata: z.ZodOptional<z.ZodObject<{
				symbol: z.ZodOptional<z.ZodString>;
				name: z.ZodOptional<z.ZodString>;
				imageUrl: z.ZodOptional<z.ZodString>;
			}, z.core.$strict>>;
		}, z.core.$strict>
	], "namespace">;
	rawAmount: z.ZodString;
	consumption: z.ZodObject<{
		schema: z.ZodLiteral<"attn.stockPacks.rewardConsumption.v1">;
		consumptionId: z.ZodString;
		operationId: z.ZodString;
		requestDigest: z.ZodString;
		entitlementBindingDigest: z.ZodString;
		routeDigest: z.ZodString;
		consumptionDigest: z.ZodString;
	}, z.core.$strict>;
	transactionIds: z.ZodArray<z.ZodString>;
	finalityEvidenceDigest: z.ZodString;
	terminalDigest: z.ZodString;
}, z.core.$strict>;
export type StockPackRewardDeliveryReceiptV1 = z.infer<typeof StockPackRewardDeliveryReceiptV1Schema>;
/** Resale accepts either real delivery terminal, never a reward disguised as paid. */
export type StockPackSaleDeliveryReceiptV1 = PackSettlementReceiptV1 | StockPackRewardDeliveryReceiptV1;
declare const StockPackRewardClaimV1Schema: z.ZodObject<{
	identity: z.ZodObject<{
		kind: z.ZodEnum<{
			launch: "launch";
			deposit: "deposit";
			reservation: "reservation";
			open: "open";
			claim: "claim";
			fee_claim: "fee_claim";
			sale: "sale";
			publish: "publish";
			withdrawal: "withdrawal";
		}>;
		operationId: z.ZodString;
		actorAccountId: z.ZodString;
		nonce: z.ZodString;
		requestDigest: z.ZodString;
	}, z.core.$strict>;
	campaignId: z.ZodString;
	request: z.ZodObject<{
		schema: z.ZodLiteral<"attn.stockPacks.rewardClaimRequest.v1">;
		requestId: z.ZodString;
		operationId: z.ZodString;
		actorAccountId: z.ZodString;
		recipientWallet: z.ZodString;
		idempotencyNonce: z.ZodString;
		campaignId: z.ZodString;
		snapshotId: z.ZodString;
		snapshotDigest: z.ZodString;
		entitlement: z.ZodType<Readonly<{
			schema: "attn.stockPacks.rewardEntitlement.v1";
			authority: "board_rewards" | "stock_paid_open";
			sourceCampaignId: string;
			campaignAssetId: string;
			epochId: string;
			entitlementVersion: string;
			entitlementDigest: string;
			cumulativeEntitlementRoot: string;
			leafDigest: string;
			actorAccountId: string;
			recipientWallet: PackEntitlementLeafV1["recipientWallet"];
			stockCampaignId: string;
			snapshotDigest: string;
			asset: PackEntitlementLeafV1["asset"];
			rawAmount: PackEntitlementLeafV1["exactAmount"];
			allocationDigest: string;
			inventoryAllocationDigest: string;
			routeDigest: string;
			bindingDigest: string;
		}>, unknown, z.core.$ZodTypeInternals<Readonly<{
			schema: "attn.stockPacks.rewardEntitlement.v1";
			authority: "board_rewards" | "stock_paid_open";
			sourceCampaignId: string;
			campaignAssetId: string;
			epochId: string;
			entitlementVersion: string;
			entitlementDigest: string;
			cumulativeEntitlementRoot: string;
			leafDigest: string;
			actorAccountId: string;
			recipientWallet: PackEntitlementLeafV1["recipientWallet"];
			stockCampaignId: string;
			snapshotDigest: string;
			asset: PackEntitlementLeafV1["asset"];
			rawAmount: PackEntitlementLeafV1["exactAmount"];
			allocationDigest: string;
			inventoryAllocationDigest: string;
			routeDigest: string;
			bindingDigest: string;
		}>, unknown>>;
		expiresAt: z.ZodISODateTime;
		requestDigest: z.ZodString;
	}, z.core.$strict>;
	state: z.ZodEnum<{
		reserved: "reserved";
		selected: "selected";
		prepared: "prepared";
		reconciling: "reconciling";
		delivered: "delivered";
		rejected: "rejected";
		delivering: "delivering";
	}>;
	reservationId: z.ZodNullable<z.ZodString>;
	selection: z.ZodNullable<z.ZodObject<{
		schema: z.ZodLiteral<"attn.stockPacks.rewardSelection.v1">;
		requestId: z.ZodString;
		snapshotId: z.ZodString;
		snapshotDigest: z.ZodString;
		entitlementBindingDigest: z.ZodString;
		reservationId: z.ZodString;
		selectedLotId: z.ZodString;
		selectedPositionId: z.ZodString;
		selectedPositionTermsDigest: z.ZodString;
		selectedAsset: z.ZodDiscriminatedUnion<[
			z.ZodObject<{
				namespace: z.ZodLiteral<"solana">;
				chainId: z.ZodEnum<{
					"solana:mainnet-beta": "solana:mainnet-beta";
					"solana:devnet": "solana:devnet";
				}>;
				assetAddress: z.ZodUnion<readonly [
					z.ZodLiteral<"native">,
					z.ZodString
				]>;
				assetStandard: z.ZodEnum<{
					native: "native";
					spl_token: "spl_token";
					token_2022: "token_2022";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>,
			z.ZodObject<{
				namespace: z.ZodLiteral<"eip155">;
				chainId: z.ZodEnum<{
					"eip155:4663": "eip155:4663";
					"eip155:46630": "eip155:46630";
				}>;
				assetAddress: z.ZodString;
				assetStandard: z.ZodEnum<{
					native: "native";
					erc20: "erc20";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>
		], "namespace">;
		selectedAssetAmount: z.ZodString;
		selectionDigest: z.ZodString;
	}, z.core.$strict>>;
	consumption: z.ZodNullable<z.ZodObject<{
		schema: z.ZodLiteral<"attn.stockPacks.rewardConsumption.v1">;
		consumptionId: z.ZodString;
		operationId: z.ZodString;
		requestDigest: z.ZodString;
		entitlementBindingDigest: z.ZodString;
		routeDigest: z.ZodString;
		consumptionDigest: z.ZodString;
	}, z.core.$strict>>;
	receipt: z.ZodNullable<z.ZodObject<{
		schema: z.ZodLiteral<"attn.stockPacks.rewardDeliveryReceipt.v1">;
		operationId: z.ZodString;
		requestId: z.ZodString;
		requestDigest: z.ZodString;
		campaignId: z.ZodString;
		actorAccountId: z.ZodString;
		recipientWallet: z.ZodString;
		snapshotId: z.ZodString;
		snapshotDigest: z.ZodString;
		entitlementBindingDigest: z.ZodString;
		reservationId: z.ZodString;
		selectedLotId: z.ZodString;
		selectedPositionId: z.ZodString;
		selectedPositionTermsDigest: z.ZodString;
		selectionDigest: z.ZodString;
		asset: z.ZodDiscriminatedUnion<[
			z.ZodObject<{
				namespace: z.ZodLiteral<"solana">;
				chainId: z.ZodEnum<{
					"solana:mainnet-beta": "solana:mainnet-beta";
					"solana:devnet": "solana:devnet";
				}>;
				assetAddress: z.ZodUnion<readonly [
					z.ZodLiteral<"native">,
					z.ZodString
				]>;
				assetStandard: z.ZodEnum<{
					native: "native";
					spl_token: "spl_token";
					token_2022: "token_2022";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>,
			z.ZodObject<{
				namespace: z.ZodLiteral<"eip155">;
				chainId: z.ZodEnum<{
					"eip155:4663": "eip155:4663";
					"eip155:46630": "eip155:46630";
				}>;
				assetAddress: z.ZodString;
				assetStandard: z.ZodEnum<{
					native: "native";
					erc20: "erc20";
				}>;
				schema: z.ZodLiteral<"attn.packNetwork.chainAsset.v1">;
				decimals: z.ZodNumber;
				identityDigest: z.ZodString;
				displayMetadata: z.ZodOptional<z.ZodObject<{
					symbol: z.ZodOptional<z.ZodString>;
					name: z.ZodOptional<z.ZodString>;
					imageUrl: z.ZodOptional<z.ZodString>;
				}, z.core.$strict>>;
			}, z.core.$strict>
		], "namespace">;
		rawAmount: z.ZodString;
		consumption: z.ZodObject<{
			schema: z.ZodLiteral<"attn.stockPacks.rewardConsumption.v1">;
			consumptionId: z.ZodString;
			operationId: z.ZodString;
			requestDigest: z.ZodString;
			entitlementBindingDigest: z.ZodString;
			routeDigest: z.ZodString;
			consumptionDigest: z.ZodString;
		}, z.core.$strict>;
		transactionIds: z.ZodArray<z.ZodString>;
		finalityEvidenceDigest: z.ZodString;
		terminalDigest: z.ZodString;
	}, z.core.$strict>>;
}, z.core.$strict>;
export type StockPackRewardClaimV1 = z.infer<typeof StockPackRewardClaimV1Schema>;
export declare function parseStockPackCampaignAccessV1(input: unknown): StockPackCampaignAccessV1;
export declare function parseStockPackRewardClaimCommandV1(input: unknown): StockPackRewardClaimCommandV1;
export declare function parseStockPackRewardClaimV1(input: unknown): StockPackRewardClaimV1;
/**
 * Parse and verify canonical identity and self-digest fields in one operation.
 * These hashes prove deterministic integrity only. They are not signatures and
 * do not replace provider authentication or finalized chain readback.
 */
export declare function parseCanonicalChainAssetV1(input: unknown): ChainAssetV1;
export declare function parseCanonicalInventoryLotV1(input: unknown): PackInventoryLotV1;
export declare function parseCanonicalOpenRequestV1(input: unknown): PackOpenRequestV1;
export declare function parseCanonicalSettlementReceiptV1(input: unknown): PackSettlementReceiptV1;

export {};
