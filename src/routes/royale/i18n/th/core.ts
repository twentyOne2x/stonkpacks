// Thai (ไทย): merges the segment files below into the flat dictionary
// royaleI18n.ts imports, mirroring en/core.ts's key set exactly. Native-style
// pass covering settings.* (the language picker), common.* (shared switch/
// button words), gear.<section>.* (the settings overlay's grouped fields),
// nav.* (RoyaleSurfaceNav), mobileNav.* (RoyaleMobileTabBar), shell.* (the
// /lab/royale BOARD ROUTE shell: header status cluster, round-metrics rail,
// board region labels + phase line, the logged-out invitation, the phone
// drawer toggles) and runtime.* (copy produced by the plain, non-component
// .ts modules - grouped as runtime.<module>.<field>: rail / recap / xProfile
// / sellBack / winShare / serverWallet / video / game). See royaleI18n.ts's
// file header for the key/interpolation convention and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// House terms (kept in step with every other segment file in this locale -
// board.ts / cinema.ts / arena.ts / onboarding.ts / docs.ts / pages.ts /
// chat.ts / misc.ts):
//   round รอบ · pool/pot (the round's total pool) กองกลาง · The Chase (the
//   rolling jackpot mechanic) เชส · tile ช่อง · pack แพ็ก (the established
//   Thai gaming loanword, identical singular/plural - never ห่อ/ชุด/แพ็คเกจ)
//   · back/bet/bid/stake เดิมพัน · backer(s) ผู้เดิมพัน · top backer
//   ผู้เดิมพันสูงสุด · sell back ขายคืน · pull (a card ripped out of a pack,
//   noun and verb) ดึงได้ · the draw (the VRF winner pick) การจับสลาก ·
//   ticket สลาก · vault คลัง · graded/slab card การ์ดเกรด · verifiable /
//   provably fair ตรวจสอบได้ · settle/settlement สรุปผล · card/cards การ์ด ·
//   Replay ดูซ้ำ · "You" (the player's own seat) คุณ.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) are brand terms and
// stay in Latin script, mid-sentence included. So do attn ROYALE, ATTN
// Protocol, USDC, X, Privy and CollectorCrypt. Thai carries no grammatical
// plural, so every .one/.other pair below intentionally holds the identical
// string (same convention as ja/ko/zh-Hans/zh-Hant). No em dash (-) anywhere,
// a comma or full stop stands in for it.
//
// Segment: core (the original Phase-1 flat dictionary, moved here verbatim
// as part of the i18n parallel-work restructure) PLUS the two cross-surface
// namespaces above, which belong to no single game surface: shell.* is the
// route chrome every surface hangs off, and runtime.* is module-level copy
// shared by the board, the theatre, the cinema recap, the share flow and the
// account panels at once. Do NOT add new SURFACE keys to this file, add them
// to the segment file for the surface they belong to instead (board, cinema,
// arena, onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "ภาษา",
  "settings.languageSectionAria": "การตั้งค่าภาษา",
  "settings.languageSearchPlaceholder": "ค้นหาภาษา",
  "settings.languageNoResults": "ไม่พบภาษาที่ตรงกัน",
  "settings.languageHint": "มีผลทันที ค้นหาด้วยชื่อหรือพิมพ์เพื่อกรองรายการ",
  "settings.languageInputAria": "ภาษา ค้นหาและเลือก",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "กลุ่มการตั้งค่า",
  "settings.searchPlaceholder": "ค้นหาการตั้งค่า",
  "settings.searchClear": "ล้างการค้นหา",
  "settings.searchResultsAria": "การตั้งค่าที่ตรงกัน",
  "settings.searchNoResults": "ไม่มีอะไรตรงกับ “{query}” ลองใช้ชื่อของสิ่งที่คุณต้องการเปลี่ยน",
  "settings.backToGroups": "การตั้งค่าทั้งหมด",
  "gear.cards.heading": "การ์ด",
  "gear.cards.sectionAria": "การตั้งค่าการ์ด",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "เดิมพัน {bids} · ขั้นต่ำ {amount}",
  "gear.section.summary.display": "ป๊อปอัป {popups} · ภาพผู้เล่น {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "เพลง {music} · เอฟเฟกต์ {sfx}",
  "gear.section.summary.autosell": "กฎขายอัตโนมัติที่ใช้งาน {count} รายการ",
  "gear.section.summary.hotkeys": "ตั้งค่าปุ่มลัดแล้ว {count} รายการ",

  // --- Shared words --------------------------------------------------------
  "common.on": "เปิด",
  "common.off": "ปิด",
  "common.set": "ตั้งค่า",
  "common.clear": "ล้าง",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "ช่อง {n}",
  "common.tileShort": "ช{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "การเดิมพัน",
  "gear.betting.sectionAria": "การตั้งค่าการเดิมพัน",
  "gear.betting.provider.label": "ผู้ให้บริการแพ็ก",
  "gear.betting.provider.automatic": "อัตโนมัติ (เลือก Collector Crypt ก่อน)",
  "gear.betting.provider.hint": "โหมดอัตโนมัติเลือก Collector Crypt ก่อนเมื่อพร้อมใช้งาน และใช้ได้เฉพาะตัวสำรองที่ตรวจสอบแล้ว การเลือกผู้ให้บริการแบบระบุชื่อเป็นข้อกำหนดตายตัว: หากใช้ไม่ได้ เดิมพันจะถูกปฏิเสธ",
  "gear.betting.provider.automaticHint": "อัตโนมัติ · เลือก Collector Crypt ก่อน",
  "gear.betting.provider.strictHint": "{provider} เท่านั้น · ไม่มีตัวสำรอง",
  "gear.betting.provider.unavailable": "{provider} (ไม่พร้อมใช้งาน)",
  "gear.betting.provider.selectedUnavailable": "{provider} ไม่พร้อมใช้งาน เดิมพันแบบตายตัวจะถูกปฏิเสธและจะไม่มีการเปลี่ยนตัวเลือก",
  "gear.betting.provider.actual": "ดำเนินการโดย {provider}",
  "gear.betting.provider.accepted": "รับโดย {provider}",
  "gear.betting.disableBids.label": "ปิดการเดิมพัน",
  "gear.betting.disableBids.hint":
    "ล็อกการเดิมพันของคุณ การแตะช่องจะไม่วางเดิมพันอีกต่อไป ทำให้คุณดูเกม (หรือส่งต่อหน้าจอให้คนอื่น) ได้โดยไม่เผลอวางเดิมพัน ส่วนที่เหลือของเกมยังทำงานตามปกติ",
  "gear.betting.minBid.label": "เดิมพันขั้นต่ำ",
  "gear.betting.minBid.hint":
    "จำนวนเดิมพันที่น้อยที่สุดที่การแตะหนึ่งครั้งจะวางได้ ขนาดเดิมพันของคุณจะไม่ต่ำกว่านี้ ทำให้การแตะเร็วๆ ไม่ทำให้คุณเดิมพันน้อยกว่าที่ตั้งใจ (กำหนดขั้นต่ำที่ $5 เพื่อป้องกันการเดิมพันปลอม)",
  "gear.betting.upgradeCap.label": "เพดานค่าใช้จ่ายในการอัปเกรด",
  "gear.betting.upgradeCap.placeholder": "ไม่จำกัด",
  "gear.betting.upgradeCap.hint":
    "จำนวนเงินสูงสุดที่การคลิกอัปเกรดหนึ่งครั้งจะเสียได้ การอัปเกรดที่แพงกว่านี้จะถูกทำให้จางลง ทำให้ช่องที่คึกคักไม่ทำให้คุณต้องจ่ายเงินก้อนใหญ่โดยไม่ทันตั้งตัว",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "การแสดงผล",
  "gear.display.sectionAria": "การตั้งค่าการแสดงผล",
  "gear.display.chipFloats.label": "ป๊อปอัปการเดิมพัน",
  "gear.display.chipFloats.hint": "แสดงบับเบิลเล็กๆ \"+$X · ชื่อ\" ที่ลอยขึ้นเมื่อมีคนเดิมพันบนช่อง",
  "gear.display.floatThreshold.label": "ซ่อนเดิมพันที่ต่ำกว่า",
  "gear.display.floatThreshold.placeholder": "แสดงทุกเดิมพัน",
  "gear.display.floatThreshold.hint":
    "แสดงบับเบิลเฉพาะเดิมพันที่มีขนาดเท่านี้ขึ้นไป ล้างค่านี้ (หรือตั้งเป็น $0) เพื่อแสดงทุกเดิมพัน ช่วยให้กระดานดูสงบเมื่อมีเดิมพันเล็กๆ เข้ามาจำนวนมาก",
  "gear.display.hidePortraits.label": "ซ่อนรูปโปรไฟล์ผู้เล่น",
  "gear.display.hidePortraits.hint": "ซ่อนวงกลมรูปโปรไฟล์ของผู้เล่นคนอื่นบนช่อง ส่วนเครื่องหมายของคุณเองยังแสดงอยู่",
  "gear.display.fullscreenLandscape.label": "เต็มหน้าจอในแนวนอน",
  "gear.display.fullscreenLandscape.hint":
    "บนมือถือ การแตะครั้งถัดไปในแนวนอนจะซ่อนแถบเบราว์เซอร์ บน iPhone Safari แถบจะย่อให้เล็กลง และการเพิ่มไปยังหน้าจอโฮมจะให้เต็มหน้าจออย่างแท้จริง",
  "gear.display.replayTour.label": "ดูทัวร์ต้อนรับอีกครั้ง",
  "gear.display.replayTour.hint": "เปิดทัวร์ต้อนรับใหม่ตั้งแต่ขั้นตอนแรก",
  "gear.display.couch.label": "ตัวอักษรใหญ่ (ทีวี/โซฟา)",
  "gear.display.headerCollapse.label": "ยุบแถบด้านบน",
  "gear.display.headerCollapse.hint": "พับแถบด้านบนเก็บไว้ เพื่อให้กระดานและการ์ดเต็มหน้าจอ ลูกศรบนแถบด้านบนจะเรียกกลับมา",
  "gear.display.couch.hint":
    "ขยายตัวอักษรทั้งเกมให้อ่านง่ายขึ้น แชท เอกสาร ป้ายกำกับ และตัวเลขเงิน เหมาะสำหรับเล่นจากโซฟา ผังของกระดานยังคงเดิม เปิดได้ด้วยการเติม ?couch=1 ในที่อยู่เว็บ",
  "gear.display.couch.suggested": "หน้าจอนี้ดูเหมือนเบราว์เซอร์ของทีวีหรือเครื่องเกม ตัวอักษรใหญ่เหมาะกับหน้าจอแบบนี้",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "การเปิดเผยผล",
  "gear.reveals.sectionAria": "การตั้งค่าการเปิดเผยผล",
  "gear.reveals.turbo.label": "เปิดเผยผลแบบเร่งเร็ว",
  "gear.reveals.turbo.hint":
    "เร่งการแสดงเปิดเผยผลให้คุณเห็นผลลัพธ์เร็วขึ้น ช่วงเวลาสำคัญยังคงมีจังหวะให้ชม ปิดไว้เป็นค่าเริ่มต้น ผู้เล่นคนอื่นจะเห็นการแสดงแบบเต็มรูปแบบตามปกติ",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "เสียง",
  "gear.sound.sectionAria": "การตั้งค่าเสียง",
  "gear.sound.sfx.label": "เสียงเอฟเฟกต์",
  "gear.sound.sfx.hint":
    "เสียงคลิกชิป การเปิดและล็อกรอบ วงล้อผู้ชนะ และการแสดงเปิดเผยผล ทั้งหมดสังเคราะห์ในเบราว์เซอร์ของคุณ ไม่ต้องโหลดอะไรเพิ่ม",
  "gear.sound.music.label": "เพลง",
  "gear.sound.music.hint":
    "เพลงจะดำเนินไปตามรอบ ค่อยๆ สร้างจังหวะระหว่างการเดิมพัน พุ่งขึ้นในวินาทีสุดท้าย และลดลงตอนเปิดเผยผล เริ่มเล่นหลังจากคุณแตะหรือกดปุ่มครั้งแรก และหยุดชั่วคราวเมื่อคุณสลับแท็บ",
  "gear.sound.musicStyle.label": "สไตล์เพลง",
  "gear.sound.musicStyle.piano": "เปียโนเนิบๆ",
  "gear.sound.musicStyle.snowmelt": "หิมะละลาย",
  "gear.sound.musicStyle.hearthfire": "ไฟในเตาผิง",
  "gear.sound.musicStyle.grotto": "ถ้ำทองคำ",
  "gear.sound.musicStyle.arcade": "จังหวะอาร์เคดคึกคัก",
  "gear.sound.musicStyle.kart": "แข่งรถโกคาร์ต",
  "gear.sound.musicStyle.galaxy": "วอลซ์แสงดาว",
  "gear.sound.musicStyle.hint": "เปียโนเนิบๆ คือทำนองนุ่มนวลไม่เร่งรีบ จังหวะอาร์เคดคึกคักคือทำนองสดใสและเร็ว เปลี่ยนที่ห้องเพลงถัดไป แม้อยู่กลางรอบ",
  "gear.sound.musicVolume.label": "ระดับเสียงเพลง",
  "gear.sound.sfxVolume.label": "ระดับเสียงเอฟเฟกต์",
  "gear.sound.volume.label": "ระดับเสียง",
  "gear.sound.volume.aria": "ระดับเสียงหลัก",
  "gear.sound.volume.hint": "ระดับเสียงหลักเดียวควบคุมทั้งเอฟเฟกต์และเพลงพร้อมกัน",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "กฎการขายคืนอัตโนมัติ",
  "gear.autosell.sectionAria": "กฎการขายคืนอัตโนมัติ",
  "gear.autosell.intro":
    "ตั้งค่าครั้งเดียว แล้วทุกการ์ดที่ชนะและตรงเงื่อนไขจะขายคืนให้เองโดยอัตโนมัติ ไม่มีข้อความให้เลือกเก็บหรือขาย ส่วนที่ไม่ตรงเงื่อนไขยังคงถามคุณเหมือนเดิม",
  "gear.autosell.everyWin.label": "ขายคืนอัตโนมัติทุกการ์ดที่ชนะ",
  "gear.autosell.everyWin.hint":
    "แปลงทุกการ์ดที่คุณชนะเป็นเงินสดตามอัตราขายคืนทันทีที่ได้รับ โดยไม่มีข้อความให้เลือกเก็บหรือขาย การ์ด Grail จะไม่ถูกขายคืนอัตโนมัติเด็ดขาด นี่คือทางลัดสำหรับเปิดสวิตช์ระดับความหายากทั้งสี่แบบด้านล่างพร้อมกัน",
  "gear.autosell.belowValue.label": "ขายถ้ามูลค่าต่ำกว่า",
  "gear.autosell.placeholderOff": "ปิด",
  "gear.autosell.rarity.label": "ขายตามระดับความหายาก",
  "gear.autosell.rarity.aria": "ขายคืนอัตโนมัติตามระดับความหายาก",
  "gear.autosell.rarity.hint":
    "ระดับความหายากของ CollectorCrypt อ่านค่าจากเครื่องแพ็กที่การ์ดแต่ละใบมาจาก ช่วงราคาที่แน่นอนของแต่ละระดับจะเปลี่ยนไปตามแพ็ก ดังนั้นการ์ด $200 อาจหายากในเครื่องหนึ่ง แต่ธรรมดาในเครื่องที่แพงกว่า",
  "gear.autosell.nonVintage.label": "ขายการ์ดที่ไม่ใช่รุ่นวินเทจ",
  "gear.autosell.belowGrade.label": "ขายถ้าเกรดต่ำกว่า",
  "gear.autosell.grader.label": "ขายตามสถาบันเกรด",
  "gear.autosell.grader.hint":
    "เลือกเก็บสถาบันเกรดหนึ่งไว้ แล้วขายคืนอัตโนมัติเฉพาะการ์ดของสถาบันนั้นที่มีเกรดต่ำกว่าตัวเลขที่ตั้งไว้ ยกเลิกติ๊กสถาบันเกรดเพื่อขายคืนอัตโนมัติทุกการ์ดจากสถาบันนั้น ยกเลิกติ๊กทั้งหมดเพื่อขายคืนอัตโนมัติทุกการ์ดที่คุณชนะ แต่ละสถาบันใช้มาตราส่วนต่างกัน ขั้นต่ำของแต่ละสถาบันจึงแยกกัน",
  "gear.autosell.grader.aria": "ขายคืนอัตโนมัติตามสถาบันเกรด",
  "gear.autosell.grader.keep": "เก็บ",
  "gear.autosell.grader.sellAll": "ขายทั้งหมด",
  "gear.autosell.grader.other": "อื่นๆ / ไม่มีเกรด",
  "gear.autosell.grader.placeholderKeepAll": "เก็บทั้งหมด",
  "gear.autosell.grader.placeholderSellAll": "ขายทั้งหมด",
  "gear.autosell.grader.ariaGradeSuffix": "ขายถ้าต่ำกว่าเกรด",
  "gear.autosell.summaryActive": "ใช้งานอยู่:",
  "gear.autosell.summaryNone": "ยังไม่ได้ตั้งกฎขายคืนอัตโนมัติ ทุกการ์ดที่ชนะจะยังถามให้คุณเลือกเก็บหรือขาย",
  "gear.autosell.turnOffAll": "ปิดทั้งหมด",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "ปุ่มลัดการเดิมพัน",
  "gear.hotkeys.sectionAria": "ปุ่มลัดการเดิมพัน",
  "gear.hotkeys.intro":
    "กดปุ่มของช่องเพื่อเดิมพันด้วยขนาดเดิมพันปัจจุบัน ไม่ต้องใช้เมาส์ คลิกปุ่มด้านล่างแล้วกดปุ่มที่ต้องการ สองช่องใช้ปุ่มเดียวกันไม่ได้ การกำหนดใหม่จะย้ายปุ่มมาให้ Esc ยกเลิก Backspace ล้างค่า",
  "gear.hotkeys.enabled.label": "เดิมพันด้วยปุ่มตัวเลข",
  "gear.hotkeys.enabled.hintOn": "ปุ่มลัดใช้งานได้ระหว่างการเดิมพัน กดปุ่มของช่องเพื่อวางเดิมพันทันที",
  "gear.hotkeys.enabled.hintOff": "ปิดปุ่มลัดอยู่ การกดปุ่มของช่องจะไม่วางเดิมพันใดๆ",
  "gear.hotkeys.enabled.hintUnset": "ยังไม่ได้ตัดสินใจ เปิดปุ่มลัดได้ที่นี่ หรือกดปุ่มของช่องระหว่างการเดิมพันแล้วเลือกเปิดใช้งาน",
  "gear.hotkeys.listAria": "ปุ่มลัดการเดิมพันของช่อง",
  "gear.hotkeys.tileLabel": "ช่อง {n}",
  "gear.hotkeys.pressKeyPrompt": "กดปุ่มใดปุ่มหนึ่ง…",
  "gear.hotkeys.setKey": "ตั้งปุ่ม",
  "gear.hotkeys.clear": "ล้าง",
  "gear.hotkeys.ariaPressToBind": "กดปุ่มเพื่อผูกกับช่อง {n}",
  "gear.hotkeys.ariaShortcut": "ปุ่มลัดของช่อง {n} คือ {key} คลิกเพื่อกำหนดใหม่",
  "gear.hotkeys.ariaNoShortcut": "ช่อง {n} ยังไม่มีปุ่มลัด คลิกเพื่อตั้งค่า",
  "gear.hotkeys.ariaClearShortcut": "ล้างปุ่มลัดของช่อง {n}",
  "gear.hotkeys.unboundWarning": "ยังไม่ได้ตั้งปุ่มสำหรับ {list} ช่องเหล่านี้จะไม่มีปุ่มลัดจนกว่าคุณจะตั้งค่า",
  "gear.hotkeys.resetButton": "คืนค่าเริ่มต้น",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "หมวดหมู่ attn ROYALE",
  "nav.board": "กระดาน",
  "nav.results": "ผลลัพธ์",
  "nav.rankingsFull": "อันดับ",
  "nav.rankingsShort": "อันดับ",
  "nav.collectionFull": "คอลเลกชัน",
  "nav.collectionShort": "การ์ด",
  "nav.profile": "โปรไฟล์",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "กระดาน",
  "mobileNav.results": "ผลลัพธ์",
  "mobileNav.ladder": "อันดับ",
  "mobileNav.collection": "คอลเลกชัน",
  "mobileNav.profile": "โปรไฟล์",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "เอกสาร",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "แล็บ attn ROYALE",
  "shell.header.statusAria": "สถานะรอบ",
  "shell.header.collapse": "ซ่อนแถบด้านบน",
  "shell.header.expand": "แสดงแถบด้านบน",
  "shell.header.round": "รอบ #{n}",
  "shell.header.turboTitle": "จังหวะเวลารอบแบบเร่ง",
  "shell.header.turboBadge": "เทอร์โบ",
  "shell.metrics.aria": "สรุปรอบ",
  "shell.metrics.totalPool": "กองกลางทั้งหมด",
  "shell.metrics.packsLive": "แพ็กที่เปิดอยู่",
  "shell.metrics.yourStake": "เดิมพันของคุณ",
  "shell.metrics.selectedBet": "เดิมพันที่เลือก",
  "shell.board.aria": "กระดาน attn ROYALE",
  "shell.board.label": "กระดาน",
  "shell.board.phaseOpen": "คลิกช่องใดก็ได้เพื่อเดิมพัน เดิมพันจะจัดกลุ่มใหม่เป็นชุดแพ็กที่คุ้มค่าที่สุด",
  "shell.board.phaseLock": "ล็อกแล้ว · กำลังเปิดแพ็ก",
  "shell.board.phaseSettled": "รอบสรุปผลแล้ว",
  "shell.board.metaOpen": "กองกลาง {pool} · 3% ป้อนเข้าเชส · แพ็กจะเปิดเมื่อล็อกรอบ",
  "shell.board.metaClosed": "หนึ่งช่องจะชนะกองกลางด้วยอัตราต่อรองแบบถ่วงน้ำหนักที่ตรวจสอบได้",
  "shell.board.reopenReveal": "↗ เปิดการเปิดเผยผลอีกครั้ง",
  "shell.connectNudge":
    "เข้าเกมและฝากเงินเพื่อเริ่มเดิมพันช่อง รอบยังคงดำเนินต่อไปในพื้นหลัง",
  "shell.decision.cardFallback": "การ์ดของคุณ",
  "shell.mobile.close": "ปิด",
  "shell.mobile.chat": "แชท",
  "shell.mobile.chatOpenAria": "เปิดแชทโต๊ะ",
  "shell.mobile.chatCloseAria": "ปิดแชทโต๊ะ",
  "shell.mobile.cards": "การ์ด",
  "shell.mobile.cardsOpenAria": "เปิดการ์ดของคุณเพื่อขายหรือถอน",
  "shell.mobile.cardsCloseAria": "ปิดการ์ดของคุณ",
  "shell.mobile.players": "ผู้เล่น",
  "shell.mobile.playersOpenAria": "เปิดรายชื่อผู้เล่น เรียงตามยอดเดิมพัน",
  "shell.mobile.playersCloseAria": "ปิดรายชื่อผู้เล่น",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* - royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC ในเกม",
  "runtime.rail.privySessionCredit": "เครดิตเซสชัน Privy",
  "runtime.rail.houseCredit": "เครดิตจากระบบ",
  "runtime.rail.connectPrivy": "เชื่อมต่อ Privy เพื่อเติม USDC ในเกม",
  "runtime.rail.privySession": "เซสชัน Privy",
  "runtime.rail.depositAction": "เติม +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "บัญชี Privy",
  "runtime.rail.house": "ระบบ",
  "runtime.rail.depositReceipt": "ใบเสร็จ {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "แตะแพ็กใดก็ได้เพื่อเดิมพัน {amount} แต่ละช่องยังมีปุ่ม +{low} / +{high} ของตัวเองด้วย",
  "runtime.rail.sellBack": "ขายคืน → ยอดคงเหลือ +{amount}",

  // runtime.recap.* - royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "คุณ",
  "runtime.recap.topBacker": "ผู้เดิมพันสูงสุด",
  "runtime.recap.topCardOutcome": "การ์ดเด่นสุด · ตัดสินใจเก็บ/ขาย",
  "runtime.recap.backer": "ผู้เดิมพัน",
  "runtime.recap.cardWon": "การ์ดที่ชนะได้",
  "runtime.recap.chaseLootReleased": "ของรางวัลจากเชสถูกปล่อยออกมา",
  "runtime.recap.theChase": "เชส",
  "runtime.recap.sweptIntoVault": "ถูกกวาดเข้าคลัง",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "ค่าธรรมเนียมโปรโตคอล",
  "runtime.recap.soldBack": "ขายคืนแล้ว",
  "runtime.recap.intoSplit": "+{amount} เข้าส่วนแบ่ง",

  // runtime.xProfile.* - royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "การเชื่อมต่อ X ยังใช้งานไม่ได้ในตอนนี้",
  "runtime.xProfile.connected": "เชื่อมต่อแล้ว",

  // runtime.sellBack.* - royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "ไม่ทราบการ์ด",

  // runtime.winShare.* - royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "ชนะ",
  "runtime.winShare.headlineGrailPull": "ดึงได้ GRAIL",
  "runtime.winShare.headlineCardsWon": "การ์ดที่ชนะ",
  "runtime.winShare.cardInImage": "การ์ดอยู่ในภาพ",
  "runtime.winShare.receiptInImage": "ใบเสร็จอยู่ในภาพ",

  // runtime.serverWallet.* - royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "ระบบถอนเงินออฟไลน์อยู่ในขณะนี้ ไม่มีเงินถูกโอน",
  "runtime.serverWallet.noSigner": "ไม่มีผู้ลงนามกระเป๋าเงินเชื่อมต่ออยู่สำหรับเซสชันนี้ ไม่มีเงินถูกโอน",
  "runtime.serverWallet.nonceUnavailable": "ไม่สามารถขอรหัสยืนยันการถอนเงินจากเซิร์ฟเวอร์ได้",
  "runtime.serverWallet.signatureUnavailable": "กระเป๋าเงินไม่ได้ส่งลายเซ็นสำหรับรหัสยืนยันการถอนเงินกลับมา",
  "runtime.serverWallet.boundaryLabel": "เครดิตโต๊ะและ USDC ในกระเป๋าเงินเซิร์ฟเวอร์เป็นยอดคงเหลือคนละส่วนกัน",

  // runtime.video.* - royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "เบราว์เซอร์นี้ไม่รองรับการบันทึกหน้าจอ",
  "runtime.video.noRecorderFormat": "เบราว์เซอร์นี้ไม่มีรูปแบบวิดีโอ MediaRecorder",
  "runtime.video.canceled": "ยกเลิกการเรนเดอร์แล้ว",
  "runtime.video.unreachable": "ไม่สามารถติดต่อบริการเรนเดอร์ที่ {url} ได้",
  "runtime.video.rejected": "บริการเรนเดอร์ปฏิเสธรอบนี้: {detail}",
  "runtime.video.requestFailed": "คำขอเรนเดอร์ล้มเหลว ({status})",
  "runtime.video.noJobId": "บริการเรนเดอร์ไม่ได้ส่งรหัสงานกลับมา",
  "runtime.video.lostJob": "หลุดการเชื่อมต่อกับงานเรนเดอร์ ({status})",
  "runtime.video.lostContact": "ขาดการติดต่อกับบริการเรนเดอร์ระหว่างการเรนเดอร์",
  "runtime.video.renderFailed": "การเรนเดอร์ล้มเหลว: {error}",
  "runtime.video.unknownError": "ข้อผิดพลาดที่ไม่ทราบสาเหตุ",
  "runtime.video.downloadFailed": "วิดีโอเสร็จสมบูรณ์แล้วแต่ไม่สามารถดาวน์โหลดได้",
  "runtime.video.downloadHttpFailed": "วิดีโอเสร็จสมบูรณ์แล้วแต่การดาวน์โหลดล้มเหลว ({status})",
  "runtime.video.emptyVideo": "บริการเรนเดอร์ส่งวิดีโอเปล่ากลับมา",
  "runtime.video.shareTagline": "การประลองแพ็ก ทุกการจับสลากตรวจสอบได้ ชมรอบนี้ได้ที่:",

  // runtime.game.* - useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "ห้องพร้อมเล่นแล้ว รอบเริ่มอัตโนมัติ - เปิด {seconds} วินาที จากนั้นเข้าสู่การเปิดเผยผล",
  "runtime.game.chaseVault": "คลังเชส",
  "runtime.game.aTile": "ช่องหนึ่ง",
  "runtime.game.aPack": "แพ็กหนึ่ง",
  "runtime.game.theCard": "การ์ดใบนี้",
  "runtime.game.collectedSplit": "รอบ {round} · ได้รับ {amount} USDC จากส่วนแบ่ง",
  "runtime.game.chaseDropSplit": "รอบ {round} · เชสหล่นลงมาที่ช่องของคุณ {award} · ส่วนแบ่งของคุณ: {amount} USDC",
  "runtime.game.grailSecured": "ครอบครอง Grail สำเร็จ: เก็บ {card} ({amount}) ไว้ในคอลเลกชันของคุณ",
  "runtime.game.keptCard": "เก็บ {card} ({amount}) → เพิ่มเข้าคอลเลกชันของคุณแล้ว",
  "runtime.game.soldCardSettle": "ขายคืน {card} ได้ {amount} USDC ({pct}% ของ {value})",
  "runtime.game.roundVoidedRefund":
    "รอบ {round} ถูกยกเลิก ไม่มีแพ็กใดเปิดเลย จึงไม่มีการจับสลากตามมูลค่าการ์ด เดิมพัน {amount} ของคุณถูกคืนแล้ว",
  "runtime.game.roundVoidedAll":
    "รอบ {round} ถูกยกเลิก ไม่มีแพ็กใดเปิดเลย จึงไม่มีการจับสลากตามมูลค่าการ์ด เดิมพันทั้งหมดถูกคืนแล้ว",
  "runtime.game.chaseFiredYours.one": "เชสยิงแล้ว: การ์ด {n} ใบ ({amount}) ถูกปล่อยมาที่ช่อง {tile} ของคุณ",
  "runtime.game.chaseFiredYours.other": "เชสยิงแล้ว: การ์ด {n} ใบ ({amount}) ถูกปล่อยมาที่ช่อง {tile} ของคุณ",
  "runtime.game.chaseFiredTable.one":
    "เชสยิงในรอบ {round}: {award} + การ์ด {n} ใบ หล่นลงที่ {tile} แบ่งกันโดยผู้เดิมพันของช่องนั้น",
  "runtime.game.chaseFiredTable.other":
    "เชสยิงในรอบ {round}: {award} + การ์ด {n} ใบ หล่นลงที่ {tile} แบ่งกันโดยผู้เดิมพันของช่องนั้น",
  "runtime.game.cardsAssigned.one": "การ์ด {n} ใบ มอบให้คุณ ({amount}) → คอลเลกชัน",
  "runtime.game.cardsAssigned.other": "การ์ด {n} ใบ มอบให้คุณ ({amount}) → คอลเลกชัน",
  "runtime.game.cardPoolsLive": "พูลการ์ดพร้อมใช้งาน: การ์ด {cards} ใบ กระจายอยู่ใน {pools} พูลเครื่อง CollectorCrypt",
  "runtime.game.minBid": "เดิมพันขั้นต่ำคือ {amount} เพิ่มเดิมพันแล้วลองอีกครั้ง",
  "runtime.game.resolveFailed": "รอบนี้ไม่สามารถสรุปผลได้ จึงไม่มีการจ่ายเงิน รอบถัดไปจะเริ่มตามปกติ",
  "runtime.game.stakeRefused": "เดิมพันนี้สูงเกินไปสำหรับ {tile} ยังไม่มีการเรียกเก็บเงิน ลดจำนวนแล้วลองอีกครั้ง",
  "runtime.game.shortfallBack":
    "USDC ไม่พอที่จะเดิมพัน {tile} ด้วย {amount} คุณมี {held} เติมเงินเพื่อเล่นต่อ",
  "runtime.game.shortfallNextPack":
    "USDC ไม่พอที่จะเติมแพ็กถัดไปให้ครบบน {tile} ต้องการ {amount} คุณมี {held} เติมเงินเพื่อเล่นต่อ",
  "runtime.game.youBacked": "คุณเดิมพัน {tile} ด้วย {amount}",
  "runtime.game.packCompleted": "คุณเติมแพ็กถัดไปบน {tile} ครบแล้ว (+{amount}) → {tier}",
  "runtime.game.soldToFundBid": "ขาย {cards} ได้ {amount} USDC (ราคารับซื้อคืนของ CC) เพื่อใช้เดิมพัน",
  "runtime.game.backedFunded": "เดิมพัน {tile} ด้วย {amount} (ใช้เงินจากคลังการ์ด)",
  "runtime.game.demoStakesRefunded":
    "ล้างเดิมพันทดลองแล้ว: {amount} ที่คุณคลิกไว้ถูกคืนแล้ว คุณเริ่มต้นที่ $0",
  "runtime.game.demoStakesCleared": "ล้างเดิมพันทดลองแล้ว: คุณเริ่มแต่ละรอบที่ $0 จนกว่าจะเดิมพันช่องใดช่องหนึ่ง",
  "runtime.game.deposited": "ฝาก {amount} USDC เข้ากระเป๋าเงินของคุณแล้ว",
  "runtime.game.referralBonus": "โบนัสแนะนำเพื่อนเข้าบัญชีแล้ว: +{amount} USDC",
  "runtime.game.signedAndSent": "ลงนามและส่ง {amount} USDC บน {cluster} แล้ว · ลายเซ็น {sig}…",
  "runtime.game.signedNoBroadcast":
    "ลงนาม {amount} USDC บน {cluster} แล้ว ({method} ไม่ได้กระจายสัญญาณเข้าเชน) · ลายเซ็น {sig}…",
  "runtime.game.soldCard": "ขาย {card} ได้ {amount} USDC (รับซื้อคืน {pct}%)",
} as Record<string, string>;
