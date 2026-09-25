// Arabic (العربية): "pages" segment. Same key set as en/pages.ts; the
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
  // ===== pages.common.* — reused across 2+ files in this segment ===========
  "pages.common.goToBoard": "انتقل إلى اللوحة",
  "pages.common.backToBoard": "→ العودة إلى اللوحة",
  "pages.common.replay": "إعادة اللعب",
  "pages.common.replayTitle": "شاهد الجولة {n} من جديد، من أول رهان حتى الكشف",
  "pages.common.you": "أنت",
  "pages.common.cancel": "إلغاء",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "سحب إلى المحفظة",
  "pages.common.withdrawnToWallet": "تم السحب إلى المحفظة",
  "pages.common.chase": "المطاردة",
  "pages.common.roundNumber": "الجولة #{n}",
  "pages.common.share": "مشاركة",
  "pages.common.noCardsKeptTitle": "لم يتم الاحتفاظ بأي بطاقات حتى الآن",
  "pages.common.noCardsKeptBody": "احتفظ بالسحبة الفائزة بدل إعادة بيعها، وستظهر هنا كبطاقة مُقيّمة.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "تاريخ الجلسة",
  "pages.sessionHistory.log.title": "تاريخ الجلسة",
  "pages.sessionHistory.log.emptyHint": "تظهر إيصالاتك هنا",
  "pages.sessionHistory.log.hint": "إيصالاتك وإجراءاتك",

  "pages.sessionHistory.ledger.ariaLabel": "تاريخ الجولة والخانة",
  "pages.sessionHistory.ledger.title": "تاريخ الجولة والخانة",
  "pages.sessionHistory.ledger.empty": "تظهر الجولات السابقة هنا",
  "pages.sessionHistory.ledger.summaryOne": "جولة مسوّاة واحدة ({n}) · انقر على صف للتفاصيل",
  "pages.sessionHistory.ledger.summaryOther": "{n} جولات مسوّاة · انقر على صف للتفاصيل",
  "pages.sessionHistory.ledger.emptyBody":
    "لم تُسوَّ أي جولة بعد؛ سيظهر أول كشف هنا مع كل خانة، والخانة الفائزة، وتقسيم العائد.",
  "pages.sessionHistory.ledger.showMore": "عرض {n} المزيد · {hidden} الأقدم",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "فازت {label}",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "مجمّع بقيمة {amount}",
  "pages.sessionHistory.row.noPull": "لا سحبة",
  "pages.sessionHistory.row.youWon": "أنت +{amount}",
  "pages.sessionHistory.row.noWin": "لا فوز",

  "pages.sessionHistory.detail.splitAria": "تقسيم العائد",
  "pages.sessionHistory.detail.splitOf": "تقسيم بقيمة {amount}",
  "pages.sessionHistory.detail.yourStake": "رهانك {amount}",
  "pages.sessionHistory.detail.noStakeFromYou": "لم تضع رهانًا",
  "pages.sessionHistory.detail.cardKeptGrail": "البطاقة ← {name} (تم الاحتفاظ بـ Grail)",
  "pages.sessionHistory.detail.cardSoldBack": "البطاقة ← {name} · أُعيد بيعها",
  "pages.sessionHistory.detail.cardKept": "البطاقة ← {name} · تم الاحتفاظ بها",
  "pages.sessionHistory.detail.grailSoldSplit": "أُعيد بيع Grail ← قُسّم العائد أعلاه",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "TOP · ",
  "pages.sessionHistory.tile.wonSuffix": " · فازت",
  "pages.sessionHistory.tile.lostSuffix": " · خسرت القرعة",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "مكاسبك",
  "pages.winningsStrip.title": "مكاسبك",
  "pages.winningsStrip.decisionClock": "{n}s لاتخاذ القرار",
  "pages.winningsStrip.withdrawBalance": "سحب الرصيد {amount}",
  "pages.winningsStrip.howItWorks": "كيف تعمل اللعبة - الاحتمالات وVRF والبطاقات ←",
  "pages.winningsStrip.decisionOpen": "قرار بطاقتك مفتوح",
  "pages.winningsStrip.decisionNoActionKeep": "لا إجراء: يُحتفظ بها (يمكن إعادة بيعها من بطاقاتك في أي وقت)",
  "pages.winningsStrip.decisionNoActionSell": "لا إجراء: تُباع تلقائيًا عند القفل التالي",
  "pages.winningsStrip.keep": "احتفاظ ({amount})",
  "pages.winningsStrip.sell": "إعادة بيع {amount}",
  "pages.winningsStrip.sellWithPct": "إعادة بيع {amount} · {pct}%",
  "pages.winningsStrip.yourCards": "بطاقاتك",
  "pages.winningsStrip.heldValue": "محتفظ بها بقيمة {amount}",
  "pages.winningsStrip.keptByDefault": "يُحتفظ بها افتراضيًا",
  "pages.winningsStrip.withdrawAllOne": "اسحب جميع بطاقات {n} · {amount}",
  "pages.winningsStrip.withdrawAllOther": "اسحب جميع بطاقات {n} · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "متأكد؟ اسحب {n} بطاقة",
  "pages.winningsStrip.selectToWithdraw": "حدّد للسحب",
  "pages.winningsStrip.sellAll": "إعادة بيع الكل {amount} · {pct}%",
  "pages.winningsStrip.selectedForWithdrawal": "محددة للسحب",
  "pages.winningsStrip.tapCardToSelect": "انقر على بطاقة لتحديدها",
  "pages.winningsStrip.selectCardsToWithdraw": "حدّد البطاقات للسحب",
  "pages.winningsStrip.selectedSummaryOne": "بطاقة واحدة محددة ({n}) · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} بطاقات محددة · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "سحب بطاقة واحدة ({n}) · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "سحب {n} بطاقات · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "سحب الرصيد",
  "pages.winningsStrip.closeWithdrawAria": "إغلاق السحب",
  "pages.winningsStrip.pastRounds": "الجولات السابقة",
  "pages.winningsStrip.shareLastWin": "مشاركة الفوز الأخير",
  "pages.winningsStrip.roundId": "R{n}",
  "pages.winningsStrip.tileTook": "الخانة {n} أخذت المجمّع · {amount}",
  "pages.winningsStrip.chaseAward": "المطاردة +{amount}",
  "pages.winningsStrip.noRound": "لا جولة",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "خسارة",
  "pages.winningsStrip.kept": "محتفظ بها",
  "pages.winningsStrip.sold": "مُعادة البيع",
  "pages.winningsStrip.activity": "نشاط",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "تأكيد إعادة بيع البطاقة",
  "pages.sellConfirm.eyebrow": "إعادة البيع",
  "pages.sellConfirm.title": "بيع {name}؟",
  "pages.sellConfirm.payoutLabel": "ستحصل على",
  "pages.sellConfirm.rateNote": "{pct}% من {value}",
  "pages.sellConfirm.irreversible": "ستغادر البطاقة مجموعتك. لا يمكن التراجع عن هذا.",
  "pages.sellConfirm.keep": "الاحتفاظ بالبطاقة",
  "pages.sellConfirm.confirm": "البيع مقابل {amount}",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "مجموعتك",
  "pages.collection.summaryCardOne": "بطاقة",
  "pages.collection.summaryCardOther": "بطاقات",
  "pages.collection.totalValueSuffix": "القيمة الإجمالية",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "TOP",
  "pages.collection.tierCommon": "شائع",
  "pages.collection.viaKept": "محتفظ بها",
  "pages.collection.viaWon": "فوز",
  "pages.collection.cardAriaLabel": "{name}، {amount}. يفتح Enter تفاصيل البطاقة.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "التصنيفات",
  "pages.ladder.tabAriaLabel": "عرض التصنيفات",
  "pages.ladder.tabBetters": "أفضل المراهنين",
  "pages.ladder.tabPacks": "احتمالات الباكات",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.sectionAriaLabel": "تصنيفات الباكات",
  "pages.ladder.intro":
    "كل دولار يملأ أكبر باك يستطيع دفع ثمنه. كل درجة آلة حقيقية من CollectorCrypt؛ ألقِ نظرة على البطاقات الأعلى، ثم افتح المجمّع كاملًا.",
  "pages.ladder.sourceLive": "مجمّعات CollectorCrypt المباشرة ({count}/{total} آلة) · آخر تحديث {age}{backlogNote}",
  "pages.ladder.sourceBundled": "مجمّعات مرجعية: بطاقات CollectorCrypt المُقيّمة المضمّنة، بقيم مؤمّنة حقيقية (وليست قوائم مباشرة)",
  "pages.ladder.sourceFixtures": "أمثلة مرجعية: بيانات مضمّنة",
  "pages.ladder.footNote": "تعكس الاحتمالات ونطاقات القيمة وإعادة الشراء مواصفات آلات CollectorCrypt المنشورة (لقطة {date}).",
  "pages.ladder.footNoteLive":
    "البطاقات مخزون سوق مباشر داخل نطاقات كل آلة، ويُحدّث كل 5 دقائق بين الجولات.",
  "pages.ladder.footNoteBundled": "البطاقات المعروضة مجموعة مضمّنة من بطاقات CollectorCrypt المُقيّمة الحقيقية، وليست قوائم مباشرة.",
  "pages.ladder.stepUp": "الترقية",
  "pages.ladder.stepUpFromPrefix": "من {name}",
  "pages.ladder.stepUpEntryPrefix": "درجة الدخول، والفكة الأقل من",
  "pages.ladder.stepUpEntrySuffix": "تبقى فكة",
  "pages.ladder.valueRange": "نطاق القيمة",
  "pages.ladder.ceiling": "سقف",
  "pages.ladder.floor": "أرضية",
  "pages.ladder.machineOdds": "احتمالات الآلة",
  "pages.ladder.buybackPrefix": "إعادة الشراء",
  "pages.ladder.grailOddsPrefix": "Grail",
  "pages.ladder.poolLoading": "جارٍ تحميل المجمّع…",
  "pages.ladder.viewMore": "عرض {n} أخرى",
  "pages.ladder.cardPool": "مجمّع من {n} بطاقة",
  "pages.ladder.priciestFirst": "الأعلى سعرًا أولًا",
  "pages.ladder.machineCardsOnly": "بطاقات {n}",
  "pages.ladder.machineNameCards": "{shortName} · بطاقات {n}",
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
  "pages.ladder.leaderboard.ariaLabel": "لوحة أفضل المراهنين",
  "pages.ladder.leaderboard.title": "أفضل المراهنين",
  "pages.ladder.leaderboard.emptyNoSettled": "لم تتم تسوية الجولات بعد",
  "pages.ladder.leaderboard.emptyNoBetsToday": "لم تستقر أي رهانات اليوم بعد.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "لم تتم تسوية أي رهانات بعد.",
  "pages.ladder.leaderboard.emptyCta": "راهن على اللوحة لتظهر هنا",
  "pages.ladder.leaderboard.timeframeAriaLabel": "الإطار الزمني",
  "pages.ladder.leaderboard.today": "اليوم",
  "pages.ladder.leaderboard.allTime": "كل الوقت",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "View {n} more" button opens over the full machine pool). Its
  // own "view more" button reuses pages.ladder.viewMore above (same wording,
  // same surface). Counts arrive pre-formatted, digits stay as authored. ======
  "pages.ladderViewer.eyebrow": "مجمّع الباك",
  "pages.ladderViewer.showing": "عرض {n} من أصل {total}",
  "pages.ladderViewer.closeAria": "إغلاق مجمّع الباك",
  "pages.ladderViewer.remainingFoot": "تبقى {n} بطاقة للعرض · الحد الأدنى {amount}",
  "pages.ladderViewer.wholePool": "هذا هو مجمّع البطاقات الكامل ({n} بطاقة).",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "نتائج الجولة",
  // Plural pair (see royaleI18n.ts header, "PLURAL KEYS"): ".one" for n===1,
  // ".other" for every other count, chosen by the calling component.
  "pages.results.count.one": "جولة {n}",
  "pages.results.count.other": "جولات {n}",
  "pages.results.emptyTitle": "لم تتم تسوية الجولات بعد",
  "pages.results.emptyBody": "العب جولة على اللوحة؛ وستظهر هنا كل بطاقة تفتحها، جولة بعد جولة.",
  "pages.results.tileWins": "فازت {winner} بـ {amount}",
  "pages.results.tileFallback": "الخانة",
  "pages.results.youWon": "لقد فزت بـ {amount}",
  "pages.results.noWinForYou": "لا فوز لك",
  "pages.results.replayLink": "إعادة اللعب",
  // Bare "Payout split" (no amount) — the upgraded payout-split header (owner
  // 2026-07-22) shows the eyebrow label and the pool amount as two separate
  // nodes, unlike pages.results.payoutSplit below which bakes the amount in.
  "pages.results.payoutSplitLabel": "تقسيم الدفع",
  "pages.results.payoutSplit": "تقسيم العائد · المجمّع {amount}",
  "pages.results.yourPullPrefix": "سحبتك ·",
  "pages.results.noPull": "لا سحبة",
  "pages.results.youKeptIt": "احتفظت بها",
  "pages.results.youSoldItForCash": "أعدت بيعها نقدًا",
  "pages.results.chaseAward": "المطاردة +{amount}",
  "pages.results.potLedgerFull": "دُفع المجمّع بقيمة {amount} كاملًا",
  "pages.results.pool": "المجمّع",
  "pages.results.potLedgerWithheld": "محتجز",
  "pages.results.potLedgerPaidIn": "المُضاف",
  "pages.results.potLedgerCashToBackers": "نقد إلى الداعمين",
  "pages.results.theChase": "المطاردة",
  "pages.results.protocol": "بروتوكول",
  "pages.results.jackpot": "الجائزة الكبرى",
  "pages.results.cardTrades": "عمليات البطاقات",
  "pages.results.statsAriaLabel": "مجاميع الجلسة",
  "pages.results.roundsPlayed": "الجولات التي تم لعبها",
  "pages.results.winRate": "معدل الفوز",
  "pages.results.cashWon": "النقد المكتسب",
  "pages.results.biggestPackPull": "أكبر سحبة باك",
  "pages.results.noneYet": "لا شيء بعد",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "احتمالات {pct}",
  "pages.results.oddsUnavailable": "الاحتمالات غير متاحة",
  "pages.results.collapseRoundAria": "طي الجولة {n}",
  "pages.results.expandRoundAria": "توسيع الجولة {n}",
  "pages.results.playersTitle": "لاعبون آخرون",
  "pages.results.playersCount.one": "لاعب واحد ({n})",
  "pages.results.playersCount.other": "{n} لاعبين",
  "pages.results.playersShow": "إظهار",
  "pages.results.playersHide": "إخفاء",
  "pages.results.playerBid": "الرهان",
  "pages.results.playerResult": "نتيجة",
  "pages.results.playerCash": "{amount} نقدًا",
  "pages.results.playerNoCards": "لا بطاقات",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner - mounted by
  // both RoyaleCollectionRoute and RoyaleWinningsStrip) ======================
  "pages.sellBack.ariaLabel": "إعادة بيع بطاقاتك",
  "pages.sellBack.title": "إعادة البيع",
  "pages.sellBack.hint": "سعر ثابت منذ لحظة فوزك، ولا يتم إعادة تسعيره أبدًا.",
  "pages.sellBack.quietState": "تتوفر إعادة البيع مع الجولات المباشرة.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers - a locale reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "منتهي الصلاحية",
  "pages.sellBack.countdownDaysHours": "متبقٍ {d}d {h}h",
  "pages.sellBack.countdownHoursMinutes": "متبقٍ {h}h {m}m",
  "pages.sellBack.countdownMinutes": "متبقٍ {m}m",
  "pages.sellBack.countdownSubMinute": "متبقٍ <1m",

  // --- royaleSellBack.ts: custody badges (sellBackCustodyBadge). Informational
  // only, sell-back stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "التسليم معلق",
  "pages.sellBack.badgeNeedsWallet": "يحتاج إلى محفظة",

  // --- royaleSellBack.ts: player-facing copy for every domain error code
  // (sellBackErrorCopy). Each pair is a title + the detail rendered under it.
  "pages.sellBack.error.quoteExpired.title": "انتهت صلاحية هذا العرض",
  "pages.sellBack.error.quoteExpired.detail":
    "انتهت مهلة إعادة البيع. ما زالت البطاقة ملكك؛ والسوق المفتوحة هي المخرج الآن.",
  "pages.sellBack.error.alreadyExercised.title": "تم بيعها بالفعل مرة أخرى",
  "pages.sellBack.error.alreadyExercised.detail": "أُعيد بيع هذه البطاقة بالفعل. إليك إيصال ذلك البيع.",
  "pages.sellBack.error.quoteVoid.title": "تم سحب العرض",
  "pages.sellBack.error.quoteVoid.detail":
    "سحبت العمليات عرض إعادة البيع هذا. تواصل مع الدعم إذا كنت تتوقع عائدًا.",
  "pages.sellBack.error.notQuoteOwner.title": "ليست بطاقتك",
  "pages.sellBack.error.notQuoteOwner.detail": "ينتمي عرض إعادة البيع هذا إلى حساب مختلف.",
  "pages.sellBack.error.cardNotDelivered.title": "البطاقة قيد التسليم",
  "pages.sellBack.error.cardNotDelivered.detail":
    "لم يكتمل تسليم البطاقة إلى محفظتك بعد. حاول مجددًا بعد لحظة.",
  "pages.sellBack.error.cardNotHeld.title": "البطاقة ليست في محفظتك",
  "pages.sellBack.error.cardNotHeld.detail":
    "لم تعد محفظتك تملك هذه البطاقة بعينها. لا يمكن استخدام العرض إلا للبطاقة الأصلية.",
  "pages.sellBack.error.returnTxRequired.title": "التوقيع مطلوب",
  "pages.sellBack.error.returnTxRequired.detail":
    "تحتاج إعادة البيع هذه إلى توقيعك لإرجاع البطاقة. وقّع ثم حاول مجددًا.",
  "pages.sellBack.error.returnNotConfirmed.title": "لم يتأكد الإرجاع",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "لم يتأكد إرجاع البطاقة على السلسلة. ما زال العرض فعالًا؛ أعد المحاولة عندما تكون جاهزًا.",
  "pages.sellBack.error.rateLimited.title": "محاولات كثيرة جدًا",
  "pages.sellBack.error.rateLimited.detail": "انتظر لحظة ثم حاول مجددًا.",
  "pages.sellBack.error.accountRequired.title": "تسجيل الدخول مطلوب",
  "pages.sellBack.error.accountRequired.detail": "صِل حسابك لإعادة بيع البطاقة.",
  "pages.sellBack.error.quoteNotFound.title": "لم يتم العثور على العرض",
  "pages.sellBack.error.quoteNotFound.detail": "عرض إعادة البيع هذا لم يعد موجودًا.",
  "pages.sellBack.error.quoteIdRequired.title": "حدث خطأ ما",
  "pages.sellBack.error.quoteIdRequired.detail": "يفتقد طلب إعادة البيع معلومات مطلوبة.",
  "pages.sellBack.error.unknown.title": "فشل إعادة البيع",
  "pages.sellBack.error.unknown.detail": "حدث خطأ ما من جانبنا. حاول مرة أخرى بعد قليل.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "تُعاد محاولة المزامنة المباشرة تلقائيًا. وتحافظ العروض المثبّتة على سعرها.",
  "pages.sellBack.offlineTitle": "أنت غير متصل بالإنترنت",
  "pages.sellBack.offlineBody": "أعد الاتصال وعروضك المقفلة موجودة هنا.",
  "pages.sellBack.loadFailedTitle": "تعذر تحميل العروض",
  "pages.sellBack.loadFailedBody": "تحافظ العروض المثبّتة على سعرها. أعد تحميلها بعد لحظة.",
  "pages.sellBack.tryAgain": "حاول مجددًا",
  "pages.sellBack.emptyTitle": "لا بطاقات لإعادة بيعها بعد",
  "pages.sellBack.emptyBody": "اربح باك، وسيظهر عرض إعادة شرائه هنا فور تسوية الجولة.",
  "pages.sellBack.pastSellBacks": "عمليات إعادة البيع السابقة",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "عرض محفوظ",
  "pages.sellBack.noExpiry": "لا انتهاء الصلاحية",
  "pages.sellBack.preparing": "جارٍ التحضير…",
  "pages.sellBack.sellBackAmount": "إعادة بيع {amount}",
  "pages.sellBack.waitingSignature": "في انتظار توقيعك…",
  "pages.sellBack.signatureUnwired": "تحتاج إعادة بيع هذه البطاقة إلى توقيع المحفظة. يظل عرضك المثبّت فعالًا.",
  "pages.sellBack.confirmInWallet": "أكّد في محفظتك…",
  "pages.sellBack.sellingBack": "إعادة البيع…",
  "pages.sellBack.receiptAlreadySold": "أُعيد بيعها بالفعل",
  "pages.sellBack.receiptSoldBack": "أُعيد بيعها",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "{amount} مدفوع · {rail}",
  "pages.sellBack.railGameBalance": "رصيد اللعبة",

  // --- RoyaleSellBackPanel.tsx: the "Past sell-backs" history rows.
  "pages.sellBack.historySoldBack": "تم بيعها مرة أخرى · {amount}",
  "pages.sellBack.historyExpired": "انتهت صلاحية العرض",
  "pages.sellBack.historyWithdrawn": "تم سحب العرض",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "أبدًا",
  "pages.profile.relTime.justNow": "الآن",
  "pages.profile.relTime.minutesAgo": "منذ {n}m",
  "pages.profile.relTime.hoursAgo": "منذ {n}h",
  "pages.profile.relTime.daysAgo": "منذ {n}d",
  "pages.profile.relTime.monthsAgo": "منذ {n}mo",
  "pages.profile.noDate": "-",

  "pages.profile.count.settledRoundOne": "جولة مسوّاة ({n})",
  "pages.profile.count.settledRoundOther": "{n} جولات مسوّاة",
  "pages.profile.count.roundOne": "جولة واحدة ({n})",
  "pages.profile.count.roundOther": "{n} جولات",
  "pages.profile.count.settledOutcomeOne": "نتيجة مسوّاة واحدة ({n})",
  "pages.profile.count.settledOutcomeOther": "{n} نتائج مسوّاة",
  "pages.profile.xOfRoundsOne": "{x} من جولة واحدة ({n})",
  "pages.profile.xOfRoundsOther": "{x} من أصل {n} جولة",

  "pages.profile.follow": "متابعة",
  "pages.profile.following": "تتابعه",
  "pages.profile.linkCopied": "تم نسخ الرابط",
  "pages.profile.headlineStatsAria": "الإحصاءات الرئيسية",

  "pages.profile.chartWindow7d": "7 د",
  "pages.profile.chartWindow30d": "30 د",
  "pages.profile.chartWindowAll": "الكل",
  "pages.profile.chartValueAria": "قيمة المجموعة من {from} إلى {to} في هذه النافذة",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "الآن",
  "pages.profile.viewRoundResultsAria": "عرض نتائج الجولة #{n}",

  "pages.profile.collectionViewAll": "جميع البطاقات",
  "pages.profile.collectionViewVault": "في القبو",
  "pages.profile.collectionViewOffers": "العروض",
  "pages.profile.collectionViewHistory": "السجل",
  "pages.profile.collectionStateAria": "حالة المجموعة",
  "pages.profile.openCollection": "فتح المجموعة ↗",
  "pages.profile.collectionEmptyHistoryTitle": "لا توجد عمليات إعادة بيع حتى الآن",
  "pages.profile.collectionEmptyHistoryBody": "أعد بيع بطاقة محتفظ بها، وسيظهر إيصالها هنا.",
  "pages.profile.inVault": "في القبو · الجولة #{n}",
  "pages.profile.sellBackOffer": "عرض إعادة البيع · {amount}",
  "pages.profile.soldBack": "أُعيد بيعها",
  "pages.profile.soldAtSettlement": "بيعت عند التسوية",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "توجد إجراءات إعادة البيع والعروض المباشرة في صفحة المجموعة.",

  "pages.profile.pnlByRound": "الربح والخسارة بالجولة",
  "pages.profile.pnlSubtitle": "آخر {n} جولة مراهنة · المكاسب صعودًا والخسائر هبوطًا · {wins}W {losses}L",
  "pages.profile.pnlAria": "النتيجة الصافية لكل جولة من آخر {n} جولة",
  "pages.profile.pnlColAria": "الجولة {n}: {signed}",
  "pages.profile.pnlTooltip": "R{n} · {signed}",

  "pages.profile.recentForm": "الأداء الأخير",
  "pages.profile.recentFormSubtitle": "آخر {n} جولة مراهنة، من الأقدم أولًا",
  "pages.profile.formColAria": "الجولة {n}: {result} {amount}",
  "pages.profile.won": "فاز",
  "pages.profile.lost": "خسر",
  "pages.profile.formW": "ف",
  "pages.profile.formL": "خ",

  "pages.profile.leaderboardEyebrow": "المتصدرين · {mode}",
  "pages.profile.modeMostProfitable": "الأكثر ربحية",
  "pages.profile.modeHighestVolume": "أعلى حجم",
  "pages.profile.topPlayers": "أفضل {n} لاعبين",
  "pages.profile.metricProfit": "ربح",
  "pages.profile.metricVolume": "الحجم",
  "pages.profile.metricNetPnl": "صافي الربح والخسارة",
  "pages.profile.filtersAria": "مرشحات المتصدرين",
  "pages.profile.metricFilterAria": "المقياس",
  "pages.profile.windowFilterAria": "نافذة",
  "pages.profile.window1d": "1د",
  "pages.profile.window7d": "7 د",
  "pages.profile.window30d": "30 د",
  "pages.profile.windowAll": "الكل",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "اللاعب",
  "pages.profile.thRounds": "الجولات",
  "pages.profile.you": "أنت",
  "pages.profile.leaderboardEmpty": "لا يوجد لاعبون في هذه النافذة بعد. تمتلئ اللوحة مع تسجيل الرهانات والعوائد.",

  "pages.profile.notFoundTitle": "لا توجد جولات مفهرسة حتى الآن",
  "pages.profile.notFoundBody": "لم تُسوِّ {wallet} جولة فهرسها الخادم بعد.",
  "pages.profile.offlineTitle": "الملف الشخصي غير متاح",
  "pages.profile.offlineBody": "تحتاج عمليات البحث عن اللاعبين إلى اتصال مباشر. أعد المحاولة لجلب هذا السجل.",
  "pages.profile.retry": "إعادة المحاولة",

  "pages.profile.collectorSince": "جامع منذ {month}",
  "pages.profile.lastActive": "نشط منذ {rel}",
  "pages.profile.rankAllTime": "الرتبة #{n} · طوال الوقت",
  "pages.profile.netPnl": "صافي الربح والخسارة",
  "pages.profile.lifetime": "طوال المدة",
  "pages.profile.bidWinRate": "معدل فوز الرهانات",
  "pages.profile.cardsWon": "البطاقات الفائزة",
  // SE-census S4 leak fix (2026-08-17): these two values were bare English
  // ("Grail {n}" / "{n} GRAILS"), so the ar profile's cards-owned stat read
  // "GRAILS 0" with no Arabic at all. GRAIL itself stays Latin on purpose —
  // every other ar surface treats it as the untranslated product term
  // ("سحبة GRAIL", "قاعدة Grail") — but it gets its Arabic carrier word here
  // like everywhere else.
  "pages.profile.grailsOne": "{n} بطاقة GRAIL",
  "pages.profile.grailsOther": "{n} بطاقات GRAIL",
  "pages.profile.totalStaked": "إجمالي الرهان",
  "pages.profile.betsCount": "{n} رهانًا",
  "pages.profile.biggestRound": "أكبر جولة",
  "pages.profile.singleRoundSwing": "تذبذب جولة واحدة",
  "pages.profile.playerStatsAria": "إحصائيات اللاعب",
  "pages.profile.winsLosses": "انتصارات / خسائر",
  "pages.profile.roundsPlayed": "الجولات التي تم لعبها",
  "pages.profile.betsPlaced": "الرهانات الموضوعة",
  "pages.profile.voidedRounds": "جولات ملغاة",

  "pages.profile.tablePlayer": "لاعب اللوحة",
  "pages.profile.playerFallback": "لاعب",
  "pages.profile.localEmptyTitle": "لا جولات في هذه الجلسة بعد",
  "pages.profile.localEmptyBody": "لم يراهن {name} على خانة في هذه الجلسة بعد.",
  "pages.profile.sessionNet": "صافي الجلسة",
  "pages.profile.cashSplitsOnly": "الانقسامات النقدية فقط",
  "pages.profile.thisSession": "هذه الجلسة",
  "pages.profile.packsOpened": "الباكات المفتوحة",
  "pages.profile.onBackedTiles": "على الخانات المدعومة",
  "pages.profile.biggestPull": "أكبر سحب",
  "pages.profile.noneYet": "لا شيء حتى الآن",
  "pages.profile.recentActivity": "النشاط الأخير",
  "pages.profile.noSettledOutcomesPlayer": "لا نتائج مسوّاة لهذا اللاعب في هذه الجلسة بعد.",

  "pages.profile.pageTitle": "الملف الشخصي",
  "pages.profile.followingCount": "يتابع {n}",
  "pages.profile.collectionValue": "قيمة المجموعة",
  "pages.profile.updatedAgo": "حُدّث {rel}",
  "pages.profile.noCardsYet": "لا بطاقات بعد",
  "pages.profile.change30d": "التغير خلال 30D",
  "pages.profile.allNewIn30": "كل الجديد خلال 30 يومًا",
  "pages.profile.noChange": "لا تغيير",
  "pages.profile.cardsOwned": "البطاقات المملوكة",
  "pages.profile.realizedProceeds": "العائدات المحققة",
  "pages.profile.sellBackOne": "إعادة بيع {n}",
  "pages.profile.sellBackOther": "عمليات إعادة البيع {n}",
  "pages.profile.tabHighlights": "أبرز الأحداث",
  "pages.profile.tabCollection": "المجموعة",
  "pages.profile.tabActivity": "نشاط",
  "pages.profile.tabStats": "الإحصاءات",
  "pages.profile.tabsAria": "أقسام الملف الشخصي",
  "pages.profile.emptyHighlightsTitle": "لا جولات مسجلة بعد",
  "pages.profile.emptyHighlightsBody":
    "راهن على خانة في اللوحة ليمتلئ ملفك: منحنى القيمة، والنشاط، والمجموعة، والترتيب.",
  "pages.profile.collectionPerformance": "أداء المجموعة",
  "pages.profile.chartWindowAria": "نافذة الرسم البياني",
  "pages.profile.chartEmpty": "لا قيمة للمجموعة بعد. احتفظ بسحبة فائزة ليبدأ المنحنى هنا.",
  "pages.profile.thisWindow": "هذه النافذة",
  "pages.profile.chartNoChanges": "لا توجد تغييرات في المجموعة في هذه النافذة.",
  "pages.profile.viewAll": "عرض الكل {n}",
  "pages.profile.collectionHighlights": "أبرز مقتنيات المجموعة",
  "pages.profile.seeAll": "عرض الكل ({n})",
  "pages.profile.noCardsInVault": "لا بطاقات في الخزنة بعد. احتفظ بسحبة وستظهر هنا كبطاقة مُقيّمة.",
  "pages.profile.activityAria": "نشاط",
  "pages.profile.roundHistoryAria": "تاريخ الجولة",
  "pages.profile.onThisDevice": "{count} على هذا الجهاز",
  "pages.profile.noActivityYet": "لا نشاط بعد. تظهر هنا الجولات التي تراهن فيها والبطاقات التي تحتفظ بها أو تعيد بيعها.",
  "pages.profile.performanceAria": "أداء",
  "pages.profile.walletAria": "محفظة",
  "pages.profile.walletEyebrow": "محفظة",
  "pages.profile.emptyStatsBody": "راهن على خانة في اللوحة لتتراكم هنا أرباحك وخسائرك ومعدل فوزك ودفتر الجولات.",
  "pages.profile.findPlayerAria": "العثور على لاعب",
  "pages.profile.lookUpWallet": "البحث عن محفظة",
  "pages.profile.walletPlaceholder": "الصق عنوان المحفظة أو معرف الضيف",
  "pages.profile.view": "عرض",
  "pages.profile.myProfile": "ملفي الشخصي",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx, mounted in
  // the #wallet section right below the walletEyebrow/walletAria header
  // above) - LOCAL/PROOF ONLY, no money moves off a money runtime, but the
  // copy is written in real-money voice since it is the real-money flow's UI.
  "pages.profile.withdraw.ariaLabel": "سحب المكاسب",
  "pages.profile.withdraw.title": "سحب",
  "pages.profile.withdraw.subtitle": "قم بصرف جزء أو كل رصيدك إلى محفظة Solana.",
  "pages.profile.withdraw.available": "متاح",
  "pages.profile.withdraw.amountLabel": "المبلغ (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "مبالغ السحب الجاهزة",
  "pages.profile.withdraw.destinationLabel": "محفظة الوجهة",
  "pages.profile.withdraw.destinationPlaceholder": "عنوان سولانا",
  "pages.profile.withdraw.submit": "سحب",
  "pages.profile.withdraw.submitBusy": "جارٍ إرسال الطلب…",
  "pages.profile.withdraw.note":
    "توافق على كل سحب بتوقيع المحفظة، ويُدفع USDC إلى عنوان Solana الذي تقدمه.",
  "pages.profile.withdraw.errorInvalidAmount": "أدخل مبلغًا صالحًا (0.01 إلى 10,000).",
  "pages.profile.withdraw.errorInvalidDestination": "أدخل عنوان وجهة سولانا صالحًا.",
  "pages.profile.withdraw.requesting": "جارٍ طلب سحب {amount}…",
  "pages.profile.withdraw.sent": "أُرسل السحب - {amount} إلى {destShort}…",
  "pages.profile.withdraw.signatureRequired":
    "مطلوب توقيع المحفظة - وقّع nonce السحب بمحفظتك (يُرفض رمز Privy وحده).",
  "pages.profile.withdraw.refused": "تم رفض السحب ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible PLAYER STATS
  // dashboard mounted by the profile route's Stats tab). CAPS micro-labels are
  // a deliberate house style: keep a locale's own caps convention, never
  // lowercase them just because the source shouts. The GRAIL tier row keeps its
  // brand name in English and needs no key (see royaleI18n.ts's rules). ======
  "pages.stats.title": "إحصائيات اللاعب",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} جولات · {packs} باكات",
  "pages.stats.noRoundsYet": "لا جولات بعد",
  "pages.stats.emptyBody": "لا جولات بعد. راهن على خانة لبدء تتبع صافي الربح والخسارة ومعدل الفوز والسحبات.",
  "pages.stats.netPnl": "صافي الربح والخسارة",
  "pages.stats.roi": "عائد الاستثمار",
  "pages.stats.winRate": "معدل الفوز",
  "pages.stats.totalStaked": "إجمالي الرهان",
  "pages.stats.totalWon": "إجمالي المكاسب",
  "pages.stats.holdings": "المقتنيات",
  "pages.stats.cardsHeld.one": "بطاقة {n}",
  "pages.stats.cardsHeld.other": "بطاقات {n}",
  "pages.stats.packsOpened": "الباكات المفتوحة",
  "pages.stats.chaseHits": "إصابات المطاردة",
  "pages.stats.bestRound": "أفضل جولة",
  "pages.stats.worstRound": "أسوأ جولة",
  "pages.stats.biggestPackPull": "أكبر سحبة باك",
  "pages.stats.noneYet": "لا شيء بعد",
  "pages.stats.perTierHits": "السحبات حسب الدرجة",
  "pages.stats.tierTop": "TOP",
  "pages.stats.tierCommon": "شائع",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "see last round results" record page) ============================
  "pages.arenaResults.title": "نتائج الساحة",
  "pages.arenaResults.backToArena": "→ العودة إلى الساحة",
  "pages.arenaResults.emptyBody": "لم تُسوَّ أي جولة في الحلبة بعد.",
  "pages.arenaResults.enterArena": "دخول الحلبة ←",
  "pages.arenaResults.matchNumber": "المباراة #{n}",
  // The headline reads "<player name> takes the pot"; the self view uses the
  // second-person verb. The name itself is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "تأخذ المجمّع",
  "pages.arenaResults.takesThePot": "يأخذ المجمّع",
  "pages.arenaResults.potCards.one": "المجمّع · بطاقة {n}",
  "pages.arenaResults.potCards.other": "المجمّع · بطاقات {n}",
  "pages.arenaResults.winner": "الفائز",
  "pages.arenaResults.theChase": "المطاردة",
  "pages.arenaResults.protocol": "بروتوكول",
  "pages.arenaResults.cardsValue.one": "بطاقة {n} · {amount}",
  "pages.arenaResults.cardsValue.other": "بطاقات {n} · {amount}",
  "pages.arenaResults.cardsWonAria": "البطاقات الفائزة",
  "pages.arenaResults.toTheWinner": "إلى الفائز",
  "pages.arenaResults.smallPot": "مجمّع أقل من {n} بطاقات: أخذ الفائز كل شيء. ولم تأخذ المطاردة أو حصة البروتوكول شيئًا.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "ملف البطاقة",
  "pages.cardDetailRoute.notFoundTitle": "لم يتم العثور على البطاقة",
  "pages.cardDetailRoute.notFoundBody":
    "يشير هذا الرابط إلى بطاقة لم يرها هذا المتصفح بعد. تُستخرج البطاقات من جولاتك ومن لقطة مجمّع CollectorCrypt الحالية.",
  "pages.collection.viewRound": "عرض الجولة ↗",
  "pages.sellBack.showAllOffers": "عرض جميع عروض {n}",
  "pages.sellBack.showFewerOffers": "عرض عروض أقل",
  "pages.common.shareCard": "مشاركة البطاقة",
} as Record<string, string>;
