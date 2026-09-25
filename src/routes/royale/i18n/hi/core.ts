// Hindi (हिन्दी): first full translation pass over this segment's key set.
// Register: natural Hindi-English code-switching ("Hinglish") as used by
// real Hindi gaming/tech apps - English loanwords for tech/finance nouns
// (अकाउंट, वॉलेट, बैलेंस, डिपॉज़िट...) sit naturally inside Devanagari
// sentences. "आप" (formal) is used throughout for "you"/"your", matching the
// fr locale's vouvoiement precedent - Hindi has no letter-casing, so ALL-CAPS
// English source strings render as plain Devanagari text. Same key set as
// en/core.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// House terms (kept in step with board.ts / cinema.ts / misc.ts / docs.ts):
//   tile टाइल · pack पैक (identical word, singular = plural) · round राउंड ·
//   pool/pot पॉट (one Hindi word covers both English words, same underlying
//   concept: the shared money pile) · bet/bid/stake दांव (दांव लगाना = to
//   bet/back/bid/stake) · back a tile टाइल पर दांव लगाना · backer(s) बैकर ·
//   top backer टॉप बैकर · sell back वापस बेचना · buyback बायबैक · pull (a
//   card obtained from a pack) हिट · draw (the VRF winner draw) ड्रॉ · vault
//   वॉल्ट · slab / graded card स्लैब · provably fair / verifiable draw
//   वेरिफायेबल · odds ऑड्स · settle/settled सेटल (हो गया) · balance बैलेंस ·
//   collection कलेक्शन · leaderboard लीडरबोर्ड · profile प्रोफ़ाइल · wallet
//   वॉलेट · receipt रसीद · deposit जमा (करें) · withdraw/withdrawal निकासी ·
//   loose change (docs' banned "heat" concept) छुट्टा/छुट्टा पैसा · The
//   Chase / Chase kept in English throughout, as a deliberate choice: it is
//   the mechanic's own proper name, given the exact same treatment as the
//   pack tier brand names below · Replay रीप्ले (used identically in
//   pages.common.replay, pages.results.replayLink and
//   cinema.replay.watermarkTag).
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) are brand terms and
// stay in Latin script, mid-sentence included. So do attn ROYALE, ATTN
// Protocol, USDC, X, Privy and CollectorCrypt.
//
// Segment: core (the original Phase-1 flat dictionary, moved here
// verbatim as part of the i18n parallel-work restructure) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome) and
// runtime.* (copy built by the plain, non-component .ts modules). Do NOT add
// new SURFACE keys to this file, add them to the segment file for the surface
// they belong to instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "भाषा",
  "settings.languageSectionAria": "भाषा सेटिंग्स",
  "settings.languageSearchPlaceholder": "भाषाएं खोजें",
  "settings.languageNoResults": "कोई मेल खाती भाषा नहीं मिली",
  "settings.languageHint": "तुरंत लागू होता है। नाम से खोजें या टाइप करके फ़िल्टर करें।",
  "settings.languageInputAria": "भाषा, खोजें और चुनें",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "सेटिंग समूह",
  "settings.searchPlaceholder": "सेटिंग खोजें",
  "settings.searchClear": "खोज साफ़ करें",
  "settings.searchResultsAria": "मेल खाती सेटिंग",
  "settings.searchNoResults": "“{query}” से कुछ मेल नहीं खाता। जो बदलना है उसका नाम आज़माएँ।",
  "settings.backToGroups": "सभी सेटिंग",
  "gear.cards.heading": "कार्ड",
  "gear.cards.sectionAria": "कार्ड सेटिंग",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "दांव {bids} · न्यूनतम {amount}",
  "gear.section.summary.display": "पॉप-अप {popups} · पोर्ट्रेट {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "संगीत {music} · प्रभाव {sfx}",
  "gear.section.summary.autosell": "{count} ऑटो-सैल नियम सक्रिय",
  "gear.section.summary.hotkeys": "{count} हॉटकी सेट",

  // --- Shared words --------------------------------------------------------
  "common.on": "ऑन",
  "common.off": "ऑफ",
  "common.set": "सेट",
  "common.clear": "क्लियर",
  "common.tileLabel": "टाइल {n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "दांव",
  "gear.betting.sectionAria": "दांव सेटिंग्स",
  "gear.betting.provider.label": "पैक प्रदाता",
  "gear.betting.provider.automatic": "स्वचालित (Collector Crypt प्राथमिक)",
  "gear.betting.provider.hint": "उपलब्ध होने पर स्वचालित मोड Collector Crypt को प्राथमिकता देता है और केवल सत्यापित फ़ॉलबैक का उपयोग कर सकता है। किसी नामित प्रदाता को चुनना सख्त है: उसके अनुपलब्ध होने पर बेट अस्वीकार हो जाती है।",
  "gear.betting.provider.automaticHint": "स्वचालित · Collector Crypt प्राथमिक",
  "gear.betting.provider.strictHint": "केवल {provider} · कोई फ़ॉलबैक नहीं",
  "gear.betting.provider.unavailable": "{provider} (अनुपलब्ध)",
  "gear.betting.provider.selectedUnavailable": "{provider} अनुपलब्ध है। सख्त बेट अस्वीकार होती हैं और चुनाव कभी बदला नहीं जाता।",
  "gear.betting.provider.actual": "{provider} ने पूरा किया",
  "gear.betting.provider.accepted": "{provider} ने स्वीकार किया",
  "gear.betting.disableBids.label": "दांव बंद करें",
  "gear.betting.disableBids.hint":
    "आपके दांव लगाने पर रोक लगाता है: टाइल टैप करने से अब दांव नहीं लगेगा, ताकि आप बिना गलती से पैसा लगाए मैच देख सकें (या स्क्रीन किसी और को दे सकें)। बाकी गेम चलता रहता है।",
  "gear.betting.minBid.label": "न्यूनतम दांव",
  "gear.betting.minBid.hint":
    "एक टैप से लगने वाला सबसे छोटा दांव। आपका दांव इससे कम नहीं हो सकता, ताकि जल्दी में किया गया टैप कभी इरादे से कम दांव न लगाए (स्पूफ़ दांव रोकने के लिए न्यूनतम $5 तय है)।",
  "gear.betting.upgradeCap.label": "अपग्रेड लागत सीमा",
  "gear.betting.upgradeCap.placeholder": "कोई सीमा नहीं",
  "gear.betting.upgradeCap.hint":
    "एक अपग्रेड क्लिक पर ज़्यादा से ज़्यादा कितना खर्च हो सकता है। महंगे अपग्रेड धुंधले (ग्रे) दिख जाते हैं, ताकि व्यस्त टाइल आपको अचानक बड़ा बिल न थमा दे।",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "डिस्प्ले",
  "gear.display.sectionAria": "डिस्प्ले सेटिंग्स",
  "gear.display.chipFloats.label": "दांव पॉप-अप",
  "gear.display.chipFloats.hint": "जब कोई किसी टाइल पर दांव लगाए तो उभरने वाले छोटे \"+$X · नाम\" बबल दिखाएं।",
  "gear.display.floatThreshold.label": "इससे कम के दांव छुपाएं",
  "gear.display.floatThreshold.placeholder": "हर दांव दिखाएं",
  "gear.display.floatThreshold.hint":
    "इतने या इससे बड़े दांव पर ही बबल दिखेगा। इसे खाली करें (या $0 सेट करें) ताकि हर दांव दिखे, इससे बहुत सारे छोटे दांव आने पर भी बोर्ड शांत रहता है।",
  "gear.display.hidePortraits.label": "खिलाड़ियों की तस्वीरें छुपाएं",
  "gear.display.hidePortraits.hint": "टाइल पर बाकी खिलाड़ियों के गोल पोर्ट्रेट छुपाता है। आपका अपना मार्कर दिखता रहेगा।",
  "gear.display.fullscreenLandscape.label": "लैंडस्केप में फुलस्क्रीन",
  "gear.display.fullscreenLandscape.hint":
    "मोबाइल पर लैंडस्केप में अगला टैप ब्राउज़र बार छुपाता है। iPhone Safari बार को छोटा करता है; Add to Home Screen ही असली फुलस्क्रीन देता है।",
  "gear.display.replayTour.label": "स्वागत टूर फिर चलाएं",
  "gear.display.replayTour.hint": "स्वागत टूर को पहले चरण से फिर खोलें।",
  "gear.display.couch.label": "बड़ा टेक्स्ट (टीवी/सोफ़ा)",
  "gear.display.headerCollapse.label": "हेडर समेटें",
  "gear.display.headerCollapse.hint": "ऊपर की पट्टी को समेट देता है ताकि बोर्ड और कार्ड पूरी स्क्रीन भर लें। हेडर का तीर उसे वापस ले आता है।",
  "gear.display.couch.hint":
    "पूरे गेम में पढ़ने वाला टेक्स्ट बड़ा करता है: चैट, दस्तावेज़, लेबल और पैसों के आंकड़े, सोफ़े से खेलने के लिए बनाया गया। बोर्ड का ले-आउट वैसा ही रहता है। पते में ?couch=1 लगाने से भी यह चालू हो जाता है।",
  "gear.display.couch.suggested": "यह टीवी या कंसोल ब्राउज़र जैसा लग रहा है। बड़ा टेक्स्ट इसी स्क्रीन के लिए बना है।",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "रिवील",
  "gear.reveals.sectionAria": "रिवील सेटिंग्स",
  "gear.reveals.turbo.label": "टर्बो रिवील",
  "gear.reveals.turbo.hint":
    "रिवील शो को तेज़ी से आगे बढ़ाता है ताकि आपका नतीजा जल्दी सामने आए। बड़े पल फिर भी एक ठहराव के साथ आते हैं। डिफ़ॉल्ट रूप से बंद, बाकी सबको पूरा शो दिखता है।",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "साउंड",
  "gear.sound.sectionAria": "साउंड सेटिंग्स",
  "gear.sound.sfx.label": "साउंड इफ़ेक्ट",
  "gear.sound.sfx.hint":
    "चिप क्लिक, राउंड शुरू और लॉक होने की आवाज़, विनर व्हील और रिवील शो। सब कुछ आपके ब्राउज़र में ही बनता है, कुछ भी लोड नहीं करना पड़ता।",
  "gear.sound.music.label": "म्यूज़िक",
  "gear.sound.music.hint":
    "राउंड के साथ बदलता है: दांव लगने के दौरान बढ़ता है, आखिरी कुछ सेकंड में उभरता है और रिवील पर शांत हो जाता है। आपके पहले टैप या कीप्रेस के बाद शुरू होता है और टैब बदलते ही रुक जाता है।",
  "gear.sound.musicStyle.label": "म्यूज़िक स्टाइल",
  "gear.sound.musicStyle.piano": "शांत पियानो",
  "gear.sound.musicStyle.snowmelt": "बर्फ़ पिघलन",
  "gear.sound.musicStyle.hearthfire": "चूल्हे की आग",
  "gear.sound.musicStyle.grotto": "स्वर्णिम गुफा",
  "gear.sound.musicStyle.arcade": "आर्केड रश",
  "gear.sound.musicStyle.kart": "कार्ट रैली",
  "gear.sound.musicStyle.galaxy": "तारों का वाल्ट्ज़",
  "gear.sound.musicStyle.hint": "शांत पियानो एक धीमी, आरामदायक धुन है। आर्केड रश तेज़ और चमकीला है। अगले बार पर बदलता है, राउंड के बीच में भी।",
  "gear.sound.musicVolume.label": "म्यूज़िक वॉल्यूम",
  "gear.sound.sfxVolume.label": "इफ़ेक्ट वॉल्यूम",
  "gear.sound.volume.label": "वॉल्यूम",
  "gear.sound.volume.aria": "मास्टर वॉल्यूम",
  "gear.sound.volume.hint": "इफ़ेक्ट और म्यूज़िक दोनों के लिए एक ही मास्टर वॉल्यूम।",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "ऑटो-सेल नियम",
  "gear.autosell.sectionAria": "ऑटो-सेल नियम",
  "gear.autosell.intro":
    "एक बार सेट करें और मेल खाने वाली हर जीत अपने आप वापस बिक जाएगी: कोई रखें/बेचें पॉप-अप नहीं आएगा। जो मेल नहीं खाता वह आज की तरह ही आपसे पूछता रहेगा।",
  "gear.autosell.everyWin.label": "हर जीत ऑटो-सेल करें",
  "gear.autosell.everyWin.hint":
    "हर जीता हुआ कार्ड मिलते ही बायबैक रेट पर कैश हो जाता है, कोई रखें-या-बेचें पॉप-अप नहीं आता। Grail कभी ऑटो-सेल नहीं होते। यह नीचे दिए चारों रैरिटी टॉगल एक साथ चालू करने का शॉर्टकट है।",
  "gear.autosell.belowValue.label": "इससे कम वैल्यू पर बेचें",
  "gear.autosell.placeholderOff": "बंद",
  "gear.autosell.rarity.label": "रैरिटी के हिसाब से बेचें",
  "gear.autosell.rarity.aria": "रैरिटी के हिसाब से ऑटो-सेल",
  "gear.autosell.rarity.hint":
    "CollectorCrypt रैरिटी बैंड, हर कार्ड जिस पैक मशीन से आया उससे लिए जाते हैं। एक बैंड की सटीक डॉलर रेंज हर पैक में बदल जाती है, इसलिए एक $200 का कार्ड एक मशीन में रेयर और महंगी मशीन में आम हो सकता है।",
  "gear.autosell.nonVintage.label": "नॉन-विंटेज कार्ड बेचें",
  "gear.autosell.belowGrade.label": "इससे कम ग्रेड पर बेचें",
  "gear.autosell.grader.label": "ग्रेडर के हिसाब से बेचें",
  "gear.autosell.grader.hint":
    "किसी ग्रेडर को चुनें और उसके सिर्फ़ आपके तय किए नंबर से कम ग्रेड वाले कार्ड ऑटो-सेल होंगे। किसी ग्रेडर की टिक हटाएं तो उसका हर कार्ड ऑटो-सेल होगा। सबकी टिक हटाएं तो आपकी हर जीत ऑटो-सेल होगी। हर ग्रेडर का स्केल अलग है, इसलिए हर सीमा अपने आप में अलग है।",
  "gear.autosell.grader.aria": "ग्रेडर के हिसाब से ऑटो-सेल",
  "gear.autosell.grader.keep": "रखें",
  "gear.autosell.grader.sellAll": "सब बेचें",
  "gear.autosell.grader.other": "अन्य / अनग्रेडेड",
  "gear.autosell.grader.placeholderKeepAll": "सब रखें",
  "gear.autosell.grader.placeholderSellAll": "सब बेचें",
  "gear.autosell.grader.ariaGradeSuffix": "इस ग्रेड से कम पर बेचें",
  "gear.autosell.summaryActive": "सक्रिय:",
  "gear.autosell.summaryNone": "अभी कोई ऑटो-सेल नियम सेट नहीं है। हर जीत पर आपसे रखें या बेचें पूछा जाएगा।",
  "gear.autosell.turnOffAll": "सब बंद करें",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "दांव हॉटकीज़",
  "gear.hotkeys.sectionAria": "दांव हॉटकीज़",
  "gear.hotkeys.intro":
    "किसी टाइल की की (key) दबाकर उस पर अपने मौजूदा दांव के बराबर दांव लगाएं। माउस की ज़रूरत नहीं। नीचे किसी की पर क्लिक करें, फिर वह की दबाएं जो आप चाहते हैं। दो टाइल एक की शेयर नहीं कर सकते, इसलिए दोबारा असाइन करने पर वह वहां शिफ़्ट हो जाती है। Esc कैंसल करता है, Backspace क्लियर करता है।",
  "gear.hotkeys.enabled.label": "नंबर-की से दांव",
  "gear.hotkeys.enabled.hintOn": "दांव लगने के दौरान कीज़ चालू रहती हैं। किसी टाइल की की दबाते ही दांव लग जाता है।",
  "gear.hotkeys.enabled.hintOff": "कीज़ बंद हैं। टाइल की की दबाने से कोई दांव नहीं लगता।",
  "gear.hotkeys.enabled.hintUnset": "अभी तय नहीं हुआ। यहां कीज़ चालू करें, या दांव लगने के दौरान किसी टाइल की की दबाकर Enable चुनें।",
  "gear.hotkeys.listAria": "टाइल दांव हॉटकीज़",
  "gear.hotkeys.tileLabel": "टाइल {n}",
  "gear.hotkeys.pressKeyPrompt": "एक की दबाएं…",
  "gear.hotkeys.setKey": "की सेट करें",
  "gear.hotkeys.clear": "क्लियर",
  "gear.hotkeys.ariaPressToBind": "टाइल {n} को बांधने के लिए एक की दबाएं",
  "gear.hotkeys.ariaShortcut": "टाइल {n} शॉर्टकट {key}। रीबाइंड करने के लिए क्लिक करें।",
  "gear.hotkeys.ariaNoShortcut": "टाइल {n} का कोई शॉर्टकट नहीं है। एक सेट करने के लिए क्लिक करें।",
  "gear.hotkeys.ariaClearShortcut": "टाइल {n} का शॉर्टकट हटाएं",
  "gear.hotkeys.unboundWarning": "{list} के लिए कोई की सेट नहीं है। जब तक आप एक सेट नहीं करते, इन टाइलों का कोई कीबोर्ड शॉर्टकट नहीं है।",
  "gear.hotkeys.resetButton": "डिफ़ॉल्ट पर रीसेट करें",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "attn ROYALE सेक्शन",
  "nav.board": "बोर्ड",
  "nav.results": "नतीजे",
  "nav.rankingsFull": "रैंकिंग",
  "nav.rankingsShort": "रैंक",
  "nav.collectionFull": "कलेक्शन",
  "nav.collectionShort": "कार्ड",
  "nav.profile": "प्रोफ़ाइल",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "बोर्ड",
  "mobileNav.results": "नतीजे",
  "mobileNav.ladder": "लैडर",
  "mobileNav.collection": "कलेक्शन",
  "mobileNav.profile": "प्रोफ़ाइल",
  "mobileNav.docs": "डॉक्स",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  "shell.route.aria": "attn ROYALE लैब",
  "shell.header.statusAria": "राउंड स्टेटस",
  "shell.header.collapse": "हेडर छिपाएं",
  "shell.header.expand": "हेडर दिखाएं",
  "shell.header.round": "राउंड #{n}",
  "shell.header.turboTitle": "तेज़ किया गया राउंड टाइमिंग",
  "shell.header.turboBadge": "टर्बो",
  "shell.metrics.aria": "राउंड सारांश",
  "shell.metrics.totalPool": "कुल पॉट",
  "shell.metrics.packsLive": "लाइव पैक",
  "shell.metrics.yourStake": "आपका दांव",
  "shell.metrics.selectedBet": "चुना गया दांव",
  "shell.board.aria": "attn ROYALE बोर्ड",
  "shell.board.label": "बोर्ड",
  "shell.board.phaseOpen": "किसी भी टाइल पर दांव लगाने के लिए क्लिक करें, दांव सबसे अच्छे पैक स्टैक में बदल जाता है",
  "shell.board.phaseLock": "लॉक्ड · पैक खुल रहे हैं",
  "shell.board.phaseSettled": "राउंड सेटल हो गया",
  "shell.board.metaOpen": "{pool} पॉट · 3% The Chase में जाता है · लॉक पर पैक खुलते हैं",
  "shell.board.metaClosed": "एक टाइल वेरिफायेबल वेटेड ऑड्स से पूरा पॉट जीतती है।",
  "shell.board.reopenReveal": "↗ रिवील फिर खोलें",
  "shell.connectNudge":
    "टाइल पर दांव लगाना शुरू करने के लिए गेम में आएं और जमा करें। राउंड बैकग्राउंड में चलते रहते हैं।",
  "shell.decision.cardFallback": "आपका कार्ड",
  "shell.mobile.close": "बंद करें",
  "shell.mobile.chat": "चैट",
  "shell.mobile.chatOpenAria": "टेबल चैट खोलें",
  "shell.mobile.chatCloseAria": "टेबल चैट बंद करें",
  "shell.mobile.cards": "कार्ड",
  "shell.mobile.cardsOpenAria": "बेचने या निकालने के लिए अपने कार्ड खोलें",
  "shell.mobile.cardsCloseAria": "अपने कार्ड बंद करें",
  "shell.mobile.players": "खिलाड़ी",
  "shell.mobile.playersOpenAria": "दांव के हिसाब से रैंक किए खिलाड़ी खोलें",
  "shell.mobile.playersCloseAria": "खिलाड़ी बंद करें",

  // --- Runtime modules (plain .ts, not components) -------------------------
  "runtime.rail.gameUsdc": "गेम USDC",
  "runtime.rail.privySessionCredit": "Privy सेशन क्रेडिट",
  "runtime.rail.houseCredit": "हाउस क्रेडिट",
  "runtime.rail.connectPrivy": "गेम USDC जोड़ने के लिए Privy कनेक्ट करें",
  "runtime.rail.privySession": "Privy सेशन",
  "runtime.rail.depositAction": "+{amount} {label} जोड़ें · {source}",
  "runtime.rail.privyAccount": "Privy अकाउंट",
  "runtime.rail.house": "हाउस",
  "runtime.rail.depositReceipt": "रसीद {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "{amount} दांव लगाने के लिए कोई भी पैक टैप करें। हर टाइल का अपना +{low} / +{high} भी बना रहता है।",
  "runtime.rail.sellBack": "वापस बेचें → बैलेंस +{amount}",

  "runtime.recap.you": "आप",
  "runtime.recap.topBacker": "टॉप बैकर",
  "runtime.recap.topCardOutcome": "टॉप कार्ड · रखें/बेचें फ़ैसला",
  "runtime.recap.backer": "बैकर",
  "runtime.recap.cardWon": "कार्ड जीता",
  "runtime.recap.chaseLootReleased": "Chase लूट रिलीज़ हुई",
  "runtime.recap.theChase": "The Chase",
  "runtime.recap.sweptIntoVault": "वॉल्ट में चली गई",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "प्रोटोकॉल फ़ीस",
  "runtime.recap.soldBack": "वापस बेचा गया",
  "runtime.recap.intoSplit": "+{amount} स्प्लिट में",

  "runtime.xProfile.connectUnavailable": "X कनेक्शन अभी उपलब्ध नहीं है।",
  "runtime.xProfile.connected": "कनेक्टेड",

  "runtime.sellBack.unknownCard": "अज्ञात कार्ड",

  "runtime.winShare.headlineWon": "जीता",
  "runtime.winShare.headlineGrailPull": "GRAIL हिट",
  "runtime.winShare.headlineCardsWon": "जीते गए कार्ड",
  "runtime.winShare.cardInImage": "कार्ड इमेज में है।",
  "runtime.winShare.receiptInImage": "रसीद इमेज में है।",

  "runtime.serverWallet.withdrawalsOffline": "निकासी अभी ऑफ़लाइन है। कोई पैसा नहीं हिला।",
  "runtime.serverWallet.noSigner": "इस सेशन के लिए कोई वॉलेट सिग्नर कनेक्ट नहीं है। कोई पैसा नहीं हिला।",
  "runtime.serverWallet.nonceUnavailable": "सर्वर से निकासी मनी-ऑथ नॉन्स नहीं मिल सका।",
  "runtime.serverWallet.signatureUnavailable": "वॉलेट ने निकासी नॉन्स पर सिग्नेचर नहीं भेजा।",
  "runtime.serverWallet.boundaryLabel": "टेबल क्रेडिट और सर्वर वॉलेट USDC अलग-अलग बैलेंस हैं।",

  "runtime.video.noScreenCapture": "इस ब्राउज़र में स्क्रीन कैप्चर उपलब्ध नहीं है।",
  "runtime.video.noRecorderFormat": "इस ब्राउज़र में कोई MediaRecorder वीडियो फ़ॉर्मेट नहीं है।",
  "runtime.video.canceled": "रेंडर कैंसल हुआ।",
  "runtime.video.unreachable": "{url} पर रेंडर सर्विस तक नहीं पहुंचा जा सका।",
  "runtime.video.rejected": "रेंडर सर्विस ने इस राउंड को अस्वीकार कर दिया: {detail}",
  "runtime.video.requestFailed": "रेंडर रिक्वेस्ट फ़ेल हो गई ({status})।",
  "runtime.video.noJobId": "रेंडर सर्विस ने कोई जॉब आईडी नहीं भेजी।",
  "runtime.video.lostJob": "रेंडर जॉब खो गई ({status})।",
  "runtime.video.lostContact": "रेंडर के बीच में रेंडर सर्विस से संपर्क टूट गया।",
  "runtime.video.renderFailed": "रेंडर फ़ेल हुआ: {error}।",
  "runtime.video.unknownError": "अज्ञात एरर",
  "runtime.video.downloadFailed": "वीडियो बन गया लेकिन डाउनलोड नहीं हो सका।",
  "runtime.video.downloadHttpFailed": "वीडियो बन गया लेकिन डाउनलोड फ़ेल हो गया ({status})।",
  "runtime.video.emptyVideo": "रेंडर सर्विस ने एक खाली वीडियो भेजी।",
  "runtime.video.shareTagline": "पैक बैटल, हर ड्रॉ वेरिफायेबल। राउंड देखें:",

  "runtime.game.roomLive": "रूम लाइव है। राउंड अपने आप शुरू होते हैं - {seconds} सेकंड खुला रहता है, फिर रिवील।",
  "runtime.game.chaseVault": "The Chase वॉल्ट",
  "runtime.game.aTile": "एक टाइल",
  "runtime.game.aPack": "एक पैक",
  "runtime.game.theCard": "यह कार्ड",
  "runtime.game.collectedSplit": "राउंड {round} · स्प्लिट से {amount} USDC मिला।",
  "runtime.game.chaseDropSplit": "राउंड {round} · The Chase ने आपकी टाइल पर {award} गिराया · आपका हिस्सा: {amount} USDC।",
  "runtime.game.grailSecured": "Grail पक्का: {card} ({amount}) आपके कलेक्शन में रखा गया।",
  "runtime.game.keptCard": "{card} ({amount}) रखा गया → आपके कलेक्शन में जोड़ा गया।",
  "runtime.game.soldCardSettle": "{card} को {amount} USDC ({value} का {pct}%) में वापस बेचा गया।",
  "runtime.game.roundVoidedRefund":
    "राउंड {round} रद्द हुआ। कोई पैक नहीं खुला, इसलिए कोई कार्ड-वैल्यू ड्रॉ नहीं हुआ। आपका {amount} दांव वापस कर दिया गया।",
  "runtime.game.roundVoidedAll":
    "राउंड {round} रद्द हुआ। कोई पैक नहीं खुला, इसलिए कोई कार्ड-वैल्यू ड्रॉ नहीं हुआ। सभी दांव वापस कर दिए गए।",
  "runtime.game.chaseFiredYours.one": "The Chase चला: {n} कार्ड ({amount}) आपकी टाइल {tile} पर रिलीज़ हुआ।",
  "runtime.game.chaseFiredYours.other": "The Chase चला: {n} कार्ड ({amount}) आपकी टाइल {tile} पर रिलीज़ हुए।",
  "runtime.game.chaseFiredTable.one":
    "राउंड {round} पर The Chase चला: {award} + {n} कार्ड {tile} पर गिरा, इसके बैकर्स में बंटा।",
  "runtime.game.chaseFiredTable.other":
    "राउंड {round} पर The Chase चला: {award} + {n} कार्ड {tile} पर गिरे, इसके बैकर्स में बंटे।",
  "runtime.game.cardsAssigned.one": "{n} कार्ड आपको मिला ({amount}) → कलेक्शन।",
  "runtime.game.cardsAssigned.other": "{n} कार्ड आपको मिले ({amount}) → कलेक्शन।",
  "runtime.game.cardPoolsLive": "कार्ड पूल लाइव: {pools} CollectorCrypt मशीन पूल में {cards} कार्ड।",
  "runtime.game.minBid": "न्यूनतम दांव {amount} है। दांव बढ़ाकर फिर कोशिश करें।",
  "runtime.game.resolveFailed": "यह राउंड पूरा नहीं हो सका, इसलिए कोई निपटान नहीं हुआ। अगला राउंड सामान्य रूप से शुरू होगा।",
  "runtime.game.stakeRefused": "यह दांव {tile} के लिए बहुत बड़ा है। कोई राशि नहीं ली गई। इसे घटाकर फिर कोशिश करें।",
  "runtime.game.shortfallBack":
    "{tile} पर {amount} का दांव लगाने के लिए USDC कम है। आपके पास {held} है। जारी रखने के लिए फंड जोड़ें।",
  "runtime.game.shortfallNextPack":
    "{tile} पर अगला पैक पूरा करने के लिए USDC कम है। {amount} चाहिए, आपके पास {held} है। जारी रखने के लिए फंड जोड़ें।",
  "runtime.game.youBacked": "आपने {tile} पर {amount} का दांव लगाया।",
  "runtime.game.packCompleted": "आपने {tile} पर अगला पैक पूरा किया (+{amount}) → {tier}।",
  "runtime.game.soldToFundBid": "दांव लगाने के लिए {cards} को {amount} USDC (CC बायबैक) में बेचा गया।",
  "runtime.game.backedFunded": "{tile} पर {amount} का दांव लगाया गया (इन्वेंट्री से फंडेड)।",
  "runtime.game.demoStakesRefunded":
    "डेमो दांव साफ़ हुए: आपने जो {amount} क्लिक किया था वह वापस कर दिया गया। आप $0 से शुरू करते हैं।",
  "runtime.game.demoStakesCleared": "डेमो दांव साफ़ हुए: जब तक आप किसी टाइल पर दांव नहीं लगाते, हर राउंड $0 से शुरू होता है।",
  "runtime.game.deposited": "आपके वॉलेट में {amount} USDC जमा हुआ।",
  "runtime.game.referralBonus": "रेफरल बोनस क्रेडिट हुआ: +{amount} USDC।",
  "runtime.game.signedAndSent": "{cluster} पर {amount} USDC साइन करके भेजा गया · सिग {sig}….",
  "runtime.game.signedNoBroadcast":
    "{cluster} पर {amount} USDC साइन किया गया ({method}, चेन पर ब्रॉडकास्ट नहीं) · सिग {sig}….",
  "runtime.game.soldCard": "{card} को {amount} USDC ({pct}% बायबैक) में बेचा गया।",
} as Record<string, string>;
