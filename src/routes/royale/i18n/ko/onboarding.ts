// Korean (한국어): "onboarding" segment. Same key set as en/onboarding.ts.
// Reviewed by a native editor in the i18n quality pass: formal UI register
// (합니다/입니다 for sentences addressed to the player, short noun style for
// labels and chips), and the second-person pronoun 당신 removed throughout,
// which Korean UI copy drops rather than translates.
//
// Owns RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx, RoyaleRotateGate.tsx,
// RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts's validation reasons,
// RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx, RoyaleDevnetBadge.tsx,
// RoyaleCardCarousel.tsx and RoyaleFundShortfallToast.tsx.
//
// The "attn ROYALE" wordmark is never translated, and "Starter" (a pack tier)
// is a brand term that stays in Latin script mid-sentence. See royaleI18n.ts
// for the {token} convention and the no-em-dash rule.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "초대",
  "onboarding.invite.title": "초대 전용",
  "onboarding.invite.ledeStake": "attn ROYALE는 현재 초대 전용입니다. 코드를 입력하고 {amount} 베팅 자금을 받아 자리에 앉으세요.",
  "onboarding.invite.ledeStarter": "attn ROYALE는 현재 초대 전용입니다. 코드를 입력하고 무료 {amount} Starter 팩을 받아 자리에 앉으세요.",
  "onboarding.invite.inputPlaceholder": "초대 코드",
  "onboarding.invite.inputAriaLabel": "초대 코드",
  "onboarding.invite.unlockButton": "잠금 해제",
  "onboarding.invite.hint": "아직 코드가 없나요? 초대한 사람에게 받거나 {link} 링크를 붙여넣으세요.",
  "onboarding.invite.errorInvalidCode": "초대장에 적힌 초대 코드를 입력하세요.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "잔액",
  "onboarding.welcome.grantLabelStarterPack": "Starter 팩",
  "onboarding.welcome.titleBack": "다시 만났습니다",
  "onboarding.welcome.title": "테이블에 어서 오십시오",
  "onboarding.welcome.backLede": "{name}님, 이어서 진행하세요. 프로필과 잔액은 이 기기에 저장되어 있습니다.",
  "onboarding.welcome.fallbackName": "플레이어",
  "onboarding.welcome.ledeStake": "초대 혜택으로 {amount} 베팅 자금을 받습니다. 이름을 정하고 자리에 앉으세요.",
  "onboarding.welcome.ledeStarter": "초대 혜택으로 무료 {amount} Starter 팩을 받습니다. 팩을 걸고 자리에 앉으세요.",
  "onboarding.welcome.continueWithX": "X로 계속하기",
  "onboarding.welcome.optionalHint": "선택 사항",
  "onboarding.welcome.connectWallet": "지갑 연결",
  "onboarding.welcome.playFreeNote": "지금 바로 무료로 플레이하세요. 지갑도 로그인도 필요 없습니다.",
  "onboarding.welcome.or": "또는",
  "onboarding.welcome.continueAsTemplate": "{name}로 계속하기",
  "onboarding.welcome.fallbackProfileName": "내 프로필",
  "onboarding.welcome.close": "닫기",
  "onboarding.welcome.createProfile": "프로필 만들기",
  "onboarding.welcome.skipGuest": "건너뛰고 게스트로 플레이",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "지금 플레이",
  "onboarding.welcome.pickNameFirst": "먼저 이름 정하기",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "프로필 설정",
  "onboarding.profile.xPhotoAlt": "내 X 프로필 사진",
  "onboarding.profile.connectedAsTemplate": "{handle}로 연결됨",
  "onboarding.profile.xAccountFallback": "X 계정",
  "onboarding.profile.walletLabelTemplate": "지갑 {address}",
  "onboarding.profile.displayNameLabel": "표시 이름",
  "onboarding.profile.displayNamePlaceholder": "어떻게 불러드릴까요?",
  "onboarding.profile.handleLabel": "핸들",
  "onboarding.profile.handlePlaceholder": "yourname",
  "onboarding.profile.handleHint": "테이블에서 쓰는 고유 ID입니다. 영문, 숫자, 밑줄만 사용할 수 있습니다.",
  "onboarding.profile.handleTaken": "이 기기에서 이미 사용 중인 핸들입니다.",
  "onboarding.profile.startButtonTemplate": "플레이 시작 · {amount} 무료 지급",
  "onboarding.profile.back": "뒤로",
  "onboarding.profile.skip": "건너뛰기",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "attn ROYALE 플레이 방법",
  "onboarding.tour.skip": "건너뛰기",
  "onboarding.tour.step1.eyebrow": "01 · 타일에 베팅하기",
  "onboarding.tour.step1.titleUsdc": "마음에 드는 타일에 USDC를 거세요",
  "onboarding.tour.step1.titlePacks": "마음에 드는 타일에 팩을 거세요",
  "onboarding.tour.step1.bodyUsdc":
    "각 타일은 USDC를 거는 자리입니다. 한 타일에 많이 걸수록 그 상금에서 차지하는 몫이 커집니다. 한 곳에 몰아주거나 여러 타일에 나눠 거세요.",
  "onboarding.tour.step1.bodyPacks":
    "각 타일은 팩을 거는 자리입니다. 한 타일에 많이 쌓을수록 그 상금에서 차지하는 몫이 커집니다. 한 곳에 몰아주거나 여러 타일에 나눠 거세요.",
  "onboarding.tour.step2.eyebrow": "02 · 잠금과 개봉",
  "onboarding.tour.step2.title": "잠기는 순간 모든 타일이 팩을 엽니다",
  "onboarding.tour.step2.body":
    "라운드가 잠기면 베팅된 타일이 저마다 팩을 뜯어 실제 그레이딩 카드를 눈앞에서 실시간으로, 검증 가능한 방식으로 뽑습니다.",
  "onboarding.tour.step3.eyebrow": "03 · 최고 가치가 승리",
  "onboarding.tour.step3.title": "가장 무거운 타일이 팟을 가져갑니다",
  "onboarding.tour.step3.bodyUsdc":
    "타일의 무게는 개봉한 카드 가치에 그 타일의 USDC를 더한 값입니다. 무거울수록 확률이 유리합니다. 이기면 라운드 전체 팟을 나눠 갖습니다.",
  "onboarding.tour.step3.bodyPacks":
    "타일의 무게는 개봉한 카드 가치에 그 타일에 걸린 팩을 더한 값입니다. 무거울수록 확률이 유리합니다. 이기면 라운드 전체 팟을 나눠 갖습니다.",
  "onboarding.tour.step4.eyebrow": "04 · 보관, 판매, 체이스",
  "onboarding.tour.step4.title": "현금화하고, 체이스를 노리세요",
  "onboarding.tour.step4.body":
    "획득한 카드는 그레이딩 슬랩으로 보관하거나 환매가로 되팔 수 있습니다. 체이스는 어떤 타일, 어떤 라운드에서든 떨어질 수 있는 누적 잭팟입니다.",
  "onboarding.tour.back": "뒤로",
  "onboarding.tour.next": "다음",
  "onboarding.tour.enterBoard": "보드로 입장",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary
  // (타일, 팩, 팟, 라운드, 베팅).
  "onboarding.tour.stepTag": "단계 {n} / {total}",
  "onboarding.tour.spot1.eyebrow": "당신의 베팅",
  "onboarding.tour.spot1.title": "팩을 고르세요",
  "onboarding.tour.spot1.body": "팩으로 베팅합니다. 모두 Collector Crypt가 지원하는 등급 TCG 카드가 들어 있는 미개봉 팩입니다. 플레이할 팩을 고르세요.",
  "onboarding.tour.spot2.eyebrow": "스택 수",
  "onboarding.tour.spot2.title": "몇 개일지 정하세요",
  "onboarding.tour.spot2.body": "이 카운터는 한 번의 베팅에 놓는 팩 수를 정합니다. 처음에는 1개면 충분합니다. 더 크게 걸고 싶을 때 올리세요.",
  "onboarding.tour.spot3.eyebrow": "베팅하기",
  "onboarding.tour.spot3.title": "타일을 클릭해 베팅하세요",
  "onboarding.tour.spot3.titleTouch": "타일을 탭해 베팅하세요",
  "onboarding.tour.spot3.body": "타일을 클릭하면 팩이 그 타일에 놓입니다. 한 타일에 팩을 많이 쌓을수록 이길 때 몫이 커집니다. 하나에 집중하거나 여러 타일에 나눠도 됩니다.",
  "onboarding.tour.spot3.bodyTouch": "타일을 한 번 탭해 준비하고, 다시 탭해 베팅을 확정하세요. 한 타일에 팩을 많이 쌓을수록 이길 때 몫이 커집니다.",
  "onboarding.tour.spot4.eyebrow": "라운드",
  "onboarding.tour.spot4.title": "팟과 타이머",
  "onboarding.tour.spot4.body": "보드에 베팅된 모든 팩이 이 팟에 쌓입니다. 타이머가 0이 되면 베팅이 잠기고, 베팅된 각 타일이 팩을 라이브로 개봉합니다.",
  "onboarding.tour.spot5.eyebrow": "추첨",
  "onboarding.tour.spot5.title": "무거운 타일이 더 자주 이깁니다",
  "onboarding.tour.spot5.body": "가치 가중 무작위 추첨으로 타일 하나를 선택합니다. 진 타일은 카드와 베팅금을 내놓고, 승리 타일의 후원자들은 각자의 투입액에 비례해 라운드에서 분배할 가치를 나눠 갖습니다.",
  "onboarding.tour.spot6.eyebrow": "내 돈",
  "onboarding.tour.spot6.title": "잔액과 입금",
  "onboarding.tour.spot6.body": "잔액은 여기에 표시됩니다. 입금으로 충전하고 언제든 출금하세요. 라운드가 정산되는 순간 상금이 여기로 들어옵니다.",
  "onboarding.tour.spot7.eyebrow": "하우스 제공",
  "onboarding.tour.spot7.title": "무료 {amount} Starter 팩",
  "onboarding.tour.spot7.body": "무료 {amount} Starter 팩으로 시작합니다. 이미 선택기에 장전되어 있습니다. 마음에 드는 타일을 골라 베팅하세요.",
  "onboarding.tour.finish": "플레이 시작",
 "onboarding.tour.paused": "라운드가 시작됩니다 - 바로 다음에 투어를 이어갑니다.",
  "onboarding.tour.act2.choice": "라운드 진행을 보기",
  "onboarding.tour.act2.choiceHint": "리빌 포함 약 30초",
  "onboarding.tour.act2.bettingTitle": "베팅한 모든 팩이 하나의 팟이 됩니다",
  "onboarding.tour.act2.bettingBody": "플레이어들이 타일에 팩을 쌓습니다. 보드의 모든 팩이 하나의 팟으로 모이고, 타일 하나가 그 전부를 가져갑니다.",
  "onboarding.tour.act2.drawTitle": "가치가 곧 확률이 됩니다",
  "onboarding.tour.act2.drawBody": "뽑힌 모든 카드의 총가치에서 각 타일이 차지하는 비율이 그 타일의 승률입니다. 검증 가능한 가치 가중 무작위 추첨 한 번으로 승자를 정합니다.",
  "onboarding.tour.act2.losersTitle": "진 타일은 모두 카드를 내놓습니다",
  "onboarding.tour.act2.losersBody": "보드 전체의 분배 가능 카드와 현금은 승리 타일의 후원자들에게 넘어갑니다.",
  "onboarding.tour.act2.splitTitle": "베팅액이 당신의 몫을 정합니다",
  "onboarding.tour.act2.splitBody": "승리 타일의 후원자들은 모든 타일에서 나온 라운드의 분배 가능 현금과 카드를 각자 그 타일에 투입한 금액에 비례해 나눠 갖습니다.",
  "onboarding.tour.act2.grailCaption": "Grail 세리머니",
  "onboarding.tour.act2.yourTurnEyebrow": "당신의 차례",
  "onboarding.tour.act2.yourTurnTitle": "Starter pack이 준비됐어요",
  "onboarding.tour.act2.yourTurnBody": "보드가 다시 라이브입니다. 타일을 고르고 첫 pack 베팅을 놓아 보세요.",
  "onboarding.tour.act2.continue": "라운드 들어가기",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "attn ROYALE를 플레이하려면 휴대폰을 돌리세요",
  "onboarding.rotate.title": "휴대폰을 가로로 돌려주세요",
  "onboarding.rotate.body": "보드는 가로 화면에서 가장 잘 보입니다. 화면을 돌려 라운드에 입장하세요.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only) --------------
  "onboarding.settingsTitle": "설정",
  "onboarding.settingsClose": "설정 닫기",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // {n} is the display-name character cap, injected by the validator.
  "onboarding.profileValidation.handleRequired": "다른 플레이어가 찾을 수 있도록 핸들을 정하세요.",
  "onboarding.profileValidation.handleTooShort": "핸들은 3자 이상이어야 합니다.",
  "onboarding.profileValidation.handleCharset": "영문, 숫자, 밑줄만 사용할 수 있습니다.",
  "onboarding.profileValidation.nameRequired": "테이블에 표시할 이름을 입력하세요.",
  "onboarding.profileValidation.nameTooLong": "{n}자 미만으로 입력하세요.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "관전 중",
  "onboarding.presence.tierPlaying": "플레이 중",
  "onboarding.presence.youPlaying": "플레이 중: 이번 라운드 {amount} 베팅",
  "onboarding.presence.youWatching": "관전 중",
  "onboarding.presence.youWatchingBackground": "관전 중 (백그라운드 탭)",
  "onboarding.presence.ariaLabel": "지금 attn ROYALE에 {tier}인 사람 {count}명. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "나: {status}",
  // Korean does not inflect for number, so both plural slots carry one value.
  "onboarding.presence.otherTabs.one": "+ 내 탭 {n}개 더 열림",
  "onboarding.presence.otherTabs.other": "+ 내 탭 {n}개 더 열림",
  "onboarding.presence.othersBacking.one": "이번 라운드에 타일을 건 다른 플레이어 {n}명",
  "onboarding.presence.othersBacking.other": "이번 라운드에 타일을 건 다른 플레이어 {n}명",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALE 스트림 상태",
  "onboarding.streamHud.eyebrow": "스트림",
  "onboarding.streamHud.statusConnecting": "연결 중",
  "onboarding.streamHud.statusLive": "실시간",
  "onboarding.streamHud.statusReconnecting": "재연결 중",
  "onboarding.streamHud.statusError": "동기화 오류",
  "onboarding.streamHud.reconnects.one": "재연결 {n}회",
  "onboarding.streamHud.reconnects.other": "재연결 {n}회",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "이 방은 USDC로 정산합니다.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "개봉한 카드",
  "onboarding.carousel.prevCard": "이전 카드",
  "onboarding.carousel.nextCard": "다음 카드",
  "onboarding.carousel.showCard": "{name} 보기",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDC 부족",
  "onboarding.fundShortfall.detail": "{slot} 베팅에는 {needed}가 필요합니다. 보유액은 {balance}입니다.",
  "onboarding.fundShortfall.addFunds": "자금 추가",
  "onboarding.fundShortfall.dismiss": "닫기",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "{icon}을 탭한 뒤 홈 화면에 추가를 선택하면 진정한 전체 화면으로 플레이할 수 있습니다.",
  "onboarding.installHint.fullscreen": "브라우저 바 없이 전체 화면으로 플레이하세요.",
  "onboarding.installHint.fullscreenCta": "전체 화면",
  "onboarding.installHint.dismiss": "닫기",
} as Record<string, string>;
