// Japanese (日本語): "board" segment. Same key set as en/board.ts, reviewed
// by a native speaker (games/gacha copy register) rather than machine
// translated. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: board. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx,
// RoyalePackCompositionChips.tsx.
//
// REGISTER: polite (です・ます) for anything addressed to the player; short
// noun style for labels, column headers and chips.
//
// Terminology choices made for this locale (kept consistent with
// i18n/ja/core.ts, arena.ts, chat.ts, docs.ts, misc.ts): pack(s) -> パック,
// tile -> タイル, pool -> プール, bet/bid -> ベット, balance/cash -> 残高,
// backer(s) -> 支援者, back (verb) -> 支援する, keep -> 保持, sell back ->
// 売却, buyback -> 買い取り, pull (the card you hit) -> 当たり, draw -> 抽選,
// pro-rata -> 按分, settle/settlement -> 精算, vault -> ボールト, graded ->
// 鑑定済み, and the "You" name-substitute badge -> 自分 (matches arena.you /
// chat.event.youWon). Pack tier brand names (Starter, Elite, Legendary,
// Grail, Mythic) stay in Latin script even mid-sentence, per the
// project-wide rule.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "プレイヤーと現金PnL",
  "board.playerScoreboard.title": "プレイヤー",
  "board.playerScoreboard.open": "統計とミュート",
  "board.playerScoreboard.pinnedHint": "固定中 · Escで閉じる",
  "board.playerScoreboard.holdHint": "Tab長押しで表示 · クリックで固定",
  "board.playerScoreboard.close": "プレイヤースコアボードを閉じる",
  "board.playerScoreboard.windowAria": "PnLウィンドウ",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "すべて",
  "board.playerScoreboard.partialHistory": "履歴は一部のみです。ランキングには保持されている決済済み現金の期間が使用されます。",
  "board.playerScoreboard.statsUnavailable": "ここではPnL履歴を利用できません。現在の賭け金は引き続き有効です。",
  "board.playerScoreboard.playerColumn": "プレイヤー",
  "board.playerScoreboard.pnlColumn": "現金PnL",
  "board.playerScoreboard.voiceColumn": "チャット",
  "board.playerScoreboard.loading": "プレイヤーを読み込み中…",
  "board.playerScoreboard.empty": "このラウンドでは、まだ誰もタイルに賭けていません。",
  "board.playerScoreboard.bot": "ボット",
  "board.playerScoreboard.tiles": "タイル {tiles}",
  "board.playerScoreboard.stake": "賭け金 {amount}",
  "board.playerScoreboard.notAvailable": "利用不可",
  "board.playerScoreboard.rounds": "{n} ラウンド",
  "board.playerScoreboard.youBadge": "あなた",
  "board.playerScoreboard.mute": "ミュート",
  "board.playerScoreboard.unmute": "ミュート解除",
  "board.playerScoreboard.muteAria": "チャットで{name}をミュート",
  "board.playerScoreboard.unmuteAria": "チャットで{name}のミュートを解除",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "自分",
  "board.common.noWin": "勝利なし",
  "board.common.roundSettled": "ラウンド精算済み",
  "board.common.youWon": "自分が{amount}を獲得",
  "board.common.pack": "パック",
  "board.common.packs": "パック",
  "board.common.secondsSuffix": "秒",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "ロック",
  "board.tile.lockedStampSub": "受付終了",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}：{bet}のベットが残高{balance}を超えています。ベット額を下げるか入金してください。",
  "board.tile.ariaBack": "{amount}で{label}を支援",
  "board.tile.ariaBackShortcutSuffix": "、ショートカット{shortcut}",
  "board.tile.ariaOddsChance": "勝率{pct}",
  "board.tile.ariaBackers": "支援者{count}人",
  "board.tile.yourPortraitAlt": "自分のポートレート",
  "board.tile.backerPopLine": "{name}・{amount}",
  "board.tile.noPackYet": "USDC・パック未達",
  "board.tile.noStake": "ベットなし",
  // MEGA-AUDIT 2026-07-31 (locale-text-overflow, ownership pill): the pill's
  // CSS fit ladder is calibrated in EN characters ("You own " = 8ch);
  // "自分の持ち分" is 6 fullwidth glyphs ≈ 12ch, which cut the trailing "%"
  // (10% read as 1) at tablet/landscape. "保有" (holdings, ≈4ch) is the
  // standard short financial term and fits every lane EN fits.
  "board.tile.youOwn": "保有{amount}",
  "board.tile.youOwnShareSuffix": "・{pct}",
  // Deliberately drops the redundant "pack" subject (round-9 QA loop,
  // 2026-07-25). MEASURED, not guessed: this label's tile column is 75px at
  // desktop-1280 (114/157/189px at 1440/1728/1920), and CJK may break between
  // ANY two characters, so anything that wraps there splits a word and leaves
  // an orphan - "ロックでパック開封" (99px) broke as "ロックでパッ / ク開封" and
  // "ロック時に開封" (77px) as "ロック時に開 / 封". At 66px this fits 1280 on
  // ONE line, so no break opportunity is ever taken. fr/it/es drop the subject
  // on this very key too ("Ouverture au verrouillage", "Si aprono al blocco")
  // because the tile already shows a pack.
  "board.tile.packsOpenAtLock": "ロックで開封",
  "board.tile.resultOpened": "開封済み・カード{amount}分",
  "board.tile.resultWinner": "勝者・カード{amount}分",
  "board.tile.resultLost": "抽選に敗北・カード{amount}分",
  "board.tile.resultOpenedWord": "開封済み",
  "board.tile.resultWinnerWord": "勝者",
  "board.tile.resultLostWord": "抽選に敗北",
  "board.tile.resultShortWon": "勝ち",
  "board.tile.resultShortLost": "敗北",
  "board.tile.overBalance": "残高超過",
  "board.tile.overBalanceTitle": "必要{needed}・保有{have}。ベット額を下げるか入金してください。",
  "board.tile.overCap": "{amount}の上限を超えています（歯車設定）",
  "board.tile.needHave": "必要{needed}・保有{have}",
  "board.tile.clueExactCardOdds": "このカードちょうど・排出率{pct}",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "ベット額",
  "board.stakeControl.packMatchTitle": "タイルを1回クリックするごとに{packName}パック1つ分をベットします。",
  "board.stakeControl.packMatchTag": "クリックごとに{packName}パック1つをベット",
  "board.stakeControl.packMatchTitleOne": "タイルを1回クリックするごとに{packName}パックを{n}個分ベットします。",
  "board.stakeControl.packMatchTitleOther": "タイルを1回クリックするごとに{packName}パックを{n}個分ベットします。",
  "board.stakeControl.packMatchTagOne": "クリックごとに{packName}パックを{n}個ベット",
  "board.stakeControl.packMatchTagOther": "クリックごとに{packName}パックを{n}個ベット",
  "board.stakeControl.packAmountSentence": "クリックごとに{n} x {packAmount} {packName}パック",
  "board.stakeControl.bidPackGroupAria": "タイルにパック1つ分をベット",
  "board.stakeControl.bidPackTag": "パックをベット",
  "board.stakeControl.bidPackInfoTitle":
    "1回のクリックで、未開封のパック1つ分がまるごとタイルに乗ります。そのパックは常にそのパックのままで、より大きなパックに統合されることはありません。",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "パックと数を選ぶ。1クリックでそのスタックをタイルに賭ける。大きいパックほど大きいカード。数字キー1～8でタイル選択。",
  "board.stakeControl.bidPackInfoAria": "「パックをベット」とは？",
  "board.stakeControl.packSelectedTitle": "選択中です。もう一度クリックすると{amount}のベットに戻ります。",
  "board.stakeControl.packChipTitle": "タイルを1回クリックするごとに{packName}パック1つ（{amount}）をベットします。",
  "board.stakeControl.packSelectedCountOne": "選択中です。タイルを1回クリックするごとに{packName}パックを{n}個（{amount}）ベットします。",
  "board.stakeControl.packSelectedCountOther": "選択中です。タイルを1回クリックするごとに{packName}パックを{n}個（{amount}）ベットします。",
  "board.stakeControl.packChipTitleCountOne": "タイルを1回クリックするごとに{packName}パックを{n}個（{amount}）ベットします。",
  "board.stakeControl.packChipTitleCountOther": "タイルを1回クリックするごとに{packName}パックを{n}個（{amount}）ベットします。",
  "board.stakeControl.overBalanceHeading": "残高超過",
  "board.stakeControl.overBalanceBody": "{amount}の残高より多く必要です。",
  "board.stakeControl.bidAmountTag": "金額をベット",
  "board.stakeControl.bidAmountInfoTitle":
    "タイルに好きな金額を追加できます。積み上がった端数は、各パック価格を超えるたびに、より大きなパックへと育っていきます。",
  "board.stakeControl.bidAmountInfoAria": "「金額をベット」とは？",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "タイルのベットに追加",
  "board.stakeControl.bidAmountGroupAria": "タイルに金額をベット",
  "board.stakeControl.packCountGroupAria": "クリックごとのベット数",
  "board.stakeControl.packCountDecAria": "クリックごとのパック数を減らす",
  "board.stakeControl.packCountIncAria": "クリックごとのパック数を増やす",
  "board.stakeControl.packCountValueTitleOne": "クリックごとに選択中のティアのパックを{n}個ベット",
  "board.stakeControl.packCountValueTitleOther": "クリックごとに選択中のティアのパックを{n}個ベット",
  "board.stakeControl.incrementTitle": "選択中のベットを{amount}に増やす",
  "board.stakeControl.customAriaLabel": "USDCでのカスタムベット額。Enterキーまたは外側をクリックすると確定します。",
  "board.stakeControl.customOverBalanceTitle": "{amount}の残高を超えています。入金するかベット額を下げてください。",
  "board.stakeControl.customTitle": "金額を入力し、Enterキーまたは外側をクリックすると設定されます",
  "board.stakeControl.resetTitle": "選択中のベットを{amount}にリセット",
  "board.stakeControl.reset": "リセット",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "自動ベット戦略、ラウンド終了間際にセットされます",
  "board.betRail.strategyArmedTip": "セット済み、{seconds}秒後に発動",
  "board.betRail.strategyAriaArmed": "{name}、セット済み、{seconds}秒後に発動",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}、セット済み、{seconds}秒後に発動。クリックで解除。",
  "board.betRail.strategyAriaClickArm": "{name}。クリックでセット。",
  "board.betRail.moreStrategiesAria": "その他の自動ベット戦略",
  "board.betRail.moreStrategiesTitle": "その他の戦略",
  "board.betRail.cancelArmedAria": "セット済みの自動ベットを解除",
  "board.betRail.autoBetCancelled": "自動ベットを解除しました。",
  "board.betRail.roundLockedSkip": "自動ベットが発動する前にラウンドがロックされました。",
  "board.betRail.notEnoughBalanceSkip": "残高不足のため、自動ベットは発動しませんでした。",
  "board.betRail.firedAtClose": "{name}がラウンド終了間際に発動しました。",
  "board.betRail.firedAtClosePartial": "{name}がラウンド終了間際に発動しました。{total}マス中{covered}マスです。",
  "board.betRail.strategyGuideAria": "自動ベット戦略ガイド",
  "board.betRail.strategyGuideTitle": "戦略ガイド",
  "board.betRail.autoBetEyebrow": "自動ベット",
  "board.betRail.firesInSeconds": "{seconds}秒後に発動",
  "board.betRail.strategiesDialogAria": "自動ベット戦略",
  "board.betRail.closeStrategiesAria": "自動ベット戦略を閉じる",
  "board.betRail.strategiesHeading": "自動ベット戦略",
  "board.betRail.strategiesIntro":
    "タップすると、選択中のベット額（{amount}）でセットされます。ラウンドがロックされる直前に発動し、その瞬間に各タイルへ入っている金額、つまり周囲の動向に基づいて順位づけされます。",
  "board.betRail.contrarianHeading": "逆張りの選択肢",
  "board.betRail.contrarianIntro":
    "誰もが最安のタイルを狙うと混み合ってしまうため、2番目に安いタイルの方が高く払える場合があります。メインのバーをすっきりさせるため、これらは表示していません。",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "アカウントとベット額",
  "board.betRail.balance": "残高",
  "board.betRail.activeStakes": "進行中のベット",
  "board.betRail.collection": "コレクション",
  "board.betRail.cardCountViewAllSingular": "カード{count}枚・すべて見る",
  "board.betRail.cardCountViewAllPlural": "カード{count}枚・すべて見る",
  "board.betRail.moreCount": "他{count}枚",
  "board.betRail.noCardsYet": "コレクションにはまだカードがありません。タイルに勝って、そのカードを保持しましょう。",
  "board.betRail.lastResult": "直近の結果",
  "board.betRail.eachClickAdds": "クリックごとに{amount}を追加",
  "board.betRail.depositToPlay": "入金してプレイ",
  "board.betRail.affordShortfall": "{unit}が必要です。残高は{balance}です。",
  "board.betRail.allTilesPartialCover": "{name}、{unit}で8タイル中{covered}タイルをカバー",
  "board.betRail.dockBalance": "残高",
  "board.betRail.dockStakes": "ベット",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "次のラウンドまで{seconds}秒",
  "board.core.nextRoundLine": "次のラウンドまで{secs}",
  "board.core.playersDecidingAria": "他のプレイヤー{total}人中{decided}人が決定済み",
  "board.core.playersDecidingLine": "決定中のプレイヤー {ratio}",
  "board.core.pastRoundResultsAria": "過去のラウンド結果",
  "board.core.pastRounds": "過去のラウンド",
  "board.core.winsAmount": "{label}が{amount}を獲得",
  "board.core.youLost": "自分の負け！",
  "board.core.didNotStake": "このラウンドはベットしていません",
  "board.core.keepCard": "カードを保持（{amount}）",
  "board.core.sellAmount": "{amount}で売却",
  "board.core.decideHint": "今すぐ、または次のラウンド中に決めてください",
  "board.core.roundResultLink": "ラウンド#{roundId}の結果",
  "board.core.fullReceiptHint": "詳細なレシート → ラウンド結果",
  "board.core.splitReceiptHint": "分配・レシート → ラウンド結果",
  "board.core.eyebrowDrawing": "抽選中",
  "board.core.eyebrowPullsIn": "排出完了",
  "board.core.eyebrowLocked": "ロック済み",
  "board.core.headlineDrawing": "チケット1枚で決まります",
  "board.core.headlinePullsIn": "全パック開封完了",
  "board.core.headlineRoundLocked": "ラウンドロック",
  "board.core.headlinePacksOpening": "パック開封中…",
  "board.core.subDrawing": "検証可能な重み付き抽選",
  "board.core.subPullsIn": "次に勝者を抽選します",
  "board.core.subIntro": "{count} {noun}が懸かっています",
  "board.core.subOpening": "ボード上で{count} {noun}が開封中",
  "board.core.pool": "プール",
  "board.core.totalPool": "合計プール",
  "board.core.clockRoundOpen": "ラウンド受付中",
  "board.core.clockLockedRevealing": "ロック中・公開中",
  "board.core.clockSettled": "精算済み",
  "board.core.clockAriaLabel": "{label}、{seconds}秒",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "通常のスラブです。最大支援者が保持するか売却するかを選び、他の支援者には持ち分に応じて分配されます。",
  "board.settlement.dispositionSellBackSplit": "Grailルール：デフォルトで売却され、USDCはタイル全体で分配されます。",
  "board.settlement.dispositionTopBackerKeeps": "Grailルール：最大支援者が保持し、他の支援者にはその持ち分を支払います。",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "決定まで{seconds}秒",
  "board.settlement.panelAria": "タイル詳細と精算",
  "board.settlement.collapsePanelAria": "パネルを折りたたむ",
  "board.settlement.expandPanelAria": "パネルを展開する",
  "board.settlement.roundResultsLink": "ラウンド結果",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "ラウンドパネル",
  "board.settlement.clickTileToBack": "勝利結果はここに表示されます。タイルをクリックすると{amount}で支援できます。",
  "board.settlement.lastResultLine": "直近の結果・ラウンド#{roundId}、{outcome}",
  "board.settlement.youWonOutcome": "自分が{amount}を獲得",
  "board.settlement.view": "見る",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "敗北タイル・敗因",
  "board.settlement.losingTileTitle": "{label}・タイルに{amount}",
  "board.settlement.loserWhy":
    "開封されたのは{cardName}（{amount}）、抽選の結果は{winnerLabel}でした。チケットの{pct}が無配当でした{suffix}",
  "board.settlement.loserWhySuffixWithStake": "（自分の{amount}を含む）。",
  "board.settlement.loserWhySuffixNone": "。",
  "board.settlement.emptyTileNote": "このタイルは空でした。ベットも抽選チケットもありません。",
  "board.settlement.backToSettlement": "精算画面に戻る・{winnerLabel}の勝利",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label}・カード{index}/{total}・タイルに{amount}",
  "board.settlement.pullCaptionSingle": "{label}・タイルに{amount}",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "パック開封中",
  "board.settlement.revealOpenedTitle": "{label}が{cardName}を開封",
  "board.settlement.revealOddsLine": "{amount}・{poolAmount}のプールを獲得する確率{pct}。ただいま勝者を抽選中です。",
  "board.settlement.revealEmpty": "ボード上でパックが次々と開封されています。まもなく勝者抽選が行われます。",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "直近の結果・ラウンド#{roundId}",
  "board.settlement.tileTakesTable": "{label}が{amount}でテーブルを獲得",
  "board.settlement.whyWon": "検証可能な重み付きチケットにより抽選され、ロック時点で{label}はプールの{pct}%を保有していました。",
  "board.settlement.lostNoStakeIn": "自分の負け、{label}にはベットしていません",
  "board.settlement.theWinnerFallback": "勝者",
  "board.settlement.wonNoStake": "{label}の勝利・自分はベットなし",
  "board.settlement.aTileFallback": "あるタイル",
  "board.settlement.lossNoteWithStake": "自分の{amount}は他のタイルに入っていました。タイルにカーソルを合わせると詳細が見られます。",
  "board.settlement.lossNoteNone": "このラウンドはどのタイルも支援していません。",
  "board.settlement.topCardOfRound": "今ラウンドの最高カード・{label}",
  "board.settlement.keepCardTo": "カードを保持（{amount}）→ コレクションへ",
  "board.settlement.sellBackFor": "{amount}で売却",
  "board.settlement.continueNextRound": "次のラウンドへ進む",
  "board.settlement.continue": "続ける",
  "board.settlement.keepSellHint":
    "保持＝カードをコレクションへ・売却＝今すぐ{amount}（カード価値の{pct}%、このパックのCC買い取り額）・{noAction}",
  "board.settlement.noActionKept": "未操作の場合＝カードは自動的に保持されます。",
  "board.settlement.noActionAutoSell": "未操作の場合＝次のラウンド終了時に自動売却されます。",
  "board.settlement.revealOnlyNote":
    "このカナリア版では、敗北したタイルは開封演出のみが行われ、排出されたカードはボールトに戻ります。支払われるのは勝利タイルのカードのみです。",
  "board.settlement.payoutSplit": "配当の内訳",
  "board.settlement.poolChaseFeedLine": "プール{pool}・チェイスへの繰り入れ{feed}",
  "board.settlement.chaseAddSuffix": "・チェイス +{amount}",
  "board.settlement.physicalCardArrow": "実物カード →",
  "board.settlement.grailSecuredSuffix": "（Grail確保）",
  "board.settlement.grailSoldBack": "Grailを売却（{amount}）→ 上記のUSDC配分へ。",
  "board.settlement.cardAssignmentHead": "カードの割り当て",
  "board.settlement.cardLabel": "{amount}のカード",
  "board.settlement.soldToVault": "ボールトへ売却・売却益は配分に含まれます",
  "board.settlement.decisionTopBackerSuffix": "（最大支援者・保持または売却）",
  "board.settlement.offTheirUsdcSuffix": "・USDCから{amount}を差し引き",
  "board.settlement.cardsSpreadNote":
    "カードはできるだけ多くの支援者に行き渡るよう割り当てられます。割り当てられたカードは、そのCC買い取り額（パックにより85〜93%）分がその支援者のUSDCから差し引かれます（売却した場合と同じ現金価値ですが、値上がり分はその支援者のものになります）。割り当てきれなかったカードのみボールトに売却されます。",
  "board.settlement.chaseHitLabel": "チェイス的中！",
  "board.settlement.chasePaidLine": "{amount}がこの配分に支払われました。",
  "board.settlement.chaseMissLabel": "チェイスなし。",
  "board.settlement.chaseNowLine": "チェイスは現在{amount}。",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "抽選を検証",
  "board.settlement.verifyDrawSub": "検証可能な抽選・抽選レシートを見る",
  "board.settlement.roundIdLabel": "ラウンドID",
  "board.settlement.winningDrawLabel": "当選抽選値",
  "board.settlement.drawSeedLabel": "抽選シード",
  "board.settlement.proofIdLabel": "証明ID",
  "board.settlement.ticketOfCount": "{count}中の#{index}",
  "board.settlement.verifying": "検証中…",
  "board.settlement.recheckDraw": "抽選を再検証",
  "board.settlement.verifierLink": "検証ツール ↗",
  "board.settlement.verifiedOk": "✓ 抽選を検証済み、この勝者は公開された抽選シードと一致します。",
  "board.settlement.verifiedBad": "✗ この抽選はシードと一致しませんでした。信頼しないでください。",
  "board.settlement.everyRoundNote": "すべてのラウンドは、後から再検証できる公開シードから1人の勝者を抽選します。",
  "board.settlement.noPacksNote": "このラウンドはパックへの支援がなく、抽選対象がありません。",
  "board.settlement.settledHoverHint": "精算済み、タイルにカーソルを合わせると詳細を確認できます。",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "ベット額が残高を超えています",
  "board.betTooBig.dismissAria": "閉じる",
  "board.betTooBig.gotIt": "了解",
  "board.betTooBig.body": "{slotLabel}を支援するには{needed}が必要ですが、保有額は{held}です。{shortfall}不足しています。",
  "board.betTooBig.deposit": "{amount}以上を入金",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "合計ベット額順のプレイヤー",
  "board.wagerLadder.title": "プレイヤー",
  "board.wagerLadder.countZero": "まだベットなし",
  "board.wagerLadder.countOther": "{n}人参加中・合計ベット額順",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "プレイヤーパネルを折りたたむ",
  "board.wagerLadder.lastRoundAria": "前回のラウンド結果を見る、ラウンド#{n}",
  "board.wagerLadder.lastRoundLabel": "前回のラウンド結果",
  "board.wagerLadder.empty": "このラウンドはまだ誰もタイルを支援していません。",
  "board.wagerLadder.leaderAria": "首位",
  "board.wagerLadder.openProfileTitle": "{name}のプロフィールを新しいタブで開く",
  "board.wagerLadder.miniGridTotal": "合計{amount}",
  // Two keys, not one {name} token: Japanese also words "whose tiles" and
  // "your tiles" differently (proper noun + が vs the 自分 badge).
  "board.wagerLadder.miniGridTilesAria": "{name}が支援したタイル",
  "board.wagerLadder.miniGridTilesAriaYou": "自分が支援したタイル",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "手持ちカードを売却してこのベットの資金にする",
  "board.bidFund.eyebrow": "USDC不足",
  "board.bidFund.titleOne": "カードを売却してこのベットに充てますか？",
  "board.bidFund.titleMany": "これらのカードを売却してこのベットに充てますか？",
  "board.bidFund.body": "{cards}を売却すると{buyback}になり、{tile}を{amount}で支援できます。",
  "board.bidFund.bodyCardsMany": "これらのカード",
  "board.bidFund.note":
    "{amount}不足しています。カードは各パックのCC買い取りレート（85〜93%）で売却されます。この操作は取り消せません。",
  "board.bidFund.keepCards": "カードを保持",
  "board.bidFund.sellAndBid": "売却して{amount}をベット",
  "board.bidFund.autoSellSwitch": "獲得したカードを自動でUSDCに換金する",
  "board.bidFund.autoSellNoteOn":
    "獲得したカードは、届いた瞬間に買い取りレートで換金されます。保持か売却かの確認は表示されません。Grailが自動売却されることはありません。設定からいつでも変更できます。",
  "board.bidFund.autoSellNoteOff":
    "オンにすると、獲得したカードは確認なしで買い取りレートのUSDCに換金されます。Grailが自動売却されることはありません。設定からいつでも変更できます。",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "数字キーでベットしますか？",
  "board.hotkeys.optInBody":
    "キーを押すと、そのタイルに現在のベット額が即座に入ります。今回はまだ何もベットしていません。",
  "board.hotkeys.notNow": "後で",
  "board.hotkeys.enableKeys": "キーを有効にする",
  "board.hotkeys.turnOff": "オフにする",
  "board.hotkeys.turnOffTitle": "設定で再び有効にするまで、キーはオフのままです。",
  "board.hotkeys.changeKeys": "キーを変更",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "空きタイル",
  "board.boardV1.onTile": "タイル合計",
  "board.boardV1.changeAmount": "端数{amount}",
  "board.boardV1.oddsSuffix": "オッズ{pct}",
  "board.boardV1.openedOdds": "開封済み・オッズ{pct}",
  "board.boardV1.emptyNeverInDraw": "空・抽選対象外",
  "board.boardV1.winnerYourShare": "勝者・自分の取り分が支払われます",
  "board.boardV1.winnerNoStake": "勝者・自分はベットなし",
  "board.boardV1.lostOdds": "抽選に敗北・オッズ{pct}",
  "board.boardV1.tileClickTitle": "どこをクリックしても{amount}で{label}を支援します",
  "board.boardV1.youAmount": "自分{amount}",
  "board.boardV1.youNone": "自分 -",
  "board.boardV1.pctOfTile": "タイルの{pct}",
  "board.boardV1.noStakeYet": "まだベットなし",
  "board.boardV1.grailPrefix": "GRAIL・",
  "board.boardV1.topPrefix": "トップ・",
  "board.boardV1.backerPopStake": "{amount}を支援・タイルの{pct}",
  "board.boardV1.statusWaitingDraw": "抽選を待っています…",
  "board.boardV1.statusWonSplit": "分配で{amount}を獲得",
  "board.boardV1.statusOnWinningTile": "勝利タイルに参加中",
  "board.boardV1.statusNoPayout": "今ラウンドは配当なし",
  "board.boardV1.statusYourStake": "進行中の自分のベット",
  "board.boardV1.statusBacking": "このタイルを支援中",
  "board.boardV1.backerCount.one": "支援者{n}人",
  "board.boardV1.backerCount.other": "支援者{n}人",
  "board.boardV1.noBackersYet": "支援者はまだいません",
  "board.boardV1.backAmount": "{amount}で支援",
  "board.boardV1.backBtnTitle": "{amount} USDCで{label}を支援",
  "board.boardV1.evolveTitle": "{label}にちょうど{amount}を追加で支援します",
  "board.boardV1.hoverTitle": "{label}・タイルに{amount}",
  "board.boardV1.opensAs": "開封内容・{summary}",
  "board.boardV1.noPacksYet": "まだパックがありません。支援すると最初のパックが揃います",
  "board.boardV1.whyOpenedDrawing":
    "オッズ{pct}で{cardName}（{amount}）を開封しました。ただいま勝者を抽選中です。",
  "board.boardV1.whyWon":
    "オッズ{pct}の重み付き抽選に勝利しました。{cardName}（{amount}）を開封し、プールは支援者に按分で分配されました。",
  "board.boardV1.whyLost":
    "重み付き抽選に敗北しました。オッズ{pct}（{poolAmount}のプールのうち{amount}）。{cardName}（{cardAmount}）は開封されましたが、配当は勝利タイルのみです。",
  "board.boardV1.whyEmpty": "空のタイルです。ベットも抽選チケットもありません。",
  // Appended straight onto a whyX sentence above; Japanese needs no leading
  // space after the preceding 。 (same convention as youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": "このタイルへの自分のベットは{amount}です。",
  "board.boardV1.whyNoStakeSuffix": "このタイルにはベットしていません。",
  "board.boardV1.ifWins": "このタイルが勝てば、{poolAmount}のプールのうち約{amount}を受け取れます。",
  "board.boardV1.clickToBack": "クリックすると選択中のベット額で支援し、ロック時に最初のパックが開封されます。",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "{rank}位、{name}、ベット額{wagered}、純損益{net}、勝率{pct}パーセント",
  "board.leaderboard.youTag": "自分",
  "board.leaderboard.youRankTag": "自分・{n}位",
  "board.leaderboard.statWagered": "ベット額",
  "board.leaderboard.statNetPl": "純損益",
  "board.leaderboard.statWinRate": "勝率",
  "board.leaderboard.statRounds": "ラウンド数",
  "board.leaderboard.statPoolShare": "プール占有率",
  "board.leaderboard.statFirstSeen": "初参加",
  "board.leaderboard.statBiggestPull": "最高の当たり",
  "board.leaderboard.shareOfToday": "本日のベット額のうち",
  "board.leaderboard.shareOfAllTime": "全期間のベット額のうち",
  "board.leaderboard.noneYet": "まだなし",
  "board.leaderboard.viewFullProfile": "プロフィール全体を見る",
  "board.leaderboard.live": "ライブ",
  "board.leaderboard.fullRankings": "全ランキング",
  "board.leaderboard.playerCount.one": "プレイヤー{n}人",
  "board.leaderboard.playerCount.other": "プレイヤー{n}人",
  "board.leaderboard.roundCount.one": "{n}ラウンド",
  "board.leaderboard.roundCount.other": "{n}ラウンド",
  "board.leaderboard.colPlayer": "プレイヤー",
  "board.leaderboard.colWagered": "ベット額",
  "board.leaderboard.colNet": "純損益",
  "board.leaderboard.colWin": "勝率",
  "board.leaderboard.colBiggestPull": "最高の当たり",
  "board.leaderboard.sortGroupAria": "ランキングを並べ替え",
  "board.leaderboard.sortBy": "{col}で並べ替え",
  "board.leaderboard.podiumNet": "純損益{amount}",
  "board.leaderboard.podiumTopPull": "最高の当たり",
  "board.leaderboard.fullStandings": "全順位・{n}人のベッター",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "{handle}のXプロフィール写真",
  "board.connectX.connectedTitle": "Xで接続済み・{handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "{packName}のスロット（このタイルにはなし）",
  "board.packChips.fixedChipTitle": "{packName}×{n}、各{amount}",
  "board.packChips.fixedChipTitleTotalSuffix": "・合計{amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "タイルにたまった端数から生まれたパックです。誰も直接ベットしていません",
  "board.packChips.pooledSome": "{total}個中{n}個がタイルにたまった端数から生まれています",
  "board.packChips.bidWhole": "パック1つ分としてベット",
  "board.packChips.foldedUnitWithCount": "{packName}×{n} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "このタイルには他に：{list}",
  "board.packChips.morePacks.one": "他{n}パック",
  "board.packChips.morePacks.other": "他{n}パック",
  "board.packChips.morePacksWithList.one": "他{n}パック：{list}",
  "board.packChips.morePacksWithList.other": "他{n}パック：{list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "ベット {bids}・プール {pool}",
  "board.tile.splitAllBids": "{bids}すべてが丸ごとのパックとしてベットされています",
  "board.tile.splitAllPool": "{pool}すべてがタイルにたまった端数です",
  "board.tile.splitPoolNote": "破線のパックはたまった端数から生まれたもので、誰もベットしていません。",
  "board.tile.evolveLooseTitle": "このタイルの端数{loose}は、{target}で{tier}パックに育ちます",
  "board.tile.evolveNoLooseTitle": "このタイルにはまだ端数がありません。端数は{target}で{tier}パックに育ちます",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.stakeUnitPackOne": "{packName}パック{n}個（{amount}）",
  "board.betRail.stakeUnitPackOther": "{packName}パック{n}個（{amount}）",
  "board.betRail.allTilesPartialCoverOf": "{name}、{unit}で{total}タイル中{covered}タイルをカバー",
  "board.betRail.allTilesPlanFull": "ラウンド終了時に{unit}で全{total}タイルにベットします。合計{spend}。",
  "board.betRail.allTilesPlanShort.one":
    "ラウンド終了時に{unit}で{total}タイル中{covered}タイルにベットします。残高{balance}でまかなえるのは{spend}です。",
  "board.betRail.allTilesPlanShort.other":
    "ラウンド終了時に{unit}で{total}タイル中{covered}タイルにベットします。残高{balance}でまかなえるのは{spend}です。",
  "board.betRail.allTilesPlanNone": "残高{balance}では{unit}のベットに届かないため、どのタイルにもベットしません。",
  "board.betRail.allTilesShortHistory.one":
    "全タイル自動ベットには{unit}で{tiles}タイル分の{needed}が必要です。残高は{balance}のため、{covered}タイルにベットしました。",
  "board.betRail.allTilesShortHistory.other":
    "全タイル自動ベットには{unit}で{tiles}タイル分の{needed}が必要です。残高は{balance}のため、{covered}タイルにベットしました。",
  "board.betRail.allTilesNoneHistory":
    "全タイル自動ベットには{unit}で{tiles}タイル分の{needed}が必要です。残高は{balance}のため、どのタイルにもベットしませんでした。",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "ラウンド終了時",
  "board.betRail.planTotal": "合計",
  "board.betRail.planMathFull": "{total}タイル × {amount}",
  "board.betRail.planMathShort": "{total}タイル中{covered} × {amount}",
  "board.betRail.planPerTile": "1タイルあたり{unit}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (two glyphs
  // wide, matching the English chip width), `.name` is also substituted into
  // the {name} token of board.betRail.strategyAria* / firedAtClose,
  // `.closeLine` renders right after `.rowTitle` as "rowTitle, closeLine".
  // Polite です・ます, established vocabulary: タイル, ベット, ラウンド,
  // ラウンド終了時, 首位, セット.
  "board.strategy.highest.label": "最多",
  "board.strategy.highest.name": "セット：ラウンド終了時に最も金額の多いタイルにベット",
  "board.strategy.highest.detail":
    "最も金額の多いタイルにベットをセットします。ラウンド終了直前に確定します。",
  "board.strategy.highest.rowTitle": "最多タイル",
  "board.strategy.highest.closeLine": "ラウンド終了時に最大のタイルにベットします",
  "board.strategy.highest.gridLine": "終了時に金額最多",

  "board.strategy.lowest.label": "最少",
  "board.strategy.lowest.name": "セット：ラウンド終了時に最も金額の少ないタイルにベット",
  "board.strategy.lowest.detail":
    "最も混み合っていないタイルにベットをセットします。ラウンド終了直前に確定します。みんなが最安のタイルに集まれば、その時点ではもう最安ではありません。",
  "board.strategy.lowest.rowTitle": "最少タイル",
  "board.strategy.lowest.closeLine": "ラウンド終了時に最小のタイルにベットします",
  "board.strategy.lowest.gridLine": "終了時に金額最少",

  "board.strategy.secondHighest.label": "上2位",
  "board.strategy.secondHighest.name": "セット：ラウンド終了時に2番目に金額の多いタイルにベット",
  "board.strategy.secondHighest.detail":
    "首位の一つ下にベットをセットします。ラウンド終了直前に確定します。",
  "board.strategy.secondHighest.rowTitle": "2番目に多いタイル",
  "board.strategy.secondHighest.closeLine": "ラウンド終了時に首位の一つ下のタイルにベットします",
  "board.strategy.secondHighest.gridLine": "首位の一つ下",

  "board.strategy.secondLowest.label": "下2位",
  "board.strategy.secondLowest.name": "セット：ラウンド終了時に2番目に金額の少ないタイルにベット",
  "board.strategy.secondLowest.detail":
    "逆張りの選択肢です。誰もが最安のタイルを狙うと混み合ってしまうため、2番目に安いタイルの方が高く払える場合があります。今セットし、ラウンド終了直前に確定します。",
  "board.strategy.secondLowest.rowTitle": "2番目に少ないタイル",
  "board.strategy.secondLowest.closeLine":
    "ラウンド終了時に混み合った最下位の一つ上のタイルにベットします",
  "board.strategy.secondLowest.gridLine": "最下位の一つ上",

  "board.strategy.allTiles.label": "全部",
  "board.strategy.allTiles.name": "セット：ラウンド終了時に全タイルにベット",
  "board.strategy.allTiles.detail":
    "対象となる全タイルにベットをセットします。ラウンド終了直前に確定します。合計金額はベット額×その時点のタイル数です。",
  "board.strategy.allTiles.rowTitle": "全タイル",
  "board.strategy.allTiles.closeLine": "ラウンド終了時にベットを分散します",
  "board.strategy.allTiles.gridLine": "全タイルにベット",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "もう一度タップ: {unit}",
  "board.tile.confirmClickAgain": "もう一度クリック: {unit}",
  "board.tile.betOffNotice": "設定でベットがオフになっています",
  "board.stakeControl.pickPackHint": "パックを選んでベット",
  "board.stakeControl.emptyStakeLead": "パックを選ぶ",
  "board.stakeControl.emptyStakeHint": "それがベットになります",
  "gear.betInput.label": "ベットの操作",
  "gear.betInput.hint":
    "タイルのタップ（と数字キー）がどうベットを入れるか。ダブルは先に確認のタップを1回求めます - タッチ画面の既定です。オフは観戦モードで、何もベットできません。",
  "gear.betInput.optionSingle": "シングルタップ",
  "gear.betInput.optionDouble": "ダブルタップ",
  "gear.betInput.optionOff": "オフ",
  "gear.cardOpen.label": "カードを開く",
  "gear.cardOpen.hint":
    "ダブルはカードがページを開く前に確認のタップを求めます - タッチ画面の既定です。",
} as Record<string, string>;
