// Arabic (العربية): "onboarding" segment. Same key set as en/onboarding.ts; the
// component group comments below are retained for side-by-side review.
//
// REGISTER: Modern Standard Arabic (فصحى), neutral-formal. The full house-terms
// glossary, pack loanword rule (باك/باكات), brand-term decisions, plural
// compromise, digit/currency rules, and bidi restrictions are fixed in ar/core.ts
// and apply unchanged to this segment.
//
// QUALITY: machine-assisted single-pass translation (codex worker, 2026-07-31),
// glossary-enforced; flagged for native-speaker review.
// QUALITY PASS 2 (2026-08-01): full re-read against en; homonym/calque/MT-artifact fixes.
//
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "دعوة",
  "onboarding.invite.title": "دعوة فقط",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "attn ROYALE متاح بالدعوة فقط حاليًا. أدخل رمزك للمطالبة برهان قدره {amount} والجلوس إلى الطاولة.",
  "onboarding.invite.ledeStarter": "attn ROYALE متاح بالدعوة فقط حاليًا. أدخل رمزك للمطالبة بباك Starter مجاني بقيمة {amount} والجلوس إلى الطاولة.",
  "onboarding.invite.inputPlaceholder": "رمز الدعوة",
  "onboarding.invite.inputAriaLabel": "رمز الدعوة",
  "onboarding.invite.unlockButton": "فتح",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "لا يوجد رمز حتى الآن؟ اسأل الشخص الذي دعاك، أو الصق رابط {link} الخاص بك.",
  "onboarding.invite.errorInvalidCode": "أدخل رمز الدعوة الوارد في دعوتك.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "ائتمان",
  "onboarding.welcome.grantLabelStarterPack": "باك Starter",
  "onboarding.welcome.titleBack": "مرحبًا بعودتك",
  "onboarding.welcome.title": "مرحبًا بك إلى الطاولة",
  "onboarding.welcome.backLede": "تابع من حيث توقفت، {name}. يتم حفظ ملفك الشخصي ورصيدك على هذا الجهاز.",
  "onboarding.welcome.fallbackName": "لاعب",
  "onboarding.welcome.ledeStake": "تمنحك دعوتك رهانًا بقيمة {amount}. اختر اسمًا واجلس إلى الطاولة.",
  "onboarding.welcome.ledeStarter": "تمنحك دعوتك باك Starter مجانيًا بقيمة {amount}. راهن بالباكات واجلس إلى الطاولة.",
  "onboarding.welcome.continueWithX": "المتابعة باستخدام X",
  "onboarding.welcome.optionalHint": "اختياري",
  "onboarding.welcome.connectWallet": "صِل محفظة",
  "onboarding.welcome.playFreeNote": "العب مجانًا الآن. لا حاجة إلى محفظة أو تسجيل دخول.",
  "onboarding.welcome.or": "أو",
  "onboarding.welcome.continueAsTemplate": "المتابعة باسم {name}",
  "onboarding.welcome.fallbackProfileName": "ملفك الشخصي",
  "onboarding.welcome.close": "إغلاق",
  "onboarding.welcome.createProfile": "أنشئ ملفك الشخصي",
  "onboarding.welcome.skipGuest": "تخطَّ والعب كضيف",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "العب الآن",
  "onboarding.welcome.pickNameFirst": "أو اختر اسمًا أولًا",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "إعداد ملفك الشخصي",
  "onboarding.profile.xPhotoAlt": "صورة ملفك الشخصي على X",
  "onboarding.profile.connectedAsTemplate": "متصل باسم {handle}",
  "onboarding.profile.xAccountFallback": "حساب X",
  "onboarding.profile.walletLabelTemplate": "المحفظة {address}",
  "onboarding.profile.displayNameLabel": "اسم العرض",
  "onboarding.profile.displayNamePlaceholder": "بأي اسم نناديك؟",
  "onboarding.profile.handleLabel": "المعرّف",
  "onboarding.profile.handlePlaceholder": "اسمك",
  "onboarding.profile.handleHint": "معرف الجدول الفريد الخاص بك. الحروف والأرقام والشرطات السفلية.",
  "onboarding.profile.handleTaken": "هذا المعرّف مستخدم بالفعل على هذا الجهاز.",
  "onboarding.profile.startButtonTemplate": "ابدأ اللعب · {amount} من البيت",
  "onboarding.profile.back": "رجوع",
  "onboarding.profile.skip": "تخطٍّ",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "كيف يعمل attn ROYALE",
  "onboarding.tour.skip": "تخطٍّ",
  "onboarding.tour.step1.eyebrow": "01 · ادعم خانة",
  "onboarding.tour.step1.titleUsdc": "ضع USDC على الخانات التي تفضّلها",
  "onboarding.tour.step1.titlePacks": "ادعم الخانات التي تفضّلها بالباكات",
  "onboarding.tour.step1.bodyUsdc": "كل خانة مساحة تدعمها بـ USDC. كلما زاد ما تضعه في خانة، كبرت حصتك من أرباحها. ركّز على واحدة أو وزّع رهانك على عدة خانات.",
  "onboarding.tour.step1.bodyPacks": "كل خانة مساحة تدعمها بالباكات. كلما زادت الباكات في خانة، كبرت حصتك من أرباحها. ركّز على واحدة أو وزّعها على عدة خانات.",
  "onboarding.tour.step2.eyebrow": "02 · القفل والفتح",
  "onboarding.tour.step2.title": "عند القفل، تفتح كل خانة باكاتها",
  "onboarding.tour.step2.body": "عند قفل الجولة، تفتح كل خانة مدعومة باكاتها وتسحب بطاقات مُقيّمة حقيقية مباشرة، في قرعة قابلة للتحقق، أمامك.",
  "onboarding.tour.step3.eyebrow": "03 · الفوز بالقيمة الأفضل",
  "onboarding.tour.step3.title": "تأخذ الخانة الأغنى المجمّع",
  "onboarding.tour.step3.bodyUsdc": "وزن كل خانة هو قيمة بطاقتها المسحوبة مضافًا إليه رصيد USDC فيها. كلما زاد وزن الخانة، تحسّنت احتمالاتها. إذا فزت، تتقاسم مجمّع الجولة كاملًا.",
  "onboarding.tour.step3.bodyPacks": "وزن كل خانة هو قيمة بطاقتها المسحوبة مضافًا إليها الباكات المراهن عليها. كلما زاد وزن الخانة، تحسّنت احتمالاتها. إذا فزت، تتقاسم مجمّع الجولة كاملًا.",
  "onboarding.tour.step4.eyebrow": "04 · الاحتفاظ، البيع، المطاردة",
  "onboarding.tour.step4.title": "حوّل مكسبك إلى رصيد وراقب المطاردة",
  "onboarding.tour.step4.body": "احتفظ ببطاقاتك الفائزة كبطاقات مُقيّمة أو أعد بيعها بسعر إعادة الشراء. والمطاردة جائزة كبرى متراكمة قد تسقط على أي خانة وفي أي جولة.",
  "onboarding.tour.back": "رجوع",
  "onboarding.tour.next": "التالي",
  "onboarding.tour.enterBoard": "دخول إلى اللوحة",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour (owner 2026-07-31:
  // "highlight the sections, darken the others that arent being introduced,
  // and show the items with an arrow and a description"). Seven coach-mark
  // steps anchored to the LIVE board. The v1 step1-step4 keys above stay
  // (append-only contract) but are no longer rendered. {amount} in spot7 is
  // the free Starter grant (FREE_PLAY_STARTING_USD, currency-formatted by the
  // component). spot3 ships touch variants: the component picks *Touch on
  // coarse pointers, where betting is tap-to-arm then tap-to-confirm.
  // PACKS framing only (owner: "its not chip usdc for now ... its bet packs");
  // a USDC-live pass would add Usdc variants like the v1 keys had.
  "onboarding.tour.stepTag": "الخطوة {n} من {total}",
  "onboarding.tour.spot1.eyebrow": "رهانك",
  "onboarding.tour.spot1.title": "اختر باكك",
  "onboarding.tour.spot1.body": "تراهن بالباكات. كل واحد باك مختوم من بطاقات TCG مُصنّفة، ومدعوم من Collector Crypt. اختر الباك الذي تريد اللعب به.",
  "onboarding.tour.spot2.eyebrow": "حجم المكدس",
  "onboarding.tour.spot2.title": "اختر العدد",
  "onboarding.tour.spot2.body": "يحدد هذا العداد عدد الباكات التي يضعها كل رهان. يكفي باك واحد للبدء. ارفع العدد عندما تريد رهانًا أكبر.",
  "onboarding.tour.spot3.eyebrow": "ضع رهانك",
  "onboarding.tour.spot3.title": "انقر على خانة للمراهنة عليها",
  "onboarding.tour.spot3.titleTouch": "اضغط على خانة للمراهنة عليها",
  "onboarding.tour.spot3.body": "عند النقر على خانة توضع باكاتك عليها. كلما زادت الباكات التي تراهن بها على خانة، كبرت حصتك إذا فازت. ركّز على واحدة أو وزّعها على عدة خانات.",
  "onboarding.tour.spot3.bodyTouch": "اضغط على الخانة مرةً لترتيبها، ثم اضغط عليها ثانيةً لتأكيد الرهان. كلما زادت الباكات التي تراهن بها على خانة، كبرت حصتك إذا فازت.",
  "onboarding.tour.spot4.eyebrow": "الجولة",
  "onboarding.tour.spot4.title": "المجمّع والساعة",
  "onboarding.tour.spot4.body": "يغذّي كل رهان بباك على اللوحة هذا المجمّع. عندما تصل الساعة إلى الصفر، تُقفل المراهنة وتفتح كل خانة مدعومة باكاتها مباشرة.",
  "onboarding.tour.spot5.eyebrow": "القرعة",
  "onboarding.tour.spot5.title": "الخانات الأثقل تفوز أكثر",
  "onboarding.tour.spot5.body": "يختار سحب عشوائي مرجّح بالقيمة خانة واحدة. تتنازل الخانات الخاسرة عن بطاقاتها ورهاناتها، ويتقاسم داعمو الخانة الفائزة قيمة الجولة القابلة للتوزيع بالتناسب مع مساهمة كل منهم.",
  "onboarding.tour.spot6.eyebrow": "أموالك",
  "onboarding.tour.spot6.title": "الرصيد والودائع",
  "onboarding.tour.spot6.body": "رصيدك موجود هنا. أضف أموالًا عبر الإيداع واسحب متى شئت. تصل المكاسب إلى هنا لحظة تسوية الجولة.",
  "onboarding.tour.spot7.eyebrow": "على البيت",
  "onboarding.tour.spot7.title": "باك Starter المجاني بقيمة {amount}",
  "onboarding.tour.spot7.body": "تبدأ بباك Starter مجاني بقيمة {amount}. لقد حُمّل بالفعل في أداة الاختيار. اختر خانة تفضّلها وانطلق.",
  "onboarding.tour.finish": "ابدأ اللعب",
 "onboarding.tour.paused": "تبدأ الجولة - سنكمل مباشرة بعدها.",
  "onboarding.tour.act2.choice": "شاهد جولة وهي تُلعب",
  "onboarding.tour.act2.choiceHint": "نحو 30 ثانية، مع لحظة الكشف",
  "onboarding.tour.act2.bettingTitle": "كل باك مراهَن به يصبّ في مجمّع واحد",
  "onboarding.tour.act2.bettingBody": "يكدّس اللاعبون الباكات على الخانات. كل باك على الطاولة يغذّي مجمّعًا واحدًا، وخانة واحدة تأخذه كله.",
  "onboarding.tour.act2.drawTitle": "القيمة تتحول إلى احتمال",
  "onboarding.tour.act2.drawBody": "حصة كل خانة من قيمة جميع البطاقات المسحوبة هي فرصتها. ويختار سحب عشوائي واحد قابل للتحقق ومرجّح بالقيمة الخانة الفائزة.",
  "onboarding.tour.act2.losersTitle": "تتنازل كل خانة خاسرة عن بطاقاتها",
  "onboarding.tour.act2.losersBody": "تنتقل البطاقات والأموال النقدية القابلة للتوزيع من كامل اللوحة إلى داعمي الخانة الفائزة.",
  "onboarding.tour.act2.splitTitle": "رهانك يحدد نصيبك",
  "onboarding.tour.act2.splitBody": "يتقاسم داعمو الخانة الفائزة الأموال النقدية والبطاقات القابلة للتوزيع في الجولة من جميع الخانات، بالتناسب مع ما وضعه كل منهم في تلك الخانة.",
  "onboarding.tour.act2.grailCaption": "مراسم الـGrail",
  "onboarding.tour.act2.yourTurnEyebrow": "دورك",
  "onboarding.tour.act2.yourTurnTitle": "باك Starter الخاص بك جاهز",
  "onboarding.tour.act2.yourTurnBody": "عادت اللوحة مباشرة. اختر خانة وضع أول رهان باك لك.",
  "onboarding.tour.act2.continue": "دخول الجولة",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "قم بتدوير هاتفك للعب attn ROYALE",
  "onboarding.rotate.title": "اقلب هاتفك جانبًا",
  "onboarding.rotate.body": "تعمل اللوحة بأفضل شكل في الوضع الأفقي. أدر الهاتف للدخول إلى الجولة.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "إعدادات",
  "onboarding.settingsClose": "إغلاق الإعدادات",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "اختر معرّفًا ليتمكن اللاعبون الآخرون من العثور عليك.",
  "onboarding.profileValidation.handleTooShort": "يجب ألا يقل المعرّف عن 3 أحرف.",
  "onboarding.profileValidation.handleCharset": "استخدم الحروف والأرقام والشرطات السفلية فقط.",
  "onboarding.profileValidation.nameRequired": "أضف اسمًا لإظهاره على الطاولة.",
  "onboarding.profileValidation.nameTooLong": "اجعل الاسم أقل من {n} أحرف.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "مراقبة",
  "onboarding.presence.tierPlaying": "اللعب",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "أنت تلعب: راهنت بـ {amount} في هذه الجولة",
  "onboarding.presence.youWatching": "أنت تشاهد",
  "onboarding.presence.youWatchingBackground": "أنت تشاهد (علامة تبويب الخلفية)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE الآن. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "أنت: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} علامة تبويب أخرى لك مفتوحة",
  "onboarding.presence.otherTabs.other": "+{n} علامات تبويب أخرى لك مفتوحة",
  "onboarding.presence.othersBacking.one": "يدعم لاعب آخر ({n}) خانةً في هذه الجولة",
  "onboarding.presence.othersBacking.other": "يراهن {n} لاعبًا آخر على خانة في هذه الجولة",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "حالة بث attn ROYALE",
  "onboarding.streamHud.eyebrow": "البث",
  "onboarding.streamHud.statusConnecting": "جارٍ الاتصال",
  "onboarding.streamHud.statusLive": "مباشر",
  "onboarding.streamHud.statusReconnecting": "جارٍ إعادة الاتصال",
  "onboarding.streamHud.statusError": "مشكلة المزامنة",
  "onboarding.streamHud.reconnects.one": "إعادة اتصال ({n})",
  "onboarding.streamHud.reconnects.other": "{n} عمليات إعادة اتصال",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "تُسوّى هذه الغرفة بـ USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "البطاقات المفتوحة",
  "onboarding.carousel.prevCard": "البطاقة السابقة",
  "onboarding.carousel.nextCard": "البطاقة التالية",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "عرض {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "لا يكفي USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "يحتاج دعم {slot} إلى {needed}. لديك {balance}.",
  "onboarding.fundShortfall.addFunds": "أضف الأموال",
  "onboarding.fundShortfall.dismiss": "إغلاق",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "اضغط على {icon} ثم أضف إلى الشاشة الرئيسية لملء الشاشة الحقيقي.",
  "onboarding.installHint.fullscreen": "انتقل إلى وضع ملء الشاشة وقم بإخفاء شريط المتصفح.",
  "onboarding.installHint.fullscreenCta": "انتقل إلى وضع ملء الشاشة",
  "onboarding.installHint.dismiss": "إغلاق",
} as Record<string, string>;
