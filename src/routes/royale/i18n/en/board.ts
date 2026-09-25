// English: "board" segment. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (the
// legacy v1 board), RoyaleStakeControl.tsx, RoyaleBetRail.tsx,
// RoyaleRoundCore.tsx, RoyaleClock.tsx, RoyaleSettlementPanel.tsx,
// RoyaleBetTooBigPopover.tsx, RoyaleWagerLadder.tsx (the right-rail "Players"
// panel), RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / packs-framing rules that apply to every locale.
//
// Namespaces: board.common.* (words shared across two-or-more of this
// segment's own files, e.g. "You", "no win"), board.tile.* (the 8 board
// tiles, RoyaleBoardV2), board.boardV1.* (the legacy v1 board's own copy),
// board.stakeControl.* (RoyaleStakeControl), board.betRail.* (RoyaleBetRail,
// incl. the auto-bet strategy cluster), board.core.* (RoyaleRoundCore, the
// center cell, plus RoyaleClock's phase labels), board.settlement.*
// (RoyaleSettlementPanel, incl. its VRF disclosure), board.betTooBig.*
// (RoyaleBetTooBigPopover), board.wagerLadder.* (RoyaleWagerLadder),
// board.bidFund.* (RoyaleBidFundConfirm), board.hotkeys.*
// (RoyaleHotkeyOptIn's first-press dialog - NOT gear.hotkeys.*, which owns
// the settings rebinding rows), board.leaderboard.* (RoyaleLeaderboard's
// rows/podium/hover popover; its section chrome stays in
// pages.ladder.leaderboard.*), board.connectX.* (RoyaleConnectXControl's
// connected state) and board.packChips.* (RoyalePackCompositionChips).
//
// CROSS-SEGMENT CANDIDATES (flagged for a later dedup pass, not yet moved):
//   - board.common.pack / board.common.packs: the generic "pack(s)" noun
//     pair. Other segments (cinema, arena, ...) likely need the exact same
//     pair once they extract their own strings.
//   - board.common.you: the "You" pronoun used for backer names/initials.
//     Other segments (chat, docs) may already have (or need) an equivalent.
//
// INTENTIONAL SIMPLIFICATION: a few source strings interleave plain text with
// an inline <b>/<strong> around a DATA value (a card name, a tile label) more
// than once per sentence (e.g. the settlement "why this tile lost" line). For
// those, the segment's whole sentence became ONE flat key instead of trying
// to preserve every inline bold span through a token replace, since the data
// tokens themselves already carry visual weight (card name in a card slab,
// tile label near its pack). Single-embed cases (one bold value in an
// otherwise-plain string) keep the split-on-token + wrap pattern, see
// RoyaleRoundCore's "Next round in {secs}" call site for a worked example.
export default {
  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "You",
  "board.common.noWin": "no win",
  "board.common.roundSettled": "Round settled",
  "board.common.youWon": "You won {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "LOCKED",
  "board.tile.lockedStampSub": "no more bets",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: your {bet} bet is over your {balance} cash. Lower the bet or deposit.",
  "board.tile.ariaBack": "Back {label} with {amount}",
  "board.tile.ariaBackShortcutSuffix": ", shortcut {shortcut}",
  "board.tile.ariaOddsChance": "{pct} chance to win",
  "board.tile.ariaBackers": "{count} backers",
  "board.tile.yourPortraitAlt": "Your portrait",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · no pack yet",
  "board.tile.noStake": "No stake",
  "board.tile.youOwn": "You own {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Packs open at lock",
  "board.tile.resultOpened": "Opened · {amount} in cards",
  "board.tile.resultWinner": "WINNER · {amount} in cards",
  "board.tile.resultLost": "Lost the draw · {amount} in cards",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Opened",
  "board.tile.resultWinnerWord": "WINNER",
  "board.tile.resultLostWord": "Lost the draw",
  "board.tile.resultShortWon": "WON",
  "board.tile.resultShortLost": "Lost",
  "board.tile.overBalance": "Over balance",
  "board.tile.overBalanceTitle": "Need {needed} · have {have}. Lower the bet or deposit.",
  "board.tile.overCap": "over your {amount} cap (gear)",
  "board.tile.needHave": "Need {needed} · have {have}",
  "board.tile.clueExactCardOdds": "this exact card · {pct} pull",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Bet size",
  "board.stakeControl.packMatchTitle": "Each tile click bids one whole {packName} pack.",
  "board.stakeControl.packMatchTag": "bidding 1 {packName} pack per click",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "Each tile click bids {n} whole {packName} pack.",
  "board.stakeControl.packMatchTitleOther": "Each tile click bids {n} whole {packName} packs.",
  "board.stakeControl.packMatchTagOne": "bidding {n} {packName} pack per click",
  "board.stakeControl.packMatchTagOther": "bidding {n} {packName} packs per click",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} {packName} packs per click",
  "board.stakeControl.bidPackGroupAria": "Bid a whole pack on a tile",
  "board.stakeControl.bidPackTag": "Bid a pack",
  "board.stakeControl.bidPackInfoTitle":
    "One click puts a whole sealed pack on a tile. The pack stays that pack, it never merges into a bigger one.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Pick a pack and how many. One click bids that whole stack on a tile - bigger packs pull bigger cards. Number keys 1 to 8 pick the tile.",
  "board.stakeControl.bidPackInfoAria": "What is bidding a pack?",
  "board.stakeControl.packSelectedTitle": "Selected. Click again to go back to a {amount} bid.",
  "board.stakeControl.packChipTitle": "Each tile click bids one {packName} pack ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "Selected. Each tile click bids {n} {packName} pack ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Selected. Each tile click bids {n} {packName} packs ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Each tile click bids {n} {packName} pack ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Each tile click bids {n} {packName} packs ({amount}).",
  "board.stakeControl.overBalanceHeading": "OVER BALANCE",
  "board.stakeControl.overBalanceBody": "Needs more than your {amount} cash.",
  "board.stakeControl.bidAmountTag": "Bid an amount",
  "board.stakeControl.bidAmountInfoTitle":
    "Add any dollars to a tile. Loose money grows into bigger packs as it crosses each pack price.",
  "board.stakeControl.bidAmountInfoAria": "What is bidding an amount?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Add to a tile's bet",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "Bid an amount on a tile",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "Packs bid per click",
  "board.stakeControl.packCountDecAria": "Bid fewer packs per click",
  "board.stakeControl.packCountIncAria": "Bid more packs per click",
  "board.stakeControl.packCountValueTitleOne": "{n} pack of the armed tier per click",
  "board.stakeControl.packCountValueTitleOther": "{n} packs of the armed tier per click",
  "board.stakeControl.incrementTitle": "Increase selected bet to {amount}",
  "board.stakeControl.customAriaLabel": "Custom bet amount in USDC, commits on Enter or when you click away",
  "board.stakeControl.customOverBalanceTitle": "Over your {amount} cash. Deposit or lower the bet.",
  "board.stakeControl.customTitle": "Type any amount, Enter or click away sets it",
  "board.stakeControl.resetTitle": "Reset selected bet to {amount}",
  "board.stakeControl.reset": "Reset",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Auto-bet strategy, arms at round close",
  "board.betRail.strategyArmedTip": "Armed, fires in {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, armed, fires in {seconds} seconds",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, armed, fires in {seconds} seconds. Click to disarm.",
  "board.betRail.strategyAriaClickArm": "{name}. Click to arm.",
  "board.betRail.moreStrategiesAria": "More auto-bet strategies",
  "board.betRail.moreStrategiesTitle": "More strategies",
  "board.betRail.cancelArmedAria": "Cancel armed auto-bet",
  "board.betRail.autoBetCancelled": "Auto-bet cancelled.",
  "board.betRail.roundLockedSkip": "Round locked before the auto-bet could fire.",
  "board.betRail.notEnoughBalanceSkip": "Not enough balance, the auto-bet did not fire.",
  "board.betRail.firedAtClose": "{name} fired at round close.",
  "board.betRail.firedAtClosePartial": "{name} fired at round close: {covered} of {total} tiles.",
  "board.betRail.strategyGuideAria": "Auto-bet strategy guide",
  "board.betRail.strategyGuideTitle": "Strategy guide",
  "board.betRail.autoBetEyebrow": "Auto-bet",
  "board.betRail.firesInSeconds": "fires in {seconds}s",
  "board.betRail.strategiesDialogAria": "Auto-bet strategies",
  "board.betRail.closeStrategiesAria": "Close auto-bet strategies",
  "board.betRail.strategiesHeading": "Auto-bet strategies",
  "board.betRail.strategiesIntro":
    "Tap one to arm it with your selected bet ({amount}). It fires right before the round locks, ranked by how much money is on each tile at that moment, the crowd signal.",
  "board.betRail.contrarianHeading": "Contrarian picks",
  "board.betRail.contrarianIntro":
    "When everyone chases the lowest tile it gets crowded, so the second-lowest can pay better. These stay off the main bar to keep it clean.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Your account and bet size",
  "board.betRail.balance": "Balance",
  "board.betRail.activeStakes": "Active stakes",
  "board.betRail.collection": "Collection",
  "board.betRail.cardCountViewAllSingular": "{count} CARD · VIEW ALL",
  "board.betRail.cardCountViewAllPlural": "{count} CARDS · VIEW ALL",
  "board.betRail.moreCount": "+{count} MORE",
  "board.betRail.noCardsYet": "No cards in collection yet, win a tile and keep its card.",
  "board.betRail.lastResult": "Last result",
  "board.betRail.eachClickAdds": "Each click adds {amount}",
  "board.betRail.depositToPlay": "Deposit to play",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "Needs {unit} - you have {balance}",
  "board.betRail.allTilesPartialCover": "{name} - covers {covered} of 8 tiles at {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "Bal",
  "board.betRail.dockStakes": "Stakes",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Next round in {seconds} seconds",
  "board.core.nextRoundLine": "Next round in {secs}",
  "board.core.playersDecidingAria": "{decided} of {total} other players decided",
  "board.core.playersDecidingLine": "Players deciding {ratio}",
  "board.core.pastRoundResultsAria": "Past round results",
  "board.core.pastRounds": "Past rounds",
  "board.core.winsAmount": "{label} wins {amount}",
  "board.core.youLost": "You lost!",
  "board.core.didNotStake": "You didn't stake this round",
  "board.core.keepCard": "Keep card ({amount})",
  "board.core.sellAmount": "Sell {amount}",
  "board.core.decideHint": "Decide now or during the next round",
  "board.core.roundResultLink": "Round #{roundId} result",
  "board.core.fullReceiptHint": "Full receipt → Round results",
  "board.core.splitReceiptHint": "Split · receipt → Round results",
  "board.core.eyebrowDrawing": "Drawing winner",
  "board.core.eyebrowPullsIn": "Pulls are in",
  "board.core.eyebrowLocked": "Locked",
  "board.core.headlineDrawing": "One ticket decides it",
  "board.core.headlinePullsIn": "Every pack is open",
  "board.core.headlineRoundLocked": "Round locked",
  "board.core.headlinePacksOpening": "Packs opening…",
  "board.core.subDrawing": "verifiable weighted draw",
  "board.core.subPullsIn": "drawing the winner next",
  "board.core.subIntro": "{count} {noun} on the line",
  "board.core.subOpening": "{count} {noun} opening on the board",
  "board.core.pool": "Pool",
  "board.core.totalPool": "Total pool",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "Round open",
  "board.core.clockLockedRevealing": "Locked · revealing",
  "board.core.clockSettled": "Settled",
  "board.core.clockAriaLabel": "{label}, {seconds} seconds",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Standard slab, top backer keeps it or sells back, pro-rata.",
  "board.settlement.dispositionSellBackSplit": "Grail rule: sold back by default, USDC split across the tile.",
  "board.settlement.dispositionTopBackerKeeps": "Grail rule: top backer keeps it and pays the others their share.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s to decide",
  "board.settlement.panelAria": "Tile details and settlement",
  "board.settlement.collapsePanelAria": "Collapse panel",
  "board.settlement.expandPanelAria": "Expand panel",
  "board.settlement.roundResultsLink": "Round results",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Round panel",
  "board.settlement.clickTileToBack": "Wins land here. Click any tile to back it with {amount}.",
  "board.settlement.lastResultLine": "Last result · Round #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "you won {amount}",
  "board.settlement.view": "view",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Losing tile · why it lost",
  "board.settlement.losingTileTitle": "{label} · {amount} on tile",
  "board.settlement.loserWhy":
    "Opened {cardName} ({amount}), the draw landed on {winnerLabel}. {pct} of the tickets paid nothing{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", including your {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "This tile was empty - no stake, no draw ticket.",
  "board.settlement.backToSettlement": "Back to settlement · {winnerLabel} won",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · card {index}/{total} · {amount} on tile",
  "board.settlement.pullCaptionSingle": "{label} · {amount} on tile",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Packs opening",
  "board.settlement.revealOpenedTitle": "{label} opened {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} odds of taking the {poolAmount} pool. Winner is being drawn now.",
  "board.settlement.revealEmpty": "Packs are flipping open on the board, the winner draw lands in a beat.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Last result · Round #{roundId}",
  "board.settlement.tileTakesTable": "{label} takes the table for {amount}",
  "board.settlement.whyWon": "Drawn by the verifiable weighted ticket, {label} held {pct}% of the pool at lock.",
  "board.settlement.lostNoStakeIn": "You lost, no stake in {label}",
  "board.settlement.theWinnerFallback": "the winner",
  "board.settlement.wonNoStake": "{label} won · you had no stake",
  "board.settlement.aTileFallback": "A tile",
  "board.settlement.lossNoteWithStake": "Your {amount} was on other tiles, hover one for its story.",
  "board.settlement.lossNoteNone": "You didn’t back a tile this round.",
  "board.settlement.topCardOfRound": "Top card of the round · {label}",
  "board.settlement.keepCardTo": "Keep card ({amount}) → collection",
  "board.settlement.sellBackFor": "Sell back for {amount}",
  "board.settlement.continueNextRound": "Continue to next round",
  "board.settlement.continue": "Continue",
  "board.settlement.keepSellHint":
    "Keep = card to collection · sell = {amount} now ({pct}% of card value, this pack's CC buyback) · {noAction}",
  "board.settlement.noActionKept": "no action = the card is kept for you.",
  "board.settlement.noActionAutoSell": "no action = auto-sell when the next round ends.",
  "board.settlement.revealOnlyNote":
    "Losing tiles are reveal-only in this canary, their pulls return to the vault. Only the winning tile's card pays out.",
  "board.settlement.payoutSplit": "Payout split",
  "board.settlement.poolChaseFeedLine": "Pool {pool} · chase feed {feed}",
  "board.settlement.chaseAddSuffix": " · CHASE +{amount}",
  "board.settlement.physicalCardArrow": "Physical card →",
  "board.settlement.grailSecuredSuffix": " (grail secured)",
  "board.settlement.grailSoldBack": "Grail sold back ({amount}) → USDC split above.",
  "board.settlement.cardAssignmentHead": "Card assignment",
  "board.settlement.cardLabel": "{amount} card",
  "board.settlement.soldToVault": "sold to vault · proceeds in split",
  "board.settlement.decisionTopBackerSuffix": " (top backer · keep or sell)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} off their USDC",
  "board.settlement.cardsSpreadNote":
    "Cards spread across as many backers as possible - an assigned card costs its CC buyback (85-93% by pack) out of that backer's USDC (same cash value as selling, they keep the upside). Only unabsorbed cards sell to the vault.",
  "board.settlement.chaseHitLabel": "The Chase HIT!",
  "board.settlement.chasePaidLine": "{amount} paid into this split.",
  "board.settlement.chaseMissLabel": "NO CHASE DROP.",
  "board.settlement.chaseNowLine": "Chase now {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Verify draw",
  "board.settlement.verifyDrawSub": "verifiable draw · view the draw receipt",
  "board.settlement.roundIdLabel": "round id",
  "board.settlement.winningDrawLabel": "winning draw",
  "board.settlement.drawSeedLabel": "draw seed",
  "board.settlement.proofIdLabel": "proof id",
  "board.settlement.ticketOfCount": "#{index} of {count}",
  "board.settlement.verifying": "Verifying…",
  "board.settlement.recheckDraw": "Re-check draw",
  "board.settlement.verifierLink": "Verifier ↗",
  "board.settlement.verifiedOk": "✓ Draw verified, this winner re-checks against its published draw seed.",
  "board.settlement.verifiedBad": "✗ This draw did not re-check against its seed, don’t trust it.",
  "board.settlement.everyRoundNote": "Every round draws one winner from a published seed you can re-check.",
  "board.settlement.noPacksNote": "No packs backed this round, nothing to draw.",
  "board.settlement.settledHoverHint": "Settled, hover a tile to inspect it.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Bet too big for your balance",
  "board.betTooBig.dismissAria": "Dismiss",
  "board.betTooBig.gotIt": "Got it",
  "board.betTooBig.body": "Backing {slotLabel} needs {needed}, and you hold {held}. You are {shortfall} short.",
  "board.betTooBig.deposit": "Deposit {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Players, ranked by total wager",
  "board.wagerLadder.title": "Players",
  "board.wagerLadder.countZero": "No bets yet",
  "board.wagerLadder.countOther": "{n} in the round · by total wager",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "Collapse players panel",
  "board.wagerLadder.lastRoundAria": "See last round results, round #{n}",
  "board.wagerLadder.lastRoundLabel": "See last round results",
  "board.wagerLadder.empty": "Nobody has backed a tile yet this round.",
  "board.wagerLadder.leaderAria": "Leader",
  "board.wagerLadder.openProfileTitle": "Open {name}'s profile in a new tab",
  "board.wagerLadder.miniGridTotal": "{amount} total",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Tiles {name} backed",
  "board.wagerLadder.miniGridTilesAriaYou": "Tiles you backed",

  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Players and cash PnL",
  "board.playerScoreboard.title": "Players",
  "board.playerScoreboard.open": "Stats & mute",
  "board.playerScoreboard.pinnedHint": "Pinned · Esc closes",
  "board.playerScoreboard.holdHint": "Hold Tab to peek · click to pin",
  "board.playerScoreboard.close": "Close player scoreboard",
  "board.playerScoreboard.windowAria": "PnL window",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "All",
  "board.playerScoreboard.partialHistory": "Partial history. Rankings use the retained settled-cash window.",
  "board.playerScoreboard.statsUnavailable": "PnL history is not available here. Current stakes are still live.",
  "board.playerScoreboard.playerColumn": "Player",
  "board.playerScoreboard.pnlColumn": "Cash PnL",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Loading players…",
  "board.playerScoreboard.empty": "Nobody has backed a tile in this round.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Tiles {tiles}",
  "board.playerScoreboard.stake": "Stake {amount}",
  "board.playerScoreboard.notAvailable": "Not available",
  "board.playerScoreboard.rounds": "{n} rounds",
  "board.playerScoreboard.youBadge": "You",
  "board.playerScoreboard.mute": "Mute",
  "board.playerScoreboard.unmute": "Unmute",
  "board.playerScoreboard.muteAria": "Mute {name} in chat",
  "board.playerScoreboard.unmuteAria": "Unmute {name} in chat",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "Sell inventory to fund this bid",
  "board.bidFund.eyebrow": "OUT OF USDC",
  "board.bidFund.titleOne": "Sell your card to cover this bid?",
  "board.bidFund.titleMany": "Sell these cards to cover this bid?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "Selling {cards} raises {buyback}, enough to back {amount} on {tile}.",
  "board.bidFund.bodyCardsMany": "these cards",
  "board.bidFund.note":
    "You are {amount} short. Cards sell at their pack's CC buyback rate (85 to 93%). This cannot be undone.",
  "board.bidFund.keepCards": "Keep cards",
  "board.bidFund.sellAndBid": "Sell and bid {amount}",
  "board.bidFund.autoSellSwitch": "Sell my wins for USDC automatically",
  "board.bidFund.autoSellNoteOn":
    "Every win cashes out at the buyback rate the moment it lands. No keep or sell prompts. Grails are never auto-sold. Change it anytime in Settings.",
  "board.bidFund.autoSellNoteOff":
    "Turn this on and every card you win cashes out to USDC at the buyback rate, no prompts. Grails are never auto-sold. Change it anytime in Settings.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "Bet with number keys?",
  "board.hotkeys.optInBody":
    "Pressing a key backs that tile with your current bet, instantly. Nothing was placed just now.",
  "board.hotkeys.notNow": "Not now",
  "board.hotkeys.enableKeys": "Enable keys",
  "board.hotkeys.turnOff": "Turn off",
  "board.hotkeys.turnOffTitle": "Keys stay off until you re-enable them in Settings.",
  "board.hotkeys.changeKeys": "Change keys",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "Open tile",
  "board.boardV1.onTile": "on tile",
  "board.boardV1.changeAmount": "change {amount}",
  "board.boardV1.oddsSuffix": "{pct} odds",
  "board.boardV1.openedOdds": "Opened · {pct} odds",
  "board.boardV1.emptyNeverInDraw": "Empty · never in the draw",
  "board.boardV1.winnerYourShare": "WINNER · your share pays out",
  "board.boardV1.winnerNoStake": "WINNER · you had no stake",
  "board.boardV1.lostOdds": "Lost the draw · {pct} odds",
  "board.boardV1.tileClickTitle": "Click anywhere to back {label} with {amount}",
  "board.boardV1.youAmount": "You {amount}",
  "board.boardV1.youNone": "You -",
  "board.boardV1.pctOfTile": "{pct} of tile",
  "board.boardV1.noStakeYet": "no stake yet",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} backed · {pct} of tile",
  "board.boardV1.statusWaitingDraw": "Waiting for the draw…",
  "board.boardV1.statusWonSplit": "Won {amount} from the split",
  "board.boardV1.statusOnWinningTile": "On the winning tile",
  "board.boardV1.statusNoPayout": "No payout this round",
  "board.boardV1.statusYourStake": "Your live stake",
  "board.boardV1.statusBacking": "Backing this tile",
  "board.boardV1.backerCount.one": "{n} backer",
  "board.boardV1.backerCount.other": "{n} backers",
  "board.boardV1.noBackersYet": "No backers yet",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "Back {amount}",
  "board.boardV1.backBtnTitle": "Back {label} with {amount} USDC",
  "board.boardV1.evolveTitle": "Backs exactly {amount} more on {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} on tile",
  "board.boardV1.opensAs": "Opens as · {summary}",
  "board.boardV1.noPacksYet": "No packs yet, back it to fund the first pack",
  "board.boardV1.whyOpenedDrawing":
    "Opened {cardName} ({amount}) at {pct} odds, the winner is being drawn now.",
  "board.boardV1.whyWon":
    "Won the weighted draw at {pct} odds. Opened {cardName} ({amount}); the pool split pro-rata across its backers.",
  "board.boardV1.whyLost":
    "Lost the weighted draw, {pct} odds ({amount} of the {poolAmount} pool). It still opened {cardName} ({cardAmount}), but only the winning tile pays.",
  "board.boardV1.whyEmpty": "Empty tile - no stake, no draw ticket.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " Your stake here: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " You had no stake here.",
  "board.boardV1.ifWins": "If this tile wins: you'd take ~{amount} of the {poolAmount} pool.",
  "board.boardV1.clickToBack": "Click to back with the selected bet and open its first pack at lock.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "Rank {rank}, {name}, wagered {wagered}, net {net}, win rate {pct} percent",
  "board.leaderboard.youTag": "YOU",
  "board.leaderboard.youRankTag": "YOU · #{n}",
  "board.leaderboard.statWagered": "WAGERED",
  "board.leaderboard.statNetPl": "NET P&L",
  "board.leaderboard.statWinRate": "WIN RATE",
  "board.leaderboard.statRounds": "ROUNDS",
  "board.leaderboard.statPoolShare": "POOL SHARE",
  "board.leaderboard.statFirstSeen": "FIRST SEEN",
  "board.leaderboard.statBiggestPull": "BIGGEST PULL",
  "board.leaderboard.shareOfToday": "of today's wagers",
  "board.leaderboard.shareOfAllTime": "of all-time wagers",
  "board.leaderboard.noneYet": "NONE YET",
  "board.leaderboard.viewFullProfile": "View full profile",
  "board.leaderboard.live": "LIVE",
  "board.leaderboard.fullRankings": "Full rankings",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} player",
  "board.leaderboard.playerCount.other": "{n} players",
  "board.leaderboard.roundCount.one": "{n} round",
  "board.leaderboard.roundCount.other": "{n} rounds",
  "board.leaderboard.colPlayer": "Player",
  "board.leaderboard.colWagered": "Wagered",
  "board.leaderboard.colNet": "Net P&L",
  "board.leaderboard.colWin": "Win",
  "board.leaderboard.colBiggestPull": "Biggest pull",
  "board.leaderboard.sortGroupAria": "Sort rankings",
  "board.leaderboard.sortBy": "Sort by {col}",
  "board.leaderboard.podiumNet": "{amount} net",
  "board.leaderboard.podiumTopPull": "Top pull",
  "board.leaderboard.fullStandings": "Full standings · {n} betters",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} {packName} pack ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} {packName} packs ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "{handle}'s X profile photo",
  "board.connectX.connectedTitle": "Connected via X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "{packName} slot (none on this tile)",
  "board.packChips.fixedChipTitle": "{n} x {packName} at {amount} each",
  "board.packChips.fixedChipTitleTotalSuffix": " - {amount} total",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Formed by the tile's pooled money - nobody bid this pack directly",
  "board.packChips.pooledSome": "{n} of {total} formed by the tile's pooled money",
  "board.packChips.bidWhole": "Bid as a whole pack",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Also on this tile: {list}",
  "board.packChips.morePacks.one": "{n} more pack",
  "board.packChips.morePacks.other": "{n} more packs",
  "board.packChips.morePacksWithList.one": "{n} more pack: {list}",
  "board.packChips.morePacksWithList.other": "{n} more packs: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Bids {bids} · pool {pool}",
  "board.tile.splitAllBids": "All {bids} was bid as whole packs",
  "board.tile.splitAllPool": "All {pool} is the tile's pooled loose money",
  "board.tile.splitPoolNote": "Dashed packs were formed by the pool, nobody bid them.",
  "board.tile.evolveLooseTitle": "{loose} loose on this tile evolves into the {tier} pack at {target}",
  "board.tile.evolveNoLooseTitle":
    "No loose money on this tile yet. Loose money evolves into the {tier} pack at {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - covers {covered} of {total} tiles at {unit}",
  "board.betRail.allTilesPlanFull": "At round close it backs all {total} tiles at {unit}. Total {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "At round close it backs {covered} of {total} tiles at {unit}. Your {balance} covers {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "At round close it backs {covered} of {total} tiles at {unit}. Your {balance} covers {spend}.",
  "board.betRail.allTilesPlanNone": "Your {balance} does not cover one {unit} bid, so no tile will be backed.",
  "board.betRail.allTilesShortHistory.one":
    "Auto-bet all tiles needs {needed} for {tiles} tiles at {unit}. You have {balance}, so it backed {covered} tile.",
  "board.betRail.allTilesShortHistory.other":
    "Auto-bet all tiles needs {needed} for {tiles} tiles at {unit}. You have {balance}, so it backed {covered} tiles.",
  "board.betRail.allTilesNoneHistory":
    "Auto-bet all tiles needs {needed} for {tiles} tiles at {unit}. You have {balance}, so no tile was backed.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys ABOVE are still the whole truth in one sentence: they remain the
  // armed chip's `title` and the plan plate's screen-reader text, so nothing an
  // assistive tech reads out has changed. What changed is the VISUAL: the
  // owner quoted "At round close it backs all 8 tiles at Grail x 10 · $10,000.
  // Total $80,000." — one run-on sentence carrying six separate facts, with the
  // number he actually cares about (the total) last. The plate now renders
  // those facts as FIELDS instead of prose, so each of these is a fragment, not
  // a sentence. Fragments also translate SHORT, which is the whole reason the
  // slip survives at 812x265 and in Filipino (the widest of the 20): the old
  // sentence is 98 codepoints in fil against 75 in en, and every one of those
  // extra characters had to wrap inside a ~286px rail.
  //
  // Keep them fragments. A translator who expands any of these back into a
  // clause re-creates the wrap the slip exists to remove.
  //   planWhen      the CONDITION, not part of the arithmetic. Its own line.
  //   planTotal     the label for the big figure. The figure itself is money
  //                 and is formatted, never translated.
  //   planMath*     the multiplication that PRODUCES the total, shown as
  //                 arithmetic. `×` is the multiplication sign (U+00D7), not
  //                 the letter x; {amount} is the per-tile money.
  //   planPerTile   which pack the per-tile amount buys. {unit} is a brand
  //                 tier name + count ("Grail ×10") and stays English.
  //
  // The second condition — the balance, shown only when it is what forces a
  // short spread — deliberately has NO key of its own: it composes the existing
  // "board.betRail.balance" label with a formatted amount, so the word stays
  // the one the rail already uses for the same quantity in all 20 locales
  // rather than becoming a second, drifting spelling of "balance".
  "board.betRail.planWhen": "At round close",
  "board.betRail.planTotal": "Total",
  "board.betRail.planMathFull": "{total} tiles × {amount}",
  "board.betRail.planMathShort": "{covered} of {total} tiles × {amount}",
  "board.betRail.planPerTile": "{unit} per tile",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all ten locales (a Japanese board rendered "Top | Bottom
  // | All"). The map now reads each of these through a t() getter at property
  // access. Six keys x five strategies; `glyph` is a symbol, not copy.
  //   .label     the narrow rail chip caption (3 to 6 chars in en, HARD width
  //              budget: it sits three-across in a ~250px rail)
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "Top",
  "board.strategy.highest.name": "Arm: back the highest tile at round close",
  "board.strategy.highest.detail":
    "Arms your bet on the tile carrying the most money, resolved right before the round closes.",
  "board.strategy.highest.rowTitle": "Top tile",
  "board.strategy.highest.closeLine": "backs the biggest tile at round close",
  "board.strategy.highest.gridLine": "most money at close",

  "board.strategy.lowest.label": "Bottom",
  "board.strategy.lowest.name": "Arm: back the lowest tile at round close",
  "board.strategy.lowest.detail":
    "Arms your bet on the least-crowded tile, resolved right before the round closes. If everyone piles onto lowest, it stops being the lowest by then.",
  "board.strategy.lowest.rowTitle": "Bottom tile",
  "board.strategy.lowest.closeLine": "backs the smallest tile at round close",
  "board.strategy.lowest.gridLine": "least money at close",

  "board.strategy.secondHighest.label": "2nd hi",
  "board.strategy.secondHighest.name": "Arm: back the second-highest tile at round close",
  "board.strategy.secondHighest.detail":
    "Arms your bet one rung below the leader, resolved right before the round closes.",
  "board.strategy.secondHighest.rowTitle": "2nd-highest tile",
  "board.strategy.secondHighest.closeLine": "backs the tile just below the leader at round close",
  "board.strategy.secondHighest.gridLine": "one rung below the leader",

  "board.strategy.secondLowest.label": "2nd lo",
  "board.strategy.secondLowest.name": "Arm: back the second-lowest tile at round close",
  "board.strategy.secondLowest.detail":
    "The crowd-theory pick: when everyone chases the lowest tile it gets crowded, so the second-lowest can pay better. Arms now, resolves right before the round closes.",
  "board.strategy.secondLowest.rowTitle": "2nd-lowest tile",
  "board.strategy.secondLowest.closeLine": "backs the tile just above the crowded bottom at round close",
  "board.strategy.secondLowest.gridLine": "one rung above the bottom",

  "board.strategy.allTiles.label": "All",
  "board.strategy.allTiles.name": "Arm: back every tile at round close",
  "board.strategy.allTiles.detail":
    "Arms your bet on every eligible tile, resolved right before the round closes. Total spend = your bet size x the number of tiles at that moment.",
  "board.strategy.allTiles.rowTitle": "All tiles",
  "board.strategy.allTiles.closeLine": "spreads your bet at round close",
  "board.strategy.allTiles.gridLine": "your bet on every tile",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "Tap again: {unit}",
  "board.tile.confirmClickAgain": "Click again: {unit}",
  "board.tile.betOffNotice": "Betting is off in settings",
  "board.stakeControl.pickPackHint": "Pick a pack to bet",
  "board.stakeControl.emptyStakeLead": "Pick a pack",
  "board.stakeControl.emptyStakeHint": "It becomes your bet",
  "gear.betInput.label": "Placing a bet",
  "gear.betInput.hint":
    "How a tile press (and its number key) places your bet. Double asks for one confirming tap first - the touch-screen default. Off is spectate mode: nothing can place a bet.",
  "gear.betInput.optionSingle": "Single tap",
  "gear.betInput.optionDouble": "Double tap",
  "gear.betInput.optionOff": "Off",
  "gear.cardOpen.label": "Opening cards",
  "gear.cardOpen.hint":
    "Double asks for a confirming tap before a card face opens its page - the touch-screen default.",
} as Record<string, string>;
