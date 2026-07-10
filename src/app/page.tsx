"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ────────── DATA ────────── */
const MENU_CATEGORIES = [
  { id: "crousty", label: "Crousty" },
  { id: "burgers", label: "Burgers" },
  { id: "wraps", label: "Wraps" },
  { id: "buckets", label: "Buckets" },
  { id: "salads", label: "Salades" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Boissons" },
];

const MENU_ITEMS = [
  {
    id: 1,
    name: "Riz Crousty XL",
    description: "Riz parfumé garni de tenders croustillants dorés, sauce signature & garniture fraîche",
    price: "18.900",
    category: "crousty",
    image: "/rice-bowl.png",
    badge: "⭐ BEST SELLER",
    spicy: false,
  },
  {
    id: 2,
    name: "Crousty Burger",
    description: "Pain brioché, tenders croustillants, cheddar fondant, salade, sauce secrète",
    price: "14.500",
    category: "burgers",
    image: "/burger.png",
    badge: "🔥 HOT",
    spicy: true,
  },
  {
    id: 3,
    name: "Wrap Crousty",
    description: "Tortilla fraîche roulée avec tenders, crudités, fromage & sauce ranch",
    price: "12.900",
    category: "wraps",
    image: "/wrap.png",
    badge: null,
    spicy: false,
  },
  {
    id: 4,
    name: "Bucket 12 Tenders",
    description: "12 tenders extra-croustillants avec 3 sauces au choix, idéal pour le partage",
    price: "29.900",
    category: "buckets",
    image: "/bucket-tenders.png",
    badge: "👑 KING SIZE",
    spicy: false,
  },
  {
    id: 5,
    name: "Salade Crousty",
    description: "Mix de salades fraîches, tenders croustillants, vinaigrette maison & croûtons",
    price: "13.500",
    category: "salads",
    image: "/salad.png",
    badge: "🥗 HEALTHY",
    spicy: false,
  },
  {
    id: 6,
    name: "Fondant Chocolat",
    description: "Fondant au chocolat noir coulant, boule de glace vanille & coulis",
    price: "9.900",
    category: "desserts",
    image: "/dessert.png",
    badge: "🍫 SWEET",
    spicy: false,
  },
  {
    id: 7,
    name: "Milkshake Crousty",
    description: "Milkshake onctueux au choix : vanille, chocolat, fraise ou Oreo",
    price: "8.500",
    category: "drinks",
    image: "/drinks.png",
    badge: null,
    spicy: false,
  },
  {
    id: 8,
    name: "Mega Crousty Burger",
    description: "Double tenders, double cheddar, bacon croustillant, sauce BBQ fumée",
    price: "19.900",
    category: "burgers",
    image: "/burger.png",
    badge: "💪 MEGA",
    spicy: true,
  },
];

const MARQUEE_ITEMS = [
  "🍗 TENDERS CROUSTILLANTS",
  "🔥 SAUCE SIGNATURE",
  "🍔 BURGERS LOADED",
  "🌯 WRAPS FRAIS",
  "🥗 SALADES FRAÎCHES",
  "🍫 DESSERTS GOURMANDS",
  "🥤 MILKSHAKES",
  "📍 DJERBA BOURGO MALL",
  "🇹🇳 LE 1ER CROUSTY DE TUNISIE",
  "👑 KING SIZE BUCKETS",
];

const REVIEWS = [
  {
    name: "Ahmed B.",
    text: "Meilleur chicken de Djerba ! Les tenders sont incroyablement croustillants. J'en rêve la nuit ! 🍗",
    rating: 5,
    avatar: "AB",
  },
  {
    name: "Fatma Z.",
    text: "Le Riz Crousty XL est une tuerie absolue. Portions généreuses et sauce parfaite ! 🔥",
    rating: 5,
    avatar: "FZ",
  },
  {
    name: "Mohamed K.",
    text: "On a pris le Bucket 12 tenders en famille, tout le monde a adoré. On reviendra c'est sûr ! 👑",
    rating: 5,
    avatar: "MK",
  },
  {
    name: "Sarah L.",
    text: "Le wrap crousty est devenu mon addiction. Frais, croustillant, parfait pour le midi ! 🌯",
    rating: 4,
    avatar: "SL",
  },
];

/* ────────── COMPONENTS ────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-street flex items-center justify-center text-xl font-bold font-display text-white hard-shadow group-hover:animate-shake transition-all">
                CS
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-yellow rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg text-white tracking-wider">
                CROUSTY
              </span>
              <span className="font-display text-lg text-primary ml-1 tracking-wider">
                STREET
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Menu", "À propos", "Avis", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("à propos", "about")}`}
                className="relative text-sm font-medium text-muted-foreground hover:text-white transition-colors group uppercase tracking-wider font-body"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://www.tiktok.com/@croustystreetdjer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-street text-white font-bold text-sm rounded-lg neon-pink-glow hover:scale-105 transition-all duration-300 uppercase tracking-wider font-display"
            >
              TikTok 🎵
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-card mx-4 mb-4 rounded-2xl p-6 space-y-4">
          {["Menu", "À propos", "Avis", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("à propos", "about")}`}
              onClick={() => setMobileOpen(false)}
              className="block text-lg font-display text-white hover:text-primary transition-colors uppercase"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.tiktok.com/@croustystreetdjer"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-3 bg-street text-white font-bold text-sm rounded-lg neon-pink-glow uppercase tracking-wider font-display"
          >
            TikTok 🎵
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[200px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${loaded ? "animate-slide-in-left" : "opacity-0"}`}>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <span className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
              <span className="text-sm font-tag text-neon-yellow tracking-wider">
                🥇 LE 1ER CROUSTY DE TUNISIE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[0.9] tracking-tight">
              <span className="block text-white text-stroke-lg">CROUSTY</span>
              <span className="block text-primary text-stroke-lg">STREET</span>
              <span className="block text-secondary text-stroke text-3xl sm:text-4xl md:text-5xl mt-2">
                DJERBA
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed font-body">
              Le chicken le plus croustillant de Tunisie est à{" "}
              <span className="text-neon-yellow font-bold">Djerba Bourgo Mall</span>.
              Tenders dorés, sauces signature, vibes de rue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="group relative px-8 py-4 bg-street rounded-xl text-white font-display text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 neon-pink-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Voir le Menu 🍗
                </span>
                <div className="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass-card rounded-xl text-white font-display text-lg uppercase tracking-wider hover:glass-card-hover hover:scale-105 transition-all duration-300"
              >
                Nous Trouver 📍
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "780+", label: "Followers" },
                { value: "4.9★", label: "Rating" },
                { value: "#1", label: "Crousty TN" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-display text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className={`relative ${loaded ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative z-10 animate-float">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-3xl blur-3xl" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30">
                  <Image
                    src="/hero-chicken.png"
                    alt="Crousty Street Tenders"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                {/* Floating price tag */}
                <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-primary rounded-2xl hard-shadow animate-pulse-glow">
                  <span className="font-display text-xl text-white">À partir de 8.500 DT</span>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 px-4 py-2 bg-neon-yellow text-background rounded-xl font-tag text-sm rotate-[-6deg] hard-shadow">
                  100% HALAL 🇹🇳
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/10 rounded-full animate-rotate-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-secondary/5 rounded-full animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-drift">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-body">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  return (
    <section className="relative py-4 overflow-hidden border-y border-border/50 bg-muted/30 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-lg sm:text-xl font-display text-white/80 hover:text-primary transition-colors duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function MenuSection() {
  const [active, setActive] = useState("crousty");
  const { ref, inView } = useInView();

  const filtered = MENU_ITEMS.filter((item) => item.category === active);

  return (
    <section id="menu" className="relative py-24 sm:py-32" ref={ref}>
      {/* Section bg glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? "animate-slide-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-tag text-neon-yellow mb-4">
            🍗 NOTRE CARTE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-stroke">
            <span className="text-white">LE </span>
            <span className="text-primary">MENU</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Du croustillant, du goût et des portions généreuses. Chaque plat est préparé
            avec amour et des ingrédients frais.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                active === cat.id
                  ? "bg-street text-white neon-pink-glow scale-105"
                  : "glass-card text-muted-foreground hover:text-white hover:border-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="group relative glass-card rounded-2xl overflow-hidden hover:glass-card-hover hover:scale-[1.02] transition-all duration-500 hover:neon-pink-glow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {item.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-lg text-xs font-tag text-white">
                    {item.badge}
                  </div>
                )}
                {item.spicy && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-sm animate-pulse">
                    🌶️
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-body">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl text-neon-yellow">
                    {item.price}
                    <span className="text-sm text-muted-foreground ml-1 font-body">DT</span>
                  </span>
                  <button className="px-4 py-2 bg-street rounded-lg text-white text-sm font-display uppercase tracking-wider hover:scale-110 hover:neon-pink-glow transition-all duration-300">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="à propos" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <div className={`relative ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50">
                  <Image src="/bucket-tenders.png" alt="Bucket Tenders" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50">
                  <Image src="/wrap.png" alt="Wrap Crousty" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="25vw" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50">
                  <Image src="/burger.png" alt="Crousty Burger" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="25vw" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50">
                  <Image src="/salad.png" alt="Salade Crousty" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="25vw" />
                </div>
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-primary rounded-2xl hard-shadow z-10 rotate-[-3deg]">
              <span className="font-display text-2xl text-white">STREET FOOD</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 ${inView ? "animate-slide-in-right" : "opacity-0"}`}>
            <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-tag text-neon-yellow">
              📍 NOTRE HISTOIRE
            </span>
            <h2 className="text-4xl sm:text-5xl font-display text-stroke">
              <span className="text-white">LE GOÛT </span>
              <span className="text-primary">DE LA RUE</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-body text-lg">
              <p>
                <span className="text-white font-bold">Crousty Street Djerba</span> — le premier concept
                Crousty de Tunisie 🇹🇳. Né de la passion pour le chicken croustillant parfait et la culture street food.
              </p>
              <p>
                Chaque tender est pané à la main, mariné pendant{" "}
                <span className="text-neon-yellow font-bold">24 heures</span>, et frit à la perfection dorée.
                Nos sauces sont faites maison, nos ingrédients sont frais du jour.
              </p>
              <p>
                Situé au cœur du <span className="text-secondary font-bold">Bourgo Mall à Djerba</span>,
                nous apportons l&apos;énergie de la rue dans chaque assiette.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🍗", title: "100% Frais", desc: "Ingrédients du jour" },
                { icon: "🔥", title: "Fait Maison", desc: "Sauces secrètes" },
                { icon: "⚡", title: "Service Rapide", desc: "Préparé à la minute" },
                { icon: "🇹🇳", title: "100% Halal", desc: "Certifié & garanti" },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="glass-card rounded-xl p-4 hover:glass-card-hover hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2 group-hover:animate-shake">{feat.icon}</div>
                  <h4 className="font-display text-sm text-white">{feat.title}</h4>
                  <p className="text-xs text-muted-foreground font-body mt-1">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="avis" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${inView ? "animate-slide-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-tag text-neon-yellow mb-4">
            ⭐ AVIS CLIENTS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-stroke">
            <span className="text-white">ILS </span>
            <span className="text-primary">ADORENT</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`glass-card rounded-2xl p-6 hover:glass-card-hover hover:scale-[1.03] transition-all duration-500 hover:neon-blue-glow ${
                inView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-neon-yellow text-lg">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, j) => (
                  <span key={j} className="text-muted-foreground/30 text-lg">★</span>
                ))}
              </div>
              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-street flex items-center justify-center text-white font-display text-sm">
                  {review.avatar}
                </div>
                <span className="text-sm font-bold text-white font-body">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={inView ? "animate-scale-in" : "opacity-0"}>
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-tag text-neon-yellow mb-6">
            🔥 OFFRE SPÉCIALE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display text-stroke-lg leading-[0.95]">
            <span className="text-white">VIENS </span>
            <span className="text-primary">GOÛTER</span>
            <br />
            <span className="text-neon-yellow">LE CROUSTY</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Première visite ? Profitez de{" "}
            <span className="text-neon-yellow font-bold">-10%</span> sur votre première
            commande en mentionnant notre site web !
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/croustystreet"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-street rounded-2xl text-white font-display text-xl uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <span className="relative z-10">📍 Nous Trouver</span>
            </a>
            <a
              href="https://www.tiktok.com/@croustystreetdjer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 glass-card rounded-2xl text-white font-display text-xl uppercase tracking-wider hover:glass-card-hover hover:scale-105 transition-all duration-300"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${inView ? "animate-slide-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-tag text-neon-yellow mb-4">
            📍 VENEZ NOUS VOIR
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-stroke">
            <span className="text-white">NOUS </span>
            <span className="text-primary">TROUVER</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className={`${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 h-80 lg:h-full min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.2!2d10.9685483!3d33.8174831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabd70f532452b%3A0xadc053ace391adf1!2sCrousty%20Street%20Djerba!5e0!3m2!1sfr!2stn!4v1720000000000!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crousty Street Djerba Location"
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-primary/20 rounded-2xl" />
            </div>
          </div>

          {/* Info Cards */}
          <div className={`space-y-6 ${inView ? "animate-slide-in-right" : "opacity-0"}`}>
            {[
              {
                icon: "📍",
                title: "ADRESSE",
                content: "Djerba Bourgo Mall\nDjerba, Tunisie",
                link: "https://maps.app.goo.gl/croustystreet",
                linkText: "Itinéraire →",
              },
              {
                icon: "🕐",
                title: "HORAIRES",
                content: "Lundi — Dimanche\n11h00 — 23h00",
                link: null,
                linkText: null,
              },
              {
                icon: "📱",
                title: "RÉSEAUX",
                content: "@croustystreetdjerba",
                link: "https://www.tiktok.com/@croustystreetdjer",
                linkText: "TikTok →",
              },
            ].map((info) => (
              <div
                key={info.title}
                className="glass-card rounded-2xl p-6 hover:glass-card-hover hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:animate-shake">{info.icon}</div>
                  <div>
                    <h3 className="font-display text-lg text-white mb-2">{info.title}</h3>
                    <p className="text-muted-foreground font-body whitespace-pre-line">
                      {info.content}
                    </p>
                    {info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-primary hover:text-neon-yellow transition-colors font-body font-bold"
                      >
                        {info.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-street flex items-center justify-center text-sm font-bold font-display text-white hard-shadow">
              CS
            </div>
            <div>
              <span className="font-display text-sm text-white">CROUSTY </span>
              <span className="font-display text-sm text-primary">STREET</span>
              <p className="text-xs text-muted-foreground font-body">Djerba Bourgo Mall</p>
            </div>
          </div>

          {/* Center text */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-body">
              🥇 Le 1er Crousty de Tunisie 🇹🇳
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-end gap-4">
            <a
              href="https://www.tiktok.com/@croustystreetdjer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              aria-label="TikTok"
            >
              🎵
            </a>
            <a
              href="https://www.instagram.com/croustystreetdjerba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              📸
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/50 font-body">
            © {new Date().getFullYear()} Crousty Street Djerba. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ────────── PAGE ────────── */

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
