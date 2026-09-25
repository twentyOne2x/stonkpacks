// i18n dictionary - "chat" segment (English / fallback locale).
//
// Source of truth for every user-visible string owned by:
//   apps/web/src/routes/royale/RoyaleChatPanel.tsx
//   apps/web/src/routes/royale/RoyaleChatMessageBody.tsx
//   apps/web/src/routes/royale/royaleChatModel.ts     (ambient chatter pool +
//     the table-event copy composed into chatMessageForEvent's flat text)
//   apps/web/src/routes/royale/royaleChatLinks.ts      (chatPlatformLinkLabel
//     - the anchor text shown for an inline platform link in the chat feed)
// royaleChatEvents.ts and royaleChatHistory.ts carry no literal UI copy of
// their own (pure event-bus / persistence plumbing) and were left untouched.
//
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-and-currency-stay-literal rules that apply to every locale.
//
// CROSS-SEGMENT DUPLICATES (flagged for a later dedup pass, per the epic's
// "put it in your own segment and note it" instruction): "won by <name>",
// "folded into the pot" and the "GRAIL PULL" tag also appear in
// RoyaleRevealCinema.tsx, RoyaleSpectatorRecapSection.tsx,
// RoyaleRoundTheatre.tsx, RoyaleSessionHistory.tsx, RoyalePrizeModal.tsx and
// RoyaleNameStatsPopover.tsx - all owned by other segments. Keys here
// (chat.event.wonBy / chat.event.foldedIntoPot / chat.event.grailTag) are
// this segment's own copies; do not import them cross-segment - each surface
// should get its own key in its own segment file, later reconciled for
// wording consistency.
//
// DISPLAY-TIME NOTE: keyed ambient bot lines and table-event rows are carried
// as source keys plus params and render in the reader's locale. The original
// source rendering is available per row. User-authored free text and older
// persisted rows without keys remain exactly as written; no fake MT is used.
//
// "Mythic" in chat.chatter.line17 is the Starter/Elite/Legendary/Grail/
// Mythic PACK TIER brand name (owner hard rule: stays English in every
// locale) - a future translation pass must leave that one word untranslated.
export default {
  "chat.rooms.table": "Table",
  "chat.rooms.sendTo": "Send to",
  "chat.rooms.joinHint": "Back a tile to unlock its room.",
  "chat.rooms.messageTargets": "Message rooms",
  "chat.composer.sendFailed": "Message didn't send. Try again.",
  "chat.composer.audienceChanged": "Room changed. Your unsent message was cleared.",
  "chat.composer.sessionUnavailable": "Chat session unavailable. Refresh and try again.",
  "chat.auth.tileLeadBold": "Back a tile to chat",
  "chat.auth.tileBody": ". Table and tile rooms unlock after your first accepted pack.",
  "chat.auth.sessionUnavailableBold": "Chat session unavailable",
  "chat.auth.sessionUnavailableBody": ". Refresh to restore secure sending.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Table chat",
  "chat.header.title": "Table chat",
  "chat.header.fontControlAriaLabel": "Chat text size",
  "chat.header.fontSmaller": "Decrease chat text size",
  "chat.header.fontLarger": "Increase chat text size",
  "chat.header.collapseShow": "Show chat",
  "chat.header.collapseHide": "Hide chat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "GRAIL PULL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "ROUND #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Opens the round result in a new tab.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "won by",
  "chat.event.wonBy": "won by {name}",
  "chat.event.foldedIntoPot": "folded into the pot",
  "chat.event.roundWinsTitle": "{tile} wins {pot}",
  "chat.event.bestPull": "best pull {name} ({value})",
  "chat.event.chaseAward": "Chase +{amount}",
  "chat.event.youWon": "you +{amount}",
  "chat.event.youLost": "you lost",
  "chat.message.showOriginal": "translated · show original",
  "chat.message.showTranslation": "show translation",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Jump to latest",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Only attn links render here.",
  "chat.composer.rateLimitNotice": "Sending a little fast. Try again in a moment.",
  "chat.composer.placeholder": "Say something…",
  "chat.composer.inputAriaLabel": "Chat message",
  "chat.composer.sendAriaLabel": "Send message",
  "chat.composer.sendLabel": "Send",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Sign in to chat",
  "chat.auth.body": ", the room is read-only until you connect (top right).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Opens card page in a new tab",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Opens the card page in a background tab.",
  "chat.messageBody.viewCard": "View card",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Card page",
  "chat.link.roundResult": "Round result",
  "chat.link.profile": "Profile",
  "chat.link.collection": "Collection",
  "chat.link.theBoard": "The board",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "tile 3 is filling up fast",
  "chat.chatter.line02": "who keeps sniping the leader every round",
  "chat.chatter.line03": "that grail pull last round was unreal",
  "chat.chatter.line04": "easy rally - everyone pile onto the leader",
  "chat.chatter.line05": "fresh tile 7 looks underpriced to me",
  "chat.chatter.line06": "holding my packs for the last five seconds",
  "chat.chatter.line07": "someone just dropped $250 on tile 2, respect",
  "chat.chatter.line08": "pool share on tile 6 is way overpriced now",
  "chat.chatter.line09": "one more pack and that tile evolves to a richer tier",
  "chat.chatter.line10": "snipers ruining my odds again",
  "chat.chatter.line11": "I keep hitting floor cards, due for a big pull",
  "chat.chatter.line12": "watch the whale - he always tips the winning tile",
  "chat.chatter.line13": "tile 1 hasn't hit all session, it's due",
  "chat.chatter.line14": "sold my last pull instantly, buyback felt fair",
  "chat.chatter.line15": "counter-snipe incoming, book it",
  "chat.chatter.line16": "leader flipped twice in the last ten seconds",
  "chat.chatter.line17": "anyone else chasing the Mythic ladder tonight",
  "chat.chatter.line18": "kept the card - that art was too clean to sell",
  "chat.chatter.line19": "late packs never reset the clock, love that",
  "chat.chatter.line20": "tile 8 pool just doubled, something's brewing",
  "chat.chatter.line21": "small packs early, big packs late - only way to play",
  "chat.chatter.line22": "that keep/sell timer gets me every time",
  "chat.chatter.line23": "contenders look better value than the leader right now",
  "chat.chatter.line24": "clean snipe on tile 5, surgical",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Table companion",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "My Activity",
  "chat.activity.ariaLabel": "My private activity",
  "chat.activity.filtersAria": "Filter activity",
  "chat.activity.filter.all": "All",
  "chat.activity.filter.packs": "Packs",
  "chat.activity.filter.bids": "Bids",
  "chat.activity.filter.rewards": "Rewards",
  "chat.activity.filter.feats": "Feats",
  "chat.activity.filter.clan": "Clan",
  "chat.activity.today": "Today",
  "chat.activity.yesterday": "Yesterday",
  "chat.activity.status.pending": "Pending",
  "chat.activity.status.finalized": "Finalized",
  "chat.activity.status.reversed": "Reversed",
  "chat.activity.finalizedAria": "Finalized receipt",
  "chat.activity.signInTitle": "Sign in to see your history",
  "chat.activity.signInBody": "Your private Pack, bid, reward, feat and clan receipts appear here.",
  "chat.activity.loading": "Loading your receipts",
  "chat.activity.loadOlder": "Load older",
  "chat.activity.points": "{points} points",
  "chat.activity.event.packBid.title": "Pack played",
  "chat.activity.event.packBid.detail": "Tile {tile} entry finalized.",
  "chat.activity.event.roundWon.title": "Winning tile",
  "chat.activity.event.roundWon.detail": "Tile {tile} won the board.",
  "chat.activity.event.roundLost.title": "Round settled",
  "chat.activity.event.roundLost.detail": "Tile {tile} did not win this board.",
  "chat.activity.event.roundRefunded.title": "Pack refunded",
  "chat.activity.event.roundRefunded.detail": "Tile {tile} stake returned.",
  "chat.activity.event.chaseWon.title": "Chase hit",
  "chat.activity.event.chaseWon.detail": "The board Chase paid out.",
  "chat.activity.event.achievementDetail": "Unlocked by your play.",
  "chat.activity.event.clanAchievementDetail": "Unlocked with your clan.",
  "chat.activity.unavailableTitle": "Activity is unavailable",
  "chat.activity.unavailableBody": "Couldn’t load your receipts. Try the private feed again in a moment.",
  "chat.activity.retry": "Try again",
  "chat.activity.emptyTitle": "Nothing here yet",
  "chat.activity.emptyBody": "Finalized Pack, bid, reward, feat and clan actions will appear here.",
  "chat.unlock.eyebrow": "Haut fait unlocked",
  "chat.unlock.clanEyebrow": "Clan haut fait unlocked",
  "chat.unlock.dismiss": "Dismiss achievement",
} as Record<string, string>;
