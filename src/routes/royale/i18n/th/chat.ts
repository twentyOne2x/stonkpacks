// Thai (ไทย): "chat" segment. Same key set as en/chat.ts.
//
// Source of truth for every user-visible string owned by:
//   apps/web/src/routes/royale/RoyaleChatPanel.tsx
//   apps/web/src/routes/royale/RoyaleChatMessageBody.tsx
//   apps/web/src/routes/royale/royaleChatModel.ts     (ambient chatter pool +
//     the table-event copy composed into chatMessageForEvent's flat text)
//   apps/web/src/routes/royale/royaleChatLinks.ts      (chatPlatformLinkLabel
//     - the anchor text shown for an inline platform link in the chat feed)
//
// House terms kept in step with core.ts's glossary comment: tile ช่อง ·
// The Chase เชส · pot/pool กองกลาง · "You" คุณ.
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings. Switching the
// UI language mid session translates all NEW chat activity but never
// rewrites messages already sitting in the feed/history - same as any other
// historical log. This is expected, not a bug.
//
// "Mythic" in chat.chatter.line17 is the Starter/Elite/Legendary/Grail/
// Mythic PACK TIER brand name and stays English.
export default {
  "chat.rooms.table": "โต๊ะ",
  "chat.rooms.sendTo": "ส่งไปยัง",
  "chat.rooms.joinHint": "เดิมพันบนช่องเพื่อปลดล็อกห้องของช่องนั้น",
  "chat.rooms.messageTargets": "ห้องของข้อความ",
  "chat.composer.sendFailed": "ส่งข้อความไม่สำเร็จ ลองอีกครั้ง",
  "chat.composer.audienceChanged": "ห้องเปลี่ยนแล้ว ข้อความที่ยังไม่ได้ส่งถูกล้างแล้ว",
  "chat.composer.sessionUnavailable": "เซสชันแชทไม่พร้อมใช้งาน รีเฟรชแล้วลองอีกครั้ง",
  "chat.auth.tileLeadBold": "เดิมพันบนช่องเพื่อแชท",
  "chat.auth.tileBody": ". โต๊ะและห้องของช่องจะปลดล็อกหลังจากแพ็กแรกของคุณได้รับการยอมรับ",
  "chat.auth.sessionUnavailableBold": "เซสชันแชทไม่พร้อมใช้งาน",
  "chat.auth.sessionUnavailableBody": ". รีเฟรชเพื่อกู้คืนการส่งที่ปลอดภัย",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "แชทโต๊ะ",
  "chat.header.title": "แชทโต๊ะ",
  "chat.header.fontControlAriaLabel": "ขนาดตัวอักษรแชท",
  "chat.header.fontSmaller": "ลดขนาดตัวอักษรแชท",
  "chat.header.fontLarger": "เพิ่มขนาดตัวอักษรแชท",
  "chat.header.collapseShow": "แสดงแชท",
  "chat.header.collapseHide": "ซ่อนแชท",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "ดึงได้ GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "รอบ #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text} เปิดผลรอบในแท็บใหม่",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "ชนะโดย",
  "chat.event.wonBy": "ชนะโดย {name}",
  "chat.event.foldedIntoPot": "รวมเข้ากองกลาง",
  "chat.event.roundWinsTitle": "{tile} ชนะ {pot}",
  "chat.event.bestPull": "การ์ดเด่นสุด {name} ({value})",
  "chat.event.chaseAward": "เชส +{amount}",
  "chat.event.youWon": "คุณ +{amount}",
  "chat.event.youLost": "คุณแพ้",
  "chat.message.showOriginal": "แปลแล้ว · ดูต้นฉบับ",
  "chat.message.showTranslation": "ดูคำแปล",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "ไปที่ข้อความล่าสุด",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "แสดงได้เฉพาะลิงก์ attn เท่านั้น",
  "chat.composer.rateLimitNotice": "ส่งเร็วไปหน่อย ลองอีกครั้งในอีกสักครู่",
  "chat.composer.placeholder": "พูดอะไรสักอย่าง…",
  "chat.composer.inputAriaLabel": "ข้อความแชท",
  "chat.composer.sendAriaLabel": "ส่งข้อความ",
  "chat.composer.sendLabel": "ส่ง",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "ลงชื่อเข้าใช้เพื่อแชท",
  "chat.auth.body": " ห้องนี้อ่านได้อย่างเดียวจนกว่าคุณจะเชื่อมต่อ (มุมขวาบน)",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "เปิดหน้าการ์ดในแท็บใหม่",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value} เปิดหน้าการ์ดในแท็บพื้นหลัง",
  "chat.messageBody.viewCard": "ดูการ์ด",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "หน้าการ์ด",
  "chat.link.roundResult": "ผลรอบ",
  "chat.link.profile": "โปรไฟล์",
  "chat.link.collection": "คอลเลกชัน",
  "chat.link.theBoard": "กระดาน",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "ช่อง 3 เติมเงินเร็วมาก",
  "chat.chatter.line02": "ใครสไนป์ช่องนำทุกรอบเลยเนี่ย",
  "chat.chatter.line03": "grail ที่ดึงได้รอบที่แล้วโหดมาก",
  "chat.chatter.line04": "ง่ายๆ เลย ทุกคนทุ่มไปที่ช่องนำกันเถอะ",
  "chat.chatter.line05": "ช่อง 7 ที่เพิ่งเปิดดูราคาต่ำไปหน่อยนะ",
  "chat.chatter.line06": "เก็บแพ็กไว้รอห้าวินาทีสุดท้าย",
  "chat.chatter.line07": "มีคนเพิ่ง $250 ลงช่อง 2 นับถือ",
  "chat.chatter.line08": "ส่วนแบ่งกองกลางของช่อง 6 ตอนนี้แพงเกินไปแล้ว",
  "chat.chatter.line09": "อีกแพ็กเดียวช่องนั้นจะขยับขึ้นระดับที่รวยกว่าแล้ว",
  "chat.chatter.line10": "พวกสไนป์มาทำลายอัตราต่อรองของฉันอีกแล้ว",
  "chat.chatter.line11": "ดึงได้แต่การ์ดพื้นฐานตลอด ถึงคิวดึงได้ใหญ่แล้วมั้ง",
  "chat.chatter.line12": "จับตาวาฬตัวนั้นไว้ เขาทำให้ช่องที่เขาลงมักชนะเสมอ",
  "chat.chatter.line13": "ช่อง 1 ยังไม่เคยชนะเลยทั้งเซสชัน ถึงคิวแล้วมั้ง",
  "chat.chatter.line14": "ขายการ์ดที่ดึงได้ล่าสุดทันที อัตรารับซื้อคืนก็ยุติธรรมดี",
  "chat.chatter.line15": "กำลังจะสวนสไนป์ จำไว้เลย",
  "chat.chatter.line16": "ช่องนำเปลี่ยนไปสองครั้งในสิบวินาทีที่ผ่านมา",
  "chat.chatter.line17": "มีใครไล่ตามบันได Mythic คืนนี้อีกไหม",
  "chat.chatter.line18": "เก็บการ์ดไว้ ลายมันสวยเกินจะขาย",
  "chat.chatter.line19": "แพ็กที่มาช้าไม่เคยรีเซ็ตนาฬิกาเลย ชอบตรงนี้",
  "chat.chatter.line20": "กองกลางช่อง 8 เพิ่งเพิ่มเป็นสองเท่า มีอะไรกำลังจะเกิดขึ้นแน่",
  "chat.chatter.line21": "แพ็กเล็กช่วงต้น แพ็กใหญ่ช่วงท้าย วิธีเล่นที่ถูกต้องเดียว",
  "chat.chatter.line22": "นาฬิกาเก็บ/ขายนั่นหลอกฉันได้ทุกที",
  "chat.chatter.line23": "ช่องรองตอนนี้ดูคุ้มกว่าช่องนำอีก",
  "chat.chatter.line24": "สไนป์ช่อง 5 สวยมาก แม่นยำสุดๆ",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "แผงเสริมสำหรับโต๊ะ",
  "chat.surface.chat": "แชท",
  "chat.surface.activity": "กิจกรรมของฉัน",
  "chat.activity.ariaLabel": "กิจกรรมส่วนตัวของฉัน",
  "chat.activity.filtersAria": "กรองกิจกรรม",
  "chat.activity.filter.all": "ทั้งหมด",
  "chat.activity.filter.packs": "แพ็ก",
  "chat.activity.filter.bids": "เดิมพัน",
  "chat.activity.filter.rewards": "รางวัล",
  "chat.activity.filter.feats": "ความสำเร็จ",
  "chat.activity.filter.clan": "แคลน",
  "chat.activity.today": "วันนี้",
  "chat.activity.yesterday": "เมื่อวาน",
  "chat.activity.status.pending": "รอดำเนินการ",
  "chat.activity.status.finalized": "ยืนยันแล้ว",
  "chat.activity.status.reversed": "ย้อนกลับแล้ว",
  "chat.activity.finalizedAria": "ใบเสร็จที่ยืนยันแล้ว",
  "chat.activity.signInTitle": "เข้าสู่ระบบเพื่อดูประวัติของคุณ",
  "chat.activity.signInBody": "ใบเสร็จส่วนตัวสำหรับแพ็ก เดิมพัน รางวัล ความสำเร็จ และแคลนของคุณจะแสดงที่นี่",
  "chat.activity.loading": "กำลังโหลดใบเสร็จของคุณ",
  "chat.activity.loadOlder": "โหลดรายการก่อนหน้า",
  "chat.activity.points": "{points} แต้ม",
  "chat.activity.event.packBid.title": "เล่นแพ็กแล้ว",
  "chat.activity.event.packBid.detail": "ยืนยันการลงช่อง {tile} แล้ว",
  "chat.activity.event.roundWon.title": "ช่องที่ชนะ",
  "chat.activity.event.roundWon.detail": "ช่อง {tile} ชนะกระดานนี้",
  "chat.activity.event.roundLost.title": "รอบสิ้นสุดแล้ว",
  "chat.activity.event.roundLost.detail": "ช่อง {tile} ไม่ชนะในกระดานนี้",
  "chat.activity.event.roundRefunded.title": "คืนเงินแพ็กแล้ว",
  "chat.activity.event.roundRefunded.detail": "คืนเงินเดิมพันของช่อง {tile} แล้ว",
  "chat.activity.event.chaseWon.title": "เชสเข้าเป้า",
  "chat.activity.event.chaseWon.detail": "เชสของกระดานจ่ายรางวัลแล้ว",
  "chat.activity.event.achievementDetail": "ปลดล็อกจากการเล่นของคุณ",
  "chat.activity.event.clanAchievementDetail": "ปลดล็อกร่วมกับแคลนของคุณ",
  "chat.activity.unavailableTitle": "กิจกรรมไม่พร้อมใช้งาน",
  "chat.activity.unavailableBody": "ไม่สามารถโหลดใบเสร็จของคุณได้ โปรดลองฟีดส่วนตัวอีกครั้งในอีกสักครู่",
  "chat.activity.retry": "ลองอีกครั้ง",
  "chat.activity.emptyTitle": "ยังไม่มีอะไรที่นี่",
  "chat.activity.emptyBody": "การดำเนินการเกี่ยวกับแพ็ก เดิมพัน รางวัล ความสำเร็จ และแคลนที่ยืนยันแล้วจะแสดงที่นี่",
  "chat.unlock.eyebrow": "ปลดล็อกความสำเร็จแล้ว",
  "chat.unlock.clanEyebrow": "ปลดล็อกความสำเร็จของแคลนแล้ว",
  "chat.unlock.dismiss": "ปิดการแจ้งเตือนความสำเร็จ",
} as Record<string, string>;
