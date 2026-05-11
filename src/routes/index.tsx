import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Trophy,
  BarChart3,
  Wallet,
  Headphones,
  ExternalLink,
} from "lucide-react";
import { services } from "@/lib/services-data";
import { ServiceIcon } from "@/components/ServiceIcon";
import bannerHero from "@/assets/banner-hero.jpg";
import feprolImg from "@/assets/portfolio-feprol.png";
import cepeImg from "@/assets/portfolio-cepe.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SERRUA DIGITAL — Agência de Marketing Digital e Tecnologia em Moçambique" },
      { name: "description", content: "Transformamos negócios em marcas digitais. Marketing, tecnologia e IA para PMEs moçambicanas." },
    ],
  }),
  component: HomePage,
});

const featuredProjects = [
  { name: "Ferragens Progresso", category: "E-commerce", image: feprolImg, url: "https://feprol.co.mz" },
  { name: "CEPE Consultoria", category: "Engenharia", image: cepeImg, url: "https://cepe.co.mz" },
];

function HomePage() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      {/* HERO with banner */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={bannerHero}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="absolute top-10 left-10 h-24 w-32 pixel-dots text-cyan/40" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-cyan">
              <Sparkles className="size-3.5" /> Agência Digital · Moçambique · 2026
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05]">
              Tecnologia & Marketing para <span className="gradient-text">Escalar o seu Negócio</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
              Marketing Digital, Tecnologia e Inteligência Artificial para PMEs — do anúncio ao sistema, tudo numa única agência.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan text-navy font-bold hover:shadow-glow transition-shadow"
              >
                Ver os Nossos Serviços <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="size-4" /> Fale Connosco
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-white/10 bg-white/5 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-bold uppercase tracking-widest text-white/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>9 Serviços Integrados</span><span className="text-cyan">●</span>
                <span>Moçambique</span><span className="text-cyan">●</span>
                <span>Outros países que atendemos</span><span className="text-cyan">●</span>
                <span>África Austral</span><span className="text-cyan">●</span>
                <span>PMEs em Foco</span><span className="text-cyan">●</span>
                <span>Marketing + Tecnologia + IA</span><span className="text-cyan">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — horizontal carousel with arrows */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-widest text-electric">Serviços</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black text-navy">
                Tudo o que precisa, numa só agência
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Nove serviços integrados para fazer o seu negócio crescer no digital. Use as setas para navegar.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Anterior"
                className="h-12 w-12 rounded-full bg-navy text-white grid place-items-center hover:bg-electric transition-colors shadow-elegant"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Próximo"
                className="h-12 w-12 rounded-full bg-cyan text-navy grid place-items-center hover:shadow-glow transition-shadow shadow-glow"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="hidden md:grid absolute left-3 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-background/95 text-navy border border-border place-items-center shadow-elegant hover:border-electric hover:text-electric transition-all"
            >
              <ArrowLeft className="size-5" />
            </button>

            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth"
            >
              {services.map((s, idx) => (
                <article
                  key={s.slug}
                  data-card
                  className="group snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] relative p-6 rounded-2xl bg-card border border-border hover:border-electric/40 hover:-translate-y-1 transition-all hover:shadow-elegant"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl gradient-brand grid place-items-center text-white shadow-glow">
                      <ServiceIcon name={s.icon} className="size-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <Link
                    to="/servicos"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-electric group-hover:text-cyan"
                  >
                    Saber mais <ArrowRight className="size-4" />
                  </Link>
                </article>
              ))}
            </div>

            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              className="hidden md:grid absolute right-3 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-cyan text-navy place-items-center shadow-glow hover:scale-[1.03] transition-transform"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>

          <div className="md:hidden flex justify-center gap-2 mt-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="h-11 w-11 rounded-full bg-navy text-white grid place-items-center shadow-elegant"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              className="h-11 w-11 rounded-full bg-cyan text-navy grid place-items-center shadow-glow"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-20 h-32 w-48 pixel-dots text-electric/15" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-electric">Porquê SERRUA</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-navy">A vantagem de trabalhar connosco</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Trophy, t: "Portfólio Único", d: "A única agência em Moçambique com marketing + tecnologia + IA." },
              { Icon: BarChart3, t: "Resultados Reais", d: "Relatórios mensais com métricas concretas." },
              { Icon: Wallet, t: "Preços Acessíveis", d: "Pensados para PMEs moçambicanas." },
              { Icon: Headphones, t: "Acompanhamento", d: "Comunicação directa no WhatsApp todos os dias." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl bg-navy text-white relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan/10 group-hover:bg-cyan/20 transition-colors" aria-hidden />
                <Icon className="size-8 text-cyan relative" />
                <h3 className="mt-5 text-lg font-bold relative">{t}</h3>
                <p className="mt-2 text-sm text-white/70 relative">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-electric">Portfólio</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black text-navy">Nossos Projectos</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl">
                Alguns dos trabalhos que entregámos para empresas moçambicanas.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-navy text-navy font-bold hover:bg-navy hover:text-white transition-colors"
            >
              Ver portfólio completo <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all hover:-translate-y-1 block"
              >
                <div className="aspect-[16/10] bg-navy relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-electric">{p.category}</span>
                    <h3 className="mt-1 text-xl font-black text-navy">{p.name}</h3>
                  </div>
                  <ExternalLink className="size-5 text-electric group-hover:text-cyan" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "9+", l: "Serviços" },
            { n: "5", l: "Países atendidos" },
            { n: "100%", l: "Foco em PMEs" },
            { n: "2026", l: "Pronto para o futuro" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl sm:text-6xl font-black gradient-text">{s.n}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-electric/40 blur-3xl" aria-hidden />
        <div className="absolute bottom-10 right-10 h-24 w-32 pixel-dots text-cyan/40" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black">Pronto para escalar o seu negócio?</h2>
          <p className="mt-4 text-white/75 text-lg">Análise gratuita de 20 minutos. Sem compromisso.</p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan text-navy font-bold text-lg hover:shadow-glow transition-shadow"
          >
            Trabalhe Connosco <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
