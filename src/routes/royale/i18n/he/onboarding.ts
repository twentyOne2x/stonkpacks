// Hebrew (עברית): "onboarding" segment. Same key set as en/onboarding.ts. Values are modern Israeli Hebrew.
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
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "הזמנה",
  "onboarding.invite.title": "בהזמנה בלבד",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "attn ROYALE פתוח בהזמנה בלבד כרגע. הזן את הקוד שלך כדי לקבל הימור בשווי {amount} ולתפוס מקום.",
  "onboarding.invite.ledeStarter": "attn ROYALE פתוח בהזמנה בלבד כרגע. הזן את הקוד שלך כדי לקבל פאק Starter בשווי {amount} בחינם ולתפוס מקום.",
  "onboarding.invite.inputPlaceholder": "קוד הזמנה",
  "onboarding.invite.inputAriaLabel": "קוד הזמנה",
  "onboarding.invite.unlockButton": "פתח",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "אין לך קוד? שאל את מי שהזמין אותך, או הדבק את קישור ה-{link} שלך.",
  "onboarding.invite.errorInvalidCode": "הזן את קוד ההזמנה מההזמנה שלך.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "אשראי",
  "onboarding.welcome.grantLabelStarterPack": "פאק Starter",
  "onboarding.welcome.titleBack": "ברוך שובך",
  "onboarding.welcome.title": "ברוכים הבאים לטבלה",
  "onboarding.welcome.backLede": "המשך מאיפה שהפסקת, {name}. הפרופיל והיתרה שלך נשמרים במכשיר זה.",
  "onboarding.welcome.fallbackName": "שחקן",
  "onboarding.welcome.ledeStake": "ההזמנה שלך כוללת הימור בשווי {amount}. בחר שם ותפוס מקום.",
  "onboarding.welcome.ledeStarter": "ההזמנה שלך כוללת פאק Starter בשווי {amount} בחינם. הימר על פאקים ותפוס מקום.",
  "onboarding.welcome.continueWithX": "המשך עם X",
  "onboarding.welcome.optionalHint": "אופציונלי",
  "onboarding.welcome.connectWallet": "חבר ארנק",
  "onboarding.welcome.playFreeNote": "שחק בחינם עכשיו. אין צורך בארנק או בכניסה.",
  "onboarding.welcome.or": "או",
  "onboarding.welcome.continueAsTemplate": "המשך בשם {name}",
  "onboarding.welcome.fallbackProfileName": "הפרופיל שלך",
  "onboarding.welcome.close": "סגור",
  "onboarding.welcome.createProfile": "צור את הפרופיל שלך",
  "onboarding.welcome.skipGuest": "דלג ושחק כאורח",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "שחק עכשיו",
  "onboarding.welcome.pickNameFirst": "או בחר קודם שם",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "הגדר את הפרופיל שלך",
  "onboarding.profile.xPhotoAlt": "תמונת הפרופיל שלך ב-X",
  "onboarding.profile.connectedAsTemplate": "מחובר בתור {handle}",
  "onboarding.profile.xAccountFallback": "חשבון X",
  "onboarding.profile.walletLabelTemplate": "ארנק {address}",
  "onboarding.profile.displayNameLabel": "שם תצוגה",
  "onboarding.profile.displayNamePlaceholder": "איך לקרוא לך?",
  "onboarding.profile.handleLabel": "שם משתמש",
  "onboarding.profile.handlePlaceholder": "השם שלך",
  "onboarding.profile.handleHint": "מזהה הטבלה הייחודי שלך. אותיות, מספרים וקווים תחתונים.",
  "onboarding.profile.handleTaken": "שם המשתמש הזה כבר בשימוש במכשיר הזה.",
  "onboarding.profile.startButtonTemplate": "התחל לשחק · {amount} על חשבון הבית",
  "onboarding.profile.back": "חזרה",
  "onboarding.profile.skip": "דלג על",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "איך עובדת attn ROYALE",
  "onboarding.tour.skip": "דלג על",
  "onboarding.tour.step1.eyebrow": "01 · תמיכה במשבצת",
  "onboarding.tour.step1.titleUsdc": "הוסף USDC למשבצות שאהבת",
  "onboarding.tour.step1.titlePacks": "תמוך במשבצות שאהבת באמצעות פאקים",
  "onboarding.tour.step1.bodyUsdc": "כל משבצת היא יעד שאפשר לתמוך בו ב-USDC. ככל שתשים יותר על משבצת, כך יגדל חלקך בזכיות שלה. רכז במשבצת אחת או פזר בין כמה.",
  "onboarding.tour.step1.bodyPacks": "כל משבצת היא יעד שאפשר לתמוך בו בפאקים. ככל שתערום יותר על משבצת, כך יגדל חלקך בזכיות שלה. רכז במשבצת אחת או פזר בין כמה.",
  "onboarding.tour.step2.eyebrow": "02 · נעילה ופתיחה",
  "onboarding.tour.step2.title": "עם הנעילה, כל משבצת פותחת את הפאקים שלה",
  "onboarding.tour.step2.body": "כשהסיבוב ננעל, כל משבצת שנתמכה פותחת את הפאקים שלה וחושפת קלפים מדורגים אמיתיים בשידור חי, בהגרלה הניתנת לאימות, ממש מולך.",
  "onboarding.tour.step3.eyebrow": "03 · הערך הטוב ביותר זוכה",
  "onboarding.tour.step3.title": "המשבצת העשירה ביותר לוקחת את הקופה",
  "onboarding.tour.step3.bodyUsdc": "המשקל של כל משבצת הוא ערך הקלף שנשלף ממנה בתוספת ה-USDC שבה. ככל שהמשבצת כבדה יותר, כך סיכוייה טובים יותר. אם תזכה, תחלק את כל קופת הסיבוב.",
  "onboarding.tour.step3.bodyPacks": "המשקל של כל משבצת הוא ערך הקלף שנשלף ממנה בתוספת הפאקים שעליה. ככל שהמשבצת כבדה יותר, כך סיכוייה טובים יותר. אם תזכה, תחלק את כל קופת הסיבוב.",
  "onboarding.tour.step4.eyebrow": "04 · שמירה, מכירה ומרדף",
  "onboarding.tour.step4.title": "פדה את הזכייה וצפה במרדף",
  "onboarding.tour.step4.body": "שמור את הקלפים המנצחים כקלפים מדורגים או מכור אותם בחזרה לפי תעריף הרכישה החוזרת שלהם. המרדף הוא קופה מתגלגלת שיכולה ליפול על כל משבצת, בכל סיבוב.",
  "onboarding.tour.back": "חזרה",
  "onboarding.tour.next": "הבא",
  "onboarding.tour.enterBoard": "היכנס ללוח",

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
  "onboarding.tour.stepTag": "שלב {n} מתוך {total}",
  "onboarding.tour.spot1.eyebrow": "ההימור שלך",
  "onboarding.tour.spot1.title": "בחר את הפאק שלך",
  "onboarding.tour.spot1.body": "הפאקים הם אמצעי ההימור שלך. כל אחד הוא פאק סגור עם קלפי TCG מדורגים, בחסות Collector Crypt. בחר את הפאק שאיתו תרצה לשחק.",
  "onboarding.tour.spot2.eyebrow": "גודל הערימה",
  "onboarding.tour.spot2.title": "בחר כמות",
  "onboarding.tour.spot2.body": "המונה הזה קובע כמה פאקים מניח כל הימור. אחד מספיק להתחלה. הגדל את הכמות כשאתה רוצה להמר בגדול יותר.",
  "onboarding.tour.spot3.eyebrow": "הצב את ההימור שלך",
  "onboarding.tour.spot3.title": "לחץ על משבצת כדי להמר עליה",
  "onboarding.tour.spot3.titleTouch": "הקש על משבצת כדי להמר עליה",
  "onboarding.tour.spot3.body": "לחיצה על משבצת מציבה עליה את הפאקים שלך. ככל שתערום יותר פאקים על משבצת, כך יגדל חלקך אם היא תזכה. תמוך במשבצת אחת בעוצמה או פזר בין כמה.",
  "onboarding.tour.spot3.bodyTouch": "הקש פעם אחת על משבצת כדי לבחור אותה, ואז הקש שוב כדי לאשר את ההימור. ככל שתערום יותר פאקים על משבצת, כך יגדל חלקך אם היא תזכה.",
  "onboarding.tour.spot4.eyebrow": "הסיבוב",
  "onboarding.tour.spot4.title": "הקופה והשעון",
  "onboarding.tour.spot4.body": "כל פאק שהימרו עליו בלוח מזין את הקופה הזו. כשהשעון מגיע לאפס, ההימורים ננעלים וכל משבצת שנתמכה פותחת את הפאקים שלה בשידור חי.",
  "onboarding.tour.spot5.eyebrow": "הגרלה",
  "onboarding.tour.spot5.title": "משבצות כבדות זוכות בתדירות גבוהה יותר",
  "onboarding.tour.spot5.body": "הגרלה אקראית משוקללת לפי ערך בוחרת משבצת אחת. המשבצות המפסידות מוותרות על הקלפים וההימורים שלהן; תומכי המשבצת הזוכה חולקים את ערך הסיבוב הניתן לחלוקה ביחס למה שכל אחד השקיע.",
  "onboarding.tour.spot6.eyebrow": "הכסף שלך",
  "onboarding.tour.spot6.title": "יתרה והפקדות",
  "onboarding.tour.spot6.body": "היתרה שלך נמצאת כאן. הוסף כספים באמצעות הפקדה ומשוך אותם מתי שתרצה. זכיות נכנסות לכאן ברגע שהסיבוב מסתיים.",
  "onboarding.tour.spot7.eyebrow": "על הבית",
  "onboarding.tour.spot7.title": "פאק Starter החינמי שלך בשווי {amount}",
  "onboarding.tour.spot7.body": "אתה מתחיל עם פאק Starter בשווי {amount} בחינם. הוא כבר טעון בבורר. בחר משבצת שאהבת והתחל.",
  "onboarding.tour.finish": "התחל לשחק",
 "onboarding.tour.paused": "הסיבוב מתחיל - נמשיך מיד אחריו.",
  "onboarding.tour.act2.choice": "לצפות בסיבוב בפעולה",
  "onboarding.tour.act2.choiceHint": "כ-30 שניות, כולל הקלפים",
  "onboarding.tour.act2.bettingTitle": "כל פאק שמהמרים עליו נכנס לקופה אחת",
  "onboarding.tour.act2.bettingBody": "שחקנים מערימים פאקים על המשבצות. כל פאק על הלוח מזין קופה אחת, ומשבצת אחת לוקחת את הכול.",
  "onboarding.tour.act2.drawTitle": "הערך הופך לסיכוי",
  "onboarding.tour.act2.drawBody": "החלק של כל משבצת בערך של כל הקלפים שנשלפו הוא הסיכוי שלה. הגרלה אקראית אחת, ניתנת לאימות ומשוקללת לפי ערך, בוחרת את הזוכה.",
  "onboarding.tour.act2.losersTitle": "כל משבצת מפסידה מוותרת על הקלפים שלה",
  "onboarding.tour.act2.losersBody": "הקלפים והמזומן הזמינים לחלוקה מכל הלוח עוברים לתומכי המשבצת הזוכה.",
  "onboarding.tour.act2.splitTitle": "ההימור שלך קובע את החלק שלך",
  "onboarding.tour.act2.splitBody": "תומכי המשבצת הזוכה חולקים את המזומן והקלפים הזמינים לחלוקה בסיבוב מכל המשבצות, ביחס למה שכל אחד שם במשבצת הזו.",
  "onboarding.tour.act2.grailCaption": "טקס ה-Grail",
  "onboarding.tour.act2.yourTurnEyebrow": "תורך",
  "onboarding.tour.act2.yourTurnTitle": "חבילת Starter שלך מוכנה",
  "onboarding.tour.act2.yourTurnBody": "הלוח חי שוב. בחר משבצת והנח את הימור החבילה הראשון שלך.",
  "onboarding.tour.act2.continue": "להיכנס לסיבוב",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "סובב את הטלפון כדי לשחק ב-attn ROYALE",
  "onboarding.rotate.title": "סובב את הטלפון שלך הצידה",
  "onboarding.rotate.body": "הלוח פועל בצורה הטובה ביותר לרוחב. סובב את הטלפון כדי להיכנס לסיבוב.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "הגדרות",
  "onboarding.settingsClose": "סגור הגדרות",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "בחר שם משתמש כדי ששחקנים אחרים יוכלו למצוא אותך.",
  "onboarding.profileValidation.handleTooShort": "שמות משתמש חייבים להכיל לפחות 3 תווים.",
  "onboarding.profileValidation.handleCharset": "השתמש באותיות, מספרים וקווים תחתונים בלבד.",
  "onboarding.profileValidation.nameRequired": "הוסף שם שיוצג בטבלה.",
  "onboarding.profileValidation.nameTooLong": "השם חייב להיות קצר מ-{n} תווים.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "צופה",
  "onboarding.presence.tierPlaying": "משחק",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "אתה משחק: הימרת {amount} בסיבוב הזה",
  "onboarding.presence.youWatching": "אתה צופה",
  "onboarding.presence.youWatchingBackground": "אתה צופה (כרטיסיית רקע)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "כרגע ב-attn ROYALE: {count} {tier}. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "אתה: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} כרטיסייה נוספת שלך פתוחה",
  "onboarding.presence.otherTabs.other": "+{n} כרטיסיות נוספות שלך פתוחות",
  "onboarding.presence.othersBacking.one": "{n} שחקן נוסף תומך במשבצת בסיבוב הזה",
  "onboarding.presence.othersBacking.other": "{n} שחקנים נוספים תומכים במשבצת בסיבוב הזה",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "בריאות הזרם של attn ROYALE",
  "onboarding.streamHud.eyebrow": "זרם",
  "onboarding.streamHud.statusConnecting": "מתחבר",
  "onboarding.streamHud.statusLive": "בשידור חי",
  "onboarding.streamHud.statusReconnecting": "מתחבר מחדש",
  "onboarding.streamHud.statusError": "בעיית סנכרון",
  "onboarding.streamHud.reconnects.one": "{n} חיבור מחדש",
  "onboarding.streamHud.reconnects.other": "{n} חיבורים מחדש",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "ההתחשבנות בחדר הזה היא ב-USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "קלפים שנפתחו",
  "onboarding.carousel.prevCard": "קלף קודם",
  "onboarding.carousel.nextCard": "הקלף הבא",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "הצג {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "לא מספיק USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "תמיכה ב-{slot} דורשת {needed}. יש לך {balance}.",
  "onboarding.fundShortfall.addFunds": "הוסף כספים",
  "onboarding.fundShortfall.dismiss": "סגור",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "הקש על {icon}, ואז על הוספה למסך הבית כדי לפתוח במסך מלא אמיתי.",
  "onboarding.installHint.fullscreen": "עבור למסך מלא והסתר את סרגל הדפדפן.",
  "onboarding.installHint.fullscreenCta": "עבור למסך מלא",
  "onboarding.installHint.dismiss": "סגור",
} as Record<string, string>;
