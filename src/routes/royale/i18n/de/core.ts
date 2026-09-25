// German (Deutsch): "core" segment. Same key set as en/core.ts - see that
// file's header for the full namespace breakdown (settings.*, common.*,
// gear.<section>.*, nav.*, mobileNav.*, plus the two cross-surface
// namespaces shell.* and runtime.*).
//
// See royaleI18n.ts for the {token} interpolation convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-literal rules.
//
// REGISTER: formal (Siezen) throughout.
// TERMINOLOGY: "Chase" IS translated and always reads "die Jagd" (see
// de/misc.ts, de/docs.ts); a board square is a "Kachel" (never "Feld"), the
// board itself is das "Spielfeld"; "the house" is "die Bank"; "buyback" is
// "Rückkauf", "sell back" is "zurückverkaufen"; "provably fair" is
// "nachweislich fair"; "backer" is "Unterstützer". The five pack tier names
// (Starter / Elite / Legendary / Grail / Mythic) and "Slab" stay English and
// are NEVER inflected into German (a "Grail", nie ein "Gral").
//
// SHELL LABELS: shell.metrics.* sit in a fixed-width KPI rail. They are kept
// as short as German allows (compounds beat relative clauses there).
//
// Segment: core (the original Phase-1 flat dictionary, moved here
// verbatim as part of the i18n parallel-work restructure) PLUS shell.* and
// runtime.*, which belong to no single game surface. Do NOT add new SURFACE
// keys to this file, add them to the segment file for the surface they
// belong to instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Sprache",
  "settings.languageSectionAria": "Spracheinstellungen",
  "settings.languageSearchPlaceholder": "Sprache suchen",
  "settings.languageNoResults": "Keine Sprache gefunden",
  "settings.languageHint": "Gilt sofort. Nach Namen suchen oder tippen, um zu filtern.",
  "settings.languageInputAria": "Sprache, suchen und auswählen",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Einstellungsgruppen",
  "settings.searchPlaceholder": "Einstellungen suchen",
  "settings.searchClear": "Suche löschen",
  "settings.searchResultsAria": "Passende Einstellungen",
  "settings.searchNoResults": "Nichts passt zu „{query}“. Versuchen Sie den Namen der Sache, die Sie ändern möchten.",
  "settings.backToGroups": "Alle Einstellungen",
  "gear.cards.heading": "Karten",
  "gear.cards.sectionAria": "Karteneinstellungen",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Gebote {bids} · Minimum {amount}",
  "gear.section.summary.display": "Pop-ups {popups} · Porträts {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Musik {music} · Effekte {sfx}",
  "gear.section.summary.autosell": "{count} aktive Auto-Sell-Regeln",
  "gear.section.summary.hotkeys": "{count} Hotkeys festgelegt",

  // --- Shared words --------------------------------------------------------
  "common.on": "AN",
  "common.off": "AUS",
  "common.set": "ÜBERNEHMEN",
  "common.clear": "LÖSCHEN",
  "common.tileLabel": "Kachel {n}",
  "common.tileShort": "K{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Wetten",
  "gear.betting.sectionAria": "Wetteinstellungen",
  "gear.betting.provider.label": "Pack-Anbieter",
  "gear.betting.provider.automatic": "Automatisch (Collector Crypt bevorzugt)",
  "gear.betting.provider.hint": "Automatisch bevorzugt Collector Crypt, wenn verfügbar, und nutzt nur einen verifizierten Ersatz. Ein benannter Anbieter ist strikt: Ist er nicht verfügbar, wird die Wette abgelehnt.",
  "gear.betting.provider.automaticHint": "Automatisch · Collector Crypt bevorzugt",
  "gear.betting.provider.strictHint": "Nur {provider} · kein Ersatz",
  "gear.betting.provider.unavailable": "{provider} (nicht verfügbar)",
  "gear.betting.provider.selectedUnavailable": "{provider} ist nicht verfügbar. Strikte Wetten werden abgelehnt; die Auswahl wird nie ersetzt.",
  "gear.betting.provider.actual": "Ausgeführt von {provider}",
  "gear.betting.provider.accepted": "Von {provider} angenommen",
  "gear.betting.disableBids.label": "Wetten sperren",
  "gear.betting.disableBids.hint":
    "Sperrt Ihre Einsätze: Ein Tipp auf eine Kachel setzt nichts mehr, Sie können zuschauen (oder das Gerät weiterreichen), ohne aus Versehen mitzusetzen. Der Rest des Spiels läuft normal weiter.",
  "gear.betting.minBid.label": "Mindesteinsatz",
  "gear.betting.minBid.hint":
    "Der kleinste Einsatz, den ein Tipp platzieren kann. Ihr Einsatz kann nicht darunter fallen, ein schneller Tipp setzt also nie weniger als gewollt (Untergrenze $5, gegen Spoof-Einsätze).",
  "gear.betting.upgradeCap.label": "Upgrade-Limit",
  "gear.betting.upgradeCap.placeholder": "kein Limit",
  "gear.betting.upgradeCap.hint":
    "Der Höchstbetrag, den ein Upgrade-Klick kosten darf. Teurere Upgrades werden ausgegraut, eine belebte Kachel überrascht Sie also nicht mit einer hohen Rechnung.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Anzeige",
  "gear.display.sectionAria": "Anzeigeeinstellungen",
  "gear.display.chipFloats.label": "Einsatz-Pop-ups",
  "gear.display.chipFloats.hint": "Zeigt die kleinen „+$X · Name“-Blasen, die aufsteigen, wenn jemand auf eine Kachel setzt.",
  "gear.display.floatThreshold.label": "Ausblenden unter",
  "gear.display.floatThreshold.placeholder": "alle Einsätze",
  "gear.display.floatThreshold.hint":
    "Blasen erscheinen erst ab dieser Einsatzgröße. Leer lassen (oder $0 setzen), um jeden Einsatz zu zeigen. Das hält das Spielfeld ruhig, wenn viele kleine Einsätze eingehen.",
  "gear.display.hidePortraits.label": "Spielerporträts ausblenden",
  "gear.display.hidePortraits.hint": "Blendet die Porträtkreise der anderen Spieler auf den Kacheln aus. Ihr eigenes Symbol bleibt sichtbar.",
  "gear.display.fullscreenLandscape.label": "Vollbild im Querformat",
  "gear.display.fullscreenLandscape.hint":
    "Auf Mobilgeräten blendet die nächste Berührung im Querformat die Browserleiste aus. Auf dem iPhone bleibt sie kompakt; Zum Home-Bildschirm hinzufügen bietet echtes Vollbild.",
  "gear.display.replayTour.label": "Willkommenstour wiederholen",
  "gear.display.replayTour.hint": "Öffnet die Willkommenstour erneut ab Schritt eins.",
  "gear.display.couch.label": "Großer Text (TV/Couch)",
  "gear.display.headerCollapse.label": "Kopfzeile einklappen",
  "gear.display.headerCollapse.hint": "Klappt die obere Leiste weg, damit Spielfeld und Karten den Bildschirm füllen. Der Pfeil in der Kopfzeile holt sie zurück.",
  "gear.display.couch.hint":
    "Vergrößert den Lesetext im ganzen Spiel: Chat, Doku, Beschriftungen und Geldbeträge, ausgelegt auf das Spielen vom Sofa aus. Das Spielfeld behält sein Layout. Lässt sich auch mit ?couch=1 in der Adresse einschalten.",
  "gear.display.couch.suggested": "Dies wirkt wie ein TV- oder Konsolen-Browser. Großer Text ist für diesen Bildschirm gemacht.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Enthüllungen",
  "gear.reveals.sectionAria": "Enthüllungseinstellungen",
  "gear.reveals.turbo.label": "Turbo-Enthüllungen",
  "gear.reveals.turbo.hint":
    "Zieht die Enthüllungsshow im Schnelldurchlauf durch, damit Sie schneller bei Ihrem Ergebnis sind. Große Momente bekommen trotzdem ihren Auftritt. Standardmäßig aus, alle anderen sehen weiter die volle Show.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Ton",
  "gear.sound.sectionAria": "Toneinstellungen",
  "gear.sound.sfx.label": "Soundeffekte",
  "gear.sound.sfx.hint":
    "Chip-Klicks, Rundenstart und Sperre, das Gewinnerrad und die Enthüllungsshow. Alles entsteht direkt in Ihrem Browser, nichts muss geladen werden.",
  "gear.sound.music.label": "Musik",
  "gear.sound.music.hint":
    "Folgt der Runde: Sie baut sich während der Wetten auf, zieht in den letzten Sekunden an und fällt für die Enthüllung ab. Startet nach Ihrem ersten Tipp oder Tastendruck und pausiert, wenn Sie den Tab wechseln.",
  "gear.sound.musicStyle.label": "Musikstil",
  "gear.sound.musicStyle.piano": "Ruhiges Klavier",
  "gear.sound.musicStyle.snowmelt": "Schneeschmelze",
  "gear.sound.musicStyle.hearthfire": "Herdfeuer",
  "gear.sound.musicStyle.grotto": "Goldene Grotte",
  "gear.sound.musicStyle.arcade": "Arcade-Rausch",
  "gear.sound.musicStyle.kart": "Kart-Rallye",
  "gear.sound.musicStyle.galaxy": "Sternenwalzer",
  "gear.sound.musicStyle.hint": "Ruhiges Klavier ist eine sanfte, unaufgeregte Melodie. Arcade-Rausch ist hell und schnell. Der Wechsel greift mitten in der Runde beim nächsten Takt.",
  "gear.sound.musicVolume.label": "Musiklautstärke",
  "gear.sound.sfxVolume.label": "Effektlautstärke",
  "gear.sound.volume.label": "Lautstärke",
  "gear.sound.volume.aria": "Gesamtlautstärke",
  "gear.sound.volume.hint": "Eine Gesamtlautstärke für Effekte und Musik zusammen.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Auto-Verkauf",
  "gear.autosell.sectionAria": "Auto-Verkaufsregeln",
  "gear.autosell.intro":
    "Einmal einstellen, und jeder passende Gewinn verkauft sich von selbst zurück, ohne Behalten/Verkaufen-Abfrage. Alles, was nicht passt, fragt weiter nach, wie bisher.",
  "gear.autosell.everyWin.label": "Alle Gewinne verkaufen",
  "gear.autosell.everyWin.hint":
    "Zahlt jede gewonnene Karte sofort zum Rückkaufsatz aus, ohne Behalten-oder-Verkaufen-Abfrage. Grails werden nie automatisch verkauft. Das ist die Abkürzung, um alle vier Seltenheits-Schalter unten zu aktivieren.",
  "gear.autosell.belowValue.label": "Verkaufen, wenn Wert unter",
  "gear.autosell.placeholderOff": "aus",
  "gear.autosell.rarity.label": "Nach Seltenheit",
  "gear.autosell.rarity.aria": "Auto-Verkauf nach Seltenheit",
  "gear.autosell.rarity.hint":
    "CollectorCrypt-Seltenheitsstufen, ausgelesen aus der Pack-Maschine, aus der jede Karte stammt. Die genaue Wertspanne einer Stufe verschiebt sich je Pack: Eine $200-Karte kann in einer Maschine selten und in einer teureren häufig sein.",
  "gear.autosell.nonVintage.label": "Nicht-Vintage verkaufen",
  "gear.autosell.belowGrade.label": "Verkaufen, wenn Grade unter",
  "gear.autosell.grader.label": "Nach Gutachter",
  "gear.autosell.grader.hint":
    "Lassen Sie einen Gutachter angehakt, dann verkaufen sich nur dessen Karten unter dem eingestellten Grade automatisch. Nehmen Sie den Haken weg, verkauft sich jede Karte dieses Gutachters. Nehmen Sie alle Haken weg, verkauft sich jeder Gewinn. Gutachter nutzen unterschiedliche Skalen, jede Untergrenze steht für sich.",
  "gear.autosell.grader.aria": "Auto-Verkauf nach Gutachter",
  "gear.autosell.grader.keep": "BEHALTEN",
  "gear.autosell.grader.sellAll": "ALLE VERKAUFEN",
  "gear.autosell.grader.other": "Andere / ohne Grading",
  "gear.autosell.grader.placeholderKeepAll": "alle behalten",
  "gear.autosell.grader.placeholderSellAll": "alle verkaufen",
  "gear.autosell.grader.ariaGradeSuffix": "unter diesem Grade verkaufen",
  "gear.autosell.summaryActive": "Aktiv:",
  "gear.autosell.summaryNone": "Keine Auto-Verkaufsregeln gesetzt. Bei jedem Gewinn werden Sie weiter gefragt, ob Sie behalten oder verkaufen.",
  "gear.autosell.turnOffAll": "ALLE AUS",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Tastenkürzel",
  "gear.hotkeys.sectionAria": "Wett-Tastenkürzel",
  "gear.hotkeys.intro":
    "Drücken Sie die Taste einer Kachel, um mit Ihrem aktuellen Einsatz auf sie zu setzen, ganz ohne Maus. Klicken Sie unten auf eine Taste und drücken Sie dann die gewünschte. Zwei Kacheln können sich keine Taste teilen, eine Neubelegung verschiebt sie also. Esc bricht ab, Rücktaste löscht.",
  "gear.hotkeys.enabled.label": "Wetten per Zifferntaste",
  "gear.hotkeys.enabled.hintOn": "Die Tasten sind während der Wettphase aktiv. Ein Druck auf die Taste einer Kachel setzt sofort.",
  "gear.hotkeys.enabled.hintOff": "Die Tasten sind aus. Ein Druck auf die Taste einer Kachel setzt nichts.",
  "gear.hotkeys.enabled.hintUnset": "Noch nicht entschieden. Schalten Sie die Tasten hier ein, oder drücken Sie während der Wettphase die Taste einer Kachel und wählen Sie Aktivieren.",
  "gear.hotkeys.listAria": "Tastenkürzel je Kachel",
  "gear.hotkeys.tileLabel": "Kachel {n}",
  "gear.hotkeys.pressKeyPrompt": "Taste drücken…",
  "gear.hotkeys.setKey": "Belegen",
  "gear.hotkeys.clear": "Löschen",
  "gear.hotkeys.ariaPressToBind": "Taste drücken, um sie Kachel {n} zuzuweisen",
  "gear.hotkeys.ariaShortcut": "Kachel {n}, Kürzel {key}. Klicken zum Neubelegen.",
  "gear.hotkeys.ariaNoShortcut": "Kachel {n} hat kein Kürzel. Klicken, um eines zu belegen.",
  "gear.hotkeys.ariaClearShortcut": "Kürzel für Kachel {n} löschen",
  "gear.hotkeys.unboundWarning": "Keine Taste für {list} belegt. Diese Kacheln haben kein Tastenkürzel, bis Sie eines festlegen.",
  "gear.hotkeys.resetButton": "Zurücksetzen",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "attn ROYALE Bereiche",
  "nav.board": "SPIELFELD",
  "nav.results": "ERGEBNISSE",
  "nav.rankingsFull": "RANGLISTE",
  "nav.rankingsShort": "RANG",
  "nav.collectionFull": "SAMMLUNG",
  "nav.collectionShort": "KARTEN",
  "nav.profile": "PROFIL",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Spielfeld",
  "mobileNav.results": "Ergebnisse",
  "mobileNav.ladder": "Rangliste",
  "mobileNav.collection": "Sammlung",
  "mobileNav.profile": "Profil",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Doku",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values. The metrics rail
  // is fixed width: those four labels stay as short as German allows.
  "shell.route.aria": "attn ROYALE Lab",
  "shell.header.statusAria": "Rundenstatus",
  "shell.header.collapse": "Kopfzeile ausblenden",
  "shell.header.expand": "Kopfzeile einblenden",
  "shell.header.round": "Runde #{n}",
  "shell.header.turboTitle": "Beschleunigter Rundentakt",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Rundenübersicht",
  "shell.metrics.totalPool": "Gesamtpool",
  "shell.metrics.packsLive": "Packs im Spiel",
  "shell.metrics.yourStake": "Ihr Einsatz",
  "shell.metrics.selectedBet": "Einsatzgröße",
  "shell.board.aria": "attn ROYALE Spielfeld",
  "shell.board.label": "Spielfeld",
  "shell.board.phaseOpen": "Kachel anklicken und unterstützen, der Einsatz setzt sich in den besten Pack-Stapel um",
  "shell.board.phaseLock": "Gesperrt · Packs öffnen",
  "shell.board.phaseSettled": "Runde abgerechnet",
  "shell.board.metaOpen": "Pool {pool} · 3% speisen die Jagd · Packs öffnen bei Sperre",
  "shell.board.metaClosed": "Eine Kachel gewinnt den Pool, per überprüfbarer gewichteter Quote.",
  "shell.board.reopenReveal": "↗ Enthüllung erneut öffnen",
  "shell.connectNudge":
    "Betreten Sie das Spiel und zahlen Sie ein, um Kacheln zu unterstützen. Die Runden laufen im Hintergrund weiter.",
  "shell.decision.cardFallback": "Ihre Karte",
  "shell.mobile.close": "Schließen",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Tischchat öffnen",
  "shell.mobile.chatCloseAria": "Tischchat schließen",
  "shell.mobile.cards": "Karten",
  "shell.mobile.cardsOpenAria": "Ihre Karten öffnen, zum Verkaufen oder Auszahlen",
  "shell.mobile.cardsCloseAria": "Ihre Karten schließen",
  "shell.mobile.players": "Spieler",
  "shell.mobile.playersOpenAria": "Spieler öffnen, sortiert nach Einsatz",
  "shell.mobile.playersCloseAria": "Spieler schließen",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "Spiel-USDC",
  "runtime.rail.privySessionCredit": "Privy-Sitzungsguthaben",
  "runtime.rail.houseCredit": "Guthaben der Bank",
  "runtime.rail.connectPrivy": "Privy verbinden und Spiel-USDC aufladen",
  "runtime.rail.privySession": "Privy-Sitzung",
  "runtime.rail.depositAction": "+{amount} {label} aufladen · {source}",
  "runtime.rail.privyAccount": "Privy-Konto",
  "runtime.rail.house": "Bank",
  "runtime.rail.depositReceipt": "Quittung {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Tippen Sie ein Pack an, um {amount} zu setzen. Jede Kachel behält außerdem ihr eigenes +{low} / +{high}.",
  "runtime.rail.sellBack": "Zurückverkaufen → +{amount} aufs Guthaben",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "Sie",
  "runtime.recap.topBacker": "Größter Unterstützer",
  "runtime.recap.topCardOutcome": "Topkarte · behalten oder verkaufen",
  "runtime.recap.backer": "Unterstützer",
  "runtime.recap.cardWon": "Karte gewonnen",
  "runtime.recap.chaseLootReleased": "Jagd-Beute freigegeben",
  "runtime.recap.theChase": "Die Jagd",
  "runtime.recap.sweptIntoVault": "in den Tresor gewandert",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "Protokollgebühr",
  "runtime.recap.soldBack": "Zurückverkauft",
  "runtime.recap.intoSplit": "+{amount} in die Aufteilung",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "Die X-Verbindung ist gerade nicht verfügbar.",
  "runtime.xProfile.connected": "Verbunden",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Unbekannte Karte",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "GEWONNEN",
  "runtime.winShare.headlineGrailPull": "GRAIL-ZIEHUNG",
  "runtime.winShare.headlineCardsWon": "KARTEN GEWONNEN",
  "runtime.winShare.cardInImage": "Karte im Bild.",
  "runtime.winShare.receiptInImage": "Quittung im Bild.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Auszahlungen sind gerade offline. Es wurde kein Geld bewegt.",
  "runtime.serverWallet.noSigner": "Für diese Sitzung ist keine signierende Wallet verbunden. Es wurde kein Geld bewegt.",
  "runtime.serverWallet.nonceUnavailable": "Der Server hat keine Money-Auth-Nonce für die Auszahlung geliefert.",
  "runtime.serverWallet.signatureUnavailable": "Die Wallet hat keine Signatur über die Auszahlungs-Nonce zurückgegeben.",
  "runtime.serverWallet.boundaryLabel": "Tischguthaben und USDC der Server-Wallet sind zwei getrennte Guthaben.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Dieser Browser kann den Bildschirm nicht aufnehmen.",
  "runtime.video.noRecorderFormat": "Dieser Browser bietet kein MediaRecorder-Videoformat.",
  "runtime.video.canceled": "Rendern abgebrochen.",
  "runtime.video.unreachable": "Der Render-Dienst unter {url} ist nicht erreichbar.",
  "runtime.video.rejected": "Der Render-Dienst hat diese Runde abgelehnt: {detail}",
  "runtime.video.requestFailed": "Render-Anfrage fehlgeschlagen ({status}).",
  "runtime.video.noJobId": "Der Render-Dienst hat keine Job-ID zurückgegeben.",
  "runtime.video.lostJob": "Der Render-Job ist verloren gegangen ({status}).",
  "runtime.video.lostContact": "Beim Rendern ist die Verbindung zum Render-Dienst abgerissen.",
  "runtime.video.renderFailed": "Rendern fehlgeschlagen: {error}.",
  "runtime.video.unknownError": "unbekannter Fehler",
  "runtime.video.downloadFailed": "Das Video ist fertig, ließ sich aber nicht herunterladen.",
  "runtime.video.downloadHttpFailed": "Das Video ist fertig, der Download ist fehlgeschlagen ({status}).",
  "runtime.video.emptyVideo": "Der Render-Dienst hat ein leeres Video geliefert.",
  "runtime.video.shareTagline": "Pack-Schlacht mit überprüfbarer Ziehung. Runde ansehen:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Raum ist live. Runden starten automatisch: {seconds}s offen, dann die Enthüllung.",
  "runtime.game.chaseVault": "Der Jagd-Tresor",
  "runtime.game.aTile": "eine Kachel",
  "runtime.game.aPack": "ein Pack",
  "runtime.game.theCard": "die Karte",
  "runtime.game.collectedSplit": "Runde {round} · {amount} USDC aus der Aufteilung kassiert.",
  "runtime.game.chaseDropSplit": "Runde {round} · Die Jagd ließ {award} auf Ihre Kachel fallen · Ihr Anteil: {amount} USDC.",
  "runtime.game.grailSecured": "Grail gesichert: {card} ({amount}) in Ihrer Sammlung behalten.",
  "runtime.game.keptCard": "{card} ({amount}) behalten → in Ihre Sammlung gelegt.",
  "runtime.game.soldCardSettle": "{card} für {amount} USDC zurückverkauft ({pct}% von {value}).",
  "runtime.game.roundVoidedRefund":
    "Runde {round} annulliert. Keine Packs geöffnet, also keine Ziehung nach Kartenwert. Ihr Einsatz von {amount} wurde erstattet.",
  "runtime.game.roundVoidedAll":
    "Runde {round} annulliert. Keine Packs geöffnet, also keine Ziehung nach Kartenwert. Alle Einsätze wurden erstattet.",
  "runtime.game.chaseFiredYours.one": "Die Jagd hat ausgelöst: {n} Karte ({amount}) auf Ihre Kachel {tile} freigegeben.",
  "runtime.game.chaseFiredYours.other": "Die Jagd hat ausgelöst: {n} Karten ({amount}) auf Ihre Kachel {tile} freigegeben.",
  "runtime.game.chaseFiredTable.one":
    "Die Jagd hat in Runde {round} ausgelöst: {award} + {n} Karte fielen auf {tile}, aufgeteilt unter ihren Unterstützern.",
  "runtime.game.chaseFiredTable.other":
    "Die Jagd hat in Runde {round} ausgelöst: {award} + {n} Karten fielen auf {tile}, aufgeteilt unter ihren Unterstützern.",
  "runtime.game.cardsAssigned.one": "{n} Karte Ihnen zugeteilt ({amount}) → Sammlung.",
  "runtime.game.cardsAssigned.other": "{n} Karten Ihnen zugeteilt ({amount}) → Sammlung.",
  "runtime.game.cardPoolsLive": "Kartenpools live: {cards} Karten in {pools} CollectorCrypt-Maschinenpools.",
  "runtime.game.minBid": "Der Mindesteinsatz liegt bei {amount}. Erhöhen Sie den Einsatz und setzen Sie erneut.",
  "runtime.game.resolveFailed": "Diese Runde konnte nicht aufgelöst werden, es wurde nichts abgerechnet. Die nächste Runde startet normal.",
  "runtime.game.stakeRefused": "Dieser Einsatz ist zu groß für {tile}. Es wurde nichts abgebucht. Verringern Sie ihn und versuchen Sie es erneut.",
  "runtime.game.shortfallBack":
    "Zu wenig USDC, um {tile} mit {amount} zu unterstützen. Sie haben {held}. Zahlen Sie ein, um weiterzuspielen.",
  "runtime.game.shortfallNextPack":
    "Zu wenig USDC für das nächste Pack auf {tile}. Nötig sind {amount}, Sie haben {held}. Zahlen Sie ein, um weiterzuspielen.",
  "runtime.game.youBacked": "Sie haben {tile} mit {amount} unterstützt.",
  "runtime.game.packCompleted": "Sie haben das nächste Pack auf {tile} vollgemacht (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "{cards} für {amount} USDC verkauft (CC-Rückkauf), um einen Einsatz zu finanzieren.",
  "runtime.game.backedFunded": "{tile} mit {amount} unterstützt (aus dem Bestand finanziert).",
  "runtime.game.demoStakesRefunded":
    "Demo-Einsätze gelöscht: {amount}, die Sie angeklickt hatten, wurden erstattet. Sie starten bei $0.",
  "runtime.game.demoStakesCleared": "Demo-Einsätze gelöscht: Sie starten jede Runde bei $0, bis Sie eine Kachel unterstützen.",
  "runtime.game.deposited": "{amount} USDC auf Ihre Wallet eingezahlt.",
  "runtime.game.referralBonus": "Empfehlungsbonus gutgeschrieben: +{amount} USDC.",
  "runtime.game.signedAndSent": "{amount} USDC auf {cluster} signiert und gesendet · Sig {sig}….",
  "runtime.game.signedNoBroadcast":
    "{amount} USDC auf {cluster} signiert ({method}, keine Chain-Übertragung) · Sig {sig}….",
  "runtime.game.soldCard": "{card} für {amount} USDC verkauft ({pct}% Rückkauf).",
} as Record<string, string>;
