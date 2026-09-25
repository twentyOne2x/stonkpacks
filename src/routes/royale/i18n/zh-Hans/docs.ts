// Chinese, Simplified (简体中文): "docs" segment - two surfaces:
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
// The mechanic is described as LOOSE CHANGE ("零散资金"); do not reintroduce
// "Heat", a transliteration of it, or a gloss of it into any rendered value.
export default {
  "docs.header.title": "文档",
  "docs.header.back": "← 返回棋盘",

  "docs.tabs.ariaLabel": "文档视图",
  "docs.tabs.how": "玩法说明",
  "docs.tabs.technical": "技术细节",

  "docs.how.intro": "通俗版说明，先读这部分，再切到“技术细节”看具体机制。",
  "docs.technical.intro": "确切的机制，用清楚的数字说明。",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "什么是 attn ROYALE？",
  "docs.how.whatIsRoyale.a":
    "一款实时开包游戏。每回合玩家用卡包押注格子，回合一锁定，被押注的格子当场拆包，其中一个格子的押注者平分整个奖池。",

  "docs.how.whatIsPack.q": "什么是卡包？",
  "docs.how.whatIsPack.a":
    "一个明码标价的档位，格子开启的瞬间就拆出一张真实的评级卡片。档位从{starter}、{elite}、{legendary}、{grail}到{mythic}依次升级，卡包越大，拆出的卡片越值钱。",

  "docs.how.howBacking.q": "押注格子是怎么运作的？",
  "docs.how.howBacking.a":
    "挑一个你看好的格子，用卡包押上去。别的玩家也押同一个格子，你们就一起分：你分到的比例，等于你自己投入的卡包占比。",

  "docs.how.heatRemainder.q": "投注凑不够一整个卡包怎么办？",
  "docs.how.heatRemainder.a": "低于最便宜卡包价格的金额会作为零散资金留在格子上。它随你的其余下注一起放着，但在攒够一整包之前不会自己开出卡牌，而决定概率的是已经开出的卡牌。",

  "docs.how.howWheelPicks.q": "转盘怎么选出获胜者？",
  "docs.how.howWheelPicks.a":
    "锁定时，每个有人下注的格子都会实时开包。转盘随后停在某一个格子上，该格子开出的卡牌越值钱，它在转盘上占的份额就越大。一张大牌就能让一个小格子成为热门。选择本身来自可验证的随机抽取，绝不由人决定。",

  "docs.how.whatDoIWin.q": "我能赢到什么？",
  "docs.how.whatDoIWin.aBefore": "获胜格子的押注者平分的是",
  "docs.how.whatDoIWin.aEmphasis": "整轮奖池",
  "docs.how.whatDoIWin.aAfter":
    "，而不只是这个格子自己的投注，按各人在该格子上的投入比例分配。该格子最大的押注者，还优先拿到它拆出的最佳单张卡片。",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels used
  // elsewhere in the app - flagged for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "保留还是出售，区别在哪？",
  "docs.how.keepOrSell.keepLabel": "保留",
  "docs.how.keepOrSell.keepBody": "把卡片免费收进你的收藏。",
  "docs.how.keepOrSell.sellLabel": "回售",
  "docs.how.keepOrSell.sellBody": "按卡片价值的一部分立刻结算成USDC打进你的余额，不用等。",

  "docs.how.decisionTimeout.q": "没来得及做决定会怎样？",
  "docs.how.decisionTimeout.a":
    "你有一小段时间来选。超时没选，卡片会按当前回购价自动回售，你赢来的东西不会被卡住。",

  "docs.how.whatIsChase.q": "什么是追逐奖？",
  "docs.how.whatIsChase.a":
    "一个由每回合奖池的一小部分持续累积的奖金池。它可能在任何一个回合触发，走的是自己独立的抽取，抽到 grail 并不会触发它。触发时，整个奖金池会并入该回合的获胜分成。",

  "docs.how.howToStartFree.q": "怎么免费开始？",
  "docs.how.howToStartFree.a":
    "用邀请码加入，即可领取一份相当于 Starter 卡包价值的免费余额。不用钱包，也不用登录，直接以访客身份开玩。",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "卡包档位",
  "docs.tech.packLadder.body":
    "可购买的卡包有五种：{starter}、{elite}、{legendary}、{grail}、{mythic}。下注会按从大到小的顺序，尽可能组成它付得起的最大卡包。低于最便宜卡包价格的剩余部分会作为零散资金留在格子上，本身不会开出卡牌。以某个具体卡包下的注会保持为那一包，只有零散资金会随着追加而向上合并。",

  "docs.tech.oddsWeighting.title": "决定概率的是格子开出的卡牌",
  "docs.tech.oddsWeighting.body":
    "一个格子的胜率并不取决于有人在它上面下了多少注。锁定时每个已注资的格子都会开包，它在抽取中所占的份额，是它刚开出的卡牌价值与本回合开出的全部卡牌价值之比。一张大牌就能让小格子成为热门。没有开出任何卡牌的格子完全没有机会，零散资金本身也永远开不出卡牌。如果整个回合一张卡都没开出来，就没有可抽的对象：该回合作废，所有下注全额退还。",

  "docs.tech.vrfDraw.title": "获胜抽取由VRF提供种子，结果可复现",
  "docs.tech.vrfDraw.body":
    "每个回合都会从一套固定配方中导出一个可验证的随机数：回合 ID、截止时间、已冻结的牌面、票数，以及锁定之后取得的链上熵。获胜格子来自这个随机数在各格子权重上的一次确定性行走。相同输入永远得出相同赢家，格子权重在行走之前就已公布并锁定，任何人事后都能凭回合凭据重新核验整个抽取过程。",

  "docs.tech.settlementMath.title": "结算算法",
  "docs.tech.settlementMath.body":
    "获胜格子的下注者按各自在该格子上的投入比例，瓜分整个回合的奖池，而不只是自己格子的下注。先扣除{take}的平台抽成：{chaseCut}用于积累 The Chase 累积奖池，{protocolCut}用于支持协议。这笔抽成会尽量用卡牌支付，从多余卡牌中最便宜的开始出售；价值太高、装不进抽成额度的卡牌会被跳过而不是卖掉，所以被拿走的不会是大牌。只有卡牌无法覆盖的部分才从奖池现金中支出。",

  "docs.tech.cardAllocation.title": "卡牌归谁",
  "docs.tech.cardAllocation.body":
    "只有获胜格子里最好的那一张卡带有保留或出售的选择权，并归该格子最大的下注者所有。该格子开出的其他卡牌，会按各人下注比例、从最好的开始分给下注者。拿走一张卡会从你自己的现金分成中扣掉它的回购价，所以这是一次交换而不是成本：无论怎么选，你在回合结束时手上的价值都一样。如果没有人的分成能覆盖某张卡，就由平台买下，这笔现金仍留在分成里，因此绝不会把卡强塞给任何人。同一回合出现的第二张 grail 在这里也没有特殊待遇，会和其余战利品一起分配，而 The Chase 永远不会拿走 grail。",

  "docs.tech.sellBackRates.title": "回售比例",
  "docs.tech.sellBackRates.body":
    "每张卡都有一个由它所属卡包决定的常设回售价：入门档{entryRate}，中间档{midRate}，最高档{topRate}。出售会立刻把这笔钱打进你的余额，而保留卡牌不需要任何费用。这些比率与 CollectorCrypt 为相同机台公布的即时回购比率一致。",

  "docs.tech.chaseJackpot.title": "追逐奖累积奖金",
  "docs.tech.chaseJackpot.body":
    "一个由每回合奖池的{chaseCut}持续累积的奖金池。它通过自己独立的抽取触发，按正常回合节奏大约每周一次，抽到 grail 并不会触发它。触发时，整个奖金池会并入该回合的获胜分成，随后清零并重新积累。The Chase 在条件允许时每回合还会拿走一张卡，但只从落败的格子拿，绝不拿本回合最值钱的卡，也绝不拿 grail。",

  "docs.tech.decisionWindow.title": "决策窗口",
  "docs.tech.decisionWindow.body": "赢得格子的主打卡牌会开启一个{window}秒的保留或出售窗口。窗口关闭前、或下一回合锁定前仍未作出选择，卡牌会按当时的比率售出，这样你赢到的东西绝不会被卡住。",

  "docs.tech.devnetCustody.title": "Devnet USDC 托管",
  "docs.tech.devnetCustody.body":
    "余额变动都是 Solana devnet 上真实的USDC交易。托管走你的 Privy 内嵌钱包，或在其不可用时回退到仅限 devnet、存在你自己浏览器里的密钥对，两者签的都是与正式环境完全相同的转账流程。",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "作废与退款",
  "docs.tech.voidRefund.body":
    "回合只能靠开出的卡牌决出胜负，所以一个没有任何格子开出卡牌的回合无从抽起。这样的回合当场作废：棋盘上的每一笔下注全额退回，平台分文不取，The Chase 也不会入账。作废回合公开的抽取记录显示卡牌总值为零，这就是作废由棋盘强制发生、而非任何人选择的证明。",

  "docs.tech.cardExits.title": "赢到的卡牌进你的钱包",
  "docs.tech.cardExits.body":
    "选择保留，卡牌就会以签名交易的形式转进你自己的钱包，网络手续费由平台承担。如果你的钱包暂时无法接收，投递会挂起并反复重试直到送达，绝不会被丢弃。选择回售，你拿到的就是赢下它那一刻锁定的报价，绝不重新报价，而且这份报价只能行使一次：在资金移动之前它就被标记为已使用，同一张卡永远不可能被支付两次。",

  "docs.tech.deposits.title": "USDC入金",
  "docs.tech.deposits.body":
    "入金是一笔你在自己钱包里签名的 Solana 上的USDC转账。只有在这笔转账在链上确认进入游戏金库之后，你的余额才会入账，金额和收款方都从链本身读取，绝不来自请求。每个交易签名只能入账一次，重复提交同一笔入金不可能重复入账；超出单笔上限的转账会被记为应退还给你的欠款，而不是凭空消失。",

  "docs.tech.withdrawals.title": "USDC出金",
  "docs.tech.withdrawals.body":
    "出金先从你的余额扣款，然后由金库把USDC发送到你批准的目的地：你的已验证登录会对这笔金额和目的地本身签名，与该证明不符的请求会被拒绝。回执会保存交易签名。如果链上最终拒绝了这笔转账，你的余额只会被退回一次。如果转账已发出但尚未确认，在链给出最终答案之前不会退任何款，因此哪怕跨越一次重启，出金也绝不可能付两次。",

  "docs.tech.identity.title": "无论怎么登录，账户只有一个",
  "docs.tech.identity.body":
    "用 Privy 登录，或者签署一次性服务器质询来证明一个 Solana 钱包：两条路都通向同一个持久账户，它只与已验证的身份绑定，别无其他。所有动钱的操作都运行在当次请求中证明了自己的那个身份的账户上，自称的名字、ID和请求头一律丢弃，所以没有人能把入金、下注或出金指向别人的余额。",

  "docs.tech.reconnect.title": "重连与重启",
  "docs.tech.reconnect.body":
    "登出后钱就停了：在USDC轨道上，没有所有权证明的入金、下注或出金都会被拒绝。重新登录，同一个账户还在等你，余额和卡牌原封不动，因为你拥有的一切都记在持久账本里，而不是页面里。服务器重启会重放这份账本并回到同样的数字，已经发出的转账绝不会被再发一次。",

  "docs.nav.ariaLabel": "文档栏目",
  "docs.nav.overview": "总览",
  "docs.nav.prev": "上一页",
  "docs.nav.next": "下一页",

  "docs.nav.section.introduction": "简介",
  "docs.nav.section.gameplay": "玩法",
  "docs.nav.section.cards": "卡牌与托管",
  "docs.nav.section.money": "资金",
  "docs.nav.section.fairness": "公平性",
  "docs.nav.section.account": "账户",

  "docs.nav.page.whatIsRoyale": "attn ROYALE 是什么",
  "docs.nav.page.packs": "卡包与阶梯",
  "docs.nav.page.startFree": "免费开始",
  "docs.nav.page.backing": "在格子上下注",
  "docs.nav.page.theDraw": "抽取",
  "docs.nav.page.winning": "你能赢到什么",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "保留还是出售",
  "docs.nav.page.cardAllocation": "卡牌归谁",
  "docs.nav.page.sellBack": "回售比例",
  "docs.nav.page.cardDelivery": "卡牌投递",
  "docs.nav.page.deposits": "入金",
  "docs.nav.page.withdrawals": "出金",
  "docs.nav.page.settlement": "结算算法",
  "docs.nav.page.custody": "USDC托管",
  "docs.nav.page.odds": "决定概率的因素",
  "docs.nav.page.vrf": "VRF抽取",
  "docs.nav.page.voidRefund": "作废与退款",
  "docs.nav.page.identity": "账户只有一个",
  "docs.nav.page.reconnect": "重连与重启",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // Section titles render after a hardcoded "1 · " numeral prefix, so the
  // numbering never enters a value. Remember the `**bold**` convention.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE：每一分钱的去向",
  "docs.howItWorks.lead": "完整的游戏规则：获胜者怎么抽出来，卡片又归谁。",
  "docs.howItWorks.backToBoard": "返回棋盘 →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "一个回合怎么打",
  "docs.howItWorks.round.pickBet":
    "先选投注额，再点格子：每点一次，就往这个格子的池子里加这么多。",
  "docs.howItWorks.round.yourShare":
    "你在一个格子里的**份额** = 你的投注 ÷ 该格子总额。往一个{tile}的格子投{stake}，份额就是**{pct}**。这个格子赢了，你拿它派奖的{pct}。",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**胜率**在开包那一刻才决定，而不是下注时：回合锁定后，每个有下注的格子都会开包，格子在转盘上的份额，就是它刚开出的卡牌价值与本回合开出的全部卡牌之比。",
  "docs.howItWorks.round.tickets":
    "**没开出任何卡牌**的格子没有任何份额；如果整个回合一张卡都没开出来，该回合**作废**，所有下注全额退回。",
  "docs.howItWorks.round.vrf":
    "锁定时，**VRF**（可验证随机函数）会从本回合锁定的数据里抽出一张中奖票：回合ID、截止时间、各格子总额、总票数。谁都左右不了它，庄家也不行。",
  "docs.howItWorks.round.oddsAreReal": "格子上显示的胜率就是这套抽取算法算出来的，不是拍脑袋。",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "你的投注买到什么",
  "docs.howItWorks.buys.ladderLead": "格子的总额会重新组成卡包，从最大的开始：",
  "docs.howItWorks.buys.example":
    "举例：**{amount}**的格子能买到一个 Legendary、一个 Elite 和一个 Starter。",
  "docs.howItWorks.buys.change":
    "凑不够下一档卡包的钱算**零散资金**：照样计入池子，也算进你赢时的分成，但它不开卡包，而决定胜率的是开出的卡牌。",
  "docs.howItWorks.buys.mythicUpgrade":
    "已经有一个 Mythic 了？升级按钮会直接瞄准**再来一个完整的 Mythic**，而不是更小的卡包。档位只升不降。",
  "docs.howItWorks.buys.cardsPerPack":
    "锁定时，每个有资金的格子按**每个完整卡包开一张卡**，棋盘上最多显示**{max}张**（其余在结果页列出）。只有零散资金的格子什么也开不出。",
  "docs.howItWorks.buys.undeliverable":
    "如果某个卡包确实交付不了（售罄、技术故障、超时），它的费用会以现金退回给你，不会卡住。",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "获胜方能拿到什么",
  "docs.howItWorks.winner.entirePool":
    "获胜格子的押注者平分**整轮奖池**，而不只是这个格子自己的池子。",
  "docs.howItWorks.winner.proRata":
    "分配**按投入比例**：占该格子{pct}，就拿派奖的**{pct}**。",
  "docs.howItWorks.winner.take":
    "每个奖池在分配前先抽走**{take}**：**{chaseCut}**注入追逐奖累积奖金，**{protocolCut}**用于协议方（邀请奖励、追逐奖收卡、运营、代币回购）。",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "这{take}会尽量用卡牌支付，从多余卡牌中最便宜的开始；价值太高、装不进抽成额度的卡牌会被跳过而不是卖掉，所以被拿走的不会是大牌。只有卡牌覆盖不了的部分才从奖池现金里出。",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "追逐奖",
  "docs.howItWorks.chase.feed": "追逐奖是一笔滚动累积的奖金，每个奖池都拿**{cut}**注入它。",
  "docs.howItWorks.chase.cardCut":
    "条件允许时，追逐奖会用卡片而不是现金抽成，但只收落选格子里价值**不超过奖池{cut}**的卡，绝不会收本回合最值钱的那一张，也绝不会收 Grail。",
  "docs.howItWorks.chase.independentDraw":
    "累积奖金靠自己**独立的随机抽取**触发，按常规回合速度平均**约每周一次**。拆出 Grail 不会触发它。",
  "docs.howItWorks.chase.payout":
    "一旦触发，**全部累积奖金**并入该回合的获胜分配，随后清零，从下一回合的注入重新累积。",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail 卡",
  "docs.howItWorks.grails.what":
    "**Grail** 是任何卡包都可能拆出的最稀有、最值钱的卡。哪怕是{price}的 Starter 也能中。",
  "docs.howItWorks.grails.headlineGrail":
    "如果获胜格子的头号卡片是 Grail：选**保留**，最大押注者要买断其他押注者在这张卡上的份额（从他们的现金里扣）；选**出售**，所得**按比例分给整个格子**，而不只归最大押注者。",
  "docs.howItWorks.grails.otherGrails":
    "本回合拆出的其他 Grail（在别的格子上，或作为额外卡片），都算获胜押注者的额外战利品，处理方式与其他额外卡片完全一样。它绝不会被收进追逐奖；而且抽成从最便宜的卡开始付，Grail 是它最后才可能碰到的一张。",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "卡片归谁",
  "docs.howItWorks.cards.headline":
    "获胜格子的**头号卡片**（价值最高的那张）只归该格子最大的押注者：可以免费保留，也可以按回购价卖成现金，这笔钱全归他，不和格子里其他人分。",
  "docs.howItWorks.cards.rest":
    "格子拆出的其余卡片，加上从落选格子转来的战利品，按投注比例、从最值钱的开始依次分配。最大的押注者通常拿得最多，也最好。",
  "docs.howItWorks.cards.deduction":
    "领走其中一张卡，会从你分到的现金里扣掉它的回购价。这和你卖掉它拿到的钱一样多，所以你不亏。",
  "docs.howItWorks.cards.neverForced":
    "拿不出这笔钱？没人会硬塞给你。庄家会接手买下，这笔现金仍然留在分配里。",
  "docs.howItWorks.cards.workedExample":
    "**实例演算。**奖池{pool}。先扣走**{take}**（{takeAmount}：追逐奖{chaseAmount}，协议方{protocolAmount}），这笔钱通常由一张多余的卡片支付，而不是动你的现金。剩下**{split}**用于分配：你占该格子的{yourPct}（{yourStake}），Sam占{samPct}（{samStake}）。格子拆出一张{headline}的头号卡片（Legendary 卡包，回购价**{buyback}**）和一张{extra}的额外卡片。{headline}那张你免费保留，反正它本来就是你的。{extra}那张归Sam：它的**{buyback}**，也就是**{samCash}**，从Sam的分配里扣。最终：你带走**{yourStake}现金 + {headline}的那张卡**；Sam拿到**{samCash}现金 + {extra}的那张卡**。",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "保留还是出售",
  "docs.howItWorks.keepSell.buttons":
    "每张到手的卡都带两个按钮：**保留**把评级卡收进你的收藏；**出售**按该卡包的回购价结算成USDC，直接进入你的余额。",
  "docs.howItWorks.keepSell.usdc": "USDC 是数字美元：**{rate}**。",
  "docs.howItWorks.keepSell.rates":
    "回购价由卡片所属的卡包决定：Starter/Elite 为**{entryRate}**，Legendary 为**{midRate}**，Grail 及以上为**{topRate}**。",
  "docs.howItWorks.keepSell.window":
    "赢下之后你有**{seconds}秒**的决定时间；没决定也不要紧，它会一路延续到下一整个回合，在棋盘下方和“你的卡片”里都能操作。",
  "docs.howItWorks.keepSell.autoSell":
    "下一回合锁定时还没决定？卡片会按回购价**自动出售**。钱永远不会卡住。",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "名词表",
  "docs.howItWorks.glossary.change":
    "**零散资金**：格子上不够买下一档卡包的钱。计入池子，也算进你赢时的分成，但只有开出的卡牌才带胜率。",
  "docs.howItWorks.glossary.house":
    "**庄家**：出资回购卡片、并接手没人买得起的卡片的金库。",
  "docs.howItWorks.glossary.chase":
    "**追逐奖**：由每个奖池的{cut}持续注入的滚动奖金；靠自己独立的抽取触发，与开出什么卡无关。",
  "docs.howItWorks.glossary.grail": "**Grail**：任何卡包都可能开出的最稀有、最值钱的卡。",
  "docs.howItWorks.glossary.buyback":
    "**回购**：随时可按卡片价值的{low}到{high}把它变现，具体比例看卡包档位。",
  "docs.howItWorks.glossary.proRata": "**按比例分配**：谁投得多谁分得多，严格按投入比例。",
  "docs.howItWorks.glossary.vrf": "**VRF**：事后谁都能验证的随机抽取。",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "投注API（定向开放）",
  "docs.howItWorks.api.what":
    "一套程序化接口，可以读取进行中的回合、订阅事件流，并用代码或智能体下注。它跑的是与棋盘完全相同的胜率和结算逻辑。",
  "docs.howItWorks.api.access":
    "接口**不对外开放**，仅接受申请：默认关闭，每次调用都需要白名单API密钥。",
  "docs.howItWorks.api.realBets":
    "真实下注还要多一道校验：证明确实是你本人（与网站相同的登录），并遵守与所有玩家一致的下注上限。",
  "docs.howItWorks.api.contact": "开发者文档见{path}，申请密钥请发邮件至{email}。",
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
