// Arabic (العربية): "arena" segment. Same key set as en/arena.ts; the
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
  "arena.you": "أنت",
  "arena.youAvatarLetter": "ي",
  "arena.common.card": "بطاقة",
  "arena.common.cards": "بطاقات",
  "arena.matchLabel": "المباراة #{n}",
  "arena.pageTitle": "حلبة البطاقات",
  "arena.backToBoard": "→ العودة إلى اللوحة",

  "arena.rail.ariaLabel": "مجموعتك",
  "arena.rail.heading": "مجموعتك",
  "arena.rail.practiceNote": "مجموعة تدريب. اربح جولات على اللوحة لتملأ هذا الشريط ببطاقاتك.",
  "arena.rail.emptyNote": "لا بطاقات في اليد. اربح المجمّع لاسترداد حصتك.",
  "arena.rail.enterWheel": "أدخل إلى العجلة",
  "arena.rail.armSnipe": "فعّل القنص",
  "arena.rail.hint": "انقر نقرًا مزدوجًا على بطاقة للمراهنة بها. أو حدّد بطاقات واضغط «أدخل إلى العجلة». يحدد Space البطاقة، ويفعّل A القنص.",

  "arena.railCard.armedSuffix": "مفعّلة للقنص.",
  "arena.railCard.hint": "يحدد Space البطاقة ويفعّل A القنص. انقر نقرًا مزدوجًا للمراهنة بها في الحلبة.",
  "arena.railCard.armedTag": "مفعّلة",

  "arena.snipe.trayHeading": "القنص مفعّل",
  "arena.snipe.disarm": "إيقاف القنص",
  "arena.snipe.firesAt": "يُنفّذ عند T-minus 2s",
  "arena.snipe.carries": "ينتقل إلى المباراة التالية",

  "arena.board.sectionAriaLabel": "عجلة الساحة",
  "arena.board.noCap": "لا حدّ لعدد البطاقات. الساعة هي القفل الوحيد.",
  "arena.board.wheelDecides": "العجلة تحسم",
  "arena.board.nextMatchLabel": "المباراة التالية خلال",
  "arena.board.potLabel": "المجمّع",
  "arena.board.wheelAriaEnter": "أدخل {count} {cardWord} محددة إلى العجلة",
  "arena.board.wheelAriaIdle": "العجلة. حدّد بطاقات من مجموعتك لإدخالها.",
  "arena.board.youWin": "لقد فزت",
  "arena.board.nameWins": "فاز {name}",
  "arena.board.emptyWheelNote": "العجلة مفتوحة. راهن بالبطاقات لا بالنقد: حصة القيمة تحدد قوسك واحتمالاتك. حصة المطاردة 0%. يطبق البروتوكول قاعدة رسوم 7% ببطاقات كاملة؛ ويحصل الفائز على جميع البطاقات الأخرى.",
  "arena.board.tableHint": "تدور إدخالاتك في العجلة بوصفها حصة قيمتك. قوسك هو احتمالاتك.",
  "arena.board.resultsLink": "شاهد آخر نتائج الجولة ←",

  "arena.clock.locked": "مغلق",
  "arena.clock.settled": "تمت التسوية",
  "arena.clock.locksIn": "يُغلق خلال",
  "arena.countdown.secondsSuffix": "ث",

  "arena.cinema.closeAriaLabel": "إغلاق السينما",
  "arena.cinema.closeTitle": "إغلاق (Esc)",
  "arena.cinema.beatCopy.contestants": "المتسابقون",
  "arena.cinema.beatCopy.spin": "الدوران",
  "arena.cinema.beatCopy.settle": "التسوية",
  "arena.cinema.beatCopyShort.contestants": "اللاعبين",
  "arena.cinema.beatCopyShort.spin": "الدوران",
  "arena.cinema.beatCopyShort.settle": "التسوية",
  "arena.cinema.contestantsAriaLabel": "المتسابقون",
  "arena.cinema.contestantsHeadline": "المتسابقون",
  "arena.cinema.oddsToWin": "{pct}% للفوز",
  "arena.cinema.hintContestants": "العجلة تحسم. انقر لتدويرها الآن.",
  "arena.cinema.spinAriaLabel": "تدوير العجلة",
  "arena.cinema.lockedOn": "مقفلة على",
  "arena.cinema.hintSpin": "انقر لتخطي الدوران.",
  "arena.cinema.settleAriaLabel": "تسوية",
  "arena.cinema.winnerTag": "الفائز",
  "arena.cinema.youTakePot": "أنت تأخذ المجمّع",
  "arena.cinema.takesPot": "يأخذ المجمّع",
  "arena.cinema.shelfWinner": "إلى الفائز",
  "arena.cinema.shelfChase": "المطاردة",
  "arena.cinema.shelfProtocol": "بروتوكول",
  "arena.cinema.smallPotNote": "لا تأخذ المطاردة شيئًا. اختارت قاعدة البروتوكول 7% عدد {count} من {cardWord}؛ ويحصل الفائز على جميع البطاقات الأخرى.",
  "arena.cinema.resultsLink": "شاهد نتائج الجولة الأخيرة",
  "arena.cinema.hintSettle": "انقر في أي مكان للعودة إلى الساحة.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} للفائز",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "المزايدة التلقائية عند النقر المزدوج؟",
  "arena.doubleBid.body": "انقر نقرًا مزدوجًا فوق إحدى البطاقات الموجودة في مجموعتك للمراهنة بها مباشرة في الساحة. هل تريد تفعيل هذا؟",
  "arena.doubleBid.enable": "تمكين",
  "arena.doubleBid.dismiss": "ليس الآن",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "جارٍ الاتصال بـ CARD ARENA",
  "arena.backend.loadingBody": "نتحقق من إصدار Arena المباشر ومن جلستك كلاعب…",
  "arena.backend.loadingCollection": "نتحقق من مجموعتك…",
  "arena.backend.mainnetPreparingTitle": "تم توصيل ساحة MAINNET",
  "arena.backend.mainnetPreparingBody": "هذا الإصدار الدقيق للقراءة فقط يعمل بصورة سليمة. يظل التمويل وشراء البطاقات والدخول والسحب والتسوية معطلاً.",
  "arena.backend.mainnetPreparingCollection": "لم يتم شراء أو نقل أي بطاقات على Mainnet. تظل الساحة للقراءة فقط حتى يصبح المخزون المصرح به بشكل منفصل جاهزاً.",
  "arena.backend.mainnetRelease": "الإصدار {commit} · النشر {deployment} · صفر توقيعات أو عمليات بث أو تأثيرات أو تكرارات",
  "arena.backend.unavailableTitle": "CARD ARENA قيد التحديث",
  "arena.backend.unavailableBody": "الدخول متوقف حتى يتوفر هذا الإصدار بالتحديد. بطاقاتك لم تتحرك.",
  "arena.backend.unavailableCollection": "المجموعة غير متاحة أثناء تحديث Arena.",
  "arena.backend.connectTitle": "اتصل للعب",
  "arena.backend.connectBody": "يلزم وجود جلسة Privy موثقة لتحميل بطاقاتك المرتبطة بالمزوّد وللدخول إلى العجلة.",
  "arena.backend.connectCollection": "اربط جلستك كلاعب لتحميل بطاقاتك.",
  "arena.backend.retry": "أعد المحاولة",
} as Record<string, string>;
