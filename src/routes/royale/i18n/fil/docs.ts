// Filipino: "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Machine-consistent first pass (flagged for a native editorial review, same
// bar as the other freshly-added locales).
//
// Terminology (binding across every fil segment): "tagataya" for backers,
// "pinakamalaking tagataya" for the top backer, "pondo" for pool/pot, "The
// Chase" for the Chase's rolling jackpot (kept as its English proper name,
// deliberately distinct from "pondo" so the two never blur), "ronda" for
// round, "kahon" for tile, "pack" for the generic pack noun, "sukli" for
// loose change on a tile, "buyback" (kept English, standard Filipino finance
// usage) for buyback, "naka-lock"/"i-lock" for lock, "bunot" for a card pull,
// "sorteo" for the winner draw.
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale, rendered here as
// "sukli" (the ordinary Filipino word for change handed back after a
// purchase); do not reintroduce "Heat", a transliteration of it, or a gloss
// of it into any rendered value. The docs.how.heatRemainder.* KEY names are
// kept only so the ten locales stay in key parity; key names are never
// rendered.
//
// NO SOURCE-FILE CITATIONS (owner directive, 2026-07-29): nothing in this
// file names a filename, path, or module, matching en.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the `**bold**` marker pairs are
// kept balanced and moved onto whichever words carry the emphasis in
// Filipino.
export default {
  "docs.header.title": "Docs",
  "docs.header.back": "← Bumalik sa tablero",

  "docs.tabs.ariaLabel": "View ng docs",
  "docs.tabs.how": "Paano ito gumagana",
  "docs.tabs.technical": "Teknikal",

  "docs.how.intro": "Ang bersyong simpleng Filipino. Basahin muna ito, tapos tingnan ang Technical para sa eksaktong mekanismo.",
  "docs.technical.intro": "Ang eksaktong mekanismo, sa simpleng numero.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "Ano ang attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Isang live na larong pagbubukas ng pack. Sa bawat ronda, ini-back ng mga manlalaro ang mga kahon gamit ang pack. Kapag naka-lock ang ronda, binubuksan ng bawat na-back na kahon ang mga pack nito nang live, at hinahati ng mga tagataya ng isang kahon ang buong pondo.",

  "docs.how.whatIsPack.q": "Ano ang pack?",
  "docs.how.whatIsPack.a":
    "Isang tier na may nakatakdang presyo na nagbubukas ng isang totoong na-grade na card sa sandaling magbukas ang kahon nito. Ang ladder: {starter}, {elite}, {legendary}, {grail}, at {mythic}. Mas malaking pack, mas malaking card ang mabubunot.",

  "docs.how.howBacking.q": "Paano gumagana ang pag-back sa isang kahon?",
  "docs.how.howBacking.a":
    "Pumili ng kahong gusto mo at magtaya ng pack dito. Magtaya kasama ang ibang manlalaro sa parehong kahon at hahatiin ninyo ito: ang parte mo sa panalo ng kahong iyon ay tugma sa parte ng mga pack na sarili mong idinagdag.",

  "docs.how.heatRemainder.q": "Paano kung hindi umabot sa buong pack ang taya ko?",
  "docs.how.heatRemainder.a":
    "Kahit ano sa ibaba ng pinakamurang presyo ng pack ay nananatili sa kahon bilang sukli. Sumasama ito sa iba pang taya mo, pero walang sariling card na binubuksan hanggang lumaki ito papunta sa isang buong pack, at ang mga nabuksang card ang nagpapasya sa tsansa.",

  "docs.how.howWheelPicks.q": "Paano pumipili ng panalo ang gulong?",
  "docs.how.howWheelPicks.a":
    "Sa lock, binubuksan ng bawat na-back na kahon ang mga pack nito nang live. Tapos, tumitigil ang gulong sa isang kahon, at kung mas mahal ang mga nabuksang card ng kahong iyon, mas malaki ang parte nito sa gulong. Ang isang malaking bunot ay puwedeng gawing paborito ang isang maliit na kahon. Ang pili mismo ay galing sa isang mapatutunayang random na sorteo, hindi mula sa isang tao.",

  "docs.how.whatDoIWin.q": "Ano ang mapapanalunan ko?",
  "docs.how.whatDoIWin.aBefore": "Hinahati ng mga tagataya ng nanalong kahon ang",
  "docs.how.whatDoIWin.aEmphasis": "buong pondo ng ronda",
  "docs.how.whatDoIWin.aAfter":
    ", hindi lang ang taya sa kahong iyon, ayon sa parte ng bawat isa. Nauuna ring makakuha ang pinakamalaking tagataya ng kahon sa pinakamahal na card nito.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Panatilihin o ibenta, ano ang pagkakaiba?",
  "docs.how.keepOrSell.keepLabel": "Panatilihin",
  "docs.how.keepOrSell.keepBody": "ay nagdaragdag ng card sa koleksyon mo nang libre.",
  "docs.how.keepOrSell.sellLabel": "Ibenta Pabalik",
  "docs.how.keepOrSell.sellBody": "ay nagbabayad ng parte ng halaga ng card diretso sa balanse mo sa USDC, walang paghihintay.",

  "docs.how.decisionTimeout.q": "Ano ang mangyayari kung hindi ako nagdesisyon sa oras?",
  "docs.how.decisionTimeout.a":
    "Bibigyan ka ng maikling panahon para pumili. Kung hindi mo ito magamit, awtomatikong maibebenta pabalik ang card sa kasalukuyang rate nito, kaya walang mapapanalunan mo na natitigil.",

  "docs.how.whatIsChase.q": "Ano ang The Chase?",
  "docs.how.whatIsChase.a":
    "Isang gumugulong na jackpot na pinopondohan ng maliit na parte ng pondo ng bawat ronda. Puwede itong tumama sa kahit anong ronda, sa sarili nitong independiyenteng sorteo, at hindi ito pinapatama ng isang bunot na Grail. Kapag tumama ito, ang buong jackpot ay ibinabayad sa nanalong hatian ng rondang iyon.",

  "docs.how.howToStartFree.q": "Paano magsimula nang libre?",
  "docs.how.howToStartFree.a":
    "Sumali gamit ang isang code ng imbitasyon at kunin ang libreng balanseng kasinlaki ng isang Starter pack. Walang kailangang wallet o pag-sign in, puwede kang direktang sumali bilang guest.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Ladder ng pack",
  "docs.tech.packLadder.body":
    "Limang pack na mabibili: {starter}, {elite}, {legendary}, {grail}, {mythic}. Bumubuo ang isang taya ng pinakamalaking pack na kaya nitong bayaran, pinakamalaki muna. Ang matitira sa ibaba ng pinakamurang presyo ng pack ay nananatili sa kahon bilang sukli at walang sariling card na binubuksan. Ang taya na inilagay bilang isang partikular na pack ay nananatiling eksaktong pack na iyon, ang sukli lang ang lumalaki habang may idinaragdag pa.",

  "docs.tech.oddsWeighting.title": "Ano ang nagtatakda ng tsansa: ang mga card na binubuksan ng kahon",
  "docs.tech.oddsWeighting.body":
    "Ang tsansa ng isang kahon na manalo ay hindi ang naitaya dito. Sa lock, binubuksan ng bawat pinondohang kahon ang mga pack nito, at ang parte ng isang kahon sa sorteo ay ang halaga ng mga card na kababukas lang nito, sukat laban sa halaga ng bawat card na nabuksan ngayong ronda. Ang isang malaking bunot ay ginagawang paborito ang isang maliit na kahon. Ang kahong walang nabuksang card ay walang anumang tsansa, at ang sukli lang mag-isa ay hindi kailanman nagbubukas ng card. Kung walang nabuksang card ang isang buong ronda, walang isosorteo: ma-void ang ronda at maibabalik nang buo ang bawat taya.",

  "docs.tech.vrfDraw.title": "Ang sorteo ng panalo ay VRF-seeded at deterministic",
  "docs.tech.vrfDraw.body":
    "Ang bawat ronda ay kumukuha ng isang mapatutunayang random na numero mula sa isang nakatakdang recipe: ang id ng ronda, ang deadline nito, ang naka-freeze na tablero, ang bilang ng tiket, at ang chain entropy na kinuha pagkatapos mag-lock. Ang nanalong kahon ay isang iisang deterministic na landas ng numerong iyon sa buong timbang ng mga kahon. Palaging magbibigay ng parehong panalo ang parehong input, naka-publish at naka-lock na ang timbang ng mga kahon bago pa mangyari ang landas, at kahit sino ay puwedeng suriin ulit ang buong sorteo mula sa resibo ng ronda pagkatapos.",

  "docs.tech.settlementMath.title": "Matematika ng settlement",
  "docs.tech.settlementMath.body":
    "Hinahati ng mga tagataya ng nanalong kahon ang buong pondo ng ronda, hindi lang ang taya sa sarili nitong kahon, ayon sa parte ng bawat isa dito. May {take} na kinukuha ng house sa itaas: {chaseCut} ang bumubuo sa jackpot ng The Chase, {protocolCut} ang nagpopondo sa protocol. Binabayaran ang kinukuha ng house gamit ang card kapag posible, ang pinakamurang natirang card muna, at ang isang card na masyadong mahal para sakupin ang bahaging kinukuha ay nilalaktawan sa halip na ibenta, kaya hindi ang mga malaking bunot ang kinukuha. Ang hindi lang masakop ng mga card ang lumalabas sa cash ng pondo.",

  "docs.tech.cardAllocation.title": "Sino ang nakakakuha ng mga card",
  "docs.tech.cardAllocation.body":
    "Ang pinakamahal na card lang ng nanalong kahon ang may desisyong panatilihin-o-ibenta, at pag-aari ito ng pinakamalaking tagataya ng kahong iyon. Ang bawat ibang card na binuksan ng kahong iyon ay hinahati sa mga tagataya nito ayon sa itinaya ng bawat isa, pinakamahal na card muna. Ang pagkuha ng isa ay babawas ng presyo nitong buyback mula sa sarili mong parte sa cash, kaya ito ay palitan, hindi gastos: matatapos mo ang ronda na may parehong halaga sa alinmang paraan. Kung walang parte ng kahit sino ang kaya sumakop ng isang card, bibilhin ito ng house at mananatili ang cash na iyon sa loob ng hatian, kaya hindi kailanman ipinipilit ang isang card sa sinuman. Ang pangalawang Grail sa parehong ronda ay hindi tinatrato nang espesyal dito, hinahati ito kasama ang ibang loot, at hindi kailanman kinukuha ng The Chase ang isang Grail.",

  "docs.tech.sellBackRates.title": "Mga rate ng buyback",
  "docs.tech.sellBackRates.body":
    "Ang bawat card ay may nakatakdang presyo ng buyback na itinakda ng pack na pinanggalingan nito: {entryRate} sa pinakababang baitang, {midRate} sa gitna, {topRate} sa pinakaitaas. Ang pagbenta ay nagbabayad ng presyong iyon diretso sa balanse mo, at walang gastos ang pagpapanatili ng card. Sinasalamin ng mga rate na ito ang mga naka-publish na instant-buyback rate para sa parehong mga makina sa CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "Ang jackpot ng The Chase",
  "docs.tech.chaseJackpot.body":
    "Isang gumugulong na jackpot na pinopondohan ng {chaseCut} ng pondo ng bawat ronda. Tumatama ito sa sarili nitong independiyenteng sorteo, halos minsan sa isang linggo sa normal na bilis ng ronda, at hindi ito pinapatama ng isang bunot na Grail. Kapag tumama ito, ibinabayad ang buong jackpot sa nanalong hatian ng rondang iyon, tapos nagre-reset at muling bumubuo. Kumukuha rin ang The Chase ng isang card bawat ronda kapag posible, pero mula lang sa isang natalong kahon, hindi kailanman ang pinakamahal na card ng ronda, at hindi kailanman ang isang Grail.",

  "docs.tech.decisionWindow.title": "Bintana ng desisyon",
  "docs.tech.decisionWindow.body":
    "Ang panalo sa pinakamahal na card ng kahon ay nagbubukas ng {window}-segundong bintana ng panatilihin-o-ibenta. Kung walang sagot pagsara nito, o pagka-lock ng susunod na ronda, ibinebenta ang card sa kasalukuyang rate nito, kaya walang mapapanalunan mo na natitigil.",

  "docs.tech.devnetCustody.title": "Custody ng USDC sa devnet",
  "docs.tech.devnetCustody.body":
    "Gumagalaw ang mga balanse bilang totoong transaksyon ng USDC sa Solana devnet. Dumadaan ang custody sa embedded wallet mo sa Privy o, bilang fallback, sa isang devnet-only na keypair na naka-save sa sarili mong browser, parehong nagpipirma sa mismong parehong landas ng transfer na ginagamit ng production custody.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "Void at refund",
  "docs.tech.voidRefund.body":
    "Isang ronda lang mapapanalunan sa pamamagitan ng mga nabuksang card, kaya ang rondang walang kahong nagbukas ng card ay walang isosorteo. Ma-void agad ang rondang iyon: naibabalik nang buo ang bawat taya sa tablero, walang kinukuha ang house, at walang naipopondo sa The Chase. Ipinapakita ng naka-publish na tala ng sorteo ng isang na-void na ronda ang zero na kabuuang card, na siyang patunay na ang void ay ipinilit ng tablero, hindi pinili ng kahit sino.",

  "docs.tech.cardExits.title": "Napupunta sa wallet mo ang mga napanalunang card",
  "docs.tech.cardExits.body":
    "Panatilihin ang isang card at ito ay ililipat sa sarili mong wallet bilang isang nilagdaang transaksyon, bayad na ang network fee para sa iyo. Kung hindi pa kaya ng wallet mong tanggapin ito, ipinapapark ang paghahatid at inuulit hanggang makarating ito, hindi kailanman itinatapon. Ibenta pabalik ang isang card at babayaran ka sa eksaktong presyong naka-quote sa sandaling napanalunan mo ito, hindi kailanman muling naka-quote, at ang quote na iyon ay magagamit lang nang minsan: mina-mark itong gastado bago pa gumalaw ang pera, kaya kailanman ay hindi mababayaran nang dalawang beses ang parehong card.",

  "docs.tech.deposits.title": "Mga deposito ng USDC",
  "docs.tech.deposits.body":
    "Ang isang deposito ay isang transfer ng USDC sa Solana na nilalagdaan mo mula sa sarili mong wallet. Nakre-credit lang ang balanse mo pagkatapos makumpirma ang transfer na iyon sa chain papunta sa treasury ng laro, kung saan binabasa ang halaga at destinasyon mula sa chain mismo, hindi kailanman mula sa request. Ang bawat transaction signature ay makakapag-credit nang eksaktong minsan lang, kaya ang pag-ulit ng isang deposito ay hindi kayang mag-double-credit, at ang isang transfer na sumobra sa per-transaction cap ay itinatala bilang utang pabalik sa iyo sa halip na mawala.",

  "docs.tech.withdrawals.title": "Mga withdrawal ng USDC",
  "docs.tech.withdrawals.body":
    "Ang isang withdrawal ay babawas muna sa balanse mo, tapos ipapadala ang USDC mula sa treasury papunta sa destinasyong inaprubahan mo: ang verified login mo ang nagpapatunay sa eksaktong halaga at destinasyong iyon, at ang isang request na hindi tumutugma sa patunay nito ay tinatanggihan. Ipinapanatili ng resibo ang signature ng transaksyon. Kung tuluyang tinanggihan ng chain ang transfer, ma-refund ang balanse mo nang eksaktong minsan. Kung nakalabas na ang transfer pero hindi pa nakumpirma, walang mare-refund hanggang magbigay ng huling sagot ang chain, kaya kailanman ay hindi makakapagbayad nang dalawang beses ang isang withdrawal, kahit may restart.",

  "docs.tech.identity.title": "Isang account, kahit anong paraan ng pag-sign in",
  "docs.tech.identity.body":
    "Mag-sign in gamit ang Privy o patunayan ang isang Solana wallet sa pamamagitan ng paglagda sa isang one-time na server challenge: parehong landas ay papunta sa parehong permanenteng account, na batay sa verified identity at wala nang iba. Ang anumang gumagalaw ng pera ay tumatakbo sa account ng identity na napatunayan ang sarili nito sa mismong request na iyon, at ang mga sinabing pangalan, id, at header ay itinatapon, kaya walang makakapag-turo ng isang deposito, taya, o withdrawal papunta sa balanse ng ibang tao.",

  "docs.tech.reconnect.title": "Muling pagkonekta at restart",
  "docs.tech.reconnect.body":
    "Mag-log out at huminto ang pera: sa mga rail ng USDC, tinatanggihan ang isang deposito, taya, o withdrawal na walang patunay ng pagmamay-ari. Mag-log in ulit at hinihintay ka ng parehong account, may parehong balanse at parehong mga card, dahil ang lahat ng ari-arian mo ay nasa isang permanenteng ledger, hindi sa page. Ina-ulit ng isang server restart ang ledger na iyon at bumabalik sa parehong mga numero, at ang isang transfer na nakalabas na ay hindi kailanman ipinapadala nang muli.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "Mga seksyon ng docs",
  "docs.nav.overview": "Buod",
  "docs.nav.prev": "Nakaraan",
  "docs.nav.next": "Susunod",

  "docs.nav.section.introduction": "Panimula",
  "docs.nav.section.gameplay": "Paglalaro",
  "docs.nav.section.cards": "Mga card at custody",
  "docs.nav.section.money": "Pera",
  "docs.nav.section.fairness": "Katarungan",
  "docs.nav.section.account": "Account",

  "docs.nav.page.whatIsRoyale": "Ano ang attn ROYALE",
  "docs.nav.page.packs": "Mga pack at ang ladder",
  "docs.nav.page.startFree": "Magsimulang libre",
  "docs.nav.page.backing": "Pag-back sa isang kahon",
  "docs.nav.page.theDraw": "Ang sorteo",
  "docs.nav.page.winning": "Ang mapapanalunan mo",
  "docs.nav.page.chase": "Ang The Chase",
  "docs.nav.page.keepOrSell": "Panatilihin o ibenta",
  "docs.nav.page.cardAllocation": "Sino ang nakakakuha ng mga card",
  "docs.nav.page.sellBack": "Mga rate ng buyback",
  "docs.nav.page.cardDelivery": "Paghahatid ng card",
  "docs.nav.page.deposits": "Mga deposito",
  "docs.nav.page.withdrawals": "Mga withdrawal",
  "docs.nav.page.settlement": "Matematika ng settlement",
  "docs.nav.page.custody": "Custody ng USDC",
  "docs.nav.page.odds": "Ano ang nagtatakda ng tsansa",
  "docs.nav.page.vrf": "Ang sorteong VRF",
  "docs.nav.page.voidRefund": "Void at refund",
  "docs.nav.page.identity": "Isang account",
  "docs.nav.page.reconnect": "Muling pagkonekta at restart",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - kung paano gumagalaw ang bawat dolyar",
  "docs.howItWorks.lead": "Ang buong panuntunan ng laro. Kung paano sinosorteo ang panalo, at kung sino ang nakakakuha ng mga card.",
  "docs.howItWorks.backToBoard": "Bumalik sa tablero →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Paano gumagana ang isang ronda",
  "docs.howItWorks.round.pickBet":
    "Pumili ng laki ng taya, tapos i-click ang isang kahon: idinaragdag ng bawat click ang halagang iyon sa pondo ng kahon.",
  "docs.howItWorks.round.yourShare":
    "**Ang parte mo** sa isang kahon = taya mo ÷ kabuuan ng kahong iyon. Ang {stake} sa isang kahong {tile} ay isang parteng **{pct}**. Kung mananalo ang kahong iyon, makukuha mo ang {pct} ng payout nito.",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "**Ang tsansang manalo** ay napagpapasyahan sa pagbukas, hindi sa pagtaya: kapag naka-lock ang ronda, binubuksan ng bawat na-back na kahon ang mga pack nito, at ang parte ng isang kahon sa gulong ay ang halaga ng mga card na kababukas lang nito, sukat laban sa bawat card na nabuksan ngayong ronda.",
  "docs.howItWorks.round.tickets":
    "Ang kahong walang **nabuksang card** ay walang anumang parte, at kung walang nabuksang card ang isang buong ronda, ang ronda ay **ma-void** at maibabalik nang buo ang bawat taya.",
  "docs.howItWorks.round.vrf":
    "Sa lock, isang **VRF** (verifiable random function) ang sumosorteo ng isang nanalong tiket mula sa naka-lock na mga numero ng ronda: ang id ng ronda, ang deadline, ang kabuuan ng bawat kahon, ang bilang ng tiket. Walang sinuman, kahit ang house, ang makakaimpluwensya rito.",
  "docs.howItWorks.round.oddsAreReal": "Ang tsansang ipinapakita sa bawat kahon ay ang eksaktong matematika ng sorteong iyon, hindi basta pakiramdam lang.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Ano ang binibili ng taya mo",
  "docs.howItWorks.buys.ladderLead": "Muling bumubuo ang kabuuan ng isang kahon sa mga pack, pinakamalaki muna:",
  "docs.howItWorks.buys.example":
    "Halimbawa: bumibili ng isang Legendary, isang Elite, at isang Starter ang kahong **{amount}**.",
  "docs.howItWorks.buys.change":
    "Ang perang masyadong maliit para sa susunod na pack ay nagiging **sukli**: patuloy pa rin itong bahagi ng pondo at ng parte mo kung manalo, pero walang binubuksan itong pack, at ang mga nabuksang card ang nagtatakda ng tsansa.",
  "docs.howItWorks.buys.mythicUpgrade":
    "May hawak ka nang Mythic? Ang upgrade button ay para sa **isa pang buong Mythic** sa halip na mas maliit na pack. Hindi kailanman bumababa ang ladder.",
  "docs.howItWorks.buys.cardsPerPack":
    "Sa lock, binubuksan ng bawat pinondohang kahon ang **isang card bawat buong pack** na hawak nito, hanggang **{max} na card** ang ipinapakita sa tablero (ang matitira ay nakalista sa results page). Ang kahong sukli lang ang hawak ay walang binubuksan.",
  "docs.howItWorks.buys.undeliverable":
    "Kung hindi talaga maihahatid ang isang pack (naubos, may teknikal na problema, naubusan ng oras), babalik sa iyo ang halaga nito bilang cash sa halip na matigil.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Ano ang makukuha ng panalo",
  "docs.howItWorks.winner.entirePool":
    "Hinahati ng mga tagataya ng nanalong kahon ang **buong pondo ng ronda**, hindi lang ang sariling pondo ng kahong iyon.",
  "docs.howItWorks.winner.proRata":
    "Ang hatian ay **pro-rata**: ilagay ang {pct} ng kahon, makukuha ang **{pct}** ng payout.",
  "docs.howItWorks.winner.take":
    "**{take}** ng bawat pondo ang kinukuha sa itaas bago ang hatian: **{chaseCut}** ang bumubuo sa jackpot ng The Chase, **{protocolCut}** ang nagpopondo sa protocol (referral, pagbili ng card para sa The Chase, operations, token buyback).",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "Binabayaran ang {take} na iyon gamit ang card kapag posible, ang pinakamurang natirang card muna, at ang isang card na masyadong mahal para sakupin ang bahaging kinukuha ay nilalaktawan sa halip na ibenta, kaya hindi ang mga malaking bunot ang kinukuha. Ang hindi lang masakop ng mga card ang lumalabas sa cash ng pondo.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "Ang The Chase",
  "docs.howItWorks.chase.feed": "Ang The Chase ay isang gumugulong na jackpot, pinopondohan ng **{cut}** ng bawat pondo.",
  "docs.howItWorks.chase.cardCut":
    "Kapag posible, kumukuha ang The Chase ng parte nito bilang card sa halip na cash, pero card lang ng isang natalong kahon na nagkakahalaga ng **hindi hihigit sa {cut}** ng pondo, hindi kailanman ang isang pinakamahal na card sa ronda, at hindi kailanman ang isang Grail.",
  "docs.howItWorks.chase.independentDraw":
    "Tumatama ang jackpot sa sarili nitong **independiyenteng random na sorteo**, karaniwang **minsan sa isang linggo** sa normal na bilis ng ronda. Hindi ito pinapatama ng isang bunot na Grail.",
  "docs.howItWorks.chase.payout":
    "Kapag tumama ito, ang **buong jackpot** ay ibinabayad sa nanalong hatian ng rondang iyon, tapos nagre-reset at muling bumubuo mula sa ambag ng susunod na ronda.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Mga Grail",
  "docs.howItWorks.grails.what":
    "Ang isang **Grail** ay ang pinakabihira, pinakamahal na bunot na puwedeng ibagsak ng kahit anong pack. Kahit isang Starter na {price} ay puwedeng makakuha nito.",
  "docs.howItWorks.grails.headlineGrail":
    "Kung ang sariling pinakamahal na card ng nanalong kahon ay isang Grail: Ang **Panatilihin** ay hinihiling sa pinakamalaking tagataya na bilhin ang parte ng iba sa kahon (babawas sa cash nila); Ang **Ibenta** ay naghahati sa payout **pro-rata sa buong kahon**, hindi lang sa pinakamalaking tagataya.",
  "docs.howItWorks.grails.otherGrails":
    "Ang kahit anong ibang Grail na nabunot ngayong ronda (sa ibang kahon, o bilang extra na card) ay bonus na loot para sa mga nanalong tagataya, tinatrato tulad ng kahit anong ibang extra na card. Hindi ito kailanman kinukuha ng The Chase, at dahil ang bahaging kinukuha ay binabayaran ang pinakamurang card muna, ang isang Grail ang pinakahuling kukunin nito.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Sino ang nakakakuha ng mga card",
  "docs.howItWorks.cards.headline":
    "Ang **pinakamahal na card** ng nanalong kahon (ang pinakamahal nitong bunot) ay pag-aari ng pinakamalaking tagataya ng kahon lang: Panatilihin ito nang libre, o Ibenta ito sa buyback rate nito sa cash, babayaran sa kanya lang, hindi hahatiin sa iba pang kahon.",
  "docs.howItWorks.cards.rest":
    "Ang bawat ibang card na binunot ng kahon, kasama ang kahit anong bonus na loot na ibinigay mula sa mga natalong kahon, ay hinahati mula sa pinakamahal na halaga muna, ayon sa taya. Kadalasan, ang pinakamalaking tagataya ng kahon ang nakakakuha ng pinakamarami, at pinakamahal, sa mga ito.",
  "docs.howItWorks.cards.deduction":
    "Ang pagkuha ng isa sa mga card na iyon ay babawas ng presyo nitong buyback mula sa sarili mong parte sa cash. Iyon din ang cash na makukuha mo kung ibinenta mo ito, kaya wala kang nawawala.",
  "docs.howItWorks.cards.neverForced":
    "Hindi mo kaya ang isa? Hindi ito kailanman ipinipilit sa iyo. Ang house na ang bibili nito, at mananatili ang cash na iyon sa loob ng hatian.",
  "docs.howItWorks.cards.workedExample":
    "**Halimbawang mula sa numero.** Pondo {pool}. **{take}** ({takeAmount}: {chaseAmount} sa The Chase, {protocolAmount} sa protocol) ang kinukuha sa itaas, karaniwang binabayaran ng isang natirang card kaysa sa cash mo. **{split}** ang matitira para hatiin: nagtaya ka ng {yourPct} ng kahon ({yourStake}), nagtaya si Sam ng {samPct} ({samStake}). Nabunot ng kahon ang {headline} bilang pinakamahal na card (isang Legendary pack, **{buyback}** na buyback) at isang {extra} na extra na card. Panatilihin mo ang card na {headline} nang libre. Sa iyo ito sa alinmang paraan. Napupunta ang card na {extra} kay Sam: **{buyback}** nito, **{samCash}**, ang lumalabas sa parte ni Sam. Sa huli: aalis ka na may **{yourStake} na cash + ang card na {headline}**; makukuha ni Sam ang **{samCash} na cash + ang card na {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Panatilihin o ibenta",
  "docs.howItWorks.keepSell.buttons":
    "Bawat card na natatanggap mo ay may dalang dalawang button: Ang **Panatilihin** ay naglalagay ng card sa koleksyon mo; Ang **Ibenta** ay nagbabayad ng buyback rate ng pack sa USDC, diretso sa balanse mo.",
  "docs.howItWorks.keepSell.usdc": "Ang USDC ay isang digital na dolyar: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Itinatakda ng sariling pack ng card ang buyback: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** Grail pataas.",
  "docs.howItWorks.keepSell.window":
    "Bibigyan ka ng **{seconds}-segundong** bintana kaagad pagkatapos mong manalo, at kung hindi ka nagdesisyon, dadala lang ito sa buong susunod na ronda: live sa ilalim ng tablero at sa Mga Card Mo.",
  "docs.howItWorks.keepSell.autoSell":
    "Hindi pa rin nakadesisyon pag naka-lock na ang susunod na ronda? **Auto-sell** ang card sa buyback rate nito sa sandaling iyon. Kailanman ay hindi natitigil ang pera.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glosari",
  "docs.howItWorks.glossary.change":
    "**Sukli**: perang nasa isang kahon na masyadong maliit para bilhin ang susunod na pack. Bahagi pa rin ito ng pondo at ng parte mo kung manalo, pero ang mga nabuksang card lang ang may tsansang manalo.",
  "docs.howItWorks.glossary.house":
    "**Ang house**: ang kaban na nagpopondo sa mga buyback ng card at umaabsorb ng kahit anong card na hindi kaya ng kahit sino.",
  "docs.howItWorks.glossary.chase":
    "**Ang The Chase**: isang gumugulong na jackpot na pinopondohan ng {cut} ng bawat pondo; tumatama sa sarili nitong independiyenteng sorteo, hindi sa anumang partikular na resulta ng card.",
  "docs.howItWorks.glossary.grail": "**Grail**: ang pinakabihira, pinakamahal na card na puwedeng ibagsak ng kahit anong pack.",
  "docs.howItWorks.glossary.buyback":
    "**Buyback**: ang nakatakdang alok na i-cash out ang isang card sa {low} hanggang {high} ng halaga nito, depende sa tier ng pack.",
  "docs.howItWorks.glossary.proRata": "**Pro-rata**: hinahati ayon sa itinaya ng bawat isa.",
  "docs.howItWorks.glossary.vrf": "**VRF**: isang random na sorteo na kayang patunayan ng kahit sino pagkatapos ng katotohanan.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API ng Pagtaya (saradong beta)",
  "docs.howItWorks.api.what":
    "Isang programmatic na API para basahin ang isang live na ronda, mag-subscribe sa event stream, at magtaya mula sa code o isang agent. Pareho itong tsansa at settlement gaya ng sa tablero.",
  "docs.howItWorks.api.access":
    "**Sarado** ang access at request-only: naka-disable bilang default, at kailangan ng bawat call ng isang allowlisted na API key.",
  "docs.howItWorks.api.realBets":
    "Ang paglalagay ng totoong taya ay kailangan ng isa pang check: patunay na ikaw talaga (parehong login sa site), at sumusunod ito sa parehong limitasyon ng taya na hawak ng bawat manlalaro.",
  "docs.howItWorks.api.contact": "Tingnan ang developer doc sa {path} at mag-email sa {email} para mag-request ng key.",
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
