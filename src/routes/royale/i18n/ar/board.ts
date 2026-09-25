// Arabic (العربية): "board" segment. Same key set as en/board.ts; the
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
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "اللاعبون والأرباح والخسائر النقدية",
  "board.playerScoreboard.title": "اللاعبون",
  "board.playerScoreboard.open": "الإحصاءات والكتم",
  "board.playerScoreboard.pinnedHint": "مثبّت · Esc للإغلاق",
  "board.playerScoreboard.holdHint": "اضغط مطولًا على Tab للمعاينة · انقر للتثبيت",
  "board.playerScoreboard.close": "إغلاق لوحة نتائج اللاعبين",
  "board.playerScoreboard.windowAria": "نافذة الأرباح والخسائر",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "الكل",
  "board.playerScoreboard.partialHistory": "سجل جزئي. تستخدم التصنيفات نافذة النقد المسوّى المحتفظ بها.",
  "board.playerScoreboard.statsUnavailable": "سجل الأرباح والخسائر غير متاح هنا. الرهانات الحالية ما زالت مباشرة.",
  "board.playerScoreboard.playerColumn": "اللاعب",
  "board.playerScoreboard.pnlColumn": "الأرباح والخسائر النقدية",
  "board.playerScoreboard.voiceColumn": "الدردشة",
  "board.playerScoreboard.loading": "جارٍ تحميل اللاعبين…",
  "board.playerScoreboard.empty": "لم يراهن أحد على أي خانة في هذه الجولة.",
  "board.playerScoreboard.bot": "روبوت",
  "board.playerScoreboard.tiles": "الخانات {tiles}",
  "board.playerScoreboard.stake": "الرهان {amount}",
  "board.playerScoreboard.notAvailable": "غير متاح",
  "board.playerScoreboard.rounds": "{n} جولات",
  "board.playerScoreboard.youBadge": "أنت",
  "board.playerScoreboard.mute": "كتم",
  "board.playerScoreboard.unmute": "إلغاء الكتم",
  "board.playerScoreboard.muteAria": "كتم {name} في الدردشة",
  "board.playerScoreboard.unmuteAria": "إلغاء كتم {name} في الدردشة",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "أنت",
  "board.common.noWin": "لا فوز",
  "board.common.roundSettled": "تمت تسوية الجولة",
  "board.common.youWon": "لقد فزت بـ {amount}",
  "board.common.pack": "باك",
  "board.common.packs": "باكات",
  "board.common.secondsSuffix": "ث",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "مغلق",
  "board.tile.lockedStampSub": "لا مزيد من الرهانات",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: يتجاوز رهانك {bet} رصيدك النقدي {balance}. خفّض الرهان أو أودِع.",
  "board.tile.ariaBack": "ادعم {label} بمبلغ {amount}",
  "board.tile.ariaBackShortcutSuffix": "، الاختصار {shortcut}",
  "board.tile.ariaOddsChance": "احتمال الفوز {pct}",
  "board.tile.ariaBackers": "{count} داعمين",
  "board.tile.yourPortraitAlt": "صورتك",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · لا يوجد باك حتى الآن",
  "board.tile.noStake": "لا رهان",
  "board.tile.youOwn": "تملك {amount}",
  "board.tile.youOwnShareSuffix": "· {pct}",
  "board.tile.packsOpenAtLock": "تُفتح الباكات عند القفل",
  "board.tile.resultOpened": "فُتح · {amount} من البطاقات",
  "board.tile.resultWinner": "الفائز · {amount} من البطاقات",
  "board.tile.resultLost": "خسر القرعة · {amount} من البطاقات",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "فُتح",
  "board.tile.resultWinnerWord": "الفائز",
  "board.tile.resultLostWord": "خسر القرعة",
  "board.tile.resultShortWon": "فوز",
  "board.tile.resultShortLost": "خسارة",
  "board.tile.overBalance": "تجاوز الرصيد",
  "board.tile.overBalanceTitle": "المطلوب {needed} · لديك {have}. خفّض الرهان أو أودِع.",
  "board.tile.overCap": "يتجاوز حدّك {amount} (الإعدادات)",
  "board.tile.needHave": "المطلوب {needed} · لديك {have}",
  "board.tile.clueExactCardOdds": "هذه البطاقة تحديدًا · احتمال السحبة {pct}",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "حجم الرهان",
  "board.stakeControl.packMatchTitle": "كل نقرة على الخانة تراهن على باك كامل من {packName}.",
  "board.stakeControl.packMatchTag": "المراهنة على باك واحد من {packName} لكل نقرة",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "كل نقرة على الخانة تراهن على {n} باك كامل من {packName}.",
  "board.stakeControl.packMatchTitleOther": "كل نقرة على الخانة تراهن على {n} باكات كاملة من {packName}.",
  "board.stakeControl.packMatchTagOne": "المراهنة على {n} باك من {packName} لكل نقرة",
  "board.stakeControl.packMatchTagOther": "المراهنة على {n} باكات من {packName} لكل نقرة",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} باك {packName} لكل نقرة",
  "board.stakeControl.bidPackGroupAria": "راهن على باك كامل في خانة",
  "board.stakeControl.bidPackTag": "المراهنة على باك",
  "board.stakeControl.bidPackInfoTitle":
    "تضع نقرة واحدة باكًا مختومًا كاملًا على خانة. يبقى الباك كما هو ولا يندمج أبدًا في باك أكبر.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "اختر باكًا وعدده. تراهن نقرة واحدة على المكدس الكامل في خانة؛ والباكات الأكبر تسحب بطاقات أكبر. اختر الخانة بمفاتيح الأرقام من 1 إلى 8.",
  "board.stakeControl.bidPackInfoAria": "ما المراهنة على باك؟",
  "board.stakeControl.packSelectedTitle": "محدّد. انقر مرة أخرى للعودة إلى رهان بقيمة {amount}.",
  "board.stakeControl.packChipTitle": "كل نقرة على الخانة تراهن على باك واحد من {packName} ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "محدّد. كل نقرة على الخانة تراهن على {n} باك من {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "محدّد. كل نقرة على الخانة تراهن على {n} باكات من {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "كل نقرة على الخانة تراهن على {n} باك من {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "كل نقرة على الخانة تراهن على {n} باكات من {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "تجاوز الرصيد",
  "board.stakeControl.overBalanceBody": "يتطلب أكثر من رصيدك النقدي البالغ {amount}.",
  "board.stakeControl.bidAmountTag": "المراهنة بمبلغ",
  "board.stakeControl.bidAmountInfoTitle":
    "أضف أي مبلغ إلى خانة. تتحول الأموال السائبة إلى باكات أكبر عند تجاوز سعر كل باك.",
  "board.stakeControl.bidAmountInfoAria": "ما المراهنة بمبلغ؟",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "أضف إلى رهان الخانة",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "راهن بمبلغ في خانة",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "عدد الباكات المراهن عليها لكل نقرة",
  "board.stakeControl.packCountDecAria": "المراهنة على باكات أقل لكل نقرة",
  "board.stakeControl.packCountIncAria": "المراهنة على باكات أكثر لكل نقرة",
  "board.stakeControl.packCountValueTitleOne": "{n} باك من الفئة المفعّلة لكل نقرة",
  "board.stakeControl.packCountValueTitleOther": "{n} باكات من الفئة المفعّلة لكل نقرة",
  "board.stakeControl.incrementTitle": "قم بزيادة الرهان المحدد إلى {amount}",
  "board.stakeControl.customAriaLabel": "مبلغ رهان مخصص بـ USDC؛ يُثبت بالضغط على Enter أو بالنقر خارج الحقل",
  "board.stakeControl.customOverBalanceTitle": "يتجاوز رصيدك النقدي {amount}. أودِع أو خفّض الرهان.",
  "board.stakeControl.customTitle": "اكتب أي مبلغ؛ اضغط Enter أو انقر خارج الحقل لتعيينه",
  "board.stakeControl.resetTitle": "إعادة تعيين الرهان المحدد إلى {amount}",
  "board.stakeControl.reset": "إعادة ضبط",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "استراتيجية الرهان التلقائي، تُفعّل عند إغلاق الجولة",
  "board.betRail.strategyArmedTip": "مفعّلة، تُنفّذ خلال {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}، مفعّلة، تُنفّذ خلال {seconds} ثانية",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}، مفعّلة، تُنفّذ خلال {seconds} ثانية. انقر لإيقافها.",
  "board.betRail.strategyAriaClickArm": "{name}. انقر لتفعيلها.",
  "board.betRail.moreStrategiesAria": "المزيد من استراتيجيات الرهان التلقائي",
  "board.betRail.moreStrategiesTitle": "المزيد من الاستراتيجيات",
  "board.betRail.cancelArmedAria": "إلغاء الرهان التلقائي المفعّل",
  "board.betRail.autoBetCancelled": "تم إلغاء الرهان التلقائي.",
  "board.betRail.roundLockedSkip": "أُغلقت الجولة قبل تنفيذ الرهان التلقائي.",
  "board.betRail.notEnoughBalanceSkip": "لا يوجد رصيد كافٍ؛ لم يُنفّذ الرهان التلقائي.",
  "board.betRail.firedAtClose": "نُفّذت استراتيجية {name} عند إغلاق الجولة.",
  "board.betRail.firedAtClosePartial": "نُفّذت استراتيجية {name} عند إغلاق الجولة: {covered} من أصل {total} خانات.",
  "board.betRail.strategyGuideAria": "دليل استراتيجية الرهان التلقائي",
  "board.betRail.strategyGuideTitle": "دليل الاستراتيجية",
  "board.betRail.autoBetEyebrow": "الرهان التلقائي",
  "board.betRail.firesInSeconds": "تُنفّذ خلال {seconds}s",
  "board.betRail.strategiesDialogAria": "استراتيجيات الرهان التلقائي",
  "board.betRail.closeStrategiesAria": "إغلاق استراتيجيات الرهان التلقائي",
  "board.betRail.strategiesHeading": "استراتيجيات الرهان التلقائي",
  "board.betRail.strategiesIntro":
    "اضغط على واحدة لتفعيلها بالرهان المحدد ({amount}). تُنفّذ قبل إغلاق الجولة مباشرة، وفق ترتيب المبلغ الموجود في كل خانة حينها؛ إنها إشارة الجمهور.",
  "board.betRail.contrarianHeading": "اختيارات مخالفة للجمهور",
  "board.betRail.contrarianIntro":
    "عندما يطارد الجميع الخانة الأقل تصبح مزدحمة، لذلك قد تدفع الخانة الثانية من الأسفل أفضل. تبقى هذه الاختيارات خارج الشريط الرئيسي لإبقائه مرتبًا.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "حسابك وحجم الرهان",
  "board.betRail.balance": "الرصيد",
  "board.betRail.activeStakes": "حصص نشطة",
  "board.betRail.collection": "المجموعة",
  "board.betRail.cardCountViewAllSingular": "بطاقة {count} · عرض الكل",
  "board.betRail.cardCountViewAllPlural": "بطاقات {count} · عرض الكل",
  "board.betRail.moreCount": "+{count} أخرى",
  "board.betRail.noCardsYet": "لا توجد بطاقات في المجموعة بعد؛ اربح خانة واحتفظ ببطاقتها.",
  "board.betRail.lastResult": "النتيجة الأخيرة",
  "board.betRail.eachClickAdds": "تضيف كل نقرة {amount}",
  "board.betRail.depositToPlay": "أودِع للعب",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "المطلوب {unit} - لديك {balance}",
  "board.betRail.allTilesPartialCover": "{name} - يغطي {covered} من 8 خانات بقيمة {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "بال",
  "board.betRail.dockStakes": "حصص",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "الجولة التالية خلال {seconds} ثانية",
  "board.core.nextRoundLine": "الجولة التالية خلال {secs}",
  "board.core.playersDecidingAria": "اتخذ {decided} من أصل {total} من اللاعبين الآخرين قرارهم",
  "board.core.playersDecidingLine": "اللاعبون يقررون {ratio}",
  "board.core.pastRoundResultsAria": "نتائج الجولة السابقة",
  "board.core.pastRounds": "الجولات السابقة",
  "board.core.winsAmount": "{label} يفوز بـ {amount}",
  "board.core.youLost": "لقد خسرت!",
  "board.core.didNotStake": "لم تراهن في هذه الجولة",
  "board.core.keepCard": "احتفظ بالبطاقة ({amount})",
  "board.core.sellAmount": "بيع {amount}",
  "board.core.decideHint": "اتخذ قرارك الآن أو أثناء الجولة التالية",
  "board.core.roundResultLink": "نتيجة الجولة #{roundId}",
  "board.core.fullReceiptHint": "الإيصال الكامل ← نتائج الجولة",
  "board.core.splitReceiptHint": "التقسيم · الإيصال ← نتائج الجولة",
  "board.core.eyebrowDrawing": "سحب الفائز",
  "board.core.eyebrowPullsIn": "اكتملت السحبات",
  "board.core.eyebrowLocked": "مغلقة",
  "board.core.headlineDrawing": "تحددها قرعة واحدة",
  "board.core.headlinePullsIn": "فُتحت كل الباكات",
  "board.core.headlineRoundLocked": "أُغلقت الجولة",
  "board.core.headlinePacksOpening": "جارٍ فتح الباكات…",
  "board.core.subDrawing": "قرعة موزونة قابلة للتحقق",
  "board.core.subPullsIn": "يُسحب الفائز الآن",
  "board.core.subIntro": "{count} {noun} على الخط",
  "board.core.subOpening": "فتح {count} {noun} على اللوحة",
  "board.core.pool": "المجمّع",
  "board.core.totalPool": "إجمالي المجمّع",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "الجولة مفتوحة",
  "board.core.clockLockedRevealing": "مغلقة · جارٍ الكشف",
  "board.core.clockSettled": "تمت التسوية",
  "board.core.clockAriaLabel": "{label}، {seconds} ثانية",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "بطاقة مُقيّمة عادية؛ يحتفظ بها أكبر داعم أو يعيد بيعها، بالتناسب.",
  "board.settlement.dispositionSellBackSplit": "قاعدة Grail: تُباع مجددًا افتراضيًا ويُقسّم USDC بين داعمي الخانة.",
  "board.settlement.dispositionTopBackerKeeps": "قاعدة Grail: يحتفظ بها أكبر داعم ويدفع للآخرين حصتهم.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s لاتخاذ القرار",
  "board.settlement.panelAria": "تفاصيل وتسوية الخانة",
  "board.settlement.collapsePanelAria": "طي اللوحة",
  "board.settlement.expandPanelAria": "توسيع اللوحة",
  "board.settlement.roundResultsLink": "نتائج الجولة",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "لوحة الجولة",
  "board.settlement.clickTileToBack": "تصل الانتصارات إلى هنا. انقر على أي خانة لدعمها بمبلغ {amount}.",
  "board.settlement.lastResultLine": "النتيجة الأخيرة · الجولة #{roundId}، {outcome}",
  "board.settlement.youWonOutcome": "لقد فزت بـ {amount}",
  "board.settlement.view": "عرض",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "خسارة الخانة · لماذا خسرت",
  "board.settlement.losingTileTitle": "{label} · {amount} على الخانة",
  "board.settlement.loserWhy":
    "فُتحت {cardName} ({amount})، واستقرت القرعة على {winnerLabel}. لم تدفع {pct} من التذاكر شيئًا{suffix}",
  "board.settlement.loserWhySuffixWithStake": "، بما في ذلك {amount} الخاص بك.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "كانت الخانة فارغة؛ لا رهان ولا تذكرة قرعة.",
  "board.settlement.backToSettlement": "العودة إلى التسوية · فاز {winnerLabel}",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · البطاقة {index}/{total} · {amount} على الخانة",
  "board.settlement.pullCaptionSingle": "{label} · {amount} على الخانة",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "جارٍ فتح الباكات",
  "board.settlement.revealOpenedTitle": "فتحت {label} البطاقة {cardName}",
  "board.settlement.revealOddsLine": "{amount} · احتمال {pct} للفوز بالمجمّع {poolAmount}. يجري سحب الفائز الآن.",
  "board.settlement.revealEmpty": "تُفتح الباكات على اللوحة، وستظهر قرعة الفائز بعد لحظات.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "النتيجة الأخيرة · الجولة #{roundId}",
  "board.settlement.tileTakesTable": "تأخذ {label} الطاولة مقابل {amount}",
  "board.settlement.whyWon": "حسمتها القرعة الموزونة القابلة للتحقق؛ كانت {label} تملك {pct}% من المجمّع عند القفل.",
  "board.settlement.lostNoStakeIn": "لقد خسرت، ليس لديك أي حصة في {label}",
  "board.settlement.theWinnerFallback": "الفائز",
  "board.settlement.wonNoStake": "فاز {label} · لم يكن لديك أي حصة",
  "board.settlement.aTileFallback": "الخانة",
  "board.settlement.lossNoteWithStake": "كان رهانك {amount} على خانات أخرى؛ مرّر فوق إحداها لمعرفة قصتها.",
  "board.settlement.lossNoteNone": "لم تدعم أي خانة في هذه الجولة.",
  "board.settlement.topCardOfRound": "البطاقة العلوية من الجولة · {label}",
  "board.settlement.keepCardTo": "احتفظ بالبطاقة ({amount}) ← المجموعة",
  "board.settlement.sellBackFor": "إعادة البيع مقابل {amount}",
  "board.settlement.continueNextRound": "المتابعة إلى الجولة التالية",
  "board.settlement.continue": "متابعة",
  "board.settlement.keepSellHint":
    "الاحتفاظ = البطاقة في المجموعة · البيع = {amount} الآن ({pct}% من قيمة البطاقة، إعادة شراء CC لهذا الباك) · {noAction}",
  "board.settlement.noActionKept": "لا إجراء = تُحتفظ البطاقة لك.",
  "board.settlement.noActionAutoSell": "لا إجراء = تُباع تلقائيًا عند انتهاء الجولة التالية.",
  "board.settlement.revealOnlyNote":
    "الخانات الخاسرة تُكشف فقط في هذا المسار، وتعود سحباتها إلى الخزنة. بطاقة الخانة الفائزة وحدها تدفع العائد.",
  "board.settlement.payoutSplit": "تقسيم العائد",
  "board.settlement.poolChaseFeedLine": "المجمّع {pool} · تغذية المطاردة {feed}",
  "board.settlement.chaseAddSuffix": "· المطاردة +{amount}",
  "board.settlement.physicalCardArrow": "البطاقة المادية ←",
  "board.settlement.grailSecuredSuffix": "(تم تأمين Grail)",
  "board.settlement.grailSoldBack": "أُعيد بيع Grail ({amount}) ← تقسيم USDC أعلاه.",
  "board.settlement.cardAssignmentHead": "إسناد البطاقة",
  "board.settlement.cardLabel": "بطاقة {amount}",
  "board.settlement.soldToVault": "بيعت إلى الخزنة · العائد في التقسيم",
  "board.settlement.decisionTopBackerSuffix": "(أكبر داعم · احتفاظ أو بيع)",
  "board.settlement.offTheirUsdcSuffix": "· {amount} من USDC",
  "board.settlement.cardsSpreadNote":
    "تُوزَّع البطاقات على أكبر عدد ممكن من الداعمين؛ وتُخصم قيمة إعادة شراء CC (85-93% لكل باك) من USDC الداعم الذي أُسندت إليه البطاقة (القيمة النقدية نفسها عند البيع، مع احتفاظه بالارتفاع المحتمل). البطاقات غير المستوعبة وحدها تُباع إلى الخزنة.",
  "board.settlement.chaseHitLabel": "أصابت المطاردة!",
  "board.settlement.chasePaidLine": "أُضيف {amount} إلى هذا التقسيم.",
  "board.settlement.chaseMissLabel": "لا توجد مكافأة من المطاردة.",
  "board.settlement.chaseNowLine": "رصيد المطاردة الآن {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "تحقّق من القرعة",
  "board.settlement.verifyDrawSub": "قرعة قابلة للتحقق · عرض إيصال القرعة",
  "board.settlement.roundIdLabel": "معرف الجولة",
  "board.settlement.winningDrawLabel": "قرعة الفوز",
  "board.settlement.drawSeedLabel": "بذرة القرعة",
  "board.settlement.proofIdLabel": "معرف الإثبات",
  "board.settlement.ticketOfCount": "#{index} من {count}",
  "board.settlement.verifying": "جارٍ التحقق…",
  "board.settlement.recheckDraw": "إعادة فحص القرعة",
  "board.settlement.verifierLink": "أداة التحقق ↗",
  "board.settlement.verifiedOk": "✓ تم التحقق من القرعة؛ ويمكن مطابقة هذا الفائز مجددًا مع بذرة القرعة المنشورة.",
  "board.settlement.verifiedBad": "✗ لم تطابق هذه القرعة بذرتها عند إعادة الفحص؛ لا تثق بها.",
  "board.settlement.everyRoundNote": "تسحب كل جولة فائزًا واحدًا من بذرة منشورة يمكنك إعادة فحصها.",
  "board.settlement.noPacksNote": "لم تُدعَم أي باكات في هذه الجولة؛ لا شيء يُسحب.",
  "board.settlement.settledHoverHint": "تمت التسوية؛ مرّر فوق خانة لفحصها.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "الرهان كبير جدًا بالنسبة لرصيدك",
  "board.betTooBig.dismissAria": "إغلاق",
  "board.betTooBig.gotIt": "فهمتها",
  "board.betTooBig.body": "يتطلب دعم {slotLabel} مبلغ {needed}، بينما تملك {held}. ينقصك {shortfall}.",
  "board.betTooBig.deposit": "أودِع {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "اللاعبون، مرتّبون حسب إجمالي الرهان",
  "board.wagerLadder.title": "اللاعبون",
  "board.wagerLadder.countZero": "لا توجد رهانات بعد",
  "board.wagerLadder.countOther": "{n} في الجولة · حسب إجمالي الرهان",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "طي لوحة اللاعبين",
  "board.wagerLadder.lastRoundAria": "شاهد آخر نتائج الجولة، الجولة #{n}",
  "board.wagerLadder.lastRoundLabel": "شاهد نتائج الجولة الأخيرة",
  "board.wagerLadder.empty": "لم يدعم أحد أي خانة في هذه الجولة بعد.",
  "board.wagerLadder.leaderAria": "قائد",
  "board.wagerLadder.openProfileTitle": "افتح الملف الشخصي لـ {name} في علامة تبويب جديدة",
  "board.wagerLadder.miniGridTotal": "مجموع {amount}",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "الخانات التي دعمها {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "الخانات التي دعمتها",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "بيع المخزون لتمويل هذا الرهان",
  "board.bidFund.eyebrow": "خارج USDC",
  "board.bidFund.titleOne": "هل تبيع بطاقتك لتغطية هذا الرهان؟",
  "board.bidFund.titleMany": "هل تبيع هذه البطاقات لتغطية هذا الرهان؟",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "يُدرّ بيع {cards} مبلغ {buyback}، وهو يكفي لدعم {tile} بمبلغ {amount}.",
  "board.bidFund.bodyCardsMany": "هذه البطاقات",
  "board.bidFund.note":
    "ينقصك {amount}. تُباع البطاقات بسعر إعادة شراء CC الخاص بباكها (85 إلى 93%). لا يمكن التراجع عن ذلك.",
  "board.bidFund.keepCards": "احتفظ بالبطاقات",
  "board.bidFund.sellAndBid": "بيع والمراهنة بـ {amount}",
  "board.bidFund.autoSellSwitch": "قم ببيع مكاسبي مقابل USDC تلقائيًا",
  "board.bidFund.autoSellNoteOn":
    "يُصرف كل فوز بسعر إعادة الشراء لحظة وصوله. لا تظهر مطالبة بالاحتفاظ أو البيع، ولا تُباع Grails تلقائيًا أبدًا. يمكنك تغيير ذلك في أي وقت من الإعدادات.",
  "board.bidFund.autoSellNoteOff":
    "فعّل هذا ليُصرف كل فوز نقدًا إلى USDC بسعر إعادة الشراء من دون مطالبة. لا تُباع Grails تلقائيًا أبدًا. يمكنك تغيير ذلك في أي وقت من الإعدادات.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "الرهان مع مفاتيح الأرقام؟",
  "board.hotkeys.optInBody":
    "يضع الضغط على مفتاح رهانك الحالي على تلك الخانة فورًا. لم يُوضَع أي رهان الآن.",
  "board.hotkeys.notNow": "ليس الآن",
  "board.hotkeys.enableKeys": "تمكين المفاتيح",
  "board.hotkeys.turnOff": "إيقاف",
  "board.hotkeys.turnOffTitle": "تظل المفاتيح معطلة حتى تقوم بإعادة تمكينها في الإعدادات.",
  "board.hotkeys.changeKeys": "تغيير المفاتيح",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "افتح الخانة",
  "board.boardV1.onTile": "على الخانة",
  "board.boardV1.changeAmount": "تغيير {amount}",
  "board.boardV1.oddsSuffix": "احتمالات {pct}",
  "board.boardV1.openedOdds": "فُتحت · احتمالات {pct}",
  "board.boardV1.emptyNeverInDraw": "فارغة · لا تدخل القرعة أبدًا",
  "board.boardV1.winnerYourShare": "الفائز · حصتك تُدفع",
  "board.boardV1.winnerNoStake": "الفائز · لم يكن لديك أي حصة",
  "board.boardV1.lostOdds": "خسر القرعة · احتمال {pct}",
  "board.boardV1.tileClickTitle": "انقر في أي مكان لدعم {label} بمبلغ {amount}",
  "board.boardV1.youAmount": "أنت {amount}",
  "board.boardV1.youNone": "أنت -",
  "board.boardV1.pctOfTile": "{pct} من الخانة",
  "board.boardV1.noStakeYet": "لا حصة بعد",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "رهان {amount} · {pct} من الخانة",
  "board.boardV1.statusWaitingDraw": "في انتظار القرعة…",
  "board.boardV1.statusWonSplit": "فاز بـ {amount} من الانقسام",
  "board.boardV1.statusOnWinningTile": "على الخانة الفائزة",
  "board.boardV1.statusNoPayout": "لا عائد في هذه الجولة",
  "board.boardV1.statusYourStake": "رهانك الحالي",
  "board.boardV1.statusBacking": "دعم هذه الخانة",
  "board.boardV1.backerCount.one": "{n} داعم",
  "board.boardV1.backerCount.other": "{n} داعمين",
  "board.boardV1.noBackersYet": "لا داعمين بعد",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "دعم {amount}",
  "board.boardV1.backBtnTitle": "ادعم {label} بمبلغ {amount} USDC",
  "board.boardV1.evolveTitle": "يدعم {label} بمبلغ إضافي قدره {amount}",
  "board.boardV1.hoverTitle": "{label} · {amount} على الخانة",
  "board.boardV1.opensAs": "يفتح على هيئة · {summary}",
  "board.boardV1.noPacksYet": "لا يوجد باكات حتى الآن، قم بدعمه لتمويل أول باك",
  "board.boardV1.whyOpenedDrawing":
    "فُتحت {cardName} ({amount}) باحتمال {pct}؛ يجري سحب الفائز الآن.",
  "board.boardV1.whyWon":
    "فازت بالقرعة الموزونة باحتمال {pct}. فُتحت {cardName} ({amount})؛ وقُسّم المجمّع بالتناسب بين داعميها.",
  "board.boardV1.whyLost":
    "خسرت القرعة الموزونة باحتمال {pct} ({amount} من المجمّع {poolAmount}). فُتحت {cardName} ({cardAmount})، لكن الخانة الفائزة وحدها تدفع.",
  "board.boardV1.whyEmpty": "الخانة فارغة؛ لا رهان ولا تذكرة قرعة.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": "حصتك هنا: {amount}.",
  "board.boardV1.whyNoStakeSuffix": "لم يكن لديك حصة هنا.",
  "board.boardV1.ifWins": "إذا فازت هذه الخانة: ستحصل على نحو ~{amount} من المجمّع {poolAmount}.",
  "board.boardV1.clickToBack": "انقر لدعمها بالرهان المحدد وفتح باكها الأول عند القفل.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "الترتيب {rank}، {name}، راهن {wagered}، الصافي {net}، معدل الفوز {pct} بالمئة",
  "board.leaderboard.youTag": "أنت",
  "board.leaderboard.youRankTag": "أنت · #{n}",
  "board.leaderboard.statWagered": "الرهان",
  "board.leaderboard.statNetPl": "صافي الربح والخسارة",
  "board.leaderboard.statWinRate": "معدل الفوز",
  "board.leaderboard.statRounds": "جولات",
  "board.leaderboard.statPoolShare": "حصة المجمّع",
  "board.leaderboard.statFirstSeen": "أول ظهور",
  "board.leaderboard.statBiggestPull": "أكبر سحب",
  "board.leaderboard.shareOfToday": "من رهانات اليوم",
  "board.leaderboard.shareOfAllTime": "من الرهانات في كل العصور",
  "board.leaderboard.noneYet": "لا شيء بعد",
  "board.leaderboard.viewFullProfile": "عرض الملف الشخصي الكامل",
  "board.leaderboard.live": "مباشر",
  "board.leaderboard.fullRankings": "التصنيف الكامل",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} لاعب",
  "board.leaderboard.playerCount.other": "{n} لاعبًا",
  "board.leaderboard.roundCount.one": "{n} جولة",
  "board.leaderboard.roundCount.other": "{n} جولات",
  "board.leaderboard.colPlayer": "لاعب",
  "board.leaderboard.colWagered": "الرهان",
  "board.leaderboard.colNet": "صافي الربح والخسارة",
  "board.leaderboard.colWin": "الفوز",
  "board.leaderboard.colBiggestPull": "أكبر سحب",
  "board.leaderboard.sortGroupAria": "ترتيب التصنيفات",
  "board.leaderboard.sortBy": "الترتيب حسب {col}",
  "board.leaderboard.podiumNet": "الصافي {amount}",
  "board.leaderboard.podiumTopPull": "أبرز سحبة",
  "board.leaderboard.fullStandings": "الترتيب الكامل · {n} مراهنين",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} باك من {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} باكات من {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "صورة الملف الشخصي لـ {handle}",
  "board.connectX.connectedTitle": "متصل عبر X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "خانة {packName} (لا شيء في هذه الخانة)",
  "board.packChips.fixedChipTitle": "{n} × {packName} بسعر {amount} لكل منها",
  "board.packChips.fixedChipTitleTotalSuffix": " - الإجمالي {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "تكوّنت من أموال الخانة المجمّعة؛ لم يراهن أحد على هذا الباك مباشرة",
  "board.packChips.pooledSome": "تكوّن {n} من أصل {total} من أموال الخانة المجمّعة",
  "board.packChips.bidWhole": "المراهنة على باك كامل",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "أيضًا على الخانة: {list}",
  "board.packChips.morePacks.one": "باك إضافي واحد ({n})",
  "board.packChips.morePacks.other": "{n} باكات إضافية",
  "board.packChips.morePacksWithList.one": "باك إضافي واحد ({n}): {list}",
  "board.packChips.morePacksWithList.other": "{n} باكات إضافية: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "العطاءات {bids} · المجمّع {pool}",
  "board.tile.splitAllBids": "رُهنت كل {bids} على هيئة باكات كاملة",
  "board.tile.splitAllPool": "كل {pool} أموال سائبة مجمّعة في الخانة",
  "board.tile.splitPoolNote": "تكوّنت الباكات المتقطعة من المجمّع؛ لم يراهن عليها أحد.",
  "board.tile.evolveLooseTitle": "تتحول الأموال السائبة {loose} في هذه الخانة إلى باك {tier} عند {target}",
  "board.tile.evolveNoLooseTitle":
    "لا أموال سائبة في هذه الخانة بعد. تتحول الأموال السائبة إلى باك {tier} عند {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - يغطي {covered} من أصل {total} خانات بقيمة {unit}",
  "board.betRail.allTilesPlanFull": "عند إغلاق الجولة، سيدعم الخانات الـ{total} كلها بقيمة {unit}. الإجمالي {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "عند إغلاق الجولة، سيدعم {covered} من أصل {total} خانات بقيمة {unit}. يغطي رصيدك {balance} مبلغ {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "عند إغلاق الجولة، سيدعم {covered} من أصل {total} خانات بقيمة {unit}. يغطي رصيدك {balance} مبلغ {spend}.",
  "board.betRail.allTilesPlanNone": "لا يغطي رصيدك {balance} رهانًا واحدًا بقيمة {unit}؛ لذلك لن تُدعم أي خانة.",
  "board.betRail.allTilesShortHistory.one":
    "يتطلب الرهان التلقائي على كل الخانات {needed} لـ{tiles} خانات بقيمة {unit}. لديك {balance}، لذلك دُعمت {covered} خانة.",
  "board.betRail.allTilesShortHistory.other":
    "يتطلب الرهان التلقائي على كل الخانات {needed} لـ{tiles} خانات بقيمة {unit}. لديك {balance}، لذلك دُعمت {covered} خانات.",
  "board.betRail.allTilesNoneHistory":
    "يتطلب الرهان التلقائي على كل الخانات {needed} لـ{tiles} خانات بقيمة {unit}. لديك {balance}، لذلك لم تُدعم أي خانة.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "عند إغلاق الجولة",
  "board.betRail.planTotal": "الإجمالي",
  "board.betRail.planMathFull": "{total} خانات × {amount}",
  "board.betRail.planMathShort": "{covered} من {total} خانات × {amount}",
  "board.betRail.planPerTile": "{unit} لكل خانة",

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
  "board.strategy.highest.label": "قمة",
  "board.strategy.highest.name": "فعّل: ادعم أعلى خانة عند إغلاق الجولة",
  "board.strategy.highest.detail":
    "تفعّل رهانك على الخانة التي تحمل أكبر مبلغ، وتُحسم قبل إغلاق الجولة مباشرة.",
  "board.strategy.highest.rowTitle": "أعلى خانة",
  "board.strategy.highest.closeLine": "يدعم الخانة الأكبر عند إغلاق الجولة",
  "board.strategy.highest.gridLine": "أكبر مبلغ عند الإغلاق",

  "board.strategy.lowest.label": "قاع",
  "board.strategy.lowest.name": "فعّل: ادعم أدنى خانة عند إغلاق الجولة",
  "board.strategy.lowest.detail":
    "تفعّل رهانك على الخانة الأقل ازدحامًا، وتُحسم قبل إغلاق الجولة مباشرة. إذا تزاحم الجميع على الأدنى، فلن تعود هي الأدنى حينها.",
  "board.strategy.lowest.rowTitle": "أدنى خانة",
  "board.strategy.lowest.closeLine": "يدعم الخانة الأصغر عند إغلاق الجولة",
  "board.strategy.lowest.gridLine": "أقل مبلغ عند الإغلاق",

  "board.strategy.secondHighest.label": "الثاني من الأعلى",
  "board.strategy.secondHighest.name": "فعّل: ادعم ثاني أعلى خانة عند إغلاق الجولة",
  "board.strategy.secondHighest.detail":
    "تضع رهانك درجة واحدة تحت المتصدر، وتُحسم قبل إغلاق الجولة مباشرة.",
  "board.strategy.secondHighest.rowTitle": "ثاني أعلى خانة",
  "board.strategy.secondHighest.closeLine": "يدعم الخانة أسفل القائد مباشرة عند إغلاق الجولة",
  "board.strategy.secondHighest.gridLine": "درجة واحدة تحت القائد",

  "board.strategy.secondLowest.label": "الثاني من الأسفل",
  "board.strategy.secondLowest.name": "فعّل: ادعم ثاني أدنى خانة عند إغلاق الجولة",
  "board.strategy.secondLowest.detail":
    "اختيار وفق سلوك الجمهور: عندما يطارد الجميع أدنى خانة تصبح مزدحمة، وقد تدفع الثانية من الأسفل أفضل. تُحسم قبل إغلاق الجولة مباشرة.",
  "board.strategy.secondLowest.rowTitle": "ثاني أدنى خانة",
  "board.strategy.secondLowest.closeLine": "يدعم الخانة أعلى القاع المزدحم مباشرةً عند إغلاق الجولة",
  "board.strategy.secondLowest.gridLine": "درجة واحدة فوق القاع",

  "board.strategy.allTiles.label": "الجميع",
  "board.strategy.allTiles.name": "فعّل: ادعم كل الخانات عند إغلاق الجولة",
  "board.strategy.allTiles.detail":
    "تفعّل رهانك على كل خانة مؤهلة، وتُحسم قبل إغلاق الجولة مباشرة. الإنفاق الإجمالي = حجم الرهان × عدد الخانات حينها.",
  "board.strategy.allTiles.rowTitle": "جميع الخانات",
  "board.strategy.allTiles.closeLine": "يوزّع رهانك عند إغلاق الجولة",
  "board.strategy.allTiles.gridLine": "رهانك على كل خانة",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "اضغط مرة أخرى: {unit}",
  "board.tile.confirmClickAgain": "انقر مرة أخرى: {unit}",
  "board.tile.betOffNotice": "الرهان متوقف في الإعدادات",
  "board.stakeControl.pickPackHint": "اختر باك للمراهنة",
  "board.stakeControl.emptyStakeLead": "اختر باك",
  "board.stakeControl.emptyStakeHint": "يصبح هو رهانك",
  "gear.betInput.label": "وضع الرهان",
  "gear.betInput.hint":
    "يوضح هذا كيف تضع ضغطة الخانة (ومفتاحها الرقمي) رهانك. يطلب وضع النقر المزدوج نقرة تأكيد أولًا، وهو الإعداد الافتراضي للشاشات اللمسية. أما الإيقاف فهو وضع المشاهدة: لا يمكن لأي شيء وضع رهان.",
  "gear.betInput.optionSingle": "نقرة واحدة",
  "gear.betInput.optionDouble": "نقرتان",
  "gear.betInput.optionOff": "إيقاف",
  "gear.cardOpen.label": "فتح البطاقات",
  "gear.cardOpen.hint":
    "يطلب وضع النقر المزدوج نقرة تأكيد قبل أن تفتح واجهة البطاقة صفحتها، وهو الإعداد الافتراضي للشاشات اللمسية.",
} as Record<string, string>;
