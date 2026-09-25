// Filipino: "board" segment. Machine-consistent first pass (flagged for a
// native editorial review, same bar as the other freshly-added locales).
// Same key set as en/board.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / packs-framing rules that apply to every locale.
//
// Segment: board. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx.
//
// Terminology: matches the fil/core.ts glossary block ("ronda" = round,
// "pondo" = pool/pot, "kahon" = tile, "tagataya" = backer(s), "taya" =
// bet/bid/stake, "ibenta pabalik" = sell back, "bunot" = card pull, "sorteo"
// = the winner draw, "kaban" = vault, "sukli" = loose change, "Kita Neto" =
// Net P&L). "pack"/"packs" keeps the mandatory English brand loanword; the
// five pack-tier brand names (Starter, Elite, Legendary, Grail, Mythic) stay
// English and are never inflected.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Mga manlalaro at cash PnL",
  "board.playerScoreboard.title": "Mga manlalaro",
  "board.playerScoreboard.open": "Stats at mute",
  "board.playerScoreboard.pinnedHint": "Naka-pin · Esc para isara",
  "board.playerScoreboard.holdHint": "Pindutin nang matagal ang Tab para sumilip · i-click para i-pin",
  "board.playerScoreboard.close": "Isara ang scoreboard ng mga manlalaro",
  "board.playerScoreboard.windowAria": "Window ng PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Lahat",
  "board.playerScoreboard.partialHistory": "Bahagyang history. Ginagamit ng rankings ang napanatiling window ng na-settle na cash.",
  "board.playerScoreboard.statsUnavailable": "Hindi available dito ang PnL history. Live pa rin ang mga kasalukuyang stake.",
  "board.playerScoreboard.playerColumn": "Manlalaro",
  "board.playerScoreboard.pnlColumn": "Cash PnL",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Nilo-load ang mga manlalaro…",
  "board.playerScoreboard.empty": "Wala pang tumaya sa tile sa round na ito.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Mga tile {tiles}",
  "board.playerScoreboard.stake": "Stake {amount}",
  "board.playerScoreboard.notAvailable": "Hindi available",
  "board.playerScoreboard.rounds": "{n} rounds",
  "board.playerScoreboard.youBadge": "Ikaw",
  "board.playerScoreboard.mute": "I-mute",
  "board.playerScoreboard.unmute": "I-unmute",
  "board.playerScoreboard.muteAria": "I-mute si {name} sa chat",
  "board.playerScoreboard.unmuteAria": "I-unmute si {name} sa chat",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Ikaw",
  "board.common.noWin": "walang panalo",
  "board.common.roundSettled": "Nasettle na ang ronda",
  "board.common.youWon": "Nanalo ka ng {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "NAKA-LOCK",
  "board.tile.lockedStampSub": "wala nang taya",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: ang taya mong {bet} ay lampas sa cash mong {balance}. Babaan ang taya o magdeposito.",
  "board.tile.ariaBack": "I-back ang {label} ng {amount}",
  "board.tile.ariaBackShortcutSuffix": ", shortcut {shortcut}",
  "board.tile.ariaOddsChance": "{pct} na tsansang manalo",
  "board.tile.ariaBackers": "{count} na tagataya",
  "board.tile.yourPortraitAlt": "Larawan mo",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · wala pang pack",
  "board.tile.noStake": "Walang taya",
  "board.tile.youOwn": "Taya {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Nagbubukas ang pack pag naka-lock",
  "board.tile.resultOpened": "Nabuksan · {amount} sa cards",
  "board.tile.resultWinner": "PANALO · {amount} sa cards",
  "board.tile.resultLost": "Natalo sa sorteo · {amount} sa cards",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Nabuksan",
  "board.tile.resultWinnerWord": "PANALO",
  "board.tile.resultLostWord": "Natalo sa sorteo",
  "board.tile.resultShortWon": "NANALO",
  "board.tile.resultShortLost": "Talo",
  "board.tile.overBalance": "Sobra sa balanse",
  "board.tile.overBalanceTitle": "Kailangan ng {needed} · meron kang {have}. Babaan ang taya o magdeposito.",
  "board.tile.overCap": "lampas sa limitasyon mong {amount} (gear)",
  "board.tile.needHave": "Kailangan ng {needed} · meron kang {have}",
  "board.tile.clueExactCardOdds": "itong eksaktong card · {pct} bunot",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Laki ng taya",
  "board.stakeControl.packMatchTitle": "Ang bawat click sa kahon ay nagtataya ng isang buong {packName} pack.",
  "board.stakeControl.packMatchTag": "nagtataya ng 1 {packName} pack bawat click",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "Ang bawat click sa kahon ay nagtataya ng {n} buong {packName} pack.",
  "board.stakeControl.packMatchTitleOther": "Ang bawat click sa kahon ay nagtataya ng {n} buong {packName} packs.",
  "board.stakeControl.packMatchTagOne": "nagtataya ng {n} {packName} pack bawat click",
  "board.stakeControl.packMatchTagOther": "nagtataya ng {n} {packName} packs bawat click",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} {packName} packs bawat click",
  "board.stakeControl.bidPackGroupAria": "Magtaya ng buong pack sa isang kahon",
  "board.stakeControl.bidPackTag": "Magtaya ng pack",
  "board.stakeControl.bidPackInfoTitle":
    "Isang click ay naglalagay ng buong sealed pack sa isang kahon. Nananatiling ganoong pack ito, hindi ito kailanman sumasanib sa mas malaking pack.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Pumili ng pack at kung ilan. Isang click ay nagtataya ng buong stack na iyon sa isang kahon - mas malaking pack, mas malaking card ang mabubunot. Ang number key na 1 hanggang 8 ang pumipili ng kahon.",
  "board.stakeControl.bidPackInfoAria": "Ano ang pagtaya ng pack?",
  "board.stakeControl.packSelectedTitle": "Napili na. I-click ulit para bumalik sa tayang {amount}.",
  "board.stakeControl.packChipTitle": "Ang bawat click sa kahon ay nagtataya ng isang {packName} pack ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "Napili na. Ang bawat click sa kahon ay nagtataya ng {n} {packName} pack ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Napili na. Ang bawat click sa kahon ay nagtataya ng {n} {packName} packs ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Ang bawat click sa kahon ay nagtataya ng {n} {packName} pack ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Ang bawat click sa kahon ay nagtataya ng {n} {packName} packs ({amount}).",
  "board.stakeControl.overBalanceHeading": "SOBRA SA BALANSE",
  "board.stakeControl.overBalanceBody": "Kailangan ng higit pa sa cash mong {amount}.",
  "board.stakeControl.bidAmountTag": "Magtaya ng halaga",
  "board.stakeControl.bidAmountInfoTitle":
    "Magdagdag ng kahit anong halaga sa isang kahon. Lumalaki ang sukli papunta sa mas malaking pack habang tumatawid ito sa presyo ng bawat pack.",
  "board.stakeControl.bidAmountInfoAria": "Ano ang pagtaya ng halaga?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Magdagdag sa taya ng isang kahon",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "Magtaya ng halaga sa isang kahon",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "Bilang ng pack na itinataya bawat click",
  "board.stakeControl.packCountDecAria": "Magtaya ng mas kaunting pack bawat click",
  "board.stakeControl.packCountIncAria": "Magtaya ng mas maraming pack bawat click",
  "board.stakeControl.packCountValueTitleOne": "{n} pack ng armadong tier bawat click",
  "board.stakeControl.packCountValueTitleOther": "{n} packs ng armadong tier bawat click",
  "board.stakeControl.incrementTitle": "Taasan ang napiling taya sa {amount}",
  "board.stakeControl.customAriaLabel": "Custom na halaga ng taya sa USDC, nagko-commit sa Enter o kapag lumayo ang click mo",
  "board.stakeControl.customOverBalanceTitle": "Sobra sa cash mong {amount}. Magdeposito o babaan ang taya.",
  "board.stakeControl.customTitle": "Mag-type ng kahit anong halaga, itatakda ito ng Enter o paglayo ng click",
  "board.stakeControl.resetTitle": "I-reset ang napiling taya sa {amount}",
  "board.stakeControl.reset": "I-reset",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Estratehiya ng auto-bet, na-a-arm pagsara ng ronda",
  "board.betRail.strategyArmedTip": "Armado, tatama sa loob ng {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, armado, tatama sa loob ng {seconds} segundo",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, armado, tatama sa loob ng {seconds} segundo. I-click para i-disarm.",
  "board.betRail.strategyAriaClickArm": "{name}. I-click para i-arm.",
  "board.betRail.moreStrategiesAria": "Iba pang estratehiya ng auto-bet",
  "board.betRail.moreStrategiesTitle": "Iba pang estratehiya",
  "board.betRail.cancelArmedAria": "Kanselahin ang armadong auto-bet",
  "board.betRail.autoBetCancelled": "Nakansela ang auto-bet.",
  "board.betRail.roundLockedSkip": "Naka-lock na ang ronda bago pa tumama ang auto-bet.",
  "board.betRail.notEnoughBalanceSkip": "Hindi sapat ang balanse, hindi tumama ang auto-bet.",
  "board.betRail.firedAtClose": "Tumama ang {name} pagsara ng ronda.",
  "board.betRail.firedAtClosePartial": "Tumama ang {name} pagsara ng ronda: {covered} sa {total} na kahon.",
  "board.betRail.strategyGuideAria": "Gabay sa estratehiya ng auto-bet",
  "board.betRail.strategyGuideTitle": "Gabay sa estratehiya",
  "board.betRail.autoBetEyebrow": "Auto-bet",
  "board.betRail.firesInSeconds": "tatama sa loob ng {seconds}s",
  "board.betRail.strategiesDialogAria": "Mga estratehiya ng auto-bet",
  "board.betRail.closeStrategiesAria": "Isara ang mga estratehiya ng auto-bet",
  "board.betRail.strategiesHeading": "Mga estratehiya ng auto-bet",
  "board.betRail.strategiesIntro":
    "I-tap ang isa para i-arm ito gamit ang napili mong taya ({amount}). Tatama ito bago pa mag-lock ang ronda, batay sa kung magkano ang pera sa bawat kahon sa sandaling iyon, ang crowd signal.",
  "board.betRail.contrarianHeading": "Mga kabaligtarang pili",
  "board.betRail.contrarianIntro":
    "Kapag hinahabol ng lahat ang pinakamababang kahon, napupuno ito, kaya mas maganda ang bayad ng pangalawang-pinakamababa. Nananatili itong wala sa pangunahing bar para linis ito.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Ang account at laki ng taya mo",
  "board.betRail.balance": "Balanse",
  "board.betRail.activeStakes": "Aktibong taya",
  "board.betRail.collection": "Koleksyon",
  "board.betRail.cardCountViewAllSingular": "{count} CARD · TINGNAN LAHAT",
  "board.betRail.cardCountViewAllPlural": "{count} CARD · TINGNAN LAHAT",
  "board.betRail.moreCount": "+{count} PA",
  "board.betRail.noCardsYet": "Wala pang card sa koleksyon, manalo sa isang kahon at panatilihin ang card nito.",
  "board.betRail.lastResult": "Huling resulta",
  "board.betRail.eachClickAdds": "Bawat click ay nagdaragdag ng {amount}",
  "board.betRail.depositToPlay": "Magdeposito para maglaro",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "Kailangan ng {unit} - meron kang {balance}",
  "board.betRail.allTilesPartialCover": "{name} - kayang saklawin ang {covered} sa 8 kahon sa {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "Bal",
  "board.betRail.dockStakes": "Taya",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Susunod na ronda sa loob ng {seconds} segundo",
  "board.core.nextRoundLine": "Susunod na ronda sa {secs}",
  "board.core.playersDecidingAria": "{decided} sa {total} ibang manlalaro ang nagdesisyon na",
  "board.core.playersDecidingLine": "Nagdedesisyon ang mga manlalaro {ratio}",
  "board.core.pastRoundResultsAria": "Mga resulta ng nakaraang ronda",
  "board.core.pastRounds": "Mga nakaraang ronda",
  "board.core.winsAmount": "Nanalo ang {label} ng {amount}",
  "board.core.youLost": "Natalo ka!",
  "board.core.didNotStake": "Hindi ka nagtaya sa rondang ito",
  "board.core.keepCard": "Panatilihin ang card ({amount})",
  "board.core.sellAmount": "Ibenta {amount}",
  "board.core.decideHint": "Magdesisyon ngayon o sa susunod na ronda",
  "board.core.roundResultLink": "Resulta ng Ronda #{roundId}",
  "board.core.fullReceiptHint": "Buong resibo → Mga resulta ng ronda",
  "board.core.splitReceiptHint": "Hatian · resibo → Mga resulta ng ronda",
  "board.core.eyebrowDrawing": "Sinosorteo ang panalo",
  "board.core.eyebrowPullsIn": "Kumpleto na ang mga bunot",
  "board.core.eyebrowLocked": "Naka-lock",
  "board.core.headlineDrawing": "Isang tiket ang magpapasya",
  "board.core.headlinePullsIn": "Bukas na ang lahat ng pack",
  "board.core.headlineRoundLocked": "Naka-lock ang ronda",
  "board.core.headlinePacksOpening": "Nagbubukas ang mga pack…",
  "board.core.subDrawing": "mapatutunayang tinimbang na sorteo",
  "board.core.subPullsIn": "susunod na sosortiohin ang panalo",
  "board.core.subIntro": "{count} {noun} nakataya",
  "board.core.subOpening": "{count} {noun} nagbubukas sa tablero",
  "board.core.pool": "Pondo",
  "board.core.totalPool": "Kabuuang pondo",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "Bukas ang ronda",
  "board.core.clockLockedRevealing": "Naka-lock · nire-reveal",
  "board.core.clockSettled": "Nasettle na",
  "board.core.clockAriaLabel": "{label}, {seconds} segundo",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Standard na card, ipapanatili o ibebenta pabalik ito ng pinakamalaking tagataya, pro-rata.",
  "board.settlement.dispositionSellBackSplit": "Panuntunan ng Grail: naibebenta pabalik bilang default, hinahati ang USDC sa buong kahon.",
  "board.settlement.dispositionTopBackerKeeps": "Panuntunan ng Grail: pinapanatili ito ng pinakamalaking tagataya at binabayaran ang parte ng iba.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s para magdesisyon",
  "board.settlement.panelAria": "Detalye ng kahon at settlement",
  "board.settlement.collapsePanelAria": "I-collapse ang panel",
  "board.settlement.expandPanelAria": "I-expand ang panel",
  "board.settlement.roundResultsLink": "Mga resulta ng ronda",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Panel ng ronda",
  "board.settlement.clickTileToBack": "Dito dumarating ang mga panalo. I-click ang kahit anong kahon para i-back ito ng {amount}.",
  "board.settlement.lastResultLine": "Huling resulta · Ronda #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "nanalo ka ng {amount}",
  "board.settlement.view": "tingnan",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Natalong kahon · bakit natalo",
  "board.settlement.losingTileTitle": "{label} · {amount} sa kahon",
  "board.settlement.loserWhy":
    "Nabuksan ang {cardName} ({amount}), napunta ang sorteo sa {winnerLabel}. {pct} ng mga tiket ay walang natanggap{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", kabilang ang taya mong {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Walang laman ang kahong ito - walang taya, walang tiket sa sorteo.",
  "board.settlement.backToSettlement": "Bumalik sa settlement · nanalo ang {winnerLabel}",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · card {index}/{total} · {amount} sa kahon",
  "board.settlement.pullCaptionSingle": "{label} · {amount} sa kahon",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Nagbubukas ang mga pack",
  "board.settlement.revealOpenedTitle": "Nabuksan ng {label} ang {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} tsansang kunin ang pondong {poolAmount}. Sinosorteo na ang panalo.",
  "board.settlement.revealEmpty": "Nagbubukasan ang mga pack sa tablero, malapit nang dumating ang sorteo ng panalo.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Huling resulta · Ronda #{roundId}",
  "board.settlement.tileTakesTable": "Kinuha ng {label} ang table para sa {amount}",
  "board.settlement.whyWon": "Napili ng mapatutunayang tinimbang na tiket, hawak ng {label} ang {pct}% ng pondo pagka-lock.",
  "board.settlement.lostNoStakeIn": "Natalo ka, walang taya sa {label}",
  "board.settlement.theWinnerFallback": "ang panalo",
  "board.settlement.wonNoStake": "Nanalo ang {label} · wala kang taya",
  "board.settlement.aTileFallback": "Isang kahon",
  "board.settlement.lossNoteWithStake": "Nasa ibang kahon ang taya mong {amount}, i-hover ang isa para makita ang kwento nito.",
  "board.settlement.lossNoteNone": "Hindi ka nag-back ng kahon sa rondang ito.",
  "board.settlement.topCardOfRound": "Pinakamahal na card ng ronda · {label}",
  "board.settlement.keepCardTo": "Panatilihin ang card ({amount}) → koleksyon",
  "board.settlement.sellBackFor": "Ibenta pabalik para sa {amount}",
  "board.settlement.continueNextRound": "Magpatuloy sa susunod na ronda",
  "board.settlement.continue": "Magpatuloy",
  "board.settlement.keepSellHint":
    "Panatilihin = card sa koleksyon · ibenta = {amount} ngayon din ({pct}% ng halaga ng card, ang CC buyback ng pack na ito) · {noAction}",
  "board.settlement.noActionKept": "walang aksyon = mapapanatili ang card para sa iyo.",
  "board.settlement.noActionAutoSell": "walang aksyon = auto-sell pagtapos ng susunod na ronda.",
  "board.settlement.revealOnlyNote":
    "Reveal-only lang ang mga natalong kahon sa canary na ito, babalik sa kaban ang mga bunot nito. Ang card lang ng nanalong kahon ang binabayaran.",
  "board.settlement.payoutSplit": "Hatian ng payout",
  "board.settlement.poolChaseFeedLine": "Pondo {pool} · ambag sa Chase {feed}",
  "board.settlement.chaseAddSuffix": " · CHASE +{amount}",
  "board.settlement.physicalCardArrow": "Pisikal na card →",
  "board.settlement.grailSecuredSuffix": " (Grail naseguro)",
  "board.settlement.grailSoldBack": "Naibenta pabalik ang Grail ({amount}) → hatian ng USDC sa itaas.",
  "board.settlement.cardAssignmentHead": "Pagtatalaga ng card",
  "board.settlement.cardLabel": "card na {amount}",
  "board.settlement.soldToVault": "naibenta sa kaban · nasa hatian ang kinita",
  "board.settlement.decisionTopBackerSuffix": " (pinakamalaking tagataya · panatilihin o ibenta)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} bawas sa USDC nila",
  "board.settlement.cardsSpreadNote":
    "Nahahati ang mga card sa maraming tagataya hangga't maaari - ang bawas sa USDC ng isang tagatayang natalagahan ng card ay ang CC buyback nito (85-93% depende sa pack, kapareho ng cash value ng pagbenta, pero panatili nila ang potensyal na tubo). Ang mga card lang na hindi naabsorb ang naibebenta sa kaban.",
  "board.settlement.chaseHitLabel": "TUMAMA ANG THE CHASE!",
  "board.settlement.chasePaidLine": "{amount} ang nailagay sa hatiang ito.",
  "board.settlement.chaseMissLabel": "WALANG BUMAGSAK NA CHASE.",
  "board.settlement.chaseNowLine": "Ang Chase ngayon ay {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Patunayan ang sorteo",
  "board.settlement.verifyDrawSub": "mapatutunayang sorteo · tingnan ang resibo ng sorteo",
  "board.settlement.roundIdLabel": "id ng ronda",
  "board.settlement.winningDrawLabel": "nanalong sorteo",
  "board.settlement.drawSeedLabel": "binhi ng sorteo",
  "board.settlement.proofIdLabel": "id ng patunay",
  "board.settlement.ticketOfCount": "#{index} sa {count}",
  "board.settlement.verifying": "Pinapatunayan…",
  "board.settlement.recheckDraw": "Suriin ulit ang sorteo",
  "board.settlement.verifierLink": "Tagapatunay ↗",
  "board.settlement.verifiedOk": "✓ Napatunayan ang sorteo, tugma ang panalong ito sa naka-publish na binhi ng sorteo.",
  "board.settlement.verifiedBad": "✗ Hindi tumugma ang sorteong ito sa binhi nito, huwag itong pagkatiwalaan.",
  "board.settlement.everyRoundNote": "Sinosorteo ng bawat ronda ang isang panalo mula sa naka-publish na binhi na puwede mong suriin.",
  "board.settlement.noPacksNote": "Walang pack na na-back sa rondang ito, walang isosorteo.",
  "board.settlement.settledHoverHint": "Nasettle na, i-hover ang isang kahon para suriin ito.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Sobrang laki ng taya para sa balanse mo",
  "board.betTooBig.dismissAria": "I-dismiss",
  "board.betTooBig.gotIt": "Nakuha ko",
  "board.betTooBig.body": "Kailangan ng {needed} para i-back ang {slotLabel}, at meron kang {held}. Kulang ka ng {shortfall}.",
  "board.betTooBig.deposit": "Magdeposito ng {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Mga manlalaro, ayon sa ranggo ng kabuuang taya",
  "board.wagerLadder.title": "Mga Manlalaro",
  "board.wagerLadder.countZero": "Wala pang taya",
  "board.wagerLadder.countOther": "{n} sa ronda · ayon sa kabuuang taya",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "I-collapse ang panel ng mga manlalaro",
  "board.wagerLadder.lastRoundAria": "Tingnan ang resulta ng huling ronda, ronda #{n}",
  "board.wagerLadder.lastRoundLabel": "Tingnan ang resulta ng huling ronda",
  "board.wagerLadder.empty": "Wala pang nag-back ng kahon sa rondang ito.",
  "board.wagerLadder.leaderAria": "Pinuno",
  "board.wagerLadder.openProfileTitle": "Buksan ang profile ni {name} sa bagong tab",
  "board.wagerLadder.miniGridTotal": "{amount} kabuuan",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Mga kahong na-back ni {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "Mga kahong na-back mo",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "Ibenta ang inventory para pondohan ang tayang ito",
  "board.bidFund.eyebrow": "UBOS NA ANG USDC",
  "board.bidFund.titleOne": "Ibenta ang card mo para masakop ang tayang ito?",
  "board.bidFund.titleMany": "Ibenta ang mga card na ito para masakop ang tayang ito?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "Ang pagbenta ng {cards} ay makakakuha ng {buyback}, sapat para i-back ang {amount} sa {tile}.",
  "board.bidFund.bodyCardsMany": "ang mga card na ito",
  "board.bidFund.note":
    "Kulang ka ng {amount}. Nabebenta ang mga card sa CC buyback rate ng pack nito (85 hanggang 93%). Hindi na ito mababawi.",
  "board.bidFund.keepCards": "Panatilihin ang mga card",
  "board.bidFund.sellAndBid": "Ibenta at itaya ang {amount}",
  "board.bidFund.autoSellSwitch": "Awtomatikong ibenta ang mga panalo ko para sa USDC",
  "board.bidFund.autoSellNoteOn":
    "Ang bawat panalo ay agad na na-cash out sa buyback rate sa sandaling madatnan ito. Walang keep or sell prompt. Hindi kailanman awtomatikong nabebenta ang mga Grail. Puwede mong baguhin ito anumang oras sa Mga Setting.",
  "board.bidFund.autoSellNoteOff":
    "I-on ito at ang bawat card na mapanalunan mo ay ma-cash out sa USDC sa buyback rate, walang prompt. Hindi kailanman awtomatikong nabebenta ang mga Grail. Puwede mong baguhin ito anumang oras sa Mga Setting.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "Magtaya gamit ang number key?",
  "board.hotkeys.optInBody":
    "Ang pagpindot ng isang key ay agad na nag-ba-back sa kahong iyon gamit ang kasalukuyang taya mo. Walang naitaya ngayon.",
  "board.hotkeys.notNow": "Huwag muna",
  "board.hotkeys.enableKeys": "Paganahin ang mga key",
  "board.hotkeys.turnOff": "Patayin",
  "board.hotkeys.turnOffTitle": "Mananatiling naka-off ang mga key hanggang sa muli mo itong paganahin sa Mga Setting.",
  "board.hotkeys.changeKeys": "Baguhin ang mga key",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "Bukas na kahon",
  "board.boardV1.onTile": "sa kahon",
  "board.boardV1.changeAmount": "sukli {amount}",
  "board.boardV1.oddsSuffix": "{pct} na tsansa",
  "board.boardV1.openedOdds": "Nabuksan · {pct} na tsansa",
  "board.boardV1.emptyNeverInDraw": "Walang laman · hindi kailanman kasali sa sorteo",
  "board.boardV1.winnerYourShare": "PANALO · babayaran ang parte mo",
  "board.boardV1.winnerNoStake": "PANALO · wala kang taya",
  "board.boardV1.lostOdds": "Natalo sa sorteo · {pct} na tsansa",
  "board.boardV1.tileClickTitle": "I-click kahit saan para i-back ang {label} ng {amount}",
  "board.boardV1.youAmount": "Ikaw {amount}",
  "board.boardV1.youNone": "Ikaw -",
  "board.boardV1.pctOfTile": "{pct} ng kahon",
  "board.boardV1.noStakeYet": "wala pang taya",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} na na-back · {pct} ng kahon",
  "board.boardV1.statusWaitingDraw": "Naghihintay ng sorteo…",
  "board.boardV1.statusWonSplit": "Nanalo ng {amount} mula sa hatian",
  "board.boardV1.statusOnWinningTile": "Nasa nanalong kahon",
  "board.boardV1.statusNoPayout": "Walang payout sa rondang ito",
  "board.boardV1.statusYourStake": "Ang live na taya mo",
  "board.boardV1.statusBacking": "Nag-ba-back sa kahong ito",
  "board.boardV1.backerCount.one": "{n} tagataya",
  "board.boardV1.backerCount.other": "{n} na tagataya",
  "board.boardV1.noBackersYet": "Wala pang tagataya",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "I-back ng {amount}",
  "board.boardV1.backBtnTitle": "I-back ang {label} ng {amount} USDC",
  "board.boardV1.evolveTitle": "Nagdaragdag ng eksaktong {amount} pa sa {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} sa kahon",
  "board.boardV1.opensAs": "Magbubukas bilang · {summary}",
  "board.boardV1.noPacksYet": "Wala pang pack, i-back ito para pondohan ang unang pack",
  "board.boardV1.whyOpenedDrawing":
    "Nabuksan ang {cardName} ({amount}) sa {pct} na tsansa, sinosorteo na ngayon ang panalo.",
  "board.boardV1.whyWon":
    "Nanalo sa tinimbang na sorteo sa {pct} na tsansa. Nabuksan ang {cardName} ({amount}); nahati ang pondo pro-rata sa mga tagataya nito.",
  "board.boardV1.whyLost":
    "Natalo sa tinimbang na sorteo, {pct} na tsansa ({amount} ng pondong {poolAmount}). Nabuksan pa rin ang {cardName} ({cardAmount}), pero ang nanalong kahon lang ang binabayaran.",
  "board.boardV1.whyEmpty": "Walang lamang kahon - walang taya, walang tiket sa sorteo.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " Ang taya mo dito: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Wala kang taya dito.",
  "board.boardV1.ifWins": "Kung mananalo ang kahong ito: makukuha mo ang ~{amount} ng pondong {poolAmount}.",
  "board.boardV1.clickToBack": "I-click para i-back gamit ang napiling taya at buksan ang unang pack nito pagka-lock.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "Ranggo {rank}, {name}, itinaya {wagered}, net {net}, win rate {pct} porsyento",
  "board.leaderboard.youTag": "IKAW",
  "board.leaderboard.youRankTag": "IKAW · #{n}",
  "board.leaderboard.statWagered": "ITINAYA",
  "board.leaderboard.statNetPl": "KITA NETO",
  "board.leaderboard.statWinRate": "% PANALO",
  "board.leaderboard.statRounds": "RONDA",
  "board.leaderboard.statPoolShare": "PARTE SA PONDO",
  "board.leaderboard.statFirstSeen": "UNANG NAKITA",
  "board.leaderboard.statBiggestPull": "PINAKAMALAKING BUNOT",
  "board.leaderboard.shareOfToday": "ng taya ngayong araw",
  "board.leaderboard.shareOfAllTime": "ng taya sa lahat ng panahon",
  "board.leaderboard.noneYet": "WALA PA",
  "board.leaderboard.viewFullProfile": "Tingnan ang buong profile",
  "board.leaderboard.live": "LIVE",
  "board.leaderboard.fullRankings": "Buong ranggo",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} manlalaro",
  "board.leaderboard.playerCount.other": "{n} na manlalaro",
  "board.leaderboard.roundCount.one": "{n} ronda",
  "board.leaderboard.roundCount.other": "{n} na ronda",
  "board.leaderboard.colPlayer": "Manlalaro",
  "board.leaderboard.colWagered": "Itinaya",
  "board.leaderboard.colNet": "Kita Neto",
  "board.leaderboard.colWin": "Panalo",
  "board.leaderboard.colBiggestPull": "Pinakamalaking bunot",
  "board.leaderboard.sortGroupAria": "Ayusin ang ranking",
  "board.leaderboard.sortBy": "Ayusin ayon sa {col}",
  "board.leaderboard.podiumNet": "{amount} neto",
  "board.leaderboard.podiumTopPull": "Pinakamahal na bunot",
  "board.leaderboard.fullStandings": "Buong ranggo · {n} tagataya",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} {packName} pack ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} {packName} packs ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "Larawan sa profile ni {handle} sa X",
  "board.connectX.connectedTitle": "Nakakonekta sa pamamagitan ng X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "Slot ng {packName} (wala sa kahong ito)",
  "board.packChips.fixedChipTitle": "{n} x {packName} sa {amount} bawat isa",
  "board.packChips.fixedChipTitleTotalSuffix": " - {amount} kabuuan",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Nabuo mula sa naipong pera ng kahon - walang direktang nagtaya ng pack na ito",
  "board.packChips.pooledSome": "{n} sa {total} ay nabuo mula sa naipong pera ng kahon",
  "board.packChips.bidWhole": "Itinaya bilang buong pack",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Nasa kahong ito rin: {list}",
  "board.packChips.morePacks.one": "{n} pack pa",
  "board.packChips.morePacks.other": "{n} na pack pa",
  "board.packChips.morePacksWithList.one": "{n} pack pa: {list}",
  "board.packChips.morePacksWithList.other": "{n} na pack pa: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Taya {bids} · pondo {pool}",
  "board.tile.splitAllBids": "Lahat ng {bids} ay itinayang buong pack",
  "board.tile.splitAllPool": "Lahat ng {pool} ay ang naipong sukli ng kahon",
  "board.tile.splitPoolNote": "Ang mga dashed na pack ay nabuo mula sa pondo, walang nagtaya ng mga ito.",
  "board.tile.evolveLooseTitle": "Ang {loose} na sukli sa kahong ito ay magiging {tier} pack sa {target}",
  "board.tile.evolveNoLooseTitle":
    "Wala pang sukli sa kahong ito. Ang sukli ay nagiging {tier} pack sa {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - kayang saklawin ang {covered} sa {total} na kahon sa {unit}",
  "board.betRail.allTilesPlanFull": "Pagsara ng ronda, ibi-back nito ang lahat ng {total} na kahon sa {unit}. Kabuuan: {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Pagsara ng ronda, ibi-back nito ang {covered} sa {total} na kahon sa {unit}. Kaya ng {balance} mo ang {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Pagsara ng ronda, ibi-back nito ang {covered} sa {total} na kahon sa {unit}. Kaya ng {balance} mo ang {spend}.",
  "board.betRail.allTilesPlanNone": "Hindi kaya ng {balance} mo ang isang tayang {unit}, kaya walang kahong mababack.",
  "board.betRail.allTilesShortHistory.one":
    "Kailangan ng auto-bet all tiles ng {needed} para sa {tiles} na kahon sa {unit}. Meron kang {balance}, kaya na-back nito ang {covered} kahon.",
  "board.betRail.allTilesShortHistory.other":
    "Kailangan ng auto-bet all tiles ng {needed} para sa {tiles} na kahon sa {unit}. Meron kang {balance}, kaya na-back nito ang {covered} na kahon.",
  "board.betRail.allTilesNoneHistory":
    "Kailangan ng auto-bet all tiles ng {needed} para sa {tiles} na kahon sa {unit}. Meron kang {balance}, kaya walang na-back na kahon.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Sa pagsara ng ronda",
  "board.betRail.planTotal": "Kabuuan",
  "board.betRail.planMathFull": "{total} kahon × {amount}",
  "board.betRail.planMathShort": "{covered} sa {total} kahon × {amount}",
  "board.betRail.planPerTile": "{unit} kada kahon",

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
  "board.strategy.highest.label": "Taas",
  "board.strategy.highest.name": "I-arm: i-back ang pinakamataas na kahon pagsara ng ronda",
  "board.strategy.highest.detail":
    "Ina-arm ang taya mo sa kahong may pinakamaraming pera, nareresolba bago pa magsara ang ronda.",
  "board.strategy.highest.rowTitle": "Pinakamataas na kahon",
  "board.strategy.highest.closeLine": "ibi-back ang pinakamalaking kahon pagsara ng ronda",
  "board.strategy.highest.gridLine": "pinakamaraming pera sa pagsara",

  "board.strategy.lowest.label": "Ibaba",
  "board.strategy.lowest.name": "I-arm: i-back ang pinakamababang kahon pagsara ng ronda",
  "board.strategy.lowest.detail":
    "Ina-arm ang taya mo sa pinakakaunting-tao na kahon, nareresolba bago pa magsara ang ronda. Kung lahat ay dadagsa sa pinakamababa, hindi na ito ang pinakamababa sa oras na iyon.",
  "board.strategy.lowest.rowTitle": "Pinakamababang kahon",
  "board.strategy.lowest.closeLine": "ibi-back ang pinakamaliit na kahon pagsara ng ronda",
  "board.strategy.lowest.gridLine": "pinakakaunting pera sa pagsara",

  "board.strategy.secondHighest.label": "2-Taas",
  "board.strategy.secondHighest.name": "I-arm: i-back ang pangalawang-pinakamataas na kahon pagsara ng ronda",
  "board.strategy.secondHighest.detail":
    "Ina-arm ang taya mo isang baitang sa ibaba ng pinuno, nareresolba bago pa magsara ang ronda.",
  "board.strategy.secondHighest.rowTitle": "Pangalawang-pinakamataas na kahon",
  "board.strategy.secondHighest.closeLine": "ibi-back ang kahong nasa ibaba lang ng pinuno pagsara ng ronda",
  "board.strategy.secondHighest.gridLine": "isang baitang sa ibaba ng pinuno",

  "board.strategy.secondLowest.label": "2-Ibaba",
  "board.strategy.secondLowest.name": "I-arm: i-back ang pangalawang-pinakamababang kahon pagsara ng ronda",
  "board.strategy.secondLowest.detail":
    "Ang pili ng crowd-theory: kapag hinahabol ng lahat ang pinakamababang kahon, napupuno ito, kaya mas maganda ang bayad ng pangalawang-pinakamababa. Nag-a-arm ngayon, nareresolba bago pa magsara ang ronda.",
  "board.strategy.secondLowest.rowTitle": "Pangalawang-pinakamababang kahon",
  "board.strategy.secondLowest.closeLine": "ibi-back ang kahong nasa itaas lang ng puno-punong pinakababa pagsara ng ronda",
  "board.strategy.secondLowest.gridLine": "isang baitang sa itaas ng pinakababa",

  "board.strategy.allTiles.label": "Lahat",
  "board.strategy.allTiles.name": "I-arm: i-back ang lahat ng kahon pagsara ng ronda",
  "board.strategy.allTiles.detail":
    "Ina-arm ang taya mo sa bawat kwalipikadong kahon, nareresolba bago pa magsara ang ronda. Kabuuang gastos = laki ng taya mo x bilang ng kahon sa sandaling iyon.",
  "board.strategy.allTiles.rowTitle": "Lahat ng kahon",
  "board.strategy.allTiles.closeLine": "ikinakalat ang taya mo pagsara ng ronda",
  "board.strategy.allTiles.gridLine": "taya mo sa bawat kahon",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "I-tap ulit: {unit}",
  "board.tile.confirmClickAgain": "I-click ulit: {unit}",
  "board.tile.betOffNotice": "Naka-off ang pagtaya sa setting",
  "board.stakeControl.pickPackHint": "Pumili ng pack para itaya",
  "board.stakeControl.emptyStakeLead": "Pumili ng pack",
  "board.stakeControl.emptyStakeHint": "Iyon ang taya mo",
  "gear.betInput.label": "Paglalagay ng taya",
  "gear.betInput.hint":
    "Kung paano naglalagay ng taya ang pagpindot sa kahon (at ang number key nito). Ang Double ay humihingi muna ng isang beripikasyong tap - ang default sa touch-screen. Ang Off ay spectate mode: walang makakapaglagay ng taya.",
  "gear.betInput.optionSingle": "Isang tap",
  "gear.betInput.optionDouble": "Dalawang tap",
  "gear.betInput.optionOff": "Naka-off",
  "gear.cardOpen.label": "Pagbukas ng card",
  "gear.cardOpen.hint":
    "Ang Double ay humihingi ng beripikasyong tap bago magbukas ang pahina ng card - ang default sa touch-screen.",
} as Record<string, string>;
