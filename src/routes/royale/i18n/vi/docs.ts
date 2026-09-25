// Vietnamese (Tiếng Việt): "docs" segment. Machine-consistent quality pass
// (i18n epic, vi docs segment), flagged for a later native-speaker editorial
// review. Two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts.
//
// Terminology (binding across every vi segment, see vi/core.ts's header for
// the full glossary): "vòng" for round, "quỹ" for pool/pot, "Cuộc Săn Đuổi"
// for the Chase, "ô" for tile, "người đặt cược" for backer(s), "tiền lẻ"
// for the loose-change mechanic (docs.how.heatRemainder.* KEY names are kept
// as-is for parity across locales, only their values changed; "heat" is
// NEVER used or transliterated here), "rút thăm" for the winner-selection
// draw, "mua lại" for buyback, "giữ" for keep, "bán lại" for sell back.
// No source-file, path, or module reference appears in any value here;
// {path} and {email} in docs.howItWorks.api.contact are opaque tokens the
// component fills in, never literal text.
//
// BOLD EMPHASIS (docs.howItWorks.* only): inline `**bold**` markers are kept
// balanced and moved onto whichever words carry the emphasis in Vietnamese,
// with the sentence freely reordered around {token}s.
export default {
  "docs.header.title": "Tài liệu",
  "docs.header.back": "← Quay lại bàn chơi",

  "docs.tabs.ariaLabel": "Chế độ xem tài liệu",
  "docs.tabs.how": "Cách chơi",
  "docs.tabs.technical": "Kỹ thuật",

  "docs.how.intro": "Phiên bản giải thích đơn giản. Đọc phần này trước, rồi chuyển sang Kỹ thuật để xem cơ chế chính xác.",
  "docs.technical.intro": "Cơ chế chính xác, bằng những con số rõ ràng.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "attn ROYALE là gì?",
  "docs.how.whatIsRoyale.a":
    "Một trò chơi mở pack trực tiếp. Mỗi vòng, người chơi đặt cược pack vào các ô. Khi vòng khóa, mọi ô có cược sẽ xé mở pack của mình trực tiếp, và những người đặt cược của một ô sẽ chia trọn quỹ.",

  "docs.how.whatIsPack.q": "Pack là gì?",
  "docs.how.whatIsPack.a":
    "Một bậc có giá cố định, xé mở thành một thẻ đã chấm điểm thật ngay khi ô của nó mở ra. Bậc thang gồm {starter}, {elite}, {legendary}, {grail} và {mythic}. Pack càng lớn, thẻ rút ra càng giá trị.",

  "docs.how.howBacking.q": "Đặt cược vào một ô hoạt động như thế nào?",
  "docs.how.howBacking.a":
    "Chọn một ô bạn thích và đặt cược pack vào đó. Cược cùng những người chơi khác trên cùng một ô và bạn sẽ chia sẻ ô đó: phần thắng của bạn khớp với tỷ lệ pack bạn đã tự mình đặt vào.",

  "docs.how.heatRemainder.q": "Nếu cược của tôi không đủ để thành một pack trọn vẹn thì sao?",
  "docs.how.heatRemainder.a":
    "Bất cứ khoản nào dưới giá pack rẻ nhất sẽ nằm trên ô dưới dạng tiền lẻ. Nó đi cùng phần còn lại của tiền cược của bạn, nhưng không tự mở ra thẻ nào cho tới khi lớn thành một pack trọn vẹn, và chính những thẻ đã mở mới quyết định tỷ lệ thắng.",

  "docs.how.howWheelPicks.q": "Vòng quay chọn người thắng như thế nào?",
  "docs.how.howWheelPicks.a":
    "Khi khóa vòng, mọi ô có cược sẽ xé mở pack của mình trực tiếp. Vòng quay sau đó sẽ dừng ở một ô, và thẻ ô đó mở ra càng giá trị, phần của nó trên vòng quay càng lớn. Một lượt rút lớn có thể biến một ô nhỏ thành ứng viên nặng ký nhất. Việc chọn lựa đến từ một lượt rút thăm ngẫu nhiên có thể kiểm chứng, không bao giờ do con người quyết định.",

  "docs.how.whatDoIWin.q": "Tôi thắng được gì?",
  "docs.how.whatDoIWin.aBefore": "Những người đặt cược của ô thắng chia nhau",
  "docs.how.whatDoIWin.aEmphasis": "toàn bộ quỹ của vòng",
  "docs.how.whatDoIWin.aAfter":
    ", chứ không chỉ tiền cược của riêng ô đó, theo đúng tỷ lệ mỗi người đã cược vào ô. Người đặt cược lớn nhất của ô cũng được ưu tiên nhận thẻ giá trị nhất của ô.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Giữ hay bán, khác nhau ở đâu?",
  "docs.how.keepOrSell.keepLabel": "Giữ",
  "docs.how.keepOrSell.keepBody": "thêm thẻ vào bộ sưu tập của bạn miễn phí.",
  "docs.how.keepOrSell.sellLabel": "Bán lại",
  "docs.how.keepOrSell.sellBody": "trả cho bạn một phần giá trị của thẻ thẳng vào số dư bằng USDC, không cần chờ đợi.",

  "docs.how.decisionTimeout.q": "Điều gì xảy ra nếu tôi không quyết định kịp thời gian?",
  "docs.how.decisionTimeout.a":
    "Bạn có một khoảng thời gian ngắn để lựa chọn. Nếu để trôi qua, thẻ sẽ tự động bán lại theo mức giá hiện hành, để không có gì bạn thắng bị mắc kẹt.",

  "docs.how.whatIsChase.q": "Cuộc Săn Đuổi là gì?",
  "docs.how.whatIsChase.a":
    "Một giải thưởng tích lũy được nạp bởi một phần nhỏ từ quỹ của mỗi vòng. Nó có thể kích hoạt ở bất kỳ vòng nào, qua lượt rút thăm độc lập của riêng nó, và một lượt rút Grail không kích hoạt nó. Khi kích hoạt, toàn bộ giải thưởng sẽ được trả vào phần chia thắng của vòng đó.",

  "docs.how.howToStartFree.q": "Làm sao để bắt đầu miễn phí?",
  "docs.how.howToStartFree.a":
    "Tham gia bằng mã mời và nhận một số dư miễn phí bằng đúng giá một pack Starter. Không cần ví, không cần đăng nhập, bạn có thể vào chơi ngay với tư cách khách.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Bậc thang pack",
  "docs.tech.packLadder.body":
    "Năm loại pack bạn có thể mua: {starter}, {elite}, {legendary}, {grail}, {mythic}. Một cược sẽ tạo thành những pack lớn nhất mà nó có thể trả được, lớn nhất trước. Phần còn lại dưới giá pack rẻ nhất sẽ nằm trên ô dưới dạng tiền lẻ và không tự mở thẻ nào. Một cược đặt dưới dạng một pack cụ thể sẽ giữ nguyên đúng pack đó, chỉ có tiền lẻ mới lớn dần khi được cộng thêm.",

  "docs.tech.oddsWeighting.title": "Điều gì quyết định tỷ lệ thắng: những thẻ mà một ô mở ra",
  "docs.tech.oddsWeighting.body":
    "Cơ hội thắng của một ô không phải là số tiền đã cược vào nó. Khi khóa vòng, mọi ô có tiền sẽ mở pack của mình, và phần rút thăm của một ô là giá trị các thẻ nó vừa mở ra, so với giá trị mọi thẻ đã mở trong vòng đó. Một lượt rút lớn có thể biến một ô nhỏ thành ứng viên nặng ký nhất. Một ô không mở được thẻ nào sẽ không có cơ hội gì cả, và tiền lẻ một mình không bao giờ tự mở ra thẻ. Nếu cả vòng không mở được thẻ nào, sẽ không có gì để rút thăm: vòng đó bị hủy và toàn bộ tiền cược được hoàn lại đầy đủ.",

  "docs.tech.vrfDraw.title": "Lượt rút thăm người thắng được khởi tạo bằng VRF và mang tính tất định",
  "docs.tech.vrfDraw.body":
    "Mỗi vòng tạo ra một số ngẫu nhiên có thể kiểm chứng từ một công thức cố định: mã vòng, thời hạn của nó, bàn chơi đã đóng băng, số lượng vé và độ ngẫu nhiên của chuỗi khối lấy sau khi khóa. Ô thắng cuộc là kết quả của một bước đi tất định duy nhất của con số đó qua trọng số các ô. Cùng một đầu vào luôn cho ra cùng một người thắng, trọng số các ô được công bố và khóa lại trước khi bước đi diễn ra, và bất kỳ ai cũng có thể kiểm tra lại toàn bộ lượt rút thăm từ biên nhận của vòng đó sau này.",

  "docs.tech.settlementMath.title": "Cách tính quyết toán",
  "docs.tech.settlementMath.body":
    "Những người đặt cược của ô thắng chia nhau toàn bộ quỹ của vòng, chứ không chỉ tiền cược của riêng ô mình, theo đúng tỷ lệ mỗi người đã cược vào ô đó. Một khoản trích {take} của nhà cái được lấy trước tiên: {chaseCut} nạp vào giải thưởng Cuộc Săn Đuổi, {protocolCut} tài trợ cho giao thức. Khoản trích đó được trả bằng thẻ bất cứ khi nào có thể, thẻ dư rẻ nhất trước tiên, và một thẻ quá giá trị để đủ trích sẽ được bỏ qua thay vì bị bán, nên những lượt rút lớn không phải là thứ bị lấy đi. Chỉ phần mà thẻ không đủ bù mới được lấy từ tiền mặt của quỹ.",

  "docs.tech.cardAllocation.title": "Ai nhận được thẻ",
  "docs.tech.cardAllocation.body":
    "Chỉ thẻ giá trị nhất của ô thắng mới mang theo quyết định giữ hay bán, và nó thuộc về người đặt cược lớn nhất của ô đó. Mọi thẻ khác mà ô đó mở ra được chia cho những người đặt cược theo đúng tỷ lệ mỗi người đã cược, thẻ giá trị nhất trước. Nhận một thẻ sẽ trừ giá bán lại của nó từ phần chia tiền mặt của chính bạn, vậy nên đó là một sự đánh đổi chứ không phải một chi phí: bạn kết thúc vòng chơi với cùng một giá trị dù chọn cách nào. Nếu phần chia của không ai đủ để bù một thẻ, nhà cái sẽ mua nó và số tiền đó vẫn nằm trong phần chia, nên không ai bị ép nhận thẻ. Một Grail thứ hai trong cùng vòng không được xử lý đặc biệt ở đây, nó được chia cùng với phần chiến lợi phẩm còn lại, và Cuộc Săn Đuổi không bao giờ lấy Grail.",

  "docs.tech.sellBackRates.title": "Tỷ lệ bán lại",
  "docs.tech.sellBackRates.body":
    "Mỗi thẻ mang một giá bán lại cố định do pack sinh ra nó quy định: {entryRate} ở bậc đầu vào, {midRate} ở giữa, {topRate} ở bậc cao nhất. Bán sẽ trả ngay số tiền đó vào số dư của bạn, và giữ thẻ không tốn của bạn gì cả. Các tỷ lệ này phản ánh đúng tỷ lệ mua lại tức thì đã công bố cho cùng các máy đó trên CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "Giải thưởng Cuộc Săn Đuổi",
  "docs.tech.chaseJackpot.body":
    "Một giải thưởng tích lũy được nạp {chaseCut} từ quỹ của mỗi vòng. Nó kích hoạt qua lượt rút thăm độc lập của riêng nó, trung bình khoảng một lần mỗi tuần ở tốc độ vòng bình thường, và một lượt rút Grail không kích hoạt nó. Khi kích hoạt, toàn bộ giải thưởng sẽ được trả vào phần chia thắng của vòng đó, rồi đặt lại về 0 và bắt đầu tích lũy lại. Cuộc Săn Đuổi cũng lấy một thẻ mỗi vòng khi có thể, nhưng chỉ từ một ô đã thua, không bao giờ là thẻ giá trị nhất vòng, và không bao giờ là Grail.",

  "docs.tech.decisionWindow.title": "Cửa sổ quyết định",
  "docs.tech.decisionWindow.body":
    "Thắng được thẻ chủ đạo của ô sẽ mở ra một cửa sổ giữ hay bán kéo dài {window} giây. Nếu không có câu trả lời khi cửa sổ đóng lại, hoặc khi vòng tiếp theo khóa, thẻ sẽ được bán theo mức giá hiện hành, để không có gì bạn thắng bị mắc kẹt.",

  "docs.tech.devnetCustody.title": "Lưu ký USDC trên devnet",
  "docs.tech.devnetCustody.body":
    "Số dư di chuyển dưới dạng các giao dịch USDC thật trên Solana devnet. Việc lưu ký thực hiện qua ví nhúng Privy của bạn, hoặc dự phòng bằng một cặp khóa chỉ dùng cho devnet được lưu trong chính trình duyệt của bạn, cả hai đều ký cùng một đường chuyển tiền mà hệ thống lưu ký sản xuất sử dụng.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "Hủy vòng và hoàn tiền",
  "docs.tech.voidRefund.body":
    "Một vòng chỉ có thể thắng thông qua các thẻ đã mở, nên một vòng mà không ô nào mở được thẻ sẽ không có gì để rút thăm. Vòng đó bị hủy ngay lập tức: mọi tiền cược trên bàn chơi được hoàn lại đầy đủ, nhà cái không lấy gì, và Cuộc Săn Đuổi không được nạp gì. Bản ghi rút thăm đã công bố của một vòng bị hủy hiển thị tổng số thẻ bằng 0, đó là bằng chứng cho thấy việc hủy vòng là do bàn chơi buộc phải xảy ra chứ không do ai lựa chọn.",

  "docs.tech.cardExits.title": "Thẻ bạn thắng sẽ về ví của bạn",
  "docs.tech.cardExits.body":
    "Giữ một thẻ và nó sẽ được chuyển vào ví của chính bạn qua một giao dịch đã ký, với phí mạng được trả thay cho bạn. Nếu ví của bạn chưa thể nhận thẻ, việc giao thẻ sẽ được tạm giữ và thử lại cho tới khi thành công, không bao giờ bị bỏ dở. Bán lại một thẻ và bạn sẽ được trả đúng giá đã báo tại thời điểm bạn thắng nó, không bao giờ báo giá lại, và mức giá đó chỉ có thể dùng một lần duy nhất: nó được đánh dấu đã dùng trước khi tiền di chuyển, nên cùng một thẻ không bao giờ được trả hai lần.",

  "docs.tech.deposits.title": "Nạp tiền USDC",
  "docs.tech.deposits.body":
    "Một khoản nạp là một giao dịch chuyển USDC trên Solana mà bạn ký từ chính ví của mình. Số dư của bạn chỉ được cộng sau khi giao dịch đó được xác nhận trên chuỗi vào kho của trò chơi, với số tiền và điểm đến được đọc từ chính chuỗi khối, không bao giờ từ yêu cầu gửi lên. Mỗi chữ ký giao dịch chỉ có thể cộng đúng một lần, nên lặp lại một khoản nạp không thể cộng hai lần, và một giao dịch vượt quá giới hạn mỗi lần chuyển sẽ được ghi nhận là còn nợ lại cho bạn thay vì biến mất.",

  "docs.tech.withdrawals.title": "Rút tiền USDC",
  "docs.tech.withdrawals.body":
    "Một khoản rút sẽ trừ số dư của bạn trước, sau đó gửi USDC từ kho tới điểm đến bạn đã phê duyệt: đăng nhập đã xác minh của bạn xác nhận đúng số tiền và điểm đến đó, và một yêu cầu không khớp với bằng chứng của nó sẽ bị từ chối. Biên nhận lưu giữ chữ ký giao dịch. Nếu chuỗi khối từ chối hẳn giao dịch, số dư của bạn sẽ được hoàn lại đúng một lần. Nếu giao dịch đã được gửi đi nhưng chưa xác nhận, sẽ không có gì được hoàn lại cho tới khi chuỗi khối đưa ra câu trả lời cuối cùng, nên một khoản rút không bao giờ được trả hai lần, kể cả khi hệ thống khởi động lại.",

  "docs.tech.identity.title": "Một tài khoản, dù bạn đăng nhập bằng cách nào",
  "docs.tech.identity.body":
    "Đăng nhập bằng Privy hoặc chứng minh một ví Solana bằng cách ký một thử thách máy chủ dùng một lần: cả hai con đường đều dẫn đến cùng một tài khoản bền vững, được xác định bởi danh tính đã xác minh và không gì khác. Mọi thứ di chuyển tiền đều chạy trên tài khoản của danh tính đã tự chứng minh ngay trong yêu cầu đó, và các tên, mã, tiêu đề tự khai báo đều bị bỏ qua, nên không ai có thể hướng một khoản nạp, một cược, hay một khoản rút vào số dư của người khác.",

  "docs.tech.reconnect.title": "Kết nối lại và khởi động lại",
  "docs.tech.reconnect.body":
    "Đăng xuất và tiền sẽ dừng lại: trên các kênh USDC, một khoản nạp, một cược, hay một khoản rút không có bằng chứng sở hữu sẽ bị từ chối. Đăng nhập lại và cùng tài khoản đó đang chờ bạn, với cùng số dư và cùng những thẻ đó, vì mọi thứ bạn sở hữu đều nằm trong một sổ cái bền vững chứ không phải trên trang web. Khi máy chủ khởi động lại, sổ cái đó được phát lại và cho ra cùng các con số, và một giao dịch đã được gửi đi sẽ không bao giờ được gửi lần hai.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "Các mục tài liệu",
  "docs.nav.overview": "Tổng quan",
  "docs.nav.prev": "Trước",
  "docs.nav.next": "Tiếp theo",

  "docs.nav.section.introduction": "Giới thiệu",
  "docs.nav.section.gameplay": "Lối chơi",
  "docs.nav.section.cards": "Thẻ và lưu ký",
  "docs.nav.section.money": "Tiền",
  "docs.nav.section.fairness": "Công bằng",
  "docs.nav.section.account": "Tài khoản",

  "docs.nav.page.whatIsRoyale": "attn ROYALE là gì",
  "docs.nav.page.packs": "Pack và bậc thang",
  "docs.nav.page.startFree": "Bắt đầu miễn phí",
  "docs.nav.page.backing": "Đặt cược vào một ô",
  "docs.nav.page.theDraw": "Lượt rút thăm",
  "docs.nav.page.winning": "Bạn thắng được gì",
  "docs.nav.page.chase": "Cuộc Săn Đuổi",
  "docs.nav.page.keepOrSell": "Giữ hay bán",
  "docs.nav.page.cardAllocation": "Ai nhận được thẻ",
  "docs.nav.page.sellBack": "Tỷ lệ bán lại",
  "docs.nav.page.cardDelivery": "Giao thẻ",
  "docs.nav.page.deposits": "Nạp tiền",
  "docs.nav.page.withdrawals": "Rút tiền",
  "docs.nav.page.settlement": "Cách tính quyết toán",
  "docs.nav.page.custody": "Lưu ký USDC",
  "docs.nav.page.odds": "Điều gì quyết định tỷ lệ thắng",
  "docs.nav.page.vrf": "Lượt rút thăm VRF",
  "docs.nav.page.voidRefund": "Hủy vòng và hoàn tiền",
  "docs.nav.page.identity": "Một tài khoản",
  "docs.nav.page.reconnect": "Kết nối lại và khởi động lại",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE, hành trình của mỗi đồng đô la",
  "docs.howItWorks.lead": "Luật chơi đầy đủ. Cách người thắng được chọn, và ai nhận được thẻ.",
  "docs.howItWorks.backToBoard": "Quay lại bàn chơi →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Một vòng chơi diễn ra như thế nào",
  "docs.howItWorks.round.pickBet":
    "Chọn mức cược, rồi nhấp vào một ô: mỗi lần nhấp sẽ thêm số tiền đó vào quỹ của ô.",
  "docs.howItWorks.round.yourShare":
    "**Phần chia của bạn** trên một ô = tiền cược của bạn ÷ tổng của ô đó. {stake} vào một ô {tile} là một phần chia **{pct}**. Nếu ô đó thắng, bạn nhận {pct} tiền thắng của nó.",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "**Cơ hội thắng** được quyết định lúc xé mở, không phải lúc đặt cược: khi vòng khóa, mọi ô có cược sẽ mở pack của mình, và phần vòng quay của một ô là giá trị các thẻ nó vừa mở ra, so với mọi thẻ đã mở trong vòng đó.",
  "docs.howItWorks.round.tickets":
    "Một ô **không mở được thẻ nào** sẽ không có phần nào cả, và nếu cả vòng không mở được thẻ nào, vòng đó sẽ bị **hủy** và toàn bộ tiền cược được hoàn lại đầy đủ.",
  "docs.howItWorks.round.vrf":
    "Khi khóa vòng, một **VRF** (hàm ngẫu nhiên có thể kiểm chứng) sẽ rút ra một vé thắng từ các con số đã khóa của vòng: mã vòng, thời hạn, tổng của mỗi ô, số lượng vé. Không ai, kể cả nhà cái, có thể can thiệp vào nó.",
  "docs.howItWorks.round.oddsAreReal": "Tỷ lệ hiển thị trên mỗi ô chính xác là phép tính rút thăm đó, không phải cảm tính.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Cược của bạn mua được gì",
  "docs.howItWorks.buys.ladderLead": "Tổng của một ô sẽ tự gộp thành các pack, lớn nhất trước:",
  "docs.howItWorks.buys.example":
    "Ví dụ: một ô **{amount}** mua được một Legendary, một Elite, và một Starter.",
  "docs.howItWorks.buys.change":
    "Tiền quá ít để mua pack tiếp theo là **tiền lẻ**: nó vẫn tính vào quỹ và phần chia thắng của bạn, nhưng không mở ra pack nào, và chính những thẻ đã mở mới quyết định tỷ lệ thắng.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Đã có sẵn một Mythic? Nút nâng cấp sẽ nhắm tới **một Mythic trọn vẹn khác** thay vì một pack nhỏ hơn. Bậc thang không bao giờ đi xuống.",
  "docs.howItWorks.buys.cardsPerPack":
    "Khi khóa vòng, mọi ô có tiền sẽ mở **một thẻ cho mỗi pack trọn vẹn** mà nó đang giữ, tối đa **{max} thẻ** hiển thị trên bàn chơi (phần còn lại được liệt kê ở trang kết quả). Một ô chỉ có tiền lẻ sẽ không mở gì cả.",
  "docs.howItWorks.buys.undeliverable":
    "Nếu một pack không thể giao thực sự (hết hàng, trục trặc kỹ thuật, hết thời gian), chi phí của nó sẽ được hoàn lại cho bạn bằng tiền mặt thay vì bị mắc kẹt.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Người thắng nhận được gì",
  "docs.howItWorks.winner.entirePool":
    "Những người đặt cược của ô thắng chia nhau **toàn bộ quỹ của vòng**, chứ không chỉ quỹ riêng của ô đó.",
  "docs.howItWorks.winner.proRata":
    "Phần chia được tính **theo tỷ lệ**: góp {pct} của ô, nhận **{pct}** tiền thắng.",
  "docs.howItWorks.winner.take":
    "**{take}** của mỗi quỹ được trích ra trước khi chia: **{chaseCut}** nạp vào giải thưởng Cuộc Săn Đuổi, **{protocolCut}** tài trợ cho giao thức (giới thiệu, mua thẻ cho Cuộc Săn Đuổi, vận hành, mua lại token).",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "Khoản {take} đó được trả bằng thẻ bất cứ khi nào có thể, thẻ dư rẻ nhất trước tiên, và một thẻ quá giá trị để đủ trích sẽ được bỏ qua thay vì bị bán, nên những lượt rút lớn không phải là thứ bị lấy đi. Chỉ phần mà thẻ không đủ bù mới được lấy từ tiền mặt của quỹ.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "Cuộc Săn Đuổi",
  "docs.howItWorks.chase.feed": "Cuộc Săn Đuổi là một giải thưởng tích lũy, được nạp **{cut}** từ mỗi quỹ.",
  "docs.howItWorks.chase.cardCut":
    "Khi có thể, Cuộc Săn Đuổi lấy phần của mình bằng thẻ thay vì tiền mặt, nhưng chỉ là thẻ của một ô thua có giá trị **không quá {cut}** của quỹ, không bao giờ là thẻ giá trị nhất vòng, và không bao giờ là Grail.",
  "docs.howItWorks.chase.independentDraw":
    "Giải thưởng kích hoạt qua **lượt rút thăm ngẫu nhiên độc lập** của riêng nó, trung bình khoảng **một lần mỗi tuần** ở tốc độ vòng thông thường. Một lượt rút Grail không kích hoạt nó.",
  "docs.howItWorks.chase.payout":
    "Khi kích hoạt, **toàn bộ giải thưởng** sẽ được trả vào phần chia thắng của vòng đó, rồi đặt lại về 0 và tích lũy lại từ khoản nạp của các vòng tiếp theo.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail",
  "docs.howItWorks.grails.what":
    "Một **grail** là lượt rút hiếm nhất, giá trị nhất mà bất kỳ pack nào có thể ra. Ngay cả một Starter {price} cũng có thể trúng.",
  "docs.howItWorks.grails.headlineGrail":
    "Nếu thẻ chủ đạo của ô thắng là một grail: **Giữ** yêu cầu người đặt cược lớn nhất phải mua lại phần của những người đặt cược khác trên ô (trừ vào tiền mặt của họ); **Bán** chia tiền thắng **theo tỷ lệ trên toàn bộ ô**, không chỉ riêng người đặt cược lớn nhất.",
  "docs.howItWorks.grails.otherGrails":
    "Bất kỳ grail nào khác được rút trong vòng đó (trên một ô khác, hoặc là thẻ thêm) đều là chiến lợi phẩm thêm cho những người đặt cược thắng, được xử lý y hệt như bất kỳ thẻ thêm nào khác. Nó không bao giờ bị gom vào Cuộc Săn Đuổi, và vì khoản trích được trả bằng thẻ rẻ nhất trước, một grail là thẻ cuối cùng mà nó sẽ chạm tới.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Ai nhận được thẻ",
  "docs.howItWorks.cards.headline":
    "**Thẻ chủ đạo** của ô thắng (lượt rút giá trị cao nhất của nó) chỉ thuộc về riêng người đặt cược lớn nhất của ô: Giữ miễn phí, hoặc Bán theo giá mua lại bằng tiền mặt, trả riêng cho họ, không chia với phần còn lại của ô.",
  "docs.howItWorks.cards.rest":
    "Mọi thẻ khác mà ô đó rút được, cộng với bất kỳ chiến lợi phẩm thêm nào từ các ô thua, được chia ra theo giá trị lớn nhất trước, theo tỷ lệ tiền cược. Người đặt cược lớn nhất của ô thường nhận được nhiều nhất, và tốt nhất, trong số đó.",
  "docs.howItWorks.cards.deduction":
    "Nhận một trong số những thẻ đó sẽ trừ giá mua lại của nó từ phần chia tiền mặt của chính bạn. Đó là đúng số tiền mặt bạn sẽ nhận được nếu bán nó, nên bạn không mất gì cả.",
  "docs.howItWorks.cards.neverForced":
    "Không đủ tiền cho một thẻ? Bạn không bao giờ bị ép nhận nó. Nhà cái sẽ mua thay, và số tiền đó vẫn nằm trong phần chia.",
  "docs.howItWorks.cards.workedExample":
    "**Ví dụ cụ thể.** Quỹ {pool}. **{take}** ({takeAmount}: {chaseAmount} Cuộc Săn Đuổi, {protocolAmount} giao thức) được trích trước, thường được trả bằng một thẻ dư thay vì tiền mặt của bạn. **{split}** còn lại để chia: bạn cược {yourPct} của ô ({yourStake}), Sam cược {samPct} ({samStake}). Ô đó rút được một thẻ chủ đạo {headline} (một pack Legendary, mua lại **{buyback}**) và một thẻ thêm {extra}. Bạn giữ thẻ {headline} miễn phí. Nó là của bạn dù thế nào đi nữa. Thẻ {extra} thuộc về Sam: **{buyback}** giá trị của nó, tức **{samCash}**, được trừ từ phần chia của Sam. Kết quả: bạn ra về với **{yourStake} tiền mặt + thẻ {headline}**; Sam nhận **{samCash} tiền mặt + thẻ {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Giữ hay bán",
  "docs.howItWorks.keepSell.buttons":
    "Mỗi thẻ bạn nhận được đi kèm hai nút: **Giữ** đưa thẻ vào bộ sưu tập của bạn; **Bán** trả theo giá mua lại của pack bằng USDC, thẳng vào số dư của bạn.",
  "docs.howItWorks.keepSell.usdc": "USDC là một đô la kỹ thuật số: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Giá mua lại do chính pack sinh ra thẻ quy định: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** Grail trở lên.",
  "docs.howItWorks.keepSell.window":
    "Bạn có một cửa sổ **{seconds} giây** ngay sau khi thắng, và nếu bạn không quyết định, nó sẽ đơn giản kéo dài sang trọn vòng tiếp theo: hiển thị dưới bàn chơi và trong Thẻ của bạn.",
  "docs.howItWorks.keepSell.autoSell":
    "Vẫn chưa quyết định khi vòng tiếp theo khóa? Lúc đó thẻ sẽ **tự động bán** theo giá mua lại của nó. Tiền không bao giờ bị mắc kẹt.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Thuật ngữ",
  "docs.howItWorks.glossary.change":
    "**Tiền lẻ**: số tiền trên một ô quá ít để mua pack tiếp theo. Nó tính vào quỹ và phần chia thắng của bạn, nhưng chỉ những thẻ đã mở mới mang cơ hội thắng.",
  "docs.howItWorks.glossary.house":
    "**Nhà cái**: kho tài trợ cho việc mua lại thẻ và hấp thụ mọi thẻ mà không ai đủ tiền nhận.",
  "docs.howItWorks.glossary.chase":
    "**Cuộc Săn Đuổi**: một giải thưởng tích lũy được nạp {cut} từ mỗi quỹ; kích hoạt qua lượt rút thăm độc lập của riêng nó, không phụ thuộc vào bất kỳ kết quả thẻ cụ thể nào.",
  "docs.howItWorks.glossary.grail": "**Grail**: thẻ hiếm nhất, giá trị nhất mà bất kỳ pack nào có thể ra.",
  "docs.howItWorks.glossary.buyback":
    "**Mua lại**: mức giá cố định để quy đổi một thẻ thành tiền mặt bằng {low} đến {high} giá trị của nó, tùy theo bậc pack.",
  "docs.howItWorks.glossary.proRata": "**Theo tỷ lệ**: chia theo đúng tỷ lệ mỗi người đã góp vào.",
  "docs.howItWorks.glossary.vrf": "**VRF**: một lượt rút thăm ngẫu nhiên mà bất kỳ ai cũng có thể kiểm chứng sau đó.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API đặt cược (bản thử nghiệm giới hạn)",
  "docs.howItWorks.api.what":
    "Một API lập trình để đọc một vòng đang diễn ra, đăng ký luồng sự kiện, và đặt cược từ mã nguồn hoặc một tác nhân tự động. Nó vận hành cùng tỷ lệ thắng và cách quyết toán như bàn chơi.",
  "docs.howItWorks.api.access":
    "Quyền truy cập **đang đóng** và chỉ theo yêu cầu: mặc định bị tắt, và mỗi lệnh gọi cần một khóa API nằm trong danh sách cho phép.",
  "docs.howItWorks.api.realBets":
    "Đặt một cược thật cần thêm một bước kiểm tra: bằng chứng đó thực sự là bạn (cùng thông tin đăng nhập như trên trang web), và nó tuân theo cùng giới hạn cược mà mọi người chơi đều có.",
  "docs.howItWorks.api.contact": "Xem tài liệu dành cho lập trình viên tại {path} và gửi email tới {email} để yêu cầu khóa.",
  "docs.how.controls.q": "How do I control a bet?",
  "docs.how.controls.a":
    "Open Gear to find grouped settings. On wide screens, each section can collapse. In Display, the landscape fullscreen toggle helps hide browser chrome where the browser allows it. The bet rail puts the full dollar total first, then the pack name and count. Tap the selected pack again to un-arm it without placing another bet.",
  "docs.how.chat.q": "Can I read table chat in my language?",
  "docs.how.chat.a":
    "Chat auto-translates bot and round messages into your selected language. Use \"show original\" on a translated line to see its source wording. Player-written messages stay as written.",
  "docs.how.collectors.q": "Where can I see the collector leaderboard?",
  "docs.how.collectors.a":
    "Open Ladder and choose Collectors. Top betters stays the first tab. Collectors ranks held cards by collection value and shows cards held, Grails pulled, and each collector's best pull.",
  "docs.how.replay.q": "Can I replay a finished round?",
  "docs.how.replay.a":
    "Yes. Open a finished round's replay to scrub from betting through the reveal, pause or restart it, and choose up to 5x speed.",

  "docs.tech.controls.title": "Settings, pack selection, and bet labels",
  "docs.tech.controls.body":
    "Gear groups Language, Betting, Display, Reveals, Sound, Auto-sell, and Hotkeys into sections. On wide screens each section can collapse, and the collapsed state is remembered. Display includes a landscape fullscreen toggle that requests the browser's supported chrome-free mode, with a compact-bar fallback on iPhone Safari. The bet rail makes the full dollar total the headline before the pack name and count. A pack button sets one exact pack choice; clicking that same selected pack again clears the armed choice and its persisted intent, so the next tile click cannot place that pack by accident.",
  "docs.tech.chat.title": "Chat translation and original copy",
  "docs.tech.chat.body":
    "Chat auto-translates keyed bot and table-event messages into the selected locale without rewriting the stored history. A translated row exposes a \"show original\" control that switches that row back to its source wording. Player-authored free text remains exactly as written when no translation service is available, so the feature never invents a translation.",
  "docs.tech.collectors.title": "Collector leaderboard",
  "docs.tech.collectors.body":
    "The Ladder surface keeps Top betters as its default tab and adds a Collectors tab. Collector rows rank the held cards in a player's collection by collection value and expose cards held, Grails pulled, and the best pull name with its value. The client builds the view from stored rounds, the local collection, and the signed-in profile, then keeps the player's row linked to their profile.",
  "docs.tech.replay.title": "Full-round replay speeds",
  "docs.tech.replay.body":
    "A finished round replay covers the recorded betting timeline and the reveal cinema on one playhead. Play, pause, seek, restart, and export remain available, with playback choices of 1x, 2x, 4x, and 5x. A speed click changes the playback rate for the timeline and the next reveal entry; it does not remount or rewrite a reveal already in progress.",

  "docs.nav.section.tools": "Tools",
  "docs.nav.page.controls": "Settings and controls",
  "docs.nav.page.chat": "Table chat",
  "docs.nav.page.collectors": "Collector leaderboard",
  "docs.nav.page.replay": "Round replay",

  "docs.howItWorks.tools.title": "Controls and extras",
  "docs.howItWorks.tools.controls":
    "Gear keeps the settings readable: wide layouts let you collapse sections, Display owns the landscape fullscreen toggle, and the bet rail leads with the full dollar total before the pack name and count. Tap the selected pack again to un-arm it.",
  "docs.howItWorks.tools.chat":
    "Chat auto-translates bot and round messages into your selected language. Use show original on a translated row to return to its source wording; player-written lines stay as written.",
  "docs.howItWorks.tools.collectors":
    "Ladder keeps Top betters first and adds Collectors as a second tab, ranking held cards by collection value with cards held, Grails pulled, and best-pull detail.",
  "docs.howItWorks.tools.replay":
    "Finished rounds replay from betting through the reveal with play, pause, seek, restart, and 1x, 2x, 4x, or 5x speed.",
} as Record<string, string>;
