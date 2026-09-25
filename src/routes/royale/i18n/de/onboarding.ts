// German (Deutsch): "onboarding" segment. Same key set as en/onboarding.ts -
// see that file's header for the surface breakdown (RoyaleOnboardingGate,
// RoyaleWelcomeTour, RoyaleRotateGate, RoyaleSettingsOverlay chrome, plus the
// player-chrome leaves: profile validation, presence chip, stream HUD, devnet
// badge, card carousel, fund-shortfall toast).
//
// See royaleI18n.ts for the {token} interpolation convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-literal rules.
//
// REGISTER: formal (Siezen) throughout.
// TERMINOLOGY: a board square is a "Kachel" everywhere in the German
// dictionary (never "Feld"), "graded" is "gegradet", the round "locks"
// ("sperrt"), and "Chase" is translated as "die Jagd".
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "Einladung",
  "onboarding.invite.title": "Nur per Einladung",
  "onboarding.invite.ledeStake":
    "attn ROYALE ist vorerst nur per Einladung zugänglich. Geben Sie Ihren Code ein, sichern Sie sich einen Einsatz von {amount} und nehmen Sie Platz.",
  "onboarding.invite.ledeStarter":
    "attn ROYALE ist vorerst nur per Einladung zugänglich. Geben Sie Ihren Code ein, sichern Sie sich ein kostenloses {amount} Starter-Pack und nehmen Sie Platz.",
  "onboarding.invite.inputPlaceholder": "EINLADUNGSCODE",
  "onboarding.invite.inputAriaLabel": "Einladungscode",
  "onboarding.invite.unlockButton": "Freischalten",
  "onboarding.invite.hint":
    "Noch keinen Code? Fragen Sie die Person, die Sie eingeladen hat, oder fügen Sie Ihren {link}-Link ein.",
  "onboarding.invite.errorInvalidCode": "Geben Sie den Code aus Ihrer Einladung ein.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "Guthaben",
  "onboarding.welcome.grantLabelStarterPack": "Starter-Pack",
  "onboarding.welcome.titleBack": "Willkommen zurück",
  "onboarding.welcome.title": "Willkommen am Tisch",
  "onboarding.welcome.backLede":
    "Machen Sie da weiter, wo Sie aufgehört haben, {name}. Profil und Guthaben liegen auf diesem Gerät.",
  "onboarding.welcome.fallbackName": "Spieler",
  "onboarding.welcome.ledeStake": "Ihre Einladung ist einen Einsatz von {amount} wert. Namen wählen und Platz nehmen.",
  "onboarding.welcome.ledeStarter":
    "Ihre Einladung ist ein kostenloses {amount} Starter-Pack wert. Packs setzen und Platz nehmen.",
  "onboarding.welcome.continueWithX": "Mit X fortfahren",
  "onboarding.welcome.optionalHint": "optional",
  "onboarding.welcome.connectWallet": "Wallet verbinden",
  "onboarding.welcome.playFreeNote": "Spielen Sie sofort kostenlos. Ohne Wallet, ohne Anmeldung.",
  "onboarding.welcome.or": "oder",
  "onboarding.welcome.continueAsTemplate": "Weiter als {name}",
  "onboarding.welcome.fallbackProfileName": "Ihr Profil",
  "onboarding.welcome.close": "Schließen",
  "onboarding.welcome.createProfile": "Profil erstellen",
  "onboarding.welcome.skipGuest": "Als Gast weiterspielen",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Jetzt spielen",
  "onboarding.welcome.pickNameFirst": "Oder zuerst einen Namen wählen",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Profil einrichten",
  "onboarding.profile.xPhotoAlt": "Ihr X-Profilfoto",
  "onboarding.profile.connectedAsTemplate": "Verbunden als {handle}",
  "onboarding.profile.xAccountFallback": "X-Konto",
  "onboarding.profile.walletLabelTemplate": "Wallet {address}",
  "onboarding.profile.displayNameLabel": "Anzeigename",
  "onboarding.profile.displayNamePlaceholder": "Wie sollen wir Sie nennen?",
  "onboarding.profile.handleLabel": "Kennung",
  "onboarding.profile.handlePlaceholder": "ihrname",
  "onboarding.profile.handleHint": "Ihre eindeutige Tisch-ID. Buchstaben, Zahlen und Unterstriche.",
  "onboarding.profile.handleTaken": "Diese Kennung ist auf diesem Gerät schon vergeben.",
  "onboarding.profile.startButtonTemplate": "Jetzt spielen · {amount} aufs Haus",
  "onboarding.profile.back": "Zurück",
  "onboarding.profile.skip": "Überspringen",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "So funktioniert attn ROYALE",
  "onboarding.tour.skip": "Überspringen",
  "onboarding.tour.step1.eyebrow": "01 · Kachel setzen",
  "onboarding.tour.step1.titleUsdc": "Setzen Sie USDC auf die Kacheln, die Ihnen gefallen",
  "onboarding.tour.step1.titlePacks": "Unterstützen Sie mit Packs die Kacheln, die Ihnen gefallen",
  "onboarding.tour.step1.bodyUsdc":
    "Jede Kachel ist ein Platz, den Sie mit USDC unterstützen. Je mehr Sie auf eine Kachel setzen, desto größer Ihr Anteil an ihrem Gewinn. Alles auf eine legen oder auf mehrere verteilen.",
  "onboarding.tour.step1.bodyPacks":
    "Jede Kachel ist ein Platz, den Sie mit Packs unterstützen. Je mehr Sie auf eine Kachel stapeln, desto größer Ihr Anteil an ihrem Gewinn. Eine voll beladen oder auf mehrere verteilen.",
  "onboarding.tour.step2.eyebrow": "02 · Sperren & öffnen",
  "onboarding.tour.step2.title": "Bei der Sperre reißt jede Kachel ihre Packs auf",
  "onboarding.tour.step2.body":
    "Sobald die Runde sperrt, reißt jede unterstützte Kachel ihre Packs auf und zieht live echte gegradete Karten, per überprüfbarer Ziehung, direkt vor Ihren Augen.",
  "onboarding.tour.step3.eyebrow": "03 · Bester Wert gewinnt",
  "onboarding.tour.step3.title": "Die wertvollste Kachel holt den Pool",
  "onboarding.tour.step3.bodyUsdc":
    "Das Gewicht einer Kachel ist der Wert ihrer gezogenen Karte plus ihr USDC. Je schwerer die Kachel, desto besser ihre Quote. Gewinnt sie, teilen Sie sich den gesamten Rundenpool.",
  "onboarding.tour.step3.bodyPacks":
    "Das Gewicht einer Kachel ist der Wert ihrer gezogenen Karte plus die darauf gesetzten Packs. Je schwerer die Kachel, desto besser ihre Quote. Gewinnt sie, teilen Sie sich den gesamten Rundenpool.",
  "onboarding.tour.step4.eyebrow": "04 · Behalten, verkaufen, jagen",
  "onboarding.tour.step4.title": "Auszahlen und die Jagd im Auge behalten",
  "onboarding.tour.step4.body":
    "Behalten Sie Ihre gewonnenen Karten als gegradete Slabs oder verkaufen Sie sie zum Rückkaufsatz zurück. Und die Jagd ist ein wachsender Jackpot, der auf jede Kachel und in jeder Runde fallen kann.",
  "onboarding.tour.back": "Zurück",
  "onboarding.tour.next": "Weiter",
  "onboarding.tour.enterBoard": "Zum Spielfeld",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary (Kachel,
  // Pack, Pool, Runde, setzen; Sie-Form).
  "onboarding.tour.stepTag": "Schritt {n} von {total}",
  "onboarding.tour.spot1.eyebrow": "Ihr Einsatz",
  "onboarding.tour.spot1.title": "Wählen Sie Ihren Pack",
  "onboarding.tour.spot1.body": "Mit Packs wetten Sie. Jeder ist ein versiegelter Pack mit gegradeten TCG-Karten, unterstützt von Collector Crypt. Wählen Sie den Pack, mit dem Sie spielen möchten.",
  "onboarding.tour.spot2.eyebrow": "Stapelgröße",
  "onboarding.tour.spot2.title": "Wählen Sie die Anzahl",
  "onboarding.tour.spot2.body": "Dieser Zähler bestimmt, wie viele Packs jeder Einsatz legt. Einer reicht für den Anfang. Erhöhen Sie ihn, wenn Sie größer setzen wollen.",
  "onboarding.tour.spot3.eyebrow": "Einsatz platzieren",
  "onboarding.tour.spot3.title": "Klicken Sie eine Kachel an, um zu setzen",
  "onboarding.tour.spot3.titleTouch": "Tippen Sie eine Kachel an, um zu setzen",
  "onboarding.tour.spot3.body": "Ein Klick auf eine Kachel legt Ihre Packs darauf. Je mehr Packs Sie auf eine Kachel stapeln, desto größer Ihr Anteil, wenn sie gewinnt. Setzen Sie alles auf eine oder verteilen Sie auf mehrere.",
  "onboarding.tour.spot3.bodyTouch": "Tippen Sie eine Kachel einmal an, um sie vorzubereiten, und tippen Sie erneut, um den Einsatz zu bestätigen. Je mehr Packs Sie auf eine Kachel stapeln, desto größer Ihr Anteil, wenn sie gewinnt.",
  "onboarding.tour.spot4.eyebrow": "Die Runde",
  "onboarding.tour.spot4.title": "Der Pool und die Uhr",
  "onboarding.tour.spot4.body": "Jeder gesetzte Pack auf dem Spielfeld speist diesen Pool. Steht die Uhr auf null, wird gesperrt und jede gesetzte Kachel reißt ihre Packs live auf.",
  "onboarding.tour.spot5.eyebrow": "Die Ziehung",
  "onboarding.tour.spot5.title": "Schwere Kacheln gewinnen öfter",
  "onboarding.tour.spot5.body": "Eine wertgewichtete Zufallsziehung wählt eine Kachel aus. Verliererkacheln geben ihre Karten und Einsätze ab; die Unterstützer der Gewinnerkachel teilen den ausschüttbaren Rundenwert im Verhältnis zu ihrem Einsatz.",
  "onboarding.tour.spot6.eyebrow": "Ihr Geld",
  "onboarding.tour.spot6.title": "Guthaben und Einzahlungen",
  "onboarding.tour.spot6.body": "Ihr Guthaben lebt hier. Laden Sie mit Einzahlen auf und zahlen Sie jederzeit aus. Gewinne landen hier, sobald eine Runde abgerechnet ist.",
  "onboarding.tour.spot7.eyebrow": "Aufs Haus",
  "onboarding.tour.spot7.title": "Ihr gratis Starter-Pack über {amount}",
  "onboarding.tour.spot7.body": "Sie starten mit einem gratis Starter-Pack über {amount}. Er ist bereits im Wähler geladen. Wählen Sie eine Kachel und los.",
  "onboarding.tour.finish": "Jetzt spielen",
 "onboarding.tour.paused": "Die Runde startet - gleich geht es weiter.",
  "onboarding.tour.act2.choice": "Eine Runde abspielen",
  "onboarding.tour.act2.choiceHint": "Etwa 30 Sekunden, inklusive Reveal",
  "onboarding.tour.act2.bettingTitle": "Jedes gesetzte Pack wird zu einem Pool",
  "onboarding.tour.act2.bettingBody": "Spieler stapeln Packs auf Kacheln. Jedes Pack auf dem Board speist einen einzigen Pool, und eine Kachel nimmt alles.",
  "onboarding.tour.act2.drawTitle": "Aus Wert werden Quoten",
  "onboarding.tour.act2.drawBody": "Der Anteil jeder Kachel am Wert aller gezogenen Karten ist ihre Gewinnchance. Eine einzelne überprüfbare, wertgewichtete Zufallsziehung bestimmt den Gewinner.",
  "onboarding.tour.act2.losersTitle": "Jede Verliererkachel gibt ihre Karten ab",
  "onboarding.tour.act2.losersBody": "Ausschüttbare Karten und Bargeld vom gesamten Spielfeld gehen an die Unterstützer der Gewinnerkachel.",
  "onboarding.tour.act2.splitTitle": "Dein Einsatz bestimmt deinen Anteil",
  "onboarding.tour.act2.splitBody": "Die Unterstützer der Gewinnerkachel teilen sich das ausschüttbare Bargeld und die Karten der Runde aus allen Kacheln im Verhältnis zu dem, was jeder in diese Kachel eingesetzt hat.",
  "onboarding.tour.act2.grailCaption": "Die Grail-Zeremonie",
  "onboarding.tour.act2.yourTurnEyebrow": "Du bist dran",
  "onboarding.tour.act2.yourTurnTitle": "Dein Starter-Pack ist bereit",
  "onboarding.tour.act2.yourTurnBody": "Das Board ist wieder live. Wähle ein Feld und setze dein erstes Pack.",
  "onboarding.tour.act2.continue": "In die Runde",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Drehen Sie Ihr Telefon, um attn ROYALE zu spielen",
  "onboarding.rotate.title": "Drehen Sie Ihr Telefon zur Seite",
  "onboarding.rotate.body": "Das Spielfeld spielt sich im Querformat am besten. Drehen Sie das Gerät, um in die Runde zu kommen.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only) --------------
  "onboarding.settingsTitle": "Einstellungen",
  "onboarding.settingsClose": "Einstellungen schließen",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  "onboarding.profileValidation.handleRequired": "Wählen Sie eine Kennung, damit andere Spieler Sie finden.",
  "onboarding.profileValidation.handleTooShort": "Eine Kennung hat mindestens 3 Zeichen.",
  "onboarding.profileValidation.handleCharset": "Nur Buchstaben, Zahlen und Unterstriche.",
  "onboarding.profileValidation.nameRequired": "Geben Sie einen Namen für den Tisch an.",
  "onboarding.profileValidation.nameTooLong": "Bitte unter {n} Zeichen bleiben.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // The tier word sits next to the bare count ("12 Zuschauer") and is reused
  // inside presence.ariaLabel's {tier}, so German uses a NOUN here, not the
  // English participle.
  "onboarding.presence.tierWatching": "Zuschauer",
  "onboarding.presence.tierPlaying": "Spieler",
  "onboarding.presence.youPlaying": "Sie spielen mit: {amount} in dieser Runde gesetzt",
  "onboarding.presence.youWatching": "Sie schauen zu",
  "onboarding.presence.youWatchingBackground": "Sie schauen zu (Hintergrund-Tab)",
  "onboarding.presence.ariaLabel": "{count} {tier} gerade bei attn ROYALE. {you}.",
  "onboarding.presence.popYou": "Sie: {status}",
  "onboarding.presence.otherTabs.one": "+{n} weiterer eigener Tab offen",
  "onboarding.presence.otherTabs.other": "+{n} weitere eigene Tabs offen",
  "onboarding.presence.othersBacking.one": "{n} weiterer unterstützt diese Runde eine Kachel",
  "onboarding.presence.othersBacking.other": "{n} weitere unterstützen diese Runde eine Kachel",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Streamzustand von attn ROYALE",
  "onboarding.streamHud.eyebrow": "Stream",
  "onboarding.streamHud.statusConnecting": "Verbindet",
  "onboarding.streamHud.statusLive": "Live",
  "onboarding.streamHud.statusReconnecting": "Verbindet neu",
  "onboarding.streamHud.statusError": "Sync-Problem",
  "onboarding.streamHud.reconnects.one": "{n} Neuverbindung",
  "onboarding.streamHud.reconnects.other": "{n} Neuverbindungen",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "Dieser Raum rechnet in USDC ab.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Geöffnete Karten",
  "onboarding.carousel.prevCard": "Vorherige Karte",
  "onboarding.carousel.nextCard": "Nächste Karte",
  "onboarding.carousel.showCard": "{name} anzeigen",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "NICHT GENUG USDC",
  "onboarding.fundShortfall.detail": "{slot} zu unterstützen kostet {needed}. Sie haben {balance}.",
  "onboarding.fundShortfall.addFunds": "Einzahlen",
  "onboarding.fundShortfall.dismiss": "Schließen",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "Tippen Sie auf {icon} und dann auf Zum Home-Bildschirm für echtes Vollbild.",
  "onboarding.installHint.fullscreen": "Im Vollbild spielen, ohne Browserleiste.",
  "onboarding.installHint.fullscreenCta": "Vollbild",
  "onboarding.installHint.dismiss": "Schließen",
} as Record<string, string>;
