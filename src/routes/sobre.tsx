import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award, Heart, ShieldCheck, Lightbulb, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — SERRUA DIGITAL" },
      { name: "description", content: "Agência de marketing digital e tecnologia em Moçambique. Conheça a nossa missão, visão e equipa." },
    ],
  }),
  component: AboutPage,
});

function PageHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <section className="relative bg-navy text-white py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="absolute top-10 right-10 h-24 w-32 pixel-dots text-cyan/40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan">{kicker}</span>
        <h1 className="mt-3 text-4xl sm:text-6xl font-black">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/80 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div>
      <PageHeader kicker="Sobre Nós" title="Quem Somos" subtitle="Uma agência criada em Moçambique, para Moçambique." />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-foreground/80">
            A <strong>SERRUA DIGITAL</strong> é uma agência de marketing digital e tecnologia fundada em Moçambique. Nascemos para servir as pequenas e médias empresas moçambicanas que precisam de crescer digitalmente — com serviços que vão das redes sociais à inteligência artificial, tudo numa única agência acessível.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Target className="size-8 text-electric" />
            <h2 className="mt-4 text-2xl font-black text-navy">Missão</h2>
            <p className="mt-3 text-muted-foreground">Transformar negócios locais em marcas digitais completas.</p>
          </div>
          <div className="p-8 rounded-2xl gradient-brand text-white">
            <Eye className="size-8 text-cyan" />
            <h2 className="mt-4 text-2xl font-black">Visão</h2>
            <p className="mt-3 text-white/85">Ser a agência de referência para PMEs na África Austral.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-navy">Os nossos valores</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Award, t: "Resultados", d: "Métricas concretas, não promessas vazias." },
              { Icon: ShieldCheck, t: "Transparência", d: "Comunicação clara e honesta sempre." },
              { Icon: Lightbulb, t: "Inovação", d: "Adoptamos as ferramentas mais recentes." },
              { Icon: Heart, t: "Comprometimento", d: "O sucesso do cliente é o nosso sucesso." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl bg-card border border-border hover:border-electric/40 transition-colors">
                <Icon className="size-7 text-electric" />
                <h3 className="mt-4 text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-navy">A nossa equipa</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "Kassir Abibo", r: "Co-fundador" },
              { n: "[Nome Parceira]", r: "Co-fundadora" },
              { n: "Parceiro Audiovisual", r: "Produção" },
            ].map((m) => (
              <div key={m.n} className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-elegant transition-shadow">
                <div className="mx-auto h-24 w-24 rounded-full gradient-brand grid place-items-center text-white">
                  <Users className="size-10" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{m.n}</h3>
                <p className="text-sm text-muted-foreground">{m.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
