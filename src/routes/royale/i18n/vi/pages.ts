// Vietnamese (Tiếng Việt): "pages" segment. Machine-consistent quality pass
// (i18n epic, vi pages segment), flagged for a later native-speaker
// editorial review. Covers the six standalone-route surfaces owned by this
// segment: RoyaleProfileRoute, RoyaleLadderRoute, RoyaleRoundResultsRoute,
// RoyaleCollectionRoute, RoyaleWinningsStrip, RoyaleSessionHistory, plus
// pages/RoyaleWithdrawPanel.tsx, RoyaleSellBackPanel.tsx (+ royaleSellBack.ts's
// error copy), pages/RoyaleLadderCardViewer.tsx, RoyaleStatsPanel.tsx,
// pages/RoyaleArenaResultsRoute.tsx and routes/RoyaleCardDetailRoute.tsx.
// Same key set as en/pages.ts.
//
// Terminology (binding across every vi segment, see vi/core.ts's header for
// the full glossary): "vòng" for round, "quỹ" for the round's pool/pot,
// "người đặt cược" for backers, "lượt rút" for pull/draw, "bán lại" for sell
// back, "giữ" for keep/kept. The short round abbreviation is "V{n}" (Vòng),
// matching pages.winningsStrip.roundId / pages.profile.pnlTooltip.
// pages.ladder.*'s "pool" is a CollectorCrypt machine's card inventory (not
// the round's cash pot), so it renders as "kho" there to keep the two
// concepts apart from "quỹ". Win/loss single-letter initials (pnlSubtitle,
// formW/formL) render as "T" (Thắng) / "B" (Bại). Pack-tier brand names
// (Starter, Elite, Legendary, Grail, Mythic), USDC, X, Solana and
// CollectorCrypt stay in English. Digits and currency stay exactly as
// authored: no comma-for-dot swap inside a number, no localized symbol.
export default {
  // ===== pages.common.* - reused across 2+ files in this segment ===========
  "pages.common.goToBoard": "VÀO BÀN CHƠI",
  "pages.common.backToBoard": "← Quay lại bàn chơi",
  "pages.common.replay": "XEM LẠI",
  "pages.common.replayTitle": "Xem lại vòng {n}, từ lượt cược đầu tiên đến khi mở thưởng",
  "pages.common.you": "Bạn",
  "pages.common.cancel": "Hủy",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "Rút vào ví",
  "pages.common.withdrawnToWallet": "Đã rút vào ví",
  "pages.common.chase": "SĂN ĐUỔI",
  "pages.common.roundNumber": "Vòng #{n}",
  "pages.common.share": "Chia sẻ",
  "pages.common.noCardsKeptTitle": "CHƯA GIỮ THẺ NÀO",
  "pages.common.noCardsKeptBody": "Giữ một lượt rút thắng thay vì bán lại, và nó sẽ xuất hiện ở đây dưới dạng thẻ đã chấm điểm.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "Lịch sử phiên chơi",
  "pages.sessionHistory.log.title": "Lịch sử phiên chơi",
  "pages.sessionHistory.log.emptyHint": "Biên nhận của bạn sẽ hiện ở đây",
  "pages.sessionHistory.log.hint": "Biên nhận & thao tác của bạn",

  "pages.sessionHistory.ledger.ariaLabel": "Lịch sử vòng và ô",
  "pages.sessionHistory.ledger.title": "Lịch sử vòng & ô",
  "pages.sessionHistory.ledger.empty": "Các vòng trước sẽ hiện ở đây",
  "pages.sessionHistory.ledger.summaryOne": "{n} vòng đã quyết toán · nhấp vào một dòng để xem chi tiết",
  "pages.sessionHistory.ledger.summaryOther": "{n} vòng đã quyết toán · nhấp vào một dòng để xem chi tiết",
  "pages.sessionHistory.ledger.emptyBody":
    "Chưa có vòng nào hoàn tất, màn mở thưởng đầu tiên sẽ xuất hiện ở đây với mọi ô, ô thắng cuộc, và phần chia.",
  "pages.sessionHistory.ledger.showMore": "HIỆN {n} NỮA · {hidden} CŨ HƠN",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "{label} đã thắng",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "quỹ {amount}",
  "pages.sessionHistory.row.noPull": "không có lượt rút",
  "pages.sessionHistory.row.youWon": "bạn +{amount}",
  "pages.sessionHistory.row.noWin": "không thắng",

  "pages.sessionHistory.detail.splitAria": "Phần chia tiền thắng",
  "pages.sessionHistory.detail.splitOf": "Chia {amount}",
  "pages.sessionHistory.detail.yourStake": "Tiền cược {amount} của bạn",
  "pages.sessionHistory.detail.noStakeFromYou": "Bạn không có cược",
  "pages.sessionHistory.detail.cardKeptGrail": "Thẻ → {name} (đã giữ Grail)",
  "pages.sessionHistory.detail.cardSoldBack": "Thẻ → {name} · đã bán lại",
  "pages.sessionHistory.detail.cardKept": "Thẻ → {name} · đã giữ",
  "pages.sessionHistory.detail.grailSoldSplit": "Grail đã bán lại → chia ở trên",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "ĐỈNH · ",
  "pages.sessionHistory.tile.wonSuffix": " · THẮNG",
  "pages.sessionHistory.tile.lostSuffix": " · thua ở lượt rút thăm",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "Tiền thắng của bạn",
  "pages.winningsStrip.title": "Tiền thắng của bạn",
  "pages.winningsStrip.decisionClock": "{n}s để quyết định",
  "pages.winningsStrip.withdrawBalance": "Rút số dư {amount}",
  "pages.winningsStrip.howItWorks": "Cách trò chơi hoạt động - tỷ lệ thắng, VRF, thẻ →",
  "pages.winningsStrip.decisionOpen": "Quyết định thẻ của bạn đang mở",
  "pages.winningsStrip.decisionNoActionKeep": "không thao tác sẽ giữ thẻ (bán bất kỳ lúc nào từ thẻ của bạn)",
  "pages.winningsStrip.decisionNoActionSell": "không thao tác sẽ tự động bán khi khóa vòng tiếp theo",
  "pages.winningsStrip.keep": "Giữ ({amount})",
  "pages.winningsStrip.sell": "Bán {amount}",
  "pages.winningsStrip.sellWithPct": "Bán {amount} · {pct}%",
  "pages.winningsStrip.yourCards": "Thẻ của bạn",
  "pages.winningsStrip.heldValue": "đang giữ {amount}",
  "pages.winningsStrip.keptByDefault": "Mặc định giữ",
  "pages.winningsStrip.withdrawAllOne": "Rút tất cả {n} thẻ · {amount}",
  "pages.winningsStrip.withdrawAllOther": "Rút tất cả {n} thẻ · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "Chắc chưa? Rút {n} thẻ",
  "pages.winningsStrip.selectToWithdraw": "Chọn để rút",
  "pages.winningsStrip.sellAll": "Bán tất cả {amount} · {pct}%",
  "pages.winningsStrip.selectedForWithdrawal": "Đã chọn để rút",
  "pages.winningsStrip.tapCardToSelect": "Chạm vào thẻ để chọn",
  "pages.winningsStrip.selectCardsToWithdraw": "Chọn thẻ để rút",
  "pages.winningsStrip.selectedSummaryOne": "{n} thẻ đã chọn · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} thẻ đã chọn · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "Rút {n} thẻ · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "Rút {n} thẻ · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "Rút số dư",
  "pages.winningsStrip.closeWithdrawAria": "Đóng rút tiền",
  "pages.winningsStrip.pastRounds": "Các vòng trước",
  "pages.winningsStrip.shareLastWin": "Chia sẻ chiến thắng gần nhất",
  "pages.winningsStrip.roundId": "V{n}",
  "pages.winningsStrip.tileTook": "Ô {n} đã thắng trọn bàn · {amount}",
  "pages.winningsStrip.chaseAward": "Săn Đuổi +{amount}",
  "pages.winningsStrip.noRound": "chưa có vòng",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "Thua",
  "pages.winningsStrip.kept": "Đã giữ",
  "pages.winningsStrip.sold": "Đã bán",
  "pages.winningsStrip.activity": "Hoạt động",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "Xác nhận bán lại thẻ",
  "pages.sellConfirm.eyebrow": "Bán lại",
  "pages.sellConfirm.title": "Bán {name}?",
  "pages.sellConfirm.payoutLabel": "Bạn nhận",
  "pages.sellConfirm.rateNote": "{pct}% của {value}",
  "pages.sellConfirm.irreversible": "Thẻ sẽ rời bộ sưu tập của bạn. Không thể hoàn tác.",
  "pages.sellConfirm.keep": "Giữ thẻ",
  "pages.sellConfirm.confirm": "Bán với giá {amount}",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "Bộ sưu tập của bạn",
  "pages.collection.summaryCardOne": "thẻ",
  "pages.collection.summaryCardOther": "thẻ",
  "pages.collection.totalValueSuffix": "tổng giá trị",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "ĐỈNH",
  "pages.collection.tierCommon": "PHỔ THÔNG",
  "pages.collection.viaKept": "ĐÃ GIỮ",
  "pages.collection.viaWon": "ĐÃ THẮNG",
  "pages.collection.cardAriaLabel": "{name}, {amount}. Nhấn Enter để mở chi tiết thẻ.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "Bảng xếp hạng",
  "pages.ladder.tabAriaLabel": "Chế độ xem bảng xếp hạng",
  "pages.ladder.tabBetters": "Top người cược",
  "pages.ladder.tabPacks": "Tỷ lệ pack",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.sectionAriaLabel": "Xếp hạng pack",
  "pages.ladder.intro":
    "Mỗi đô la sẽ lấp đầy pack lớn nhất có thể. Mỗi bậc là một máy CollectorCrypt thật, xem trước những thẻ giá trị nhất, rồi mở toàn bộ kho.",
  "pages.ladder.sourceLive": "Kho CollectorCrypt trực tiếp ({count}/{total} máy) · làm mới {age}{backlogNote}",
  "pages.ladder.sourceBundled": "Kho tham khảo: thẻ CollectorCrypt được gộp lại, giá trị bảo hiểm thật (không phải danh sách trực tiếp)",
  "pages.ladder.sourceFixtures": "Ví dụ tham khảo: bộ dữ liệu mẫu được gộp lại",
  "pages.ladder.footNote": "Tỷ lệ, khoảng giá trị và giá mua lại phản ánh đúng thông số máy gacha đã công bố của CollectorCrypt (chụp nhanh {date}).",
  "pages.ladder.footNoteLive":
    "Thẻ là hàng hóa trực tiếp trên thị trường trong khoảng giá của mỗi máy, được làm mới mỗi 5 phút giữa các vòng.",
  "pages.ladder.footNoteBundled": "Những thẻ hiển thị là một bộ thẻ CollectorCrypt đã chấm điểm thật được gộp lại, không phải danh sách trực tiếp.",
  "pages.ladder.stepUp": "Nâng bậc",
  "pages.ladder.stepUpFromPrefix": "từ {name}",
  "pages.ladder.stepUpEntryPrefix": "bậc đầu vào, tiền lẻ dưới",
  "pages.ladder.stepUpEntrySuffix": "vẫn là tiền lẻ",
  "pages.ladder.valueRange": "Khoảng giá trị",
  "pages.ladder.ceiling": "trần",
  "pages.ladder.floor": "sàn",
  "pages.ladder.machineOdds": "Tỷ lệ máy",
  "pages.ladder.buybackPrefix": "mua lại",
  "pages.ladder.grailOddsPrefix": "grail",
  "pages.ladder.poolLoading": "Đang tải kho…",
  "pages.ladder.viewMore": "Xem thêm {n}",
  "pages.ladder.cardPool": "kho {n} thẻ",
  "pages.ladder.priciestFirst": "giá trị nhất trước",
  "pages.ladder.machineCardsOnly": "{n} thẻ",
  "pages.ladder.machineNameCards": "{shortName} · {n} thẻ",
  "pages.ladder.collector.ariaLabel": "Collector leaderboard",
  "pages.ladder.collector.title": "Collector leaderboard",
  "pages.ladder.collector.description": "Collection value leads. Hold more cards, chase Grails, and show your best pull.",
  "pages.ladder.collector.playerCount.one": "{n} collector",
  "pages.ladder.collector.playerCount.other": "{n} collectors",
  "pages.ladder.collector.cardCount.one": "{n} card held",
  "pages.ladder.collector.cardCount.other": "{n} cards held",
  "pages.ladder.collector.tableAriaLabel": "Collector standings by collection value",
  "pages.ladder.collector.collectionValue": "Collection value",
  "pages.ladder.collector.cardsHeld": "Cards held",
  "pages.ladder.collector.cardsShort": "cards",
  "pages.ladder.collector.grailsPulled": "Grails pulled",
  "pages.ladder.collector.grailsShort": "Grails",
  "pages.ladder.collector.bestPull": "Best pull",
  "pages.ladder.collector.noPull": "None yet",
  "pages.ladder.collector.youRankTag": "YOU · #{n}",
  "pages.ladder.collector.viewCollection": "View collection",
  "pages.ladder.collector.empty": "No cards are held yet.",
  "pages.ladder.collector.emptyCta": "Open a pack to enter the standings",
  "pages.ladder.collector.footnote": "Collection value is the sum of cards still held on this device. Rankings refresh as rounds settle.",
  "pages.ladder.collector.rowAria": "Rank {rank}, {name}, collection value {value}, {cards} cards held, {grails} Grails pulled",

  // ===== pages.ladder.leaderboard.* (RoyaleLeaderboard.tsx, the "Top betters"
  // panel this route's "betters" tab renders - also mounted as a compact rail
  // on the board landing, see board segment's usage) =========================
  "pages.ladder.leaderboard.ariaLabel": "Bảng xếp hạng top người cược",
  "pages.ladder.leaderboard.title": "Top người cược",
  "pages.ladder.leaderboard.emptyNoSettled": "Chưa có vòng nào được quyết toán",
  "pages.ladder.leaderboard.emptyNoBetsToday": "Chưa có cược nào được quyết toán hôm nay.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "Chưa có cược nào được quyết toán.",
  "pages.ladder.leaderboard.emptyCta": "Đặt cược trên bàn chơi để có tên trong bảng",
  "pages.ladder.leaderboard.timeframeAriaLabel": "Khung thời gian",
  "pages.ladder.leaderboard.today": "Hôm nay",
  "pages.ladder.leaderboard.allTime": "Mọi thời điểm",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "View {n} more" button opens over the full machine pool). Its
  // own "view more" button reuses pages.ladder.viewMore above (same wording,
  // same surface). Counts arrive pre-formatted, digits stay as authored. ======
  "pages.ladderViewer.eyebrow": "Kho pack",
  "pages.ladderViewer.showing": "Hiện {n}/{total}",
  "pages.ladderViewer.closeAria": "Đóng kho pack",
  "pages.ladderViewer.remainingFoot": "còn {n} chưa xem · sàn {amount}",
  "pages.ladderViewer.wholePool": "Đó là toàn bộ kho {n} thẻ.",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "Kết quả vòng",
  // Plural pair (see royaleI18n.ts header, "PLURAL KEYS"): ".one" for n===1,
  // ".other" for every other count, chosen by the calling component.
  "pages.results.count.one": "{n} VÒNG",
  "pages.results.count.other": "{n} VÒNG",
  "pages.results.emptyTitle": "CHƯA CÓ VÒNG NÀO ĐƯỢC QUYẾT TOÁN",
  "pages.results.emptyBody": "Chơi một vòng trên bàn chơi và mọi thẻ nó mở ra sẽ xuất hiện ở đây, từng vòng một.",
  "pages.results.tileWins": "{winner} thắng {amount}",
  "pages.results.tileFallback": "Ô",
  "pages.results.youWon": "bạn đã thắng {amount}",
  "pages.results.noWinForYou": "bạn không thắng",
  "pages.results.replayLink": "Xem lại",
  // Bare "Payout split" (no amount) - the upgraded payout-split header (owner
  // 2026-07-22) shows the eyebrow label and the pool amount as two separate
  // nodes, unlike pages.results.payoutSplit below which bakes the amount in.
  "pages.results.payoutSplitLabel": "Phần chia tiền thắng",
  "pages.results.payoutSplit": "Phần chia tiền thắng · quỹ {amount}",
  "pages.results.yourPullPrefix": "Lượt rút của bạn ·",
  "pages.results.noPull": "không có",
  "pages.results.youKeptIt": "bạn đã giữ nó",
  "pages.results.youSoldItForCash": "bạn đã bán nó lấy tiền mặt",
  "pages.results.chaseAward": "SĂN ĐUỔI +{amount}",
  "pages.results.potLedgerFull": "quỹ {amount} đã trả hết",
  "pages.results.pool": "quỹ",
  "pages.results.potLedgerWithheld": "giữ lại",
  "pages.results.potLedgerPaidIn": "đã nạp",
  "pages.results.potLedgerCashToBackers": "tiền mặt cho người đặt cược",
  "pages.results.theChase": "Cuộc Săn Đuổi",
  "pages.results.protocol": "giao thức",
  "pages.results.jackpot": "giải thưởng",
  "pages.results.cardTrades": "giao dịch thẻ",
  "pages.results.statsAriaLabel": "Tổng kết phiên chơi",
  "pages.results.roundsPlayed": "SỐ VÒNG ĐÃ CHƠI",
  "pages.results.winRate": "TỶ LỆ THẮNG",
  "pages.results.cashWon": "TIỀN MẶT THẮNG",
  "pages.results.biggestPackPull": "LƯỢT RÚT PACK LỚN NHẤT",
  "pages.results.noneYet": "CHƯA CÓ",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "{pct} tỷ lệ",
  "pages.results.oddsUnavailable": "chưa có tỷ lệ",
  "pages.results.collapseRoundAria": "Thu gọn vòng {n}",
  "pages.results.expandRoundAria": "Mở rộng vòng {n}",
  "pages.results.playersTitle": "NGƯỜI CHƠI KHÁC",
  "pages.results.playersCount.one": "{n} người chơi",
  "pages.results.playersCount.other": "{n} người chơi",
  "pages.results.playersShow": "Hiện",
  "pages.results.playersHide": "Ẩn",
  "pages.results.playerBid": "CƯỢC",
  "pages.results.playerResult": "KẾT QUẢ",
  "pages.results.playerCash": "{amount} tiền mặt",
  "pages.results.playerNoCards": "không có thẻ",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner - mounted by
  // both RoyaleCollectionRoute and RoyaleWinningsStrip) ======================
  "pages.sellBack.ariaLabel": "Bán lại thẻ của bạn",
  "pages.sellBack.title": "Bán lại",
  "pages.sellBack.hint": "Giá đã khóa từ thời điểm bạn thắng, không bao giờ báo giá lại.",
  "pages.sellBack.quietState": "Bán lại mở cùng các vòng trực tiếp.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers - a locale reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "Đã hết hạn",
  "pages.sellBack.countdownDaysHours": "còn {d} ngày {h} giờ",
  "pages.sellBack.countdownHoursMinutes": "còn {h} giờ {m} phút",
  "pages.sellBack.countdownMinutes": "còn {m} phút",
  "pages.sellBack.countdownSubMinute": "còn <1 phút",

  // --- royaleSellBack.ts: custody badges (sellBackCustodyBadge). Informational
  // only, sell-back stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "Đang chờ giao",
  "pages.sellBack.badgeNeedsWallet": "Cần ví",

  // --- royaleSellBack.ts: player-facing copy for every domain error code
  // (sellBackErrorCopy). Each pair is a title + the detail rendered under it.
  "pages.sellBack.error.quoteExpired.title": "Đề nghị này đã hết hạn",
  "pages.sellBack.error.quoteExpired.detail":
    "Cửa sổ bán lại đã trôi qua. Thẻ vẫn là của bạn. Thị trường mở giờ là lối ra.",
  "pages.sellBack.error.alreadyExercised.title": "Đã bán lại rồi",
  "pages.sellBack.error.alreadyExercised.detail": "Thẻ này đã được bán lại rồi. Đang hiện biên nhận của lần bán đó.",
  "pages.sellBack.error.quoteVoid.title": "Đề nghị đã bị rút lại",
  "pages.sellBack.error.quoteVoid.detail":
    "Đề nghị bán lại này đã bị bộ phận vận hành rút lại. Liên hệ hỗ trợ nếu bạn đang chờ một khoản chi trả.",
  "pages.sellBack.error.notQuoteOwner.title": "Không phải thẻ của bạn",
  "pages.sellBack.error.notQuoteOwner.detail": "Đề nghị bán lại này thuộc về một tài khoản khác.",
  "pages.sellBack.error.cardNotDelivered.title": "Thẻ vẫn đang trên đường giao",
  "pages.sellBack.error.cardNotDelivered.detail":
    "Thẻ vẫn chưa giao xong tới ví của bạn. Hãy thử lại trong giây lát.",
  "pages.sellBack.error.cardNotHeld.title": "Thẻ không có trong ví của bạn",
  "pages.sellBack.error.cardNotHeld.detail":
    "Ví của bạn không còn giữ đúng thẻ này. Chỉ thẻ gốc mới có thể dùng đề nghị này.",
  "pages.sellBack.error.returnTxRequired.title": "Cần chữ ký",
  "pages.sellBack.error.returnTxRequired.detail":
    "Lần bán lại này cần chữ ký của bạn để trả lại thẻ. Ký rồi thử lại.",
  "pages.sellBack.error.returnNotConfirmed.title": "Việc trả thẻ chưa được xác nhận",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "Việc trả thẻ chưa được xác nhận trên chuỗi khối. Đề nghị vẫn còn hiệu lực. Thử lại khi sẵn sàng.",
  "pages.sellBack.error.rateLimited.title": "Quá nhiều lần thử",
  "pages.sellBack.error.rateLimited.detail": "Chậm lại một chút rồi thử lại.",
  "pages.sellBack.error.accountRequired.title": "Cần đăng nhập",
  "pages.sellBack.error.accountRequired.detail": "Kết nối tài khoản của bạn để bán lại một thẻ.",
  "pages.sellBack.error.quoteNotFound.title": "Không tìm thấy đề nghị",
  "pages.sellBack.error.quoteNotFound.detail": "Đề nghị bán lại này không còn tồn tại.",
  "pages.sellBack.error.quoteIdRequired.title": "Đã có lỗi xảy ra",
  "pages.sellBack.error.quoteIdRequired.detail": "Yêu cầu bán lại thiếu thông tin bắt buộc.",
  "pages.sellBack.error.unknown.title": "Bán lại thất bại",
  "pages.sellBack.error.unknown.detail": "Đã có lỗi xảy ra ở phía chúng tôi. Hãy thử lại trong giây lát.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "Đồng bộ trực tiếp tự động thử lại. Các đề nghị đã khóa giữ nguyên giá.",
  "pages.sellBack.offlineTitle": "Bạn đang ngoại tuyến",
  "pages.sellBack.offlineBody": "Kết nối lại và các đề nghị đã khóa của bạn vẫn ở đây.",
  "pages.sellBack.loadFailedTitle": "Không tải được báo giá",
  "pages.sellBack.loadFailedBody": "Các đề nghị đã khóa giữ nguyên giá. Hãy tải lại trong giây lát.",
  "pages.sellBack.tryAgain": "Thử lại",
  "pages.sellBack.emptyTitle": "Chưa có thẻ nào để bán lại",
  "pages.sellBack.emptyBody": "Thắng một pack và đề nghị mua lại của nó sẽ xuất hiện ở đây ngay khi vòng được quyết toán.",
  "pages.sellBack.pastSellBacks": "Các lần bán lại trước",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "Đề nghị cục bộ",
  "pages.sellBack.noExpiry": "Không hết hạn",
  "pages.sellBack.preparing": "Đang chuẩn bị…",
  "pages.sellBack.sellBackAmount": "Bán lại {amount}",
  "pages.sellBack.waitingSignature": "Đang chờ chữ ký của bạn…",
  "pages.sellBack.signatureUnwired": "Bán lại thẻ này cần chữ ký ví. Đề nghị đã khóa của bạn vẫn còn hiệu lực.",
  "pages.sellBack.confirmInWallet": "Xác nhận trong ví của bạn…",
  "pages.sellBack.sellingBack": "Đang bán lại…",
  "pages.sellBack.receiptAlreadySold": "Đã bán lại rồi",
  "pages.sellBack.receiptSoldBack": "Đã bán lại",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "Đã trả {amount} · {rail}",
  "pages.sellBack.railGameBalance": "số dư game",

  // --- RoyaleSellBackPanel.tsx: the "Past sell-backs" history rows.
  "pages.sellBack.historySoldBack": "Đã bán lại · {amount}",
  "pages.sellBack.historyExpired": "Đề nghị đã hết hạn",
  "pages.sellBack.historyWithdrawn": "Đề nghị đã bị rút lại",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "chưa từng",
  "pages.profile.relTime.justNow": "vừa xong",
  "pages.profile.relTime.minutesAgo": "{n} phút trước",
  "pages.profile.relTime.hoursAgo": "{n} giờ trước",
  "pages.profile.relTime.daysAgo": "{n} ngày trước",
  "pages.profile.relTime.monthsAgo": "{n} tháng trước",
  "pages.profile.noDate": "–",

  "pages.profile.count.settledRoundOne": "{n} vòng đã quyết toán",
  "pages.profile.count.settledRoundOther": "{n} vòng đã quyết toán",
  "pages.profile.count.roundOne": "{n} vòng",
  "pages.profile.count.roundOther": "{n} vòng",
  "pages.profile.count.settledOutcomeOne": "{n} kết quả đã quyết toán",
  "pages.profile.count.settledOutcomeOther": "{n} kết quả đã quyết toán",
  "pages.profile.xOfRoundsOne": "{x}/{n} vòng",
  "pages.profile.xOfRoundsOther": "{x}/{n} vòng",

  "pages.profile.follow": "Theo dõi",
  "pages.profile.following": "Đang theo dõi",
  "pages.profile.linkCopied": "Đã sao chép liên kết",
  "pages.profile.headlineStatsAria": "Thống kê nổi bật",

  "pages.profile.chartWindow7d": "7N",
  "pages.profile.chartWindow30d": "30N",
  "pages.profile.chartWindowAll": "Tất cả",
  "pages.profile.chartValueAria": "Giá trị bộ sưu tập từ {from} đến {to} trong khung thời gian này",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "hiện tại",
  "pages.profile.viewRoundResultsAria": "Xem kết quả Vòng #{n}",

  "pages.profile.collectionViewAll": "Mọi thẻ",
  "pages.profile.collectionViewVault": "Trong kho",
  "pages.profile.collectionViewOffers": "Đề nghị",
  "pages.profile.collectionViewHistory": "Lịch sử",
  "pages.profile.collectionStateAria": "Trạng thái bộ sưu tập",
  "pages.profile.openCollection": "Mở bộ sưu tập ↗",
  "pages.profile.collectionEmptyHistoryTitle": "CHƯA CÓ LẦN BÁN LẠI NÀO",
  "pages.profile.collectionEmptyHistoryBody": "Bán lại một thẻ đang giữ và biên nhận sẽ xuất hiện ở đây.",
  "pages.profile.inVault": "Trong kho · Vòng #{n}",
  "pages.profile.sellBackOffer": "Đề nghị bán lại · {amount}",
  "pages.profile.soldBack": "Đã bán lại",
  "pages.profile.soldAtSettlement": "Đã bán khi quyết toán",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "Thao tác bán lại và các đề nghị trực tiếp diễn ra ở trang bộ sưu tập.",

  "pages.profile.pnlByRound": "LÃI/LỖ THEO VÒNG",
  "pages.profile.pnlSubtitle": "{n} vòng cược gần nhất · thắng trên, thua dưới · {wins}T {losses}B",
  "pages.profile.pnlAria": "Kết quả ròng theo từng vòng, {n} vòng gần nhất",
  "pages.profile.pnlColAria": "Vòng {n}: {signed}",
  "pages.profile.pnlTooltip": "V{n} · {signed}",

  "pages.profile.recentForm": "PHONG ĐỘ GẦN ĐÂY",
  "pages.profile.recentFormSubtitle": "{n} vòng cược gần nhất, cũ nhất trước",
  "pages.profile.formColAria": "Vòng {n}: {result} {amount}",
  "pages.profile.won": "thắng",
  "pages.profile.lost": "thua",
  "pages.profile.formW": "T",
  "pages.profile.formL": "B",

  "pages.profile.leaderboardEyebrow": "BẢNG XẾP HẠNG · {mode}",
  "pages.profile.modeMostProfitable": "LỢI NHUẬN CAO NHẤT",
  "pages.profile.modeHighestVolume": "KHỐI LƯỢNG CAO NHẤT",
  "pages.profile.topPlayers": "top {n} người chơi",
  "pages.profile.metricProfit": "LỢI NHUẬN",
  "pages.profile.metricVolume": "KHỐI LƯỢNG",
  "pages.profile.metricNetPnl": "LÃI/LỖ RÒNG",
  "pages.profile.filtersAria": "Bộ lọc bảng xếp hạng",
  "pages.profile.metricFilterAria": "Chỉ số",
  "pages.profile.windowFilterAria": "Khung thời gian",
  "pages.profile.window1d": "1N",
  "pages.profile.window7d": "7N",
  "pages.profile.window30d": "30N",
  "pages.profile.windowAll": "TẤT CẢ",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "NGƯỜI CHƠI",
  "pages.profile.thRounds": "SỐ VÒNG",
  "pages.profile.you": "BẠN",
  "pages.profile.leaderboardEmpty": "CHƯA CÓ NGƯỜI CHƠI NÀO TRONG KHUNG THỜI GIAN NÀY. Bảng sẽ đầy dần khi các cược và tiền thắng được ghi nhận.",

  "pages.profile.notFoundTitle": "CHƯA CÓ VÒNG NÀO ĐƯỢC LẬP CHỈ MỤC",
  "pages.profile.notFoundBody": "{wallet} chưa quyết toán vòng nào mà máy chủ đã lập chỉ mục.",
  "pages.profile.offlineTitle": "KHÔNG THỂ TRUY CẬP HỒ SƠ",
  "pages.profile.offlineBody": "Tra cứu người chơi cần kết nối trực tiếp. Thử lại để tải bản ghi này.",
  "pages.profile.retry": "THỬ LẠI",

  "pages.profile.collectorSince": "Sưu tầm từ {month}",
  "pages.profile.lastActive": "hoạt động gần nhất {rel}",
  "pages.profile.rankAllTime": "Hạng #{n} · mọi thời điểm",
  "pages.profile.netPnl": "Lãi/lỗ ròng",
  "pages.profile.lifetime": "trọn đời",
  "pages.profile.bidWinRate": "Tỷ lệ cược thắng",
  "pages.profile.cardsWon": "Thẻ đã thắng",
  "pages.profile.grailsOne": "{n} grail",
  "pages.profile.grailsOther": "{n} grail",
  "pages.profile.totalStaked": "Tổng đã cược",
  "pages.profile.betsCount": "{n} cược",
  "pages.profile.biggestRound": "Vòng lớn nhất",
  "pages.profile.singleRoundSwing": "biến động trong một vòng",
  "pages.profile.playerStatsAria": "Thống kê người chơi",
  "pages.profile.winsLosses": "THẮNG / THUA",
  "pages.profile.roundsPlayed": "SỐ VÒNG ĐÃ CHƠI",
  "pages.profile.betsPlaced": "SỐ CƯỢC ĐÃ ĐẶT",
  "pages.profile.voidedRounds": "VÒNG BỊ HỦY",

  "pages.profile.tablePlayer": "Người chơi tại bàn",
  "pages.profile.playerFallback": "Người chơi",
  "pages.profile.localEmptyTitle": "CHƯA CÓ VÒNG NÀO TRONG PHIÊN NÀY",
  "pages.profile.localEmptyBody": "{name} chưa đặt cược vào ô nào trong phiên này.",
  "pages.profile.sessionNet": "Lãi ròng phiên",
  "pages.profile.cashSplitsOnly": "chỉ phần chia tiền mặt",
  "pages.profile.thisSession": "phiên này",
  "pages.profile.packsOpened": "Pack đã mở",
  "pages.profile.onBackedTiles": "trên các ô đã cược",
  "pages.profile.biggestPull": "Lượt rút lớn nhất",
  "pages.profile.noneYet": "Chưa có",
  "pages.profile.recentActivity": "Hoạt động gần đây",
  "pages.profile.noSettledOutcomesPlayer": "Chưa có kết quả nào được quyết toán cho người chơi này trong phiên này.",

  "pages.profile.pageTitle": "Hồ sơ",
  "pages.profile.followingCount": "Đang theo dõi {n}",
  "pages.profile.collectionValue": "Giá trị bộ sưu tập",
  "pages.profile.updatedAgo": "cập nhật {rel}",
  "pages.profile.noCardsYet": "chưa có thẻ",
  "pages.profile.change30d": "Thay đổi 30 ngày",
  "pages.profile.allNewIn30": "toàn bộ mới trong 30 ngày",
  "pages.profile.noChange": "không đổi",
  "pages.profile.cardsOwned": "Thẻ đang sở hữu",
  "pages.profile.realizedProceeds": "Tiền thu về đã thực hiện",
  "pages.profile.sellBackOne": "{n} lần bán lại",
  "pages.profile.sellBackOther": "{n} lần bán lại",
  "pages.profile.tabHighlights": "Điểm nổi bật",
  "pages.profile.tabCollection": "Bộ sưu tập",
  "pages.profile.tabActivity": "Hoạt động",
  "pages.profile.tabStats": "Thống kê",
  "pages.profile.tabsAria": "Các mục hồ sơ",
  "pages.profile.emptyHighlightsTitle": "CHƯA CÓ VÒNG NÀO ĐƯỢC GHI NHẬN",
  "pages.profile.emptyHighlightsBody":
    "Đặt cược vào một ô trên bàn chơi và hồ sơ của bạn sẽ đầy dần: đường giá trị, hoạt động, bộ sưu tập và thứ hạng.",
  "pages.profile.collectionPerformance": "Hiệu suất bộ sưu tập",
  "pages.profile.chartWindowAria": "Khung thời gian biểu đồ",
  "pages.profile.chartEmpty": "Chưa có giá trị bộ sưu tập. Giữ một lượt rút thắng và đường biểu đồ sẽ bắt đầu từ đây.",
  "pages.profile.thisWindow": "khung thời gian này",
  "pages.profile.chartNoChanges": "Không có thay đổi bộ sưu tập trong khung thời gian này.",
  "pages.profile.viewAll": "Xem tất cả {n}",
  "pages.profile.collectionHighlights": "Điểm nổi bật của bộ sưu tập",
  "pages.profile.seeAll": "Xem tất cả {n}",
  "pages.profile.noCardsInVault": "Chưa có thẻ nào trong kho. Giữ một lượt rút và nó sẽ hiện ở đây dưới dạng thẻ đã chấm điểm.",
  "pages.profile.activityAria": "Hoạt động",
  "pages.profile.roundHistoryAria": "Lịch sử vòng",
  "pages.profile.onThisDevice": "{count} trên thiết bị này",
  "pages.profile.noActivityYet": "Chưa có hoạt động nào. Các vòng bạn cược và thẻ bạn giữ hoặc bán sẽ xuất hiện ở đây.",
  "pages.profile.performanceAria": "Hiệu suất",
  "pages.profile.walletAria": "Ví",
  "pages.profile.walletEyebrow": "VÍ",
  "pages.profile.emptyStatsBody": "Đặt cược vào một ô trên bàn chơi và lãi/lỗ, tỷ lệ thắng cùng sổ vòng chơi của bạn sẽ được xây dựng ở đây.",
  "pages.profile.findPlayerAria": "Tìm người chơi",
  "pages.profile.lookUpWallet": "TRA CỨU MỘT VÍ",
  "pages.profile.walletPlaceholder": "Dán địa chỉ ví hoặc mã khách",
  "pages.profile.view": "XEM",
  "pages.profile.myProfile": "HỒ SƠ CỦA TÔI",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx, mounted in
  // the #wallet section right below the walletEyebrow/walletAria header
  // above) - LOCAL/PROOF ONLY, no money moves off a money runtime, but the
  // copy is written in real-money voice since it is the real-money flow's UI.
  "pages.profile.withdraw.ariaLabel": "Rút tiền thắng",
  "pages.profile.withdraw.title": "Rút tiền",
  "pages.profile.withdraw.subtitle": "Rút một phần hoặc toàn bộ số dư của bạn về một ví Solana.",
  "pages.profile.withdraw.available": "Khả dụng",
  "pages.profile.withdraw.amountLabel": "Số tiền (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "Mức rút tiền có sẵn",
  "pages.profile.withdraw.destinationLabel": "Ví nhận",
  "pages.profile.withdraw.destinationPlaceholder": "Địa chỉ Solana",
  "pages.profile.withdraw.submit": "Rút tiền",
  "pages.profile.withdraw.submitBusy": "Đang yêu cầu...",
  "pages.profile.withdraw.note":
    "Bạn phê duyệt mỗi lần rút bằng chữ ký ví, và USDC của bạn sẽ được trả tới địa chỉ Solana bạn cung cấp.",
  "pages.profile.withdraw.errorInvalidAmount": "NHẬP MỘT SỐ TIỀN HỢP LỆ (0.01 ĐẾN 10,000).",
  "pages.profile.withdraw.errorInvalidDestination": "NHẬP MỘT ĐỊA CHỈ SOLANA NHẬN HỢP LỆ.",
  "pages.profile.withdraw.requesting": "ĐANG YÊU CẦU RÚT {amount}...",
  "pages.profile.withdraw.sent": "ĐÃ GỬI YÊU CẦU RÚT - {amount} TỚI {destShort}...",
  "pages.profile.withdraw.signatureRequired":
    "CẦN CHỮ KÝ VÍ - KÝ MÃ NONCE RÚT TIỀN BẰNG VÍ CỦA BẠN (CHỈ RIÊNG TOKEN PRIVY SẼ BỊ TỪ CHỐI).",
  "pages.profile.withdraw.refused": "YÊU CẦU RÚT BỊ TỪ CHỐI ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible PLAYER STATS
  // dashboard mounted by the profile route's Stats tab). CAPS micro-labels are
  // a deliberate house style: keep a locale's own caps convention, never
  // lowercase them just because the source shouts. The GRAIL tier row keeps its
  // brand name in English and needs no key (see royaleI18n.ts's rules). ======
  "pages.stats.title": "THỐNG KÊ NGƯỜI CHƠI",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} VÒNG · {packs} PACK",
  "pages.stats.noRoundsYet": "CHƯA CÓ VÒNG NÀO",
  "pages.stats.emptyBody": "CHƯA CÓ VÒNG NÀO. Đặt cược vào một ô để bắt đầu theo dõi lãi/lỗ ròng, tỷ lệ thắng và lượt rút của bạn.",
  "pages.stats.netPnl": "LÃI/LỖ RÒNG",
  "pages.stats.roi": "ROI",
  "pages.stats.winRate": "TỶ LỆ THẮNG",
  "pages.stats.totalStaked": "TỔNG ĐÃ CƯỢC",
  "pages.stats.totalWon": "TỔNG ĐÃ THẮNG",
  "pages.stats.holdings": "TÀI SẢN NẮM GIỮ",
  "pages.stats.cardsHeld.one": "{n} thẻ",
  "pages.stats.cardsHeld.other": "{n} thẻ",
  "pages.stats.packsOpened": "PACK ĐÃ MỞ",
  "pages.stats.chaseHits": "SỐ LẦN SĂN ĐUỔI TRÚNG",
  "pages.stats.bestRound": "VÒNG TỐT NHẤT",
  "pages.stats.worstRound": "VÒNG TỆ NHẤT",
  "pages.stats.biggestPackPull": "LƯỢT RÚT PACK LỚN NHẤT",
  "pages.stats.noneYet": "CHƯA CÓ",
  "pages.stats.perTierHits": "SỐ LẦN TRÚNG THEO BẬC",
  "pages.stats.tierTop": "ĐỈNH",
  "pages.stats.tierCommon": "PHỔ THÔNG",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "see last round results" record page) ============================
  "pages.arenaResults.title": "Kết quả đấu trường",
  "pages.arenaResults.backToArena": "← Quay lại đấu trường",
  "pages.arenaResults.emptyBody": "Chưa có trận đấu trường nào được quyết toán.",
  "pages.arenaResults.enterArena": "Vào đấu trường →",
  "pages.arenaResults.matchNumber": "TRẬN #{n}",
  // The headline reads "<player name> takes the pot"; the self view uses the
  // second-person verb. The name itself is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "thắng trọn quỹ",
  "pages.arenaResults.takesThePot": "thắng trọn quỹ",
  "pages.arenaResults.potCards.one": "quỹ · {n} thẻ",
  "pages.arenaResults.potCards.other": "quỹ · {n} thẻ",
  "pages.arenaResults.winner": "NGƯỜI THẮNG",
  "pages.arenaResults.theChase": "CUỘC SĂN ĐUỔI",
  "pages.arenaResults.protocol": "GIAO THỨC",
  "pages.arenaResults.cardsValue.one": "{n} thẻ · {amount}",
  "pages.arenaResults.cardsValue.other": "{n} thẻ · {amount}",
  "pages.arenaResults.cardsWonAria": "Thẻ đã thắng",
  "pages.arenaResults.toTheWinner": "CHO NGƯỜI THẮNG",
  "pages.arenaResults.smallPot": "Quỹ dưới {n} thẻ: người thắng nhận trọn. Cuộc Săn Đuổi và giao thức không nhận gì.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "Hồ sơ thẻ",
  "pages.cardDetailRoute.notFoundTitle": "KHÔNG TÌM THẤY THẺ",
  "pages.cardDetailRoute.notFoundBody":
    "Đường liên kết này trỏ tới một thẻ mà trình duyệt này chưa từng thấy. Thẻ được xác định từ các vòng chơi của chính bạn và bản chụp nhanh kho CollectorCrypt hiện tại.",
  "pages.collection.viewRound": "Xem vòng ↗",
  "pages.sellBack.showAllOffers": "Hiện tất cả {n} đề nghị",
  "pages.sellBack.showFewerOffers": "Hiện ít đề nghị hơn",
  "pages.common.shareCard": "Chia sẻ thẻ",
} as Record<string, string>;
