import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import feprolImg from "@/assets/portfolio-feprol.png";
import cepeImg from "@/assets/portfolio-cepe.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — SERRUA DIGITAL" },
      { name: "description", content: "Casos de sucesso: websites criados para empresas moçambicanas." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    name: "Ferragens Progresso (FEPROL)",
    category: "E-commerce / Catálogo",
    type: "Website Institucional + Catálogo",
    url: "https://feprol.co.mz",
    image: feprolImg,
  },
  {
    name: "CEPE Consultoria",
    category: "Engenharia & Arquitectura",
    type: "Website Institucional",
    url: "https://cepe.co.mz",
    image: cepeImg,
  },
  {
    name: "Dora Consultores",
    category: "Consultoria Ambiental",
    type: "Website Institucional",
    url: "https://doramz.lovable.app",
    image: null,
  },
  {
    name: "EnviEstudos",
    category: "Consultoria Ambiental",
    type: "Website Institucional",
    url: "https://enviestudos-moz.lovable.app",
    image: null,
  },
];

function PortfolioPage() {
  return (
    <div>
      <section className="relative bg-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="absolute top-10 right-10 h-24 w-32 pixel-dots text-cyan/40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan">Casos de Sucesso</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black">O Nosso Trabalho</h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">
            Websites e plataformas digitais criadas para empresas em Moçambique.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all hover:-translate-y-1 flex flex-col"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[4/3] relative overflow-hidden bg-navy block"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 gradient-brand grid place-items-center">
                    <span className="text-white text-3xl font-black opacity-90">{p.name.split(" ")[0]}</span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur text-white text-xs font-bold">
                  {p.type}
                </div>
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-electric">{p.category}</span>
                <h2 className="mt-2 text-xl font-black text-navy">{p.name}</h2>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-bold text-electric hover:text-cyan"
                >
                  Ver Projecto <ExternalLink className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
