// Thai (ไทย): "onboarding" segment. Same key set as en/onboarding.ts. Owns
// RoyaleOnboardingGate.tsx (the invite + $25 Starter pack + profile gate),
// RoyaleWelcomeTour.tsx (the how-it-works tour), RoyaleRotateGate.tsx (the
// mobile-portrait rotate prompt), RoyaleSettingsOverlay.tsx's chrome strings,
// royaleProfile.ts's profile-form validation reasons, RoyalePresenceChip.tsx,
// RoyaleLiveStreamHud.tsx, RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and
// RoyaleFundShortfallToast.tsx.
//
// The "attn ROYALE" wordmark itself is never translated (see
// RoyaleBrandMark.tsx) - it stays hardcoded English even inside an otherwise-
// translated sentence (onboarding.rotate.ariaLabel, onboarding.tour.ariaLabel).
// "Starter" (the pack tier name) is a brand term and also stays English
// inside onboarding.invite.ledeStarter / onboarding.welcome.ledeStarter /
// onboarding.tour.spot7.*. House terms kept in step with core.ts's glossary
// comment (pack แพ็ก · pool กองกลาง · Chase เชส). Thai carries no
// grammatical plural, so every .one/.other pair below intentionally holds
// the identical string.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "คำเชิญ",
  "onboarding.invite.title": "เฉพาะผู้ได้รับเชิญ",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "ตอนนี้ attn ROYALE เปิดเฉพาะผู้ได้รับเชิญ กรอกรหัสของคุณเพื่อรับเดิมพัน {amount} และเข้าร่วมโต๊ะ",
  "onboarding.invite.ledeStarter": "ตอนนี้ attn ROYALE เปิดเฉพาะผู้ได้รับเชิญ กรอกรหัสของคุณเพื่อรับแพ็ก Starter มูลค่า {amount} ฟรีและเข้าร่วมโต๊ะ",
  "onboarding.invite.inputPlaceholder": "รหัสคำเชิญ",
  "onboarding.invite.inputAriaLabel": "รหัสคำเชิญ",
  "onboarding.invite.unlockButton": "ปลดล็อก",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "ยังไม่มีรหัส? ถามคนที่เชิญคุณ หรือวางลิงก์ {link} ของคุณ",
  "onboarding.invite.errorInvalidCode": "กรอกรหัสคำเชิญจากคำเชิญของคุณ",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "เครดิต",
  "onboarding.welcome.grantLabelStarterPack": "แพ็ก Starter",
  "onboarding.welcome.titleBack": "ยินดีต้อนรับกลับมา",
  "onboarding.welcome.title": "ยินดีต้อนรับสู่โต๊ะ",
  "onboarding.welcome.backLede": "เล่นต่อจากที่ค้างไว้ได้เลย {name} โปรไฟล์และยอดคงเหลือของคุณถูกบันทึกไว้บนอุปกรณ์นี้",
  "onboarding.welcome.fallbackName": "ผู้เล่น",
  "onboarding.welcome.ledeStake": "คำเชิญของคุณให้เดิมพัน {amount} ตั้งชื่อแล้วเข้าร่วมโต๊ะได้เลย",
  "onboarding.welcome.ledeStarter": "คำเชิญของคุณให้แพ็ก Starter มูลค่า {amount} ฟรี เดิมพันด้วยแพ็กแล้วเข้าร่วมโต๊ะได้เลย",
  "onboarding.welcome.continueWithX": "ดำเนินการต่อด้วย X",
  "onboarding.welcome.optionalHint": "ไม่บังคับ",
  "onboarding.welcome.connectWallet": "เชื่อมต่อกระเป๋าเงิน",
  "onboarding.welcome.playFreeNote": "เล่นฟรีได้ทันที ไม่ต้องใช้กระเป๋าเงินหรือลงชื่อเข้าใช้",
  "onboarding.welcome.or": "หรือ",
  "onboarding.welcome.continueAsTemplate": "ดำเนินการต่อในชื่อ {name}",
  "onboarding.welcome.fallbackProfileName": "โปรไฟล์ของคุณ",
  "onboarding.welcome.close": "ปิด",
  "onboarding.welcome.createProfile": "สร้างโปรไฟล์ของคุณ",
  "onboarding.welcome.skipGuest": "ข้ามและเล่นในฐานะผู้เยี่ยมชม",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "เล่นเลย",
  "onboarding.welcome.pickNameFirst": "หรือเลือกชื่อก่อน",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "ตั้งค่าโปรไฟล์ของคุณ",
  "onboarding.profile.xPhotoAlt": "รูปโปรไฟล์ X ของคุณ",
  "onboarding.profile.connectedAsTemplate": "เชื่อมต่อในชื่อ {handle}",
  "onboarding.profile.xAccountFallback": "บัญชี X",
  "onboarding.profile.walletLabelTemplate": "กระเป๋าเงิน {address}",
  "onboarding.profile.displayNameLabel": "ชื่อที่แสดง",
  "onboarding.profile.displayNamePlaceholder": "อยากให้เราเรียกคุณว่าอะไร?",
  "onboarding.profile.handleLabel": "ชื่อผู้ใช้",
  "onboarding.profile.handlePlaceholder": "ชื่อของคุณ",
  "onboarding.profile.handleHint": "ไอดีโต๊ะเฉพาะตัวของคุณ ใช้ตัวอักษร ตัวเลข และขีดล่างได้",
  "onboarding.profile.handleTaken": "ชื่อผู้ใช้นี้ถูกใช้ไปแล้วบนอุปกรณ์นี้",
  "onboarding.profile.startButtonTemplate": "เริ่มเล่น · {amount} จากระบบ",
  "onboarding.profile.back": "ย้อนกลับ",
  "onboarding.profile.skip": "ข้าม",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "attn ROYALE เล่นอย่างไร",
  "onboarding.tour.skip": "ข้าม",
  "onboarding.tour.step1.eyebrow": "01 · เดิมพันช่อง",
  "onboarding.tour.step1.titleUsdc": "ใส่ USDC ลงในช่องที่คุณชอบ",
  "onboarding.tour.step1.titlePacks": "เดิมพันช่องที่คุณชอบด้วยแพ็ก",
  "onboarding.tour.step1.bodyUsdc": "แต่ละช่องคือตำแหน่งที่คุณเดิมพันด้วย USDC ยิ่งใส่เงินลงในช่องมากเท่าไหร่ ส่วนแบ่งเงินรางวัลของคุณก็ยิ่งมากขึ้น จะทุ่มลงช่องเดียวหรือกระจายหลายช่องก็ได้",
  "onboarding.tour.step1.bodyPacks": "แต่ละช่องคือตำแหน่งที่คุณเดิมพันด้วยแพ็ก ยิ่งเดิมพันในช่องมากเท่าไหร่ ส่วนแบ่งเงินรางวัลของคุณก็ยิ่งมากขึ้น จะทุ่มลงช่องเดียวหรือกระจายหลายช่องก็ได้",
  "onboarding.tour.step2.eyebrow": "02 · ล็อกและฉีกเปิด",
  "onboarding.tour.step2.title": "เมื่อล็อกรอบ ทุกช่องจะฉีกเปิดแพ็กของตัวเอง",
  "onboarding.tour.step2.body": "เมื่อรอบล็อก แต่ละช่องที่มีเดิมพันจะฉีกเปิดแพ็กและดึงการ์ดเกรดจริงออกมาสดๆ ด้วยการจับสลากที่ตรวจสอบได้ ต่อหน้าคุณเลย",
  "onboarding.tour.step3.eyebrow": "03 · มูลค่าสูงสุดชนะ",
  "onboarding.tour.step3.title": "ช่องที่มีมูลค่าสูงสุดกวาดกองกลางไป",
  "onboarding.tour.step3.bodyUsdc": "น้ำหนักของแต่ละช่องคือมูลค่าการ์ดที่ดึงได้บวกกับ USDC ยิ่งช่องมีน้ำหนักมาก อัตราต่อรองก็ยิ่งดี ถ้าชนะ คุณจะได้แบ่งกองกลางทั้งหมดของรอบนั้น",
  "onboarding.tour.step3.bodyPacks": "น้ำหนักของแต่ละช่องคือมูลค่าการ์ดที่ดึงได้บวกกับแพ็กที่เดิมพันไว้ ยิ่งช่องมีน้ำหนักมาก อัตราต่อรองก็ยิ่งดี ถ้าชนะ คุณจะได้แบ่งกองกลางทั้งหมดของรอบนั้น",
  "onboarding.tour.step4.eyebrow": "04 · เก็บ ขาย ไล่ล่า",
  "onboarding.tour.step4.title": "แปลงเป็นเงินสด และจับตาดูเชส",
  "onboarding.tour.step4.body": "เก็บการ์ดที่ชนะไว้เป็นการ์ดเกรด หรือขายคืนตามอัตรารับซื้อคืน และเชสคือแจ็คพอตสะสมที่อาจปล่อยของรางวัลลงช่องไหนก็ได้ ในรอบไหนก็ได้",
  "onboarding.tour.back": "ย้อนกลับ",
  "onboarding.tour.next": "ถัดไป",
  "onboarding.tour.enterBoard": "เข้าสู่กระดาน",

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
  "onboarding.tour.stepTag": "ขั้นตอนที่ {n} จาก {total}",
  "onboarding.tour.spot1.eyebrow": "เดิมพันของคุณ",
  "onboarding.tour.spot1.title": "เลือกแพ็กของคุณ",
  "onboarding.tour.spot1.body": "คุณใช้แพ็กเดิมพัน แต่ละแพ็กเป็นแพ็กซีลที่มีการ์ด TCG เกรดแล้ว ขับเคลื่อนโดย Collector Crypt เลือกแพ็กที่คุณต้องการเล่น",
  "onboarding.tour.spot2.eyebrow": "ขนาดกอง",
  "onboarding.tour.spot2.title": "เลือกจำนวน",
  "onboarding.tour.spot2.body": "ตัวนับนี้กำหนดจำนวนแพ็กที่แต่ละเดิมพันวางลง หนึ่งแพ็กก็เพียงพอสำหรับเริ่มต้น เพิ่มขึ้นเมื่อคุณต้องการเดิมพันใหญ่ขึ้น",
  "onboarding.tour.spot3.eyebrow": "วางเดิมพัน",
  "onboarding.tour.spot3.title": "คลิกช่องเพื่อเดิมพัน",
  "onboarding.tour.spot3.titleTouch": "แตะช่องเพื่อเดิมพัน",
  "onboarding.tour.spot3.body": "คลิกช่องเพื่อวางแพ็กของคุณลงไป ยิ่งเดิมพันแพ็กมากในช่องเดียว ส่วนแบ่งของคุณก็ยิ่งมากถ้าชนะ จะทุ่มช่องเดียวหรือกระจายหลายช่องก็ได้",
  "onboarding.tour.spot3.bodyTouch": "แตะช่องหนึ่งครั้งเพื่อเตรียมเดิมพัน แล้วแตะอีกครั้งเพื่อยืนยัน ยิ่งเดิมพันแพ็กมากในช่องเดียว ส่วนแบ่งของคุณก็ยิ่งมากถ้าชนะ",
  "onboarding.tour.spot4.eyebrow": "รอบ",
  "onboarding.tour.spot4.title": "กองกลางและนาฬิกา",
  "onboarding.tour.spot4.body": "ทุกแพ็กที่เดิมพันบนกระดานจะเติมเข้ากองกลางนี้ เมื่อนาฬิกานับถึงศูนย์ การเดิมพันจะล็อก และทุกช่องที่มีเดิมพันจะฉีกเปิดแพ็กสดๆ",
  "onboarding.tour.spot5.eyebrow": "การจับสลาก",
  "onboarding.tour.spot5.title": "ช่องที่มีน้ำหนักมากชนะบ่อยกว่า",
  "onboarding.tour.spot5.body": "การจับสลากแบบสุ่มที่ถ่วงน้ำหนักตามมูลค่าจะเลือกหนึ่งช่อง ช่องที่แพ้ต้องมอบการ์ดและเงินเดิมพัน ส่วนผู้เดิมพันช่องที่ชนะจะแบ่งมูลค่ารอบที่แจกจ่ายได้ตามสัดส่วนเงินที่แต่ละคนลงไป",
  "onboarding.tour.spot6.eyebrow": "เงินของคุณ",
  "onboarding.tour.spot6.title": "ยอดคงเหลือและการฝากเงิน",
  "onboarding.tour.spot6.body": "ยอดคงเหลือของคุณอยู่ที่นี่ เติมเงินด้วยปุ่มฝาก และถอนได้ทุกเมื่อที่ต้องการ เงินรางวัลจะเข้ามาที่นี่ทันทีที่รอบสรุปผล",
  "onboarding.tour.spot7.eyebrow": "จากระบบ",
  "onboarding.tour.spot7.title": "แพ็ก Starter มูลค่า {amount} ฟรีของคุณ",
  "onboarding.tour.spot7.body": "คุณเริ่มต้นด้วยแพ็ก Starter มูลค่า {amount} ฟรี ซึ่งพร้อมใช้งานอยู่ในตัวเลือกแล้ว เลือกช่องที่คุณชอบแล้วเริ่มเล่นได้เลย",
  "onboarding.tour.finish": "เริ่มเล่น",
 "onboarding.tour.paused": "รอบกำลังจะเริ่ม - เราจะเล่นทัวร์ต่อทันทีหลังจากนั้น",
  "onboarding.tour.act2.choice": "ดูการเล่นของหนึ่งรอบ",
  "onboarding.tour.act2.choiceHint": "ประมาณ 30 วินาที รวมช่วงเปิดการ์ด",
  "onboarding.tour.act2.bettingTitle": "ทุกแพ็กที่วางเดิมพันรวมเป็นกองกลางเดียว",
  "onboarding.tour.act2.bettingBody": "ผู้เล่นวางแพ็กซ้อนกันบนช่องต่างๆ ทุกแพ็กบนกระดานไหลเข้ากองกลางเดียว และมีเพียงช่องเดียวที่ได้ไปทั้งหมด",
  "onboarding.tour.act2.drawTitle": "มูลค่ากลายเป็นอัตราต่อรอง",
  "onboarding.tour.act2.drawBody": "สัดส่วนมูลค่าการ์ดที่ดึงได้ทั้งหมดของแต่ละช่องคือโอกาสชนะ การจับสลากแบบสุ่มที่ตรวจสอบได้และถ่วงน้ำหนักตามมูลค่าหนึ่งครั้งจะเลือกผู้ชนะ",
  "onboarding.tour.act2.losersTitle": "ทุกช่องที่แพ้ต้องมอบการ์ดของตัวเอง",
  "onboarding.tour.act2.losersBody": "การ์ดและเงินสดที่แจกจ่ายได้จากทั้งกระดานจะไปยังผู้เดิมพันช่องที่ชนะ",
  "onboarding.tour.act2.splitTitle": "เงินเดิมพันของคุณกำหนดส่วนแบ่งของคุณ",
  "onboarding.tour.act2.splitBody": "ผู้เดิมพันช่องที่ชนะจะแบ่งเงินสดและการ์ดของรอบที่แจกจ่ายได้จากทุกช่อง ตามสัดส่วนที่แต่ละคนลงในช่องนั้น",
  "onboarding.tour.act2.grailCaption": "พิธีการ grail",
  "onboarding.tour.act2.yourTurnEyebrow": "ตาคุณแล้ว",
  "onboarding.tour.act2.yourTurnTitle": "Starter pack ของคุณพร้อมแล้ว",
  "onboarding.tour.act2.yourTurnBody": "กระดานกลับมาเล่นสดแล้ว เลือกช่องและวางเดิมพัน pack แรกของคุณ",
  "onboarding.tour.act2.continue": "เข้าสู่รอบ",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "หมุนโทรศัพท์ของคุณเพื่อเล่น attn ROYALE",
  "onboarding.rotate.title": "หมุนโทรศัพท์ของคุณเป็นแนวนอน",
  "onboarding.rotate.body": "กระดานเล่นได้ดีที่สุดในแนวนอน หมุนหน้าจอเพื่อเข้าสู่รอบ",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "การตั้งค่า",
  "onboarding.settingsClose": "ปิดการตั้งค่า",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "ตั้งชื่อผู้ใช้เพื่อให้ผู้เล่นคนอื่นหาคุณเจอ",
  "onboarding.profileValidation.handleTooShort": "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร",
  "onboarding.profileValidation.handleCharset": "ใช้ได้เฉพาะตัวอักษร ตัวเลข และขีดล่างเท่านั้น",
  "onboarding.profileValidation.nameRequired": "เพิ่มชื่อเพื่อแสดงที่โต๊ะ",
  "onboarding.profileValidation.nameTooLong": "ต้องไม่เกิน {n} ตัวอักษร",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "กำลังดู",
  "onboarding.presence.tierPlaying": "กำลังเล่น",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "คุณกำลังเล่นอยู่: เดิมพัน {amount} ในรอบนี้",
  "onboarding.presence.youWatching": "คุณกำลังดูอยู่",
  "onboarding.presence.youWatchingBackground": "คุณกำลังดูอยู่ (แท็บพื้นหลัง)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} คน {tier} attn ROYALE อยู่ตอนนี้ {you}",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "คุณ: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+อีก {n} แท็บของคุณเองที่เปิดอยู่",
  "onboarding.presence.otherTabs.other": "+อีก {n} แท็บของคุณเองที่เปิดอยู่",
  "onboarding.presence.othersBacking.one": "อีก {n} คนกำลังเดิมพันช่องในรอบนี้",
  "onboarding.presence.othersBacking.other": "อีก {n} คนกำลังเดิมพันช่องในรอบนี้",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "สถานะสตรีม attn ROYALE",
  "onboarding.streamHud.eyebrow": "สตรีม",
  "onboarding.streamHud.statusConnecting": "กำลังเชื่อมต่อ",
  "onboarding.streamHud.statusLive": "สด",
  "onboarding.streamHud.statusReconnecting": "กำลังเชื่อมต่อใหม่",
  "onboarding.streamHud.statusError": "ปัญหาการซิงค์",
  "onboarding.streamHud.reconnects.one": "เชื่อมต่อใหม่ {n} ครั้ง",
  "onboarding.streamHud.reconnects.other": "เชื่อมต่อใหม่ {n} ครั้ง",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "ห้องนี้สรุปผลเป็น USDC",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "การ์ดที่เปิดแล้ว",
  "onboarding.carousel.prevCard": "การ์ดก่อนหน้า",
  "onboarding.carousel.nextCard": "การ์ดถัดไป",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "แสดง {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "USDC ไม่พอ",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "การเดิมพัน {slot} ต้องใช้ {needed} คุณมี {balance}",
  "onboarding.fundShortfall.addFunds": "เติมเงิน",
  "onboarding.fundShortfall.dismiss": "ปิดข้อความ",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "แตะ {icon} แล้วเลือก เพิ่มไปยังหน้าจอโฮม เพื่อเล่นแบบเต็มหน้าจอจริง",
  "onboarding.installHint.fullscreen": "เข้าสู่โหมดเต็มจอและซ่อนแถบเบราว์เซอร์",
  "onboarding.installHint.fullscreenCta": "เข้าสู่โหมดเต็มจอ",
  "onboarding.installHint.dismiss": "ปิดข้อความ",
} as Record<string, string>;
