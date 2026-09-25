// Arabic (العربية): "chat" segment. Same key set as en/chat.ts; the
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
  "chat.rooms.table": "الطاولة",
  "chat.rooms.sendTo": "إرسال إلى",
  "chat.rooms.joinHint": "راهن على خانة لفتح غرفتها.",
  "chat.rooms.messageTargets": "غرف الرسالة",
  "chat.composer.sendFailed": "تعذر إرسال الرسالة. حاول مرة أخرى.",
  "chat.composer.audienceChanged": "تغيرت الغرفة. تم مسح رسالتك غير المرسلة.",
  "chat.composer.sessionUnavailable": "جلسة الدردشة غير متاحة. حدّث الصفحة وحاول مرة أخرى.",
  "chat.auth.tileLeadBold": "راهن على مربع للدردشة",
  "chat.auth.tileBody": ". تُفتح الطاولة وغرف المربعات بعد قبول أول باك لك.",
  "chat.auth.sessionUnavailableBold": "جلسة الدردشة غير متاحة",
  "chat.auth.sessionUnavailableBody": ". حدّث الصفحة لاستعادة الإرسال الآمن.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "دردشة الطاولة",
  "chat.header.title": "دردشة الطاولة",
  "chat.header.fontControlAriaLabel": "حجم نص الدردشة",
  "chat.header.fontSmaller": "تقليل حجم نص الدردشة",
  "chat.header.fontLarger": "زيادة حجم نص الدردشة",
  "chat.header.collapseShow": "إظهار الدردشة",
  "chat.header.collapseHide": "إخفاء الدردشة",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "سحبة GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "الجولة #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. يفتح نتيجة الجولة في علامة تبويب جديدة.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "الفائز بها",
  "chat.event.wonBy": "الفائز بها {name}",
  "chat.event.foldedIntoPot": "أُضيفت إلى المجمّع",
  "chat.event.roundWinsTitle": "فازت {tile} بـ {pot}",
  "chat.event.bestPull": "أفضل سحبة: {name} ({value})",
  "chat.event.chaseAward": "المطاردة +{amount}",
  "chat.event.youWon": "أنت +{amount}",
  "chat.event.youLost": "خسرت",
  "chat.message.showOriginal": "مترجم · عرض الأصل",
  "chat.message.showTranslation": "عرض الترجمة",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "انتقل إلى الأحدث",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "يتم عرض روابط attn فقط هنا.",
  "chat.composer.rateLimitNotice": "الإرسال سريع قليلًا. حاول مجددًا بعد لحظة.",
  "chat.composer.placeholder": "اكتب شيئًا…",
  "chat.composer.inputAriaLabel": "رسالة الدردشة",
  "chat.composer.sendAriaLabel": "إرسال رسالة",
  "chat.composer.sendLabel": "إرسال",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "قم بتسجيل الدخول للدردشة",
  "chat.auth.body": "، ستكون الغرفة للقراءة فقط حتى يتم الاتصال (أعلى اليسار).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "يفتح صفحة البطاقة في علامة تبويب جديدة",
  "chat.messageBody.cardEmbedAriaLabel": "{name}، {value}. يفتح صفحة البطاقة في علامة تبويب خلفية.",
  "chat.messageBody.viewCard": "عرض البطاقة",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "صفحة البطاقة",
  "chat.link.roundResult": "نتيجة الجولة",
  "chat.link.profile": "الملف الشخصي",
  "chat.link.collection": "المجموعة",
  "chat.link.theBoard": "اللوحة",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "الخانة 3 تمتلئ بسرعة",
  "chat.chatter.line02": "من يواصل قنص المتصدر في كل جولة؟",
  "chat.chatter.line03": "كانت سحبة GRAIL في الجولة الماضية مذهلة",
  "chat.chatter.line04": "تجمّع سهل - ليتكدس الجميع على المتصدر",
  "chat.chatter.line05": "تبدو الخانة 7 أقل سعرًا من قيمتها برأيي",
  "chat.chatter.line06": "أحتفظ بباكاتي للثواني الخمس الأخيرة",
  "chat.chatter.line07": "شخص ما أسقط للتو $250 على الخانة 2، احترامي",
  "chat.chatter.line08": "حصة الخانة 6 من المجمّع مبالغ فيها الآن",
  "chat.chatter.line09": "باك إضافي واحد، وتترقى الخانة إلى درجة أغنى",
  "chat.chatter.line10": "القناصة يفسدون احتمالاتي مجددًا",
  "chat.chatter.line11": "لا أصيب إلا بطاقات الحد الأدنى؛ حان وقت سحبة كبيرة",
  "chat.chatter.line12": "راقب الحوت - فهو يرفع الخانة الفائزة دائمًا",
  "chat.chatter.line13": "الخانة 1 لم تفز طوال الجلسة؛ حان دورها",
  "chat.chatter.line14": "أعدت بيع سحبتي الأخيرة فورًا؛ كان سعر إعادة الشراء عادلًا",
  "chat.chatter.line15": "قنص مضاد قادم، سجّله",
  "chat.chatter.line16": "تبدّل المتصدر مرتين في آخر عشر ثوانٍ",
  "chat.chatter.line17": "هل يطارد أحد غيري سلم Mythic الليلة؟",
  "chat.chatter.line18": "احتفظت بالبطاقة - كان تصميمها رائعًا لدرجة لا تُباع",
  "chat.chatter.line19": "الباكات المتأخرة لا تعيد ضبط الساعة، أحب ذلك",
  "chat.chatter.line20": "تضاعف مجمّع الخانة 8 للتو؛ هناك شيء يُطبخ",
  "chat.chatter.line21": "باكات صغيرة مبكرًا، وكبيرة متأخرًا - هذه طريقة اللعب",
  "chat.chatter.line22": "مؤقت الاحتفاظ وإعادة البيع هذا يفاجئني كل مرة",
  "chat.chatter.line23": "المتنافسون أفضل قيمة من المتصدر الآن",
  "chat.chatter.line24": "قنص نظيف على الخانة 5، بدقة جراحية",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "لوحة الطاولة المرافقة",
  "chat.surface.chat": "الدردشة",
  "chat.surface.activity": "نشاطي",
  "chat.activity.ariaLabel": "نشاطي الخاص",
  "chat.activity.filtersAria": "تصفية النشاط",
  "chat.activity.filter.all": "الكل",
  "chat.activity.filter.packs": "الباكات",
  "chat.activity.filter.bids": "الرهانات",
  "chat.activity.filter.rewards": "المكافآت",
  "chat.activity.filter.feats": "الإنجازات",
  "chat.activity.filter.clan": "العشيرة",
  "chat.activity.today": "اليوم",
  "chat.activity.yesterday": "أمس",
  "chat.activity.status.pending": "قيد الانتظار",
  "chat.activity.status.finalized": "نهائي",
  "chat.activity.status.reversed": "تم عكسه",
  "chat.activity.finalizedAria": "سجل نهائي",
  "chat.activity.signInTitle": "سجّل الدخول لعرض سجلك",
  "chat.activity.signInBody": "تظهر هنا سجلاتك الخاصة بالباكات والرهانات والمكافآت والإنجازات والعشيرة.",
  "chat.activity.loading": "جارٍ تحميل سجلاتك",
  "chat.activity.loadOlder": "تحميل سجلات أقدم",
  "chat.activity.points": "{points} نقطة",
  "chat.activity.event.packBid.title": "تم لعب الباك",
  "chat.activity.event.packBid.detail": "تم تأكيد الدخول في الخانة {tile}.",
  "chat.activity.event.roundWon.title": "الخانة الفائزة",
  "chat.activity.event.roundWon.detail": "فازت الخانة {tile} بهذه اللوحة.",
  "chat.activity.event.roundLost.title": "اكتملت الجولة",
  "chat.activity.event.roundLost.detail": "لم تفز الخانة {tile} بهذه اللوحة.",
  "chat.activity.event.roundRefunded.title": "تم رد قيمة الباك",
  "chat.activity.event.roundRefunded.detail": "أُعيدت قيمة رهان الخانة {tile}.",
  "chat.activity.event.chaseWon.title": "نجحت المطاردة",
  "chat.activity.event.chaseWon.detail": "تم صرف جائزة المطاردة على اللوحة.",
  "chat.activity.event.achievementDetail": "فُتح بفضل لعبك.",
  "chat.activity.event.clanAchievementDetail": "فُتح مع عشيرتك.",
  "chat.activity.unavailableTitle": "النشاط غير متاح",
  "chat.activity.unavailableBody": "تعذّر تحميل سجلاتك. حاول فتح موجزك الخاص مجددًا بعد قليل.",
  "chat.activity.retry": "حاول مرة أخرى",
  "chat.activity.emptyTitle": "لا شيء هنا بعد",
  "chat.activity.emptyBody": "ستظهر هنا إجراءات الباكات والرهانات والمكافآت والإنجازات والعشيرة بعد اكتمالها.",
  "chat.unlock.eyebrow": "تم فتح إنجاز",
  "chat.unlock.clanEyebrow": "تم فتح إنجاز للعشيرة",
  "chat.unlock.dismiss": "إغلاق الإنجاز",
} as Record<string, string>;
