// English: "pages" segment. Covers the six standalone-route surfaces owned by
// this segment: RoyaleProfileRoute, RoyaleLadderRoute, RoyaleRoundResultsRoute,
// RoyaleCollectionRoute, RoyaleWinningsStrip, RoyaleSessionHistory, plus two
// components those routes mount: pages/RoyaleWithdrawPanel.tsx (the profile
// page's #wallet section, see pages.profile.withdraw.*) and
// RoyaleSellBackPanel.tsx (shared by RoyaleCollectionRoute + RoyaleWinningsStrip,
// see pages.sellBack.*). See royaleI18n.ts's file header for the key-naming
// and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale. This is the ONLY
// file an agent working on the "pages" surface should need to touch for this
// locale, index.ts already spreads it in and should not need to change again.
//
// Namespaces: pages.common.* (strings identical across 2+ files in this
// segment, e.g. "GO TO THE BOARD"), pages.sessionHistory.*, pages.winningsStrip.*,
// pages.collection.*, pages.ladder.* (incl. pages.ladder.leaderboard.* for the
// RoyaleLeaderboard.tsx "Top betters" panel it hosts), pages.ladderViewer.*
// (pages/RoyaleLadderCardViewer.tsx, the ladder's full-pool modal),
// pages.results.*, pages.profile.* (incl. pages.profile.withdraw.* for
// RoyaleWithdrawPanel.tsx), pages.stats.* (RoyaleStatsPanel.tsx, mounted by the
// profile's Stats tab), pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx),
// pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx), and
// pages.sellBack.* (RoyaleSellBackPanel.tsx's header banner AND the whole
// per-ticket flow: countdown, custody badges, every error code's title/detail
// in royaleSellBack.ts, the receipt and the history rows).
//
// Pluralized phrases use a flat "<key>One" / "<key>Other" pair (no built-in
// pluralization helper exists yet in royaleI18n.ts) — the calling code picks
// whichever key applies to the live count, then replaces {n}/etc tokens.
export default {
  // ===== pages.common.* — reused across 2+ files in this segment ===========
  "pages.common.goToBoard": "GO TO THE BOARD",
  "pages.common.backToBoard": "← Back to the board",
  "pages.common.replay": "REPLAY",
  "pages.common.replayTitle": "Watch round {n} again, from the first bid to the reveal",
  "pages.common.you": "You",
  "pages.common.cancel": "Cancel",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "Withdraw to wallet",
  "pages.common.withdrawnToWallet": "Withdrawn to wallet",
  "pages.common.chase": "CHASE",
  "pages.common.roundNumber": "Round #{n}",
  "pages.common.share": "Share",
  "pages.common.shareCard": "Share card",
  "pages.common.noCardsKeptTitle": "NO CARDS KEPT YET",
  "pages.common.noCardsKeptBody": "Keep a winning pull instead of selling it back and it lands here as a graded slab.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "Session history",
  "pages.sessionHistory.log.title": "Session history",
  "pages.sessionHistory.log.emptyHint": "Your receipts appear here",
  "pages.sessionHistory.log.hint": "Your receipts & actions",

  "pages.sessionHistory.ledger.ariaLabel": "Round and tile history",
  "pages.sessionHistory.ledger.title": "Round & tile history",
  "pages.sessionHistory.ledger.empty": "Past rounds appear here",
  "pages.sessionHistory.ledger.summaryOne": "{n} settled round · click a row for detail",
  "pages.sessionHistory.ledger.summaryOther": "{n} settled rounds · click a row for detail",
  "pages.sessionHistory.ledger.emptyBody":
    "No completed rounds yet, the first reveal lands here with every tile, the winning tile, and the split.",
  "pages.sessionHistory.ledger.showMore": "SHOW {n} MORE · {hidden} OLDER",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "{label} won",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "{amount} pool",
  "pages.sessionHistory.row.noPull": "no pull",
  "pages.sessionHistory.row.youWon": "you +{amount}",
  "pages.sessionHistory.row.noWin": "no win",

  "pages.sessionHistory.detail.splitAria": "Payout split",
  "pages.sessionHistory.detail.splitOf": "Split of {amount}",
  "pages.sessionHistory.detail.yourStake": "Your stake {amount}",
  "pages.sessionHistory.detail.noStakeFromYou": "No stake from you",
  "pages.sessionHistory.detail.cardKeptGrail": "Card → {name} (grail kept)",
  "pages.sessionHistory.detail.cardSoldBack": "Card → {name} · sold back",
  "pages.sessionHistory.detail.cardKept": "Card → {name} · kept",
  "pages.sessionHistory.detail.grailSoldSplit": "Grail sold back → split above",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "TOP · ",
  "pages.sessionHistory.tile.wonSuffix": " · WON",
  "pages.sessionHistory.tile.lostSuffix": " · lost the draw",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "Your winnings",
  "pages.winningsStrip.title": "Your winnings",
  "pages.winningsStrip.decisionClock": "{n}s to decide",
  "pages.winningsStrip.withdrawBalance": "Withdraw balance {amount}",
  "pages.winningsStrip.howItWorks": "How the game works - odds, VRF, cards →",
  "pages.winningsStrip.decisionOpen": "Your card decision is open",
  "pages.winningsStrip.decisionNoActionKeep": "no action keeps it (sell anytime from your cards)",
  "pages.winningsStrip.decisionNoActionSell": "no action auto-sells at the next lock",
  "pages.winningsStrip.keep": "Keep ({amount})",
  "pages.winningsStrip.sell": "Sell {amount}",
  "pages.winningsStrip.sellWithPct": "Sell {amount} · {pct}%",
  "pages.winningsStrip.yourCards": "Your cards",
  "pages.winningsStrip.heldValue": "{amount} held",
  "pages.winningsStrip.keptByDefault": "Kept by default",
  "pages.winningsStrip.withdrawAllOne": "Withdraw all {n} card · {amount}",
  "pages.winningsStrip.withdrawAllOther": "Withdraw all {n} cards · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "Sure? Withdraw {n} cards",
  "pages.winningsStrip.selectToWithdraw": "Select to withdraw",
  "pages.winningsStrip.sellAll": "Sell all {amount} · {pct}%",
  "pages.winningsStrip.selectedForWithdrawal": "Selected for withdrawal",
  "pages.winningsStrip.tapCardToSelect": "Tap card to select",
  "pages.winningsStrip.selectCardsToWithdraw": "Select cards to withdraw",
  "pages.winningsStrip.selectedSummaryOne": "{n} card selected · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} cards selected · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "Withdraw {n} card · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "Withdraw {n} cards · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "Withdraw balance",
  "pages.winningsStrip.closeWithdrawAria": "Close withdraw",
  "pages.winningsStrip.pastRounds": "Past rounds",
  "pages.winningsStrip.shareLastWin": "Share last win",
  "pages.winningsStrip.roundId": "R{n}",
  "pages.winningsStrip.tileTook": "Tile {n} took the table · {amount}",
  "pages.winningsStrip.chaseAward": "Chase +{amount}",
  "pages.winningsStrip.noRound": "no round",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "Lost",
  "pages.winningsStrip.kept": "Kept",
  "pages.winningsStrip.sold": "Sold",
  "pages.winningsStrip.activity": "Activity",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "Confirm card sell back",
  "pages.sellConfirm.eyebrow": "Sell back",
  "pages.sellConfirm.title": "Sell {name}?",
  "pages.sellConfirm.payoutLabel": "You get",
  "pages.sellConfirm.rateNote": "{pct}% of {value}",
  "pages.sellConfirm.irreversible": "The card leaves your collection. You cannot undo this.",
  "pages.sellConfirm.keep": "Keep card",
  "pages.sellConfirm.confirm": "Sell for {amount}",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "Your collection",
  "pages.collection.summaryCardOne": "card",
  "pages.collection.summaryCardOther": "cards",
  "pages.collection.totalValueSuffix": "total value",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "TOP",
  "pages.collection.tierCommon": "COMMON",
  "pages.collection.viaKept": "KEPT",
  "pages.collection.viaWon": "WON",
  "pages.collection.cardAriaLabel": "{name}, {amount}. Enter opens card details.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "Rankings",
  "pages.ladder.tabAriaLabel": "Rankings view",
  "pages.ladder.tabBetters": "Top betters",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.tabPacks": "Pack odds",
  "pages.ladder.sectionAriaLabel": "Pack rankings",
  "pages.ladder.intro":
    "Every dollar fills the biggest pack it can. Each rung is a real CollectorCrypt machine, peek the top cards, then open the full pool.",
  "pages.ladder.sourceLive": "Live CollectorCrypt pools ({count}/{total} machines) · refreshed {age}{backlogNote}",
  "pages.ladder.sourceBundled": "Reference pools: bundled CollectorCrypt slabs, real insured values (not live listings)",
  "pages.ladder.sourceFixtures": "Reference examples: bundled fixtures",
  "pages.ladder.footNote": "Odds, value bands and buyback mirror CollectorCrypt's published gacha-machine specs (snapshot {date}).",
  "pages.ladder.footNoteLive":
    "Cards are live marketplace inventory inside each machine's bands, refreshed every 5 minutes between rounds.",
  "pages.ladder.footNoteBundled": "The cards shown are a bundled set of real graded CollectorCrypt slabs, not live listings.",
  "pages.ladder.stepUp": "Step up",
  "pages.ladder.stepUpFromPrefix": "from {name}",
  "pages.ladder.stepUpEntryPrefix": "entry rung, change under",
  "pages.ladder.stepUpEntrySuffix": "stays loose",
  "pages.ladder.valueRange": "Value range",
  "pages.ladder.ceiling": "ceiling",
  "pages.ladder.floor": "floor",
  "pages.ladder.machineOdds": "Machine odds",
  "pages.ladder.buybackPrefix": "buyback",
  "pages.ladder.grailOddsPrefix": "grail",
  "pages.ladder.poolLoading": "Pool loading…",
  "pages.ladder.viewMore": "View {n} more",
  "pages.ladder.cardPool": "{n}-card pool",
  "pages.ladder.priciestFirst": "priciest first",
  "pages.ladder.machineCardsOnly": "{n} cards",
  "pages.ladder.machineNameCards": "{shortName} · {n} cards",

  // ===== pages.ladder.collector.* (RoyaleCollectorLeaderboard.tsx) ==========
  "pages.ladder.collector.ariaLabel": "Collector leaderboard",
  "pages.ladder.collector.title": "Collector leaderboard",
  "pages.ladder.collector.description": "Collection value leads. Hold more cards, chase Grails, and show your best pull.",
  "pages.ladder.collector.playerCount.one": "{n} collector",
  "pages.ladder.collector.playerCount.other": "{n} collectors",
  "pages.ladder.collector.cardCount.one": "{n} card held",
  "pages.ladder.collector.cardCount.other": "{n} cards held",
  "pages.ladder.collector.tableAriaLabel": "Collector standings by collection value",
  "pages.ladder.collector.collectionValue": "Collection value",
  "pages.ladder.collector.cardsHeld": "Cards held",
  "pages.ladder.collector.cardsShort": "cards",
  "pages.ladder.collector.grailsPulled": "Grails pulled",
  "pages.ladder.collector.grailsShort": "Grails",
  "pages.ladder.collector.bestPull": "Best pull",
  "pages.ladder.collector.noPull": "None yet",
  "pages.ladder.collector.youRankTag": "YOU · #{n}",
  "pages.ladder.collector.viewCollection": "View collection",
  "pages.ladder.collector.empty": "No cards are held yet.",
  "pages.ladder.collector.emptyCta": "Open a pack to enter the standings",
  "pages.ladder.collector.footnote": "Collection value is the sum of cards still held on this device. Rankings refresh as rounds settle.",
  "pages.ladder.collector.rowAria": "Rank {rank}, {name}, collection value {value}, {cards} cards held, {grails} Grails pulled",

  // ===== pages.ladder.leaderboard.* (RoyaleLeaderboard.tsx, the "Top betters"
  // panel this route's "betters" tab renders - also mounted as a compact rail
  // on the board landing, see board segment's usage) =========================
  "pages.ladder.leaderboard.ariaLabel": "Top betters leaderboard",
  "pages.ladder.leaderboard.title": "Top betters",
  "pages.ladder.leaderboard.emptyNoSettled": "No settled rounds yet",
  "pages.ladder.leaderboard.emptyNoBetsToday": "No bets have settled today yet.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "No bets have settled yet.",
  "pages.ladder.leaderboard.emptyCta": "Back the board to get on it",
  "pages.ladder.leaderboard.timeframeAriaLabel": "Timeframe",
  "pages.ladder.leaderboard.today": "Today",
  "pages.ladder.leaderboard.allTime": "All time",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "View {n} more" button opens over the full machine pool). Its
  // own "view more" button reuses pages.ladder.viewMore above (same wording,
  // same surface). Counts arrive pre-formatted, digits stay as authored. ======
  "pages.ladderViewer.eyebrow": "Pack pool",
  "pages.ladderViewer.showing": "Showing {n} of {total}",
  "pages.ladderViewer.closeAria": "Close pack pool",
  "pages.ladderViewer.remainingFoot": "{n} still to see · {amount} floor",
  "pages.ladderViewer.wholePool": "That’s the whole {n}-card pool.",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "Round results",
  // Plural pair (see royaleI18n.ts header, "PLURAL KEYS"): ".one" for n===1,
  // ".other" for every other count, chosen by the calling component.
  "pages.results.count.one": "{n} ROUND",
  "pages.results.count.other": "{n} ROUNDS",
  "pages.results.emptyTitle": "NO SETTLED ROUNDS YET",
  "pages.results.emptyBody": "Play a round on the board and every card it opens lands here, round by round.",
  "pages.results.tileWins": "{winner} wins {amount}",
  "pages.results.tileFallback": "Tile",
  "pages.results.youWon": "you won {amount}",
  "pages.results.noWinForYou": "no win for you",
  "pages.results.replayLink": "Replay",
  // Bare "Payout split" (no amount) — the upgraded payout-split header (owner
  // 2026-07-22) shows the eyebrow label and the pool amount as two separate
  // nodes, unlike pages.results.payoutSplit below which bakes the amount in.
  "pages.results.payoutSplitLabel": "Payout split",
  "pages.results.payoutSplit": "Payout split · pool {amount}",
  "pages.results.yourPullPrefix": "Your pull ·",
  "pages.results.noPull": "none",
  "pages.results.youKeptIt": "you kept it",
  "pages.results.youSoldItForCash": "you sold it for cash",
  "pages.results.chaseAward": "CHASE +{amount}",
  "pages.results.potLedgerFull": "{amount} pool paid out in full",
  "pages.results.pool": "pool",
  "pages.results.potLedgerWithheld": "withheld",
  "pages.results.potLedgerPaidIn": "paid in",
  "pages.results.potLedgerCashToBackers": "cash to backers",
  "pages.results.theChase": "The Chase",
  "pages.results.protocol": "protocol",
  "pages.results.jackpot": "jackpot",
  "pages.results.cardTrades": "card trades",
  "pages.results.statsAriaLabel": "Session totals",
  "pages.results.roundsPlayed": "ROUNDS PLAYED",
  "pages.results.winRate": "WIN RATE",
  "pages.results.cashWon": "CASH WON",
  "pages.results.biggestPackPull": "BIGGEST PACK PULL",
  "pages.results.noneYet": "NONE YET",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "{pct} odds",
  "pages.results.oddsUnavailable": "odds unavailable",
  "pages.results.collapseRoundAria": "Collapse round {n}",
  "pages.results.expandRoundAria": "Expand round {n}",
  "pages.results.playersTitle": "OTHER PLAYERS",
  "pages.results.playersCount.one": "{n} player",
  "pages.results.playersCount.other": "{n} players",
  "pages.results.playersShow": "Show",
  "pages.results.playersHide": "Hide",
  "pages.results.playerBid": "BID",
  "pages.results.playerResult": "RESULT",
  "pages.results.playerCash": "{amount} cash",
  "pages.results.playerNoCards": "no cards",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner - mounted by
  // both RoyaleCollectionRoute and RoyaleWinningsStrip) ======================
  "pages.sellBack.ariaLabel": "Sell your cards back",
  "pages.sellBack.title": "Sell back",
  "pages.sellBack.hint": "Locked-in price from the moment you won, never re-quoted.",
  "pages.sellBack.quietState": "Sell-back opens with live rounds.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers - a locale reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "Expired",
  "pages.sellBack.countdownDaysHours": "{d}d {h}h left",
  "pages.sellBack.countdownHoursMinutes": "{h}h {m}m left",
  "pages.sellBack.countdownMinutes": "{m}m left",
  "pages.sellBack.countdownSubMinute": "<1m left",

  // --- royaleSellBack.ts: custody badges (sellBackCustodyBadge). Informational
  // only, sell-back stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "Delivery pending",
  "pages.sellBack.badgeNeedsWallet": "Needs wallet",

  // --- royaleSellBack.ts: player-facing copy for every domain error code
  // (sellBackErrorCopy). Each pair is a title + the detail rendered under it.
  "pages.sellBack.error.quoteExpired.title": "This offer expired",
  "pages.sellBack.error.quoteExpired.detail":
    "The sell-back window lapsed. The card is still yours. The open market is the exit now.",
  "pages.sellBack.error.alreadyExercised.title": "Already sold back",
  "pages.sellBack.error.alreadyExercised.detail": "This card was already sold back. Showing the receipt from that sale.",
  "pages.sellBack.error.quoteVoid.title": "Offer withdrawn",
  "pages.sellBack.error.quoteVoid.detail":
    "This sell-back offer was withdrawn by operations. Contact support if you expected a payout.",
  "pages.sellBack.error.notQuoteOwner.title": "Not your card",
  "pages.sellBack.error.notQuoteOwner.detail": "This sell-back offer belongs to a different account.",
  "pages.sellBack.error.cardNotDelivered.title": "Card still in transit",
  "pages.sellBack.error.cardNotDelivered.detail":
    "The card hasn't finished delivering to your wallet yet. Try again in a moment.",
  "pages.sellBack.error.cardNotHeld.title": "Card not in your wallet",
  "pages.sellBack.error.cardNotHeld.detail":
    "Your wallet no longer holds this exact card. Only the original card exercises this offer.",
  "pages.sellBack.error.returnTxRequired.title": "Signature needed",
  "pages.sellBack.error.returnTxRequired.detail":
    "This sell-back needs your signature to return the card. Sign and try again.",
  "pages.sellBack.error.returnNotConfirmed.title": "Return didn't confirm",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "The card return didn't confirm on-chain. The offer is still active. Retry when ready.",
  "pages.sellBack.error.rateLimited.title": "Too many attempts",
  "pages.sellBack.error.rateLimited.detail": "Slow down a moment and try again.",
  "pages.sellBack.error.accountRequired.title": "Sign in required",
  "pages.sellBack.error.accountRequired.detail": "Connect your account to sell back a card.",
  "pages.sellBack.error.quoteNotFound.title": "Offer not found",
  "pages.sellBack.error.quoteNotFound.detail": "This sell-back offer no longer exists.",
  "pages.sellBack.error.quoteIdRequired.title": "Something went wrong",
  "pages.sellBack.error.quoteIdRequired.detail": "The sell-back request was missing required information.",
  "pages.sellBack.error.unknown.title": "Sell-back failed",
  "pages.sellBack.error.unknown.detail": "Something went wrong on our end. Try again in a moment.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "Live sync retries automatically. Locked-in offers keep their price.",
  "pages.sellBack.offlineTitle": "You're offline",
  "pages.sellBack.offlineBody": "Reconnect and your locked-in offers are right here.",
  "pages.sellBack.loadFailedTitle": "Quotes didn't load",
  "pages.sellBack.loadFailedBody": "Locked-in offers keep their price. Pull them up again in a moment.",
  "pages.sellBack.tryAgain": "Try again",
  "pages.sellBack.emptyTitle": "No cards to sell back yet",
  "pages.sellBack.emptyBody": "Win a pack and its buyback offer lands here the moment the round settles.",
  "pages.sellBack.pastSellBacks": "Past sell-backs",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "Local offer",
  "pages.sellBack.noExpiry": "No expiry",
  "pages.sellBack.preparing": "Preparing…",
  "pages.sellBack.sellBackAmount": "Sell back {amount}",
  "pages.sellBack.waitingSignature": "Waiting for your signature…",
  "pages.sellBack.signatureUnwired": "Selling this card back needs a wallet signature. Your locked-in offer stays active.",
  "pages.sellBack.confirmInWallet": "Confirm in your wallet…",
  "pages.sellBack.sellingBack": "Selling back…",
  "pages.sellBack.receiptAlreadySold": "Already sold back",
  "pages.sellBack.receiptSoldBack": "Sold back",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "{amount} paid · {rail}",
  "pages.sellBack.railGameBalance": "game balance",

  // --- RoyaleSellBackPanel.tsx: the "Past sell-backs" history rows.
  "pages.sellBack.historySoldBack": "Sold back · {amount}",
  "pages.sellBack.historyExpired": "Offer expired",
  "pages.sellBack.historyWithdrawn": "Offer withdrawn",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "never",
  "pages.profile.relTime.justNow": "just now",
  "pages.profile.relTime.minutesAgo": "{n}m ago",
  "pages.profile.relTime.hoursAgo": "{n}h ago",
  "pages.profile.relTime.daysAgo": "{n}d ago",
  "pages.profile.relTime.monthsAgo": "{n}mo ago",
  "pages.profile.noDate": "–",

  "pages.profile.count.settledRoundOne": "{n} settled round",
  "pages.profile.count.settledRoundOther": "{n} settled rounds",
  "pages.profile.count.roundOne": "{n} round",
  "pages.profile.count.roundOther": "{n} rounds",
  "pages.profile.count.settledOutcomeOne": "{n} settled outcome",
  "pages.profile.count.settledOutcomeOther": "{n} settled outcomes",
  "pages.profile.xOfRoundsOne": "{x} of {n} round",
  "pages.profile.xOfRoundsOther": "{x} of {n} rounds",

  "pages.profile.follow": "Follow",
  "pages.profile.following": "Following",
  "pages.profile.linkCopied": "Link copied",
  "pages.profile.headlineStatsAria": "Headline stats",

  "pages.profile.chartWindow7d": "7D",
  "pages.profile.chartWindow30d": "30D",
  "pages.profile.chartWindowAll": "All",
  "pages.profile.chartValueAria": "Collection value from {from} to {to} in this window",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "now",
  "pages.profile.viewRoundResultsAria": "View Round #{n} results",

  "pages.profile.collectionViewAll": "All cards",
  "pages.profile.collectionViewVault": "In vault",
  "pages.profile.collectionViewOffers": "Offers",
  "pages.profile.collectionViewHistory": "History",
  "pages.profile.collectionStateAria": "Collection state",
  "pages.profile.openCollection": "Open collection ↗",
  "pages.profile.collectionEmptyHistoryTitle": "NO SELL-BACKS YET",
  "pages.profile.collectionEmptyHistoryBody": "Sell a kept card back and the receipt lands here.",
  "pages.profile.inVault": "In vault · Round #{n}",
  "pages.profile.sellBackOffer": "Sell-back offer · {amount}",
  "pages.profile.soldBack": "Sold back",
  "pages.profile.soldAtSettlement": "Sold at settlement",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "Sell-back actions and live offers run on the collection page.",

  "pages.profile.pnlByRound": "P&L BY ROUND",
  "pages.profile.pnlSubtitle": "last {n} staked rounds · wins up, losses down · {wins}W {losses}L",
  "pages.profile.pnlAria": "Net result per round, last {n} rounds",
  "pages.profile.pnlColAria": "Round {n}: {signed}",
  "pages.profile.pnlTooltip": "R{n} · {signed}",

  "pages.profile.recentForm": "RECENT FORM",
  "pages.profile.recentFormSubtitle": "last {n} staked rounds, oldest first",
  "pages.profile.formColAria": "Round {n}: {result} {amount}",
  "pages.profile.won": "won",
  "pages.profile.lost": "lost",
  "pages.profile.formW": "W",
  "pages.profile.formL": "L",

  "pages.profile.leaderboardEyebrow": "LEADERBOARD · {mode}",
  "pages.profile.modeMostProfitable": "MOST PROFITABLE",
  "pages.profile.modeHighestVolume": "HIGHEST VOLUME",
  "pages.profile.topPlayers": "top {n} players",
  "pages.profile.metricProfit": "PROFIT",
  "pages.profile.metricVolume": "VOLUME",
  "pages.profile.metricNetPnl": "NET P&L",
  "pages.profile.filtersAria": "Leaderboard filters",
  "pages.profile.metricFilterAria": "Metric",
  "pages.profile.windowFilterAria": "Window",
  "pages.profile.window1d": "1D",
  "pages.profile.window7d": "7D",
  "pages.profile.window30d": "30D",
  "pages.profile.windowAll": "ALL",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "PLAYER",
  "pages.profile.thRounds": "ROUNDS",
  "pages.profile.you": "YOU",
  "pages.profile.leaderboardEmpty": "NO PLAYERS IN THIS WINDOW YET. The board fills as bids and payouts are recorded.",

  "pages.profile.notFoundTitle": "NO INDEXED ROUNDS YET",
  "pages.profile.notFoundBody": "{wallet} hasn't settled a round the server has indexed yet.",
  "pages.profile.offlineTitle": "PROFILE OUT OF REACH",
  "pages.profile.offlineBody": "Player lookups need a live connection. Retry to pull this record.",
  "pages.profile.retry": "RETRY",

  "pages.profile.collectorSince": "Collector since {month}",
  "pages.profile.lastActive": "last active {rel}",
  "pages.profile.rankAllTime": "Rank #{n} · all time",
  "pages.profile.netPnl": "Net P&L",
  "pages.profile.lifetime": "lifetime",
  "pages.profile.bidWinRate": "Bid win rate",
  "pages.profile.cardsWon": "Cards won",
  "pages.profile.grailsOne": "{n} grail",
  "pages.profile.grailsOther": "{n} grails",
  "pages.profile.totalStaked": "Total staked",
  "pages.profile.betsCount": "{n} bets",
  "pages.profile.biggestRound": "Biggest round",
  "pages.profile.singleRoundSwing": "single-round swing",
  "pages.profile.playerStatsAria": "Player stats",
  "pages.profile.winsLosses": "WINS / LOSSES",
  "pages.profile.roundsPlayed": "ROUNDS PLAYED",
  "pages.profile.betsPlaced": "BETS PLACED",
  "pages.profile.voidedRounds": "VOIDED ROUNDS",

  "pages.profile.tablePlayer": "Table player",
  "pages.profile.playerFallback": "Player",
  "pages.profile.localEmptyTitle": "NO ROUNDS THIS SESSION YET",
  "pages.profile.localEmptyBody": "{name} hasn't backed a tile yet this session.",
  "pages.profile.sessionNet": "Session net",
  "pages.profile.cashSplitsOnly": "cash splits only",
  "pages.profile.thisSession": "this session",
  "pages.profile.packsOpened": "Packs opened",
  "pages.profile.onBackedTiles": "on backed tiles",
  "pages.profile.biggestPull": "Biggest pull",
  "pages.profile.noneYet": "None yet",
  "pages.profile.recentActivity": "Recent activity",
  "pages.profile.noSettledOutcomesPlayer": "No settled outcomes for this player yet this session.",

  "pages.profile.pageTitle": "Profile",
  "pages.profile.followingCount": "Following {n}",
  "pages.profile.collectionValue": "Collection value",
  "pages.profile.updatedAgo": "updated {rel}",
  "pages.profile.noCardsYet": "no cards yet",
  "pages.profile.change30d": "30D change",
  "pages.profile.allNewIn30": "all new inside 30 days",
  "pages.profile.noChange": "no change",
  "pages.profile.cardsOwned": "Cards owned",
  "pages.profile.realizedProceeds": "Realized proceeds",
  "pages.profile.sellBackOne": "{n} sell-back",
  "pages.profile.sellBackOther": "{n} sell-backs",
  "pages.profile.tabHighlights": "Highlights",
  "pages.profile.tabCollection": "Collection",
  "pages.profile.tabActivity": "Activity",
  "pages.profile.tabStats": "Stats",
  "pages.profile.tabsAria": "Profile sections",
  "pages.profile.emptyHighlightsTitle": "NO ROUNDS ON THE BOOKS YET",
  "pages.profile.emptyHighlightsBody":
    "Back a tile on the board and your passport fills in: value curve, activity, collection and rank.",
  "pages.profile.collectionPerformance": "Collection performance",
  "pages.profile.chartWindowAria": "Chart window",
  "pages.profile.chartEmpty": "No collection value yet. Keep a winning pull and the curve starts here.",
  "pages.profile.thisWindow": "this window",
  "pages.profile.chartNoChanges": "No collection changes in this window.",
  "pages.profile.viewAll": "View all {n}",
  "pages.profile.collectionHighlights": "Collection highlights",
  "pages.profile.seeAll": "See all {n}",
  "pages.profile.noCardsInVault": "No cards in the vault yet. Keep a pull and it shows here as a slab.",
  "pages.profile.activityAria": "Activity",
  "pages.profile.roundHistoryAria": "Round history",
  "pages.profile.onThisDevice": "{count} on this device",
  "pages.profile.noActivityYet": "No activity yet. Rounds you stake and cards you keep or sell land here.",
  "pages.profile.performanceAria": "Performance",
  "pages.profile.walletAria": "Wallet",
  "pages.profile.walletEyebrow": "WALLET",
  "pages.profile.emptyStatsBody": "Back a tile on the board and your P&L, win rate and round ledger build up here.",
  "pages.profile.findPlayerAria": "Find a player",
  "pages.profile.lookUpWallet": "LOOK UP A WALLET",
  "pages.profile.walletPlaceholder": "Paste a wallet address or guest id",
  "pages.profile.view": "VIEW",
  "pages.profile.myProfile": "MY PROFILE",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx, mounted in
  // the #wallet section right below the walletEyebrow/walletAria header
  // above) - LOCAL/PROOF ONLY, no money moves off a money runtime, but the
  // copy is written in real-money voice since it is the real-money flow's UI.
  "pages.profile.withdraw.ariaLabel": "Withdraw winnings",
  "pages.profile.withdraw.title": "Withdraw",
  "pages.profile.withdraw.subtitle": "Cash out part or all of your balance to a Solana wallet.",
  "pages.profile.withdraw.available": "Available",
  "pages.profile.withdraw.amountLabel": "Amount (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "Withdraw amount presets",
  "pages.profile.withdraw.destinationLabel": "Destination wallet",
  "pages.profile.withdraw.destinationPlaceholder": "Solana address",
  "pages.profile.withdraw.submit": "Withdraw",
  "pages.profile.withdraw.submitBusy": "Requesting...",
  "pages.profile.withdraw.note":
    "You approve each withdrawal with a wallet signature, and your USDC is paid out to the Solana address you provide.",
  "pages.profile.withdraw.errorInvalidAmount": "ENTER A VALID AMOUNT (0.01 TO 10,000).",
  "pages.profile.withdraw.errorInvalidDestination": "ENTER A VALID SOLANA DESTINATION ADDRESS.",
  "pages.profile.withdraw.requesting": "REQUESTING {amount} WITHDRAWAL...",
  "pages.profile.withdraw.sent": "WITHDRAWAL SENT - {amount} TO {destShort}...",
  "pages.profile.withdraw.signatureRequired":
    "WALLET SIGNATURE REQUIRED - SIGN THE WITHDRAWAL NONCE WITH YOUR WALLET (A PRIVY TOKEN ALONE IS REFUSED).",
  "pages.profile.withdraw.refused": "WITHDRAWAL REFUSED ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible PLAYER STATS
  // dashboard mounted by the profile route's Stats tab). CAPS micro-labels are
  // a deliberate house style: keep a locale's own caps convention, never
  // lowercase them just because the source shouts. The GRAIL tier row keeps its
  // brand name in English and needs no key (see royaleI18n.ts's rules). ======
  "pages.stats.title": "PLAYER STATS",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} ROUNDS · {packs} PACKS",
  "pages.stats.noRoundsYet": "NO ROUNDS YET",
  "pages.stats.emptyBody": "NO ROUNDS YET. Back a tile to start tracking your net P&L, win rate and pulls.",
  "pages.stats.netPnl": "NET P&L",
  "pages.stats.roi": "ROI",
  "pages.stats.winRate": "WIN RATE",
  "pages.stats.totalStaked": "TOTAL STAKED",
  "pages.stats.totalWon": "TOTAL WON",
  "pages.stats.holdings": "HOLDINGS",
  "pages.stats.cardsHeld.one": "{n} card",
  "pages.stats.cardsHeld.other": "{n} cards",
  "pages.stats.packsOpened": "PACKS OPENED",
  "pages.stats.chaseHits": "CHASE HITS",
  "pages.stats.bestRound": "BEST ROUND",
  "pages.stats.worstRound": "WORST ROUND",
  "pages.stats.biggestPackPull": "BIGGEST PACK PULL",
  "pages.stats.noneYet": "NONE YET",
  "pages.stats.perTierHits": "PER-TIER HITS",
  "pages.stats.tierTop": "TOP",
  "pages.stats.tierCommon": "COMMON",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "see last round results" record page) ============================
  "pages.arenaResults.title": "Arena results",
  "pages.arenaResults.backToArena": "← Back to the arena",
  "pages.arenaResults.emptyBody": "No arena round has settled yet.",
  "pages.arenaResults.enterArena": "Enter the arena →",
  "pages.arenaResults.matchNumber": "MATCH #{n}",
  // The headline reads "<player name> takes the pot"; the self view uses the
  // second-person verb. The name itself is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "take the pot",
  "pages.arenaResults.takesThePot": "takes the pot",
  "pages.arenaResults.potCards.one": "pot · {n} card",
  "pages.arenaResults.potCards.other": "pot · {n} cards",
  "pages.arenaResults.winner": "WINNER",
  "pages.arenaResults.theChase": "THE CHASE",
  "pages.arenaResults.protocol": "PROTOCOL",
  "pages.arenaResults.cardsValue.one": "{n} card · {amount}",
  "pages.arenaResults.cardsValue.other": "{n} cards · {amount}",
  "pages.arenaResults.cardsWonAria": "Cards won",
  "pages.arenaResults.toTheWinner": "TO THE WINNER",
  "pages.arenaResults.smallPot": "Pot under {n} cards: the winner took all. The Chase and protocol shelves took nothing.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "Card dossier",
  "pages.cardDetailRoute.notFoundTitle": "CARD NOT FOUND",
  "pages.cardDetailRoute.notFoundBody":
    "This link points at a card this browser has not seen yet. Cards resolve from your own rounds and the current CollectorCrypt pool snapshot.",
  "pages.collection.viewRound": "View round ↗",
  "pages.sellBack.showAllOffers": "Show all {n} offers",
  "pages.sellBack.showFewerOffers": "Show fewer offers",
} as Record<string, string>;
