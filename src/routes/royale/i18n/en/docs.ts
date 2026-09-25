// English: "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer linked
//                                   from the reveal cinema and the winnings
//                                   strip.
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-stay-$-USD rules that apply to every locale. The SAME keys must
// exist in every other locale's i18n/<locale>/docs.ts.
//
// Interpolation tokens ({starter}, {take}, etc.) are always filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations) - never with translated text - per
// the "numbers and currency stay exactly as authored" / "pack tier names are
// brand terms" rules above.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the how-it-works explainer bolds
// key phrases mid-sentence. Rather than shattering a sentence into
// before/emphasis/after fragment keys (untranslatable word order), those
// values carry inline `**bold**` markers that the route renders as <b>. A
// translator MUST keep the marker pairs balanced but is free to move them
// onto whichever words carry the emphasis in their language, and free to
// reorder the sentence around the {token}s. `**{token}**` (a bolded number)
// is normal and expected. `**` has no meaning in the other docs.* keys.
//
// NO SOURCE-FILE CITATIONS and NO "HEAT" (owner directives, 2026-07-29).
// Each Technical fact card used to render a <code> chip naming the module
// that implements it; that element is gone from the component, so nothing in
// this file should reintroduce a file name, path or module into player copy.
// "Heat" is likewise retired as a player-facing term everywhere in docs: the
// mechanic is described as LOOSE CHANGE, the same word the ELI5 tab and the
// how-it-works glossary already use. The `docs.how.heatRemainder.*` KEY names
// are kept as-is (key names are never rendered) so all ten locales stay in
// parity; only their values changed.
//
// This is the ONLY file an agent working on the "docs" surface should need
// to touch for this locale; index.ts already spreads it in and should not
// need to change again.
export default {
  "docs.header.title": "Docs",
  "docs.header.back": "← Back to the board",

  "docs.tabs.ariaLabel": "Docs view",
  "docs.tabs.how": "How it works",
  "docs.tabs.technical": "Technical",

  "docs.how.intro": "The plain-language version. Read this first, then flip to Technical for the exact mechanics.",
  "docs.technical.intro": "The exact mechanics, in plain numbers.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "What is attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "A live pack-opening game. Every round, players back tiles with packs. When the round locks, every backed tile rips its packs open live, and one tile's backers split the whole pool.",

  "docs.how.whatIsPack.q": "What is a pack?",
  "docs.how.whatIsPack.a":
    "A priced tier that rips into one real graded card the moment its tile opens. The ladder runs {starter}, {elite}, {legendary}, {grail} and {mythic}. Bigger packs pull bigger cards.",

  "docs.how.howBacking.q": "How does backing a tile work?",
  "docs.how.howBacking.a":
    "Pick a tile you like and bet packs onto it. Bet alongside other players on the same tile and you share it: your slice of that tile's win matches the share of packs you personally added.",

  "docs.how.heatRemainder.q": "What if my bet does not add up to a whole pack?",
  "docs.how.heatRemainder.a":
    "Anything below the cheapest pack price sits on the tile as loose change. It rides along with the rest of your stake, but it opens no card of its own until it grows into a whole pack, and it is the opened cards that decide the odds.",

  "docs.how.howWheelPicks.q": "How does the wheel pick a winner?",
  "docs.how.howWheelPicks.a":
    "At lock, every backed tile rips its packs live. The wheel then lands on one tile, and the richer that tile's opened cards, the bigger its slice of the wheel. One big pull can make a small tile the favourite. The pick itself comes from a verifiable random draw, never a person.",

  "docs.how.whatDoIWin.q": "What do I win?",
  "docs.how.whatDoIWin.aBefore": "The winning tile's backers split the",
  "docs.how.whatDoIWin.aEmphasis": "entire round's pool",
  "docs.how.whatDoIWin.aAfter":
    ", not just that one tile's bets, in proportion to what each of you staked on it. The tile's biggest backer also gets first claim on the tile's single best card.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Keep or sell, what is the difference?",
  "docs.how.keepOrSell.keepLabel": "Keep",
  "docs.how.keepOrSell.keepBody": "adds the card to your collection for free.",
  "docs.how.keepOrSell.sellLabel": "Sell back",
  "docs.how.keepOrSell.sellBody": "pays you a cut of the card's value straight to your balance in USDC, no waiting.",

  "docs.how.decisionTimeout.q": "What happens if I do not decide in time?",
  "docs.how.decisionTimeout.a":
    "You get a short window to choose. Let it pass and the card sells back automatically at its standing rate, so nothing you win ever gets stuck.",

  "docs.how.whatIsChase.q": "What is the Chase?",
  "docs.how.whatIsChase.a":
    "A rolling jackpot fed by a small cut of every round's pool. It can fire on any round, on its own independent draw, and a grail pull does not set it off. When it fires, the whole jackpot pays into that round's winning split.",

  "docs.how.howToStartFree.q": "How do I start free?",
  "docs.how.howToStartFree.a":
    "Join with an invite code and claim a free Starter-pack-sized balance. No wallet and no sign-in required, you can jump straight in as a guest.",

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

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Pack ladder",
  "docs.tech.packLadder.body":
    "Five packs you can buy: {starter}, {elite}, {legendary}, {grail}, {mythic}. A bet builds the biggest packs it can pay for, largest first. Whatever is left below the cheapest pack price stays on the tile as loose change and opens no card of its own. A bet placed as one specific pack stays that exact pack, only the loose change builds upward as more is added.",

  "docs.tech.oddsWeighting.title": "What sets the odds: the cards a tile opens",
  "docs.tech.oddsWeighting.body":
    "A tile's chance to win is not what was staked on it. At lock every funded tile opens its packs, and a tile's slice of the draw is the value of the cards it just opened, measured against the value of every card opened that round. One big pull makes a small tile the favourite. A tile that opened no card holds no chance at all, and loose change on its own never opens a card. If a whole round opens no cards, there is nothing to draw on: the round is voided and every stake is refunded in full.",

  "docs.tech.vrfDraw.title": "The winner draw is VRF-seeded and deterministic",
  "docs.tech.vrfDraw.body":
    "Every round derives one verifiable random number from a fixed recipe: the round id, its deadline, the frozen board, the ticket count and chain entropy taken after lock. The winning tile is a single deterministic walk of that number across the tiles' weights. The same inputs always produce the same winner, the tile weights are published and locked in before the walk happens, and anyone can re-check the entire draw from the round's receipt afterwards.",

  "docs.tech.settlementMath.title": "Settlement math",
  "docs.tech.settlementMath.body":
    "The winning tile's backers split the whole round pool, not just their own tile's bets, in proportion to what each of them staked on that tile. A {take} house take comes off the top: {chaseCut} builds the Chase jackpot, {protocolCut} funds the protocol. That take is paid with cards wherever it can be, cheapest spare card first, and a card too valuable to fit the take is skipped rather than sold, so the big pulls are not the ones taken. Only what the cards cannot cover comes out of the pool's cash.",

  "docs.tech.cardAllocation.title": "Who gets the cards",
  "docs.tech.cardAllocation.body":
    "Only the winning tile's single best card carries a keep-or-sell decision, and it belongs to that tile's biggest backer. Every other card that tile opened is shared out among its backers in proportion to what each staked, best cards first. Taking one deducts its sell-back price from your own cash split, so it is a swap and not a cost: you end the round holding the same value either way. If nobody's split can cover a card, the house buys it and that cash stays inside the split, so a card is never forced on anyone. A second grail in the same round is not treated specially here, it is shared out with the rest of the loot, and the Chase never takes a grail.",

  "docs.tech.sellBackRates.title": "Sell-back rates",
  "docs.tech.sellBackRates.body":
    "Every card carries a standing sell-back price set by the pack it came out of: {entryRate} at the entry rung, {midRate} through the middle, {topRate} at the top. Selling pays that price to your balance on the spot, and keeping the card costs you nothing. The rates mirror the published instant-buyback rates for the same machines on CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "The Chase jackpot",
  "docs.tech.chaseJackpot.body":
    "A rolling jackpot fed {chaseCut} of every round's pool. It fires on its own independent draw, roughly once a week at normal round speed, and a grail pull does not trigger it. When it fires, the entire jackpot pays into that round's winning split, then resets and starts rebuilding. The Chase also takes one card a round when it can, but only from a tile that lost, never the round's most valuable card, and never a grail.",

  "docs.tech.decisionWindow.title": "Decision window",
  "docs.tech.decisionWindow.body":
    "Winning the tile's headline card opens a {window}-second keep-or-sell window. No answer by the time it closes, or by the next round's lock, sells the card at its standing rate, so nothing you win ever gets stuck.",

  "docs.tech.devnetCustody.title": "Devnet USDC custody",
  "docs.tech.devnetCustody.body":
    "Balances move as real USDC transactions on Solana devnet. Custody runs through your Privy embedded wallet or, as a fallback, a devnet-only keypair held in your own browser, both signing the exact same transfer path the production custody uses.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "Void and refund",
  "docs.tech.voidRefund.body":
    "A round can only be won through opened cards, so a round in which no tile opens a card has nothing to draw on. That round is voided on the spot: every stake on the board comes back in full, the house takes nothing, and the Chase is fed nothing. The published draw record of a voided round shows a zero card total, which is the proof the void was forced by the board and not chosen by anyone.",

  "docs.tech.cardExits.title": "Won cards go to your wallet",
  "docs.tech.cardExits.body":
    "Keep a card and it is transferred to your own wallet as a signed transaction, with the network fees paid for you. If your wallet cannot receive it yet, the delivery is parked and retried until it lands, never dropped. Sell a card back and you are paid the exact price quoted at the moment you won it, never a re-quote, and that quote can be exercised only once: it is marked spent before the money moves, so the same card can never be paid out twice.",

  "docs.tech.deposits.title": "USDC deposits",
  "docs.tech.deposits.body":
    "A deposit is a USDC transfer on Solana that you sign from your own wallet. Your balance is credited only after that transfer is confirmed on-chain into the game's treasury, with the amount and destination read from the chain itself, never from the request. Each transaction signature can credit exactly once, so replaying a deposit cannot double-credit, and a transfer that arrives above the per-transaction cap is recorded as owed back to you instead of vanishing.",

  "docs.tech.withdrawals.title": "USDC withdrawals",
  "docs.tech.withdrawals.body":
    "A withdrawal debits your balance first, then sends the USDC from the treasury to the destination you approved: your verified login signs off on that exact amount and destination, and a request that does not match its proof is refused. The receipt keeps the transaction signature. If the chain definitively rejects the transfer, your balance is refunded exactly once. If the transfer went out but has not confirmed yet, nothing is refunded until the chain gives a final answer, so a withdrawal can never pay twice, even across a restart.",

  "docs.tech.identity.title": "One account, however you sign in",
  "docs.tech.identity.body":
    "Sign in with Privy or prove a Solana wallet by signing a one-time server challenge: both roads lead to the same durable account, keyed by the verified identity and by nothing else. Anything that moves money runs on the account of the identity that proved itself on that very request, and claimed names, ids, and headers are discarded, so nobody can point a deposit, a bet, or a withdrawal at someone else's balance.",

  "docs.tech.reconnect.title": "Reconnect and restart",
  "docs.tech.reconnect.body":
    "Log out and the money stops: on the USDC rails, a deposit, a bet, or a withdrawal with no proof of ownership is refused. Log back in and the same account is waiting, with the same balance and the same cards, because everything you own lives in a durable ledger and not in the page. A server restart replays that ledger and lands on the same numbers, and a transfer that already went out is never sent a second time.",

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

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "Docs sections",
  "docs.nav.overview": "Overview",
  "docs.nav.prev": "Previous",
  "docs.nav.next": "Next",

  "docs.nav.section.introduction": "Introduction",
  "docs.nav.section.gameplay": "Gameplay",
  "docs.nav.section.cards": "Cards and custody",
  "docs.nav.section.money": "Money",
  "docs.nav.section.fairness": "Fairness",
  "docs.nav.section.account": "Account",
  "docs.nav.section.tools": "Tools",

  "docs.nav.page.whatIsRoyale": "What is attn ROYALE",
  "docs.nav.page.packs": "Packs and the ladder",
  "docs.nav.page.startFree": "Start free",
  "docs.nav.page.backing": "Backing a tile",
  "docs.nav.page.theDraw": "The draw",
  "docs.nav.page.winning": "What you win",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "Keep or sell",
  "docs.nav.page.cardAllocation": "Who gets the cards",
  "docs.nav.page.sellBack": "Sell-back rates",
  "docs.nav.page.cardDelivery": "Card delivery",
  "docs.nav.page.deposits": "Deposits",
  "docs.nav.page.withdrawals": "Withdrawals",
  "docs.nav.page.settlement": "Settlement math",
  "docs.nav.page.custody": "USDC custody",
  "docs.nav.page.odds": "What sets the odds",
  "docs.nav.page.vrf": "The VRF draw",
  "docs.nav.page.voidRefund": "Void and refund",
  "docs.nav.page.identity": "One account",
  "docs.nav.page.reconnect": "Reconnect and restart",
  "docs.nav.page.controls": "Settings and controls",
  "docs.nav.page.chat": "Table chat",
  "docs.nav.page.collectors": "Collector leaderboard",
  "docs.nav.page.replay": "Round replay",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - how every dollar moves",
  "docs.howItWorks.lead": "The full rules of the game. How the winner is drawn, and who gets the cards.",
  "docs.howItWorks.backToBoard": "Back to the board →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "How a round works",
  "docs.howItWorks.round.pickBet":
    "Pick a bet size, then click a tile: each click adds that amount to the tile's pot.",
  "docs.howItWorks.round.yourShare":
    "**Your share** of a tile = your stake ÷ that tile's total. {stake} into a {tile} tile is a **{pct}** share. If that tile wins, you get {pct} of its payout.",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "**Win chance** is decided at the rip, not at the bet: when the round locks, every backed tile opens its packs, and a tile's slice of the wheel is the value of the cards it just opened, measured against every card opened that round.",
  "docs.howItWorks.round.tickets":
    "A tile that opens **no card** holds no slice at all, and if a whole round opens no cards, the round is **voided** and every stake comes back in full.",
  "docs.howItWorks.round.vrf":
    "At lock, a **VRF** (verifiable random function) draws one winning ticket from the round's locked numbers: the round id, the deadline, every tile's total, the ticket count. Nobody, not even the house, can steer it.",
  "docs.howItWorks.round.oddsAreReal": "The odds shown on each tile are that exact draw math, not a vibe.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "What your bet buys",
  "docs.howItWorks.buys.ladderLead": "A tile's total recomposes into packs, biggest first:",
  "docs.howItWorks.buys.example":
    "Example: a **{amount}** tile buys one Legendary, one Elite, and one Starter.",
  "docs.howItWorks.buys.change":
    "Money too small for the next pack is **change**: it still counts toward the pot and your share of a win, but it opens no pack, and it is opened cards that set the odds.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Already holding a Mythic? The upgrade button targets **another whole Mythic** instead of a smaller pack. The ladder never steps back down.",
  "docs.howItWorks.buys.cardsPerPack":
    "At lock, every funded tile opens **one card per whole pack** it holds, up to **{max} cards** shown on the board (any rest are listed on the results page). A tile holding only change opens nothing.",
  "docs.howItWorks.buys.undeliverable":
    "If a pack can't actually be delivered (sold out, a technical hiccup, ran out of time), its cost comes back to you as cash instead of getting stuck.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "What the winner gets",
  "docs.howItWorks.winner.entirePool":
    "The winning tile's backers split the **entire round pool**, not just that tile's own pot.",
  "docs.howItWorks.winner.proRata":
    "The split is **pro-rata**: put in {pct} of the tile, get **{pct}** of the payout.",
  "docs.howItWorks.winner.take":
    "**{take}** of every pool is taken off the top before the split: **{chaseCut}** feeds the Chase jackpot, **{protocolCut}** funds the protocol (referrals, Chase card buys, operations, token buybacks).",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "That {take} is paid with cards wherever it can be, cheapest spare card first, and a card too valuable to fit the take is skipped rather than sold, so the big pulls are not the ones taken. Only what the cards cannot cover comes out of the pool's cash.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "The Chase",
  "docs.howItWorks.chase.feed": "The Chase is a rolling jackpot, fed **{cut}** of every pool.",
  "docs.howItWorks.chase.cardCut":
    "When it can, the Chase takes its cut as a card instead of cash, but only a losing tile's card worth **no more than {cut}** of the pool, never the single most valuable card in the round, and never a grail.",
  "docs.howItWorks.chase.independentDraw":
    "The jackpot fires on its own **independent random draw**, on average about **once a week** at typical round speed. A grail pull does not trigger it.",
  "docs.howItWorks.chase.payout":
    "When it fires, the **entire jackpot** pays into that round's winning split, then resets and rebuilds from the next round's feed.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "A **grail** is the rarest, most valuable pull any pack can drop. Even a {price} Starter can hit one.",
  "docs.howItWorks.grails.headlineGrail":
    "If the winning tile's own headline card is a grail: **Keep** requires the top backer to buy out the tile's other backers' share of it (deducted from their cash); **Sell** splits the payout **pro-rata across the whole tile**, not just to the top backer.",
  "docs.howItWorks.grails.otherGrails":
    "Any other grail pulled that round (on a different tile, or as an extra card) is bonus loot for the winning backers, handled exactly like any other extra card. It is never swept into the Chase, and because the take is paid cheapest card first, a grail is the last card it would ever reach for.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Who gets the cards",
  "docs.howItWorks.cards.headline":
    "The winning tile's **headline card** (its single highest-value pull) belongs to the tile's biggest backer alone: Keep it for free, or Sell it for its buyback rate in cash, paid to them, not shared with the rest of the tile.",
  "docs.howItWorks.cards.rest":
    "Every other card the tile pulled, plus any bonus loot handed over from losing tiles, is shared out biggest value first, in proportion to stake. The tile's biggest backer usually ends up with the most, and the best, of them.",
  "docs.howItWorks.cards.deduction":
    "Taking one of those cards deducts its buyback price from your own cash split. That's the same cash you'd get by selling it, so you lose nothing.",
  "docs.howItWorks.cards.neverForced":
    "Can't afford one? It's never forced on you. The house buys it instead, and that cash stays inside the split.",
  "docs.howItWorks.cards.workedExample":
    "**Worked example.** Pool {pool}. **{take}** ({takeAmount}: {chaseAmount} Chase, {protocolAmount} protocol) comes off the top, usually paid by a spare card rather than your cash. **{split}** is left to split: you staked {yourPct} of the tile ({yourStake}), Sam staked {samPct} ({samStake}). The tile pulled a {headline} headline card (a Legendary pack, **{buyback}** buyback) and one {extra} extra card. You keep the {headline} card for free. It's yours either way. The {extra} card goes to Sam: **{buyback}** of it, **{samCash}**, comes out of Sam's split. Final: you walk away with **{yourStake} cash + the {headline} card**; Sam gets **{samCash} cash + the {extra} card**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Keep or sell",
  "docs.howItWorks.keepSell.buttons":
    "Every card you receive comes with two buttons: **Keep** puts the slab in your collection; **Sell** pays the pack's buyback rate in USDC, straight to your balance.",
  "docs.howItWorks.keepSell.usdc": "USDC is a digital dollar: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Buyback is set by the card's own pack: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** Grail and up.",
  "docs.howItWorks.keepSell.window":
    "You get a **{seconds}-second** window right after you win, and if you don't decide, it simply carries into the whole next round: live under the board and in Your cards.",
  "docs.howItWorks.keepSell.autoSell":
    "Still undecided when that next round locks? The card **auto-sells** at its buyback rate then. Money never gets stuck.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glossary",
  "docs.howItWorks.glossary.change":
    "**Change**: money on a tile too small to buy the next pack. It counts toward the pot and your share of a win, but only opened cards carry win chance.",
  "docs.howItWorks.glossary.house":
    "**The house**: the vault that funds card buybacks and absorbs any card nobody can afford.",
  "docs.howItWorks.glossary.chase":
    "**The Chase**: a rolling jackpot fed by {cut} of every pool; fires on its own independent draw, not on any particular card outcome.",
  "docs.howItWorks.glossary.grail": "**Grail**: the rarest, most valuable card any pack can drop.",
  "docs.howItWorks.glossary.buyback":
    "**Buyback**: the standing offer to cash out a card for {low} to {high} of its value, by pack tier.",
  "docs.howItWorks.glossary.proRata": "**Pro-rata**: split in proportion to what each person put in.",
  "docs.howItWorks.glossary.vrf": "**VRF**: a random draw anyone can verify after the fact.",

  // --- RoyaleHowItWorksRoute.tsx: 10 · Controls and extras -----------------
  "docs.howItWorks.tools.title": "Controls and extras",
  "docs.howItWorks.tools.controls":
    "Gear keeps the settings readable: wide layouts let you collapse sections, Display owns the landscape fullscreen toggle, and the bet rail leads with the full dollar total before the pack name and count. Tap the selected pack again to un-arm it.",
  "docs.howItWorks.tools.chat":
    "Chat auto-translates bot and round messages into your selected language. Use show original on a translated row to return to its source wording; player-written lines stay as written.",
  "docs.howItWorks.tools.collectors":
    "Ladder keeps Top betters first and adds Collectors as a second tab, ranking held cards by collection value with cards held, Grails pulled, and best-pull detail.",
  "docs.howItWorks.tools.replay":
    "Finished rounds replay from betting through the reveal with play, pause, seek, restart, and 1x, 2x, 4x, or 5x speed.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "Betting API (closed beta)",
  "docs.howItWorks.api.what":
    "A programmatic API to read a live round, subscribe to the event stream, and place bets from code or an agent. It runs the same odds and settlement as the board.",
  "docs.howItWorks.api.access":
    "Access is **closed** and by request only: disabled by default, and every call needs an allowlisted API key.",
  "docs.howItWorks.api.realBets":
    "Placing a real bet needs one more check: proof it's really you (the same login as the site), and it follows the same bet limits every player has.",
  "docs.howItWorks.api.contact": "See the developer doc at {path} and email {email} to request a key.",
} as Record<string, string>;
