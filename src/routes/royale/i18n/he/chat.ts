// Hebrew (עברית): "chat" segment. Same key set as en/chat.ts. Values are modern Israeli Hebrew.
//
// See he/core.ts for the binding GLOSSARY, register, and brand-term decisions.
// REGISTER: modern Israeli Hebrew consumer-software register. Prefer gender-neutral
// infinitive imperatives, noun phrases, and present tense without a pronoun. Where
// direct address is unavoidable, use masculine singular, the mainstream Israeli app convention.
// PLURALS: the schema has only .one / .other. Hebrew maps singular to .one and plural
// to .other, using the plural form for n=2 as well, with no dual form.
// PACK BRAND: the game loanword is פאק / פאקים, never חבילה / חבילות or חפיסה / חפיסת.
// Tier names Starter, Elite, Legendary, Grail, Mythic and brand names stay in Latin.
// BIDI-WATCH: none.
// QUALITY: machine-assisted single-pass translation (codex worker, 2026-07-31),
// glossary-enforced; flagged for native-speaker review.
// QUALITY PASS 2 (2026-08-01): full re-read against en; homonym/calque/MT-artifact fixes.
//

export default {
  "chat.rooms.table": "שולחן",
  "chat.rooms.sendTo": "שליחה אל",
  "chat.rooms.joinHint": "הימור על משבצת יפתח את החדר שלה.",
  "chat.rooms.messageTargets": "חדרי ההודעה",
  "chat.composer.sendFailed": "ההודעה לא נשלחה. נסו שוב.",
  "chat.composer.audienceChanged": "החדר השתנה. ההודעה שלא נשלחה נמחקה.",
  "chat.composer.sessionUnavailable": "הפעלת הצ'אט אינה זמינה. רעננו ונסו שוב.",
  "chat.auth.tileLeadBold": "המרו על משבצת כדי לשוחח",
  "chat.auth.tileBody": ". השולחן וחדרי המשבצות נפתחים אחרי הפאק הראשון שאושר.",
  "chat.auth.sessionUnavailableBold": "הפעלת הצ'אט אינה זמינה",
  "chat.auth.sessionUnavailableBody": ". רעננו כדי לשחזר שליחה מאובטחת.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "צ'אט שולחן",
  "chat.header.title": "צ'אט שולחן",
  "chat.header.fontControlAriaLabel": "גודל טקסט צ'אט",
  "chat.header.fontSmaller": "הקטן את גודל הטקסט בצ'אט",
  "chat.header.fontLarger": "הגדל את גודל הטקסט בצ'אט",
  "chat.header.collapseShow": "הצג צ'אט",
  "chat.header.collapseHide": "הסתר צ'אט",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "שליפת GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "סיבוב #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. פותח את תוצאת הסיבוב בכרטיסייה חדשה.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "ניצח בזכות",
  "chat.event.wonBy": "ניצח בזכות {name}",
  "chat.event.foldedIntoPot": "נוסף לקופה",
  "chat.event.roundWinsTitle": "{tile} זוכה ב-{pot}",
  "chat.event.bestPull": "השליפה הטובה ביותר: {name} ({value})",
  "chat.event.chaseAward": "המרדף +{amount}",
  "chat.event.youWon": "אתה +{amount}",
  "chat.event.youLost": "הפסדת",
  "chat.message.showOriginal": "מתורגם · הצג מקור",
  "chat.message.showTranslation": "הצג תרגום",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "קפוץ לחדש ביותר",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "רק קישורי attn מוצגים כאן.",
  "chat.composer.rateLimitNotice": "השליחה מהירה מדי. נסה שוב בעוד רגע.",
  "chat.composer.placeholder": "כתוב משהו…",
  "chat.composer.inputAriaLabel": "הודעת צ'אט",
  "chat.composer.sendAriaLabel": "שלח הודעה",
  "chat.composer.sendLabel": "שלח",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "היכנס לצ'אט",
  "chat.auth.body": ", החדר נשאר לקריאה בלבד עד שתתחברו (בפינה השמאלית העליונה).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "פותח את דף הקלף בכרטיסייה חדשה",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. פותח את דף הקלף בכרטיסיית רקע.",
  "chat.messageBody.viewCard": "הצג קלף",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "דף הקלף",
  "chat.link.roundResult": "תוצאת הסיבוב",
  "chat.link.profile": "פרופיל",
  "chat.link.collection": "אוסף",
  "chat.link.theBoard": "הלוח",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "משבצת 3 מתמלא במהירות",
  "chat.chatter.line02": "מי ממשיך לצלוף במוביל בכל סיבוב?",
  "chat.chatter.line03": "השליפה של Grail בסיבוב האחרון הייתה מטורפת",
  "chat.chatter.line04": "מומנטום קל - כולם מצטרפים למוביל",
  "chat.chatter.line05": "משבצת 7 החדשה נראית לי זולה מדי",
  "chat.chatter.line06": "שומר את הפאקים שלי לחמש השניות האחרונות",
  "chat.chatter.line07": "מישהו בדיוק שם $250 על משבצת 2, מכבד",
  "chat.chatter.line08": "החלק בקופה של משבצת 6 יקר מדי עכשיו",
  "chat.chatter.line09": "עוד פאק אחד והמשבצת הזו עולה לדרגה עשירה יותר",
  "chat.chatter.line10": "הצלפים שוב הורסים לי את הסיכויים",
  "chat.chatter.line11": "אני ממשיך לקבל קלפי רצפה, הגיע הזמן לשליפה גדולה",
  "chat.chatter.line12": "שימו עין על הלווייתן, הוא תמיד מטה את המשבצת הזוכה",
  "chat.chatter.line13": "משבצת 1 עדיין לא פגעה בכל המפגש, זה עומד לקרות",
  "chat.chatter.line14": "מכרתי מיד את השליפה האחרונה שלי, הרכישה החוזרת הרגישה הוגנת",
  "chat.chatter.line15": "צליפת נגד בדרך, תרשמו",
  "chat.chatter.line16": "המוביל התחלף פעמיים בעשר השניות האחרונות",
  "chat.chatter.line17": "עוד מישהו רודף הערב אחרי סולם Mythic?",
  "chat.chatter.line18": "שמרתי את הקלף, האיור היה יפה מדי למכירה",
  "chat.chatter.line19": "פאקים מאוחרים אף פעם לא מאפסים את השעון, מעולה",
  "chat.chatter.line20": "הקופה של משבצת 8 הוכפלה עכשיו, משהו מתבשל",
  "chat.chatter.line21": "פאקים קטנים בהתחלה, גדולים בסוף, זו הדרך לשחק",
  "chat.chatter.line22": "הטיימר של שמירה או מכירה תופס אותי בכל פעם",
  "chat.chatter.line23": "המתמודדים נראים כרגע משתלמים יותר מהמוביל",
  "chat.chatter.line24": "צליפה נקייה במשבצת 5, כמו ניתוח",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "חלונית העזר של השולחן",
  "chat.surface.chat": "צ'אט",
  "chat.surface.activity": "הפעילות שלי",
  "chat.activity.ariaLabel": "הפעילות הפרטית שלי",
  "chat.activity.filtersAria": "סינון פעילות",
  "chat.activity.filter.all": "הכול",
  "chat.activity.filter.packs": "פאקים",
  "chat.activity.filter.bids": "הימורים",
  "chat.activity.filter.rewards": "תגמולים",
  "chat.activity.filter.feats": "הישגים",
  "chat.activity.filter.clan": "קלאן",
  "chat.activity.today": "היום",
  "chat.activity.yesterday": "אתמול",
  "chat.activity.status.pending": "בהמתנה",
  "chat.activity.status.finalized": "הושלם",
  "chat.activity.status.reversed": "בוטל",
  "chat.activity.finalizedAria": "רשומה סופית",
  "chat.activity.signInTitle": "יש להתחבר כדי לראות את ההיסטוריה",
  "chat.activity.signInBody": "כאן יופיעו הרשומות הפרטיות של הפאקים, ההימורים, התגמולים, ההישגים והקלאן שלך.",
  "chat.activity.loading": "הרשומות שלך נטענות",
  "chat.activity.loadOlder": "טעינת רשומות ישנות יותר",
  "chat.activity.points": "{points} נקודות",
  "chat.activity.event.packBid.title": "הפאק נכנס למשחק",
  "chat.activity.event.packBid.detail": "הכניסה למשבצת {tile} הושלמה.",
  "chat.activity.event.roundWon.title": "המשבצת המנצחת",
  "chat.activity.event.roundWon.detail": "משבצת {tile} זכתה בלוח.",
  "chat.activity.event.roundLost.title": "הסיבוב הוכרע",
  "chat.activity.event.roundLost.detail": "משבצת {tile} לא זכתה בלוח הזה.",
  "chat.activity.event.roundRefunded.title": "הפאק הוחזר",
  "chat.activity.event.roundRefunded.detail": "ההימור על משבצת {tile} הוחזר.",
  "chat.activity.event.chaseWon.title": "המרדף הצליח",
  "chat.activity.event.chaseWon.detail": "פרס המרדף בלוח שולם.",
  "chat.activity.event.achievementDetail": "נפתח בזכות המשחק שלך.",
  "chat.activity.event.clanAchievementDetail": "נפתח יחד עם הקלאן שלך.",
  "chat.activity.unavailableTitle": "הפעילות לא זמינה",
  "chat.activity.unavailableBody": "לא ניתן לטעון את הרשומות שלך. כדאי לנסות שוב את הפיד הפרטי בעוד רגע.",
  "chat.activity.retry": "נסו שוב",
  "chat.activity.emptyTitle": "עדיין אין כאן כלום",
  "chat.activity.emptyBody": "פעולות שהושלמו בפאקים, הימורים, תגמולים, הישגים וקלאן יופיעו כאן.",
  "chat.unlock.eyebrow": "הישג נפתח",
  "chat.unlock.clanEyebrow": "הישג קלאן נפתח",
  "chat.unlock.dismiss": "סגירת ההישג",
} as Record<string, string>;
