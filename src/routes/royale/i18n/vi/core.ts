// Vietnamese (Tiếng Việt): machine-consistent quality pass (i18n epic, vi
// core segment), flagged for a later native-speaker editorial review (same
// convention as the other non-EN locales). Same key set as en/core.ts. See
// royaleI18n.ts for the {token} interpolation convention and the "no em
// dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome:
// header status, round-metrics rail, board region labels, the logged-out
// invitation, the phone drawer toggles) and runtime.* (copy produced by the
// plain, non-component .ts modules: rail / recap / xProfile / sellBack /
// winShare / serverWallet / video / game). Do NOT add new SURFACE keys to
// this file, add them to the segment file for the surface they belong to
// instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
//
// Terminology (binding across every vi segment): "vòng" = round, "quỹ" = the
// round's pool/pot, "Cuộc Săn Đuổi" (short form "SĂN ĐUỔI" in all-caps or
// tight chips) = the Chase's rolling jackpot, "ô" = tile, "người đặt cược" =
// backer(s), "người đặt cược lớn nhất" = top backer, "đặt cược" = bet/bid
// (verb), "tiền cược" = the stake amount (noun), "bán lại" = sell back,
// "lượt rút" = a card pull, "rút thăm" = the winner-selection draw, "kho" =
// vault, "thẻ đã chấm điểm" (short "thẻ chấm điểm") = graded/slab card,
// "công bằng có thể kiểm chứng" = provably fair, "Bạn" = the player's own
// seat ("You"), "Xem lại" / "XEM LẠI" = Replay, "tiền lẻ" = the loose-change
// mechanic (never rendered as "heat"), "quyết toán" = settle/settlement,
// "khóa" = lock. The five pack-tier brand names (Starter, Elite, Legendary,
// Grail, Mythic) plus attn ROYALE, ATTN Protocol, USDC, X, Privy and
// CollectorCrypt stay in English everywhere, including mid-sentence. The
// generic noun "pack(s)" keeps the English loanword "pack"/"packs"
// invariantly (owner rule: never "gói").
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Ngôn ngữ",
  "settings.languageSectionAria": "Cài đặt ngôn ngữ",
  "settings.languageSearchPlaceholder": "Tìm ngôn ngữ",
  "settings.languageNoResults": "Không tìm thấy ngôn ngữ phù hợp",
  "settings.languageHint": "Áp dụng ngay lập tức. Tìm theo tên hoặc gõ để lọc.",
  "settings.languageInputAria": "Ngôn ngữ, tìm kiếm và chọn",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Nhóm cài đặt",
  "settings.searchPlaceholder": "Tìm cài đặt",
  "settings.searchClear": "Xóa tìm kiếm",
  "settings.searchResultsAria": "Cài đặt phù hợp",
  "settings.searchNoResults": "Không có gì khớp với “{query}”. Hãy thử tên của thứ bạn muốn thay đổi.",
  "settings.backToGroups": "Tất cả cài đặt",
  "gear.cards.heading": "Thẻ",
  "gear.cards.sectionAria": "Cài đặt thẻ",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Đặt cược {bids} · tối thiểu {amount}",
  "gear.section.summary.display": "Pop-up {popups} · ảnh đại diện {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Nhạc {music} · hiệu ứng {sfx}",
  "gear.section.summary.autosell": "{count} quy tắc bán tự động đang bật",
  "gear.section.summary.hotkeys": "{count} phím tắt đã đặt",

  // --- Shared words --------------------------------------------------------
  "common.on": "BẬT",
  "common.off": "TẮT",
  "common.set": "ĐẶT",
  "common.clear": "XÓA",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "Ô {n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Đặt cược",
  "gear.betting.sectionAria": "Cài đặt đặt cược",
  "gear.betting.provider.label": "Nhà cung cấp pack",
  "gear.betting.provider.automatic": "Tự động (ưu tiên Collector Crypt)",
  "gear.betting.provider.hint": "Chế độ tự động ưu tiên Collector Crypt khi khả dụng và chỉ có thể dùng phương án dự phòng đã được xác minh. Chọn đích danh một nhà cung cấp là lựa chọn nghiêm ngặt: nếu không khả dụng, cược sẽ bị từ chối.",
  "gear.betting.provider.automaticHint": "Tự động · ưu tiên Collector Crypt",
  "gear.betting.provider.strictHint": "Chỉ {provider} · không dự phòng",
  "gear.betting.provider.unavailable": "{provider} (không khả dụng)",
  "gear.betting.provider.selectedUnavailable": "{provider} không khả dụng. Cược nghiêm ngặt bị từ chối và lựa chọn không bao giờ được thay thế.",
  "gear.betting.provider.actual": "Được thực hiện bởi {provider}",
  "gear.betting.provider.accepted": "Được {provider} chấp nhận",
  "gear.betting.disableBids.label": "Tắt đặt cược",
  "gear.betting.disableBids.hint":
    "Khóa việc đặt cược của bạn: chạm vào ô sẽ không còn đặt cược, nhờ đó bạn có thể xem (hoặc đưa màn hình cho người khác) mà không lỡ tay đặt cược. Phần còn lại của ván chơi vẫn diễn ra bình thường.",
  "gear.betting.minBid.label": "Mức cược tối thiểu",
  "gear.betting.minBid.hint":
    "Mức cược nhỏ nhất mà một lần chạm có thể đặt. Mức cược của bạn không thể thấp hơn giá trị này, nên một cú chạm nhanh sẽ không bao giờ đặt ít hơn dự định (tối thiểu $5 để ngăn cược giả).",
  "gear.betting.upgradeCap.label": "Giới hạn chi phí nâng cấp",
  "gear.betting.upgradeCap.placeholder": "không giới hạn",
  "gear.betting.upgradeCap.hint":
    "Số tiền tối đa mà một lần nhấp nâng cấp có thể tốn của bạn. Các lượt nâng cấp đắt hơn sẽ bị làm mờ, nên một ô đông đúc không thể khiến bạn bất ngờ với hóa đơn khổng lồ.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Hiển thị",
  "gear.display.sectionAria": "Cài đặt hiển thị",
  "gear.display.chipFloats.label": "Bong bóng cược",
  "gear.display.chipFloats.hint": "Hiện các bong bóng nhỏ \"+$X · tên\" nổi lên khi có người đặt cược vào một ô.",
  "gear.display.floatThreshold.label": "Ẩn cược dưới",
  "gear.display.floatThreshold.placeholder": "hiện mọi cược",
  "gear.display.floatThreshold.hint":
    "Chỉ hiện bong bóng cho các cược từ mức này trở lên. Xóa trống (hoặc đặt $0) để hiện mọi cược, giúp bàn chơi bớt rối khi có nhiều cược nhỏ dồn dập.",
  "gear.display.hidePortraits.label": "Ẩn ảnh đại diện người chơi",
  "gear.display.hidePortraits.hint": "Ẩn vòng tròn ảnh đại diện của những người chơi khác trên các ô. Dấu hiệu của riêng bạn vẫn hiển thị.",
  "gear.display.fullscreenLandscape.label": "Toàn màn hình khi xoay ngang",
  "gear.display.fullscreenLandscape.hint":
    "Trên điện thoại, lần chạm tiếp theo khi xoay ngang sẽ ẩn thanh trình duyệt. Trên iPhone Safari, thanh này chỉ thu gọn; Thêm vào Màn hình chính mới cho toàn màn hình thật sự.",
  "gear.display.replayTour.label": "Xem lại hướng dẫn chào mừng",
  "gear.display.replayTour.hint": "Mở lại hướng dẫn từ bước đầu tiên.",
  "gear.display.couch.label": "Chữ to (TV/sofa)",
  "gear.display.headerCollapse.label": "Thu gọn thanh đầu",
  "gear.display.headerCollapse.hint": "Gấp thanh trên cùng lại để bàn chơi và các lá bài lấp đầy màn hình. Mũi tên trên thanh đầu sẽ mở lại.",
  "gear.display.couch.hint":
    "Phóng to chữ đọc trong toàn bộ trò chơi: trò chuyện, tài liệu, nhãn và các con số tiền, phù hợp để chơi từ ghế sofa. Bố cục bàn chơi vẫn giữ nguyên. Cũng có thể bật bằng ?couch=1 trong địa chỉ.",
  "gear.display.couch.suggested": "Trình duyệt này có vẻ là của TV hoặc máy chơi game. Chữ to được làm riêng cho màn hình này.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Mở thưởng",
  "gear.reveals.sectionAria": "Cài đặt mở thưởng",
  "gear.reveals.turbo.label": "Mở thưởng tốc hành",
  "gear.reveals.turbo.hint":
    "Tua nhanh qua màn mở thưởng để bạn thấy kết quả sớm hơn. Những khoảnh khắc lớn vẫn được giữ nhịp. Mặc định tắt, màn trình diễn đầy đủ vẫn phát cho những người khác.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Âm thanh",
  "gear.sound.sectionAria": "Cài đặt âm thanh",
  "gear.sound.sfx.label": "Hiệu ứng âm thanh",
  "gear.sound.sfx.hint":
    "Tiếng nhấp chip, mở và khóa vòng, vòng quay người thắng và màn mở thưởng. Tất cả được tổng hợp ngay trong trình duyệt của bạn, không cần tải gì thêm.",
  "gear.sound.music.label": "Nhạc nền",
  "gear.sound.music.hint":
    "Nhạc đi theo diễn biến của vòng: dâng lên trong lúc đặt cược, cao trào ở những giây cuối rồi lắng xuống khi mở thưởng. Bắt đầu sau lần chạm hoặc nhấn phím đầu tiên của bạn và tạm dừng khi bạn chuyển sang tab khác.",
  "gear.sound.musicStyle.label": "Phong cách nhạc",
  "gear.sound.musicStyle.piano": "Piano êm dịu",
  "gear.sound.musicStyle.snowmelt": "Tuyết tan",
  "gear.sound.musicStyle.hearthfire": "Lửa lò sưởi",
  "gear.sound.musicStyle.grotto": "Hang động vàng",
  "gear.sound.musicStyle.arcade": "Dồn dập arcade",
  "gear.sound.musicStyle.kart": "Đua kart",
  "gear.sound.musicStyle.galaxy": "Vũ điệu sao",
  "gear.sound.musicStyle.hint": "Piano êm dịu là giai điệu nhẹ nhàng, thong thả. Dồn dập arcade thì sôi động và nhanh. Chuyển đổi vào nhịp nhạc kế tiếp, ngay giữa vòng.",
  "gear.sound.musicVolume.label": "Âm lượng nhạc",
  "gear.sound.sfxVolume.label": "Âm lượng hiệu ứng",
  "gear.sound.volume.label": "Âm lượng",
  "gear.sound.volume.aria": "Âm lượng tổng",
  "gear.sound.volume.hint": "Một âm lượng tổng điều khiển cả hiệu ứng lẫn nhạc nền.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Quy tắc tự động bán lại",
  "gear.autosell.sectionAria": "Quy tắc tự động bán lại",
  "gear.autosell.intro":
    "Thiết lập một lần, mọi phần thắng phù hợp sẽ tự động bán lại: không cần hỏi giữ hay bán. Những gì không khớp vẫn sẽ hỏi bạn như hiện tại.",
  "gear.autosell.everyWin.label": "Tự động bán lại mọi phần thắng",
  "gear.autosell.everyWin.hint":
    "Quy đổi ngay mọi thẻ bạn thắng theo giá bán lại ngay khi nó về tay, không cần hỏi giữ hay bán. Grail không bao giờ bị tự động bán. Đây là lối tắt để bật cả bốn công tắc độ hiếm bên dưới.",
  "gear.autosell.belowValue.label": "Bán nếu giá trị dưới",
  "gear.autosell.placeholderOff": "tắt",
  "gear.autosell.rarity.label": "Bán theo độ hiếm",
  "gear.autosell.rarity.aria": "Tự động bán theo độ hiếm",
  "gear.autosell.rarity.hint":
    "Các bậc độ hiếm của CollectorCrypt, lấy từ máy pack mà mỗi thẻ xuất ra. Khoảng giá chính xác của một bậc thay đổi theo từng pack, nên một thẻ $200 có thể là hiếm ở máy này nhưng phổ biến ở máy đắt hơn.",
  "gear.autosell.nonVintage.label": "Bán các thẻ không phải vintage",
  "gear.autosell.belowGrade.label": "Bán nếu điểm chấm dưới",
  "gear.autosell.grader.label": "Bán theo tổ chức chấm điểm",
  "gear.autosell.grader.hint":
    "Giữ một tổ chức chấm điểm và chỉ tự động bán các thẻ của tổ chức đó có điểm dưới mức bạn đặt. Bỏ chọn một tổ chức để tự động bán mọi thẻ của tổ chức đó. Bỏ chọn tất cả để tự động bán mọi thứ bạn thắng được. Mỗi tổ chức chấm điểm dùng thang điểm riêng, nên mỗi ngưỡng cũng độc lập.",
  "gear.autosell.grader.aria": "Tự động bán theo tổ chức chấm điểm",
  "gear.autosell.grader.keep": "GIỮ",
  "gear.autosell.grader.sellAll": "BÁN HẾT",
  "gear.autosell.grader.other": "Khác / chưa chấm điểm",
  "gear.autosell.grader.placeholderKeepAll": "giữ hết",
  "gear.autosell.grader.placeholderSellAll": "bán hết",
  "gear.autosell.grader.ariaGradeSuffix": "bán dưới mức điểm",
  "gear.autosell.summaryActive": "Đang bật:",
  "gear.autosell.summaryNone": "Chưa thiết lập quy tắc tự động bán. Mỗi phần thắng vẫn sẽ hỏi bạn giữ hay bán.",
  "gear.autosell.turnOffAll": "TẮT TẤT CẢ",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Phím tắt đặt cược",
  "gear.hotkeys.sectionAria": "Phím tắt đặt cược",
  "gear.hotkeys.intro":
    "Nhấn phím của một ô để đặt cược vào ô đó theo mức cược hiện tại. Không cần dùng chuột. Nhấp vào một phím bên dưới, rồi nhấn phím bạn muốn dùng. Hai ô không thể dùng chung một phím, nên gán lại sẽ chuyển phím đó sang ô mới. Esc để hủy, Backspace để xóa.",
  "gear.hotkeys.enabled.label": "Đặt cược bằng phím số",
  "gear.hotkeys.enabled.hintOn": "Các phím hoạt động trong lúc đặt cược. Nhấn phím của một ô sẽ đặt cược ngay lập tức.",
  "gear.hotkeys.enabled.hintOff": "Các phím đang tắt. Nhấn phím của một ô sẽ không đặt cược gì cả.",
  "gear.hotkeys.enabled.hintUnset": "Chưa quyết định. Bật phím tại đây, hoặc nhấn phím của một ô trong lúc đặt cược rồi chọn Bật.",
  "gear.hotkeys.listAria": "Phím tắt cược theo ô",
  "gear.hotkeys.tileLabel": "Ô {n}",
  "gear.hotkeys.pressKeyPrompt": "Nhấn một phím…",
  "gear.hotkeys.setKey": "Đặt phím",
  "gear.hotkeys.clear": "Xóa",
  "gear.hotkeys.ariaPressToBind": "Nhấn một phím để gán cho Ô {n}",
  "gear.hotkeys.ariaShortcut": "Phím tắt của Ô {n} là {key}. Nhấp để gán lại.",
  "gear.hotkeys.ariaNoShortcut": "Ô {n} chưa có phím tắt. Nhấp để đặt một phím.",
  "gear.hotkeys.ariaClearShortcut": "Xóa phím tắt của Ô {n}",
  "gear.hotkeys.unboundWarning": "Chưa đặt phím cho {list}. Các ô này chưa có phím tắt bàn phím cho tới khi bạn đặt một phím.",
  "gear.hotkeys.resetButton": "Khôi phục mặc định",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "Các mục attn ROYALE",
  "nav.board": "BÀN CHƠI",
  "nav.results": "KẾT QUẢ",
  "nav.rankingsFull": "BẢNG XẾP HẠNG",
  "nav.rankingsShort": "XẾP HẠNG",
  "nav.collectionFull": "BỘ SƯU TẬP",
  "nav.collectionShort": "THẺ",
  "nav.profile": "HỒ SƠ",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Bàn chơi",
  "mobileNav.results": "Kết quả",
  "mobileNav.ladder": "Xếp hạng",
  "mobileNav.collection": "Bộ sưu tập",
  "mobileNav.profile": "Hồ sơ",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Tài liệu",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "phòng thử nghiệm attn ROYALE",
  "shell.header.statusAria": "Trạng thái vòng",
  "shell.header.collapse": "Ẩn thanh đầu",
  "shell.header.expand": "Hiện thanh đầu",
  "shell.header.round": "Vòng #{n}",
  "shell.header.turboTitle": "Nhịp vòng tăng tốc",
  "shell.header.turboBadge": "TỐC HÀNH",
  "shell.metrics.aria": "Tóm tắt vòng",
  "shell.metrics.totalPool": "Tổng quỹ",
  "shell.metrics.packsLive": "Pack đang chơi",
  "shell.metrics.yourStake": "Cược của bạn",
  "shell.metrics.selectedBet": "Mức cược đã chọn",
  "shell.board.aria": "bàn chơi attn ROYALE",
  "shell.board.label": "Bàn chơi",
  "shell.board.phaseOpen": "Nhấp vào bất kỳ ô nào để đặt cược, tiền cược sẽ tự gộp thành chồng pack tốt nhất",
  "shell.board.phaseLock": "Đã khóa · đang mở pack",
  "shell.board.phaseSettled": "Vòng đã quyết toán",
  "shell.board.metaOpen": "Quỹ {pool} · 3% nạp vào Cuộc Săn Đuổi · pack mở khi khóa vòng",
  "shell.board.metaClosed": "Một ô sẽ thắng trọn quỹ theo tỷ lệ có trọng số, có thể kiểm chứng.",
  "shell.board.reopenReveal": "↗ Mở lại màn mở thưởng",
  "shell.connectNudge":
    "Vào trò chơi và nạp tiền để bắt đầu đặt cược vào các ô. Các vòng vẫn tiếp tục diễn ra ở chế độ nền.",
  "shell.decision.cardFallback": "thẻ của bạn",
  "shell.mobile.close": "Đóng",
  "shell.mobile.chat": "Trò chuyện",
  "shell.mobile.chatOpenAria": "Mở trò chuyện bàn chơi",
  "shell.mobile.chatCloseAria": "Đóng trò chuyện bàn chơi",
  "shell.mobile.cards": "Thẻ",
  "shell.mobile.cardsOpenAria": "Mở thẻ của bạn để bán hoặc rút",
  "shell.mobile.cardsCloseAria": "Đóng thẻ của bạn",
  "shell.mobile.players": "Người chơi",
  "shell.mobile.playersOpenAria": "Mở danh sách người chơi, xếp theo mức cược",
  "shell.mobile.playersCloseAria": "Đóng danh sách người chơi",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* - royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC trong game",
  "runtime.rail.privySessionCredit": "Tín dụng phiên Privy",
  "runtime.rail.houseCredit": "tín dụng nhà cái",
  "runtime.rail.connectPrivy": "Kết nối Privy để nạp USDC trong game",
  "runtime.rail.privySession": "Phiên Privy",
  "runtime.rail.depositAction": "Nạp +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Tài khoản Privy",
  "runtime.rail.house": "Nhà cái",
  "runtime.rail.depositReceipt": "Biên nhận {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Chạm vào bất kỳ pack nào để cược {amount}. Mỗi ô cũng giữ mức +{low} / +{high} riêng.",
  "runtime.rail.sellBack": "Bán lại → +{amount} vào số dư",

  // runtime.recap.* - royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "Bạn",
  "runtime.recap.topBacker": "Người đặt cược lớn nhất",
  "runtime.recap.topCardOutcome": "thẻ hàng đầu · quyết định giữ hay bán",
  "runtime.recap.backer": "Người đặt cược",
  "runtime.recap.cardWon": "thẻ đã thắng",
  "runtime.recap.chaseLootReleased": "Chiến lợi phẩm Cuộc Săn Đuổi đã được giải phóng",
  "runtime.recap.theChase": "Cuộc Săn Đuổi",
  "runtime.recap.sweptIntoVault": "bị gom vào kho",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "phí giao thức",
  "runtime.recap.soldBack": "Đã bán lại",
  "runtime.recap.intoSplit": "+{amount} vào phần chia",

  // runtime.xProfile.* - royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "Kết nối X chưa khả dụng.",
  "runtime.xProfile.connected": "Đã kết nối",

  // runtime.sellBack.* - royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Thẻ không xác định",

  // runtime.winShare.* - royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "ĐÃ THẮNG",
  "runtime.winShare.headlineGrailPull": "LƯỢT RÚT GRAIL",
  "runtime.winShare.headlineCardsWon": "THẺ ĐÃ THẮNG",
  "runtime.winShare.cardInImage": "Thẻ có trong hình.",
  "runtime.winShare.receiptInImage": "Biên nhận có trong hình.",

  // runtime.serverWallet.* - royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Rút tiền hiện đang ngoại tuyến. Không có khoản tiền nào được chuyển.",
  "runtime.serverWallet.noSigner": "Không có ví ký nào được kết nối cho phiên này. Không có khoản tiền nào được chuyển.",
  "runtime.serverWallet.nonceUnavailable": "Không thể lấy mã nonce xác thực rút tiền từ máy chủ.",
  "runtime.serverWallet.signatureUnavailable": "Ví không trả về chữ ký cho mã nonce rút tiền.",
  "runtime.serverWallet.boundaryLabel": "Tín dụng bàn chơi và USDC ví máy chủ là hai số dư riêng biệt.",

  // runtime.video.* - royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Trình duyệt này không hỗ trợ quay màn hình.",
  "runtime.video.noRecorderFormat": "Trình duyệt này không có định dạng video MediaRecorder nào.",
  "runtime.video.canceled": "Đã hủy dựng hình.",
  "runtime.video.unreachable": "Không thể kết nối tới dịch vụ dựng hình tại {url}.",
  "runtime.video.rejected": "Dịch vụ dựng hình đã từ chối vòng này: {detail}",
  "runtime.video.requestFailed": "Yêu cầu dựng hình thất bại ({status}).",
  "runtime.video.noJobId": "Dịch vụ dựng hình không trả về mã tác vụ.",
  "runtime.video.lostJob": "Mất tác vụ dựng hình ({status}).",
  "runtime.video.lostContact": "Mất liên lạc với dịch vụ dựng hình giữa chừng.",
  "runtime.video.renderFailed": "Dựng hình thất bại: {error}.",
  "runtime.video.unknownError": "lỗi không xác định",
  "runtime.video.downloadFailed": "Video đã hoàn tất nhưng không thể tải xuống.",
  "runtime.video.downloadHttpFailed": "Video đã hoàn tất nhưng tải xuống thất bại ({status}).",
  "runtime.video.emptyVideo": "Dịch vụ dựng hình trả về một video trống.",
  "runtime.video.shareTagline": "Đại chiến pack, mọi lượt rút thăm đều có thể kiểm chứng. Xem lại vòng này:",

  // runtime.game.* - useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Phòng đang hoạt động. Các vòng tự khởi động - mở {seconds} giây, rồi đến màn mở thưởng.",
  "runtime.game.chaseVault": "Kho Cuộc Săn Đuổi",
  "runtime.game.aTile": "một ô",
  "runtime.game.aPack": "một pack",
  "runtime.game.theCard": "thẻ đó",
  "runtime.game.collectedSplit": "Vòng {round} · nhận {amount} USDC từ phần chia.",
  "runtime.game.chaseDropSplit": "Vòng {round} · Cuộc Săn Đuổi đã đổ {award} vào ô của bạn · phần chia của bạn: {amount} USDC.",
  "runtime.game.grailSecured": "Đã giữ Grail: {card} ({amount}) nằm trong bộ sưu tập của bạn.",
  "runtime.game.keptCard": "Đã giữ {card} ({amount}) → thêm vào bộ sưu tập của bạn.",
  "runtime.game.soldCardSettle": "Đã bán lại {card} với giá {amount} USDC ({pct}% của {value}).",
  "runtime.game.roundVoidedRefund":
    "Vòng {round} bị hủy. Không có pack nào được mở, nên không có lượt rút thăm theo giá trị thẻ. Khoản cược {amount} của bạn đã được hoàn lại.",
  "runtime.game.roundVoidedAll":
    "Vòng {round} bị hủy. Không có pack nào được mở, nên không có lượt rút thăm theo giá trị thẻ. Toàn bộ tiền cược đã được hoàn lại.",
  "runtime.game.chaseFiredYours.one": "Cuộc Săn Đuổi đã kích hoạt: {n} thẻ ({amount}) được thả vào ô {tile} của bạn.",
  "runtime.game.chaseFiredYours.other": "Cuộc Săn Đuổi đã kích hoạt: {n} thẻ ({amount}) được thả vào ô {tile} của bạn.",
  "runtime.game.chaseFiredTable.one":
    "Cuộc Săn Đuổi đã kích hoạt ở Vòng {round}: {award} cùng {n} thẻ đổ vào {tile}, chia cho những người đặt cược ở đó.",
  "runtime.game.chaseFiredTable.other":
    "Cuộc Săn Đuổi đã kích hoạt ở Vòng {round}: {award} cùng {n} thẻ đổ vào {tile}, chia cho những người đặt cược ở đó.",
  "runtime.game.cardsAssigned.one": "{n} thẻ được gán cho bạn ({amount}) → bộ sưu tập.",
  "runtime.game.cardsAssigned.other": "{n} thẻ được gán cho bạn ({amount}) → bộ sưu tập.",
  "runtime.game.cardPoolsLive": "Kho thẻ đang hoạt động: {cards} thẻ trên {pools} kho máy CollectorCrypt.",
  "runtime.game.minBid": "Mức cược tối thiểu là {amount}. Tăng tiền cược rồi thử lại.",
  "runtime.game.resolveFailed": "Vòng này không thể kết toán nên chưa thanh toán gì. Vòng tiếp theo bắt đầu bình thường.",
  "runtime.game.stakeRefused": "Mức cược này quá lớn cho {tile}. Chưa trừ tiền. Hãy giảm xuống rồi thử lại.",
  "runtime.game.shortfallBack":
    "Không đủ USDC để đặt cược {amount} vào {tile}. Bạn hiện có {held}. Nạp thêm tiền để tiếp tục.",
  "runtime.game.shortfallNextPack":
    "Không đủ USDC để hoàn tất pack tiếp theo trên {tile}. Cần {amount}, bạn hiện có {held}. Nạp thêm tiền để tiếp tục.",
  "runtime.game.youBacked": "Bạn đã đặt cược {amount} vào {tile}.",
  "runtime.game.packCompleted": "Bạn đã hoàn tất pack tiếp theo trên {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Đã bán {cards} lấy {amount} USDC (mua lại CC) để đặt cược.",
  "runtime.game.backedFunded": "Đã đặt cược {amount} vào {tile} (lấy tiền từ kho thẻ).",
  "runtime.game.demoStakesRefunded":
    "Đã xóa cược thử nghiệm: {amount} bạn đã nhấp vào được hoàn lại. Bạn bắt đầu lại từ $0.",
  "runtime.game.demoStakesCleared": "Đã xóa cược thử nghiệm: mỗi vòng bạn bắt đầu từ $0 cho tới khi đặt cược vào một ô.",
  "runtime.game.deposited": "Đã nạp {amount} USDC vào ví của bạn.",
  "runtime.game.referralBonus": "Đã cộng thưởng giới thiệu: +{amount} USDC.",
  "runtime.game.signedAndSent": "Đã ký & gửi {amount} USDC trên {cluster} · chữ ký {sig}….",
  "runtime.game.signedNoBroadcast":
    "Đã ký {amount} USDC trên {cluster} ({method}, không phát lên chuỗi) · chữ ký {sig}….",
  "runtime.game.soldCard": "Đã bán {card} lấy {amount} USDC (mua lại {pct}%).",
} as Record<string, string>;
