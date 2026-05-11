import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { ServiceIcon } from "@/components/ServiceIcon";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — SERRUA DIGITAL" },
      { name: "description", content: "9 serviços de marketing digital, tecnologia e IA para PMEs em Moçambique. Preços acessíveis." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="relative bg-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="absolute top-10 right-10 h-24 w-32 pixel-dots text-cyan/40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan">Serviços</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black">Tudo o que precisa para crescer</h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">
            Nove serviços completos com preços pensados para PMEs moçambicanas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-electric/40 hover:shadow-elegant transition-all relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / 09
              </span>
              <div className="h-14 w-14 rounded-xl gradient-brand grid place-items-center text-white shadow-glow">
                <ServiceIcon name={s.icon} className="size-7" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-navy">{s.name}</h2>
              <p className="mt-3 text-muted-foreground">{s.long}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-electric">Investimento</div>
                  <div className="text-lg font-bold text-navy">{s.price}</div>
                </div>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-navy text-white text-sm font-bold group-hover:bg-electric transition-colors"
                >
                  Saber Mais <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
