// Thai (ไทย): "cinema" segment. Same key set as en/cinema.ts.
// Owns: RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx, revealCinemaTypes.ts
// (the copy: fields of REVEAL_CINEMA_SEQUENCE), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx. See royaleI18n.ts's file header for the key-naming
// and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// House terms kept in step with core.ts's glossary comment: tile ช่อง ·
// pack แพ็ก · The Chase เชส · backer(s) ผู้เดิมพัน · sell back ขายคืน ·
// pull ดึงได้ · the draw การจับสลาก · vault คลัง · Replay ดูซ้ำ · "You" คุณ.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) are brand terms and
// stay in Latin script, mid-sentence included, including inside the rarity-
// band and pnlShare tier labels below. Thai carries no grammatical plural,
// so every .one/.other pair below intentionally holds the identical string.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "กำลังเปิดแพ็ก",
  "cinema.phaseAnnounce.packsOpening.subtitle": "กำลังเปิดเผยการ์ด · ปรับมูลค่าทุกช่องใหม่",
  "cinema.phaseAnnounce.winnerDraw.title": "กำลังจับสลากหาผู้ชนะ",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "ถ่วงน้ำหนักตามยอดรวมของช่อง",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "ล็อกแล้ว: กระดานคือการแสดง",
  "cinema.phase.packsEnter.copy": "แพ็กมาถึงกระดานแล้ว",
  "cinema.phase.packsOpening.copy": "แพ็กกำลังฉีกเปิด: การ์ดเปิดเผย ช่องปรับมูลค่าใหม่",
  "cinema.phase.cardsByTile.copy": "เปิดเผยการ์ดแล้ว: ทุกช่อง เรียงตามมูลค่าก่อน",
  "cinema.phase.valueScan.copy": "กำลังอ่านกระดาน: การ์ดที่ดึงได้มูลค่าสูงสุดกำลังเรืองแสง",
  "cinema.phase.winnerDraw.copy": "กำลังจับสลากหาผู้ชนะ: ถ่วงน้ำหนักตามยอดรวมของช่อง",
  "cinema.phase.winnerLock.copy": "ล็อกผู้ชนะแล้ว",
  "cinema.phase.loserValueConverge.copy": "การ์ดที่ดึงได้จากช่องที่แพ้กลับเข้าคลัง มูลค่ารวมไปให้ผู้ชนะ",
  "cinema.phase.winnerPotCountUp.copy": "กองกลางตกเป็นของช่องผู้ชนะ",
  "cinema.phase.chaseFeed.copy": "เชสหักส่วนแบ่งของมัน",
  "cinema.phase.chasePayout.copy": "เชสปล่อยของรางวัล: ช่องหนึ่งได้รางวัลใหญ่",
  "cinema.phase.allocation.copy": "คุณได้รับ",
  "cinema.phase.keepSellDecision.copy": "เก็บหรือขาย: การตัดสินใจต่อเนื่องไปถึงรอบถัดไป",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "เข้าคลังแล้ว",
  "cinema.vaultLock.plateSub": "เชส",
  "cinema.vaultLock.status": "ล็อกแล้ว",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "ไม่มีการ์ดเปิดในรอบนี้",
  "cinema.cardWall.won": "ชนะ",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "เด่นที่สุด",
  "cinema.cardWall.rarity.common": "ธรรมดา",
  "cinema.cardWall.rarity.rare": "หายาก",
  "cinema.cardWall.rarity.epic": "เอพิก",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "เก็บไว้",
  "cinema.cardWall.status.sold": "ขายแล้ว",
  "cinema.cardWall.status.toTheChase": "เข้าสู่เชส",
  "cinema.cardWall.status.rake": "ค่าธรรมเนียม",
  "cinema.cardWall.owner.vault": "คลัง",
  "cinema.cardWall.owner.you": "คุณ",
  "cinema.cardWall.cardAriaLabel": "{name}, {value} กด Enter เพื่อดูรายละเอียดการ์ด",
  "cinema.cardWall.sectionAriaLabel": "การ์ดทั้งหมดที่เปิดในรอบนี้ เรียงจากมูลค่าสูงสุด",
  "cinema.cardWall.eyebrow": "การ์ดทั้งหมดที่เปิดแล้ว",
  "cinema.cardWall.rake.title": "ค่าธรรมเนียมโปรโตคอล",
  "cinema.cardWall.rake.metaOne": "การ์ด 1 ใบเป็นค่าธรรมเนียม",
  "cinema.cardWall.rake.metaMany": "การ์ด {n} ใบเป็นค่าธรรมเนียม",
  "cinema.cardWall.rake.hide": "ซ่อน",
  "cinema.cardWall.rake.show": "แสดง",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "ปิดการเปิดเผยผล",
  "cinema.close.title": "ปิดการเปิดเผยผล (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "ผู้ชนะที่บันทึกไว้",
  "cinema.provCaption.round": "รอบ",
  "cinema.provCaption.verifyAt": "ตรวจสอบได้ที่",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "รอบ #{n}",
  "cinema.bar.vrfBadge": "ขับเคลื่อนด้วย CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "เชส +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "กำลังเปิด",
  "cinema.phaseShort.drawing": "กำลังจับสลาก",
  "cinema.phaseShort.results": "ผลลัพธ์",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "ผู้ชนะ",
  "cinema.core.tileWins": "{tile} ชนะ",
  "cinema.core.inCards": " เป็นการ์ด",
  "cinema.core.poolSuffix": " กองกลาง",
  "cinema.core.totalCardValue": "มูลค่าการ์ดรวม",
  "cinema.core.totalPool": "กองกลางทั้งหมด",
  "cinema.core.tilesLive": "{n} ช่องกำลังเล่นอยู่",
  "cinema.core.packsSuffix": " · {n} แพ็ก",
  "cinema.core.yourStake": "เดิมพันของคุณ",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "ไม่มีเดิมพัน",
  "cinema.heatOnly.note": "USDC เท่านั้น · ไม่มีแพ็กในรอบนี้",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} แพ็ก",
  "cinema.tile.packCountMany": "{n} แพ็ก",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "แพ้การจับสลาก การ์ดตกเป็นของผู้เดิมพันช่องที่ชนะ",
  "cinema.vaultNote.heatOnlyNoPack": "ไม่มีแพ็กในรอบนี้ · เงินเศษยกไปกองกลาง",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "จาก {pack}",
  "cinema.grail.fromPackRate": "จาก {pack} · โอกาสดึงได้ {pct}",
  "cinema.grail.pullTitle": "ดึงได้ GRAIL",
  "cinema.grail.fromPackVisible": "จากแพ็ก {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, จากแพ็ก {pack}",
  "cinema.grail.multiTitle": "Grail {n} ใบในรอบนี้",
  "cinema.grail.galleryTileFromPack": "{tile} · จาก {pack}",
  "cinema.grail.galleryMore": "+อีก {n}",
  "cinema.card.openInNewTab": "เปิดหน้าการ์ด {name} ในแท็บใหม่",
  "cinema.card.ariaLabelWithOdds": "{name}, {value} จากแพ็ก {pack} โอกาสดึงได้ {pct} กด Enter เพื่อดูรายละเอียดการ์ด",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value} {bandLine} กด Enter เพื่อดูรายละเอียดการ์ด",
  "cinema.card.bandChancePct": "โอกาส {pct}% จากแพ็ก {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} ชนะ",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "เปิดหน้าต่างขาย",
  "cinema.sellWindow.secToDecide": "วินาทีในการตัดสินใจ",
  "cinema.sellWindow.noActionAutoSells": "ไม่ทำอะไร = ขายคืนอัตโนมัติเมื่อล็อกรอบถัดไป",
  "cinema.sellWindow.noActionKeeps": "ไม่ทำอะไร = เก็บการ์ดไว้ · ขายได้ทุกเมื่อจากหน้าการ์ดของคุณ",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "มูลค่าการ์ด",
  "cinema.tileValue.onTileLabel": "บนช่อง",
  "cinema.tileValue.oddsWord": "อัตราต่อรอง",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "ช่องที่โดนยิง",
  "cinema.chase.fires": "เชสยิงแล้ว",
  "cinema.chase.jackpotReleasingTo": "แจ็คพอตกำลังปล่อยไปที่ {tile}",
  "cinema.chase.winningTileFallback": "ช่องผู้ชนะ",
  "cinema.chase.feedThisRound": "เชส +{value} ในรอบนี้",
  "cinema.chase.cardToChase": "การ์ดเข้าสู่เชส",
  "cinema.chase.bestLosingCardNamed": "การ์ดที่ดีที่สุดจากช่องที่แพ้ · {name} · ล็อกไว้ {value}",
  "cinema.chase.bestLosingCardVault": "การ์ดที่ดีที่สุดจากช่องที่แพ้ถูกล็อกไว้ในคลัง",
  "cinema.chase.jackpotGrows": "เชส +{value} · แจ็คพอตเพิ่มขึ้น",
  "cinema.chase.hitsAriaLabel": "เชสยิงโดน {tile} เป็นมูลค่า {value}",
  "cinema.chase.alsoHolds": "เชสยังถือ",
  "cinema.chase.alsoHoldsAriaOne": "เชสยังถือการ์ด 1 ใบ มูลค่า {value}",
  "cinema.chase.alsoHoldsAriaMany": "เชสยังถือการ์ด {n} ใบ มูลค่า {value}",
  "cinema.chase.more": "เพิ่มเติม",
  "cinema.chase.cardsTotalOne": "การ์ด 1 ใบ · มูลค่า {value} ในการ์ดเกรด",
  "cinema.chase.cardsTotalMany": "การ์ด {n} ใบ · มูลค่า {value} ในการ์ดเกรด",
  "cinema.chase.hitsKicker": "เชสยิงโดน",
  "cinema.chase.winsBig": "ได้รางวัลใหญ่",
  "cinema.chase.yourCut": "ส่วนแบ่งของคุณ",
  "cinema.chase.otherBackerOne": "ผู้เดิมพันอื่นอีก {n} คน · แบ่งตามสัดส่วน",
  "cinema.chase.otherBackerMany": "ผู้เดิมพันอื่นอีก {n} คน · แบ่งตามสัดส่วน",
  "cinema.chase.backerOne": "ผู้เดิมพัน {n} คน · แบ่งตามสัดส่วน",
  "cinema.chase.backerMany": "ผู้เดิมพัน {n} คน · แบ่งตามสัดส่วน",
  "cinema.chase.alsoWonRound": "ชนะรอบนี้ด้วย",
  "cinema.chase.backedTileNote": "ช่องที่มีเดิมพัน · ไม่ใช่ผู้ชนะรอบนี้",
  "cinema.chase.heldCardsSpillOne": "การ์ดที่ถือไว้ 1 ใบหลุดออกมา",
  "cinema.chase.heldCardsSpillMany": "การ์ดที่ถือไว้ {n} ใบหลุดออกมา",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "กองกลาง",
  "cinema.you.get": "คุณได้รับ",
  "cinema.you.lost": "คุณแพ้!",
  "cinema.you.noStakeThisRound": "คุณไม่ได้เดิมพันในรอบนี้",
  "cinema.you.mathLine": "ส่วนแบ่งกองกลาง {usdc} USDC + {cards} จากการ์ด = {total} ให้คุณ",
  "cinema.you.sold": "ขายแล้ว {value}",
  "cinema.you.kept": "เก็บไว้ · อยู่ในคอลเลกชันของคุณ",
  "cinema.you.keepButton": "เก็บ",
  "cinema.you.sellButton": "ขาย {value}",
  "cinema.you.yours": "ของคุณ",
  "cinema.you.noCardThisRound": "ไม่มีการ์ดในรอบนี้",
  "cinema.you.usdcPaidInstantly": "USDC · เข้ายอดคงเหลือของคุณแล้ว",
  "cinema.you.keepAll": "เก็บทั้งหมด",
  "cinema.you.sellAllButton": "ขายทั้งหมด {value}",
  "cinema.you.sellAllConfirm": "แน่ใจนะ? ขายทั้งหมด {value}",
  "cinema.you.noOtherBackers": "ไม่มีผู้เดิมพันคนอื่นในรอบนี้",
  "cinema.you.oneOtherSplits": "อีก 1 คนแบ่ง {value}",
  "cinema.you.othersSplit": "อีก {n} คนแบ่ง {value}",
  "cinema.you.oneWinningBackerTakes": "ผู้เดิมพันฝั่งชนะ 1 คนรับ {value}",
  "cinema.you.winningBackersSplit": "ผู้เดิมพันฝั่งชนะ {n} คนแบ่ง {value}",
  "cinema.you.viewFullResults": "ดูผลลัพธ์แบบเต็ม",
  "cinema.you.howItWorks": "วิธีเล่น",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "การ์ดเกรดทั่วไป ผู้เดิมพันสูงสุดของช่องเลือกเก็บหรือขายคืนตามสัดส่วน",
  "cinema.theatre.disposition.sellBackSplit":
    "กฎ Grail: ไม่มีผู้เดิมพันคนใดจ่ายส่วนแบ่งให้คนอื่นตามสัดส่วนได้ครบ Grail จึงถูกขายคืนโดยอัตโนมัติ และแบ่ง USDC ให้ทุกคนบนช่องนั้น",
  "cinema.theatre.disposition.topBackerKeeps":
    "กฎ Grail: ส่วนแบ่งตามสัดส่วนของผู้เดิมพันสูงสุดครอบคลุมการซื้อคืนจากคนอื่นได้พอดี จึงเก็บ Grail ไว้และจ่ายส่วนแบ่งการ์ดให้ทุกคนเป็น USDC",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "ผู้เล่นอื่นตัดสินใจแล้ว {decided} จาก {total} คน รอบถัดไปใน {seconds} วินาที",
  "cinema.theatre.playersDeciding": "ผู้เล่นกำลังตัดสินใจ {count}",
  "cinema.theatre.nextRoundIn": "รอบถัดไปใน {seconds}",
  "cinema.theatre.secondsShort": "{n} วิ",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "กำลังสรุปผลรอบ",
  "cinema.theatre.stageLockingBoard": "กำลังล็อกกระดาน…",
  "cinema.theatre.stagePacksOpening": "กำลังเปิดแพ็กบนกระดาน",
  "cinema.theatre.stageWinnerDrawn": "จับสลากหาผู้ชนะแล้ว",
  "cinema.theatre.headlineNoEntries": "ไม่มีผู้เข้าร่วมในรอบนี้",
  "cinema.theatre.headlineRevealing": "กำลังเปิดเผยแพ็ก…",
  "cinema.theatre.headlineTileWins": "{tile} ชนะ {value}",
  "cinema.theatre.tileFallback": "ช่อง",
  "cinema.theatre.youWon": "คุณชนะ {value}",
  "cinema.theatre.youLostNoStake": "คุณแพ้ ไม่มีเดิมพันใน {tile}",
  "cinema.theatre.winnerFallback": "ผู้ชนะ",
  "cinema.theatre.tileWonNoStake": "{tile} ชนะ · คุณไม่มีเดิมพัน",
  "cinema.theatre.aTileFallback": "ช่องหนึ่ง",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "เล่น {tiles} ช่อง · กองกลาง {pool}",
  "cinema.theatre.stripMetaCards": " · การ์ดมูลค่า {value}",
  "cinema.theatre.stripMetaCash": " + เงินสด {value}",
  "cinema.theatre.drawingWinner": "กำลังจับสลากหาผู้ชนะ",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "ผลรอบ",
  "cinema.theatre.roundSettled": "รอบสรุปผลแล้ว",
  "cinema.theatre.winner": "ผู้ชนะ",
  "cinema.theatre.seedNote":
    "รวมเดิมพันเริ่มต้น {value} ของคุณบน {tile} ล้างเดิมพันเริ่มต้นได้ในแผงเดิมพันเพื่อเล่นจาก $0",
  "cinema.theatre.lossNoteStaked":
    "คุณเดิมพัน {value} บนช่องอื่นในรอบนี้ วางเมาส์เหนือช่องใดก็ได้หลังแผงนี้เพื่อดูว่ามันเปิดอะไรและทำไมถึงแพ้",
  "cinema.theatre.lossNoteNoStake":
    "คุณไม่ได้เดิมพันช่องใดในรอบนี้ จึงไม่มีเงินจ่ายออก เลือกขนาดเดิมพันแล้วคลิกช่องในรอบถัดไป",
  "cinema.theatre.bonusGrails.one":
    "มี Grail เพิ่มอีก {n} ใบในรอบนี้ ตกเป็นของรางวัลพิเศษให้ผู้เดิมพันช่องผู้ชนะ (เก็บไว้ หรือขายคืนตามสัดส่วนถ้ามูลค่าสูงเกินจะถือ) ไม่มีทางตกเป็นค่าธรรมเนียม ATTN หรือเข้าเชสเด็ดขาด",
  "cinema.theatre.bonusGrails.other":
    "มี Grail เพิ่มอีก {n} ใบในรอบนี้ ตกเป็นของรางวัลพิเศษให้ผู้เดิมพันช่องผู้ชนะ (เก็บไว้ หรือขายคืนตามสัดส่วนถ้ามูลค่าสูงเกินจะถือ) ไม่มีทางตกเป็นค่าธรรมเนียม ATTN หรือเข้าเชสเด็ดขาด",
  "cinema.theatre.noPacksBacked": "ไม่มีใครเดิมพันแพ็กในรอบนี้ รอบถัดไปจะเริ่มอัตโนมัติ",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "การแบ่งเงินรางวัล · {tile}",
  "cinema.theatre.payoutSplitMeta": "กองกลาง {pool} · เงินป้อนเชส {feed}",
  "cinema.theatre.payoutSplitChase": " · เชส +{value}",
  "cinema.theatre.you": "คุณ",
  "cinema.theatre.physicalCard": "การ์ดจริง →",
  "cinema.theatre.grailSecured": " (ครอบครอง grail แล้ว)",
  "cinema.theatre.grailSoldBack": "ขายคืน Grail แล้ว ({value}) → รวมอยู่ในส่วนแบ่ง USDC ด้านบน",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "เชสยิงโดน!",
  "cinema.theatre.chaseHitBody":
    "เชสยิงจากการจับสลากพิเศษของมันเอง {value} จากเชสจึงจ่ายเข้าชัยชนะครั้งนี้ รวมอยู่ในส่วนแบ่งด้านบนแล้ว เชสรอบใหม่เริ่มสะสมใหม่อีกครั้ง",
  "cinema.theatre.chaseMissLead": "เชสไม่ปล่อยของรางวัลในรอบนี้",
  "cinema.theatre.chaseMissBody": "เชสยิงจากการจับสลากพิเศษของมันเอง จึงยังคงสะสมต่อไป ตอนนี้อยู่ที่ {value}",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "ตรวจสอบการจับสลาก",
  "cinema.theatre.vrfSummaryNote": "การจับสลากที่ตรวจสอบได้ · ดูใบเสร็จการจับสลาก",
  "cinema.theatre.vrfRoundId": "รหัสรอบ",
  "cinema.theatre.vrfWinningDraw": "ผลจับสลากที่ชนะ",
  "cinema.theatre.vrfDrawSeed": "ซีดการจับสลาก",
  "cinema.theatre.vrfProofId": "รหัสหลักฐาน",
  "cinema.theatre.vrfTicket": "#{n} จาก {total}",
  "cinema.theatre.vrfVerifying": "กำลังตรวจสอบ…",
  "cinema.theatre.vrfRecheck": "ตรวจสอบการจับสลากอีกครั้ง",
  "cinema.theatre.vrfVerifierLink": "ตัวตรวจสอบ ↗",
  "cinema.theatre.vrfVerified": "✓ ตรวจสอบการจับสลากแล้ว ผู้ชนะรายนี้ตรงกับซีดการจับสลากที่เผยแพร่ไว้",
  "cinema.theatre.vrfFailed": "✗ การจับสลากนี้ไม่ตรงกับซีดของมัน อย่าเชื่อถือผลนี้",
  "cinema.theatre.vrfNote": "ทุกรอบจะจับสลากหาผู้ชนะหนึ่งรายจากซีดที่เผยแพร่ไว้ ซึ่งคุณตรวจสอบได้เอง",
  "cinema.theatre.vrfNoDraw": "ไม่มีใครเดิมพันแพ็กในรอบนี้ จึงไม่มีอะไรให้จับสลาก",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "เก็บการ์ด → คอลเลกชัน",
  "cinema.theatre.sellBackFor": "ขายคืนได้ {value}",
  "cinema.theatre.continueNextRound": "ไปยังรอบถัดไป",
  "cinema.theatre.continue": "ดำเนินการต่อ",
  "cinema.theatre.settleHint":
    "เก็บ = เพิ่มการ์ดเข้าคอลเลกชันของคุณ ขายคืน = รับ {sell} ({pct}% ของ {value} ตามราคารับซื้อคืนของ CC สำหรับแพ็กนี้) เข้ายอดคงเหลือ ไม่ทำอะไร = ขายคืนโดยอัตโนมัติเมื่อรอบปิด",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "ล็อกแล้ว",
  "cinema.prizeModal.stageReveal": "เปิดเผยผล",
  "cinema.prizeModal.betterLuck": "ขอให้โชคดีในรอบถัดไป",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "กำลังเตรียมการ์ดของคุณ…",
  "cinema.share.renderingPng": "กำลังสร้างภาพ PNG…",
  "cinema.share.renderFailed": "สร้างภาพไม่สำเร็จ ลองอีกครั้ง",
  "cinema.share.captionOpened": "เปิดข้อความบน X แล้ว แนบไฟล์ PNG ที่บันทึกไว้",
  "cinema.share.close": "ปิด",
  "cinema.share.downloadPng": "ดาวน์โหลด PNG",
  "cinema.share.shareToX": "แชร์ไปยัง X",
  "cinema.share.done": "เสร็จสิ้น",
  "cinema.share.provablyFair": "การประลองแพ็ก · ทุกการจับสลากตรวจสอบได้",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "ตัวคูณ {value}",
  "cinema.winShare.multiplier": "ตัวคูณ",
  "cinema.winShare.inCards": "เป็นการ์ด",
  "cinema.winShare.cashWon": "เงินสดที่ชนะ",
  "cinema.winShare.tileHit": "· ช่องที่โดน",
  "cinema.winShare.entry": "เงินเข้าร่วม",
  "cinema.winShare.winOdds": "อัตราต่อรองชนะ",
  "cinema.winShare.totalValue": "มูลค่ารวม",
  "cinema.winShare.certLine": "ขับเคลื่อนโดย SLABZ · ใบรับรอง #{n}",
  "cinema.winShare.roundLine": "รอบ #{n} · การจับสลาก VRF ที่ตรวจสอบได้",
  "cinema.winShare.takeHomeAriaLabel": "ยอดรับกลับบ้าน {value}",
  "cinema.winShare.totalTakeHome": "ยอดรับกลับบ้านรวม",
  "cinema.winShare.breakdown.one": "เงินสด {cash} + การ์ด {n} ใบ ({value})",
  "cinema.winShare.breakdown.other": "เงินสด {cash} + การ์ด {n} ใบ ({value})",
  "cinema.winShare.deposited": "ฝากแล้ว",
  "cinema.winShare.wonBy": "ชนะโดย {name}",
  "cinema.winShare.theGrail": "GRAIL",
  "cinema.winShare.topPull": "การ์ดที่ดึงได้ดีที่สุด",
  "cinema.winShare.topCardOfRound": "การ์ดเด่นที่สุดของรอบ",
  "cinema.winShare.poweredBySlabz": "ขับเคลื่อนโดย SLABZ",
  "cinema.winShare.cert": "ใบรับรอง #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "แชร์ชัยชนะของคุณ",
  "cinema.winShare.pngSaved": "บันทึก PNG แล้ว แนบไฟล์เข้าโพสต์ของคุณเอง X ไม่สามารถแนบให้อัตโนมัติ",
  "cinema.winShare.renderingHdVideo": "กำลังสร้างวิดีโอ HD ของรอบนี้…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "กำลังสร้างวิดีโอ HD ของรอบนี้ - {seconds} วิ{pct}",
  "cinema.winShare.hdVideoSaved": "บันทึกวิดีโอ HD แล้ว แนบเข้าโพสต์ของคุณแทนภาพ",
  "cinema.winShare.hdRenderFailed": "สร้างวิดีโอ HD ไม่สำเร็จ ลองอีกครั้ง",
  "cinema.winShare.hdVideoButton": "วิดีโอ HD ของรอบนี้",
  "cinema.winShare.hdVideoTitle": "สร้างวิดีโอรอบนี้เป็นไฟล์ HD mp4 (บริการเรนเดอร์ในเครื่อง) และบันทึกไว้",
  "cinema.winShare.tweetTriggerLabel": "แชร์ชัยชนะบน X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "ผลตอบแทน {value} จากเดิมพัน",
  "cinema.pnlShare.onStake": "จากเดิมพัน",
  "cinema.pnlShare.certifiedRun": "สถิติรับรอง · กำไร/ขาดทุนสุทธิ",
  "cinema.pnlShare.heroSub.one": "ตลอด {n} รอบ · อัตราชนะ {pct}%",
  "cinema.pnlShare.heroSub.other": "ตลอด {n} รอบ · อัตราชนะ {pct}%",
  "cinema.pnlShare.collection": "คอลเลกชัน",
  "cinema.pnlShare.change30d": "การเปลี่ยนแปลง 30 วัน",
  "cinema.pnlShare.ribbonAriaLabel.one": "ผลรายรอบสำหรับ {n} รอบล่าสุดที่เดิมพัน",
  "cinema.pnlShare.ribbonAriaLabel.other": "ผลรายรอบสำหรับ {n} รอบล่าสุดที่เดิมพัน",
  "cinema.pnlShare.bestPull": "การ์ดที่ดึงได้ดีที่สุด",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "อันดับหนึ่ง",
  "cinema.pnlShare.tier.common": "ธรรมดา",
  "cinema.pnlShare.rounds": "รอบ",
  "cinema.pnlShare.winRate": "อัตราชนะ",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "รอบที่ดีที่สุด",
  "cinema.pnlShare.rank": "อันดับ #{n}",
  "cinema.pnlShare.rankOf": "อันดับ #{n} จาก {total}",
  "cinema.pnlShare.staked": "เดิมพันแล้ว {value}",
  "cinema.pnlShare.overlayAriaLabel": "แชร์สถิติของคุณ",
  "cinema.pnlShare.saved": "บันทึกแล้ว แนบเข้าโพสต์ของคุณ",
  "cinema.pnlShare.triggerLabel": "แชร์กำไร/ขาดทุน",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "เก็บ / ขาย",
  "cinema.recap.secondsShort": "{n} วิ",
  "cinema.recap.dest.yourCall": "คุณตัดสินใจ",
  "cinema.recap.dest.deciding": "กำลังตัดสินใจ",
  "cinema.recap.dest.you": "คุณ",
  "cinema.recap.dest.topBacker": "ผู้เดิมพันสูงสุด",
  "cinema.recap.dest.yourCard": "การ์ดของคุณ",
  "cinema.recap.dest.wonBy": "ชนะโดย",
  "cinema.recap.dest.aBacker": "ผู้เดิมพันคนหนึ่ง",
  "cinema.recap.dest.yourChaseLoot": "ของรางวัลเชสของคุณ",
  "cinema.recap.dest.chaseLoot": "ของรางวัลเชส",
  "cinema.recap.dest.releasedFromVault": "ปล่อยออกจากคลัง",
  "cinema.recap.dest.sweptTo": "กวาดไปที่",
  "cinema.recap.dest.chaseVault": "คลังเชส",
  "cinema.recap.dest.fundsJackpot": "เข้าแจ็คพอต",
  "cinema.recap.dest.protocolFee": "ค่าธรรมเนียมโปรโตคอล",
  "cinema.recap.dest.tableRake": "ค่าธรรมเนียมโต๊ะ",
  "cinema.recap.dest.soldBack": "ขายคืนแล้ว",
  "cinema.recap.dest.intoTheSplit": "เข้าส่วนแบ่ง",
  "cinema.recap.dest.toThePool": "+{value} เข้ากองกลาง",
  "cinema.recap.sublineYours": "การ์ดของทั้งโต๊ะในรอบนี้ ของคุณมีเครื่องหมายด้านล่าง",
  "cinema.recap.sublineLost": "การ์ดของทั้งโต๊ะในรอบนี้ ไม่มีใบไหนเป็นของคุณ",
  "cinema.recap.sublineNoStake": "การ์ดของทั้งโต๊ะในรอบนี้ คุณไม่ได้ร่วมเดิมพันในรอบนี้",
  "cinema.recap.sectionAriaLabel": "การ์ดทุกใบของรอบนี้ไปอยู่ที่ใคร",
  "cinema.recap.eyebrow": "ผลลัพธ์รอบ",
  "cinema.recap.headline": "การ์ดทุกใบไปอยู่ที่ใคร",
  "cinema.recap.theatreHeader": "เรื่องราวของรอบ · ปลายทางของการ์ดทุกใบ",
  "cinema.recap.openCardTitle": "เปิดหน้าการ์ดในแท็บใหม่",
  "cinema.recap.fromPack": "จาก {pack}",
  "cinema.recap.railAriaLabel": "การ์ดทั้งหมดของรอบนี้ เรียงตามมูลค่าสูงสุด",
  "cinema.recap.tierRule.one": "การ์ดที่เหลือ · {value}",
  "cinema.recap.tierRule.other": "การ์ดที่เหลืออีก {n} ใบ · {value}",
  "cinema.recap.showMore": "แสดงเพิ่ม {n} ใบ",
  "cinema.recap.showAll": "แสดงทั้งหมด {n} ใบ",
  "cinema.recap.showing": "แสดง {n} จาก {total} ใบ · {value} จาก {totalValue}",
  "cinema.recap.allShown": "ทั้งหมด {n} ใบ · รวม {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "กำลังจบวิดีโอ...",
  "cinema.replay.recordingEmpty": "ไฟล์บันทึกว่างเปล่า ลองอีกครั้ง",
  "cinema.replay.checkingService": "กำลังตรวจสอบบริการเรนเดอร์ HD...",
  "cinema.replay.serviceUnreachable":
    "ติดต่อบริการเรนเดอร์ HD ไม่ได้ จึงเรนเดอร์เป็น HD ไม่ได้ ใช้ปุ่ม บันทึกแท็บ เพื่อบันทึกแท็บนี้แทน (จะมีข้อความจากเบราว์เซอร์)",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "กำลังสร้างวิดีโอ HD: {seconds} วิ{pct}",
  "cinema.replay.hdRenderFailed": "สร้างวิดีโอ HD ไม่สำเร็จ ลองอีกครั้ง หรือใช้ปุ่ม บันทึกแท็บ เพื่อบันทึกแท็บนี้แทน",
  "cinema.replay.cannotRecord":
    "เบราว์เซอร์นี้บันทึกวิดีโอตรงนี้ไม่ได้ จะบันทึกไฟล์รอบแทน นำไฟล์ไปวางที่หน้าดูซ้ำเพื่อดูอีกครั้ง",
  "cinema.replay.pickThisTab": "เลือก \"แท็บนี้\" เพื่อบันทึกรอบนี้",
  "cinema.replay.recorderFailed": "เริ่มการบันทึกไม่สำเร็จ",
  "cinema.replay.watermarkAriaLabel": "ดูซ้ำรอบ {n}",
  "cinema.replay.watermarkAriaLabelDated": "ดูซ้ำรอบ {n} บันทึกเมื่อ {date}",
  "cinema.replay.watermarkTag": "ดูซ้ำ",
  "cinema.replay.watermarkRound": "รอบ #{n}",
  "cinema.replay.headerSeed": "ซีด {seed}",
  "cinema.replay.phaseBidding": "กำลังเดิมพัน",
  "cinema.replay.phaseReveal": "เปิดเผยผล",
  "cinema.replay.phaseDone": "เสร็จสิ้น",
  "cinema.replay.boardAriaLabel": "กระดานดูซ้ำ",
  "cinema.replay.controlsAriaLabel": "ตัวควบคุมการดูซ้ำของรอบ {n}",
  "cinema.replay.pause": "หยุดชั่วคราว",
  "cinema.replay.play": "เล่น",
  "cinema.replay.pauseButton": "หยุดชั่วคราว",
  "cinema.replay.playButton": "เล่น",
  "cinema.replay.restart": "เริ่มใหม่",
  "cinema.replay.scrubAriaLabel": "เลื่อนดูทั้งรอบ: ตั้งแต่การเดิมพันจนถึงการเปิดเผยผล",
  "cinema.replay.lockMark": "ล็อก",
  "cinema.replay.seeking": "กำลังเลื่อน",
  "cinema.replay.speedAriaLabel": "ความเร็วการเล่น",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "บันทึกวิดีโอ",
  "cinema.replay.saveVideoTitle":
    "สร้างวิดีโอรอบนี้เป็นไฟล์ HD mp4 (บริการเรนเดอร์ในเครื่อง ไม่มีการบันทึกหน้าจอของคุณ)",
  "cinema.replay.recordTab": "บันทึกแท็บ",
  "cinema.replay.recordTabTitle":
    "ทางเลือกสำรอง: บันทึกแท็บนี้ด้วยข้อความบันทึกหน้าจอของเบราว์เซอร์ (คุณภาพเรียลไทม์)",
  "cinema.replay.saveRound": "บันทึกรอบ",
  "cinema.replay.saveRoundTitle":
    "ดาวน์โหลดรอบนี้เป็นไฟล์ข้อมูลขนาดเล็ก ใครก็นำไปวางที่หน้าดูซ้ำเพื่อดูรอบนี้ได้",
  "cinema.replay.close": "ปิด",
  "cinema.replay.backToGame": "กลับไปเล่นเกม",
  "cinema.replay.shareOverlayAriaLabel": "แชร์รอบนี้",
  "cinema.replay.videoReady": "วิดีโอของรอบพร้อมแล้ว",
  "cinema.replay.formatWebm": "บันทึกเป็น .webm - X ต้องใช้ mp4 ในการอัปโหลด จึงควรแชร์ลิงก์หรือแปลงไฟล์ก่อน",
  "cinema.replay.formatMp4": "บันทึกเป็น .mp4 - พร้อมแนบบน X",
  "cinema.replay.shareOnX": "แชร์บน X",
  "cinema.replay.saveAgain": "บันทึกอีกครั้ง",
  "cinema.replay.shareHint": "X แนบวิดีโอจากเว็บให้อัตโนมัติไม่ได้ โพสต์ของคุณจะเปิดพร้อมข้อความไว้แล้ว แนบไฟล์ที่บันทึกไว้เอง",
  "cinema.replay.xOpened": "เปิด X พร้อมข้อความของคุณแล้ว แนบไฟล์ที่บันทึกไว้ ({filename}) เอง ตัวเขียนโพสต์บนเว็บไม่สามารถแนบให้อัตโนมัติ",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE การดูซ้ำรอบ",
  "cinema.replayRoute.noRecordingParam": "ไม่มีไฟล์บันทึกให้มา ใส่ ?rec=<encoded-json-or-url>",
  "cinema.replayRoute.unreadable": "อ่านไฟล์บันทึกจาก ?rec= ไม่ได้",
  "cinema.replayRoute.loadFailed": "โหลดไฟล์บันทึกไม่สำเร็จ ({error})",
  "cinema.replayRoute.badge": "ดูซ้ำรอบ",
  "cinema.replayRoute.loading": "กำลังโหลดไฟล์บันทึก",
  "cinema.replayRoute.noRecording": "ไม่มีไฟล์บันทึกให้เล่น",
  "cinema.replayRoute.hint":
    "เปิดการดูซ้ำได้จากแถบรอบที่ผ่านมาบนกระดาน (ปุ่ม ดูซ้ำ บนรอบที่สรุปผลแล้ว) หรือจากลิงก์ ?rec= ที่แชร์มา",
  "cinema.replayRoute.roundResults": "ผลลัพธ์รอบ",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.share.shareFile": "แชร์ไฟล์",
  "cinema.share.shareSheetOpened": "เปิดแผงแชร์แล้ว",
  "cinema.winShare.lossHeadline": "แพ้รอบนี้",
  "cinema.winShare.lossResult": "แพ้",
  "cinema.winShare.returned": "คืนกลับ",
  "cinema.winShare.bestPull": "การเปิดที่ดีที่สุด",
  "cinema.winShare.playedBy": "เล่นโดย {name}",
  "cinema.winShare.lossCaption": "รอบที่ {n}: ฉันวางเดิมพัน {stake} รอบนี้ไม่มีเงินกลับบ้าน",
  "cinema.winShare.lossCardCaption": "การเปิดที่ดีที่สุดบนโต๊ะ แต่ไม่ใช่ของฉัน",
  "cinema.winShare.lossNoCardCaption": "บันทึกผลรอบนี้ตามจริง",
  "cinema.winShare.roundResultTop": "รอบ",
  "cinema.winShare.roundResultMain": "แพ้",
  "cinema.winShare.shareRoundCard": "แชร์การ์ด",
  "cinema.replay.shareVideo": "แชร์วิดีโอ",
  "cinema.replay.shareVideoTitle": "แชร์วิดีโอรอบนี้",
  "cinema.replay.shareVideoSheetOpened": "เปิดแผงแชร์พร้อมวิดีโอแล้ว",
  "cinema.replay.shareVideoFailed": "แชร์วิดีโอไม่ได้ ลองอีกครั้ง",
  "cinema.replay.shareSheetHint": "อุปกรณ์ของคุณส่งวิดีโอนี้ไป X จากแผงแชร์ได้",
  "cinema.replay.shareRoundTitle": "attn royale · รอบที่ {n}",
  "cinema.replay.shareRoundTable": "{amount} อยู่บนโต๊ะ",
  "cinema.replay.shareRoundWin": "ไทล์ของฉันชนะโต๊ะ {pool} · ได้ {amount} กลับมา",
  "cinema.replay.shareRoundCardsOnly": "ไทล์ {tile} ชนะโต๊ะ {pool} · ไทล์ของฉันแพ้ แต่ได้ {amount} กลับมา",
  "cinema.replay.shareRoundWinner": "ไทล์ {tile} ชนะโต๊ะ {pool}",
  "cinema.share.shareVideo": "แชร์วิดีโอ",
  "cinema.share.preparingOutput": "กำลังเตรียมการแชร์…",
  "cinema.share.cancelled": "ยกเลิกการแชร์แล้ว",
  "cinema.share.shareSheetHint": "อุปกรณ์ของคุณส่งวิดีโอนี้ไป X จากแผงแชร์ได้",
  "cinema.personalReveal.sectionAria": "การ์ดที่คุณเปิดได้",
  "cinema.personalReveal.title": "การ์ดที่คุณเปิด",
  "cinema.personalReveal.progress.eyebrow": "การเปิดพร้อมกัน",
  "cinema.personalReveal.progress.title": "กำลังเปิดการ์ด",
  "cinema.personalReveal.progress.body": "โต๊ะกำลังเปิดการ์ด การเปิดเผยร่วมกันจะดำเนินต่อเมื่อช่วงนี้จบลง",
  "cinema.personalReveal.normal.label": "เปิดเผยแบบปกติ",
  "cinema.personalReveal.normalHint": "ด้านหลังของการ์ดจะแสดงก่อน คลิกหรือแตะการ์ดเพื่อพลิก การ์ดที่คุณเปิดเป็นของคุณ การ์ดที่ยังคว่ำอยู่จะพลิกอัตโนมัติหลัง 5 วินาที",
  "cinema.personalReveal.hardcore.label": "เปิดเผยแบบเข้มข้น",
  "cinema.personalReveal.hardcoreHint": "ด้านหลังของการ์ดจะแสดงก่อน คลิกหรือแตะการ์ดเพื่อพลิก ระบบจะตัดสินเจ้าของหลังการสุ่ม การ์ดที่ยังคว่ำอยู่จะพลิกอัตโนมัติหลัง 5 วินาที",
  "cinema.personalReveal.yourCard": "การ์ดของคุณ",
  "cinema.personalReveal.youOpened": "คุณเป็นผู้เปิด",
  "cinema.personalReveal.otherCards": "การ์ดอื่น",
  "cinema.personalReveal.sort.group": "ลำดับการ์ด",
  "cinema.personalReveal.sort.pack": "แพ็ก",
  "cinema.personalReveal.sort.packAria": "เรียงตามราคาแพ็ก จากถูกสุดก่อน",
  "cinema.personalReveal.sort.rarity": "ความหายาก",
  "cinema.personalReveal.sort.revealFirst": "การเรียงตามความหายากจะเปิดใช้เมื่อเผยการ์ดครบทุกใบ",
  "cinema.personalReveal.sort.bestAria": "เรียงตามความหายาก ระดับสูงสุดก่อน",
  "cinema.personalReveal.sort.worstAria": "เรียงตามความหายาก ระดับต่ำสุดก่อน",
  "cinema.personalReveal.sort.packStatus": "การ์ดเรียงตามราคาแพ็ก จากถูกสุดก่อน",
  "cinema.personalReveal.sort.bestStatus": "การ์ดเรียงตามความหายาก ระดับสูงสุดก่อน",
  "cinema.personalReveal.sort.worstStatus": "การ์ดเรียงตามความหายาก ระดับต่ำสุดก่อน",
  "cinema.personalReveal.allOpen": "เปิดเผยการ์ดครบทุกใบแล้ว",
  "cinema.personalReveal.autoOpenIn": "การ์ดที่เหลือจะเปิดอัตโนมัติใน {n} วินาที",
  "cinema.personalReveal.revealCardAria": "พลิกการ์ด {n}",
  "cinema.personalReveal.revealedCardAria": "เปิดเผยการ์ด {n} แล้ว: {name}, {value}",
  "cinema.personalReveal.rarity": "ความหายาก",
  "cinema.personalReveal.year": "ปี",
  "cinema.personalReveal.yearUnknown": "ไม่ทราบปี",
  "cinema.personalReveal.grade": "เกรด",
  "cinema.personalReveal.ungraded": "ยังไม่จัดเกรด",
  "cinema.personalReveal.pageNavigation": "หน้าการ์ด",
  "cinema.personalReveal.previousPage": "การ์ดก่อนหน้า",
  "cinema.personalReveal.nextPage": "การ์ดถัดไป",
  "cinema.personalReveal.pageStatus": "หน้า {page} จาก {pages}",
  "cinema.personalReveal.live.revealed": "เปิดเผย {name} แล้ว",
  "cinema.personalReveal.live.all": "เปิดเผยการ์ดทั้ง {n} ใบแล้ว",
} as Record<string, string>;
