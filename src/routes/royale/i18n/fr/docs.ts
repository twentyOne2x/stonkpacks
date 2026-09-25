// French (Français): "docs" segment, reviewed end to end by a native speaker
// (editorial pass, not a machine translation). Same key set as en/docs.ts.
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-stay-$-USD rules that apply to every locale.
//
// Terminology (binding across every fr segment): "parieur(s)" for backers,
// "le plus gros parieur" for the top backer, "cagnotte" for pool/pot,
// "jackpot" for the Chase's rolling jackpot (deliberately NOT "cagnotte",
// so the two never blur in the same sentence), "manche" for round, "tuile"
// for tile, "pack" for the generic pack noun, "monnaie" for loose change
// on a tile, "rachat" for buyback, verrouille/verrouillage for lock.
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the ten locales stay in key parity; key names are never rendered. The French word is "monnaie".
//
// Lowercase "a grail" in the source is read as shorthand for a Grail-tier
// card and renders as the capitalized brand term "Grail", never inflected.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the `**bold**` marker pairs are
// kept balanced and moved onto whichever words carry the emphasis in French.
export default {
  "docs.header.title": "Docs",
  "docs.header.back": "← Retour au plateau",

  "docs.tabs.ariaLabel": "Sections des docs",
  "docs.tabs.how": "Comment ça marche",
  "docs.tabs.technical": "Technique",

  "docs.how.intro": "La version en langage clair. Lisez ceci d'abord, puis passez à Technique pour les mécanismes exacts.",
  "docs.technical.intro": "Les mécaniques exactes, en chiffres clairs.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "Qu'est-ce qu'attn ROYALE ?",
  "docs.how.whatIsRoyale.a":
    "Un jeu d'ouverture de packs en direct. À chaque manche, les joueurs misent des packs sur des tuiles. Au verrouillage, chaque tuile misée déchire ses packs sous vos yeux, et les parieurs d'une seule tuile se partagent toute la cagnotte.",

  "docs.how.whatIsPack.q": "Qu'est-ce qu'un pack ?",
  "docs.how.whatIsPack.a":
    "Un palier à prix fixe qui s'ouvre sur une vraie carte gradée dès que sa tuile s'ouvre. L'échelle : {starter}, {elite}, {legendary}, {grail} puis {mythic}. Plus le pack est gros, plus la carte l'est.",

  "docs.how.howBacking.q": "Comment fonctionne la mise sur une tuile ?",
  "docs.how.howBacking.a":
    "Choisissez une tuile qui vous plaît et misez des packs dessus. Misez à côté d'autres joueurs sur la même tuile et vous la partagez : votre part de son gain correspond à la part des packs que vous y avez posés.",

  "docs.how.heatRemainder.q": "Et si ma mise ne suffit pas pour un pack entier ?",
  "docs.how.heatRemainder.a":
    "Tout montant inférieur au prix du pack le moins cher reste sur la tuile sous forme de monnaie. Il accompagne le reste de votre mise, mais il n'ouvre aucune carte tant qu'il n'atteint pas un pack complet, et ce sont les cartes ouvertes qui décident des chances.",

  "docs.how.howWheelPicks.q": "Comment la roue choisit-elle un gagnant ?",
  "docs.how.howWheelPicks.a":
    "Au verrouillage, chaque tuile misée ouvre ses packs en direct. La roue s'arrête ensuite sur une tuile, et plus les cartes ouvertes par cette tuile sont riches, plus sa part de la roue est grande. Un seul gros tirage peut faire d'une petite tuile la favorite. Le choix lui-même vient d'un tirage aléatoire vérifiable, jamais d'une personne.",

  "docs.how.whatDoIWin.q": "Qu'est-ce que je gagne ?",
  "docs.how.whatDoIWin.aBefore": "Les parieurs de la tuile gagnante se partagent",
  "docs.how.whatDoIWin.aEmphasis": "toute la cagnotte",
  "docs.how.whatDoIWin.aAfter":
    ", pas seulement les mises de cette tuile, au prorata de ce que chacun y a misé. Le plus gros parieur de la tuile obtient aussi la priorité sur sa meilleure carte.",

  "docs.how.keepOrSell.q": "Garder ou vendre, quelle différence ?",
  "docs.how.keepOrSell.keepLabel": "Garder",
  "docs.how.keepOrSell.keepBody": "ajoute la carte à votre collection, gratuitement.",
  "docs.how.keepOrSell.sellLabel": "Revendre",
  "docs.how.keepOrSell.sellBody": "vous verse une part de la valeur de la carte en USDC, directement sur votre solde, sans attendre.",

  "docs.how.decisionTimeout.q": "Que se passe-t-il si je ne décide pas à temps ?",
  "docs.how.decisionTimeout.a":
    "Vous avez un court délai pour choisir. Si vous le laissez filer, la carte se revend automatiquement à son taux en vigueur : rien de ce que vous gagnez ne reste jamais bloqué.",

  "docs.how.whatIsChase.q": "Qu'est-ce que la Chasse ?",
  "docs.how.whatIsChase.a":
    "Un jackpot progressif alimenté par une petite part de la cagnotte de chaque manche. Il peut tomber à n'importe quelle manche, sur son propre tirage indépendant, et un tirage de grail ne le déclenche pas. Quand il tombe, la totalité du jackpot est versée dans le partage gagnant de cette manche.",

  "docs.how.howToStartFree.q": "Comment commencer gratuitement ?",
  "docs.how.howToStartFree.a":
    "Rejoignez la table avec un code d'invitation et récupérez un solde offert de la taille d'un pack Starter. Aucun portefeuille ni inscription requis, vous pouvez démarrer directement en invité.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Échelle des packs",
  "docs.tech.packLadder.body":
    "Cinq packs achetables : {starter}, {elite}, {legendary}, {grail}, {mythic}. Une mise se compose dans les plus gros packs qu'elle peut payer, en commençant par le plus grand. Ce qui reste sous le prix du pack le moins cher demeure sur la tuile sous forme de monnaie et n'ouvre aucune carte. Une mise placée sur un pack précis reste exactement ce pack, seule la monnaie se recompose vers le haut à mesure qu'on y ajoute des montants.",

  "docs.tech.oddsWeighting.title": "Ce qui fixe les chances : les cartes ouvertes par la tuile",
  "docs.tech.oddsWeighting.body":
    "Les chances d'une tuile ne dépendent pas de ce qui a été misé dessus. Au verrouillage, chaque tuile financée ouvre ses packs, et sa part du tirage est la valeur des cartes qu'elle vient d'ouvrir, rapportée à la valeur de toutes les cartes ouvertes dans la manche. Un seul gros tirage rend une petite tuile favorite. Une tuile qui n'a ouvert aucune carte n'a aucune chance, et la monnaie seule n'ouvre jamais de carte. Si une manche entière n'ouvre aucune carte, il n'y a rien à tirer : la manche est annulée et toutes les mises sont intégralement remboursées.",

  "docs.tech.vrfDraw.title": "Le tirage du gagnant est déterministe et initialisé par VRF",
  "docs.tech.vrfDraw.body":
    "Chaque manche dérive un nombre aléatoire vérifiable à partir d'une recette fixe : l'id de la manche, son échéance, le plateau figé, le nombre de tickets et l'entropie de la chaîne prise après le verrouillage. La tuile gagnante résulte d'un unique parcours déterministe de ce nombre à travers le poids des tuiles. Les mêmes entrées produisent toujours le même gagnant, les poids des tuiles sont publiés et figés avant le parcours, et n'importe qui peut revérifier tout le tirage à partir du reçu de la manche.",

  "docs.tech.settlementMath.title": "Calcul du règlement",
  "docs.tech.settlementMath.body":
    "Les parieurs de la tuile gagnante se partagent la totalité du pot de la manche, pas seulement les mises de leur tuile, au prorata de ce que chacun a misé sur cette tuile. Un prélèvement de {take} est retiré en premier : {chaseCut} alimente le jackpot The Chase, {protocolCut} finance le protocole. Ce prélèvement est payé en cartes chaque fois que possible, en commençant par la carte en trop la moins chère, et une carte trop précieuse pour tenir dans le prélèvement est ignorée plutôt que vendue, si bien que les gros tirages ne sont pas ceux qui partent. Seul ce que les cartes ne couvrent pas est pris sur les liquidités du pot.",

  "docs.tech.cardAllocation.title": "Qui reçoit les cartes",
  "docs.tech.cardAllocation.body":
    "Seule la meilleure carte de la tuile gagnante ouvre une décision garder ou vendre, et elle revient au plus gros parieur de cette tuile. Toutes les autres cartes ouvertes par cette tuile sont réparties entre ses parieurs au prorata de leur mise, les meilleures d'abord. En prendre une déduit son prix de rachat de votre part en liquidités : c'est un échange, pas un coût, vous finissez la manche avec la même valeur dans les deux cas. Si aucune part ne peut couvrir une carte, la maison l'achète et cet argent reste dans le partage, donc une carte n'est jamais imposée à personne. Un second grail dans la même manche n'est pas traité à part, il est réparti avec le reste du butin, et The Chase ne prend jamais un grail.",

  "docs.tech.sellBackRates.title": "Taux de rachat",
  "docs.tech.sellBackRates.body":
    "Chaque carte a un prix de rachat permanent fixé par le pack dont elle sort : {entryRate} au premier palier, {midRate} au milieu, {topRate} au sommet. Vendre verse ce prix sur votre solde immédiatement, et garder la carte ne coûte rien. Ces taux reprennent les taux de rachat instantané publiés par CollectorCrypt pour les mêmes machines.",

  "docs.tech.chaseJackpot.title": "Le jackpot de la Chasse",
  "docs.tech.chaseJackpot.body":
    "Un jackpot cumulatif alimenté par {chaseCut} du pot de chaque manche. Il se déclenche sur son propre tirage indépendant, environ une fois par semaine au rythme normal des manches, et un tirage de grail ne le déclenche pas. Quand il part, la totalité du jackpot est versée dans le partage de la manche gagnante, puis il repart de zéro. The Chase prend aussi une carte par manche quand elle le peut, mais seulement sur une tuile perdante, jamais la carte la plus précieuse de la manche, et jamais un grail.",

  "docs.tech.decisionWindow.title": "Fenêtre de décision",
  "docs.tech.decisionWindow.body":
    "Gagner la carte vedette de la tuile ouvre une fenêtre de {window} secondes pour garder ou vendre. Sans réponse à la fermeture, ou au verrouillage de la manche suivante, la carte est vendue à son taux courant, pour que rien de ce que vous gagnez ne reste bloqué.",

  "docs.tech.devnetCustody.title": "Garde des USDC sur devnet",
  "docs.tech.devnetCustody.body":
    "Les soldes bougent par de vraies transactions USDC sur le devnet Solana. La garde passe par votre portefeuille intégré Privy ou, à défaut, par une paire de clés réservée au devnet conservée dans votre propre navigateur, les deux signant exactement le même circuit de transfert que la garde en production.",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "Annulation et remboursement",
  "docs.tech.voidRefund.body":
    "Une manche ne peut se gagner que par des cartes ouvertes ; une manche où aucune tuile n'ouvre de carte n'a donc rien à tirer. Cette manche est annulée sur-le-champ : chaque mise du plateau revient intégralement, la maison ne prélève rien et la Chasse ne reçoit rien. Le relevé de tirage publié d'une manche annulée affiche un total de cartes à zéro, la preuve que l'annulation était imposée par le plateau et choisie par personne.",

  "docs.tech.cardExits.title": "Les cartes gagnées vont dans votre portefeuille",
  "docs.tech.cardExits.body":
    "Gardez une carte et elle est transférée dans votre propre portefeuille par une transaction signée, frais de réseau payés pour vous. Si votre portefeuille ne peut pas encore la recevoir, la livraison est mise en attente et retentée jusqu'à ce qu'elle aboutisse, jamais abandonnée. Revendez une carte et vous êtes payé au prix exact coté au moment où vous l'avez gagnée, jamais recoté, et cette cote ne peut être exercée qu'une seule fois : elle est marquée utilisée avant que l'argent ne bouge, la même carte ne peut donc jamais être payée deux fois.",

  "docs.tech.deposits.title": "Dépôts en USDC",
  "docs.tech.deposits.body":
    "Un dépôt est un transfert USDC sur Solana que vous signez depuis votre propre portefeuille. Votre solde n'est crédité qu'une fois ce transfert confirmé sur la chaîne vers le trésor du jeu, montant et destination lus sur la chaîne elle-même, jamais dans la requête. Chaque signature de transaction ne peut créditer qu'une seule fois, rejouer un dépôt ne peut donc pas créditer deux fois, et un transfert au-dessus du plafond par transaction est enregistré comme dû en retour au lieu de disparaître.",

  "docs.tech.withdrawals.title": "Retraits en USDC",
  "docs.tech.withdrawals.body":
    "Un retrait débite d'abord votre solde, puis envoie les USDC du trésor vers la destination que vous avez approuvée : votre connexion vérifiée signe ce montant et cette destination exacts, et une requête qui ne correspond pas à cette preuve est refusée. Le reçu conserve la signature de la transaction. Si la chaîne rejette définitivement le transfert, votre solde est remboursé exactement une fois. Si le transfert est parti mais n'est pas encore confirmé, rien n'est remboursé tant que la chaîne n'a pas donné de réponse finale : un retrait ne peut donc jamais payer deux fois, même après un redémarrage.",

  "docs.tech.identity.title": "Un seul compte, quelle que soit la connexion",
  "docs.tech.identity.body":
    "Connectez-vous avec Privy ou prouvez un portefeuille Solana en signant un défi serveur à usage unique : les deux chemins mènent au même compte durable, indexé sur l'identité vérifiée et sur rien d'autre. Tout ce qui déplace de l'argent s'exécute sur le compte de l'identité qui s'est prouvée dans cette requête précise, et les noms, ids et en-têtes déclarés sont écartés : personne ne peut pointer un dépôt, une mise ou un retrait vers le solde de quelqu'un d'autre.",

  "docs.tech.reconnect.title": "Reconnexion et redémarrage",
  "docs.tech.reconnect.body":
    "Déconnectez-vous et l'argent s'arrête : sur les rails USDC, un dépôt, une mise ou un retrait sans preuve de propriété est refusé. Reconnectez-vous et le même compte vous attend, avec le même solde et les mêmes cartes, car tout ce que vous possédez vit dans un registre durable et non dans la page. Un redémarrage du serveur rejoue ce registre et retombe sur les mêmes chiffres, et un transfert déjà parti n'est jamais renvoyé une seconde fois.",

  "docs.nav.ariaLabel": "Sections des docs",
  "docs.nav.overview": "Vue d'ensemble",
  "docs.nav.prev": "Précédent",
  "docs.nav.next": "Suivant",

  "docs.nav.section.introduction": "Introduction",
  "docs.nav.section.gameplay": "Le jeu",
  "docs.nav.section.cards": "Cartes et garde",
  "docs.nav.section.money": "Argent",
  "docs.nav.section.fairness": "Équité",
  "docs.nav.section.account": "Compte",

  "docs.nav.page.whatIsRoyale": "Qu'est-ce qu'attn ROYALE",
  "docs.nav.page.packs": "Packs et échelle",
  "docs.nav.page.startFree": "Commencer gratuitement",
  "docs.nav.page.backing": "Miser sur une tuile",
  "docs.nav.page.theDraw": "Le tirage",
  "docs.nav.page.winning": "Ce que vous gagnez",
  "docs.nav.page.chase": "La Chasse",
  "docs.nav.page.keepOrSell": "Garder ou vendre",
  "docs.nav.page.cardAllocation": "Qui reçoit les cartes",
  "docs.nav.page.sellBack": "Taux de rachat",
  "docs.nav.page.cardDelivery": "Livraison des cartes",
  "docs.nav.page.deposits": "Dépôts",
  "docs.nav.page.withdrawals": "Retraits",
  "docs.nav.page.settlement": "Calcul du règlement",
  "docs.nav.page.custody": "Garde des USDC",
  "docs.nav.page.odds": "Ce qui fixe les chances",
  "docs.nav.page.vrf": "Le tirage VRF",
  "docs.nav.page.voidRefund": "Annulation et remboursement",
  "docs.nav.page.identity": "Un seul compte",
  "docs.nav.page.reconnect": "Reconnexion et redémarrage",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // Section titles are rendered after a hardcoded "1 · " numeral prefix, so
  // the numbering never enters a value. `**bold**` pairs stay balanced.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE, le parcours de chaque dollar",
  "docs.howItWorks.lead": "Les règles complètes du jeu. Comment le gagnant est tiré, et qui repart avec les cartes.",
  "docs.howItWorks.backToBoard": "Retour au plateau →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Comment se déroule une manche",
  "docs.howItWorks.round.pickBet":
    "Choisissez une mise, puis cliquez sur une tuile : chaque clic ajoute ce montant à la cagnotte de la tuile.",
  "docs.howItWorks.round.yourShare":
    "**Votre part** d'une tuile = votre mise ÷ le total de cette tuile. {stake} sur une tuile à {tile}, c'est une part de **{pct}**. Si cette tuile gagne, vous touchez {pct} de son versement.",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**La chance de gagner** se décide à l'ouverture, pas à la mise : au verrouillage, chaque tuile misée ouvre ses packs, et la part de roue d'une tuile est la valeur des cartes qu'elle vient d'ouvrir, rapportée à toutes les cartes ouvertes dans la manche.",
  "docs.howItWorks.round.tickets":
    "Une tuile qui n'ouvre **aucune carte** n'a aucune part, et si une manche entière n'ouvre aucune carte, la manche est **annulée** et chaque mise revient intégralement.",
  "docs.howItWorks.round.vrf":
    "Au verrouillage, une **VRF** (fonction aléatoire vérifiable) tire un ticket gagnant parmi les chiffres figés de la manche : l'id de la manche, l'échéance, le total de chaque tuile, le nombre de tickets. Personne, pas même la maison, ne peut l'orienter.",
  "docs.howItWorks.round.oddsAreReal": "Les chances affichées sur chaque tuile sont exactement ce calcul de tirage, pas une impression.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Ce que votre mise achète",
  "docs.howItWorks.buys.ladderLead": "Le total d'une tuile se recompose en packs, du plus gros au plus petit :",
  "docs.howItWorks.buys.example":
    "Exemple : une tuile à **{amount}** achète un Legendary, un Elite et un Starter.",
  "docs.howItWorks.buys.change":
    "L'argent trop petit pour le pack suivant devient de la **monnaie** : il compte toujours dans la cagnotte et dans votre part en cas de gain, mais il n'ouvre aucun pack, et ce sont les cartes ouvertes qui fixent les chances.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Vous détenez déjà un Mythic ? Le bouton d'amélioration vise **un autre Mythic entier** plutôt qu'un pack plus petit. L'échelle ne redescend jamais.",
  "docs.howItWorks.buys.cardsPerPack":
    "Au verrouillage, chaque tuile financée ouvre **une carte par pack entier** qu'elle détient, jusqu'à **{max} cartes** affichées sur le plateau (le reste est listé sur la page des résultats). Une tuile qui ne porte que de la monnaie n'ouvre rien.",
  "docs.howItWorks.buys.undeliverable":
    "Si un pack ne peut pas être livré (rupture de stock, incident technique, temps écoulé), son coût vous revient en cash au lieu de rester bloqué.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Ce que gagne le gagnant",
  "docs.howItWorks.winner.entirePool":
    "Les parieurs de la tuile gagnante se partagent **toute la cagnotte de la manche**, pas seulement le pot de cette tuile.",
  "docs.howItWorks.winner.proRata":
    "Le partage se fait **au prorata** : vous mettez {pct} de la tuile, vous touchez **{pct}** du versement.",
  "docs.howItWorks.winner.take":
    "**{take}** de chaque cagnotte est prélevé avant le partage : **{chaseCut}** alimente le jackpot de la Chasse, **{protocolCut}** finance le protocole (parrainage, achats de cartes pour la Chasse, exploitation, rachats de jetons).",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "Ce {take} est payé en cartes chaque fois que possible, la carte en trop la moins chère d'abord, et une carte trop précieuse pour tenir dans le prélèvement est ignorée plutôt que vendue : les gros tirages ne sont donc pas ceux qui partent. Seul ce que les cartes ne couvrent pas sort du cash de la cagnotte.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "La Chasse",
  "docs.howItWorks.chase.feed": "La Chasse est un jackpot progressif, alimenté à hauteur de **{cut}** de chaque cagnotte.",
  "docs.howItWorks.chase.cardCut":
    "Quand elle le peut, la Chasse prend sa part en carte plutôt qu'en cash, mais uniquement une carte de tuile perdante valant **au plus {cut}** de la cagnotte, jamais la carte la plus chère de la manche, et jamais une carte Grail.",
  "docs.howItWorks.chase.independentDraw":
    "Le jackpot tombe sur son propre **tirage aléatoire indépendant**, en moyenne **une fois par semaine** au rythme habituel des manches. Un tirage Grail ne le déclenche pas.",
  "docs.howItWorks.chase.payout":
    "Quand elle frappe, **tout le jackpot** entre dans le partage gagnant de cette manche, puis il repart de zéro et se reconstitue avec l'apport de la manche suivante.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Les cartes Grail",
  "docs.howItWorks.grails.what":
    "Un **Grail** est le tirage le plus rare et le plus cher qu'un pack puisse lâcher. Même un Starter à {price} peut en sortir un.",
  "docs.howItWorks.grails.headlineGrail":
    "Si la carte phare de la tuile gagnante est un Grail : **Garder** oblige le plus gros parieur à racheter la part des autres parieurs de la tuile (déduite de leur cash) ; **Vendre** répartit le versement **au prorata sur toute la tuile**, pas seulement au plus gros parieur.",
  "docs.howItWorks.grails.otherGrails":
    "Tout autre Grail tiré dans la manche (sur une autre tuile, ou en carte supplémentaire) est un bonus pour les parieurs gagnants, traité comme n'importe quelle carte supplémentaire. Il n'est jamais aspiré par la Chasse, et comme le prélèvement se paie en commençant par la carte la moins chère, un Grail est la dernière carte qu'il irait chercher.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Qui repart avec les cartes",
  "docs.howItWorks.cards.headline":
    "La **carte phare** de la tuile gagnante (son tirage le plus cher) revient au plus gros parieur, à lui seul : il la Garde gratuitement, ou la Vend à son taux de rachat en cash, versé à lui et non partagé avec le reste de la tuile.",
  "docs.howItWorks.cards.rest":
    "Toutes les autres cartes tirées par la tuile, plus le butin transmis par les tuiles perdantes, sont réparties de la plus chère à la moins chère, au prorata des mises. Le plus gros parieur de la tuile en récupère en général le plus, et les meilleures.",
  "docs.howItWorks.cards.deduction":
    "Prendre une de ces cartes déduit son prix de rachat de votre propre part en cash. C'est exactement le cash que vous auriez eu en la vendant, vous ne perdez donc rien.",
  "docs.howItWorks.cards.neverForced":
    "Pas les moyens ? Rien ne vous est imposé. La maison l'achète à votre place, et ce cash reste dans le partage.",
  "docs.howItWorks.cards.workedExample":
    "**Exemple chiffré.** Cagnotte {pool}. **{take}** ({takeAmount} : {chaseAmount} pour la Chasse, {protocolAmount} pour le protocole) sont prélevés d'entrée, en général payés par une carte en trop plutôt que par votre cash. Reste **{split}** à partager : vous avez misé {yourPct} de la tuile ({yourStake}), Sam a misé {samPct} ({samStake}). La tuile a tiré une carte phare {headline} (un pack Legendary, **{buyback}** de rachat) et une carte supplémentaire {extra}. Vous gardez la carte {headline} gratuitement, elle est à vous quoi qu'il arrive. La carte {extra} revient à Sam : **{buyback}** de sa valeur, soit **{samCash}**, sortent de la part de Sam. Au final : vous repartez avec **{yourStake} en cash + la carte {headline}** ; Sam repart avec **{samCash} en cash + la carte {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Garder ou vendre",
  "docs.howItWorks.keepSell.buttons":
    "Chaque carte reçue arrive avec deux boutons : **Garder** range le slab dans votre collection ; **Vendre** verse le taux de rachat du pack en USDC, directement sur votre solde.",
  "docs.howItWorks.keepSell.usdc": "L'USDC est un dollar numérique : **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Le rachat dépend du pack d'origine de la carte : **{entryRate}** pour Starter/Elite, **{midRate}** pour Legendary, **{topRate}** pour Grail et au-dessus.",
  "docs.howItWorks.keepSell.window":
    "Vous avez une fenêtre de **{seconds} secondes** juste après votre gain, et si vous ne tranchez pas, elle se prolonge sur toute la manche suivante : visible sous le plateau et dans Vos cartes.",
  "docs.howItWorks.keepSell.autoSell":
    "Toujours indécis au verrouillage de la manche suivante ? La carte se **vend automatiquement** à son taux de rachat à ce moment-là. L'argent ne reste jamais bloqué.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glossaire",
  "docs.howItWorks.glossary.change":
    "**Monnaie** : l'argent posé sur une tuile, trop petit pour acheter le pack suivant. Il compte dans la cagnotte et dans votre part en cas de gain, mais seules les cartes ouvertes portent des chances.",
  "docs.howItWorks.glossary.house":
    "**La maison** : le coffre qui finance les rachats de cartes et absorbe toute carte que personne ne peut s'offrir.",
  "docs.howItWorks.glossary.chase":
    "**La Chasse** : un jackpot progressif alimenté par {cut} de chaque cagnotte ; il tombe sur son propre tirage indépendant, pas sur un résultat de carte particulier.",
  "docs.howItWorks.glossary.grail": "**Grail** : la carte la plus rare et la plus chère qu'un pack puisse lâcher.",
  "docs.howItWorks.glossary.buyback":
    "**Rachat** : l'offre permanente d'encaisser une carte pour {low} à {high} de sa valeur, selon le palier du pack.",
  "docs.howItWorks.glossary.proRata": "**Au prorata** : partagé en proportion de ce que chacun a mis.",
  "docs.howItWorks.glossary.vrf": "**VRF** : un tirage aléatoire que n'importe qui peut vérifier après coup.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API de mises (accès fermé)",
  "docs.howItWorks.api.what":
    "Une API programmatique pour lire une manche en cours, s'abonner au flux d'événements et placer des mises depuis du code ou un agent. Elle applique les mêmes chances et le même règlement que le plateau.",
  "docs.howItWorks.api.access":
    "L'accès est **fermé** et sur demande uniquement : désactivé par défaut, et chaque appel exige une clé API autorisée.",
  "docs.howItWorks.api.realBets":
    "Placer une vraie mise demande une vérification de plus : prouver que c'est bien vous (la même connexion que sur le site), et les limites de mise de tout joueur s'appliquent.",
  "docs.howItWorks.api.contact": "Consultez la doc développeur sur {path} et écrivez à {email} pour demander une clé.",
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
