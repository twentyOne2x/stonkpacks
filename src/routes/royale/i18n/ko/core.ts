// Korean (한국어): reviewed for naturalness (gaming-native register) in the
// i18n epic's full-locale pass. Same key set as en/core.ts. See royaleI18n.ts
// for the {token} interpolation convention and the "no em dash" rule.
//
// REGISTER: formal 합니다체 / 하십시오체. Sentences addressed to the player end
// in -ㅂ니다 / -입니다, instructions in -십시오; labels and column headers are
// short noun phrases. No 해요체, no 반말.
//
// TERMINOLOGY (locked with the other ko segment files): 베팅 (bet/bid), 팩
// (pack), 개봉 (open a pack), 환매 (sell back / buyback), 정산 (settle), 팟
// (pool), 잠금 (lock), 후원자 (backer), 최다 베팅자 (top backer), 보관함
// (vault), 체이스 (The Chase, house style), 리빌 (reveal).
// BRAND terms stay in Latin script: attn ROYALE, ATTN Protocol, USDC, X,
// Privy, CollectorCrypt, and the five pack tiers Starter / Elite / Legendary /
// Grail / Mythic. Never hangul-ize a tier name.
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome) and
// runtime.* (copy produced by the plain, non-component .ts modules). Do NOT add
// new SURFACE keys to this file, add them to the segment file for the surface
// they belong to instead (board, cinema, arena, onboarding, docs, pages, chat,
// misc in this same directory).
export default {
  "settings.language": "언어",
  "settings.languageSectionAria": "언어 설정",
  "settings.languageSearchPlaceholder": "언어 검색",
  "settings.languageNoResults": "일치하는 언어가 없습니다",
  "settings.languageHint": "즉시 적용됩니다. 이름으로 검색하거나 입력해 목록을 좁힐 수 있습니다.",
  "settings.languageInputAria": "언어 검색 및 선택",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "설정 그룹",
  "settings.searchPlaceholder": "설정 검색",
  "settings.searchClear": "검색 지우기",
  "settings.searchResultsAria": "일치하는 설정",
  "settings.searchNoResults": "“{query}”과(와) 일치하는 설정이 없습니다. 바꾸려는 항목의 이름으로 검색해 보세요.",
  "settings.backToGroups": "모든 설정",
  "gear.cards.heading": "카드",
  "gear.cards.sectionAria": "카드 설정",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "베팅 {bids} · 최소 {amount}",
  "gear.section.summary.display": "팝업 {popups} · 초상화 {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "음악 {music} · 효과음 {sfx}",
  "gear.section.summary.autosell": "활성 자동 판매 규칙 {count}개",
  "gear.section.summary.hotkeys": "핫키 {count}개 설정",

  "common.on": "켜짐",
  "common.off": "꺼짐",
  "common.set": "설정",
  "common.clear": "지우기",
  "common.tileLabel": "타일 {n}",
  "common.tileShort": "T{n}",

  "gear.betting.heading": "베팅",
  "gear.betting.sectionAria": "베팅 설정",
  "gear.betting.provider.label": "팩 제공자",
  "gear.betting.provider.automatic": "자동(Collector Crypt 우선)",
  "gear.betting.provider.hint": "자동 모드는 이용 가능할 때 Collector Crypt를 우선하며 검증된 대체 제공자만 사용합니다. 특정 제공자를 선택하면 엄격하게 적용되어, 이용할 수 없을 때 베팅이 거부됩니다.",
  "gear.betting.provider.automaticHint": "자동 · Collector Crypt 우선",
  "gear.betting.provider.strictHint": "{provider}만 · 대체 없음",
  "gear.betting.provider.unavailable": "{provider}(이용 불가)",
  "gear.betting.provider.selectedUnavailable": "{provider}을(를) 이용할 수 없습니다. 엄격 베팅은 거부되며 다른 제공자로 바뀌지 않습니다.",
  "gear.betting.provider.actual": "처리 제공자: {provider}",
  "gear.betting.provider.accepted": "접수 제공자: {provider}",
  "gear.betting.disableBids.label": "베팅 비활성화",
  "gear.betting.disableBids.hint":
    "베팅을 잠급니다. 타일을 탭해도 베팅이 들어가지 않으므로, 실수로 걸지 않고 구경하거나 화면을 넘겨줄 수 있습니다. 나머지 게임 진행은 그대로입니다.",
  "gear.betting.minBid.label": "최소 베팅 금액",
  "gear.betting.minBid.hint":
    "한 번의 탭으로 걸 수 있는 최소 금액입니다. 베팅 금액이 이 값 아래로 내려가지 않으므로, 급하게 탭해도 의도한 것보다 적게 걸리는 일이 없습니다(부정 베팅을 막기 위한 하한선은 $5입니다).",
  "gear.betting.upgradeCap.label": "업그레이드 비용 상한",
  "gear.betting.upgradeCap.placeholder": "제한 없음",
  "gear.betting.upgradeCap.hint":
    "업그레이드 한 번에 나갈 수 있는 최대 금액입니다. 이보다 비싼 업그레이드는 비활성 처리되므로, 베팅이 몰린 타일에서 갑자기 큰 금액이 빠져나가지 않습니다.",

  "gear.display.heading": "화면",
  "gear.display.sectionAria": "화면 설정",
  "gear.display.chipFloats.label": "베팅 팝업",
  "gear.display.chipFloats.hint": "누군가 타일에 베팅할 때 떠오르는 작은 “+$X · 이름” 말풍선을 표시합니다.",
  "gear.display.floatThreshold.label": "이 금액 미만 숨기기",
  "gear.display.floatThreshold.placeholder": "모든 베팅 표시",
  "gear.display.floatThreshold.hint":
    "이 금액 이상인 베팅에만 말풍선을 띄웁니다. 비워 두거나 $0으로 설정하면 모든 베팅이 표시되며, 소액 베팅이 쏟아질 때 보드를 차분하게 유지해 줍니다.",
  "gear.display.hidePortraits.label": "플레이어 아바타 숨기기",
  "gear.display.hidePortraits.hint": "타일에 표시되는 다른 플레이어의 아바타를 숨깁니다. 내 마커는 그대로 보입니다.",
  "gear.display.fullscreenLandscape.label": "가로 모드 전체 화면",
  "gear.display.fullscreenLandscape.hint":
    "모바일에서 가로 모드로 다음에 탭하면 브라우저 바를 숨깁니다. iPhone Safari에서는 바가 최소화되고, 홈 화면에 추가하면 진정한 전체 화면이 됩니다.",
  "gear.display.replayTour.label": "환영 투어 다시 보기",
  "gear.display.replayTour.hint": "환영 투어를 첫 단계부터 다시 엽니다.",
  "gear.display.couch.label": "큰 글자 (TV/소파)",
  "gear.display.headerCollapse.label": "헤더 접기",
  "gear.display.headerCollapse.hint": "상단 바를 접어 보드와 카드가 화면을 가득 채웁니다. 헤더의 화살표로 다시 펌칠 수 있습니다.",
  "gear.display.couch.hint":
    "채팅, 문서, 라벨, 금액 등 게임 전체의 읽기 글자를 키웁니다. 소파에서 플레이하기 좋은 크기이며 보드 레이아웃은 그대로입니다. 주소에 ?couch=1 을 붙여도 켜집니다.",
  "gear.display.couch.suggested": "TV 또는 콘솔 브라우저로 보입니다. 큰 글자는 이 화면을 위한 기능입니다.",

  "gear.reveals.heading": "리빌",
  "gear.reveals.sectionAria": "리빌 설정",
  "gear.reveals.turbo.label": "터보 리빌",
  "gear.reveals.turbo.hint":
    "리빌 연출을 빠르게 넘겨 결과를 먼저 확인합니다. 결정적인 장면에는 여전히 여운을 남깁니다. 기본값은 꺼짐이며, 다른 플레이어에게는 전체 연출이 그대로 재생됩니다.",

  "gear.sound.heading": "사운드",
  "gear.sound.sectionAria": "사운드 설정",
  "gear.sound.sfx.label": "효과음",
  "gear.sound.sfx.hint":
    "칩 클릭음, 라운드 시작과 잠금, 승자 룰렛, 리빌 연출의 소리입니다. 모두 브라우저에서 직접 합성하므로 따로 내려받을 파일이 없습니다.",
  "gear.sound.music.label": "음악",
  "gear.sound.music.hint":
    "라운드 흐름을 그대로 따라갑니다. 베팅 중에는 고조되고, 마지막 몇 초에 몰아치며, 리빌에서는 가라앉습니다. 처음 탭하거나 키를 누른 뒤 시작되고, 탭을 옮기면 멈춥니다.",
  "gear.sound.musicStyle.label": "음악 스타일",
  "gear.sound.musicStyle.piano": "차분한 피아노",
  "gear.sound.musicStyle.snowmelt": "해빙",
  "gear.sound.musicStyle.hearthfire": "화롯불",
  "gear.sound.musicStyle.grotto": "황금 동굴",
  "gear.sound.musicStyle.arcade": "아케이드 질주",
  "gear.sound.musicStyle.kart": "카트 랠리",
  "gear.sound.musicStyle.galaxy": "별빛 왈츠",
  "gear.sound.musicStyle.hint": "차분한 피아노는 부드럽고 여유로운 멜로디입니다. 아케이드 질주는 밝고 빠릅니다. 라운드 도중에 바꿔도 다음 마디부터 반영됩니다.",
  "gear.sound.musicVolume.label": "음악 볼륨",
  "gear.sound.sfxVolume.label": "효과음 볼륨",
  "gear.sound.volume.label": "볼륨",
  "gear.sound.volume.aria": "마스터 볼륨",
  "gear.sound.volume.hint": "효과음과 음악을 함께 조절하는 마스터 볼륨입니다.",

  "gear.autosell.heading": "자동 판매 규칙",
  "gear.autosell.sectionAria": "자동 판매 규칙",
  "gear.autosell.intro":
    "한 번만 설정해 두면 조건에 맞는 승리 카드가 자동으로 환매됩니다. 보관/판매 확인창은 뜨지 않습니다. 조건에 맞지 않는 카드는 지금처럼 매번 물어봅니다.",
  "gear.autosell.everyWin.label": "모든 승리 자동 판매",
  "gear.autosell.everyWin.hint":
    "획득한 카드를 도착 즉시 환매가로 현금화하며, 보관 또는 판매 확인창이 뜨지 않습니다. Grail은 자동 판매되지 않습니다. 아래 네 가지 희귀도 스위치를 한 번에 켜는 단축 기능입니다.",
  "gear.autosell.belowValue.label": "이 가치 미만이면 판매",
  "gear.autosell.placeholderOff": "꺼짐",
  "gear.autosell.rarity.label": "희귀도별 판매",
  "gear.autosell.rarity.aria": "희귀도별 자동 판매",
  "gear.autosell.rarity.hint":
    "카드가 나온 팩 머신에서 읽어 온 CollectorCrypt 희귀도 등급입니다. 등급별 가격 구간은 팩마다 달라서, $200짜리 카드가 한 머신에서는 희귀하고 더 비싼 머신에서는 흔할 수 있습니다.",
  "gear.autosell.nonVintage.label": "빈티지가 아닌 카드 판매",
  "gear.autosell.belowGrade.label": "이 등급 미만이면 판매",
  "gear.autosell.grader.label": "감정 기관별 판매",
  "gear.autosell.grader.hint":
    "특정 감정 기관을 남겨 두고, 설정한 값보다 낮게 감정된 카드만 자동으로 판매합니다. 감정 기관의 체크를 해제하면 그 기관의 카드는 전부 자동 판매됩니다. 전부 해제하면 획득하는 모든 카드가 자동 판매됩니다. 기관마다 척도가 다르므로 하한값은 각각 따로 잡습니다.",
  "gear.autosell.grader.aria": "감정 기관별 자동 판매",
  "gear.autosell.grader.keep": "보관",
  "gear.autosell.grader.sellAll": "전부 판매",
  "gear.autosell.grader.other": "기타 / 미등급",
  "gear.autosell.grader.placeholderKeepAll": "전부 보관",
  "gear.autosell.grader.placeholderSellAll": "전부 판매",
  "gear.autosell.grader.ariaGradeSuffix": "등급 미만 판매",
  "gear.autosell.summaryActive": "적용 중:",
  "gear.autosell.summaryNone": "설정된 자동 판매 규칙이 없습니다. 승리할 때마다 보관할지 판매할지 계속 물어봅니다.",
  "gear.autosell.turnOffAll": "전체 끄기",

  "gear.hotkeys.heading": "베팅 단축키",
  "gear.hotkeys.sectionAria": "베팅 단축키",
  "gear.hotkeys.intro":
    "타일에 지정된 키를 누르면 현재 베팅 금액으로 그 타일에 베팅합니다. 마우스는 필요 없습니다. 아래에서 키를 클릭한 다음 원하는 키를 누르십시오. 두 타일이 같은 키를 쓸 수 없으므로 다시 지정하면 키가 옮겨집니다. Esc로 취소, Backspace로 삭제합니다.",
  "gear.hotkeys.enabled.label": "숫자 키 베팅",
  "gear.hotkeys.enabled.hintOn": "베팅 중에는 단축키가 살아 있습니다. 타일의 키를 누르면 즉시 베팅됩니다.",
  "gear.hotkeys.enabled.hintOff": "단축키가 꺼져 있습니다. 타일의 키를 눌러도 베팅되지 않습니다.",
  "gear.hotkeys.enabled.hintUnset": "아직 정하지 않았습니다. 여기서 단축키를 켜거나, 베팅 중에 타일의 키를 눌러 활성화를 선택하십시오.",
  "gear.hotkeys.listAria": "타일별 베팅 단축키",
  "gear.hotkeys.tileLabel": "타일 {n}",
  "gear.hotkeys.pressKeyPrompt": "키를 누르십시오…",
  "gear.hotkeys.setKey": "키 설정",
  "gear.hotkeys.clear": "지우기",
  "gear.hotkeys.ariaPressToBind": "타일 {n}에 지정할 키를 누르십시오",
  "gear.hotkeys.ariaShortcut": "타일 {n} 단축키 {key}. 클릭하면 다시 지정합니다.",
  "gear.hotkeys.ariaNoShortcut": "타일 {n}에 단축키가 없습니다. 클릭하면 설정합니다.",
  "gear.hotkeys.ariaClearShortcut": "타일 {n} 단축키 지우기",
  "gear.hotkeys.unboundWarning": "{list}에 지정된 키가 없습니다. 설정하기 전까지 해당 타일에는 키보드 단축키가 없습니다.",
  "gear.hotkeys.resetButton": "기본값으로 되돌리기",

  "nav.ariaLabel": "attn ROYALE 섹션",
  "nav.board": "보드",
  "nav.results": "결과",
  "nav.rankingsFull": "랭킹",
  "nav.rankingsShort": "랭크",
  "nav.collectionFull": "컬렉션",
  "nav.collectionShort": "카드",
  "nav.profile": "프로필",

  "mobileNav.board": "보드",
  "mobileNav.results": "결과",
  "mobileNav.ladder": "랭킹",
  "mobileNav.collection": "컬렉션",
  "mobileNav.profile": "프로필",
  "mobileNav.docs": "문서",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // Header status cluster, KPI rail, board region label + phase line, the
  // logged-out invitation and the phone-only drawer toggles. The metric labels
  // sit in a fixed-width rail: keep them short.
  "shell.route.aria": "attn ROYALE 랩",
  "shell.header.statusAria": "라운드 상태",
  "shell.header.collapse": "헤더 숨기기",
  "shell.header.expand": "헤더 표시",
  "shell.header.round": "라운드 #{n}",
  "shell.header.turboTitle": "라운드 진행 속도 가속",
  "shell.header.turboBadge": "터보",
  "shell.metrics.aria": "라운드 요약",
  "shell.metrics.totalPool": "총 팟",
  "shell.metrics.packsLive": "활성 팩",
  "shell.metrics.yourStake": "내 베팅",
  "shell.metrics.selectedBet": "선택 베팅",
  "shell.board.aria": "attn ROYALE 보드",
  "shell.board.label": "보드",
  "shell.board.phaseOpen": "타일을 클릭하면 베팅합니다. 베팅액은 가장 좋은 팩 조합으로 다시 짜입니다",
  "shell.board.phaseLock": "잠금 · 팩 개봉 중",
  "shell.board.phaseSettled": "라운드 정산 완료",
  "shell.board.metaOpen": "팟 {pool} · 3%는 체이스로 적립 · 잠금 시 팩 개봉",
  "shell.board.metaClosed": "검증 가능한 가중 확률로 한 타일이 팟을 가져갑니다.",
  "shell.board.reopenReveal": "↗ 리빌 다시 열기",
  "shell.connectNudge":
    "게임에 입장하고 입금하면 타일에 베팅할 수 있습니다. 라운드는 그동안에도 계속 돌아갑니다.",
  "shell.decision.cardFallback": "내 카드",
  "shell.mobile.close": "닫기",
  "shell.mobile.chat": "채팅",
  "shell.mobile.chatOpenAria": "테이블 채팅 열기",
  "shell.mobile.chatCloseAria": "테이블 채팅 닫기",
  "shell.mobile.cards": "카드",
  "shell.mobile.cardsOpenAria": "내 카드를 열어 판매하거나 출금하기",
  "shell.mobile.cardsCloseAria": "내 카드 닫기",
  "shell.mobile.players": "플레이어",
  "shell.mobile.playersOpenAria": "베팅액 순 플레이어 목록 열기",
  "shell.mobile.playersCloseAria": "플레이어 닫기",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* — royaleRailCopy.ts. "Privy" and "USDC" stay verbatim.
  "runtime.rail.gameUsdc": "게임 USDC",
  "runtime.rail.privySessionCredit": "Privy 세션 크레딧",
  "runtime.rail.houseCredit": "하우스 크레딧",
  "runtime.rail.connectPrivy": "Privy를 연결하면 게임 USDC를 충전합니다",
  "runtime.rail.privySession": "Privy 세션",
  "runtime.rail.depositAction": "+{amount} {label} 충전 · {source}",
  "runtime.rail.privyAccount": "Privy 계정",
  "runtime.rail.house": "하우스",
  "runtime.rail.depositReceipt": "영수증 {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "팩을 탭하면 {amount}를 겁니다. 각 타일의 +{low} / +{high} 버튼도 그대로 남습니다.",
  "runtime.rail.sellBack": "환매 → 잔액 +{amount}",

  // runtime.recap.* — royaleSpectatorRecap.ts (round theatre spectator rows).
  "runtime.recap.you": "나",
  "runtime.recap.topBacker": "최다 베팅자",
  "runtime.recap.topCardOutcome": "최고 카드 · 보관/판매 결정",
  "runtime.recap.backer": "후원자",
  "runtime.recap.cardWon": "획득 카드",
  "runtime.recap.chaseLootReleased": "체이스 전리품 방출",
  "runtime.recap.theChase": "체이스",
  "runtime.recap.sweptIntoVault": "보관함으로 회수",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "프로토콜 수수료",
  "runtime.recap.soldBack": "환매됨",
  "runtime.recap.intoSplit": "분배에 +{amount}",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X 계정 연결을 사용할 수 없습니다.",
  "runtime.xProfile.connected": "연결됨",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "알 수 없는 카드",

  // runtime.winShare.* — royaleWinShareModel.ts. "GRAIL" is the pack TIER
  // brand name and stays in Latin script.
  "runtime.winShare.headlineWon": "승리",
  "runtime.winShare.headlineGrailPull": "GRAIL 획득",
  "runtime.winShare.headlineCardsWon": "획득 카드",
  "runtime.winShare.cardInImage": "카드는 이미지에 있습니다.",
  "runtime.winShare.receiptInImage": "영수증은 이미지에 있습니다.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "지금은 출금이 중단된 상태입니다. 자금은 이동하지 않았습니다.",
  "runtime.serverWallet.noSigner": "이 세션에 서명할 지갑이 연결되어 있지 않습니다. 자금은 이동하지 않았습니다.",
  "runtime.serverWallet.nonceUnavailable": "서버에서 출금 인증 논스를 받지 못했습니다.",
  "runtime.serverWallet.signatureUnavailable": "지갑이 출금 논스에 대한 서명을 돌려주지 않았습니다.",
  "runtime.serverWallet.boundaryLabel": "테이블 크레딧과 서버 지갑 USDC는 서로 다른 잔액입니다.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "이 브라우저에서는 화면 녹화를 사용할 수 없습니다.",
  "runtime.video.noRecorderFormat": "이 브라우저에는 쓸 수 있는 MediaRecorder 영상 형식이 없습니다.",
  "runtime.video.canceled": "렌더링을 취소했습니다.",
  "runtime.video.unreachable": "{url}의 렌더 서비스에 연결하지 못했습니다.",
  "runtime.video.rejected": "렌더 서비스가 이 라운드를 거부했습니다: {detail}",
  "runtime.video.requestFailed": "렌더 요청이 실패했습니다({status}).",
  "runtime.video.noJobId": "렌더 서비스가 작업 ID를 돌려주지 않았습니다.",
  "runtime.video.lostJob": "렌더 작업을 놓쳤습니다({status}).",
  "runtime.video.lostContact": "렌더링 도중 렌더 서비스와 연결이 끊겼습니다.",
  "runtime.video.renderFailed": "렌더링에 실패했습니다: {error}.",
  "runtime.video.unknownError": "알 수 없는 오류",
  "runtime.video.downloadFailed": "영상은 완성되었지만 내려받지 못했습니다.",
  "runtime.video.downloadHttpFailed": "영상은 완성되었지만 내려받기가 실패했습니다({status}).",
  "runtime.video.emptyVideo": "렌더 서비스가 빈 영상을 돌려주었습니다.",
  "runtime.video.shareTagline": "추첨을 검증할 수 있는 팩 배틀. 이 라운드를 보십시오:",

  // runtime.game.* — useRoyaleGame.ts (feed lines and fallback labels).
  "runtime.game.roomLive": "룸이 열렸습니다. 라운드는 자동으로 시작되며, {seconds}초 베팅 후 리빌로 넘어갑니다.",
  "runtime.game.chaseVault": "체이스 보관함",
  "runtime.game.aTile": "타일",
  "runtime.game.aPack": "팩",
  "runtime.game.theCard": "카드",
  "runtime.game.collectedSplit": "라운드 {round} · 분배로 {amount} USDC를 받았습니다.",
  "runtime.game.chaseDropSplit": "라운드 {round} · 체이스가 내 타일에 {award}를 떨궜습니다 · 내 몫 {amount} USDC.",
  "runtime.game.grailSecured": "Grail 확보: {card}({amount})를 컬렉션에 보관했습니다.",
  "runtime.game.keptCard": "{card}({amount}) 보관 → 컬렉션에 담았습니다.",
  "runtime.game.soldCardSettle": "{card}를 {amount} USDC에 환매했습니다({value}의 {pct}%).",
  "runtime.game.roundVoidedRefund":
    "라운드 {round} 무효. 개봉된 팩이 없어 카드 가치 추첨도 없었습니다. 걸었던 {amount}는 환불했습니다.",
  "runtime.game.roundVoidedAll":
    "라운드 {round} 무효. 개봉된 팩이 없어 카드 가치 추첨도 없었습니다. 모든 베팅을 환불했습니다.",
  "runtime.game.chaseFiredYours.one": "체이스 발동: 카드 {n}장({amount})이 내 타일 {tile}로 풀렸습니다.",
  "runtime.game.chaseFiredYours.other": "체이스 발동: 카드 {n}장({amount})이 내 타일 {tile}로 풀렸습니다.",
  "runtime.game.chaseFiredTable.one":
    "라운드 {round} 체이스 발동: {award}와 카드 {n}장이 {tile}에 떨어져 후원자들에게 분배되었습니다.",
  "runtime.game.chaseFiredTable.other":
    "라운드 {round} 체이스 발동: {award}와 카드 {n}장이 {tile}에 떨어져 후원자들에게 분배되었습니다.",
  "runtime.game.cardsAssigned.one": "카드 {n}장이 배정되었습니다({amount}) → 컬렉션.",
  "runtime.game.cardsAssigned.other": "카드 {n}장이 배정되었습니다({amount}) → 컬렉션.",
  "runtime.game.cardPoolsLive": "카드 풀 가동 중: CollectorCrypt 머신 풀 {pools}개, 카드 {cards}장.",
  "runtime.game.minBid": "최소 베팅 금액은 {amount}입니다. 베팅액을 올린 뒤 다시 시도하십시오.",
  "runtime.game.resolveFailed": "이 라운드를 확정하지 못해 정산이 이루어지지 않았습니다. 다음 라운드는 정상적으로 시작합니다.",
  "runtime.game.stakeRefused": "이 베팅은 {tile}에 너무 큽니다. 청구된 금액은 없습니다. 금액을 낮춘 뒤 다시 시도하십시오.",
  "runtime.game.shortfallBack":
    "{tile}에 {amount}를 걸기에는 USDC가 부족합니다. 보유 {held}. 계속하려면 입금하십시오.",
  "runtime.game.shortfallNextPack":
    "{tile}의 다음 팩을 채우기에는 USDC가 부족합니다. {amount} 필요, 보유 {held}. 계속하려면 입금하십시오.",
  "runtime.game.youBacked": "{tile}에 {amount}를 걸었습니다.",
  "runtime.game.packCompleted": "{tile}의 다음 팩을 완성했습니다(+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "베팅 자금을 마련하려고 {cards}를 {amount} USDC에 판매했습니다(CC 환매).",
  "runtime.game.backedFunded": "{tile}에 {amount}를 걸었습니다(보유 카드로 충당).",
  "runtime.game.demoStakesRefunded":
    "데모 베팅을 정리했습니다. 눌러 두었던 {amount}는 환불했으며 $0에서 시작합니다.",
  "runtime.game.demoStakesCleared": "데모 베팅을 정리했습니다. 타일에 베팅하기 전까지 매 라운드 $0에서 시작합니다.",
  "runtime.game.deposited": "지갑에 {amount} USDC를 입금했습니다.",
  "runtime.game.referralBonus": "추천 보너스가 지급되었습니다: +{amount} USDC.",
  "runtime.game.signedAndSent": "{cluster}에서 {amount} USDC를 서명 후 전송했습니다 · 서명 {sig}….",
  "runtime.game.signedNoBroadcast":
    "{cluster}에서 {amount} USDC에 서명했습니다({method}, 체인 전파 없음) · 서명 {sig}….",
  "runtime.game.soldCard": "{card}를 {amount} USDC에 판매했습니다(환매율 {pct}%).",
} as Record<string, string>;
