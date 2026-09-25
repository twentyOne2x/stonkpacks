// Chinese, Traditional (繁體中文): "docs" segment - two surfaces:
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / numbers-stay-$-USD rules that apply to every
// locale.
//
// Interpolation tokens ({starter}, {take}, etc.) are always filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations) - never with translated text.
// "Grail" and "Mythic" also appear as plain prose words (not tokens) in this
// segment and stay in Latin script for the same brand-terms reason.
//
// BOLD EMPHASIS (docs.howItWorks.* only): those values carry inline `**bold**`
// markers the route renders as <b>. The marker pairs stay balanced but sit on
// whichever words carry the emphasis in Chinese. `**` has no meaning in the
// other docs.* keys.
//
// NO SOURCE-FILE CITATIONS (owner directive 2026-07-29): the per-file
// <code> chip under each Technical card was deleted from the component.
// Never reintroduce a file name, path or module into player copy.
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE ("零散資金"); do not reintroduce
// "Heat", a transliteration of it, or a gloss of it into any rendered value.
export default {
  "docs.header.title": "文件",
  "docs.header.back": "← 返回棋盤",

  "docs.tabs.ariaLabel": "文件檢視",
  "docs.tabs.how": "玩法說明",
  "docs.tabs.technical": "技術細節",

  "docs.how.intro": "通俗版說明，先讀這部分，再切到「技術細節」看具體機制。",
  "docs.technical.intro": "確切的機制，用清楚的數字說明。",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "什麼是 attn ROYALE？",
  "docs.how.whatIsRoyale.a":
    "一款即時開包遊戲。每回合玩家用卡包押注格子，回合一鎖定，被押注的格子當場拆包，其中一個格子的押注者平分整個獎池。",

  "docs.how.whatIsPack.q": "什麼是卡包？",
  "docs.how.whatIsPack.a":
    "一個明碼標價的檔位，格子開啟的瞬間就拆出一張真實的評級卡片。檔位從{starter}、{elite}、{legendary}、{grail}到{mythic}依次升級，卡包越大，拆出的卡片越值錢。",

  "docs.how.howBacking.q": "押注格子是怎麼運作的？",
  "docs.how.howBacking.a":
    "挑一個你看好的格子，用卡包押上去。別的玩家也押同一個格子，你們就一起分：你分到的比例，等於你自己投入的卡包占比。",

  "docs.how.heatRemainder.q": "投注湊不夠一整個卡包怎麼辦？",
  "docs.how.heatRemainder.a": "低於最便宜卡包價格的金額會作為零散資金留在格子上。它隨你的其餘下注一起放著，但在湊滿一整包之前不會自己開出卡牌，而決定機率的是已經開出的卡牌。",

  "docs.how.howWheelPicks.q": "轉盤怎麼選出獲勝者？",
  "docs.how.howWheelPicks.a":
    "鎖定時，每個有人下注的格子都會即時開包。轉盤隨後停在某一個格子上，該格子開出的卡牌越值錢，它在轉盤上佔的份額就越大。一張大牌就能讓一個小格子成為熱門。選擇本身來自可驗證的隨機抽取，絕不由人決定。",

  "docs.how.whatDoIWin.q": "我能贏到什麼？",
  "docs.how.whatDoIWin.aBefore": "獲勝格子的押注者平分的是",
  "docs.how.whatDoIWin.aEmphasis": "整輪獎池",
  "docs.how.whatDoIWin.aAfter":
    "，而不只是這個格子自己的投注，按各人在該格子上的投入比例分配。該格子最大的押注者，還優先拿到它拆出的最佳單張卡片。",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels used
  // elsewhere in the app - flagged for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "保留還是出售，區別在哪？",
  "docs.how.keepOrSell.keepLabel": "保留",
  "docs.how.keepOrSell.keepBody": "把卡片免費收進你的收藏。",
  "docs.how.keepOrSell.sellLabel": "回售",
  "docs.how.keepOrSell.sellBody": "按卡片價值的一部分立刻結算成USDC匯入你的餘額，不用等。",

  "docs.how.decisionTimeout.q": "沒來得及做決定會怎樣？",
  "docs.how.decisionTimeout.a":
    "你有一小段時間來選。超時沒選，卡片會按目前回購價自動回售，你贏來的東西不會被卡住。",

  "docs.how.whatIsChase.q": "什麼是追逐獎？",
  "docs.how.whatIsChase.a":
    "一個由每回合獎池的一小部分持續累積的獎金池。它可能在任何一個回合觸發，走的是自己獨立的抽取，抽到 grail 並不會觸發它。觸發時，整個獎金池會併入該回合的獲勝分成。",

  "docs.how.howToStartFree.q": "怎麼免費開始？",
  "docs.how.howToStartFree.a":
    "用邀請碼加入，即可領取一份相當於 Starter 卡包價值的免費餘額。不用錢包，也不用登入，直接以訪客身份開玩。",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "卡包檔位",
  "docs.tech.packLadder.body":
    "可購買的卡包有五種：{starter}、{elite}、{legendary}、{grail}、{mythic}。下注會按從大到小的順序，儘可能組成它付得起的最大卡包。低於最便宜卡包價格的剩餘部分會作為零散資金留在格子上，本身不會開出卡牌。以某個具體卡包下的注會保持為那一包，只有零散資金會隨著追加而向上合併。",

  "docs.tech.oddsWeighting.title": "決定機率的是格子開出的卡牌",
  "docs.tech.oddsWeighting.body":
    "一個格子的勝率並不取決於有人在它上面下了多少注。鎖定時每個已注資的格子都會開包，它在抽取中所佔的份額，是它剛開出的卡牌價值與本回合開出的全部卡牌價值之比。一張大牌就能讓小格子成為熱門。沒有開出任何卡牌的格子完全沒有機會，零散資金本身也永遠開不出卡牌。如果整個回合一張卡都沒開出來，就沒有可抽的對象：該回合作廢，所有下注全額退還。",

  "docs.tech.vrfDraw.title": "獲勝抽取由VRF提供種子，結果可復現",
  "docs.tech.vrfDraw.body":
    "每個回合都會從一套固定配方中導出一個可驗證的亂數：回合 ID、截止時間、已凍結的牌面、票數，以及鎖定之後取得的鏈上熵。獲勝格子來自這個亂數在各格子權重上的一次確定性行走。相同輸入永遠得出相同贏家，格子權重在行走之前就已公佈並鎖定，任何人事後都能憑回合憑據重新核驗整個抽取過程。",

  "docs.tech.settlementMath.title": "結算演算法",
  "docs.tech.settlementMath.body":
    "獲勝格子的下注者按各自在該格子上的投入比例，瓜分整個回合的獎池，而不只是自己格子的下注。先扣除{take}的平台抽成：{chaseCut}用於積累 The Chase 累積獎池，{protocolCut}用於支援協議。這筆抽成會盡量用卡牌支付，從多餘卡牌中最便宜的開始出售；價值太高、裝不進抽成額度的卡牌會被跳過而不是賣掉，所以被拿走的不會是大牌。只有卡牌無法覆蓋的部分才從獎池現金中支出。",

  "docs.tech.cardAllocation.title": "卡牌歸誰",
  "docs.tech.cardAllocation.body":
    "只有獲勝格子裡最好的那一張卡帶有保留或出售的選擇權，並歸該格子最大的下注者所有。該格子開出的其他卡牌，會按各人下注比例、從最好的開始分給下注者。拿走一張卡會從你自己的現金分成中扣掉它的回購價，所以這是一次交換而不是成本：無論怎麼選，你在回合結束時手上的價值都一樣。如果沒有人的分成能覆蓋某張卡，就由平台買下，這筆現金仍留在分成裡，因此絕不會把卡強塞給任何人。同一回合出現的第二張 grail 在這裡也沒有特殊待遇，會和其餘戰利品一起分配，而 The Chase 永遠不會拿走 grail。",

  "docs.tech.sellBackRates.title": "回售比例",
  "docs.tech.sellBackRates.body":
    "每張卡都有一個由它所屬卡包決定的常設回售價：入門檔{entryRate}，中間檔{midRate}，最高檔{topRate}。出售會立刻把這筆錢匯入你的餘額，而保留卡牌不需要任何費用。這些比率與 CollectorCrypt 為相同機台公佈的即時回購比率一致。",

  "docs.tech.chaseJackpot.title": "追逐獎累積獎金",
  "docs.tech.chaseJackpot.body":
    "一個由每回合獎池的{chaseCut}持續累積的獎金池。它透過自己獨立的抽取觸發，按正常回合節奏大約每週一次，抽到 grail 並不會觸發它。觸發時，整個獎金池會併入該回合的獲勝分成，隨後清零並重新積累。The Chase 在條件允許時每回合還會拿走一張卡，但只從落敗的格子拿，絕不拿本回合最值錢的卡，也絕不拿 grail。",

  "docs.tech.decisionWindow.title": "決策視窗",
  "docs.tech.decisionWindow.body": "贏得格子的主打卡牌會開啟一個{window}秒的保留或出售視窗。視窗關閉前、或下一回合鎖定前仍未作出選擇，卡牌會按當時的比率售出，這樣你贏到的東西絕不會被卡住。",

  "docs.tech.devnetCustody.title": "Devnet USDC 託管",
  "docs.tech.devnetCustody.body":
    "餘額變動都是 Solana devnet 上真實的USDC交易。託管走你的 Privy 內嵌錢包，或在其不可用時改用僅限 devnet、存在你自己瀏覽器裡的金鑰對，兩者簽的都是與正式環境完全相同的轉帳流程。",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "作廢與退款",
  "docs.tech.voidRefund.body":
    "回合只能靠開出的卡牌決出勝負，所以一個沒有任何格子開出卡牌的回合無從抽起。這樣的回合當場作廢：棋盤上的每一筆下注全額退回，平台分文不取，The Chase 也不會入帳。作廢回合公開的抽取記錄顯示卡牌總值為零，這就是作廢由棋盤強制發生、而非任何人選擇的證明。",

  "docs.tech.cardExits.title": "贏到的卡牌進你的錢包",
  "docs.tech.cardExits.body":
    "選擇保留，卡牌就會以簽名交易的形式轉進你自己的錢包，網路手續費由平台承擔。如果你的錢包暫時無法接收，投遞會先擱置並反覆重試直到送達，絕不會被丟棄。選擇回售，你拿到的就是贏下它那一刻鎖定的報價，絕不重新報價，而且這份報價只能行使一次：在資金移動之前它就被標記為已使用，同一張卡永遠不可能被支付兩次。",

  "docs.tech.deposits.title": "USDC入金",
  "docs.tech.deposits.body":
    "入金是一筆你在自己錢包裡簽名的 Solana 上的USDC轉帳。只有在這筆轉帳在鏈上確認進入遊戲金庫之後，你的餘額才會入帳，金額和收款方都從鏈本身讀取，絕不來自請求。每個交易簽名只能入帳一次，重複提交同一筆入金不可能重複入帳；超出單筆上限的轉帳會被記為應退還給你的欠款，而不是憑空消失。",

  "docs.tech.withdrawals.title": "USDC出金",
  "docs.tech.withdrawals.body":
    "出金先從你的餘額扣款，然後由金庫把USDC傳送到你批准的目的地：你的已驗證登入會對這筆金額和目的地本身簽名，與該證明不符的請求會被拒絕。收據會儲存交易簽名。如果鏈上最終拒絕了這筆轉帳，你的餘額只會被退回一次。如果轉帳已發出但尚未確認，在鏈給出最終答案之前不會退任何款，因此哪怕跨越一次重啟，出金也絕不可能付兩次。",

  "docs.tech.identity.title": "無論怎麼登入，帳戶只有一個",
  "docs.tech.identity.body":
    "用 Privy 登入，或者簽署一次性伺服器質詢來證明一個 Solana 錢包：兩條路都通向同一個持久帳戶，它只與已驗證的身份綁定，別無其他。所有動錢的操作都執行在當次請求中證明了自己的那個身份的帳戶上，自稱的名字、ID和請求標頭一律丟棄，所以沒有人能把入金、下注或出金指向別人的餘額。",

  "docs.tech.reconnect.title": "重連與重啟",
  "docs.tech.reconnect.body":
    "登出後錢就停了：在USDC軌道上，沒有所有權證明的入金、下注或出金都會被拒絕。重新登入，同一個帳戶還在等你，餘額和卡牌原封不動，因為你擁有的一切都記在持久帳本裡，而不是頁面裡。伺服器重啟會重放這份帳本並回到同樣的數字，已經發出的轉帳絕不會被再發一次。",

  "docs.nav.ariaLabel": "文件欄目",
  "docs.nav.overview": "總覽",
  "docs.nav.prev": "上一頁",
  "docs.nav.next": "下一頁",

  "docs.nav.section.introduction": "簡介",
  "docs.nav.section.gameplay": "玩法",
  "docs.nav.section.cards": "卡牌與託管",
  "docs.nav.section.money": "資金",
  "docs.nav.section.fairness": "公平性",
  "docs.nav.section.account": "帳戶",

  "docs.nav.page.whatIsRoyale": "attn ROYALE 是什麼",
  "docs.nav.page.packs": "卡包與階梯",
  "docs.nav.page.startFree": "免費開始",
  "docs.nav.page.backing": "在格子上下注",
  "docs.nav.page.theDraw": "抽取",
  "docs.nav.page.winning": "你能贏到什麼",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "保留還是出售",
  "docs.nav.page.cardAllocation": "卡牌歸誰",
  "docs.nav.page.sellBack": "回售比例",
  "docs.nav.page.cardDelivery": "卡牌投遞",
  "docs.nav.page.deposits": "入金",
  "docs.nav.page.withdrawals": "出金",
  "docs.nav.page.settlement": "結算演算法",
  "docs.nav.page.custody": "USDC託管",
  "docs.nav.page.odds": "決定機率的因素",
  "docs.nav.page.vrf": "VRF抽取",
  "docs.nav.page.voidRefund": "作廢與退款",
  "docs.nav.page.identity": "帳戶只有一個",
  "docs.nav.page.reconnect": "重連與重啟",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // Section titles render after a hardcoded "1 · " numeral prefix, so the
  // numbering never enters a value. Remember the `**bold**` convention.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE：每一分錢的去向",
  "docs.howItWorks.lead": "完整的遊戲規則：獲勝者怎麼抽出來，卡片又歸誰。",
  "docs.howItWorks.backToBoard": "返回棋盤 →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "一個回合怎麼打",
  "docs.howItWorks.round.pickBet":
    "先選投注額，再點格子：每點一次，就往這個格子的池子裡加這麼多。",
  "docs.howItWorks.round.yourShare":
    "你在一個格子裡的**份額** = 你的投注 ÷ 該格子總額。往一個{tile}的格子投{stake}，份額就是**{pct}**。這個格子贏了，你拿它派獎的{pct}。",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**勝率**在開包那一刻才決定，而不是下注時：回合鎖定後，每個有下注的格子都會開包，格子在轉盤上的份額，就是它剛開出的卡牌價值與本回合開出的全部卡牌之比。",
  "docs.howItWorks.round.tickets":
    "**沒開出任何卡牌**的格子沒有任何份額；如果整個回合一張卡都沒開出來，該回合**作廢**，所有下注全額退回。",
  "docs.howItWorks.round.vrf":
    "鎖定時，**VRF**（可驗證隨機函式）會從本回合鎖定的資料裡抽出一張中獎票：回合ID、截止時間、各格子總額、總票數。誰都左右不了它，莊家也不行。",
  "docs.howItWorks.round.oddsAreReal": "格子上顯示的勝率就是這套抽取演算法算出來的，不是隨便定的。",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "你的投注買到什麼",
  "docs.howItWorks.buys.ladderLead": "格子的總額會重新組成卡包，從最大的開始：",
  "docs.howItWorks.buys.example":
    "舉例：**{amount}**的格子能買到一個 Legendary、一個 Elite 和一個 Starter。",
  "docs.howItWorks.buys.change":
    "湊不夠下一檔卡包的錢算**零散資金**：照樣計入池子，也算進你贏時的分成，但它不開卡包，而決定勝率的是開出的卡牌。",
  "docs.howItWorks.buys.mythicUpgrade":
    "已經有一個 Mythic 了？升級按鈕會直接瞄準**再來一個完整的 Mythic**，而不是更小的卡包。檔位只升不降。",
  "docs.howItWorks.buys.cardsPerPack":
    "鎖定時，每個有資金的格子按**每個完整卡包開一張卡**，棋盤上最多顯示**{max}張**（其餘在結果頁列出）。只有零散資金的格子什麼也開不出。",
  "docs.howItWorks.buys.undeliverable":
    "如果某個卡包確實交付不了（售罄、技術故障、超時），它的費用會以現金退回給你，不會卡住。",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "獲勝方能拿到什麼",
  "docs.howItWorks.winner.entirePool":
    "獲勝格子的押注者平分**整輪獎池**，而不只是這個格子自己的池子。",
  "docs.howItWorks.winner.proRata":
    "分配**按投入比例**：佔該格子{pct}，就拿派獎的**{pct}**。",
  "docs.howItWorks.winner.take":
    "每個獎池在分配前先抽走**{take}**：**{chaseCut}**注入追逐獎累積獎金，**{protocolCut}**用於協議方（邀請獎勵、追逐獎收卡、營運、代幣回購）。",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "這{take}會盡量用卡牌支付，從多餘卡牌中最便宜的開始；價值太高、裝不進抽成額度的卡牌會被跳過而不是賣掉，所以被拿走的不會是大牌。只有卡牌覆蓋不了的部分才從獎池現金裡出。",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "追逐獎",
  "docs.howItWorks.chase.feed": "追逐獎是一筆滾動累積的獎金，每個獎池都拿**{cut}**注入它。",
  "docs.howItWorks.chase.cardCut":
    "條件允許時，追逐獎會用卡片而不是現金抽成，但只收落選格子裡價值**不超過獎池{cut}**的卡，絕不會收本回合最值錢的那一張，也絕不會收 Grail。",
  "docs.howItWorks.chase.independentDraw":
    "累積獎金靠自己**獨立的隨機抽取**觸發，按常規回合速度平均**約每週一次**。拆出 Grail 不會觸發它。",
  "docs.howItWorks.chase.payout":
    "一旦觸發，**全部累積獎金**併入該回合的獲勝分配，隨後清零，從下一回合的注入重新累積。",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail 卡",
  "docs.howItWorks.grails.what":
    "**Grail** 是任何卡包都可能拆出的最稀有、最值錢的卡。哪怕是{price}的 Starter 也能中。",
  "docs.howItWorks.grails.headlineGrail":
    "如果獲勝格子的頭號卡片是 Grail：選**保留**，最大押注者要買斷其他押注者在這張卡上的份額（從他們的現金裡扣）；選**出售**，所得**按比例分給整個格子**，而不只歸最大押注者。",
  "docs.howItWorks.grails.otherGrails":
    "本回合拆出的其他 Grail（在別的格子上，或作為額外卡片），都算獲勝押注者的額外戰利品，處理方式與其他額外卡片完全一樣。它絕不會被收進追逐獎；而且抽成從最便宜的卡開始付，Grail 是它最後才可能碰到的一張。",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "卡片歸誰",
  "docs.howItWorks.cards.headline":
    "獲勝格子的**頭號卡片**（價值最高的那張）只歸該格子最大的押注者：可以免費保留，也可以按回購價賣成現金，這筆錢全歸他，不和格子裡其他人分。",
  "docs.howItWorks.cards.rest":
    "格子拆出的其餘卡片，加上從落選格子轉來的戰利品，按投注比例、從最值錢的開始依次分配。最大的押注者通常拿得最多，也最好。",
  "docs.howItWorks.cards.deduction":
    "領走其中一張卡，會從你分到的現金裡扣掉它的回購價。這和你賣掉它拿到的錢一樣多，所以你不虧。",
  "docs.howItWorks.cards.neverForced":
    "拿不出這筆錢？沒人會硬塞給你。莊家會接手買下，這筆現金仍然留在分配裡。",
  "docs.howItWorks.cards.workedExample":
    "**實例演算。**獎池{pool}。先扣走**{take}**（{takeAmount}：追逐獎{chaseAmount}，協議方{protocolAmount}），這筆錢通常由一張多餘的卡片支付，而不是動你的現金。剩下**{split}**用於分配：你佔該格子的{yourPct}（{yourStake}），Sam佔{samPct}（{samStake}）。格子拆出一張{headline}的頭號卡片（Legendary 卡包，回購價**{buyback}**）和一張{extra}的額外卡片。{headline}那張你免費保留，反正它本來就是你的。{extra}那張歸Sam：它的**{buyback}**，也就是**{samCash}**，從Sam的分配裡扣。最終：你帶走**{yourStake}現金 + {headline}的那張卡**；Sam拿到**{samCash}現金 + {extra}的那張卡**。",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "保留還是出售",
  "docs.howItWorks.keepSell.buttons":
    "每張到手的卡都帶兩個按鈕：**保留**把評級卡收進你的收藏；**出售**按該卡包的回購價結算成USDC，直接進入你的餘額。",
  "docs.howItWorks.keepSell.usdc": "USDC 是數位美元：**{rate}**。",
  "docs.howItWorks.keepSell.rates":
    "回購價由卡片所屬的卡包決定：Starter/Elite 為**{entryRate}**，Legendary 為**{midRate}**，Grail 及以上為**{topRate}**。",
  "docs.howItWorks.keepSell.window":
    "贏下之後你有**{seconds}秒**的決定時間；沒決定也不要緊，它會一路延續到下一整個回合，在棋盤下方和「你的卡片」裡都能操作。",
  "docs.howItWorks.keepSell.autoSell":
    "下一回合鎖定時還沒決定？卡片會按回購價**自動出售**。錢永遠不會卡住。",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "名詞表",
  "docs.howItWorks.glossary.change":
    "**零散資金**：格子上不夠買下一檔卡包的錢。計入池子，也算進你贏時的分成，但只有開出的卡牌才帶勝率。",
  "docs.howItWorks.glossary.house":
    "**莊家**：出資回購卡片、並接手沒人買得起的卡片的金庫。",
  "docs.howItWorks.glossary.chase":
    "**追逐獎**：由每個獎池的{cut}持續注入的滾動獎金；靠自己獨立的抽取觸發，與開出什麼卡無關。",
  "docs.howItWorks.glossary.grail": "**Grail**：任何卡包都可能開出的最稀有、最值錢的卡。",
  "docs.howItWorks.glossary.buyback":
    "**回購**：隨時可按卡片價值的{low}到{high}把它變現，具體比例看卡包檔位。",
  "docs.howItWorks.glossary.proRata": "**按比例分配**：誰投得多誰分得多，嚴格按投入比例。",
  "docs.howItWorks.glossary.vrf": "**VRF**：事後誰都能驗證的隨機抽取。",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "投注API（定向開放）",
  "docs.howItWorks.api.what":
    "一套程式化介面，可以讀取進行中的回合、訂閱事件流，並用程式碼或 AI 代理下注。它跑的是與棋盤完全相同的勝率和結算邏輯。",
  "docs.howItWorks.api.access":
    "介面**不對外開放**，僅接受申請：預設關閉，每次呼叫都需要白名單API金鑰。",
  "docs.howItWorks.api.realBets":
    "真實下注還要多一道校驗：證明確實是你本人（與網站相同的登入），並遵守與所有玩家一致的下注上限。",
  "docs.howItWorks.api.contact": "開發者文件見{path}，申請金鑰請寄電子郵件至{email}。",
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
