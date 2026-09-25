// Hebrew (עברית): "docs" segment. Same key set as en/docs.ts. Values are modern Israeli Hebrew.
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
  "docs.header.title": "מסמכים",
  "docs.header.back": "→ חזרה ללוח",

  "docs.tabs.ariaLabel": "תצוגת המסמכים",
  "docs.tabs.how": "איך זה עובד",
  "docs.tabs.technical": "טכני",

  "docs.how.intro": "הגרסה בשפה פשוטה. קרא אותה קודם, ואז עבור ללשונית הטכנית כדי לראות את המכניקה המדויקת.",
  "docs.technical.intro": "המכניקה המדויקת, במספרים פשוטים.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "מה זה attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "משחק פתיחת פאקים בשידור חי. בכל סיבוב, שחקנים תומכים במשבצות באמצעות פאקים. כשהסיבוב ננעל, כל משבצת שנתמכה פותחת את הפאקים שלה בשידור חי, ותומכי משבצת אחת חולקים את כל הקופה.",

  "docs.how.whatIsPack.q": "מה זה פאק?",
  "docs.how.whatIsPack.a":
    "פאק במחיר קבוע שפותח קלף מדורג אמיתי אחד ברגע שהמשבצת שלו נפתחת. הסולם כולל {starter}, {elite}, {legendary}, {grail} ו-{mythic}. פאקים גדולים יותר שולפים קלפים גדולים יותר.",

  "docs.how.howBacking.q": "איך תמיכה במשבצת עובדת?",
  "docs.how.howBacking.a":
    "בחר משבצת שאהבת והמר על פאקים בה. הימר לצד שחקנים אחרים באותה משבצת וחלקו אותה יחד: החלק שלך בזכיית המשבצת תואם לחלק היחסי של הפאקים שהוספת בעצמך.",

  "docs.how.heatRemainder.q": "מה אם ההימור שלי לא מצטבר לפאק שלם?",
  "docs.how.heatRemainder.a":
    "כל סכום שמתחת למחיר הפאק הזול ביותר נשאר על המשבצת כעודף קטן. הוא מצטרף לשאר ההימור שלך, אך אינו פותח קלף משלו עד שהוא גדל לפאק שלם; הקלפים שנפתחו הם שקובעים את הסיכויים.",

  "docs.how.howWheelPicks.q": "איך הגלגל בוחר מנצח?",
  "docs.how.howWheelPicks.a":
    "עם הנעילה, כל משבצת שנתמכה פותחת את הפאקים שלה בשידור חי. לאחר מכן הגלגל נוחת על משבצת אחת; ככל שהקלפים שנפתחו בה יקרים יותר, כך פרוסת הגלגל שלה גדולה יותר. שליפה אחת גדולה יכולה להפוך משבצת קטנה למועדפת. הבחירה עצמה מגיעה מהגרלה אקראית הניתנת לאימות, ולא מאדם.",

  "docs.how.whatDoIWin.q": "במה אני זוכה?",
  "docs.how.whatDoIWin.aBefore": "תומכי המשבצת הזוכה חולקים את ה-",
  "docs.how.whatDoIWin.aEmphasis": "כל הקופה של הסיבוב",
  "docs.how.whatDoIWin.aAfter":
    ", ולא רק את ההימורים של אותה משבצת, ביחס למה שכל אחד מכם הימר בה. התומך הגדול ביותר במשבצת מקבל גם זכות ראשונה על הקלף הטוב ביותר שלה.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "לשמור או למכור, מה ההבדל?",
  "docs.how.keepOrSell.keepLabel": "שמור",
  "docs.how.keepOrSell.keepBody": "מוסיף את הקלף לאוסף שלך בחינם.",
  "docs.how.keepOrSell.sellLabel": "מכירה חזרה",
  "docs.how.keepOrSell.sellBody": "משלמת לך חלק מערך הקלף ישירות ליתרת ה-USDC שלך, בלי להמתין.",

  "docs.how.decisionTimeout.q": "מה קורה אם לא אחליט בזמן?",
  "docs.how.decisionTimeout.a":
    "תקבל חלון קצר לבחירה. תן לו לחלוף והקלף יימכר בחזרה אוטומטית לפי התעריף הקבוע שלו, כך ששום זכייה לא תיתקע.",

  "docs.how.whatIsChase.q": "מהו המרדף?",
  "docs.how.whatIsChase.a":
    "קופה מתגלגלת שמוזנת מחלק קטן מהקופה של כל סיבוב. היא יכולה לפעול בכל סיבוב, בהגרלה עצמאית משלה, ושליפת Grail אינה מפעילה אותה. כשהיא פועלת, כל הקופה נכנסת לחלוקת הזכייה של אותו סיבוב.",

  "docs.how.howToStartFree.q": "איך אני מתחיל בחינם?",
  "docs.how.howToStartFree.a":
    "הצטרף באמצעות קוד הזמנה וקבל יתרה חינמית בגודל פאק Starter. אין צורך בארנק או בהתחברות; אפשר להיכנס מיד כאורח.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "סולם הפאקים",
  "docs.tech.packLadder.body":
    "חמישה פאקים שאפשר לקנות: {starter}, {elite}, {legendary}, {grail}, {mythic}. הימור מרכיב את הפאקים הגדולים ביותר שהוא יכול לממן, מהגדול לקטן. מה שנשאר מתחת למחיר הפאק הזול ביותר נשאר במשבצת כעודף קטן ואינו פותח קלף משלו. הימור שהוצב כפאק מסוים נשאר בדיוק אותו פאק; רק העודף הקטן מצטבר כלפי מעלה כשהסכום גדל.",

  "docs.tech.oddsWeighting.title": "מה קובע את הסיכויים: הקלפים שהמשבצת פותחת",
  "docs.tech.oddsWeighting.body":
    "סיכוי הזכייה של משבצת אינו נקבע לפי מה שהימרו עליה. עם הנעילה, כל משבצת ממומנת פותחת את הפאקים שלה, ופרוסת ההגרלה שלה היא ערך הקלפים שנפתחו בה, ביחס לערך של כל קלף שנפתח באותו סיבוב. שליפה אחת גדולה יכולה להפוך משבצת קטנה למועדפת. למשבצת שלא פתחה קלף אין סיכוי כלל, ועודף קטן לבדו לעולם אינו פותח קלף. אם סיבוב שלם לא פתח קלפים, אין מה להגריל: הסיבוב מבוטל וכל ההימורים מוחזרים במלואם.",

  "docs.tech.vrfDraw.title": "הגרלת הזוכה נקבעת מזרע VRF ובאופן דטרמיניסטי",
  "docs.tech.vrfDraw.body":
    "בכל סיבוב נגזר מספר אקראי אחד הניתן לאימות ממתכון קבוע: מזהה הסיבוב, המועד האחרון שלו, הלוח הקפוא, מספר כרטיסי ההגרלה ואנטרופיית השרשרת שנלקחה אחרי הנעילה. המשבצת הזוכה נקבעת במסלול דטרמיניסטי יחיד של המספר הזה על פני משקלי המשבצות. אותן תשומות תמיד מפיקות אותו זוכה, משקלי המשבצות מפורסמים וננעלים לפני המסלול, וכל אחד יכול לבדוק מחדש את ההגרלה כולה מקבלת הסיבוב לאחר מכן.",

  "docs.tech.settlementMath.title": "חישובי ההתחשבנות",
  "docs.tech.settlementMath.body":
    "תומכי המשבצת הזוכה חולקים את כל קופת הסיבוב, ולא רק את הימורי המשבצת שלהם, ביחס למה שכל אחד הימר בה. {take} יורדים מכל קופה לפני החלוקה: {chaseCut} מזינים את קופת המרדף, ו-{protocolCut} מממנים את הפרוטוקול. את הסכום הזה משלמים בקלפים ככל האפשר, מהקלף העודף הזול ביותר; קלף יקר מדי מכדי להיכלל בסכום נדלג עליו ולא נמכור אותו, כך שהשליפות הגדולות נשארות. רק מה שהקלפים אינם מכסים יוצא מהמזומן של הקופה.",

  "docs.tech.cardAllocation.title": "מי מקבל את הקלפים",
  "docs.tech.cardAllocation.body":
    "רק הקלף הטוב ביותר של המשבצת הזוכה מצריך החלטת שמירה או מכירה, והוא שייך לתומך הגדול ביותר שלה. כל קלף אחר שנפתח במשבצת מחולק בין תומכיה ביחס למה שכל אחד הימר, מהקלפים הטובים ביותר ומטה. לקיחת קלף מנכה את מחיר המכירה החוזרת שלו מחלק המזומן שלך, לכן זו החלפה ולא עלות: בסוף הסיבוב ערך האחזקות שלך זהה בכל מקרה. אם אף חלק בחלוקה אינו יכול לכסות קלף, הבית קונה אותו והמזומן נשאר בתוך החלוקה, כך שקלף לעולם אינו נכפה על איש. Grail נוסף באותו סיבוב אינו מקבל טיפול מיוחד; הוא מחולק עם שאר השלל, והמרדף לעולם אינו לוקח Grail.",

  "docs.tech.sellBackRates.title": "תעריפי מכירה חזרה",
  "docs.tech.sellBackRates.body":
    "כל קלף נושא מחיר מכירה חזרה קבוע שנקבע לפי הפאק שממנו יצא: {entryRate} בדרגת הכניסה, {midRate} באמצע, ו-{topRate} בדרגה העליונה. מכירה מזכה את היתרה שלך במחיר הזה מיד, ושמירת הקלף אינה עולה דבר. התעריפים משקפים את תעריפי הרכישה החוזרת המיידית שפורסמו לאותן מכונות ב-CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "קופת המרדף",
  "docs.tech.chaseJackpot.body":
    "קופה מתגלגלת שמוזנת ב-{chaseCut} מכל קופת סיבוב. היא מופעלת בהגרלה עצמאית משלה, בערך פעם בשבוע בקצב סיבוב רגיל, ושליפת Grail אינה מפעילה אותה. כשהיא מופעלת, הקופה כולה משולמת לחלוקת הזכייה של אותו סיבוב, ואז מתאפסת ונבנית מחדש. המרדף גם לוקח קלף אחד בסיבוב כשאפשר, אך רק ממשבצת שהפסידה, לעולם לא את הקלף היקר ביותר בסיבוב ולעולם לא Grail.",

  "docs.tech.decisionWindow.title": "חלון החלטה",
  "docs.tech.decisionWindow.body":
    "זכייה בקלף המוביל של המשבצת פותחת חלון של {window} שניות לשמירה או למכירה. אם לא תחליט עד שהחלון נסגר, או עד לנעילת הסיבוב הבא, הקלף יימכר לפי התעריף הקבוע שלו, כך ששום זכייה לא תיתקע.",

  "docs.tech.devnetCustody.title": "משמורת USDC ב-devnet",
  "docs.tech.devnetCustody.body":
    "יתרות עוברות כעסקאות USDC אמיתיות ב-Solana devnet. המשמורת מתבצעת דרך ארנק Privy המוטמע שלך או, כחלופה, צמד מפתחות המיועד ל-devnet בלבד ונשמר בדפדפן שלך; שניהם חותמים בדיוק על נתיב ההעברה שבו משתמשת משמורת הייצור.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "ביטול והחזר",
  "docs.tech.voidRefund.body":
    "אפשר לזכות בסיבוב רק באמצעות קלפים שנפתחו, לכן בסיבוב שבו אף משבצת לא פותחת קלף אין מה להגריל. הסיבוב מתבטל מיד: כל הימור בלוח מוחזר במלואו, הבית אינו לוקח דבר, וגם המרדף אינו מוזן. רשומת ההגרלה שפורסמה לסיבוב שבוטל מציגה סך קלפים אפס, הוכחה שהביטול נכפה על ידי מצב הלוח ולא נבחר על ידי אדם.",

  "docs.tech.cardExits.title": "קלפים שזכית בהם עוברים לארנק שלך",
  "docs.tech.cardExits.body":
    "שמור קלף והוא מועבר לארנק שלך כעסקה חתומה, כשדמי הרשת משולמים עבורך. אם הארנק עדיין אינו יכול לקבל אותו, המשלוח מושהה ומנוסה שוב עד שהוא מגיע, ולעולם אינו נזרק. מכור קלף בחזרה ותקבל את המחיר המדויק שנקבע ברגע הזכייה, בלי תמחור מחדש; אפשר לממש את הצעת המחיר פעם אחת בלבד, והיא מסומנת כמשומשת לפני העברת הכסף, כך שאותו קלף לעולם לא ישולם פעמיים.",

  "docs.tech.deposits.title": "הפקדות USDC",
  "docs.tech.deposits.body":
    "הפקדה היא העברת USDC ב-Solana שעליה חותמים מהארנק שלך. היתרה מזוכה רק לאחר שההעברה לאוצר המשחק אושרה בשרשרת, כשהסכום והיעד נקראים מהשרשרת עצמה ולא מהבקשה. כל חתימת עסקה יכולה לזכות את החשבון פעם אחת בלבד, כך שהפעלת הפקדה מחדש אינה מכפילה את הקרדיט. העברה שחורגת מתקרת העסקה נרשמת כסכום שיוחזר לך, במקום להיעלם.",

  "docs.tech.withdrawals.title": "משיכות USDC",
  "docs.tech.withdrawals.body":
    "במשיכה מחייבים תחילה את היתרה, ואז שולחים את ה-USDC מהאוצר ליעד שאישרת. הכניסה המאומתת שלך מאשרת את הסכום והיעד המדויקים, ובקשה שאינה תואמת להוכחה נדחית. הקבלה שומרת את חתימת העסקה. אם השרשרת דוחה את ההעברה באופן סופי, היתרה מוחזרת פעם אחת בלבד. אם ההעברה יצאה אך עדיין לא אושרה, לא יוחזר דבר עד לקבלת תשובה סופית מהשרשרת, כך שמשיכה אינה יכולה להשתלם פעמיים, גם לאחר הפעלה מחדש.",

  "docs.tech.identity.title": "חשבון אחד, בכל דרך שבה נכנסים",
  "docs.tech.identity.body":
    "נכנסים עם Privy או מוכיחים בעלות על ארנק Solana באמצעות חתימה על אתגר חד-פעמי של השרת. שתי הדרכים מובילות לאותו חשבון קבוע, שמקושר רק לזהות שאומתה. כל פעולה שמזיזה כסף פועלת בחשבון של הזהות שהוכיחה את עצמה בבקשה הזו, ושמות, מזהים וכותרות שסופקו על ידי המשתמש מושלכים, כך שאי אפשר להפנות הפקדה, הימור או משיכה ליתרה של אדם אחר.",

  "docs.tech.reconnect.title": "התחברות מחדש והפעלה מחדש",
  "docs.tech.reconnect.body":
    "מתנתקים והכסף נעצר: במסילות ה-USDC, הפקדה, הימור או משיכה ללא הוכחת בעלות נדחים. מתחברים מחדש ואותו חשבון מחכה, עם אותה יתרה ואותם קלפים, כי כל מה שבבעלותך נשמר בפנקס חשבונות קבוע ולא בדף עצמו. הפעלה מחדש של השרת משחזרת את הפנקס ומגיעה לאותם מספרים, והעברה שכבר יצאה לעולם לא נשלחת פעם נוספת.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "ניווט במסמכים",
  "docs.nav.overview": "סקירה כללית",
  "docs.nav.prev": "הקודם",
  "docs.nav.next": "הבא",

  "docs.nav.section.introduction": "מבוא",
  "docs.nav.section.gameplay": "משחק",
  "docs.nav.section.cards": "קלפים ומשמורת",
  "docs.nav.section.money": "כסף",
  "docs.nav.section.fairness": "הגינות",
  "docs.nav.section.account": "חשבון",

  "docs.nav.page.whatIsRoyale": "מה זה attn ROYALE",
  "docs.nav.page.packs": "פאקים והסולם",
  "docs.nav.page.startFree": "התחל",
  "docs.nav.page.backing": "הימור על משבצת",
  "docs.nav.page.theDraw": "הגרלה",
  "docs.nav.page.winning": "מה אתה זוכה",
  "docs.nav.page.chase": "המרדף",
  "docs.nav.page.keepOrSell": "שמור או מכור",
  "docs.nav.page.cardAllocation": "מי מקבל את הקלפים",
  "docs.nav.page.sellBack": "תעריפי מכירה חזרה",
  "docs.nav.page.cardDelivery": "משלוח קלפים",
  "docs.nav.page.deposits": "הפקדות",
  "docs.nav.page.withdrawals": "משיכות",
  "docs.nav.page.settlement": "מתמטיקה להסדר",
  "docs.nav.page.custody": "משמורת USDC",
  "docs.nav.page.odds": "מה קובע את הסיכוי",
  "docs.nav.page.vrf": "הגרלת VRF",
  "docs.nav.page.voidRefund": "בטל והחזר כספי",
  "docs.nav.page.identity": "חשבון אחד",
  "docs.nav.page.reconnect": "התחברות מחדש והפעלה מחדש",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - איך כל דולר זז",
  "docs.howItWorks.lead": "כללי המשחק המלאים. כיצד נמשך הזוכה ומי מקבל את הקלפים.",
  "docs.howItWorks.backToBoard": "חזרה ללוח ←",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "איך סיבוב עובד",
  "docs.howItWorks.round.pickBet":
    "בחר גודל הימור ולאחר מכן לחץ על משבצת: כל קליק מוסיף את הסכום הזה לקופה של המשבצת.",
  "docs.howItWorks.round.yourShare":
    "**החלק שלך** של משבצת = ההימור שלך ÷ הסכום הכולל של המשבצת. {stake} לתוך {tile} משבצת הוא שיתוף **{pct}**. אם המשבצת הזו מנצחת, תקבל {pct} מהתשלום שלה.",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "**סיכוי הזכייה** נקבע בפתיחה, לא בהימור: כשהסיבוב ננעל, כל משבצת שנתמכה פותחת את הפאקים שלה, ופרוסת הגלגל שלה היא ערך הקלפים שזה עתה נפתחו, ביחס לערך של כל הקלפים שנפתחו באותו סיבוב.",
  "docs.howItWorks.round.tickets":
    "משבצת שפותחת **ללא קלף** אינה מקבלת פרוסה כלל. אם סיבוב שלם לא פותח קלפים, הסיבוב **מבוטל** וכל ההימורים מוחזרים במלואם.",
  "docs.howItWorks.round.vrf":
    "בעת הנעילה, **VRF** (פונקציה אקראית ניתנת לאימות) מגריל כרטיס זוכה אחד מתוך המספרים הנעולים של הסיבוב: מזהה הסיבוב, המועד האחרון, הסכום בכל משבצת ומספר כרטיסי ההגרלה. איש, אפילו לא הבית, אינו יכול לכוון את התוצאה.",
  "docs.howItWorks.round.oddsAreReal": "הסיכויים המוצגים בכל משבצת הם המתמטיקה המדויקת של הגרלה, לא אווירה.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "מה ההימור שלך קונה",
  "docs.howItWorks.buys.ladderLead": "הסכום הכולל של משבצת נכתב מחדש לפאקים, הראשון הגדול ביותר:",
  "docs.howItWorks.buys.example":
    "דוגמה: משבצת **{amount}** קונה Legendary אחת, Elite אחת ו-Starter אחת.",
  "docs.howItWorks.buys.change":
    "סכום שקטן מכדי לקנות את הפאק הבא הוא **עודף קטן**: הוא עדיין נחשב לקופה ולחלקך בזכייה, אבל אינו פותח פאק, ורק הקלפים שנפתחו קובעים את הסיכויים.",
  "docs.howItWorks.buys.mythicUpgrade":
    "כבר מחזיק Mythic? כפתור השדרוג מכוון ל-**עוד Mythic שלם** במקום פאק קטן יותר. הסולם אף פעם לא יורד למטה.",
  "docs.howItWorks.buys.cardsPerPack":
    "בעת הנעילה, כל משבצת ממומנת פותחת **קלף אחד לכל פאק שלם** שיש בה, עד **{max} קלפים** שמוצגים על הלוח (השאר מופיעים בדף התוצאות). משבצת שמכילה רק עודף קטן אינה פותחת דבר.",
  "docs.howItWorks.buys.undeliverable":
    "אם פאק לא יכול להימסר בפועל (אזל, תקלה טכנית, נגמר הזמן), העלות שלו חוזרת אליך כמזומן במקום להיתקע.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "מה המנצח מקבל",
  "docs.howItWorks.winner.entirePool":
    "תומכי המשבצת הזוכה חולקים את **כל קופת הסיבוב**, ולא רק את הקופה של המשבצת שלהם.",
  "docs.howItWorks.winner.proRata":
    "החלוקה היא **יחסית**: הוספת {pct} מהמשבצת, תקבל **{pct}** מהזכייה.",
  "docs.howItWorks.winner.take":
    "**{take}** מכל קופה נגרע לפני החלוקה: **{chaseCut}** מזינים את קופת המרדף, ו-**{protocolCut}** מממנים את הפרוטוקול (הפניות, רכישת קלפי המרדף, תפעול ורכישה חוזרת של אסימונים).",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "את {take} משלמים בקלפים ככל שאפשר, החל בקלף העודף הזול ביותר. קלף יקר מדי מכדי להתאים לסכום נדלג עליו במקום למכור אותו, כך שהשליפות הגדולות אינן אלה שנלקחות. רק מה שהקלפים אינם מכסים יוצא מהמזומן של הקופה.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "המרדף",
  "docs.howItWorks.chase.feed": "המרדף הוא קופה מתגלגלת, המוזנת **{cut}** מכל קופה.",
  "docs.howItWorks.chase.cardCut":
    "כשהוא יכול, המרדף לוקח את חלקו כקלף במקום כמזומן, אבל רק קלף ממשבצת שהפסידה ושוויו **לא יותר מ-{cut}** מהקופה. הוא לעולם אינו לוקח את הקלף היקר ביותר בסיבוב או Grail.",
  "docs.howItWorks.chase.independentDraw":
    "הקופה מופעלת באמצעות **הגרלה אקראית עצמאית** משלה, בממוצע בערך **פעם בשבוע** בקצב סיבובים רגיל. שליפת Grail אינה מפעילה אותה.",
  "docs.howItWorks.chase.payout":
    "כשהיא מופעלת, **כל הקופה** נכנסת לחלוקת הזכייה של אותו סיבוב, ואז מתאפסת ונבנית מחדש מההזנה של הסיבוב הבא.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "**Grail** הוא הקלף הנדיר והיקר ביותר שפאק יכול להוציא. אפילו פאק Starter במחיר {price} יכול להוציא אחד.",
  "docs.howItWorks.grails.headlineGrail":
    "אם קלף הכותרת של המשבצת הזוכה הוא Grail: **Keep** מחייב את התומך המוביל לקנות את חלקם של שאר תומכי המשבצת בקלף (הסכום מנוכה מהמזומן שלהם); **Sell** מחלק את התשלום **יחסית על פני כל המשבצת**, ולא רק לתומך המוביל.",
  "docs.howItWorks.grails.otherGrails":
    "כל Grail אחר שנשלף באותו סיבוב, במשבצת אחרת או כקלף נוסף, הוא שלל בונוס לתומכי המשבצת הזוכה ומטופל כמו כל קלף נוסף. הוא לעולם אינו מועבר למרדף, ומכיוון שהתשלום נעשה קודם בקלפים הזולים ביותר, Grail הוא הקלף האחרון שהמרדף ייקח אי פעם.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "מי מקבל את הקלפים",
  "docs.howItWorks.cards.headline":
    "**קלף הכותרת** של המשבצת הזוכה, כלומר השליפה היחידה בעלת הערך הגבוה ביותר, שייך רק לתומך הגדול ביותר במשבצת: אפשר לשמור אותו בחינם או למכור אותו לפי תעריף הרכישה החוזרת שלו, במזומן שמשולם לו ולא מתחלק עם שאר המשבצת.",
  "docs.howItWorks.cards.rest":
    "כל קלף אחר שנשלף במשבצת, וגם שלל בונוס שהועבר ממשבצות שהפסידו, מתחלקים לפי הערך מהגבוה לנמוך וביחס לגובה ההימור. בדרך כלל התומך הגדול ביותר מסיים עם הכי הרבה קלפים, וגם עם הטובים שבהם.",
  "docs.howItWorks.cards.deduction":
    "לקיחת אחד מהקלפים האלה מנכה את מחיר הרכישה החוזרת שלו מחלק המזומן שלך. זה אותו מזומן שהיית מקבל ממכירתו, כך שאינך מפסיד דבר.",
  "docs.howItWorks.cards.neverForced":
    "אי אפשר לממן קלף? לעולם לא מכריחים אותך לקחת אותו. הבית קונה אותו במקום, והמזומן נשאר בתוך החלוקה.",
  "docs.howItWorks.cards.workedExample":
    "**דוגמה מלאה.** קופה {pool}. **{take}** ({takeAmount}: {chaseAmount} למרדף, {protocolAmount} לפרוטוקול) נגרעים מלמעלה, בדרך כלל באמצעות קלף עודף ולא מהמזומן שלך. **{split}** נשארים לחלוקה: הימרת {yourPct} מהמשבצת ({yourStake}), וסם הימר {samPct} ({samStake}). המשבצת הוציאה קלף כותרת {headline} (מפאק Legendary, רכישה חוזרת **{buyback}**) ועוד קלף {extra}. אתה שומר את קלף {headline} בחינם, והוא שלך בכל מקרה. קלף {extra} עובר לסם: **{buyback}** ממנו, כלומר **{samCash}**, נגרעים מהחלק של סם. בסוף אתה יוצא עם **{yourStake} במזומן + קלף {headline}**; סם מקבל **{samCash} במזומן + קלף {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "שמור או מכור",
  "docs.howItWorks.keepSell.buttons":
    "כל קלף שמקבלים מגיע עם שני לחצנים: **Keep** מוסיף את הקלף לאוסף שלך; **Sell** משלם את תעריף הרכישה החוזרת של הפאק ב-USDC, ישירות ליתרה שלך.",
  "docs.howItWorks.keepSell.usdc": "USDC הוא דולר דיגיטלי: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "הרכישה החוזרת נקבעת לפי הפאק של הקלף: **{entryRate}** ל-Starter/Elite, **{midRate}** ל-Legendary, ו-**{topRate}** ל-Grail ומעלה.",
  "docs.howItWorks.keepSell.window":
    "מקבלים חלון של **{seconds} שניות** מיד לאחר הזכייה. אם לא מחליטים, החלון נמשך לאורך כל הסיבוב הבא, כשהסטטוס מוצג מתחת ללוח ובאזור הקלפים שלך.",
  "docs.howItWorks.keepSell.autoSell":
    "עדיין לא החלטת כשהסיבוב הבא ננעל? הקלף **נמכר אוטומטית** לפי תעריף הרכישה החוזרת שלו. הכסף לעולם לא נתקע.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "מילון מונחים",
  "docs.howItWorks.glossary.change":
    "**עודף קטן**: סכום במשבצת שקטן מכדי לקנות את הפאק הבא. הוא נחשב לקופה ולחלקך בזכייה, אבל רק קלפים שנפתחו מקבלים סיכוי לזכות.",
  "docs.howItWorks.glossary.house":
    "**הבית**: הכספת שמממנת רכישות חוזרות של קלפים וקולטת כל קלף שאיש אינו יכול לממן.",
  "docs.howItWorks.glossary.chase":
    "**המרדף**: קופה מתגלגלת שמקבלת {cut} מכל קופה ומופעלת בהגרלה עצמאית משלה, לא לפי תוצאה של קלף מסוים.",
  "docs.howItWorks.glossary.grail": "**Grail**: הקלף הנדיר והיקר ביותר שכל פאק יכול להפיל.",
  "docs.howItWorks.glossary.buyback":
    "**רכישה חוזרת**: הצעה קבועה למכור קלף ולקבל {low} עד {high} מערכו, לפי דרגת הפאק.",
  "docs.howItWorks.glossary.proRata": "**יחסית**: חלוקה ביחס למה שכל אדם הכניס.",
  "docs.howItWorks.glossary.vrf": "**VRF**: הגרלה אקראית שכל אחד יכול לאמת לאחר מעשה.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "הימורים API (ביטא סגור)",
  "docs.howItWorks.api.what":
    "API תכנותי לקריאת סיבוב חי, להרשמה לזרם האירועים ולהצבת הימורים מקוד או מסוכן. הוא משתמש באותם סיכויים ומנגנון התחשבנות כמו הלוח.",
  "docs.howItWorks.api.access":
    "הגישה **סגורה** ועל פי בקשה בלבד: מושבתת כברירת מחדל, וכל שיחה זקוקה למפתח API רשום.",
  "docs.howItWorks.api.realBets":
    "להצבת הימור אמיתי נדרשת בדיקה נוספת: הוכחה שזה אכן החשבון שלך, באמצעות אותה התחברות כמו באתר, ובכפוף לאותן מגבלות הימור שחלים על כל שחקן.",
  "docs.howItWorks.api.contact": "עיין במסמך המפתח ב-{path} ושלח דוא\"ל ל-{email} כדי לבקש מפתח.",
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
