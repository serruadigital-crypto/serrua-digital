import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, MessageCircle, Video, Send } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — SERRUA DIGITAL" },
      { name: "description", content: "Análise gratuita de 20 minutos. WhatsApp, email ou videochamada." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="relative bg-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="absolute top-10 right-10 h-24 w-32 pixel-dots text-cyan/40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan">Contacto</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black">Vamos conversar?</h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">
            Análise gratuita de 20 minutos — presencial ou videochamada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-5">
          {[
            { Icon: MessageCircle, t: "WhatsApp", d: "+258 83 492 8034", href: "https://wa.me/258834928034" },
            { Icon: Mail, t: "Email", d: "serruadigital@gmail.com", href: "mailto:serruadigital@gmail.com" },
            { Icon: Video, t: "Videochamada", d: "Agende uma reunião online", href: "https://wa.me/258834928034" },
          ].map(({ Icon, t, d, href }) => (
            <a
              key={t}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-card border border-border hover:border-electric/40 hover:shadow-elegant transition-all flex items-start gap-4"
            >
              <div className="h-12 w-12 rounded-xl gradient-brand grid place-items-center text-white shrink-0">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy">{t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-black text-navy">Envie uma mensagem</h2>
            <p className="mt-2 text-muted-foreground">Respondemos em menos de 24 horas.</p>

            {sent ? (
              <div className="mt-8 p-6 rounded-2xl bg-card border border-electric/40">
                <h3 className="font-bold text-navy">Mensagem enviada!</h3>
                <p className="mt-1 text-muted-foreground">Obrigado. Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" name="nome" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Telefone / WhatsApp" name="tel" />
                  <Field label="Tipo de negócio" name="tipo" />
                </div>
                <div>
                  <label className="text-sm font-bold text-navy">Mensagem</label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-bold hover:bg-electric transition-colors"
                >
                  Enviar <Send className="size-4" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-navy">Detalhes</h2>
            <Detail Icon={Phone} t="WhatsApp / Tel" d="+258 83 492 8034" />
            <Detail Icon={Mail} t="Email" d="serruadigital@gmail.com" />
            <Detail Icon={MapPin} t="Localização" d="Nampula, Moçambique" />
            <Detail Icon={Clock} t="Horário" d="Segunda a Sexta · 8h–18h" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold text-navy">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
      />
    </div>
  );
}

function Detail({ Icon, t, d }: { Icon: React.ComponentType<{ className?: string }>; t: string; d: string }) {
  return (
    <div className="p-5 rounded-2xl bg-card border border-border flex gap-4 items-center">
      <div className="h-10 w-10 rounded-lg bg-navy text-cyan grid place-items-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-electric">{t}</div>
        <div className="text-navy font-semibold">{d}</div>
      </div>
    </div>
  );
}
