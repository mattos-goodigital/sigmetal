import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Wrench,
  ChevronRight,
  Send,
  ArrowUp,
  CheckCircle2,
  Factory,
  Flame,
  Cog,
  HardHat,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ─── Theme constants (industrial dark) ─── */
const THEME = {
  bg: "bg-zinc-950",
  bgAlt: "bg-zinc-900",
  text: "text-zinc-100",
  textMuted: "text-zinc-400",
  accent: "text-red-500",
  accentBg: "bg-red-500",
  accentHover: "hover:bg-red-600",
  border: "border-zinc-800",
  card: "bg-zinc-900/60",
};

/* ─── Landing Page ─── */
function LandingPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Sobre", id: "sobre" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <Factory className="h-7 w-7 text-red-500 group-hover:text-red-400 transition-colors" />
            <span className="text-xl font-bold tracking-tight">
              SIG<span className="text-red-500">METAL</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-zinc-300 hover:text-red-500 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-red-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Orçamento
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-zinc-300"
            onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left text-base font-medium text-zinc-300 hover:text-red-500 py-2"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-red-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-serralheria.jpg"
          alt="Oficina industrial Sigmetal"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-6">
          <Flame className="h-4 w-4" />
          Serralheria Industrial de Precisão
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Forjando <span className="text-red-500">Estruturas</span>
          <br />
          que Constroem o Futuro
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Há mais de 15 anos, a Sigmetal transforma metal em soluções robustas para
          indústrias, comércios e grandes obras. Qualidade, prazo e segurança em cada solda.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-4 text-base font-bold text-zinc-950 hover:bg-red-400 transition-all hover:scale-[1.02] shadow-lg shadow-red-500/20"
          >
            <Phone className="h-5 w-5" />
            Solicitar Orçamento
          </a>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-8 py-4 text-base font-semibold text-zinc-100 hover:bg-zinc-800 transition-all"
          >
            Ver Projetos
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const stats = [
    { value: "15+", label: "Anos de Experiência" },
    { value: "500+", label: "Projetos Entregues" },
    { value: "120+", label: "Clientes Atendidos" },
    { value: "100%", label: "Compromisso com Prazos" },
  ];

  return (
    <div className="relative z-20 -mt-16 mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
        {stats.map((s) => (
          <div key={s.label} className="bg-zinc-900/90 backdrop-blur-sm px-6 py-8 text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500">{s.value}</div>
            <div className="mt-2 text-sm text-zinc-400 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── About ─── */
function AboutSection() {
  const values = [
    { icon: Shield, title: "Segurança", desc: "Padronização rigorosa de processos com foco total na segurança do trabalho e do cliente." },
    { icon: Award, title: "Qualidade", desc: "Materiais certificados, soldadores qualificados e inspeção em todas as etapas." },
    { icon: Clock, title: "Pontualidade", desc: "Compromisso absoluto com prazos e cronogramas, sem surpresas na entrega." },
    { icon: Zap, title: "Inovação", desc: "Tecnologia moderna de corte, dobra e usinagem para resultados superiores." },
  ];

  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">Sobre a Sigmetal</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Referência em Serralheria Industrial
            </h2>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Desde 2009, a Sigmetal se consolida como uma das principais serralherias industriais da região,
              atendendo desde pequenas reformas até grandes projetos estruturais para indústrias e shoppings.
            </p>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
              Nosso diferencial está na união de mão de obra especializada, equipamentos de última geração e
              um atendimento personalizado que entende as necessidades reais de cada cliente.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-red-500/40 transition-colors"
                >
                  <v.icon className="h-6 w-6 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-zinc-100">{v.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src="/hero-serralheria.jpg"
                alt="Trabalho industrial Sigmetal"
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Empresas que confiam na Sigmetal */}
        <div className="mt-24 sm:mt-32">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight">
            Empresas que confiam na Sigmetal
          </h2>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}

/* ─── Services (Quem Somos + Serviços) ─── */
function ServicesSection() {
  const services = [
    {
      icon: Cog,
      title: "Estruturas Metálicas",
      desc: "Projetos de galpões, mezaninos, coberturas e estruturas sob medida com cálculo estrutural.",
    },
    {
      icon: Flame,
      title: "Soldagem Industrial",
      desc: "MIG, MAG, TIG e eletrodo revestido em aço carbono, inox e alumínio com soldadores certificados.",
    },
    {
      icon: Wrench,
      title: "Usinagem e Corte",
      desc: "Corte a laser, plasma, dobra CNC e usinagem de precisão para peças complexas.",
    },
    {
      icon: Factory,
      title: "Portões e Grades",
      desc: "Portões industriais, residenciais, grades de segurança, corrimãos e peças decorativas em metal.",
    },
    {
      icon: Shield,
      title: "Manutenção Predial",
      desc: "Reparos, reforços estruturais e manutenção preventiva em estruturas metálicas existentes.",
    },
    {
      icon: Users,
      title: "Projetos Customizados",
      desc: "Desenvolvimento de soluções exclusivas para demandas específicas de indústrias e empresas.",
    },
  ];

  return (
    <section id="quem-somos" className="relative py-24 sm:py-32 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">Quem Somos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Soluções Completas em Metal
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Atuamos em todas as etapas: do projeto ao acabamento final, entregando estruturas prontas
            para uso com garantia de qualidade e segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 hover:border-red-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 mb-5 group-hover:bg-red-500 group-hover:text-zinc-950 transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">{s.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function ProjectsSection() {
  const projects = [
    { title: "Galpão Industrial 2.400m²", category: "Estrutura Metálica", location: "São Paulo, SP" },
    { title: "Mezanino Comercial", category: "Estrutura Interna", location: "Campinas, SP" },
    { title: "Portão Industrial Automatizado", category: "Portões e Acessórios", location: "Sorocaba, SP" },
    { title: "Cobertura Metálica Shopping", category: "Coberturas", location: "Ribeirão Preto, SP" },
    { title: "Estrutura de Elevado", category: "Infraestrutura", location: "São José dos Campos, SP" },
    { title: "Grade de Segurança Industrial", category: "Segurança", location: "Jundiaí, SP" },
  ];

  return (
    <section id="projetos" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">Portfólio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Projetos Realizados
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md">
            Uma seleção de obras que demonstram nossa capacidade de entregar desde estruturas simples
            até complexas soluções industriais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
                <img
                  src="/hero-serralheria.jpg"
                  alt={p.title}
                  className="h-full w-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block w-fit rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 text-xs font-medium text-red-400 mb-3">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-zinc-100">{p.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-zinc-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors";

  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">Contato</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Fale com a Sigmetal
            </h2>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
              Entre em contato para orçamentos, dúvidas ou visita técnica. Nossa equipe retorna em até 24 horas.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-100">Telefone</div>
                  <a href="tel:+5511999999999" className="text-zinc-400 hover:text-red-500 transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-100">E-mail</div>
                  <a href="mailto:contato@sigmetal.com.br" className="text-zinc-400 hover:text-red-500 transition-colors">
                    contato@sigmetal.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-100">Endereço</div>
                  <p className="text-zinc-400">Av. Industrial, 1500 — Distrito Industrial</p>
                  <p className="text-zinc-400">São Paulo, SP — CEP 00000-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-100">Horário</div>
                  <p className="text-zinc-400">Seg — Sex: 07:00 às 18:00</p>
                  <p className="text-zinc-400">Sáb: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-zinc-100">Mensagem Enviada!</h3>
                  <p className="mt-2 text-zinc-400">Agradecemos o contato. Retornaremos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-1.5">Nome</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Seu nome"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-1.5">E-mail</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="seu@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="(00) 00000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5">Mensagem</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Descreva seu projeto ou dúvida..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-base font-bold text-zinc-950 hover:bg-red-400 transition-colors disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <span className="h-5 w-5 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Factory className="h-6 w-6 text-red-500" />
              <span className="text-lg font-bold">
                SIG<span className="text-red-500">METAL</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Serralheria industrial com foco em qualidade, segurança e pontualidade. Transformando metal em soluções desde 2009.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre", id: "sobre" },
                { label: "Quem Somos", id: "quem-somos" },
                { label: "Projetos", id: "projetos" },
                { label: "Contato", id: "contato" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["Estruturas Metálicas", "Soldagem Industrial", "Usinagem e Corte", "Portões e Grades", "Manutenção Predial"].map(
                (s) => (
                  <li key={s}>
                    <span className="text-sm text-zinc-400">{s}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>(11) 99999-9999</li>
              <li>contato@sigmetal.com.br</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Sigmetal. Todos os direitos reservados.</p>
          <p>Desenvolvido com precisão industrial.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp Float Button ─── */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-900/30 hover:bg-green-500 hover:scale-110 transition-all"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ─── Back to Top ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 shadow-lg hover:bg-zinc-800 transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
