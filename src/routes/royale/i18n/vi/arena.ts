// Vietnamese (Tiếng Việt): "arena" segment, every user-visible string from
// pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the rail,
// the wheel stage + leader-line callouts, the clock, the snipe tray, the
// double-bid opt-in dialog, and the lock->reveal cinema's three beats).
// Machine-consistent quality pass (i18n epic, vi arena segment), flagged for
// a later native-speaker editorial review.
//
// Terminology (binding across every vi segment, see vi/core.ts's header for
// the full glossary): "Bạn" for You, "thẻ" for card(s), "Cuộc Săn Đuổi" for
// the Chase, "đã kích hoạt" / "kích hoạt" for armed/arm, applied here to the
// arena's own "snipe" mechanic (a late, closing-moment entry) as "cược
// chốt" (a closing bet).
export default {
  "arena.you": "BẠN",
  "arena.youAvatarLetter": "B",
  "arena.common.card": "thẻ",
  "arena.common.cards": "thẻ",
  "arena.matchLabel": "TRẬN #{n}",
  "arena.pageTitle": "Đấu trường thẻ",
  "arena.backToBoard": "← Quay lại bàn chơi",

  "arena.rail.ariaLabel": "Bộ sưu tập của bạn",
  "arena.rail.heading": "BỘ SƯU TẬP CỦA BẠN",
  "arena.rail.practiceNote": "Bộ thẻ luyện tập. Thắng các vòng trên bàn chơi để bổ sung thẻ của riêng bạn vào đây.",
  "arena.rail.emptyNote": "Không có thẻ trong tay. Thắng quỹ để nhận lại phần của bạn.",
  "arena.rail.enterWheel": "VÀO VÒNG QUAY",
  "arena.rail.armSnipe": "KÍCH HOẠT CƯỢC CHỐT",
  "arena.rail.hint": "Nhấp đúp vào một thẻ để đặt cược thẻ đó. Hoặc chọn thẻ rồi nhấn VÀO VÒNG QUAY. Phím cách để chọn, phím A để kích hoạt cược chốt.",

  "arena.railCard.armedSuffix": "Đã kích hoạt cược chốt.",
  "arena.railCard.hint": "Phím cách để chọn, phím A để kích hoạt cược chốt. Nhấp đúp để đặt cược vào đấu trường.",
  "arena.railCard.armedTag": "ĐÃ KÍCH HOẠT",

  "arena.snipe.trayHeading": "ĐÃ KÍCH HOẠT CƯỢC CHỐT",
  "arena.snipe.disarm": "HỦY KÍCH HOẠT",
  "arena.snipe.firesAt": "Kích hoạt lúc còn 2 giây",
  "arena.snipe.carries": "Chuyển sang trận tiếp theo",

  "arena.board.sectionAriaLabel": "Vòng quay đấu trường",
  "arena.board.noCap": "Không giới hạn số thẻ. Chỉ đồng hồ mới khóa trận.",
  "arena.board.wheelDecides": "Vòng quay quyết định",
  "arena.board.nextMatchLabel": "Trận tiếp theo sau",
  "arena.board.potLabel": "QUỸ",
  "arena.board.wheelAriaEnter": "Đưa {count} {cardWord} đã chọn vào vòng quay",
  "arena.board.wheelAriaIdle": "Vòng quay. Chọn thẻ từ bộ sưu tập của bạn để đưa chúng vào.",
  "arena.board.youWin": "BẠN THẮNG",
  "arena.board.nameWins": "{name} THẮNG",
  "arena.board.emptyWheelNote": "Vòng quay đang mở. Đặt cược bằng thẻ, không phải tiền mặt: phần giá trị quyết định cung và tỷ lệ thắng của bạn. Cuộc Săn Đuổi nhận 0%. Giao thức áp dụng quy tắc phí 7% bằng thẻ nguyên; người thắng nhận tất cả thẻ còn lại.",
  "arena.board.tableHint": "Các thẻ bạn đưa vào sẽ hiện trên vòng quay theo phần giá trị của bạn. Cung của bạn chính là tỷ lệ thắng.",
  "arena.board.resultsLink": "Xem kết quả vòng trước →",

  "arena.clock.locked": "ĐÃ KHÓA",
  "arena.clock.settled": "ĐÃ QUYẾT TOÁN",
  "arena.clock.locksIn": "KHÓA SAU",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Đóng màn mở thưởng",
  "arena.cinema.closeTitle": "Đóng (Esc)",
  "arena.cinema.beatCopy.contestants": "CÁC ĐẤU THỦ",
  "arena.cinema.beatCopy.spin": "VÒNG QUAY",
  "arena.cinema.beatCopy.settle": "QUYẾT TOÁN",
  "arena.cinema.beatCopyShort.contestants": "NGƯỜI CHƠI",
  "arena.cinema.beatCopyShort.spin": "QUAY",
  "arena.cinema.beatCopyShort.settle": "QUYẾT TOÁN",
  "arena.cinema.contestantsAriaLabel": "Các đấu thủ",
  "arena.cinema.contestantsHeadline": "CÁC ĐẤU THỦ",
  "arena.cinema.oddsToWin": "{pct}% ĐỂ THẮNG",
  "arena.cinema.hintContestants": "Vòng quay quyết định. Nhấp để quay ngay.",
  "arena.cinema.spinAriaLabel": "Vòng quay đang quay",
  "arena.cinema.lockedOn": "ĐÃ KHÓA VÀO",
  "arena.cinema.hintSpin": "Nhấp để bỏ qua vòng quay.",
  "arena.cinema.settleAriaLabel": "Quyết toán",
  "arena.cinema.winnerTag": "THẮNG",
  "arena.cinema.youTakePot": "BẠN THẮNG TRỌN QUỸ",
  "arena.cinema.takesPot": "THẮNG TRỌN QUỸ",
  "arena.cinema.shelfWinner": "CHO NGƯỜI THẮNG",
  "arena.cinema.shelfChase": "CUỘC SĂN ĐUỔI",
  "arena.cinema.shelfProtocol": "GIAO THỨC",
  "arena.cinema.smallPotNote": "Cuộc Săn Đuổi không nhận gì. Quy tắc 7% của giao thức đã chọn {count} {cardWord}; người thắng nhận tất cả thẻ còn lại.",
  "arena.cinema.resultsLink": "Xem kết quả vòng trước",
  "arena.cinema.hintSettle": "Nhấp vào bất kỳ đâu để quay lại đấu trường.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} cho người thắng",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Tự động cược khi nhấp đúp?",
  "arena.doubleBid.body": "Nhấp đúp vào một thẻ trong bộ sưu tập của bạn để đặt cược thẻ đó thẳng vào đấu trường. Bật tính năng này?",
  "arena.doubleBid.enable": "Bật",
  "arena.doubleBid.dismiss": "Để sau",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "ĐANG KẾT NỐI TỚI CARD ARENA",
  "arena.backend.loadingBody": "Đang kiểm tra bản phát hành đang chạy của Arena và phiên người chơi của bạn…",
  "arena.backend.loadingCollection": "Đang kiểm tra bộ sưu tập của bạn…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA ĐÃ KẾT NỐI",
  "arena.backend.mainnetPreparingBody": "Bản phát hành chỉ đọc chính xác này đang hoạt động tốt. Việc cấp vốn, mua thẻ, tham gia, rút thăm và quyết toán vẫn bị vô hiệu hóa.",
  "arena.backend.mainnetPreparingCollection": "Chưa có thẻ Mainnet nào được mua hoặc di chuyển. Arena vẫn chỉ đọc cho đến khi kho thẻ được ủy quyền riêng sẵn sàng.",
  "arena.backend.mainnetRelease": "Bản phát hành {commit} · triển khai {deployment} · không ký, phát sóng, hiệu ứng hoặc trùng lặp",
  "arena.backend.unavailableTitle": "CARD ARENA ĐANG CẬP NHẬT",
  "arena.backend.unavailableBody": "Việc tham gia tạm dừng cho tới khi đúng bản phát hành này sẵn sàng. Thẻ của bạn không hề dịch chuyển.",
  "arena.backend.unavailableCollection": "Không xem được bộ sưu tập trong lúc Arena cập nhật.",
  "arena.backend.connectTitle": "KẾT NỐI ĐỂ CHƠI",
  "arena.backend.connectBody": "Cần một phiên Privy đã xác minh để tải các thẻ gắn với nhà cung cấp và vào vòng quay.",
  "arena.backend.connectCollection": "Kết nối phiên người chơi để tải thẻ của bạn.",
  "arena.backend.retry": "THỬ LẠI",
} as Record<string, string>;
