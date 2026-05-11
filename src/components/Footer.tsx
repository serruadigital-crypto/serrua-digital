import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-24 w-64 pixel-dots text-cyan/20 pointer-events-none"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3 relative">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Tecnologia & Marketing para Escalar o seu Negócio.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-cyan mb-4">Navegação</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-cyan">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-cyan">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-cyan">Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-cyan">Portfólio</Link></li>
            <li><Link to="/contacto" className="hover:text-cyan">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-cyan mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="size-4 text-cyan" /> +258 83 492 8034</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-cyan" /> serruadigital@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-cyan" /> Nampula, Moçambique</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 SERRUA DIGITAL. Todos os direitos reservados. | Nampula, Moçambique
      </div>
    </footer>
  );
}
