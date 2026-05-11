import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-navy/95 backdrop-blur-md border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 h-12 w-40 pixel-dots text-cyan/30 pointer-events-none"
          aria-hidden
        />
        <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 relative">
          <Logo light />

          <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-end gap-0.5 sm:gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="shrink-0 px-2.5 sm:px-3.5 py-2 text-[12px] sm:text-sm font-semibold text-white/80 hover:text-white rounded-md transition-colors data-[status=active]:text-cyan data-[status=active]:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contacto"
            className="hidden md:inline-flex shrink-0 items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan text-navy font-bold text-sm hover:shadow-glow transition-shadow"
          >
            <Sparkles className="size-4" />
            Análise Gratuita
          </Link>
        </nav>
      </div>
    </header>
  );
}
