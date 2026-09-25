// Korean (한국어): "chat" segment. Same key set as en/chat.ts (RoyaleChatPanel,
// RoyaleChatMessageBody, royaleChatModel's ambient chatter + table-event copy,
// royaleChatLinks' inline platform link labels).
//
// REGISTER: every string the UI itself says to the player (header controls,
// composer notices, link labels, the signed-out note) is formal 합니다체.
// chat.chatter.* is the opposite case on purpose: those lines are simulated
// PLAYER messages in the feed, not UI copy, so they keep the terse casual
// 반말 of a real Korean game chat, matching the lowercase English source.
//
// "chat.auth.leadBold" / "chat.auth.body" concatenate with ZERO inserted
// whitespace in RoyaleChatPanel.tsx's JSX (<b>{leadBold}</b>{body}), so the
// body string carries its own leading punctuation and space - do not trim it.
//
// The tier name Grail is a BRAND TERM and stays in Latin script, in the event
// tag and inside a chatter line alike.
export default {
  "chat.rooms.table": "테이블",
  "chat.rooms.sendTo": "보낼 곳",
  "chat.rooms.joinHint": "타일에 베팅하면 해당 방이 열립니다.",
  "chat.rooms.messageTargets": "메시지 방",
  "chat.composer.sendFailed": "메시지를 보내지 못했습니다. 다시 시도하세요.",
  "chat.composer.audienceChanged": "방이 변경되어 보내지 않은 메시지가 지워졌습니다.",
  "chat.composer.sessionUnavailable": "채팅 세션을 사용할 수 없습니다. 새로고침한 뒤 다시 시도하세요.",
  "chat.auth.tileLeadBold": "채팅하려면 타일에 베팅하세요",
  "chat.auth.tileBody": ". 첫 팩이 승인되면 테이블과 타일 방이 열립니다.",
  "chat.auth.sessionUnavailableBold": "채팅 세션을 사용할 수 없습니다",
  "chat.auth.sessionUnavailableBody": ". 안전한 전송을 복구하려면 새로고침하세요.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "테이블 채팅",
  "chat.header.title": "테이블 채팅",
  "chat.header.fontControlAriaLabel": "채팅 글자 크기",
  "chat.header.fontSmaller": "채팅 글자 작게",
  "chat.header.fontLarger": "채팅 글자 크게",
  "chat.header.collapseShow": "채팅 보이기",
  "chat.header.collapseHide": "채팅 숨기기",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "GRAIL 등장",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "라운드 #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. 새 탭에서 라운드 결과를 엽니다.",
  "chat.event.wonByPrefix": "승자:",
  "chat.event.wonBy": "승자: {name}",
  "chat.event.foldedIntoPot": "팟으로 넘어감",
  "chat.event.roundWinsTitle": "{tile}, {pot} 획득",
  "chat.event.bestPull": "최고 카드 {name} ({value})",
  "chat.event.chaseAward": "체이스 +{amount}",
  "chat.event.youWon": "나 +{amount}",
  "chat.event.youLost": "나 패배",
  "chat.message.showOriginal": "번역됨 · 원문 보기",
  "chat.message.showTranslation": "번역 보기",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "최신 메시지로 이동",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "attn 링크만 여기에 표시됩니다.",
  "chat.composer.rateLimitNotice": "메시지를 너무 빠르게 보내고 있습니다. 잠시 후 다시 시도하세요.",
  "chat.composer.placeholder": "메시지 입력…",
  "chat.composer.inputAriaLabel": "채팅 메시지",
  "chat.composer.sendAriaLabel": "메시지 보내기",
  "chat.composer.sendLabel": "보내기",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "채팅하려면 로그인",
  "chat.auth.body": ", 연결 전까지 채팅방은 읽기 전용입니다 (오른쪽 위).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "새 탭에서 카드 페이지 열기",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. 백그라운드 탭에서 카드 페이지를 엽니다.",
  "chat.messageBody.viewCard": "카드 보기",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "카드 페이지",
  "chat.link.roundResult": "라운드 결과",
  "chat.link.profile": "프로필",
  "chat.link.collection": "컬렉션",
  "chat.link.theBoard": "보드",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  // Deliberately casual: these are other players talking, not the UI.
  "chat.chatter.line01": "3번 타일 순식간에 차네",
  "chat.chatter.line02": "매 라운드 선두만 저격하는 사람 누구야",
  "chat.chatter.line03": "지난 라운드 Grail 뜬 거 실화냐",
  "chat.chatter.line04": "가보자, 다 같이 선두한테 몰아주자",
  "chat.chatter.line05": "새로 뜬 7번 타일 저평가된 듯",
  "chat.chatter.line06": "마지막 5초까지 팩 아끼는 중",
  "chat.chatter.line07": "누가 2번 타일에 $250 박았네, 인정",
  "chat.chatter.line08": "6번 타일 팟 지분 지금 완전 고평가야",
  "chat.chatter.line09": "팩 하나만 더 들어가면 저 타일 상위 등급으로 넘어감",
  "chat.chatter.line10": "또 저격러들이 확률 다 깎아먹네",
  "chat.chatter.line11": "계속 하위 카드만 뜨는데 슬슬 대박 나올 때 됐다",
  "chat.chatter.line12": "저 고래 잘 봐, 항상 이기는 타일 찍어줌",
  "chat.chatter.line13": "1번 타일 이번 세션 내내 안 터졌어, 나올 때 됐음",
  "chat.chatter.line14": "방금 뜬 카드 바로 팔았어, 환매가 괜찮더라",
  "chat.chatter.line15": "역저격 들어간다, 각오해라",
  "chat.chatter.line16": "마지막 10초에 선두 두 번 바뀜",
  "chat.chatter.line17": "오늘 밤 Mythic 노리는 사람 또 있나",
  "chat.chatter.line18": "그냥 보관했어, 아트가 너무 예뻐서 못 팔겠더라",
  "chat.chatter.line19": "늦게 넣어도 시계 안 늘어나는 거 진짜 좋다",
  "chat.chatter.line20": "8번 타일 팟 갑자기 두 배 됐어, 뭔가 있다",
  "chat.chatter.line21": "초반엔 소액, 후반에 몰빵, 이게 국룰이지",
  "chat.chatter.line22": "그 보관/판매 타이머 진짜 매번 놓침",
  "chat.chatter.line23": "지금은 추격 타일들이 선두보다 가성비 좋아 보임",
  "chat.chatter.line24": "5번 타일 저격 깔끔하네, 정교함",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "테이블 보조 패널",
  "chat.surface.chat": "채팅",
  "chat.surface.activity": "내 활동",
  "chat.activity.ariaLabel": "내 비공개 활동",
  "chat.activity.filtersAria": "활동 필터",
  "chat.activity.filter.all": "전체",
  "chat.activity.filter.packs": "팩",
  "chat.activity.filter.bids": "베팅",
  "chat.activity.filter.rewards": "보상",
  "chat.activity.filter.feats": "업적",
  "chat.activity.filter.clan": "클랜",
  "chat.activity.today": "오늘",
  "chat.activity.yesterday": "어제",
  "chat.activity.status.pending": "대기 중",
  "chat.activity.status.finalized": "확정",
  "chat.activity.status.reversed": "취소됨",
  "chat.activity.finalizedAria": "확정 영수증",
  "chat.activity.signInTitle": "기록을 보려면 로그인하세요",
  "chat.activity.signInBody": "팩, 베팅, 보상, 업적 및 클랜에 대한 비공개 영수증이 여기에 표시됩니다.",
  "chat.activity.loading": "영수증을 불러오는 중입니다",
  "chat.activity.loadOlder": "이전 기록 불러오기",
  "chat.activity.points": "{points}포인트",
  "chat.activity.event.packBid.title": "팩 플레이 완료",
  "chat.activity.event.packBid.detail": "{tile}번 타일 참가가 확정되었습니다.",
  "chat.activity.event.roundWon.title": "승리 타일",
  "chat.activity.event.roundWon.detail": "{tile}번 타일이 보드에서 승리했습니다.",
  "chat.activity.event.roundLost.title": "라운드 정산 완료",
  "chat.activity.event.roundLost.detail": "{tile}번 타일은 이번 보드에서 승리하지 못했습니다.",
  "chat.activity.event.roundRefunded.title": "팩 환불 완료",
  "chat.activity.event.roundRefunded.detail": "{tile}번 타일의 베팅금이 반환되었습니다.",
  "chat.activity.event.chaseWon.title": "체이스 적중",
  "chat.activity.event.chaseWon.detail": "보드 체이스 보상이 지급되었습니다.",
  "chat.activity.event.achievementDetail": "플레이를 통해 잠금 해제되었습니다.",
  "chat.activity.event.clanAchievementDetail": "클랜과 함께 잠금 해제되었습니다.",
  "chat.activity.unavailableTitle": "활동을 사용할 수 없습니다",
  "chat.activity.unavailableBody": "영수증을 불러오지 못했습니다. 잠시 후 비공개 피드를 다시 시도하세요.",
  "chat.activity.retry": "다시 시도",
  "chat.activity.emptyTitle": "아직 아무것도 없습니다",
  "chat.activity.emptyBody": "확정된 팩, 베팅, 보상, 업적 및 클랜 활동이 여기에 표시됩니다.",
  "chat.unlock.eyebrow": "업적 달성",
  "chat.unlock.clanEyebrow": "클랜 업적 달성",
  "chat.unlock.dismiss": "업적 알림 닫기",
} as Record<string, string>;
