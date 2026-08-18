import { site } from "@/lib/site";

type LogoVariant = "light" | "dark";
type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  className?: string;
  variant?: LogoVariant;
  size?: LogoSize;
  showTagline?: boolean;
  showSeal?: boolean;
};

const sizeStyles: Record<
  LogoSize,
  { name: string; tagline: string; seal: string; gap: string }
> = {
  sm: {
    name: "text-xl tracking-[0.22em]",
    tagline: "text-[7px] tracking-[0.38em] mt-1",
    seal: "w-4 h-4 text-[8px]",
    gap: "gap-1.5",
  },
  md: {
    name: "text-2xl md:text-[1.65rem] tracking-[0.24em]",
    tagline: "text-[8px] md:text-[9px] tracking-[0.42em] mt-1.5",
    seal: "w-[18px] h-[18px] text-[9px]",
    gap: "gap-2",
  },
  lg: {
    name: "text-4xl md:text-[2.75rem] tracking-[0.26em]",
    tagline: "text-[10px] md:text-[11px] tracking-[0.44em] mt-2",
    seal: "w-6 h-6 text-[11px]",
    gap: "gap-2.5",
  },
};

function SealMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[2px] bg-seal font-serif leading-none text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] ${className}`}
      aria-hidden
    >
      寧
    </span>
  );
}

export function Logo({
  className = "",
  variant = "dark",
  size = "md",
  showTagline = true,
  showSeal = true,
}: LogoProps) {
  const styles = sizeStyles[size];
  const isLight = variant === "light";

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className={`flex items-end ${styles.gap}`}>
        <span
          className={`font-display font-medium uppercase leading-none ${styles.name} ${
            isLight ? "logo-gold" : "text-foreground"
          }`}
        >
          NINH
        </span>
        {showSeal && <SealMark className={styles.seal} />}
      </div>
      {showTagline && (
        <span
          className={`font-sans font-medium uppercase leading-none ${styles.tagline} ${
            isLight ? "text-gold-muted/80" : "text-muted-foreground"
          }`}
        >
          Photography Studio
        </span>
      )}
      <span className="sr-only">{site.name}</span>
    </div>
  );
}
