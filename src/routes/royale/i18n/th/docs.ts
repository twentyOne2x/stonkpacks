// Thai (ไทย): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / numbers-stay-$-USD rules that apply to every
// locale.
//
// Interpolation tokens ({starter}, {take}, etc.) are always filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations) - never with translated text.
// "Grail" and "Mythic" also appear as plain prose words (not tokens) in this
// segment and stay in Latin script for the same brand-terms reason.
//
// BOLD EMPHASIS (docs.howItWorks.* only): those values carry inline `**bold**`
// markers the route renders as <b>. The marker pairs stay balanced but sit on
// whichever words carry the emphasis in Thai. `**` has no meaning in the
// other docs.* keys.
//
// NO SOURCE-FILE CITATIONS: never reintroduce a file name, path or module
// into player copy in this file.
//
// "Heat" is RETIRED as a player-facing term. The mechanic is described as
// LOOSE CHANGE ("เงินเศษ"); do not reintroduce "heat", a transliteration of
// it (ความร้อน), or a gloss of it into any rendered value. The
// `docs.how.heatRemainder.*` KEY names are kept as-is (key names are never
// rendered) so all locales stay in parity; only their values changed.
//
// "closed beta" (docs.howItWorks.api.title) is rendered without a dev-caveat
// word: "เปิดใช้งานแบบจำกัดสิทธิ์" (limited/gated access) rather than a
// literal "beta" transliteration, matching the house no-dev-caveat rule.
export default {
  "docs.header.title": "เอกสาร",
  "docs.header.back": "← กลับไปที่กระดาน",

  "docs.tabs.ariaLabel": "มุมมองเอกสาร",
  "docs.tabs.how": "วิธีเล่น",
  "docs.tabs.technical": "รายละเอียดทางเทคนิค",

  "docs.how.intro": "ฉบับอธิบายง่ายๆ อ่านอันนี้ก่อน แล้วค่อยไปดู รายละเอียดทางเทคนิค สำหรับกลไกที่แน่นอน",
  "docs.technical.intro": "กลไกที่แน่นอน อธิบายด้วยตัวเลขตรงไปตรงมา",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "attn ROYALE คืออะไร?",
  "docs.how.whatIsRoyale.a":
    "เกมเปิดแพ็กสด ทุกรอบผู้เล่นจะเดิมพันช่องด้วยแพ็ก เมื่อรอบล็อก ทุกช่องที่มีเดิมพันจะฉีกเปิดแพ็กสดๆ และผู้เดิมพันของช่องหนึ่งจะแบ่งกองกลางทั้งหมดกัน",

  "docs.how.whatIsPack.q": "แพ็กคืออะไร?",
  "docs.how.whatIsPack.a":
    "ระดับราคาที่จะฉีกเปิดออกมาเป็นการ์ดเกรดจริงหนึ่งใบทันทีที่ช่องของมันเปิด บันไดราคาไล่ตั้งแต่ {starter}, {elite}, {legendary}, {grail} ไปจนถึง {mythic} แพ็กที่ใหญ่กว่าดึงได้การ์ดที่มีมูลค่าสูงกว่า",

  "docs.how.howBacking.q": "การเดิมพันช่องทำงานอย่างไร?",
  "docs.how.howBacking.a":
    "เลือกช่องที่คุณชอบแล้วเดิมพันด้วยแพ็กลงไป ถ้าเดิมพันช่องเดียวกับผู้เล่นคนอื่น คุณจะแบ่งกัน ส่วนแบ่งของคุณจากชัยชนะของช่องนั้นจะตรงกับสัดส่วนแพ็กที่คุณเพิ่มเข้าไปเอง",

  "docs.how.heatRemainder.q": "ถ้าเดิมพันของฉันไม่ครบเป็นแพ็กเต็มล่ะ?",
  "docs.how.heatRemainder.a":
    "จำนวนเงินที่ต่ำกว่าราคาแพ็กที่ถูกที่สุดจะอยู่บนช่องในฐานะเงินเศษ มันจะติดไปกับเดิมพันส่วนที่เหลือของคุณ แต่จะยังไม่เปิดการ์ดของตัวเองจนกว่าจะเติบโตครบเป็นแพ็กเต็ม และการ์ดที่เปิดแล้วเท่านั้นที่เป็นตัวตัดสินอัตราต่อรอง",

  "docs.how.howWheelPicks.q": "วงล้อเลือกผู้ชนะอย่างไร?",
  "docs.how.howWheelPicks.a":
    "เมื่อล็อกรอบ ทุกช่องที่มีเดิมพันจะฉีกเปิดแพ็กสดๆ จากนั้นวงล้อจะตกที่ช่องหนึ่ง ยิ่งการ์ดที่เปิดได้ของช่องนั้นมีมูลค่าสูง ส่วนแบ่งบนวงล้อก็ยิ่งมาก การ์ดที่ดึงได้มูลค่าสูงเพียงใบเดียวอาจทำให้ช่องเล็กๆ กลายเป็นตัวเต็งได้ การเลือกเองมาจากการจับสลากแบบสุ่มที่ตรวจสอบได้ ไม่มีคนเป็นผู้ตัดสินเด็ดขาด",

  "docs.how.whatDoIWin.q": "ฉันจะได้อะไร?",
  "docs.how.whatDoIWin.aBefore": "ผู้เดิมพันของช่องผู้ชนะจะแบ่ง",
  "docs.how.whatDoIWin.aEmphasis": "กองกลางทั้งหมดของรอบนั้น",
  "docs.how.whatDoIWin.aAfter":
    " ไม่ใช่แค่เดิมพันของช่องนั้นช่องเดียว โดยแบ่งตามสัดส่วนที่แต่ละคนเดิมพันไว้ ผู้เดิมพันสูงสุดของช่องนั้นยังได้สิทธิ์ก่อนใครในการ์ดที่ดีที่สุดเพียงใบเดียวของช่องนั้นด้วย",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "เก็บหรือขาย ต่างกันอย่างไร?",
  "docs.how.keepOrSell.keepLabel": "เก็บ",
  "docs.how.keepOrSell.keepBody": "เพิ่มการ์ดเข้าคอลเลกชันของคุณฟรี",
  "docs.how.keepOrSell.sellLabel": "ขายคืน",
  "docs.how.keepOrSell.sellBody": "จ่ายส่วนหนึ่งของมูลค่าการ์ดเข้ายอดคงเหลือของคุณเป็น USDC ทันที ไม่ต้องรอ",

  "docs.how.decisionTimeout.q": "ถ้าฉันตัดสินใจไม่ทันจะเกิดอะไรขึ้น?",
  "docs.how.decisionTimeout.a":
    "คุณจะมีเวลาสั้นๆ ในการเลือก ถ้าปล่อยเวลาผ่านไป การ์ดจะขายคืนอัตโนมัติตามอัตราปัจจุบัน ดังนั้นสิ่งที่คุณชนะจะไม่มีทางค้างคาอยู่",

  "docs.how.whatIsChase.q": "เชสคืออะไร?",
  "docs.how.whatIsChase.a":
    "แจ็คพอตสะสมที่เติมด้วยส่วนเล็กๆ จากกองกลางของทุกรอบ อาจยิงได้ทุกรอบ ด้วยการจับสลากอิสระของมันเอง และการดึงได้ Grail ไม่ได้เป็นตัวจุดชนวนให้เชสยิง เมื่อเชสยิง แจ็คพอตทั้งหมดจะจ่ายเข้าส่วนแบ่งของผู้ชนะในรอบนั้น",

  "docs.how.howToStartFree.q": "เริ่มเล่นฟรีได้อย่างไร?",
  "docs.how.howToStartFree.a":
    "เข้าร่วมด้วยรหัสคำเชิญและรับยอดคงเหลือฟรีขนาดเท่าแพ็ก Starter ไม่ต้องใช้กระเป๋าเงินหรือลงชื่อเข้าใช้ เล่นได้ทันทีในฐานะผู้เยี่ยมชม",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "บันไดราคาแพ็ก",
  "docs.tech.packLadder.body":
    "แพ็กที่ซื้อได้มีห้าระดับ: {starter}, {elite}, {legendary}, {grail}, {mythic} เดิมพันจะจัดสรรเป็นแพ็กที่ใหญ่ที่สุดเท่าที่จ่ายไหว โดยเริ่มจากใหญ่ที่สุดก่อน ส่วนที่เหลือต่ำกว่าราคาแพ็กที่ถูกที่สุดจะอยู่บนช่องเป็นเงินเศษ และไม่เปิดการ์ดของตัวเอง เดิมพันที่วางเป็นแพ็กเฉพาะจะคงเป็นแพ็กนั้นเสมอ มีเพียงเงินเศษเท่านั้นที่จะเพิ่มขึ้นเมื่อมีการเติมเงินเข้ามาอีก",

  "docs.tech.oddsWeighting.title": "อะไรกำหนดอัตราต่อรอง: การ์ดที่ช่องเปิดได้",
  "docs.tech.oddsWeighting.body":
    "โอกาสชนะของช่องไม่ได้ขึ้นกับจำนวนเงินที่เดิมพันไว้ เมื่อล็อกรอบ ทุกช่องที่มีเงินเดิมพันจะเปิดแพ็กของตัวเอง และส่วนแบ่งของช่องในการจับสลากคือมูลค่าการ์ดที่เพิ่งเปิดได้ เทียบกับมูลค่าการ์ดทั้งหมดที่เปิดในรอบนั้น การ์ดที่ดึงได้มูลค่าสูงเพียงใบเดียวอาจทำให้ช่องเล็กๆ กลายเป็นตัวเต็ง ช่องที่ไม่เปิดการ์ดเลยจะไม่มีโอกาสชนะเลย และเงินเศษเพียงอย่างเดียวจะไม่มีวันเปิดการ์ดได้ ถ้าทั้งรอบไม่มีการ์ดเปิดเลย ก็จะไม่มีอะไรให้จับสลาก รอบนั้นจะถูกยกเลิกและคืนเดิมพันทั้งหมดเต็มจำนวน",

  "docs.tech.vrfDraw.title": "การจับสลากหาผู้ชนะใช้ซีดจาก VRF และให้ผลที่แน่นอนซ้ำได้",
  "docs.tech.vrfDraw.body":
    "ทุกรอบจะสร้างเลขสุ่มที่ตรวจสอบได้หนึ่งค่าจากสูตรตายตัว: รหัสรอบ กำหนดเวลา กระดานที่ถูกล็อกไว้ จำนวนสลาก และค่าเอนโทรปีจากเชนที่นำมาหลังล็อกรอบ ช่องผู้ชนะมาจากการเดินเลขนั้นแบบแน่นอนเพียงครั้งเดียวไปตามน้ำหนักของแต่ละช่อง ข้อมูลเข้าเดิมจะให้ผู้ชนะเดิมเสมอ น้ำหนักของช่องถูกเผยแพร่และล็อกไว้ก่อนที่การเดินเลขจะเกิดขึ้น และใครก็ตรวจสอบการจับสลากทั้งหมดย้อนหลังได้จากใบเสร็จของรอบนั้น",

  "docs.tech.settlementMath.title": "วิธีคำนวณการสรุปผล",
  "docs.tech.settlementMath.body":
    "ผู้เดิมพันของช่องผู้ชนะจะแบ่งกองกลางทั้งหมดของรอบนั้น ไม่ใช่แค่เดิมพันของช่องตัวเอง โดยแบ่งตามสัดส่วนที่แต่ละคนเดิมพันไว้บนช่องนั้น ระบบจะหักส่วนแบ่ง {take} ออกก่อน: {chaseCut} เข้าแจ็คพอตเชส {protocolCut} เข้าโปรโตคอล ส่วนแบ่งนี้จะจ่ายด้วยการ์ดเท่าที่ทำได้ โดยเริ่มจากการ์ดส่วนเกินที่ถูกที่สุดก่อน และการ์ดที่มีมูลค่าสูงเกินกว่าจะพอดีกับส่วนแบ่งนี้จะถูกข้ามไปแทนที่จะถูกขาย ดังนั้นการ์ดที่ดึงได้มูลค่าสูงจึงไม่ใช่การ์ดที่ถูกหักไป มีเพียงส่วนที่การ์ดครอบคลุมไม่พอเท่านั้นที่จะหักจากเงินสดในกองกลาง",

  "docs.tech.cardAllocation.title": "การ์ดตกเป็นของใคร",
  "docs.tech.cardAllocation.body":
    "มีเพียงการ์ดที่ดีที่สุดเพียงใบเดียวของช่องผู้ชนะเท่านั้นที่มีการตัดสินใจเก็บหรือขาย และเป็นของผู้เดิมพันสูงสุดของช่องนั้น การ์ดอื่นๆ ทั้งหมดที่ช่องนั้นเปิดได้จะแบ่งให้ผู้เดิมพันตามสัดส่วนที่แต่ละคนเดิมพันไว้ โดยเรียงจากการ์ดที่ดีที่สุดก่อน การรับการ์ดใบหนึ่งจะหักราคาขายคืนของมันออกจากส่วนแบ่งเงินสดของคุณเอง จึงเป็นการแลกเปลี่ยนไม่ใช่ต้นทุน คุณจะจบรอบด้วยมูลค่าเท่าเดิมไม่ว่าจะเลือกแบบไหน ถ้าไม่มีส่วนแบ่งของใครครอบคลุมการ์ดใบนั้นได้ ระบบจะซื้อการ์ดนั้นเองและเงินสดนั้นจะยังอยู่ในส่วนแบ่ง ดังนั้นจะไม่มีการยัดเยียดการ์ดให้ใครเด็ดขาด Grail ใบที่สองในรอบเดียวกันจะไม่ได้รับการปฏิบัติพิเศษ แต่จะถูกแบ่งไปพร้อมกับของรางวัลที่เหลือ และเชสจะไม่มีวันรับ Grail ไปเด็ดขาด",

  "docs.tech.sellBackRates.title": "อัตราการขายคืน",
  "docs.tech.sellBackRates.body":
    "การ์ดทุกใบมีราคาขายคืนประจำตามแพ็กที่มันมาจาก: {entryRate} สำหรับระดับเริ่มต้น {midRate} สำหรับระดับกลาง {topRate} สำหรับระดับสูงสุด การขายจะจ่ายราคานั้นเข้ายอดคงเหลือของคุณทันที ส่วนการเก็บการ์ดไม่มีค่าใช้จ่ายใดๆ อัตราเหล่านี้อ้างอิงตามอัตรารับซื้อคืนทันทีที่เผยแพร่ไว้สำหรับเครื่องเดียวกันบน CollectorCrypt",

  "docs.tech.chaseJackpot.title": "แจ็คพอตเชส",
  "docs.tech.chaseJackpot.body":
    "แจ็คพอตสะสมที่เติมด้วย {chaseCut} จากกองกลางของทุกรอบ ยิงด้วยการจับสลากอิสระของมันเอง โดยเฉลี่ยประมาณสัปดาห์ละครั้งที่ความเร็วรอบปกติ และการดึงได้ Grail ไม่ได้เป็นตัวจุดชนวน เมื่อเชสยิง แจ็คพอตทั้งหมดจะจ่ายเข้าส่วนแบ่งของผู้ชนะในรอบนั้น จากนั้นจะรีเซ็ตและเริ่มสะสมใหม่ เชสยังรับการ์ดหนึ่งใบต่อรอบเมื่อทำได้ แต่รับได้เฉพาะจากช่องที่แพ้เท่านั้น ไม่มีวันรับการ์ดที่มีมูลค่าสูงสุดของรอบ และไม่มีวันรับ Grail",

  "docs.tech.decisionWindow.title": "ช่วงเวลาตัดสินใจ",
  "docs.tech.decisionWindow.body":
    "การชนะการ์ดเด่นของช่องจะเปิดช่วงเวลา {window} วินาทีให้ตัดสินใจเก็บหรือขาย ถ้าไม่ตอบก่อนหมดเวลา หรือก่อนล็อกรอบถัดไป การ์ดจะถูกขายคืนตามอัตราปัจจุบันโดยอัตโนมัติ ดังนั้นสิ่งที่คุณชนะจะไม่มีทางค้างคาอยู่",

  "docs.tech.devnetCustody.title": "การดูแล USDC บน Devnet",
  "docs.tech.devnetCustody.body":
    "ยอดคงเหลือเคลื่อนไหวเป็นธุรกรรม USDC จริงบน Solana devnet การดูแลเงินทำผ่านกระเป๋าเงินฝังตัว Privy ของคุณ หรือสำรองด้วยคู่กุญแจเฉพาะ devnet ที่เก็บไว้ในเบราว์เซอร์ของคุณเอง ทั้งสองแบบลงนามผ่านเส้นทางการโอนเดียวกันกับที่ระบบใช้งานจริงใช้",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "การยกเลิกและการคืนเงิน",
  "docs.tech.voidRefund.body":
    "รอบหนึ่งจะชนะได้ก็ต่อเมื่อมีการ์ดเปิดเท่านั้น ดังนั้นรอบที่ไม่มีช่องใดเปิดการ์ดเลยจะไม่มีอะไรให้จับสลาก รอบนั้นจะถูกยกเลิกทันที: เดิมพันทุกอย่างบนกระดานจะได้คืนเต็มจำนวน ระบบไม่รับส่วนแบ่งใดๆ และเชสไม่ได้รับเงินป้อนใดๆ บันทึกการจับสลากที่เผยแพร่ของรอบที่ถูกยกเลิกจะแสดงยอดรวมการ์ดเป็นศูนย์ ซึ่งเป็นหลักฐานว่าการยกเลิกเกิดจากกระดานเองไม่ใช่การเลือกของใคร",

  "docs.tech.cardExits.title": "การ์ดที่ชนะจะเข้ากระเป๋าเงินของคุณ",
  "docs.tech.cardExits.body":
    "เมื่อเก็บการ์ด การ์ดจะถูกโอนเข้ากระเป๋าเงินของคุณเองเป็นธุรกรรมที่ลงนามแล้ว โดยระบบจ่ายค่าธรรมเนียมเครือข่ายให้ ถ้ากระเป๋าเงินของคุณยังรับไม่ได้ การส่งจะถูกพักไว้และลองใหม่จนกว่าจะสำเร็จ ไม่มีวันถูกทิ้ง เมื่อขายคืนการ์ด คุณจะได้รับราคาที่เสนอไว้ ณ วินาทีที่คุณชนะพอดี ไม่มีการเสนอราคาใหม่ และราคานั้นใช้ได้เพียงครั้งเดียว มันจะถูกทำเครื่องหมายว่าใช้แล้วก่อนที่เงินจะเคลื่อนไหว ดังนั้นการ์ดใบเดียวกันจะไม่มีวันจ่ายเงินซ้ำสองครั้ง",

  "docs.tech.deposits.title": "การฝาก USDC",
  "docs.tech.deposits.body":
    "การฝากคือการโอน USDC บน Solana ที่คุณลงนามจากกระเป๋าเงินของคุณเอง ยอดคงเหลือของคุณจะเข้าบัญชีก็ต่อเมื่อการโอนนั้นได้รับการยืนยันบนเชนเข้าคลังของเกมแล้วเท่านั้น โดยจำนวนเงินและปลายทางอ่านจากเชนเองเสมอ ไม่ใช่จากคำขอ ลายเซ็นธุรกรรมแต่ละอันเข้าบัญชีได้เพียงครั้งเดียว ดังนั้นการเล่นซ้ำการฝากจะไม่สามารถเข้าบัญชีซ้ำสองได้ และการโอนที่มาเกินเพดานต่อธุรกรรมจะถูกบันทึกไว้เป็นยอดค้างจ่ายคืนคุณแทนที่จะหายไปเฉยๆ",

  "docs.tech.withdrawals.title": "การถอน USDC",
  "docs.tech.withdrawals.body":
    "การถอนจะหักยอดคงเหลือของคุณก่อน แล้วจึงส่ง USDC จากคลังไปยังปลายทางที่คุณอนุมัติไว้ การลงชื่อเข้าใช้ที่ยืนยันแล้วของคุณจะรับรองจำนวนเงินและปลายทางนั้นพอดี และคำขอที่ไม่ตรงกับหลักฐานจะถูกปฏิเสธ ใบเสร็จจะเก็บลายเซ็นธุรกรรมไว้ ถ้าเชนปฏิเสธการโอนอย่างชัดเจน ยอดคงเหลือของคุณจะได้คืนเพียงครั้งเดียว ถ้าการโอนออกไปแล้วแต่ยังไม่ได้รับการยืนยัน จะไม่มีการคืนเงินใดๆ จนกว่าเชนจะให้คำตอบสุดท้าย ดังนั้นการถอนจะไม่มีวันจ่ายซ้ำสองได้ แม้จะผ่านการรีสตาร์ทระบบก็ตาม",

  "docs.tech.identity.title": "บัญชีเดียว ไม่ว่าคุณจะลงชื่อเข้าใช้แบบไหน",
  "docs.tech.identity.body":
    "ลงชื่อเข้าใช้ด้วย Privy หรือพิสูจน์กระเป๋าเงิน Solana โดยลงนามคำท้าทายครั้งเดียวจากเซิร์ฟเวอร์ ทั้งสองทางนำไปสู่บัญชีถาวรเดียวกัน ที่ผูกไว้กับตัวตนที่ยืนยันแล้วเท่านั้น ไม่มีอย่างอื่น การเคลื่อนไหวของเงินใดๆ จะทำงานบนบัญชีของตัวตนที่พิสูจน์ตัวเองในคำขอนั้นจริงๆ ส่วนชื่อ ไอดี และเฮดเดอร์ที่อ้างมาจะถูกทิ้งไป ดังนั้นจึงไม่มีใครสามารถชี้การฝาก การเดิมพัน หรือการถอนไปยังยอดคงเหลือของคนอื่นได้",

  "docs.tech.reconnect.title": "การเชื่อมต่อใหม่และการรีสตาร์ท",
  "docs.tech.reconnect.body":
    "ออกจากระบบแล้วเงินจะหยุดเคลื่อนไหว: บนเส้นทาง USDC การฝาก การเดิมพัน หรือการถอนที่ไม่มีหลักฐานความเป็นเจ้าของจะถูกปฏิเสธ กลับมาลงชื่อเข้าใช้ใหม่ บัญชีเดิมจะรออยู่ พร้อมยอดคงเหลือและการ์ดเดิมทุกอย่าง เพราะทุกอย่างที่คุณเป็นเจ้าของอยู่ในบัญชีแยกประเภทถาวร ไม่ใช่อยู่ในหน้าเว็บ การรีสตาร์ทเซิร์ฟเวอร์จะเล่นบัญชีแยกประเภทนั้นซ้ำและได้ตัวเลขเดิม และการโอนที่ออกไปแล้วจะไม่มีวันถูกส่งซ้ำเป็นครั้งที่สอง",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "หมวดหมู่เอกสาร",
  "docs.nav.overview": "ภาพรวม",
  "docs.nav.prev": "ก่อนหน้า",
  "docs.nav.next": "ถัดไป",

  "docs.nav.section.introduction": "บทนำ",
  "docs.nav.section.gameplay": "วิธีเล่น",
  "docs.nav.section.cards": "การ์ดและการดูแลรักษา",
  "docs.nav.section.money": "เงิน",
  "docs.nav.section.fairness": "ความเป็นธรรม",
  "docs.nav.section.account": "บัญชี",

  "docs.nav.page.whatIsRoyale": "attn ROYALE คืออะไร",
  "docs.nav.page.packs": "แพ็กและบันไดราคา",
  "docs.nav.page.startFree": "เริ่มเล่นฟรี",
  "docs.nav.page.backing": "การเดิมพันช่อง",
  "docs.nav.page.theDraw": "การจับสลาก",
  "docs.nav.page.winning": "สิ่งที่คุณจะได้",
  "docs.nav.page.chase": "เชส",
  "docs.nav.page.keepOrSell": "เก็บหรือขาย",
  "docs.nav.page.cardAllocation": "การ์ดตกเป็นของใคร",
  "docs.nav.page.sellBack": "อัตราการขายคืน",
  "docs.nav.page.cardDelivery": "การส่งมอบการ์ด",
  "docs.nav.page.deposits": "การฝากเงิน",
  "docs.nav.page.withdrawals": "การถอนเงิน",
  "docs.nav.page.settlement": "วิธีคำนวณการสรุปผล",
  "docs.nav.page.custody": "การดูแล USDC",
  "docs.nav.page.odds": "อะไรกำหนดอัตราต่อรอง",
  "docs.nav.page.vrf": "การจับสลากด้วย VRF",
  "docs.nav.page.voidRefund": "การยกเลิกและการคืนเงิน",
  "docs.nav.page.identity": "บัญชีเดียว",
  "docs.nav.page.reconnect": "การเชื่อมต่อใหม่และการรีสตาร์ท",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - เงินทุกดอลลาร์เคลื่อนไหวอย่างไร",
  "docs.howItWorks.lead": "กฎกติกาเต็มรูปแบบของเกม ผู้ชนะถูกจับสลากอย่างไร และการ์ดตกเป็นของใคร",
  "docs.howItWorks.backToBoard": "กลับไปที่กระดาน →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "รอบหนึ่งทำงานอย่างไร",
  "docs.howItWorks.round.pickBet":
    "เลือกขนาดเดิมพัน แล้วคลิกช่อง แต่ละคลิกจะเพิ่มจำนวนนั้นเข้ากองกลางของช่อง",
  "docs.howItWorks.round.yourShare":
    "**ส่วนแบ่งของคุณ** ในช่องหนึ่ง = เดิมพันของคุณ ÷ ยอดรวมของช่องนั้น การใส่ {stake} ลงในช่อง {tile} คือส่วนแบ่ง **{pct}** ถ้าช่องนั้นชนะ คุณจะได้ {pct} ของเงินจ่ายรางวัล",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "**โอกาสชนะ** ตัดสินกันตอนฉีกเปิดแพ็ก ไม่ใช่ตอนเดิมพัน เมื่อรอบล็อก ทุกช่องที่มีเดิมพันจะเปิดแพ็กของตัวเอง และส่วนแบ่งของช่องบนวงล้อคือมูลค่าการ์ดที่เพิ่งเปิดได้ เทียบกับการ์ดทั้งหมดที่เปิดในรอบนั้น",
  "docs.howItWorks.round.tickets":
    "ช่องที่ **ไม่เปิดการ์ดเลย** จะไม่มีส่วนแบ่งใดๆ และถ้าทั้งรอบไม่มีการ์ดเปิดเลย รอบนั้นจะถูก **ยกเลิก** และเดิมพันทั้งหมดจะได้คืนเต็มจำนวน",
  "docs.howItWorks.round.vrf":
    "เมื่อล็อกรอบ **VRF** (ฟังก์ชันสุ่มที่ตรวจสอบได้) จะจับสลากหนึ่งใบที่ชนะจากตัวเลขที่ล็อกไว้ของรอบนั้น: รหัสรอบ กำหนดเวลา ยอดรวมของแต่ละช่อง และจำนวนสลาก ไม่มีใครแม้แต่ระบบเองที่จะบังคับทิศทางได้",
  "docs.howItWorks.round.oddsAreReal": "อัตราต่อรองที่แสดงบนแต่ละช่องคือผลคำนวณการจับสลากที่แน่นอนนั้นเอง ไม่ใช่การเดา",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "เดิมพันของคุณซื้ออะไรได้บ้าง",
  "docs.howItWorks.buys.ladderLead": "ยอดรวมของช่องจะจัดสรรใหม่เป็นแพ็ก โดยเริ่มจากใหญ่ที่สุดก่อน:",
  "docs.howItWorks.buys.example":
    "ตัวอย่าง: ช่องมูลค่า **{amount}** ซื้อได้หนึ่ง Legendary หนึ่ง Elite และหนึ่ง Starter",
  "docs.howItWorks.buys.change":
    "เงินที่น้อยเกินไปสำหรับแพ็กถัดไปคือ **เงินเศษ**: ยังนับรวมเข้ากองกลางและส่วนแบ่งชัยชนะของคุณ แต่จะไม่เปิดแพ็ก และการ์ดที่เปิดแล้วเท่านั้นที่กำหนดอัตราต่อรอง",
  "docs.howItWorks.buys.mythicUpgrade":
    "ถือ Mythic อยู่แล้วใช่ไหม? ปุ่มอัปเกรดจะมุ่งไปที่ **Mythic เต็มแพ็กอีกใบ** แทนที่จะเป็นแพ็กที่เล็กกว่า บันไดราคาจะไม่มีวันถอยลง",
  "docs.howItWorks.buys.cardsPerPack":
    "เมื่อล็อกรอบ ทุกช่องที่มีเงินจะเปิด **การ์ดหนึ่งใบต่อแพ็กเต็มหนึ่งแพ็ก** ที่ถืออยู่ แสดงบนกระดานได้สูงสุด **{max} ใบ** (ส่วนที่เหลือจะแสดงในหน้าผลลัพธ์) ช่องที่มีแต่เงินเศษจะไม่เปิดอะไรเลย",
  "docs.howItWorks.buys.undeliverable":
    "ถ้าแพ็กไม่สามารถส่งมอบได้จริง (ขายหมด มีปัญหาทางเทคนิค หรือหมดเวลา) ค่าใช้จ่ายจะคืนกลับมาเป็นเงินสดให้คุณแทนที่จะค้างคาอยู่",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "ผู้ชนะได้อะไร",
  "docs.howItWorks.winner.entirePool":
    "ผู้เดิมพันของช่องผู้ชนะจะแบ่ง **กองกลางทั้งหมดของรอบนั้น** ไม่ใช่แค่กองกลางของช่องตัวเอง",
  "docs.howItWorks.winner.proRata":
    "การแบ่งเป็นแบบ **ตามสัดส่วน**: ใส่เงิน {pct} ของช่อง ก็ได้ **{pct}** ของเงินจ่ายรางวัล",
  "docs.howItWorks.winner.take":
    "**{take}** ของกองกลางทุกครั้งจะถูกหักออกก่อนแบ่ง: **{chaseCut}** เข้าแจ็คพอตเชส **{protocolCut}** เข้าโปรโตคอล (โบนัสแนะนำเพื่อน การซื้อการ์ดของเชส การดำเนินงาน การซื้อคืนโทเคน)",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "{take} นั้นจะจ่ายด้วยการ์ดเท่าที่ทำได้ โดยเริ่มจากการ์ดส่วนเกินที่ถูกที่สุดก่อน และการ์ดที่มีมูลค่าสูงเกินกว่าจะพอดีกับส่วนนี้จะถูกข้ามไปแทนที่จะถูกขาย ดังนั้นการ์ดที่ดึงได้มูลค่าสูงจึงไม่ใช่การ์ดที่ถูกหักไป มีเพียงส่วนที่การ์ดครอบคลุมไม่พอเท่านั้นที่จะหักจากเงินสดในกองกลาง",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "เชส",
  "docs.howItWorks.chase.feed": "เชสคือแจ็คพอตสะสมที่เติมด้วย **{cut}** จากกองกลางทุกครั้ง",
  "docs.howItWorks.chase.cardCut":
    "เมื่อทำได้ เชสจะรับส่วนแบ่งเป็นการ์ดแทนเงินสด แต่รับได้เฉพาะการ์ดจากช่องที่แพ้ซึ่งมีมูลค่า **ไม่เกิน {cut}** ของกองกลาง ไม่มีวันรับการ์ดที่มีมูลค่าสูงสุดเพียงใบเดียวของรอบ และไม่มีวันรับ grail",
  "docs.howItWorks.chase.independentDraw":
    "แจ็คพอตยิงด้วย **การจับสลากสุ่มอิสระ** ของมันเอง โดยเฉลี่ยประมาณ **สัปดาห์ละครั้ง** ที่ความเร็วรอบปกติ การดึงได้ grail ไม่ได้เป็นตัวจุดชนวน",
  "docs.howItWorks.chase.payout":
    "เมื่อยิง **แจ็คพอตทั้งหมด** จะจ่ายเข้าส่วนแบ่งของผู้ชนะในรอบนั้น จากนั้นจะรีเซ็ตและสะสมใหม่จากเงินป้อนของรอบถัดไป",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "การ์ด Grail",
  "docs.howItWorks.grails.what":
    "**grail** คือการ์ดที่หายากและมีมูลค่าสูงสุดที่แพ็กใดก็ตามอาจดึงได้ แม้แต่ Starter ราคา {price} ก็มีสิทธิ์ดึงได้",
  "docs.howItWorks.grails.headlineGrail":
    "ถ้าการ์ดเด่นของช่องผู้ชนะเป็น grail: **เก็บ** ต้องให้ผู้เดิมพันสูงสุดซื้อส่วนแบ่งของผู้เดิมพันคนอื่นออกไป (หักจากเงินสดของพวกเขา) **ขาย** จะแบ่งเงินจ่ายรางวัล **ตามสัดส่วนให้ทั้งช่อง** ไม่ใช่แค่ให้ผู้เดิมพันสูงสุด",
  "docs.howItWorks.grails.otherGrails":
    "grail ใบอื่นที่ดึงได้ในรอบนั้น (บนช่องอื่น หรือเป็นการ์ดพิเศษ) จะเป็นของรางวัลพิเศษให้ผู้เดิมพันฝั่งชนะ จัดการเหมือนการ์ดพิเศษอื่นๆ ทุกประการ ไม่มีวันถูกกวาดเข้าเชส และเนื่องจากส่วนแบ่งจ่ายด้วยการ์ดที่ถูกที่สุดก่อน grail จึงเป็นการ์ดใบสุดท้ายที่จะถูกนำมาใช้",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "การ์ดตกเป็นของใคร",
  "docs.howItWorks.cards.headline":
    "**การ์ดเด่น** ของช่องผู้ชนะ (การ์ดที่ดึงได้มูลค่าสูงสุดเพียงใบเดียว) เป็นของผู้เดิมพันสูงสุดของช่องนั้นแต่เพียงผู้เดียว: เก็บไว้ฟรี หรือขายในอัตรารับซื้อคืนเป็นเงินสดที่จ่ายให้เขาคนเดียว ไม่แบ่งกับคนอื่นในช่องนั้น",
  "docs.howItWorks.cards.rest":
    "การ์ดอื่นๆ ทั้งหมดที่ช่องนั้นดึงได้ รวมถึงของรางวัลพิเศษที่ส่งมาจากช่องที่แพ้ จะแบ่งกันโดยเรียงมูลค่าสูงสุดก่อน ตามสัดส่วนเดิมพัน ผู้เดิมพันสูงสุดของช่องมักจะได้มากที่สุดและดีที่สุด",
  "docs.howItWorks.cards.deduction":
    "การรับการ์ดใบใดใบหนึ่งจะหักราคารับซื้อคืนของมันออกจากส่วนแบ่งเงินสดของคุณเอง ซึ่งเป็นจำนวนเดียวกับที่คุณจะได้ถ้าขายมัน คุณจึงไม่เสียอะไรเลย",
  "docs.howItWorks.cards.neverForced":
    "จ่ายไม่ไหวใช่ไหม? จะไม่มีการยัดเยียดให้คุณเด็ดขาด ระบบจะซื้อการ์ดนั้นแทน และเงินสดนั้นจะยังอยู่ในส่วนแบ่ง",
  "docs.howItWorks.cards.workedExample":
    "**ตัวอย่างการคำนวณ** กองกลาง {pool} หัก **{take}** ({takeAmount}: เชส {chaseAmount}, โปรโตคอล {protocolAmount}) ออกก่อน มักจ่ายด้วยการ์ดส่วนเกินแทนเงินสดของคุณ เหลือ **{split}** ให้แบ่งกัน: คุณเดิมพัน {yourPct} ของช่อง ({yourStake}) แซมเดิมพัน {samPct} ({samStake}) ช่องนี้ดึงได้การ์ดเด่น {headline} (แพ็ก Legendary รับซื้อคืน **{buyback}**) และการ์ดพิเศษอีกหนึ่งใบ {extra} คุณเก็บการ์ด {headline} ไปฟรี เป็นของคุณไม่ว่าจะเลือกแบบไหน การ์ด {extra} ตกเป็นของแซม: **{buyback}** ของมันคือ **{samCash}** จะถูกหักจากส่วนแบ่งของแซม สรุป: คุณได้ **เงินสด {yourStake} + การ์ด {headline}**; แซมได้ **เงินสด {samCash} + การ์ด {extra}**",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "เก็บหรือขาย",
  "docs.howItWorks.keepSell.buttons":
    "การ์ดทุกใบที่คุณได้รับมาพร้อมสองปุ่ม: **เก็บ** นำการ์ดเกรดเข้าคอลเลกชันของคุณ **ขาย** จ่ายตามอัตรารับซื้อคืนของแพ็กเป็น USDC เข้ายอดคงเหลือของคุณทันที",
  "docs.howItWorks.keepSell.usdc": "USDC คือดอลลาร์ดิจิทัล: **{rate}**",
  "docs.howItWorks.keepSell.rates":
    "อัตรารับซื้อคืนกำหนดโดยแพ็กของการ์ดนั้นเอง: **{entryRate}** สำหรับ Starter/Elite, **{midRate}** สำหรับ Legendary, **{topRate}** สำหรับ Grail ขึ้นไป",
  "docs.howItWorks.keepSell.window":
    "คุณจะมีเวลา **{seconds} วินาที** ทันทีหลังชนะ ถ้าไม่ตัดสินใจ มันจะต่อเนื่องไปตลอดรอบถัดไป โดยแสดงอยู่ใต้กระดานและในหน้าการ์ดของคุณ",
  "docs.howItWorks.keepSell.autoSell":
    "ยังไม่ตัดสินใจตอนรอบถัดไปล็อกใช่ไหม? การ์ดจะ **ขายคืนอัตโนมัติ** ตามอัตรารับซื้อคืนในตอนนั้น เงินของคุณจะไม่มีวันค้างคาอยู่",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "อภิธานศัพท์",
  "docs.howItWorks.glossary.change":
    "**เงินเศษ**: เงินบนช่องที่น้อยเกินกว่าจะซื้อแพ็กถัดไป นับรวมเข้ากองกลางและส่วนแบ่งชัยชนะของคุณ แต่มีเพียงการ์ดที่เปิดแล้วเท่านั้นที่มีผลต่อโอกาสชนะ",
  "docs.howItWorks.glossary.house":
    "**ระบบ**: คลังที่จ่ายเงินซื้อการ์ดคืนและรับซื้อการ์ดที่ไม่มีใครจ่ายไหว",
  "docs.howItWorks.glossary.chase":
    "**เชส**: แจ็คพอตสะสมที่เติมด้วย {cut} จากกองกลางทุกครั้ง ยิงด้วยการจับสลากอิสระของมันเอง ไม่ขึ้นกับผลการ์ดใบใดใบหนึ่ง",
  "docs.howItWorks.glossary.grail": "**Grail**: การ์ดที่หายากและมีมูลค่าสูงสุดที่แพ็กใดก็ตามอาจดึงได้",
  "docs.howItWorks.glossary.buyback":
    "**การรับซื้อคืน**: ข้อเสนอประจำในการแปลงการ์ดเป็นเงินสดที่ {low} ถึง {high} ของมูลค่า ขึ้นอยู่กับระดับแพ็ก",
  "docs.howItWorks.glossary.proRata": "**ตามสัดส่วน**: แบ่งตามสัดส่วนที่แต่ละคนใส่เข้ามา",
  "docs.howItWorks.glossary.vrf": "**VRF**: การจับสลากแบบสุ่มที่ใครก็ตรวจสอบย้อนหลังได้",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API การเดิมพัน (เปิดใช้งานแบบจำกัดสิทธิ์)",
  "docs.howItWorks.api.what":
    "API เชิงโปรแกรมสำหรับอ่านรอบที่กำลังเล่นอยู่ สมัครรับสตรีมเหตุการณ์ และวางเดิมพันจากโค้ดหรือเอเจนต์ ทำงานด้วยอัตราต่อรองและการสรุปผลเดียวกันกับกระดาน",
  "docs.howItWorks.api.access":
    "การเข้าถึง **จำกัดสิทธิ์** และต้องขอเท่านั้น: ปิดไว้เป็นค่าเริ่มต้น ทุกการเรียกใช้ต้องมีคีย์ API ที่อยู่ในรายการที่อนุญาต",
  "docs.howItWorks.api.realBets":
    "การวางเดิมพันจริงต้องผ่านการตรวจสอบเพิ่มอีกหนึ่งขั้น: หลักฐานว่าเป็นคุณจริงๆ (การลงชื่อเข้าใช้เดียวกับในเว็บไซต์) และเป็นไปตามขีดจำกัดการเดิมพันเดียวกับผู้เล่นทุกคน",
  "docs.howItWorks.api.contact": "ดูเอกสารสำหรับนักพัฒนาได้ที่ {path} และส่งอีเมลถึง {email} เพื่อขอคีย์",
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
