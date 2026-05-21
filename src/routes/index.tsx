import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  HardHat,
  Ruler,
  ShieldCheck,
  Hammer,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Building2,
    title: "Projetos Estruturais",
    desc: "Projetos completos de estruturas em concreto armado, aço e madeira com tecnologia BIM.",
  },
  {
    icon: HardHat,
    title: "Gerenciamento de Obras",
    desc: "Coordenação, planejamento e fiscalização de obras civis com excelência técnica.",
  },
  {
    icon: Ruler,
    title: "Consultoria Técnica",
    desc: "Laudos, pareceres e consultoria especializada em engenharia civil e estrutural.",
  },
  {
    icon: ShieldCheck,
    title: "Reforço Estrutural",
    desc: "Recuperação, reforço e revitalização de estruturas com soluções duráveis.",
  },
  {
    icon: Hammer,
    title: "Construção e Reformas",
    desc: "Execução de obras residenciais, comerciais e industriais com qualidade comprovada.",
  },
  {
    icon: CheckCircle2,
    title: "Regularização",
    desc: "Aprovação de projetos, alvarás e regularização junto aos órgãos públicos.",
  },
];

const stats = [
  { num: "+150", label: "Projetos entregues" },
  { num: "+15", label: "Anos de experiência" },
  { num: "100%", label: "Clientes satisfeitos" },
  { num: "+50", label: "Profissionais" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="RR Engenharia" className="h-12 w-auto" />
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {[
              ["Início", "#home"],
              ["Sobre", "#sobre"],
              ["Serviços", "#servicos"],
              ["Projetos", "#projetos"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-95 md:inline-flex"
          >
            Orçamento
          </a>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <ul className="flex flex-col gap-1 p-4">
              {[
                ["Início", "#home"],
                ["Sobre", "#sobre"],
                ["Serviços", "#servicos"],
                ["Projetos", "#projetos"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Engenharia Civil & Estrutural
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Construindo o futuro com{" "}
              <span className="text-primary">precisão</span> e{" "}
              <span className="text-primary">qualidade</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-secondary-foreground/80">
              A RR Engenharia entrega projetos estruturais, obras e consultoria
              técnica com excelência, segurança e compromisso com prazos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-95"
              >
                Solicitar orçamento <ArrowRight size={18} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-md border border-secondary-foreground/30 px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
              >
                Nossos serviços
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-secondary md:text-4xl">
                {s.num}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre nós
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Soluções em engenharia que transformam ideias em estruturas
              sólidas.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Com mais de 15 anos de mercado, a RR Engenharia é referência em
              projetos e execução de obras civis. Nossa equipe multidisciplinar
              combina experiência técnica, inovação e compromisso com cada
              cliente.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Equipe técnica especializada e certificada",
                "Tecnologia BIM e softwares de cálculo avançados",
                "Compromisso com prazos, qualidade e segurança",
                "Atendimento personalizado em cada projeto",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
              <img
                src={hero}
                alt="Equipe RR Engenharia"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 shadow-xl">
              <div className="text-3xl font-bold text-primary-foreground">15+</div>
              <div className="text-sm font-medium text-primary-foreground/80">
                Anos de excelência
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nossos serviços
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Soluções completas em engenharia
            </h2>
            <p className="mt-4 text-muted-foreground">
              Atendemos clientes residenciais, comerciais e industriais com
              soluções sob medida.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-secondary transition group-hover:bg-primary">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="projetos" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Pronto para iniciar seu próximo projeto?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/80">
            Entre em contato e receba um orçamento personalizado para o seu
            projeto de engenharia.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:brightness-95"
          >
            Fale com um especialista <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contato
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nossa equipe está pronta para atender você. Solicite seu orçamento
              ou tire suas dúvidas.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { Icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
                { Icon: Mail, label: "E-mail", value: "contato@rrengenharia.com.br" },
                { Icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 — São Paulo, SP" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Nome</label>
                <input
                  required
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">E-mail</label>
                  <input
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Telefone</label>
                  <input
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Mensagem</label>
                <textarea
                  rows={5}
                  required
                  className="mt-1.5 w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:bg-secondary/90"
              >
                Enviar mensagem <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sidebar-border bg-sidebar text-sidebar-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RR Engenharia" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm text-sidebar-foreground/70">
            © {new Date().getFullYear()} RR Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
