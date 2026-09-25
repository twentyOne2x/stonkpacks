// Vietnamese (Tiếng Việt): "onboarding" segment. Machine-consistent quality
// pass (i18n epic, vi onboarding segment), flagged for a later native-
// speaker editorial review. Owns RoyaleOnboardingGate.tsx (the invite + $25
// Starter pack + profile gate), RoyaleWelcomeTour.tsx (the 4-step
// how-it-works tour), RoyaleRotateGate.tsx (the mobile-portrait rotate
// prompt), and RoyaleSettingsOverlay.tsx's two chrome strings. It also owns
// royaleProfile.ts's profile-form validation reasons, RoyalePresenceChip.tsx,
// RoyaleLiveStreamHud.tsx, RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and
// RoyaleFundShortfallToast.tsx. Same key set as en/onboarding.ts.
//
// NOTE: the "attn ROYALE" wordmark itself is never translated anywhere in
// the app - it stays hardcoded English in the component even inside an
// otherwise-translated sentence. "Starter" (the pack tier name) is a brand
// term and stays English inside onboarding.invite.ledeStarter /
// onboarding.welcome.ledeStarter / onboarding.tour.spot7.*, including
// mid-sentence ("pack Starter").
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "mời",
  "onboarding.invite.title": "Chỉ dành cho người được mời",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "attn ROYALE hiện chỉ dành cho người được mời. Nhập mã của bạn để nhận {amount} tiền cược và vào bàn chơi.",
  "onboarding.invite.ledeStarter": "attn ROYALE hiện chỉ dành cho người được mời. Nhập mã của bạn để nhận miễn phí một pack Starter {amount} và vào bàn chơi.",
  "onboarding.invite.inputPlaceholder": "MÃ MỜI",
  "onboarding.invite.inputAriaLabel": "Mã mời",
  "onboarding.invite.unlockButton": "Mở khóa",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "Chưa có mã? Hỏi người đã mời bạn, hoặc dán đường liên kết {link} của bạn.",
  "onboarding.invite.errorInvalidCode": "Nhập mã mời từ lời mời của bạn.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "tín dụng",
  "onboarding.welcome.grantLabelStarterPack": "pack Starter",
  "onboarding.welcome.titleBack": "Chào mừng trở lại",
  "onboarding.welcome.title": "Chào mừng đến bàn chơi",
  "onboarding.welcome.backLede": "Tiếp tục từ nơi bạn đã dừng lại, {name}. Hồ sơ và số dư của bạn đã được lưu trên thiết bị này.",
  "onboarding.welcome.fallbackName": "người chơi",
  "onboarding.welcome.ledeStake": "Lời mời của bạn có giá trị cho một khoản cược {amount}. Đặt tên và vào bàn chơi.",
  "onboarding.welcome.ledeStarter": "Lời mời của bạn có giá trị cho một pack Starter {amount} miễn phí. Đặt cược bằng pack và vào bàn chơi.",
  "onboarding.welcome.continueWithX": "Tiếp tục với X",
  "onboarding.welcome.optionalHint": "không bắt buộc",
  "onboarding.welcome.connectWallet": "Kết nối ví",
  "onboarding.welcome.playFreeNote": "Chơi miễn phí ngay bây giờ. Không cần ví hay đăng nhập.",
  "onboarding.welcome.or": "hoặc",
  "onboarding.welcome.continueAsTemplate": "Tiếp tục với tên {name}",
  "onboarding.welcome.fallbackProfileName": "hồ sơ của bạn",
  "onboarding.welcome.close": "Đóng",
  "onboarding.welcome.createProfile": "Tạo hồ sơ của bạn",
  "onboarding.welcome.skipGuest": "Bỏ qua và chơi với tư cách khách",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Chơi ngay",
  "onboarding.welcome.pickNameFirst": "Hoặc chọn tên trước",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Thiết lập hồ sơ của bạn",
  "onboarding.profile.xPhotoAlt": "Ảnh hồ sơ X của bạn",
  "onboarding.profile.connectedAsTemplate": "Đã kết nối với tên {handle}",
  "onboarding.profile.xAccountFallback": "Tài khoản X",
  "onboarding.profile.walletLabelTemplate": "Ví {address}",
  "onboarding.profile.displayNameLabel": "Tên hiển thị",
  "onboarding.profile.displayNamePlaceholder": "Chúng tôi nên gọi bạn là gì?",
  "onboarding.profile.handleLabel": "Tên định danh",
  "onboarding.profile.handlePlaceholder": "tencuaban",
  "onboarding.profile.handleHint": "Mã định danh riêng của bạn tại bàn chơi. Chữ cái, số và dấu gạch dưới.",
  "onboarding.profile.handleTaken": "Tên định danh này đã được dùng trên thiết bị này.",
  "onboarding.profile.startButtonTemplate": "Bắt đầu chơi · {amount} do nhà cái tặng",
  "onboarding.profile.back": "Quay lại",
  "onboarding.profile.skip": "Bỏ qua",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "Cách attn ROYALE hoạt động",
  "onboarding.tour.skip": "Bỏ qua",
  "onboarding.tour.step1.eyebrow": "01 · Đặt cược vào một ô",
  "onboarding.tour.step1.titleUsdc": "Rải USDC vào các ô bạn thích",
  "onboarding.tour.step1.titlePacks": "Đặt cược pack vào các ô bạn thích",
  "onboarding.tour.step1.bodyUsdc": "Mỗi ô là một vị trí bạn đặt cược bằng USDC. Bạn đặt càng nhiều vào một ô, phần chia thắng của bạn càng lớn. Dồn vào một ô, hoặc rải ra vài ô.",
  "onboarding.tour.step1.bodyPacks": "Mỗi ô là một vị trí bạn đặt cược bằng pack. Bạn dồn càng nhiều vào một ô, phần chia thắng của bạn càng lớn. Dồn hết vào một ô, hoặc rải ra vài ô.",
  "onboarding.tour.step2.eyebrow": "02 · Khóa & xé mở",
  "onboarding.tour.step2.title": "Khi khóa vòng, mọi ô sẽ xé mở pack của mình",
  "onboarding.tour.step2.body": "Khi vòng khóa, mỗi ô có cược sẽ xé mở pack của mình và rút ra những thẻ đã chấm điểm thật, trực tiếp, qua một lượt rút thăm có thể kiểm chứng, ngay trước mắt bạn.",
  "onboarding.tour.step3.eyebrow": "03 · Giá trị cao nhất thắng",
  "onboarding.tour.step3.title": "Ô giàu giá trị nhất thắng trọn quỹ",
  "onboarding.tour.step3.bodyUsdc": "Trọng số của mỗi ô là giá trị thẻ đã rút cộng với USDC trên đó. Ô càng nặng, tỷ lệ thắng càng cao. Thắng, và bạn sẽ chia trọn quỹ của cả vòng.",
  "onboarding.tour.step3.bodyPacks": "Trọng số của mỗi ô là giá trị thẻ đã rút cộng với các pack đã đặt cược trên đó. Ô càng nặng, tỷ lệ thắng càng cao. Thắng, và bạn sẽ chia trọn quỹ của cả vòng.",
  "onboarding.tour.step4.eyebrow": "04 · Giữ, bán, săn đuổi",
  "onboarding.tour.step4.title": "Rút tiền, và theo dõi Cuộc Săn Đuổi",
  "onboarding.tour.step4.body": "Giữ những thẻ bạn thắng dưới dạng thẻ đã chấm điểm, hoặc bán lại theo giá mua lại của chúng. Và Cuộc Săn Đuổi là một giải thưởng tích lũy có thể đổ xuống bất kỳ ô nào, ở bất kỳ vòng nào.",
  "onboarding.tour.back": "Quay lại",
  "onboarding.tour.next": "Tiếp theo",
  "onboarding.tour.enterBoard": "Vào bàn chơi",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour (owner 2026-07-31:
  // "highlight the sections, darken the others that arent being introduced,
  // and show the items with an arrow and a description"). Seven coach-mark
  // steps anchored to the LIVE board. The v1 step1-step4 keys above stay
  // (append-only contract) but are no longer rendered. {amount} in spot7 is
  // the free Starter grant (FREE_PLAY_STARTING_USD, currency-formatted by the
  // component). spot3 ships touch variants: the component picks *Touch on
  // coarse pointers, where betting is tap-to-arm then tap-to-confirm.
  // PACKS framing only (owner: "its not chip usdc for now ... its bet packs");
  // a USDC-live pass would add Usdc variants like the v1 keys had.
  "onboarding.tour.stepTag": "Bước {n}/{total}",
  "onboarding.tour.spot1.eyebrow": "Cược của bạn",
  "onboarding.tour.spot1.title": "Chọn pack của bạn",
  "onboarding.tour.spot1.body": "Bạn đặt cược bằng pack. Mỗi pack được niêm phong, chứa thẻ TCG đã được chấm điểm và được Collector Crypt hỗ trợ. Hãy chọn pack bạn muốn chơi.",
  "onboarding.tour.spot2.eyebrow": "Số lượng chồng",
  "onboarding.tour.spot2.title": "Chọn số lượng",
  "onboarding.tour.spot2.body": "Bộ đếm này quyết định mỗi lần cược sẽ đặt bao nhiêu pack. Một pack là đủ để bắt đầu. Tăng lên khi bạn muốn cược lớn hơn.",
  "onboarding.tour.spot3.eyebrow": "Đặt cược của bạn",
  "onboarding.tour.spot3.title": "Nhấp vào một ô để đặt cược",
  "onboarding.tour.spot3.titleTouch": "Chạm vào một ô để đặt cược",
  "onboarding.tour.spot3.body": "Nhấp vào một ô sẽ đặt pack của bạn lên đó. Bạn dồn càng nhiều pack vào một ô, phần chia của bạn càng lớn nếu ô đó thắng. Dồn mạnh vào một ô hoặc rải ra vài ô.",
  "onboarding.tour.spot3.bodyTouch": "Chạm vào một ô một lần để ngắm, rồi chạm lại lần nữa để xác nhận cược. Bạn dồn càng nhiều pack vào một ô, phần chia của bạn càng lớn nếu ô đó thắng.",
  "onboarding.tour.spot4.eyebrow": "Vòng chơi",
  "onboarding.tour.spot4.title": "Quỹ và đồng hồ",
  "onboarding.tour.spot4.body": "Mọi pack được đặt cược trên bàn chơi đều nạp vào quỹ này. Khi đồng hồ về 0, việc đặt cược sẽ khóa lại và mọi ô có cược sẽ xé mở pack của mình trực tiếp.",
  "onboarding.tour.spot5.eyebrow": "Lượt rút thăm",
  "onboarding.tour.spot5.title": "Ô nặng thắng thường xuyên hơn",
  "onboarding.tour.spot5.body": "Một lượt rút thăm ngẫu nhiên có trọng số theo giá trị chọn ra một ô. Các ô thua nhường lại thẻ và tiền cược; những người đặt cược vào ô thắng chia phần giá trị có thể phân phối của vòng theo tỷ lệ số tiền họ đã đặt.",
  "onboarding.tour.spot6.eyebrow": "Tiền của bạn",
  "onboarding.tour.spot6.title": "Số dư và nạp tiền",
  "onboarding.tour.spot6.body": "Số dư của bạn nằm ở đây. Nạp thêm tiền bằng Nạp tiền và rút bất cứ khi nào bạn muốn. Tiền thắng sẽ về đây ngay khi một vòng được quyết toán.",
  "onboarding.tour.spot7.eyebrow": "Nhà cái tặng",
  "onboarding.tour.spot7.title": "Pack Starter {amount} miễn phí của bạn",
  "onboarding.tour.spot7.body": "Bạn bắt đầu với một pack Starter {amount} miễn phí. Nó đã được nạp sẵn trong bộ chọn. Chọn một ô bạn thích rồi bắt đầu.",
  "onboarding.tour.finish": "Bắt đầu chơi",
 "onboarding.tour.paused": "Vòng đấu sắp bắt đầu - chúng ta sẽ tiếp tục ngay sau đó.",
  "onboarding.tour.act2.choice": "Xem một ván diễn ra",
  "onboarding.tour.act2.choiceHint": "Khoảng 30 giây, gồm cả phần mở thẻ",
  "onboarding.tour.act2.bettingTitle": "Mỗi pack đặt cược gộp thành một quỹ",
  "onboarding.tour.act2.bettingBody": "Người chơi chồng pack lên các ô. Mọi pack trên bàn đều đổ vào một quỹ duy nhất, và một ô sẽ lấy trọn.",
  "onboarding.tour.act2.drawTitle": "Giá trị trở thành tỷ lệ",
  "onboarding.tour.act2.drawBody": "Tỷ phần của mỗi ô trong giá trị của toàn bộ thẻ đã rút chính là cơ hội thắng. Một lượt rút thăm ngẫu nhiên có thể kiểm chứng, được tính trọng số theo giá trị, chọn ra ô thắng.",
  "onboarding.tour.act2.losersTitle": "Mỗi ô thua đều nhường lại thẻ của mình",
  "onboarding.tour.act2.losersBody": "Thẻ và tiền mặt có thể phân phối từ toàn bộ bàn chơi chuyển đến những người đặt cược vào ô thắng.",
  "onboarding.tour.act2.splitTitle": "Mức đặt của bạn quyết định phần của bạn",
  "onboarding.tour.act2.splitBody": "Những người đặt cược vào ô thắng chia tiền mặt và thẻ có thể phân phối của vòng từ mọi ô, theo tỷ lệ mỗi người đã đặt vào ô đó.",
  "onboarding.tour.act2.grailCaption": "Nghi lễ grail",
  "onboarding.tour.act2.yourTurnEyebrow": "Đến lượt bạn",
  "onboarding.tour.act2.yourTurnTitle": "Starter pack của bạn đã sẵn sàng",
  "onboarding.tour.act2.yourTurnBody": "Bàn chơi đã trực tiếp trở lại. Chọn một ô và đặt cược pack đầu tiên.",
  "onboarding.tour.act2.continue": "Vào ván",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Xoay điện thoại của bạn để chơi attn ROYALE",
  "onboarding.rotate.title": "Xoay ngang điện thoại của bạn",
  "onboarding.rotate.body": "Bàn chơi hiển thị tốt nhất ở chế độ ngang. Xoay máy để vào vòng chơi.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "Cài đặt",
  "onboarding.settingsClose": "Đóng cài đặt",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Chọn một tên định danh để người chơi khác có thể tìm thấy bạn.",
  "onboarding.profileValidation.handleTooShort": "Tên định danh phải có ít nhất 3 ký tự.",
  "onboarding.profileValidation.handleCharset": "Chỉ dùng chữ cái, số và dấu gạch dưới.",
  "onboarding.profileValidation.nameRequired": "Thêm một tên để hiển thị tại bàn chơi.",
  "onboarding.profileValidation.nameTooLong": "Giữ dưới {n} ký tự.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "đang xem",
  "onboarding.presence.tierPlaying": "đang chơi",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Bạn đang chơi: đã cược {amount} ở vòng này",
  "onboarding.presence.youWatching": "Bạn đang xem",
  "onboarding.presence.youWatchingBackground": "Bạn đang xem (tab nền)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE ngay lúc này. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Bạn: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} tab khác của bạn đang mở",
  "onboarding.presence.otherTabs.other": "+{n} tab khác của bạn đang mở",
  "onboarding.presence.othersBacking.one": "{n} người khác đang đặt cược vào một ô ở vòng này",
  "onboarding.presence.othersBacking.other": "{n} người khác đang đặt cược vào một ô ở vòng này",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Tình trạng luồng phát attn ROYALE",
  "onboarding.streamHud.eyebrow": "Luồng phát",
  "onboarding.streamHud.statusConnecting": "Đang kết nối",
  "onboarding.streamHud.statusLive": "Trực tiếp",
  "onboarding.streamHud.statusReconnecting": "Đang kết nối lại",
  "onboarding.streamHud.statusError": "Sự cố đồng bộ",
  "onboarding.streamHud.reconnects.one": "{n} lần kết nối lại",
  "onboarding.streamHud.reconnects.other": "{n} lần kết nối lại",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "Phòng này quyết toán bằng USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Thẻ đã mở",
  "onboarding.carousel.prevCard": "Thẻ trước",
  "onboarding.carousel.nextCard": "Thẻ tiếp theo",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Hiện {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "KHÔNG ĐỦ USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Đặt cược vào {slot} cần {needed}. Bạn có {balance}.",
  "onboarding.fundShortfall.addFunds": "Nạp thêm tiền",
  "onboarding.fundShortfall.dismiss": "Bỏ qua",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "Chạm {icon} rồi chọn Thêm vào Màn hình chính để có toàn màn hình thật sự.",
  "onboarding.installHint.fullscreen": "Chuyển sang toàn màn hình và ẩn thanh trình duyệt.",
  "onboarding.installHint.fullscreenCta": "Toàn màn hình",
  "onboarding.installHint.dismiss": "Bỏ qua",
} as Record<string, string>;
