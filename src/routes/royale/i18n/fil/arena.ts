// Filipino: "arena" segment. Machine-consistent first pass (flagged for a
// native editorial review, same bar as the other freshly-added locales).
// Covers every user-visible string from pages/RoyaleArenaRoute.tsx (the
// /lab/royale/arena wheel surface: the rail, the wheel stage + leader-line
// callouts, the clock, the snipe tray, the double-bid opt-in dialog, and the
// lock->reveal cinema's three beats).
//
// Terminology notes for this segment: "pot" and "pool" both render as
// "pondo" (matching fil/core.ts). "The Chase" is kept as its English proper
// name. "Snipe" (the last-second auto-bet mechanic) is kept as an
// established loanword - Filipino gaming vernacular already says "snipe"
// untranslated for a last-second play. The wheel's SPIN renders as "ikot"
// (spin/turn), deliberately NOT "sorteo", which fil/core.ts reserves for the
// winner draw / VRF draw.
export default {
  "arena.you": "IKAW",
  "arena.youAvatarLetter": "I",
  "arena.common.card": "card",
  "arena.common.cards": "card",
  "arena.matchLabel": "LABAN #{n}",
  "arena.pageTitle": "Arena ng Card",
  "arena.backToBoard": "← Bumalik sa tablero",

  "arena.rail.ariaLabel": "Koleksyon mo",
  "arena.rail.heading": "KOLEKSYON MO",
  "arena.rail.practiceNote": "Practice set. Manalo sa mga ronda sa tablero para mapuno ang rail na ito ng sarili mong mga card.",
  "arena.rail.emptyNote": "Walang card sa kamay. Manalo sa pondo para makuha ang parte mo.",
  "arena.rail.enterWheel": "PUMASOK SA GULONG",
  "arena.rail.armSnipe": "I-ARM ANG SNIPE",
  "arena.rail.hint": "I-double-click ang isang card para itaya ito. O pumili ng mga card at pindutin ang PUMASOK SA GULONG. Space ang pumipili, A ang nag-a-arm ng snipe.",

  "arena.railCard.armedSuffix": "Armado para sa snipe.",
  "arena.railCard.hint": "Space ang pumipili nito, A ang nag-a-arm ng snipe. I-double-click para itaya ito sa arena.",
  "arena.railCard.armedTag": "ARMADO",

  "arena.snipe.trayHeading": "ARMADO ANG SNIPE",
  "arena.snipe.disarm": "I-DISARM",
  "arena.snipe.firesAt": "Tatama sa T-minus 2s",
  "arena.snipe.carries": "Dadalhin sa susunod na laban",

  "arena.board.sectionAriaLabel": "Gulong ng arena",
  "arena.board.noCap": "Walang limitasyon sa card. Ang orasan lang ang naglo-lock.",
  "arena.board.wheelDecides": "Ang gulong ang magpapasya",
  "arena.board.nextMatchLabel": "Susunod na laban sa",
  "arena.board.potLabel": "PONDO",
  "arena.board.wheelAriaEnter": "Ipasok ang {count} napiling {cardWord} sa gulong",
  "arena.board.wheelAriaIdle": "Ang gulong. Pumili ng mga card mula sa koleksyon mo para ipasok ang mga ito.",
  "arena.board.youWin": "NANALO KA",
  "arena.board.nameWins": "NANALO SI {name}",
  "arena.board.emptyWheelNote": "Bukas ang gulong. Card ang itaya, hindi cash: ang parte mo sa halaga ang arc at tsansa mo. 0% ang kinukuha ng The Chase. Gumagamit ang protocol ng 7% na tuntunin para sa buong card; natatanggap ng panalo ang lahat ng natitirang card.",
  "arena.board.tableHint": "Sumasakay sa gulong ang mga entry mo bilang parte mo sa halaga. Ang arc mo ang tsansa mo.",
  "arena.board.resultsLink": "Tingnan ang resulta ng huling ronda →",

  "arena.clock.locked": "NAKA-LOCK",
  "arena.clock.settled": "NASETTLE NA",
  "arena.clock.locksIn": "MAGLO-LOCK SA",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Isara ang cinema",
  "arena.cinema.closeTitle": "Isara (Esc)",
  "arena.cinema.beatCopy.contestants": "ANG MGA KALABAN",
  "arena.cinema.beatCopy.spin": "ANG IKOT",
  "arena.cinema.beatCopy.settle": "ANG SETTLEMENT",
  "arena.cinema.beatCopyShort.contestants": "MANLALARO",
  "arena.cinema.beatCopyShort.spin": "IKOT",
  "arena.cinema.beatCopyShort.settle": "SETTLE",
  "arena.cinema.contestantsAriaLabel": "Ang mga kalaban",
  "arena.cinema.contestantsHeadline": "ANG MGA KALABAN",
  "arena.cinema.oddsToWin": "{pct}% NA TSANSANG MANALO",
  "arena.cinema.hintContestants": "Ang gulong ang magpapasya. I-click para umikot na.",
  "arena.cinema.spinAriaLabel": "Ang pag-ikot ng gulong",
  "arena.cinema.lockedOn": "NAKA-LOCK SA",
  "arena.cinema.hintSpin": "I-click para laktawan ang pag-ikot.",
  "arena.cinema.settleAriaLabel": "Ang settlement",
  "arena.cinema.winnerTag": "PANALO",
  "arena.cinema.youTakePot": "NAKUHA MO ANG PONDO",
  "arena.cinema.takesPot": "KINUHA ANG PONDO",
  "arena.cinema.shelfWinner": "PARA SA PANALO",
  "arena.cinema.shelfChase": "THE CHASE",
  "arena.cinema.shelfProtocol": "PROTOCOL",
  "arena.cinema.smallPotNote": "Walang kinukuha ang The Chase. Pumili ang 7% na tuntunin ng protocol ng {count} {cardWord}; natatanggap ng panalo ang lahat ng natitirang card.",
  "arena.cinema.resultsLink": "Tingnan ang resulta ng huling ronda",
  "arena.cinema.hintSettle": "I-click kahit saan para bumalik sa arena.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} para sa panalo",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Auto-bid sa double-click?",
  "arena.doubleBid.body": "I-double-click ang isang card sa koleksyon mo para direktang itaya ito sa arena. I-on ba ito?",
  "arena.doubleBid.enable": "Paganahin",
  "arena.doubleBid.dismiss": "Huwag muna",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "KUMOKONEKTA SA CARD ARENA",
  "arena.backend.loadingBody": "Sinusuri ang live na release ng Arena at ang iyong player session…",
  "arena.backend.loadingCollection": "Sinusuri ang iyong koleksyon…",
  "arena.backend.mainnetPreparingTitle": "NAKAKONEKTA ANG MAINNET ARENA",
  "arena.backend.mainnetPreparingBody": "Maayos ang eksaktong read-only release na ito. Naka-disable pa rin ang funding, pagkuha ng card, pagpasok, draw, at settlement.",
  "arena.backend.mainnetPreparingCollection": "Walang Mainnet card na binili o inilipat. Mananatiling read-only ang Arena hanggang handa na ang hiwalay na awtorisadong inventory.",
  "arena.backend.mainnetRelease": "Release {commit} · deployment {deployment} · zero signing, broadcast, effect, o duplicate",
  "arena.backend.unavailableTitle": "NAG-A-UPDATE ANG CARD ARENA",
  "arena.backend.unavailableBody": "Nakahinto ang mga entry hanggang maging handa ang eksaktong release na ito. Hindi gumalaw ang mga card mo.",
  "arena.backend.unavailableCollection": "Hindi available ang koleksyon habang nag-a-update ang Arena.",
  "arena.backend.connectTitle": "KUMONEKTA PARA MAGLARO",
  "arena.backend.connectBody": "Kailangan ng na-verify na Privy session para ma-load ang iyong mga card na nakatali sa provider at makapasok sa gulong.",
  "arena.backend.connectCollection": "Ikonekta ang iyong player session para ma-load ang mga card mo.",
  "arena.backend.retry": "SUBUKAN ULIT",
} as Record<string, string>;
