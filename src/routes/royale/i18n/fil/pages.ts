// Filipino: "pages" segment. Machine-consistent first pass (flagged for a
// native editorial review, same bar as the other freshly-added locales).
// Covers the six standalone-route surfaces owned by this segment:
// RoyaleProfileRoute, RoyaleLadderRoute, RoyaleRoundResultsRoute,
// RoyaleCollectionRoute, RoyaleWinningsStrip, RoyaleSessionHistory, plus
// pages/RoyaleWithdrawPanel.tsx, RoyaleSellBackPanel.tsx (+ royaleSellBack.ts's
// error copy), pages/RoyaleLadderCardViewer.tsx, RoyaleStatsPanel.tsx,
// pages/RoyaleArenaResultsRoute.tsx and routes/RoyaleCardDetailRoute.tsx.
//
// Terminology: matches the fil/core.ts glossary block ("ronda" = round,
// "pondo" = the round's pool/pot, "tagataya" = backers, "bunot" = pull/draw,
// "ibenta pabalik" = sell back, "panatilihin/pinanatili" = keep/kept, "Kita
// Neto" = Net P&L, matching board.leaderboard.statNetPl). The short "R{n}"
// round abbreviation is rendered "R{n}" (Ronda). pages.ladder.*'s "pool" is a
// CollectorCrypt machine's card inventory (not the round's cash pot), so it
// renders as "reserba" there instead of "pondo", to keep the two concepts
// apart (see fil/core.ts's glossary note). "Replay" is a deliberate kept
// loanword, applied identically in pages.common.replay and
// pages.results.replayLink here, and in cinema.replay.watermarkTag (cinema
// segment) - never partially translated. Pack-tier brand names (Starter,
// Elite, Legendary, Grail, Mythic), USDC, X, Solana and CollectorCrypt stay
// in English. Digits and currency stay exactly as authored: no comma-for-dot
// swap inside a number, no localized symbol.
export default {
  // ===== pages.common.* — reused across 2+ files in this segment ===========
  "pages.common.goToBoard": "PUMUNTA SA TABLERO",
  "pages.common.backToBoard": "← Bumalik sa tablero",
  "pages.common.replay": "REPLAY",
  "pages.common.replayTitle": "Panoorin ulit ang ronda {n}, mula sa unang taya hanggang sa reveal",
  "pages.common.you": "Ikaw",
  "pages.common.cancel": "Kanselahin",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "I-withdraw sa wallet",
  "pages.common.withdrawnToWallet": "Na-withdraw sa wallet",
  "pages.common.chase": "CHASE",
  "pages.common.roundNumber": "Ronda #{n}",
  "pages.common.share": "I-share",
  "pages.common.noCardsKeptTitle": "WALA PANG PINANATILING CARD",
  "pages.common.noCardsKeptBody": "Panatilihin ang isang nanalong bunot sa halip na ibenta ito pabalik, at dadapo ito rito bilang isang na-grade na card.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "History ng session",
  "pages.sessionHistory.log.title": "History ng session",
  "pages.sessionHistory.log.emptyHint": "Lalabas dito ang mga resibo mo",
  "pages.sessionHistory.log.hint": "Mga resibo at aksyon mo",

  "pages.sessionHistory.ledger.ariaLabel": "History ng ronda at kahon",
  "pages.sessionHistory.ledger.title": "History ng ronda at kahon",
  "pages.sessionHistory.ledger.empty": "Lalabas dito ang mga nakaraang ronda",
  "pages.sessionHistory.ledger.summaryOne": "{n} nasettle nang ronda · i-click ang isang row para sa detalye",
  "pages.sessionHistory.ledger.summaryOther": "{n} nasettle nang ronda · i-click ang isang row para sa detalye",
  "pages.sessionHistory.ledger.emptyBody":
    "Wala pang natapos na ronda, dadapo dito ang unang reveal kasama ang bawat kahon, ang nanalong kahon, at ang hatian.",
  "pages.sessionHistory.ledger.showMore": "IPAKITA ANG {n} PA · {hidden} MAS LUMANG PA",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "Nanalo ang {label}",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "pondong {amount}",
  "pages.sessionHistory.row.noPull": "walang bunot",
  "pages.sessionHistory.row.youWon": "ikaw +{amount}",
  "pages.sessionHistory.row.noWin": "walang panalo",

  "pages.sessionHistory.detail.splitAria": "Hatian ng payout",
  "pages.sessionHistory.detail.splitOf": "Hatian ng {amount}",
  "pages.sessionHistory.detail.yourStake": "Taya mo {amount}",
  "pages.sessionHistory.detail.noStakeFromYou": "Walang taya galing sa iyo",
  "pages.sessionHistory.detail.cardKeptGrail": "Card → {name} (Grail pinanatili)",
  "pages.sessionHistory.detail.cardSoldBack": "Card → {name} · naibenta pabalik",
  "pages.sessionHistory.detail.cardKept": "Card → {name} · pinanatili",
  "pages.sessionHistory.detail.grailSoldSplit": "Naibenta pabalik ang Grail → hatian sa itaas",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "TOP · ",
  "pages.sessionHistory.tile.wonSuffix": " · NANALO",
  "pages.sessionHistory.tile.lostSuffix": " · natalo sa sorteo",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "Mga panalo mo",
  "pages.winningsStrip.title": "Mga panalo mo",
  "pages.winningsStrip.decisionClock": "{n}s para magdesisyon",
  "pages.winningsStrip.withdrawBalance": "I-withdraw ang balanseng {amount}",
  "pages.winningsStrip.howItWorks": "Paano gumagana ang laro - tsansa, VRF, card →",
  "pages.winningsStrip.decisionOpen": "Bukas ang desisyon mo sa card",
  "pages.winningsStrip.decisionNoActionKeep": "walang aksyon = mapapanatili ito (ibenta anumang oras sa mga card mo)",
  "pages.winningsStrip.decisionNoActionSell": "walang aksyon = auto-sell sa susunod na lock",
  "pages.winningsStrip.keep": "Panatilihin ({amount})",
  "pages.winningsStrip.sell": "Ibenta {amount}",
  "pages.winningsStrip.sellWithPct": "Ibenta {amount} · {pct}%",
  "pages.winningsStrip.yourCards": "Mga card mo",
  "pages.winningsStrip.heldValue": "{amount} hawak",
  "pages.winningsStrip.keptByDefault": "Pinanatili bilang default",
  "pages.winningsStrip.withdrawAllOne": "I-withdraw lahat: {n} card · {amount}",
  "pages.winningsStrip.withdrawAllOther": "I-withdraw lahat: {n} card · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "Sigurado ka? I-withdraw ang {n} card",
  "pages.winningsStrip.selectToWithdraw": "Piliin para i-withdraw",
  "pages.winningsStrip.sellAll": "Ibenta lahat ng {amount} · {pct}%",
  "pages.winningsStrip.selectedForWithdrawal": "Napili para sa withdrawal",
  "pages.winningsStrip.tapCardToSelect": "I-tap ang card para piliin",
  "pages.winningsStrip.selectCardsToWithdraw": "Piliin ang mga card na i-withdraw",
  "pages.winningsStrip.selectedSummaryOne": "{n} card ang napili · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} card ang napili · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "I-withdraw ang {n} card · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "I-withdraw ang {n} card · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "I-withdraw ang balanse",
  "pages.winningsStrip.closeWithdrawAria": "Isara ang withdrawal",
  "pages.winningsStrip.pastRounds": "Mga nakaraang ronda",
  "pages.winningsStrip.shareLastWin": "I-share ang huling panalo",
  "pages.winningsStrip.roundId": "R{n}",
  "pages.winningsStrip.tileTook": "Kinuha ng Kahon {n} ang table · {amount}",
  "pages.winningsStrip.chaseAward": "Chase +{amount}",
  "pages.winningsStrip.noRound": "walang ronda",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "Talo",
  "pages.winningsStrip.kept": "Pinanatili",
  "pages.winningsStrip.sold": "Naibenta",
  "pages.winningsStrip.activity": "Aktibidad",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "Kumpirmahin ang pagbenta ng card",
  "pages.sellConfirm.eyebrow": "Ibalik na benta",
  "pages.sellConfirm.title": "Ibenta ang {name}?",
  "pages.sellConfirm.payoutLabel": "Makukuha mo",
  "pages.sellConfirm.rateNote": "{pct}% ng {value}",
  "pages.sellConfirm.irreversible": "Aalis ang card sa koleksyon mo. Hindi ito maibabalik.",
  "pages.sellConfirm.keep": "Itago ang card",
  "pages.sellConfirm.confirm": "Ibenta sa {amount}",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "Koleksyon mo",
  "pages.collection.summaryCardOne": "card",
  "pages.collection.summaryCardOther": "card",
  "pages.collection.totalValueSuffix": "kabuuang halaga",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "TOP",
  "pages.collection.tierCommon": "KARANIWAN",
  "pages.collection.viaKept": "PINANATILI",
  "pages.collection.viaWon": "NAPANALUNAN",
  "pages.collection.cardAriaLabel": "{name}, {amount}. Bubuksan ng Enter ang detalye ng card.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "Ranggo",
  "pages.ladder.tabAriaLabel": "View ng ranggo",
  "pages.ladder.tabBetters": "Top na tagataya",
  "pages.ladder.tabPacks": "Tsansa ng pack",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.sectionAriaLabel": "Ranggo ng pack",
  "pages.ladder.intro":
    "Pinupuno ng bawat dolyar ang pinakamalaking pack na kaya nito. Ang bawat baitang ay isang totoong makina ng CollectorCrypt, silipin ang mga pinakamahal na card, tapos buksan ang buong reserba.",
  "pages.ladder.sourceLive": "Live na reserba ng CollectorCrypt ({count}/{total} na makina) · na-refresh {age}{backlogNote}",
  "pages.ladder.sourceBundled": "Reference na reserba: bundled na mga na-grade na card ng CollectorCrypt, totoong insured na halaga (hindi live na listing)",
  "pages.ladder.sourceFixtures": "Reference na halimbawa: bundled na fixtures",
  "pages.ladder.footNote": "Sinasalamin ng tsansa, mga value band, at buyback ang naka-publish na gacha-machine specs ng CollectorCrypt (snapshot {date}).",
  "pages.ladder.footNoteLive":
    "Ang mga card ay live na inventory ng marketplace sa loob ng mga band ng bawat makina, na-refresh bawat 5 minuto sa pagitan ng mga ronda.",
  "pages.ladder.footNoteBundled": "Ang mga card na ipinapakita ay isang bundled na set ng totoong na-grade na CollectorCrypt card, hindi live na listing.",
  "pages.ladder.stepUp": "Umakyat",
  "pages.ladder.stepUpFromPrefix": "mula sa {name}",
  "pages.ladder.stepUpEntryPrefix": "entry na baitang, sukling nasa ibaba ng",
  "pages.ladder.stepUpEntrySuffix": "nananatiling sukli",
  "pages.ladder.valueRange": "Saklaw ng halaga",
  "pages.ladder.ceiling": "pinakamataas",
  "pages.ladder.floor": "pinakamababa",
  "pages.ladder.machineOdds": "Tsansa ng makina",
  "pages.ladder.buybackPrefix": "buyback",
  "pages.ladder.grailOddsPrefix": "Grail",
  "pages.ladder.poolLoading": "Nilo-load ang reserba…",
  "pages.ladder.viewMore": "Tingnan ang {n} pa",
  "pages.ladder.cardPool": "{n}-card na reserba",
  "pages.ladder.priciestFirst": "pinakamahal muna",
  "pages.ladder.machineCardsOnly": "{n} card",
  "pages.ladder.machineNameCards": "{shortName} · {n} card",
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
  "pages.ladder.leaderboard.ariaLabel": "Leaderboard ng top na tagataya",
  "pages.ladder.leaderboard.title": "Top na tagataya",
  "pages.ladder.leaderboard.emptyNoSettled": "Wala pang nasettle nang ronda",
  "pages.ladder.leaderboard.emptyNoBetsToday": "Wala pang taya na nasettle ngayong araw.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "Wala pang taya na nasettle.",
  "pages.ladder.leaderboard.emptyCta": "Mag-back sa tablero para masali rito",
  "pages.ladder.leaderboard.timeframeAriaLabel": "Saklaw ng oras",
  "pages.ladder.leaderboard.today": "Ngayon",
  "pages.ladder.leaderboard.allTime": "Lahat ng panahon",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "View {n} more" button opens over the full machine pool). Its
  // own "view more" button reuses pages.ladder.viewMore above (same wording,
  // same surface). Counts arrive pre-formatted, digits stay as authored. ======
  "pages.ladderViewer.eyebrow": "Reserba ng pack",
  "pages.ladderViewer.showing": "Ipinapakita {n} sa {total}",
  "pages.ladderViewer.closeAria": "Isara ang reserba ng pack",
  "pages.ladderViewer.remainingFoot": "{n} pa ang makikita · {amount} pinakamababa",
  "pages.ladderViewer.wholePool": "Iyan na ang buong {n}-card na reserba.",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "Resulta ng mga ronda",
  // Plural pair (see royaleI18n.ts header, "PLURAL KEYS"): ".one" for n===1,
  // ".other" for every other count, chosen by the calling component.
  "pages.results.count.one": "{n} RONDA",
  "pages.results.count.other": "{n} RONDA",
  "pages.results.emptyTitle": "WALA PANG NASETTLE NANG RONDA",
  "pages.results.emptyBody": "Maglaro ng isang ronda sa tablero at dadapo rito ang bawat card na binubuksan nito, ronda por ronda.",
  "pages.results.tileWins": "Nanalo ang {winner} ng {amount}",
  "pages.results.tileFallback": "Kahon",
  "pages.results.youWon": "nanalo ka ng {amount}",
  "pages.results.noWinForYou": "walang panalo para sa iyo",
  "pages.results.replayLink": "Replay",
  // Bare "Payout split" (no amount) — the upgraded payout-split header (owner
  // 2026-07-22) shows the eyebrow label and the pool amount as two separate
  // nodes, unlike pages.results.payoutSplit below which bakes the amount in.
  "pages.results.payoutSplitLabel": "Hatian ng payout",
  "pages.results.payoutSplit": "Hatian ng payout · pondong {amount}",
  "pages.results.yourPullPrefix": "Bunot mo ·",
  "pages.results.noPull": "wala",
  "pages.results.youKeptIt": "pinanatili mo ito",
  "pages.results.youSoldItForCash": "ibinenta mo ito para sa cash",
  "pages.results.chaseAward": "CHASE +{amount}",
  "pages.results.potLedgerFull": "{amount} na pondo, buong nabayaran",
  "pages.results.pool": "pondo",
  "pages.results.potLedgerWithheld": "hinawakan",
  "pages.results.potLedgerPaidIn": "inilagay",
  "pages.results.potLedgerCashToBackers": "cash sa mga tagataya",
  "pages.results.theChase": "Ang The Chase",
  "pages.results.protocol": "protocol",
  "pages.results.jackpot": "jackpot",
  "pages.results.cardTrades": "pagbebenta ng card",
  "pages.results.statsAriaLabel": "Kabuuan ng session",
  "pages.results.roundsPlayed": "MGA RONDANG NILARO",
  "pages.results.winRate": "% PANALO",
  "pages.results.cashWon": "NAPANALUNANG CASH",
  "pages.results.biggestPackPull": "PINAKAMALAKING BUNOT",
  "pages.results.noneYet": "WALA PA",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "{pct} na tsansa",
  "pages.results.oddsUnavailable": "walang available na tsansa",
  "pages.results.collapseRoundAria": "I-collapse ang ronda {n}",
  "pages.results.expandRoundAria": "I-expand ang ronda {n}",
  "pages.results.playersTitle": "IBANG MANLALARO",
  "pages.results.playersCount.one": "{n} manlalaro",
  "pages.results.playersCount.other": "{n} manlalaro",
  "pages.results.playersShow": "Ipakita",
  "pages.results.playersHide": "Itago",
  "pages.results.playerBid": "TAYA",
  "pages.results.playerResult": "RESULTA",
  "pages.results.playerCash": "{amount} na cash",
  "pages.results.playerNoCards": "walang card",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner - mounted by
  // both RoyaleCollectionRoute and RoyaleWinningsStrip) ======================
  "pages.sellBack.ariaLabel": "Ibenta pabalik ang mga card mo",
  "pages.sellBack.title": "Ibenta Pabalik",
  "pages.sellBack.hint": "Naka-lock na presyo mula sa sandaling nanalo ka, hindi na muling naka-quote.",
  "pages.sellBack.quietState": "Bubukas ang Ibenta Pabalik kapag may live na ronda.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers - a locale reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "Nag-expire na",
  "pages.sellBack.countdownDaysHours": "{d}d {h}h na lang",
  "pages.sellBack.countdownHoursMinutes": "{h}h {m}m na lang",
  "pages.sellBack.countdownMinutes": "{m}m na lang",
  "pages.sellBack.countdownSubMinute": "<1m na lang",

  // --- royaleSellBack.ts: custody badges (sellBackCustodyBadge). Informational
  // only, sell-back stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "Naghihintay ng paghahatid",
  "pages.sellBack.badgeNeedsWallet": "Kailangan ng wallet",

  // --- royaleSellBack.ts: player-facing copy for every domain error code
  // (sellBackErrorCopy). Each pair is a title + the detail rendered under it.
  "pages.sellBack.error.quoteExpired.title": "Nag-expire ang alok na ito",
  "pages.sellBack.error.quoteExpired.detail":
    "Lumipas na ang bintana ng Ibenta Pabalik. Sa iyo pa rin ang card. Ang open market na ang labasan ngayon.",
  "pages.sellBack.error.alreadyExercised.title": "Naibenta na pabalik",
  "pages.sellBack.error.alreadyExercised.detail": "Naibenta na pabalik ang card na ito. Ipinapakita ang resibo ng benta na iyon.",
  "pages.sellBack.error.quoteVoid.title": "Binawi ang alok",
  "pages.sellBack.error.quoteVoid.detail":
    "Binawi ng operations ang alok na Ibenta Pabalik na ito. Makipag-ugnayan sa support kung may inaasahan kang payout.",
  "pages.sellBack.error.notQuoteOwner.title": "Hindi card mo",
  "pages.sellBack.error.notQuoteOwner.detail": "Pag-aari ng ibang account ang alok na Ibenta Pabalik na ito.",
  "pages.sellBack.error.cardNotDelivered.title": "Nasa transit pa ang card",
  "pages.sellBack.error.cardNotDelivered.detail":
    "Hindi pa tapos ang paghahatid ng card sa wallet mo. Subukan ulit sandali.",
  "pages.sellBack.error.cardNotHeld.title": "Wala ang card sa wallet mo",
  "pages.sellBack.error.cardNotHeld.detail":
    "Wala nang hawak ang wallet mo ng mismong card na ito. Ang orihinal na card lang ang makakagamit sa alok na ito.",
  "pages.sellBack.error.returnTxRequired.title": "Kailangan ng signature",
  "pages.sellBack.error.returnTxRequired.detail":
    "Ang Ibenta Pabalik na ito ay nangangailangan ng signature mo para ibalik ang card. Lagdaan at subukan ulit.",
  "pages.sellBack.error.returnNotConfirmed.title": "Hindi nakumpirma ang pagbabalik",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "Hindi nakumpirma sa chain ang pagbabalik ng card. Aktibo pa rin ang alok. Subukan ulit kung handa na.",
  "pages.sellBack.error.rateLimited.title": "Sobrang dami ng subok",
  "pages.sellBack.error.rateLimited.detail": "Bagalan sandali at subukan ulit.",
  "pages.sellBack.error.accountRequired.title": "Kailangan ng pag-sign in",
  "pages.sellBack.error.accountRequired.detail": "I-connect ang account mo para ibenta pabalik ang isang card.",
  "pages.sellBack.error.quoteNotFound.title": "Hindi mahanap ang alok",
  "pages.sellBack.error.quoteNotFound.detail": "Wala na ang alok na Ibenta Pabalik na ito.",
  "pages.sellBack.error.quoteIdRequired.title": "May nagkamali",
  "pages.sellBack.error.quoteIdRequired.detail": "Kulang ng kailangang impormasyon ang request ng Ibenta Pabalik.",
  "pages.sellBack.error.unknown.title": "Nabigo ang Ibenta Pabalik",
  "pages.sellBack.error.unknown.detail": "May nagkamali sa amin. Subukan ulit sandali.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "Awtomatikong sumusubok ulit ang live sync. Nananatili ang presyo ng mga naka-lock na alok.",
  "pages.sellBack.offlineTitle": "Offline ka",
  "pages.sellBack.offlineBody": "Kumonekta ulit at nandito na ang mga naka-lock mong alok.",
  "pages.sellBack.loadFailedTitle": "Hindi na-load ang mga alok",
  "pages.sellBack.loadFailedBody": "Nananatili ang presyo ng mga naka-lock na alok. Kunin ulit sila sandali.",
  "pages.sellBack.tryAgain": "Subukan ulit",
  "pages.sellBack.emptyTitle": "Wala pang card na ibebenta pabalik",
  "pages.sellBack.emptyBody": "Manalo ng isang pack at dadapo rito ang alok na buyback sa sandaling ma-settle ang ronda.",
  "pages.sellBack.pastSellBacks": "Mga nakaraang benta pabalik",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "Lokal na alok",
  "pages.sellBack.noExpiry": "Walang expiry",
  "pages.sellBack.preparing": "Inihahanda…",
  "pages.sellBack.sellBackAmount": "Ibenta pabalik ang {amount}",
  "pages.sellBack.waitingSignature": "Hinihintay ang signature mo…",
  "pages.sellBack.signatureUnwired": "Ang pagbebenta pabalik ng card na ito ay nangangailangan ng signature ng wallet. Aktibo pa rin ang naka-lock mong alok.",
  "pages.sellBack.confirmInWallet": "Kumpirmahin sa wallet mo…",
  "pages.sellBack.sellingBack": "Ibinebenta pabalik…",
  "pages.sellBack.receiptAlreadySold": "Naibenta na pabalik",
  "pages.sellBack.receiptSoldBack": "Naibenta pabalik",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "{amount} nabayaran · {rail}",
  "pages.sellBack.railGameBalance": "balanse sa laro",

  // --- RoyaleSellBackPanel.tsx: the "Past sell-backs" history rows.
  "pages.sellBack.historySoldBack": "Naibenta pabalik · {amount}",
  "pages.sellBack.historyExpired": "Nag-expire ang alok",
  "pages.sellBack.historyWithdrawn": "Binawi ang alok",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "kailanman hindi",
  "pages.profile.relTime.justNow": "ngayon lang",
  "pages.profile.relTime.minutesAgo": "{n}m nakalipas",
  "pages.profile.relTime.hoursAgo": "{n}h nakalipas",
  "pages.profile.relTime.daysAgo": "{n}d nakalipas",
  "pages.profile.relTime.monthsAgo": "{n}mo nakalipas",
  "pages.profile.noDate": "–",

  "pages.profile.count.settledRoundOne": "{n} nasettle nang ronda",
  "pages.profile.count.settledRoundOther": "{n} nasettle nang ronda",
  "pages.profile.count.roundOne": "{n} ronda",
  "pages.profile.count.roundOther": "{n} ronda",
  "pages.profile.count.settledOutcomeOne": "{n} nasettle nang resulta",
  "pages.profile.count.settledOutcomeOther": "{n} nasettle nang resulta",
  "pages.profile.xOfRoundsOne": "{x} sa {n} ronda",
  "pages.profile.xOfRoundsOther": "{x} sa {n} ronda",

  "pages.profile.follow": "I-follow",
  "pages.profile.following": "Nasusundan",
  "pages.profile.linkCopied": "Nakopya ang link",
  "pages.profile.headlineStatsAria": "Pangunahing stats",

  "pages.profile.chartWindow7d": "7D",
  "pages.profile.chartWindow30d": "30D",
  "pages.profile.chartWindowAll": "Lahat",
  "pages.profile.chartValueAria": "Halaga ng koleksyon mula {from} hanggang {to} sa panahong ito",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "ngayon",
  "pages.profile.viewRoundResultsAria": "Tingnan ang resulta ng Ronda #{n}",

  "pages.profile.collectionViewAll": "Lahat ng card",
  "pages.profile.collectionViewVault": "Nasa kaban",
  "pages.profile.collectionViewOffers": "Mga alok",
  "pages.profile.collectionViewHistory": "History",
  "pages.profile.collectionStateAria": "Kalagayan ng koleksyon",
  "pages.profile.openCollection": "Buksan ang koleksyon ↗",
  "pages.profile.collectionEmptyHistoryTitle": "WALA PANG BENTA PABALIK",
  "pages.profile.collectionEmptyHistoryBody": "Ibenta pabalik ang isang pinanatiling card at dadapo rito ang resibo.",
  "pages.profile.inVault": "Nasa kaban · Ronda #{n}",
  "pages.profile.sellBackOffer": "Alok ng buyback · {amount}",
  "pages.profile.soldBack": "Naibenta pabalik",
  "pages.profile.soldAtSettlement": "Naibenta sa settlement",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "Ang mga aksyon at live na alok ng Ibenta Pabalik ay nasa collection page.",

  "pages.profile.pnlByRound": "KITA NETO BAWAT RONDA",
  "pages.profile.pnlSubtitle": "huling {n} nag-stake na ronda · panalo sa itaas, talo sa ibaba · {wins}W {losses}L",
  "pages.profile.pnlAria": "Netong resulta bawat ronda, huling {n} ronda",
  "pages.profile.pnlColAria": "Ronda {n}: {signed}",
  "pages.profile.pnlTooltip": "R{n} · {signed}",

  "pages.profile.recentForm": "KAMAKAILANG FORM",
  "pages.profile.recentFormSubtitle": "huling {n} nag-stake na ronda, pinakaluma muna",
  "pages.profile.formColAria": "Ronda {n}: {result} {amount}",
  "pages.profile.won": "nanalo",
  "pages.profile.lost": "natalo",
  "pages.profile.formW": "W",
  "pages.profile.formL": "L",

  "pages.profile.leaderboardEyebrow": "RANGGO · {mode}",
  "pages.profile.modeMostProfitable": "PINAKAMAKAKITA",
  "pages.profile.modeHighestVolume": "PINAKAMATAAS NA VOLUME",
  "pages.profile.topPlayers": "top {n} manlalaro",
  "pages.profile.metricProfit": "KITA",
  "pages.profile.metricVolume": "VOLUME",
  "pages.profile.metricNetPnl": "KITA NETO",
  "pages.profile.filtersAria": "Filter ng leaderboard",
  "pages.profile.metricFilterAria": "Sukatan",
  "pages.profile.windowFilterAria": "Saklaw ng oras",
  "pages.profile.window1d": "1D",
  "pages.profile.window7d": "7D",
  "pages.profile.window30d": "30D",
  "pages.profile.windowAll": "LAHAT",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "MANLALARO",
  "pages.profile.thRounds": "RONDA",
  "pages.profile.you": "IKAW",
  "pages.profile.leaderboardEmpty": "WALA PANG MANLALARO SA PANAHONG ITO. Napupuno ang board habang nairerecord ang mga taya at payout.",

  "pages.profile.notFoundTitle": "WALA PANG NA-INDEX NA RONDA",
  "pages.profile.notFoundBody": "Wala pang nase-settle na ronda si {wallet} na na-index ng server.",
  "pages.profile.offlineTitle": "HINDI MAABOT ANG PROFILE",
  "pages.profile.offlineBody": "Kailangan ng live na koneksyon ang paghahanap ng manlalaro. Subukan ulit para kunin ang record na ito.",
  "pages.profile.retry": "SUBUKAN ULIT",

  "pages.profile.collectorSince": "Kolektor simula noong {month}",
  "pages.profile.lastActive": "huling aktibo {rel}",
  "pages.profile.rankAllTime": "Ranggo #{n} · lahat ng panahon",
  "pages.profile.netPnl": "Kita Neto",
  "pages.profile.lifetime": "habambuhay",
  "pages.profile.bidWinRate": "Win rate ng taya",
  "pages.profile.cardsWon": "Napanalunang card",
  "pages.profile.grailsOne": "{n} Grail",
  "pages.profile.grailsOther": "{n} Grail",
  "pages.profile.totalStaked": "Kabuuang itinaya",
  "pages.profile.betsCount": "{n} taya",
  "pages.profile.biggestRound": "Pinakamalaking ronda",
  "pages.profile.singleRoundSwing": "pagbabago sa isang ronda",
  "pages.profile.playerStatsAria": "Stats ng manlalaro",
  "pages.profile.winsLosses": "PANALO / TALO",
  "pages.profile.roundsPlayed": "MGA RONDANG NILARO",
  "pages.profile.betsPlaced": "MGA TAYANG INILAGAY",
  "pages.profile.voidedRounds": "MGA RONDANG NA-VOID",

  "pages.profile.tablePlayer": "Manlalaro sa table",
  "pages.profile.playerFallback": "Manlalaro",
  "pages.profile.localEmptyTitle": "WALA PANG RONDA SA SESSION NA ITO",
  "pages.profile.localEmptyBody": "Wala pang na-back na kahon si {name} sa session na ito.",
  "pages.profile.sessionNet": "Net ng session",
  "pages.profile.cashSplitsOnly": "cash na hatian lang",
  "pages.profile.thisSession": "sa session na ito",
  "pages.profile.packsOpened": "Nabuksang pack",
  "pages.profile.onBackedTiles": "sa mga na-back na kahon",
  "pages.profile.biggestPull": "Pinakamalaking bunot",
  "pages.profile.noneYet": "Wala pa",
  "pages.profile.recentActivity": "Kamakailang aktibidad",
  "pages.profile.noSettledOutcomesPlayer": "Wala pang nasettle nang resulta para sa manlalarong ito sa session na ito.",

  "pages.profile.pageTitle": "Profile",
  "pages.profile.followingCount": "Sinusundan {n}",
  "pages.profile.collectionValue": "Halaga ng koleksyon",
  "pages.profile.updatedAgo": "na-update {rel}",
  "pages.profile.noCardsYet": "wala pang card",
  "pages.profile.change30d": "Pagbabago sa 30 araw",
  "pages.profile.allNewIn30": "lahat bago sa loob ng 30 araw",
  "pages.profile.noChange": "walang pagbabago",
  "pages.profile.cardsOwned": "Mga card na pag-aari",
  "pages.profile.realizedProceeds": "Naipong kinita",
  "pages.profile.sellBackOne": "{n} benta pabalik",
  "pages.profile.sellBackOther": "{n} benta pabalik",
  "pages.profile.tabHighlights": "Highlight",
  "pages.profile.tabCollection": "Koleksyon",
  "pages.profile.tabActivity": "Aktibidad",
  "pages.profile.tabStats": "Stats",
  "pages.profile.tabsAria": "Mga seksyon ng profile",
  "pages.profile.emptyHighlightsTitle": "WALA PANG NAITALANG RONDA",
  "pages.profile.emptyHighlightsBody":
    "Mag-back ng isang kahon sa tablero at mapupuno ang passport mo: curve ng halaga, aktibidad, koleksyon, at ranggo.",
  "pages.profile.collectionPerformance": "Performance ng koleksyon",
  "pages.profile.chartWindowAria": "Saklaw ng chart",
  "pages.profile.chartEmpty": "Wala pang halaga ng koleksyon. Panatilihin ang isang nanalong bunot at magsisimula rito ang curve.",
  "pages.profile.thisWindow": "sa panahong ito",
  "pages.profile.chartNoChanges": "Walang pagbabago sa koleksyon sa panahong ito.",
  "pages.profile.viewAll": "Tingnan ang {n}",
  "pages.profile.collectionHighlights": "Highlight ng koleksyon",
  "pages.profile.seeAll": "Tingnan ang {n}",
  "pages.profile.noCardsInVault": "Wala pang card sa kaban. Panatilihin ang isang bunot at lalabas ito rito bilang isang na-grade na card.",
  "pages.profile.activityAria": "Aktibidad",
  "pages.profile.roundHistoryAria": "History ng ronda",
  "pages.profile.onThisDevice": "{count} sa device na ito",
  "pages.profile.noActivityYet": "Wala pang aktibidad. Ang mga rondang itinaya mo at mga card na pinanatili o binenta mo ay dadapo rito.",
  "pages.profile.performanceAria": "Performance",
  "pages.profile.walletAria": "Wallet",
  "pages.profile.walletEyebrow": "WALLET",
  "pages.profile.emptyStatsBody": "Mag-back ng isang kahon sa tablero at mabubuo rito ang Kita Neto, win rate, at ledger ng ronda mo.",
  "pages.profile.findPlayerAria": "Maghanap ng manlalaro",
  "pages.profile.lookUpWallet": "HANAPIN ANG ISANG WALLET",
  "pages.profile.walletPlaceholder": "I-paste ang address ng wallet o guest id",
  "pages.profile.view": "TINGNAN",
  "pages.profile.myProfile": "PROFILE KO",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx, mounted in
  // the #wallet section right below the walletEyebrow/walletAria header
  // above) - LOCAL/PROOF ONLY, no money moves off a money runtime, but the
  // copy is written in real-money voice since it is the real-money flow's UI.
  "pages.profile.withdraw.ariaLabel": "I-withdraw ang mga panalo",
  "pages.profile.withdraw.title": "I-withdraw",
  "pages.profile.withdraw.subtitle": "I-cash out ang parte o lahat ng balanse mo papunta sa isang Solana wallet.",
  "pages.profile.withdraw.available": "Available",
  "pages.profile.withdraw.amountLabel": "Halaga (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "Preset na halaga ng withdrawal",
  "pages.profile.withdraw.destinationLabel": "Wallet na destinasyon",
  "pages.profile.withdraw.destinationPlaceholder": "Address ng Solana",
  "pages.profile.withdraw.submit": "I-withdraw",
  "pages.profile.withdraw.submitBusy": "Nire-request...",
  "pages.profile.withdraw.note":
    "Aaprubahan mo ang bawat withdrawal gamit ang signature ng wallet, at ang USDC mo ay ibabayad sa Solana address na ibinigay mo.",
  "pages.profile.withdraw.errorInvalidAmount": "MAGLAGAY NG VALID NA HALAGA (0.01 HANGGANG 10,000).",
  "pages.profile.withdraw.errorInvalidDestination": "MAGLAGAY NG VALID NA SOLANA DESTINATION ADDRESS.",
  "pages.profile.withdraw.requesting": "NIRE-REQUEST ANG WITHDRAWAL NA {amount}...",
  "pages.profile.withdraw.sent": "NAIPADALA ANG WITHDRAWAL - {amount} PAPUNTA SA {destShort}...",
  "pages.profile.withdraw.signatureRequired":
    "KAILANGAN NG SIGNATURE NG WALLET - LAGDAAN ANG WITHDRAWAL NONCE GAMIT ANG WALLET MO (TATANGGIHAN ANG PRIVY TOKEN LANG).",
  "pages.profile.withdraw.refused": "TINANGGIHAN ANG WITHDRAWAL ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible PLAYER STATS
  // dashboard mounted by the profile route's Stats tab). CAPS micro-labels are
  // a deliberate house style: keep a locale's own caps convention, never
  // lowercase them just because the source shouts. The GRAIL tier row keeps its
  // brand name in English and needs no key (see royaleI18n.ts's rules). ======
  "pages.stats.title": "STATS NG MANLALARO",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} RONDA · {packs} PACK",
  "pages.stats.noRoundsYet": "WALA PANG RONDA",
  "pages.stats.emptyBody": "WALA PANG RONDA. Mag-back ng kahon para simulang subaybayan ang Kita Neto, win rate, at bunot mo.",
  "pages.stats.netPnl": "KITA NETO",
  "pages.stats.roi": "ROI",
  "pages.stats.winRate": "% PANALO",
  "pages.stats.totalStaked": "KABUUANG ITINAYA",
  "pages.stats.totalWon": "KABUUANG NAPANALUNAN",
  "pages.stats.holdings": "MGA HAWAK",
  "pages.stats.cardsHeld.one": "{n} card",
  "pages.stats.cardsHeld.other": "{n} card",
  "pages.stats.packsOpened": "NABUKSANG PACK",
  "pages.stats.chaseHits": "TAMA NG CHASE",
  "pages.stats.bestRound": "PINAKAMAGANDANG RONDA",
  "pages.stats.worstRound": "PINAKAMASAMANG RONDA",
  "pages.stats.biggestPackPull": "PINAKAMALAKING BUNOT",
  "pages.stats.noneYet": "WALA PA",
  "pages.stats.perTierHits": "TAMA BAWAT TIER",
  "pages.stats.tierTop": "TOP",
  "pages.stats.tierCommon": "KARANIWAN",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "see last round results" record page) ============================
  "pages.arenaResults.title": "Resulta ng arena",
  "pages.arenaResults.backToArena": "← Bumalik sa arena",
  "pages.arenaResults.emptyBody": "Wala pang nasettle nang ronda ng arena.",
  "pages.arenaResults.enterArena": "Pumasok sa arena →",
  "pages.arenaResults.matchNumber": "LABAN #{n}",
  // The headline reads "<player name> takes the pot"; the self view uses the
  // second-person verb. The name itself is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "kinuha ang pondo",
  "pages.arenaResults.takesThePot": "kinuha ang pondo",
  "pages.arenaResults.potCards.one": "pondo · {n} card",
  "pages.arenaResults.potCards.other": "pondo · {n} card",
  "pages.arenaResults.winner": "PANALO",
  "pages.arenaResults.theChase": "ANG THE CHASE",
  "pages.arenaResults.protocol": "PROTOCOL",
  "pages.arenaResults.cardsValue.one": "{n} card · {amount}",
  "pages.arenaResults.cardsValue.other": "{n} card · {amount}",
  "pages.arenaResults.cardsWonAria": "Napanalunang card",
  "pages.arenaResults.toTheWinner": "PARA SA PANALO",
  "pages.arenaResults.smallPot": "Pondong mas mababa sa {n} card: kinuha ng panalo ang lahat. Walang kinuha ang The Chase at ang protocol.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "Dossier ng card",
  "pages.cardDetailRoute.notFoundTitle": "HINDI MAHANAP ANG CARD",
  "pages.cardDetailRoute.notFoundBody":
    "Ang link na ito ay tumuturo sa isang card na hindi pa nakikita ng browser na ito. Nireresolba ang mga card mula sa sarili mong mga ronda at sa kasalukuyang snapshot ng reserba ng CollectorCrypt.",
  "pages.collection.viewRound": "Tingnan ang ronda ↗",
  "pages.sellBack.showAllOffers": "Ipakita ang lahat ng {n} alok",
  "pages.sellBack.showFewerOffers": "Ipakita ang mas kaunting alok",
  "pages.common.shareCard": "Ibahagi ang card",
} as Record<string, string>;
