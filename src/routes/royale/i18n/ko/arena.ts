// Korean (한국어): "arena" segment. Same key set as en/arena.ts (every
// user-visible string from pages/RoyaleArenaRoute.tsx: the rail, the wheel
// stage + leader-line callouts, the clock, the snipe tray, the double-bid
// opt-in dialog, and the lock->reveal cinema's three beats). Reviewed by a
// native editor: formal UI register (합니다/입니다 for sentences addressed to
// the player, short noun style for labels, tags and aria strings), betting
// vocabulary shared with the board segment (베팅 / 팩 / 개봉 / 정산 / 팟).
// See royaleI18n.ts's file header for the {token} interpolation convention
// and the no-em-dash / brand-terms-stay-English rules.
export default {
  "arena.you": "나",
  "arena.youAvatarLetter": "나",
  "arena.common.card": "카드",
  "arena.common.cards": "카드",
  "arena.matchLabel": "매치 #{n}",
  "arena.pageTitle": "카드 아레나",
  "arena.backToBoard": "← 보드로 돌아가기",

  "arena.rail.ariaLabel": "내 컬렉션",
  "arena.rail.heading": "내 컬렉션",
  "arena.rail.practiceNote": "연습용 카드입니다. 보드에서 라운드를 이겨 내 카드로 이 레일을 채워보세요.",
  "arena.rail.emptyNote": "손에 든 카드가 없습니다. 팟을 차지해 몫을 되찾으세요.",
  "arena.rail.enterWheel": "휠 참가",
  "arena.rail.armSnipe": "스나이프 장전",
  "arena.rail.hint": "카드를 더블클릭하면 베팅됩니다. 또는 카드를 선택하고 휠 참가를 누르세요. Space로 선택, A로 스나이프 장전.",

  "arena.railCard.armedSuffix": "스나이프 장전 완료.",
  "arena.railCard.hint": "Space로 선택, A로 스나이프 장전. 더블클릭하면 아레나로 베팅됩니다.",
  "arena.railCard.armedTag": "장전됨",

  "arena.snipe.trayHeading": "스나이프 장전됨",
  "arena.snipe.disarm": "해제",
  "arena.snipe.firesAt": "T-2초에 발동",
  "arena.snipe.carries": "다음 매치로 이월",

  "arena.board.sectionAriaLabel": "아레나 휠",
  "arena.board.noCap": "카드 개수 제한은 없습니다. 마감은 시계뿐입니다.",
  "arena.board.wheelDecides": "휠이 결정합니다",
  "arena.board.nextMatchLabel": "다음 매치까지",
  "arena.board.potLabel": "팟",
  "arena.board.wheelAriaEnter": "선택한 {cardWord} {count}장을 휠에 참가시키기",
  "arena.board.wheelAriaIdle": "휠입니다. 컬렉션에서 카드를 선택해 참가시키세요.",
  "arena.board.youWin": "내 승리",
  "arena.board.nameWins": "{name} 승리",
  "arena.board.emptyWheelNote": "휠이 열려 있습니다. 현금이 아니라 카드를 겁니다. 내 가치 비중이 곧 내 구간과 승률입니다. 체이스 몫은 0%입니다. 프로토콜은 온전한 카드 기준 7% 수수료 규칙을 적용하며, 승자는 나머지 모든 카드를 받습니다.",
  "arena.board.tableHint": "참가시킨 카드는 가치 비중만큼 휠을 탑니다. 내 구간이 곧 내 확률입니다.",
  "arena.board.resultsLink": "지난 라운드 결과 보기 →",

  "arena.clock.locked": "잠김",
  "arena.clock.settled": "정산 완료",
  "arena.clock.locksIn": "마감까지",
  "arena.countdown.secondsSuffix": "초",

  "arena.cinema.closeAriaLabel": "시네마 닫기",
  "arena.cinema.closeTitle": "닫기 (Esc)",
  "arena.cinema.beatCopy.contestants": "참가자 소개",
  "arena.cinema.beatCopy.spin": "스핀",
  "arena.cinema.beatCopy.settle": "정산",
  "arena.cinema.beatCopyShort.contestants": "참가자",
  "arena.cinema.beatCopyShort.spin": "스핀",
  "arena.cinema.beatCopyShort.settle": "정산",
  "arena.cinema.contestantsAriaLabel": "참가자",
  "arena.cinema.contestantsHeadline": "참가자",
  "arena.cinema.oddsToWin": "승률 {pct}%",
  "arena.cinema.hintContestants": "휠이 결정합니다. 클릭하면 바로 돌립니다.",
  "arena.cinema.spinAriaLabel": "휠 스핀",
  "arena.cinema.lockedOn": "지목됨",
  "arena.cinema.hintSpin": "클릭하면 스핀을 건너뜁니다.",
  "arena.cinema.settleAriaLabel": "정산",
  "arena.cinema.winnerTag": "승자",
  "arena.cinema.youTakePot": "내가 팟 획득!",
  "arena.cinema.takesPot": "팟을 차지했습니다",
  "arena.cinema.shelfWinner": "승자 몫",
  "arena.cinema.shelfChase": "체이스",
  "arena.cinema.shelfProtocol": "프로토콜",
  "arena.cinema.smallPotNote": "체이스 몫은 없습니다. 프로토콜의 7% 규칙이 {count} {cardWord}을 선택했으며, 승자는 나머지 모든 카드를 받습니다.",
  "arena.cinema.resultsLink": "지난 라운드 결과 보기",
  "arena.cinema.hintSettle": "아무 곳이나 클릭하면 아레나로 돌아갑니다.",
  "arena.cinema.barToWinner": "{value} · {cardWord} {count}장, 승자 몫",
  "arena.cinema.barOpen": "{value} · {cardWord} {count}장",

  "arena.doubleBid.title": "더블클릭으로 자동 베팅할까요?",
  "arena.doubleBid.body": "컬렉션의 카드를 더블클릭하면 곧바로 아레나에 베팅됩니다. 이 기능을 켤까요?",
  "arena.doubleBid.enable": "켜기",
  "arena.doubleBid.dismiss": "나중에",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CARD ARENA에 연결 중",
  "arena.backend.loadingBody": "Arena의 라이브 버전과 플레이어 세션을 확인하는 중…",
  "arena.backend.loadingCollection": "컬렉션을 확인하는 중…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA 연결됨",
  "arena.backend.mainnetPreparingBody": "이 정확한 읽기 전용 릴리스는 정상입니다. 자금 조달, 카드 확보, 참가, 추첨 및 정산은 계속 비활성화되어 있습니다.",
  "arena.backend.mainnetPreparingCollection": "Mainnet 카드를 구매하거나 이동하지 않았습니다. 별도로 승인된 인벤토리가 준비될 때까지 Arena는 읽기 전용으로 유지됩니다.",
  "arena.backend.mainnetRelease": "릴리스 {commit} · 배포 {deployment} · 서명, 브로드캐스트, 효과 및 중복 0건",
  "arena.backend.unavailableTitle": "CARD ARENA 업데이트 중",
  "arena.backend.unavailableBody": "이 게임 버전이 준비될 때까지 참가가 중단됩니다. 카드는 그대로 있습니다.",
  "arena.backend.unavailableCollection": "Arena 업데이트 중에는 컬렉션을 볼 수 없습니다.",
  "arena.backend.connectTitle": "연결하고 플레이",
  "arena.backend.connectBody": "공급자에 연결된 카드를 불러오고 휠에 들어가려면 검증된 Privy 세션이 필요합니다.",
  "arena.backend.connectCollection": "플레이어 세션을 연결하면 카드를 불러옵니다.",
  "arena.backend.retry": "다시 시도",
} as Record<string, string>;
