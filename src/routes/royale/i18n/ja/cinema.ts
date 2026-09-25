// Japanese (日本語): reviewed by a native editor (wave 2). Same key set as
// en/cinema.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: cinema. Owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (REVEAL_CINEMA_SEQUENCE copy), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and RoyaleReplayRoute.tsx.
//
// Terminology choices made for this locale (kept consistent with
// i18n/ja/core.ts, board.ts, arena.ts, chat.ts, docs.ts, misc.ts): pack(s) ->
// パック, open (a pack) -> 開封, tile -> タイル, pot -> ポット, pool -> プール,
// card(s) -> カード, backer(s) -> 支援者, top backer -> 最大支援者,
// keep -> 保持, sell (back) -> 売却, buyback -> 買い取り, vault -> ボールト,
// Chase -> チェイス, draw -> 抽選, pull -> 当たり, render (a video) -> 書き出し,
// and the "You"/"YOU" name-substitute badge -> 自分. Sentences addressed to the
// player are polite です・ます; badges, column heads and stamps stay in the
// short noun style. Pack TIER / brand terms GRAIL, LEGENDARY, MYTHIC and SLABZ
// stay in Latin script in every value that mentions them, per the project-wide
// rule; COMMON/RARE/EPIC/TOP HIT are ordinary CollectorCrypt rarity words (not
// brand terms) and are transliterated to katakana to match i18n/ja/misc.ts's
// cardDetail.rarity.* precedent.
//
// cinema.tileValue.cardValueLabel / onTileLabel carry a literal NBSP in the
// English source to stop an orphan word ("on" / "card") at a line end. Japanese
// sets no space between the two halves at all, so the NBSP is dropped here on
// purpose: a visible gap inside 「カード価値」 reads as a translation artifact,
// and the two-word orphan the NBSP guards against cannot occur.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "パック開封中",
  "cinema.phaseAnnounce.packsOpening.subtitle": "カードを公開・全タイルの価格を更新中",
  "cinema.phaseAnnounce.winnerDraw.title": "勝者抽選中",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "タイル合計による重み付け",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "ロック：ここからはボードが見せ場",
  "cinema.phase.packsEnter.copy": "パックがボードに登場",
  "cinema.phase.packsOpening.copy": "パックが次々と開封：カードが公開され、タイルの価格が更新される",
  "cinema.phase.cardsByTile.copy": "カード公開：全タイル、価値の高い順に",
  "cinema.phase.valueScan.copy": "ボードを読み解く：最大の当たりが輝く",
  "cinema.phase.winnerDraw.copy": "勝者を抽選：タイル合計による重み付け",
  "cinema.phase.winnerLock.copy": "勝者確定",
  "cinema.phase.loserValueConverge.copy": "敗北したタイルのカードはボールトへ：その価値は勝者に還元される",
  "cinema.phase.winnerPotCountUp.copy": "プールが勝利タイルに集約される",
  "cinema.phase.chaseFeed.copy": "チェイスが取り分を受け取る",
  "cinema.phase.chasePayout.copy": "チェイス発動：あるタイルが大当たり",
  "cinema.phase.allocation.copy": "自分の取り分",
  "cinema.phase.keepSellDecision.copy": "保持か売却か：判断は次のラウンドまで持ち越せる",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "格納済み",
  "cinema.vaultLock.plateSub": "チェイス",
  "cinema.vaultLock.status": "ロック済み",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "このラウンドは開封カードなし",
  "cinema.cardWall.won": "獲得",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "トップヒット",
  "cinema.cardWall.rarity.common": "コモン",
  "cinema.cardWall.rarity.rare": "レア",
  "cinema.cardWall.rarity.epic": "エピック",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "保持",
  "cinema.cardWall.status.sold": "売却",
  "cinema.cardWall.status.toTheChase": "チェイスへ",
  "cinema.cardWall.status.rake": "手数料",
  "cinema.cardWall.owner.vault": "ボールト",
  "cinema.cardWall.owner.you": "自分",
  "cinema.cardWall.cardAriaLabel": "{name}、{value}。Enterキーでカード詳細を開きます。",
  "cinema.cardWall.sectionAriaLabel": "このラウンドで開封されたすべてのカード、価値の高い順",
  "cinema.cardWall.eyebrow": "開封カードすべて",
  "cinema.cardWall.rake.title": "プロトコル手数料",
  "cinema.cardWall.rake.metaOne": "手数料対象カード1枚",
  "cinema.cardWall.rake.metaMany": "手数料対象カード{n}枚",
  "cinema.cardWall.rake.hide": "隠す",
  "cinema.cardWall.rake.show": "表示",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "リビールを閉じる",
  "cinema.close.title": "リビールを閉じる（Esc）",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "正式な勝者",
  "cinema.provCaption.round": "ラウンド",
  "cinema.provCaption.verifyAt": "検証先",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "ラウンド #{n}",
  "cinema.bar.vrfBadge": "提供：CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "チェイス +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "開封中",
  "cinema.phaseShort.drawing": "抽選中",
  "cinema.phaseShort.results": "結果",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "勝者",
  "cinema.core.tileWins": "{tile}の勝利",
  "cinema.core.inCards": " カード分",
  "cinema.core.poolSuffix": " プール",
  "cinema.core.totalCardValue": "カード総額",
  "cinema.core.totalPool": "合計プール",
  "cinema.core.tilesLive": "{n}タイル進行中",
  "cinema.core.packsSuffix": "・{n}パック",
  "cinema.core.yourStake": "あなたの賭け金",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "ベットなし",
  "cinema.heatOnly.note": "USDCのみ・今ラウンドはパックなし",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n}パック",
  "cinema.tile.packCountMany": "{n}パック",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "抽選に敗北。カードは勝利タイルの支援者へ渡ります。",
  "cinema.vaultNote.heatOnlyNoPack": "今ラウンドはパックなし・端数はプールに繰り越されます",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "{pack}から",
  "cinema.grail.fromPackRate": "{pack}から・排出率{pct}",
  "cinema.grail.pullTitle": "GRAIL的中",
  "cinema.grail.fromPackVisible": "{pack}パックから",
  "cinema.grail.provenanceAriaLabel": "{tile}、{pack}パックから",
  "cinema.grail.multiTitle": "今ラウンドのGRAIL {n}件",
  "cinema.grail.galleryTileFromPack": "{tile}・{pack}から",
  "cinema.grail.galleryMore": "+{n}件",
  "cinema.card.openInNewTab": "{name}のカードページを新しいタブで開く",
  "cinema.card.ariaLabelWithOdds": "{name}、{value}。{pack}パックから、排出率{pct}。Enterキーでカード詳細を開きます。",
  "cinema.card.ariaLabelWithBand": "{name}、{value}。{bandLine}。Enterキーでカード詳細を開きます。",
  "cinema.card.bandChancePct": "{pack}パックから排出率{pct}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile}の勝利",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "売却受付中",
  "cinema.sellWindow.secToDecide": "秒で決定",
  "cinema.sellWindow.noActionAutoSells": "未操作の場合、次のロックで自動売却されます",
  "cinema.sellWindow.noActionKeeps": "未操作の場合はカードを保持・売却はいつでもコレクションから可能です",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // The English source separates the two words with an NBSP; Japanese sets them
  // solid, see this file's header note.
  "cinema.tileValue.cardValueLabel": "カード価値",
  "cinema.tileValue.onTileLabel": "タイル内",
  "cinema.tileValue.oddsWord": "オッズ",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "当たったタイル",
  "cinema.chase.fires": "チェイス発動",
  "cinema.chase.jackpotReleasingTo": "ジャックポットが{tile}へ放出",
  "cinema.chase.winningTileFallback": "勝利タイル",
  "cinema.chase.feedThisRound": "今ラウンドのチェイス +{value}",
  "cinema.chase.cardToChase": "カードがチェイスへ",
  "cinema.chase.bestLosingCardNamed": "敗北側の最高カード・{name}・{value}を確保",
  "cinema.chase.bestLosingCardVault": "敗北側の最高カードをボールトに確保",
  "cinema.chase.jackpotGrows": "チェイス +{value}・ジャックポット増加",
  "cinema.chase.hitsAriaLabel": "チェイスが{tile}に{value}を的中",
  "cinema.chase.alsoHolds": "チェイスはさらに保有",
  "cinema.chase.alsoHoldsAriaOne": "チェイスはさらに{value}相当のカード1枚を保有",
  "cinema.chase.alsoHoldsAriaMany": "チェイスはさらに{value}相当のカード{n}枚を保有",
  "cinema.chase.more": "その他",
  "cinema.chase.cardsTotalOne": "カード1枚・スラブ価値{value}",
  "cinema.chase.cardsTotalMany": "カード{n}枚・スラブ価値{value}",
  "cinema.chase.hitsKicker": "チェイス的中",
  "cinema.chase.winsBig": "大当たり",
  "cinema.chase.yourCut": "自分の取り分",
  "cinema.chase.otherBackerOne": "他の支援者{n}人・按分",
  "cinema.chase.otherBackerMany": "他の支援者{n}人・按分",
  "cinema.chase.backerOne": "支援者{n}人・按分",
  "cinema.chase.backerMany": "支援者{n}人・按分",
  "cinema.chase.alsoWonRound": "ラウンドも制覇",
  "cinema.chase.backedTileNote": "支援したタイル・ラウンドの勝者ではありません",
  "cinema.chase.heldCardsSpillOne": "保有カード1枚があふれ出す",
  "cinema.chase.heldCardsSpillMany": "保有カード{n}枚があふれ出す",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "ポット",
  "cinema.you.get": "自分の取り分",
  "cinema.you.lost": "自分の負け！",
  "cinema.you.noStakeThisRound": "このラウンドはベットしていません",
  "cinema.you.mathLine": "USDCプール取り分{usdc} + カード分{cards} = 合計{total}を獲得",
  "cinema.you.sold": "{value}で売却",
  "cinema.you.kept": "保持・コレクションに追加",
  "cinema.you.keepButton": "保持",
  "cinema.you.sellButton": "{value}で売却",
  "cinema.you.yours": "自分の分",
  "cinema.you.noCardThisRound": "今ラウンドはカードなし。",
  "cinema.you.usdcPaidInstantly": "USDC・残高に入金",
  "cinema.you.keepAll": "すべて保持",
  "cinema.you.sellAllButton": "すべて{value}で売却",
  "cinema.you.sellAllConfirm": "本当に？{value}をすべて売る",
  "cinema.you.noOtherBackers": "今ラウンドは他に支援者なし",
  "cinema.you.oneOtherSplits": "他1人が{value}を分配",
  "cinema.you.othersSplit": "他{n}人が{value}を分配",
  "cinema.you.oneWinningBackerTakes": "勝利支援者1人が{value}を獲得",
  "cinema.you.winningBackersSplit": "勝利支援者{n}人が{value}を分配",
  "cinema.you.viewFullResults": "結果の詳細を見る",
  "cinema.you.howItWorks": "仕組み",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // GRAIL disposition rule copy, one per RoyaleGrailDisposition. Wording is
  // kept in step with board.settlement.disposition* in i18n/ja/board.ts.
  "cinema.theatre.disposition.noGrail": "通常のスラブです。最大支援者が保持するか売却するかを選び、他の支援者には持ち分に応じて分配されます。",
  "cinema.theatre.disposition.sellBackSplit":
    "Grailルール：他の支援者を按分で買い取れる支援者がいないため、Grailはデフォルトで売却され、USDCがタイル全体に分配されます。",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grailルール：最大支援者の按分の取り分だけで他の支援者を買い取れるため、最大支援者がGrailを保持し、他の支援者にはカード分の持ち分をUSDCで支払います。",
  // Spectator "players deciding" wait row.
  "cinema.theatre.decidingAriaLabel": "他のプレイヤー{total}人中{decided}人が決定済み、次のラウンドまで{seconds}秒",
  "cinema.theatre.playersDeciding": "決定中のプレイヤー {count}",
  "cinema.theatre.nextRoundIn": "次のラウンドまで{seconds}",
  "cinema.theatre.secondsShort": "{n}秒",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "ラウンド精算中",
  "cinema.theatre.stageLockingBoard": "ボードをロック中…",
  "cinema.theatre.stagePacksOpening": "ボード上でパックを開封中",
  "cinema.theatre.stageWinnerDrawn": "勝者抽選済み",
  "cinema.theatre.headlineNoEntries": "今ラウンドは参加なし",
  "cinema.theatre.headlineRevealing": "パックを開封中…",
  "cinema.theatre.headlineTileWins": "{tile}が{value}を獲得",
  "cinema.theatre.tileFallback": "タイル",
  "cinema.theatre.youWon": "{value}を獲得しました",
  "cinema.theatre.youLostNoStake": "自分の負け、{tile}にはベットしていません",
  "cinema.theatre.winnerFallback": "勝者",
  "cinema.theatre.tileWonNoStake": "{tile}の勝利・自分はベットなし",
  "cinema.theatre.aTileFallback": "あるタイル",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles}タイル参加・プール{pool}",
  "cinema.theatre.stripMetaCards": "・カード{value}",
  "cinema.theatre.stripMetaCash": " + 現金{value}",
  "cinema.theatre.drawingWinner": "勝者を抽選中",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "ラウンド結果",
  "cinema.theatre.roundSettled": "ラウンド精算済み",
  "cinema.theatre.winner": "勝者",
  "cinema.theatre.seedNote":
    "{tile}への初期ベット{value}を含みます。$0から始めたい場合は、ベットパネルで初期ベットをクリアしてください。",
  "cinema.theatre.lossNoteStaked":
    "今ラウンドは他のタイルに{value}を賭けていました。このパネルの後ろのタイルにカーソルを合わせると、何が開封され、なぜ負けたのかを確認できます。",
  "cinema.theatre.lossNoteNoStake":
    "今ラウンドはどのタイルも支援していないため、配当はありません。次のラウンドでベット額を選び、タイルをクリックしてください。",
  "cinema.theatre.bonusGrails.one":
    "今ラウンドはさらにGrailが{n}枚出ました。勝利タイルの支援者へボーナスとして渡り（保持するか、高額すぎる場合は按分で売却）、ATTNの手数料やチェイスに回ることはありません。",
  "cinema.theatre.bonusGrails.other":
    "今ラウンドはさらにGrailが{n}枚出ました。勝利タイルの支援者へボーナスとして渡り（保持するか、高額すぎる場合は按分で売却）、ATTNの手数料やチェイスに回ることはありません。",
  "cinema.theatre.noPacksBacked": "今ラウンドはパックへの支援がありませんでした。次のラウンドは自動で始まります。",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "配当の内訳・{tile}",
  "cinema.theatre.payoutSplitMeta": "プール{pool}・チェイスへの繰り入れ{feed}",
  "cinema.theatre.payoutSplitChase": "・チェイス +{value}",
  "cinema.theatre.you": "自分",
  "cinema.theatre.physicalCard": "実物カード →",
  "cinema.theatre.grailSecured": "（Grail確保）",
  "cinema.theatre.grailSoldBack": "Grailを売却（{value}）→ 上記のUSDC配分へ。",
  // Chase result.
  "cinema.theatre.chaseHitLead": "チェイス的中！",
  "cinema.theatre.chaseHitBody":
    "チェイスが独自のレア抽選で発動したため、チェイスの{value}がこの勝ちに支払われ、上記の配分に加算されました。次のチェイスはまた積み上がり始めます。",
  "cinema.theatre.chaseMissLead": "今ラウンドはチェイスの発動なし。",
  "cinema.theatre.chaseMissBody": "チェイスは独自のレア抽選で発動するため、積み上がり続けます。現在は{value}です。",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "抽選を検証",
  "cinema.theatre.vrfSummaryNote": "検証可能な抽選・抽選レシートを見る",
  "cinema.theatre.vrfRoundId": "ラウンドID",
  "cinema.theatre.vrfWinningDraw": "当選抽選値",
  "cinema.theatre.vrfDrawSeed": "抽選シード",
  "cinema.theatre.vrfProofId": "証明ID",
  "cinema.theatre.vrfTicket": "{total}中の#{n}",
  "cinema.theatre.vrfVerifying": "検証中…",
  "cinema.theatre.vrfRecheck": "抽選を再検証",
  "cinema.theatre.vrfVerifierLink": "検証ツール ↗",
  "cinema.theatre.vrfVerified": "✓ 抽選を検証済み、この勝者は公開された抽選シードと一致します。",
  "cinema.theatre.vrfFailed": "✗ この抽選はシードと一致しませんでした。信頼しないでください。",
  "cinema.theatre.vrfNote": "すべてのラウンドは、後から再検証できる公開シードから1人の勝者を抽選します。",
  "cinema.theatre.vrfNoDraw": "このラウンドはパックへの支援がなく、抽選対象がありません。",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "カードを保持 → コレクションへ",
  "cinema.theatre.sellBackFor": "{value}で売却",
  "cinema.theatre.continueNextRound": "次のラウンドへ進む",
  "cinema.theatre.continue": "続ける",
  "cinema.theatre.settleHint":
    "保持するとカードはコレクションに入ります。売却すると{sell}（カード価値{value}の{pct}%、このパックのCC買い取り額）が残高に入ります。未操作の場合は、ラウンド終了時に自動で売却されます。",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "ロック済み",
  "cinema.prizeModal.stageReveal": "リビール",
  "cinema.prizeModal.betterLuck": "次のラウンドに期待しましょう",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "カードを準備中…",
  "cinema.share.renderingPng": "PNGを書き出し中…",
  "cinema.share.renderFailed": "画像を書き出せませんでした。もう一度お試しください。",
  "cinema.share.captionOpened": "Xで投稿文を開きました。保存したPNGを添付してください。",
  "cinema.share.close": "閉じる",
  "cinema.share.downloadPng": "PNGをダウンロード",
  "cinema.share.shareToX": "Xで共有",
  "cinema.share.done": "完了",
  "cinema.share.provablyFair": "パックバトル・すべての抽選を検証可能",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE", "SLABZ" and "X" are brand terms and stay English.
  "cinema.winShare.multiplierAriaLabel": "倍率{value}",
  "cinema.winShare.multiplier": "倍率",
  "cinema.winShare.inCards": "カード分",
  "cinema.winShare.cashWon": "獲得現金",
  "cinema.winShare.tileHit": "・的中タイル",
  "cinema.winShare.entry": "エントリー",
  "cinema.winShare.winOdds": "当選確率",
  "cinema.winShare.totalValue": "合計価値",
  "cinema.winShare.certLine": "提供：SLABZ・認証番号 #{n}",
  "cinema.winShare.roundLine": "ラウンド #{n}・検証可能なVRF抽選",
  "cinema.winShare.takeHomeAriaLabel": "受取額{value}",
  "cinema.winShare.totalTakeHome": "受取総額",
  "cinema.winShare.breakdown.one": "現金{cash} + カード{n}枚（{value}）",
  "cinema.winShare.breakdown.other": "現金{cash} + カード{n}枚（{value}）",
  "cinema.winShare.deposited": "入金済み",
  "cinema.winShare.wonBy": "{name}が獲得",
  "cinema.winShare.theGrail": "THE GRAIL",
  "cinema.winShare.topPull": "最高の当たり",
  "cinema.winShare.topCardOfRound": "今ラウンドの最高カード",
  "cinema.winShare.poweredBySlabz": "提供：SLABZ",
  "cinema.winShare.cert": "認証番号 #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "勝利を共有",
  "cinema.winShare.pngSaved": "PNGを保存しました。Xでは自動で添付できないため、投稿に添付してください。",
  "cinema.winShare.renderingHdVideo": "HDラウンド動画を書き出し中…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "HDラウンド動画を書き出し中 {seconds}秒{pct}",
  "cinema.winShare.hdVideoSaved": "HD動画を保存しました。画像の代わりに投稿へ添付してください。",
  "cinema.winShare.hdRenderFailed": "HDの書き出しに失敗しました。もう一度お試しください。",
  "cinema.winShare.hdVideoButton": "HDラウンド動画",
  "cinema.winShare.hdVideoTitle": "このラウンドをHDのmp4として書き出し（ローカルの書き出しサービス）、保存します。",
  "cinema.winShare.tweetTriggerLabel": "Xで勝利を共有",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "ベット額に対するリターン{value}",
  "cinema.pnlShare.onStake": "対ベット額",
  "cinema.pnlShare.certifiedRun": "認定ラン・純損益",
  "cinema.pnlShare.heroSub.one": "{n}ラウンド・勝率{pct}%",
  "cinema.pnlShare.heroSub.other": "{n}ラウンド・勝率{pct}%",
  "cinema.pnlShare.collection": "コレクション",
  "cinema.pnlShare.change30d": "30日間の変動",
  "cinema.pnlShare.ribbonAriaLabel.one": "直近{n}ベットラウンドのラウンド別成績",
  "cinema.pnlShare.ribbonAriaLabel.other": "直近{n}ベットラウンドのラウンド別成績",
  "cinema.pnlShare.bestPull": "最高の当たり",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "トップ",
  "cinema.pnlShare.tier.common": "コモン",
  "cinema.pnlShare.rounds": "ラウンド数",
  "cinema.pnlShare.winRate": "勝率",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "最高ラウンド",
  "cinema.pnlShare.rank": "順位 #{n}",
  "cinema.pnlShare.rankOf": "{total}人中 順位 #{n}",
  "cinema.pnlShare.staked": "ベット額{value}",
  "cinema.pnlShare.overlayAriaLabel": "自分の戦績を共有",
  "cinema.pnlShare.saved": "保存しました。投稿に添付してください。",
  "cinema.pnlShare.triggerLabel": "損益を共有",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  "cinema.recap.keepSell": "保持／売却",
  "cinema.recap.secondsShort": "{n}秒",
  "cinema.recap.dest.yourCall": "自分の判断",
  "cinema.recap.dest.deciding": "決定中",
  "cinema.recap.dest.you": "自分",
  "cinema.recap.dest.topBacker": "最大支援者",
  "cinema.recap.dest.yourCard": "自分のカード",
  "cinema.recap.dest.wonBy": "獲得者",
  "cinema.recap.dest.aBacker": "支援者",
  "cinema.recap.dest.yourChaseLoot": "自分のチェイス戦利品",
  "cinema.recap.dest.chaseLoot": "チェイスの戦利品",
  "cinema.recap.dest.releasedFromVault": "ボールトから放出",
  "cinema.recap.dest.sweptTo": "回収先",
  "cinema.recap.dest.chaseVault": "チェイスのボールト",
  "cinema.recap.dest.fundsJackpot": "ジャックポットの原資に",
  "cinema.recap.dest.protocolFee": "プロトコル手数料",
  "cinema.recap.dest.tableRake": "テーブル手数料",
  "cinema.recap.dest.soldBack": "売却済み",
  "cinema.recap.dest.intoTheSplit": "配分へ",
  "cinema.recap.dest.toThePool": "プールへ +{value}",
  "cinema.recap.sublineYours": "今ラウンド、テーブル全体のカードです。自分のカードには下に印が付いています。",
  "cinema.recap.sublineLost": "今ラウンド、テーブル全体のカードです。自分のものは1枚もありません。",
  "cinema.recap.sublineNoStake": "今ラウンド、テーブル全体のカードです。今回は見送りました。",
  "cinema.recap.sectionAriaLabel": "今ラウンドの全カードの行き先",
  "cinema.recap.eyebrow": "ラウンド結果",
  "cinema.recap.headline": "全カードの行き先",
  "cinema.recap.theatreHeader": "ラウンドの記録・全カードの行き先",
  "cinema.recap.openCardTitle": "カードページを新しいタブで開きます",
  "cinema.recap.fromPack": "{pack}から",
  "cinema.recap.railAriaLabel": "このラウンドの全カード、高額順",
  "cinema.recap.tierRule.one": "残り1枚 · {value}",
  "cinema.recap.tierRule.other": "残り{n}枚 · {value}",
  "cinema.recap.showMore": "さらに{n}枚表示",
  "cinema.recap.showAll": "全{n}枚を表示",
  "cinema.recap.showing": "{total}枚中{n}枚 · {totalValue}中{value}",
  "cinema.recap.allShown": "全{n}枚 · 合計{value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // 「タブを録画」inside the two service sentences is this same panel's button
  // label (cinema.replay.recordTab): keep the two in step when editing.
  "cinema.replay.finishingVideo": "動画を仕上げています...",
  "cinema.replay.recordingEmpty": "録画が空でした。もう一度お試しください。",
  "cinema.replay.checkingService": "HD書き出しサービスを確認しています...",
  "cinema.replay.serviceUnreachable":
    "HD書き出しサービスに接続できないため、HDでは書き出せません。代わりに「タブを録画」でこのタブを録画します（ブラウザの確認が表示されます）。",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "HD動画を書き出し中：{seconds}秒{pct}",
  "cinema.replay.hdRenderFailed": "HDの書き出しに失敗しました。もう一度お試しになるか、「タブを録画」でこのタブを録画してください。",
  "cinema.replay.cannotRecord":
    "このブラウザではここで動画を録画できません。代わりにラウンドファイルを保存します。リプレイページに置けば、もう一度再生できます。",
  "cinema.replay.pickThisTab": "「このタブ」を選ぶとラウンドを録画します。",
  "cinema.replay.recorderFailed": "レコーダーを開始できませんでした。",
  "cinema.replay.watermarkAriaLabel": "ラウンド{n}のリプレイ",
  "cinema.replay.watermarkAriaLabelDated": "ラウンド{n}のリプレイ、{date}に録画",
  "cinema.replay.watermarkTag": "リプレイ",
  "cinema.replay.watermarkRound": "ラウンド #{n}",
  "cinema.replay.headerSeed": "シード {seed}",
  "cinema.replay.phaseBidding": "ベット中",
  "cinema.replay.phaseReveal": "リビール",
  "cinema.replay.phaseDone": "終了",
  "cinema.replay.boardAriaLabel": "リプレイのボード",
  "cinema.replay.controlsAriaLabel": "ラウンド{n}のリプレイ操作",
  "cinema.replay.pause": "一時停止",
  "cinema.replay.play": "再生",
  "cinema.replay.pauseButton": "一時停止",
  "cinema.replay.playButton": "再生",
  "cinema.replay.restart": "最初から",
  "cinema.replay.scrubAriaLabel": "ラウンド全体を移動：ベットからリビールまで",
  "cinema.replay.lockMark": "ロック",
  "cinema.replay.seeking": "移動中",
  "cinema.replay.speedAriaLabel": "再生速度",
  "cinema.replay.speedOption": "{n}倍",
  "cinema.replay.saveVideo": "動画を保存",
  "cinema.replay.saveVideoTitle":
    "このラウンドをHDのmp4として書き出します（ローカルの書き出しサービス。画面の内容は録画しません）",
  "cinema.replay.recordTab": "タブを録画",
  "cinema.replay.recordTabTitle":
    "予備手段：ブラウザの画面キャプチャでこのタブを録画します（実時間の画質）",
  "cinema.replay.saveRound": "ラウンドを保存",
  "cinema.replay.saveRoundTitle":
    "このラウンドを小さなデータファイルとして保存します。リプレイページに置けば、誰でもこのラウンドをそのまま再生できます",
  "cinema.replay.close": "閉じる",
  "cinema.replay.backToGame": "ゲームに戻る",
  "cinema.replay.shareOverlayAriaLabel": "このラウンドを共有",
  "cinema.replay.videoReady": "ラウンド動画の準備完了",
  "cinema.replay.formatWebm": ".webmで保存しました。Xへのアップロードにはmp4が必要なため、リンクを共有するか、ファイルを変換してください。",
  "cinema.replay.formatMp4": ".mp4で保存しました。そのままXに添付できます。",
  "cinema.replay.shareOnX": "Xで共有",
  "cinema.replay.saveAgain": "もう一度保存",
  "cinema.replay.shareHint": "Xはウェブから動画を添付できません。投稿文が入った状態で開くので、保存したファイルを添付してください。",
  "cinema.replay.xOpened": "Xを投稿文つきで開きました。保存したファイル（{filename}）を添付してください。ウェブの投稿画面では自動で添付できません。",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE ラウンドリプレイ",
  "cinema.replayRoute.noRecordingParam": "録画が指定されていません。?rec=<encoded-json-or-url> を渡してください。",
  "cinema.replayRoute.unreadable": "?rec= の録画を読み取れませんでした。",
  "cinema.replayRoute.loadFailed": "録画を読み込めませんでした（{error}）。",
  "cinema.replayRoute.badge": "ラウンドリプレイ",
  "cinema.replayRoute.loading": "録画を読み込み中",
  "cinema.replayRoute.noRecording": "再生できる録画がありません。",
  "cinema.replayRoute.hint":
    "リプレイは、ボードの過去ラウンド一覧（精算済みラウンドの「リプレイ」）か、共有された ?rec= リンクから開きます。",
  "cinema.replayRoute.roundResults": "ラウンド結果",
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
  "cinema.share.shareFile": "ファイルを共有",
  "cinema.share.shareSheetOpened": "共有シートを開きました。",
  "cinema.winShare.lossHeadline": "ラウンド敗北",
  "cinema.winShare.lossResult": "ラウンド敗北",
  "cinema.winShare.returned": "返却",
  "cinema.winShare.bestPull": "ベストプル",
  "cinema.winShare.playedBy": "プレイヤー {name}",
  "cinema.winShare.lossCaption": "ラウンド #{n}：{stake} を賭けました。このラウンドの持ち帰りはありません。",
  "cinema.winShare.lossCardCaption": "テーブルのベストプルですが、私のものではありません。",
  "cinema.winShare.lossNoCardCaption": "ラウンド結果を正直に記録。",
  "cinema.winShare.roundResultTop": "ラウンド",
  "cinema.winShare.roundResultMain": "敗北",
  "cinema.winShare.shareRoundCard": "カードを共有",
  "cinema.replay.shareVideo": "動画を共有",
  "cinema.replay.shareVideoTitle": "ラウンド動画を共有",
  "cinema.replay.shareVideoSheetOpened": "動画付きの共有シートを開きました。",
  "cinema.replay.shareVideoFailed": "動画を共有できませんでした。もう一度お試しください。",
  "cinema.replay.shareSheetHint": "この端末は共有シートから X に動画を送れます。",
  "cinema.replay.shareRoundTitle": "attn royale · ラウンド #{n}",
  "cinema.replay.shareRoundTable": "テーブルに {amount}。",
  "cinema.replay.shareRoundWin": "私のタイルが {pool} のテーブルを獲得 · {amount} が戻りました。",
  "cinema.replay.shareRoundCardsOnly": "タイル {tile} が {pool} のテーブルを獲得 · 私のタイルは負けましたが {amount} が戻りました。",
  "cinema.replay.shareRoundWinner": "タイル {tile} が {pool} のテーブルを獲得。",
  "cinema.share.shareVideo": "動画を共有",
  "cinema.share.preparingOutput": "共有を準備中…",
  "cinema.share.cancelled": "共有をキャンセルしました。",
  "cinema.share.shareSheetHint": "この端末は共有シートから X に動画を送れます。",
  "cinema.personalReveal.sectionAria": "あなたが開封したカード",
  "cinema.personalReveal.title": "あなたが開けたカード",
  "cinema.personalReveal.progress.eyebrow": "同期リビール",
  "cinema.personalReveal.progress.title": "開封中",
  "cinema.personalReveal.progress.body": "テーブルでカードを開封しています。この時間が終わると、共有リビールが続きます。",
  "cinema.personalReveal.normal.label": "通常リビール",
  "cinema.personalReveal.normalHint": "最初はカード裏面が表示されます。カードをクリックまたはタップしてめくってください。開封したカードはあなたのものです。裏向きのままのカードは5秒後に自動でめくられます。",
  "cinema.personalReveal.hardcore.label": "極限リビール",
  "cinema.personalReveal.hardcoreHint": "最初はカード裏面が表示されます。カードをクリックまたはタップしてめくってください。所有者は抽選後に確定します。裏向きのままのカードは5秒後に自動でめくられます。",
  "cinema.personalReveal.yourCard": "あなたのカード",
  "cinema.personalReveal.youOpened": "あなたが開封",
  "cinema.personalReveal.otherCards": "ほかのカード",
  "cinema.personalReveal.sort.group": "カードの並び順",
  "cinema.personalReveal.sort.pack": "パック",
  "cinema.personalReveal.sort.packAria": "パック価格の安い順に並べ替え",
  "cinema.personalReveal.sort.rarity": "レア度",
  "cinema.personalReveal.sort.revealFirst": "すべてのカードを公開するとレア度順を選べます",
  "cinema.personalReveal.sort.bestAria": "レア度の高い順に並べ替え",
  "cinema.personalReveal.sort.worstAria": "レア度の低い順に並べ替え",
  "cinema.personalReveal.sort.packStatus": "カードをパック価格の安い順に並べました",
  "cinema.personalReveal.sort.bestStatus": "カードをレア度の高い順に並べました",
  "cinema.personalReveal.sort.worstStatus": "カードをレア度の低い順に並べました",
  "cinema.personalReveal.allOpen": "すべてのカードが公開されました",
  "cinema.personalReveal.autoOpenIn": "残りのカードは{n}秒後に自動公開されます",
  "cinema.personalReveal.revealCardAria": "カード {n} をめくる",
  "cinema.personalReveal.revealedCardAria": "カード {n} を公開済み: {name}、{value}",
  "cinema.personalReveal.rarity": "レア度",
  "cinema.personalReveal.year": "年代",
  "cinema.personalReveal.yearUnknown": "年代不明",
  "cinema.personalReveal.grade": "グレード",
  "cinema.personalReveal.ungraded": "未鑑定",
  "cinema.personalReveal.pageNavigation": "カードページ",
  "cinema.personalReveal.previousPage": "前のカード",
  "cinema.personalReveal.nextPage": "次のカード",
  "cinema.personalReveal.pageStatus": "{pages} ページ中 {page} ページ目",
  "cinema.personalReveal.live.revealed": "{name} を公開しました",
  "cinema.personalReveal.live.all": "{n} 枚のカードをすべて公開しました",
} as Record<string, string>;
