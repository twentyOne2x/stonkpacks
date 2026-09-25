// Arabic (العربية): "cinema" segment. Same key set as en/cinema.ts; the
// component group comments below are retained for side-by-side review.
//
// REGISTER: Modern Standard Arabic (فصحى), neutral-formal. The full house-terms
// glossary, pack loanword rule (باك/باكات), brand-term decisions, plural
// compromise, digit/currency rules, and bidi restrictions are fixed in ar/core.ts
// and apply unchanged to this segment.
//
// QUALITY: machine-assisted single-pass translation (codex worker, 2026-07-31),
// glossary-enforced; flagged for native-speaker review.
// QUALITY PASS 2 (2026-08-01): full re-read against en; homonym/calque/MT-artifact fixes.
//
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "جارٍ فتح الباكات",
  "cinema.phaseAnnounce.packsOpening.subtitle": "كشف البطاقات · إعادة تسعير كل خانة",
  "cinema.phaseAnnounce.winnerDraw.title": "سحب الفائز",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "موزونة بإجمالي الخانة",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "أُغلقت: اللوحة هي العرض",
  "cinema.phase.packsEnter.copy": "تصل الباكات إلى اللوحة",
  "cinema.phase.packsOpening.copy": "تُمزّق الباكات: تُكشف البطاقات وتُعاد تسعير الخانات",
  "cinema.phase.cardsByTile.copy": "كُشفت البطاقات: كل خانة، والقيمة أولًا",
  "cinema.phase.valueScan.copy": "قراءة اللوحة: أكبر السحبات تتوهج",
  "cinema.phase.winnerDraw.copy": "سحب الفائز: موزون بإجمالي الخانة",
  "cinema.phase.winnerLock.copy": "ثُبّت الفائز",
  "cinema.phase.loserValueConverge.copy": "تعود السحبات الخاسرة إلى الخزنة؛ وتنتقل قيمتها إلى الفائز",
  "cinema.phase.winnerPotCountUp.copy": "يستقر المجمّع على الخانة الفائزة",
  "cinema.phase.chaseFeed.copy": "تأخذ المطاردة اقتطاعها",
  "cinema.phase.chasePayout.copy": "تسقط المطاردة: تفوز خانة بمكسب كبير",
  "cinema.phase.allocation.copy": "تحصل",
  "cinema.phase.keepSellDecision.copy": "احتفاظ أم بيع: يمتد القرار إلى الجولة التالية",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "في الخزنة",
  "cinema.vaultLock.plateSub": "المطاردة",
  "cinema.vaultLock.status": "مغلق",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "لم يتم فتح أي بطاقات في هذه الجولة",
  "cinema.cardWall.won": "فوز",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP HIT",
  "cinema.cardWall.rarity.common": "شائع",
  "cinema.cardWall.rarity.rare": "نادر",
  "cinema.cardWall.rarity.epic": "ملحمي",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "محتفظ بها",
  "cinema.cardWall.status.sold": "مباعة",
  "cinema.cardWall.status.toTheChase": "إلى المطاردة",
  "cinema.cardWall.status.rake": "الاقتطاع",
  "cinema.cardWall.owner.vault": "الخزنة",
  "cinema.cardWall.owner.you": "أنت",
  "cinema.cardWall.cardAriaLabel": "{name}، {value}. يفتح Enter تفاصيل البطاقة.",
  "cinema.cardWall.sectionAriaLabel": "كل بطاقة فُتحت في هذه الجولة، مرتبة من الأعلى قيمة",
  "cinema.cardWall.eyebrow": "كل بطاقة فُتحت",
  "cinema.cardWall.rake.title": "رسوم البروتوكول",
  "cinema.cardWall.rake.metaOne": "بطاقة واحدة إلى الاقتطاع",
  "cinema.cardWall.rake.metaMany": "{n} بطاقات إلى الاقتطاع",
  "cinema.cardWall.rake.hide": "إخفاء",
  "cinema.cardWall.rake.show": "إظهار",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "إغلاق الكشف",
  "cinema.close.title": "إغلاق الكشف (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "الفائز المسجّل",
  "cinema.provCaption.round": "الجولة",
  "cinema.provCaption.verifyAt": "التحقق عبر",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "الجولة #{n}",
  "cinema.bar.vrfBadge": "مدعوم من CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "المطاردة +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "افتتاح",
  "cinema.phaseShort.drawing": "سحب",
  "cinema.phaseShort.results": "نتائج",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "الفائز",
  "cinema.core.tileWins": "تفوز {tile}",
  "cinema.core.inCards": " من البطاقات",
  "cinema.core.poolSuffix": "المجمّع",
  "cinema.core.totalCardValue": "إجمالي قيمة البطاقة",
  "cinema.core.totalPool": "إجمالي المجمّع",
  "cinema.core.tilesLive": "{n} خانات مفتوحة",
  "cinema.core.packsSuffix": "· {n} باكات",
  "cinema.core.yourStake": "رهانك",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "لا رهان",
  "cinema.heatOnly.note": "USDC فقط · لا باك في هذه الجولة",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} باك",
  "cinema.tile.packCountMany": "{n} باكات",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "خسرت القرعة. تذهب البطاقات إلى داعمي الخانة الفائزة.",
  "cinema.vaultNote.heatOnlyNoPack": "لا باك في هذه الجولة · تنتقل الفكة إلى المجمّع",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "من {pack}",
  "cinema.grail.fromPackRate": "من {pack} · احتمال السحبة {pct}",
  "cinema.grail.pullTitle": "سحبة GRAIL",
  "cinema.grail.fromPackVisible": "من {pack} باك",
  "cinema.grail.provenanceAriaLabel": "{tile}، من {pack} باك",
  "cinema.grail.multiTitle": "{n} GRAILS هذه الجولة",
  "cinema.grail.galleryTileFromPack": "{tile} · من {pack}",
  "cinema.grail.galleryMore": "+{n} أخرى",
  "cinema.card.openInNewTab": "افتح صفحة بطاقة {name} في علامة تبويب جديدة",
  "cinema.card.ariaLabelWithOdds": "{name}، {value}. من باك {pack}، احتمال السحبة {pct}. يفتح Enter تفاصيل البطاقة.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}، {value}. {bandLine}. يفتح Enter تفاصيل البطاقة.",
  "cinema.card.bandChancePct": "فرصة {pct}% من {pack} باك",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "فازت {tile}",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "نافذة بيع مفتوحة",
  "cinema.sellWindow.secToDecide": "ثانية لاتخاذ القرار",
  "cinema.sellWindow.noActionAutoSells": "لا إجراء: تُباع تلقائيًا عند القفل التالي",
  "cinema.sellWindow.noActionKeeps": "لا إجراء: تُحتفظ بالبطاقة · بِعها في أي وقت من بطاقاتك",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "قيمة البطاقة",
  "cinema.tileValue.onTileLabel": "على الخانة",
  "cinema.tileValue.oddsWord": "احتمال",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "الخانة المصابة",
  "cinema.chase.fires": "تُطلق المطاردة",
  "cinema.chase.jackpotReleasingTo": "JACKPOT يُدفع إلى {tile}",
  "cinema.chase.winningTileFallback": "الخانة الفائزة",
  "cinema.chase.feedThisRound": "المطاردة +{value} هذه الجولة",
  "cinema.chase.cardToChase": "بطاقة للمطاردة",
  "cinema.chase.bestLosingCardNamed": "أفضل بطاقة خاسرة · {name} · {value} في الخزنة",
  "cinema.chase.bestLosingCardVault": "أفضل بطاقة خاسرة محفوظة في الخزنة",
  "cinema.chase.jackpotGrows": "المطاردة +{value} · الجائزة الكبرى تنمو",
  "cinema.chase.hitsAriaLabel": "تصيب المطاردة {tile} بمبلغ {value}",
  "cinema.chase.alsoHolds": "وتحمل المطاردة أيضًا",
  "cinema.chase.alsoHoldsAriaOne": "وتحمل المطاردة أيضًا بطاقة واحدة بقيمة {value}",
  "cinema.chase.alsoHoldsAriaMany": "وتحمل المطاردة أيضًا {n} بطاقات بقيمة {value}",
  "cinema.chase.more": "أخرى",
  "cinema.chase.cardsTotalOne": "بطاقة واحدة · {value} في البطاقات المُقيّمة",
  "cinema.chase.cardsTotalMany": "{n} بطاقات · {value} في البطاقات المُقيّمة",
  "cinema.chase.hitsKicker": "تصيب المطاردة",
  "cinema.chase.winsBig": "فوز كبير",
  "cinema.chase.yourCut": "حصتك",
  "cinema.chase.otherBackerOne": "داعم آخر ({n}) · بالتناسب",
  "cinema.chase.otherBackerMany": "{n} داعمين آخرين · بالتناسب",
  "cinema.chase.backerOne": "داعم ({n}) · بالتناسب",
  "cinema.chase.backerMany": "{n} داعمين · بالتناسب",
  "cinema.chase.alsoWonRound": "فاز بالجولة أيضًا",
  "cinema.chase.backedTileNote": "خانة مدعومة · ليست الفائزة بالجولة",
  "cinema.chase.heldCardsSpillOne": "تخرج بطاقة واحدة محتفظ بها",
  "cinema.chase.heldCardsSpillMany": "تخرج {n} بطاقات محتفظ بها",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "المجمّع",
  "cinema.you.get": "تحصل",
  "cinema.you.lost": "لقد خسرت!",
  "cinema.you.noStakeThisRound": "لم تراهن في هذه الجولة",
  "cinema.you.mathLine": "حصة {usdc} USDC من المجمّع + {cards} من البطاقات = {total} لك",
  "cinema.you.sold": "بيعت {value}",
  "cinema.you.kept": "محتفظ بها · في مجموعتك",
  "cinema.you.keepButton": "احتفاظ",
  "cinema.you.sellButton": "بيع {value}",
  "cinema.you.yours": "لك",
  "cinema.you.noCardThisRound": "لا بطاقة في هذه الجولة.",
  "cinema.you.usdcPaidInstantly": "USDC · أُضيف إلى رصيدك",
  "cinema.you.keepAll": "احتفظ بالكل",
  "cinema.you.sellAllButton": "بيع كل {value}",
  "cinema.you.sellAllConfirm": "هل أنت متأكد؟ بِع كل {value}",
  "cinema.you.noOtherBackers": "لا داعمين آخرين في هذه الجولة",
  "cinema.you.oneOtherSplits": "داعم آخر يتقاسم {value}",
  "cinema.you.othersSplit": "يتقاسم {n} داعمون آخرون {value}",
  "cinema.you.oneWinningBackerTakes": "يأخذ داعم فائز واحد {value}",
  "cinema.you.winningBackersSplit": "يتقاسم {n} داعمون فائزون {value}",
  "cinema.you.viewFullResults": "عرض النتائج الكاملة",
  "cinema.you.howItWorks": "كيف يعمل",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "بطاقة مُقيّمة عادية؛ يحتفظ بها أكبر داعم للخانة أو يعيد بيعها، بالتناسب.",
  "cinema.theatre.disposition.sellBackSplit":
    "قاعدة Grail: لا يستطيع داعم واحد تغطية حصة الآخرين بالتناسب، لذا تُباع مجددًا افتراضيًا ويُقسّم USDC بين داعمي الخانة.",
  "cinema.theatre.disposition.topBackerKeeps":
    "قاعدة Grail: تغطي حصة أكبر داعم بالتناسب تكلفة شراء حصص الآخرين، فيحتفظ بـ Grail ويدفع لكل شخص حصة بطاقته من USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "اتخذ {decided} من أصل {total} لاعبًا آخر قرارهم؛ الجولة التالية خلال {seconds} ثانية",
  "cinema.theatre.playersDeciding": "اللاعبون يقررون {count}",
  "cinema.theatre.nextRoundIn": "الجولة التالية خلال {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "تسوية الجولة",
  "cinema.theatre.stageLockingBoard": "جارٍ قفل اللوحة…",
  "cinema.theatre.stagePacksOpening": "جارٍ فتح الباكات على اللوحة",
  "cinema.theatre.stageWinnerDrawn": "سُحب الفائز",
  "cinema.theatre.headlineNoEntries": "لا إدخالات في هذه الجولة",
  "cinema.theatre.headlineRevealing": "جارٍ كشف الباكات…",
  "cinema.theatre.headlineTileWins": "فازت {tile} بـ {value}",
  "cinema.theatre.tileFallback": "الخانة",
  "cinema.theatre.youWon": "لقد فزت بـ {value}",
  "cinema.theatre.youLostNoStake": "خسرت؛ لا رهان لك على {tile}",
  "cinema.theatre.winnerFallback": "الفائز",
  "cinema.theatre.tileWonNoStake": "فاز {tile} · لم يكن لديك أي حصة",
  "cinema.theatre.aTileFallback": "الخانة",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "لُعبت {tiles} خانات · المجمّع {pool}",
  "cinema.theatre.stripMetaCards": " · {value} بطاقات",
  "cinema.theatre.stripMetaCash": " + {value} نقدًا",
  "cinema.theatre.drawingWinner": "سحب الفائز",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "نتيجة الجولة",
  "cinema.theatre.roundSettled": "تمت تسوية الجولة",
  "cinema.theatre.winner": "الفائز",
  "cinema.theatre.seedNote":
    "يتضمن ذلك رهان البداية {value} على {tile}؛ امسح رهانات البداية في لوحة الرهان للعب من $0.",
  "cinema.theatre.lossNoteStaked":
    "راهنت {value} على خانات أخرى في هذه الجولة. مرّر فوق أي خانة خلف هذه اللوحة لترى ما فتحته ولماذا خسرت.",
  "cinema.theatre.lossNoteNoStake":
    "لم تدعم أي خانة في هذه الجولة، لذلك لا عائد لك. اختر حجم رهان وانقر على خانة في الجولة التالية.",
  "cinema.theatre.bonusGrails.one":
    "هبطت سحبة GRAIL إضافية ({n}) هذه الجولة: تذهب إلى داعمي الخانة الفائزة كغنيمة إضافية (يُحتفظ بها أو تُباع مجددًا بالتناسب إذا تعذّر الاحتفاظ بها لقيمتها العالية)، ولا تذهب إلى رسوم ATTN أو المطاردة.",
  "cinema.theatre.bonusGrails.other":
    "هبطت {n} سحبات GRAIL إضافية هذه الجولة: تذهب إلى داعمي الخانة الفائزة كغنيمة إضافية (يُحتفظ بها أو تُباع مجددًا بالتناسب إذا تعذّر الاحتفاظ بها لقيمتها العالية)، ولا تذهب إلى رسوم ATTN أو المطاردة.",
  "cinema.theatre.noPacksBacked": "لم تُدعَم أي باكات في هذه الجولة. تبدأ الجولة التالية تلقائيًا.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "تقسيم العائد · {tile}",
  "cinema.theatre.payoutSplitMeta": "المجمّع {pool} · تغذية المطاردة {feed}",
  "cinema.theatre.payoutSplitChase": " · المطاردة +{value}",
  "cinema.theatre.you": "أنت",
  "cinema.theatre.physicalCard": "البطاقة المادية ←",
  "cinema.theatre.grailSecured": " (تم تأمين Grail)",
  "cinema.theatre.grailSoldBack": "أُعيد بيع Grail ({value}) ← تقسيم USDC أعلاه.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "أصابت المطاردة!",
  "cinema.theatre.chaseHitBody":
    "أطلقت المطاردة قرعتها النادرة، فأُضيف {value} من المطاردة إلى هذا الفوز وإلى التقسيم أعلاه. تبدأ المطاردة التالية في التراكم من جديد.",
  "cinema.theatre.chaseMissLead": "لا توجد مكافأة من المطاردة هذه الجولة.",
  "cinema.theatre.chaseMissBody": "تنتظر المطاردة قرعتها النادرة، لذلك تواصل النمو؛ رصيدها الآن {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "تحقّق من القرعة",
  "cinema.theatre.vrfSummaryNote": "قرعة قابلة للتحقق · عرض إيصال القرعة",
  "cinema.theatre.vrfRoundId": "معرف الجولة",
  "cinema.theatre.vrfWinningDraw": "قرعة الفوز",
  "cinema.theatre.vrfDrawSeed": "بذرة القرعة",
  "cinema.theatre.vrfProofId": "معرف الإثبات",
  "cinema.theatre.vrfTicket": "#{n} من {total}",
  "cinema.theatre.vrfVerifying": "جارٍ التحقق…",
  "cinema.theatre.vrfRecheck": "إعادة فحص القرعة",
  "cinema.theatre.vrfVerifierLink": "أداة التحقق ↗",
  "cinema.theatre.vrfVerified": "✓ تم التحقق من القرعة؛ ويمكن مطابقة هذا الفائز مجددًا مع بذرة القرعة المنشورة.",
  "cinema.theatre.vrfFailed": "✗ لم تطابق هذه القرعة بذرتها عند إعادة الفحص؛ لا تثق بها.",
  "cinema.theatre.vrfNote": "تسحب كل جولة فائزًا واحدًا من بذرة منشورة يمكنك إعادة فحصها.",
  "cinema.theatre.vrfNoDraw": "لم تُدعَم أي باكات في هذه الجولة؛ لا شيء يُسحب.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "احتفظ بالبطاقة ← المجموعة",
  "cinema.theatre.sellBackFor": "إعادة البيع مقابل {value}",
  "cinema.theatre.continueNextRound": "المتابعة إلى الجولة التالية",
  "cinema.theatre.continue": "متابعة",
  "cinema.theatre.settleHint":
    "يضيف الاحتفاظ بالبطاقة إياها إلى مجموعتك. وتضيف إعادة البيع {sell} ({pct}% من {value}، إعادة شراء CC لهذا الباك) إلى رصيدك. لا إجراء = إعادة البيع افتراضيًا عند إغلاق الجولة.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "مغلق",
  "cinema.prizeModal.stageReveal": "الكشف",
  "cinema.prizeModal.betterLuck": "حظًا أوفر في الجولة التالية",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "جارٍ تحضير بطاقتك…",
  "cinema.share.renderingPng": "جارٍ إنشاء PNG…",
  "cinema.share.renderFailed": "تعذّر إنشاء الصورة. حاول مجددًا.",
  "cinema.share.captionOpened": "فُتح النص التعريفي على X. أرفق ملف PNG المحفوظ.",
  "cinema.share.close": "إغلاق",
  "cinema.share.downloadPng": "تنزيل PNG",
  "cinema.share.shareToX": "مشاركة على X",
  "cinema.share.done": "تم",
  "cinema.share.provablyFair": "معارك الباك · كل قرعة قابلة للتحقق",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "المضاعف {value}",
  "cinema.winShare.multiplier": "المضاعف",
  "cinema.winShare.inCards": "من البطاقات",
  "cinema.winShare.cashWon": "نقد فائز",
  "cinema.winShare.tileHit": "· إصابة الخانة",
  "cinema.winShare.entry": "الدخول",
  "cinema.winShare.winOdds": "احتمالات الفوز",
  "cinema.winShare.totalValue": "القيمة الإجمالية",
  "cinema.winShare.certLine": "مدعوم من SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "الجولة رقم {n} · قرعة VRF قابلة للتحقق",
  "cinema.winShare.takeHomeAriaLabel": "الصافي الذي تأخذه {value}",
  "cinema.winShare.totalTakeHome": "إجمالي ما تأخذه إلى رصيدك",
  "cinema.winShare.breakdown.one": "{cash} نقدًا + بطاقة {n} ({value})",
  "cinema.winShare.breakdown.other": "{cash} نقدًا + بطاقات {n} ({value})",
  "cinema.winShare.deposited": "أُودع",
  "cinema.winShare.wonBy": "فاز بها {name}",
  "cinema.winShare.theGrail": "GRAIL",
  "cinema.winShare.topPull": "أبرز سحبة",
  "cinema.winShare.topCardOfRound": "أفضل بطاقة في الجولة",
  "cinema.winShare.poweredBySlabz": "مدعوم من SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "شارك فوزك",
  "cinema.winShare.pngSaved": "حُفظ PNG. أرفقه بمنشورك؛ لا يستطيع X إضافته نيابةً عنك.",
  "cinema.winShare.renderingHdVideo": "جارٍ إنشاء فيديو الجولة عالي الدقة…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "جارٍ إنشاء فيديو الجولة عالي الدقة - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "حُفظ الفيديو عالي الدقة. أرفقه بمنشورك بدلًا من الصورة.",
  "cinema.winShare.hdRenderFailed": "فشل إنشاء الفيديو عالي الدقة. حاول مجددًا.",
  "cinema.winShare.hdVideoButton": "فيديو الجولة عالي الدقة",
  "cinema.winShare.hdVideoTitle": "أنشئ الجولة كملف HD mp4 (خدمة عرض محلية) واحفظه.",
  "cinema.winShare.tweetTriggerLabel": "شارك الفوز على X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "العائد {value} على الرهان",
  "cinema.pnlShare.onStake": "على الرهان",
  "cinema.pnlShare.certifiedRun": "جولة موثّقة · صافي الربح والخسارة",
  "cinema.pnlShare.heroSub.one": "عبر {n} جولة · معدل الفوز {pct}%",
  "cinema.pnlShare.heroSub.other": "عبر {n} جولات · معدل الفوز {pct}%",
  "cinema.pnlShare.collection": "المجموعة",
  "cinema.pnlShare.change30d": "التغير خلال 30D",
  "cinema.pnlShare.ribbonAriaLabel.one": "النتيجة لكل جولة لآخر جولة راهنت عليها وعددها {n}",
  "cinema.pnlShare.ribbonAriaLabel.other": "النتيجة لكل جولة لآخر {n} جولات راهنت عليها",
  "cinema.pnlShare.bestPull": "أفضل سحب",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "شائع",
  "cinema.pnlShare.rounds": "جولات",
  "cinema.pnlShare.winRate": "معدل الفوز",
  "cinema.pnlShare.roi": "عائد الاستثمار",
  "cinema.pnlShare.bestRound": "أفضل جولة",
  "cinema.pnlShare.rank": "الرتبة #{n}",
  "cinema.pnlShare.rankOf": "المرتبة #{n} من {total}",
  "cinema.pnlShare.staked": "{value} رهانًا",
  "cinema.pnlShare.overlayAriaLabel": "مشاركة جولتك",
  "cinema.pnlShare.saved": "حُفظ. أرفقه بمنشورك.",
  "cinema.pnlShare.triggerLabel": "مشاركة الربح والخسارة",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "الاحتفاظ / البيع",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "قرارك",
  "cinema.recap.dest.deciding": "قيد اتخاذ القرار",
  "cinema.recap.dest.you": "أنت",
  "cinema.recap.dest.topBacker": "أكبر داعم",
  "cinema.recap.dest.yourCard": "بطاقتك",
  "cinema.recap.dest.wonBy": "فاز بها",
  "cinema.recap.dest.aBacker": "داعم",
  "cinema.recap.dest.yourChaseLoot": "غنائم المطاردة الخاصة بك",
  "cinema.recap.dest.chaseLoot": "نهب المطاردة",
  "cinema.recap.dest.releasedFromVault": "أُطلقت من الخزنة",
  "cinema.recap.dest.sweptTo": "نُقلت إلى",
  "cinema.recap.dest.chaseVault": "خزنة المطاردة",
  "cinema.recap.dest.fundsJackpot": "تموّل الجائزة الكبرى",
  "cinema.recap.dest.protocolFee": "رسوم البروتوكول",
  "cinema.recap.dest.tableRake": "اقتطاع الطاولة",
  "cinema.recap.dest.soldBack": "أُعيد بيعها",
  "cinema.recap.dest.intoTheSplit": "إلى التقسيم",
  "cinema.recap.dest.toThePool": "+{value} إلى المجمّع",
  "cinema.recap.sublineYours": "بطاقات الطاولة كلها في هذه الجولة. بطاقتك محددة أدناه.",
  "cinema.recap.sublineLost": "بطاقات الطاولة كلها في هذه الجولة. لا واحدة منها لك.",
  "cinema.recap.sublineNoStake": "بطاقات الطاولة كلها في هذه الجولة. لم تشارك في هذه الجولة.",
  "cinema.recap.sectionAriaLabel": "أين ذهبت كل بطاقة من بطاقات الجولة هذه",
  "cinema.recap.eyebrow": "نتائج الجولة",
  "cinema.recap.headline": "حيث هبطت كل بطاقة",
  "cinema.recap.theatreHeader": "قصة الجولة · وجهة كل بطاقة",
  "cinema.recap.openCardTitle": "يفتح صفحة البطاقة في علامة تبويب جديدة",
  "cinema.recap.fromPack": "من {pack}",
  "cinema.recap.railAriaLabel": "كل بطاقات هذه الجولة، الأعلى قيمة أولاً",
  "cinema.recap.tierRule.one": "البطاقة الأخرى · {value}",
  "cinema.recap.tierRule.other": "البطاقات الأخرى {n} · {value}",
  "cinema.recap.showMore": "عرض {n} إضافية",
  "cinema.recap.showAll": "عرض الكل ({n})",
  "cinema.recap.showing": "عرض {n} من {total} بطاقة · {value} من {totalValue}",
  "cinema.recap.allShown": "كل البطاقات {n} · {value} إجمالاً",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "جارٍ إنهاء الفيديو…",
  "cinema.replay.recordingEmpty": "عاد التسجيل فارغًا. حاول مجددًا.",
  "cinema.replay.checkingService": "جارٍ التحقق من خدمة العرض عالي الدقة…",
  "cinema.replay.serviceUnreachable":
    "لا يمكن الوصول إلى خدمة العرض عالي الدقة، لذلك يتعذر إنشاء فيديو عالي الدقة. استخدم تسجيل علامة التبويب لالتقاطها بدلًا من ذلك (عبر مطالبة المتصفح).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "جارٍ إنشاء الفيديو عالي الدقة: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "فشل إنشاء فيديو عالي الدقة. حاول مجددًا، أو استخدم تسجيل علامة التبويب لالتقاطها.",
  "cinema.replay.cannotRecord":
    "لا يستطيع هذا المتصفح تسجيل الفيديو هنا. سيُحفظ ملف الجولة بدلًا من ذلك؛ أسقطه في صفحة الإعادة لمشاهدته مجددًا.",
  "cinema.replay.pickThisTab": "اختر «علامة التبويب هذه» لتسجيل الجولة.",
  "cinema.replay.recorderFailed": "تعذّر بدء المسجّل.",
  "cinema.replay.watermarkAriaLabel": "إعادة اللعب من الجولة {n}",
  "cinema.replay.watermarkAriaLabelDated": "إعادة الجولة {n}، سُجّلت في {date}",
  "cinema.replay.watermarkTag": "إعادة",
  "cinema.replay.watermarkRound": "الجولة #{n}",
  "cinema.replay.headerSeed": "البذرة {seed}",
  "cinema.replay.phaseBidding": "المراهنة",
  "cinema.replay.phaseReveal": "الكشف",
  "cinema.replay.phaseDone": "تم",
  "cinema.replay.boardAriaLabel": "لوحة الإعادة",
  "cinema.replay.controlsAriaLabel": "عناصر تحكم إعادة الجولة {n}",
  "cinema.replay.pause": "إيقاف مؤقت",
  "cinema.replay.play": "تشغيل",
  "cinema.replay.pauseButton": "إيقاف مؤقت",
  "cinema.replay.playButton": "تشغيل",
  "cinema.replay.restart": "إعادة تشغيل",
  "cinema.replay.scrubAriaLabel": "تصفح الجولة كاملة: من المراهنة إلى الكشف",
  "cinema.replay.lockMark": "قفل",
  "cinema.replay.seeking": "جارٍ البحث",
  "cinema.replay.speedAriaLabel": "سرعة التشغيل",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "حفظ الفيديو",
  "cinema.replay.saveVideoTitle":
    "أنشئ الجولة كملف HD mp4 (خدمة العرض؛ لا يُسجَّل شيء على شاشتك)",
  "cinema.replay.recordTab": "تسجيل علامة التبويب",
  "cinema.replay.recordTabTitle":
    "الخيار الاحتياطي: سجّل علامة التبويب هذه عبر مطالبة التقاط الشاشة في المتصفح (جودة فورية)",
  "cinema.replay.saveRound": "حفظ الجولة",
  "cinema.replay.saveRoundTitle":
    "نزّل الجولة كملف بيانات صغير؛ يمكن لأي شخص إسقاطه في صفحة الإعادة لمشاهدة هذه الجولة نفسها",
  "cinema.replay.close": "إغلاق",
  "cinema.replay.backToGame": "العودة إلى اللعبة",
  "cinema.replay.shareOverlayAriaLabel": "مشاركة هذه الجولة",
  "cinema.replay.videoReady": "فيديو الجولة جاهز",
  "cinema.replay.formatWebm": "حُفظ بصيغة .webm؛ يحتاج X إلى mp4 للرفع، لذا شارك الرابط أو حوّل الملف أولًا.",
  "cinema.replay.formatMp4": "حُفظ بصيغة .mp4؛ جاهز للإرفاق على X.",
  "cinema.replay.shareOnX": "مشاركة على X",
  "cinema.replay.saveAgain": "حفظ مجددًا",
  "cinema.replay.shareHint": "لا يستطيع X إرفاق فيديو من الويب؛ يُفتح منشورك مُعدًّا مسبقًا، فأرفق الملف المحفوظ.",
  "cinema.replay.xOpened": "فُتح X مع النص التعريفي. أرفق الملف المحفوظ ({filename})؛ لا يستطيع محرر الويب إضافته نيابةً عنك.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE إعادة الجولة",
  "cinema.replayRoute.noRecordingParam": "لم يتم توفير التسجيل. قم بتمرير ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "لا يمكن قراءة التسجيل من ?rec=.",
  "cinema.replayRoute.loadFailed": "تعذر تحميل التسجيل ({error}).",
  "cinema.replayRoute.badge": "إعادة الجولة",
  "cinema.replayRoute.loading": "جارٍ تحميل التسجيل",
  "cinema.replayRoute.noRecording": "لا يوجد تسجيل للعب.",
  "cinema.replayRoute.hint":
    "تُفتح الإعادات من شريط الجولات السابقة في اللوحة (إعادة على جولة تمت تسويتها) أو من رابط ?rec= مشترك.",
  "cinema.replayRoute.roundResults": "نتائج الجولة",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.share.shareFile": "مشاركة الملف",
  "cinema.share.shareSheetOpened": "فُتحت ورقة المشاركة.",
  "cinema.winShare.lossHeadline": "خسارة الجولة",
  "cinema.winShare.lossResult": "خسارة",
  "cinema.winShare.returned": "مُعاد",
  "cinema.winShare.bestPull": "أفضل سحب",
  "cinema.winShare.playedBy": "لعبها {name}",
  "cinema.winShare.lossCaption": "الجولة #{n}: راهنت بـ {stake}. لا عائد لي في هذه الجولة.",
  "cinema.winShare.lossCardCaption": "أفضل سحب على الطاولة، لكنه ليس لي.",
  "cinema.winShare.lossNoCardCaption": "سُجّلت نتيجة الجولة بصدق.",
  "cinema.winShare.roundResultTop": "جولة",
  "cinema.winShare.roundResultMain": "خسارة",
  "cinema.winShare.shareRoundCard": "مشاركة البطاقة",
  "cinema.replay.shareVideo": "مشاركة الفيديو",
  "cinema.replay.shareVideoTitle": "مشاركة فيديو الجولة",
  "cinema.replay.shareVideoSheetOpened": "فُتحت ورقة المشاركة مع الفيديو.",
  "cinema.replay.shareVideoFailed": "تعذرت مشاركة الفيديو. حاول مجددًا.",
  "cinema.replay.shareSheetHint": "يمكن لجهازك إرسال هذا الفيديو إلى X من ورقة المشاركة.",
  "cinema.replay.shareRoundTitle": "attn royale · الجولة #{n}",
  "cinema.replay.shareRoundTable": "{amount} على الطاولة.",
  "cinema.replay.shareRoundWin": "بلاطتي حسمت طاولة {pool} · عاد {amount}.",
  "cinema.replay.shareRoundCardsOnly": "البلاطة {tile} حسمت طاولة {pool} · خسرت بلاطتي لكن عاد {amount}.",
  "cinema.replay.shareRoundWinner": "البلاطة {tile} حسمت طاولة {pool}.",
  "cinema.share.shareVideo": "مشاركة الفيديو",
  "cinema.share.preparingOutput": "جارٍ تجهيز المشاركة…",
  "cinema.share.cancelled": "أُلغيت المشاركة.",
  "cinema.share.shareSheetHint": "يمكن لجهازك إرسال هذا الفيديو إلى X من ورقة المشاركة.",
  "cinema.personalReveal.sectionAria": "البطاقات التي فتحتها",
  "cinema.personalReveal.title": "البطاقات التي فتحتها",
  "cinema.personalReveal.progress.eyebrow": "كشف متزامن",
  "cinema.personalReveal.progress.title": "جارٍ فتح البطاقات",
  "cinema.personalReveal.progress.body": "تُفتح البطاقات الآن على الطاولة. يستمر الكشف المشترك عند انتهاء هذه المرحلة.",
  "cinema.personalReveal.normal.label": "كشف عادي",
  "cinema.personalReveal.normalHint": "يظهر ظهر البطاقة أولًا. انقر على بطاقة أو اضغط عليها لقلبها؛ البطاقات التي تكشفها تصبح ملكك. تُقلب البطاقات التي تظل مقلوبة تلقائيًا بعد 5 ثوانٍ.",
  "cinema.personalReveal.hardcore.label": "كشف مكثف",
  "cinema.personalReveal.hardcoreHint": "يظهر ظهر البطاقة أولًا. انقر على بطاقة أو اضغط عليها لقلبها؛ تُحسم الملكية بعد السحب. تُقلب البطاقات التي تظل مقلوبة تلقائيًا بعد 5 ثوانٍ.",
  "cinema.personalReveal.yourCard": "بطاقتك",
  "cinema.personalReveal.youOpened": "فتحتها أنت",
  "cinema.personalReveal.otherCards": "بطاقات أخرى",
  "cinema.personalReveal.sort.group": "ترتيب البطاقات",
  "cinema.personalReveal.sort.pack": "الحزمة",
  "cinema.personalReveal.sort.packAria": "رتّب حسب سعر الحزمة، الأرخص أولًا",
  "cinema.personalReveal.sort.rarity": "الندرة",
  "cinema.personalReveal.sort.revealFirst": "يُتاح الترتيب حسب الندرة بعد كشف جميع البطاقات",
  "cinema.personalReveal.sort.bestAria": "رتّب حسب الندرة، الأفضل أولًا",
  "cinema.personalReveal.sort.worstAria": "رتّب حسب الندرة، الأسوأ أولًا",
  "cinema.personalReveal.sort.packStatus": "البطاقات مرتبة حسب سعر الحزمة، الأرخص أولًا",
  "cinema.personalReveal.sort.bestStatus": "البطاقات مرتبة حسب الندرة، الأفضل أولًا",
  "cinema.personalReveal.sort.worstStatus": "البطاقات مرتبة حسب الندرة، الأسوأ أولًا",
  "cinema.personalReveal.allOpen": "كُشفت جميع البطاقات",
  "cinema.personalReveal.autoOpenIn": "تُكشف البطاقات المتبقية تلقائيًا خلال {n} ث",
  "cinema.personalReveal.revealCardAria": "اقلب البطاقة {n}",
  "cinema.personalReveal.revealedCardAria": "تم كشف البطاقة {n}: {name}، {value}",
  "cinema.personalReveal.rarity": "الندرة",
  "cinema.personalReveal.year": "السنة",
  "cinema.personalReveal.yearUnknown": "السنة غير معروفة",
  "cinema.personalReveal.grade": "التقييم",
  "cinema.personalReveal.ungraded": "غير مقيّمة",
  "cinema.personalReveal.pageNavigation": "صفحات البطاقات",
  "cinema.personalReveal.previousPage": "البطاقات السابقة",
  "cinema.personalReveal.nextPage": "البطاقات التالية",
  "cinema.personalReveal.pageStatus": "الصفحة {page} من {pages}",
  "cinema.personalReveal.live.revealed": "كُشفت {name}",
  "cinema.personalReveal.live.all": "كُشفت البطاقات وعددها {n}",
} as Record<string, string>;
