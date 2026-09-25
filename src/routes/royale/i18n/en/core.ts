// English: the canonical dictionary every other locale falls back to (see
// royaleI18n.ts's t()). This is the SOURCE OF TRUTH for the key set: a key
// added here without a matching entry in every other i18n/<locale>.ts file
// will render in English there via fallback until translated.
//
// Namespaces: settings.* (the language picker), common.* (shared switch/
// button words), gear.<section>.* (the settings overlay's grouped fields),
// nav.* (RoyaleSurfaceNav), mobileNav.* (RoyaleMobileTabBar),
// shell.* (the /lab/royale BOARD ROUTE shell — NoChainRoyaleLabRoute.tsx:
// header status cluster, round-metrics rail, board region labels + phase
// line, the logged-out invitation, the phone drawer toggles) and runtime.*
// (copy produced by the plain, non-component .ts modules — grouped as
// runtime.<module>.<field>: rail / recap / xProfile / sellBack / winShare /
// serverWallet / video / game).
//
// Segment: core (the original Phase-1 flat dictionary, moved here
// verbatim as part of the i18n parallel-work restructure) PLUS the two
// cross-surface namespaces above, which belong to no single game surface:
// shell.* is the route chrome every surface hangs off, and runtime.* is
// module-level copy shared by the board, the theatre, the cinema recap, the
// share flow and the account panels at once. Do NOT add new SURFACE keys to
// this file, add them to the segment file for the surface they belong to
// instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Language",
  "settings.languageSectionAria": "Language settings",
  "settings.languageSearchPlaceholder": "Search languages",
  "settings.languageNoResults": "No matching languages",
  "settings.languageHint": "Applies instantly. Search by name or type to filter.",
  "settings.languageInputAria": "Language, search and select",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Settings groups",
  "settings.searchPlaceholder": "Search settings",
  "settings.searchClear": "Clear search",
  "settings.searchResultsAria": "Matching settings",
  "settings.searchNoResults": "Nothing matches “{query}”. Try the name of the thing you want to change.",
  "settings.backToGroups": "All settings",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Bids {bids} · minimum {amount}",
  "gear.section.summary.display": "Pop-ups {popups} · portraits {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Music {music} · effects {sfx}",
  "gear.section.summary.autosell": "{count} active auto-sell rules",
  "gear.section.summary.hotkeys": "{count} hotkeys set",

  // --- Shared words --------------------------------------------------------
  "common.on": "ON",
  "common.off": "OFF",
  "common.set": "SET",
  "common.clear": "CLEAR",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "Tile {n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Betting",
  "gear.betting.sectionAria": "Betting settings",
  "gear.betting.provider.label": "Pack provider",
  "gear.betting.provider.automatic": "Automatic — Collector Crypt preferred",
  "gear.betting.provider.hint": "Automatic prefers Collector Crypt when available and may use only a verified fallback. Choosing a named provider is strict: if it is unavailable, the bet is refused.",
  "gear.betting.provider.automaticHint": "Automatic · Collector Crypt preferred",
  "gear.betting.provider.strictHint": "{provider} only · no fallback",
  "gear.betting.provider.unavailable": "{provider} (unavailable)",
  "gear.betting.provider.selectedUnavailable": "{provider} is unavailable. Strict bets are refused; the choice is never replaced.",
  "gear.betting.provider.actual": "Filled by {provider}",
  "gear.betting.provider.accepted": "Accepted by {provider}",
  "gear.betting.disableBids.label": "Disable bids",
  "gear.betting.disableBids.hint":
    "Locks your bidding: tile taps stop placing bets so you can watch (or hand the screen over) without staking by accident. The rest of the game stays live.",
  "gear.betting.minBid.label": "Minimum bid",
  "gear.betting.minBid.hint":
    "The smallest bet a tap can place. Your bet size can't drop below this, so a quick tap never stakes less than you meant to (floored at $5 to prevent spoof bids).",
  "gear.betting.upgradeCap.label": "Upgrade cost cap",
  "gear.betting.upgradeCap.placeholder": "no limit",
  "gear.betting.upgradeCap.hint":
    "The most one upgrade click can cost you. Pricier upgrades are greyed out, so a busy tile can't surprise you with a huge bill.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Display",
  "gear.display.sectionAria": "Display settings",
  "gear.display.chipFloats.label": "Bet pop-ups",
  "gear.display.chipFloats.hint": "Show the little \"+$X · name\" bubbles that float up when someone bets on a tile.",
  "gear.display.floatThreshold.label": "Hide bets under",
  "gear.display.floatThreshold.placeholder": "show every bet",
  "gear.display.floatThreshold.hint":
    "Only pop a bubble for bets this size or bigger. Clear it (or set $0) to show every bet, keeps the board calm when lots of tiny bets land.",
  "gear.display.hidePortraits.label": "Hide player portraits",
  "gear.display.hidePortraits.hint": "Hides the other players' portrait circles on the tiles. Your own marker stays visible.",
  "gear.display.fullscreenLandscape.label": "Fullscreen in landscape",
  "gear.display.fullscreenLandscape.hint":
    "On mobile, the next tap in landscape hides the browser bar. iPhone Safari keeps it compact; Add to Home Screen gives true fullscreen.",
  "gear.display.replayTour.label": "Replay welcome tour",
  "gear.display.replayTour.hint": "Open the welcome tour again from step one.",
  "gear.display.couch.label": "Big text (TV/couch)",
  "gear.display.headerCollapse.label": "Collapse header",
  "gear.display.headerCollapse.hint": "Folds the top bar away so the board and the cards fill the screen. The chevron in the header brings it back.",
  "gear.display.couch.hint":
    "Bigger reading text across the game: chat, docs, labels and the money figures, sized for playing from a couch. The board keeps its layout. Also turns on with ?couch=1 in the address.",
  "gear.display.couch.suggested": "This looks like a TV or console browser. Big text is made for this screen.",

  // --- Cards (the settings group that holds Reveals + Auto-sell rules) ----
  "gear.cards.heading": "Cards",
  "gear.cards.sectionAria": "Card settings",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Reveals",
  "gear.reveals.sectionAria": "Reveal settings",
  "gear.reveals.turbo.label": "Turbo reveals",
  "gear.reveals.turbo.hint":
    "Speeds through the reveal show so you get to your result faster. Big moments still get a beat. Off by default, the full show plays for everyone else.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Sound",
  "gear.sound.sectionAria": "Sound settings",
  "gear.sound.sfx.label": "Sound effects",
  "gear.sound.sfx.hint":
    "Chip clicks, round open and lock, the winner wheel and the reveal show. All synthesized in your browser, nothing to load.",
  "gear.sound.music.label": "Music",
  "gear.sound.music.hint":
    "Follows the round: it builds through betting, surges in the final seconds and drops for the reveal. Starts after your first tap or key press and pauses when you switch tabs.",
  "gear.sound.musicStyle.label": "Music style",
  "gear.sound.musicStyle.piano": "Calm piano",
  "gear.sound.musicStyle.snowmelt": "Snowmelt",
  "gear.sound.musicStyle.hearthfire": "Hearthfire",
  "gear.sound.musicStyle.grotto": "Gilded grotto",
  "gear.sound.musicStyle.arcade": "Arcade rush",
  "gear.sound.musicStyle.kart": "Kart rally",
  "gear.sound.musicStyle.galaxy": "Starlight waltz",
  "gear.sound.musicStyle.hint": "Calm piano is a soft, unhurried melody. Arcade rush is bright and fast. Switches on the next bar, mid-round.",
  "gear.sound.musicVolume.label": "Music volume",
  "gear.sound.sfxVolume.label": "Effects volume",
  "gear.sound.volume.label": "Volume",
  "gear.sound.volume.aria": "Master volume",
  "gear.sound.volume.hint": "One master volume for effects and music together.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Auto-sell rules",
  "gear.autosell.sectionAria": "Auto-sell rules",
  "gear.autosell.intro":
    "Set these once and every win that matches sells itself back automatically: no keep/sell prompt. Anything that doesn't match still asks you, same as today.",
  "gear.autosell.everyWin.label": "Auto-sell every win",
  "gear.autosell.everyWin.hint":
    "Cash out every card you win at the buyback rate the moment it lands, with no keep-or-sell prompt. Grails are never auto-sold. This is the shortcut for turning on all four rarity toggles below.",
  "gear.autosell.belowValue.label": "Sell if value is under",
  "gear.autosell.placeholderOff": "off",
  "gear.autosell.rarity.label": "Sell by rarity",
  "gear.autosell.rarity.aria": "Auto-sell by rarity",
  "gear.autosell.rarity.hint":
    "CollectorCrypt rarity bands, read from the pack machine each card came from. The exact dollar window for a band shifts per pack, so a $200 card can be rare in one machine and common in a pricier one.",
  "gear.autosell.nonVintage.label": "Sell non-vintage cards",
  "gear.autosell.belowGrade.label": "Sell if graded under",
  "gear.autosell.grader.label": "Sell by grader",
  "gear.autosell.grader.hint":
    "Keep a grader and auto-sell only its cards graded under the number you set. Untick a grader to auto-sell every card from it. Untick them all to auto-sell everything you win. Graders use different scales, so each floor is its own.",
  "gear.autosell.grader.aria": "Auto-sell by grader",
  "gear.autosell.grader.keep": "KEEP",
  "gear.autosell.grader.sellAll": "SELL ALL",
  "gear.autosell.grader.other": "Other / ungraded",
  "gear.autosell.grader.placeholderKeepAll": "keep all",
  "gear.autosell.grader.placeholderSellAll": "sell all",
  "gear.autosell.grader.ariaGradeSuffix": "sell under grade",
  "gear.autosell.summaryActive": "Active:",
  "gear.autosell.summaryNone": "No auto-sell rules set. Every win still asks you to keep or sell.",
  "gear.autosell.turnOffAll": "TURN OFF ALL",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Bet hotkeys",
  "gear.hotkeys.sectionAria": "Bet hotkeys",
  "gear.hotkeys.intro":
    "Press a tile's key to bet on it at your current bet size. No mouse needed. Click a key below, then press the key you want. Two tiles can't share a key, so reassigning moves it. Esc cancels, Backspace clears.",
  "gear.hotkeys.enabled.label": "Number-key betting",
  "gear.hotkeys.enabled.hintOn": "Keys are live during betting. Pressing a tile's key places your bet instantly.",
  "gear.hotkeys.enabled.hintOff": "Keys are off. Pressing a tile's key places no bet.",
  "gear.hotkeys.enabled.hintUnset": "Not decided yet. Turn keys on here, or press a tile's key during betting and choose Enable.",
  "gear.hotkeys.listAria": "Tile bet hotkeys",
  "gear.hotkeys.tileLabel": "Tile {n}",
  "gear.hotkeys.pressKeyPrompt": "Press a key…",
  "gear.hotkeys.setKey": "Set key",
  "gear.hotkeys.clear": "Clear",
  "gear.hotkeys.ariaPressToBind": "Press a key to bind Tile {n}",
  "gear.hotkeys.ariaShortcut": "Tile {n} shortcut {key}. Click to rebind.",
  "gear.hotkeys.ariaNoShortcut": "Tile {n} has no shortcut. Click to set one.",
  "gear.hotkeys.ariaClearShortcut": "Clear Tile {n} shortcut",
  "gear.hotkeys.unboundWarning": "No key set for {list}. Those tiles have no keyboard shortcut until you set one.",
  "gear.hotkeys.resetButton": "Reset to defaults",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "attn ROYALE sections",
  "nav.board": "BOARD",
  "nav.results": "RESULTS",
  "nav.rankingsFull": "RANKINGS",
  "nav.rankingsShort": "RANKS",
  "nav.collectionFull": "COLLECTION",
  "nav.collectionShort": "CARDS",
  "nav.profile": "PROFILE",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Board",
  "mobileNav.results": "Results",
  "mobileNav.ladder": "Ladder",
  "mobileNav.collection": "Collection",
  "mobileNav.profile": "Profile",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Docs",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "attn ROYALE lab",
  "shell.header.statusAria": "Round status",
  "shell.header.collapse": "Hide header",
  "shell.header.expand": "Show header",
  "shell.header.round": "Round #{n}",
  "shell.header.turboTitle": "Accelerated round timing",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Round summary",
  "shell.metrics.totalPool": "Total pool",
  "shell.metrics.packsLive": "Packs live",
  "shell.metrics.yourStake": "Your stake",
  "shell.metrics.selectedBet": "Selected bet",
  "shell.board.aria": "attn ROYALE board",
  "shell.board.label": "Board",
  "shell.board.phaseOpen": "Click any tile to back it, the stake recomposes into the best pack stack",
  "shell.board.phaseLock": "Locked · packs opening",
  "shell.board.phaseSettled": "Round settled",
  "shell.board.metaOpen": "{pool} pool · 3% feeds The Chase · packs open at lock",
  "shell.board.metaClosed": "One tile wins the pool by verifiable weighted odds.",
  "shell.board.reopenReveal": "↗ Re-open reveal",
  "shell.connectNudge":
    "Enter the game and deposit to start backing tiles. Rounds keep running in the background.",
  "shell.decision.cardFallback": "your card",
  "shell.mobile.close": "Close",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Open table chat",
  "shell.mobile.chatCloseAria": "Close table chat",
  "shell.mobile.cards": "Cards",
  "shell.mobile.cardsOpenAria": "Open your cards to sell or withdraw",
  "shell.mobile.cardsCloseAria": "Close your cards",
  "shell.mobile.players": "Players",
  "shell.mobile.playersOpenAria": "Open players, ranked by wager",
  "shell.mobile.playersCloseAria": "Close players",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "Game USDC",
  "runtime.rail.privySessionCredit": "Privy session credit",
  "runtime.rail.houseCredit": "house credit",
  "runtime.rail.connectPrivy": "Connect Privy to add Game USDC",
  "runtime.rail.privySession": "Privy session",
  "runtime.rail.depositAction": "Add +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Privy account",
  "runtime.rail.house": "House",
  "runtime.rail.depositReceipt": "Receipt {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Tap any pack to stake {amount}. Each tile also keeps its own +{low} / +{high}.",
  "runtime.rail.sellBack": "Sell back → +{amount} balance",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "You",
  "runtime.recap.topBacker": "Top backer",
  "runtime.recap.topCardOutcome": "top card · keep/sell call",
  "runtime.recap.backer": "Backer",
  "runtime.recap.cardWon": "card won",
  "runtime.recap.chaseLootReleased": "Chase loot released",
  "runtime.recap.theChase": "The Chase",
  "runtime.recap.sweptIntoVault": "swept into the vault",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "protocol fee",
  "runtime.recap.soldBack": "Sold back",
  "runtime.recap.intoSplit": "+{amount} into the split",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X connection isn't available yet.",
  "runtime.xProfile.connected": "Connected",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Unknown card",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "WON",
  "runtime.winShare.headlineGrailPull": "GRAIL PULL",
  "runtime.winShare.headlineCardsWon": "CARDS WON",
  "runtime.winShare.cardInImage": "Card in the image.",
  "runtime.winShare.receiptInImage": "Receipt in the image.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Withdrawals are offline right now. No funds moved.",
  "runtime.serverWallet.noSigner": "No wallet signer is connected for this session. No funds moved.",
  "runtime.serverWallet.nonceUnavailable": "Could not obtain a withdrawal money-auth nonce from the server.",
  "runtime.serverWallet.signatureUnavailable": "The wallet did not return a signature over the withdrawal nonce.",
  "runtime.serverWallet.boundaryLabel": "Table credits and server wallet USDC are separate balances.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Screen capture is not available in this browser.",
  "runtime.video.noRecorderFormat": "This browser has no MediaRecorder video format.",
  "runtime.video.canceled": "Render canceled.",
  "runtime.video.unreachable": "Could not reach the render service at {url}.",
  "runtime.video.rejected": "The render service rejected this round: {detail}",
  "runtime.video.requestFailed": "Render request failed ({status}).",
  "runtime.video.noJobId": "The render service did not return a job id.",
  "runtime.video.lostJob": "Lost the render job ({status}).",
  "runtime.video.lostContact": "Lost contact with the render service mid-render.",
  "runtime.video.renderFailed": "Render failed: {error}.",
  "runtime.video.unknownError": "unknown error",
  "runtime.video.downloadFailed": "The video finished but could not be downloaded.",
  "runtime.video.downloadHttpFailed": "The video finished but the download failed ({status}).",
  "runtime.video.emptyVideo": "The render service returned an empty video.",
  "runtime.video.shareTagline": "Pack battle, every draw verifiable. Watch the round:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Room live. Rounds autostart - {seconds}s open, then the reveal.",
  "runtime.game.chaseVault": "The Chase vault",
  "runtime.game.aTile": "a tile",
  "runtime.game.aPack": "a pack",
  "runtime.game.theCard": "the card",
  "runtime.game.collectedSplit": "Round {round} · collected {amount} USDC from the split.",
  "runtime.game.chaseDropSplit": "Round {round} · The Chase dropped {award} on your tile · your split: {amount} USDC.",
  "runtime.game.grailSecured": "Grail secured: kept {card} ({amount}) in your collection.",
  "runtime.game.keptCard": "Kept {card} ({amount}) → added to your collection.",
  "runtime.game.soldCardSettle": "Sold {card} back for {amount} USDC ({pct}% of {value}).",
  "runtime.game.roundVoidedRefund":
    "Round {round} voided. No packs opened, so no card-value draw. Your {amount} stake was refunded.",
  "runtime.game.roundVoidedAll":
    "Round {round} voided. No packs opened, so no card-value draw. All stakes refunded.",
  "runtime.game.chaseFiredYours.one": "The Chase fired: {n} card ({amount}) released to your tile {tile}.",
  "runtime.game.chaseFiredYours.other": "The Chase fired: {n} cards ({amount}) released to your tile {tile}.",
  "runtime.game.chaseFiredTable.one":
    "The Chase fired on Round {round}: {award} + {n} card dropped on {tile}, split by its backers.",
  "runtime.game.chaseFiredTable.other":
    "The Chase fired on Round {round}: {award} + {n} cards dropped on {tile}, split by its backers.",
  "runtime.game.cardsAssigned.one": "{n} card assigned to you ({amount}) → collection.",
  "runtime.game.cardsAssigned.other": "{n} cards assigned to you ({amount}) → collection.",
  "runtime.game.cardPoolsLive": "Card pools live: {cards} cards across {pools} CollectorCrypt machine pools.",
  "runtime.game.minBid": "Minimum bid is {amount}. Raise the stake and try again.",
  "runtime.game.resolveFailed": "This round could not be resolved, so nothing was settled. The next round starts as normal.",
  "runtime.game.stakeRefused": "That stake is too large for {tile}. Nothing was charged. Lower it and try again.",
  "runtime.game.shortfallBack":
    "Not enough USDC to back {tile} with {amount}. You have {held}. Add funds to continue.",
  "runtime.game.shortfallNextPack":
    "Not enough USDC to complete the next pack on {tile}. Needs {amount}, you have {held}. Add funds to continue.",
  "runtime.game.youBacked": "You backed {tile} with {amount}.",
  "runtime.game.packCompleted": "You completed the next pack on {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Sold {cards} for {amount} USDC (CC buyback) to fund a bid.",
  "runtime.game.backedFunded": "Backed {tile} with {amount} (funded from inventory).",
  "runtime.game.demoStakesRefunded":
    "Demo stakes cleared: {amount} you had clicked in was refunded. You start at $0.",
  "runtime.game.demoStakesCleared": "Demo stakes cleared: you start each round at $0 until you back a tile.",
  "runtime.game.deposited": "Deposited {amount} USDC to your wallet.",
  "runtime.game.referralBonus": "Referral bonus credited: +{amount} USDC.",
  "runtime.game.signedAndSent": "Signed & sent {amount} USDC on {cluster} · sig {sig}….",
  "runtime.game.signedNoBroadcast":
    "Signed {amount} USDC on {cluster} ({method}, no chain broadcast) · sig {sig}….",
  "runtime.game.soldCard": "Sold {card} for {amount} USDC ({pct}% buyback).",
} as Record<string, string>;
