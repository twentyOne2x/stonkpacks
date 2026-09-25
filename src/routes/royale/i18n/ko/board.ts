// Korean (한국어): "board" segment. Same key set as en/board.ts. Reviewed by a
// native editor in the i18n quality pass: formal UI register (합니다/입니다 for
// sentences addressed to the player, short noun style for labels, column
// headers and aria strings), pack-opening/betting vocabulary a Korean player
// actually meets (베팅 / 팩 / 개봉 / 환매 / 정산 / 팟 / 잠금).
//
// Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1), RoyaleStakeControl.tsx,
// RoyaleBetRail.tsx, RoyaleRoundCore.tsx, RoyaleClock.tsx,
// RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx, RoyaleWagerLadder.tsx,
// RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx, RoyaleLeaderboard.tsx,
// RoyaleConnectXControl.tsx and RoyalePackCompositionChips.tsx.
//
// PARTICLE RULE: {label} is a tile name ("Tile 3") and {name} a player/strategy
// name, so their final sound is unknowable. Sentences are built with a comma
// apposition or a 의/에 attachment instead of an 이(가)/은(는)/을(를) pair, which
// is why several lines read "{label}, ..." rather than "{label}이(가) ...".
// Money tokens are always "$<digits>" (읽음: 달러), which ends in a vowel, so
// 가 / 를 / 로 attach cleanly there.
//
// Pack TIER NAMES (Starter / Elite / Legendary / Grail / Mythic) are brand
// terms and stay in Latin script everywhere, including mid-sentence. See
// royaleI18n.ts for the {token} convention and the no-em-dash rule.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "플레이어 및 현금 PnL",
  "board.playerScoreboard.title": "플레이어",
  "board.playerScoreboard.open": "통계 및 음소거",
  "board.playerScoreboard.pinnedHint": "고정됨 · Esc로 닫기",
  "board.playerScoreboard.holdHint": "Tab을 길게 눌러 미리 보기 · 클릭하여 고정",
  "board.playerScoreboard.close": "플레이어 점수판 닫기",
  "board.playerScoreboard.windowAria": "PnL 창",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "전체",
  "board.playerScoreboard.partialHistory": "일부 기록만 제공됩니다. 순위는 보존된 정산 완료 현금 기록 구간을 사용합니다.",
  "board.playerScoreboard.statsUnavailable": "여기서는 PnL 기록을 볼 수 없습니다. 현재 베팅은 계속 진행 중입니다.",
  "board.playerScoreboard.playerColumn": "플레이어",
  "board.playerScoreboard.pnlColumn": "현금 PnL",
  "board.playerScoreboard.voiceColumn": "채팅",
  "board.playerScoreboard.loading": "플레이어 불러오는 중…",
  "board.playerScoreboard.empty": "이번 라운드에는 아무도 타일에 베팅하지 않았습니다.",
  "board.playerScoreboard.bot": "봇",
  "board.playerScoreboard.tiles": "타일 {tiles}",
  "board.playerScoreboard.stake": "베팅액 {amount}",
  "board.playerScoreboard.notAvailable": "이용 불가",
  "board.playerScoreboard.rounds": "{n} 라운드",
  "board.playerScoreboard.youBadge": "나",
  "board.playerScoreboard.mute": "음소거",
  "board.playerScoreboard.unmute": "음소거 해제",
  "board.playerScoreboard.muteAria": "채팅에서 {name} 음소거",
  "board.playerScoreboard.unmuteAria": "채팅에서 {name} 음소거 해제",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "나",
  "board.common.noWin": "미당첨",
  "board.common.roundSettled": "라운드 정산 완료",
  "board.common.youWon": "{amount} 획득!",
  "board.common.pack": "팩",
  "board.common.packs": "팩",
  "board.common.secondsSuffix": "초",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "잠김",
  "board.tile.lockedStampSub": "베팅 마감",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: 베팅 {bet}가 보유 현금 {balance}를 넘습니다. 베팅을 줄이거나 입금하세요.",
  "board.tile.ariaBack": "{label}에 {amount} 베팅",
  "board.tile.ariaBackShortcutSuffix": ", 단축키 {shortcut}",
  "board.tile.ariaOddsChance": "승리 확률 {pct}",
  "board.tile.ariaBackers": "후원자 {count}명",
  "board.tile.yourPortraitAlt": "내 아바타",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · 아직 팩 없음",
  "board.tile.noStake": "베팅 없음",
  "board.tile.youOwn": "{amount} 보유",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "잠금 시 팩 개봉",
  "board.tile.resultOpened": "개봉 · 카드 {amount}",
  "board.tile.resultWinner": "승리 · 카드 {amount}",
  "board.tile.resultLost": "추첨 탈락 · 카드 {amount}",
  // MONEY IS SACRED split: the word-only variants (no amount) plus the SHORT
  // fallback words the label swaps to when even the plain word would overflow.
  "board.tile.resultOpenedWord": "개봉",
  "board.tile.resultWinnerWord": "승리",
  "board.tile.resultLostWord": "추첨 탈락",
  "board.tile.resultShortWon": "당첨",
  "board.tile.resultShortLost": "탈락",
  "board.tile.overBalance": "잔액 초과",
  "board.tile.overBalanceTitle": "필요 {needed} · 보유 {have}. 베팅을 줄이거나 입금하세요.",
  "board.tile.overCap": "{amount} 상한 초과 (설정)",
  "board.tile.needHave": "필요 {needed} · 보유 {have}",
  "board.tile.clueExactCardOdds": "바로 이 카드 · {pct} 확률",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "베팅 금액",
  "board.stakeControl.packMatchTitle": "타일을 클릭할 때마다 {packName} 팩 1개를 통째로 베팅합니다.",
  "board.stakeControl.packMatchTag": "클릭당 {packName} 팩 1개 베팅",
  // PACK COUNT stepper: Korean does not mark plural, so the .One / .Other
  // slots deliberately carry the same sentence.
  "board.stakeControl.packMatchTitleOne": "타일을 클릭할 때마다 {packName} 팩 {n}개를 통째로 베팅합니다.",
  "board.stakeControl.packMatchTitleOther": "타일을 클릭할 때마다 {packName} 팩 {n}개를 통째로 베팅합니다.",
  "board.stakeControl.packMatchTagOne": "클릭당 {packName} 팩 {n}개 베팅",
  "board.stakeControl.packMatchTagOther": "클릭당 {packName} 팩 {n}개 베팅",
  "board.stakeControl.packAmountSentence": "클릭당 {n} x {packAmount} {packName} 팩",
  "board.stakeControl.bidPackGroupAria": "타일에 팩 통째로 베팅",
  "board.stakeControl.bidPackTag": "팩 베팅",
  "board.stakeControl.bidPackInfoTitle":
    "클릭 한 번으로 밀봉된 팩 하나를 통째로 타일에 겁니다. 이 팩은 그대로 유지되며 더 큰 팩으로 합쳐지지 않습니다.",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "팩과 수량을 선택하세요. 한 번의 클릭으로 스택 전체를 타일에 베팅합니다. 큰 팩일수록 큰 카드. 숫자 키 1~8로 타일 선택.",
  "board.stakeControl.bidPackInfoAria": "팩 베팅이란 무엇인가요?",
  "board.stakeControl.packSelectedTitle": "선택됨. 다시 클릭하면 {amount} 베팅으로 돌아갑니다.",
  "board.stakeControl.packChipTitle": "타일을 클릭할 때마다 {packName} 팩 1개({amount})를 베팅합니다.",
  "board.stakeControl.packSelectedCountOne": "선택됨. 타일을 클릭할 때마다 {packName} 팩 {n}개({amount})를 베팅합니다.",
  "board.stakeControl.packSelectedCountOther": "선택됨. 타일을 클릭할 때마다 {packName} 팩 {n}개({amount})를 베팅합니다.",
  "board.stakeControl.packChipTitleCountOne": "타일을 클릭할 때마다 {packName} 팩 {n}개({amount})를 베팅합니다.",
  "board.stakeControl.packChipTitleCountOther": "타일을 클릭할 때마다 {packName} 팩 {n}개({amount})를 베팅합니다.",
  "board.stakeControl.overBalanceHeading": "잔액 초과",
  "board.stakeControl.overBalanceBody": "보유 현금 {amount}로는 부족합니다.",
  "board.stakeControl.bidAmountTag": "금액 베팅",
  "board.stakeControl.bidAmountInfoTitle":
    "타일에 원하는 금액을 얹으세요. 잔돈은 팩 가격을 넘어설 때마다 더 큰 팩으로 자랍니다.",
  "board.stakeControl.bidAmountInfoAria": "금액 베팅이란 무엇인가요?",
  // "Chip USDC" framing is banned project-wide (packs framing only).
  "board.stakeControl.incrementsGroupAria": "타일 베팅에 추가",
  "board.stakeControl.bidAmountGroupAria": "타일에 금액 베팅",
  "board.stakeControl.packCountGroupAria": "클릭당 베팅 팩 수",
  "board.stakeControl.packCountDecAria": "클릭당 팩 수 줄이기",
  "board.stakeControl.packCountIncAria": "클릭당 팩 수 늘리기",
  "board.stakeControl.packCountValueTitleOne": "클릭당 선택한 등급의 팩 {n}개",
  "board.stakeControl.packCountValueTitleOther": "클릭당 선택한 등급의 팩 {n}개",
  "board.stakeControl.incrementTitle": "선택한 베팅을 {amount}로 올리기",
  "board.stakeControl.customAriaLabel": "직접 입력하는 USDC 베팅 금액, Enter를 누르거나 다른 곳을 클릭하면 적용됩니다",
  "board.stakeControl.customOverBalanceTitle": "보유 현금 {amount}를 넘습니다. 입금하거나 베팅을 줄이세요.",
  "board.stakeControl.customTitle": "원하는 금액을 입력하고 Enter를 누르거나 다른 곳을 클릭하면 적용됩니다",
  "board.stakeControl.resetTitle": "선택한 베팅을 {amount}로 되돌리기",
  "board.stakeControl.reset": "초기화",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "자동 베팅 전략, 라운드 마감 시 장전",
  "board.betRail.strategyArmedTip": "장전됨, {seconds}초 후 발동",
  "board.betRail.strategyAriaArmed": "{name}, 장전됨, {seconds}초 후 발동",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, 장전됨, {seconds}초 후 발동. 클릭하면 해제됩니다.",
  "board.betRail.strategyAriaClickArm": "{name}, 클릭해 장전",
  "board.betRail.moreStrategiesAria": "자동 베팅 전략 더 보기",
  "board.betRail.moreStrategiesTitle": "전략 더 보기",
  "board.betRail.cancelArmedAria": "장전된 자동 베팅 취소",
  "board.betRail.autoBetCancelled": "자동 베팅 취소.",
  "board.betRail.roundLockedSkip": "자동 베팅이 발동하기 전에 라운드가 마감되었습니다.",
  "board.betRail.notEnoughBalanceSkip": "잔액이 부족해 자동 베팅이 발동하지 않았습니다.",
  "board.betRail.firedAtClose": "{name}, 라운드 마감과 함께 발동했습니다.",
  "board.betRail.firedAtClosePartial": "{name}, 라운드 마감과 함께 발동했습니다. {total}칸 중 {covered}칸입니다.",
  "board.betRail.strategyGuideAria": "자동 베팅 전략 가이드",
  "board.betRail.strategyGuideTitle": "전략 가이드",
  "board.betRail.autoBetEyebrow": "자동 베팅",
  "board.betRail.firesInSeconds": "{seconds}초 후 발동",
  "board.betRail.strategiesDialogAria": "자동 베팅 전략",
  "board.betRail.closeStrategiesAria": "자동 베팅 전략 닫기",
  "board.betRail.strategiesHeading": "자동 베팅 전략",
  "board.betRail.strategiesIntro":
    "하나를 탭하면 선택한 베팅 금액({amount})으로 장전됩니다. 라운드가 마감되기 직전, 그 순간 각 타일에 걸린 금액, 즉 판돈의 흐름을 기준으로 순위를 매겨 발동합니다.",
  "board.betRail.contrarianHeading": "역발상 픽",
  "board.betRail.contrarianIntro":
    "모두가 최저 타일로 몰리면 그 타일은 붐비고, 오히려 두 번째로 낮은 타일이 더 크게 돌아올 수 있습니다. 메인 바를 깔끔하게 두려고 따로 빼 놓았습니다.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "내 계정과 베팅 금액",
  "board.betRail.balance": "잔액",
  "board.betRail.activeStakes": "진행 중 베팅",
  "board.betRail.collection": "컬렉션",
  "board.betRail.cardCountViewAllSingular": "카드 {count}장 · 전체 보기",
  "board.betRail.cardCountViewAllPlural": "카드 {count}장 · 전체 보기",
  "board.betRail.moreCount": "+{count}장 더",
  "board.betRail.noCardsYet": "아직 컬렉션에 카드가 없습니다. 타일에서 이겨 카드를 보관해 보세요.",
  "board.betRail.lastResult": "지난 결과",
  "board.betRail.eachClickAdds": "클릭할 때마다 {amount} 추가",
  "board.betRail.depositToPlay": "입금 후 플레이",
  "board.betRail.affordShortfall": "{unit} 필요 · 보유 {balance}",
  "board.betRail.allTilesPartialCover": "{name}, {unit}로 8개 타일 중 {covered}개 커버",
  // LANDSCAPE-DOCK account readout: compact abbreviations for the dock stats.
  "board.betRail.dockBalance": "잔액",
  "board.betRail.dockStakes": "베팅",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "다음 라운드까지 {seconds}초",
  "board.core.nextRoundLine": "다음 라운드까지 {secs}",
  "board.core.playersDecidingAria": "다른 플레이어 {total}명 중 {decided}명 결정 완료",
  "board.core.playersDecidingLine": "플레이어 결정 {ratio}",
  "board.core.pastRoundResultsAria": "지난 라운드 결과",
  "board.core.pastRounds": "지난 라운드",
  "board.core.winsAmount": "{label}, {amount} 획득",
  "board.core.youLost": "패배!",
  "board.core.didNotStake": "이번 라운드에 베팅하지 않았습니다",
  "board.core.keepCard": "카드 보관 ({amount})",
  "board.core.sellAmount": "{amount}에 판매",
  "board.core.decideHint": "지금 또는 다음 라운드 안에 결정하세요",
  "board.core.roundResultLink": "라운드 #{roundId} 결과",
  "board.core.fullReceiptHint": "전체 내역 → 라운드 결과",
  "board.core.splitReceiptHint": "분배 · 내역 → 라운드 결과",
  "board.core.eyebrowDrawing": "승자 추첨 중",
  "board.core.eyebrowPullsIn": "개봉 완료",
  "board.core.eyebrowLocked": "잠김",
  "board.core.headlineDrawing": "티켓 한 장으로 결정됩니다",
  "board.core.headlinePullsIn": "모든 팩이 열렸습니다",
  "board.core.headlineRoundLocked": "라운드 잠김",
  "board.core.headlinePacksOpening": "팩 개봉 중…",
  "board.core.subDrawing": "검증 가능한 가중 추첨",
  "board.core.subPullsIn": "이어서 승자를 추첨합니다",
  "board.core.subIntro": "{noun} {count}개가 걸렸습니다",
  "board.core.subOpening": "보드에서 {noun} {count}개 개봉 중",
  "board.core.pool": "팟",
  "board.core.totalPool": "총 팟",

  // --- RoyaleClock.tsx: the round-phase timer leaf ------------------------
  "board.core.clockRoundOpen": "라운드 진행 중",
  "board.core.clockLockedRevealing": "잠김 · 공개 중",
  "board.core.clockSettled": "정산 완료",
  "board.core.clockAriaLabel": "{label}, {seconds}초",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "일반 카드입니다. 최다 베팅자가 보관하거나 환매하고, 나머지는 비례 배분됩니다.",
  "board.settlement.dispositionSellBackSplit": "Grail 규칙: 기본은 환매이며 USDC를 타일 전체에 나눕니다.",
  "board.settlement.dispositionTopBackerKeeps": "Grail 규칙: 최다 베팅자가 보관하고 나머지에게 몫을 지급합니다.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "결정까지 {seconds}초",
  "board.settlement.panelAria": "타일 상세 및 정산",
  "board.settlement.collapsePanelAria": "패널 접기",
  "board.settlement.expandPanelAria": "패널 펼치기",
  "board.settlement.roundResultsLink": "라운드 결과",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "라운드 패널",
  "board.settlement.clickTileToBack": "승리 결과가 여기에 표시됩니다. 타일을 클릭하면 {amount}로 베팅합니다.",
  "board.settlement.lastResultLine": "지난 결과 · 라운드 #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "{amount} 획득",
  "board.settlement.view": "보기",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "패배 타일 · 패배 이유",
  "board.settlement.losingTileTitle": "{label} · 타일에 {amount}",
  "board.settlement.loserWhy":
    "{cardName}({amount})을 개봉했지만 추첨은 {winnerLabel}로 갔습니다. 티켓의 {pct}는 아무것도 받지 못했습니다{suffix}",
  "board.settlement.loserWhySuffixWithStake": " (내 {amount} 포함).",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "이 타일은 비어 있었습니다. 베팅도, 추첨 티켓도 없었습니다.",
  "board.settlement.backToSettlement": "정산으로 돌아가기 · {winnerLabel} 승리",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · 카드 {index}/{total} · 타일에 {amount}",
  "board.settlement.pullCaptionSingle": "{label} · 타일에 {amount}",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "팩 개봉 중",
  "board.settlement.revealOpenedTitle": "{label}, {cardName} 개봉",
  "board.settlement.revealOddsLine": "{amount} · {poolAmount} 팟을 차지할 확률 {pct}. 지금 승자를 추첨하고 있습니다.",
  "board.settlement.revealEmpty": "보드에서 팩이 열리고 있습니다. 곧바로 승자 추첨이 이어집니다.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "지난 결과 · 라운드 #{roundId}",
  "board.settlement.tileTakesTable": "{label}, 테이블의 {amount}를 가져갑니다",
  "board.settlement.whyWon": "검증 가능한 가중 티켓 추첨 결과입니다. 잠금 시점 {label}의 팟 비중은 {pct}%였습니다.",
  "board.settlement.lostNoStakeIn": "패배, {label}에 베팅 없음",
  "board.settlement.theWinnerFallback": "승자",
  "board.settlement.wonNoStake": "{label} 승리 · 내 베팅 없음",
  "board.settlement.aTileFallback": "한 타일",
  "board.settlement.lossNoteWithStake": "내 {amount}는 다른 타일에 걸려 있었습니다. 타일에 마우스를 올리면 자세한 내용을 볼 수 있습니다.",
  "board.settlement.lossNoteNone": "이번 라운드에는 어떤 타일에도 베팅하지 않았습니다.",
  "board.settlement.topCardOfRound": "이번 라운드 최고 카드 · {label}",
  "board.settlement.keepCardTo": "카드 보관 ({amount}) → 컬렉션",
  "board.settlement.sellBackFor": "{amount}에 환매",
  "board.settlement.continueNextRound": "다음 라운드로 계속",
  "board.settlement.continue": "계속",
  "board.settlement.keepSellHint":
    "보관 = 카드가 컬렉션으로 · 판매 = 지금 {amount} 지급 (카드 가치의 {pct}%, 이 팩의 CC 환매가) · {noAction}",
  "board.settlement.noActionKept": "미조치 시 카드가 그대로 보관됩니다.",
  "board.settlement.noActionAutoSell": "미조치 시 다음 라운드가 끝나면 자동 판매됩니다.",
  "board.settlement.revealOnlyNote":
    "현재 버전에서는 패배한 타일이 공개만 되고, 그 카드는 보관함으로 돌아갑니다. 지급은 승리한 타일의 카드로만 이루어집니다.",
  "board.settlement.payoutSplit": "지급 분배",
  "board.settlement.poolChaseFeedLine": "팟 {pool} · 체이스 적립 {feed}",
  "board.settlement.chaseAddSuffix": " · 체이스 +{amount}",
  "board.settlement.physicalCardArrow": "실물 카드 →",
  "board.settlement.grailSecuredSuffix": " (Grail 확보)",
  "board.settlement.grailSoldBack": "Grail 환매 ({amount}) → 위 USDC 분배에 포함.",
  "board.settlement.cardAssignmentHead": "카드 배정",
  "board.settlement.cardLabel": "{amount} 카드",
  "board.settlement.soldToVault": "보관함에 판매 · 대금은 분배에 포함",
  "board.settlement.decisionTopBackerSuffix": " (최다 베팅자 · 보관 또는 판매)",
  "board.settlement.offTheirUsdcSuffix": " · 해당 USDC에서 {amount} 차감",
  "board.settlement.cardsSpreadNote":
    "카드는 가능한 한 많은 후원자에게 나뉘어 배정됩니다. 배정된 카드는 그 후원자의 USDC에서 CC 환매가(팩별 85-93%)만큼 빠지므로 판매와 현금 가치가 같고, 오를 여지는 그대로 가져갑니다. 아무도 받지 못한 카드만 보관함에 판매됩니다.",
  "board.settlement.chaseHitLabel": "체이스 적중!",
  "board.settlement.chasePaidLine": "{amount}가 이번 분배에 지급되었습니다.",
  "board.settlement.chaseMissLabel": "체이스 미적중.",
  "board.settlement.chaseNowLine": "현재 체이스 {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "추첨 검증",
  "board.settlement.verifyDrawSub": "검증 가능한 추첨 · 추첨 영수증 보기",
  "board.settlement.roundIdLabel": "라운드 ID",
  "board.settlement.winningDrawLabel": "당첨 추첨값",
  "board.settlement.drawSeedLabel": "추첨 시드",
  "board.settlement.proofIdLabel": "증명 ID",
  "board.settlement.ticketOfCount": "{count}장 중 #{index}",
  "board.settlement.verifying": "검증 중…",
  "board.settlement.recheckDraw": "추첨 재검증",
  "board.settlement.verifierLink": "검증기 ↗",
  "board.settlement.verifiedOk": "✓ 추첨을 검증했습니다. 이 승자는 공개된 추첨 시드와 대조해 다시 확인되었습니다.",
  "board.settlement.verifiedBad": "✗ 이 추첨은 시드와 대조되지 않았습니다. 신뢰하지 마세요.",
  "board.settlement.everyRoundNote": "매 라운드는 공개된 시드에서 승자 한 명을 뽑으며, 누구나 다시 검증할 수 있습니다.",
  "board.settlement.noPacksNote": "이번 라운드에는 베팅된 팩이 없어 추첨할 대상이 없습니다.",
  "board.settlement.settledHoverHint": "정산 완료. 타일에 마우스를 올리면 자세히 볼 수 있습니다.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "베팅 금액이 잔액보다 큽니다",
  "board.betTooBig.dismissAria": "닫기",
  "board.betTooBig.gotIt": "확인",
  "board.betTooBig.body": "{slotLabel} 베팅에는 {needed}가 필요한데 보유액은 {held}입니다. {shortfall} 부족합니다.",
  "board.betTooBig.deposit": "{amount}+ 입금",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "총 베팅액 순 플레이어",
  "board.wagerLadder.title": "플레이어",
  "board.wagerLadder.countZero": "아직 베팅 없음",
  "board.wagerLadder.countOther": "이번 라운드 {n}명 · 총 베팅액 순",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "플레이어 패널 접기",
  "board.wagerLadder.lastRoundAria": "지난 라운드 결과 보기, 라운드 #{n}",
  "board.wagerLadder.lastRoundLabel": "지난 라운드 결과 보기",
  "board.wagerLadder.empty": "이번 라운드에는 아직 아무도 타일에 베팅하지 않았습니다.",
  "board.wagerLadder.leaderAria": "선두",
  "board.wagerLadder.openProfileTitle": "{name}의 프로필을 새 탭에서 열기",
  "board.wagerLadder.miniGridTotal": "총 {amount}",
  // Two keys, not one {name} template: Korean also splits the third-party
  // ("{name}의 베팅 타일") and the first-person ("내가 베팅한 타일") readings.
  "board.wagerLadder.miniGridTilesAria": "{name}의 베팅 타일",
  "board.wagerLadder.miniGridTilesAriaYou": "내가 베팅한 타일",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "보유 카드를 팔아 이번 베팅에 사용",
  "board.bidFund.eyebrow": "USDC 부족",
  "board.bidFund.titleOne": "카드를 팔아 이번 베팅을 채울까요?",
  "board.bidFund.titleMany": "이 카드들을 팔아 이번 베팅을 채울까요?",
  // {buyback} and {amount} each render inside their own <b> at the call site,
  // so the emphasis survives this word order.
  "board.bidFund.body": "{cards}를 팔면 {buyback}가 생겨 {tile}에 {amount}를 걸 수 있습니다.",
  "board.bidFund.bodyCardsMany": "이 카드들",
  "board.bidFund.note":
    "{amount} 부족합니다. 카드는 해당 팩의 CC 환매율(85 to 93%)로 판매되며, 되돌릴 수 없습니다.",
  "board.bidFund.keepCards": "카드 보관",
  "board.bidFund.sellAndBid": "판매 후 {amount} 베팅",
  "board.bidFund.autoSellSwitch": "획득 카드를 자동으로 USDC 판매",
  "board.bidFund.autoSellNoteOn":
    "승리 카드가 도착하는 즉시 환매가로 현금화됩니다. 보관 또는 판매 확인창은 뜨지 않습니다. Grail은 자동 판매되지 않습니다. 설정에서 언제든 바꿀 수 있습니다.",
  "board.bidFund.autoSellNoteOff":
    "켜 두면 획득한 카드가 확인창 없이 환매가로 USDC 현금화됩니다. Grail은 자동 판매되지 않습니다. 설정에서 언제든 바꿀 수 있습니다.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "숫자 키로 베팅할까요?",
  "board.hotkeys.optInBody":
    "키를 누르면 현재 베팅 금액으로 그 타일에 즉시 베팅됩니다. 방금 누른 키로는 베팅되지 않았습니다.",
  "board.hotkeys.notNow": "나중에",
  "board.hotkeys.enableKeys": "키 사용",
  "board.hotkeys.turnOff": "끄기",
  "board.hotkeys.turnOffTitle": "설정에서 다시 켜기 전까지 단축키는 꺼진 상태로 유지됩니다.",
  "board.hotkeys.changeKeys": "키 변경",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "타일 열기",
  "board.boardV1.onTile": "타일에",
  "board.boardV1.changeAmount": "{amount} 변경",
  "board.boardV1.oddsSuffix": "확률 {pct}",
  "board.boardV1.openedOdds": "개봉 · 확률 {pct}",
  "board.boardV1.emptyNeverInDraw": "비어 있음 · 추첨 대상 아님",
  "board.boardV1.winnerYourShare": "승리 · 내 몫이 지급됩니다",
  "board.boardV1.winnerNoStake": "승리 · 내 베팅 없음",
  "board.boardV1.lostOdds": "추첨 탈락 · 확률 {pct}",
  "board.boardV1.tileClickTitle": "아무 곳이나 클릭하면 {amount}로 {label}에 베팅합니다",
  "board.boardV1.youAmount": "나 {amount}",
  "board.boardV1.youNone": "나 -",
  "board.boardV1.pctOfTile": "타일의 {pct}",
  "board.boardV1.noStakeYet": "아직 베팅 없음",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "최고 · ",
  "board.boardV1.backerPopStake": "{amount} 베팅 · 타일의 {pct}",
  "board.boardV1.statusWaitingDraw": "추첨을 기다리는 중…",
  "board.boardV1.statusWonSplit": "분배에서 {amount} 획득",
  "board.boardV1.statusOnWinningTile": "승리 타일에 베팅함",
  "board.boardV1.statusNoPayout": "이번 라운드 지급 없음",
  "board.boardV1.statusYourStake": "진행 중인 내 베팅",
  "board.boardV1.statusBacking": "이 타일에 베팅 중",
  "board.boardV1.backerCount.one": "후원자 {n}명",
  "board.boardV1.backerCount.other": "후원자 {n}명",
  "board.boardV1.noBackersYet": "아직 후원자 없음",
  // {amount} renders inside its own <b> at the call site.
  "board.boardV1.backAmount": "{amount} 베팅",
  "board.boardV1.backBtnTitle": "{amount} USDC로 {label}에 베팅",
  "board.boardV1.evolveTitle": "{label}에 정확히 {amount} 추가 베팅",
  "board.boardV1.hoverTitle": "{label} · 타일에 {amount}",
  "board.boardV1.opensAs": "개봉 구성 · {summary}",
  "board.boardV1.noPacksYet": "아직 팩이 없습니다. 베팅해서 첫 팩을 채워보세요",
  "board.boardV1.whyOpenedDrawing":
    "확률 {pct}로 {cardName}({amount})을 개봉했고, 지금 승자를 추첨하고 있습니다.",
  "board.boardV1.whyWon":
    "확률 {pct}의 가중 추첨에서 이겼습니다. {cardName}({amount})을 개봉했고, 팟은 이 타일의 후원자들에게 비례 배분되었습니다.",
  "board.boardV1.whyLost":
    "가중 추첨에서 졌습니다. 확률 {pct}, {poolAmount} 팟 중 {amount}. {cardName}({cardAmount})을 개봉했지만 지급은 승리 타일만 받습니다.",
  "board.boardV1.whyEmpty": "빈 타일입니다. 베팅도, 추첨 티켓도 없습니다.",
  // Both suffixes are appended to a whyX sentence above, hence the leading space.
  "board.boardV1.whyYourStakeSuffix": " 이 타일에 건 내 베팅: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " 내 베팅은 없었습니다.",
  "board.boardV1.ifWins": "이 타일이 이기면 {poolAmount} 팟 중 약 {amount}를 가져갑니다.",
  "board.boardV1.clickToBack": "클릭하면 선택한 금액으로 베팅하고 잠금 시 첫 팩을 개봉합니다.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "{rank}위, {name}, 총 베팅액 {wagered}, 순손익 {net}, 승률 {pct}퍼센트",
  "board.leaderboard.youTag": "나",
  "board.leaderboard.youRankTag": "나 · #{n}",
  "board.leaderboard.statWagered": "총 베팅액",
  "board.leaderboard.statNetPl": "순손익",
  "board.leaderboard.statWinRate": "승률",
  "board.leaderboard.statRounds": "라운드",
  "board.leaderboard.statPoolShare": "팟 비중",
  "board.leaderboard.statFirstSeen": "첫 참여",
  "board.leaderboard.statBiggestPull": "최고 획득",
  "board.leaderboard.shareOfToday": "오늘 베팅액 대비",
  "board.leaderboard.shareOfAllTime": "전체 베팅액 대비",
  "board.leaderboard.noneYet": "아직 없음",
  "board.leaderboard.viewFullProfile": "전체 프로필 보기",
  "board.leaderboard.live": "실시간",
  "board.leaderboard.fullRankings": "전체 순위",
  // The component splits these on {n} to bold the figure.
  "board.leaderboard.playerCount.one": "플레이어 {n}명",
  "board.leaderboard.playerCount.other": "플레이어 {n}명",
  "board.leaderboard.roundCount.one": "{n}라운드",
  "board.leaderboard.roundCount.other": "{n}라운드",
  "board.leaderboard.colPlayer": "플레이어",
  "board.leaderboard.colWagered": "베팅액",
  "board.leaderboard.colNet": "순손익",
  "board.leaderboard.colWin": "승률",
  "board.leaderboard.colBiggestPull": "최고 획득",
  "board.leaderboard.sortGroupAria": "순위 정렬",
  "board.leaderboard.sortBy": "{col} 기준 정렬",
  "board.leaderboard.podiumNet": "순손익 {amount}",
  "board.leaderboard.podiumTopPull": "최고 획득",
  "board.leaderboard.fullStandings": "전체 순위 · 베팅자 {n}명",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{packName} 팩 {n}개 ({amount})",
  "board.betRail.stakeUnitPackOther": "{packName} 팩 {n}개 ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "{handle}의 X 프로필 사진",
  "board.connectX.connectedTitle": "X 연동 완료 · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "{packName} 슬롯 (이 타일에는 없음)",
  "board.packChips.fixedChipTitle": "{packName} {n}개, 개당 {amount}",
  "board.packChips.fixedChipTitleTotalSuffix": " · 합계 {amount}",
  "board.packChips.usdcChange": "USDC {amount}",
  "board.packChips.pooledAll": "타일에 쌓인 잔돈으로 만들어진 팩이며, 직접 베팅한 사람은 없습니다",
  "board.packChips.pooledSome": "{total}개 중 {n}개가 타일에 쌓인 잔돈으로 만들어졌습니다",
  "board.packChips.bidWhole": "팩 통째로 베팅됨",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "같은 타일의 다른 팩: {list}",
  "board.packChips.morePacks.one": "팩 {n}개 더",
  "board.packChips.morePacks.other": "팩 {n}개 더",
  "board.packChips.morePacksWithList.one": "팩 {n}개 더: {list}",
  "board.packChips.morePacksWithList.other": "팩 {n}개 더: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "베팅 {bids} · 잔돈 {pool}",
  "board.tile.splitAllBids": "{bids} 전액이 팩 통째로 베팅되었습니다",
  "board.tile.splitAllPool": "{pool} 전액이 타일에 쌓인 잔돈입니다",
  "board.tile.splitPoolNote": "점선 팩은 쌓인 잔돈으로 만들어진 팩이며, 직접 베팅한 사람은 없습니다.",
  "board.tile.evolveLooseTitle": "이 타일의 잔돈 {loose}는 {target}에서 {tier} 팩으로 자랍니다",
  "board.tile.evolveNoLooseTitle":
    "이 타일에는 아직 잔돈이 없습니다. 잔돈은 {target}에서 {tier} 팩으로 자랍니다",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name}, {unit}로 {total}개 타일 중 {covered}개 커버",
  "board.betRail.allTilesPlanFull": "라운드 마감 시 {unit}로 {total}개 타일 전부에 베팅합니다. 총 {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "라운드 마감 시 {unit}로 {total}개 타일 중 {covered}개에 베팅합니다. 잔액 {balance}로 {spend}까지 가능합니다.",
  "board.betRail.allTilesPlanShort.other":
    "라운드 마감 시 {unit}로 {total}개 타일 중 {covered}개에 베팅합니다. 잔액 {balance}로 {spend}까지 가능합니다.",
  "board.betRail.allTilesPlanNone": "잔액 {balance}로는 {unit} 베팅도 어려워 어떤 타일에도 베팅하지 않습니다.",
  "board.betRail.allTilesShortHistory.one":
    "전체 타일 자동 베팅은 {unit}로 {tiles}개 타일에 걸려면 {needed}가 필요합니다. 보유액이 {balance}라 {covered}개 타일에 베팅했습니다.",
  "board.betRail.allTilesShortHistory.other":
    "전체 타일 자동 베팅은 {unit}로 {tiles}개 타일에 걸려면 {needed}가 필요합니다. 보유액이 {balance}라 {covered}개 타일에 베팅했습니다.",
  "board.betRail.allTilesNoneHistory":
    "전체 타일 자동 베팅은 {unit}로 {tiles}개 타일에 걸려면 {needed}가 필요합니다. 보유액이 {balance}라 어떤 타일에도 베팅하지 못했습니다.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "라운드 마감 시",
  "board.betRail.planTotal": "총액",
  "board.betRail.planMathFull": "타일 {total}개 × {amount}",
  "board.betRail.planMathShort": "타일 {total}개 중 {covered}개 × {amount}",
  "board.betRail.planPerTile": "타일당 {unit}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (two to
  // three glyphs, matching the English chip width), `.name` is also substituted
  // into the {name} token of board.betRail.strategyAria* / firedAtClose,
  // `.closeLine` renders right after `.rowTitle` as "rowTitle, closeLine".
  // Formal 합니다 register, established vocabulary: 타일, 베팅, 라운드,
  // 라운드 마감, 선두, 장전.
  "board.strategy.highest.label": "최다",
  "board.strategy.highest.name": "장전: 라운드 마감 시 최다 금액 타일에 베팅",
  "board.strategy.highest.detail":
    "금액이 가장 많이 걸린 타일에 베팅을 장전합니다. 라운드가 마감되기 바로 전에 확정됩니다.",
  "board.strategy.highest.rowTitle": "최다 타일",
  "board.strategy.highest.closeLine": "라운드 마감 시 가장 큰 타일에 베팅합니다",
  "board.strategy.highest.gridLine": "마감 시 최다 금액",

  "board.strategy.lowest.label": "최소",
  "board.strategy.lowest.name": "장전: 라운드 마감 시 최소 금액 타일에 베팅",
  "board.strategy.lowest.detail":
    "가장 덜 붐비는 타일에 베팅을 장전합니다. 라운드가 마감되기 바로 전에 확정되며, 모두가 최저 타일로 몰리면 그때는 이미 최저가 아닙니다.",
  "board.strategy.lowest.rowTitle": "최소 타일",
  "board.strategy.lowest.closeLine": "라운드 마감 시 가장 작은 타일에 베팅합니다",
  "board.strategy.lowest.gridLine": "마감 시 최소 금액",

  "board.strategy.secondHighest.label": "상위2",
  "board.strategy.secondHighest.name": "장전: 라운드 마감 시 두 번째로 많은 타일에 베팅",
  "board.strategy.secondHighest.detail":
    "선두 바로 아래 단계에 베팅을 장전합니다. 라운드가 마감되기 바로 전에 확정됩니다.",
  "board.strategy.secondHighest.rowTitle": "두 번째 최다 타일",
  "board.strategy.secondHighest.closeLine": "라운드 마감 시 선두 바로 아래 타일에 베팅합니다",
  "board.strategy.secondHighest.gridLine": "선두 바로 아래",

  "board.strategy.secondLowest.label": "하위2",
  "board.strategy.secondLowest.name": "장전: 라운드 마감 시 두 번째로 적은 타일에 베팅",
  "board.strategy.secondLowest.detail":
    "역발상 픽입니다. 모두가 최저 타일로 몰리면 그 타일은 붐비고, 오히려 두 번째로 낮은 타일이 더 크게 돌아올 수 있습니다. 지금 장전하고 라운드가 마감되기 바로 전에 확정됩니다.",
  "board.strategy.secondLowest.rowTitle": "두 번째 최소 타일",
  "board.strategy.secondLowest.closeLine": "라운드 마감 시 붐비는 최하위 바로 위 타일에 베팅합니다",
  "board.strategy.secondLowest.gridLine": "최하위 바로 위",

  "board.strategy.allTiles.label": "전체",
  "board.strategy.allTiles.name": "장전: 라운드 마감 시 모든 타일에 베팅",
  "board.strategy.allTiles.detail":
    "베팅 가능한 모든 타일에 베팅을 장전합니다. 라운드가 마감되기 바로 전에 확정되며, 총 지출은 베팅 금액 x 그 순간의 타일 수입니다.",
  "board.strategy.allTiles.rowTitle": "전체 타일",
  "board.strategy.allTiles.closeLine": "라운드 마감 시 베팅을 나눠 겁니다",
  "board.strategy.allTiles.gridLine": "모든 타일에 베팅",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "한 번 더 탭: {unit}",
  "board.tile.confirmClickAgain": "한 번 더 클릭: {unit}",
  "board.tile.betOffNotice": "설정에서 베팅이 꺼져 있습니다",
  "board.stakeControl.pickPackHint": "팩을 골라 베팅하세요",
  "board.stakeControl.emptyStakeLead": "팩을 고르세요",
  "board.stakeControl.emptyStakeHint": "그 팩이 베팅이 됩니다",
  "gear.betInput.label": "베팅 방식",
  "gear.betInput.hint":
    "타일 탭(과 숫자 키)이 베팅을 넣는 방식입니다. 더블은 먼저 확인 탭을 한 번 요구합니다 - 터치 화면 기본값. 끄기는 관전 모드로, 아무것도 베팅되지 않습니다.",
  "gear.betInput.optionSingle": "싱글 탭",
  "gear.betInput.optionDouble": "더블 탭",
  "gear.betInput.optionOff": "끄기",
  "gear.cardOpen.label": "카드 열기",
  "gear.cardOpen.hint":
    "더블은 카드가 페이지를 열기 전에 확인 탭을 요구합니다 - 터치 화면 기본값.",
} as Record<string, string>;
