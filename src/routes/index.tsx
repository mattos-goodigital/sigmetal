import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  ArrowRight,
  ArrowUpRight,
  Send,
  ArrowUp,
  CheckCircle2,
  Factory,
  Flame,
  Cog,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-[Inter,ui-sans-serif,system-ui]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhoWeAreSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

/* ─── Navbar (Light) ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Sobre", id: "sobre" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center bg-neutral-900">
              <Factory className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-neutral-900">
              SIGMETAL
            </span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="inline-flex items-center gap-2 bg-neutral-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-neutral-800 transition-colors"
            >
              Orçamento
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            className="md:hidden p-2 text-neutral-900"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left text-base font-semibold text-neutral-800 py-3 border-b border-neutral-100"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contato")}
              className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-neutral-900 px-5 py-3 text-sm font-bold text-white"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero (Light, split) ─── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-neutral-300 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-700">
              <Flame className="h-3.5 w-3.5" />
              Serralheria Industrial · Desde 2009
            </div>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-neutral-900">
              Precisão em<br />
              <span className="relative inline-block">
                <span className="relative z-10">cada solda,</span>
              </span>
              <br />
              força em cada
              <br />
              <span className="text-neutral-400">estrutura.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
              A Sigmetal projeta, fabrica e instala estruturas metálicas para indústrias, comércios e obras de grande porte, com padrão de engenharia e prazos rigorosos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-neutral-900 px-8 py-4 text-base font-bold text-white hover:bg-neutral-800 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-2 py-4 text-base font-bold text-neutral-900 border-b-2 border-neutral-900 hover:border-neutral-500 transition-colors"
              >
                Ver Projetos
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="/hero-serralheria.jpg"
                alt="Oficina industrial Sigmetal"
                className="h-full w-full object-cover grayscale-[20%]"
                loading="eager"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 text-white p-6 max-w-[220px]">
              <div className="text-4xl font-black">15+</div>
              <div className="mt-1 text-sm text-neutral-300">anos moldando aço com precisão</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-b border-neutral-200 divide-x divide-neutral-200">
          {[
            { v: "500+", l: "Projetos" },
            { v: "120+", l: "Clientes" },
            { v: "15", l: "Anos" },
            { v: "100%", l: "Compromisso" },
          ].map((s) => (
            <div key={s.l} className="py-8 px-4 text-center">
              <div className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About (Light) ─── */
function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              [ 01 ] Sobre
            </div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-black tracking-tight leading-tight text-neutral-900">
              Engenharia<br />em metal.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl lg:text-2xl text-neutral-800 leading-relaxed font-medium">
              Desde 2009, a Sigmetal se consolidou como referência em serralheria industrial. Atendemos indústrias, construtoras e shoppings, entregando estruturas metálicas que unem robustez, acabamento impecável e prazos cumpridos.
            </p>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Nosso processo integra projeto, corte a laser, dobra CNC, solda certificada e instalação. Cada peça passa por controle de qualidade rigoroso antes de sair da fábrica.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "Segurança", desc: "NRs cumpridas, EPIs completos e processos auditados." },
                { icon: Award, title: "Qualidade", desc: "Aço certificado e soldadores com qualificação AWS/ASME." },
                { icon: Clock, title: "Pontualidade", desc: "Cronogramas cumpridos com precisão de engenharia." },
                { icon: Zap, title: "Tecnologia", desc: "Corte a laser, plasma CNC e dobra automatizada." },
              ].map((v) => (
                <div key={v.title} className="flex gap-4">
                  <v.icon className="h-6 w-6 shrink-0 text-neutral-900 mt-1" strokeWidth={2} />
                  <div>
                    <div className="font-bold text-neutral-900">{v.title}</div>
                    <div className="mt-1 text-sm text-neutral-600 leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Quem Somos + Serviços (Dark block) ─── */
function WhoWeAreSection() {
  const services = [
    { icon: Cog, title: "Estruturas Metálicas", desc: "Galpões, mezaninos e coberturas com cálculo estrutural." },
    { icon: Flame, title: "Soldagem Industrial", desc: "MIG, MAG, TIG e eletrodo em aço, inox e alumínio." },
    { icon: Wrench, title: "Usinagem e Corte", desc: "Corte a laser, plasma CNC e dobra de precisão." },
    { icon: Factory, title: "Portões e Grades", desc: "Portões industriais, grades, corrimãos e peças sob medida." },
    { icon: Shield, title: "Manutenção Predial", desc: "Reparos, reforços e inspeção em estruturas existentes." },
    { icon: Users, title: "Projetos Customizados", desc: "Soluções exclusivas para demandas industriais específicas." },
  ];

  return (
    <section id="quem-somos" className="py-24 lg:py-32 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              [ 02 ] Quem Somos
            </div>
            <h2 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight leading-[0.95]">
              Uma equipe forjada<br />em experiência.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-neutral-400 leading-relaxed">
              Somos uma equipe de engenheiros, soldadores e técnicos com décadas de experiência acumulada. Cada projeto é tratado como se fosse o único — porque a reputação da Sigmetal está soldada em cada estrutura entregue.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-800">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative border-r border-b border-neutral-800 p-8 lg:p-10 hover:bg-neutral-900 transition-colors"
            >
              <s.icon className="h-8 w-8 text-white mb-6" strokeWidth={1.75} />
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-neutral-400 leading-relaxed">{s.desc}</p>
              <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-neutral-700 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects (Light — clean cards) ─── */
function ProjectsSection() {
  const projects = [
    { title: "Galpão Industrial 2.400m²", category: "Estrutura Metálica", location: "São Paulo, SP", year: "2024" },
    { title: "Mezanino Comercial", category: "Estrutura Interna", location: "Campinas, SP", year: "2024" },
    { title: "Portão Automatizado", category: "Portões Industriais", location: "Sorocaba, SP", year: "2023" },
    { title: "Cobertura Metálica Shopping", category: "Coberturas", location: "Ribeirão Preto, SP", year: "2023" },
    { title: "Estrutura de Passarela", category: "Infraestrutura", location: "São José dos Campos, SP", year: "2023" },
    { title: "Grades de Segurança", category: "Segurança Industrial", location: "Jundiaí, SP", year: "2022" },
  ];

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              [ 03 ] Portfólio
            </div>
            <h2 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight leading-[0.95] text-neutral-900">
              Projetos<br />realizados.
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-lg">
            Uma seleção de obras que demonstram nossa capacidade técnica e compromisso com o resultado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-white border border-neutral-200 hover:border-neutral-900 transition-colors overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src="/hero-serralheria.jpg"
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-500">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-3 text-xl font-black tracking-tight text-neutral-900">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                    <MapPin className="h-4 w-4" />
                    {p.location}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact (Dark block) ─── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-neutral-700 px-0 py-3.5 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none focus:ring-0 transition-colors";

  return (
    <section id="contato" className="py-24 lg:py-32 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              [ 04 ] Contato
            </div>
            <h2 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight leading-[0.95]">
              Vamos<br />construir<br />algo sólido.
            </h2>
            <p className="mt-8 text-lg text-neutral-400 leading-relaxed max-w-md">
              Envie sua demanda e nossa equipe retorna em até 24 horas com uma proposta técnica.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { icon: Phone, label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
                { icon: Mail, label: "E-mail", value: "contato@sigmetal.com.br", href: "mailto:contato@sigmetal.com.br" },
                { icon: MapPin, label: "Endereço", value: "Av. Industrial, 1500 — SP" },
                { icon: Clock, label: "Horário", value: "Seg–Sex 07h–18h · Sáb 08h–12h" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon className="h-5 w-5 text-white mt-0.5 shrink-0" strokeWidth={2} />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-base font-medium text-white hover:text-neutral-300 transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-base font-medium text-white">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center border border-neutral-800 p-12">
                <CheckCircle2 className="h-16 w-16 text-white mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-black tracking-tight">Mensagem enviada.</h3>
                <p className="mt-3 text-neutral-400">Retornaremos em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Nome</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Seu nome completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">E-mail</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="seu@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Telefone</label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="(00) 00000-0000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Descreva seu projeto ou dúvida..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-8 inline-flex items-center gap-3 bg-white px-8 py-4 text-base font-bold text-neutral-950 hover:bg-neutral-200 transition-colors disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <span className="h-5 w-5 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                      Enviando
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center bg-neutral-900">
              <Factory className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-extrabold tracking-tight">SIGMETAL</span>
          </div>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Sigmetal · Serralheria Industrial · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp Float ─── */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 shadow-xl shadow-neutral-900/20 hover:bg-[#20b858] transition-colors font-bold text-sm"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
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
      className={`fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center bg-neutral-900 text-white shadow-lg hover:bg-neutral-800 transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
