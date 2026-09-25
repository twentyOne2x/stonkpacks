// Arabic (العربية): "docs" segment. Same key set as en/docs.ts; the
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
  "docs.header.title": "المستندات",
  "docs.header.back": "→ العودة إلى اللوحة",

  "docs.tabs.ariaLabel": "عرض المستندات",
  "docs.tabs.how": "كيف يعمل",
  "docs.tabs.technical": "التقنية",

  "docs.how.intro": "هذه النسخة بلغة واضحة. اقرأها أولًا، ثم انتقل إلى قسم التقنية للاطلاع على الآليات الدقيقة.",
  "docs.technical.intro": "الآليات الدقيقة، بأرقام واضحة.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "ما هو attn ROYALE؟",
  "docs.how.whatIsRoyale.a":
    "لعبة مباشرة لفتح الباكات. في كل جولة، يراهن اللاعبون بباكات على الخانات. عند قفل الجولة، تُفتح باكات كل خانة مدعومة مباشرة، ويتقاسم داعمو خانة واحدة المجمّع بالكامل.",

  "docs.how.whatIsPack.q": "ما هو باك؟",
  "docs.how.whatIsPack.a":
    "درجة سعرية تفتح بطاقة مُقيّمة حقيقية لحظة فتح خانتها. يتدرج السلم من {starter} و{elite} و{legendary} و{grail} إلى {mythic}. والباكات الأكبر تسحب بطاقات أكبر.",

  "docs.how.howBacking.q": "كيف يعمل دعم الخانة؟",
  "docs.how.howBacking.a":
    "اختر خانة تعجبك وراهن عليها بباكات. راهن مع لاعبين آخرين على الخانة نفسها وتقاسموها: حصتك من فوزها تساوي نسبة الباكات التي أضفتها أنت شخصيًا.",

  "docs.how.heatRemainder.q": "ماذا لو لم يصل رهاني إلى باك بالكامل؟",
  "docs.how.heatRemainder.a":
    "أي مبلغ يقل عن سعر أرخص باك يبقى على الخانة بوصفه فكة. يظل مع بقية رهانك، لكنه لا يفتح بطاقة مستقلة حتى يكتمل باك، والبطاقات المفتوحة هي التي تحدد الاحتمالات.",

  "docs.how.howWheelPicks.q": "كيف تختار العجلة الفائز؟",
  "docs.how.howWheelPicks.a":
    "عند القفل، تفتح كل خانة مدعومة باكاتها مباشرة. ثم تستقر العجلة على خانة واحدة؛ وكلما زادت قيمة بطاقات الخانة المفتوحة، كبرت حصتها من العجلة. وقد تجعل سحبة كبيرة خانة صغيرة هي المفضلة. ويأتي الاختيار نفسه من قرعة عشوائية قابلة للتحقق، لا من شخص.",

  "docs.how.whatDoIWin.q": "ماذا أربح؟",
  "docs.how.whatDoIWin.aBefore": "يتقاسم داعمو الخانة الفائزة",
  "docs.how.whatDoIWin.aEmphasis": "مجمّع الجولة بالكامل",
  "docs.how.whatDoIWin.aAfter":
    "، لا رهانات تلك الخانة فقط، بنسبة ما راهن به كل واحد منكم عليها. ويحصل أكبر داعم للخانة أيضًا على حق المطالبة أولًا بأفضل بطاقة منفردة فيها.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "الاحتفاظ أم إعادة البيع: ما الفرق؟",
  "docs.how.keepOrSell.keepLabel": "احتفظ",
  "docs.how.keepOrSell.keepBody": "تُضاف البطاقة إلى مجموعتك مجانًا.",
  "docs.how.keepOrSell.sellLabel": "إعادة البيع",
  "docs.how.keepOrSell.sellBody": "يدفع لك جزءًا من قيمة البطاقة مباشرة إلى رصيدك بعملة USDC، من دون انتظار.",

  "docs.how.decisionTimeout.q": "ماذا يحدث إذا لم أقرر في الوقت المناسب؟",
  "docs.how.decisionTimeout.a":
    "تحصل على مهلة قصيرة للاختيار. إذا انقضت، تُعاد البطاقة تلقائيًا بسعرها الساري، حتى لا يبقى أي فوز عالقًا.",

  "docs.how.whatIsChase.q": "ما هي المطاردة؟",
  "docs.how.whatIsChase.a":
    "جائزة كبرى متراكمة يُقتطع لها جزء صغير من مجمّع كل جولة. قد تُفعّل في أي جولة بقرعة مستقلة، ولا يفعّلها سحب Grail. وعند تفعيلها، تُدفع الجائزة الكبرى كاملة إلى تقسيم عائد الجولة الفائزة.",

  "docs.how.howToStartFree.q": "كيف أبدأ مجانًا؟",
  "docs.how.howToStartFree.a":
    "انضم برمز دعوة واحصل على رصيد مجاني بحجم باك Starter. لا تحتاج إلى محفظة أو تسجيل دخول؛ يمكنك البدء مباشرة كضيف.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "سلم باك",
  "docs.tech.packLadder.body":
    "خمسة باكات يمكنك شراؤها: {starter} و{elite} و{legendary} و{grail} و{mythic}. يبني الرهان أكبر باكات يستطيع دفع ثمنها، بدءًا بالأكبر. وما يتبقى دون سعر أرخص باك يظل على الخانة فكةً ولا يفتح بطاقة مستقلة. أما الرهان الموضوع على باك محدد فيبقى ذلك الباك بعينه، ولا يتراكم إلا الفائض مع إضافة المزيد.",

  "docs.tech.oddsWeighting.title": "ما الذي يحدد الاحتمالات: البطاقات التي تفتحها الخانة",
  "docs.tech.oddsWeighting.body":
    "فرصة الخانة في الفوز لا تحددها قيمة الرهانات عليها. عند القفل، تفتح كل خانة ممولة باكاتها؛ وحصتها من القرعة هي قيمة البطاقات التي فتحتها للتو مقارنةً بقيمة كل بطاقة فُتحت في الجولة. وقد تجعل سحبة كبيرة خانة صغيرة هي المفضلة. والخانة التي لم تفتح بطاقة لا تملك أي فرصة، كما أن الفكة وحدها لا تفتح بطاقة. وإذا لم تفتح الجولة أي بطاقة، فلا يوجد ما تُجرى عليه القرعة: تُلغى الجولة ويُرد كل رهان كاملًا.",

  "docs.tech.vrfDraw.title": "قرعة الفائز محددة بـ VRF وحتمية",
  "docs.tech.vrfDraw.body":
    "تستمد كل جولة رقمًا عشوائيًا قابلًا للتحقق من وصفة ثابتة: معرّف الجولة، وموعدها النهائي، واللوحة المجمدة، وعدد التذاكر، وإنتروبيا السلسلة المأخوذة بعد القفل. ويُختار الخانة الفائز بمسار حتمي واحد لذلك الرقم عبر أوزان الخانات. تنتج المدخلات نفسها الفائز نفسه دائمًا؛ وتُنشر أوزان الخانات وتُقفل قبل المسار، ويمكن لأي شخص إعادة فحص القرعة كاملة من إيصال الجولة لاحقًا.",

  "docs.tech.settlementMath.title": "رياضيات التسوية",
  "docs.tech.settlementMath.body":
    "يتقاسم داعمو الخانة الفائزة مجمّع الجولة كله، لا رهانات خانتهم فقط، بنسبة ما راهن به كل منهم على تلك الخانة. يُقتطع {take} للبيت أولًا: يموّل {chaseCut} جائزة المطاردة الكبرى، ويموّل {protocolCut} البروتوكول. يُدفع هذا الاقتطاع بالبطاقات حيثما أمكن، بدءًا بأرخص بطاقة فائضة؛ وتُتجاوز البطاقة التي تفوق قيمتها الاقتطاع بدل بيعها، حتى لا تكون السحبات الكبيرة هي المأخوذة. وما لا تغطيه البطاقات فقط يُدفع من نقد المجمّع.",

  "docs.tech.cardAllocation.title": "من يحصل على البطاقات",
  "docs.tech.cardAllocation.body":
    "لا تحمل قرار الاحتفاظ أو إعادة البيع إلا أفضل بطاقة في الخانة الفائزة، وتؤول إلى أكبر داعم لها. وتُوزع كل بطاقة أخرى فتحتها الخانة بين داعميها بنسبة رهاناتهم، بدءًا بالأعلى قيمة. ويخصم أخذ بطاقة سعر إعادة بيعها من تقسيمك النقدي؛ إنها مبادلة لا تكلفة، إذ تنهي الجولة بالقيمة نفسها في الحالتين. وإذا لم يكفِ تقسيم أحد لبطاقة، يشتريها البيت ويبقى نقدها داخل التقسيم، فلا تُفرض بطاقة على أحد. ولا تُعامل بطاقة Grail ثانية في الجولة معاملة خاصة؛ بل توزع مع الغنائم الأخرى، ولا تأخذ المطاردة Grail أبدًا.",

  "docs.tech.sellBackRates.title": "معدلات إعادة البيع",
  "docs.tech.sellBackRates.body":
    "تحمل كل بطاقة سعر إعادة بيع ساريًا يحدده الباك الذي خرجت منه: {entryRate} في الدرجة الأولى، و{midRate} في الوسط، و{topRate} في القمة. يدفع البيع ذلك السعر إلى رصيدك فورًا، ولا يكلفك الاحتفاظ بالبطاقة شيئًا. وتعكس هذه الأسعار معدلات إعادة الشراء الفورية المنشورة للآلات نفسها على CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "جائزة المطاردة الكبرى",
  "docs.tech.chaseJackpot.body":
    "جائزة كبرى متراكمة يُغذّيها {chaseCut} من مجمّع كل جولة. تُفعّل بقرعة مستقلة، نحو مرة أسبوعيًا عند سرعة الجولات المعتادة، ولا يفعّلها سحب Grail. وعند تفعيلها، تُدفع كاملة إلى تقسيم الجولة الفائزة، ثم تُصفّر وتبدأ في التراكم من جديد. وتأخذ المطاردة بطاقة واحدة في الجولة عند الإمكان، لكن من خانة خاسرة فقط، ولا تأخذ أبدًا بطاقة الجولة الأعلى قيمة أو Grail.",

  "docs.tech.decisionWindow.title": "نافذة القرار",
  "docs.tech.decisionWindow.body":
    "يفتح الفوز بالبطاقة الرئيسية للخانة نافذة احتفاظ أو إعادة بيع مدتها {window} ثانية. وإذا لم تجب قبل إغلاقها، أو قبل قفل الجولة التالية، تُباع البطاقة بسعرها الساري، حتى لا يبقى أي فوز عالقًا.",

  "docs.tech.devnetCustody.title": "حيازة USDC على devnet",
  "docs.tech.devnetCustody.body":
    "تتحرك الأرصدة في معاملات USDC حقيقية على Solana devnet. تتم الحيازة عبر محفظة Privy المضمّنة، أو عبر زوج مفاتيح خاص بـ devnet فقط محفوظ في متصفحك كخيار بديل؛ وكلاهما يوقّع مسار التحويل نفسه المستخدم في حيازة الإنتاج.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "إلغاء واسترداد",
  "docs.tech.voidRefund.body":
    "لا يمكن الفوز بالجولة إلا عبر البطاقات المفتوحة؛ لذلك لا يكون في الجولة التي لا تفتح فيها أي خانة بطاقة ما تُجرى عليه القرعة. تُلغى الجولة فورًا: يُرد كل رهان على اللوحة كاملًا، ولا يأخذ البيت شيئًا، ولا تُغذّى المطاردة بشيء. ويُظهر سجل القرعة المنشور للجولة الملغاة إجمالي بطاقات يساوي صفرًا، وهو دليل على أن الإلغاء فرضته اللوحة ولم يختره أحد.",

  "docs.tech.cardExits.title": "تذهب البطاقات الفائزة إلى محفظتك",
  "docs.tech.cardExits.body":
    "احتفظ بالبطاقة فتُنقل إلى محفظتك بمعاملة موقّعة، وتُدفع رسوم الشبكة عنك. وإذا تعذّر على محفظتك استلامها بعد، يُوقَف التسليم وتُعاد محاولته حتى يصل، ولا يُسقط أبدًا. وإذا أعدت بيع البطاقة، تُدفع لك القيمة المحددة لحظة فوزك بها، من دون إعادة تسعير؛ ولا يمكن استخدام هذا السعر إلا مرة واحدة، إذ تُعلَّم البطاقة بأنها صُرفت قبل تحريك المال، فلا يمكن دفع ثمن البطاقة نفسها مرتين.",

  "docs.tech.deposits.title": "ودائع USDC",
  "docs.tech.deposits.body":
    "الإيداع تحويل USDC على Solana توقّعه من محفظتك. لا يُضاف الرصيد إلا بعد تأكيد التحويل على السلسلة إلى خزينة اللعبة، مع قراءة المبلغ والوجهة من السلسلة نفسها، لا من الطلب أبدًا. ويمكن لكل توقيع معاملة أن يضيف الرصيد مرة واحدة فقط؛ لذلك لا تؤدي إعادة الإيداع إلى مضاعفته، ويُسجّل التحويل الذي يتجاوز الحد الأقصى لكل معاملة مبلغًا مستحقًا لك بدل أن يختفي.",

  "docs.tech.withdrawals.title": "عمليات السحب USDC",
  "docs.tech.withdrawals.body":
    "يخصم السحب رصيدك أولًا، ثم يرسل USDC من الخزينة إلى الوجهة التي وافقت عليها. ويوقّع تسجيل دخولك المتحقق منه ذلك المبلغ والوجهة تحديدًا، ويُرفض أي طلب لا يطابق إثباته. يحتفظ الإيصال بتوقيع المعاملة. وإذا رفضت السلسلة التحويل نهائيًا، يُرد رصيدك مرة واحدة فقط. أما إذا أُرسل التحويل ولم يتأكد بعد، فلا يُرد شيء حتى تقدم السلسلة جوابًا نهائيًا؛ لذلك لا يمكن للسحب أن يدفع مرتين، حتى بعد إعادة التشغيل.",

  "docs.tech.identity.title": "حساب واحد، مهما كانت طريقة تسجيل الدخول",
  "docs.tech.identity.body":
    "سجّل الدخول باستخدام Privy أو أثبت محفظة Solana بتوقيع تحدٍّ لمرة واحدة من الخادم؛ فكلا الطريقين يقودان إلى الحساب الدائم نفسه، المرتبط بالهوية المتحقَّق منها لا بشيء آخر. وكل عملية تحرّك المال تُنفّذ على حساب الهوية التي أثبتت نفسها في ذلك الطلب بعينه، وتُهمل الأسماء والمعرّفات والرؤوس المدّعاة؛ لذلك لا يستطيع أحد توجيه إيداع أو رهان أو سحب إلى رصيد شخص آخر.",

  "docs.tech.reconnect.title": "أعد الاتصال وأعد التشغيل",
  "docs.tech.reconnect.body":
    "سجّل الخروج فتتوقف الأموال: على مسارات USDC يُرفض أي إيداع أو رهان أو سحب بلا إثبات ملكية. سجّل الدخول مجددًا فينتظرك الحساب نفسه بالرصيد والبطاقات نفسيهما، لأن كل ما تملكه محفوظ في دفتر أستاذ دائم لا في الصفحة. تعيد إعادة تشغيل الخادم تشغيل دفتر الأستاذ نفسه وتصل إلى الأرقام نفسها، ولا يُرسل التحويل الذي خرج بالفعل مرة ثانية.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "أقسام المستندات",
  "docs.nav.overview": "ملخص",
  "docs.nav.prev": "سابق",
  "docs.nav.next": "التالي",

  "docs.nav.section.introduction": "مقدمة",
  "docs.nav.section.gameplay": "طريقة اللعب",
  "docs.nav.section.cards": "البطاقات والحيازة",
  "docs.nav.section.money": "المال",
  "docs.nav.section.fairness": "الإنصاف",
  "docs.nav.section.account": "الحساب",

  "docs.nav.page.whatIsRoyale": "ما هو attn ROYALE",
  "docs.nav.page.packs": "الباكات والسلم",
  "docs.nav.page.startFree": "ابدأ مجانًا",
  "docs.nav.page.backing": "دعم الخانة",
  "docs.nav.page.theDraw": "القرعة",
  "docs.nav.page.winning": "ما تفوز به",
  "docs.nav.page.chase": "المطاردة",
  "docs.nav.page.keepOrSell": "احتفظ بها أو بيعها",
  "docs.nav.page.cardAllocation": "من يحصل على البطاقات",
  "docs.nav.page.sellBack": "معدلات إعادة البيع",
  "docs.nav.page.cardDelivery": "تسليم البطاقة",
  "docs.nav.page.deposits": "الودائع",
  "docs.nav.page.withdrawals": "عمليات السحب",
  "docs.nav.page.settlement": "رياضيات التسوية",
  "docs.nav.page.custody": "حيازة USDC",
  "docs.nav.page.odds": "ما الذي يحدد الاحتمالات",
  "docs.nav.page.vrf": "قرعة VRF",
  "docs.nav.page.voidRefund": "إلغاء واسترداد",
  "docs.nav.page.identity": "حساب واحد",
  "docs.nav.page.reconnect": "أعد الاتصال وأعد التشغيل",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - كيف يتحرك كل دولار",
  "docs.howItWorks.lead": "القواعد الكاملة للعبة. كيف يتم سحب الفائز ومن يحصل على البطاقات.",
  "docs.howItWorks.backToBoard": "العودة إلى اللوحة ←",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "كيف تعمل الجولة",
  "docs.howItWorks.round.pickBet":
    "اختر حجم الرهان، ثم انقر على خانة: تضيف كل نقرة ذلك المبلغ إلى مجمّع الخانة.",
  "docs.howItWorks.round.yourShare":
    "**حصتك** من الخانة = رهانك ÷ إجمالي الخانة. ويشكّل {stake} في خانة {tile} حصة قدرها **{pct}**. إذا فازت الخانة، تحصل على {pct} من عائدها.",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "تتحدد **فرصة الفوز** عند الفتح لا عند الرهان: حين تُقفل الجولة، تفتح كل خانة مدعومة باكاتها، وتساوي حصة الخانة من العجلة قيمة البطاقات التي فتحتها للتو مقارنةً بكل بطاقة فُتحت في الجولة.",
  "docs.howItWorks.round.tickets":
    "الخانة التي لا تفتح **أي بطاقة** لا تملك أي حصة، وإذا لم تفتح الجولة بطاقة واحدة، تُلغى الجولة **ويُردّ** كل رهان كاملًا.",
  "docs.howItWorks.round.vrf":
    "عند القفل، تسحب **VRF** (دالة عشوائية قابلة للتحقق) تذكرة فائزة واحدة من أرقام الجولة المقفلة: معرّف الجولة، والموعد النهائي، وإجمالي كل خانة، وعدد التذاكر. لا يستطيع أحد، حتى البيت، توجيهها.",
  "docs.howItWorks.round.oddsAreReal": "الاحتمالات المعروضة على كل خانة هي حساب القرعة الدقيق، وليست مجرد انطباع.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "ما يشتريه رهانك",
  "docs.howItWorks.buys.ladderLead": "يتحوّل إجمالي الخانة إلى باكات، بدءًا بالأكبر:",
  "docs.howItWorks.buys.example":
    "مثال: يشتري رهان خانة بقيمة **{amount}** بطاقة Legendary وبطاقة Elite وبطاقة Starter.",
  "docs.howItWorks.buys.change":
    "المبلغ الأصغر من سعر الباك التالي هو **فكة**: يُحتسب في المجمّع وفي حصتك من الفوز، لكنه لا يفتح باكًا، والبطاقات المفتوحة هي التي تحدد الاحتمالات.",
  "docs.howItWorks.buys.mythicUpgrade":
    "هل تملك Mythic بالفعل؟ يستهدف زر الترقية **Mythic كاملًا آخر** بدلًا من باك أصغر. ولا يتراجع السلم أبدًا.",
  "docs.howItWorks.buys.cardsPerPack":
    "عند القفل، تفتح كل خانة ممولة **بطاقة واحدة لكل باك كامل** تملكه، بحد أقصى **{max} بطاقة** معروضة على اللوحة (وتُدرج أي بطاقات زائدة في صفحة النتائج). والخانة التي لا تملك إلا فكة لا تفتح شيئًا.",
  "docs.howItWorks.buys.undeliverable":
    "إذا تعذر تسليم باك فعليًا (لنَفاده أو لخلل فني أو لانتهاء الوقت)، تعود تكلفته إليك نقدًا بدل أن تبقى عالقة.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "ما يحصل عليه الفائز",
  "docs.howItWorks.winner.entirePool":
    "يتقاسم داعمو الخانة الفائزة **مجمّع الجولة بالكامل**، لا مجمّع تلك الخانة وحده.",
  "docs.howItWorks.winner.proRata":
    "التقسيم **نسبي**: إذا أضفت {pct} من الخانة، تحصل على **{pct}** من العائد.",
  "docs.howItWorks.winner.take":
    "يُقتطع **{take}** من كل مجمّع قبل التقسيم: يغذّي **{chaseCut}** جائزة المطاردة الكبرى، ويموّل **{protocolCut}** البروتوكول (الإحالات، وشراء بطاقات المطاردة، والعمليات، وإعادة شراء الرموز).",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "يُدفع {take} بالبطاقات حيثما أمكن، بدءًا بأرخص بطاقة فائضة. وتُتجاوز البطاقة التي تفوق قيمتها الاقتطاع بدل بيعها، حتى لا تكون السحبات الكبيرة هي المأخوذة. وما لا تغطيه البطاقات فقط يُدفع من نقد المجمّع.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "المطاردة",
  "docs.howItWorks.chase.feed": "المطاردة جائزة كبرى متراكمة، يُغذّيها **{cut}** من كل مجمّع.",
  "docs.howItWorks.chase.cardCut":
    "عند الإمكان، تأخذ المطاردة حصتها كبطاقة بدل النقد، لكن من بطاقة خانة خاسرة لا تزيد قيمتها عن **{cut}** من المجمّع، ولا تأخذ أبدًا البطاقة الأعلى قيمة في الجولة أو Grail.",
  "docs.howItWorks.chase.independentDraw":
    "تُفعّل الجائزة الكبرى بقرعة **عشوائية مستقلة** خاصة بها، في المتوسط نحو **مرة واحدة في الأسبوع** عند سرعة الجولات المعتادة. ولا يفعّلها سحب Grail.",
  "docs.howItWorks.chase.payout":
    "عند تفعيلها، تُدفع **الجائزة الكبرى كاملة** إلى تقسيم عائد الجولة الفائزة، ثم تُصفّر وتُبنى من جديد من تغذية الجولة التالية.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "**Grail** أندر وأعلى قيمة يمكن أن يسحبها أي باك. حتى باك Starter بقيمة {price} قد يسحب واحدة.",
  "docs.howItWorks.grails.headlineGrail":
    "إذا كانت البطاقة الرئيسية للخانة الفائزة هي Grail: يتطلب **الاحتفاظ** أن يشتري أكبر داعم حصص داعمي الخانة الآخرين منها (وتُخصم من نقده)؛ أما **إعادة البيع** فتقسّم العائد **بنسبة الخانة كاملة**، لا لأكبر داعم وحده.",
  "docs.howItWorks.grails.otherGrails":
    "أي Grail أخرى تُسحب في الجولة (من خانة مختلفة أو كبطاقة إضافية) غنيمة إضافية لداعمي الخانة الفائزة، وتُعامل مثل أي بطاقة إضافية. ولا تُضم أبدًا إلى المطاردة؛ وبما أن الاقتطاع يُدفع من الأرخص أولًا، فإن Grail آخر بطاقة يمكن أن تصل إليها المطاردة.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "من يحصل على البطاقات",
  "docs.howItWorks.cards.headline":
    "تؤول **البطاقة الرئيسية** للخانة الفائزة (أعلى سحبة منفردة قيمة) إلى أكبر داعم لها وحده: احتفظ بها مجانًا، أو أعد بيعها بسعر إعادة الشراء نقدًا يُدفع له، ولا تُقسّم مع بقية الخانة.",
  "docs.howItWorks.cards.rest":
    "تُوزع كل بطاقة أخرى سحبتها الخانة، وأي غنائم إضافية محوّلة من الخانات الخاسرة، بدءًا بالأعلى قيمة وبنسبة الرهان. وينتهي أكبر داعم للخانة عادةً بالنصيب الأكبر والأفضل منها.",
  "docs.howItWorks.cards.deduction":
    "يخصم أخذ إحدى هذه البطاقات سعر إعادة شرائها من تقسيمك النقدي. وهذا هو النقد نفسه الذي كنت ستحصل عليه ببيعها، فلا تخسر شيئًا.",
  "docs.howItWorks.cards.neverForced":
    "لا تستطيع تحمّل ثمنها؟ لا تُفرض عليك أبدًا؛ يشتريها البيت بدلًا منك، ويبقى نقدها داخل التقسيم.",
  "docs.howItWorks.cards.workedExample":
    "**مثال تطبيقي.** المجمّع {pool}. يُقتطع **{take}** ({takeAmount}: {chaseAmount} للمطاردة، و{protocolAmount} للبروتوكول) أولًا، ويدفعه عادةً باك فائض بدل نقدك. يبقى **{split}** للتقسيم: راهنتَ بـ {yourPct} من الخانة ({yourStake})، وراهن Sam بـ {samPct} ({samStake}). سحبت الخانة بطاقة رئيسية {headline} (من باك Legendary، وسعر إعادة شراء **{buyback}**) وبطاقة إضافية {extra}. تحتفظ ببطاقة {headline} مجانًا؛ فهي لك في كلتا الحالتين. تذهب بطاقة {extra} إلى Sam؛ ويُخصم **{buyback}** منها، أي **{samCash}**، من تقسيم Sam. النتيجة: تغادر ومعك **{yourStake} نقدًا + بطاقة {headline}**، ويحصل Sam على **{samCash} نقدًا + بطاقة {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "احتفظ بها أو بيعها",
  "docs.howItWorks.keepSell.buttons":
    "تأتي كل بطاقة تتلقاها مع زرين: يضع **الاحتفاظ** البطاقة المُقَيَّمة في مجموعتك؛ وتدفع **إعادة البيع** سعر إعادة شراء الباك بعملة USDC مباشرة إلى رصيدك.",
  "docs.howItWorks.keepSell.usdc": "USDC هو دولار رقمي: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "يحدد باك البطاقة سعر إعادة الشراء: **{entryRate}** لباكي Starter وElite، و**{midRate}** لـ Legendary، و**{topRate}** لـ Grail وما فوق.",
  "docs.howItWorks.keepSell.window":
    "تحصل فور فوزك على مهلة مدتها **{seconds} ثانية**، وإذا لم تقرر تمتد ببساطة إلى الجولة التالية كاملة: وتظل ظاهرة أسفل اللوحة وفي بطاقاتك.",
  "docs.howItWorks.keepSell.autoSell":
    "ما زلت مترددًا عند قفل الجولة التالية؟ تُباع البطاقة **تلقائيًا** بسعر إعادة شرائها. ولا يبقى المال عالقًا أبدًا.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "مسرد",
  "docs.howItWorks.glossary.change":
    "**الفكة**: مبلغ على خانة لا يكفي لشراء الباك التالي. يُحتسب في المجمّع وفي حصتك من الفوز، لكن البطاقات المفتوحة وحدها تحمل فرصة الفوز.",
  "docs.howItWorks.glossary.house":
    "**البيت**: الخزنة التي تموّل إعادة شراء البطاقات وتستوعب أي بطاقة لا يستطيع أحد تحمّلها.",
  "docs.howItWorks.glossary.chase":
    "**المطاردة**: جائزة كبرى متراكمة يغذّيها {cut} من كل مجمّع؛ وتُفعّل بقرعتها المستقلة، لا بنتيجة بطاقة بعينها.",
  "docs.howItWorks.glossary.grail": "**Grail**: أندر بطاقة وأعلاها قيمة يمكن لأي باك سحبها.",
  "docs.howItWorks.glossary.buyback":
    "**إعادة الشراء**: عرض ثابت لتحويل البطاقة إلى نقد بقيمة من {low} إلى {high} من سعرها، بحسب درجة الباك.",
  "docs.howItWorks.glossary.proRata": "**التقسيم النسبي**: تقسيم العائد بنسبة ما أضافه كل شخص.",
  "docs.howItWorks.glossary.vrf": "**VRF**: سحب عشوائي يمكن لأي شخص التحقق منه بعد وقوعه.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "واجهة برمجة تطبيقات الرهان (نسخة تجريبية مغلقة)",
  "docs.howItWorks.api.what":
    "واجهة برمجية لقراءة جولة مباشرة، والاشتراك في تدفق الأحداث، ووضع الرهانات من الكود أو الوكيل. وتستخدم الاحتمالات والتسوية نفسيهما المستخدمين في اللوحة.",
  "docs.howItWorks.api.access":
    "الوصول **مغلق** ولا يتم إلا بطلب: وهو معطّل افتراضيًا، وتحتاج كل مكالمة إلى مفتاح API مدرج في القائمة المسموح بها.",
  "docs.howItWorks.api.realBets":
    "يتطلب وضع رهان حقيقي فحصًا إضافيًا: إثبات أنك أنت (بتسجيل الدخول نفسه المستخدم في الموقع)، والالتزام بحدود الرهان نفسها المفروضة على كل لاعب.",
  "docs.howItWorks.api.contact": "راجع مستند المطور على {path} وأرسل بريدًا إلكترونيًا إلى {email} لطلب مفتاح.",
  "docs.how.controls.q": "How do I control a bet?",
  "docs.how.controls.a":
    "Open Gear to find grouped settings. On wide screens, each section can collapse. In Display, the landscape fullscreen toggle helps hide browser chrome where the browser allows it. The bet rail puts the full dollar total first, then the pack name and count. Tap the selected pack again to un-arm it without placing another bet.",
  "docs.how.chat.q": "Can I read table chat in my language?",
  "docs.how.chat.a":
    "Chat auto-translates bot and round messages into your selected language. Use \"show original\" on a translated line to see its source wording. Player-written messages stay as written.",
  "docs.how.collectors.q": "Where can I see the collector leaderboard?",
  "docs.how.collectors.a":
    "Open Ladder and choose Collectors. Top betters stays the first tab. Collectors ranks held cards by collection value and shows cards held, Grails pulled, and each collector's best pull.",
  "docs.how.replay.q": "Can I replay a finished round?",
  "docs.how.replay.a":
    "Yes. Open a finished round's replay to scrub from betting through the reveal, pause or restart it, and choose up to 5x speed.",

  "docs.tech.controls.title": "Settings, pack selection, and bet labels",
  "docs.tech.controls.body":
    "Gear groups Language, Betting, Display, Reveals, Sound, Auto-sell, and Hotkeys into sections. On wide screens each section can collapse, and the collapsed state is remembered. Display includes a landscape fullscreen toggle that requests the browser's supported chrome-free mode, with a compact-bar fallback on iPhone Safari. The bet rail makes the full dollar total the headline before the pack name and count. A pack button sets one exact pack choice; clicking that same selected pack again clears the armed choice and its persisted intent, so the next tile click cannot place that pack by accident.",
  "docs.tech.chat.title": "Chat translation and original copy",
  "docs.tech.chat.body":
    "Chat auto-translates keyed bot and table-event messages into the selected locale without rewriting the stored history. A translated row exposes a \"show original\" control that switches that row back to its source wording. Player-authored free text remains exactly as written when no translation service is available, so the feature never invents a translation.",
  "docs.tech.collectors.title": "Collector leaderboard",
  "docs.tech.collectors.body":
    "The Ladder surface keeps Top betters as its default tab and adds a Collectors tab. Collector rows rank the held cards in a player's collection by collection value and expose cards held, Grails pulled, and the best pull name with its value. The client builds the view from stored rounds, the local collection, and the signed-in profile, then keeps the player's row linked to their profile.",
  "docs.tech.replay.title": "Full-round replay speeds",
  "docs.tech.replay.body":
    "A finished round replay covers the recorded betting timeline and the reveal cinema on one playhead. Play, pause, seek, restart, and export remain available, with playback choices of 1x, 2x, 4x, and 5x. A speed click changes the playback rate for the timeline and the next reveal entry; it does not remount or rewrite a reveal already in progress.",

  "docs.nav.section.tools": "Tools",
  "docs.nav.page.controls": "Settings and controls",
  "docs.nav.page.chat": "Table chat",
  "docs.nav.page.collectors": "Collector leaderboard",
  "docs.nav.page.replay": "Round replay",

  "docs.howItWorks.tools.title": "Controls and extras",
  "docs.howItWorks.tools.controls":
    "Gear keeps the settings readable: wide layouts let you collapse sections, Display owns the landscape fullscreen toggle, and the bet rail leads with the full dollar total before the pack name and count. Tap the selected pack again to un-arm it.",
  "docs.howItWorks.tools.chat":
    "Chat auto-translates bot and round messages into your selected language. Use show original on a translated row to return to its source wording; player-written lines stay as written.",
  "docs.howItWorks.tools.collectors":
    "Ladder keeps Top betters first and adds Collectors as a second tab, ranking held cards by collection value with cards held, Grails pulled, and best-pull detail.",
  "docs.howItWorks.tools.replay":
    "Finished rounds replay from betting through the reveal with play, pause, seek, restart, and 1x, 2x, 4x, or 5x speed.",
} as Record<string, string>;
