import { useRef, type CSSProperties, type PointerEvent } from "react";

import {
  STONKS_FACTS,
  STONKS_PACK_PRICE_LABEL,
  STONKS_PULLS,
  STONKS_TIER_CELLS,
  stonksPull,
  stonksTierTag,
  type StonksPull,
} from "./stonksLowerModel";
import "./stonksLower.css";

/** "NVDAx" renders as NVDA plus a blue x, like the card art. */
function Ticker({ ticker }: Readonly<{ ticker: string }>) {
  return ticker.endsWith("x") ? <>{ticker.slice(0, -1)}<i>x</i></> : ticker;
}

/** Pointer tilt and a foil sheen that follows it; off under reduced motion. */
function useCardTilt(reducedMotion: boolean) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (reducedMotion || !card) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--stonks-ry", `${(nx * 22).toFixed(2)}deg`);
    card.style.setProperty("--stonks-rx", `${(-ny * 14).toFixed(2)}deg`);
    card.style.setProperty("--stonks-sx", `${(50 + nx * 90).toFixed(1)}%`);
    card.style.setProperty("--stonks-sy", `${(50 + ny * 90).toFixed(1)}%`);
  };
  const onPointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    for (const name of ["--stonks-ry", "--stonks-rx", "--stonks-sx", "--stonks-sy"]) card.style.removeProperty(name);
  };
  return { cardRef, onPointerMove, onPointerLeave };
}

function CardArt({ pull, reducedMotion, className, arrow = false }: Readonly<{
  pull: StonksPull;
  reducedMotion: boolean;
  className: string;
  arrow?: boolean;
}>) {
  const tilt = useCardTilt(reducedMotion);
  if (!pull.art) return null;
  const mask = { "--stonks-mask": `url(${pull.art})` } as CSSProperties;
  return (
    <div className={className} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
      {arrow ? (
        <svg className="stonksPullCard__arrow" viewBox="0 0 470 300" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="stonksPullArrowHot" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FFC25A" />
              <stop offset=".5" stopColor="#FF7A2A" />
              <stop offset="1" stopColor="#F0401A" />
            </linearGradient>
          </defs>
          <polyline points="10,290 170,150 230,200 360,88" fill="none" stroke="url(#stonksPullArrowHot)" strokeWidth={26} strokeLinejoin="miter" />
          <polygon points="455,6 399,110 344,46" fill="#F0401A" />
        </svg>
      ) : null}
      <div className="stonksCard__float">
        <div ref={tilt.cardRef} className="stonksCard" style={mask}>
          <img src={pull.art} alt="" draggable={false} loading="lazy" />
          <span className="stonksCard__foil" />
          <span className="stonksCard__sweep" />
        </div>
      </div>
      <div className="stonksCard__floor" aria-hidden="true" />
    </div>
  );
}

function ExamplePull({ pull, win, reducedMotion }: Readonly<{ pull: StonksPull; win: boolean; reducedMotion: boolean }>) {
  const tag = stonksTierTag(pull);
  return (
    <article
      className={`stonksModule stonksPullCard stonksPullCard--${win ? "win" : "loss"}`}
      aria-label={`Example pull. ${pull.ticker}, ${tag}. Value at pull ${pull.value}, ${pull.multiplier} the pack.`}
    >
      <CardArt pull={pull} reducedMotion={reducedMotion} className="stonksPullCard__art" arrow={win} />
      <div className="stonksPullCard__info">
        <h3 className="stonksMeme">{win ? "stonks" : "not stonks"}</h3>
        <div className="stonksPullCard__id">
          <b><Ticker ticker={pull.ticker} /></b>
          <span className={`stonksTierTag${pull.tier === "jackpot" ? " stonksTierTag--hot" : ""}`}>{tag}</span>
        </div>
        <dl className="stonksPullCard__nums">
          <div><dt>VALUE AT PULL</dt><dd className={win ? "stonksHot" : undefined}>{pull.value}</dd></div>
          <div><dt>X PACK</dt><dd>{pull.multiplier}</dd></div>
          <div><dt>VS {STONKS_PACK_PRICE_LABEL}</dt><dd>{pull.versus}</dd></div>
        </dl>
        <p>{win ? <><b>Sent to your wallet.</b> Keep it or sell it.</> : <><b>Keep it or sell it.</b> Your call.</>}</p>
      </div>
    </article>
  );
}

function OddsBoard() {
  return (
    <div className="stonksModule stonksOdds">
      <div className="stonksOdds__tiers">
        {STONKS_TIER_CELLS.map((cell) => (
          <div key={cell.tier}>
            <b>{cell.percent}<small>%</small></b>
            <span>{cell.tier.toUpperCase()}</span>
            <em>{cell.cadence}</em>
          </div>
        ))}
      </div>
      <div className="stonksOdds__head" aria-hidden="true">
        <span />
        <span>PULL</span>
        <span>TIER</span>
        <span>ODDS</span>
        <span className="stonksOdds__r">VALUE AT PULL</span>
        <span className="stonksOdds__r">X PACK</span>
        <span className="stonksOdds__r">VS {STONKS_PACK_PRICE_LABEL}</span>
      </div>
      <ol className="stonksOdds__rows" aria-label="Every possible pull">
        {STONKS_PULLS.map((pull) => (
          <li key={pull.ticker} className={`stonksOdds__row${pull.up ? " stonksOdds__row--up" : ""}`}>
            {pull.thumb ? <img className="stonksOdds__thumb" src={pull.thumb} alt="" loading="lazy" draggable={false} /> : <span />}
            <span className="stonksOdds__ticker"><span><Ticker ticker={pull.ticker} /></span><small>{pull.name}</small></span>
            <span className={`stonksTierTag${pull.tier === "jackpot" ? " stonksTierTag--hot" : ""}`}>{pull.tier.toUpperCase()}</span>
            <span className="stonksOdds__odds">
              <b>{pull.odds}</b>
              <span className="stonksOdds__bar" aria-hidden="true"><i style={{ width: `${pull.oddsBar}%` }} /></span>
            </span>
            <span className="stonksOdds__value stonksOdds__r">{pull.value}</span>
            <span className="stonksOdds__mult stonksOdds__r">{pull.multiplier}</span>
            <span className="stonksOdds__vs stonksOdds__r">{pull.up ? "▲" : "▼"} {pull.versus}</span>
          </li>
        ))}
      </ol>
      <div className="stonksOdds__foot">
        <span>{STONKS_FACTS.averagePayout} avg payout · {STONKS_FACTS.underPrice}</span>
        <span>Value at pull. Token prices move after.</span>
      </div>
      <div className="stonksOdds__verify">
        <svg viewBox="0 0 38 38" aria-hidden="true" focusable="false">
          <circle cx="19" cy="19" r="17.5" fill="none" stroke="#8FBCFF" strokeWidth="1.4" strokeDasharray="3 3" />
          <circle cx="19" cy="19" r="12" fill="rgb(60 227 171 / 12%)" stroke="#3ce3ab" strokeWidth="1.4" />
          <polyline points="13.5,19.5 17.5,23.5 24.5,15" fill="none" stroke="#3ce3ab" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p><b>Every pull comes with a receipt.</b><span>The odds, your pull and its delivery are on record.</span></p>
        <a className="stonksPillMint" href="/docs/receipts/selection">How pulls work</a>
      </div>
    </div>
  );
}

function SellExample({ reducedMotion }: Readonly<{ reducedMotion: boolean }>) {
  const pull = stonksPull("MSFTx");
  if (!pull) return null;
  return (
    <div className="stonksModule stonksSell">
      <CardArt pull={pull} reducedMotion={reducedMotion} className="stonksSell__art" />
      <div className="stonksSell__body">
        <span className="stonksLower__kicker">SELL BACK · EXAMPLE</span>
        <h2 id="stonks-sell-title">Keep it or sell it.</h2>
        <p>Your pull is a real token in your wallet. Sell it for USDC, or hold it.</p>
        <div className="stonksQuote">
          <div className="stonksQuote__row"><span>YOUR PULL</span><b><Ticker ticker={pull.ticker} /> · {pull.tier.toUpperCase()}</b></div>
          <div className="stonksQuote__row"><span>VALUE AT PULL</span><b className="stonksHot">{pull.value}</b></div>
          <div className="stonksQuote__live">
            <span>LIVE QUOTE</span>
            <div className="stonksQuote__digits">
              <span className="stonksShimmer" role="img" aria-label="The live quote shows after you rip" />
              <em>USDC</em>
            </div>
            <small>You see the quote before you confirm.</small>
          </div>
        </div>
        {/* Illustration of the one-action close; the real button lives on your pull. */}
        <div className="stonksSell__cta" aria-hidden="true">
          <span className="stonksPrimary">Sell for USDC</span>
          <span className="stonksSell__keep">Or keep it in your wallet</span>
        </div>
      </div>
    </div>
  );
}

/** Direction F lower page: example pulls, every possible pull, and the sell close. */
export function StonksLowerPage({ reducedMotion }: Readonly<{ reducedMotion: boolean }>) {
  const nvda = stonksPull("NVDAx");
  const gold = stonksPull("GLDx");
  return (
    <div className="stonksLower" data-motion={reducedMotion ? "reduced" : "full"}>
      <section className="stonksLower__sec" id="reveal" aria-labelledby="stonks-reveal-title">
        <div className="stonksLower__col">
          <header className="stonksLower__head">
            <div>
              <span className="stonksLower__kicker">THE REVEAL</span>
              <h2 id="stonks-reveal-title">Your pull</h2>
              <p>One card. One number. Sent to your wallet.</p>
            </div>
            <span className="stonksLower__chip">Examples</span>
          </header>
          <div className="stonksLower__reveal">
            {nvda ? <ExamplePull pull={nvda} win reducedMotion={reducedMotion} /> : null}
            {gold ? <ExamplePull pull={gold} win={false} reducedMotion={reducedMotion} /> : null}
          </div>
        </div>
      </section>

      <section className="stonksLower__sec" id="odds" aria-labelledby="stonks-odds-title">
        <div className="stonksLower__col">
          <header className="stonksLower__head">
            <div>
              <span className="stonksLower__kicker">THE ODDS</span>
              <h2 id="stonks-odds-title">Every possible pull</h2>
              <p>Same odds every rip. One reward per pack.</p>
            </div>
            <span className="stonksLower__chip">{STONKS_PACK_PRICE_LABEL} Index Mix</span>
          </header>
          <OddsBoard />
        </div>
      </section>

      <section className="stonksLower__sec" id="sell" aria-labelledby="stonks-sell-title">
        <div className="stonksLower__col">
          <SellExample reducedMotion={reducedMotion} />
        </div>
      </section>
    </div>
  );
}

/** TOP PULL, AVG PAYOUT and ODDS under the rip button. */
export function StonksFactsRow() {
  return (
    <dl className="stonksFacts" aria-label="Pack facts">
      <div><dt>TOP PULL</dt><dd>{STONKS_FACTS.topPull}</dd></div>
      <div><dt>AVG PAYOUT</dt><dd>{STONKS_FACTS.averagePayout}</dd></div>
      <div><dt>ODDS</dt><dd>{STONKS_FACTS.odds}</dd></div>
    </dl>
  );
}
