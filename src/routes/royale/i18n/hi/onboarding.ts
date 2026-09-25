// Hindi (हिन्दी): "onboarding" segment translation. Same house terms as
// core.ts's glossary block. The "attn ROYALE" wordmark itself is never
// translated anywhere (hardcoded English in the component, even inside an
// otherwise-Hindi sentence: onboarding.rotate.ariaLabel, onboarding.tour.ariaLabel).
// "Starter" (the pack tier name) is a brand term and also stays English
// inside onboarding.invite.ledeStarter / onboarding.welcome.ledeStarter.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "इनवाइट",
  "onboarding.invite.title": "सिर्फ़ इनवाइट पर",
  "onboarding.invite.ledeStake": "attn ROYALE अभी सिर्फ़ इनवाइट पर है। {amount} का दांव पाने और सीट लेने के लिए अपना कोड डालें।",
  "onboarding.invite.ledeStarter": "attn ROYALE अभी सिर्फ़ इनवाइट पर है। मुफ़्त {amount} का Starter पैक पाने और सीट लेने के लिए अपना कोड डालें।",
  "onboarding.invite.inputPlaceholder": "इनवाइट कोड",
  "onboarding.invite.inputAriaLabel": "इनवाइट कोड",
  "onboarding.invite.unlockButton": "अनलॉक करें",
  "onboarding.invite.hint": "अभी कोड नहीं है? जिसने आपको इनवाइट किया उससे पूछें, या अपना {link} लिंक पेस्ट करें।",
  "onboarding.invite.errorInvalidCode": "अपने इनविटेशन वाला इनवाइट कोड डालें।",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "क्रेडिट",
  "onboarding.welcome.grantLabelStarterPack": "स्टार्टर पैक",
  "onboarding.welcome.titleBack": "वापसी पर स्वागत है",
  "onboarding.welcome.title": "टेबल पर स्वागत है",
  "onboarding.welcome.backLede": "{name}, जहां छोड़ा था वहीं से शुरू करें। आपकी प्रोफ़ाइल और बैलेंस इस डिवाइस पर सेव हैं।",
  "onboarding.welcome.fallbackName": "खिलाड़ी",
  "onboarding.welcome.ledeStake": "आपका इनवाइट {amount} के दांव के लिए मान्य है। नाम सेट करें और अपनी सीट लें।",
  "onboarding.welcome.ledeStarter": "आपका इनवाइट मुफ़्त {amount} के Starter पैक के लिए मान्य है। पैक पर दांव लगाएं और अपनी सीट लें।",
  "onboarding.welcome.continueWithX": "X से जारी रखें",
  "onboarding.welcome.optionalHint": "वैकल्पिक",
  "onboarding.welcome.connectWallet": "वॉलेट कनेक्ट करें",
  "onboarding.welcome.playFreeNote": "अभी मुफ़्त खेलें। किसी वॉलेट या साइन-इन की ज़रूरत नहीं।",
  "onboarding.welcome.or": "या",
  "onboarding.welcome.continueAsTemplate": "{name} के रूप में जारी रखें",
  "onboarding.welcome.fallbackProfileName": "आपकी प्रोफ़ाइल",
  "onboarding.welcome.close": "बंद करें",
  "onboarding.welcome.createProfile": "अपनी प्रोफ़ाइल बनाएं",
  "onboarding.welcome.skipGuest": "छोड़ें और गेस्ट के रूप में खेलें",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "अभी खेलें",
  "onboarding.welcome.pickNameFirst": "या पहले नाम चुनें",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "अपनी प्रोफ़ाइल सेट करें",
  "onboarding.profile.xPhotoAlt": "आपकी X प्रोफ़ाइल फ़ोटो",
  "onboarding.profile.connectedAsTemplate": "{handle} के रूप में कनेक्टेड",
  "onboarding.profile.xAccountFallback": "X अकाउंट",
  "onboarding.profile.walletLabelTemplate": "वॉलेट {address}",
  "onboarding.profile.displayNameLabel": "डिस्प्ले नाम",
  "onboarding.profile.displayNamePlaceholder": "आपको क्या कहकर बुलाएं?",
  "onboarding.profile.handleLabel": "हैंडल",
  "onboarding.profile.handlePlaceholder": "yourname",
  "onboarding.profile.handleHint": "आपकी अनोखी टेबल आईडी। सिर्फ़ अक्षर, नंबर और अंडरस्कोर।",
  "onboarding.profile.handleTaken": "यह हैंडल इस डिवाइस पर पहले से इस्तेमाल हो रहा है।",
  "onboarding.profile.startButtonTemplate": "खेलना शुरू करें · {amount} हाउस की तरफ़ से",
  "onboarding.profile.back": "वापस",
  "onboarding.profile.skip": "छोड़ें",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "attn ROYALE कैसे काम करता है",
  "onboarding.tour.skip": "छोड़ें",
  "onboarding.tour.step1.eyebrow": "01 · टाइल पर दांव लगाएं",
  "onboarding.tour.step1.titleUsdc": "पसंदीदा टाइलों पर USDC लगाएं",
  "onboarding.tour.step1.titlePacks": "पसंदीदा टाइलों पर पैक से दांव लगाएं",
  "onboarding.tour.step1.bodyUsdc": "हर टाइल एक स्लॉट है जिस पर आप USDC से दांव लगाते हैं। किसी टाइल पर जितना ज़्यादा लगाएंगे, उसकी जीत में आपका हिस्सा उतना बड़ा होगा। एक पर लगाएं, या कई में बांट दें।",
  "onboarding.tour.step1.bodyPacks": "हर टाइल एक स्लॉट है जिस पर आप पैक से दांव लगाते हैं। किसी टाइल पर जितना ज़्यादा स्टैक करेंगे, उसकी जीत में आपका हिस्सा उतना बड़ा होगा। एक पर लोड करें, या कई में बांट दें।",
  "onboarding.tour.step2.eyebrow": "02 · लॉक और रिप",
  "onboarding.tour.step2.title": "लॉक पर, हर टाइल अपने पैक फाड़ती है",
  "onboarding.tour.step2.body": "जब राउंड लॉक होता है, हर बैक्ड टाइल अपने पैक खोलती है और असली ग्रेडेड कार्ड लाइव निकालती है, एक वेरिफायेबल ड्रॉ पर, आपके सामने।",
  "onboarding.tour.step3.eyebrow": "03 · सबसे अच्छी वैल्यू जीतती है",
  "onboarding.tour.step3.title": "सबसे भारी टाइल पूरा पॉट ले जाती है",
  "onboarding.tour.step3.bodyUsdc": "हर टाइल का वज़न उसके निकले कार्ड की वैल्यू प्लस उसके USDC से बनता है। टाइल जितनी भारी, ऑड्स उतने अच्छे। जीतें, और आप पूरे राउंड का पॉट बांट लेते हैं।",
  "onboarding.tour.step3.bodyPacks": "हर टाइल का वज़न उसके निकले कार्ड की वैल्यू प्लस उस पर लगे पैक से बनता है। टाइल जितनी भारी, ऑड्स उतने अच्छे। जीतें, और आप पूरे राउंड का पॉट बांट लेते हैं।",
  "onboarding.tour.step4.eyebrow": "04 · रखें, बेचें, Chase",
  "onboarding.tour.step4.title": "कैश आउट करें, और Chase देखें",
  "onboarding.tour.step4.body": "अपने जीते कार्ड ग्रेडेड स्लैब के रूप में रखें या उनके बायबैक रेट पर वापस बेच दें। और The Chase एक चलता हुआ जैकपॉट है जो किसी भी टाइल पर, किसी भी राउंड में गिर सकता है।",
  "onboarding.tour.back": "वापस",
  "onboarding.tour.next": "आगे",
  "onboarding.tour.enterBoard": "बोर्ड में उतरें",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour --------------------
  "onboarding.tour.stepTag": "स्टेप {n} / {total}",
  "onboarding.tour.spot1.eyebrow": "आपका दांव",
  "onboarding.tour.spot1.title": "अपना पैक चुनें",
  "onboarding.tour.spot1.body": "पैक से आप दांव लगाते हैं। हर एक graded TCG cards वाला सील्ड पैक है, जिसे Collector Crypt पावर करता है। खेलने वाला पैक चुनें।",
  "onboarding.tour.spot2.eyebrow": "स्टैक साइज़",
  "onboarding.tour.spot2.title": "कितने चुनें",
  "onboarding.tour.spot2.body": "यह काउंटर तय करता है कि हर दांव में कितने पैक लगेंगे। शुरुआत के लिए एक काफ़ी है। बड़ा दांव लगाना चाहें तो इसे बढ़ाएं।",
  "onboarding.tour.spot3.eyebrow": "अपना दांव लगाएं",
  "onboarding.tour.spot3.title": "दांव लगाने के लिए टाइल पर क्लिक करें",
  "onboarding.tour.spot3.titleTouch": "दांव लगाने के लिए टाइल पर टैप करें",
  "onboarding.tour.spot3.body": "किसी टाइल पर क्लिक करने से आपके पैक उस पर लग जाते हैं। किसी टाइल पर जितने ज़्यादा पैक स्टैक करेंगे, जीतने पर आपका हिस्सा उतना बड़ा होगा। एक पर पूरा दांव लगाएं या कई में बांट दें।",
  "onboarding.tour.spot3.bodyTouch": "टाइल को लाइन-अप करने के लिए एक बार टैप करें, फिर दांव पक्का करने के लिए दोबारा टैप करें। किसी टाइल पर जितने ज़्यादा पैक स्टैक करेंगे, जीतने पर आपका हिस्सा उतना बड़ा होगा।",
  "onboarding.tour.spot4.eyebrow": "राउंड",
  "onboarding.tour.spot4.title": "पॉट और क्लॉक",
  "onboarding.tour.spot4.body": "बोर्ड पर लगा हर पैक इस पॉट में जुड़ता है। जब क्लॉक ज़ीरो पर पहुंचता है, दांव लॉक हो जाते हैं और हर बैक्ड टाइल अपने पैक लाइव फाड़ती है।",
  "onboarding.tour.spot5.eyebrow": "ड्रॉ",
  "onboarding.tour.spot5.title": "भारी टाइलें ज़्यादा बार जीतती हैं",
  "onboarding.tour.spot5.body": "वैल्यू के हिसाब से वेटेड एक रैंडम ड्रॉ एक टाइल चुनता है। हारने वाली टाइलें अपने कार्ड और स्टेक छोड़ देती हैं; जीतने वाली टाइल के बैकर्स राउंड की बांटी जा सकने वाली वैल्यू को अपने लगाए हुए हिस्से के अनुपात में बांटते हैं।",
  "onboarding.tour.spot6.eyebrow": "आपका पैसा",
  "onboarding.tour.spot6.title": "बैलेंस और डिपॉज़िट",
  "onboarding.tour.spot6.body": "आपका बैलेंस यहां रहता है। Deposit से फंड जोड़ें और जब चाहें निकाल लें। राउंड सेटल होते ही जीत यहां आ जाती है।",
  "onboarding.tour.spot7.eyebrow": "हाउस की तरफ़ से",
  "onboarding.tour.spot7.title": "आपका मुफ़्त {amount} का Starter पैक",
  "onboarding.tour.spot7.body": "आप मुफ़्त {amount} के Starter पैक से शुरू करते हैं। यह पहले से ही पिकर में लोड है। पसंदीदा टाइल चुनें और शुरू करें।",
  "onboarding.tour.finish": "खेलना शुरू करें",
 "onboarding.tour.paused": "राउंड शुरू हो रहा है - हम इसके तुरंत बाद जारी रखेंगे।",
  "onboarding.tour.act2.choice": "एक राउंड को चलते देखें",
  "onboarding.tour.act2.choiceHint": "करीब 30 सेकंड, रिवील समेत",
  "onboarding.tour.act2.bettingTitle": "हर लगाया गया पैक एक ही पॉट बनाता है",
  "onboarding.tour.act2.bettingBody": "खिलाड़ी टाइलों पर पैक जमा करते हैं। बोर्ड का हर पैक एक ही पॉट में जाता है, और एक टाइल पूरा पॉट ले जाती है।",
  "onboarding.tour.act2.drawTitle": "वैल्यू ही ऑड्स बन जाती है",
  "onboarding.tour.act2.drawBody": "सभी निकले कार्ड की वैल्यू में हर टाइल का हिस्सा ही उसका चांस है। एक वेरिफ़ाई होने वाला, वैल्यू-वेटेड रैंडम ड्रॉ विजेता चुनता है।",
  "onboarding.tour.act2.losersTitle": "हारने वाली हर टाइल अपने कार्ड छोड़ देती है",
  "onboarding.tour.act2.losersBody": "पूरे बोर्ड के बांटे जा सकने वाले कार्ड और कैश जीतने वाली टाइल के बैकर्स को मिलते हैं।",
  "onboarding.tour.act2.splitTitle": "आपकी स्टेक आपका हिस्सा तय करती है",
  "onboarding.tour.act2.splitBody": "जीतने वाली टाइल के बैकर्स पूरे बोर्ड की बांटी जा सकने वाली कैश और कार्ड उस टाइल में हर किसी के लगाए हिस्से के अनुपात में बांटते हैं।",
  "onboarding.tour.act2.grailCaption": "Grail समारोह",
  "onboarding.tour.act2.yourTurnEyebrow": "आपकी बारी",
  "onboarding.tour.act2.yourTurnTitle": "आपका Starter pack तैयार है",
  "onboarding.tour.act2.yourTurnBody": "बोर्ड फिर से लाइव है। एक टाइल चुनें और अपना पहला pack bet लगाएं।",
  "onboarding.tour.act2.continue": "राउंड में जाएं",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "attn ROYALE खेलने के लिए अपना फ़ोन घुमाएं",
  "onboarding.rotate.title": "अपना फ़ोन बगल में घुमाएं",
  "onboarding.rotate.body": "बोर्ड लैंडस्केप में सबसे अच्छा चलता है। राउंड में उतरने के लिए घुमाएं।",

  // --- RoyaleSettingsOverlay.tsx chrome ------------------------------------
  "onboarding.settingsTitle": "सेटिंग्स",
  "onboarding.settingsClose": "सेटिंग्स बंद करें",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  "onboarding.profileValidation.handleRequired": "दूसरे खिलाड़ी आपको ढूंढ सकें, इसके लिए हैंडल चुनें।",
  "onboarding.profileValidation.handleTooShort": "हैंडल कम से कम 3 अक्षर का होना चाहिए।",
  "onboarding.profileValidation.handleCharset": "सिर्फ़ अक्षर, नंबर और अंडरस्कोर इस्तेमाल करें।",
  "onboarding.profileValidation.nameRequired": "टेबल पर दिखाने के लिए एक नाम जोड़ें।",
  "onboarding.profileValidation.nameTooLong": "इसे {n} अक्षरों से कम रखें।",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  "onboarding.presence.tierWatching": "देख रहे हैं",
  "onboarding.presence.tierPlaying": "खेल रहे हैं",
  "onboarding.presence.youPlaying": "आप खेल रहे हैं: इस राउंड में {amount} का दांव लगा है",
  "onboarding.presence.youWatching": "आप देख रहे हैं",
  "onboarding.presence.youWatchingBackground": "आप देख रहे हैं (बैकग्राउंड टैब)",
  "onboarding.presence.ariaLabel": "अभी {count} लोग attn ROYALE {tier} हैं। {you}।",
  "onboarding.presence.popYou": "आप: {status}",
  "onboarding.presence.otherTabs.one": "आपका +{n} और टैब खुला है",
  "onboarding.presence.otherTabs.other": "आपके +{n} और टैब खुले हैं",
  "onboarding.presence.othersBacking.one": "इस राउंड में {n} और खिलाड़ी टाइल पर दांव लगा रहा है",
  "onboarding.presence.othersBacking.other": "इस राउंड में {n} और खिलाड़ी टाइल पर दांव लगा रहे हैं",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALE स्ट्रीम हेल्थ",
  "onboarding.streamHud.eyebrow": "स्ट्रीम",
  "onboarding.streamHud.statusConnecting": "कनेक्ट हो रहा है",
  "onboarding.streamHud.statusLive": "लाइव",
  "onboarding.streamHud.statusReconnecting": "फिर से कनेक्ट हो रहा है",
  "onboarding.streamHud.statusError": "सिंक इशू",
  "onboarding.streamHud.reconnects.one": "{n} रीकनेक्ट",
  "onboarding.streamHud.reconnects.other": "{n} रीकनेक्ट",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "यह रूम USDC में सेटल होता है।",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "खुले कार्ड",
  "onboarding.carousel.prevCard": "पिछला कार्ड",
  "onboarding.carousel.nextCard": "अगला कार्ड",
  "onboarding.carousel.showCard": "{name} दिखाएं",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDC पर्याप्त नहीं है",
  "onboarding.fundShortfall.detail": "{slot} पर दांव लगाने के लिए {needed} चाहिए। आपके पास {balance} है।",
  "onboarding.fundShortfall.addFunds": "फंड जोड़ें",
  "onboarding.fundShortfall.dismiss": "खारिज करें",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "असली फुलस्क्रीन के लिए {icon} टैप करें फिर Add to Home Screen चुनें।",
  "onboarding.installHint.fullscreen": "फुलस्क्रीन में जाएं और ब्राउज़र बार छुपाएं।",
  "onboarding.installHint.fullscreenCta": "फुलस्क्रीन में जाएं",
  "onboarding.installHint.dismiss": "खारिज करें",
} as Record<string, string>;
