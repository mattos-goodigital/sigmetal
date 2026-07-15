import { createFileRoute } from "@tanstack/react-router";
import bannerAsset from "@/assets/banner-site-sigmetal.jpg.asset.json";
import nr12_1 from "@/assets/nr12/nr12-1.jpeg.asset.json";
import nr12_2 from "@/assets/nr12/nr12-2.jpeg.asset.json";
import nr12_3 from "@/assets/nr12/nr12-3.jpeg.asset.json";
import nr12_4 from "@/assets/nr12/nr12-4.jpeg.asset.json";
import nr12_5 from "@/assets/nr12/nr12-5.jpeg.asset.json";
import nr12_6 from "@/assets/nr12/nr12-6.jpeg.asset.json";
import nr12_7 from "@/assets/nr12/nr12-7.jpeg.asset.json";
import nr12_8 from "@/assets/nr12/nr12-8.jpeg.asset.json";
import nr12_9 from "@/assets/nr12/nr12-9.jpeg.asset.json";
import nr12_10 from "@/assets/nr12/nr12-10.jpeg.asset.json";
import nr12_11 from "@/assets/nr12/nr12-11.jpeg.asset.json";
import nr12_12 from "@/assets/nr12/nr12-12.jpeg.asset.json";
import nr12_13 from "@/assets/nr12/nr12-13.jpeg.asset.json";
import nr12_14 from "@/assets/nr12/nr12-14.jpeg.asset.json";
import nr12_15 from "@/assets/nr12/nr12-15.jpeg.asset.json";
import nr12_16 from "@/assets/nr12/nr12-16.jpeg.asset.json";
import nr12_17 from "@/assets/nr12/nr12-17.jpeg.asset.json";
import nr12_18 from "@/assets/nr12/nr12-18.jpeg.asset.json";
import nr12_19 from "@/assets/nr12/nr12-19.jpeg.asset.json";
import nr12_20 from "@/assets/nr12/nr12-20.jpeg.asset.json";
import nr12_21 from "@/assets/nr12/nr12-21.jpeg.asset.json";
import nr12_22 from "@/assets/nr12/nr12-22.jpeg.asset.json";
import nr12_23 from "@/assets/nr12/nr12-23.jpeg.asset.json";
import nr12_24 from "@/assets/nr12/nr12-24.jpeg.asset.json";
import nr12_25 from "@/assets/nr12/nr12-25.jpeg.asset.json";
import nr12_26 from "@/assets/nr12/nr12-26.jpeg.asset.json";
import nr12_27 from "@/assets/nr12/nr12-27.jpeg.asset.json";
import nr12_28 from "@/assets/nr12/nr12-28.jpeg.asset.json";
import nr12_29 from "@/assets/nr12/nr12-29.jpeg.asset.json";
import nr12_30 from "@/assets/nr12/nr12-30.jpeg.asset.json";
import nr12_31 from "@/assets/nr12/nr12-31.jpeg.asset.json";
import nr12_32 from "@/assets/nr12/nr12-32.jpeg.asset.json";
import nr12_33 from "@/assets/nr12/nr12-33.jpeg.asset.json";
import nr12_34 from "@/assets/nr12/nr12-34.jpeg.asset.json";
import nr12_35 from "@/assets/nr12/nr12-35.jpeg.asset.json";
import nr12_36 from "@/assets/nr12/nr12-36.jpeg.asset.json";
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
  ChevronLeft,
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
    { label: "Serviços", id: "servicos" },
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
          src={bannerAsset.url}
          alt="Soldagem industrial Sigmetal"
          className="h-full w-full object-cover brightness-[1.15] contrast-110 saturate-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-zinc-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-zinc-950/30" />
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

/* ─── Logo Carousel ─── */
function LogoCarousel() {
  const logos = [
    { name: "MetalBras" },
    { name: "Indústrias Silva" },
    { name: "Construtora Horizonte" },
    { name: "Grupo Ferraz" },
    { name: "Engenharia Norte" },
    { name: "Aço & Cia" },
    { name: "Shopping Centro-Oeste" },
    { name: "Logística Pesada" },
    { name: "Portos do Brasil" },
    { name: "Mineração Atlas" },
    { name: "Indústria Alimentícia Prima" },
    { name: "Tecnometal" },
  ];

  const track = [...logos, ...logos];

  return (
    <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-carousel-scroll hover:[animation-play-state:paused]">
        {track.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="flex h-20 w-56 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 mx-3"
          >
            <span className="text-center text-base font-semibold text-zinc-300 tracking-tight">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Services (Quem Somos + Serviços) ─── */
function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Proteção de Máquinas (NR12)",
      desc: "Projeto e fabricação de proteções fixas e móveis para máquinas e equipamentos, em conformidade com a norma regulamentadora NR12.",
    },
    {
      icon: Factory,
      title: "Serralheria Industrial",
      desc: "Estruturas metálicas, guarda-corpos, escadas, plataformas, corrimãos e peças sob medida para o ambiente industrial.",
    },
  ];


  return (
    <section id="servicos" className="relative py-24 sm:py-32 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">Serviços</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Soluções Completas em Metal
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Atuamos em todas as etapas: do projeto ao acabamento final, entregando estruturas prontas
            para uso com garantia de qualidade e segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
const CATEGORIES = [
  { id: "nr12", label: "Proteção de Máquinas NR12" },
  { id: "industrial", label: "Serralheria Industrial" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const PORTFOLIO_ITEMS: { id: CategoryId; src: string; alt: string }[] = [
  // Proteção de Máquinas NR12
  { id: "nr12", src: nr12_1.url, alt: "Proteção de máquinas NR12 - projeto 1" },
  { id: "nr12", src: nr12_2.url, alt: "Proteção de máquinas NR12 - projeto 2" },
  { id: "nr12", src: nr12_3.url, alt: "Proteção de máquinas NR12 - projeto 3" },
  { id: "nr12", src: nr12_4.url, alt: "Proteção de máquinas NR12 - projeto 4" },
  { id: "nr12", src: nr12_5.url, alt: "Proteção de máquinas NR12 - projeto 5" },
  { id: "nr12", src: nr12_6.url, alt: "Proteção de máquinas NR12 - projeto 6" },
  { id: "nr12", src: nr12_7.url, alt: "Proteção de máquinas NR12 - projeto 7" },
  { id: "nr12", src: nr12_8.url, alt: "Proteção de máquinas NR12 - projeto 8" },
  { id: "nr12", src: nr12_9.url, alt: "Proteção de máquinas NR12 - projeto 9" },
  { id: "nr12", src: nr12_10.url, alt: "Proteção de máquinas NR12 - projeto 10" },
  { id: "nr12", src: nr12_11.url, alt: "Proteção de máquinas NR12 - projeto 11" },
  { id: "nr12", src: nr12_12.url, alt: "Proteção de máquinas NR12 - projeto 12" },
  { id: "nr12", src: nr12_13.url, alt: "Proteção de máquinas NR12 - projeto 13" },
  { id: "nr12", src: nr12_14.url, alt: "Proteção de máquinas NR12 - projeto 14" },
  { id: "nr12", src: nr12_15.url, alt: "Proteção de máquinas NR12 - projeto 15" },
  { id: "nr12", src: nr12_16.url, alt: "Proteção de máquinas NR12 - projeto 16" },
  { id: "nr12", src: nr12_17.url, alt: "Proteção de máquinas NR12 - projeto 17" },
  { id: "nr12", src: nr12_18.url, alt: "Proteção de máquinas NR12 - projeto 18" },
  { id: "nr12", src: nr12_19.url, alt: "Proteção de máquinas NR12 - projeto 19" },
  { id: "nr12", src: nr12_20.url, alt: "Proteção de máquinas NR12 - projeto 20" },
  { id: "nr12", src: nr12_21.url, alt: "Proteção de máquinas NR12 - projeto 21" },
  { id: "nr12", src: nr12_22.url, alt: "Proteção de máquinas NR12 - projeto 22" },
  { id: "nr12", src: nr12_23.url, alt: "Proteção de máquinas NR12 - projeto 23" },
  { id: "nr12", src: nr12_24.url, alt: "Proteção de máquinas NR12 - projeto 24" },
  { id: "nr12", src: nr12_25.url, alt: "Proteção de máquinas NR12 - projeto 25" },
  { id: "nr12", src: nr12_26.url, alt: "Proteção de máquinas NR12 - projeto 26" },
  { id: "nr12", src: nr12_27.url, alt: "Proteção de máquinas NR12 - projeto 27" },
  { id: "nr12", src: nr12_28.url, alt: "Proteção de máquinas NR12 - projeto 28" },
  { id: "nr12", src: nr12_29.url, alt: "Proteção de máquinas NR12 - projeto 29" },
  { id: "nr12", src: nr12_30.url, alt: "Proteção de máquinas NR12 - projeto 30" },
  { id: "nr12", src: nr12_31.url, alt: "Proteção de máquinas NR12 - projeto 31" },
  { id: "nr12", src: nr12_32.url, alt: "Proteção de máquinas NR12 - projeto 32" },
  { id: "nr12", src: nr12_33.url, alt: "Proteção de máquinas NR12 - projeto 33" },
  { id: "nr12", src: nr12_34.url, alt: "Proteção de máquinas NR12 - projeto 34" },
  { id: "nr12", src: nr12_35.url, alt: "Proteção de máquinas NR12 - projeto 35" },
  { id: "nr12", src: nr12_36.url, alt: "Proteção de máquinas NR12 - projeto 36" },
  // Serralheria Industrial
  { id: "industrial", src: bannerAsset.url, alt: "Serralheria industrial - projeto 1" },
  { id: "industrial", src: bannerAsset.url, alt: "Serralheria industrial - projeto 2" },
  { id: "industrial", src: bannerAsset.url, alt: "Serralheria industrial - projeto 3" },
  { id: "industrial", src: bannerAsset.url, alt: "Serralheria industrial - projeto 4" },
  { id: "industrial", src: bannerAsset.url, alt: "Serralheria industrial - projeto 5" },
  { id: "industrial", src: bannerAsset.url, alt: "Serralheria industrial - projeto 6" },
];

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("nr12");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => item.id === activeCategory);
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="projetos" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">Portfólio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Projetos Realizados
            </h2>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all border ${
                activeCategory === cat.id
                  ? "bg-red-500 border-red-500 text-zinc-950"
                  : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-red-500/40 hover:text-red-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-zinc-950">
                  Ampliar
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          currentIndex={lightboxIndex}
          total={filteredItems.length}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  item,
  currentIndex,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: { src: string; alt: string };
  currentIndex: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-md p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
        aria-label="Fechar lightbox"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors disabled:opacity-40"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors disabled:opacity-40"
        aria-label="Próxima foto"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        className="relative max-h-[85vh] max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[85vh] w-full object-contain rounded-xl"
        />
        <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-zinc-400">
          {currentIndex + 1} / {total}
        </div>
      </div>
    </div>
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
                { label: "Serviços", id: "servicos" },
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

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-500">
          <p className="text-center">
            © {new Date().getFullYear()} Sigmetal. Todos os direitos reservados. Desenvolvido por B2City, com precisão industrial.
          </p>
        </div>
      </div>
    </footer>
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
