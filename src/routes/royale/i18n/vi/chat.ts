// i18n dictionary - "chat" segment (Vietnamese / Tiếng Việt). Machine-
// consistent quality pass (i18n epic, vi chat segment), flagged for a later
// native-speaker editorial review.
//
// Source of truth for every user-visible string owned by:
//   apps/web/src/routes/royale/RoyaleChatPanel.tsx
//   apps/web/src/routes/royale/RoyaleChatMessageBody.tsx
//   apps/web/src/routes/royale/royaleChatModel.ts     (ambient chatter pool +
//     the table-event copy composed into chatMessageForEvent's flat text)
//   apps/web/src/routes/royale/royaleChatLinks.ts      (chatPlatformLinkLabel)
// Same key set as en/chat.ts.
//
// Terminology (binding across every vi segment, see vi/core.ts's header for
// the full glossary): "lượt rút" for a card pull, "Săn Đuổi" for the Chase
// (compact form used in the chase-award chip), "cược chốt"/"chốt cận giờ"
// for the arena's "snipe" mechanic and its ambient chat-slang uses below,
// matching vi/arena.ts. "Mythic" in chat.chatter.line17 is the pack-tier
// brand name and stays English.
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings. Switching the
// UI language mid session translates all NEW chat activity but never
// rewrites messages already sitting in the feed/history.
export default {
  "chat.rooms.table": "Bàn",
  "chat.rooms.sendTo": "Gửi đến",
  "chat.rooms.joinHint": "Cược vào một ô để mở khóa phòng của ô đó.",
  "chat.rooms.messageTargets": "Phòng của tin nhắn",
  "chat.composer.sendFailed": "Không gửi được tin nhắn. Hãy thử lại.",
  "chat.composer.audienceChanged": "Phòng đã thay đổi. Tin nhắn chưa gửi của bạn đã bị xóa.",
  "chat.composer.sessionUnavailable": "Phiên chat không khả dụng. Hãy tải lại và thử lại.",
  "chat.auth.tileLeadBold": "Đặt cược vào một ô để chat",
  "chat.auth.tileBody": ". Bàn và các phòng ô sẽ mở sau pack đầu tiên được chấp nhận.",
  "chat.auth.sessionUnavailableBold": "Phiên chat không khả dụng",
  "chat.auth.sessionUnavailableBody": ". Hãy tải lại để khôi phục gửi an toàn.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Trò chuyện bàn chơi",
  "chat.header.title": "Trò chuyện bàn chơi",
  "chat.header.fontControlAriaLabel": "Cỡ chữ trò chuyện",
  "chat.header.fontSmaller": "Giảm cỡ chữ trò chuyện",
  "chat.header.fontLarger": "Tăng cỡ chữ trò chuyện",
  "chat.header.collapseShow": "Hiện trò chuyện",
  "chat.header.collapseHide": "Ẩn trò chuyện",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "LƯỢT RÚT GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "VÒNG #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Mở kết quả vòng trong tab mới.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "thắng bởi",
  "chat.event.wonBy": "thắng bởi {name}",
  "chat.event.foldedIntoPot": "gộp vào quỹ",
  "chat.event.roundWinsTitle": "{tile} thắng {pot}",
  "chat.event.bestPull": "lượt rút tốt nhất {name} ({value})",
  "chat.event.chaseAward": "Săn Đuổi +{amount}",
  "chat.event.youWon": "bạn +{amount}",
  "chat.event.youLost": "bạn đã thua",
  "chat.message.showOriginal": "đã dịch · xem bản gốc",
  "chat.message.showTranslation": "xem bản dịch",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Nhảy tới tin mới nhất",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Chỉ liên kết attn mới hiển thị ở đây.",
  "chat.composer.rateLimitNotice": "Bạn đang gửi hơi nhanh. Thử lại trong giây lát.",
  "chat.composer.placeholder": "Nói gì đó…",
  "chat.composer.inputAriaLabel": "Tin nhắn trò chuyện",
  "chat.composer.sendAriaLabel": "Gửi tin nhắn",
  "chat.composer.sendLabel": "Gửi",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Đăng nhập để trò chuyện",
  "chat.auth.body": ", phòng chỉ ở chế độ xem cho tới khi bạn kết nối (góc trên bên phải).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Mở trang thẻ trong tab mới",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Mở trang thẻ trong một tab nền.",
  "chat.messageBody.viewCard": "Xem thẻ",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Trang thẻ",
  "chat.link.roundResult": "Kết quả vòng",
  "chat.link.profile": "Hồ sơ",
  "chat.link.collection": "Bộ sưu tập",
  "chat.link.theBoard": "Bàn chơi",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "ô 3 đang đầy lên nhanh thật",
  "chat.chatter.line02": "ai cứ rình chốt ô dẫn đầu mỗi vòng vậy",
  "chat.chatter.line03": "cái lượt rút grail vòng trước đỉnh thật sự",
  "chat.chatter.line04": "dễ ăn thôi, mọi người dồn hết vào ô dẫn đầu đi",
  "chat.chatter.line05": "ô 7 mới nhìn có vẻ đang bị định giá thấp",
  "chat.chatter.line06": "mình giữ pack tới tận 5 giây cuối luôn",
  "chat.chatter.line07": "ai đó vừa quăng $250 vào ô 2, nể thật",
  "chat.chatter.line08": "phần quỹ ở ô 6 giờ định giá quá cao rồi",
  "chat.chatter.line09": "thêm một pack nữa là ô đó lên bậc giàu hơn",
  "chat.chatter.line10": "dân chốt cận giờ lại phá tỷ lệ của mình rồi",
  "chat.chatter.line11": "mình cứ trúng toàn thẻ sàn, chắc sắp có lượt rút to rồi",
  "chat.chatter.line12": "để ý ông cá voi kìa, lúc nào cũng đoán trúng ô thắng",
  "chat.chatter.line13": "ô 1 cả phiên chưa trúng lần nào, chắc sắp tới lượt",
  "chat.chatter.line14": "mình bán ngay lượt rút vừa rồi, giá mua lại thấy hợp lý",
  "chat.chatter.line15": "sắp có phản đòn chốt cận giờ đây, ghi vào đi",
  "chat.chatter.line16": "ô dẫn đầu đổi tới hai lần trong mười giây cuối",
  "chat.chatter.line17": "có ai tối nay cũng đang săn bậc Mythic không",
  "chat.chatter.line18": "mình giữ thẻ đó lại, hình đẹp quá không nỡ bán",
  "chat.chatter.line19": "pack đặt trễ không bao giờ làm đồng hồ chạy lại từ đầu, thích cái này ghê",
  "chat.chatter.line20": "quỹ ô 8 vừa tăng gấp đôi, có gì đó sắp xảy ra",
  "chat.chatter.line21": "đầu vòng đặt pack nhỏ, cuối vòng đặt pack lớn, chơi vậy mới đúng bài",
  "chat.chatter.line22": "cái đồng hồ đếm giữ hay bán lúc nào cũng làm mình cuống",
  "chat.chatter.line23": "mấy ô bám đuổi giờ nhìn giá trị hơn ô dẫn đầu",
  "chat.chatter.line24": "chốt cận giờ ô 5 quá gọn, như dao mổ",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Bảng phụ của bàn chơi",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "Hoạt động của tôi",
  "chat.activity.ariaLabel": "Hoạt động riêng tư của tôi",
  "chat.activity.filtersAria": "Lọc hoạt động",
  "chat.activity.filter.all": "Tất cả",
  "chat.activity.filter.packs": "Pack",
  "chat.activity.filter.bids": "Cược",
  "chat.activity.filter.rewards": "Phần thưởng",
  "chat.activity.filter.feats": "Thành tích",
  "chat.activity.filter.clan": "Bang hội",
  "chat.activity.today": "Hôm nay",
  "chat.activity.yesterday": "Hôm qua",
  "chat.activity.status.pending": "Đang chờ",
  "chat.activity.status.finalized": "Đã chốt",
  "chat.activity.status.reversed": "Đã hoàn tác",
  "chat.activity.finalizedAria": "Biên nhận đã chốt",
  "chat.activity.signInTitle": "Đăng nhập để xem lịch sử",
  "chat.activity.signInBody": "Các biên nhận riêng tư về pack, cược, phần thưởng, thành tích và bang hội của bạn sẽ xuất hiện ở đây.",
  "chat.activity.loading": "Đang tải biên nhận của bạn",
  "chat.activity.loadOlder": "Tải hoạt động cũ hơn",
  "chat.activity.points": "{points} điểm",
  "chat.activity.event.packBid.title": "Đã chơi pack",
  "chat.activity.event.packBid.detail": "Lượt cược vào ô {tile} đã chốt.",
  "chat.activity.event.roundWon.title": "Ô chiến thắng",
  "chat.activity.event.roundWon.detail": "Ô {tile} đã thắng vòng này.",
  "chat.activity.event.roundLost.title": "Vòng đã quyết toán",
  "chat.activity.event.roundLost.detail": "Ô {tile} không thắng vòng này.",
  "chat.activity.event.roundRefunded.title": "Pack được hoàn tiền",
  "chat.activity.event.roundRefunded.detail": "Tiền cược ở ô {tile} đã được hoàn lại.",
  "chat.activity.event.chaseWon.title": "Săn Đuổi trúng thưởng",
  "chat.activity.event.chaseWon.detail": "Săn Đuổi trên bàn chơi đã trả thưởng.",
  "chat.activity.event.achievementDetail": "Mở khóa nhờ lượt chơi của bạn.",
  "chat.activity.event.clanAchievementDetail": "Mở khóa cùng bang hội của bạn.",
  "chat.activity.unavailableTitle": "Không thể xem hoạt động",
  "chat.activity.unavailableBody": "Không thể tải biên nhận của bạn. Hãy thử lại bảng tin riêng tư sau giây lát.",
  "chat.activity.retry": "Thử lại",
  "chat.activity.emptyTitle": "Chưa có gì ở đây",
  "chat.activity.emptyBody": "Các hành động về pack, cược, phần thưởng, thành tích và bang hội đã chốt sẽ xuất hiện ở đây.",
  "chat.unlock.eyebrow": "Đã mở khóa thành tích",
  "chat.unlock.clanEyebrow": "Đã mở khóa thành tích bang hội",
  "chat.unlock.dismiss": "Đóng thông báo thành tích",
} as Record<string, string>;
