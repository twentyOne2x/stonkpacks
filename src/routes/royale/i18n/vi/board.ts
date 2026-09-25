// Vietnamese (Tiếng Việt): "board" segment. Machine-consistent quality pass
// (i18n epic, vi board segment), flagged for a later native-speaker
// editorial review. Same key set as en/board.ts. See royaleI18n.ts for the
// {token} interpolation convention and the "no em dash" rule.
//
// Segment: board. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx.
//
// Terminology (binding across every vi segment, see vi/core.ts's header for
// the full glossary): "vòng" for round, "quỹ" for the round's pool/pot,
// "ô" for tile, "người đặt cược" for backer(s), "người đặt cược lớn nhất"
// for the top backer, "đặt cược" for bet/bid/stake, "khóa" for lock,
// "lượt rút" for a card pull, "rút thăm" for the winner-selection draw,
// "tiền lẻ" for the loose change a tile pools before it forms a whole pack.
// The generic noun "pack(s)" keeps the English loanword "pack"/"packs"
// (owner rule: never "gói"); the five pack-tier brand names (Starter,
// Elite, Legendary, Grail, Mythic) stay English and are never inflected.
// Numbers and percentages keep the source formatting exactly as authored.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Người chơi và PnL tiền mặt",
  "board.playerScoreboard.title": "Người chơi",
  "board.playerScoreboard.open": "Thống kê và tắt tiếng",
  "board.playerScoreboard.pinnedHint": "Đã ghim · Esc để đóng",
  "board.playerScoreboard.holdHint": "Giữ Tab để xem nhanh · nhấp để ghim",
  "board.playerScoreboard.close": "Đóng bảng điểm người chơi",
  "board.playerScoreboard.windowAria": "Cửa sổ PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Tất cả",
  "board.playerScoreboard.partialHistory": "Lịch sử một phần. Bảng xếp hạng sử dụng khoảng tiền mặt đã quyết toán được lưu lại.",
  "board.playerScoreboard.statsUnavailable": "Lịch sử PnL không khả dụng ở đây. Các khoản cược hiện tại vẫn đang hoạt động.",
  "board.playerScoreboard.playerColumn": "Người chơi",
  "board.playerScoreboard.pnlColumn": "PnL tiền mặt",
  "board.playerScoreboard.voiceColumn": "Trò chuyện",
  "board.playerScoreboard.loading": "Đang tải người chơi…",
  "board.playerScoreboard.empty": "Chưa có ai đặt cược vào ô nào trong vòng này.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Ô {tiles}",
  "board.playerScoreboard.stake": "Tiền cược {amount}",
  "board.playerScoreboard.notAvailable": "Không khả dụng",
  "board.playerScoreboard.rounds": "{n} vòng",
  "board.playerScoreboard.youBadge": "Bạn",
  "board.playerScoreboard.mute": "Ẩn tin nhắn",
  "board.playerScoreboard.unmute": "Hiện tin nhắn",
  "board.playerScoreboard.muteAria": "Ẩn tin nhắn của {name} trong trò chuyện",
  "board.playerScoreboard.unmuteAria": "Hiện tin nhắn của {name} trong trò chuyện",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Bạn",
  "board.common.noWin": "không thắng",
  "board.common.roundSettled": "Vòng đã quyết toán",
  "board.common.youWon": "Bạn đã thắng {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "ĐÃ KHÓA",
  "board.tile.lockedStampSub": "hết giờ đặt cược",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: cược {bet} của bạn vượt quá số dư {balance}. Giảm mức cược hoặc nạp thêm tiền.",
  "board.tile.ariaBack": "Đặt cược {amount} vào {label}",
  "board.tile.ariaBackShortcutSuffix": ", phím tắt {shortcut}",
  "board.tile.ariaOddsChance": "{pct} cơ hội thắng",
  "board.tile.ariaBackers": "{count} người đặt cược",
  "board.tile.yourPortraitAlt": "Ảnh đại diện của bạn",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · chưa có pack",
  "board.tile.noStake": "Chưa cược",
  "board.tile.youOwn": "Bạn giữ {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Pack mở khi khóa vòng",
  "board.tile.resultOpened": "Đã mở · {amount} tiền thẻ",
  "board.tile.resultWinner": "THẮNG · {amount} tiền thẻ",
  "board.tile.resultLost": "Thua ở lượt rút thăm · {amount} tiền thẻ",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Đã mở",
  "board.tile.resultWinnerWord": "THẮNG",
  "board.tile.resultLostWord": "Thua ở lượt rút thăm",
  "board.tile.resultShortWon": "THẮNG",
  "board.tile.resultShortLost": "Thua",
  "board.tile.overBalance": "Vượt số dư",
  "board.tile.overBalanceTitle": "Cần {needed} · bạn có {have}. Giảm mức cược hoặc nạp thêm tiền.",
  "board.tile.overCap": "vượt giới hạn {amount} của bạn (cài đặt)",
  "board.tile.needHave": "Cần {needed} · bạn có {have}",
  "board.tile.clueExactCardOdds": "chính xác thẻ này · {pct} lượt rút",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Mức cược",
  "board.stakeControl.packMatchTitle": "Mỗi lần nhấp vào ô sẽ đặt trọn một pack {packName}.",
  "board.stakeControl.packMatchTag": "đặt 1 pack {packName} mỗi lần nhấp",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "Mỗi lần nhấp vào ô sẽ đặt trọn {n} pack {packName}.",
  "board.stakeControl.packMatchTitleOther": "Mỗi lần nhấp vào ô sẽ đặt trọn {n} pack {packName}.",
  "board.stakeControl.packMatchTagOne": "đặt {n} pack {packName} mỗi lần nhấp",
  "board.stakeControl.packMatchTagOther": "đặt {n} pack {packName} mỗi lần nhấp",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} pack {packName} mỗi lần nhấp",
  "board.stakeControl.bidPackGroupAria": "Đặt trọn một pack vào một ô",
  "board.stakeControl.bidPackTag": "Đặt một pack",
  "board.stakeControl.bidPackInfoTitle":
    "Một lần nhấp đặt trọn một pack còn niêm phong vào một ô. Pack đó luôn giữ nguyên là pack đó, không bao giờ gộp thành pack lớn hơn.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Chọn một loại pack và số lượng. Một lần nhấp đặt trọn chồng pack đó vào một ô, pack lớn hơn sẽ rút ra thẻ giá trị hơn. Phím số 1 đến 8 để chọn ô.",
  "board.stakeControl.bidPackInfoAria": "Đặt một pack nghĩa là gì?",
  "board.stakeControl.packSelectedTitle": "Đã chọn. Nhấp lại để quay về mức cược {amount}.",
  "board.stakeControl.packChipTitle": "Mỗi lần nhấp vào ô sẽ đặt một pack {packName} ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "Đã chọn. Mỗi lần nhấp vào ô sẽ đặt {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Đã chọn. Mỗi lần nhấp vào ô sẽ đặt {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Mỗi lần nhấp vào ô sẽ đặt {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Mỗi lần nhấp vào ô sẽ đặt {n} pack {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "VƯỢT SỐ DƯ",
  "board.stakeControl.overBalanceBody": "Cần nhiều hơn số dư {amount} của bạn.",
  "board.stakeControl.bidAmountTag": "Đặt một số tiền",
  "board.stakeControl.bidAmountInfoTitle":
    "Thêm bất kỳ số tiền nào vào một ô. Tiền lẻ sẽ lớn dần thành các pack lớn hơn khi vượt qua từng mốc giá pack.",
  "board.stakeControl.bidAmountInfoAria": "Đặt một số tiền nghĩa là gì?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Thêm vào mức cược của một ô",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "Đặt một số tiền vào một ô",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "Số pack đặt mỗi lần nhấp",
  "board.stakeControl.packCountDecAria": "Đặt ít pack hơn mỗi lần nhấp",
  "board.stakeControl.packCountIncAria": "Đặt nhiều pack hơn mỗi lần nhấp",
  "board.stakeControl.packCountValueTitleOne": "{n} pack của bậc đang chọn mỗi lần nhấp",
  "board.stakeControl.packCountValueTitleOther": "{n} pack của bậc đang chọn mỗi lần nhấp",
  "board.stakeControl.incrementTitle": "Tăng mức cược đã chọn lên {amount}",
  "board.stakeControl.customAriaLabel": "Mức cược tùy chỉnh bằng USDC, xác nhận khi nhấn Enter hoặc khi nhấp ra ngoài",
  "board.stakeControl.customOverBalanceTitle": "Vượt quá số dư {amount} của bạn. Nạp thêm tiền hoặc giảm mức cược.",
  "board.stakeControl.customTitle": "Gõ một số tiền bất kỳ, nhấn Enter hoặc nhấp ra ngoài để xác nhận",
  "board.stakeControl.resetTitle": "Đặt lại mức cược đã chọn về {amount}",
  "board.stakeControl.reset": "Đặt lại",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Chiến lược cược tự động, kích hoạt khi vòng đóng",
  "board.betRail.strategyArmedTip": "Đã kích hoạt, thực thi sau {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, đã kích hoạt, thực thi sau {seconds} giây",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, đã kích hoạt, thực thi sau {seconds} giây. Nhấp để hủy kích hoạt.",
  "board.betRail.strategyAriaClickArm": "{name}. Nhấp để kích hoạt.",
  "board.betRail.moreStrategiesAria": "Thêm chiến lược cược tự động",
  "board.betRail.moreStrategiesTitle": "Thêm chiến lược",
  "board.betRail.cancelArmedAria": "Hủy cược tự động đã kích hoạt",
  "board.betRail.autoBetCancelled": "Đã hủy cược tự động.",
  "board.betRail.roundLockedSkip": "Vòng đã khóa trước khi cược tự động kịp thực thi.",
  "board.betRail.notEnoughBalanceSkip": "Không đủ số dư, cược tự động đã không thực thi.",
  "board.betRail.firedAtClose": "{name} đã thực thi khi vòng đóng.",
  "board.betRail.firedAtClosePartial": "{name} đã thực thi khi vòng đóng: {covered}/{total} ô.",
  "board.betRail.strategyGuideAria": "Hướng dẫn chiến lược cược tự động",
  "board.betRail.strategyGuideTitle": "Hướng dẫn chiến lược",
  "board.betRail.autoBetEyebrow": "Cược tự động",
  "board.betRail.firesInSeconds": "thực thi sau {seconds}s",
  "board.betRail.strategiesDialogAria": "Các chiến lược cược tự động",
  "board.betRail.closeStrategiesAria": "Đóng các chiến lược cược tự động",
  "board.betRail.strategiesHeading": "Các chiến lược cược tự động",
  "board.betRail.strategiesIntro":
    "Chạm vào một chiến lược để kích hoạt với mức cược đã chọn ({amount}). Nó sẽ thực thi ngay trước khi vòng khóa, xếp hạng theo số tiền đang có trên mỗi ô tại thời điểm đó, tín hiệu từ đám đông.",
  "board.betRail.contrarianHeading": "Lựa chọn ngược dòng",
  "board.betRail.contrarianIntro":
    "Khi mọi người đổ xô vào ô thấp nhất, nó trở nên đông đúc, nên ô thấp thứ nhì có thể trả tốt hơn. Các lựa chọn này nằm ngoài thanh chính để giữ giao diện gọn gàng.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Tài khoản và mức cược của bạn",
  "board.betRail.balance": "Số dư",
  "board.betRail.activeStakes": "Cược đang hoạt động",
  "board.betRail.collection": "Bộ sưu tập",
  "board.betRail.cardCountViewAllSingular": "{count} THẺ · XEM TẤT CẢ",
  "board.betRail.cardCountViewAllPlural": "{count} THẺ · XEM TẤT CẢ",
  "board.betRail.moreCount": "+{count} NỮA",
  "board.betRail.noCardsYet": "Chưa có thẻ nào trong bộ sưu tập, hãy thắng một ô và giữ lấy thẻ của nó.",
  "board.betRail.lastResult": "Kết quả gần nhất",
  "board.betRail.eachClickAdds": "Mỗi lần nhấp thêm {amount}",
  "board.betRail.depositToPlay": "Nạp tiền để chơi",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "Cần {unit}, bạn có {balance}",
  "board.betRail.allTilesPartialCover": "{name}, đủ cho {covered}/8 ô ở mức {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "Số dư",
  "board.betRail.dockStakes": "Cược",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Vòng tiếp theo sau {seconds} giây",
  "board.core.nextRoundLine": "Vòng tiếp theo sau {secs}",
  "board.core.playersDecidingAria": "{decided}/{total} người chơi khác đã quyết định",
  "board.core.playersDecidingLine": "Người chơi đang quyết định {ratio}",
  "board.core.pastRoundResultsAria": "Kết quả các vòng trước",
  "board.core.pastRounds": "Các vòng trước",
  "board.core.winsAmount": "{label} thắng {amount}",
  "board.core.youLost": "Bạn đã thua!",
  "board.core.didNotStake": "Bạn chưa đặt cược ở vòng này",
  "board.core.keepCard": "Giữ thẻ ({amount})",
  "board.core.sellAmount": "Bán {amount}",
  "board.core.decideHint": "Quyết định ngay hoặc trong vòng tiếp theo",
  "board.core.roundResultLink": "Kết quả Vòng #{roundId}",
  "board.core.fullReceiptHint": "Biên nhận đầy đủ → Kết quả vòng",
  "board.core.splitReceiptHint": "Phần chia · biên nhận → Kết quả vòng",
  "board.core.eyebrowDrawing": "Đang rút thăm người thắng",
  "board.core.eyebrowPullsIn": "Đã có kết quả rút",
  "board.core.eyebrowLocked": "Đã khóa",
  "board.core.headlineDrawing": "Một vé sẽ quyết định tất cả",
  "board.core.headlinePullsIn": "Mọi pack đã được mở",
  "board.core.headlineRoundLocked": "Vòng đã khóa",
  "board.core.headlinePacksOpening": "Đang mở pack…",
  "board.core.subDrawing": "rút thăm có trọng số, có thể kiểm chứng",
  "board.core.subPullsIn": "sắp rút thăm chọn người thắng",
  "board.core.subIntro": "{count} {noun} đang vào cuộc",
  "board.core.subOpening": "{count} {noun} đang mở trên bàn chơi",
  "board.core.pool": "Quỹ",
  "board.core.totalPool": "Tổng quỹ",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "Vòng đang mở",
  "board.core.clockLockedRevealing": "Đã khóa · đang mở thưởng",
  "board.core.clockSettled": "Đã quyết toán",
  "board.core.clockAriaLabel": "{label}, {seconds} giây",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Thẻ tiêu chuẩn, người đặt cược lớn nhất giữ hoặc bán lại, chia theo tỷ lệ góp.",
  "board.settlement.dispositionSellBackSplit": "Quy tắc Grail: mặc định bán lại, USDC được chia đều khắp ô.",
  "board.settlement.dispositionTopBackerKeeps": "Quy tắc Grail: người đặt cược lớn nhất giữ thẻ và trả phần chia cho những người còn lại.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s để quyết định",
  "board.settlement.panelAria": "Chi tiết ô và quyết toán",
  "board.settlement.collapsePanelAria": "Thu gọn bảng",
  "board.settlement.expandPanelAria": "Mở rộng bảng",
  "board.settlement.roundResultsLink": "Kết quả vòng",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Bảng vòng chơi",
  "board.settlement.clickTileToBack": "Phần thắng sẽ hiện ở đây. Nhấp vào bất kỳ ô nào để đặt cược {amount} vào ô đó.",
  "board.settlement.lastResultLine": "Kết quả gần nhất · Vòng #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "bạn đã thắng {amount}",
  "board.settlement.view": "xem",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Ô thua · lý do thua",
  "board.settlement.losingTileTitle": "{label} · {amount} trên ô",
  "board.settlement.loserWhy":
    "Đã mở {cardName} ({amount}), lượt rút thăm rơi vào {winnerLabel}. {pct} số vé không nhận được gì{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", kể cả {amount} của bạn.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Ô này trống, không có cược, không có vé rút thăm.",
  "board.settlement.backToSettlement": "Quay lại quyết toán · {winnerLabel} đã thắng",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · thẻ {index}/{total} · {amount} trên ô",
  "board.settlement.pullCaptionSingle": "{label} · {amount} trên ô",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Đang mở pack",
  "board.settlement.revealOpenedTitle": "{label} đã mở {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} tỷ lệ thắng trọn quỹ {poolAmount}. Đang rút thăm chọn người thắng.",
  "board.settlement.revealEmpty": "Pack đang lần lượt mở ra trên bàn chơi, lượt rút thăm người thắng sắp diễn ra.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Kết quả gần nhất · Vòng #{roundId}",
  "board.settlement.tileTakesTable": "{label} thắng trọn bàn với {amount}",
  "board.settlement.whyWon": "Được chọn bởi vé rút thăm có trọng số, có thể kiểm chứng, {label} nắm giữ {pct}% quỹ tại thời điểm khóa.",
  "board.settlement.lostNoStakeIn": "Bạn đã thua, không có cược trong {label}",
  "board.settlement.theWinnerFallback": "người thắng",
  "board.settlement.wonNoStake": "{label} đã thắng · bạn không có cược",
  "board.settlement.aTileFallback": "Một ô",
  "board.settlement.lossNoteWithStake": "{amount} của bạn nằm trên các ô khác, di chuột vào một ô để xem diễn biến.",
  "board.settlement.lossNoteNone": "Bạn chưa đặt cược vào ô nào ở vòng này.",
  "board.settlement.topCardOfRound": "Thẻ giá trị nhất vòng · {label}",
  "board.settlement.keepCardTo": "Giữ thẻ ({amount}) → bộ sưu tập",
  "board.settlement.sellBackFor": "Bán lại với giá {amount}",
  "board.settlement.continueNextRound": "Tiếp tục sang vòng kế tiếp",
  "board.settlement.continue": "Tiếp tục",
  "board.settlement.keepSellHint":
    "Giữ = thẻ vào bộ sưu tập · bán = nhận {amount} ngay ({pct}% giá trị thẻ, giá mua lại CC của pack này) · {noAction}",
  "board.settlement.noActionKept": "không thao tác = thẻ sẽ được giữ lại cho bạn.",
  "board.settlement.noActionAutoSell": "không thao tác = tự động bán khi vòng tiếp theo kết thúc.",
  "board.settlement.revealOnlyNote":
    "Trong bản canary này, các ô thua chỉ để xem, lượt rút của chúng quay về kho. Chỉ thẻ của ô thắng mới được chi trả.",
  "board.settlement.payoutSplit": "Phần chia tiền thắng",
  "board.settlement.poolChaseFeedLine": "Quỹ {pool} · nạp Cuộc Săn Đuổi {feed}",
  "board.settlement.chaseAddSuffix": " · SĂN ĐUỔI +{amount}",
  "board.settlement.physicalCardArrow": "Thẻ vật lý →",
  "board.settlement.grailSecuredSuffix": " (đã giữ Grail)",
  "board.settlement.grailSoldBack": "Grail đã bán lại ({amount}) → chia USDC ở trên.",
  "board.settlement.cardAssignmentHead": "Phân chia thẻ",
  "board.settlement.cardLabel": "thẻ {amount}",
  "board.settlement.soldToVault": "bán vào kho · tiền thu về nằm trong phần chia",
  "board.settlement.decisionTopBackerSuffix": " (người đặt cược lớn nhất · giữ hoặc bán)",
  "board.settlement.offTheirUsdcSuffix": " · trừ {amount} USDC của họ",
  "board.settlement.cardsSpreadNote":
    "Thẻ được chia cho càng nhiều người đặt cược càng tốt, một thẻ được gán sẽ trừ giá mua lại CC của nó (85 đến 93% tùy pack) từ USDC của người đó (cùng giá trị tiền mặt như khi bán, họ vẫn giữ phần tăng giá). Chỉ những thẻ không ai nhận mới được bán vào kho.",
  "board.settlement.chaseHitLabel": "CUỘC SĂN ĐUỔI ĐÃ KÍCH HOẠT!",
  "board.settlement.chasePaidLine": "{amount} đã được trả vào phần chia này.",
  "board.settlement.chaseMissLabel": "CUỘC SĂN ĐUỔI CHƯA KÍCH HOẠT.",
  "board.settlement.chaseNowLine": "Cuộc Săn Đuổi hiện tại: {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Kiểm chứng lượt rút thăm",
  "board.settlement.verifyDrawSub": "lượt rút thăm có thể kiểm chứng · xem biên nhận rút thăm",
  "board.settlement.roundIdLabel": "mã vòng",
  "board.settlement.winningDrawLabel": "kết quả rút thăm thắng cuộc",
  "board.settlement.drawSeedLabel": "hạt giống rút thăm",
  "board.settlement.proofIdLabel": "mã bằng chứng",
  "board.settlement.ticketOfCount": "#{index}/{count}",
  "board.settlement.verifying": "Đang kiểm chứng…",
  "board.settlement.recheckDraw": "Kiểm tra lại lượt rút thăm",
  "board.settlement.verifierLink": "Công cụ kiểm chứng ↗",
  "board.settlement.verifiedOk": "✓ Đã kiểm chứng, người thắng này khớp với hạt giống rút thăm đã công bố.",
  "board.settlement.verifiedBad": "✗ Lượt rút thăm này không khớp với hạt giống của nó, đừng tin kết quả này.",
  "board.settlement.everyRoundNote": "Mỗi vòng chọn ra một người thắng từ một hạt giống đã công bố mà bạn có thể kiểm tra lại.",
  "board.settlement.noPacksNote": "Không có pack nào được đặt cược ở vòng này, không có gì để rút thăm.",
  "board.settlement.settledHoverHint": "Đã quyết toán, di chuột vào một ô để xem chi tiết.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Cược quá lớn so với số dư của bạn",
  "board.betTooBig.dismissAria": "Bỏ qua",
  "board.betTooBig.gotIt": "Đã hiểu",
  "board.betTooBig.body": "Đặt cược vào {slotLabel} cần {needed}, trong khi bạn có {held}. Bạn còn thiếu {shortfall}.",
  "board.betTooBig.deposit": "Nạp {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Người chơi, xếp theo tổng mức cược",
  "board.wagerLadder.title": "Người chơi",
  "board.wagerLadder.countZero": "Chưa có cược nào",
  "board.wagerLadder.countOther": "{n} trong vòng này · theo tổng mức cược",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "Thu gọn bảng người chơi",
  "board.wagerLadder.lastRoundAria": "Xem kết quả vòng trước, vòng #{n}",
  "board.wagerLadder.lastRoundLabel": "Xem kết quả vòng trước",
  "board.wagerLadder.empty": "Chưa có ai đặt cược vào ô nào ở vòng này.",
  "board.wagerLadder.leaderAria": "Dẫn đầu",
  "board.wagerLadder.openProfileTitle": "Mở hồ sơ của {name} trong tab mới",
  "board.wagerLadder.miniGridTotal": "tổng {amount}",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Các ô mà {name} đã đặt cược",
  "board.wagerLadder.miniGridTilesAriaYou": "Các ô bạn đã đặt cược",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "Bán thẻ trong kho để tài trợ cho cược này",
  "board.bidFund.eyebrow": "HẾT USDC",
  "board.bidFund.titleOne": "Bán thẻ của bạn để đủ tiền đặt cược này?",
  "board.bidFund.titleMany": "Bán các thẻ này để đủ tiền đặt cược này?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "Bán {cards} thu được {buyback}, đủ để đặt cược {amount} vào {tile}.",
  "board.bidFund.bodyCardsMany": "các thẻ này",
  "board.bidFund.note":
    "Bạn còn thiếu {amount}. Thẻ được bán theo giá mua lại CC của pack (85 đến 93%). Thao tác này không thể hoàn tác.",
  "board.bidFund.keepCards": "Giữ thẻ",
  "board.bidFund.sellAndBid": "Bán và đặt cược {amount}",
  "board.bidFund.autoSellSwitch": "Tự động bán phần thắng của tôi lấy USDC",
  "board.bidFund.autoSellNoteOn":
    "Mọi phần thắng sẽ được quy đổi theo giá mua lại ngay khi về tay. Không còn hỏi giữ hay bán. Grail không bao giờ bị tự động bán. Có thể đổi lại bất cứ lúc nào trong Cài đặt.",
  "board.bidFund.autoSellNoteOff":
    "Bật tùy chọn này và mọi thẻ bạn thắng sẽ được quy đổi thành USDC theo giá mua lại, không cần hỏi. Grail không bao giờ bị tự động bán. Có thể đổi lại bất cứ lúc nào trong Cài đặt.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "Đặt cược bằng phím số?",
  "board.hotkeys.optInBody":
    "Nhấn một phím sẽ đặt cược ngay vào ô đó theo mức cược hiện tại. Chưa có cược nào được đặt vừa rồi.",
  "board.hotkeys.notNow": "Để sau",
  "board.hotkeys.enableKeys": "Bật phím",
  "board.hotkeys.turnOff": "Tắt",
  "board.hotkeys.turnOffTitle": "Các phím sẽ tắt cho tới khi bạn bật lại trong Cài đặt.",
  "board.hotkeys.changeKeys": "Đổi phím",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "Ô đang mở",
  "board.boardV1.onTile": "trên ô",
  "board.boardV1.changeAmount": "tiền lẻ {amount}",
  "board.boardV1.oddsSuffix": "{pct} tỷ lệ",
  "board.boardV1.openedOdds": "Đã mở · {pct} tỷ lệ",
  "board.boardV1.emptyNeverInDraw": "Trống · không tham gia rút thăm",
  "board.boardV1.winnerYourShare": "THẮNG · phần chia của bạn được trả",
  "board.boardV1.winnerNoStake": "THẮNG · bạn không có cược",
  "board.boardV1.lostOdds": "Thua ở lượt rút thăm · {pct} tỷ lệ",
  "board.boardV1.tileClickTitle": "Nhấp vào bất kỳ đâu để đặt cược {amount} vào {label}",
  "board.boardV1.youAmount": "Bạn {amount}",
  "board.boardV1.youNone": "Bạn -",
  "board.boardV1.pctOfTile": "{pct} của ô",
  "board.boardV1.noStakeYet": "chưa có cược",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "ĐỈNH · ",
  "board.boardV1.backerPopStake": "{amount} đã cược · {pct} của ô",
  "board.boardV1.statusWaitingDraw": "Đang chờ rút thăm…",
  "board.boardV1.statusWonSplit": "Thắng {amount} từ phần chia",
  "board.boardV1.statusOnWinningTile": "Trên ô thắng cuộc",
  "board.boardV1.statusNoPayout": "Không có tiền thắng ở vòng này",
  "board.boardV1.statusYourStake": "Cược hiện tại của bạn",
  "board.boardV1.statusBacking": "Đang đặt cược vào ô này",
  "board.boardV1.backerCount.one": "{n} người đặt cược",
  "board.boardV1.backerCount.other": "{n} người đặt cược",
  "board.boardV1.noBackersYet": "Chưa có người đặt cược",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "Đặt cược {amount}",
  "board.boardV1.backBtnTitle": "Đặt cược {amount} USDC vào {label}",
  "board.boardV1.evolveTitle": "Đặt thêm đúng {amount} vào {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} trên ô",
  "board.boardV1.opensAs": "Sẽ mở thành · {summary}",
  "board.boardV1.noPacksYet": "Chưa có pack nào, đặt cược để tài trợ pack đầu tiên",
  "board.boardV1.whyOpenedDrawing":
    "Đã mở {cardName} ({amount}) với tỷ lệ {pct}, đang rút thăm chọn người thắng.",
  "board.boardV1.whyWon":
    "Đã thắng lượt rút thăm có trọng số với tỷ lệ {pct}. Đã mở {cardName} ({amount}); quỹ được chia theo tỷ lệ góp cho những người đặt cược.",
  "board.boardV1.whyLost":
    "Đã thua lượt rút thăm có trọng số, tỷ lệ {pct} ({amount} trong quỹ {poolAmount}). Vẫn đã mở {cardName} ({cardAmount}), nhưng chỉ ô thắng mới được trả.",
  "board.boardV1.whyEmpty": "Ô trống, không có cược, không có vé rút thăm.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " Cược của bạn ở đây: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Bạn không có cược ở đây.",
  "board.boardV1.ifWins": "Nếu ô này thắng: bạn sẽ nhận khoảng {amount} trong quỹ {poolAmount}.",
  "board.boardV1.clickToBack": "Nhấp để đặt cược theo mức đã chọn và mở pack đầu tiên khi khóa vòng.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "Hạng {rank}, {name}, đã cược {wagered}, lãi ròng {net}, tỷ lệ thắng {pct} phần trăm",
  "board.leaderboard.youTag": "BẠN",
  "board.leaderboard.youRankTag": "BẠN · #{n}",
  "board.leaderboard.statWagered": "ĐÃ CƯỢC",
  "board.leaderboard.statNetPl": "LÃI/LỖ RÒNG",
  "board.leaderboard.statWinRate": "TỶ LỆ THẮNG",
  "board.leaderboard.statRounds": "SỐ VÒNG",
  "board.leaderboard.statPoolShare": "PHẦN QUỸ",
  "board.leaderboard.statFirstSeen": "THAM GIA TỪ",
  "board.leaderboard.statBiggestPull": "LƯỢT RÚT LỚN NHẤT",
  "board.leaderboard.shareOfToday": "trong tổng cược hôm nay",
  "board.leaderboard.shareOfAllTime": "trong tổng cược mọi thời điểm",
  "board.leaderboard.noneYet": "CHƯA CÓ",
  "board.leaderboard.viewFullProfile": "Xem hồ sơ đầy đủ",
  "board.leaderboard.live": "TRỰC TIẾP",
  "board.leaderboard.fullRankings": "Bảng xếp hạng đầy đủ",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} người chơi",
  "board.leaderboard.playerCount.other": "{n} người chơi",
  "board.leaderboard.roundCount.one": "{n} vòng",
  "board.leaderboard.roundCount.other": "{n} vòng",
  "board.leaderboard.colPlayer": "Người chơi",
  "board.leaderboard.colWagered": "Đã cược",
  "board.leaderboard.colNet": "Lãi/lỗ ròng",
  "board.leaderboard.colWin": "Thắng",
  "board.leaderboard.colBiggestPull": "Lượt rút lớn nhất",
  "board.leaderboard.sortGroupAria": "Sắp xếp bảng xếp hạng",
  "board.leaderboard.sortBy": "Sắp xếp theo {col}",
  "board.leaderboard.podiumNet": "{amount} ròng",
  "board.leaderboard.podiumTopPull": "Lượt rút đỉnh",
  "board.leaderboard.fullStandings": "Bảng xếp hạng đầy đủ · {n} người cược",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} pack {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "Ảnh hồ sơ X của {handle}",
  "board.connectX.connectedTitle": "Đã kết nối qua X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "Vị trí {packName} (chưa có trên ô này)",
  "board.packChips.fixedChipTitle": "{n} x {packName} với giá {amount} mỗi cái",
  "board.packChips.fixedChipTitleTotalSuffix": " - tổng {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Được hình thành từ tiền lẻ gộp của ô, không ai đặt trực tiếp pack này",
  "board.packChips.pooledSome": "{n}/{total} được hình thành từ tiền lẻ gộp của ô",
  "board.packChips.bidWhole": "Đặt trọn một pack",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Cũng có trên ô này: {list}",
  "board.packChips.morePacks.one": "{n} pack nữa",
  "board.packChips.morePacks.other": "{n} pack nữa",
  "board.packChips.morePacksWithList.one": "{n} pack nữa: {list}",
  "board.packChips.morePacksWithList.other": "{n} pack nữa: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Cược trực tiếp {bids} · tiền lẻ {pool}",
  "board.tile.splitAllBids": "Toàn bộ {bids} được đặt dưới dạng pack trọn vẹn",
  "board.tile.splitAllPool": "Toàn bộ {pool} là tiền lẻ gộp của ô này",
  "board.tile.splitPoolNote": "Các pack viền đứt nét được hình thành từ tiền lẻ gộp, không ai đặt cược trực tiếp.",
  "board.tile.evolveLooseTitle": "{loose} tiền lẻ trên ô này sẽ tiến hóa thành pack {tier} khi đạt {target}",
  "board.tile.evolveNoLooseTitle":
    "Chưa có tiền lẻ nào trên ô này. Tiền lẻ sẽ tiến hóa thành pack {tier} khi đạt {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name}, đủ cho {covered}/{total} ô ở mức {unit}",
  "board.betRail.allTilesPlanFull": "Khi vòng đóng, nó sẽ đặt cược vào cả {total} ô ở mức {unit}. Tổng cộng {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Khi vòng đóng, nó sẽ đặt cược vào {covered}/{total} ô ở mức {unit}. Số dư {balance} của bạn đủ cho {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Khi vòng đóng, nó sẽ đặt cược vào {covered}/{total} ô ở mức {unit}. Số dư {balance} của bạn đủ cho {spend}.",
  "board.betRail.allTilesPlanNone": "Số dư {balance} của bạn không đủ cho một cược {unit}, nên sẽ không có ô nào được đặt cược.",
  "board.betRail.allTilesShortHistory.one":
    "Cược tự động vào mọi ô cần {needed} cho {tiles} ô ở mức {unit}. Bạn có {balance}, nên nó đã đặt cược {covered} ô.",
  "board.betRail.allTilesShortHistory.other":
    "Cược tự động vào mọi ô cần {needed} cho {tiles} ô ở mức {unit}. Bạn có {balance}, nên nó đã đặt cược {covered} ô.",
  "board.betRail.allTilesNoneHistory":
    "Cược tự động vào mọi ô cần {needed} cho {tiles} ô ở mức {unit}. Bạn có {balance}, nên không có ô nào được đặt cược.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Khi vòng đóng",
  "board.betRail.planTotal": "Tổng cộng",
  "board.betRail.planMathFull": "{total} ô × {amount}",
  "board.betRail.planMathShort": "{covered} trong {total} ô × {amount}",
  "board.betRail.planPerTile": "{unit} mỗi ô",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all ten locales (a Japanese board rendered "Top | Bottom
  // | All"). The map now reads each of these through a t() getter at property
  // access. Six keys x five strategies; `glyph` is a symbol, not copy.
  //   .label     the narrow rail chip caption (3 to 6 chars in en, HARD width
  //              budget: it sits three-across in a ~250px rail)
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "Cao",
  "board.strategy.highest.name": "Kích hoạt: đặt cược vào ô cao nhất khi vòng đóng",
  "board.strategy.highest.detail":
    "Kích hoạt cược của bạn vào ô đang giữ nhiều tiền nhất, được xử lý ngay trước khi vòng đóng.",
  "board.strategy.highest.rowTitle": "Ô cao nhất",
  "board.strategy.highest.closeLine": "đặt cược vào ô lớn nhất khi vòng đóng",
  "board.strategy.highest.gridLine": "nhiều tiền nhất khi đóng",

  "board.strategy.lowest.label": "Thấp",
  "board.strategy.lowest.name": "Kích hoạt: đặt cược vào ô thấp nhất khi vòng đóng",
  "board.strategy.lowest.detail":
    "Kích hoạt cược của bạn vào ô ít người nhất, được xử lý ngay trước khi vòng đóng. Nếu ai cũng đổ vào ô thấp nhất, nó sẽ không còn là ô thấp nhất vào lúc đó nữa.",
  "board.strategy.lowest.rowTitle": "Ô thấp nhất",
  "board.strategy.lowest.closeLine": "đặt cược vào ô nhỏ nhất khi vòng đóng",
  "board.strategy.lowest.gridLine": "ít tiền nhất khi đóng",

  "board.strategy.secondHighest.label": "Cao nhì",
  "board.strategy.secondHighest.name": "Kích hoạt: đặt cược vào ô cao thứ nhì khi vòng đóng",
  "board.strategy.secondHighest.detail":
    "Kích hoạt cược của bạn ngay dưới ô dẫn đầu một bậc, được xử lý ngay trước khi vòng đóng.",
  "board.strategy.secondHighest.rowTitle": "Ô cao thứ nhì",
  "board.strategy.secondHighest.closeLine": "đặt cược vào ô ngay dưới ô dẫn đầu khi vòng đóng",
  "board.strategy.secondHighest.gridLine": "dưới ô dẫn đầu một bậc",

  "board.strategy.secondLowest.label": "Thấp nhì",
  "board.strategy.secondLowest.name": "Kích hoạt: đặt cược vào ô thấp thứ nhì khi vòng đóng",
  "board.strategy.secondLowest.detail":
    "Lựa chọn theo lý thuyết đám đông: khi mọi người đổ xô vào ô thấp nhất, nó trở nên đông đúc, nên ô thấp thứ nhì có thể trả tốt hơn. Kích hoạt ngay, xử lý ngay trước khi vòng đóng.",
  "board.strategy.secondLowest.rowTitle": "Ô thấp thứ nhì",
  "board.strategy.secondLowest.closeLine": "đặt cược vào ô ngay trên đáy đông đúc khi vòng đóng",
  "board.strategy.secondLowest.gridLine": "trên đáy một bậc",

  "board.strategy.allTiles.label": "Tất cả",
  "board.strategy.allTiles.name": "Kích hoạt: đặt cược vào mọi ô khi vòng đóng",
  "board.strategy.allTiles.detail":
    "Kích hoạt cược của bạn vào mọi ô đủ điều kiện, được xử lý ngay trước khi vòng đóng. Tổng chi = mức cược của bạn x số ô tại thời điểm đó.",
  "board.strategy.allTiles.rowTitle": "Mọi ô",
  "board.strategy.allTiles.closeLine": "rải cược của bạn khi vòng đóng",
  "board.strategy.allTiles.gridLine": "cược của bạn trên mọi ô",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "Chạm lại: {unit}",
  "board.tile.confirmClickAgain": "Nhấp lại: {unit}",
  "board.tile.betOffNotice": "Đặt cược đang tắt trong cài đặt",
  "board.stakeControl.pickPackHint": "Chọn một pack để cược",
  "board.stakeControl.emptyStakeLead": "Chọn một pack",
  "board.stakeControl.emptyStakeHint": "Đó là tiền cược của bạn",
  "gear.betInput.label": "Cách đặt cược",
  "gear.betInput.hint":
    "Cách một lần chạm vào ô (và phím số của nó) đặt cược của bạn. Chạm đôi yêu cầu một lần chạm xác nhận trước, mặc định cho màn hình cảm ứng. Tắt là chế độ xem: không gì có thể đặt cược.",
  "gear.betInput.optionSingle": "Chạm một lần",
  "gear.betInput.optionDouble": "Chạm hai lần",
  "gear.betInput.optionOff": "Tắt",
  "gear.cardOpen.label": "Mở thẻ",
  "gear.cardOpen.hint":
    "Chạm đôi yêu cầu một lần chạm xác nhận trước khi mặt thẻ mở trang của nó, mặc định cho màn hình cảm ứng.",
} as Record<string, string>;
