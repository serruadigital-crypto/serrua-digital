import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo-serrua.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="SERRUA DIGITAL">
      <img
        src={logoSrc}
        alt="SERRUA DIGITAL"
        className={`h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.03] ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
