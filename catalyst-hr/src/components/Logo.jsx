/* ─── CatalystLogo ──────────────────────────────────────────── */
/* Icon-only logo */
export function CatalystLogo({ size = 44, white = false }) {
  const color = white ? "#ffffff" : "#0D9488"; // Teal or White
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, display: "block" }}>
      <rect width="100" height="100" rx="20" fill={color} fillOpacity="0.1"/>
      <path d="M50 20L75 40V75H25V40L50 20Z" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="55" r="10" fill={color}/>
    </svg>
  );
}

/* ─── LogoFull ──────────────────────────────────────────────── */
/* Full logo (icon + text) */
export function LogoFull({ size = 40, white = false }) {
  const color = white ? "#ffffff" : "#0F172A"; // Dark or White
  const iconColor = white ? "#ffffff" : "#0D9488";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, display: "block" }}>
        <rect width="100" height="100" rx="20" fill={iconColor} fillOpacity="0.1"/>
        <path d="M50 20L75 40V75H25V40L50 20Z" stroke={iconColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="55" r="10" fill={iconColor}/>
      </svg>
      <span style={{ 
        fontWeight: 800, 
        fontSize: size * 0.55, 
        color: color,
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "-0.5px"
      }}>
        Catalyst<span style={{ color: iconColor, fontWeight: 900 }}>HR</span>
      </span>
    </div>
  );
}
