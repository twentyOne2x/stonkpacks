// Thai (ไทย): "board" segment. Same key set as en/board.ts. Owns
// RoyaleBoardV2.tsx, RoyaleBoard.tsx (the legacy v1 board),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx. See royaleI18n.ts for the {token}
// interpolation convention and the no-em-dash / brand-terms-stay-English
// rules. House terms are kept in step with core.ts's glossary comment
// (tile ช่อง · pack แพ็ก · back/bet/bid/stake เดิมพัน · backer(s)
// ผู้เดิมพัน · sell back ขายคืน · pull ดึงได้ · draw การจับสลาก · vault
// คลัง · settle สรุปผล). Pack TIER NAMES (Starter/Elite/Legendary/Grail/
// Mythic) are brand terms and stay in Latin script everywhere, mid-sentence
// included. Thai carries no grammatical plural, so every .one/.other pair
// below intentionally holds the identical string.
//
// STRATEGY CHIP LABELS (board.strategy.*.label): the rail chip sits three
// across a narrow rail, so these five stay short by design (สูงสุด/ต่ำสุด/
// รองสูง/รองต่ำ/ทั้งหมด) - never left in English the way a stray pass might.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "ผู้เล่นและ PnL เงินสด",
  "board.playerScoreboard.title": "ผู้เล่น",
  "board.playerScoreboard.open": "สถิติและปิดเสียง",
  "board.playerScoreboard.pinnedHint": "ปักหมุดแล้ว · กด Esc เพื่อปิด",
  "board.playerScoreboard.holdHint": "กด Tab ค้างเพื่อดู · คลิกเพื่อปักหมุด",
  "board.playerScoreboard.close": "ปิดตารางคะแนนผู้เล่น",
  "board.playerScoreboard.windowAria": "หน้าต่าง PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "ทั้งหมด",
  "board.playerScoreboard.partialHistory": "ประวัติบางส่วน การจัดอันดับใช้ช่วงเงินสดที่ชำระแล้วซึ่งเก็บรักษาไว้",
  "board.playerScoreboard.statsUnavailable": "ประวัติ PnL ไม่พร้อมใช้งานที่นี่ เงินเดิมพันปัจจุบันยังคงใช้งานอยู่",
  "board.playerScoreboard.playerColumn": "ผู้เล่น",
  "board.playerScoreboard.pnlColumn": "PnL เงินสด",
  "board.playerScoreboard.voiceColumn": "แชท",
  "board.playerScoreboard.loading": "กำลังโหลดผู้เล่น…",
  "board.playerScoreboard.empty": "ยังไม่มีใครเดิมพันช่องใดในรอบนี้",
  "board.playerScoreboard.bot": "บอต",
  "board.playerScoreboard.tiles": "ช่อง {tiles}",
  "board.playerScoreboard.stake": "เงินเดิมพัน {amount}",
  "board.playerScoreboard.notAvailable": "ไม่พร้อมใช้งาน",
  "board.playerScoreboard.rounds": "{n} รอบ",
  "board.playerScoreboard.youBadge": "คุณ",
  "board.playerScoreboard.mute": "ซ่อนข้อความ",
  "board.playerScoreboard.unmute": "แสดงข้อความ",
  "board.playerScoreboard.muteAria": "ซ่อนข้อความของ {name} ในแชท",
  "board.playerScoreboard.unmuteAria": "แสดงข้อความของ {name} ในแชท",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "คุณ",
  "board.common.noWin": "ไม่ชนะ",
  "board.common.roundSettled": "รอบสรุปผลแล้ว",
  "board.common.youWon": "คุณชนะ {amount}",
  "board.common.pack": "แพ็ก",
  "board.common.packs": "แพ็ก",
  "board.common.secondsSuffix": "วิ",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "ล็อกแล้ว",
  "board.tile.lockedStampSub": "หมดเวลาเดิมพัน",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: เดิมพัน {bet} ของคุณเกินเงินสด {balance} ที่มี ลดเดิมพันหรือฝากเงินเพิ่ม",
  "board.tile.ariaBack": "เดิมพัน {label} ด้วย {amount}",
  "board.tile.ariaBackShortcutSuffix": ", ปุ่มลัด {shortcut}",
  "board.tile.ariaOddsChance": "โอกาสชนะ {pct}",
  "board.tile.ariaBackers": "ผู้เดิมพัน {count} คน",
  "board.tile.yourPortraitAlt": "รูปโปรไฟล์ของคุณ",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · ยังไม่มีแพ็ก",
  "board.tile.noStake": "ไม่มีเดิมพัน",
  "board.tile.youOwn": "คุณถือ {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "แพ็กจะเปิดเมื่อล็อกรอบ",
  "board.tile.resultOpened": "เปิดแล้ว · การ์ดมูลค่า {amount}",
  "board.tile.resultWinner": "ผู้ชนะ · การ์ดมูลค่า {amount}",
  "board.tile.resultLost": "แพ้การจับสลาก · การ์ดมูลค่า {amount}",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "เปิดแล้ว",
  "board.tile.resultWinnerWord": "ผู้ชนะ",
  "board.tile.resultLostWord": "แพ้การจับสลาก",
  "board.tile.resultShortWon": "ชนะ",
  "board.tile.resultShortLost": "แพ้",
  "board.tile.overBalance": "เกินยอดคงเหลือ",
  "board.tile.overBalanceTitle": "ต้องการ {needed} · มีอยู่ {have} ลดเดิมพันหรือฝากเงินเพิ่ม",
  "board.tile.overCap": "เกินเพดาน {amount} ของคุณ (ตั้งค่า)",
  "board.tile.needHave": "ต้องการ {needed} · มีอยู่ {have}",
  "board.tile.clueExactCardOdds": "การ์ดใบนี้โดยเฉพาะ · โอกาสดึงได้ {pct}",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "ขนาดเดิมพัน",
  "board.stakeControl.packMatchTitle": "การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} หนึ่งแพ็กเต็ม",
  "board.stakeControl.packMatchTag": "เดิมพัน 1 แพ็ก {packName} ต่อคลิก",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural - Thai does the same here.
  "board.stakeControl.packMatchTitleOne": "การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} {n} แพ็กเต็ม",
  "board.stakeControl.packMatchTitleOther": "การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} {n} แพ็กเต็ม",
  "board.stakeControl.packMatchTagOne": "เดิมพัน {n} แพ็ก {packName} ต่อคลิก",
  "board.stakeControl.packMatchTagOther": "เดิมพัน {n} แพ็ก {packName} ต่อคลิก",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} แพ็ก {packName} ต่อคลิก",
  "board.stakeControl.bidPackGroupAria": "เดิมพันแพ็กเต็มบนช่อง",
  "board.stakeControl.bidPackTag": "เดิมพันเป็นแพ็ก",
  "board.stakeControl.bidPackInfoTitle":
    "คลิกเดียววางแพ็กปิดผนึกทั้งแพ็กลงบนช่อง แพ็กจะยังเป็นแพ็กนั้นเสมอ ไม่มีการรวมเป็นแพ็กที่ใหญ่กว่า",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "เลือกแพ็กและจำนวน คลิกเดียวเดิมพันทั้งชุดลงบนช่อง แพ็กที่ใหญ่กว่าดึงได้การ์ดที่มีมูลค่าสูงกว่า ปุ่มตัวเลข 1 ถึง 8 ใช้เลือกช่อง",
  "board.stakeControl.bidPackInfoAria": "การเดิมพันเป็นแพ็กคืออะไร",
  "board.stakeControl.packSelectedTitle": "เลือกแล้ว คลิกอีกครั้งเพื่อกลับไปเดิมพัน {amount}",
  "board.stakeControl.packChipTitle": "การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} หนึ่งแพ็ก ({amount})",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "เลือกแล้ว การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} {n} แพ็ก ({amount})",
  "board.stakeControl.packSelectedCountOther": "เลือกแล้ว การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} {n} แพ็ก ({amount})",
  "board.stakeControl.packChipTitleCountOne": "การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} {n} แพ็ก ({amount})",
  "board.stakeControl.packChipTitleCountOther": "การคลิกช่องแต่ละครั้งเดิมพันแพ็ก {packName} {n} แพ็ก ({amount})",
  "board.stakeControl.overBalanceHeading": "เกินยอดคงเหลือ",
  "board.stakeControl.overBalanceBody": "ต้องการมากกว่าเงินสด {amount} ที่คุณมี",
  "board.stakeControl.bidAmountTag": "เดิมพันเป็นจำนวนเงิน",
  "board.stakeControl.bidAmountInfoTitle":
    "เติมเงินจำนวนเท่าใดก็ได้ลงบนช่อง เงินเศษจะเติบโตเป็นแพ็กที่ใหญ่ขึ้นเมื่อข้ามราคาของแต่ละแพ็ก",
  "board.stakeControl.bidAmountInfoAria": "การเดิมพันเป็นจำนวนเงินคืออะไร",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "เพิ่มเดิมพันของช่อง",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "เดิมพันเป็นจำนวนเงินบนช่อง",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "จำนวนแพ็กที่เดิมพันต่อคลิก",
  "board.stakeControl.packCountDecAria": "ลดจำนวนแพ็กที่เดิมพันต่อคลิก",
  "board.stakeControl.packCountIncAria": "เพิ่มจำนวนแพ็กที่เดิมพันต่อคลิก",
  "board.stakeControl.packCountValueTitleOne": "แพ็ก {n} แพ็กของระดับที่ตั้งไว้ต่อคลิก",
  "board.stakeControl.packCountValueTitleOther": "แพ็ก {n} แพ็กของระดับที่ตั้งไว้ต่อคลิก",
  "board.stakeControl.incrementTitle": "เพิ่มเดิมพันที่เลือกเป็น {amount}",
  "board.stakeControl.customAriaLabel": "จำนวนเดิมพันกำหนดเองเป็น USDC ยืนยันเมื่อกด Enter หรือคลิกที่อื่น",
  "board.stakeControl.customOverBalanceTitle": "เกินเงินสด {amount} ที่คุณมี ฝากเงินเพิ่มหรือลดเดิมพัน",
  "board.stakeControl.customTitle": "พิมพ์จำนวนเงินที่ต้องการ กด Enter หรือคลิกที่อื่นเพื่อยืนยัน",
  "board.stakeControl.resetTitle": "คืนค่าเดิมพันที่เลือกเป็น {amount}",
  "board.stakeControl.reset": "คืนค่า",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "กลยุทธ์เดิมพันอัตโนมัติ พร้อมทำงานเมื่อรอบใกล้ปิด",
  "board.betRail.strategyArmedTip": "พร้อมทำงาน จะยิงใน {seconds} วิ",
  "board.betRail.strategyAriaArmed": "{name} พร้อมทำงาน จะยิงใน {seconds} วินาที",
  "board.betRail.strategyAriaArmedClickDisarm": "{name} พร้อมทำงาน จะยิงใน {seconds} วินาที คลิกเพื่อยกเลิก",
  "board.betRail.strategyAriaClickArm": "{name} คลิกเพื่อตั้งพร้อมทำงาน",
  "board.betRail.moreStrategiesAria": "กลยุทธ์เดิมพันอัตโนมัติเพิ่มเติม",
  "board.betRail.moreStrategiesTitle": "กลยุทธ์เพิ่มเติม",
  "board.betRail.cancelArmedAria": "ยกเลิกเดิมพันอัตโนมัติที่ตั้งไว้",
  "board.betRail.autoBetCancelled": "ยกเลิกเดิมพันอัตโนมัติแล้ว",
  "board.betRail.roundLockedSkip": "รอบล็อกก่อนที่เดิมพันอัตโนมัติจะทำงาน",
  "board.betRail.notEnoughBalanceSkip": "ยอดคงเหลือไม่พอ เดิมพันอัตโนมัติจึงไม่ทำงาน",
  "board.betRail.firedAtClose": "{name} ทำงานเมื่อรอบปิด",
  "board.betRail.firedAtClosePartial": "{name} ทำงานเมื่อรอบปิด: {covered} จาก {total} ช่อง",
  "board.betRail.strategyGuideAria": "คู่มือกลยุทธ์เดิมพันอัตโนมัติ",
  "board.betRail.strategyGuideTitle": "คู่มือกลยุทธ์",
  "board.betRail.autoBetEyebrow": "เดิมพันอัตโนมัติ",
  "board.betRail.firesInSeconds": "จะยิงใน {seconds} วิ",
  "board.betRail.strategiesDialogAria": "กลยุทธ์เดิมพันอัตโนมัติ",
  "board.betRail.closeStrategiesAria": "ปิดกลยุทธ์เดิมพันอัตโนมัติ",
  "board.betRail.strategiesHeading": "กลยุทธ์เดิมพันอัตโนมัติ",
  "board.betRail.strategiesIntro":
    "แตะเลือกหนึ่งกลยุทธ์เพื่อตั้งพร้อมทำงานด้วยเดิมพันที่เลือกไว้ ({amount}) กลยุทธ์จะทำงานก่อนรอบล็อกเพียงเสี้ยววินาที โดยจัดอันดับตามจำนวนเงินที่อยู่บนแต่ละช่องในขณะนั้น ซึ่งเป็นสัญญาณจากฝูงชน",
  "board.betRail.contrarianHeading": "ทางเลือกสวนกระแส",
  "board.betRail.contrarianIntro":
    "เมื่อทุกคนแห่ไปที่ช่องต่ำสุด ช่องนั้นจะแน่นขึ้น ทำให้ช่องต่ำสุดอันดับสองอาจให้ผลตอบแทนดีกว่า ตัวเลือกเหล่านี้จึงแยกออกจากแถบหลักเพื่อให้ดูเรียบง่าย",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "บัญชีและขนาดเดิมพันของคุณ",
  "board.betRail.balance": "ยอดคงเหลือ",
  "board.betRail.activeStakes": "เดิมพันที่ใช้งานอยู่",
  "board.betRail.collection": "คอลเลกชัน",
  "board.betRail.cardCountViewAllSingular": "การ์ด {count} ใบ · ดูทั้งหมด",
  "board.betRail.cardCountViewAllPlural": "การ์ด {count} ใบ · ดูทั้งหมด",
  "board.betRail.moreCount": "+อีก {count}",
  "board.betRail.noCardsYet": "ยังไม่มีการ์ดในคอลเลกชัน ชนะช่องแล้วเก็บการ์ดไว้สิ",
  "board.betRail.lastResult": "ผลรอบล่าสุด",
  "board.betRail.eachClickAdds": "แต่ละคลิกเพิ่ม {amount}",
  "board.betRail.depositToPlay": "ฝากเงินเพื่อเล่น",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "ต้องการ {unit} - คุณมี {balance}",
  "board.betRail.allTilesPartialCover": "{name} - ครอบคลุม {covered} จาก 8 ช่อง ที่ {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "ยอด",
  "board.betRail.dockStakes": "เดิมพัน",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "รอบถัดไปใน {seconds} วินาที",
  "board.core.nextRoundLine": "รอบถัดไปใน {secs}",
  "board.core.playersDecidingAria": "ผู้เล่นอื่นตัดสินใจแล้ว {decided} จาก {total} คน",
  "board.core.playersDecidingLine": "ผู้เล่นกำลังตัดสินใจ {ratio}",
  "board.core.pastRoundResultsAria": "ผลรอบที่ผ่านมา",
  "board.core.pastRounds": "รอบที่ผ่านมา",
  "board.core.winsAmount": "{label} ชนะ {amount}",
  "board.core.youLost": "คุณแพ้!",
  "board.core.didNotStake": "คุณไม่ได้เดิมพันในรอบนี้",
  "board.core.keepCard": "เก็บการ์ด ({amount})",
  "board.core.sellAmount": "ขาย {amount}",
  "board.core.decideHint": "ตัดสินใจตอนนี้หรือระหว่างรอบถัดไป",
  "board.core.roundResultLink": "ผลรอบ #{roundId}",
  "board.core.fullReceiptHint": "ใบเสร็จฉบับเต็ม → ผลลัพธ์รอบ",
  "board.core.splitReceiptHint": "ส่วนแบ่ง · ใบเสร็จ → ผลลัพธ์รอบ",
  "board.core.eyebrowDrawing": "กำลังจับสลากหาผู้ชนะ",
  "board.core.eyebrowPullsIn": "ดึงได้ครบแล้ว",
  "board.core.eyebrowLocked": "ล็อกแล้ว",
  "board.core.headlineDrawing": "สลากใบเดียวตัดสินผล",
  "board.core.headlinePullsIn": "แพ็กเปิดครบทุกใบแล้ว",
  "board.core.headlineRoundLocked": "รอบล็อกแล้ว",
  "board.core.headlinePacksOpening": "กำลังเปิดแพ็ก…",
  "board.core.subDrawing": "การจับสลากแบบถ่วงน้ำหนักที่ตรวจสอบได้",
  "board.core.subPullsIn": "กำลังจะจับสลากหาผู้ชนะต่อไป",
  "board.core.subIntro": "{count} {noun} กำลังเดิมพันอยู่",
  "board.core.subOpening": "{count} {noun} กำลังเปิดอยู่บนกระดาน",
  "board.core.pool": "กองกลาง",
  "board.core.totalPool": "กองกลางทั้งหมด",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "รอบเปิดอยู่",
  "board.core.clockLockedRevealing": "ล็อกแล้ว · กำลังเปิดเผยผล",
  "board.core.clockSettled": "สรุปผลแล้ว",
  "board.core.clockAriaLabel": "{label} {seconds} วินาที",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "การ์ดเกรดทั่วไป ผู้เดิมพันสูงสุดเลือกเก็บหรือขายคืนตามสัดส่วน",
  "board.settlement.dispositionSellBackSplit": "กฎ Grail: ขายคืนโดยอัตโนมัติ แบ่ง USDC ให้ทุกคนบนช่องนั้น",
  "board.settlement.dispositionTopBackerKeeps": "กฎ Grail: ผู้เดิมพันสูงสุดเก็บการ์ดไว้และจ่ายส่วนแบ่งให้คนอื่น",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "เหลือ {seconds} วิ ในการตัดสินใจ",
  "board.settlement.panelAria": "รายละเอียดช่องและการสรุปผล",
  "board.settlement.collapsePanelAria": "ย่อแผง",
  "board.settlement.expandPanelAria": "ขยายแผง",
  "board.settlement.roundResultsLink": "ผลลัพธ์รอบ",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "แผงรอบ",
  "board.settlement.clickTileToBack": "ผลชนะจะแสดงที่นี่ คลิกช่องใดก็ได้เพื่อเดิมพันด้วย {amount}",
  "board.settlement.lastResultLine": "ผลล่าสุด · รอบ #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "คุณชนะ {amount}",
  "board.settlement.view": "ดู",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "ช่องที่แพ้ · เหตุผลที่แพ้",
  "board.settlement.losingTileTitle": "{label} · {amount} บนช่อง",
  "board.settlement.loserWhy":
    "เปิดได้ {cardName} ({amount}) แต่ผลจับสลากตกที่ {winnerLabel} สลาก {pct} ไม่ได้อะไรเลย{suffix}",
  "board.settlement.loserWhySuffixWithStake": " รวมถึง {amount} ของคุณด้วย",
  "board.settlement.loserWhySuffixNone": "",
  "board.settlement.emptyTileNote": "ช่องนี้ว่างเปล่า ไม่มีเดิมพัน ไม่มีสลากจับรางวัล",
  "board.settlement.backToSettlement": "กลับไปหน้าสรุปผล · {winnerLabel} ชนะ",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · การ์ด {index}/{total} · {amount} บนช่อง",
  "board.settlement.pullCaptionSingle": "{label} · {amount} บนช่อง",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "กำลังเปิดแพ็ก",
  "board.settlement.revealOpenedTitle": "{label} เปิดได้ {cardName}",
  "board.settlement.revealOddsLine": "{amount} · อัตราต่อรอง {pct} ที่จะได้กองกลาง {poolAmount} กำลังจับสลากหาผู้ชนะ",
  "board.settlement.revealEmpty": "แพ็กกำลังเปิดอยู่บนกระดาน อีกไม่กี่วินาทีจะจับสลากหาผู้ชนะ",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "ผลล่าสุด · รอบ #{roundId}",
  "board.settlement.tileTakesTable": "{label} กวาดโต๊ะไปด้วย {amount}",
  "board.settlement.whyWon": "จับสลากแบบถ่วงน้ำหนักที่ตรวจสอบได้ {label} ถือ {pct}% ของกองกลางตอนล็อกรอบ",
  "board.settlement.lostNoStakeIn": "คุณแพ้ ไม่มีเดิมพันใน {label}",
  "board.settlement.theWinnerFallback": "ผู้ชนะ",
  "board.settlement.wonNoStake": "{label} ชนะ · คุณไม่มีเดิมพัน",
  "board.settlement.aTileFallback": "ช่องหนึ่ง",
  "board.settlement.lossNoteWithStake": "เดิมพัน {amount} ของคุณอยู่บนช่องอื่น วางเมาส์เหนือช่องเพื่อดูรายละเอียด",
  "board.settlement.lossNoteNone": "คุณไม่ได้เดิมพันช่องใดในรอบนี้",
  "board.settlement.topCardOfRound": "การ์ดเด่นที่สุดของรอบ · {label}",
  "board.settlement.keepCardTo": "เก็บการ์ด ({amount}) → คอลเลกชัน",
  "board.settlement.sellBackFor": "ขายคืนได้ {amount}",
  "board.settlement.continueNextRound": "ไปยังรอบถัดไป",
  "board.settlement.continue": "ดำเนินการต่อ",
  "board.settlement.keepSellHint":
    "เก็บ = การ์ดเข้าคอลเลกชัน · ขาย = รับ {amount} ทันที ({pct}% ของมูลค่าการ์ด ตามราคารับซื้อคืนของ CC สำหรับแพ็กนี้) · {noAction}",
  "board.settlement.noActionKept": "ไม่ทำอะไร = การ์ดจะถูกเก็บไว้ให้คุณ",
  "board.settlement.noActionAutoSell": "ไม่ทำอะไร = ขายคืนอัตโนมัติเมื่อรอบถัดไปจบลง",
  "board.settlement.revealOnlyNote":
    "ในเวอร์ชันทดสอบนี้ ช่องที่แพ้จะเปิดเผยผลให้ดูเท่านั้น การ์ดที่ดึงได้จะกลับเข้าคลัง มีเพียงการ์ดของช่องผู้ชนะเท่านั้นที่จ่ายจริง",
  "board.settlement.payoutSplit": "การแบ่งเงินรางวัล",
  "board.settlement.poolChaseFeedLine": "กองกลาง {pool} · เงินป้อนเชส {feed}",
  "board.settlement.chaseAddSuffix": " · เชส +{amount}",
  "board.settlement.physicalCardArrow": "การ์ดจริง →",
  "board.settlement.grailSecuredSuffix": " (ครอบครอง grail แล้ว)",
  "board.settlement.grailSoldBack": "ขายคืน Grail แล้ว ({amount}) → รวมอยู่ในส่วนแบ่ง USDC ด้านบน",
  "board.settlement.cardAssignmentHead": "การจัดสรรการ์ด",
  "board.settlement.cardLabel": "การ์ดมูลค่า {amount}",
  "board.settlement.soldToVault": "ขายเข้าคลัง · เงินรวมอยู่ในส่วนแบ่ง",
  "board.settlement.decisionTopBackerSuffix": " (ผู้เดิมพันสูงสุด · เลือกเก็บหรือขาย)",
  "board.settlement.offTheirUsdcSuffix": " · หัก {amount} จาก USDC ของเขา",
  "board.settlement.cardsSpreadNote":
    "การ์ดจะกระจายให้ผู้เดิมพันมากที่สุดเท่าที่ทำได้ การ์ดที่จัดสรรให้จะหักราคารับซื้อคืนของ CC (85-93% ตามแพ็ก) จาก USDC ของผู้เดิมพันคนนั้น (มูลค่าเงินเท่ากับการขาย แต่ยังได้ส่วนต่างหากราคาขึ้น) มีเพียงการ์ดที่ไม่มีใครรับไว้เท่านั้นที่จะถูกขายเข้าคลัง",
  "board.settlement.chaseHitLabel": "เชสยิงโดน!",
  "board.settlement.chasePaidLine": "{amount} จ่ายเข้าส่วนแบ่งนี้แล้ว",
  "board.settlement.chaseMissLabel": "เชสไม่ปล่อยของรางวัล",
  "board.settlement.chaseNowLine": "ตอนนี้เชสสะสมอยู่ที่ {amount}",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "ตรวจสอบการจับสลาก",
  "board.settlement.verifyDrawSub": "การจับสลากที่ตรวจสอบได้ · ดูใบเสร็จการจับสลาก",
  "board.settlement.roundIdLabel": "รหัสรอบ",
  "board.settlement.winningDrawLabel": "ผลจับสลากที่ชนะ",
  "board.settlement.drawSeedLabel": "ซีดการจับสลาก",
  "board.settlement.proofIdLabel": "รหัสหลักฐาน",
  "board.settlement.ticketOfCount": "#{index} จาก {count}",
  "board.settlement.verifying": "กำลังตรวจสอบ…",
  "board.settlement.recheckDraw": "ตรวจสอบการจับสลากอีกครั้ง",
  "board.settlement.verifierLink": "ตัวตรวจสอบ ↗",
  "board.settlement.verifiedOk": "✓ ตรวจสอบการจับสลากแล้ว ผู้ชนะรายนี้ตรงกับซีดการจับสลากที่เผยแพร่ไว้",
  "board.settlement.verifiedBad": "✗ การจับสลากนี้ไม่ตรงกับซีดของมัน อย่าเชื่อถือผลนี้",
  "board.settlement.everyRoundNote": "ทุกรอบจะจับสลากหาผู้ชนะหนึ่งรายจากซีดที่เผยแพร่ไว้ ซึ่งคุณตรวจสอบได้เอง",
  "board.settlement.noPacksNote": "ไม่มีใครเดิมพันแพ็กในรอบนี้ จึงไม่มีอะไรให้จับสลาก",
  "board.settlement.settledHoverHint": "สรุปผลแล้ว วางเมาส์เหนือช่องเพื่อดูรายละเอียด",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "เดิมพันใหญ่เกินยอดคงเหลือของคุณ",
  "board.betTooBig.dismissAria": "ปิดข้อความ",
  "board.betTooBig.gotIt": "เข้าใจแล้ว",
  "board.betTooBig.body": "การเดิมพัน {slotLabel} ต้องใช้ {needed} แต่คุณมี {held} คุณขาดอีก {shortfall}",
  "board.betTooBig.deposit": "ฝาก {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "ผู้เล่น เรียงตามยอดเดิมพันรวม",
  "board.wagerLadder.title": "ผู้เล่น",
  "board.wagerLadder.countZero": "ยังไม่มีเดิมพัน",
  "board.wagerLadder.countOther": "{n} คนในรอบนี้ · เรียงตามยอดเดิมพันรวม",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "ย่อแผงผู้เล่น",
  "board.wagerLadder.lastRoundAria": "ดูผลรอบล่าสุด รอบ #{n}",
  "board.wagerLadder.lastRoundLabel": "ดูผลรอบล่าสุด",
  "board.wagerLadder.empty": "ยังไม่มีใครเดิมพันช่องใดในรอบนี้",
  "board.wagerLadder.leaderAria": "ผู้นำ",
  "board.wagerLadder.openProfileTitle": "เปิดโปรไฟล์ของ {name} ในแท็บใหม่",
  "board.wagerLadder.miniGridTotal": "รวม {amount}",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "ช่องที่ {name} เดิมพัน",
  "board.wagerLadder.miniGridTilesAriaYou": "ช่องที่คุณเดิมพัน",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "ขายคลังการ์ดเพื่อใช้เดิมพันครั้งนี้",
  "board.bidFund.eyebrow": "USDC หมด",
  "board.bidFund.titleOne": "ขายการ์ดของคุณเพื่อใช้เดิมพันครั้งนี้หรือไม่?",
  "board.bidFund.titleMany": "ขายการ์ดเหล่านี้เพื่อใช้เดิมพันครั้งนี้หรือไม่?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "การขาย {cards} จะได้เงิน {buyback} ซึ่งพอสำหรับเดิมพัน {amount} บน {tile}",
  "board.bidFund.bodyCardsMany": "การ์ดเหล่านี้",
  "board.bidFund.note":
    "คุณขาดอีก {amount} การ์ดจะขายตามอัตรารับซื้อคืนของ CC ของแพ็กนั้น (85 ถึง 93%) การกระทำนี้ย้อนกลับไม่ได้",
  "board.bidFund.keepCards": "เก็บการ์ดไว้",
  "board.bidFund.sellAndBid": "ขายแล้วเดิมพัน {amount}",
  "board.bidFund.autoSellSwitch": "ขายการ์ดที่ชนะเป็น USDC โดยอัตโนมัติ",
  "board.bidFund.autoSellNoteOn":
    "ทุกการ์ดที่ชนะจะแปลงเป็นเงินสดตามอัตราขายคืนทันทีที่ได้รับ ไม่มีข้อความให้เลือกเก็บหรือขาย การ์ด Grail จะไม่ถูกขายคืนอัตโนมัติเด็ดขาด เปลี่ยนได้ทุกเมื่อในการตั้งค่า",
  "board.bidFund.autoSellNoteOff":
    "เปิดใช้งานแล้วทุกการ์ดที่คุณชนะจะแปลงเป็น USDC ตามอัตราขายคืนทันที โดยไม่มีข้อความถาม การ์ด Grail จะไม่ถูกขายคืนอัตโนมัติเด็ดขาด เปลี่ยนได้ทุกเมื่อในการตั้งค่า",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "เดิมพันด้วยปุ่มตัวเลขหรือไม่?",
  "board.hotkeys.optInBody":
    "การกดปุ่มจะเดิมพันช่องนั้นด้วยเดิมพันปัจจุบันของคุณทันที ยังไม่มีการวางเดิมพันใดๆ เมื่อสักครู่",
  "board.hotkeys.notNow": "ไว้ทีหลัง",
  "board.hotkeys.enableKeys": "เปิดใช้ปุ่มลัด",
  "board.hotkeys.turnOff": "ปิดใช้งาน",
  "board.hotkeys.turnOffTitle": "ปุ่มลัดจะปิดอยู่จนกว่าคุณจะเปิดใช้งานอีกครั้งในการตั้งค่า",
  "board.hotkeys.changeKeys": "เปลี่ยนปุ่ม",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "ช่องที่เปิดอยู่",
  "board.boardV1.onTile": "บนช่อง",
  "board.boardV1.changeAmount": "เปลี่ยน {amount}",
  "board.boardV1.oddsSuffix": "อัตราต่อรอง {pct}",
  "board.boardV1.openedOdds": "เปิดแล้ว · อัตราต่อรอง {pct}",
  "board.boardV1.emptyNeverInDraw": "ว่างเปล่า · ไม่เข้าร่วมการจับสลาก",
  "board.boardV1.winnerYourShare": "ผู้ชนะ · ส่วนแบ่งของคุณจ่ายออกแล้ว",
  "board.boardV1.winnerNoStake": "ผู้ชนะ · คุณไม่มีเดิมพัน",
  "board.boardV1.lostOdds": "แพ้การจับสลาก · อัตราต่อรอง {pct}",
  "board.boardV1.tileClickTitle": "คลิกตรงไหนก็ได้เพื่อเดิมพัน {label} ด้วย {amount}",
  "board.boardV1.youAmount": "คุณ {amount}",
  "board.boardV1.youNone": "คุณ -",
  "board.boardV1.pctOfTile": "{pct} ของช่อง",
  "board.boardV1.noStakeYet": "ยังไม่มีเดิมพัน",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "อันดับหนึ่ง · ",
  "board.boardV1.backerPopStake": "เดิมพัน {amount} · {pct} ของช่อง",
  "board.boardV1.statusWaitingDraw": "กำลังรอการจับสลาก…",
  "board.boardV1.statusWonSplit": "ได้รับ {amount} จากส่วนแบ่ง",
  "board.boardV1.statusOnWinningTile": "อยู่บนช่องที่ชนะ",
  "board.boardV1.statusNoPayout": "ไม่มีเงินจ่ายในรอบนี้",
  "board.boardV1.statusYourStake": "เดิมพันของคุณตอนนี้",
  "board.boardV1.statusBacking": "กำลังเดิมพันช่องนี้",
  "board.boardV1.backerCount.one": "ผู้เดิมพัน {n} คน",
  "board.boardV1.backerCount.other": "ผู้เดิมพัน {n} คน",
  "board.boardV1.noBackersYet": "ยังไม่มีผู้เดิมพัน",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "เดิมพัน {amount}",
  "board.boardV1.backBtnTitle": "เดิมพัน {label} ด้วย {amount} USDC",
  "board.boardV1.evolveTitle": "เดิมพันเพิ่มอีก {amount} พอดีบน {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} บนช่อง",
  "board.boardV1.opensAs": "เปิดเป็น · {summary}",
  "board.boardV1.noPacksYet": "ยังไม่มีแพ็ก เดิมพันเพื่อเติมเงินแพ็กแรก",
  "board.boardV1.whyOpenedDrawing":
    "เปิดได้ {cardName} ({amount}) ด้วยอัตราต่อรอง {pct} กำลังจับสลากหาผู้ชนะ",
  "board.boardV1.whyWon":
    "ชนะการจับสลากแบบถ่วงน้ำหนักด้วยอัตราต่อรอง {pct} เปิดได้ {cardName} ({amount}) กองกลางแบ่งตามสัดส่วนให้ผู้เดิมพันของช่องนี้",
  "board.boardV1.whyLost":
    "แพ้การจับสลากแบบถ่วงน้ำหนัก อัตราต่อรอง {pct} ({amount} จากกองกลาง {poolAmount}) ช่องนี้ยังเปิดได้ {cardName} ({cardAmount}) แต่มีเพียงช่องผู้ชนะเท่านั้นที่จ่ายเงิน",
  "board.boardV1.whyEmpty": "ช่องว่างเปล่า ไม่มีเดิมพัน ไม่มีสลากจับรางวัล",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " เดิมพันของคุณที่นี่: {amount}",
  "board.boardV1.whyNoStakeSuffix": " คุณไม่มีเดิมพันที่นี่",
  "board.boardV1.ifWins": "ถ้าช่องนี้ชนะ คุณจะได้ประมาณ {amount} จากกองกลาง {poolAmount}",
  "board.boardV1.clickToBack": "คลิกเพื่อเดิมพันด้วยขนาดเดิมพันที่เลือกไว้ และเปิดแพ็กแรกเมื่อล็อกรอบ",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "อันดับ {rank}, {name}, เดิมพันรวม {wagered}, กำไรสุทธิ {net}, อัตราชนะ {pct} เปอร์เซ็นต์",
  "board.leaderboard.youTag": "คุณ",
  "board.leaderboard.youRankTag": "คุณ · #{n}",
  "board.leaderboard.statWagered": "เดิมพันรวม",
  "board.leaderboard.statNetPl": "กำไร/ขาดทุนสุทธิ",
  "board.leaderboard.statWinRate": "อัตราชนะ",
  "board.leaderboard.statRounds": "รอบ",
  "board.leaderboard.statPoolShare": "ส่วนแบ่งกองกลาง",
  "board.leaderboard.statFirstSeen": "เห็นครั้งแรก",
  "board.leaderboard.statBiggestPull": "การ์ดที่ดึงได้มูลค่าสูงสุด",
  "board.leaderboard.shareOfToday": "ของเดิมพันวันนี้",
  "board.leaderboard.shareOfAllTime": "ของเดิมพันทั้งหมด",
  "board.leaderboard.noneYet": "ยังไม่มี",
  "board.leaderboard.viewFullProfile": "ดูโปรไฟล์แบบเต็ม",
  "board.leaderboard.live": "สด",
  "board.leaderboard.fullRankings": "อันดับแบบเต็ม",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "ผู้เล่น {n} คน",
  "board.leaderboard.playerCount.other": "ผู้เล่น {n} คน",
  "board.leaderboard.roundCount.one": "{n} รอบ",
  "board.leaderboard.roundCount.other": "{n} รอบ",
  "board.leaderboard.colPlayer": "ผู้เล่น",
  "board.leaderboard.colWagered": "เดิมพันรวม",
  "board.leaderboard.colNet": "กำไร/ขาดทุนสุทธิ",
  "board.leaderboard.colWin": "ชนะ",
  "board.leaderboard.colBiggestPull": "การ์ดที่ดึงได้มูลค่าสูงสุด",
  "board.leaderboard.sortGroupAria": "จัดเรียงอันดับ",
  "board.leaderboard.sortBy": "จัดเรียงตาม {col}",
  "board.leaderboard.podiumNet": "สุทธิ {amount}",
  "board.leaderboard.podiumTopPull": "การ์ดที่ดึงได้ดีที่สุด",
  "board.leaderboard.fullStandings": "อันดับแบบเต็ม · ผู้เดิมพัน {n} คน",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "แพ็ก {packName} {n} แพ็ก ({amount})",
  "board.betRail.stakeUnitPackOther": "แพ็ก {packName} {n} แพ็ก ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "รูปโปรไฟล์ X ของ {handle}",
  "board.connectX.connectedTitle": "เชื่อมต่อผ่าน X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "ช่องแพ็ก {packName} (ไม่มีบนช่องนี้)",
  "board.packChips.fixedChipTitle": "{n} x {packName} ใบละ {amount}",
  "board.packChips.fixedChipTitleTotalSuffix": " - รวม {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "เกิดจากเงินรวมของช่อง ไม่มีใครเดิมพันแพ็กนี้โดยตรง",
  "board.packChips.pooledSome": "{n} จาก {total} เกิดจากเงินรวมของช่อง",
  "board.packChips.bidWhole": "เดิมพันเป็นแพ็กเต็ม",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "ยังมีบนช่องนี้ด้วย: {list}",
  "board.packChips.morePacks.one": "อีก {n} แพ็ก",
  "board.packChips.morePacks.other": "อีก {n} แพ็ก",
  "board.packChips.morePacksWithList.one": "อีก {n} แพ็ก: {list}",
  "board.packChips.morePacksWithList.other": "อีก {n} แพ็ก: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "เดิมพันตรง {bids} · เงินรวม {pool}",
  "board.tile.splitAllBids": "ทั้งหมด {bids} เดิมพันเป็นแพ็กเต็ม",
  "board.tile.splitAllPool": "ทั้งหมด {pool} คือเงินเศษรวมของช่อง",
  "board.tile.splitPoolNote": "แพ็กเส้นประเกิดจากเงินรวม ไม่มีใครเดิมพันแพ็กเหล่านี้โดยตรง",
  "board.tile.evolveLooseTitle": "เงินเศษ {loose} บนช่องนี้จะกลายเป็นแพ็ก {tier} เมื่อถึง {target}",
  "board.tile.evolveNoLooseTitle":
    "ยังไม่มีเงินเศษบนช่องนี้ เงินเศษจะกลายเป็นแพ็ก {tier} เมื่อถึง {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - ครอบคลุม {covered} จาก {total} ช่อง ที่ {unit}",
  "board.betRail.allTilesPlanFull": "เมื่อรอบปิดจะเดิมพันครบทั้ง {total} ช่องที่ {unit} รวมทั้งหมด {spend}",
  "board.betRail.allTilesPlanShort.one":
    "เมื่อรอบปิดจะเดิมพัน {covered} จาก {total} ช่อง ที่ {unit} ยอด {balance} ของคุณครอบคลุม {spend}",
  "board.betRail.allTilesPlanShort.other":
    "เมื่อรอบปิดจะเดิมพัน {covered} จาก {total} ช่อง ที่ {unit} ยอด {balance} ของคุณครอบคลุม {spend}",
  "board.betRail.allTilesPlanNone": "ยอด {balance} ของคุณไม่พอสำหรับเดิมพัน {unit} แม้แต่ช่องเดียว จึงจะไม่มีช่องใดถูกเดิมพัน",
  "board.betRail.allTilesShortHistory.one":
    "เดิมพันอัตโนมัติทุกช่องต้องใช้ {needed} สำหรับ {tiles} ช่อง ที่ {unit} คุณมี {balance} จึงเดิมพันได้ {covered} ช่อง",
  "board.betRail.allTilesShortHistory.other":
    "เดิมพันอัตโนมัติทุกช่องต้องใช้ {needed} สำหรับ {tiles} ช่อง ที่ {unit} คุณมี {balance} จึงเดิมพันได้ {covered} ช่อง",
  "board.betRail.allTilesNoneHistory":
    "เดิมพันอัตโนมัติทุกช่องต้องใช้ {needed} สำหรับ {tiles} ช่อง ที่ {unit} คุณมี {balance} จึงไม่มีช่องใดถูกเดิมพัน",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "เมื่อรอบปิด",
  "board.betRail.planTotal": "รวมทั้งหมด",
  "board.betRail.planMathFull": "{total} ช่อง × {amount}",
  "board.betRail.planMathShort": "{covered} จาก {total} ช่อง × {amount}",
  "board.betRail.planPerTile": "{unit} ต่อช่อง",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all ten locales (a Japanese board rendered "Top | Bottom
  // | All"). The map now reads each of these through a t() getter at property
  // access. Six keys x five strategies; `glyph` is a symbol, not copy.
  //   .label     the narrow rail chip caption - HARD width budget: it sits
  //              three-across in a ~250px rail, so the Thai labels below stay
  //              short (สูงสุด/ต่ำสุด/รองสูง/รองต่ำ/ทั้งหมด), never left English.
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "สูงสุด",
  "board.strategy.highest.name": "ตั้งพร้อม: เดิมพันช่องที่สูงสุดเมื่อรอบปิด",
  "board.strategy.highest.detail":
    "ตั้งเดิมพันของคุณไว้ที่ช่องที่มีเงินมากที่สุด ตัดสินก่อนรอบปิดเพียงเสี้ยววินาที",
  "board.strategy.highest.rowTitle": "ช่องสูงสุด",
  "board.strategy.highest.closeLine": "เดิมพันช่องที่ใหญ่ที่สุดเมื่อรอบปิด",
  "board.strategy.highest.gridLine": "เงินมากที่สุดตอนปิด",

  "board.strategy.lowest.label": "ต่ำสุด",
  "board.strategy.lowest.name": "ตั้งพร้อม: เดิมพันช่องที่ต่ำสุดเมื่อรอบปิด",
  "board.strategy.lowest.detail":
    "ตั้งเดิมพันของคุณไว้ที่ช่องที่มีคนน้อยที่สุด ตัดสินก่อนรอบปิดเพียงเสี้ยววินาที ถ้าทุกคนแห่ไปช่องต่ำสุด ช่องนั้นก็จะไม่ต่ำสุดอีกต่อไปในตอนนั้น",
  "board.strategy.lowest.rowTitle": "ช่องต่ำสุด",
  "board.strategy.lowest.closeLine": "เดิมพันช่องที่เล็กที่สุดเมื่อรอบปิด",
  "board.strategy.lowest.gridLine": "เงินน้อยที่สุดตอนปิด",

  "board.strategy.secondHighest.label": "รองสูง",
  "board.strategy.secondHighest.name": "ตั้งพร้อม: เดิมพันช่องสูงสุดอันดับสองเมื่อรอบปิด",
  "board.strategy.secondHighest.detail":
    "ตั้งเดิมพันของคุณไว้ที่ช่องรองจากผู้นำหนึ่งขั้น ตัดสินก่อนรอบปิดเพียงเสี้ยววินาที",
  "board.strategy.secondHighest.rowTitle": "ช่องสูงสุดอันดับสอง",
  "board.strategy.secondHighest.closeLine": "เดิมพันช่องที่รองจากผู้นำเมื่อรอบปิด",
  "board.strategy.secondHighest.gridLine": "รองจากผู้นำหนึ่งขั้น",

  "board.strategy.secondLowest.label": "รองต่ำ",
  "board.strategy.secondLowest.name": "ตั้งพร้อม: เดิมพันช่องต่ำสุดอันดับสองเมื่อรอบปิด",
  "board.strategy.secondLowest.detail":
    "ทางเลือกตามทฤษฎีฝูงชน: เมื่อทุกคนแห่ไปช่องต่ำสุด ช่องนั้นจะแน่นขึ้น ทำให้ช่องต่ำสุดอันดับสองอาจให้ผลตอบแทนดีกว่า ตั้งพร้อมได้ทันที ตัดสินก่อนรอบปิดเพียงเสี้ยววินาที",
  "board.strategy.secondLowest.rowTitle": "ช่องต่ำสุดอันดับสอง",
  "board.strategy.secondLowest.closeLine": "เดิมพันช่องที่อยู่เหนือช่องต่ำสุดที่แน่นเมื่อรอบปิด",
  "board.strategy.secondLowest.gridLine": "เหนือช่องต่ำสุดหนึ่งขั้น",

  "board.strategy.allTiles.label": "ทั้งหมด",
  "board.strategy.allTiles.name": "ตั้งพร้อม: เดิมพันทุกช่องเมื่อรอบปิด",
  "board.strategy.allTiles.detail":
    "ตั้งเดิมพันของคุณไว้ที่ทุกช่องที่มีสิทธิ์ ตัดสินก่อนรอบปิดเพียงเสี้ยววินาที ยอดรวมที่ใช้ = ขนาดเดิมพันของคุณ x จำนวนช่องในขณะนั้น",
  "board.strategy.allTiles.rowTitle": "ทุกช่อง",
  "board.strategy.allTiles.closeLine": "กระจายเดิมพันของคุณเมื่อรอบปิด",
  "board.strategy.allTiles.gridLine": "เดิมพันของคุณบนทุกช่อง",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "แตะอีกครั้ง: {unit}",
  "board.tile.confirmClickAgain": "คลิกอีกครั้ง: {unit}",
  "board.tile.betOffNotice": "ปิดการเดิมพันไว้ในการตั้งค่า",
  "board.stakeControl.pickPackHint": "เลือกแพ็กเพื่อเดิมพัน",
  "board.stakeControl.emptyStakeLead": "เลือกแพ็ก",
  "board.stakeControl.emptyStakeHint": "แพ็กนั้นคือเดิมพันของคุณ",
  "gear.betInput.label": "การวางเดิมพัน",
  "gear.betInput.hint":
    "วิธีที่การกดช่อง (และปุ่มตัวเลขของมัน) วางเดิมพัน แบบดับเบิลจะให้แตะยืนยันก่อนหนึ่งครั้ง ซึ่งเป็นค่าเริ่มต้นของหน้าจอสัมผัส ปิดคือโหมดดูอย่างเดียว จะไม่มีการวางเดิมพันใดๆ",
  "gear.betInput.optionSingle": "แตะครั้งเดียว",
  "gear.betInput.optionDouble": "แตะสองครั้ง",
  "gear.betInput.optionOff": "ปิด",
  "gear.cardOpen.label": "การเปิดการ์ด",
  "gear.cardOpen.hint":
    "แบบดับเบิลจะให้แตะยืนยันก่อนที่หน้าการ์ดจะเปิดหน้ารายละเอียด ซึ่งเป็นค่าเริ่มต้นของหน้าจอสัมผัส",
} as Record<string, string>;
