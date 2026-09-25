// German (Deutsch): "chat" segment. Same key set as en/chat.ts - see that
// file's header for the full source/ownership breakdown (RoyaleChatPanel,
// RoyaleChatMessageBody, royaleChatModel, royaleChatLinks).
//
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-and-currency-stay-literal rules that apply to every locale.
//
// LOCALE-FROZEN NOTE (carried from en/chat.ts): chat messages are composed
// once at post time and stored as plain strings, so a language switch mid
// session only affects new activity, not history already in the feed. This
// is expected, not a bug.
//
// REGISTER: every UI string (header, composer, sign-in note, links) is
// formal (Siezen). The 24 ambient chatter lines are deliberately informal,
// lowercase player banter to match the casual register of the English source
// lines; they are quoted speech, not UI copy, and address nobody directly,
// so they carry no informal address forms either.
//
// "Mythic" in chat.chatter.line17 is the Starter/Elite/Legendary/Grail/
// Mythic PACK TIER brand name and stays in English. "Chase" IS translated in
// German and reads "Jagd" everywhere (house style, see de/misc.ts).
export default {
  "chat.rooms.table": "Tisch",
  "chat.rooms.sendTo": "Senden an",
  "chat.rooms.joinHint": "Setze auf ein Feld, um seinen Raum freizuschalten.",
  "chat.rooms.messageTargets": "Nachrichtenräume",
  "chat.composer.sendFailed": "Nachricht nicht gesendet. Erneut versuchen.",
  "chat.composer.audienceChanged": "Der Raum hat gewechselt. Ihre nicht gesendete Nachricht wurde gelöscht.",
  "chat.composer.sessionUnavailable": "Chat-Sitzung nicht verfügbar. Aktualisieren Sie die Seite und versuchen Sie es erneut.",
  "chat.auth.tileLeadBold": "Setzen Sie auf ein Feld, um zu chatten",
  "chat.auth.tileBody": ". Tisch- und Feldräume werden nach Ihrem ersten bestätigten Pack freigeschaltet.",
  "chat.auth.sessionUnavailableBold": "Chat-Sitzung nicht verfügbar",
  "chat.auth.sessionUnavailableBody": ". Aktualisieren Sie die Seite, um das sichere Senden wiederherzustellen.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Tischchat",
  "chat.header.title": "Tischchat",
  "chat.header.fontControlAriaLabel": "Chat-Textgröße",
  "chat.header.fontSmaller": "Chat-Textgröße verkleinern",
  "chat.header.fontLarger": "Chat-Textgröße vergrößern",
  "chat.header.collapseShow": "Chat anzeigen",
  "chat.header.collapseHide": "Chat ausblenden",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "GRAIL-ZIEHUNG",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "RUNDE #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Öffnet das Rundenergebnis in einem neuen Tab.",
  "chat.event.wonByPrefix": "gewonnen von",
  "chat.event.wonBy": "gewonnen von {name}",
  "chat.event.foldedIntoPot": "in den Pot gewandert",
  "chat.event.roundWinsTitle": "{tile} gewinnt {pot}",
  "chat.event.bestPull": "beste Ziehung {name} ({value})",
  "chat.event.chaseAward": "Jagd +{amount}",
  "chat.event.youWon": "Sie +{amount}",
  "chat.event.youLost": "Sie haben verloren",
  "chat.message.showOriginal": "übersetzt · Original anzeigen",
  "chat.message.showTranslation": "Übersetzung anzeigen",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Zum Neuesten",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Hier werden nur attn-Links angezeigt.",
  "chat.composer.rateLimitNotice": "Etwas zu schnell. Versuchen Sie es gleich noch einmal.",
  "chat.composer.placeholder": "Sagen Sie etwas…",
  "chat.composer.inputAriaLabel": "Chat-Nachricht",
  "chat.composer.sendAriaLabel": "Nachricht senden",
  "chat.composer.sendLabel": "Senden",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Zum Chatten anmelden",
  "chat.auth.body": ", der Raum ist nur lesbar, bis Sie sich verbinden (oben rechts).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Öffnet die Kartenseite in einem neuen Tab",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Öffnet die Kartenseite in einem Hintergrund-Tab.",
  "chat.messageBody.viewCard": "Karte ansehen",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Kartenseite",
  "chat.link.roundResult": "Rundenergebnis",
  "chat.link.profile": "Profil",
  "chat.link.collection": "Sammlung",
  "chat.link.theBoard": "Das Spielfeld",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "kachel 3 füllt sich schnell",
  "chat.chatter.line02": "wer snipet hier jede runde den leader",
  "chat.chatter.line03": "der grail-pull letzte runde war krass",
  "chat.chatter.line04": "leichte rally, alle rauf auf den leader",
  "chat.chatter.line05": "die frische kachel 7 ist mir zu billig bewertet",
  "chat.chatter.line06": "ich halte meine packs bis zu den letzten fünf sekunden",
  "chat.chatter.line07": "jemand hat gerade $250 auf kachel 2 gelegt, respekt",
  "chat.chatter.line08": "der pool-anteil auf kachel 6 ist jetzt viel zu teuer",
  "chat.chatter.line09": "noch ein pack und die kachel steigt eine stufe auf",
  "chat.chatter.line10": "die sniper versauen mir schon wieder die quote",
  "chat.chatter.line11": "nur floor-karten bei mir, ein großer pull ist überfällig",
  "chat.chatter.line12": "achtung, der whale, der trifft immer die gewinner-kachel",
  "chat.chatter.line13": "kachel 1 hat die ganze session nicht getroffen, die ist fällig",
  "chat.chatter.line14": "letzten pull sofort verkauft, der rückkauf war fair",
  "chat.chatter.line15": "counter-snipe incoming, wetten?",
  "chat.chatter.line16": "der leader hat in den letzten zehn sekunden zweimal gewechselt",
  "chat.chatter.line17": "ist heute abend noch wer hinter der Mythic-leiter her",
  "chat.chatter.line18": "karte behalten, das artwork war zu clean zum verkaufen",
  "chat.chatter.line19": "späte packs setzen die uhr nie zurück, herrlich",
  "chat.chatter.line20": "der pool auf kachel 8 hat sich gerade verdoppelt, da braut sich was zusammen",
  "chat.chatter.line21": "kleine packs früh, große packs spät, anders spielt man das nicht",
  "chat.chatter.line22": "der behalten/verkaufen-timer erwischt mich jedes mal",
  "chat.chatter.line23": "die verfolger sind gerade der bessere deal als der leader",
  "chat.chatter.line24": "sauberer snipe auf kachel 5, chirurgisch präzise",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Tischpanel",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "Meine Aktivitäten",
  "chat.activity.ariaLabel": "Meine privaten Aktivitäten",
  "chat.activity.filtersAria": "Aktivitäten filtern",
  "chat.activity.filter.all": "Alle",
  "chat.activity.filter.packs": "Packs",
  "chat.activity.filter.bids": "Einsätze",
  "chat.activity.filter.rewards": "Belohnungen",
  "chat.activity.filter.feats": "Erfolge",
  "chat.activity.filter.clan": "Clan",
  "chat.activity.today": "Heute",
  "chat.activity.yesterday": "Gestern",
  "chat.activity.status.pending": "Ausstehend",
  "chat.activity.status.finalized": "Finalisiert",
  "chat.activity.status.reversed": "Storniert",
  "chat.activity.finalizedAria": "Finaler Beleg",
  "chat.activity.signInTitle": "Melden Sie sich an, um Ihren Verlauf zu sehen",
  "chat.activity.signInBody": "Hier erscheinen Ihre privaten Belege zu Packs, Einsätzen, Belohnungen, Erfolgen und Clan-Aktivitäten.",
  "chat.activity.loading": "Ihre Belege werden geladen",
  "chat.activity.loadOlder": "Ältere laden",
  "chat.activity.points": "{points} Punkte",
  "chat.activity.event.packBid.title": "Pack gespielt",
  "chat.activity.event.packBid.detail": "Einsatz auf Feld {tile} finalisiert.",
  "chat.activity.event.roundWon.title": "Gewinnerfeld",
  "chat.activity.event.roundWon.detail": "Feld {tile} hat die Runde gewonnen.",
  "chat.activity.event.roundLost.title": "Runde abgerechnet",
  "chat.activity.event.roundLost.detail": "Feld {tile} hat diese Runde nicht gewonnen.",
  "chat.activity.event.roundRefunded.title": "Pack erstattet",
  "chat.activity.event.roundRefunded.detail": "Der Einsatz auf Feld {tile} wurde zurückerstattet.",
  "chat.activity.event.chaseWon.title": "Jagd gewonnen",
  "chat.activity.event.chaseWon.detail": "Die Jagd auf dem Spielfeld wurde ausgezahlt.",
  "chat.activity.event.achievementDetail": "Durch Ihr Spiel freigeschaltet.",
  "chat.activity.event.clanAchievementDetail": "Mit Ihrem Clan freigeschaltet.",
  "chat.activity.unavailableTitle": "Aktivität nicht verfügbar",
  "chat.activity.unavailableBody": "Ihre Belege konnten nicht geladen werden. Versuchen Sie den privaten Feed gleich noch einmal.",
  "chat.activity.retry": "Erneut versuchen",
  "chat.activity.emptyTitle": "Hier ist noch nichts",
  "chat.activity.emptyBody": "Finalisierte Pack-, Einsatz-, Belohnungs-, Erfolgs- und Clan-Aktionen erscheinen hier.",
  "chat.unlock.eyebrow": "Erfolg freigeschaltet",
  "chat.unlock.clanEyebrow": "Clan-Erfolg freigeschaltet",
  "chat.unlock.dismiss": "Erfolg ausblenden",
} as Record<string, string>;
