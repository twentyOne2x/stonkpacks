// Arabic (العربية): "core" segment. Same key set as en/core.ts; this
// segment owns settings, common words, gear, navigation, shell and runtime copy.
//
// REGISTER: Modern Standard Arabic (فصحى), neutral-formal throughout. Buttons use
// the standard software imperative, masculine singular, as in mainstream Arabic
// app interfaces. Plural pairs use the schema's .one/.other only; Arabic dual
// and paucal forms cannot be represented, so number-first phrasing is used where
// needed and the .other form is acceptable for every n other than 1.
//
// HOUSE-TERMS GLOSSARY (binding across every ar segment, fixed before any other
// segment was translated): round = جولة · pool/pot = المجمّع · tile (3x3 grid
// cell) = خانة · backer(s) = داعم/داعمون · bet/bid/stake = رهان · sell back =
// إعادة البيع · buyback = إعادة الشراء · a pack's pull = سحبة · winner draw =
// قرعة · The Chase (rolling jackpot, capitalized proper name) = المطاردة ·
// vault = الخزنة · graded/slab card = بطاقة مُقيّمة · rake/protocol cut =
// الاقتطاع · the house = البيت · payout split = تقسيم العائد · replay = إعادة
// اللعب · loose change (the mechanic that replaced Heat) = الفكة · odds =
// الاحتمالات.
//
// PACK BRAND WORD: singular باك, plural باكات. باك is the established Arabic
// gaming loanword used by card-pack communities (for example, FIFA players say
// "فتح باكات"). It is NEVER a parcel noun here: حزمة, حِزَم, رزمة, بكج and علبة
// are banned for the game pack. Pack tier names Starter, Elite, Legendary,
// Grail and Mythic remain Latin English everywhere, as do attn ROYALE, ATTN
// Protocol, USDC, X, Privy, CollectorCrypt and VRF. Digits are Western ASCII
// 0-9 and dollar amounts/percentages remain byte-verbatim. Values contain no
// bidi control characters and no em dashes; runtime isolates interpolated tokens.
//
// QUALITY: machine-assisted single-pass translation (codex worker, 2026-07-31),
// glossary-enforced; flagged for native-speaker review.
// QUALITY PASS 2 (2026-08-01): full re-read against en; homonym/calque/MT-artifact fixes.
//
// Segment: core (the original flat dictionary) plus the cross-surface shell.*
// and runtime.* namespaces. Add surface keys to their own segment instead.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "اللغة",
  "settings.languageSectionAria": "إعدادات اللغة",
  "settings.languageSearchPlaceholder": "ابحث عن لغة",
  "settings.languageNoResults": "لا توجد لغات مطابقة",
  "settings.languageHint": "ينطبق على الفور. البحث حسب الاسم أو النوع للتصفية.",
  "settings.languageInputAria": "اللغة والبحث والاختيار",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "مجموعات الإعدادات",
  "settings.searchPlaceholder": "ابحث في الإعدادات",
  "settings.searchClear": "مسح البحث",
  "settings.searchResultsAria": "الإعدادات المطابقة",
  "settings.searchNoResults": "لا شيء يطابق «{query}». جرّب اسم الشيء الذي تريد تغييره.",
  "settings.backToGroups": "كل الإعدادات",
  "gear.cards.heading": "البطاقات",
  "gear.cards.sectionAria": "إعدادات البطاقات",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "الرهان {bids} · الحد الأدنى {amount}",
  "gear.section.summary.display": "النوافذ المنبثقة {popups} · الصور {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "الموسيقى {music} · المؤثرات {sfx}",
  "gear.section.summary.autosell": "{count} من قواعد البيع التلقائي نشطة",
  "gear.section.summary.hotkeys": "{count} من اختصارات الرهان مضبوطة",

  // --- Shared words --------------------------------------------------------
  "common.on": "تشغيل",
  "common.off": "إيقاف",
  "common.set": "تعيين",
  "common.clear": "مسح",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "الخانة {n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "الرهان",
  "gear.betting.sectionAria": "إعدادات الرهان",
  "gear.betting.provider.label": "موفّر الحزمة",
  "gear.betting.provider.automatic": "تلقائي (Collector Crypt أولاً)",
  "gear.betting.provider.hint": "يفضّل الوضع التلقائي Collector Crypt عندما يكون متاحاً ولا يستخدم إلا بديلاً موثّقاً. اختيار موفّر بالاسم صارم: إذا لم يكن متاحاً، يُرفض الرهان.",
  "gear.betting.provider.automaticHint": "تلقائي · Collector Crypt أولاً",
  "gear.betting.provider.strictHint": "{provider} فقط · بلا بديل",
  "gear.betting.provider.unavailable": "{provider} (غير متاح)",
  "gear.betting.provider.selectedUnavailable": "{provider} غير متاح. تُرفض الرهانات الصارمة ولا يُستبدل الاختيار أبداً.",
  "gear.betting.provider.actual": "نُفّذ عبر {provider}",
  "gear.betting.provider.accepted": "قُبل عبر {provider}",
  "gear.betting.disableBids.label": "تعطيل العطاءات",
  "gear.betting.disableBids.hint":
    "يقفل المزايدة: تمنع نقرات الخانات من وضع الرهانات، لتتمكن من المشاهدة (أو تسليم الشاشة) من دون توقيع رهان بالخطأ. وتبقى بقية اللعبة قيد التشغيل.",
  "gear.betting.minBid.label": "الحد الأدنى للعطاء",
  "gear.betting.minBid.hint":
    "أصغر رهان يمكن أن تضعه نقرة واحدة. لا يمكن أن ينخفض حجم رهانك عن هذا الحد، لذا لن تضع نقرة سريعة رهانًا أقل مما قصدت (الحد الأدنى $5 لمنع الرهانات المزيّفة).",
  "gear.betting.upgradeCap.label": "سقف تكلفة الترقية",
  "gear.betting.upgradeCap.placeholder": "لا يوجد حد",
  "gear.betting.upgradeCap.hint":
    "هذا هو الحد الأقصى الذي قد تكلفك إياه نقرة ترقية واحدة. تُعطَّل الترقيات الأعلى سعرًا، فلا تفاجئك خانة مزدحمة بفاتورة كبيرة.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "عرض",
  "gear.display.sectionAria": "إعدادات العرض",
  "gear.display.chipFloats.label": "نوافذ الرهانات المنبثقة",
  "gear.display.chipFloats.hint": "أظهر فقاعات \"+$X · الاسم\" الصغيرة التي تظهر عندما يراهن شخص ما على الخانة.",
  "gear.display.floatThreshold.label": "إخفاء الرهانات تحت",
  "gear.display.floatThreshold.placeholder": "أظهر كل رهان",
  "gear.display.floatThreshold.hint":
    "أظهر فقاعة للرهانات بهذا الحجم أو أكبر فقط. امسح الحد (أو اضبطه على $0) لإظهار كل رهان، مع إبقاء اللوحة هادئة عند وصول رهانات صغيرة كثيرة.",
  "gear.display.hidePortraits.label": "إخفاء صور اللاعبين",
  "gear.display.hidePortraits.hint": "يخفي دوائر صورة اللاعبين الآخرين على الخانات. تظل العلامة الخاصة بك مرئية.",
  "gear.display.fullscreenLandscape.label": "ملء الشاشة بالعرض",
  "gear.display.fullscreenLandscape.hint":
    "على الهاتف، تؤدي اللمسة التالية بالعرض إلى إخفاء شريط المتصفح. في Safari على iPhone ينكمش الشريط فقط؛ والإضافة إلى الشاشة الرئيسية تمنحك ملء الشاشة الحقيقي.",
  "gear.display.replayTour.label": "إعادة الجولة الترحيبية",
  "gear.display.replayTour.hint": "افتح الجولة الترحيبية مرة أخرى من الخطوة الأولى.",
  "gear.display.couch.label": "نص كبير (تلفزيون/أريكة)",
  "gear.display.headerCollapse.label": "طي الشريط العلوي",
  "gear.display.headerCollapse.hint": "يطوي الشريط العلوي حتى تملأ الطاولة والبطاقات الشاشة. السهم في الشريط العلوي يعيده.",
  "gear.display.couch.hint":
    "نص قراءة أكبر عبر اللعبة: الدردشة والمستندات والتسميات وأرقام النقود، بحجم مناسب للعب من الأريكة. تحافظ اللوحة على تخطيطها. يتم تشغيله أيضًا باستخدام ?couch=1 في العنوان.",
  "gear.display.couch.suggested": "يبدو هذا مثل متصفح التلفزيون أو وحدة التحكم. تم إنشاء نص كبير لهذه الشاشة.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "الكشف",
  "gear.reveals.sectionAria": "إعدادات الكشف",
  "gear.reveals.turbo.label": "الكشف السريع",
  "gear.reveals.turbo.hint":
    "يسرّع عرض الكشف لتصل إلى نتيجتك أسرع. وتظل اللحظات الكبيرة حاضرة. يكون هذا الخيار متوقفًا افتراضيًا، بينما يشاهد الآخرون العرض كاملًا.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "صوت",
  "gear.sound.sectionAria": "إعدادات الصوت",
  "gear.sound.sfx.label": "المؤثرات الصوتية",
  "gear.sound.sfx.hint":
    "نقرات الرقائق، وفتح الجولة وقفلها، وعجلة الفائز، وعرض الكشف. تُولَّد كلها في متصفحك ولا تحتاج إلى تنزيل شيء.",
  "gear.sound.music.label": "موسيقى",
  "gear.sound.music.hint":
    "يتبع إيقاع الجولة: يتصاعد أثناء المراهنة، ويشتد في الثواني الأخيرة، ثم يهبط عند الكشف. يبدأ بعد أول نقرة أو ضغطة مفتاح ويتوقف مؤقتًا عند تبديل علامات التبويب.",
  "gear.sound.musicStyle.label": "أسلوب الموسيقى",
  "gear.sound.musicStyle.piano": "بيانو هادئ",
  "gear.sound.musicStyle.snowmelt": "ذوبان الثلج",
  "gear.sound.musicStyle.hearthfire": "نار الموقد",
  "gear.sound.musicStyle.grotto": "كهف مذهّب",
  "gear.sound.musicStyle.arcade": "حماس الأركيد",
  "gear.sound.musicStyle.kart": "سباق الكارت",
  "gear.sound.musicStyle.galaxy": "فالس النجوم",
  "gear.sound.musicStyle.hint": "البيانو الهادئ لحن ناعم غير متعجل. وحماس الأركيد مشرق وسريع. يتبدل النمط مع المازورة التالية أثناء الجولة.",
  "gear.sound.musicVolume.label": "مستوى الموسيقى",
  "gear.sound.sfxVolume.label": "مستوى المؤثرات",
  "gear.sound.volume.label": "مستوى الصوت",
  "gear.sound.volume.aria": "مستوى الصوت الرئيسي",
  "gear.sound.volume.hint": "مستوى رئيسي واحد للمؤثرات والموسيقى معًا.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "قواعد البيع التلقائي",
  "gear.autosell.sectionAria": "قواعد البيع التلقائي",
  "gear.autosell.intro":
    "عيّن هذه القواعد مرة واحدة، وكل فوز يطابقها يُعاد بيعه تلقائيًا من دون مطالبة بالاحتفاظ أو البيع. أما غير المطابق فسيطلب منك القرار، كما هو الحال اليوم.",
  "gear.autosell.everyWin.label": "البيع التلقائي لكل فوز",
  "gear.autosell.everyWin.hint":
    "يمكنك صرف كل بطاقة تفوز بها بسعر إعادة الشراء بمجرد وصولها، دون مطالبة بالاحتفاظ بها أو بيعها. لا يتم بيع Grails تلقائيًا أبدًا. هذا هو الاختصار لتشغيل جميع مفاتيح تبديل الندرة الأربعة أدناه.",
  "gear.autosell.belowValue.label": "بيع إذا كانت القيمة أقل من ذلك",
  "gear.autosell.placeholderOff": "إيقاف",
  "gear.autosell.rarity.label": "بيع بالندرة",
  "gear.autosell.rarity.aria": "البيع التلقائي حسب الندرة",
  "gear.autosell.rarity.hint":
    "شرائح ندرة CollectorCrypt، مقروءة من آلة الباك التي جاءت منها كل بطاقة. يتغير نطاق السعر الدقيق لكل شريحة من باك إلى آخر، لذلك قد تكون بطاقة $200 نادرة في آلة وشائعة في آلة أغلى.",
  "gear.autosell.nonVintage.label": "بيع البطاقات غير القديمة",
  "gear.autosell.belowGrade.label": "بيع إذا تم تصنيفها تحت",
  "gear.autosell.grader.label": "البيع حسب جهة التقييم",
  "gear.autosell.grader.hint":
    "اختر جهة تقييم، وبِع تلقائيًا بطاقاتها المصنفة بأقل من الرقم الذي تحدده. ألغِ تحديد جهة تقييم لبيع كل بطاقاتها تلقائيًا. ألغِ تحديد الجهات كلها لبيع كل ما تربحه تلقائيًا. تستخدم جهات التقييم مقاييس مختلفة، لذا لكل منها حدّه الخاص.",
  "gear.autosell.grader.aria": "البيع التلقائي حسب جهة التقييم",
  "gear.autosell.grader.keep": "احتفاظ",
  "gear.autosell.grader.sellAll": "بيع الكل",
  "gear.autosell.grader.other": "أخرى / غير مصنفة",
  "gear.autosell.grader.placeholderKeepAll": "احتفظ بكل شيء",
  "gear.autosell.grader.placeholderSellAll": "بيع كل شيء",
  "gear.autosell.grader.ariaGradeSuffix": "بيع تحت الدرجة",
  "gear.autosell.summaryActive": "نشط:",
  "gear.autosell.summaryNone": "لم يتم تعيين قواعد البيع التلقائي. كل فوز لا يزال يطلب منك الاحتفاظ به أو بيعه.",
  "gear.autosell.turnOffAll": "إيقاف تشغيل الكل",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "اختصارات المراهنة",
  "gear.hotkeys.sectionAria": "اختصارات المراهنة",
  "gear.hotkeys.intro":
    "اضغط على مفتاح الخانة للمراهنة عليها بحجم رهانك الحالي. لا حاجة إلى الفأرة. انقر على مفتاح أدناه ثم اضغط المفتاح الذي تريده. لا يمكن لخانتين مشاركة مفتاح واحد، لذا تنقل إعادة التعيين المفتاح إلى خانة أخرى. يلغي Esc العملية، ويمسح Backspace القيمة.",
  "gear.hotkeys.enabled.label": "المراهنة بمفاتيح الأرقام",
  "gear.hotkeys.enabled.hintOn": "المفاتيح مباشرة أثناء الرهان. يؤدي الضغط على مفتاح الخانة إلى وضع رهانك على الفور.",
  "gear.hotkeys.enabled.hintOff": "المفاتيح معطلة. الضغط على مفتاح الخانة لا يضع أي رهان.",
  "gear.hotkeys.enabled.hintUnset": "لم يتقرر بعد. قم بتشغيل المفاتيح هنا، أو اضغط على مفتاح الخانة أثناء الرهان واختر تمكين.",
  "gear.hotkeys.listAria": "اختصارات المراهنة للخانات",
  "gear.hotkeys.tileLabel": "الخانة {n}",
  "gear.hotkeys.pressKeyPrompt": "اضغط على مفتاح…",
  "gear.hotkeys.setKey": "تعيين المفتاح",
  "gear.hotkeys.clear": "مسح",
  "gear.hotkeys.ariaPressToBind": "اضغط على مفتاح لربط الخانة {n}",
  "gear.hotkeys.ariaShortcut": "اختصار الخانة {n} هو {key}. انقر لإعادة ربطه.",
  "gear.hotkeys.ariaNoShortcut": "لا تملك الخانة {n} اختصارًا. انقر لتعيين واحد.",
  "gear.hotkeys.ariaClearShortcut": "امسح اختصار الخانة {n}",
  "gear.hotkeys.unboundWarning": "لم يتم تعيين مفتاح لـ {list}. لا تحتوي تلك الخانات على اختصار لوحة المفاتيح حتى تقوم بتعيين واحد.",
  "gear.hotkeys.resetButton": "إعادة التعيين إلى الإعدادات الافتراضية",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "أقسام attn ROYALE",
  "nav.board": "اللوحة",
  "nav.results": "النتائج",
  "nav.rankingsFull": "التصنيفات",
  "nav.rankingsShort": "الرتب",
  "nav.collectionFull": "المجموعة",
  "nav.collectionShort": "بطاقات",
  "nav.profile": "الملف الشخصي",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "اللوحة",
  "mobileNav.results": "النتائج",
  "mobileNav.ladder": "السُّلَّم",
  "mobileNav.collection": "المجموعة",
  "mobileNav.profile": "الملف الشخصي",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "المستندات",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "مختبر attn ROYALE",
  "shell.header.statusAria": "حالة الجولة",
  "shell.header.collapse": "إخفاء الشريط العلوي",
  "shell.header.expand": "إظهار الشريط العلوي",
  "shell.header.round": "الجولة #{n}",
  "shell.header.turboTitle": "تسريع توقيت الجولة",
  "shell.header.turboBadge": "توربيني",
  "shell.metrics.aria": "ملخص الجولة",
  "shell.metrics.totalPool": "إجمالي المجمّع",
  "shell.metrics.packsLive": "الباكات المفتوحة",
  "shell.metrics.yourStake": "حصتك",
  "shell.metrics.selectedBet": "الرهان المختار",
  "shell.board.aria": "لوحة attn ROYALE",
  "shell.board.label": "اللوحة",
  "shell.board.phaseOpen": "انقر على أي خانة لدعمها؛ وتُعاد صياغة الحصة ضمن أفضل مجموعة من الباكات",
  "shell.board.phaseLock": "مغلقة · فتح الباكات",
  "shell.board.phaseSettled": "تمت تسوية الجولة",
  "shell.board.metaOpen": "المجمّع {pool} · يغذي المطاردة بنسبة 3% · تُفتح الباكات عند القفل",
  "shell.board.metaClosed": "تفوز خانة واحدة بالمجمّع وفق احتمالات موزونة قابلة للتحقق.",
  "shell.board.reopenReveal": "↗ إعادة فتح الكشف",
  "shell.connectNudge":
    "ادخل اللعبة وأودِع للبدء في دعم الخانات. وتستمر الجولات في الخلفية.",
  "shell.decision.cardFallback": "بطاقتك",
  "shell.mobile.close": "إغلاق",
  "shell.mobile.chat": "محادثة",
  "shell.mobile.chatOpenAria": "فتح طاولة الدردشة",
  "shell.mobile.chatCloseAria": "إغلاق طاولة الدردشة",
  "shell.mobile.cards": "بطاقات",
  "shell.mobile.cardsOpenAria": "افتح بطاقاتك للبيع أو السحب",
  "shell.mobile.cardsCloseAria": "أغلق بطاقاتك",
  "shell.mobile.players": "اللاعبون",
  "shell.mobile.playersOpenAria": "فتح قائمة اللاعبين، مرتبة حسب الرهان",
  "shell.mobile.playersCloseAria": "إغلاق قائمة اللاعبين",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC اللعبة",
  "runtime.rail.privySessionCredit": "رصيد جلسة Privy",
  "runtime.rail.houseCredit": "رصيد البيت",
  "runtime.rail.connectPrivy": "صِل Privy لإضافة USDC إلى اللعبة",
  "runtime.rail.privySession": "جلسة Privy",
  "runtime.rail.depositAction": "إضافة +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "حساب Privy",
  "runtime.rail.house": "البيت",
  "runtime.rail.depositReceipt": "إيصال {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "اضغط على أي باك للمراهنة بـ {amount}. ولكل خانة أيضًا +{low} / +{high} الخاصان بها.",
  "runtime.rail.sellBack": "إعادة البيع ← +{amount} إلى الرصيد",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "أنت",
  "runtime.recap.topBacker": "أكبر داعم",
  "runtime.recap.topCardOutcome": "البطاقة الأبرز · قرار الاحتفاظ/البيع",
  "runtime.recap.backer": "الداعم",
  "runtime.recap.cardWon": "البطاقة الفائزة",
  "runtime.recap.chaseLootReleased": "تم إطلاق غنيمة المطاردة",
  "runtime.recap.theChase": "المطاردة",
  "runtime.recap.sweptIntoVault": "نُقلت إلى الخزنة",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "رسوم البروتوكول",
  "runtime.recap.soldBack": "أُعيد بيعها",
  "runtime.recap.intoSplit": "+{amount} إلى التقسيم",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "اتصال X غير متوفر بعد.",
  "runtime.xProfile.connected": "متصل",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "بطاقة غير معروفة",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "فوز",
  "runtime.winShare.headlineGrailPull": "سحبة GRAIL",
  "runtime.winShare.headlineCardsWon": "البطاقات الفائزة",
  "runtime.winShare.cardInImage": "البطاقة في الصورة.",
  "runtime.winShare.receiptInImage": "الإيصال في الصورة.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "عمليات السحب غير متصلة بالإنترنت الآن. لم يتم نقل أي أموال.",
  "runtime.serverWallet.noSigner": "لا يوجد موقّع محفظة متصل بهذه الجلسة. لم تُنقل أي أموال.",
  "runtime.serverWallet.nonceUnavailable": "تعذر الحصول على nonce لتوثيق أموال السحب من الخادم.",
  "runtime.serverWallet.signatureUnavailable": "لم تُرجع المحفظة توقيعًا على nonce السحب.",
  "runtime.serverWallet.boundaryLabel": "أرصدة طاولة اللعب وUSDC في محفظة الخادم منفصلة.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "التقاط الشاشة غير متوفر في هذا المتصفح.",
  "runtime.video.noRecorderFormat": "لا يوفّر هذا المتصفح تنسيق فيديو لـ MediaRecorder.",
  "runtime.video.canceled": "تم إلغاء العرض.",
  "runtime.video.unreachable": "تعذر الوصول إلى خدمة العرض على {url}.",
  "runtime.video.rejected": "رفضت خدمة العرض الجولة: {detail}",
  "runtime.video.requestFailed": "فشل طلب العرض ({status}).",
  "runtime.video.noJobId": "لم تُرجع خدمة العرض معرّف المهمة.",
  "runtime.video.lostJob": "فُقدت مهمة العرض ({status}).",
  "runtime.video.lostContact": "انقطع الاتصال بخدمة العرض أثناء العرض.",
  "runtime.video.renderFailed": "فشل العرض: {error}.",
  "runtime.video.unknownError": "خطأ غير معروف",
  "runtime.video.downloadFailed": "انتهى الفيديو ولكن تعذر تنزيله.",
  "runtime.video.downloadHttpFailed": "انتهى الفيديو ولكن فشل التنزيل ({status}).",
  "runtime.video.emptyVideo": "أعادت خدمة العرض فيديو فارغًا.",
  "runtime.video.shareTagline": "معركة باك، كل سحب يمكن التحقق منه. شاهد الجولة:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "الغرفة قيد التشغيل. تبدأ الجولات تلقائيًا؛ تُفتح {seconds}s ثم يبدأ الكشف.",
  "runtime.game.chaseVault": "قبو المطاردة",
  "runtime.game.aTile": "الخانة",
  "runtime.game.aPack": "باك",
  "runtime.game.theCard": "البطاقة",
  "runtime.game.collectedSplit": "الجولة {round} · جُمِع {amount} USDC من التقسيم.",
  "runtime.game.chaseDropSplit": "الجولة {round} · أسقطت المطاردة {award} على خانتك · حصتك: {amount} USDC.",
  "runtime.game.grailSecured": "تم تأمين Grail: احتفظت بـ {card} ({amount}) في مجموعتك.",
  "runtime.game.keptCard": "احتُفظ بـ {card} ({amount}) ← أُضيفت إلى مجموعتك.",
  "runtime.game.soldCardSettle": "أُعيد بيع {card} مقابل {amount} USDC ({pct}% من {value}).",
  "runtime.game.roundVoidedRefund":
    "أُبطلت الجولة {round}. لم تُفتح أي باكات، لذلك لم تُسحب قيمة بطاقة. أُعيد رهانك البالغ {amount}.",
  "runtime.game.roundVoidedAll":
    "أُبطلت الجولة {round}. لم تُفتح أي باكات، لذلك لم تُسحب قيمة بطاقة. أُعيدت كل الرهانات.",
  "runtime.game.chaseFiredYours.one": "أطلقت المطاردة: أُطلقت بطاقة {n} ({amount}) إلى خانتك {tile}.",
  "runtime.game.chaseFiredYours.other": "أطلقت المطاردة: أُطلقت بطاقات {n} ({amount}) إلى خانتك {tile}.",
  "runtime.game.chaseFiredTable.one":
    "أطلقت المطاردة في الجولة {round}: أُسقطت {award} + بطاقة {n} على {tile}، وقُسّمت بين داعميها.",
  "runtime.game.chaseFiredTable.other":
    "أطلقت المطاردة في الجولة {round}: أُسقطت {award} + بطاقات {n} على {tile}، وقُسّمت بين داعميها.",
  "runtime.game.cardsAssigned.one": "أُسندت إليك بطاقة {n} ({amount}) ← المجموعة.",
  "runtime.game.cardsAssigned.other": "أُسندت إليك بطاقات {n} ({amount}) ← المجموعة.",
  "runtime.game.cardPoolsLive": "مجمّعات البطاقات قيد التشغيل: {cards} بطاقة عبر {pools} من مجمّعات آلات CollectorCrypt.",
  "runtime.game.minBid": "الحد الأدنى للمزايدة هو {amount}. ارفع الرهان وحاول مرة أخرى.",
  "runtime.game.resolveFailed": "تعذّر حسم هذه الجولة، لذلك لم تتم أي تسوية. تبدأ الجولة التالية كالمعتاد.",
  "runtime.game.stakeRefused": "هذا الرهان كبير جدًا على {tile}. لم يتم خصم أي مبلغ. قلّله وحاول مرة أخرى.",
  "runtime.game.shortfallBack":
    "لا يكفي USDC لدعم {tile} بمبلغ {amount}. لديك {held}. أضف أموالًا للمتابعة.",
  "runtime.game.shortfallNextPack":
    "لا يكفي USDC لإكمال الباك التالي على {tile}. المطلوب {amount} ولديك {held}. أضف أموالًا للمتابعة.",
  "runtime.game.youBacked": "دعمت {tile} بمبلغ {amount}.",
  "runtime.game.packCompleted": "لقد أكملت باك التالي على {tile} (+{amount}) ← {tier}.",
  "runtime.game.soldToFundBid": "أُعيد بيع {cards} مقابل {amount} USDC (إعادة شراء CC) لتمويل رهان.",
  "runtime.game.backedFunded": "دُعمت {tile} بمبلغ {amount} (مموّل من المخزون).",
  "runtime.game.demoStakesRefunded":
    "مُسحت رهانات العرض: أُعيد مبلغ {amount} الذي نَقرت لإيداعه. تبدأ من $0.",
  "runtime.game.demoStakesCleared": "مُسحت رهانات العرض: تبدأ كل جولة عند $0 حتى تدعم خانة.",
  "runtime.game.deposited": "تم إيداع {amount} USDC في محفظتك.",
  "runtime.game.referralBonus": "أُضيفت مكافأة الإحالة: +{amount} USDC.",
  "runtime.game.signedAndSent": "وُقّع وأُرسل {amount} USDC على {cluster} · sig {sig}….",
  "runtime.game.signedNoBroadcast":
    "وُقّع {amount} USDC على {cluster} ({method}، من دون بث على السلسلة) · sig {sig}….",
  "runtime.game.soldCard": "أُعيد بيع {card} مقابل {amount} USDC (إعادة شراء بنسبة {pct}%).",
} as Record<string, string>;
