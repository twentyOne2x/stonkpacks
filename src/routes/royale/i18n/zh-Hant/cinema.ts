// Chinese, Traditional (繁體中文): editorial pass over the Phase 1 machine
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
// translation. Same key set as en/cinema.ts. See royaleI18n.ts for the
// {token} interpolation convention and the "no em dash" rule (the Chinese
// full-width 破折號 is the SAME character and is banned too).
//
// House terms (kept in step with board.ts / misc.ts / core.ts):
//   tile 格子 · pack 卡包 · back/stake 押注 · bet 下注 · backer 押注者 ·
//   pool 獎池 · jackpot 累積獎金 · Chase 追逐獎 · vault 金庫 ·
//   buyback 回購價 · sell back 回售 · settle 結算 · collection 收藏 ·
//   slab 評級卡 · rake 抽成 · odds 勝率 · pull 拆出.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) stay in Latin
// script, mid-sentence included, as do attn ROYALE / ATTN / SLABZ /
// CollectorCrypt / USDC / X / VRF.
//
// NBSP NOTE: en's cinema.tileValue.cardValueLabel / onTileLabel carry a
// literal NBSP so a two-WORD English label cannot break mid-phrase. Chinese
// writes each as one unbroken run of characters, so there is no space to
// protect and none is used here.
//
// Segment: cinema - owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (the copy: fields of REVEAL_CINEMA_SEQUENCE),
// RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx,
// RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "拆包中",
  "cinema.phaseAnnounce.packsOpening.subtitle": "揭示卡片 · 各格重新計價",
  "cinema.phaseAnnounce.winnerDraw.title": "抽取獲勝者",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "依據各格總額加權",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "已鎖定，棋盤就是舞台",
  "cinema.phase.packsEnter.copy": "卡包登場",
  "cinema.phase.packsOpening.copy": "卡包撕開：卡片揭示，各格重新計價",
  "cinema.phase.cardsByTile.copy": "卡片揭示：按價值從高到低逐格呈現",
  "cinema.phase.valueScan.copy": "掃讀全場：最大的拆出在發光",
  "cinema.phase.winnerDraw.copy": "抽取獲勝者：依據各格總額加權",
  "cinema.phase.winnerLock.copy": "獲勝者已鎖定",
  "cinema.phase.loserValueConverge.copy": "落選卡片退回金庫，價值歸給獲勝方",
  "cinema.phase.winnerPotCountUp.copy": "獎池落到獲勝格子上",
  "cinema.phase.chaseFeed.copy": "追逐獎抽走自己那一份",
  "cinema.phase.chasePayout.copy": "追逐獎砸下：一個格子通吃",
  "cinema.phase.allocation.copy": "你將獲得",
  "cinema.phase.keepSellDecision.copy": "保留還是出售：決定可以拖到下一回合",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "已入庫",
  "cinema.vaultLock.plateSub": "追逐獎",
  "cinema.vaultLock.status": "已鎖定",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "本回合沒有拆出任何卡片",
  "cinema.cardWall.won": "已獲勝",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "頂級命中",
  "cinema.cardWall.rarity.common": "普通",
  "cinema.cardWall.rarity.rare": "稀有",
  "cinema.cardWall.rarity.epic": "史詩",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "已保留",
  "cinema.cardWall.status.sold": "已出售",
  "cinema.cardWall.status.toTheChase": "計入追逐獎",
  "cinema.cardWall.status.rake": "平台抽成",
  "cinema.cardWall.owner.vault": "金庫",
  "cinema.cardWall.owner.you": "你",
  "cinema.cardWall.cardAriaLabel": "{name}，{value}。按Enter鍵開啟卡片詳情。",
  "cinema.cardWall.sectionAriaLabel": "本回合拆出的所有卡片，按價值從高到低",
  "cinema.cardWall.eyebrow": "全部拆出卡片",
  "cinema.cardWall.rake.title": "協議費用",
  "cinema.cardWall.rake.metaOne": "1張卡片計入抽成",
  "cinema.cardWall.rake.metaMany": "{n}張卡片計入抽成",
  "cinema.cardWall.rake.hide": "隱藏",
  "cinema.cardWall.rake.show": "顯示",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "關閉揭示",
  "cinema.close.title": "關閉揭示（Esc）",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "正式獲勝者",
  "cinema.provCaption.round": "回合",
  "cinema.provCaption.verifyAt": "驗證地址",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "回合 #{n}",
  "cinema.bar.vrfBadge": "由 CollectorCrypt VRF 驅動",
  "cinema.bar.chaseFeed": "追逐獎 +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "開啟中",
  "cinema.phaseShort.drawing": "抽取中",
  "cinema.phaseShort.results": "結果",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "獲勝者",
  "cinema.core.tileWins": "{tile}獲勝",
  "cinema.core.inCards": " 卡片價值",
  "cinema.core.poolSuffix": " 獎池",
  "cinema.core.totalCardValue": "卡片總價值",
  "cinema.core.totalPool": "獎池總額",
  "cinema.core.tilesLive": "{n}個格子進行中",
  "cinema.core.packsSuffix": " · {n}個卡包",
  "cinema.core.yourStake": "你的下注",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "無投注",
  "cinema.heatOnly.note": "僅USDC · 本回合未成包",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n}個卡包",
  "cinema.tile.packCountMany": "{n}個卡包",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "未中獎。卡片歸獲勝格子的押注者所有。",
  "cinema.vaultNote.heatOnlyNoPack": "本回合未成包 · 零散資金計入獎池",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "來自{pack}",
  "cinema.grail.fromPackRate": "來自{pack} · {pct}拆出率",
  "cinema.grail.pullTitle": "GRAIL 拆出",
  "cinema.grail.fromPackVisible": "來自一個{pack}卡包",
  "cinema.grail.provenanceAriaLabel": "{tile}，來自一個{pack}卡包",
  "cinema.grail.multiTitle": "本回合{n}張 GRAIL",
  "cinema.grail.galleryTileFromPack": "{tile} · 來自{pack}",
  "cinema.grail.galleryMore": "還有{n}張",
  "cinema.card.openInNewTab": "在新分頁中開啟{name}的卡片頁面",
  "cinema.card.ariaLabelWithOdds": "{name}，{value}。來自{pack}卡包，拆出率{pct}。按Enter鍵開啟卡片詳情。",
  "cinema.card.ariaLabelWithBand": "{name}，{value}。{bandLine}。按Enter鍵開啟卡片詳情。",
  "cinema.card.bandChancePct": "來自{pack}卡包，機率{pct}%",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} 獲勝",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "出售視窗開啟",
  "cinema.sellWindow.secToDecide": "秒可決定",
  "cinema.sellWindow.noActionAutoSells": "不操作將在下次鎖定時自動出售",
  "cinema.sellWindow.noActionKeeps": "不操作即保留 · 隨時可在你的卡片裡出售",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // en carries a literal NBSP (U+00A0) between the two WORDS of each label so
  // "card value" / "on tile" cannot break to an orphan "card" / "on" at a
  // line end (AUDIT-FIX-4). Chinese writes each label as one unbroken run of
  // characters, so there is no space to protect and none is used here.
  "cinema.tileValue.cardValueLabel": "卡片價值",
  "cinema.tileValue.onTileLabel": "格子上",
  "cinema.tileValue.oddsWord": "勝率",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "被命中的格子",
  "cinema.chase.fires": "追逐獎觸發",
  "cinema.chase.jackpotReleasingTo": "累積獎金正釋放給{tile}",
  "cinema.chase.winningTileFallback": "獲勝格子",
  "cinema.chase.feedThisRound": "本回合追逐獎 +{value}",
  "cinema.chase.cardToChase": "卡片計入追逐獎",
  "cinema.chase.bestLosingCardNamed": "落選卡片裡最好的一張 · {name} · {value}已鎖定",
  "cinema.chase.bestLosingCardVault": "落選卡片裡最好的一張已鎖進金庫",
  "cinema.chase.jackpotGrows": "追逐獎 +{value} · 累積獎金繼續漲",
  "cinema.chase.hitsAriaLabel": "追逐獎命中{tile}，獲得{value}",
  "cinema.chase.alsoHolds": "追逐獎同時持有",
  "cinema.chase.alsoHoldsAriaOne": "追逐獎同時持有1張價值{value}的卡片",
  "cinema.chase.alsoHoldsAriaMany": "追逐獎同時持有{n}張價值{value}的卡片",
  "cinema.chase.more": "更多",
  "cinema.chase.cardsTotalOne": "1張卡片 · 評級卡共{value}",
  "cinema.chase.cardsTotalMany": "{n}張卡片 · 評級卡共{value}",
  "cinema.chase.hitsKicker": "追逐獎命中",
  "cinema.chase.winsBig": "大獲全勝",
  "cinema.chase.yourCut": "你的份額",
  "cinema.chase.otherBackerOne": "另有{n}位押注者 · 按比例分配",
  "cinema.chase.otherBackerMany": "另有{n}位押注者 · 按比例分配",
  "cinema.chase.backerOne": "{n}位押注者 · 按比例分配",
  "cinema.chase.backerMany": "{n}位押注者 · 按比例分配",
  "cinema.chase.alsoWonRound": "同時贏得本回合",
  "cinema.chase.backedTileNote": "有人押注的格子 · 不是本回合的獲勝者",
  "cinema.chase.heldCardsSpillOne": "庫存裡溢出1張卡片",
  "cinema.chase.heldCardsSpillMany": "庫存裡溢出{n}張卡片",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "獎池",
  "cinema.you.get": "你將獲得",
  "cinema.you.lost": "你輸了！",
  "cinema.you.noStakeThisRound": "你本回合未參與投注",
  "cinema.you.mathLine": "獎池分成{usdc} USDC + 卡片{cards} = 共{total}歸你",
  "cinema.you.sold": "已出售{value}",
  "cinema.you.kept": "已保留 · 收進你的收藏",
  "cinema.you.keepButton": "保留",
  "cinema.you.sellButton": "出售{value}",
  "cinema.you.yours": "歸你所有",
  "cinema.you.noCardThisRound": "本回合沒有卡片。",
  "cinema.you.usdcPaidInstantly": "USDC · 計入餘額",
  "cinema.you.keepAll": "全部保留",
  "cinema.you.sellAllButton": "全部出售{value}",
  "cinema.you.sellAllConfirm": "確定？全部賣出 {value}",
  "cinema.you.noOtherBackers": "本回合沒有別的押注者",
  "cinema.you.oneOtherSplits": "另1人分得{value}",
  "cinema.you.othersSplit": "另{n}人分得{value}",
  "cinema.you.oneWinningBackerTakes": "1位獲勝押注者獲得{value}",
  "cinema.you.winningBackersSplit": "{n}位獲勝押注者分得{value}",
  "cinema.you.viewFullResults": "檢視完整結果",
  "cinema.you.howItWorks": "玩法說明",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // GRAIL DISPOSITION rule copy, kept word for word in step with
  // board.settlement.disposition* so the two panels read the same.
  "cinema.theatre.disposition.noGrail": "普通評級卡：格子的最大押注者可保留，或回售後按比例分配。",
  "cinema.theatre.disposition.sellBackSplit":
    "Grail 規則：沒有哪個押注者買得起其他人的份額，所以這張 Grail 預設回售，USDC按格子內比例分給大家。",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grail 規則：最大押注者的份額足以買斷其他人，所以 Grail 歸最大押注者，其他人的卡片份額用USDC結清。",
  // Spectator "players deciding" wait row.
  "cinema.theatre.decidingAriaLabel": "其他{total}位玩家已有{decided}位做出決定，下一回合{seconds}秒後開始",
  "cinema.theatre.playersDeciding": "玩家決定中 {count}",
  "cinema.theatre.nextRoundIn": "下一回合 {seconds}",
  "cinema.theatre.secondsShort": "{n}秒",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "回合結算中",
  "cinema.theatre.stageLockingBoard": "棋盤鎖定中…",
  "cinema.theatre.stagePacksOpening": "棋盤上正在開包",
  "cinema.theatre.stageWinnerDrawn": "獲勝者已抽出",
  "cinema.theatre.headlineNoEntries": "本回合無人參與",
  "cinema.theatre.headlineRevealing": "卡包揭示中…",
  "cinema.theatre.headlineTileWins": "{tile}贏得{value}",
  "cinema.theatre.tileFallback": "格子",
  "cinema.theatre.youWon": "你贏了{value}",
  "cinema.theatre.youLostNoStake": "你輸了，{tile}上沒有你的投注",
  "cinema.theatre.winnerFallback": "獲勝者",
  "cinema.theatre.tileWonNoStake": "{tile}獲勝 · 你沒有投注",
  "cinema.theatre.aTileFallback": "某個格子",
  // Leading separator/space is part of the value: these two append to the
  // meta line.
  "cinema.theatre.stripMeta": "{tiles}個格子參戰 · 獎池{pool}",
  "cinema.theatre.stripMetaCards": " · 卡片{value}",
  "cinema.theatre.stripMetaCash": " + 現金{value}",
  "cinema.theatre.drawingWinner": "正在抽取獲勝者",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "回合結果",
  "cinema.theatre.roundSettled": "回合已結算",
  "cinema.theatre.winner": "獲勝者",
  "cinema.theatre.seedNote":
    "其中含你在{tile}上的{value}初始投注。想從$0開打，可在投注面板裡清空初始投注。",
  "cinema.theatre.lossNoteStaked":
    "本回合你在其他格子上押了{value}。把滑鼠移到面板後的任意格子，就能看到它開出了什麼、又為什麼輸。",
  "cinema.theatre.lossNoteNoStake":
    "本回合你沒押任何格子，自然沒有派獎。下一回合選好投注額，點一個格子就行。",
  "cinema.theatre.bonusGrails.one":
    "本回合還落下{n}張 Grail：作為額外戰利品歸獲勝格子的押注者（保留，或價格太高拿不動時按比例回售分掉），絕不進ATTN手續費，也不進追逐獎。",
  "cinema.theatre.bonusGrails.other":
    "本回合還落下{n}張 Grail：作為額外戰利品歸獲勝格子的押注者（保留，或價格太高拿不動時按比例回售分掉），絕不進ATTN手續費，也不進追逐獎。",
  "cinema.theatre.noPacksBacked": "本回合沒有卡包押注。下一回合會自動開始。",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "派獎分配 · {tile}",
  "cinema.theatre.payoutSplitMeta": "獎池{pool} · 追逐獎注入{feed}",
  "cinema.theatre.payoutSplitChase": " · 追逐獎 +{value}",
  "cinema.theatre.you": "你",
  "cinema.theatre.physicalCard": "實體卡片 →",
  "cinema.theatre.grailSecured": "（Grail 已鎖定歸屬）",
  "cinema.theatre.grailSoldBack": "Grail 已回售（{value}）→ USDC分配見上方。",
  // Chase result.
  "cinema.theatre.chaseHitLead": "追逐獎觸發！",
  "cinema.theatre.chaseHitBody":
    "追逐獎在它自己的稀有抽取中觸發，因此拿出{value}併入這次獲勝，計進上方的分配。新一輪追逐獎重新開始累積。",
  "cinema.theatre.chaseMissLead": "本回合追逐獎未觸發。",
  "cinema.theatre.chaseMissBody": "追逐獎由它自己的稀有抽取觸發，所以它繼續漲，現在是{value}。",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "驗證抽取",
  "cinema.theatre.vrfSummaryNote": "抽取可驗證 · 檢視抽取憑證",
  "cinema.theatre.vrfRoundId": "回合ID",
  "cinema.theatre.vrfWinningDraw": "獲勝抽取",
  "cinema.theatre.vrfDrawSeed": "抽取種子",
  "cinema.theatre.vrfProofId": "證明ID",
  "cinema.theatre.vrfTicket": "第{n}/{total}",
  "cinema.theatre.vrfVerifying": "驗證中…",
  "cinema.theatre.vrfRecheck": "重新核驗抽取",
  "cinema.theatre.vrfVerifierLink": "驗證工具 ↗",
  "cinema.theatre.vrfVerified": "✓ 抽取已驗證：該結果與公佈的抽取種子核對一致。",
  "cinema.theatre.vrfFailed": "✗ 該結果未通過種子核對，請勿採信。",
  "cinema.theatre.vrfNote": "每回合都用一個公開可核驗的種子抽出一名獲勝者。",
  "cinema.theatre.vrfNoDraw": "本回合沒有卡包押注，無需抽取。",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "保留卡片 → 收藏",
  "cinema.theatre.sellBackFor": "以{value}回售",
  "cinema.theatre.continueNextRound": "繼續下一回合",
  "cinema.theatre.continue": "繼續",
  "cinema.theatre.settleHint":
    "保留就把卡片收進你的收藏。回售會把{sell}（{value}的{pct}%，這個卡包的CC回購價）匯入你的餘額。不操作的話，回合關閉時預設回售。",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "已鎖定",
  "cinema.prizeModal.stageReveal": "揭示",
  "cinema.prizeModal.betterLuck": "下回合再戰",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "正在準備你的卡片…",
  "cinema.share.renderingPng": "PNG產生中…",
  "cinema.share.renderFailed": "圖片未能產生，再試一次。",
  "cinema.share.captionOpened": "文案已在 X 開啟，把儲存好的PNG附上去。",
  "cinema.share.close": "關閉",
  "cinema.share.downloadPng": "下載PNG",
  "cinema.share.shareToX": "分享到 X",
  "cinema.share.done": "完成",
  "cinema.share.provablyFair": "卡包對決 · 每次抽取皆可驗證",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE", "SLABZ", "GRAIL" and "X" are brand terms and stay English.
  "cinema.winShare.multiplierAriaLabel": "倍數{value}",
  "cinema.winShare.multiplier": "倍數",
  "cinema.winShare.inCards": "卡片價值",
  "cinema.winShare.cashWon": "贏得現金",
  "cinema.winShare.tileHit": "· 命中格子",
  "cinema.winShare.entry": "投入",
  "cinema.winShare.winOdds": "勝率",
  "cinema.winShare.totalValue": "總價值",
  "cinema.winShare.certLine": "由 SLABZ 提供技術支援 · 證書 #{n}",
  "cinema.winShare.roundLine": "回合 #{n} · 可驗證 VRF 抽取",
  "cinema.winShare.takeHomeAriaLabel": "到手{value}",
  "cinema.winShare.totalTakeHome": "到手總額",
  "cinema.winShare.breakdown.one": "現金{cash} + {n}張卡片（{value}）",
  "cinema.winShare.breakdown.other": "現金{cash} + {n}張卡片（{value}）",
  "cinema.winShare.deposited": "已存入",
  "cinema.winShare.wonBy": "{name}贏得",
  "cinema.winShare.theGrail": "GRAIL 卡",
  "cinema.winShare.topPull": "最佳拆出",
  "cinema.winShare.topCardOfRound": "本回合最佳卡片",
  "cinema.winShare.poweredBySlabz": "由 SLABZ 提供技術支援",
  "cinema.winShare.cert": "證書 #{n}",
  "cinema.winShare.shareYourWin": "分享你的獲勝",
  "cinema.winShare.pngSaved": "PNG已儲存。把它附到貼文裡，X 不會替你加。",
  "cinema.winShare.renderingHdVideo": "正在渲染高畫質回合影片…",
  "cinema.winShare.renderingHdVideoProgress": "正在渲染高畫質回合影片，已用{seconds}秒{pct}",
  "cinema.winShare.hdVideoSaved": "高畫質影片已儲存。發文時用它代替圖片。",
  "cinema.winShare.hdRenderFailed": "高畫質渲染失敗，再試一次。",
  "cinema.winShare.hdVideoButton": "高畫質回合影片",
  "cinema.winShare.hdVideoTitle": "把這個回合渲染成高畫質mp4（本地渲染服務）並儲存。",
  "cinema.winShare.tweetTriggerLabel": "在 X 上分享獲勝",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "投注回報{value}",
  "cinema.pnlShare.onStake": "相對投注",
  "cinema.pnlShare.certifiedRun": "認證戰績 · 淨盈虧",
  "cinema.pnlShare.heroSub.one": "共{n}個回合 · 勝率{pct}%",
  "cinema.pnlShare.heroSub.other": "共{n}個回合 · 勝率{pct}%",
  "cinema.pnlShare.collection": "收藏",
  "cinema.pnlShare.change30d": "30天變化",
  "cinema.pnlShare.ribbonAriaLabel.one": "最近{n}個有押注回合的逐回合結果",
  "cinema.pnlShare.ribbonAriaLabel.other": "最近{n}個有押注回合的逐回合結果",
  "cinema.pnlShare.bestPull": "最佳拆出",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "頂級",
  "cinema.pnlShare.tier.common": "普通",
  "cinema.pnlShare.rounds": "回合數",
  "cinema.pnlShare.winRate": "勝率",
  "cinema.pnlShare.roi": "回報率",
  "cinema.pnlShare.bestRound": "最佳回合",
  "cinema.pnlShare.rank": "排名 #{n}",
  "cinema.pnlShare.rankOf": "排名 #{n} / 共{total}",
  "cinema.pnlShare.staked": "投注{value}",
  "cinema.pnlShare.overlayAriaLabel": "分享你的戰績",
  "cinema.pnlShare.saved": "已儲存。把它附到貼文裡。",
  "cinema.pnlShare.triggerLabel": "分享盈虧",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  "cinema.recap.keepSell": "保留 / 出售",
  "cinema.recap.secondsShort": "{n}秒",
  "cinema.recap.dest.yourCall": "你來定",
  "cinema.recap.dest.deciding": "決定中",
  "cinema.recap.dest.you": "你",
  "cinema.recap.dest.topBacker": "最大押注者",
  "cinema.recap.dest.yourCard": "你的卡片",
  "cinema.recap.dest.wonBy": "贏家",
  "cinema.recap.dest.aBacker": "某位押注者",
  "cinema.recap.dest.yourChaseLoot": "你的追逐獎戰利品",
  "cinema.recap.dest.chaseLoot": "追逐獎戰利品",
  "cinema.recap.dest.releasedFromVault": "從金庫釋放",
  "cinema.recap.dest.sweptTo": "收進",
  "cinema.recap.dest.chaseVault": "追逐獎金庫",
  "cinema.recap.dest.fundsJackpot": "充實累積獎金",
  "cinema.recap.dest.protocolFee": "協議費用",
  "cinema.recap.dest.tableRake": "牌桌抽成",
  "cinema.recap.dest.soldBack": "已回售",
  "cinema.recap.dest.intoTheSplit": "計入分配",
  "cinema.recap.dest.toThePool": "+{value}進獎池",
  "cinema.recap.sublineYours": "本回合全桌的卡片。屬於你的已在下方標出。",
  "cinema.recap.sublineLost": "本回合全桌的卡片。沒有一張是你的。",
  "cinema.recap.sublineNoStake": "本回合全桌的卡片。這一局你沒下場。",
  "cinema.recap.sectionAriaLabel": "本回合每張卡片的去向",
  "cinema.recap.eyebrow": "回合結果",
  "cinema.recap.headline": "每張卡片落到了哪裡",
  "cinema.recap.theatreHeader": "回合始末 · 每張卡片的歸屬",
  "cinema.recap.openCardTitle": "在新分頁開啟卡片頁面",
  "cinema.recap.fromPack": "來自{pack}",
  "cinema.recap.railAriaLabel": "本回合的全部卡牌，依價值由高到低",
  "cinema.recap.tierRule.one": "另外 1 張 · {value}",
  "cinema.recap.tierRule.other": "另外 {n} 張 · {value}",
  "cinema.recap.showMore": "再顯示 {n} 張",
  "cinema.recap.showAll": "顯示全部 {n} 張",
  "cinema.recap.showing": "已顯示 {total} 張中的 {n} 張 · {totalValue} 中的 {value}",
  "cinema.recap.allShown": "全部 {n} 張 · 合計 {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "錄製分頁" inside the two service sentences is this same panel's button
  // label (cinema.replay.recordTab): keep the two in step.
  "cinema.replay.finishingVideo": "影片收尾中…",
  "cinema.replay.recordingEmpty": "錄製結果是空的，再試一次。",
  "cinema.replay.checkingService": "正在查詢高畫質渲染服務…",
  "cinema.replay.serviceUnreachable":
    "連不上高畫質渲染服務，這次沒辦法出高畫質。改用「錄製分頁」直接抓取目前分頁（瀏覽器會跳出提示）。",
  "cinema.replay.renderingHd": "正在渲染高畫質影片：{seconds}秒{pct}",
  "cinema.replay.hdRenderFailed": "高畫質渲染失敗。再試一次，或者用「錄製分頁」抓取目前分頁。",
  "cinema.replay.cannotRecord":
    "此瀏覽器無法在這裡錄影，改為儲存回合檔案。把它拖到回放頁面就能重看。",
  "cinema.replay.pickThisTab": "選擇「此分頁」來錄製這個回合。",
  "cinema.replay.recorderFailed": "錄製器未能啟動。",
  "cinema.replay.watermarkAriaLabel": "回合{n}的回放",
  "cinema.replay.watermarkAriaLabelDated": "回合{n}的回放，錄製於{date}",
  "cinema.replay.watermarkTag": "回放",
  "cinema.replay.watermarkRound": "回合 #{n}",
  "cinema.replay.headerSeed": "種子 {seed}",
  "cinema.replay.phaseBidding": "下注中",
  "cinema.replay.phaseReveal": "揭示",
  "cinema.replay.phaseDone": "結束",
  "cinema.replay.boardAriaLabel": "回放棋盤",
  "cinema.replay.controlsAriaLabel": "回合{n}的回放控制",
  "cinema.replay.pause": "暫停",
  "cinema.replay.play": "播放",
  "cinema.replay.pauseButton": "暫停",
  "cinema.replay.playButton": "播放",
  "cinema.replay.restart": "重播",
  "cinema.replay.scrubAriaLabel": "拖曳瀏覽整個回合：從下注一直到揭示",
  "cinema.replay.lockMark": "鎖定",
  "cinema.replay.seeking": "跳轉中",
  "cinema.replay.speedAriaLabel": "播放速度",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "儲存影片",
  "cinema.replay.saveVideoTitle":
    "把這個回合渲染成高畫質mp4（本地渲染服務，不會錄你的螢幕）",
  "cinema.replay.recordTab": "錄製分頁",
  "cinema.replay.recordTabTitle":
    "備選方案：用瀏覽器的螢幕錄製提示抓取目前分頁（即時畫質）",
  "cinema.replay.saveRound": "儲存回合",
  "cinema.replay.saveRoundTitle":
    "把這個回合下載成一個小資料檔案，誰把它拖到回放頁面，都能重看這一模一樣的回合",
  "cinema.replay.close": "關閉",
  "cinema.replay.backToGame": "返回遊戲",
  "cinema.replay.shareOverlayAriaLabel": "分享這個回合",
  "cinema.replay.videoReady": "回合影片已就緒",
  "cinema.replay.formatWebm": "已存為.webm。X 只收mp4，先分享連結，或者把檔案轉一下。",
  "cinema.replay.formatMp4": "已存為.mp4，可以直接附到 X 上。",
  "cinema.replay.shareOnX": "分享到 X",
  "cinema.replay.saveAgain": "重新儲存",
  "cinema.replay.shareHint": "X 不能從網頁直接附影片。貼文會帶著文案開啟，你把儲存好的檔案附上去。",
  "cinema.replay.xOpened": "X 已帶著你的文案開啟。把儲存好的檔案（{filename}）附上去，網頁編輯器不會替你加。",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE 回合回放",
  "cinema.replayRoute.noRecordingParam": "沒有提供錄影。請帶上 ?rec=<encoded-json-or-url>。",
  "cinema.replayRoute.unreadable": "無法從 ?rec= 讀取錄影。",
  "cinema.replayRoute.loadFailed": "錄影載入失敗（{error}）。",
  "cinema.replayRoute.badge": "回合回放",
  "cinema.replayRoute.loading": "錄影載入中",
  "cinema.replayRoute.noRecording": "沒有可播放的錄影。",
  "cinema.replayRoute.hint":
    "回放可以從棋盤的往期回合條開啟（在已結算回合上點「回放」），也可以用別人分享的 ?rec= 連結開啟。",
  "cinema.replayRoute.roundResults": "回合結果",
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
  "cinema.share.shareFile": "分享檔案",
  "cinema.share.shareSheetOpened": "分享面板已開啟。",
  "cinema.winShare.lossHeadline": "本回合失利",
  "cinema.winShare.lossResult": "本回合失利",
  "cinema.winShare.returned": "返還",
  "cinema.winShare.bestPull": "最佳抽取",
  "cinema.winShare.playedBy": "由 {name} 參與",
  "cinema.winShare.lossCaption": "第 {n} 回合：我下注了 {stake}。本回合沒有帶走收益。",
  "cinema.winShare.lossCardCaption": "牌桌上的最佳抽取，但不是我的。",
  "cinema.winShare.lossNoCardCaption": "如實記錄本回合結果。",
  "cinema.winShare.roundResultTop": "回合",
  "cinema.winShare.roundResultMain": "失利",
  "cinema.winShare.shareRoundCard": "分享卡片",
  "cinema.replay.shareVideo": "分享影片",
  "cinema.replay.shareVideoTitle": "分享回合影片",
  "cinema.replay.shareVideoSheetOpened": "已開啟含影片的分享面板。",
  "cinema.replay.shareVideoFailed": "無法分享影片，請再試一次。",
  "cinema.replay.shareSheetHint": "你的裝置可以從分享面板將影片傳送到 X。",
  "cinema.replay.shareRoundTitle": "attn royale · 第 {n} 回合",
  "cinema.replay.shareRoundTable": "牌桌上有 {amount}。",
  "cinema.replay.shareRoundWin": "我的格子贏下了 {pool} 的牌桌 · 帶回 {amount}。",
  "cinema.replay.shareRoundCardsOnly": "格子 {tile} 贏下了 {pool} 的牌桌 · 我的格子輸了，但帶回 {amount}。",
  "cinema.replay.shareRoundWinner": "格子 {tile} 贏下了 {pool} 的牌桌。",
  "cinema.share.shareVideo": "分享影片",
  "cinema.share.preparingOutput": "正在準備分享…",
  "cinema.share.cancelled": "分享已取消。",
  "cinema.share.shareSheetHint": "你的裝置可以從分享面板將影片傳送到 X。",
  "cinema.personalReveal.sectionAria": "你開出的卡牌",
  "cinema.personalReveal.title": "你開出的卡牌",
  "cinema.personalReveal.progress.eyebrow": "同步揭曉",
  "cinema.personalReveal.progress.title": "正在開卡",
  "cinema.personalReveal.progress.body": "牌桌正在開卡。本階段結束後將繼續共同揭曉。",
  "cinema.personalReveal.normal.label": "普通揭曉",
  "cinema.personalReveal.normalHint": "首先顯示卡牌背面。點擊或輕觸卡牌即可翻開；你翻開的卡牌歸你。仍然背面朝上的卡牌會在5秒後自動翻開。",
  "cinema.personalReveal.hardcore.label": "極限揭曉",
  "cinema.personalReveal.hardcoreHint": "首先顯示卡牌背面。點擊或輕觸卡牌即可翻開；歸屬將在抽籤後結算。仍然背面朝上的卡牌會在5秒後自動翻開。",
  "cinema.personalReveal.yourCard": "你的卡牌",
  "cinema.personalReveal.youOpened": "由你開出",
  "cinema.personalReveal.otherCards": "其他卡牌",
  "cinema.personalReveal.allOpen": "所有卡牌均已揭曉",
  "cinema.personalReveal.autoOpenIn": "剩餘卡牌將在{n}秒後自動揭曉",
  "cinema.personalReveal.revealCardAria": "翻開卡牌 {n}",
  "cinema.personalReveal.revealedCardAria": "卡牌 {n} 已揭曉：{name}，{value}",
  "cinema.personalReveal.sort.group": "卡牌排序",
  "cinema.personalReveal.sort.pack": "卡包",
  "cinema.personalReveal.sort.packAria": "依卡包價格排序，最便宜的優先",
  "cinema.personalReveal.sort.rarity": "稀有度",
  "cinema.personalReveal.sort.revealFirst": "所有卡牌揭曉後即可依稀有度排序",
  "cinema.personalReveal.sort.bestAria": "依稀有度排序，最高優先",
  "cinema.personalReveal.sort.worstAria": "依稀有度排序，最低優先",
  "cinema.personalReveal.sort.packStatus": "卡牌已依卡包價格排序，最便宜的優先",
  "cinema.personalReveal.sort.bestStatus": "卡牌已依稀有度排序，最高優先",
  "cinema.personalReveal.sort.worstStatus": "卡牌已依稀有度排序，最低優先",
  "cinema.personalReveal.rarity": "稀有度",
  "cinema.personalReveal.year": "年份",
  "cinema.personalReveal.yearUnknown": "年份未知",
  "cinema.personalReveal.grade": "評級",
  "cinema.personalReveal.ungraded": "未評級",
  "cinema.personalReveal.pageNavigation": "卡牌分頁",
  "cinema.personalReveal.previousPage": "上一組卡牌",
  "cinema.personalReveal.nextPage": "下一組卡牌",
  "cinema.personalReveal.pageStatus": "第 {page} 頁，共 {pages} 頁",
  "cinema.personalReveal.live.revealed": "已揭曉 {name}",
  "cinema.personalReveal.live.all": "已揭曉全部 {n} 張卡牌",
} as Record<string, string>;
