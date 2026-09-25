// Filipino: "onboarding" segment. Machine-consistent first pass (flagged for
// a native editorial review, same bar as the other freshly-added locales).
// Owns RoyaleOnboardingGate.tsx (the invite + $25 Starter pack + profile
// gate), RoyaleWelcomeTour.tsx (the how-it-works tour), RoyaleRotateGate.tsx
// (the mobile-portrait rotate prompt), RoyaleSettingsOverlay.tsx's two chrome
// strings, royaleProfile.ts's profile-form validation reasons,
// RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx, RoyaleDevnetBadge.tsx,
// RoyaleCardCarousel.tsx and RoyaleFundShortfallToast.tsx.
//
// NOTE: the "attn ROYALE" wordmark itself is never translated anywhere in
// the app - it stays hardcoded English even inside an otherwise-translated
// sentence (onboarding.rotate.ariaLabel, onboarding.tour.ariaLabel).
// "Starter" (the pack tier name) is a brand term and also stays English
// inside onboarding.invite.ledeStarter / onboarding.welcome.ledeStarter.
// Terminology matches the fil/core.ts glossary block ("taya" = bet/stake,
// "pack"/"packs" the mandatory brand loanword, "Mga Setting" = Settings).
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "imbitasyon",
  "onboarding.invite.title": "Sa imbitasyon lang",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "Sa imbitasyon lang muna ang attn ROYALE. Ilagay ang code mo para makuha ang tayang {amount} at umupo sa mesa.",
  "onboarding.invite.ledeStarter": "Sa imbitasyon lang muna ang attn ROYALE. Ilagay ang code mo para makuha ang libreng {amount} Starter pack at umupo sa mesa.",
  "onboarding.invite.inputPlaceholder": "CODE NG IMBITASYON",
  "onboarding.invite.inputAriaLabel": "Code ng imbitasyon",
  "onboarding.invite.unlockButton": "I-unlock",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "Wala ka pang code? Tanungin ang nag-imbita sa iyo, o i-paste ang link mong {link}.",
  "onboarding.invite.errorInvalidCode": "Ilagay ang code ng imbitasyon mula sa imbitasyon mo.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "credit",
  "onboarding.welcome.grantLabelStarterPack": "starter pack",
  "onboarding.welcome.titleBack": "Maligayang pagbabalik",
  "onboarding.welcome.title": "Maligayang pagdating sa mesa",
  "onboarding.welcome.backLede": "Ituloy kung saan ka huminto, {name}. Naka-save ang profile at balanse mo sa device na ito.",
  "onboarding.welcome.fallbackName": "manlalaro",
  "onboarding.welcome.ledeStake": "Valid ang imbitasyon mo para sa tayang {amount}. Mag-set ng pangalan at umupo sa mesa.",
  "onboarding.welcome.ledeStarter": "Valid ang imbitasyon mo para sa libreng {amount} Starter pack. Magtaya ng pack at umupo sa mesa.",
  "onboarding.welcome.continueWithX": "Magpatuloy gamit ang X",
  "onboarding.welcome.optionalHint": "opsyonal",
  "onboarding.welcome.connectWallet": "I-connect ang wallet",
  "onboarding.welcome.playFreeNote": "Maglaro nang libre ngayon din. Hindi kailangan ng wallet o pag-sign in.",
  "onboarding.welcome.or": "o",
  "onboarding.welcome.continueAsTemplate": "Magpatuloy bilang {name}",
  "onboarding.welcome.fallbackProfileName": "profile mo",
  "onboarding.welcome.close": "Isara",
  "onboarding.welcome.createProfile": "Gumawa ng profile mo",
  "onboarding.welcome.skipGuest": "Laktawan at maglaro bilang guest",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Maglaro na",
  "onboarding.welcome.pickNameFirst": "O pumili muna ng pangalan",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "I-set up ang profile mo",
  "onboarding.profile.xPhotoAlt": "Larawan sa profile mo sa X",
  "onboarding.profile.connectedAsTemplate": "Nakakonekta bilang {handle}",
  "onboarding.profile.xAccountFallback": "Account sa X",
  "onboarding.profile.walletLabelTemplate": "Wallet {address}",
  "onboarding.profile.displayNameLabel": "Ipapakitang pangalan",
  "onboarding.profile.displayNamePlaceholder": "Ano ang itatawag namin sa iyo?",
  "onboarding.profile.handleLabel": "Handle",
  "onboarding.profile.handlePlaceholder": "pangalanmo",
  "onboarding.profile.handleHint": "Ang natatanging id mo sa mesa. Mga letra, numero, at underscore.",
  "onboarding.profile.handleTaken": "Nagamit na ang handle na iyan sa device na ito.",
  "onboarding.profile.startButtonTemplate": "Simulan ang paglalaro · {amount} regalo ng house",
  "onboarding.profile.back": "Bumalik",
  "onboarding.profile.skip": "Laktawan",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "Paano gumagana ang attn ROYALE",
  "onboarding.tour.skip": "Laktawan",
  "onboarding.tour.step1.eyebrow": "01 · I-back ang isang kahon",
  "onboarding.tour.step1.titleUsdc": "Ilagay ang USDC sa mga kahong gusto mo",
  "onboarding.tour.step1.titlePacks": "I-back gamit ang pack ang mga kahong gusto mo",
  "onboarding.tour.step1.bodyUsdc": "Ang bawat kahon ay isang slot na ini-back mo gamit ang USDC. Mas marami kang ilagay sa isang kahon, mas malaki ang parte mo sa panalo nito. Ipunin lahat sa isa, o ikalat sa ilan.",
  "onboarding.tour.step1.bodyPacks": "Ang bawat kahon ay isang slot na ini-back mo gamit ang pack. Mas marami kang itambak sa isang kahon, mas malaki ang parte mo sa panalo nito. Punuin ang isa, o ikalat sa ilan.",
  "onboarding.tour.step2.eyebrow": "02 · Lock at bukas",
  "onboarding.tour.step2.title": "Sa lock, binubuksan ng bawat kahon ang mga pack nito",
  "onboarding.tour.step2.body": "Kapag naka-lock ang ronda, binubuksan ng bawat na-back na kahon ang mga pack nito at nagbubunot ng mga totoong na-grade na card nang live, sa isang mapatutunayang sorteo, sa harapan mo mismo.",
  "onboarding.tour.step3.eyebrow": "03 · Panalo ang pinakamahal",
  "onboarding.tour.step3.title": "Ang pinakamayamang kahon ang kukuha sa pondo",
  "onboarding.tour.step3.bodyUsdc": "Ang timbang ng bawat kahon ay ang halaga ng nabunot na card nito plus ang USDC nito. Mas mabigat ang kahon, mas magandang tsansa nito. Manalo, at hahatiin ninyo ang buong pondo ng ronda.",
  "onboarding.tour.step3.bodyPacks": "Ang timbang ng bawat kahon ay ang halaga ng nabunot na card nito plus ang mga pack na itinaya rito. Mas mabigat ang kahon, mas magandang tsansa nito. Manalo, at hahatiin ninyo ang buong pondo ng ronda.",
  "onboarding.tour.step4.eyebrow": "04 · Panatilihin, ibenta, chase",
  "onboarding.tour.step4.title": "Mag-cash out, at bantayan ang The Chase",
  "onboarding.tour.step4.body": "Panatilihin ang mga napanalunan mong card bilang na-grade na card, o ibenta pabalik ang mga ito sa buyback rate nila. At ang The Chase ay isang gumugulong na jackpot na puwedeng bumagsak sa kahit anong kahon, kahit anong ronda.",
  "onboarding.tour.back": "Bumalik",
  "onboarding.tour.next": "Susunod",
  "onboarding.tour.enterBoard": "Pumasok sa tablero",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour (owner 2026-07-31:
  // "highlight the sections, darken the others that arent being introduced,
  // and show the items with an arrow and a description"). Seven coach-mark
  // steps anchored to the LIVE board. The v1 step1-step4 keys above stay
  // (append-only contract) but are no longer rendered. {amount} in spot7 is
  // the free Starter grant (FREE_PLAY_STARTING_USD, currency-formatted by the
  // component). spot3 ships touch variants: the component picks *Touch on
  // coarse pointers, where betting is tap-to-arm then tap-to-confirm.
  // PACKS framing only (owner: "its not chip usdc for now ... its bet packs");
  // a USDC-live pass would add Usdc variants like the v1 keys had.
  "onboarding.tour.stepTag": "Hakbang {n} sa {total}",
  "onboarding.tour.spot1.eyebrow": "Taya mo",
  "onboarding.tour.spot1.title": "Piliin ang pack mo",
  "onboarding.tour.spot1.body": "Pack ang gamit mo sa pagtaya. Bawat isa ay sealed pack ng graded TCG cards, powered by Collector Crypt. Piliin ang pack na gusto mong laruin.",
  "onboarding.tour.spot2.eyebrow": "Laki ng stack",
  "onboarding.tour.spot2.title": "Piliin kung ilan",
  "onboarding.tour.spot2.body": "Itinatakda ng counter na ito kung ilang pack ang inilalagay ng bawat taya. Sapat na ang isa para magsimula. Taasan ito kung gusto mong magtaya nang mas malaki.",
  "onboarding.tour.spot3.eyebrow": "Ilagay ang taya mo",
  "onboarding.tour.spot3.title": "I-click ang isang kahon para itaya ito",
  "onboarding.tour.spot3.titleTouch": "I-tap ang isang kahon para itaya ito",
  "onboarding.tour.spot3.body": "Ang pag-click sa isang kahon ay naglalagay ng mga pack mo rito. Mas marami kang itambak na pack sa isang kahon, mas malaki ang parte mo kung mananalo ito. Sugalin ang isa nang husto o ikalat sa ilan.",
  "onboarding.tour.spot3.bodyTouch": "I-tap ang isang kahon nang minsan para ihanda ito, tapos i-tap ulit para kumpirmahin ang taya. Mas marami kang itambak na pack sa isang kahon, mas malaki ang parte mo kung mananalo ito.",
  "onboarding.tour.spot4.eyebrow": "Ang ronda",
  "onboarding.tour.spot4.title": "Ang pondo at ang orasan",
  "onboarding.tour.spot4.body": "Ang bawat pack na itinaya sa tablero ay nagpapalaki sa pondong ito. Kapag umabot sa zero ang orasan, nag-lo-lock ang pagtaya at binubuksan ng bawat na-back na kahon ang mga pack nito nang live.",
  "onboarding.tour.spot5.eyebrow": "Ang sorteo",
  "onboarding.tour.spot5.title": "Mas madalas manalo ang mabibigat na kahon",
  "onboarding.tour.spot5.body": "Isang random na bunot na may timbang batay sa halaga ang pipili ng isang kahon. Isusuko ng mga natalong kahon ang kanilang mga card at taya; paghahatian ng mga tagataya ng nanalong kahon ang maipapamahaging halaga ng round ayon sa laki ng inilagay nila.",
  "onboarding.tour.spot6.eyebrow": "Pera mo",
  "onboarding.tour.spot6.title": "Balanse at deposito",
  "onboarding.tour.spot6.body": "Nandito nakatira ang balanse mo. Magdagdag ng pondo gamit ang Deposit at mag-withdraw anumang oras na gusto mo. Dumarating dito ang mga panalo sa sandaling ma-settle ang isang ronda.",
  "onboarding.tour.spot7.eyebrow": "Regalo ng house",
  "onboarding.tour.spot7.title": "Ang libre mong {amount} Starter pack",
  "onboarding.tour.spot7.body": "Magsisimula ka na may libreng {amount} Starter pack. Naka-load na ito sa picker. Pumili ng kahong gusto mo at simulan na.",
  "onboarding.tour.finish": "Simulan ang paglalaro",
 "onboarding.tour.paused": "Magsisimula na ang round - magpapatuloy tayo agad pagkatapos.",
  "onboarding.tour.act2.choice": "Panoorin ang isang round",
  "onboarding.tour.act2.choiceHint": "Mga 30 segundo, kasama ang reveal",
  "onboarding.tour.act2.bettingTitle": "Bawat pack na taya ay pumapasok sa isang pondo",
  "onboarding.tour.act2.bettingBody": "Nagsasalansan ng pack ang mga manlalaro sa mga kahon. Bawat pack sa board ay pumapasok sa iisang pondo, at isang kahon ang kukuha ng lahat.",
  "onboarding.tour.act2.drawTitle": "Ang halaga ang nagiging tsansa",
  "onboarding.tour.act2.drawBody": "Ang bahagi ng bawat kahon sa halaga ng lahat ng nabunot na card ang tsansa nito. Isang nabe-verify na random na bunot na may timbang batay sa halaga ang pipili sa mananalo.",
  "onboarding.tour.act2.losersTitle": "Isinusuko ng bawat natalong kahon ang mga card nito",
  "onboarding.tour.act2.losersBody": "Ang maipapamahaging mga card at cash mula sa buong board ay mapupunta sa mga tagataya ng nanalong kahon.",
  "onboarding.tour.act2.splitTitle": "Ang taya mo ang nagtatakda ng hati mo",
  "onboarding.tour.act2.splitBody": "Paghahatian ng mga tagataya ng nanalong kahon ang maipapamahaging cash at mga card ng round mula sa lahat ng kahon, ayon sa inilagay ng bawat isa sa kahong iyon.",
  "onboarding.tour.act2.grailCaption": "Ang seremonya ng grail",
  "onboarding.tour.act2.yourTurnEyebrow": "Ikaw naman",
  "onboarding.tour.act2.yourTurnTitle": "Handa na ang Starter pack mo",
  "onboarding.tour.act2.yourTurnBody": "Live na ulit ang board. Pumili ng tile at ilagay ang una mong pack bet.",
  "onboarding.tour.act2.continue": "Pumasok sa round",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "I-rotate ang phone mo para maglaro ng attn ROYALE",
  "onboarding.rotate.title": "Ihiga ang phone mo",
  "onboarding.rotate.body": "Pinakamaganda ang tablero kapag naka-landscape. I-rotate para pumasok sa ronda.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "Mga Setting",
  "onboarding.settingsClose": "Isara ang mga setting",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Pumili ng handle para mahanap ka ng ibang manlalaro.",
  "onboarding.profileValidation.handleTooShort": "Dapat may 3 karakter man lang ang handle.",
  "onboarding.profileValidation.handleCharset": "Gumamit lang ng letra, numero, at underscore.",
  "onboarding.profileValidation.nameRequired": "Magdagdag ng pangalang ipapakita sa mesa.",
  "onboarding.profileValidation.nameTooLong": "Panatilihing wala pang {n} karakter.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "nanonood",
  "onboarding.presence.tierPlaying": "naglalaro",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Naglalaro ka: {amount} ang itinaya ngayong ronda",
  "onboarding.presence.youWatching": "Nanonood ka",
  "onboarding.presence.youWatchingBackground": "Nanonood ka (background tab)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} {tier} sa attn ROYALE ngayon. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Ikaw: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} pang sarili mong tab na bukas",
  "onboarding.presence.otherTabs.other": "+{n} pang sarili mong mga tab na bukas",
  "onboarding.presence.othersBacking.one": "{n} pang tao ang nag-ba-back ng kahon ngayong ronda",
  "onboarding.presence.othersBacking.other": "{n} pang tao ang nag-ba-back ng kahon ngayong ronda",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Kalagayan ng stream ng attn ROYALE",
  "onboarding.streamHud.eyebrow": "Stream",
  "onboarding.streamHud.statusConnecting": "Kumokonekta",
  "onboarding.streamHud.statusLive": "Live",
  "onboarding.streamHud.statusReconnecting": "Muling kumokonekta",
  "onboarding.streamHud.statusError": "Problema sa sync",
  "onboarding.streamHud.reconnects.one": "{n} muling pagkonekta",
  "onboarding.streamHud.reconnects.other": "{n} muling pagkonekta",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "Nase-settle ang room na ito sa USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Mga nabuksang card",
  "onboarding.carousel.prevCard": "Nakaraang card",
  "onboarding.carousel.nextCard": "Susunod na card",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Ipakita ang {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "HINDI SAPAT ANG USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Kailangan ng {needed} para i-back ang {slot}. Meron kang {balance}.",
  "onboarding.fundShortfall.addFunds": "Magdagdag ng pondo",
  "onboarding.fundShortfall.dismiss": "I-dismiss",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "I-tap ang {icon} tapos Add to Home Screen para sa tunay na fullscreen.",
  "onboarding.installHint.fullscreen": "Mag-fullscreen at itago ang browser bar.",
  "onboarding.installHint.fullscreenCta": "Mag-fullscreen",
  "onboarding.installHint.dismiss": "I-dismiss",
} as Record<string, string>;
