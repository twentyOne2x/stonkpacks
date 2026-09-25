// Filipino: "chat" segment. Machine-consistent first pass (flagged for a
// native editorial review, same bar as the other freshly-added locales).
//
// Source of truth for every user-visible string owned by:
//   apps/web/src/routes/royale/RoyaleChatPanel.tsx
//   apps/web/src/routes/royale/RoyaleChatMessageBody.tsx
//   apps/web/src/routes/royale/royaleChatModel.ts     (ambient chatter pool +
//     the table-event copy composed into chatMessageForEvent's flat text)
//   apps/web/src/routes/royale/royaleChatLinks.ts      (chatPlatformLinkLabel
//     - the anchor text shown for an inline platform link in the chat feed)
//
// Terminology notes: "pull" (TCG slang for the card a pack opening reveals)
// renders as "bunot", matching fil/core.ts. "pot"/"Chase" follow the same
// choices as the rest of this locale ("pondo" / "The Chase"). "attn" is the
// product's own lowercase brand name and is never translated. "snipe" is
// kept as the established loanword (see fil/arena.ts's note).
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings (live feed +
// the durable localStorage history log). Switching the UI language mid
// session translates all NEW chat activity but never rewrites messages
// already sitting in the feed/history - same as any other historical log.
// This is expected, not a bug.
//
// "Mythic" in chat.chatter.line17 is the Starter/Elite/Legendary/Grail/
// Mythic PACK TIER brand name (owner hard rule: stays English in every
// locale) - kept untranslated.
export default {
  "chat.rooms.table": "Mesa",
  "chat.rooms.sendTo": "Ipadala sa",
  "chat.rooms.joinHint": "Tumaya sa isang tile para ma-unlock ang room nito.",
  "chat.rooms.messageTargets": "Mga room ng mensahe",
  "chat.composer.sendFailed": "Hindi naipadala ang mensahe. Subukan muli.",
  "chat.composer.audienceChanged": "Nagbago ang room. Binura ang hindi mo pa naipapadalang mensahe.",
  "chat.composer.sessionUnavailable": "Hindi available ang chat session. I-refresh at subukan muli.",
  "chat.auth.tileLeadBold": "Tumaya sa tile para makapag-chat",
  "chat.auth.tileBody": ". Magbubukas ang Table at mga tile room pagkatapos matanggap ang una mong pack.",
  "chat.auth.sessionUnavailableBold": "Hindi available ang chat session",
  "chat.auth.sessionUnavailableBody": ". I-refresh para maibalik ang secure na pagpapadala.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Chat sa table",
  "chat.header.title": "Chat sa table",
  "chat.header.fontControlAriaLabel": "Laki ng teksto ng chat",
  "chat.header.fontSmaller": "Paliitin ang teksto ng chat",
  "chat.header.fontLarger": "Palakihin ang teksto ng chat",
  "chat.header.collapseShow": "Ipakita ang chat",
  "chat.header.collapseHide": "Itago ang chat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "BUNOT NA GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "RONDA #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Binubuksan ang resulta ng ronda sa bagong tab.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "napanalunan ni",
  "chat.event.wonBy": "napanalunan ni {name}",
  "chat.event.foldedIntoPot": "napunta sa pondo",
  "chat.event.roundWinsTitle": "Nanalo ang {tile} ng {pot}",
  "chat.event.bestPull": "pinakamahal na bunot {name} ({value})",
  "chat.event.chaseAward": "Chase +{amount}",
  "chat.event.youWon": "ikaw +{amount}",
  "chat.event.youLost": "natalo ka",
  "chat.message.showOriginal": "isinalin · tingnan ang orihinal",
  "chat.message.showTranslation": "tingnan ang salin",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Pumunta sa pinakabago",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Mga link ng attn lang ang lalabas dito.",
  "chat.composer.rateLimitNotice": "Medyo mabilis kang nagpapadala. Subukan ulit sandali.",
  "chat.composer.placeholder": "Magsabi ng kahit ano…",
  "chat.composer.inputAriaLabel": "Mensahe sa chat",
  "chat.composer.sendAriaLabel": "Ipadala ang mensahe",
  "chat.composer.sendLabel": "Ipadala",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Mag-sign in para makipag-chat",
  "chat.auth.body": ", read-only lang ang kwarto hanggang sa kumonekta ka (sa itaas kanan).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Binubuksan ang pahina ng card sa bagong tab",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Binubuksan ang pahina ng card sa isang background tab.",
  "chat.messageBody.viewCard": "Tingnan ang card",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Pahina ng card",
  "chat.link.roundResult": "Resulta ng ronda",
  "chat.link.profile": "Profile",
  "chat.link.collection": "Koleksyon",
  "chat.link.theBoard": "Ang tablero",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "mabilis mapuno ang kahon 3",
  "chat.chatter.line02": "sino ba lagi nang sina-snipe ang leader kada ronda",
  "chat.chatter.line03": "grabe ang bunot na Grail kanina",
  "chat.chatter.line04": "madaling rally - lahat dumagsa sa leader",
  "chat.chatter.line05": "mukhang mura ang bagong kahon 7 sa tingin ko",
  "chat.chatter.line06": "iniipon ko ang pack ko para sa huling limang segundo",
  "chat.chatter.line07": "may naglagay lang ng $250 sa kahon 2, respeto",
  "chat.chatter.line08": "sobrang mahal na ng parte ng pondo sa kahon 6 ngayon",
  "chat.chatter.line09": "isang pack na lang at aakyat na yang kahong iyan sa mas mataas na tier",
  "chat.chatter.line10": "sinisira na naman ng mga sniper ang tsansa ko",
  "chat.chatter.line11": "puro floor card ang nakukuha ko, malapit na akong tamaan ng malaki",
  "chat.chatter.line12": "bantayan ang whale, palagi niyang tinatapatan ang nanalong kahon",
  "chat.chatter.line13": "hindi pa natatama ang kahon 1 buong session, malapit na yan",
  "chat.chatter.line14": "ibinenta ko agad ang huling bunot ko, patas ang buyback",
  "chat.chatter.line15": "may paparating na counter-snipe, tiyak na yan",
  "chat.chatter.line16": "nagpalit ng dalawang beses ang leader sa nakaraang sampung segundo",
  "chat.chatter.line17": "sino pa ang naghahabol sa Mythic ladder ngayong gabi",
  "chat.chatter.line18": "pinanatili ko ang card - sobrang ganda ng art para ibenta",
  "chat.chatter.line19": "hindi na-reset ng late na pack ang orasan, ang saya",
  "chat.chatter.line20": "dumoble na lang ang pondo ng kahon 8, may nagbubuhos",
  "chat.chatter.line21": "maliit na pack sa umpisa, malaking pack sa dulo - iyan lang ang paraan",
  "chat.chatter.line22": "laging naaabutan ako ng timer ng panatilihin/ibenta",
  "chat.chatter.line23": "mas maganda ang value ng mga kalaban kaysa leader ngayon",
  "chat.chatter.line24": "malinis na snipe sa kahon 5, sobrang tama",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Panel ng mesa",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "Aktibidad Ko",
  "chat.activity.ariaLabel": "Pribado kong aktibidad",
  "chat.activity.filtersAria": "I-filter ang aktibidad",
  "chat.activity.filter.all": "Lahat",
  "chat.activity.filter.packs": "Mga pack",
  "chat.activity.filter.bids": "Mga taya",
  "chat.activity.filter.rewards": "Mga reward",
  "chat.activity.filter.feats": "Mga achievement",
  "chat.activity.filter.clan": "Clan",
  "chat.activity.today": "Ngayong araw",
  "chat.activity.yesterday": "Kahapon",
  "chat.activity.status.pending": "Nakabinbin",
  "chat.activity.status.finalized": "Pinal",
  "chat.activity.status.reversed": "Na-reverse",
  "chat.activity.finalizedAria": "Pinal na resibo",
  "chat.activity.signInTitle": "Mag-sign in para makita ang history mo",
  "chat.activity.signInBody": "Dito lalabas ang mga pribado mong resibo para sa pack, taya, reward, achievement, at clan.",
  "chat.activity.loading": "Nilo-load ang mga resibo mo",
  "chat.activity.loadOlder": "Mag-load ng mas lumang aktibidad",
  "chat.activity.points": "{points} puntos",
  "chat.activity.event.packBid.title": "Nailaro ang pack",
  "chat.activity.event.packBid.detail": "Pinal na ang entry sa tile {tile}.",
  "chat.activity.event.roundWon.title": "Nanalong tile",
  "chat.activity.event.roundWon.detail": "Nanalo sa ronda ang tile {tile}.",
  "chat.activity.event.roundLost.title": "Nasettle na ang ronda",
  "chat.activity.event.roundLost.detail": "Hindi nanalo sa rondang ito ang tile {tile}.",
  "chat.activity.event.roundRefunded.title": "Na-refund ang pack",
  "chat.activity.event.roundRefunded.detail": "Ibinalik ang taya sa tile {tile}.",
  "chat.activity.event.chaseWon.title": "Tumama ang The Chase",
  "chat.activity.event.chaseWon.detail": "Nagbayad ang The Chase sa tablero.",
  "chat.activity.event.achievementDetail": "Na-unlock dahil sa paglalaro mo.",
  "chat.activity.event.clanAchievementDetail": "Na-unlock kasama ang clan mo.",
  "chat.activity.unavailableTitle": "Hindi available ang aktibidad",
  "chat.activity.unavailableBody": "Hindi ma-load ang mga resibo mo. Subukan ulit ang pribadong feed maya-maya.",
  "chat.activity.retry": "Subukan ulit",
  "chat.activity.emptyTitle": "Wala pa rito",
  "chat.activity.emptyBody": "Dito lalabas ang mga pinal na aksyon sa pack, taya, reward, achievement, at clan.",
  "chat.unlock.eyebrow": "Na-unlock ang achievement",
  "chat.unlock.clanEyebrow": "Na-unlock ang clan achievement",
  "chat.unlock.dismiss": "Isara ang achievement notification",
} as Record<string, string>;
