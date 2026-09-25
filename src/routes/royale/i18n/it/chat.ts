// Italian (Italiano): "chat" segment. Same key set as en/chat.ts, covering
// RoyaleChatPanel.tsx, RoyaleChatMessageBody.tsx, royaleChatModel.ts
// (ambient chatter + table-event copy) and royaleChatLinks.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the no-em-dash / brand-terms-stay-English /
// numbers-and-currency-stay-literal rules that apply to every locale.
//
// LOCALE-FROZEN NOTE (inherited from en/chat.ts): chat messages are composed
// once at post time and stored as plain strings, so switching language mid
// session never rewrites history already in the feed. Expected, not a bug.
//
// Register notes: informal "tu", casual table-talk, the way Italian players
// actually type in a live chat (short lines, no polite forms). No casino
// "chip(s)" framing (owner rule, packs-only): the ambient pool talks about
// "pack" and "livello", never "fiche". "snipe" is kept and verbed as the
// loanword "snipare"/"sniper", and "pull" (the card a pack yields) is kept as
// the invariable loanword the Italian TCG scene uses, matching the board,
// misc and docs segments. "whale" -> "balena", the standard Italian gambling
// slang term. "the Chase" -> "la Caccia" (house style). "Mythic" and "Grail"
// are pack-tier brand names and stay English per the hard rule.
export default {
  "chat.rooms.table": "Tavolo",
  "chat.rooms.sendTo": "Invia a",
  "chat.rooms.joinHint": "Punta su una casella per sbloccare la sua stanza.",
  "chat.rooms.messageTargets": "Stanze del messaggio",
  "chat.composer.sendFailed": "Messaggio non inviato. Riprova.",
  "chat.composer.audienceChanged": "La stanza è cambiata. Il messaggio non inviato è stato cancellato.",
  "chat.composer.sessionUnavailable": "Sessione chat non disponibile. Aggiorna e riprova.",
  "chat.auth.tileLeadBold": "Punta su una casella per chattare",
  "chat.auth.tileBody": ". Il tavolo e le stanze delle caselle si sbloccano dopo il primo pack accettato.",
  "chat.auth.sessionUnavailableBold": "Sessione chat non disponibile",
  "chat.auth.sessionUnavailableBody": ". Aggiorna per ripristinare l'invio sicuro.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Chat del tavolo",
  "chat.header.title": "Chat del tavolo",
  "chat.header.fontControlAriaLabel": "Dimensione testo chat",
  "chat.header.fontSmaller": "Testo chat più piccolo",
  "chat.header.fontLarger": "Testo chat più grande",
  "chat.header.collapseShow": "Mostra chat",
  "chat.header.collapseHide": "Nascondi chat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "PULL GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "ROUND #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Apre il risultato del round in una nuova scheda.",
  "chat.event.wonByPrefix": "vinto da",
  "chat.event.wonBy": "vinto da {name}",
  "chat.event.foldedIntoPot": "finita nel montepremi",
  "chat.event.roundWinsTitle": "{tile} vince {pot}",
  "chat.event.bestPull": "miglior pull {name} ({value})",
  "chat.event.chaseAward": "Caccia +{amount}",
  "chat.event.youWon": "tu +{amount}",
  "chat.event.youLost": "hai perso",
  "chat.message.showOriginal": "tradotto · mostra originale",
  "chat.message.showTranslation": "mostra traduzione",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Vai agli ultimi",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Qui si vedono solo i link attn.",
  "chat.composer.rateLimitNotice": "Stai scrivendo troppo in fretta. Riprova tra un attimo.",
  "chat.composer.placeholder": "Scrivi qualcosa…",
  "chat.composer.inputAriaLabel": "Messaggio chat",
  "chat.composer.sendAriaLabel": "Invia messaggio",
  "chat.composer.sendLabel": "Invia",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Accedi per scrivere",
  "chat.auth.body": ", la stanza è in sola lettura finché non ti connetti (in alto a destra).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Apre la pagina della carta in una nuova scheda",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Apre la pagina della carta in una scheda in secondo piano.",
  "chat.messageBody.viewCard": "Vedi carta",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Pagina carta",
  "chat.link.roundResult": "Risultato round",
  "chat.link.profile": "Profilo",
  "chat.link.collection": "Collezione",
  "chat.link.theBoard": "Il tabellone",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "la casella 3 si riempie in fretta",
  "chat.chatter.line02": "ma chi è che snipa il leader a ogni round",
  "chat.chatter.line03": "quel pull di Grail dell'ultimo round è stato assurdo",
  "chat.chatter.line04": "rally facile, tutti addosso al leader",
  "chat.chatter.line05": "la casella 7 appena aperta mi sembra sottovalutata",
  "chat.chatter.line06": "tengo i pack per gli ultimi cinque secondi",
  "chat.chatter.line07": "qualcuno ha appena buttato $250 sulla casella 2, rispetto",
  "chat.chatter.line08": "la quota della casella 6 ormai è carissima",
  "chat.chatter.line09": "un altro pack e quella casella sale di livello",
  "chat.chatter.line10": "i soliti sniper mi rovinano le probabilità",
  "chat.chatter.line11": "continuo a beccare carte scarse, prima o poi mi tocca un bel pull",
  "chat.chatter.line12": "occhio alla balena, becca sempre la casella vincente",
  "chat.chatter.line13": "la casella 1 non becca niente da tutta la sessione, ormai tocca a lei",
  "chat.chatter.line14": "ho venduto subito l'ultimo pull, il riacquisto mi è sembrato onesto",
  "chat.chatter.line15": "arriva un contro-snipe, scommettici",
  "chat.chatter.line16": "il leader è cambiato due volte in dieci secondi",
  "chat.chatter.line17": "qualcun altro sta inseguendo la scala Mythic stasera",
  "chat.chatter.line18": "ho tenuto la carta, l'artwork era troppo bello per venderlo",
  "chat.chatter.line19": "i pack last minute non resettano mai l'orologio, adoro",
  "chat.chatter.line20": "il montepremi della casella 8 è appena raddoppiato, bolle qualcosa",
  "chat.chatter.line21": "pack piccoli all'inizio, grossi alla fine: si gioca solo così",
  "chat.chatter.line22": "quel timer tieni/vendi mi frega ogni volta",
  "chat.chatter.line23": "adesso gli sfidanti convengono più del leader",
  "chat.chatter.line24": "snipe pulito sulla casella 5, chirurgico",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Pannello del tavolo",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "La mia attività",
  "chat.activity.ariaLabel": "La mia attività privata",
  "chat.activity.filtersAria": "Filtra attività",
  "chat.activity.filter.all": "Tutto",
  "chat.activity.filter.packs": "Pack",
  "chat.activity.filter.bids": "Puntate",
  "chat.activity.filter.rewards": "Premi",
  "chat.activity.filter.feats": "Obiettivi",
  "chat.activity.filter.clan": "Clan",
  "chat.activity.today": "Oggi",
  "chat.activity.yesterday": "Ieri",
  "chat.activity.status.pending": "In attesa",
  "chat.activity.status.finalized": "Finalizzato",
  "chat.activity.status.reversed": "Stornato",
  "chat.activity.finalizedAria": "Ricevuta finalizzata",
  "chat.activity.signInTitle": "Accedi per vedere la cronologia",
  "chat.activity.signInBody": "Qui trovi le ricevute private di pack, puntate, premi, obiettivi e attività del clan.",
  "chat.activity.loading": "Caricamento delle ricevute",
  "chat.activity.loadOlder": "Carica precedenti",
  "chat.activity.points": "{points} punti",
  "chat.activity.event.packBid.title": "Pack giocato",
  "chat.activity.event.packBid.detail": "Puntata sulla casella {tile} finalizzata.",
  "chat.activity.event.roundWon.title": "Casella vincente",
  "chat.activity.event.roundWon.detail": "La casella {tile} ha vinto il round.",
  "chat.activity.event.roundLost.title": "Round concluso",
  "chat.activity.event.roundLost.detail": "La casella {tile} non ha vinto questo round.",
  "chat.activity.event.roundRefunded.title": "Pack rimborsato",
  "chat.activity.event.roundRefunded.detail": "La puntata sulla casella {tile} è stata restituita.",
  "chat.activity.event.chaseWon.title": "Caccia vinta",
  "chat.activity.event.chaseWon.detail": "La Caccia del tabellone ha pagato.",
  "chat.activity.event.achievementDetail": "Sbloccato grazie al tuo gioco.",
  "chat.activity.event.clanAchievementDetail": "Sbloccato con il tuo clan.",
  "chat.activity.unavailableTitle": "Attività non disponibile",
  "chat.activity.unavailableBody": "Non è stato possibile caricare le tue ricevute. Riprova ad aprire il feed privato tra poco.",
  "chat.activity.retry": "Riprova",
  "chat.activity.emptyTitle": "Ancora niente",
  "chat.activity.emptyBody": "Qui appariranno le azioni finalizzate di pack, puntate, premi, obiettivi e attività del clan.",
  "chat.unlock.eyebrow": "Obiettivo sbloccato",
  "chat.unlock.clanEyebrow": "Obiettivo del clan sbloccato",
  "chat.unlock.dismiss": "Chiudi obiettivo",
} as Record<string, string>;
