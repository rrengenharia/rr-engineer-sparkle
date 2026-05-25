import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Brush,
  Droplets,
  Hammer,
  LayoutGrid,
  TreePine,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  CalendarClock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import fachadaImg from "@/assets/fachada.jpg";
import pinturaImg from "@/assets/pintura-predial.jpg";
import impermeabilizacaoImg from "@/assets/impermeabilizacao.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "5571984289200";
const WHATSAPP_DISPLAY = "(71) 9 8428-9200";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const nav = [
  ["Início", "#home"],
  ["Serviços", "#servicos"],
  ["Portfólio", "#portfolio"],
  ["Diferenciais", "#diferenciais"],
  ["Contato", "#contato"],
] as const;

const services = [
  { icon: Droplets, title: "Impermeabilização", desc: "Tratamento de infiltrações, umidade e impermeabilização de lajes e estruturas." },
  { icon: Building2, title: "Recuperação de Fachada", desc: "Restauração predial, tratamento de fissuras, pastilhas e pintura externa de condomínios." },
  { icon: Brush, title: "Pintura Residencial e Predial", desc: "Pintura de alto padrão, texturas, grafiato e acabamentos finos internos e externos." },
  { icon: Hammer, title: "Alvenaria e Reformas", desc: "Construção de paredes e modificação de layouts residenciais e comerciais." },
  { icon: LayoutGrid, title: "Revestimento e Acabamento", desc: "Assentamento técnico de porcelanatos, pisos, cerâmicas e acabamentos de alto padrão." },
  { icon: TreePine, title: "Carpintaria Fina", desc: "Instalação de portas, janelas, painéis, decks e estruturas de madeira." },
];

const differentials = [
  { icon: ShieldCheck, title: "Garantia em Contrato", desc: "Todo serviço formalizado com garantia escrita." },
  { icon: ClipboardCheck, title: "Supervisão Técnica", desc: "Engenheiro responsável em cada etapa da obra." },
  { icon: Sparkles, title: "Limpeza Pós-Obra", desc: "Entregamos o ambiente pronto para uso." },
  { icon: CalendarClock, title: "Cumprimento de Prazos", desc: "Cronograma claro e prazo respeitado." },
];

const categories = ["Todos", "Fachada", "Pintura", "Impermeabilização"] as const;

const portfolio = [
  { cat: "Fachada", title: "Fachada", image: fachadaImg },
  { cat: "Pintura", title: "Pintura", image: pinturaImg },
  { cat: "Impermeabilização", title: "Impermeabilização", image: impermeabilizacaoImg },
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <div className={`flex h-10 w-10 items-center justify-center rounded-md font-extrabold text-sm tracking-tighter ${inverted ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
        RR
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight">RR ENGENHARIA</span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${inverted ? "text-sidebar-foreground/60" : "text-muted-foreground"}`}>
          Engenharia & Reformas
        </span>
      </div>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>("Todos");
  const filtered = activeCat === "Todos" ? portfolio : portfolio.filter((p) => p.cat === activeCat);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Logo />
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Olá! Gostaria de solicitar um orçamento com a RR Engenharia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-95 lg:inline-flex"
          >
            Solicitar Orçamento <ArrowRight size={16} />
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <ul className="flex flex-col gap-1 p-4">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)} className="block rounded px-3 py-2.5 text-sm font-medium hover:bg-muted">
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={waLink("Olá! Gostaria de solicitar um orçamento com a RR Engenharia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground"
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Engenharia & Reformas em Salvador
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              RR Engenharia — Soluções em <span className="text-primary">engenharia, reformas</span> e manutenção predial.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Executamos sua obra residencial ou comercial com precisão técnica, cumprimento rigoroso de prazos e acabamento de alto padrão.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Olá! Gostaria de falar com a RR Engenharia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
              >
                <MessageCircle size={18} /> Fale Conosco
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 font-semibold text-foreground transition hover:border-foreground/40">
                Portfólio
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["Garantia em contrato", "Engenheiro responsável", "Orçamento sem compromisso"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-xl">
              <img src={fachadaImg} alt="Obra RR Engenharia" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/95 p-4 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">Projeto em destaque</div>
                <div className="mt-1 text-sm font-semibold text-foreground">Restauração de fachada — Salvador / BA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Nossos Serviços</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Soluções completas em engenharia e reformas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Atendemos obras residenciais, comerciais e prediais com técnica, segurança e acabamento impecável.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section id="diferenciais" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Diferenciais</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Por que escolher a RR Engenharia
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <d.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{d.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Portfólio</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Antes e depois dos nossos projetos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Veja a transformação que entregamos em cada obra — do diagnóstico ao acabamento.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                    activeCat === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg">
                <div className="grid grid-cols-2 gap-px bg-border">
                  <div className="relative">
                    <img src={p.before} alt="" className="aspect-[4/3] w-full object-cover" />
                    <span className="absolute left-2 top-2 rounded bg-background/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Antes
                    </span>
                  </div>
                  <div className="relative">
                    <img src={p.after} alt="" className="aspect-[4/3] w-full object-cover" />
                    <span className="absolute left-2 top-2 rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                      Depois
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">{p.cat}</div>
                  <h3 className="mt-1.5 text-sm font-semibold text-foreground">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 md:flex-row">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Pronto para iniciar seu próximo projeto?
            </h2>
            <p className="mt-2 text-primary-foreground/70">
              Receba um orçamento personalizado pelo WhatsApp — atendimento rápido e sem compromisso.
            </p>
          </div>
          <a
            href={waLink("Olá! Gostaria de solicitar um orçamento com a RR Engenharia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
          >
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contato</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nossa equipe está pronta para atender você. Solicite seu orçamento ou tire suas dúvidas pelos canais abaixo.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={waLink("Olá! Gostaria de solicitar um orçamento com a RR Engenharia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-whatsapp"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-whatsapp text-whatsapp-foreground">
                  <MessageCircle size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="text-base font-bold text-foreground">{WHATSAPP_DISPLAY}</div>
                </div>
                <ArrowRight size={18} className="text-muted-foreground" />
              </a>

              {[
                { Icon: Phone, label: "Telefone", value: WHATSAPP_DISPLAY },
                { Icon: Mail, label: "E-mail", value: "contato@rrengenharia.com.br" },
                { Icon: MapPin, label: "Atendimento", value: "Salvador / BA e Região Metropolitana" },
                { Icon: Clock, label: "Horário", value: "Seg a Sex, 8h às 18h • Sáb, 8h às 12h" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 px-1">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Olá! Sou ${fd.get("nome")}.\n\n${fd.get("mensagem")}\n\nContato: ${fd.get("email")} • ${fd.get("telefone")}`;
              window.open(waLink(msg), "_blank");
            }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-foreground">Solicite seu orçamento</h3>
            <p className="mt-1 text-sm text-muted-foreground">Preencha os dados e enviaremos pelo WhatsApp.</p>
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Nome</label>
                <input name="nome" required className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Seu nome completo" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">E-mail</label>
                  <input name="email" type="email" required className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Telefone</label>
                  <input name="telefone" required className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="(71) 9 9999-9999" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea name="mensagem" rows={5} required className="mt-1.5 w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Conte-nos sobre seu projeto..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:brightness-95">
                Enviar pelo WhatsApp <MessageCircle size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sidebar-border bg-sidebar text-sidebar-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo inverted />
              <p className="mt-4 max-w-sm text-sm text-sidebar-foreground/70">
                Obras residenciais, comerciais e prediais com precisão técnica e acabamento de alto padrão.
              </p>
              <div className="mt-5 flex gap-3">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-md border border-sidebar-border text-sidebar-foreground/80 transition hover:border-accent hover:text-accent" aria-label="Rede social">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider">Contato</h4>
              <ul className="mt-5 space-y-3 text-sm text-sidebar-foreground/80">
                <li className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-accent" />
                  <a href={waLink("Olá! Gostaria de falar com a RR Engenharia.")} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent">
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" /> <span>contato@rrengenharia.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent" /> Salvador / BA
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider">Horário de Atendimento</h4>
              <ul className="mt-5 space-y-2 text-sm text-sidebar-foreground/80">
                <li className="flex items-center gap-3"><Clock size={16} className="text-accent" /> Seg a Sex: 8h às 18h</li>
                <li className="flex items-center gap-3"><Clock size={16} className="text-accent" /> Sábado: 8h às 12h</li>
                <li className="flex items-center gap-3"><Clock size={16} className="text-accent" /> Domingo: Fechado</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-sidebar-border pt-6 text-center text-xs text-sidebar-foreground/60">
            © 2026 RR ENGENHARIA. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={waLink("Olá! Gostaria de solicitar um orçamento com a RR Engenharia.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
