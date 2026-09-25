// Korean (한국어): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts. See royaleI18n.ts's file header for the {token}
// interpolation convention and the no-em-dash / brand-terms-stay-English /
// numbers-stay-$-USD rules that apply to every locale.
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the ten locales stay in key parity; key names are never rendered. The Korean word is 잔돈.
//
// Pack tier names
// (Starter/Elite/Legendary/Grail/Mythic) stay in Latin script wherever they
// appear, whether as a literal word or filled into a {token}, including
// mid-sentence and in the Grails section title.
//
// BOLD EMPHASIS (docs.howItWorks.* only): `**bold**` markers render as <b>.
// The pairs stay balanced but sit on whichever words carry the emphasis in
// Korean, which is rarely the same span as in English.
export default {
  "docs.header.title": "문서",
  "docs.header.back": "← 보드로 돌아가기",

  "docs.tabs.ariaLabel": "문서 보기",
  "docs.tabs.how": "게임 방법",
  "docs.tabs.technical": "기술 정보",

  "docs.how.intro": "쉽게 풀어 쓴 설명입니다. 먼저 이 내용을 읽고, 정확한 작동 방식이 궁금하면 기술 정보 탭을 확인하세요.",
  "docs.technical.intro": "실제 작동 방식을 숫자 그대로 정리했습니다.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "attn ROYALE란 무엇인가요?",
  "docs.how.whatIsRoyale.a":
    "실시간 팩 개봉 게임입니다. 매 라운드 플레이어들이 팩으로 타일에 베팅하고, 라운드가 잠기면 베팅된 타일이 모두 실시간으로 팩을 개봉합니다. 그중 한 타일에 건 사람들이 전체 팟을 나눠 갖습니다.",

  "docs.how.whatIsPack.q": "팩이란 무엇인가요?",
  "docs.how.whatIsPack.a":
    "타일이 열리는 순간 실제 그레이딩 카드 한 장으로 개봉되는 가격대별 등급입니다. 등급은 {starter}, {elite}, {legendary}, {grail}, {mythic} 순으로 올라갑니다. 팩이 클수록 더 좋은 카드가 나옵니다.",

  "docs.how.howBacking.q": "타일에 베팅하는 방식은 어떻게 되나요?",
  "docs.how.howBacking.a":
    "마음에 드는 타일을 골라 팩을 거세요. 같은 타일에 다른 플레이어와 함께 걸면 몫을 나누게 되며, 그 타일이 이겼을 때 받는 몫은 내가 직접 올린 팩의 비중과 같습니다.",

  "docs.how.heatRemainder.q": "베팅 금액이 팩 한 개 가격에 못 미치면 어떻게 되나요?",
  "docs.how.heatRemainder.a":
    "가장 싼 팩 가격에 못 미치는 금액은 잔돈으로 타일에 남습니다. 나머지 베팅과 함께 놓이지만 한 팩이 될 때까지 자체적으로 카드를 개봉하지 않으며, 확률을 결정하는 것은 개봉된 카드입니다.",

  "docs.how.howWheelPicks.q": "휠은 어떻게 승자를 정하나요?",
  "docs.how.howWheelPicks.a":
    "잠금 시점에 베팅된 모든 타일이 팩을 실시간으로 개봉합니다. 그다음 휠이 한 타일에 멈추는데, 그 타일이 개봉한 카드의 가치가 클수록 휠에서 차지하는 몫도 커집니다. 큰 카드 한 장이면 작은 타일도 유력 후보가 됩니다. 선택 자체는 검증 가능한 무작위 추첨으로 이뤄지며 사람이 개입하지 않습니다.",

  "docs.how.whatDoIWin.q": "무엇을 얻나요?",
  "docs.how.whatDoIWin.aBefore": "승리한 타일에 건 사람들이",
  "docs.how.whatDoIWin.aEmphasis": "라운드 전체 팟",
  "docs.how.whatDoIWin.aAfter":
    "을 나눠 갖습니다. 그 타일에 걸린 베팅만이 아니라, 각자 건 비중에 따라 나눕니다. 또한 그 타일에 가장 많이 건 사람은 타일에서 나온 가장 좋은 카드 한 장을 먼저 가져갑니다.",

  "docs.how.keepOrSell.q": "보관과 판매는 무엇이 다른가요?",
  "docs.how.keepOrSell.keepLabel": "보관",
  "docs.how.keepOrSell.keepBody": "카드가 내 컬렉션에 무료로 들어갑니다.",
  "docs.how.keepOrSell.sellLabel": "판매",
  "docs.how.keepOrSell.sellBody": "카드 가치의 일부를 USDC로 내 잔액에 즉시 지급합니다. 기다릴 필요가 없습니다.",

  "docs.how.decisionTimeout.q": "시간 안에 결정하지 않으면 어떻게 되나요?",
  "docs.how.decisionTimeout.a":
    "짧은 결정 시간이 주어집니다. 그 시간이 지나면 카드는 현재 환매가로 자동 판매되므로, 획득한 카드가 묶이는 일은 없습니다.",

  "docs.how.whatIsChase.q": "체이스란 무엇인가요?",
  "docs.how.whatIsChase.a":
    "매 라운드 팟의 일부가 조금씩 쌓이는 누적 잭팟입니다. 자체적인 독립 추첨으로 어느 라운드에서든 터질 수 있고, 그레일을 뽑아도 터지지 않습니다. 터지면 잭팟 전액이 그 라운드의 당첨 배분에 지급됩니다.",

  "docs.how.howToStartFree.q": "무료로 시작하려면?",
  "docs.how.howToStartFree.a":
    "초대 코드로 참가하면 Starter 팩 크기만큼의 잔액을 무료로 받습니다. 지갑도 로그인도 없이 게스트로 바로 시작할 수 있습니다.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "팩 등급표",
  "docs.tech.packLadder.body":
    "구매할 수 있는 팩은 다섯 가지입니다: {starter}, {elite}, {legendary}, {grail}, {mythic}. 베팅 금액은 지불 가능한 가장 큰 팩부터 순서대로 구성됩니다. 가장 싼 팩 가격에 못 미치고 남는 금액은 잔돈으로 타일에 남아 자체적으로는 카드를 개봉하지 않습니다. 특정 팩으로 놓은 베팅은 그 팩 그대로 유지되고, 금액이 쌓일 때 위로 합쳐지는 것은 잔돈뿐입니다.",

  "docs.tech.oddsWeighting.title": "확률을 정하는 것: 타일이 개봉한 카드",
  "docs.tech.oddsWeighting.body":
    "타일의 승리 확률은 그 타일에 얼마를 걸었는지로 정해지지 않습니다. 잠금 시점에 자금이 들어간 모든 타일이 팩을 개봉하고, 추첨에서 그 타일이 차지하는 몫은 방금 개봉한 카드의 가치를 그 라운드에 개봉된 전체 카드 가치와 견준 값입니다. 큰 카드 한 장이면 작은 타일이 유력 후보가 됩니다. 카드를 하나도 개봉하지 못한 타일에는 확률이 전혀 없고, 잔돈만으로는 카드가 개봉되지 않습니다. 라운드 전체에서 카드가 하나도 개봉되지 않으면 추첨할 대상이 없으므로 라운드는 무효가 되고 모든 베팅이 전액 환불됩니다.",

  "docs.tech.vrfDraw.title": "당첨자 추첨은 VRF 기반의 결정론적 방식입니다",
  "docs.tech.vrfDraw.body":
    "매 라운드는 라운드 ID, 마감 시각, 확정된 보드, 티켓 수, 잠금 이후 수집한 체인 엔트로피라는 고정된 재료에서 검증 가능한 난수 하나를 도출합니다. 당첨 타일은 그 난수를 각 타일의 가중치에 따라 한 번 결정론적으로 훑어 정해집니다. 같은 입력은 항상 같은 당첨자를 만들고, 타일 가중치는 훑기 전에 공개되어 고정되며, 누구나 라운드 영수증으로 추첨 전체를 다시 확인할 수 있습니다.",

  "docs.tech.settlementMath.title": "정산 계산식",
  "docs.tech.settlementMath.body":
    "당첨 타일에 건 사람들은 자기 타일의 베팅뿐 아니라 라운드 전체 상금을, 각자가 그 타일에 건 금액에 비례해 나눠 갖습니다. 먼저 {take}의 하우스 수수료가 빠지는데, {chaseCut}는 The Chase 잭팟을 쌓고 {protocolCut}는 프로토콜을 운영합니다. 이 수수료는 가능한 한 카드로 지불되며, 남는 카드 중 값이 싼 것부터 판매합니다. 수수료 규모에 담기지 않을 만큼 비싼 카드는 팔지 않고 건너뛰므로, 큰 카드가 빠져나가지는 않습니다. 카드로 채우지 못한 부분만 상금의 현금에서 나갑니다.",

  "docs.tech.cardAllocation.title": "카드는 누구에게 가나",
  "docs.tech.cardAllocation.body":
    "보유 또는 판매를 선택하는 카드는 당첨 타일에서 가장 좋은 한 장뿐이며, 그 타일의 최대 베터에게 돌아갑니다. 그 타일이 개봉한 나머지 카드는 각자의 베팅 비율에 따라 좋은 카드부터 참가자들에게 배분됩니다. 카드를 받으면 그 카드의 매입가가 본인 현금 배분에서 차감되므로 이는 비용이 아니라 교환입니다. 어느 쪽이든 라운드를 마칠 때 손에 남는 가치는 같습니다. 어느 누구의 배분으로도 감당할 수 없는 카드는 하우스가 매입하고 그 현금은 배분 안에 남으므로, 카드가 강제로 떠넘겨지는 일은 없습니다. 같은 라운드의 두 번째 그레일도 여기서는 특별 취급하지 않고 나머지 전리품과 함께 배분되며, The Chase는 절대 그레일을 가져가지 않습니다.",

  "docs.tech.sellBackRates.title": "환매율",
  "docs.tech.sellBackRates.body":
    "모든 카드에는 어떤 팩에서 나왔는지에 따라 정해지는 상시 판매가가 붙습니다: 입문 단계는 {entryRate}, 중간 단계는 {midRate}, 최상위 단계는 {topRate}입니다. 판매하면 그 금액이 즉시 잔액에 들어오고, 보유해도 비용은 들지 않습니다. 이 요율은 같은 머신에 대해 CollectorCrypt가 공개한 즉시 매입 요율을 따릅니다.",

  "docs.tech.chaseJackpot.title": "체이스 잭팟",
  "docs.tech.chaseJackpot.body":
    "매 라운드 상금의 {chaseCut}로 쌓이는 누적 잭팟입니다. 자체적인 독립 추첨으로 터지며, 평소 라운드 속도라면 대략 주 1회 정도이고 그레일을 뽑아도 터지지 않습니다. 터지면 잭팟 전액이 그 라운드의 당첨 배분에 지급되고, 이후 초기화되어 다시 쌓입니다. The Chase는 가능할 때 라운드당 카드 한 장도 가져가는데, 진 타일에서만 가져가고 그 라운드에서 가장 비싼 카드는 절대 가져가지 않으며 그레일도 가져가지 않습니다.",

  "docs.tech.decisionWindow.title": "결정 시간",
  "docs.tech.decisionWindow.body":
    "타일의 대표 카드를 획득하면 보유할지 판매할지 고르는 {window}초 창이 열립니다. 창이 닫힐 때까지, 또는 다음 라운드가 잠길 때까지 응답이 없으면 카드는 당시 요율로 판매되므로, 획득한 것이 묶여 있는 일은 없습니다.",

  "docs.tech.devnetCustody.title": "데브넷 USDC 보관",
  "docs.tech.devnetCustody.body":
    "잔액은 Solana 데브넷에서 실제 USDC 트랜잭션으로 움직입니다. 자산 보관은 Privy 내장 지갑으로 이루어지며, 대체 수단으로 브라우저에 저장되는 데브넷 전용 키페어를 사용합니다. 두 방식 모두 프로덕션 보관과 동일한 전송 경로로 서명합니다.",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "무효와 환불",
  "docs.tech.voidRefund.body":
    "라운드는 개봉된 카드로만 승부가 나므로, 어떤 타일도 카드를 개봉하지 못한 라운드에는 추첨할 대상이 없습니다. 그 라운드는 그 자리에서 무효가 됩니다. 보드의 모든 베팅이 전액 돌아오고, 하우스는 아무것도 가져가지 않으며, The Chase에도 아무것도 쌓이지 않습니다. 무효가 된 라운드의 공개 추첨 기록은 카드 합계 0을 보여주며, 이는 무효가 누군가의 선택이 아니라 보드가 강제한 결과라는 증명입니다.",

  "docs.tech.cardExits.title": "획득한 카드는 내 지갑으로",
  "docs.tech.cardExits.body":
    "카드를 보유하면 서명된 트랜잭션으로 본인 지갑에 전송되며, 네트워크 수수료는 하우스가 부담합니다. 지갑이 아직 받을 수 없으면 배송은 보류되었다가 도착할 때까지 재시도되며, 결코 버려지지 않습니다. 카드를 판매하면 획득한 순간에 제시된 가격 그대로 지급되고, 다시 견적되는 일은 없습니다. 그 견적은 단 한 번만 행사할 수 있으며, 돈이 움직이기 전에 사용됨으로 기록되므로 같은 카드가 두 번 지급될 수 없습니다.",

  "docs.tech.deposits.title": "USDC 입금",
  "docs.tech.deposits.body":
    "입금은 본인 지갑에서 직접 서명하는 Solana 위의 USDC 전송입니다. 잔액은 그 전송이 게임 트레저리로 온체인에서 확정된 뒤에만 적립되며, 금액과 목적지는 요청이 아니라 체인 자체에서 읽습니다. 각 트랜잭션 서명은 정확히 한 번만 적립할 수 있으므로 같은 입금을 다시 보내도 이중 적립되지 않고, 건당 한도를 넘겨 도착한 전송은 사라지는 대신 돌려줄 빚으로 기록됩니다.",

  "docs.tech.withdrawals.title": "USDC 출금",
  "docs.tech.withdrawals.body":
    "출금은 먼저 잔액에서 차감된 뒤, 트레저리에서 USDC가 당신이 승인한 목적지로 전송됩니다. 검증된 로그인이 바로 그 금액과 목적지에 서명하며, 그 증명과 일치하지 않는 요청은 거부됩니다. 영수증에는 트랜잭션 서명이 남습니다. 체인이 전송을 확정적으로 거부하면 잔액은 정확히 한 번 환불됩니다. 전송이 나갔지만 아직 확정되지 않았다면 체인이 최종 답을 줄 때까지 아무것도 환불되지 않으므로, 출금은 재시작을 거쳐도 결코 두 번 지급될 수 없습니다.",

  "docs.tech.identity.title": "어떻게 로그인하든 계정은 하나",
  "docs.tech.identity.body":
    "Privy로 로그인하거나, 일회용 서버 챌린지에 서명해 Solana 지갑을 증명하세요. 두 길 모두 검증된 신원에만 묶인 같은 영구 계정으로 이어집니다. 돈을 움직이는 모든 처리는 바로 그 요청에서 스스로를 증명한 신원의 계정 위에서 실행되고, 주장된 이름, 아이디, 헤더는 버려지므로 누구도 입금, 베팅, 출금을 남의 잔액으로 향하게 할 수 없습니다.",

  "docs.tech.reconnect.title": "재접속과 재시작",
  "docs.tech.reconnect.body":
    "로그아웃하면 돈은 멈춥니다. USDC 레일에서는 소유 증명이 없는 입금, 베팅, 출금이 거부됩니다. 다시 로그인하면 같은 계정이 같은 잔액과 같은 카드 그대로 기다리고 있습니다. 내 소유물은 전부 페이지가 아니라 영구 장부에 기록되어 있기 때문입니다. 서버가 재시작해도 그 장부를 다시 재생해 같은 숫자에 도달하며, 이미 나간 전송이 두 번 전송되는 일은 없습니다.",

  "docs.nav.ariaLabel": "문서 섹션",
  "docs.nav.overview": "개요",
  "docs.nav.prev": "이전",
  "docs.nav.next": "다음",

  "docs.nav.section.introduction": "소개",
  "docs.nav.section.gameplay": "게임플레이",
  "docs.nav.section.cards": "카드와 보관",
  "docs.nav.section.money": "돈",
  "docs.nav.section.fairness": "공정성",
  "docs.nav.section.account": "계정",

  "docs.nav.page.whatIsRoyale": "attn ROYALE이란",
  "docs.nav.page.packs": "팩과 사다리",
  "docs.nav.page.startFree": "무료로 시작",
  "docs.nav.page.backing": "타일에 베팅하기",
  "docs.nav.page.theDraw": "추첨",
  "docs.nav.page.winning": "무엇을 얻나",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "보유 또는 판매",
  "docs.nav.page.cardAllocation": "카드는 누구에게 가나",
  "docs.nav.page.sellBack": "환매율",
  "docs.nav.page.cardDelivery": "카드 배송",
  "docs.nav.page.deposits": "입금",
  "docs.nav.page.withdrawals": "출금",
  "docs.nav.page.settlement": "정산 계산식",
  "docs.nav.page.custody": "USDC 보관",
  "docs.nav.page.odds": "확률을 정하는 것",
  "docs.nav.page.vrf": "VRF 추첨",
  "docs.nav.page.voidRefund": "무효와 환불",
  "docs.nav.page.identity": "계정은 하나",
  "docs.nav.page.reconnect": "재접속과 재시작",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // Section titles are rendered after a hardcoded "1 · " numeral prefix, so
  // the numbering never enters a value.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE, 돈이 흐르는 방식",
  "docs.howItWorks.lead": "게임의 전체 규칙입니다. 승자를 어떻게 뽑고, 카드는 누구에게 가는지 설명합니다.",
  "docs.howItWorks.backToBoard": "보드로 돌아가기 →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "라운드 진행 방식",
  "docs.howItWorks.round.pickBet":
    "베팅 금액을 고른 다음 타일을 클릭하세요. 클릭할 때마다 그 금액이 타일의 팟에 쌓입니다.",
  "docs.howItWorks.round.yourShare":
    "타일에서의 **내 몫**은 내 베팅 ÷ 그 타일의 총액입니다. {tile} 타일에 {stake}를 걸면 **{pct}** 몫이 됩니다. 그 타일이 이기면 지급액의 {pct}를 받습니다.",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**승리 확률**은 베팅 순간이 아니라 개봉 순간에 정해집니다. 라운드가 잠기면 베팅이 들어간 모든 타일이 팩을 개봉하고, 휠에서 타일이 차지하는 몫은 방금 개봉한 카드의 가치를 그 라운드에 개봉된 전체 카드와 견준 값입니다.",
  "docs.howItWorks.round.tickets":
    "**카드를 하나도 개봉하지 못한** 타일에는 몫이 전혀 없고, 라운드 전체에서 카드가 하나도 개봉되지 않으면 라운드는 **무효**가 되어 모든 베팅이 전액 돌아옵니다.",
  "docs.howItWorks.round.vrf":
    "잠기는 순간 **VRF**(검증 가능한 난수 함수)가 라운드에 고정된 값들, 즉 라운드 ID, 마감 시각, 각 타일의 총액, 티켓 수에서 당첨 티켓 한 장을 뽑습니다. 하우스를 포함해 누구도 결과에 개입할 수 없습니다.",
  "docs.howItWorks.round.oddsAreReal": "타일에 표시되는 확률은 이 추첨 계산 그대로이며, 감으로 매긴 값이 아닙니다.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "베팅으로 사는 것",
  "docs.howItWorks.buys.ladderLead": "타일의 총액은 큰 팩부터 차례로 다시 팩으로 구성됩니다:",
  "docs.howItWorks.buys.example":
    "예시: **{amount}** 타일은 Legendary 1개, Elite 1개, Starter 1개를 삽니다.",
  "docs.howItWorks.buys.change":
    "다음 팩 가격에 못 미치는 돈은 **잔돈**입니다. 팟과 승리 시 내 몫에는 그대로 반영되지만 팩을 열지는 않으며, 확률을 정하는 것은 개봉된 카드입니다.",
  "docs.howItWorks.buys.mythicUpgrade":
    "이미 Mythic을 들고 있다면 업그레이드 버튼은 더 작은 팩이 아니라 **또 하나의 Mythic**을 노립니다. 등급표는 절대 아래로 내려가지 않습니다.",
  "docs.howItWorks.buys.cardsPerPack":
    "잠기면 자금이 들어간 타일은 보유한 **팩 하나당 카드 한 장**을 개봉하며, 보드에는 최대 **{max}장**까지 표시됩니다(나머지는 결과 페이지에 실립니다). 잔돈만 있는 타일은 아무것도 열지 않습니다.",
  "docs.howItWorks.buys.undeliverable":
    "팩을 실제로 전달할 수 없으면(품절, 기술적 문제, 시간 초과) 그 비용은 묶이지 않고 현금으로 돌아옵니다.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "승자가 받는 것",
  "docs.howItWorks.winner.entirePool":
    "승리한 타일에 건 사람들은 그 타일의 팟만이 아니라 **라운드 전체 팟**을 나눠 갖습니다.",
  "docs.howItWorks.winner.proRata":
    "분배는 **비례 배분**입니다. 타일의 {pct}를 채웠다면 지급액의 **{pct}**를 받습니다.",
  "docs.howItWorks.winner.take":
    "분배 전에 모든 팟에서 **{take}**를 먼저 뗍니다. **{chaseCut}**는 체이스 잭팟으로, **{protocolCut}**는 프로토콜 운영(초대 보상, 체이스 카드 매입, 운영, 토큰 바이백)에 쓰입니다.",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "이 {take}는 가능한 한 카드로 지불되며, 남는 카드 중 값이 싼 것부터 충당합니다. 수수료에 담기지 않을 만큼 비싼 카드는 팔지 않고 건너뛰므로, 큰 카드가 빠져나가지는 않습니다. 카드로 채우지 못한 부분만 팟의 현금에서 나갑니다.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "체이스",
  "docs.howItWorks.chase.feed": "체이스는 모든 팟의 **{cut}**가 쌓이는 누적 잭팟입니다.",
  "docs.howItWorks.chase.cardCut":
    "가능하면 체이스는 몫을 현금 대신 카드로 가져갑니다. 다만 패배한 타일의 카드 중 팟의 **{cut} 이하** 가치인 것만 가져가며, 그 라운드에서 가장 값진 카드나 Grail은 절대 가져가지 않습니다.",
  "docs.howItWorks.chase.independentDraw":
    "잭팟은 **독립된 무작위 추첨**으로 터지며, 보통의 라운드 속도에서는 평균 **주 1회**꼴입니다. Grail이 나왔다고 터지지는 않습니다.",
  "docs.howItWorks.chase.payout":
    "터지면 **잭팟 전액**이 그 라운드의 승리 분배로 들어가고, 이후 초기화되어 다음 라운드 적립분부터 다시 쌓입니다.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail",
  "docs.howItWorks.grails.what":
    "**Grail**은 어떤 팩에서든 나올 수 있는 가장 희귀하고 값진 카드입니다. {price}짜리 Starter에서도 나올 수 있습니다.",
  "docs.howItWorks.grails.headlineGrail":
    "승리한 타일의 대표 카드가 Grail이라면, **보관**을 고르는 최다 베팅자는 다른 후원자들의 몫을 사들여야 합니다(그 사람의 현금에서 차감). **판매**를 고르면 지급액이 최다 베팅자만이 아니라 **타일 전체에 비례 배분**됩니다.",
  "docs.howItWorks.grails.otherGrails":
    "그 라운드에 나온 다른 Grail은 다른 타일에서 나왔든 추가 카드로 나왔든 승리한 후원자들에게 돌아가는 보너스이며, 나머지 추가 카드와 똑같이 처리됩니다. 체이스가 거둬가지 않고, 수수료는 값이 싼 카드부터 지불되므로 Grail은 가장 마지막에나 닿을 카드입니다.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "카드는 누구에게 가는가",
  "docs.howItWorks.cards.headline":
    "승리한 타일의 **대표 카드**(가장 값진 한 장)는 최다 베팅자 한 사람의 것입니다. 무료로 보관하거나 환매가로 팔아 현금을 받으며, 그 현금은 타일의 다른 사람들과 나누지 않습니다.",
  "docs.howItWorks.cards.rest":
    "타일이 뽑은 나머지 카드와 패배 타일에서 넘어온 보너스 카드는 가치가 높은 순서대로, 베팅 비중에 따라 나뉩니다. 대개 최다 베팅자가 가장 많이, 가장 좋은 카드를 가져갑니다.",
  "docs.howItWorks.cards.deduction":
    "그 카드를 받으면 환매가만큼 내 현금 분배에서 빠집니다. 팔았을 때 받을 금액과 같으므로 손해는 없습니다.",
  "docs.howItWorks.cards.neverForced":
    "감당하기 어렵다면 강제로 떠안지 않습니다. 대신 하우스가 사들이고, 그 현금은 분배 안에 그대로 남습니다.",
  "docs.howItWorks.cards.workedExample":
    "**계산 예시.** 팟 {pool}. 먼저 **{take}**({takeAmount}: 체이스 {chaseAmount}, 프로토콜 {protocolAmount})를 떼며, 보통은 내 현금이 아니라 여분 카드로 충당합니다. 남은 **{split}**를 나눕니다. 나는 타일의 {yourPct}({yourStake})를 걸었고, Sam은 {samPct}({samStake})를 걸었습니다. 이 타일은 대표 카드 {headline}(Legendary 팩, 환매가 **{buyback}**)과 추가 카드 {extra} 한 장을 뽑았습니다. {headline} 카드는 내가 무료로 보관합니다. 어느 쪽을 고르든 내 것입니다. {extra} 카드는 Sam에게 가고, 그 환매가 **{buyback}**, 즉 **{samCash}**가 Sam의 분배에서 빠집니다. 최종적으로 나는 **현금 {yourStake} + {headline} 카드**를, Sam은 **현금 {samCash} + {extra} 카드**를 가져갑니다.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "보관과 판매",
  "docs.howItWorks.keepSell.buttons":
    "받는 카드마다 버튼이 두 개 있습니다. **보관**은 슬랩을 컬렉션에 넣고, **판매**는 그 팩의 환매가를 USDC로 잔액에 지급합니다.",
  "docs.howItWorks.keepSell.usdc": "USDC는 디지털 달러입니다: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "환매가는 카드가 나온 팩에 따라 정해집니다. Starter/Elite는 **{entryRate}**, Legendary는 **{midRate}**, Grail 이상은 **{topRate}**입니다.",
  "docs.howItWorks.keepSell.window":
    "승리 직후 **{seconds}초**의 결정 시간이 주어지고, 정하지 않으면 다음 라운드 내내 그대로 이어집니다. 보드 아래와 내 카드에서 계속 확인할 수 있습니다.",
  "docs.howItWorks.keepSell.autoSell":
    "다음 라운드가 잠길 때까지도 정하지 않으면 카드는 그 시점에 환매가로 **자동 판매**됩니다. 돈이 묶이는 일은 없습니다.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "용어 정리",
  "docs.howItWorks.glossary.change":
    "**잔돈**: 다음 팩을 사기에 모자란, 타일에 남은 돈입니다. 팟과 승리 시 내 몫에는 반영되지만, 확률은 개봉된 카드만 가집니다.",
  "docs.howItWorks.glossary.house":
    "**하우스**: 카드 환매 자금을 대고, 아무도 감당하지 못한 카드를 떠안는 보관함입니다.",
  "docs.howItWorks.glossary.chase":
    "**체이스**: 모든 팟의 {cut}가 쌓이는 누적 잭팟입니다. 특정 카드 결과가 아니라 독립된 추첨으로 터집니다.",
  "docs.howItWorks.glossary.grail": "**Grail**: 어떤 팩에서든 나올 수 있는 가장 희귀하고 값진 카드입니다.",
  "docs.howItWorks.glossary.buyback":
    "**환매**: 팩 등급에 따라 카드 가치의 {low}에서 {high}까지 현금으로 되사주는 상시 조건입니다.",
  "docs.howItWorks.glossary.proRata": "**비례 배분**: 각자 넣은 만큼의 비율로 나누는 방식입니다.",
  "docs.howItWorks.glossary.vrf": "**VRF**: 나중에 누구나 검증할 수 있는 무작위 추첨입니다.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both stay
  // untranslated, exactly like the "docs.tech.*.source" citations.
  "docs.howItWorks.api.title": "베팅 API (비공개 제공)",
  "docs.howItWorks.api.what":
    "진행 중인 라운드를 읽고, 이벤트 스트림을 구독하고, 코드나 에이전트로 베팅할 수 있는 API입니다. 보드와 동일한 확률과 정산을 사용합니다.",
  "docs.howItWorks.api.access":
    "접근 권한은 **비공개**이며 요청한 경우에만 열립니다. 기본값은 비활성화이고, 모든 호출에 허용 목록에 등록된 API 키가 필요합니다.",
  "docs.howItWorks.api.realBets":
    "실제 베팅에는 확인이 하나 더 필요합니다. 사이트와 같은 로그인으로 본인임을 증명해야 하며, 모든 플레이어에게 적용되는 베팅 한도가 똑같이 적용됩니다.",
  "docs.howItWorks.api.contact": "개발자 문서는 {path}에서 확인하고, 키 발급은 {email}로 문의하세요.",
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
