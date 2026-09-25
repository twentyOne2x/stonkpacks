// Korean (한국어): reviewed for naturalness (gaming-native register) in the
// i18n epic's full-locale pass. Same key set as en/cinema.ts. See royaleI18n.ts
// for the {token} interpolation convention and the "no em dash" rule.
//
// REGISTER: formal 합니다체 / 하십시오체. Stamps, badges and column headers stay
// short noun phrases; anything addressed to the player ends in -ㅂ니다 / -십시오.
// TERMINOLOGY: 베팅 / 팩 / 개봉 / 환매 / 정산 / 팟 / 잠금 / 후원자 /
// 최다 베팅자 / 보관함 / 체이스 / 리빌. The five pack TIERS (Starter, Elite,
// Legendary, Grail, Mythic) and attn ROYALE, ATTN, USDC, X, CollectorCrypt,
// SLABZ stay in Latin script, mid-sentence included.
//
// Segment: cinema. Owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (the copy: fields of REVEAL_CINEMA_SEQUENCE),
// RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx,
// RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and RoyaleReplayRoute.tsx.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "팩 개봉 중",
  "cinema.phaseAnnounce.packsOpening.subtitle": "카드 공개 중 · 모든 타일 가치 재산정",
  "cinema.phaseAnnounce.winnerDraw.title": "승자 추첨 중",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "타일 총액 가중치 반영",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "잠금: 이제 보드가 주인공입니다",
  "cinema.phase.packsEnter.copy": "팩이 보드에 도착합니다",
  "cinema.phase.packsOpening.copy": "팩이 뜯겨 열립니다: 카드가 공개되고 타일 가치가 재산정됩니다",
  "cinema.phase.cardsByTile.copy": "카드 공개: 모든 타일, 가치 순",
  "cinema.phase.valueScan.copy": "보드 스캔: 최고 획득 카드가 빛납니다",
  "cinema.phase.winnerDraw.copy": "승자 추첨: 타일 총액 가중치 반영",
  "cinema.phase.winnerLock.copy": "승자 확정",
  "cinema.phase.loserValueConverge.copy": "패배 타일의 카드는 보관함으로: 그 가치는 승자에게 돌아갑니다",
  "cinema.phase.winnerPotCountUp.copy": "팟이 승리 타일로 모입니다",
  "cinema.phase.chaseFeed.copy": "체이스가 몫을 가져갑니다",
  "cinema.phase.chasePayout.copy": "체이스 적중: 한 타일이 크게 터집니다",
  "cinema.phase.allocation.copy": "내 몫",
  "cinema.phase.keepSellDecision.copy": "보관 또는 판매: 다음 라운드까지 결정할 수 있습니다",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "봉인",
  "cinema.vaultLock.plateSub": "체이스",
  "cinema.vaultLock.status": "잠김",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "이번 라운드는 개봉된 카드 없음",
  "cinema.cardWall.won": "승리",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "톱 히트",
  "cinema.cardWall.rarity.common": "커먼",
  "cinema.cardWall.rarity.rare": "레어",
  "cinema.cardWall.rarity.epic": "에픽",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "보관",
  "cinema.cardWall.status.sold": "판매",
  "cinema.cardWall.status.toTheChase": "체이스로",
  "cinema.cardWall.status.rake": "수수료",
  "cinema.cardWall.owner.vault": "보관함",
  "cinema.cardWall.owner.you": "나",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter 키를 누르면 카드 상세 정보가 열립니다.",
  "cinema.cardWall.sectionAriaLabel": "이번 라운드에 개봉된 모든 카드, 가치 높은 순",
  "cinema.cardWall.eyebrow": "개봉된 모든 카드",
  "cinema.cardWall.rake.title": "프로토콜 수수료",
  "cinema.cardWall.rake.metaOne": "수수료로 카드 1장",
  "cinema.cardWall.rake.metaMany": "수수료로 카드 {n}장",
  "cinema.cardWall.rake.hide": "숨기기",
  "cinema.cardWall.rake.show": "보기",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "리빌 닫기",
  "cinema.close.title": "리빌 닫기 (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "공식 승자",
  "cinema.provCaption.round": "라운드",
  "cinema.provCaption.verifyAt": "확인 주소",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "라운드 #{n}",
  "cinema.bar.vrfBadge": "CollectorCrypt VRF 기반",
  "cinema.bar.chaseFeed": "체이스 +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "개봉 중",
  "cinema.phaseShort.drawing": "추첨 중",
  "cinema.phaseShort.results": "결과",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "승자",
  "cinema.core.tileWins": "{tile} 승리",
  "cinema.core.inCards": " 카드 가치",
  "cinema.core.poolSuffix": " 팟",
  "cinema.core.totalCardValue": "총 카드 가치",
  "cinema.core.totalPool": "총 팟",
  "cinema.core.tilesLive": "타일 {n}개 활성",
  "cinema.core.packsSuffix": " · 팩 {n}개",
  "cinema.core.yourStake": "내 베팅액",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "베팅 없음",
  "cinema.heatOnly.note": "USDC만 · 이번 라운드 팩 없음",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "팩 {n}개",
  "cinema.tile.packCountMany": "팩 {n}개",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "추첨에서 졌습니다. 카드는 승리 타일의 후원자들에게 돌아갑니다.",
  "cinema.vaultNote.heatOnlyNoPack": "이번 라운드는 팩 없음 · 잔돈은 팟으로 이월",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "{pack}에서",
  "cinema.grail.fromPackRate": "{pack}에서 · {pct} 확률",
  "cinema.grail.pullTitle": "GRAIL 획득",
  "cinema.grail.fromPackVisible": "{pack} 팩에서",
  "cinema.grail.provenanceAriaLabel": "{tile}, {pack} 팩에서 획득",
  "cinema.grail.multiTitle": "이번 라운드 GRAIL {n}개",
  "cinema.grail.galleryTileFromPack": "{tile} · {pack}에서",
  "cinema.grail.galleryMore": "+{n}개 더",
  "cinema.card.openInNewTab": "{name} 카드 페이지를 새 탭에서 열기",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. {pack} 팩, 확률 {pct}. Enter 키를 누르면 카드 상세 정보가 열립니다.",
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter 키를 누르면 카드 상세 정보가 열립니다.",
  "cinema.card.bandChancePct": "{pack} 팩에서 확률 {pct}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} 승리",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  // secToDecide renders straight after the countdown number, with no space:
  // "12" + this value, so it has to read as a tail, not a standalone label.
  "cinema.sellWindow.open": "판매 가능 시간",
  "cinema.sellWindow.secToDecide": "초 안에 결정",
  "cinema.sellWindow.noActionAutoSells": "다음 잠금 시 자동 판매",
  "cinema.sellWindow.noActionKeeps": "미조치 시 카드 보관 · 내 카드에서 언제든 판매 가능",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "카드 가치",
  "cinema.tileValue.onTileLabel": "타일 금액",
  "cinema.tileValue.oddsWord": "확률",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "적중된 타일",
  "cinema.chase.fires": "체이스 발동",
  "cinema.chase.jackpotReleasingTo": "{tile}로 잭팟 지급",
  "cinema.chase.winningTileFallback": "승리 타일",
  "cinema.chase.feedThisRound": "이번 라운드 체이스 +{value}",
  "cinema.chase.cardToChase": "카드가 체이스로",
  "cinema.chase.bestLosingCardNamed": "패배 타일 최고 카드 · {name} · {value} 확정",
  "cinema.chase.bestLosingCardVault": "패배 타일 최고 카드는 보관함에 확정",
  "cinema.chase.jackpotGrows": "체이스 +{value} · 잭팟 증가",
  "cinema.chase.hitsAriaLabel": "체이스가 {tile}에 {value} 적중",
  "cinema.chase.alsoHolds": "체이스 보유 카드",
  "cinema.chase.alsoHoldsAriaOne": "체이스가 {value} 상당의 카드 1장을 함께 보유하고 있습니다",
  "cinema.chase.alsoHoldsAriaMany": "체이스가 {value} 상당의 카드 {n}장을 함께 보유하고 있습니다",
  // Renders straight after "+{n}", so it reads as a tail: "+3개 더".
  "cinema.chase.more": "개 더",
  "cinema.chase.cardsTotalOne": "카드 1장 · {value} 상당",
  "cinema.chase.cardsTotalMany": "카드 {n}장 · {value} 상당",
  "cinema.chase.hitsKicker": "체이스 적중",
  "cinema.chase.winsBig": "대박",
  "cinema.chase.yourCut": "내 몫",
  "cinema.chase.otherBackerOne": "다른 후원자 {n}명 · 비례 배분",
  "cinema.chase.otherBackerMany": "다른 후원자 {n}명 · 비례 배분",
  "cinema.chase.backerOne": "후원자 {n}명 · 비례 배분",
  "cinema.chase.backerMany": "후원자 {n}명 · 비례 배분",
  "cinema.chase.alsoWonRound": "라운드도 함께 승리",
  "cinema.chase.backedTileNote": "베팅된 타일 · 라운드 승자는 아님",
  "cinema.chase.heldCardsSpillOne": "보유 카드 1장 방출",
  "cinema.chase.heldCardsSpillMany": "보유 카드 {n}장 방출",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "팟",
  "cinema.you.get": "내 몫",
  "cinema.you.lost": "패배!",
  "cinema.you.noStakeThisRound": "이번 라운드에 베팅하지 않았습니다",
  "cinema.you.mathLine": "{usdc} USDC 팟 지분 + 카드 {cards} = 총 {total}",
  "cinema.you.sold": "{value} 판매",
  "cinema.you.kept": "보관 · 컬렉션에 추가",
  "cinema.you.keepButton": "보관",
  "cinema.you.sellButton": "{value} 판매",
  "cinema.you.yours": "내 것",
  "cinema.you.noCardThisRound": "이번 라운드 카드 없음.",
  "cinema.you.usdcPaidInstantly": "USDC · 잔액으로 지급",
  "cinema.you.keepAll": "전부 보관",
  "cinema.you.sellAllButton": "{value} 전부 판매",
  "cinema.you.sellAllConfirm": "확실해요? {value} 모두 판매",
  "cinema.you.noOtherBackers": "이번 라운드 다른 후원자 없음",
  "cinema.you.oneOtherSplits": "다른 1명이 {value} 분배",
  "cinema.you.othersSplit": "다른 {n}명이 {value} 분배",
  "cinema.you.oneWinningBackerTakes": "승리 후원자 1명이 {value} 획득",
  "cinema.you.winningBackersSplit": "승리 후원자 {n}명이 {value} 분배",
  "cinema.you.viewFullResults": "전체 결과 보기",
  "cinema.you.howItWorks": "작동 방식",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "일반 카드입니다. 최다 베팅자가 보관하거나 환매하고, 나머지는 비례 배분됩니다.",
  "cinema.theatre.disposition.sellBackSplit":
    "Grail 규칙: 어떤 후원자도 나머지 몫을 비례 배분으로 감당할 수 없어, Grail은 기본값인 환매로 처리되고 USDC가 타일 전체에 나뉩니다.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grail 규칙: 최다 베팅자의 비례 배분 몫이 나머지를 사들이고도 남으므로, 최다 베팅자가 Grail을 보관하고 나머지 전원에게 카드 몫을 USDC로 지급합니다.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "다른 플레이어 {total}명 중 {decided}명 결정 완료, 다음 라운드까지 {seconds}초",
  "cinema.theatre.playersDeciding": "결정 중인 플레이어 {count}",
  "cinema.theatre.nextRoundIn": "다음 라운드까지 {seconds}",
  "cinema.theatre.secondsShort": "{n}초",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "라운드 정산 중",
  "cinema.theatre.stageLockingBoard": "보드 잠그는 중…",
  "cinema.theatre.stagePacksOpening": "보드에서 팩 개봉 중",
  "cinema.theatre.stageWinnerDrawn": "승자 추첨 완료",
  "cinema.theatre.headlineNoEntries": "이번 라운드는 참가 없음",
  "cinema.theatre.headlineRevealing": "팩 공개 중…",
  "cinema.theatre.headlineTileWins": "{tile} {value} 획득",
  "cinema.theatre.tileFallback": "타일",
  "cinema.theatre.youWon": "{value} 획득",
  "cinema.theatre.youLostNoStake": "패배, {tile}에 베팅이 없었습니다",
  "cinema.theatre.winnerFallback": "승자",
  "cinema.theatre.tileWonNoStake": "{tile} 승리 · 내 베팅 없음",
  "cinema.theatre.aTileFallback": "한 타일",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "타일 {tiles}개 참여 · 팟 {pool}",
  "cinema.theatre.stripMetaCards": " · 카드 {value}",
  "cinema.theatre.stripMetaCash": " + 현금 {value}",
  "cinema.theatre.drawingWinner": "승자 추첨 중",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "라운드 결과",
  "cinema.theatre.roundSettled": "라운드 정산 완료",
  "cinema.theatre.winner": "승자",
  "cinema.theatre.seedNote":
    "{tile}에 걸린 시작 베팅 {value}가 포함되어 있습니다. 베팅 패널에서 시작 베팅을 지우면 $0부터 플레이합니다.",
  "cinema.theatre.lossNoteStaked":
    "이번 라운드에 다른 타일로 {value}를 걸었습니다. 이 패널 뒤의 타일에 마우스를 올리면 무엇이 나왔고 왜 졌는지 볼 수 있습니다.",
  "cinema.theatre.lossNoteNoStake":
    "이번 라운드에는 타일에 베팅하지 않아 지급할 몫이 없습니다. 다음 라운드에서 베팅 금액을 고르고 타일을 클릭하십시오.",
  "cinema.theatre.bonusGrails.one":
    "이번 라운드에 Grail이 {n}개 더 나왔습니다. 승리 타일의 후원자들에게 보너스 전리품으로 돌아가며(보관하거나, 감당하기 어려울 만큼 비싸면 비례 배분으로 환매), ATTN 수수료나 체이스로는 넘어가지 않습니다.",
  "cinema.theatre.bonusGrails.other":
    "이번 라운드에 Grail이 {n}개 더 나왔습니다. 승리 타일의 후원자들에게 보너스 전리품으로 돌아가며(보관하거나, 감당하기 어려울 만큼 비싸면 비례 배분으로 환매), ATTN 수수료나 체이스로는 넘어가지 않습니다.",
  "cinema.theatre.noPacksBacked": "이번 라운드에는 베팅된 팩이 없었습니다. 다음 라운드가 자동으로 시작됩니다.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "지급 분배 · {tile}",
  "cinema.theatre.payoutSplitMeta": "팟 {pool} · 체이스 적립 {feed}",
  "cinema.theatre.payoutSplitChase": " · 체이스 +{value}",
  "cinema.theatre.you": "나",
  "cinema.theatre.physicalCard": "실물 카드 →",
  "cinema.theatre.grailSecured": " (Grail 확보)",
  "cinema.theatre.grailSoldBack": "Grail 환매 ({value}) → 위 USDC 분배에 포함.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "체이스 적중!",
  "cinema.theatre.chaseHitBody":
    "체이스가 자체 희귀 추첨으로 발동해, 체이스의 {value}가 이번 승리에 얹혀 위 분배에 더해졌습니다. 다음 체이스는 다시 쌓이기 시작합니다.",
  "cinema.theatre.chaseMissLead": "이번 라운드 체이스 발동 없음.",
  "cinema.theatre.chaseMissBody": "체이스는 자체 희귀 추첨으로 발동하므로 계속 불어납니다. 현재 {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "추첨 검증",
  "cinema.theatre.vrfSummaryNote": "검증 가능한 추첨 · 추첨 영수증 보기",
  "cinema.theatre.vrfRoundId": "라운드 ID",
  "cinema.theatre.vrfWinningDraw": "당첨 추첨",
  "cinema.theatre.vrfDrawSeed": "추첨 시드",
  "cinema.theatre.vrfProofId": "증명 ID",
  "cinema.theatre.vrfTicket": "{total}장 중 #{n}",
  "cinema.theatre.vrfVerifying": "검증 중…",
  "cinema.theatre.vrfRecheck": "추첨 재검증",
  "cinema.theatre.vrfVerifierLink": "검증기 ↗",
  "cinema.theatre.vrfVerified": "✓ 추첨을 검증했습니다. 이 승자는 공개된 추첨 시드와 다시 대조해도 일치합니다.",
  "cinema.theatre.vrfFailed": "✗ 이 추첨은 시드와 다시 대조했을 때 일치하지 않습니다. 신뢰하지 마십시오.",
  "cinema.theatre.vrfNote": "모든 라운드는 직접 다시 확인할 수 있는 공개 시드에서 승자 하나를 뽑습니다.",
  "cinema.theatre.vrfNoDraw": "이번 라운드에는 베팅된 팩이 없어 추첨할 것도 없습니다.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "카드 보관 → 컬렉션",
  "cinema.theatre.sellBackFor": "{value}에 환매",
  "cinema.theatre.continueNextRound": "다음 라운드로 계속",
  "cinema.theatre.continue": "계속",
  "cinema.theatre.settleHint":
    "보관하면 카드가 컬렉션에 들어갑니다. 환매하면 {sell}({value}의 {pct}%, 이 팩의 CC 환매가)가 잔액에 적립됩니다. 아무것도 하지 않으면 라운드가 닫힐 때 기본값인 환매로 처리됩니다.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "잠금",
  "cinema.prizeModal.stageReveal": "리빌",
  "cinema.prizeModal.betterLuck": "다음 라운드를 노리십시오",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "카드 준비 중…",
  "cinema.share.renderingPng": "PNG 만드는 중…",
  "cinema.share.renderFailed": "이미지를 만들지 못했습니다. 다시 시도하십시오.",
  "cinema.share.captionOpened": "X에 캡션이 열렸습니다. 저장한 PNG를 첨부하십시오.",
  "cinema.share.close": "닫기",
  "cinema.share.downloadPng": "PNG 저장",
  "cinema.share.shareToX": "X에 공유",
  "cinema.share.done": "완료",
  "cinema.share.provablyFair": "팩 배틀 · 모든 추첨 검증 가능",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values.
  "cinema.winShare.multiplierAriaLabel": "배율 {value}",
  "cinema.winShare.multiplier": "배율",
  "cinema.winShare.inCards": "카드 가치",
  "cinema.winShare.cashWon": "획득 현금",
  "cinema.winShare.tileHit": "· 적중 타일",
  "cinema.winShare.entry": "참가 금액",
  "cinema.winShare.winOdds": "승리 확률",
  "cinema.winShare.totalValue": "총 가치",
  "cinema.winShare.certLine": "POWERED BY SLABZ · 인증서 #{n}",
  "cinema.winShare.roundLine": "라운드 #{n} · 검증 가능한 VRF 추첨",
  "cinema.winShare.takeHomeAriaLabel": "실수령 {value}",
  "cinema.winShare.totalTakeHome": "총 실수령액",
  "cinema.winShare.breakdown.one": "현금 {cash} + 카드 {n}장({value})",
  "cinema.winShare.breakdown.other": "현금 {cash} + 카드 {n}장({value})",
  "cinema.winShare.deposited": "입금액",
  "cinema.winShare.wonBy": "{name} 획득",
  "cinema.winShare.theGrail": "THE GRAIL",
  "cinema.winShare.topPull": "최고 획득",
  "cinema.winShare.topCardOfRound": "이 라운드 최고 카드",
  "cinema.winShare.poweredBySlabz": "POWERED BY SLABZ",
  "cinema.winShare.cert": "인증서 #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "내 승리 공유",
  "cinema.winShare.pngSaved": "PNG를 저장했습니다. 게시물에 직접 첨부하십시오. X가 대신 넣어 주지 않습니다.",
  "cinema.winShare.renderingHdVideo": "HD 라운드 영상 렌더링 중…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "HD 라운드 영상 렌더링 중 {seconds}초{pct}",
  "cinema.winShare.hdVideoSaved": "HD 영상을 저장했습니다. 이미지 대신 이 영상을 게시물에 첨부하십시오.",
  "cinema.winShare.hdRenderFailed": "HD 렌더링에 실패했습니다. 다시 시도하십시오.",
  "cinema.winShare.hdVideoButton": "HD 라운드 영상",
  "cinema.winShare.hdVideoTitle": "이 라운드를 HD mp4로 렌더링해(로컬 렌더 서비스) 저장합니다.",
  "cinema.winShare.tweetTriggerLabel": "X에 승리 공유",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "베팅 대비 수익 {value}",
  "cinema.pnlShare.onStake": "베팅 대비",
  "cinema.pnlShare.certifiedRun": "인증 기록 · 순손익",
  "cinema.pnlShare.heroSub.one": "{n}라운드 · 승률 {pct}%",
  "cinema.pnlShare.heroSub.other": "{n}라운드 · 승률 {pct}%",
  "cinema.pnlShare.collection": "컬렉션",
  "cinema.pnlShare.change30d": "30일 변동",
  "cinema.pnlShare.ribbonAriaLabel.one": "최근 베팅한 {n}라운드의 라운드별 결과",
  "cinema.pnlShare.ribbonAriaLabel.other": "최근 베팅한 {n}라운드의 라운드별 결과",
  "cinema.pnlShare.bestPull": "최고 획득",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "톱",
  "cinema.pnlShare.tier.common": "커먼",
  "cinema.pnlShare.rounds": "라운드",
  "cinema.pnlShare.winRate": "승률",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "최고 라운드",
  "cinema.pnlShare.rank": "순위 #{n}",
  "cinema.pnlShare.rankOf": "{total}명 중 순위 #{n}",
  "cinema.pnlShare.staked": "베팅 {value}",
  "cinema.pnlShare.overlayAriaLabel": "내 기록 공유",
  "cinema.pnlShare.saved": "저장했습니다. 게시물에 첨부하십시오.",
  "cinema.pnlShare.triggerLabel": "손익 공유",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English.
  "cinema.recap.keepSell": "보관 / 판매",
  "cinema.recap.secondsShort": "{n}초",
  "cinema.recap.dest.yourCall": "내 결정",
  "cinema.recap.dest.deciding": "결정 중",
  "cinema.recap.dest.you": "나",
  "cinema.recap.dest.topBacker": "최다 베팅자",
  "cinema.recap.dest.yourCard": "내 카드",
  "cinema.recap.dest.wonBy": "획득자",
  "cinema.recap.dest.aBacker": "후원자",
  "cinema.recap.dest.yourChaseLoot": "내 체이스 전리품",
  "cinema.recap.dest.chaseLoot": "체이스 전리품",
  "cinema.recap.dest.releasedFromVault": "보관함에서 방출",
  "cinema.recap.dest.sweptTo": "회수처",
  "cinema.recap.dest.chaseVault": "체이스 보관함",
  "cinema.recap.dest.fundsJackpot": "잭팟 적립",
  "cinema.recap.dest.protocolFee": "프로토콜 수수료",
  "cinema.recap.dest.tableRake": "테이블 수수료",
  "cinema.recap.dest.soldBack": "환매됨",
  "cinema.recap.dest.intoTheSplit": "분배로",
  "cinema.recap.dest.toThePool": "팟에 +{value}",
  "cinema.recap.sublineYours": "이번 라운드 테이블 전체의 카드입니다. 내 카드는 아래에 표시했습니다.",
  "cinema.recap.sublineLost": "이번 라운드 테이블 전체의 카드입니다. 내 카드는 하나도 없습니다.",
  "cinema.recap.sublineNoStake": "이번 라운드 테이블 전체의 카드입니다. 이번 판은 쉬었습니다.",
  "cinema.recap.sectionAriaLabel": "이번 라운드 카드가 모두 어디로 갔는지",
  "cinema.recap.eyebrow": "라운드 결과",
  "cinema.recap.headline": "카드는 어디로 갔나",
  "cinema.recap.theatreHeader": "라운드 기록 · 모든 카드의 행선지",
  "cinema.recap.openCardTitle": "카드 페이지를 새 탭에서 엽니다",
  "cinema.recap.fromPack": "{pack}에서",
  "cinema.recap.railAriaLabel": "이번 라운드의 모든 카드, 고가 순",
  "cinema.recap.tierRule.one": "나머지 카드 1장 · {value}",
  "cinema.recap.tierRule.other": "나머지 {n}장 · {value}",
  "cinema.recap.showMore": "{n}장 더 보기",
  "cinema.recap.showAll": "전체 {n}장 보기",
  "cinema.recap.showing": "{total}장 중 {n}장 · {totalValue} 중 {value}",
  "cinema.recap.allShown": "전체 {n}장 · 총 {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "탭 녹화" inside the service sentences is this same panel's RECORD TAB
  // button label (cinema.replay.recordTab): keep the two in step.
  "cinema.replay.finishingVideo": "영상 마무리 중...",
  "cinema.replay.recordingEmpty": "녹화 결과가 비어 있습니다. 다시 시도하십시오.",
  "cinema.replay.checkingService": "HD 렌더 서비스 확인 중...",
  "cinema.replay.serviceUnreachable":
    "HD 렌더 서비스에 연결할 수 없어 HD로 렌더링할 수 없습니다. 대신 탭 녹화가 이 탭을 캡처합니다(브라우저 확인창).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "HD 영상 렌더링 중: {seconds}초{pct}",
  "cinema.replay.hdRenderFailed": "HD 렌더링에 실패했습니다. 다시 시도하거나, 탭 녹화로 이 탭을 캡처하십시오.",
  "cinema.replay.cannotRecord":
    "이 브라우저에서는 영상을 녹화할 수 없습니다. 대신 라운드 파일을 저장합니다. 다시보기 페이지에 올리면 그대로 다시 볼 수 있습니다.",
  "cinema.replay.pickThisTab": "“이 탭”을 선택하면 라운드가 녹화됩니다.",
  "cinema.replay.recorderFailed": "녹화기를 시작하지 못했습니다.",
  "cinema.replay.watermarkAriaLabel": "라운드 {n} 다시보기",
  "cinema.replay.watermarkAriaLabelDated": "라운드 {n} 다시보기, {date} 녹화",
  "cinema.replay.watermarkTag": "다시보기",
  "cinema.replay.watermarkRound": "라운드 #{n}",
  "cinema.replay.headerSeed": "시드 {seed}",
  "cinema.replay.phaseBidding": "베팅",
  "cinema.replay.phaseReveal": "리빌",
  "cinema.replay.phaseDone": "종료",
  "cinema.replay.boardAriaLabel": "다시보기 보드",
  "cinema.replay.controlsAriaLabel": "라운드 {n} 다시보기 컨트롤",
  "cinema.replay.pause": "일시정지",
  "cinema.replay.play": "재생",
  "cinema.replay.pauseButton": "일시정지",
  "cinema.replay.playButton": "재생",
  "cinema.replay.restart": "처음부터",
  "cinema.replay.scrubAriaLabel": "라운드 전체 탐색: 베팅부터 리빌까지",
  "cinema.replay.lockMark": "잠금",
  "cinema.replay.seeking": "탐색 중",
  "cinema.replay.speedAriaLabel": "재생 속도",
  "cinema.replay.speedOption": "{n}배",
  "cinema.replay.saveVideo": "영상 저장",
  "cinema.replay.saveVideoTitle":
    "이 라운드를 HD mp4로 렌더링합니다(로컬 렌더 서비스, 화면은 녹화하지 않습니다)",
  "cinema.replay.recordTab": "탭 녹화",
  "cinema.replay.recordTabTitle":
    "대체 수단: 브라우저의 화면 캡처 확인창으로 이 탭을 녹화합니다(실시간 화질)",
  "cinema.replay.saveRound": "라운드 저장",
  "cinema.replay.saveRoundTitle":
    "이 라운드를 작은 데이터 파일로 내려받습니다. 누구나 다시보기 페이지에 올리면 이 라운드를 그대로 볼 수 있습니다",
  "cinema.replay.close": "닫기",
  "cinema.replay.backToGame": "게임으로",
  "cinema.replay.shareOverlayAriaLabel": "이 라운드 공유",
  "cinema.replay.videoReady": "라운드 영상 준비 완료",
  "cinema.replay.formatWebm": ".webm으로 저장했습니다. X는 업로드에 mp4가 필요하므로, 링크를 공유하거나 파일을 변환한 뒤 올리십시오.",
  "cinema.replay.formatMp4": ".mp4로 저장했습니다. X에 바로 첨부할 수 있습니다.",
  "cinema.replay.shareOnX": "X에 공유",
  "cinema.replay.saveAgain": "다시 저장",
  "cinema.replay.shareHint": "X는 웹에서 영상을 대신 첨부하지 못합니다. 게시물이 미리 채워진 채로 열리면 저장한 파일을 첨부하십시오.",
  "cinema.replay.xOpened": "캡션과 함께 X가 열렸습니다. 저장한 파일({filename})을 첨부하십시오. 웹 작성 창은 대신 넣어 주지 않습니다.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE 라운드 다시보기",
  "cinema.replayRoute.noRecordingParam": "녹화가 지정되지 않았습니다. ?rec=<encoded-json-or-url>을 전달하십시오.",
  "cinema.replayRoute.unreadable": "?rec=에서 녹화를 읽지 못했습니다.",
  "cinema.replayRoute.loadFailed": "녹화를 불러오지 못했습니다({error}).",
  "cinema.replayRoute.badge": "라운드 다시보기",
  "cinema.replayRoute.loading": "녹화 불러오는 중",
  "cinema.replayRoute.noRecording": "재생할 녹화가 없습니다.",
  "cinema.replayRoute.hint":
    "다시보기는 보드의 지난 라운드 스트립(정산된 라운드의 다시보기 버튼)이나 공유된 ?rec= 링크에서 열립니다.",
  "cinema.replayRoute.roundResults": "라운드 결과",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.share.shareFile": "파일 공유",
  "cinema.share.shareSheetOpened": "공유 시트를 열었습니다.",
  "cinema.winShare.lossHeadline": "라운드 패배",
  "cinema.winShare.lossResult": "라운드 패배",
  "cinema.winShare.returned": "반환",
  "cinema.winShare.bestPull": "최고 풀",
  "cinema.winShare.playedBy": "플레이어 {name}",
  "cinema.winShare.lossCaption": "라운드 #{n}: {stake}을 걸었습니다. 이번 라운드 수익은 없습니다.",
  "cinema.winShare.lossCardCaption": "테이블 최고의 풀이지만 내 것은 아닙니다.",
  "cinema.winShare.lossNoCardCaption": "라운드 결과를 정직하게 기록했습니다.",
  "cinema.winShare.roundResultTop": "라운드",
  "cinema.winShare.roundResultMain": "패배",
  "cinema.winShare.shareRoundCard": "카드 공유",
  "cinema.replay.shareVideo": "동영상 공유",
  "cinema.replay.shareVideoTitle": "라운드 동영상 공유",
  "cinema.replay.shareVideoSheetOpened": "동영상이 포함된 공유 시트를 열었습니다.",
  "cinema.replay.shareVideoFailed": "동영상을 공유할 수 없습니다. 다시 시도하세요.",
  "cinema.replay.shareSheetHint": "이 기기에서 공유 시트를 통해 X로 동영상을 보낼 수 있습니다.",
  "cinema.replay.shareRoundTitle": "attn royale · 라운드 #{n}",
  "cinema.replay.shareRoundTable": "테이블에 {amount}.",
  "cinema.replay.shareRoundWin": "내 타일이 {pool} 테이블을 차지했고 {amount}이 돌아왔습니다.",
  "cinema.replay.shareRoundCardsOnly": "타일 {tile}이 {pool} 테이블을 차지했고 내 타일은 졌지만 {amount}이 돌아왔습니다.",
  "cinema.replay.shareRoundWinner": "타일 {tile}이 {pool} 테이블을 차지했습니다.",
  "cinema.share.shareVideo": "동영상 공유",
  "cinema.share.preparingOutput": "공유 준비 중…",
  "cinema.share.cancelled": "공유가 취소되었습니다.",
  "cinema.share.shareSheetHint": "이 기기에서 공유 시트를 통해 X로 동영상을 보낼 수 있습니다.",
  "cinema.personalReveal.sectionAria": "내가 개봉한 카드",
  "cinema.personalReveal.title": "내가 연 카드",
  "cinema.personalReveal.progress.eyebrow": "동기화 공개",
  "cinema.personalReveal.progress.title": "카드 개봉 중",
  "cinema.personalReveal.progress.body": "테이블에서 카드를 개봉하고 있습니다. 이 시간이 끝나면 전체 공개가 이어집니다.",
  "cinema.personalReveal.normal.label": "일반 공개",
  "cinema.personalReveal.normalHint": "처음에는 카드 뒷면이 보입니다. 카드를 클릭하거나 탭해 뒤집으세요. 내가 연 카드는 내 것이며, 아직 뒷면인 카드는 5초 후 자동으로 뒤집힙니다.",
  "cinema.personalReveal.hardcore.label": "극한 공개",
  "cinema.personalReveal.hardcoreHint": "처음에는 카드 뒷면이 보입니다. 카드를 클릭하거나 탭해 뒤집으세요. 소유권은 추첨 후 결정되며, 아직 뒷면인 카드는 5초 후 자동으로 뒤집힙니다.",
  "cinema.personalReveal.yourCard": "내 카드",
  "cinema.personalReveal.youOpened": "내가 열었음",
  "cinema.personalReveal.otherCards": "다른 카드",
  "cinema.personalReveal.sort.group": "카드 정렬",
  "cinema.personalReveal.sort.pack": "팩",
  "cinema.personalReveal.sort.packAria": "팩 가격이 낮은 순으로 정렬",
  "cinema.personalReveal.sort.rarity": "희귀도",
  "cinema.personalReveal.sort.revealFirst": "모든 카드를 공개하면 희귀도 정렬이 활성화됩니다",
  "cinema.personalReveal.sort.bestAria": "희귀도가 높은 순으로 정렬",
  "cinema.personalReveal.sort.worstAria": "희귀도가 낮은 순으로 정렬",
  "cinema.personalReveal.sort.packStatus": "카드가 팩 가격이 낮은 순으로 정렬되었습니다",
  "cinema.personalReveal.sort.bestStatus": "카드가 희귀도가 높은 순으로 정렬되었습니다",
  "cinema.personalReveal.sort.worstStatus": "카드가 희귀도가 낮은 순으로 정렬되었습니다",
  "cinema.personalReveal.allOpen": "모든 카드가 공개되었습니다",
  "cinema.personalReveal.autoOpenIn": "남은 카드는 {n}초 후 자동으로 공개됩니다",
  "cinema.personalReveal.revealCardAria": "카드 {n} 뒤집기",
  "cinema.personalReveal.revealedCardAria": "카드 {n} 공개됨: {name}, {value}",
  "cinema.personalReveal.rarity": "희귀도",
  "cinema.personalReveal.year": "연도",
  "cinema.personalReveal.yearUnknown": "연도 불명",
  "cinema.personalReveal.grade": "등급",
  "cinema.personalReveal.ungraded": "미감정",
  "cinema.personalReveal.pageNavigation": "카드 페이지",
  "cinema.personalReveal.previousPage": "이전 카드",
  "cinema.personalReveal.nextPage": "다음 카드",
  "cinema.personalReveal.pageStatus": "{pages}페이지 중 {page}페이지",
  "cinema.personalReveal.live.revealed": "{name} 공개됨",
  "cinema.personalReveal.live.all": "카드 {n}장을 모두 공개했습니다",
} as Record<string, string>;
