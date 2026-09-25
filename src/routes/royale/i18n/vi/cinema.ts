// Vietnamese (Tiếng Việt): "cinema" segment. Machine-consistent quality pass
// (i18n epic, vi cinema segment), flagged for a later native-speaker
// editorial review.
// Owns: RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx, revealCinemaTypes.ts
// (the copy: fields of REVEAL_CINEMA_SEQUENCE), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx. See royaleI18n.ts's file header for the key-naming
// and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// Terminology (binding across every vi segment, see vi/core.ts's header for
// the full glossary): "vòng" for round, "quỹ" for pool/pot, "Cuộc Săn Đuổi"
// for the Chase, "ô" for tile, "người đặt cược" for backer(s), "lượt rút"
// for a card pull, "rút thăm" for the winner-selection draw, "kho" for
// vault, "Xem lại" / "XEM LẠI" for Replay. "GRAIL", "LEGENDARY" and
// "MYTHIC" inside cinema.cardWall.rarity.* and cinema.pnlShare.tier.* are
// the reserved pack-tier brand names and stay English verbatim; "TOP" /
// "COMMON" there are ordinary rarity words and do localize.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "ĐANG MỞ PACK",
  "cinema.phaseAnnounce.packsOpening.subtitle": "đang lộ thẻ · định giá lại từng ô",
  "cinema.phaseAnnounce.winnerDraw.title": "ĐANG RÚT THĂM NGƯỜI THẮNG",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "theo trọng số tổng giá trị mỗi ô",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Đã khóa: bàn chơi là màn trình diễn",
  "cinema.phase.packsEnter.copy": "Pack đổ vào bàn chơi",
  "cinema.phase.packsOpening.copy": "Pack đang xé mở: thẻ đang lộ ra, các ô đang định giá lại",
  "cinema.phase.cardsByTile.copy": "Thẻ đã lộ: từng ô, giá trị cao nhất trước",
  "cinema.phase.valueScan.copy": "Quét qua bàn chơi: các lượt rút lớn nhất đang phát sáng",
  "cinema.phase.winnerDraw.copy": "Đang rút thăm người thắng: theo trọng số tổng giá trị mỗi ô",
  "cinema.phase.winnerLock.copy": "Đã chốt người thắng",
  "cinema.phase.loserValueConverge.copy": "Các lượt rút của ô thua quay về kho: giá trị của chúng dồn về cho người thắng",
  "cinema.phase.winnerPotCountUp.copy": "Quỹ đổ về ô thắng cuộc",
  "cinema.phase.chaseFeed.copy": "Cuộc Săn Đuổi nhận phần của mình",
  "cinema.phase.chasePayout.copy": "Cuộc Săn Đuổi nổ: một ô thắng lớn",
  "cinema.phase.allocation.copy": "Bạn nhận được",
  "cinema.phase.keepSellDecision.copy": "Giữ hay bán: quyết định này kéo dài sang vòng tiếp theo",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "ĐÃ CẤT KHO",
  "cinema.vaultLock.plateSub": "CUỘC SĂN ĐUỔI",
  "cinema.vaultLock.status": "ĐÃ KHÓA",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "KHÔNG CÓ THẺ NÀO ĐƯỢC MỞ Ở VÒNG NÀY",
  "cinema.cardWall.won": "ĐÃ THẮNG",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TRÚNG ĐỈNH",
  "cinema.cardWall.rarity.common": "PHỔ THÔNG",
  "cinema.cardWall.rarity.rare": "HIẾM",
  "cinema.cardWall.rarity.epic": "SỬ THI",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "ĐÃ GIỮ",
  "cinema.cardWall.status.sold": "ĐÃ BÁN",
  "cinema.cardWall.status.toTheChase": "VÀO CUỘC SĂN ĐUỔI",
  "cinema.cardWall.status.rake": "PHÍ",
  "cinema.cardWall.owner.vault": "KHO",
  "cinema.cardWall.owner.you": "BẠN",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Nhấn Enter để mở chi tiết thẻ.",
  "cinema.cardWall.sectionAriaLabel": "Mọi thẻ được mở ở vòng này, giá trị cao nhất trước",
  "cinema.cardWall.eyebrow": "Mọi thẻ đã mở",
  "cinema.cardWall.rake.title": "Phí giao thức",
  "cinema.cardWall.rake.metaOne": "1 thẻ vào phí giao thức",
  "cinema.cardWall.rake.metaMany": "{n} thẻ vào phí giao thức",
  "cinema.cardWall.rake.hide": "Ẩn",
  "cinema.cardWall.rake.show": "Hiện",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Đóng màn mở thưởng",
  "cinema.close.title": "Đóng màn mở thưởng (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Người thắng chính thức",
  "cinema.provCaption.round": "Vòng",
  "cinema.provCaption.verifyAt": "Kiểm chứng tại",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Vòng #{n}",
  "cinema.bar.vrfBadge": "Vận hành bởi CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Săn Đuổi +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "ĐANG MỞ",
  "cinema.phaseShort.drawing": "ĐANG RÚT THĂM",
  "cinema.phaseShort.results": "KẾT QUẢ",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "THẮNG",
  "cinema.core.tileWins": "{tile} thắng",
  "cinema.core.inCards": " TIỀN THẺ",
  "cinema.core.poolSuffix": " QUỸ",
  "cinema.core.totalCardValue": "TỔNG GIÁ TRỊ THẺ",
  "cinema.core.totalPool": "TỔNG QUỸ",
  "cinema.core.tilesLive": "{n} Ô ĐANG CHƠI",
  "cinema.core.packsSuffix": " · {n} PACK",
  "cinema.core.yourStake": "Tiền cược của bạn",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Chưa cược",
  "cinema.heatOnly.note": "Chỉ USDC · không có pack ở vòng này",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} pack",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Đã thua lượt rút thăm. Thẻ thuộc về những người đặt cược của ô thắng.",
  "cinema.vaultNote.heatOnlyNoPack": "Không có pack ở vòng này · tiền lẻ chuyển sang quỹ",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "từ {pack}",
  "cinema.grail.fromPackRate": "từ {pack} · {pct} lượt rút",
  "cinema.grail.pullTitle": "LƯỢT RÚT GRAIL",
  "cinema.grail.fromPackVisible": "từ một pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, từ một pack {pack}",
  "cinema.grail.multiTitle": "{n} GRAIL Ở VÒNG NÀY",
  "cinema.grail.galleryTileFromPack": "{tile} · từ {pack}",
  "cinema.grail.galleryMore": "+{n} nữa",
  "cinema.card.openInNewTab": "Mở trang thẻ {name} trong tab mới",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Từ pack {pack}, tỷ lệ rút {pct}. Nhấn Enter để mở chi tiết thẻ.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Nhấn Enter để mở chi tiết thẻ.",
  "cinema.card.bandChancePct": "{pct}% cơ hội từ pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} THẮNG",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "ĐANG MỞ CỬA SỔ BÁN",
  "cinema.sellWindow.secToDecide": "GIÂY ĐỂ QUYẾT ĐỊNH",
  "cinema.sellWindow.noActionAutoSells": "KHÔNG THAO TÁC SẼ TỰ ĐỘNG BÁN KHI KHÓA VÒNG TIẾP THEO",
  "cinema.sellWindow.noActionKeeps": "KHÔNG THAO TÁC SẼ GIỮ THẺ · BÁN BẤT KỲ LÚC NÀO TỪ THẺ CỦA BẠN",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "giá trị thẻ",
  "cinema.tileValue.onTileLabel": "trên ô",
  "cinema.tileValue.oddsWord": "tỷ lệ",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "ô bị trúng",
  "cinema.chase.fires": "CUỘC SĂN ĐUỔI KÍCH HOẠT",
  "cinema.chase.jackpotReleasingTo": "GIẢI THƯỞNG ĐANG ĐỔ VÀO {tile}",
  "cinema.chase.winningTileFallback": "Ô THẮNG CUỘC",
  "cinema.chase.feedThisRound": "Cuộc Săn Đuổi +{value} ở vòng này",
  "cinema.chase.cardToChase": "THẺ VÀO CUỘC SĂN ĐUỔI",
  "cinema.chase.bestLosingCardNamed": "Thẻ giá trị nhất của ô thua · {name} · {value} đã khóa",
  "cinema.chase.bestLosingCardVault": "Thẻ giá trị nhất của ô thua đã khóa trong kho",
  "cinema.chase.jackpotGrows": "Cuộc Săn Đuổi +{value} · giải thưởng tăng lên",
  "cinema.chase.hitsAriaLabel": "Cuộc Săn Đuổi trúng {tile} với {value}",
  "cinema.chase.alsoHolds": "Cuộc Săn Đuổi còn đang giữ",
  "cinema.chase.alsoHoldsAriaOne": "Cuộc Săn Đuổi còn đang giữ 1 thẻ trị giá {value}",
  "cinema.chase.alsoHoldsAriaMany": "Cuộc Săn Đuổi còn đang giữ {n} thẻ trị giá {value}",
  "cinema.chase.more": "nữa",
  "cinema.chase.cardsTotalOne": "1 thẻ · {value} tiền thẻ chấm điểm",
  "cinema.chase.cardsTotalMany": "{n} thẻ · {value} tiền thẻ chấm điểm",
  "cinema.chase.hitsKicker": "CUỘC SĂN ĐUỔI TRÚNG",
  "cinema.chase.winsBig": "THẮNG LỚN",
  "cinema.chase.yourCut": "PHẦN CỦA BẠN",
  "cinema.chase.otherBackerOne": "{n} người đặt cược khác · chia theo tỷ lệ",
  "cinema.chase.otherBackerMany": "{n} người đặt cược khác · chia theo tỷ lệ",
  "cinema.chase.backerOne": "{n} người đặt cược · chia theo tỷ lệ",
  "cinema.chase.backerMany": "{n} người đặt cược · chia theo tỷ lệ",
  "cinema.chase.alsoWonRound": "Cũng đã thắng vòng này",
  "cinema.chase.backedTileNote": "Một ô có cược · không phải người thắng vòng",
  "cinema.chase.heldCardsSpillOne": "1 thẻ đang giữ được đổ ra",
  "cinema.chase.heldCardsSpillMany": "{n} thẻ đang giữ được đổ ra",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "quỹ",
  "cinema.you.get": "Bạn nhận được",
  "cinema.you.lost": "Bạn đã thua!",
  "cinema.you.noStakeThisRound": "Bạn chưa đặt cược ở vòng này",
  "cinema.you.mathLine": "{usdc} USDC phần chia quỹ + {cards} từ thẻ = {total} cho bạn",
  "cinema.you.sold": "Đã bán {value}",
  "cinema.you.kept": "Đã giữ · trong bộ sưu tập của bạn",
  "cinema.you.keepButton": "Giữ",
  "cinema.you.sellButton": "Bán {value}",
  "cinema.you.yours": "của bạn",
  "cinema.you.noCardThisRound": "Không có thẻ nào ở vòng này.",
  "cinema.you.usdcPaidInstantly": "USDC · đã cộng vào số dư của bạn",
  "cinema.you.keepAll": "Giữ tất cả",
  "cinema.you.sellAllButton": "Bán tất cả {value}",
  "cinema.you.sellAllConfirm": "Chắc chưa? Bán tất cả {value}",
  "cinema.you.noOtherBackers": "Không có người đặt cược nào khác ở vòng này",
  "cinema.you.oneOtherSplits": "1 người khác chia {value}",
  "cinema.you.othersSplit": "{n} người khác chia {value}",
  "cinema.you.oneWinningBackerTakes": "1 người đặt cược thắng nhận {value}",
  "cinema.you.winningBackersSplit": "{n} người đặt cược thắng chia {value}",
  "cinema.you.viewFullResults": "Xem kết quả đầy đủ",
  "cinema.you.howItWorks": "Cách chơi",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Thẻ tiêu chuẩn, người đặt cược lớn nhất của ô giữ hoặc bán lại, chia theo tỷ lệ góp.",
  "cinema.theatre.disposition.sellBackSplit":
    "Quy tắc Grail: không một người đặt cược nào đủ để trả phần chia cho những người còn lại, nên Grail mặc định được bán lại và USDC được chia đều khắp ô.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Quy tắc Grail: phần chia của người đặt cược lớn nhất đã đủ để mua lại phần của những người khác, nên họ giữ Grail và trả cho mọi người phần chia thẻ bằng USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided}/{total} người chơi khác đã quyết định; vòng tiếp theo sau {seconds} giây",
  "cinema.theatre.playersDeciding": "Người chơi đang quyết định {count}",
  "cinema.theatre.nextRoundIn": "vòng tiếp theo sau {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Vòng đang được xử lý",
  "cinema.theatre.stageLockingBoard": "Đang khóa bàn chơi…",
  "cinema.theatre.stagePacksOpening": "Pack đang mở trên bàn chơi",
  "cinema.theatre.stageWinnerDrawn": "Đã rút thăm người thắng",
  "cinema.theatre.headlineNoEntries": "Không có ai tham gia ở vòng này",
  "cinema.theatre.headlineRevealing": "Đang mở thưởng…",
  "cinema.theatre.headlineTileWins": "{tile} thắng {value}",
  "cinema.theatre.tileFallback": "Ô",
  "cinema.theatre.youWon": "Bạn đã thắng {value}",
  "cinema.theatre.youLostNoStake": "Bạn đã thua, không có cược trong {tile}",
  "cinema.theatre.winnerFallback": "người thắng",
  "cinema.theatre.tileWonNoStake": "{tile} đã thắng · bạn không có cược",
  "cinema.theatre.aTileFallback": "Một ô",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} ô đã chơi · quỹ {pool}",
  "cinema.theatre.stripMetaCards": " · {value} tiền thẻ",
  "cinema.theatre.stripMetaCash": " + {value} tiền mặt",
  "cinema.theatre.drawingWinner": "đang rút thăm người thắng",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Kết quả vòng",
  "cinema.theatre.roundSettled": "Vòng đã quyết toán",
  "cinema.theatre.winner": "Người thắng",
  "cinema.theatre.seedNote":
    "Bao gồm khoản cược khởi đầu {value} của bạn trên {tile}, xóa cược khởi đầu trong bảng đặt cược để chơi từ $0.",
  "cinema.theatre.lossNoteStaked":
    "Bạn đã cược {value} vào các ô khác ở vòng này. Di chuột vào bất kỳ ô nào phía sau bảng này để xem nó đã mở gì và vì sao thua.",
  "cinema.theatre.lossNoteNoStake":
    "Bạn chưa đặt cược vào ô nào ở vòng này, nên không có gì để trả. Chọn mức cược và nhấp vào một ô ở vòng tiếp theo.",
  "cinema.theatre.bonusGrails.one":
    "{n} Grail nữa đã xuất hiện ở vòng này: nó thuộc về những người đặt cược của ô thắng như chiến lợi phẩm thêm (được giữ, hoặc bán lại chia theo tỷ lệ nếu quá đắt để giữ), không bao giờ vào phí ATTN hay Cuộc Săn Đuổi.",
  "cinema.theatre.bonusGrails.other":
    "{n} Grail nữa đã xuất hiện ở vòng này: chúng thuộc về những người đặt cược của ô thắng như chiến lợi phẩm thêm (được giữ, hoặc bán lại chia theo tỷ lệ nếu quá đắt để giữ), không bao giờ vào phí ATTN hay Cuộc Săn Đuổi.",
  "cinema.theatre.noPacksBacked": "Không có pack nào được đặt cược ở vòng này. Vòng tiếp theo sẽ tự động bắt đầu.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Phần chia tiền thắng · {tile}",
  "cinema.theatre.payoutSplitMeta": "Quỹ {pool} · nạp Cuộc Săn Đuổi {feed}",
  "cinema.theatre.payoutSplitChase": " · SĂN ĐUỔI +{value}",
  "cinema.theatre.you": "Bạn",
  "cinema.theatre.physicalCard": "Thẻ vật lý →",
  "cinema.theatre.grailSecured": " (đã giữ Grail)",
  "cinema.theatre.grailSoldBack": "Grail đã bán lại ({value}) → chia USDC ở trên.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "CUỘC SĂN ĐUỔI ĐÃ KÍCH HOẠT!",
  "cinema.theatre.chaseHitBody":
    "Cuộc Săn Đuổi đã kích hoạt từ lượt rút thăm hiếm của riêng nó, nên {value} từ Cuộc Săn Đuổi đã được trả vào phần thắng này, cộng thêm vào phần chia ở trên. Cuộc Săn Đuổi tiếp theo lại bắt đầu tích lũy.",
  "cinema.theatre.chaseMissLead": "Cuộc Săn Đuổi chưa kích hoạt ở vòng này.",
  "cinema.theatre.chaseMissBody": "Cuộc Săn Đuổi chỉ kích hoạt qua lượt rút thăm hiếm của riêng nó, nên nó vẫn đang tăng lên, hiện tại {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Kiểm chứng lượt rút thăm",
  "cinema.theatre.vrfSummaryNote": "lượt rút thăm có thể kiểm chứng · xem biên nhận rút thăm",
  "cinema.theatre.vrfRoundId": "mã vòng",
  "cinema.theatre.vrfWinningDraw": "kết quả rút thăm thắng cuộc",
  "cinema.theatre.vrfDrawSeed": "hạt giống rút thăm",
  "cinema.theatre.vrfProofId": "mã bằng chứng",
  "cinema.theatre.vrfTicket": "#{n}/{total}",
  "cinema.theatre.vrfVerifying": "Đang kiểm chứng…",
  "cinema.theatre.vrfRecheck": "Kiểm tra lại lượt rút thăm",
  "cinema.theatre.vrfVerifierLink": "Công cụ kiểm chứng ↗",
  "cinema.theatre.vrfVerified": "✓ Đã kiểm chứng, người thắng này khớp với hạt giống rút thăm đã công bố.",
  "cinema.theatre.vrfFailed": "✗ Lượt rút thăm này không khớp với hạt giống của nó, đừng tin kết quả này.",
  "cinema.theatre.vrfNote": "Mỗi vòng chọn ra một người thắng từ một hạt giống đã công bố mà bạn có thể kiểm tra lại.",
  "cinema.theatre.vrfNoDraw": "Không có pack nào được đặt cược ở vòng này, không có gì để rút thăm.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Giữ thẻ → bộ sưu tập",
  "cinema.theatre.sellBackFor": "Bán lại với giá {value}",
  "cinema.theatre.continueNextRound": "Tiếp tục sang vòng kế tiếp",
  "cinema.theatre.continue": "Tiếp tục",
  "cinema.theatre.settleHint":
    "Giữ sẽ thêm thẻ vào bộ sưu tập của bạn. Bán lại cộng {sell} ({pct}% của {value}, giá mua lại CC của pack này) vào số dư của bạn. Không thao tác = mặc định bán lại khi vòng đóng.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Đã khóa",
  "cinema.prizeModal.stageReveal": "Mở thưởng",
  "cinema.prizeModal.betterLuck": "Chúc may mắn hơn ở vòng sau",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Đang chuẩn bị thẻ của bạn…",
  "cinema.share.renderingPng": "Đang dựng ảnh PNG…",
  "cinema.share.renderFailed": "Không thể dựng ảnh. Hãy thử lại.",
  "cinema.share.captionOpened": "Đã mở chú thích trên X. Hãy đính kèm ảnh PNG đã lưu.",
  "cinema.share.close": "Đóng",
  "cinema.share.downloadPng": "Tải ảnh PNG",
  "cinema.share.shareToX": "Chia sẻ lên X",
  "cinema.share.done": "Xong",
  "cinema.share.provablyFair": "ĐẠI CHIẾN PACK · MỌI LƯỢT RÚT THĂM ĐỀU CÓ THỂ KIỂM CHỨNG",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "hệ số nhân {value}",
  "cinema.winShare.multiplier": "HỆ SỐ NHÂN",
  "cinema.winShare.inCards": "TIỀN THẺ",
  "cinema.winShare.cashWon": "TIỀN MẶT THẮNG",
  "cinema.winShare.tileHit": "· Ô TRÚNG",
  "cinema.winShare.entry": "CƯỢC BAN ĐẦU",
  "cinema.winShare.winOdds": "TỶ LỆ THẮNG",
  "cinema.winShare.totalValue": "TỔNG GIÁ TRỊ",
  "cinema.winShare.certLine": "VẬN HÀNH BỞI SLABZ · CHỨNG NHẬN #{n}",
  "cinema.winShare.roundLine": "VÒNG #{n} · RÚT THĂM VRF CÓ THỂ KIỂM CHỨNG",
  "cinema.winShare.takeHomeAriaLabel": "thực nhận {value}",
  "cinema.winShare.totalTakeHome": "TỔNG THỰC NHẬN",
  "cinema.winShare.breakdown.one": "{cash} TIỀN MẶT + {n} THẺ ({value})",
  "cinema.winShare.breakdown.other": "{cash} TIỀN MẶT + {n} THẺ ({value})",
  "cinema.winShare.deposited": "ĐÃ NẠP",
  "cinema.winShare.wonBy": "THẮNG BỞI {name}",
  "cinema.winShare.theGrail": "GRAIL",
  "cinema.winShare.topPull": "LƯỢT RÚT ĐỈNH",
  "cinema.winShare.topCardOfRound": "THẺ GIÁ TRỊ NHẤT VÒNG",
  "cinema.winShare.poweredBySlabz": "VẬN HÀNH BỞI SLABZ",
  "cinema.winShare.cert": "CHỨNG NHẬN #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Chia sẻ chiến thắng của bạn",
  "cinema.winShare.pngSaved": "Đã lưu ảnh PNG. Hãy đính kèm vào bài đăng của bạn, X không thể tự thêm giúp bạn.",
  "cinema.winShare.renderingHdVideo": "Đang dựng video HD của vòng chơi…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Đang dựng video HD của vòng chơi - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Đã lưu video HD. Hãy đính kèm video này thay vì ảnh vào bài đăng của bạn.",
  "cinema.winShare.hdRenderFailed": "Dựng video HD thất bại. Hãy thử lại.",
  "cinema.winShare.hdVideoButton": "Video HD của vòng chơi",
  "cinema.winShare.hdVideoTitle": "Dựng vòng chơi này thành video mp4 HD (dịch vụ dựng hình cục bộ) và lưu lại.",
  "cinema.winShare.tweetTriggerLabel": "Chia sẻ chiến thắng lên X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "lợi nhuận {value} trên tiền cược",
  "cinema.pnlShare.onStake": "TRÊN TIỀN CƯỢC",
  "cinema.pnlShare.certifiedRun": "HÀNH TRÌNH ĐÃ XÁC NHẬN · LÃI/LỖ RÒNG",
  "cinema.pnlShare.heroSub.one": "qua {n} vòng · tỷ lệ thắng {pct}%",
  "cinema.pnlShare.heroSub.other": "qua {n} vòng · tỷ lệ thắng {pct}%",
  "cinema.pnlShare.collection": "BỘ SƯU TẬP",
  "cinema.pnlShare.change30d": "THAY ĐỔI 30N",
  "cinema.pnlShare.ribbonAriaLabel.one": "Kết quả từng vòng trong {n} vòng đã cược gần nhất",
  "cinema.pnlShare.ribbonAriaLabel.other": "Kết quả từng vòng trong {n} vòng đã cược gần nhất",
  "cinema.pnlShare.bestPull": "LƯỢT RÚT TỐT NHẤT",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "ĐỈNH",
  "cinema.pnlShare.tier.common": "PHỔ THÔNG",
  "cinema.pnlShare.rounds": "SỐ VÒNG",
  "cinema.pnlShare.winRate": "TỶ LỆ THẮNG",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "VÒNG TỐT NHẤT",
  "cinema.pnlShare.rank": "HẠNG #{n}",
  "cinema.pnlShare.rankOf": "HẠNG #{n}/{total}",
  "cinema.pnlShare.staked": "ĐÃ CƯỢC {value}",
  "cinema.pnlShare.overlayAriaLabel": "Chia sẻ hành trình của bạn",
  "cinema.pnlShare.saved": "Đã lưu. Hãy đính kèm vào bài đăng của bạn.",
  "cinema.pnlShare.triggerLabel": "Chia sẻ Lãi/Lỗ",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Giữ / bán",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Bạn quyết định",
  "cinema.recap.dest.deciding": "Đang quyết định",
  "cinema.recap.dest.you": "Bạn",
  "cinema.recap.dest.topBacker": "Người đặt cược lớn nhất",
  "cinema.recap.dest.yourCard": "Thẻ của bạn",
  "cinema.recap.dest.wonBy": "Thắng bởi",
  "cinema.recap.dest.aBacker": "Một người đặt cược",
  "cinema.recap.dest.yourChaseLoot": "Chiến lợi phẩm Cuộc Săn Đuổi của bạn",
  "cinema.recap.dest.chaseLoot": "Chiến lợi phẩm Cuộc Săn Đuổi",
  "cinema.recap.dest.releasedFromVault": "được thả ra từ kho",
  "cinema.recap.dest.sweptTo": "Đã gom vào",
  "cinema.recap.dest.chaseVault": "Kho Cuộc Săn Đuổi",
  "cinema.recap.dest.fundsJackpot": "nạp vào giải thưởng",
  "cinema.recap.dest.protocolFee": "Phí giao thức",
  "cinema.recap.dest.tableRake": "phí bàn chơi",
  "cinema.recap.dest.soldBack": "Đã bán lại",
  "cinema.recap.dest.intoTheSplit": "Vào phần chia",
  "cinema.recap.dest.toThePool": "+{value} vào quỹ",
  "cinema.recap.sublineYours": "Toàn bộ thẻ của bàn chơi ở vòng này. Thẻ của bạn được đánh dấu bên dưới.",
  "cinema.recap.sublineLost": "Toàn bộ thẻ của bàn chơi ở vòng này. Không có thẻ nào là của bạn.",
  "cinema.recap.sublineNoStake": "Toàn bộ thẻ của bàn chơi ở vòng này. Bạn đã không tham gia vòng này.",
  "cinema.recap.sectionAriaLabel": "Mọi thẻ của vòng này đã về đâu",
  "cinema.recap.eyebrow": "Kết quả vòng",
  "cinema.recap.headline": "Mọi thẻ đã về đâu",
  "cinema.recap.theatreHeader": "Diễn biến vòng chơi · điểm đến của từng thẻ",
  "cinema.recap.openCardTitle": "Mở trang thẻ trong tab mới",
  "cinema.recap.fromPack": "Từ {pack}",
  "cinema.recap.railAriaLabel": "Tất cả thẻ trong vòng này, giá trị cao trước",
  "cinema.recap.tierRule.one": "Thẻ còn lại · {value}",
  "cinema.recap.tierRule.other": "{n} thẻ còn lại · {value}",
  "cinema.recap.showMore": "Hiện thêm {n}",
  "cinema.recap.showAll": "Hiện tất cả {n}",
  "cinema.recap.showing": "Đang hiện {n}/{total} thẻ · {value}/{totalValue}",
  "cinema.recap.allShown": "Tất cả {n} thẻ · tổng {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Đang hoàn tất video...",
  "cinema.replay.recordingEmpty": "Bản ghi hình trống. Hãy thử lại.",
  "cinema.replay.checkingService": "Đang kiểm tra dịch vụ dựng hình HD...",
  "cinema.replay.serviceUnreachable":
    "Không thể kết nối tới dịch vụ dựng hình HD, nên không thể dựng ở chất lượng HD. GHI TAB sẽ quay lại tab này thay thế (hộp thoại trình duyệt).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Đang dựng video HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Dựng video HD thất bại. Hãy thử lại, hoặc dùng GHI TAB để quay tab này thay thế.",
  "cinema.replay.cannotRecord":
    "Trình duyệt này không thể quay video ở đây. Thay vào đó, hãy lưu tệp vòng chơi, thả nó vào trang xem lại để xem lại.",
  "cinema.replay.pickThisTab": "Chọn \"Tab này\" để ghi lại vòng chơi.",
  "cinema.replay.recorderFailed": "Không thể khởi động bộ ghi hình.",
  "cinema.replay.watermarkAriaLabel": "Xem lại vòng {n}",
  "cinema.replay.watermarkAriaLabelDated": "Xem lại vòng {n}, ghi lại lúc {date}",
  "cinema.replay.watermarkTag": "XEM LẠI",
  "cinema.replay.watermarkRound": "VÒNG #{n}",
  "cinema.replay.headerSeed": "HẠT GIỐNG {seed}",
  "cinema.replay.phaseBidding": "ĐANG CƯỢC",
  "cinema.replay.phaseReveal": "MỞ THƯỞNG",
  "cinema.replay.phaseDone": "XONG",
  "cinema.replay.boardAriaLabel": "Bàn chơi xem lại",
  "cinema.replay.controlsAriaLabel": "Điều khiển xem lại cho vòng {n}",
  "cinema.replay.pause": "Tạm dừng",
  "cinema.replay.play": "Phát",
  "cinema.replay.pauseButton": "TẠM DỪNG",
  "cinema.replay.playButton": "PHÁT",
  "cinema.replay.restart": "PHÁT LẠI TỪ ĐẦU",
  "cinema.replay.scrubAriaLabel": "Tua toàn bộ vòng chơi: từ lúc cược đến khi mở thưởng",
  "cinema.replay.lockMark": "Khóa",
  "cinema.replay.seeking": "ĐANG TUA",
  "cinema.replay.speedAriaLabel": "Tốc độ phát",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "LƯU VIDEO",
  "cinema.replay.saveVideoTitle":
    "Dựng vòng chơi này thành video mp4 HD (dịch vụ dựng hình cục bộ; không quay lại bất kỳ thứ gì trên màn hình của bạn)",
  "cinema.replay.recordTab": "GHI TAB",
  "cinema.replay.recordTabTitle":
    "Phương án dự phòng: ghi lại tab này bằng hộp thoại quay màn hình của trình duyệt (chất lượng thời gian thực)",
  "cinema.replay.saveRound": "LƯU VÒNG CHƠI",
  "cinema.replay.saveRoundTitle":
    "Tải vòng chơi này xuống dưới dạng một tệp dữ liệu nhỏ, ai cũng có thể thả tệp đó vào trang xem lại để xem đúng vòng chơi này",
  "cinema.replay.close": "ĐÓNG",
  "cinema.replay.backToGame": "QUAY LẠI TRÒ CHƠI",
  "cinema.replay.shareOverlayAriaLabel": "Chia sẻ vòng chơi này",
  "cinema.replay.videoReady": "VIDEO VÒNG CHƠI ĐÃ SẴN SÀNG",
  "cinema.replay.formatWebm": "Đã lưu dưới dạng .webm, X cần mp4 để tải lên, nên hãy chia sẻ đường liên kết hoặc chuyển đổi tệp trước.",
  "cinema.replay.formatMp4": "Đã lưu dưới dạng .mp4, sẵn sàng đính kèm trên X.",
  "cinema.replay.shareOnX": "Chia sẻ lên X",
  "cinema.replay.saveAgain": "Lưu lại",
  "cinema.replay.shareHint": "X không thể tự đính kèm video từ web, bài đăng của bạn sẽ mở sẵn nội dung, hãy đính kèm tệp đã lưu.",
  "cinema.replay.xOpened": "X đã mở với chú thích của bạn. Hãy đính kèm tệp đã lưu ({filename}), trình soạn thảo web không thể tự thêm giúp bạn.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Xem lại vòng chơi attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Chưa có bản ghi nào được cung cấp. Truyền ?rec=<json-hoặc-url-đã-mã-hóa>.",
  "cinema.replayRoute.unreadable": "Không thể đọc bản ghi từ ?rec=.",
  "cinema.replayRoute.loadFailed": "Không thể tải bản ghi ({error}).",
  "cinema.replayRoute.badge": "XEM LẠI VÒNG CHƠI",
  "cinema.replayRoute.loading": "ĐANG TẢI BẢN GHI",
  "cinema.replayRoute.noRecording": "Không có bản ghi nào để phát.",
  "cinema.replayRoute.hint":
    "Xem lại được mở từ dải các vòng trước trên bàn chơi (XEM LẠI ở một vòng đã quyết toán) hoặc từ một đường liên kết ?rec= được chia sẻ.",
  "cinema.replayRoute.roundResults": "KẾT QUẢ VÒNG",
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
  "cinema.share.shareFile": "Chia sẻ tệp",
  "cinema.share.shareSheetOpened": "Đã mở bảng chia sẻ.",
  "cinema.winShare.lossHeadline": "THUA VÁN",
  "cinema.winShare.lossResult": "THUA",
  "cinema.winShare.returned": "HOÀN LẠI",
  "cinema.winShare.bestPull": "LƯỢT MỞ TỐT NHẤT",
  "cinema.winShare.playedBy": "DO {name} CHƠI",
  "cinema.winShare.lossCaption": "Ván #{n}: tôi đặt {stake}. Ván này không mang về gì.",
  "cinema.winShare.lossCardCaption": "Lượt mở tốt nhất trên bàn, nhưng không phải của tôi.",
  "cinema.winShare.lossNoCardCaption": "Kết quả ván được ghi lại trung thực.",
  "cinema.winShare.roundResultTop": "VÁN",
  "cinema.winShare.roundResultMain": "THUA",
  "cinema.winShare.shareRoundCard": "Chia sẻ thẻ",
  "cinema.replay.shareVideo": "Chia sẻ video",
  "cinema.replay.shareVideoTitle": "Chia sẻ video ván",
  "cinema.replay.shareVideoSheetOpened": "Đã mở bảng chia sẻ kèm video.",
  "cinema.replay.shareVideoFailed": "Không thể chia sẻ video. Hãy thử lại.",
  "cinema.replay.shareSheetHint": "Thiết bị của bạn có thể gửi video này tới X từ bảng chia sẻ.",
  "cinema.replay.shareRoundTitle": "attn royale · Ván #{n}",
  "cinema.replay.shareRoundTable": "{amount} trên bàn.",
  "cinema.replay.shareRoundWin": "Ô của tôi thắng bàn {pool} · mang về {amount}.",
  "cinema.replay.shareRoundCardsOnly": "Ô {tile} thắng bàn {pool} · ô của tôi thua nhưng mang về {amount}.",
  "cinema.replay.shareRoundWinner": "Ô {tile} thắng bàn {pool}.",
  "cinema.share.shareVideo": "Chia sẻ video",
  "cinema.share.preparingOutput": "Đang chuẩn bị chia sẻ…",
  "cinema.share.cancelled": "Đã hủy chia sẻ.",
  "cinema.share.shareSheetHint": "Thiết bị của bạn có thể gửi video này tới X từ bảng chia sẻ.",
  "cinema.personalReveal.sectionAria": "Các thẻ bạn đã mở",
  "cinema.personalReveal.title": "THẺ BẠN ĐÃ MỞ",
  "cinema.personalReveal.progress.eyebrow": "MỞ THẺ ĐỒNG BỘ",
  "cinema.personalReveal.progress.title": "ĐANG MỞ THẺ",
  "cinema.personalReveal.progress.body": "Bàn chơi đang mở thẻ. Phần công bố chung sẽ tiếp tục khi giai đoạn này kết thúc.",
  "cinema.personalReveal.normal.label": "MỞ THẺ THƯỜNG",
  "cinema.personalReveal.normalHint": "Mặt sau của thẻ được hiển thị trước. Nhấp hoặc chạm để lật thẻ; thẻ bạn mở thuộc về bạn. Những thẻ còn úp sẽ tự động lật sau 5 giây.",
  "cinema.personalReveal.hardcore.label": "MỞ THẺ KHẮC NGHIỆT",
  "cinema.personalReveal.hardcoreHint": "Mặt sau của thẻ được hiển thị trước. Nhấp hoặc chạm để lật thẻ; quyền sở hữu được quyết định sau lượt rút. Những thẻ còn úp sẽ tự động lật sau 5 giây.",
  "cinema.personalReveal.yourCard": "THẺ CỦA BẠN",
  "cinema.personalReveal.youOpened": "BẠN ĐÃ MỞ",
  "cinema.personalReveal.otherCards": "THẺ KHÁC",
  "cinema.personalReveal.allOpen": "Tất cả thẻ đã được mở",
  "cinema.personalReveal.autoOpenIn": "Các thẻ còn lại sẽ tự động mở sau {n} giây",
  "cinema.personalReveal.revealCardAria": "Lật thẻ {n}",
  "cinema.personalReveal.revealedCardAria": "Thẻ {n} đã mở: {name}, {value}",
  "cinema.personalReveal.sort.group": "Thứ tự thẻ",
  "cinema.personalReveal.sort.pack": "Gói",
  "cinema.personalReveal.sort.packAria": "Sắp xếp theo giá pack, rẻ nhất trước",
  "cinema.personalReveal.sort.rarity": "Độ hiếm",
  "cinema.personalReveal.sort.revealFirst": "Chỉ có thể sắp xếp theo độ hiếm sau khi mở tất cả thẻ",
  "cinema.personalReveal.sort.bestAria": "Sắp xếp theo độ hiếm, cao nhất trước",
  "cinema.personalReveal.sort.worstAria": "Sắp xếp theo độ hiếm, thấp nhất trước",
  "cinema.personalReveal.sort.packStatus": "Thẻ được xếp theo giá pack, rẻ nhất trước",
  "cinema.personalReveal.sort.bestStatus": "Thẻ được xếp theo độ hiếm, cao nhất trước",
  "cinema.personalReveal.sort.worstStatus": "Thẻ được xếp theo độ hiếm, thấp nhất trước",
  "cinema.personalReveal.rarity": "Độ hiếm",
  "cinema.personalReveal.year": "Năm",
  "cinema.personalReveal.yearUnknown": "Không rõ năm",
  "cinema.personalReveal.grade": "Cấp",
  "cinema.personalReveal.ungraded": "Chưa chấm cấp",
  "cinema.personalReveal.pageNavigation": "Các trang thẻ",
  "cinema.personalReveal.previousPage": "Thẻ trước",
  "cinema.personalReveal.nextPage": "Thẻ tiếp theo",
  "cinema.personalReveal.pageStatus": "Trang {page} trên {pages}",
  "cinema.personalReveal.live.revealed": "Đã mở {name}",
  "cinema.personalReveal.live.all": "Đã mở toàn bộ {n} thẻ",
} as Record<string, string>;
