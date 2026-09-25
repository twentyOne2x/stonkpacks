// English: "arena" segment — every user-visible string from
// pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the rail,
// the wheel stage + leader-line callouts, the clock, the snipe tray, the
// double-bid opt-in dialog, and the lock->reveal cinema's three beats).
//
// {token} interpolation follows royaleI18n.ts's file-header convention: the
// CALLER does a plain .replace("{token}", String(x)) — this file never
// changes shape for a dynamic value.
//
// Cross-segment note (for a later dedup pass): "card"/"cards" (arena.common.*)
// and "YOU" (arena.you) are almost certainly needed verbatim by the board and
// cinema segments too — left duplicated here per the segment-ownership rule
// ("do not create keys in other segments' files"), flagged for a follow-up
// merge into a shared namespace if the other segments grow the same pair.
export default {
  "arena.you": "YOU",
  "arena.youAvatarLetter": "Y",
  "arena.common.card": "card",
  "arena.common.cards": "cards",
  "arena.matchLabel": "MATCH #{n}",
  "arena.pageTitle": "Card arena",
  "arena.backToBoard": "← Back to the board",

  "arena.rail.ariaLabel": "Your collection",
  "arena.rail.heading": "YOUR COLLECTION",
  "arena.rail.practiceNote": "Practice set. Win rounds on the board to stock this rail with your own cards.",
  "arena.rail.emptyNote": "No cards in hand. Win the pot to claim your share back.",
  "arena.rail.enterWheel": "ENTER THE WHEEL",
  "arena.rail.armSnipe": "ARM SNIPE",
  "arena.rail.hint": "Double-click a card to bet it. Or select cards and press ENTER THE WHEEL. Space selects, A arms the snipe.",

  "arena.backend.loadingTitle": "CONNECTING TO CARD ARENA",
  "arena.backend.loadingBody": "Checking the live Arena release and your player session…",
  "arena.backend.loadingCollection": "Checking your collection…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA IS CONNECTED",
  "arena.backend.mainnetPreparingBody": "This exact read-only release is healthy. Funding, card acquisition, entry, drawing, and settlement remain disabled.",
  "arena.backend.mainnetPreparingCollection": "No Mainnet cards have been acquired or moved. The Arena stays read-only until the separately authorized inventory is ready.",
  "arena.backend.mainnetRelease": "Release {commit} · deployment {deployment} · zero signing, broadcasts, effects, or duplicates",
  "arena.backend.unavailableTitle": "CARD ARENA IS UPDATING",
  "arena.backend.unavailableBody": "Entries are paused until this exact game release is available. Your cards have not moved.",
  "arena.backend.unavailableCollection": "Collection unavailable while Arena updates.",
  "arena.backend.connectTitle": "CONNECT TO PLAY",
  "arena.backend.connectBody": "A verified Privy session is required to load your provider-bound cards and enter the wheel.",
  "arena.backend.connectCollection": "Connect your player session to load your cards.",
  "arena.backend.retry": "TRY AGAIN",

  "arena.railCard.armedSuffix": "Armed for snipe.",
  "arena.railCard.hint": "Space selects it, A arms the snipe. Double-click to bet it into the arena.",
  "arena.railCard.armedTag": "ARMED",

  "arena.snipe.trayHeading": "SNIPE ARMED",
  "arena.snipe.disarm": "DISARM",
  "arena.snipe.firesAt": "Fires at T-minus 2s",
  "arena.snipe.carries": "Carries to the next match",

  "arena.board.sectionAriaLabel": "Arena wheel",
  "arena.board.noCap": "No card cap. The clock is the only lock.",
  "arena.board.wheelDecides": "The wheel decides",
  "arena.board.nextMatchLabel": "Next match in",
  "arena.board.potLabel": "POT",
  "arena.board.wheelAriaEnter": "Enter {count} selected {cardWord} into the wheel",
  "arena.board.wheelAriaIdle": "The wheel. Select cards from your collection to enter them.",
  "arena.board.youWin": "YOU WIN",
  "arena.board.nameWins": "{name} WINS",
  "arena.board.emptyWheelNote": "The wheel is open. Stake cards, not cash: your value share is your arc and odds. Chase takes 0%. The protocol applies a 7% whole-card fee rule; the winner receives every other card.",
  "arena.board.tableHint": "Your entries ride the wheel as your value share. Your arc is your odds.",
  "arena.board.resultsLink": "See last round results →",

  "arena.clock.locked": "LOCKED",
  "arena.clock.settled": "SETTLED",
  "arena.clock.locksIn": "LOCKS IN",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Close cinema",
  "arena.cinema.closeTitle": "Close (Esc)",
  "arena.cinema.beatCopy.contestants": "THE CONTESTANTS",
  "arena.cinema.beatCopy.spin": "THE SPIN",
  "arena.cinema.beatCopy.settle": "THE SETTLE",
  "arena.cinema.beatCopyShort.contestants": "PLAYERS",
  "arena.cinema.beatCopyShort.spin": "SPIN",
  "arena.cinema.beatCopyShort.settle": "SETTLE",
  "arena.cinema.contestantsAriaLabel": "The contestants",
  "arena.cinema.contestantsHeadline": "THE CONTESTANTS",
  "arena.cinema.oddsToWin": "{pct}% TO WIN",
  "arena.cinema.hintContestants": "The wheel decides. Click to spin now.",
  "arena.cinema.spinAriaLabel": "The wheel spin",
  "arena.cinema.lockedOn": "LOCKED ON",
  "arena.cinema.hintSpin": "Click to skip the spin.",
  "arena.cinema.settleAriaLabel": "The settle",
  "arena.cinema.winnerTag": "WINNER",
  "arena.cinema.youTakePot": "YOU TAKE THE POT",
  "arena.cinema.takesPot": "TAKES THE POT",
  "arena.cinema.shelfWinner": "TO THE WINNER",
  "arena.cinema.shelfChase": "THE CHASE",
  "arena.cinema.shelfProtocol": "PROTOCOL",
  "arena.cinema.smallPotNote": "Chase takes nothing. The 7% protocol rule selected {count} {cardWord}; the winner receives every other card.",
  "arena.cinema.resultsLink": "See last round results",
  "arena.cinema.hintSettle": "Click anywhere to return to the arena.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} to the winner",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Auto-bid on double-click?",
  "arena.doubleBid.body": "Double-click a card in your collection to bet it straight into the arena. Turn this on?",
  "arena.doubleBid.enable": "Enable",
  "arena.doubleBid.dismiss": "Not now",
} as Record<string, string>;
