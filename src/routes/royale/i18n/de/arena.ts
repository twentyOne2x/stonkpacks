// German (Deutsch): "arena" segment - every user-visible string from
// pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the rail,
// the wheel stage + leader-line callouts, the clock, the snipe tray, the
// double-bid opt-in dialog, and the lock->reveal cinema's three beats).
// Same key set as en/arena.ts. See royaleI18n.ts's file header for the
// {token} interpolation convention and the no-em-dash / brand-terms-stay-
// English rules that apply to every locale.
//
// REGISTER: formal (Siezen) throughout, matching the rest of the German
// dictionary. Every address form is Sie/Ihr/Ihnen, including imperatives.
//
// HOUSE STYLE: "Chase" (the jackpot feature) IS translated in German and
// always reads "die Jagd" (see de/misc.ts, de/docs.ts). "Heat" (the
// uncarded-USDC balance) stays English as an in-game proper term, same tier
// as the five pack tier names.
export default {
  "arena.you": "SIE",
  "arena.youAvatarLetter": "S",
  "arena.common.card": "Karte",
  "arena.common.cards": "Karten",
  "arena.matchLabel": "MATCH #{n}",
  "arena.pageTitle": "Kartenarena",
  "arena.backToBoard": "← Zurück zum Spielfeld",

  "arena.rail.ariaLabel": "Ihre Sammlung",
  "arena.rail.heading": "IHRE SAMMLUNG",
  "arena.rail.practiceNote": "Übungsset. Gewinnen Sie Runden auf dem Spielfeld, um diese Leiste mit eigenen Karten zu füllen.",
  "arena.rail.emptyNote": "Keine Karten auf der Hand. Gewinnen Sie den Pot, um Ihren Anteil zurückzuholen.",
  "arena.rail.enterWheel": "RAD BETRETEN",
  "arena.rail.armSnipe": "SNIPE SCHARF",
  "arena.rail.hint": "Doppelklick auf eine Karte setzt sie. Oder Karten auswählen und RAD BETRETEN drücken. Leertaste wählt aus, A macht den Snipe scharf.",

  "arena.railCard.armedSuffix": "Scharf für den Snipe.",
  "arena.railCard.hint": "Leertaste wählt sie aus, A macht den Snipe scharf. Doppelklick setzt sie in die Arena.",
  "arena.railCard.armedTag": "SCHARF",

  "arena.snipe.trayHeading": "SNIPE IST SCHARF",
  "arena.snipe.disarm": "ENTSCHÄRFEN",
  "arena.snipe.firesAt": "Feuert bei T-minus 2s",
  "arena.snipe.carries": "Wird ins nächste Match übernommen",

  "arena.board.sectionAriaLabel": "Arena-Rad",
  "arena.board.noCap": "Kein Karten-Limit. Nur die Uhr sperrt.",
  "arena.board.wheelDecides": "Das Rad entscheidet",
  "arena.board.nextMatchLabel": "Nächstes Match in",
  "arena.board.potLabel": "POT",
  "arena.board.wheelAriaEnter": "{count} ausgewählte {cardWord} ins Rad setzen",
  "arena.board.wheelAriaIdle": "Das Rad. Wählen Sie Karten aus Ihrer Sammlung aus, um sie zu setzen.",
  "arena.board.youWin": "SIE GEWINNEN",
  "arena.board.nameWins": "{name} GEWINNT",
  "arena.board.emptyWheelNote": "Das Rad ist offen. Setzen Sie Karten statt Bargeld: Ihr Wertanteil bestimmt Ihren Bogen und Ihre Gewinnchance. Die Jagd nimmt 0 %. Das Protokoll nutzt eine 7-%-Gebührenregel für ganze Karten; der Gewinner erhält alle übrigen Karten.",
  "arena.board.tableHint": "Ihre Einsätze drehen sich als Ihr Wertanteil im Rad mit. Ihr Bogen ist Ihre Quote.",
  "arena.board.resultsLink": "Letzte Rundenergebnisse →",

  "arena.clock.locked": "GESPERRT",
  "arena.clock.settled": "ABGERECHNET",
  "arena.clock.locksIn": "SPERRT IN",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Show schließen",
  "arena.cinema.closeTitle": "Schließen (Esc)",
  "arena.cinema.beatCopy.contestants": "DIE TEILNEHMER",
  "arena.cinema.beatCopy.spin": "DER SPIN",
  "arena.cinema.beatCopy.settle": "DIE ABRECHNUNG",
  "arena.cinema.beatCopyShort.contestants": "SPIELER",
  "arena.cinema.beatCopyShort.spin": "SPIN",
  "arena.cinema.beatCopyShort.settle": "ABRECHNUNG",
  "arena.cinema.contestantsAriaLabel": "Die Teilnehmer",
  "arena.cinema.contestantsHeadline": "DIE TEILNEHMER",
  "arena.cinema.oddsToWin": "{pct}% CHANCE",
  "arena.cinema.hintContestants": "Das Rad entscheidet. Zum Drehen klicken.",
  "arena.cinema.spinAriaLabel": "Der Rad-Spin",
  "arena.cinema.lockedOn": "ANGEPEILT",
  "arena.cinema.hintSpin": "Zum Überspringen klicken.",
  "arena.cinema.settleAriaLabel": "Die Abrechnung",
  "arena.cinema.winnerTag": "GEWINNER",
  "arena.cinema.youTakePot": "SIE RÄUMEN DEN POT AB",
  "arena.cinema.takesPot": "RÄUMT DEN POT AB",
  "arena.cinema.shelfWinner": "AN DEN GEWINNER",
  "arena.cinema.shelfChase": "DIE JAGD",
  "arena.cinema.shelfProtocol": "PROTOKOLL",
  "arena.cinema.smallPotNote": "Die Jagd nimmt nichts. Die 7-%-Regel des Protokolls hat {count} {cardWord} ausgewählt; der Gewinner erhält alle übrigen Karten.",
  "arena.cinema.resultsLink": "Letzte Rundenergebnisse",
  "arena.cinema.hintSettle": "Irgendwo klicken, um zur Arena zurückzukehren.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} an den Gewinner",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Auto-Einsatz bei Doppelklick?",
  "arena.doubleBid.body": "Ein Doppelklick auf eine Karte in Ihrer Sammlung setzt sie direkt in die Arena. Einschalten?",
  "arena.doubleBid.enable": "Aktivieren",
  "arena.doubleBid.dismiss": "Nicht jetzt",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "VERBINDUNG ZU CARD ARENA",
  "arena.backend.loadingBody": "Die Live-Version der Arena und Ihre Spielersitzung werden geprüft…",
  "arena.backend.loadingCollection": "Ihre Sammlung wird geprüft…",
  "arena.backend.mainnetPreparingTitle": "MAINNET-ARENA IST VERBUNDEN",
  "arena.backend.mainnetPreparingBody": "Diese exakte schreibgeschützte Version ist intakt. Finanzierung, Kartenkauf, Einstieg, Ziehung und Abrechnung bleiben deaktiviert.",
  "arena.backend.mainnetPreparingCollection": "Es wurden keine Mainnet-Karten gekauft oder bewegt. Die Arena bleibt schreibgeschützt, bis der separat autorisierte Bestand bereit ist.",
  "arena.backend.mainnetRelease": "Version {commit} · Deployment {deployment} · keine Signaturen, Broadcasts, Effekte oder Duplikate",
  "arena.backend.unavailableTitle": "CARD ARENA WIRD AKTUALISIERT",
  "arena.backend.unavailableBody": "Einstiege pausieren, bis genau diese Spielversion verfügbar ist. Ihre Karten wurden nicht bewegt.",
  "arena.backend.unavailableCollection": "Sammlung nicht verfügbar, während die Arena aktualisiert wird.",
  "arena.backend.connectTitle": "ZUM SPIELEN VERBINDEN",
  "arena.backend.connectBody": "Für das Laden Ihrer anbietergebundenen Karten und den Eintritt ins Rad ist eine geprüfte Privy-Sitzung nötig.",
  "arena.backend.connectCollection": "Verbinden Sie Ihre Spielersitzung, um Ihre Karten zu laden.",
  "arena.backend.retry": "ERNEUT VERSUCHEN",
} as Record<string, string>;
