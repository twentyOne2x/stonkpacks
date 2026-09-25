// Japanese (日本語): "docs" segment, translated from en/docs.ts and reviewed
// by a native speaker. Two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   rules explainer.
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-stay-$-USD rules that apply to every locale. The SAME keys must
// exist in every other locale's i18n/<locale>/docs.ts.
//
// Interpolation tokens ({starter}, {take}, etc.) are always filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations), never with translated text.
//
// BOLD EMPHASIS (docs.howItWorks.* only): those values carry inline
// `**bold**` markers the route renders as <b>. The pairs stay balanced here
// but sit on the words Japanese actually stresses, which is rarely the same
// span as English. `**` has no meaning in the other docs.* keys.
//
// REGISTER: polite (です・ます) throughout; the FAQ question keys use the
// short Japanese question style ("...には？") rather than a full sentence.
//
// Terminology choices made for this locale (kept consistent with
// i18n/ja/board.ts, arena.ts, chat.ts, misc.ts): pack(s) -> パック,
// tile -> タイル, pot -> ポット, wheel -> ホイール,
// back/backer -> 支援する/支援者, keep -> 保持, sell back -> 売却,
// buyback -> 買い取り, pro-rata -> 按分, graded -> 鑑定済み, change (loose
// money) -> 端数, Chase -> チェイス. "Grail" and "Mythic" are pack-tier brand
// names and stay in Latin script even mid-sentence.
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the ten locales stay in key parity; key names are never rendered. The Japanese word is 端数.
//
// NO SOURCE-FILE CITATIONS (owner directive 2026-07-29): the per-file
// <code> chip under each Technical card was deleted from the component.
// Never reintroduce a file name, path or module into player copy.
export default {
  "docs.header.title": "ドキュメント",
  "docs.header.back": "← ボードに戻る",

  "docs.tabs.ariaLabel": "ドキュメント表示",
  "docs.tabs.how": "仕組み",
  "docs.tabs.technical": "技術",

  "docs.how.intro": "分かりやすい説明です。まずこちらを読んでから、正確な仕組みを知りたい場合は「技術」タブへどうぞ。",
  "docs.technical.intro": "実際の仕組みを、そのままの数字で。",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "attn ROYALEとは？",
  "docs.how.whatIsRoyale.a":
    "ライブでパックを開封するゲームです。ラウンドごとに、プレイヤーはパックを賭けてタイルを支援します。ラウンドがロックされると、賭けが入ったすべてのタイルがその場でパックを開封し、1つのタイルの支援者たちがプール全体を分け合います。",

  "docs.how.whatIsPack.q": "パックとは？",
  "docs.how.whatIsPack.a":
    "タイルが開いた瞬間に、実物の鑑定済みカード1枚が出てくる価格帯のことです。ラダーは{starter}、{elite}、{legendary}、{grail}、{mythic}の順に並んでいます。パックが大きいほど、より価値の高いカードが出ます。",

  "docs.how.howBacking.q": "タイルを支援するには？",
  "docs.how.howBacking.a":
    "気に入ったタイルを選び、パックを賭けてください。同じタイルに他のプレイヤーと一緒に賭けた場合はそのタイルを共有することになり、自分が実際に賭けたパックの割合に応じて、そのタイルの勝ち分を受け取ります。",

  "docs.how.heatRemainder.q": "パック1つ分に満たない額を賭けたら？",
  "docs.how.heatRemainder.a":
    "最も安いパック価格に満たない分は、端数としてタイルに残ります。残りのベットと一緒に置かれますが、1パック分に育つまで単独でカードを開封することはなく、確率を決めるのは開封されたカードです。",

  "docs.how.howWheelPicks.q": "ホイールはどうやって勝者を選ぶのですか？",
  "docs.how.howWheelPicks.a":
    "ロック時に、ベットされた各タイルがパックをライブで開封します。ホイールは1つのタイルに止まり、そのタイルが開けたカードの価値が高いほどホイールの取り分は大きくなります。大きな1枚が出れば、小さなタイルでも本命になります。選定自体は検証可能なランダム抽選によるもので、人の手は入りません。",

  "docs.how.whatDoIWin.q": "何が獲得できますか？",
  "docs.how.whatDoIWin.aBefore": "勝ったタイルの支援者たちが、",
  "docs.how.whatDoIWin.aEmphasis": "そのラウンドのプール全体",
  "docs.how.whatDoIWin.aAfter":
    "を分け合います（そのタイル自体の賭け金だけではありません）。分配は各自がそのタイルに賭けた金額に比例します。さらに、そのタイルへの最大の支援者には、タイル最高のカード1枚を優先して受け取る権利があります。",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule, flagged for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "「保持」と「売却」の違いは？",
  "docs.how.keepOrSell.keepLabel": "保持",
  "docs.how.keepOrSell.keepBody": "そのカードを無料でコレクションに追加します。",
  "docs.how.keepOrSell.sellLabel": "売却",
  "docs.how.keepOrSell.sellBody": "カードの価値の一部を、そのままUSDCで残高に支払います。待ち時間はありません。",

  "docs.how.decisionTimeout.q": "時間内に決めなかったら？",
  "docs.how.decisionTimeout.a":
    "選択できる時間は短く区切られています。その時間が過ぎると、カードはその時点のレートで自動的に売却されるため、獲得したものが宙に浮くことはありません。",

  "docs.how.whatIsChase.q": "チェイスとは？",
  "docs.how.whatIsChase.a":
    "毎ラウンドのプールからわずかな割合を積み立てていく、常時進行中のジャックポットです。独自の独立した抽選でどのラウンドでも発生する可能性があり、グレイルを引いても発動はしません。発動すると、ジャックポット全額がそのラウンドの当選分配に支払われます。",

  "docs.how.howToStartFree.q": "無料で始めるには？",
  "docs.how.howToStartFree.a":
    "招待コードを使って参加すると、Starterパック1つ分の無料残高がもらえます。ウォレットもサインインも不要で、ゲストのまますぐに始められます。",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "パックラダー",
  "docs.tech.packLadder.body":
    "購入できるパックは5種類です: {starter}、{elite}、{legendary}、{grail}、{mythic}。ベットは支払える範囲で大きいパックから順に構成されます。最も安いパック価格に満たない残りは端数としてタイルに残り、単独ではカードを開封しません。特定のパックとして置いたベットはそのパックのまま維持され、追加されたときに上位へまとまるのは端数だけです。",

  "docs.tech.oddsWeighting.title": "確率を決めるのは、タイルが開けたカード",
  "docs.tech.oddsWeighting.body":
    "タイルの勝率は、そこにいくらベットされたかでは決まりません。ロック時に資金の入った各タイルがパックを開封し、そのタイルの抽選での取り分は、今開けたカードの価値を、そのラウンドで開かれた全カードの価値と比べたものになります。大きな1枚が出れば小さなタイルが本命になります。カードを1枚も開けなかったタイルに勝ち目はなく、端数だけでカードが開くことはありません。ラウンド全体で1枚もカードが開かなかった場合は抽選の対象がないため、そのラウンドは無効となり、すべてのベットが全額返金されます。",

  "docs.tech.vrfDraw.title": "勝者抽選はVRFシードによる決定論的な処理です",
  "docs.tech.vrfDraw.body":
    "各ラウンドは、ラウンドID、締切、確定した盤面、チケット数、ロック後に取得したチェーンのエントロピーという固定の材料から、検証可能な乱数を1つ導出します。当選タイルは、その乱数を各タイルの重みに沿って一度だけ決定論的にたどって決まります。同じ入力からは常に同じ当選者が生まれ、タイルの重みはたどる前に公開・確定され、誰でもラウンドのレシートから抽選全体を後から再検証できます。",

  "docs.tech.settlementMath.title": "精算のしくみ",
  "docs.tech.settlementMath.body":
    "当選タイルのバッカーは、自分のタイルのベットだけでなくラウンドのプール全体を、そのタイルに入れた額に比例して分け合います。まず{take}のハウス取り分が引かれ、{chaseCut}がThe Chaseのジャックポットを積み上げ、{protocolCut}がプロトコルを支えます。この取り分は可能な限りカードで支払われ、余ったカードの安いものから順に売却されます。取り分に収まらないほど高価なカードは売らずに見送るため、大きな当たりが持っていかれることはありません。カードで賄えなかった分だけがプールの現金から出ます。",

  "docs.tech.cardAllocation.title": "カードは誰のものになるか",
  "docs.tech.cardAllocation.body":
    "キープか売却かの判断が付くのは、当選タイルの最も価値の高い1枚だけで、それはそのタイルの最大バッカーのものです。そのタイルが開けた他のカードは、各自のベット額に比例して、価値の高い順にバッカーへ配られます。受け取るとそのカードの買い取り価格が自分の現金取り分から差し引かれるため、これはコストではなく交換です。どちらを選んでも手元に残る価値は同じになります。誰の取り分でも賄えないカードはハウスが買い取り、その現金は分配の中に残るので、カードを押し付けられることはありません。同じラウンドの2枚目のグレイルもここでは特別扱いされず、他の戦利品と一緒に配られます。The Chaseがグレイルを取ることは決してありません。",

  "docs.tech.sellBackRates.title": "売却レート",
  "docs.tech.sellBackRates.body":
    "各カードには、出てきたパックによって決まる常設の売却価格が付いています: 入門段は{entryRate}、中段は{midRate}、最上段は{topRate}です。売却するとその価格がその場で残高に入り、キープしても費用はかかりません。レートは同じマシンについてCollectorCryptが公開している即時買い取りレートに準じています。",

  "docs.tech.chaseJackpot.title": "チェイスジャックポット",
  "docs.tech.chaseJackpot.body":
    "毎ラウンドのプールの{chaseCut}を積み立てる累進ジャックポットです。独自の独立した抽選で発動し、通常のラウンド進行ではおよそ週に1回程度で、グレイルを引いても発動はしません。発動すると、ジャックポット全額がそのラウンドの当選分配に支払われ、その後リセットされて再び積み上がります。The Chaseは可能なときに1ラウンドにつきカードを1枚取りますが、負けたタイルからのみで、そのラウンドで最も価値の高いカードは取らず、グレイルも決して取りません。",

  "docs.tech.decisionWindow.title": "判断ウィンドウ",
  "docs.tech.decisionWindow.body":
    "タイルの目玉カードを獲得すると、キープか売却かを選ぶ{window}秒のウィンドウが開きます。閉じるまで、または次のラウンドのロックまでに応答がない場合は、そのときのレートでカードが売却されるため、獲得したものが宙に浮くことはありません。",

  "docs.tech.devnetCustody.title": "Devnet USDCのカストディ",
  "docs.tech.devnetCustody.body":
    "残高の移動は、Solana devnet上での実際のUSDCトランザクションとして行われます。カストディはPrivyの組み込みウォレットを通じて、またはフォールバックとしてブラウザ内に保持されるdevnet専用のキーペアを通じて行われ、どちらの場合も本番のカストディと全く同じ送金経路で署名されます。",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "無効と返金",
  "docs.tech.voidRefund.body":
    "ラウンドは開封されたカードによってのみ決着するため、どのタイルもカードを開けなかったラウンドには抽選の対象がありません。そのラウンドはその場で無効になります。ボード上のすべてのベットが全額戻り、ハウスは何も取らず、The Chaseにも何も積まれません。無効になったラウンドの公開抽選記録はカード合計ゼロを示し、それが、無効はボードによって強制されたものであり誰かが選んだものではないという証明になります。",

  "docs.tech.cardExits.title": "勝ち取ったカードはあなたのウォレットへ",
  "docs.tech.cardExits.body":
    "カードをキープすると、署名済みトランザクションとしてあなた自身のウォレットに転送され、ネットワーク手数料はハウスが負担します。ウォレットがまだ受け取れない場合、配送は保留されて届くまで再試行され、破棄されることはありません。カードを売却すると、勝ち取った瞬間に提示された価格がそのまま支払われ、再見積もりは決してありません。その見積もりは一度しか行使できず、資金が動く前に使用済みとして記録されるため、同じカードが二度支払われることはありません。",

  "docs.tech.deposits.title": "USDCの入金",
  "docs.tech.deposits.body":
    "入金は、あなた自身のウォレットから署名するSolana上のUSDC送金です。残高に反映されるのは、その送金がゲームのトレジャリーへオンチェーンで確定した後だけで、金額と送金先はリクエストからではなくチェーン自体から読み取られます。各トランザクション署名が残高に加算できるのは一度だけなので、同じ入金を再送しても二重加算はされず、1回あたりの上限を超えて届いた送金は消えるのではなく、あなたへの返還債務として記録されます。",

  "docs.tech.withdrawals.title": "USDCの出金",
  "docs.tech.withdrawals.body":
    "出金はまず残高から差し引かれ、その後トレジャリーからUSDCが、あなたが承認した送金先へ送られます。検証済みログインがその金額と送金先そのものに署名し、その証明と一致しないリクエストは拒否されます。レシートにはトランザクション署名が残ります。チェーンが送金を確定的に拒否した場合、残高はちょうど一度だけ返金されます。送金が出たもののまだ確定していない場合は、チェーンが最終的な答えを出すまで何も返金されないため、出金が二度支払われることは、再起動をまたいでもありません。",

  "docs.tech.identity.title": "どこからログインしても、アカウントはひとつ",
  "docs.tech.identity.body":
    "Privyでログインするか、一度限りのサーバーチャレンジに署名してSolanaウォレットを証明するか。どちらの道も、検証済みのアイデンティティだけに紐づいた同じ永続アカウントにつながります。お金を動かす処理はすべて、まさにそのリクエストで自分を証明したアイデンティティのアカウント上で実行され、自己申告の名前、ID、ヘッダーは破棄されるため、入金やベットや出金を他人の残高に向けることは誰にもできません。",

  "docs.tech.reconnect.title": "再接続と再起動",
  "docs.tech.reconnect.body":
    "ログアウトすればお金は止まります。USDCのレール上では、所有証明のない入金、ベット、出金は拒否されます。ログインし直せば同じアカウントが待っていて、残高もカードもそのままです。あなたの持ち物はすべてページの中ではなく永続的な台帳に記録されているからです。サーバーが再起動してもその台帳が再生されて同じ数字に戻り、すでに送られた送金が二度送られることはありません。",

  "docs.nav.ariaLabel": "ドキュメントのセクション",
  "docs.nav.overview": "概要",
  "docs.nav.prev": "前へ",
  "docs.nav.next": "次へ",

  "docs.nav.section.introduction": "はじめに",
  "docs.nav.section.gameplay": "ゲームプレイ",
  "docs.nav.section.cards": "カードとカストディ",
  "docs.nav.section.money": "お金",
  "docs.nav.section.fairness": "公正性",
  "docs.nav.section.account": "アカウント",

  "docs.nav.page.whatIsRoyale": "attn ROYALEとは",
  "docs.nav.page.packs": "パックとラダー",
  "docs.nav.page.startFree": "無料で始める",
  "docs.nav.page.backing": "タイルにベットする",
  "docs.nav.page.theDraw": "抽選",
  "docs.nav.page.winning": "勝つと何がもらえるか",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "キープか売却か",
  "docs.nav.page.cardAllocation": "カードは誰のものになるか",
  "docs.nav.page.sellBack": "売却レート",
  "docs.nav.page.cardDelivery": "カードの配送",
  "docs.nav.page.deposits": "入金",
  "docs.nav.page.withdrawals": "出金",
  "docs.nav.page.settlement": "精算のしくみ",
  "docs.nav.page.custody": "USDCのカストディ",
  "docs.nav.page.odds": "確率を決めるもの",
  "docs.nav.page.vrf": "VRF抽選",
  "docs.nav.page.voidRefund": "無効と返金",
  "docs.nav.page.identity": "アカウントはひとつ",
  "docs.nav.page.reconnect": "再接続と再起動",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // =========================================================================

  // --- page header ---------------------------------------------------------
  "docs.howItWorks.title": "attn ROYALE：お金の流れのすべて",
  "docs.howItWorks.lead": "ゲームの完全なルールです。勝者がどう抽選され、カードが誰のものになるかを説明します。",
  "docs.howItWorks.backToBoard": "ボードに戻る →",

  // --- 1 · How a round works ----------------------------------------------
  "docs.howItWorks.round.title": "ラウンドの流れ",
  "docs.howItWorks.round.pickBet":
    "ベット額を選び、タイルをクリックします。1クリックごとに、その金額がタイルのポットに加算されます。",
  "docs.howItWorks.round.yourShare":
    "タイルでの**自分の取り分**＝自分のベット額÷そのタイルの合計額。{tile}のタイルに{stake}を入れれば取り分は**{pct}**です。そのタイルが勝てば、配当の{pct}を受け取れます。",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**勝率**が決まるのはベット時ではなく開封時です。ラウンドがロックされると、ベットの入った各タイルがパックを開封し、タイルのホイールでの取り分は、今開けたカードの価値を、そのラウンドで開かれた全カードの価値と比べたものになります。",
  "docs.howItWorks.round.tickets":
    "**カードを1枚も開けなかった**タイルに取り分はありません。ラウンド全体で1枚もカードが開かなかった場合、そのラウンドは**無効**となり、すべてのベットが全額戻ります。",
  "docs.howItWorks.round.vrf":
    "ロック時、**VRF**（検証可能なランダム関数）が、ラウンドID、締め切り時刻、各タイルの合計額、チケット数といったロック済みの数値から当選チケットを1枚抽選します。運営を含め、誰にも操作できません。",
  "docs.howItWorks.round.oddsAreReal": "各タイルに表示されるオッズは、この抽選計算そのものです。雰囲気の数字ではありません。",

  // --- 2 · What your bet buys ---------------------------------------------
  "docs.howItWorks.buys.title": "ベットで何が手に入るか",
  "docs.howItWorks.buys.ladderLead": "タイルの合計額は、大きいパックから順に組み替えられます。",
  "docs.howItWorks.buys.example":
    "例：**{amount}**のタイルなら、Legendary1つ、Elite1つ、Starter1つになります。",
  "docs.howItWorks.buys.change":
    "次のパックに届かない分は**端数**です。ポットと勝ったときの取り分にはそのまま反映されますが、パックは開封されず、オッズを決めるのは開封されたカードです。",
  "docs.howItWorks.buys.mythicUpgrade":
    "すでにMythicを持っている場合、アップグレードボタンは小さいパックではなく**もう1つのMythicまるごと**を狙います。ラダーが下の段に戻ることはありません。",
  "docs.howItWorks.buys.cardsPerPack":
    "ロック時、資金の入った各タイルは**パック1つにつきカード1枚**を開封します。ボードに表示されるのは**{max}枚**までで、残りは結果ページに一覧表示されます。端数しかないタイルは何も開封しません。",
  "docs.howItWorks.buys.undeliverable":
    "パックを実際に届けられない場合（売り切れ、技術的な問題、時間切れなど）、その代金は宙に浮かず、現金として戻ってきます。",

  // --- 3 · What the winner gets -------------------------------------------
  "docs.howItWorks.winner.title": "勝者が受け取るもの",
  "docs.howItWorks.winner.entirePool":
    "勝利タイルの支援者は、そのタイル自身のポットだけでなく、**ラウンドのプール全体**を分け合います。",
  "docs.howItWorks.winner.proRata":
    "分配は**按分**です。タイルの{pct}を出していれば、配当の**{pct}**を受け取れます。",
  "docs.howItWorks.winner.take":
    "分配の前に、すべてのプールから**{take}**が差し引かれます。内訳は、チェイスジャックポットへ**{chaseCut}**、プロトコル（招待報酬、チェイス用カードの購入、運営、トークンの買い戻し）へ**{protocolCut}**です。",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "この{take}は可能な限りカードで支払われ、余ったカードの安いものから順に充てられます。取り分に収まらないほど高価なカードは売らずに見送られるため、大きな当たりが持っていかれることはありません。カードで賄えなかった分だけがプールの現金から出ます。",

  // --- 4 · The Chase -------------------------------------------------------
  "docs.howItWorks.chase.title": "チェイス",
  "docs.howItWorks.chase.feed": "チェイスは積み上がり式のジャックポットで、各プールの**{cut}**が繰り入れられます。",
  "docs.howItWorks.chase.cardCut":
    "可能な場合、チェイスは現金ではなくカードで取り分を受け取ります。ただし対象は敗北タイルのカードのうち、プールの**{cut}以下**の価値のものに限られ、そのラウンドで最も価値の高いカードやGrailが選ばれることはありません。",
  "docs.howItWorks.chase.independentDraw":
    "ジャックポットは**独立したランダム抽選**で発動し、通常のラウンド進行では平均して**週に1回ほど**当たります。Grailを引いても発動はしません。",
  "docs.howItWorks.chase.payout":
    "発動すると、**ジャックポット全額**がそのラウンドの勝者分配に加算され、その後リセットされて次のラウンドから積み上がり直します。",

  // --- 5 · Grails ----------------------------------------------------------
  "docs.howItWorks.grails.title": "Grail",
  "docs.howItWorks.grails.what":
    "**Grail**は、どのパックからも出うる、最も希少で最も高価な当たりです。{price}のStarterからでも出ます。",
  "docs.howItWorks.grails.headlineGrail":
    "勝利タイルの目玉カードがGrailだった場合、**保持**を選ぶには最大支援者が他の支援者の持ち分を買い取る必要があります（その分は各自の現金から差し引かれます）。**売却**を選ぶと、配当は最大支援者だけでなく**タイル全体に按分**で分配されます。",
  "docs.howItWorks.grails.otherGrails":
    "そのラウンドで出た他のGrail（別のタイル、または追加カードとして出たもの）は、勝った支援者へのボーナス戦利品となり、他の追加カードと全く同じ扱いになります。チェイスに回収されることはなく、手数料は安いカードから順に支払われるため、Grailに手が届くのは最後の最後です。",

  // --- 6 · Who gets the cards ---------------------------------------------
  "docs.howItWorks.cards.title": "カードは誰のものになるか",
  "docs.howItWorks.cards.headline":
    "勝利タイルの**目玉カード**（そのタイルで最も価値の高い当たり）は、最大支援者だけのものです。無料で保持するか、買い取りレートの現金で売却するかを選べます。その現金は本人に支払われ、タイルの他の支援者と分け合うことはありません。",
  "docs.howItWorks.cards.rest":
    "タイルが引いた他のカードと、敗北タイルから渡ってきたボーナス戦利品は、価値の高い順に、ベット額に応じて分配されます。通常は最大支援者が最も多く、そして最も良いカードを手にします。",
  "docs.howItWorks.cards.deduction":
    "そのカードを受け取ると、買い取り価格が自分の現金の取り分から差し引かれます。売却して得られる金額と同じなので、損はありません。",
  "docs.howItWorks.cards.neverForced":
    "支払えない場合でも、無理に受け取らされることはありません。代わりに運営が買い取り、その現金は分配の中に残ります。",
  "docs.howItWorks.cards.workedExample":
    "**計算例**。プール{pool}。まず**{take}**（{takeAmount}：チェイスへ{chaseAmount}、プロトコルへ{protocolAmount}）が差し引かれますが、通常は自分の現金ではなく余ったカードで賄われます。分配に残るのは**{split}**。自分はタイルの{yourPct}（{yourStake}）、Samは{samPct}（{samStake}）をベットしました。タイルからは目玉カードの{headline}（Legendaryパック、買い取り**{buyback}**）と、追加カードの{extra}が1枚出ました。{headline}のカードは無料で自分のものになります。{extra}のカードはSamへ渡り、その買い取り分**{buyback}**、つまり**{samCash}**がSamの取り分から差し引かれます。最終結果は、自分が**現金{yourStake}＋{headline}のカード**、Samが**現金{samCash}＋{extra}のカード**です。",

  // --- 7 · Keep or sell ----------------------------------------------------
  "docs.howItWorks.keepSell.title": "保持か売却か",
  "docs.howItWorks.keepSell.buttons":
    "受け取ったカードには必ず2つのボタンが付きます。**保持**はスラブをコレクションに入れ、**売却**はそのパックの買い取りレートをUSDCで残高に支払います。",
  "docs.howItWorks.keepSell.usdc": "USDCはデジタルのドルです：**{rate}**。",
  "docs.howItWorks.keepSell.rates":
    "買い取り率はカードが出たパックで決まります。Starter/Eliteは**{entryRate}**、Legendaryは**{midRate}**、Grail以上は**{topRate}**です。",
  "docs.howItWorks.keepSell.window":
    "勝った直後に**{seconds}秒**の判断時間があります。決めなくても次のラウンドの間はそのまま持ち越され、ボードの下と「自分のカード」から操作できます。",
  "docs.howItWorks.keepSell.autoSell":
    "次のラウンドがロックされるまで決めなかった場合、そのカードはその時点の買い取りレートで**自動売却**されます。お金が宙に浮くことはありません。",

  // --- 8 · Glossary --------------------------------------------------------
  "docs.howItWorks.glossary.title": "用語集",
  "docs.howItWorks.glossary.change":
    "**端数**：次のパックを買うには足りない、タイル上のお金です。ポットと勝ったときの取り分には反映されますが、勝率を持つのは開封されたカードだけです。",
  "docs.howItWorks.glossary.house":
    "**ハウス（運営）**：カードの買い取りを支え、誰も引き取れないカードを吸収するボールトです。",
  "docs.howItWorks.glossary.chase":
    "**チェイス**：各プールの{cut}を原資とする積み上がり式のジャックポットです。特定のカードの結果ではなく、独立した抽選で発動します。",
  "docs.howItWorks.glossary.grail": "**Grail**：どのパックからも出うる、最も希少で最も高価なカードです。",
  "docs.howItWorks.glossary.buyback":
    "**買い取り**：カードをパックのティアに応じて価値の{low}から{high}で現金化できる、常設の買い取り価格です。",
  "docs.howItWorks.glossary.proRata": "**按分**：それぞれが出した金額の比率どおりに分けることです。",
  "docs.howItWorks.glossary.vrf": "**VRF**：後から誰でも検証できるランダム抽選です。",

  // --- 9 · Betting API -----------------------------------------------------
  "docs.howItWorks.api.title": "ベッティングAPI（限定公開）",
  "docs.howItWorks.api.what":
    "ライブのラウンドを読み取り、イベントストリームを購読し、コードやエージェントからベットを出せるプログラム向けAPIです。オッズと精算はボードと同じ仕組みで動きます。",
  "docs.howItWorks.api.access":
    "利用は**限定**で、申請制です。初期状態では無効になっており、すべての呼び出しに許可リスト登録済みのAPIキーが必要です。",
  "docs.howItWorks.api.realBets":
    "実際のベットを出すには、もう1つ確認が必要です。本人であることの証明（サイトと同じログイン）が求められ、ベット上限も全プレイヤーと同じものが適用されます。",
  "docs.howItWorks.api.contact": "{path}の開発者向けドキュメントを参照し、キーの申請は{email}までメールしてください。",
  "docs.how.controls.q": "How do I control a bet?",
  "docs.how.controls.a":
    "Open Gear to find grouped settings. On wide screens, each section can collapse. In Display, the landscape fullscreen toggle helps hide browser chrome where the browser allows it. The bet rail puts the full dollar total first, then the pack name and count. Tap the selected pack again to un-arm it without placing another bet.",
  "docs.how.chat.q": "Can I read table chat in my language?",
  "docs.how.chat.a":
    "Chat auto-translates bot and round messages into your selected language. Use \"show original\" on a translated line to see its source wording. Player-written messages stay as written.",
  "docs.how.collectors.q": "Where can I see the collector leaderboard?",
  "docs.how.collectors.a":
    "Open Ladder and choose Collectors. Top betters stays the first tab. Collectors ranks held cards by collection value and shows cards held, Grails pulled, and each collector's best pull.",
  "docs.how.replay.q": "Can I replay a finished round?",
  "docs.how.replay.a":
    "Yes. Open a finished round's replay to scrub from betting through the reveal, pause or restart it, and choose up to 5x speed.",

  "docs.tech.controls.title": "Settings, pack selection, and bet labels",
  "docs.tech.controls.body":
    "Gear groups Language, Betting, Display, Reveals, Sound, Auto-sell, and Hotkeys into sections. On wide screens each section can collapse, and the collapsed state is remembered. Display includes a landscape fullscreen toggle that requests the browser's supported chrome-free mode, with a compact-bar fallback on iPhone Safari. The bet rail makes the full dollar total the headline before the pack name and count. A pack button sets one exact pack choice; clicking that same selected pack again clears the armed choice and its persisted intent, so the next tile click cannot place that pack by accident.",
  "docs.tech.chat.title": "Chat translation and original copy",
  "docs.tech.chat.body":
    "Chat auto-translates keyed bot and table-event messages into the selected locale without rewriting the stored history. A translated row exposes a \"show original\" control that switches that row back to its source wording. Player-authored free text remains exactly as written when no translation service is available, so the feature never invents a translation.",
  "docs.tech.collectors.title": "Collector leaderboard",
  "docs.tech.collectors.body":
    "The Ladder surface keeps Top betters as its default tab and adds a Collectors tab. Collector rows rank the held cards in a player's collection by collection value and expose cards held, Grails pulled, and the best pull name with its value. The client builds the view from stored rounds, the local collection, and the signed-in profile, then keeps the player's row linked to their profile.",
  "docs.tech.replay.title": "Full-round replay speeds",
  "docs.tech.replay.body":
    "A finished round replay covers the recorded betting timeline and the reveal cinema on one playhead. Play, pause, seek, restart, and export remain available, with playback choices of 1x, 2x, 4x, and 5x. A speed click changes the playback rate for the timeline and the next reveal entry; it does not remount or rewrite a reveal already in progress.",

  "docs.nav.section.tools": "Tools",
  "docs.nav.page.controls": "Settings and controls",
  "docs.nav.page.chat": "Table chat",
  "docs.nav.page.collectors": "Collector leaderboard",
  "docs.nav.page.replay": "Round replay",

  "docs.howItWorks.tools.title": "Controls and extras",
  "docs.howItWorks.tools.controls":
    "Gear keeps the settings readable: wide layouts let you collapse sections, Display owns the landscape fullscreen toggle, and the bet rail leads with the full dollar total before the pack name and count. Tap the selected pack again to un-arm it.",
  "docs.howItWorks.tools.chat":
    "Chat auto-translates bot and round messages into your selected language. Use show original on a translated row to return to its source wording; player-written lines stay as written.",
  "docs.howItWorks.tools.collectors":
    "Ladder keeps Top betters first and adds Collectors as a second tab, ranking held cards by collection value with cards held, Grails pulled, and best-pull detail.",
  "docs.howItWorks.tools.replay":
    "Finished rounds replay from betting through the reveal with play, pause, seek, restart, and 1x, 2x, 4x, or 5x speed.",
} as Record<string, string>;
