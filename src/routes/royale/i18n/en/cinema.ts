// English: "cinema" segment.
// Owns: RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx, revealCinemaTypes.ts
// (the copy: fields of REVEAL_CINEMA_SEQUENCE), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx. See royaleI18n.ts's file header for the key-naming
// and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale. This is the
// ONLY file an agent working on the "cinema" surface should need to touch
// for this locale, index.ts already spreads it in and should not need to
// change again.
//
// SHARED SUB-NAMESPACES (two surfaces, one key — deliberate, so a translator
// never has to render the same sentence twice):
//   cinema.theatre.*  RoyaleRoundTheatre.tsx AND RoyalePrizeModal.tsx. The
//                     modal is the full-screen fallback of the same panel and
//                     its copy is byte-identical; only the modal's own stage
//                     labels / loss pill live under cinema.prizeModal.*.
//   cinema.share.*    the share-overlay chrome RoyaleWinShareCard.tsx and
//                     RoyaleProfilePnlShareCard.tsx render verbatim (the PnL
//                     overlay reuses royaleWinShare.css on purpose), plus the
//                     "PACK BATTLES · EVERY DRAW VERIFIABLE" footer mark both cards and
//                     the replay share panel's close button share.
//
// DEDUP CANDIDATES (noted for a later cross-segment pass, not resolved
// here): "pack"/"packs", "card"/"cards" and "backer"/"backers" plural pairs
// appear in several places below (and likely in board/arena's own segment
// files too): a shared pluralization helper could collapse these, but each
// segment currently owns its own copy per the parallel-work file split.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "OPENING PACKS",
  "cinema.phaseAnnounce.packsOpening.subtitle": "revealing cards · repricing every tile",
  "cinema.phaseAnnounce.winnerDraw.title": "DRAWING WINNER",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "weighted by tile total",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Locked: the board is the show",
  "cinema.phase.packsEnter.copy": "Packs hit the board",
  "cinema.phase.packsOpening.copy": "Packs tearing open: cards revealing, tiles repricing",
  "cinema.phase.cardsByTile.copy": "Cards revealed: every tile, value first",
  "cinema.phase.valueScan.copy": "Reading the board: biggest pulls glowing",
  "cinema.phase.winnerDraw.copy": "Drawing the winner: weighted by tile total",
  "cinema.phase.winnerLock.copy": "Winner locked",
  "cinema.phase.loserValueConverge.copy": "Losing pulls return to the vault: their value resolves to the winner",
  "cinema.phase.winnerPotCountUp.copy": "The pool lands on the winning tile",
  "cinema.phase.chaseFeed.copy": "The Chase takes its cut",
  "cinema.phase.chasePayout.copy": "The Chase drops: a tile wins big",
  "cinema.phase.allocation.copy": "You get",
  "cinema.phase.keepSellDecision.copy": "Keep or sell: the decision rides through the next round",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "VAULTED",
  "cinema.vaultLock.plateSub": "THE CHASE",
  "cinema.vaultLock.status": "LOCKED",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "NO CARDS OPENED THIS ROUND",
  "cinema.cardWall.won": "WON",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP HIT",
  "cinema.cardWall.rarity.common": "COMMON",
  "cinema.cardWall.rarity.rare": "RARE",
  "cinema.cardWall.rarity.epic": "EPIC",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "KEPT",
  "cinema.cardWall.status.sold": "SOLD",
  "cinema.cardWall.status.toTheChase": "TO THE CHASE",
  "cinema.cardWall.status.rake": "RAKE",
  "cinema.cardWall.owner.vault": "VAULT",
  "cinema.cardWall.owner.you": "YOU",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter opens card details.",
  "cinema.cardWall.sectionAriaLabel": "Every card this round opened, most valuable first",
  "cinema.cardWall.eyebrow": "Every card opened",
  "cinema.cardWall.rake.title": "Protocol fee",
  "cinema.cardWall.rake.metaOne": "1 card to rake",
  "cinema.cardWall.rake.metaMany": "{n} cards to rake",
  "cinema.cardWall.rake.hide": "Hide",
  "cinema.cardWall.rake.show": "Show",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Close reveal",
  "cinema.close.title": "Close reveal (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Winner of record",
  "cinema.provCaption.round": "Round",
  "cinema.provCaption.verifyAt": "Verify at",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Round #{n}",
  "cinema.bar.vrfBadge": "Powered by CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Chase +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "OPENING",
  "cinema.phaseShort.drawing": "DRAWING",
  "cinema.phaseShort.results": "RESULTS",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "WINNER",
  "cinema.core.tileWins": "{tile} wins",
  "cinema.core.inCards": " IN CARDS",
  "cinema.core.poolSuffix": " POOL",
  "cinema.core.totalCardValue": "TOTAL CARD VALUE",
  "cinema.core.totalPool": "TOTAL POOL",
  "cinema.core.tilesLive": "{n} TILES LIVE",
  "cinema.core.packsSuffix": " · {n} PACKS",
  "cinema.core.yourStake": "Your stake",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "No stake",
  "cinema.heatOnly.note": "USDC only · no pack this round",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} packs",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Lost the draw. Cards go to the winning tile's backers.",
  "cinema.vaultNote.heatOnlyNoPack": "No pack this round · change carries to the pool",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "from {pack}",
  "cinema.grail.fromPackRate": "from {pack} · {pct} pull",
  "cinema.grail.pullTitle": "GRAIL PULL",
  "cinema.grail.fromPackVisible": "from a {pack} pack",
  "cinema.grail.provenanceAriaLabel": "{tile}, from a {pack} pack",
  "cinema.grail.multiTitle": "{n} GRAILS THIS ROUND",
  "cinema.grail.galleryTileFromPack": "{tile} · from {pack}",
  "cinema.grail.galleryMore": "+{n} more",
  "cinema.card.openInNewTab": "Open {name} card page in a new tab",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. From {pack} pack, {pct} pull rate. Enter opens card details.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter opens card details.",
  "cinema.card.bandChancePct": "{pct}% chance from {pack} pack",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} WINS",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "SELL WINDOW OPEN",
  "cinema.sellWindow.secToDecide": "SEC TO DECIDE",
  "cinema.sellWindow.noActionAutoSells": "NO ACTION AUTO SELLS AT NEXT LOCK",
  "cinema.sellWindow.noActionKeeps": "NO ACTION KEEPS THE CARD · SELL ANYTIME FROM YOUR CARDS",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "card value",
  "cinema.tileValue.onTileLabel": "on tile",
  "cinema.tileValue.oddsWord": "odds",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "the struck tile",
  "cinema.chase.fires": "THE CHASE FIRES",
  "cinema.chase.jackpotReleasingTo": "JACKPOT RELEASING TO {tile}",
  "cinema.chase.winningTileFallback": "THE WINNING TILE",
  "cinema.chase.feedThisRound": "The Chase +{value} this round",
  "cinema.chase.cardToChase": "CARD TO THE CHASE",
  "cinema.chase.bestLosingCardNamed": "Best losing card · {name} · {value} locked in",
  "cinema.chase.bestLosingCardVault": "Best losing card locked in the vault",
  "cinema.chase.jackpotGrows": "The Chase +{value} · jackpot grows",
  "cinema.chase.hitsAriaLabel": "The Chase hits {tile} for {value}",
  "cinema.chase.alsoHolds": "The Chase also holds",
  "cinema.chase.alsoHoldsAriaOne": "The Chase also holds 1 card worth {value}",
  "cinema.chase.alsoHoldsAriaMany": "The Chase also holds {n} cards worth {value}",
  "cinema.chase.more": "more",
  "cinema.chase.cardsTotalOne": "1 card · {value} in slabs",
  "cinema.chase.cardsTotalMany": "{n} cards · {value} in slabs",
  "cinema.chase.hitsKicker": "THE CHASE HITS",
  "cinema.chase.winsBig": "WINS BIG",
  "cinema.chase.yourCut": "YOUR CUT",
  "cinema.chase.otherBackerOne": "{n} other backer · pro-rata",
  "cinema.chase.otherBackerMany": "{n} other backers · pro-rata",
  "cinema.chase.backerOne": "{n} backer · pro-rata",
  "cinema.chase.backerMany": "{n} backers · pro-rata",
  "cinema.chase.alsoWonRound": "Also won the round",
  "cinema.chase.backedTileNote": "A backed tile · not the round winner",
  "cinema.chase.heldCardsSpillOne": "1 held card spills out",
  "cinema.chase.heldCardsSpillMany": "{n} held cards spill out",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "pot",
  "cinema.you.get": "You get",
  "cinema.you.lost": "You lost!",
  "cinema.you.noStakeThisRound": "You didn't stake this round",
  "cinema.you.mathLine": "{usdc} USDC pool share + {cards} from cards = {total} to you",
  "cinema.you.sold": "Sold {value}",
  "cinema.you.kept": "Kept · in your collection",
  "cinema.you.keepButton": "Keep",
  "cinema.you.sellButton": "Sell {value}",
  "cinema.you.yours": "yours",
  "cinema.you.noCardThisRound": "No card this round.",
  "cinema.you.usdcPaidInstantly": "USDC · credited to your balance",
  "cinema.you.keepAll": "Keep all",
  "cinema.you.sellAllButton": "Sell all {value}",
  "cinema.you.sellAllConfirm": "Sure? Sell all {value}",
  "cinema.you.noOtherBackers": "No other backers this round",
  "cinema.you.oneOtherSplits": "1 other splits {value}",
  "cinema.you.othersSplit": "{n} others split {value}",
  "cinema.you.oneWinningBackerTakes": "1 winning backer takes {value}",
  "cinema.you.winningBackersSplit": "{n} winning backers split {value}",
  "cinema.you.viewFullResults": "View full results",
  "cinema.you.howItWorks": "How it works",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Standard slab - the tile’s top backer keeps it or sells it back, pro-rata.",
  "cinema.theatre.disposition.sellBackSplit":
    "Grail rule: no single backer can cover the others pro-rata, so the grail is sold back by default and the USDC is split across the tile.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grail rule: the top backer’s pro-rata pool already covers buying the others out, so they keep the grail and pay everyone else their card share in USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} of {total} other players decided; next round in {seconds} seconds",
  "cinema.theatre.playersDeciding": "Players deciding {count}",
  "cinema.theatre.nextRoundIn": "next round in {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Round resolving",
  "cinema.theatre.stageLockingBoard": "Locking board…",
  "cinema.theatre.stagePacksOpening": "Packs opening on the board",
  "cinema.theatre.stageWinnerDrawn": "Winner drawn",
  "cinema.theatre.headlineNoEntries": "No entries this round",
  "cinema.theatre.headlineRevealing": "Revealing packs…",
  "cinema.theatre.headlineTileWins": "{tile} wins {value}",
  "cinema.theatre.tileFallback": "Tile",
  "cinema.theatre.youWon": "You won {value}",
  "cinema.theatre.youLostNoStake": "You lost, no stake in {tile}",
  "cinema.theatre.winnerFallback": "the winner",
  "cinema.theatre.tileWonNoStake": "{tile} won · you had no stake",
  "cinema.theatre.aTileFallback": "A tile",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} tiles played · pool {pool}",
  "cinema.theatre.stripMetaCards": " · {value} cards",
  "cinema.theatre.stripMetaCash": " + {value} cash",
  "cinema.theatre.drawingWinner": "drawing winner",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Round result",
  "cinema.theatre.roundSettled": "Round settled",
  "cinema.theatre.winner": "Winner",
  "cinema.theatre.seedNote":
    "Includes your starter stake of {value} on {tile}, clear starter stakes in the bet panel to play from $0.",
  "cinema.theatre.lossNoteStaked":
    "You staked {value} on other tiles this round. Hover any tile behind this panel to see what it opened and why it lost.",
  "cinema.theatre.lossNoteNoStake":
    "You didn’t back a tile this round, so there is nothing to pay out. Pick a bet size and click a tile in the next round.",
  "cinema.theatre.bonusGrails.one":
    "{n} more grail landed this round: it goes to the winning tile’s backers as bonus loot (kept, or sold back pro-rata if too rich to hold), never to the ATTN fee or the Chase.",
  "cinema.theatre.bonusGrails.other":
    "{n} more grails landed this round: they go to the winning tile’s backers as bonus loot (kept, or sold back pro-rata if too rich to hold), never to the ATTN fee or the Chase.",
  "cinema.theatre.noPacksBacked": "No packs were backed this round. The next round autostarts.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Payout split · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pool {pool} · chase feed {feed}",
  "cinema.theatre.payoutSplitChase": " · CHASE +{value}",
  "cinema.theatre.you": "You",
  "cinema.theatre.physicalCard": "Physical card →",
  "cinema.theatre.grailSecured": " (grail secured)",
  "cinema.theatre.grailSoldBack": "Grail sold back ({value}) → USDC split above.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "The Chase HIT!",
  "cinema.theatre.chaseHitBody":
    "The Chase fired on its own rare draw, so {value} from The Chase paid into this win, added to the split above. The next Chase starts building again.",
  "cinema.theatre.chaseMissLead": "No Chase drop this round.",
  "cinema.theatre.chaseMissBody": "The Chase fires on its own rare draw, so it keeps growing, now {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Verify draw",
  "cinema.theatre.vrfSummaryNote": "verifiable draw · view the draw receipt",
  "cinema.theatre.vrfRoundId": "round id",
  "cinema.theatre.vrfWinningDraw": "winning draw",
  "cinema.theatre.vrfDrawSeed": "draw seed",
  "cinema.theatre.vrfProofId": "proof id",
  "cinema.theatre.vrfTicket": "#{n} of {total}",
  "cinema.theatre.vrfVerifying": "Verifying…",
  "cinema.theatre.vrfRecheck": "Re-check draw",
  "cinema.theatre.vrfVerifierLink": "Verifier ↗",
  "cinema.theatre.vrfVerified": "✓ Draw verified, this winner re-checks against its published draw seed.",
  "cinema.theatre.vrfFailed": "✗ This draw did not re-check against its seed, don’t trust it.",
  "cinema.theatre.vrfNote": "Every round draws one winner from a published seed you can re-check.",
  "cinema.theatre.vrfNoDraw": "No packs backed this round, nothing to draw.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Keep card → collection",
  "cinema.theatre.sellBackFor": "Sell back for {value}",
  "cinema.theatre.continueNextRound": "Continue to next round",
  "cinema.theatre.continue": "Continue",
  "cinema.theatre.settleHint":
    "Keep adds the card to your collection. Sell back credits {sell} ({pct}% of {value}, this pack's CC buyback) to your balance. No action = sell back by default when the round closes.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Locked",
  "cinema.prizeModal.stageReveal": "Reveal",
  "cinema.prizeModal.betterLuck": "Better luck next round",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Preparing your card…",
  "cinema.share.renderingPng": "Rendering PNG…",
  "cinema.share.renderFailed": "Couldn't render the image. Try again.",
  "cinema.share.captionOpened": "Caption opened on X. Attach the saved PNG.",
  "cinema.share.close": "Close",
  "cinema.share.downloadPng": "Download PNG",
  "cinema.share.shareToX": "Share to X",
  "cinema.share.shareFile": "Share card",
  "cinema.share.shareVideo": "Share video",
  "cinema.share.preparingOutput": "Preparing the share…",
  "cinema.share.shareSheetOpened": "Share sheet opened.",
  "cinema.share.cancelled": "Share canceled.",
  "cinema.share.shareSheetHint": "Your device can send this file to X from the share sheet.",
  "cinema.share.done": "Done",
  "cinema.share.provablyFair": "PACK BATTLES · EVERY DRAW VERIFIABLE",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "multiplier {value}",
  "cinema.winShare.multiplier": "MULTIPLIER",
  "cinema.winShare.inCards": "IN CARDS",
  "cinema.winShare.cashWon": "CASH WON",
  "cinema.winShare.tileHit": "· TILE HIT",
  "cinema.winShare.entry": "ENTRY",
  "cinema.winShare.winOdds": "WIN ODDS",
  "cinema.winShare.totalValue": "TOTAL VALUE",
  "cinema.winShare.certLine": "POWERED BY SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "ROUND #{n} · VERIFIABLE VRF DRAW",
  "cinema.winShare.takeHomeAriaLabel": "take-home {value}",
  "cinema.winShare.totalTakeHome": "TOTAL TAKE-HOME",
  "cinema.winShare.breakdown.one": "{cash} CASH + {n} CARD ({value})",
  "cinema.winShare.breakdown.other": "{cash} CASH + {n} CARDS ({value})",
  "cinema.winShare.deposited": "DEPOSITED",
  "cinema.winShare.wonBy": "WON BY {name}",
  "cinema.winShare.theGrail": "THE GRAIL",
  "cinema.winShare.topPull": "TOP PULL",
  "cinema.winShare.topCardOfRound": "TOP CARD OF THE ROUND",
  "cinema.winShare.poweredBySlabz": "POWERED BY SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Share your win",
  "cinema.winShare.pngSaved": "PNG saved. Attach it to your post - X can't add it for you.",
  "cinema.winShare.renderingHdVideo": "Rendering HD round video…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Rendering HD round video - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "HD video saved. Attach it to your post instead of the image.",
  "cinema.winShare.hdRenderFailed": "The HD render failed. Try again.",
  "cinema.winShare.hdVideoButton": "HD round video",
  "cinema.winShare.hdVideoTitle": "Render this round as an HD mp4 (local render service) and save it.",
  "cinema.winShare.tweetTriggerLabel": "Share win on X",
  "cinema.winShare.returned": "RETURNED",
  "cinema.winShare.lossResult": "ROUND LOSS",
  "cinema.winShare.lossHeadline": "ROUND LOSS",
  "cinema.winShare.roundResultTop": "ROUND",
  "cinema.winShare.roundResultMain": "LOSS",
  "cinema.winShare.bestPull": "BEST PULL",
  "cinema.winShare.playedBy": "PLAYED BY {name}",
  "cinema.winShare.shareRoundCard": "Share card",
  "cinema.winShare.lossCaption": "Round #{n}: I staked {stake}. No take-home this round.",
  "cinema.winShare.lossCardCaption": "Best pull on the table, not mine.",
  "cinema.winShare.lossNoCardCaption": "The round result, honestly recorded.",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "return {value} on stake",
  "cinema.pnlShare.onStake": "ON STAKE",
  "cinema.pnlShare.certifiedRun": "CERTIFIED RUN · NET P&L",
  "cinema.pnlShare.heroSub.one": "across {n} round · {pct}% win rate",
  "cinema.pnlShare.heroSub.other": "across {n} rounds · {pct}% win rate",
  "cinema.pnlShare.collection": "COLLECTION",
  "cinema.pnlShare.change30d": "30D CHANGE",
  "cinema.pnlShare.ribbonAriaLabel.one": "Result per round for the last {n} staked round",
  "cinema.pnlShare.ribbonAriaLabel.other": "Result per round for the last {n} staked rounds",
  "cinema.pnlShare.bestPull": "BEST PULL",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "COMMON",
  "cinema.pnlShare.rounds": "ROUNDS",
  "cinema.pnlShare.winRate": "WIN RATE",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "BEST ROUND",
  "cinema.pnlShare.rank": "RANK #{n}",
  "cinema.pnlShare.rankOf": "RANK #{n} OF {total}",
  "cinema.pnlShare.staked": "{value} STAKED",
  "cinema.pnlShare.overlayAriaLabel": "Share your run",
  "cinema.pnlShare.saved": "Saved. Attach it to your post.",
  "cinema.pnlShare.triggerLabel": "Share PnL",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Keep / sell",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Your call",
  "cinema.recap.dest.deciding": "Deciding",
  "cinema.recap.dest.you": "You",
  "cinema.recap.dest.topBacker": "Top backer",
  "cinema.recap.dest.yourCard": "Your card",
  "cinema.recap.dest.wonBy": "Won by",
  "cinema.recap.dest.aBacker": "A backer",
  "cinema.recap.dest.yourChaseLoot": "Your Chase loot",
  "cinema.recap.dest.chaseLoot": "Chase loot",
  "cinema.recap.dest.releasedFromVault": "released from the vault",
  "cinema.recap.dest.sweptTo": "Swept to",
  "cinema.recap.dest.chaseVault": "The Chase vault",
  "cinema.recap.dest.fundsJackpot": "funds the jackpot",
  "cinema.recap.dest.protocolFee": "Protocol fee",
  "cinema.recap.dest.tableRake": "table rake",
  "cinema.recap.dest.soldBack": "Sold back",
  "cinema.recap.dest.intoTheSplit": "Into the split",
  "cinema.recap.dest.toThePool": "+{value} to the pool",
  "cinema.recap.sublineYours": "The whole table's cards this round. Yours is marked below.",
  "cinema.recap.sublineLost": "The whole table's cards this round. None of them are yours.",
  "cinema.recap.sublineNoStake": "The whole table's cards this round. You sat this one out.",
  "cinema.recap.sectionAriaLabel": "Where every card of this round went",
  "cinema.recap.eyebrow": "Round results",
  "cinema.recap.headline": "Where every card landed",
  "cinema.recap.theatreHeader": "Round story · every card's destination",
  "cinema.recap.openCardTitle": "Opens card page in a new tab",
  "cinema.recap.fromPack": "From {pack}",
  "cinema.recap.railAriaLabel": "Every card this round, most valuable first",
  "cinema.recap.tierRule.one": "The other card · {value}",
  "cinema.recap.tierRule.other": "The other {n} cards · {value}",
  "cinema.recap.showMore": "Show {n} more",
  "cinema.recap.showAll": "Show all {n}",
  "cinema.recap.showing": "Showing {n} of {total} cards · {value} of {totalValue}",
  "cinema.recap.allShown": "All {n} cards · {value} total",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Finishing the video...",
  "cinema.replay.recordingEmpty": "The recording came back empty. Try again.",
  "cinema.replay.checkingService": "Checking for the HD render service...",
  "cinema.replay.serviceUnreachable":
    "The HD render service isn't reachable, so this can't render in HD. RECORD TAB captures this tab instead (browser prompt).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Rendering HD video: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "The HD render failed. Try again, or RECORD TAB to capture this tab instead.",
  "cinema.replay.cannotRecord":
    "This browser cannot record video here. Saving the round file instead - drop it on the replay page to watch again.",
  "cinema.replay.pickThisTab": "Pick \"This tab\" to record the round.",
  "cinema.replay.recorderFailed": "Could not start the recorder.",
  "cinema.replay.watermarkAriaLabel": "Replay of round {n}",
  "cinema.replay.watermarkAriaLabelDated": "Replay of round {n}, recorded {date}",
  "cinema.replay.watermarkTag": "REPLAY",
  "cinema.replay.watermarkRound": "ROUND #{n}",
  "cinema.replay.headerSeed": "SEED {seed}",
  "cinema.replay.phaseBidding": "BIDDING",
  "cinema.replay.phaseReveal": "REVEAL",
  "cinema.replay.phaseDone": "DONE",
  "cinema.replay.boardAriaLabel": "Replay board",
  "cinema.replay.controlsAriaLabel": "Replay controls for round {n}",
  "cinema.replay.pause": "Pause",
  "cinema.replay.play": "Play",
  "cinema.replay.pauseButton": "PAUSE",
  "cinema.replay.playButton": "PLAY",
  "cinema.replay.restart": "RESTART",
  "cinema.replay.scrubAriaLabel": "Seek the full round: bidding through the reveal",
  "cinema.replay.lockMark": "Lock",
  "cinema.replay.seeking": "SEEKING",
  "cinema.replay.speedAriaLabel": "Playback speed",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "SAVE VIDEO",
  "cinema.replay.saveVideoTitle":
    "Render this round as an HD mp4 (local render service; nothing on your screen is recorded)",
  "cinema.replay.recordTab": "RECORD TAB",
  "cinema.replay.recordTabTitle":
    "Fallback: record this tab with your browser's screen-capture prompt (realtime quality)",
  "cinema.replay.saveRound": "SAVE ROUND",
  "cinema.replay.saveRoundTitle":
    "Download this round as a small data file - anyone can drop it on the replay page to watch this exact round",
  "cinema.replay.close": "CLOSE",
  "cinema.replay.backToGame": "BACK TO GAME",
  "cinema.replay.shareOverlayAriaLabel": "Share this round",
  "cinema.replay.videoReady": "ROUND VIDEO READY",
  "cinema.replay.formatWebm": "Saved as .webm - X needs mp4 to upload, so share the link or convert the file first.",
  "cinema.replay.formatMp4": "Saved as .mp4 - ready to attach on X.",
  "cinema.replay.shareOnX": "Share on X",
  "cinema.replay.shareVideo": "Share video",
  "cinema.replay.shareVideoTitle": "Share this round video",
  "cinema.replay.shareVideoSheetOpened": "Share sheet opened with the video.",
  "cinema.replay.shareVideoFailed": "The video could not be shared. Try again.",
  "cinema.replay.saveAgain": "Save again",
  "cinema.replay.shareHint": "The clip downloads and X opens with your caption. Attach the saved file.",
  "cinema.replay.shareSheetHint": "Your device can send this video to X from the share sheet.",
  "cinema.replay.xOpened": "X opened with your caption. Attach the saved file ({filename}) - the web composer cannot add it for you.",
  "cinema.replay.shareRoundTitle": "attn royale · Round #{n}",
  "cinema.replay.shareRoundTable": "{amount} on the table.",
  "cinema.replay.shareRoundWin": "My tile took the table for {pool} · {amount} came home.",
  "cinema.replay.shareRoundCardsOnly": "Tile {tile} took the table for {pool} · my tile lost, but {amount} came home.",
  "cinema.replay.shareRoundWinner": "Tile {tile} took the table for {pool}.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE Round Replay",
  "cinema.replayRoute.noRecordingParam": "No recording provided. Pass ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "Could not read the recording from ?rec=.",
  "cinema.replayRoute.loadFailed": "Could not load the recording ({error}).",
  "cinema.replayRoute.badge": "ROUND REPLAY",
  "cinema.replayRoute.loading": "LOADING RECORDING",
  "cinema.replayRoute.noRecording": "No recording to play.",
  "cinema.replayRoute.hint":
    "Replays open from the board's past-rounds strip (REPLAY on a settled round) or a shared ?rec= link.",
  "cinema.replayRoute.roundResults": "ROUND RESULTS",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.personalReveal.sectionAria": "Cards you opened",
  "cinema.personalReveal.title": "CARDS YOU OPENED",
  "cinema.personalReveal.progress.eyebrow": "SYNCHRONIZED REVEAL",
  "cinema.personalReveal.progress.title": "OPENINGS IN PROGRESS",
  "cinema.personalReveal.progress.body": "The table is opening its cards. The shared reveal continues when this window closes.",
  "cinema.personalReveal.normal.label": "NORMAL REVEAL",
  "cinema.personalReveal.normalHint": "The card back appears first. Click or tap a card to flip it; cards you open are yours. Any cards still face-down flip automatically after 5 seconds.",
  "cinema.personalReveal.hardcore.label": "HARDCORE REVEAL",
  "cinema.personalReveal.hardcoreHint": "The card back appears first. Click or tap a card to flip it; ownership settles after the draw. Any cards still face-down flip automatically after 5 seconds.",
  "cinema.personalReveal.yourCard": "YOUR CARD",
  "cinema.personalReveal.youOpened": "YOU OPENED",
  "cinema.personalReveal.otherCards": "OTHER CARDS",
  "cinema.personalReveal.sort.group": "Card order",
  "cinema.personalReveal.sort.pack": "Pack",
  "cinema.personalReveal.sort.packAria": "Sort by pack price, cheapest first",
  "cinema.personalReveal.sort.rarity": "Rarity",
  "cinema.personalReveal.sort.revealFirst": "Rarity sorting unlocks after all cards are revealed",
  "cinema.personalReveal.sort.bestAria": "Sort by rarity, best first",
  "cinema.personalReveal.sort.worstAria": "Sort by rarity, worst first",
  "cinema.personalReveal.sort.packStatus": "Cards ordered by pack price, cheapest first",
  "cinema.personalReveal.sort.bestStatus": "Cards ordered by rarity, best first",
  "cinema.personalReveal.sort.worstStatus": "Cards ordered by rarity, worst first",
  "cinema.personalReveal.allOpen": "All cards are open",
  "cinema.personalReveal.autoOpenIn": "Remaining cards open automatically in {n}s",
  "cinema.personalReveal.revealCardAria": "Flip card {n}",
  "cinema.personalReveal.revealedCardAria": "Revealed card {n}: {name}, {value}",
  "cinema.personalReveal.rarity": "Rarity",
  "cinema.personalReveal.year": "Year",
  "cinema.personalReveal.yearUnknown": "Year unknown",
  "cinema.personalReveal.grade": "Grade",
  "cinema.personalReveal.ungraded": "Ungraded",
  "cinema.personalReveal.pageNavigation": "Card pages",
  "cinema.personalReveal.previousPage": "Previous cards",
  "cinema.personalReveal.nextPage": "Next cards",
  "cinema.personalReveal.pageStatus": "Page {page} of {pages}",
  "cinema.personalReveal.live.revealed": "{name} revealed",
  "cinema.personalReveal.live.all": "All {n} cards revealed",
} as Record<string, string>;
