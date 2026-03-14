import LOGO_SRC from "../assets/logo";

/* ─── CatalystLogo ──────────────────────────────────────────── */
/* Icon-only logo (using the provided full picture) */
export function CatalystLogo({ size = 44, white = false }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Catalyst HR Solutions"
      style={{
        height: size,
        width: "auto",
        objectFit: "contain",
        flexShrink: 0,
        display: "block",
        filter: white ? "brightness(0) invert(1)" : "none"
      }}
    />
  );
}

/* ─── LogoFull ──────────────────────────────────────────────── */
/* Full logo (replacing SVG and text entirely with the picture) */
export function LogoFull({ size = 40, white = false, vertical = true }) {
  // Since the picture already includes the text vertically, we just render the image,
  // scaling it slightly larger so the text is legible.
  return (
    <img
      src={LOGO_SRC}
      alt="Catalyst HR Solutions"
      style={{
        height: size * 1.5,
        width: "auto",
        objectFit: "contain",
        flexShrink: 0,
        display: "block",
        filter: white ? "brightness(0) invert(1)" : "none"
      }}
    />
  );
}
