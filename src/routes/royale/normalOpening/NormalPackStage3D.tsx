import { useStockPacksBrand } from "../../../features/stockPacks/branding/stockPacksBrand";
import { StonkPackHero } from "../../../components/pack3d/hero/stonkpacks/StonkPackHero";
import "./normalPackStage3D.css";

// STONKPACKS repository version: the stonks theme renders the STONKPACKS 3D pack;
// without the theme the stage shows a plain branded sealed-pack card. The upstream
// file also renders other products' pack art, which is not part of this repository.

export type NormalPackStage3DPhase = "idle" | "committing" | "opening";

export type NormalPackStage3DProps = Readonly<{
  packId: string;
  label: string;
  imageUrl: string;
  phase: NormalPackStage3DPhase;
  quickReveal: boolean;
  reducedMotion: boolean;
  className?: string;
  /** Stonks theme only: render the STONKPACKS 3D pack instead of the sealed-pack card. */
  stonksHero?: boolean;
}>;

export function NormalPackStage3D({
  packId, label, phase, quickReveal, reducedMotion, className, stonksHero = false,
}: NormalPackStage3DProps) {
  const brand = useStockPacksBrand();
  if (stonksHero) {
    return (
      <div
        className={`normalPackStage3D normalPackStage3D--stonks${className ? ` ${className}` : ""}`}
        data-pack-id={packId}
        data-tier="stonkpacks"
        data-renderer="stonkpacks-3d"
        data-phase={phase}
        data-quick-reveal={quickReveal || undefined}
        data-reduced-motion={reducedMotion || undefined}
      >
        <StonkPackHero label={label} reducedMotion={reducedMotion} />
      </div>
    );
  }
  return (
    <div
      className={`normalPackStage3D${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={label}
      data-pack-id={packId}
      data-tier="poster"
      data-renderer="fallback"
      data-phase={phase}
      data-quick-reveal={quickReveal || undefined}
      data-reduced-motion={reducedMotion || undefined}
    >
      <div className="normalPackStage3D__poster">
        <div className="normalPackStage3D__posterFallback">
          <span>{brand.wordmark.prefix ?? brand.wordmark.name}</span><strong>{label}</strong><small>Sealed pack</small>
        </div>
      </div>
    </div>
  );
}
