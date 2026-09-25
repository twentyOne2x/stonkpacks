// Filipino (Filipino / Tagalog-based, with idiomatic Taglish code-switching
// for tech and gaming terms, same convention the project expects for this
// register): machine-consistent first pass, flagged for a native editorial
// review (same quality bar as the other freshly-added locales). Same key set
// as en/core.ts. See royaleI18n.ts for the {token} interpolation convention
// and the "no em dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome:
// header status, round-metrics rail, board region labels, the logged-out
// invitation, the phone drawer toggles) and runtime.* (copy produced by the
// plain, non-component .ts modules: rail / recap / xProfile / sellBack /
// winShare / serverWallet / video / game). Do NOT add new SURFACE keys to
// this file, add them to the segment file for the surface they belong to
// instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
//
// Terminology (binding across every fil segment): "ronda" = round, "pondo" =
// the round's pool/pot, "reserba" = a CollectorCrypt machine's card pool
// (kept distinct from "pondo" so the two never blur), "The Chase" = the
// Chase's rolling jackpot mechanic (kept as its English proper name, the way
// Filipino entertainment reporting keeps an English show/feature name
// intact, e.g. "sa The Chase mahuhulog"), "kahon" = tile, "tagataya" =
// backer(s)/bettor(s), "Pinakamalaking Tagataya" = the top backer, "taya" =
// bet/bid/stake (noun; "magtaya/itaya" the verb), "ibenta pabalik" = sell
// back, "bunot" = a card pull (a pack opening), "sorteo" = the winner draw /
// VRF draw (kept distinct from "bunot"), "kaban" = vault, "na-grade na card"
// = a graded/slab card, "mapatutunayang patas" = provably fair, "Ikaw" =
// "You" (the player's own seat), "sukli" = the loose-change mechanic (never
// "init"/"heat", see the docs segment's banned-word rule), "Tablero" =
// Board, "Ranggo" = Rankings/Ladder, "Koleksyon" = Collection. Deliberate
// kept-English loanwords, applied consistently (idiomatic Taglish for
// tech/gaming/fintech nouns, same register as this project's fr/es-419/pt-BR
// "pack"/"packs" choice): "pack"/"packs" (mandatory brand word), "card"/
// "cards", "Replay"/"REPLAY", "Profile", "buyback", "Reveal", "Auto-sell",
// "lock"/"naka-lock", "settle"/"nasettle", "Wallet", "Docs", "rarity",
// "grader", "hotkey", "House". The five pack-tier brand names (Starter,
// Elite, Legendary, Grail, Mythic) plus attn ROYALE, ATTN Protocol, USDC, X,
// Privy and CollectorCrypt stay in English everywhere, including
// mid-sentence.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Wika",
  "settings.languageSectionAria": "Mga setting ng wika",
  "settings.languageSearchPlaceholder": "Maghanap ng wika",
  "settings.languageNoResults": "Walang tugmang wika",
  "settings.languageHint": "Agad itong mag-a-apply. Maghanap sa pangalan o mag-type para mag-filter.",
  "settings.languageInputAria": "Wika, maghanap at pumili",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Mga grupo ng setting",
  "settings.searchPlaceholder": "Maghanap ng setting",
  "settings.searchClear": "I-clear ang paghahanap",
  "settings.searchResultsAria": "Mga tugmang setting",
  "settings.searchNoResults": "Walang tumutugma sa “{query}”. Subukan ang pangalan ng gusto mong baguhin.",
  "settings.backToGroups": "Lahat ng setting",
  "gear.cards.heading": "Mga card",
  "gear.cards.sectionAria": "Mga setting ng card",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Taya {bids} · minimum {amount}",
  "gear.section.summary.display": "Mga pop-up {popups} · portrait {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Musika {music} · effects {sfx}",
  "gear.section.summary.autosell": "{count} aktibong auto-sell na panuntunan",
  "gear.section.summary.hotkeys": "{count} hotkey ang nakatakda",

  // --- Shared words --------------------------------------------------------
  "common.on": "ON",
  "common.off": "OFF",
  "common.set": "ITAKDA",
  "common.clear": "BURAHIN",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "Kahon {n}",
  "common.tileShort": "K{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Pagtaya",
  "gear.betting.sectionAria": "Mga setting ng pagtaya",
  "gear.betting.provider.label": "Provider ng pack",
  "gear.betting.provider.automatic": "Awtomatiko (Collector Crypt muna)",
  "gear.betting.provider.hint": "Mas pinipili ng awtomatikong mode ang Collector Crypt kapag available at maaari lamang gumamit ng beripikadong fallback. Mahigpit ang pagpili ng tiyak na provider: tatanggihan ang taya kapag hindi ito available.",
  "gear.betting.provider.automaticHint": "Awtomatiko · Collector Crypt muna",
  "gear.betting.provider.strictHint": "{provider} lamang · walang fallback",
  "gear.betting.provider.unavailable": "{provider} (hindi available)",
  "gear.betting.provider.selectedUnavailable": "Hindi available ang {provider}. Tinatanggihan ang mahigpit na taya at hindi kailanman pinapalitan ang pinili.",
  "gear.betting.provider.actual": "Tinupad ng {provider}",
  "gear.betting.provider.accepted": "Tinanggap ng {provider}",
  "gear.betting.disableBids.label": "I-disable ang pagtaya",
  "gear.betting.disableBids.hint":
    "Nili-lock nito ang iyong pagtaya: hindi na magtatataya ang pag-tap sa kahon, kaya puwede kang manood (o ipahawak ang screen sa iba) nang hindi aksidenteng nakakataya. Patuloy pa ring tumatakbo ang ibang bahagi ng laro.",
  "gear.betting.minBid.label": "Pinakamababang taya",
  "gear.betting.minBid.hint":
    "Ang pinakamaliit na tayang pwedeng ilagay ng isang tap. Hindi bababa dito ang laki ng taya mo, kaya kahit mabilisang tap ay hindi kailanman magtataya nang mas mababa sa gusto mo (nakatakda sa $5 pababa para maiwasan ang pekeng taya).",
  "gear.betting.upgradeCap.label": "Limitasyon sa gastos ng upgrade",
  "gear.betting.upgradeCap.placeholder": "walang limitasyon",
  "gear.betting.upgradeCap.hint":
    "Ang pinakamalaking magagastos mo sa isang upgrade click. Naka-grey out ang mas mamahaling upgrade, kaya hindi ka basta-bastang masusurpresa ng malaking bayarin sa isang abalang kahon.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Pagpapakita",
  "gear.display.sectionAria": "Mga setting ng pagpapakita",
  "gear.display.chipFloats.label": "Popup ng taya",
  "gear.display.chipFloats.hint":
    "Ipakita ang maliliit na bubble na \"+$X · pangalan\" na lumulutang paitaas kapag may nagtaya sa isang kahon.",
  "gear.display.floatThreshold.label": "Itago ang mga tayang mas mababa sa",
  "gear.display.floatThreshold.placeholder": "ipakita lahat ng taya",
  "gear.display.floatThreshold.hint":
    "Magpapakita lang ng bubble para sa mga tayang ganito kalaki o mas malaki pa. Burahin ito (o itakda sa $0) para ipakita ang lahat ng taya, para panatilihing tahimik ang tablero kapag maraming maliliit na taya ang dumarating.",
  "gear.display.hidePortraits.label": "Itago ang mga larawan ng manlalaro",
  "gear.display.hidePortraits.hint":
    "Itinatago ang mga bilog na larawan ng ibang manlalaro sa mga kahon. Nakikita pa rin ang sarili mong marker.",
  "gear.display.fullscreenLandscape.label": "Fullscreen sa landscape",
  "gear.display.fullscreenLandscape.hint":
    "Sa mobile, itinatago ng susunod na tap sa landscape ang browser bar. Sa iPhone Safari, magiging compact ito; ang Add to Home Screen ang nagbibigay ng tunay na fullscreen.",
  "gear.display.replayTour.label": "I-play muli ang welcome tour",
  "gear.display.replayTour.hint": "Buksan muli ang welcome tour mula sa unang hakbang.",
  "gear.display.couch.label": "Malaking teksto (TV/sofa)",
  "gear.display.headerCollapse.label": "I-collapse ang header",
  "gear.display.headerCollapse.hint": "Itinutupi ang itaas na bar para mapuno ng board at ng mga card ang screen. Ibinabalik ito ng arrow sa header.",
  "gear.display.couch.hint":
    "Mas malaking teksto sa buong laro: chat, docs, mga label at ang mga halaga ng pera, sinukat para sa paglalaro mula sa sofa. Mananatili ang layout ng tablero. Puwede rin itong i-on gamit ang ?couch=1 sa address.",
  "gear.display.couch.suggested": "Mukhang isa itong TV o console browser. Ginawa ang malaking teksto para sa screen na ito.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Mga Reveal",
  "gear.reveals.sectionAria": "Mga setting ng Reveal",
  "gear.reveals.turbo.label": "Turbo Reveal",
  "gear.reveals.turbo.hint":
    "Pinapabilis ang reveal show para mas mabilis mong makuha ang resulta mo. May sandali pa ring nakalaan sa malalaking sandali. Naka-off ito bilang default, buong show ang mapapanood ng iba.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Tunog",
  "gear.sound.sectionAria": "Mga setting ng tunog",
  "gear.sound.sfx.label": "Mga sound effect",
  "gear.sound.sfx.hint":
    "Mga click ng chip, pagbukas at pag-lock ng ronda, ang gulong ng panalo, at ang reveal show. Lahat ay synthesized sa iyong browser, walang kailangang i-load.",
  "gear.sound.music.label": "Musika",
  "gear.sound.music.hint":
    "Sumusunod ito sa ronda: dumadagundong habang tumatagal ang pagtaya, umiigting sa mga huling segundo, at bumabagsak para sa reveal. Nagsisimula pagkatapos ng iyong unang tap o pindot sa key, at huminto kapag lumipat ka ng tab.",
  "gear.sound.musicStyle.label": "Estilo ng musika",
  "gear.sound.musicStyle.piano": "Kalmadong piano",
  "gear.sound.musicStyle.snowmelt": "Tunaw na niyebe",
  "gear.sound.musicStyle.hearthfire": "Apoy sa dapugan",
  "gear.sound.musicStyle.grotto": "Gintong yungib",
  "gear.sound.musicStyle.arcade": "Mabilisang arcade",
  "gear.sound.musicStyle.kart": "Karerang kart",
  "gear.sound.musicStyle.galaxy": "Walts ng bituin",
  "gear.sound.musicStyle.hint":
    "Ang kalmadong piano ay malumanay, hindi nagmamadaling himig. Ang mabilisang arcade ay maliwanag at mabilis. Magpapalit ito sa susunod na bar, kahit kasagsagan ng ronda.",
  "gear.sound.musicVolume.label": "Volume ng musika",
  "gear.sound.sfxVolume.label": "Volume ng effects",
  "gear.sound.volume.label": "Volume",
  "gear.sound.volume.aria": "Pangunahing volume",
  "gear.sound.volume.hint": "Iisang pangunahing volume para sa effects at musika nang sabay.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Mga panuntunan sa Auto-sell",
  "gear.autosell.sectionAria": "Mga panuntunan sa Auto-sell",
  "gear.autosell.intro":
    "Itakda ito nang isang beses at awtomatikong maibebenta pabalik ang bawat panalong tumutugma dito: walang keep/sell prompt. Ang hindi tumutugma ay tatanungin ka pa rin, tulad ngayon.",
  "gear.autosell.everyWin.label": "I-auto-sell ang bawat panalo",
  "gear.autosell.everyWin.hint":
    "I-cash out ang bawat card na mapanalunan mo sa buyback rate sa mismong sandaling madatnan ito, walang keep-or-sell prompt. Hindi kailanman awtomatikong nabebenta ang mga Grail. Ito ang shortcut para i-on ang apat na rarity toggle sa ibaba.",
  "gear.autosell.belowValue.label": "Ibenta kung ang halaga ay mas mababa sa",
  "gear.autosell.placeholderOff": "naka-off",
  "gear.autosell.rarity.label": "Ibenta ayon sa rarity",
  "gear.autosell.rarity.aria": "Auto-sell ayon sa rarity",
  "gear.autosell.rarity.hint":
    "Mga rarity band ng CollectorCrypt, batay sa pack machine na pinanggalingan ng bawat card. Nagbabago ang eksaktong dollar range ng isang band depende sa pack, kaya ang isang $200 na card ay puwedeng rare sa isang machine pero common sa mas mahal na machine.",
  "gear.autosell.nonVintage.label": "Ibenta ang mga non-vintage na card",
  "gear.autosell.belowGrade.label": "Ibenta kung naka-grade sa mas mababa sa",
  "gear.autosell.grader.label": "Ibenta ayon sa grader",
  "gear.autosell.grader.hint":
    "Panatilihin ang isang grader at i-auto-sell lang ang mga card nitong naka-grade sa mas mababa sa numerong itinakda mo. Alisan ng check ang isang grader para i-auto-sell ang lahat ng card mula rito. Alisan ng check silang lahat para i-auto-sell ang lahat ng mapapanalunan mo. Magkaiba ang scale ng bawat grader, kaya hiwalay ang bawat floor.",
  "gear.autosell.grader.aria": "Auto-sell ayon sa grader",
  "gear.autosell.grader.keep": "PANATILIHIN",
  "gear.autosell.grader.sellAll": "IBENTA LAHAT",
  "gear.autosell.grader.other": "Iba / Hindi naka-grade",
  "gear.autosell.grader.placeholderKeepAll": "panatilihin lahat",
  "gear.autosell.grader.placeholderSellAll": "ibenta lahat",
  "gear.autosell.grader.ariaGradeSuffix": "ibenta kung mas mababa sa grade na ito",
  "gear.autosell.summaryActive": "Aktibo:",
  "gear.autosell.summaryNone": "Walang naitakdang panuntunan sa auto-sell. Tinatanong ka pa rin ng bawat panalo kung ipapanatili o ibebenta.",
  "gear.autosell.turnOffAll": "PATAYIN LAHAT",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Mga hotkey sa taya",
  "gear.hotkeys.sectionAria": "Mga hotkey sa taya",
  "gear.hotkeys.intro":
    "Pindutin ang key ng isang kahon para magtaya rito gamit ang kasalukuyang laki ng taya mo. Hindi na kailangan ng mouse. I-click ang isang key sa ibaba, tapos pindutin ang key na gusto mo. Hindi puwedeng magkapareho ng key ang dalawang kahon, kaya kapag muling itinalaga ay lilipat ito. Kinakansela ito ng Esc, binubura ng Backspace.",
  "gear.hotkeys.enabled.label": "Pagtaya gamit ang number key",
  "gear.hotkeys.enabled.hintOn": "Aktibo ang mga key habang nagtataya. Ang pagpindot sa key ng isang kahon ay agad na maglalagay ng taya mo.",
  "gear.hotkeys.enabled.hintOff": "Naka-off ang mga key. Walang itataya kahit pindutin ang key ng isang kahon.",
  "gear.hotkeys.enabled.hintUnset": "Hindi pa napagpasyahan. I-on ang mga key dito, o pindutin ang key ng isang kahon habang nagtataya at piliin ang Paganahin.",
  "gear.hotkeys.listAria": "Mga hotkey sa taya ng kahon",
  "gear.hotkeys.tileLabel": "Kahon {n}",
  "gear.hotkeys.pressKeyPrompt": "Pumindot ng key…",
  "gear.hotkeys.setKey": "Itakda ang key",
  "gear.hotkeys.clear": "Burahin",
  "gear.hotkeys.ariaPressToBind": "Pumindot ng key para i-bind sa Kahon {n}",
  "gear.hotkeys.ariaShortcut": "Shortcut ng Kahon {n}: {key}. I-click para baguhin ang bind.",
  "gear.hotkeys.ariaNoShortcut": "Walang shortcut ang Kahon {n}. I-click para magtakda ng isa.",
  "gear.hotkeys.ariaClearShortcut": "Burahin ang shortcut ng Kahon {n}",
  "gear.hotkeys.unboundWarning": "Walang itinakdang key para sa {list}. Walang keyboard shortcut ang mga kahong iyon hanggang sa magtakda ka ng isa.",
  "gear.hotkeys.resetButton": "I-reset sa default",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "Mga seksyon ng attn ROYALE",
  "nav.board": "TABLERO",
  "nav.results": "RESULTA",
  "nav.rankingsFull": "RANGGO",
  "nav.rankingsShort": "RANGGO",
  "nav.collectionFull": "KOLEKSYON",
  "nav.collectionShort": "CARD",
  "nav.profile": "PROFILE",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Tablero",
  "mobileNav.results": "Resulta",
  "mobileNav.ladder": "Ranggo",
  "mobileNav.collection": "Koleksyon",
  "mobileNav.profile": "Profile",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Docs",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "Lab ng attn ROYALE",
  "shell.header.statusAria": "Status ng ronda",
  "shell.header.collapse": "Itago ang header",
  "shell.header.expand": "Ipakita ang header",
  "shell.header.round": "Ronda #{n}",
  "shell.header.turboTitle": "Pinabilis na oras ng ronda",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Buod ng ronda",
  "shell.metrics.totalPool": "Kabuuang pondo",
  "shell.metrics.packsLive": "Live na pack",
  "shell.metrics.yourStake": "Taya mo",
  "shell.metrics.selectedBet": "Napiling taya",
  "shell.board.aria": "Tablero ng attn ROYALE",
  "shell.board.label": "Tablero",
  "shell.board.phaseOpen": "I-click ang kahit anong kahon para i-back ito, muling ikakabit ang taya sa pinakamainam na pack stack",
  "shell.board.phaseLock": "Naka-lock · nagbubukas ang mga pack",
  "shell.board.phaseSettled": "Nasettle na ang ronda",
  "shell.board.metaOpen": "{pool} na pondo · 3% papunta sa The Chase · magbubukas ang mga pack pag naka-lock",
  "shell.board.metaClosed": "Isang kahon lang ang mananalo sa pondo, batay sa mapatutunayang tinimbang na tsansa.",
  "shell.board.reopenReveal": "↗ Buksan muli ang reveal",
  "shell.connectNudge":
    "Pumasok sa laro at magdeposito para simulang mag-back ng mga kahon. Patuloy na tumatakbo ang mga ronda sa background.",
  "shell.decision.cardFallback": "ang card mo",
  "shell.mobile.close": "Isara",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Buksan ang chat sa table",
  "shell.mobile.chatCloseAria": "Isara ang chat sa table",
  "shell.mobile.cards": "Mga Card",
  "shell.mobile.cardsOpenAria": "Buksan ang mga card mo para ibenta o i-withdraw",
  "shell.mobile.cardsCloseAria": "Isara ang mga card mo",
  "shell.mobile.players": "Mga Manlalaro",
  "shell.mobile.playersOpenAria": "Buksan ang mga manlalaro, ayon sa ranggo ng taya",
  "shell.mobile.playersCloseAria": "Isara ang mga manlalaro",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC ng laro",
  "runtime.rail.privySessionCredit": "Credit ng Privy session",
  "runtime.rail.houseCredit": "credit ng house",
  "runtime.rail.connectPrivy": "I-connect ang Privy para magdagdag ng USDC ng laro",
  "runtime.rail.privySession": "Privy session",
  "runtime.rail.depositAction": "Magdagdag ng +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Account ng Privy",
  "runtime.rail.house": "House",
  "runtime.rail.depositReceipt": "Resibo {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "I-tap ang kahit anong pack para itaya ang {amount}. May sarili ring +{low} / +{high} ang bawat kahon.",
  "runtime.rail.sellBack": "Ibenta pabalik → +{amount} sa balanse",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "Ikaw",
  "runtime.recap.topBacker": "Pinakamalaking tagataya",
  "runtime.recap.topCardOutcome": "pinakamahal na card · desisyong panatilihin/ibenta",
  "runtime.recap.backer": "Tagataya",
  "runtime.recap.cardWon": "napanalunang card",
  "runtime.recap.chaseLootReleased": "Nailabas ang loot ng The Chase",
  "runtime.recap.theChase": "The Chase",
  "runtime.recap.sweptIntoVault": "kinuha papunta sa kaban",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "bayad sa protocol",
  "runtime.recap.soldBack": "Naibenta pabalik",
  "runtime.recap.intoSplit": "+{amount} sa hatian",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "Hindi pa available ang koneksyon sa X.",
  "runtime.xProfile.connected": "Nakakonekta",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Hindi kilalang card",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "NANALO",
  "runtime.winShare.headlineGrailPull": "NABUNOT NA GRAIL",
  "runtime.winShare.headlineCardsWon": "MGA CARD NA NAPANALUNAN",
  "runtime.winShare.cardInImage": "Nasa larawan ang card.",
  "runtime.winShare.receiptInImage": "Nasa larawan ang resibo.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Offline muna ang mga withdrawal. Walang pondong gumalaw.",
  "runtime.serverWallet.noSigner": "Walang naka-connect na wallet signer para sa session na ito. Walang pondong gumalaw.",
  "runtime.serverWallet.nonceUnavailable": "Hindi nakuha ang money-auth nonce ng withdrawal mula sa server.",
  "runtime.serverWallet.signatureUnavailable": "Hindi nagbalik ng signature ang wallet para sa withdrawal nonce.",
  "runtime.serverWallet.boundaryLabel": "Magkaibang balanse ang table credit at ang USDC ng server wallet.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Hindi available ang screen capture sa browser na ito.",
  "runtime.video.noRecorderFormat": "Walang MediaRecorder video format ang browser na ito.",
  "runtime.video.canceled": "Nakansela ang render.",
  "runtime.video.unreachable": "Hindi maabot ang render service sa {url}.",
  "runtime.video.rejected": "Tinanggihan ng render service ang rondang ito: {detail}",
  "runtime.video.requestFailed": "Nabigo ang render request ({status}).",
  "runtime.video.noJobId": "Hindi nagbalik ng job id ang render service.",
  "runtime.video.lostJob": "Nawala ang render job ({status}).",
  "runtime.video.lostContact": "Naputol ang koneksyon sa render service kalagitnaan ng render.",
  "runtime.video.renderFailed": "Nabigo ang render: {error}.",
  "runtime.video.unknownError": "hindi kilalang error",
  "runtime.video.downloadFailed": "Tapos na ang video pero hindi na-download.",
  "runtime.video.downloadHttpFailed": "Tapos na ang video pero nabigo ang pag-download ({status}).",
  "runtime.video.emptyVideo": "Nagbalik ang render service ng walang-lamang video.",
  "runtime.video.shareTagline": "Labanan ng pack, mapapatunayan ang bawat sorteo. Panoorin ang ronda:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Live na ang room. Awtomatikong nagsisimula ang mga ronda - {seconds}s na bukas, tapos ang reveal.",
  "runtime.game.chaseVault": "Kaban ng The Chase",
  "runtime.game.aTile": "isang kahon",
  "runtime.game.aPack": "isang pack",
  "runtime.game.theCard": "ang card",
  "runtime.game.collectedSplit": "Ronda {round} · nakolekta ang {amount} USDC mula sa hatian.",
  "runtime.game.chaseDropSplit": "Ronda {round} · bumagsak ang The Chase ng {award} sa kahon mo · ang parte mo: {amount} USDC.",
  "runtime.game.grailSecured": "Naseguro ang Grail: pinanatili ang {card} ({amount}) sa iyong koleksyon.",
  "runtime.game.keptCard": "Pinanatili ang {card} ({amount}) → idinagdag sa iyong koleksyon.",
  "runtime.game.soldCardSettle": "Naibenta pabalik ang {card} para sa {amount} USDC ({pct}% ng {value}).",
  "runtime.game.roundVoidedRefund":
    "Na-void ang Ronda {round}. Walang pack na nagbukas, kaya walang sorteo batay sa halaga ng card. Naibalik ang taya mong {amount}.",
  "runtime.game.roundVoidedAll":
    "Na-void ang Ronda {round}. Walang pack na nagbukas, kaya walang sorteo batay sa halaga ng card. Naibalik ang lahat ng taya.",
  "runtime.game.chaseFiredYours.one": "Tumama ang The Chase: {n} card ({amount}) na inilabas sa kahon mong {tile}.",
  "runtime.game.chaseFiredYours.other": "Tumama ang The Chase: {n} na card ({amount}) na inilabas sa kahon mong {tile}.",
  "runtime.game.chaseFiredTable.one":
    "Tumama ang The Chase sa Ronda {round}: {award} + {n} card ang bumagsak sa {tile}, hinati ng mga tagataya nito.",
  "runtime.game.chaseFiredTable.other":
    "Tumama ang The Chase sa Ronda {round}: {award} + {n} na card ang bumagsak sa {tile}, hinati ng mga tagataya nito.",
  "runtime.game.cardsAssigned.one": "{n} card ang naitalaga sa iyo ({amount}) → koleksyon.",
  "runtime.game.cardsAssigned.other": "{n} na card ang naitalaga sa iyo ({amount}) → koleksyon.",
  "runtime.game.cardPoolsLive": "Live na ang mga reserba ng card: {cards} card sa {pools} machine pool ng CollectorCrypt.",
  "runtime.game.minBid": "Ang pinakamababang taya ay {amount}. Taasan ang taya at subukan ulit.",
  "runtime.game.resolveFailed": "Hindi natapos ang round na ito, kaya walang na-settle. Normal na magsisimula ang susunod na round.",
  "runtime.game.stakeRefused": "Masyadong malaki ang tayang iyon para sa {tile}. Walang siningil. Babaan ito at subukan ulit.",
  "runtime.game.shortfallBack":
    "Hindi sapat ang USDC para i-back ang {tile} ng {amount}. Meron kang {held}. Magdagdag ng pondo para magpatuloy.",
  "runtime.game.shortfallNextPack":
    "Hindi sapat ang USDC para kumpletuhin ang susunod na pack sa {tile}. Kailangan ng {amount}, meron kang {held}. Magdagdag ng pondo para magpatuloy.",
  "runtime.game.youBacked": "Na-back mo ang {tile} ng {amount}.",
  "runtime.game.packCompleted": "Nakumpleto mo ang susunod na pack sa {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Naibenta ang {cards} para sa {amount} USDC (CC buyback) para pondohan ang isang taya.",
  "runtime.game.backedFunded": "Na-back ang {tile} ng {amount} (pinondohan mula sa inventory).",
  "runtime.game.demoStakesRefunded":
    "Nabura ang mga demo stake: naibalik ang {amount} na na-click mo. Magsisimula ka sa $0.",
  "runtime.game.demoStakesCleared": "Nabura ang mga demo stake: nagsisimula ka sa $0 sa bawat ronda hanggang sa mag-back ka ng kahon.",
  "runtime.game.deposited": "Na-deposito ang {amount} USDC sa iyong wallet.",
  "runtime.game.referralBonus": "Na-credit ang bonus sa referral: +{amount} USDC.",
  "runtime.game.signedAndSent": "Nilagdaan at pinadala ang {amount} USDC sa {cluster} · sig {sig}….",
  "runtime.game.signedNoBroadcast":
    "Nilagdaan ang {amount} USDC sa {cluster} ({method}, walang chain broadcast) · sig {sig}….",
  "runtime.game.soldCard": "Naibenta ang {card} para sa {amount} USDC ({pct}% na buyback).",
} as Record<string, string>;
