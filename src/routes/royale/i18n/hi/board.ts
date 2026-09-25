// Hindi (हिन्दी): "board" segment translation. Same house terms as core.ts's
// glossary block (tile टाइल, pack पैक, backer बैकर, pot/pool पॉट, दांव for
// bet/bid/stake, आप formal for "you", The Chase kept in English). Short chip
// labels (board.strategy.*.label) are translated to short Hindi/Hinglish
// equivalents, matching the fr/ja/ko precedent (Max/Min/2e max.../Tous,
// 最多/最少/上2位.../全部): टॉप/बॉटम/2रा टॉप/2रा बॉटम/सभी.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "खिलाड़ी और नकद PnL",
  "board.playerScoreboard.title": "खिलाड़ी",
  "board.playerScoreboard.open": "आंकड़े और म्यूट",
  "board.playerScoreboard.pinnedHint": "पिन किया गया · Esc से बंद करें",
  "board.playerScoreboard.holdHint": "झलक देखने के लिए Tab दबाए रखें · पिन करने के लिए क्लिक करें",
  "board.playerScoreboard.close": "खिलाड़ी स्कोरबोर्ड बंद करें",
  "board.playerScoreboard.windowAria": "PnL विंडो",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "सभी",
  "board.playerScoreboard.partialHistory": "आंशिक इतिहास। रैंकिंग में सहेजी गई निपटाई गई नकद अवधि का उपयोग होता है।",
  "board.playerScoreboard.statsUnavailable": "PnL इतिहास यहाँ उपलब्ध नहीं है। मौजूदा दांव अभी भी लाइव हैं।",
  "board.playerScoreboard.playerColumn": "खिलाड़ी",
  "board.playerScoreboard.pnlColumn": "नकद PnL",
  "board.playerScoreboard.voiceColumn": "चैट",
  "board.playerScoreboard.loading": "खिलाड़ी लोड हो रहे हैं…",
  "board.playerScoreboard.empty": "इस राउंड में किसी ने किसी टाइल पर दांव नहीं लगाया है।",
  "board.playerScoreboard.bot": "बॉट",
  "board.playerScoreboard.tiles": "टाइलें {tiles}",
  "board.playerScoreboard.stake": "दांव {amount}",
  "board.playerScoreboard.notAvailable": "उपलब्ध नहीं",
  "board.playerScoreboard.rounds": "{n} राउंड",
  "board.playerScoreboard.youBadge": "आप",
  "board.playerScoreboard.mute": "म्यूट",
  "board.playerScoreboard.unmute": "अनम्यूट",
  "board.playerScoreboard.muteAria": "चैट में {name} को म्यूट करें",
  "board.playerScoreboard.unmuteAria": "चैट में {name} को अनम्यूट करें",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "आप",
  "board.common.noWin": "कोई जीत नहीं",
  "board.common.roundSettled": "राउंड सेटल हो गया",
  "board.common.youWon": "आपने {amount} जीता",
  "board.common.pack": "पैक",
  "board.common.packs": "पैक",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "लॉक्ड",
  "board.tile.lockedStampSub": "अब और दांव नहीं",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: आपका {bet} का दांव आपके {balance} कैश से ज़्यादा है। दांव घटाएं या जमा करें।",
  "board.tile.ariaBack": "{amount} से {label} पर दांव लगाएं",
  "board.tile.ariaBackShortcutSuffix": ", शॉर्टकट {shortcut}",
  "board.tile.ariaOddsChance": "जीतने का {pct} चांस",
  "board.tile.ariaBackers": "{count} बैकर",
  "board.tile.yourPortraitAlt": "आपका पोर्ट्रेट",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · अभी कोई पैक नहीं",
  "board.tile.noStake": "कोई दांव नहीं",
  "board.tile.youOwn": "आपके पास {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "लॉक पर पैक खुलते हैं",
  "board.tile.resultOpened": "खुला · कार्ड में {amount}",
  "board.tile.resultWinner": "विजेता · कार्ड में {amount}",
  "board.tile.resultLost": "ड्रॉ हार गई · कार्ड में {amount}",
  "board.tile.resultOpenedWord": "खुला",
  "board.tile.resultWinnerWord": "विजेता",
  "board.tile.resultLostWord": "ड्रॉ हार गई",
  "board.tile.resultShortWon": "जीता",
  "board.tile.resultShortLost": "हारा",
  "board.tile.overBalance": "बैलेंस से ज़्यादा",
  "board.tile.overBalanceTitle": "{needed} चाहिए · आपके पास {have} है। दांव घटाएं या जमा करें।",
  "board.tile.overCap": "आपकी {amount} सीमा से ज़्यादा (सेटिंग्स)",
  "board.tile.needHave": "चाहिए {needed} · है {have}",
  "board.tile.clueExactCardOdds": "यही सटीक कार्ड · {pct} चांस",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "दांव साइज़",
  "board.stakeControl.packMatchTitle": "हर टाइल क्लिक एक पूरे {packName} पैक का दांव लगाता है।",
  "board.stakeControl.packMatchTag": "हर क्लिक में 1 {packName} पैक",
  "board.stakeControl.packMatchTitleOne": "हर टाइल क्लिक {n} पूरे {packName} पैक का दांव लगाता है।",
  "board.stakeControl.packMatchTitleOther": "हर टाइल क्लिक {n} पूरे {packName} पैक का दांव लगाता है।",
  "board.stakeControl.packMatchTagOne": "हर क्लिक में {n} {packName} पैक",
  "board.stakeControl.packMatchTagOther": "हर क्लिक में {n} {packName} पैक",
  "board.stakeControl.packAmountSentence": "हर क्लिक पर {n} x {packAmount} {packName} पैक",
  "board.stakeControl.bidPackGroupAria": "टाइल पर एक पूरा पैक दांव लगाएं",
  "board.stakeControl.bidPackTag": "पैक का दांव लगाएं",
  "board.stakeControl.bidPackInfoTitle":
    "एक क्लिक से एक पूरा सील्ड पैक टाइल पर लग जाता है। पैक वही पैक रहता है, यह कभी किसी बड़े पैक में नहीं मिलता।",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "एक पैक चुनें और कितने। एक क्लिक टाइल पर वह पूरा स्टैक लगा देता है - बड़े पैक बड़े कार्ड निकालते हैं। नंबर की 1 से 8 टाइल चुनती है।",
  "board.stakeControl.bidPackInfoAria": "पैक का दांव लगाना क्या है?",
  "board.stakeControl.packSelectedTitle": "चुना गया। {amount} के दांव पर वापस जाने के लिए फिर क्लिक करें।",
  "board.stakeControl.packChipTitle": "हर टाइल क्लिक एक {packName} पैक ({amount}) का दांव लगाता है।",
  "board.stakeControl.packSelectedCountOne": "चुना गया। हर टाइल क्लिक {n} {packName} पैक ({amount}) का दांव लगाता है।",
  "board.stakeControl.packSelectedCountOther": "चुना गया। हर टाइल क्लिक {n} {packName} पैक ({amount}) का दांव लगाता है।",
  "board.stakeControl.packChipTitleCountOne": "हर टाइल क्लिक {n} {packName} पैक ({amount}) का दांव लगाता है।",
  "board.stakeControl.packChipTitleCountOther": "हर टाइल क्लिक {n} {packName} पैक ({amount}) का दांव लगाता है।",
  "board.stakeControl.overBalanceHeading": "बैलेंस से ज़्यादा",
  "board.stakeControl.overBalanceBody": "आपके {amount} कैश से ज़्यादा चाहिए।",
  "board.stakeControl.bidAmountTag": "राशि का दांव लगाएं",
  "board.stakeControl.bidAmountInfoTitle":
    "टाइल पर कोई भी राशि जोड़ें। हर पैक की कीमत पार करते ही छुट्टा पैसा बड़े पैक में बदल जाता है।",
  "board.stakeControl.bidAmountInfoAria": "राशि का दांव लगाना क्या है?",
  "board.stakeControl.incrementsGroupAria": "टाइल के दांव में जोड़ें",
  "board.stakeControl.bidAmountGroupAria": "टाइल पर राशि का दांव लगाएं",
  "board.stakeControl.packCountGroupAria": "हर क्लिक में कितने पैक",
  "board.stakeControl.packCountDecAria": "हर क्लिक में कम पैक",
  "board.stakeControl.packCountIncAria": "हर क्लिक में ज़्यादा पैक",
  "board.stakeControl.packCountValueTitleOne": "हर क्लिक में आर्म्ड टियर का {n} पैक",
  "board.stakeControl.packCountValueTitleOther": "हर क्लिक में आर्म्ड टियर के {n} पैक",
  "board.stakeControl.incrementTitle": "चुना गया दांव {amount} तक बढ़ाएं",
  "board.stakeControl.customAriaLabel": "USDC में कस्टम दांव राशि, Enter दबाने या कहीं और क्लिक करने पर सेट होती है",
  "board.stakeControl.customOverBalanceTitle": "आपके {amount} कैश से ज़्यादा। जमा करें या दांव घटाएं।",
  "board.stakeControl.customTitle": "कोई भी राशि टाइप करें, Enter या कहीं और क्लिक करने पर सेट हो जाती है",
  "board.stakeControl.resetTitle": "चुना गया दांव {amount} पर रीसेट करें",
  "board.stakeControl.reset": "रीसेट",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "ऑटो-दांव स्ट्रैटेजी, राउंड बंद होने पर आर्म होती है",
  "board.betRail.strategyArmedTip": "आर्म्ड, {seconds}s में चलेगी",
  "board.betRail.strategyAriaArmed": "{name}, आर्म्ड, {seconds} सेकंड में चलेगी",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, आर्म्ड, {seconds} सेकंड में चलेगी। डिसआर्म के लिए क्लिक करें।",
  "board.betRail.strategyAriaClickArm": "{name}। आर्म करने के लिए क्लिक करें।",
  "board.betRail.moreStrategiesAria": "और ऑटो-दांव स्ट्रैटेजी",
  "board.betRail.moreStrategiesTitle": "और स्ट्रैटेजी",
  "board.betRail.cancelArmedAria": "आर्म्ड ऑटो-दांव कैंसल करें",
  "board.betRail.autoBetCancelled": "ऑटो-दांव कैंसल हुआ।",
  "board.betRail.roundLockedSkip": "राउंड, ऑटो-दांव चलने से पहले ही लॉक हो गया।",
  "board.betRail.notEnoughBalanceSkip": "बैलेंस कम था, ऑटो-दांव नहीं चला।",
  "board.betRail.firedAtClose": "{name} राउंड बंद होने पर चली।",
  "board.betRail.firedAtClosePartial": "{name} राउंड बंद होने पर चली: {total} में से {covered} टाइल।",
  "board.betRail.strategyGuideAria": "ऑटो-दांव स्ट्रैटेजी गाइड",
  "board.betRail.strategyGuideTitle": "स्ट्रैटेजी गाइड",
  "board.betRail.autoBetEyebrow": "ऑटो-दांव",
  "board.betRail.firesInSeconds": "{seconds}s में चलेगी",
  "board.betRail.strategiesDialogAria": "ऑटो-दांव स्ट्रैटेजी",
  "board.betRail.closeStrategiesAria": "ऑटो-दांव स्ट्रैटेजी बंद करें",
  "board.betRail.strategiesHeading": "ऑटो-दांव स्ट्रैटेजी",
  "board.betRail.strategiesIntro":
    "अपने चुने दांव ({amount}) से आर्म करने के लिए किसी एक पर टैप करें। यह राउंड लॉक होने से ठीक पहले चलती है, उस पल हर टाइल पर लगे पैसे के हिसाब से रैंक की गई, यही भीड़ का सिग्नल है।",
  "board.betRail.contrarianHeading": "कंट्रेरियन पिक्स",
  "board.betRail.contrarianIntro":
    "जब सब सबसे कम वाली टाइल पर चढ़ते हैं तो वह भीड़ भरी हो जाती है, तो दूसरी सबसे कम वाली बेहतर चुका सकती है। ये मेन बार पर नहीं दिखतीं, इसे साफ़ रखने के लिए।",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "आपका अकाउंट और दांव साइज़",
  "board.betRail.balance": "बैलेंस",
  "board.betRail.activeStakes": "एक्टिव दांव",
  "board.betRail.collection": "कलेक्शन",
  "board.betRail.cardCountViewAllSingular": "{count} कार्ड · सब देखें",
  "board.betRail.cardCountViewAllPlural": "{count} कार्ड · सब देखें",
  "board.betRail.moreCount": "+{count} और",
  "board.betRail.noCardsYet": "अभी कलेक्शन में कोई कार्ड नहीं, एक टाइल जीतें और उसका कार्ड रखें।",
  "board.betRail.lastResult": "आख़िरी नतीजा",
  "board.betRail.eachClickAdds": "हर क्लिक {amount} जोड़ता है",
  "board.betRail.depositToPlay": "खेलने के लिए जमा करें",
  "board.betRail.affordShortfall": "{unit} चाहिए - आपके पास {balance} है",
  "board.betRail.allTilesPartialCover": "{name} - {unit} पर 8 में से {covered} टाइल कवर करती है",
  "board.betRail.dockBalance": "बैल",
  "board.betRail.dockStakes": "दांव",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "अगला राउंड {seconds} सेकंड में",
  "board.core.nextRoundLine": "अगला राउंड {secs} में",
  "board.core.playersDecidingAria": "{total} में से {decided} और खिलाड़ियों ने फ़ैसला किया",
  "board.core.playersDecidingLine": "खिलाड़ी फ़ैसला कर रहे हैं {ratio}",
  "board.core.pastRoundResultsAria": "पिछले राउंड के नतीजे",
  "board.core.pastRounds": "पिछले राउंड",
  "board.core.winsAmount": "{label} ने {amount} जीता",
  "board.core.youLost": "आप हार गए!",
  "board.core.didNotStake": "आपने इस राउंड दांव नहीं लगाया",
  "board.core.keepCard": "कार्ड रखें ({amount})",
  "board.core.sellAmount": "{amount} बेचें",
  "board.core.decideHint": "अभी या अगले राउंड में फ़ैसला करें",
  "board.core.roundResultLink": "राउंड #{roundId} का नतीजा",
  "board.core.fullReceiptHint": "पूरी रसीद → राउंड के नतीजे",
  "board.core.splitReceiptHint": "स्प्लिट · रसीद → राउंड के नतीजे",
  "board.core.eyebrowDrawing": "विजेता ड्रॉ हो रहा है",
  "board.core.eyebrowPullsIn": "हिट आ गईं",
  "board.core.eyebrowLocked": "लॉक्ड",
  "board.core.headlineDrawing": "एक टिकट यह तय करता है",
  "board.core.headlinePullsIn": "हर पैक खुल गया",
  "board.core.headlineRoundLocked": "राउंड लॉक्ड",
  "board.core.headlinePacksOpening": "पैक खुल रहे हैं…",
  "board.core.subDrawing": "वेरिफायेबल वेटेड ड्रॉ",
  "board.core.subPullsIn": "अगला विजेता ड्रॉ",
  "board.core.subIntro": "{count} {noun} दांव पर",
  "board.core.subOpening": "बोर्ड पर {count} {noun} खुल रहे हैं",
  "board.core.pool": "पॉट",
  "board.core.totalPool": "कुल पॉट",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  "board.core.clockRoundOpen": "राउंड खुला है",
  "board.core.clockLockedRevealing": "लॉक्ड · रिवील हो रहा है",
  "board.core.clockSettled": "सेटल्ड",
  "board.core.clockAriaLabel": "{label}, {seconds} सेकंड",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "स्टैंडर्ड स्लैब, टॉप बैकर इसे रखता है या प्रो-रेटा वापस बेचता है।",
  "board.settlement.dispositionSellBackSplit": "Grail नियम: डिफ़ॉल्ट रूप से वापस बिकता है, USDC पूरी टाइल में बंटता है।",
  "board.settlement.dispositionTopBackerKeeps": "Grail नियम: टॉप बैकर इसे रखता है और बाकियों को उनका हिस्सा चुकाता है।",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "फ़ैसले के लिए {seconds}s",
  "board.settlement.panelAria": "टाइल की डिटेल्स और सेटलमेंट",
  "board.settlement.collapsePanelAria": "पैनल छोटा करें",
  "board.settlement.expandPanelAria": "पैनल बड़ा करें",
  "board.settlement.roundResultsLink": "राउंड के नतीजे",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "राउंड पैनल",
  "board.settlement.clickTileToBack": "जीत यहां उतरती है। {amount} से दांव लगाने के लिए किसी टाइल पर क्लिक करें।",
  "board.settlement.lastResultLine": "आख़िरी नतीजा · राउंड #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "आपने {amount} जीता",
  "board.settlement.view": "देखें",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "हारने वाली टाइल · क्यों हारी",
  "board.settlement.losingTileTitle": "{label} · टाइल पर {amount}",
  "board.settlement.loserWhy":
    "{cardName} ({amount}) खुला, ड्रॉ {winnerLabel} पर उतरी। {pct} टिकटों को कुछ नहीं मिला{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", आपके {amount} समेत।",
  "board.settlement.loserWhySuffixNone": "।",
  "board.settlement.emptyTileNote": "यह टाइल खाली थी - न कोई दांव, न कोई ड्रॉ टिकट।",
  "board.settlement.backToSettlement": "सेटलमेंट पर वापस · {winnerLabel} जीता",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · कार्ड {index}/{total} · टाइल पर {amount}",
  "board.settlement.pullCaptionSingle": "{label} · टाइल पर {amount}",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "पैक खुल रहे हैं",
  "board.settlement.revealOpenedTitle": "{label} ने {cardName} खोला",
  "board.settlement.revealOddsLine": "{amount} · {poolAmount} पॉट लेने का {pct} चांस। विजेता अभी ड्रॉ हो रहा है।",
  "board.settlement.revealEmpty": "बोर्ड पर पैक खुल रहे हैं, विजेता का ड्रॉ अभी आता है।",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "आख़िरी नतीजा · राउंड #{roundId}",
  "board.settlement.tileTakesTable": "{label} ने {amount} में पूरी टेबल ली",
  "board.settlement.whyWon": "वेरिफायेबल वेटेड टिकट से चुनी गई, लॉक पर {label} के पास पॉट का {pct}% था।",
  "board.settlement.lostNoStakeIn": "आप हार गए, {label} में कोई दांव नहीं था",
  "board.settlement.theWinnerFallback": "विजेता",
  "board.settlement.wonNoStake": "{label} जीता · आपका कोई दांव नहीं था",
  "board.settlement.aTileFallback": "एक टाइल",
  "board.settlement.lossNoteWithStake": "आपका {amount} दूसरी टाइलों पर था, उसकी कहानी देखने के लिए किसी पर होवर करें।",
  "board.settlement.lossNoteNone": "आपने इस राउंड किसी टाइल पर दांव नहीं लगाया।",
  "board.settlement.topCardOfRound": "राउंड का टॉप कार्ड · {label}",
  "board.settlement.keepCardTo": "कार्ड रखें ({amount}) → कलेक्शन",
  "board.settlement.sellBackFor": "{amount} में वापस बेचें",
  "board.settlement.continueNextRound": "अगले राउंड में जाएं",
  "board.settlement.continue": "जारी रखें",
  "board.settlement.keepSellHint":
    "रखें = कार्ड कलेक्शन में · बेचें = अभी {amount} ({pct}% वैल्यू, इस पैक का CC बायबैक) · {noAction}",
  "board.settlement.noActionKept": "कुछ न करने पर कार्ड आपके लिए रखा जाता है।",
  "board.settlement.noActionAutoSell": "कुछ न करने पर अगला राउंड ख़त्म होने पर ऑटो-सेल होता है।",
  "board.settlement.revealOnlyNote":
    "इस कैनरी में हारने वाली टाइलें सिर्फ़ रिवील-ओनली हैं, इनकी हिट वॉल्ट में वापस जाती हैं। सिर्फ़ जीतने वाली टाइल का कार्ड पेआउट देता है।",
  "board.settlement.payoutSplit": "पेआउट स्प्लिट",
  "board.settlement.poolChaseFeedLine": "पॉट {pool} · chase फ़ीड {feed}",
  "board.settlement.chaseAddSuffix": " · CHASE +{amount}",
  "board.settlement.physicalCardArrow": "फ़िज़िकल कार्ड →",
  "board.settlement.grailSecuredSuffix": " (grail पक्का)",
  "board.settlement.grailSoldBack": "Grail वापस बेचा गया ({amount}) → ऊपर USDC स्प्लिट में।",
  "board.settlement.cardAssignmentHead": "कार्ड असाइनमेंट",
  "board.settlement.cardLabel": "{amount} का कार्ड",
  "board.settlement.soldToVault": "वॉल्ट को बेचा गया · प्रोसीड्स स्प्लिट में",
  "board.settlement.decisionTopBackerSuffix": " (टॉप बैकर · रखें या बेचें)",
  "board.settlement.offTheirUsdcSuffix": " · उनके USDC से {amount} कटा",
  "board.settlement.cardsSpreadNote":
    "कार्ड जितने ज़्यादा बैकर्स में बांटे जा सकें बांटे जाते हैं - असाइन किया कार्ड उस बैकर के USDC से उसकी CC बायबैक कीमत (पैक के हिसाब से 85-93%) काटता है (बेचने जैसी ही कैश वैल्यू, ऊपर का फ़ायदा उनके पास रहता है)। सिर्फ़ जो कार्ड नहीं समाते वे वॉल्ट को बिकते हैं।",
  "board.settlement.chaseHitLabel": "THE CHASE चला!",
  "board.settlement.chasePaidLine": "इस स्प्लिट में {amount} चुकाया गया।",
  "board.settlement.chaseMissLabel": "कोई CHASE ड्रॉप नहीं।",
  "board.settlement.chaseNowLine": "Chase अब {amount}।",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "ड्रॉ वेरिफ़ाई करें",
  "board.settlement.verifyDrawSub": "वेरिफायेबल ड्रॉ · ड्रॉ की रसीद देखें",
  "board.settlement.roundIdLabel": "राउंड आईडी",
  "board.settlement.winningDrawLabel": "जीतने वाला ड्रॉ",
  "board.settlement.drawSeedLabel": "ड्रॉ सीड",
  "board.settlement.proofIdLabel": "प्रूफ़ आईडी",
  "board.settlement.ticketOfCount": "#{index} / {count}",
  "board.settlement.verifying": "वेरिफ़ाई हो रहा है…",
  "board.settlement.recheckDraw": "ड्रॉ फिर से जांचें",
  "board.settlement.verifierLink": "वेरिफ़ायर ↗",
  "board.settlement.verifiedOk": "✓ ड्रॉ वेरिफ़ाई हुआ, यह विजेता अपने पब्लिश ड्रॉ सीड से मेल खाता है।",
  "board.settlement.verifiedBad": "✗ यह ड्रॉ अपने सीड से मेल नहीं खाया, इस पर भरोसा न करें।",
  "board.settlement.everyRoundNote": "हर राउंड एक पब्लिश सीड से एक विजेता निकालता है जिसे आप फिर से जांच सकते हैं।",
  "board.settlement.noPacksNote": "इस राउंड कोई पैक बैक नहीं हुआ, ड्रॉ करने के लिए कुछ नहीं।",
  "board.settlement.settledHoverHint": "सेटल्ड, जांचने के लिए किसी टाइल पर होवर करें।",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "दांव आपके बैलेंस से बहुत बड़ा है",
  "board.betTooBig.dismissAria": "खारिज करें",
  "board.betTooBig.gotIt": "समझ गया",
  "board.betTooBig.body": "{slotLabel} पर दांव लगाने के लिए {needed} चाहिए, आपके पास {held} है। आप {shortfall} कम हैं।",
  "board.betTooBig.deposit": "{amount}+ जमा करें",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "खिलाड़ी, कुल दांव के हिसाब से रैंक किए गए",
  "board.wagerLadder.title": "खिलाड़ी",
  "board.wagerLadder.countZero": "अभी तक कोई दांव नहीं",
  "board.wagerLadder.countOther": "राउंड में {n} · कुल दांव के हिसाब से",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "खिलाड़ी पैनल छोटा करें",
  "board.wagerLadder.lastRoundAria": "पिछले राउंड #{n} के नतीजे देखें",
  "board.wagerLadder.lastRoundLabel": "पिछले राउंड के नतीजे देखें",
  "board.wagerLadder.empty": "इस राउंड अभी तक किसी ने किसी टाइल पर दांव नहीं लगाया।",
  "board.wagerLadder.leaderAria": "लीडर",
  "board.wagerLadder.openProfileTitle": "{name} की प्रोफ़ाइल एक नए टैब में खोलें",
  "board.wagerLadder.miniGridTotal": "कुल {amount}",
  "board.wagerLadder.miniGridTilesAria": "{name} ने बैक की गई टाइलें",
  "board.wagerLadder.miniGridTilesAriaYou": "आपने बैक की गई टाइलें",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "इस दांव को फ़ंड करने के लिए इन्वेंट्री बेचें",
  "board.bidFund.eyebrow": "USDC ख़त्म",
  "board.bidFund.titleOne": "इस दांव को कवर करने के लिए अपना कार्ड बेचें?",
  "board.bidFund.titleMany": "इस दांव को कवर करने के लिए ये कार्ड बेचें?",
  "board.bidFund.body": "{cards} बेचने से {buyback} मिलेगा, {tile} पर {amount} का दांव लगाने के लिए काफ़ी।",
  "board.bidFund.bodyCardsMany": "ये कार्ड",
  "board.bidFund.note":
    "आप {amount} कम हैं। कार्ड अपने पैक की CC बायबैक दर (85 से 93%) पर बिकते हैं। यह वापस नहीं हो सकता।",
  "board.bidFund.keepCards": "कार्ड रखें",
  "board.bidFund.sellAndBid": "बेचें और {amount} का दांव लगाएं",
  "board.bidFund.autoSellSwitch": "मेरी जीत अपने आप USDC में बदलें",
  "board.bidFund.autoSellNoteOn":
    "हर जीत मिलते ही बायबैक दर पर कैश हो जाती है। कोई रखें या बेचें पॉप-अप नहीं। Grail कभी ऑटो-सेल नहीं होते। इसे कभी भी Settings में बदलें।",
  "board.bidFund.autoSellNoteOff":
    "इसे चालू करें और आपका हर जीता कार्ड बिना पॉप-अप के बायबैक दर पर USDC में बदल जाएगा। Grail कभी ऑटो-सेल नहीं होते। इसे कभी भी Settings में बदलें।",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "नंबर-की से दांव लगाएं?",
  "board.hotkeys.optInBody":
    "एक की दबाने से उस टाइल पर आपका मौजूदा दांव तुरंत लग जाता है। अभी कुछ नहीं लगा।",
  "board.hotkeys.notNow": "अभी नहीं",
  "board.hotkeys.enableKeys": "कीज़ चालू करें",
  "board.hotkeys.turnOff": "बंद करें",
  "board.hotkeys.turnOffTitle": "जब तक आप इन्हें Settings में फिर चालू न करें, कीज़ बंद रहेंगी।",
  "board.hotkeys.changeKeys": "कीज़ बदलें",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "टाइल खोलें",
  "board.boardV1.onTile": "टाइल पर",
  "board.boardV1.changeAmount": "{amount} बदलें",
  "board.boardV1.oddsSuffix": "{pct} चांस",
  "board.boardV1.openedOdds": "खुला · {pct} चांस",
  "board.boardV1.emptyNeverInDraw": "खाली · कभी ड्रॉ में नहीं",
  "board.boardV1.winnerYourShare": "विजेता · आपका हिस्सा मिलता है",
  "board.boardV1.winnerNoStake": "विजेता · आपका कोई दांव नहीं था",
  "board.boardV1.lostOdds": "ड्रॉ हार गई · {pct} चांस",
  "board.boardV1.tileClickTitle": "{amount} से {label} पर दांव लगाने के लिए कहीं भी क्लिक करें",
  "board.boardV1.youAmount": "आप {amount}",
  "board.boardV1.youNone": "आप -",
  "board.boardV1.pctOfTile": "टाइल का {pct}",
  "board.boardV1.noStakeYet": "अभी तक कोई दांव नहीं",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "टॉप · ",
  "board.boardV1.backerPopStake": "{amount} लगा · टाइल का {pct}",
  "board.boardV1.statusWaitingDraw": "ड्रॉ का इंतज़ार…",
  "board.boardV1.statusWonSplit": "स्प्लिट से {amount} जीता",
  "board.boardV1.statusOnWinningTile": "जीतने वाली टाइल पर",
  "board.boardV1.statusNoPayout": "इस राउंड कोई पेआउट नहीं",
  "board.boardV1.statusYourStake": "आपका लाइव दांव",
  "board.boardV1.statusBacking": "इस टाइल पर दांव लगा है",
  "board.boardV1.backerCount.one": "{n} बैकर",
  "board.boardV1.backerCount.other": "{n} बैकर",
  "board.boardV1.noBackersYet": "अभी तक कोई बैकर नहीं",
  "board.boardV1.backAmount": "{amount} दांव लगाएं",
  "board.boardV1.backBtnTitle": "{label} पर {amount} USDC का दांव लगाएं",
  "board.boardV1.evolveTitle": "{label} पर ठीक {amount} और लगाता है",
  "board.boardV1.hoverTitle": "{label} · टाइल पर {amount}",
  "board.boardV1.opensAs": "खुलता है · {summary}",
  "board.boardV1.noPacksYet": "अभी तक कोई पैक नहीं, पहला पैक फ़ंड करने के लिए दांव लगाएं",
  "board.boardV1.whyOpenedDrawing":
    "{pct} चांस पर {cardName} ({amount}) खुला, विजेता अभी ड्रॉ हो रहा है।",
  "board.boardV1.whyWon":
    "{pct} चांस पर वेटेड ड्रॉ जीता। {cardName} ({amount}) खुला; पॉट इसके बैकर्स में प्रो-रेटा बंटा।",
  "board.boardV1.whyLost":
    "वेटेड ड्रॉ हार गई, {pct} चांस ({poolAmount} पॉट में से {amount})। फिर भी {cardName} ({cardAmount}) खुला, पर सिर्फ़ जीतने वाली टाइल को पेआउट मिलता है।",
  "board.boardV1.whyEmpty": "खाली टाइल - न कोई दांव, न कोई ड्रॉ टिकट।",
  "board.boardV1.whyYourStakeSuffix": " यहां आपका दांव: {amount}।",
  "board.boardV1.whyNoStakeSuffix": " यहां आपका कोई दांव नहीं था।",
  "board.boardV1.ifWins": "अगर यह टाइल जीतती है: आप {poolAmount} पॉट में से करीब {amount} लेंगे।",
  "board.boardV1.clickToBack": "चुने गए दांव से इस पर दांव लगाने और लॉक पर इसका पहला पैक खोलने के लिए क्लिक करें।",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "रैंक {rank}, {name}, दांव {wagered}, नेट {net}, विन रेट {pct} प्रतिशत",
  "board.leaderboard.youTag": "आप",
  "board.leaderboard.youRankTag": "आप · #{n}",
  "board.leaderboard.statWagered": "कुल दांव",
  "board.leaderboard.statNetPl": "नेट P&L",
  "board.leaderboard.statWinRate": "विन रेट",
  "board.leaderboard.statRounds": "राउंड",
  "board.leaderboard.statPoolShare": "पॉट शेयर",
  "board.leaderboard.statFirstSeen": "पहली बार दिखा",
  "board.leaderboard.statBiggestPull": "सबसे बड़ी हिट",
  "board.leaderboard.shareOfToday": "आज के दांव का",
  "board.leaderboard.shareOfAllTime": "अब तक के दांव का",
  "board.leaderboard.noneYet": "अभी तक कोई नहीं",
  "board.leaderboard.viewFullProfile": "पूरी प्रोफ़ाइल देखें",
  "board.leaderboard.live": "लाइव",
  "board.leaderboard.fullRankings": "पूरी रैंकिंग",
  "board.leaderboard.playerCount.one": "{n} खिलाड़ी",
  "board.leaderboard.playerCount.other": "{n} खिलाड़ी",
  "board.leaderboard.roundCount.one": "{n} राउंड",
  "board.leaderboard.roundCount.other": "{n} राउंड",
  "board.leaderboard.colPlayer": "खिलाड़ी",
  "board.leaderboard.colWagered": "दांव",
  "board.leaderboard.colNet": "नेट P&L",
  "board.leaderboard.colWin": "विन",
  "board.leaderboard.colBiggestPull": "सबसे बड़ी हिट",
  "board.leaderboard.sortGroupAria": "रैंकिंग क्रमबद्ध करें",
  "board.leaderboard.sortBy": "{col} के अनुसार क्रमबद्ध करें",
  "board.leaderboard.podiumNet": "नेट {amount}",
  "board.leaderboard.podiumTopPull": "टॉप हिट",
  "board.leaderboard.fullStandings": "पूरी स्टैंडिंग · {n} खिलाड़ी",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{n} {packName} पैक ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} {packName} पैक ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "{handle} की X प्रोफ़ाइल फ़ोटो",
  "board.connectX.connectedTitle": "X के ज़रिए कनेक्टेड · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "{packName} स्लॉट (इस टाइल पर कोई नहीं)",
  "board.packChips.fixedChipTitle": "{n} x {packName}, हर एक {amount}",
  "board.packChips.fixedChipTitleTotalSuffix": " - कुल {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "टाइल के जमा पैसे से बना - इसे किसी ने सीधे दांव नहीं लगाया",
  "board.packChips.pooledSome": "{total} में से {n} टाइल के जमा पैसे से बने",
  "board.packChips.bidWhole": "एक पूरे पैक का दांव लगाया",
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "इस टाइल पर और भी: {list}",
  "board.packChips.morePacks.one": "{n} और पैक",
  "board.packChips.morePacks.other": "{n} और पैक",
  "board.packChips.morePacksWithList.one": "{n} और पैक: {list}",
  "board.packChips.morePacksWithList.other": "{n} और पैक: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  "board.tile.splitBidsPool": "दांव {bids} · पॉट {pool}",
  "board.tile.splitAllBids": "पूरा {bids} पूरे पैक के दांव के रूप में लगा",
  "board.tile.splitAllPool": "पूरा {pool} टाइल का जमा हुआ छुट्टा पैसा है",
  "board.tile.splitPoolNote": "डैश वाले पैक जमा पैसे से बने, इन्हें किसी ने दांव पर नहीं लगाया।",
  "board.tile.evolveLooseTitle": "इस टाइल पर {loose} छुट्टा पैसा {target} पर {tier} पैक में बदल जाता है",
  "board.tile.evolveNoLooseTitle":
    "इस टाइल पर अभी कोई छुट्टा पैसा नहीं। छुट्टा पैसा {target} पर {tier} पैक में बदल जाता है",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  "board.betRail.allTilesPartialCoverOf": "{name} - {unit} पर {total} में से {covered} टाइल कवर करती है",
  "board.betRail.allTilesPlanFull": "राउंड बंद होने पर यह {unit} पर सभी {total} टाइलों पर दांव लगाती है। कुल {spend}।",
  "board.betRail.allTilesPlanShort.one":
    "राउंड बंद होने पर यह {unit} पर {total} में से {covered} टाइल पर दांव लगाती है। आपका {balance} {spend} कवर करता है।",
  "board.betRail.allTilesPlanShort.other":
    "राउंड बंद होने पर यह {unit} पर {total} में से {covered} टाइल पर दांव लगाती है। आपका {balance} {spend} कवर करता है।",
  "board.betRail.allTilesPlanNone": "आपका {balance} एक {unit} दांव भी कवर नहीं करता, तो कोई टाइल बैक नहीं होगी।",
  "board.betRail.allTilesShortHistory.one":
    "सभी टाइलों पर ऑटो-दांव को {unit} पर {tiles} टाइलों के लिए {needed} चाहिए। आपके पास {balance} है, तो इसने {covered} टाइल बैक की।",
  "board.betRail.allTilesShortHistory.other":
    "सभी टाइलों पर ऑटो-दांव को {unit} पर {tiles} टाइलों के लिए {needed} चाहिए। आपके पास {balance} है, तो इसने {covered} टाइल बैक कीं।",
  "board.betRail.allTilesNoneHistory":
    "सभी टाइलों पर ऑटो-दांव को {unit} पर {tiles} टाइलों के लिए {needed} चाहिए। आपके पास {balance} है, तो कोई टाइल बैक नहीं हुई।",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "राउंड बंद होने पर",
  "board.betRail.planTotal": "कुल",
  "board.betRail.planMathFull": "{total} टाइल × {amount}",
  "board.betRail.planMathShort": "{total} में से {covered} टाइल × {amount}",
  "board.betRail.planPerTile": "प्रति टाइल {unit}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  "board.strategy.highest.label": "टॉप",
  "board.strategy.highest.name": "आर्म: राउंड बंद होने पर सबसे ऊंची टाइल पर दांव लगाएं",
  "board.strategy.highest.detail":
    "आपके दांव को सबसे ज़्यादा पैसे वाली टाइल पर आर्म करती है, राउंड बंद होने से ठीक पहले तय होती है।",
  "board.strategy.highest.rowTitle": "टॉप टाइल",
  "board.strategy.highest.closeLine": "राउंड बंद होने पर सबसे बड़ी टाइल पर दांव लगाती है",
  "board.strategy.highest.gridLine": "बंद होने पर सबसे ज़्यादा पैसा",

  "board.strategy.lowest.label": "बॉटम",
  "board.strategy.lowest.name": "आर्म: राउंड बंद होने पर सबसे नीची टाइल पर दांव लगाएं",
  "board.strategy.lowest.detail":
    "आपके दांव को सबसे कम भीड़ वाली टाइल पर आर्म करती है, राउंड बंद होने से ठीक पहले तय होती है। अगर सब सबसे नीची टाइल पर चढ़ जाएं, तो तब तक वह सबसे नीची नहीं रहती।",
  "board.strategy.lowest.rowTitle": "बॉटम टाइल",
  "board.strategy.lowest.closeLine": "राउंड बंद होने पर सबसे छोटी टाइल पर दांव लगाती है",
  "board.strategy.lowest.gridLine": "बंद होने पर सबसे कम पैसा",

  "board.strategy.secondHighest.label": "2रा टॉप",
  "board.strategy.secondHighest.name": "आर्म: राउंड बंद होने पर दूसरी सबसे ऊंची टाइल पर दांव लगाएं",
  "board.strategy.secondHighest.detail":
    "आपके दांव को लीडर से एक पायदान नीचे आर्म करती है, राउंड बंद होने से ठीक पहले तय होती है।",
  "board.strategy.secondHighest.rowTitle": "दूसरी सबसे ऊंची टाइल",
  "board.strategy.secondHighest.closeLine": "राउंड बंद होने पर लीडर से ठीक नीचे वाली टाइल पर दांव लगाती है",
  "board.strategy.secondHighest.gridLine": "लीडर से एक पायदान नीचे",

  "board.strategy.secondLowest.label": "2रा बॉटम",
  "board.strategy.secondLowest.name": "आर्म: राउंड बंद होने पर दूसरी सबसे नीची टाइल पर दांव लगाएं",
  "board.strategy.secondLowest.detail":
    "भीड़-सिद्धांत वाली पिक: जब सब सबसे नीची टाइल पर चढ़ते हैं तो वह भीड़ भरी हो जाती है, तो दूसरी सबसे नीची बेहतर चुका सकती है। अभी आर्म होती है, राउंड बंद होने से ठीक पहले तय होती है।",
  "board.strategy.secondLowest.rowTitle": "दूसरी सबसे नीची टाइल",
  "board.strategy.secondLowest.closeLine": "राउंड बंद होने पर भीड़ भरे बॉटम से ठीक ऊपर वाली टाइल पर दांव लगाती है",
  "board.strategy.secondLowest.gridLine": "बॉटम से एक पायदान ऊपर",

  "board.strategy.allTiles.label": "सभी",
  "board.strategy.allTiles.name": "आर्म: राउंड बंद होने पर हर टाइल पर दांव लगाएं",
  "board.strategy.allTiles.detail":
    "आपके दांव को हर योग्य टाइल पर आर्म करती है, राउंड बंद होने से ठीक पहले तय होती है। कुल ख़र्च = आपका दांव साइज़ x उस पल टाइलों की संख्या।",
  "board.strategy.allTiles.rowTitle": "सभी टाइलें",
  "board.strategy.allTiles.closeLine": "राउंड बंद होने पर आपका दांव फैलाती है",
  "board.strategy.allTiles.gridLine": "हर टाइल पर आपका दांव",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack -----------------------------------
  "board.tile.confirmTapAgain": "फिर टैप करें: {unit}",
  "board.tile.confirmClickAgain": "फिर क्लिक करें: {unit}",
  "board.tile.betOffNotice": "सेटिंग्स में दांव बंद है",
  "board.stakeControl.pickPackHint": "दांव लगाने के लिए एक पैक चुनें",
  "board.stakeControl.emptyStakeLead": "एक पैक चुनें",
  "board.stakeControl.emptyStakeHint": "वही आपका दांव बनता है",
  "gear.betInput.label": "दांव लगाना",
  "gear.betInput.hint":
    "टाइल दबाने (और उसकी नंबर की) से आपका दांव कैसे लगता है। Double एक पक्का करने वाले टैप के लिए पूछता है - यह टच-स्क्रीन डिफ़ॉल्ट है। Off यानी स्पेक्टेटर मोड: कोई दांव नहीं लग सकता।",
  "gear.betInput.optionSingle": "सिंगल टैप",
  "gear.betInput.optionDouble": "डबल टैप",
  "gear.betInput.optionOff": "ऑफ",
  "gear.cardOpen.label": "कार्ड खोलना",
  "gear.cardOpen.hint":
    "कार्ड का पेज खुलने से पहले Double एक पक्का करने वाले टैप के लिए पूछता है - यह टच-स्क्रीन डिफ़ॉल्ट है।",
} as Record<string, string>;
