// English: "onboarding" segment. Owns RoyaleOnboardingGate.tsx (the invite +
// $25 Starter pack + profile gate), RoyaleWelcomeTour.tsx (the 4-step
// how-it-works tour), RoyaleRotateGate.tsx (the mobile-portrait rotate
// prompt), and RoyaleSettingsOverlay.tsx's two chrome strings (title +
// close aria-label - everything else in that overlay lives in
// RoyaleGearSettingsFields, a different surface). It also owns the small
// player-chrome leaves that sit alongside the gate: royaleProfile.ts's
// profile-form validation reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and RoyaleFundShortfallToast.tsx.
// Add this surface's translated strings here; the SAME keys must exist in
// every other locale's i18n/<locale>/onboarding.ts (see royaleI18n.ts's file
// header for the key-naming and {token} interpolation convention, and the
// no-em-dash / brand-terms-stay-English rules that apply to every locale).
// This is the ONLY file an agent working on the "onboarding" surface should
// need to touch for this locale, index.ts already spreads it in and should
// not need to change again.
//
// NOTE: the "attn ROYALE" wordmark itself is never translated anywhere in
// the app (see RoyaleBrandMark.tsx / RoyaleWinShareCard.tsx) - it stays
// hardcoded English in the component even inside an otherwise-translated
// sentence (onboarding.rotate.ariaLabel, onboarding.tour.ariaLabel).
// "Starter" (the pack tier name) is a brand term and also stays English
// inside onboarding.invite.ledeStarter / onboarding.welcome.ledeStarter.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "invite",
  "onboarding.invite.title": "Invite only",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "attn ROYALE is invite-only for now. Enter your code to claim a {amount} stake and take a seat.",
  "onboarding.invite.ledeStarter": "attn ROYALE is invite-only for now. Enter your code to claim a free {amount} Starter pack and take a seat.",
  "onboarding.invite.inputPlaceholder": "INVITE CODE",
  "onboarding.invite.inputAriaLabel": "Invite code",
  "onboarding.invite.unlockButton": "Unlock",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "No code yet? Ask the person who invited you, or paste your {link} link.",
  "onboarding.invite.errorInvalidCode": "Enter the invite code from your invitation.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "credit",
  "onboarding.welcome.grantLabelStarterPack": "starter pack",
  "onboarding.welcome.titleBack": "Welcome back",
  "onboarding.welcome.title": "Welcome to the table",
  "onboarding.welcome.backLede": "Pick up where you left off, {name}. Your profile and balance are saved on this device.",
  "onboarding.welcome.fallbackName": "player",
  "onboarding.welcome.ledeStake": "Your invite is good for a {amount} stake. Set a name and take your seat.",
  "onboarding.welcome.ledeStarter": "Your invite is good for a free {amount} Starter pack. Bet packs and take your seat.",
  "onboarding.welcome.continueWithX": "Continue with X",
  // RETIRED 2026-08-08 (P0 "Royale cannot be entered on a phone"). This chip
  // sat on BOTH sign-in buttons, and on a landscape phone those were the only
  // two controls on screen: a new player's entire gate said "optional" twice
  // and nothing said "start". The key stays (append-only contract) but nothing
  // renders it; welcome.playNow is the control that starts the game now.
  "onboarding.welcome.optionalHint": "optional",
  "onboarding.welcome.connectWallet": "Connect a wallet",
  "onboarding.welcome.playFreeNote": "Play free right now. No wallet or sign-in needed.",
  "onboarding.welcome.or": "or",
  "onboarding.welcome.continueAsTemplate": "Continue as {name}",
  "onboarding.welcome.fallbackProfileName": "your profile",
  "onboarding.welcome.close": "Close",
  "onboarding.welcome.createProfile": "Create your profile",
  "onboarding.welcome.skipGuest": "Skip and play as guest",
  // THE CONTROL THAT STARTS THE GAME. Gold, primary, and the one thing a new
  // player has to find: it takes an auto handle, grants the free Starter pack
  // and drops them on the live board. Active voice, says what happens when it
  // is used. createProfile/skipGuest above are the retired labels for the same
  // two actions (kept: append-only), which read as a chore and an escape hatch
  // rather than as the way in.
  "onboarding.welcome.playNow": "Play now",
  // The quiet second line under it. "Or" makes it plainly the alternative to
  // the gold button, not a step you have to take first.
  "onboarding.welcome.pickNameFirst": "Or pick a name first",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Set up your profile",
  "onboarding.profile.xPhotoAlt": "Your X profile photo",
  "onboarding.profile.connectedAsTemplate": "Connected as {handle}",
  "onboarding.profile.xAccountFallback": "X account",
  "onboarding.profile.walletLabelTemplate": "Wallet {address}",
  "onboarding.profile.displayNameLabel": "Display name",
  "onboarding.profile.displayNamePlaceholder": "How should we call you?",
  "onboarding.profile.handleLabel": "Handle",
  "onboarding.profile.handlePlaceholder": "yourname",
  "onboarding.profile.handleHint": "Your unique table id. Letters, numbers and underscores.",
  "onboarding.profile.handleTaken": "That handle is already used on this device.",
  "onboarding.profile.startButtonTemplate": "Start playing · {amount} on the house",
  "onboarding.profile.back": "Back",
  "onboarding.profile.skip": "Skip",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "How attn ROYALE works",
  "onboarding.tour.skip": "Skip",
  "onboarding.tour.step1.eyebrow": "01 · Back a tile",
  "onboarding.tour.step1.titleUsdc": "Chip USDC onto the tiles you like",
  "onboarding.tour.step1.titlePacks": "Back the tiles you like with packs",
  "onboarding.tour.step1.bodyUsdc": "Each tile is a slot you back with USDC. The more you put on a tile, the bigger your share of its winnings. Stack onto one, or spread across a few.",
  "onboarding.tour.step1.bodyPacks": "Each tile is a slot you back with packs. The more you stack on a tile, the bigger your share of its winnings. Load up on one, or spread across a few.",
  "onboarding.tour.step2.eyebrow": "02 · Lock & rip",
  "onboarding.tour.step2.title": "At lock, every tile rips its packs",
  "onboarding.tour.step2.body": "When the round locks, each backed tile tears open its packs and pulls real graded cards live, on a verifiable draw, right in front of you.",
  "onboarding.tour.step3.eyebrow": "03 · Best value wins",
  "onboarding.tour.step3.title": "The richest tile takes the pool",
  "onboarding.tour.step3.bodyUsdc": "Each tile's weight is its pulled card value plus its USDC. The heavier the tile, the better its odds. Win, and you split the whole round's pool.",
  "onboarding.tour.step3.bodyPacks": "Each tile's weight is its pulled card value plus the packs staked on it. The heavier the tile, the better its odds. Win, and you split the whole round's pool.",
  "onboarding.tour.step4.eyebrow": "04 · Keep, sell, chase",
  "onboarding.tour.step4.title": "Cash out, and watch the Chase",
  "onboarding.tour.step4.body": "Keep your winning cards as graded slabs or sell them back at their buyback rate. And the Chase is a rolling jackpot that can drop on any tile, any round.",
  "onboarding.tour.back": "Back",
  "onboarding.tour.next": "Next",
  "onboarding.tour.enterBoard": "Enter the board",

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
  "onboarding.tour.stepTag": "Step {n} of {total}",
  "onboarding.tour.spot1.eyebrow": "Your bet",
  "onboarding.tour.spot1.title": "Pick your pack",
  "onboarding.tour.spot1.body": "Packs are what you bet with. Each one is a sealed pack of graded TCG cards, powered by Collector Crypt. Choose the pack you want to play.",
  "onboarding.tour.spot2.eyebrow": "Stack size",
  "onboarding.tour.spot2.title": "Choose how many",
  "onboarding.tour.spot2.body": "This counter sets how many packs each bet lays down. One is plenty to start. Raise it when you want to bet bigger.",
  "onboarding.tour.spot3.eyebrow": "Place your bet",
  "onboarding.tour.spot3.title": "Click a tile to bet it",
  "onboarding.tour.spot3.titleTouch": "Tap a tile to bet it",
  "onboarding.tour.spot3.body": "Clicking a tile puts your packs on it. The more packs you stack on a tile, the bigger your share if it wins. Back one hard or spread across a few.",
  "onboarding.tour.spot3.bodyTouch": "Tap a tile once to line it up, then tap it again to confirm the bet. The more packs you stack on a tile, the bigger your share if it wins.",
  "onboarding.tour.spot4.eyebrow": "The round",
  "onboarding.tour.spot4.title": "The pool and the clock",
  "onboarding.tour.spot4.body": "Every pack bet on the board feeds this pool. When the clock hits zero, betting locks and every backed tile rips its packs open live.",
  "onboarding.tour.spot5.eyebrow": "The draw",
  "onboarding.tour.spot5.title": "Heavy tiles win more often",
  "onboarding.tour.spot5.body": "A value-weighted random draw picks one tile. Losing tiles give up their cards and stake; winning-tile backers split the distributable round value pro-rata to what they put in.",
  "onboarding.tour.spot6.eyebrow": "Your money",
  "onboarding.tour.spot6.title": "Balance and deposits",
  "onboarding.tour.spot6.body": "Your balance lives here. Add funds with Deposit and withdraw whenever you like. Winnings land here the moment a round settles.",
  "onboarding.tour.spot7.eyebrow": "On the house",
  "onboarding.tour.spot7.title": "Your free {amount} Starter pack",
  "onboarding.tour.spot7.body": "You start with a free {amount} Starter pack. It is already loaded in the picker. Pick a tile you like and go.",
  "onboarding.tour.finish": "Start playing",
 "onboarding.tour.paused": "Round starting - we will continue right after.",
  "onboarding.tour.act2.choice": "See a round play out",
  "onboarding.tour.act2.choiceHint": "About 30 seconds, reveal included",
  "onboarding.tour.act2.bettingTitle": "Every pack bet becomes one pool",
  "onboarding.tour.act2.bettingBody": "Players stack packs onto tiles. Every pack on the board feeds a single pool, and one tile takes all of it.",
  "onboarding.tour.act2.drawTitle": "Value becomes the odds",
  "onboarding.tour.act2.drawBody": "Each tile's share of all pulled-card value is its chance. One verifiable, value-weighted random draw selects the winner.",
  "onboarding.tour.act2.losersTitle": "Every losing tile gives up its cards",
  "onboarding.tour.act2.losersBody": "Distributable cards and cash from across the board move to the winning tile's backers.",
  "onboarding.tour.act2.splitTitle": "Your stake sets your slice",
  "onboarding.tour.act2.splitBody": "Winning-tile backers share the round's distributable cash and cards from every tile pro-rata to what each put into that tile.",
  "onboarding.tour.act2.grailCaption": "The grail ceremony",
  "onboarding.tour.act2.yourTurnEyebrow": "Your turn",
  "onboarding.tour.act2.yourTurnTitle": "Your Starter pack is ready",
  "onboarding.tour.act2.yourTurnBody": "The board is live again. Pick a tile and place your first pack bet.",
  "onboarding.tour.act2.continue": "Enter the round",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Rotate your phone to play attn ROYALE",
  "onboarding.rotate.title": "Turn your phone sideways",
  "onboarding.rotate.body": "The board plays best in landscape. Rotate to enter the round.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "Settings",
  "onboarding.settingsClose": "Close settings",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Pick a handle so other players can find you.",
  "onboarding.profileValidation.handleTooShort": "Handles are at least 3 characters.",
  "onboarding.profileValidation.handleCharset": "Use letters, numbers and underscores only.",
  "onboarding.profileValidation.nameRequired": "Add a name to show at the table.",
  "onboarding.profileValidation.nameTooLong": "Keep it under {n} characters.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "watching",
  "onboarding.presence.tierPlaying": "playing",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "You're playing: {amount} staked this round",
  "onboarding.presence.youWatching": "You're watching",
  "onboarding.presence.youWatchingBackground": "You're watching (background tab)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE right now. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "You: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} more of your own tab open",
  "onboarding.presence.otherTabs.other": "+{n} more of your own tabs open",
  "onboarding.presence.othersBacking.one": "{n} other backing a tile this round",
  "onboarding.presence.othersBacking.other": "{n} others backing a tile this round",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALE stream health",
  "onboarding.streamHud.eyebrow": "Stream",
  "onboarding.streamHud.statusConnecting": "Connecting",
  "onboarding.streamHud.statusLive": "Live",
  "onboarding.streamHud.statusReconnecting": "Reconnecting",
  "onboarding.streamHud.statusError": "Sync issue",
  "onboarding.streamHud.reconnects.one": "{n} reconnect",
  "onboarding.streamHud.reconnects.other": "{n} reconnects",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "This room settles in USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Opened cards",
  "onboarding.carousel.prevCard": "Previous card",
  "onboarding.carousel.nextCard": "Next card",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Show {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "NOT ENOUGH USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Backing {slot} needs {needed}. You have {balance}.",
  "onboarding.fundShortfall.addFunds": "Add funds",
  "onboarding.fundShortfall.dismiss": "Dismiss",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "Tap {icon} then Add to Home Screen for true fullscreen.",
  "onboarding.installHint.fullscreen": "Go fullscreen and hide the browser bar.",
  "onboarding.installHint.fullscreenCta": "Go fullscreen",
  "onboarding.installHint.dismiss": "Dismiss",
} as Record<string, string>;
