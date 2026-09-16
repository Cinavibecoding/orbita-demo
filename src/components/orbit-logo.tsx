/**
 * Marca original de "Órbita" (ícono + wordmark), diseñada para esta demo.
 * No reproduce ningún logo de una marca real.
 */

type LogoVariant = "full" | "white" | "navy" | "cyan";

const TEAL = "#123832";
const CORAL = "#FF7A59";

export function OrbitMark({
  variant = "full",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const ring = variant === "white" ? "#fff" : variant === "cyan" ? CORAL : TEAL;
  const dot = variant === "white" ? "#fff" : variant === "navy" ? TEAL : CORAL;
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Órbita">
      <circle cx="24" cy="24" r="18" fill="none" stroke={ring} strokeWidth="3.5" />
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        fill="none"
        stroke={ring}
        strokeWidth="2.5"
        opacity="0.55"
        transform="rotate(-18 24 24)"
      />
      <circle cx="24" cy="24" r="5.5" fill={dot} />
    </svg>
  );
}

export function OrbitLogo({
  variant = "full",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const text = variant === "white" ? "#fff" : TEAL;
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <OrbitMark variant={variant} className="h-7 w-7 shrink-0" />
      <span className="text-lg font-extrabold tracking-tight" style={{ color: text }}>
        Órbita
      </span>
    </span>
  );
}
