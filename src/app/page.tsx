"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ────────── DATA ────────── */
const MENU_CATEGORIES = [
  { id: "all", label: "Tout Voir" },
  { id: "crousty", label: "Crousty" },
  { id: "burgers", label: "Burgers" },
  { id: "wraps", label: "Wraps" },
  { id: "buckets", label: "Buckets" },
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
    badge: "Signature",
  },
  {
    id: 2,
    name: "Crousty Burger Premium",
    description: "Pain brioché toasté, tenders croustillants, cheddar mûri fondant, salade croquante, sauce maison",
    price: "14.500",
    category: "burgers",
    image: "/burger.png",
    badge: "Le Classique",
  },
  {
    id: 3,
    name: "Wrap Crousty Signature",
    description: "Tortilla de blé fine garnie de tenders croustillants, légumes frais, fromage fondu & sauce ranch",
    price: "12.900",
    category: "wraps",
    image: "/wrap.png",
    badge: "Populaire",
  },
  {
    id: 4,
    name: "Bucket Royal Tenders",
    description: "12 pièces de filets de poulet extra-croustillants marinés 24h, servis avec 3 sauces raffinées",
    price: "29.900",
    category: "buckets",
    image: "/bucket-tenders.png",
    badge: "Partage",
  },
  {
    id: 5,
    name: "Salade Crousty César",
    description: "Cœur de romaine, aiguillettes croustillantes dorées, parmesan affiné, sauce césar crémeuse",
    price: "13.500",
    category: "crousty",
    image: "/salad.png",
    badge: "Léger",
  },
  {
    id: 6,
    name: "L'Irrésistible Fondant",
    description: "Cœur coulant chocolat noir intense, glace vanille artisanale de Djerba",
    price: "9.900",
    category: "crousty",
    image: "/dessert.png",
    badge: "Douceur",
  },
];

const SEQUENCE_STEPS = [
  {
    frame: 1,
    title: "1. L'Art des Ingrédients",
    description: "Tous nos ingrédients sont sélectionnés individuellement pour leur fraîcheur absolue. Laitue croquante, cheddar fondant, tenders dorés panés à la main.",
  },
  {
    frame: 2,
    title: "2. L'Assemblage Précis",
    description: "Chaque étage est minutieusement ordonné pour garantir un équilibre parfait de textures et de saveurs à chaque bouchée.",
  },
  {
    frame: 3,
    title: "3. Le Chef-d'Œuvre Assemblé",
    description: "Une œuvre d'art gastronomique street-food, haute en couleurs, prête à être dégustée.",
  },
  {
    frame: 4,
    title: "4. L'Écrin Crousty",
    description: "Pour préserver son croustillant légendaire et sa chaleur, le burger est délicatement déposé dans son emballage kraft naturel premium.",
  },
  {
    frame: 5,
    title: "5. Préservation des Saveurs",
    description: "Le coffret est scellé pour s'assurer que l'expérience gustative reste intacte jusqu'à l'ouverture.",
  },
  {
    frame: 6,
    title: "6. Prêt pour l'Expérience",
    description: "Votre commande est prête. Fraîche, chaude et d'un croustillant incomparable. Le goût de la perfection.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter items
  const filteredItems = activeCategory === "all" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Monitor scroll for the interactive sequence
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate how far we've scrolled inside the container
      // Container height includes scrollable length (300vh)
      const totalScrollable = container.clientHeight - viewHeight;
      const scrolledPast = -rect.top;
      
      let progress = scrolledPast / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Frame calculation based on scroll progress (1 to 6)
  const currentFrame = Math.min(6, Math.max(1, Math.floor(scrollProgress * 6) + 1));

  return (
    <main className="bg-black text-white relative min-h-screen">
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl tracking-widest uppercase font-bold text-gradient-street">
              Crousty Street
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">L'Expérience</a>
            <a href="#menu" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">La Carte</a>
            <a href="#about" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Notre Histoire</a>
            <a href="#contact" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Nous Trouver</a>
          </nav>
          <div>
            <a
              href="https://www.tiktok.com/@croustystreetdjer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Suivre 🎵
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C49A6C]">
            Le 1er Crousty de Tunisie
          </span>
          <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tight leading-none">
            La Révolution <br />
            <span className="font-semibold italic text-[#C49A6C]">Croustillante</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Une fusion gastronomique entre l'authenticité de Djerba et l'art de la street-food moderne. Découvrez le processus en faisant défiler l'écran.
          </p>
          <div className="flex justify-center pt-8">
            <a
              href="#experience"
              className="flex flex-col items-center gap-3 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
            >
              <span>Défiler pour Découvrir</span>
              <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#C49A6C] animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SCROLL EXPERIENCE SECTION */}
      <section id="experience" ref={scrollContainerRef} className="relative h-[400vh] bg-black">
        {/* Sticky viewport wrapper */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/20 to-black pointer-events-none" />

          {/* Visual Container */}
          <div className="relative w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Column: Interactive Frames */}
            <div className="relative aspect-square w-full max-w-md mx-auto order-1 lg:order-none flex items-center justify-center">
              {/* Radial glow background */}
              <div className="absolute w-[120%] h-[120%] bg-[#C49A6C]/5 rounded-full blur-3xl" />
              
              {/* Image Sequence Frames with absolute positioning */}
              {[1, 2, 3, 4, 5, 6].map((frameNum) => (
                <div
                  key={frameNum}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentFrame === frameNum ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Image
                    src={`/seq-${frameNum}.png`}
                    alt={`Burger transition step ${frameNum}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Right Column: Explaining text */}
            <div className="space-y-8 relative z-10 flex flex-col justify-center h-full min-h-[300px]">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C49A6C] font-semibold">
                  Processus de Préparation
                </span>
                
                {/* Active step description */}
                <div className="min-h-[220px] flex flex-col justify-center">
                  {SEQUENCE_STEPS.map((step) => (
                    <div
                      key={step.frame}
                      className={`transition-all duration-500 ease-in-out ${
                        currentFrame === step.frame
                          ? "opacity-100 translate-y-0 relative block"
                          : "opacity-0 translate-y-4 absolute hidden pointer-events-none"
                      }`}
                    >
                      <h3 className="text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/40 uppercase tracking-widest">
                  <span>Préparation</span>
                  <span>{currentFrame} / 6</span>
                </div>
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#C49A6C] transition-all duration-300"
                    style={{ width: `${(currentFrame / 6) * 100}%` }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE MENU SECTION */}
      <section id="menu" className="relative py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C49A6C] font-semibold">Notre Collection</span>
            <h2 className="text-4xl md:text-6xl font-display uppercase">La Carte Exclusive</h2>
            <div className="w-12 h-[1px] bg-[#C49A6C] mx-auto mt-6" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#C49A6C] text-black font-semibold"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-zinc-950/40 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#C49A6C] border border-[#C49A6C]/20">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-[#C49A6C] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-2xl font-bold font-display text-[#C49A6C]">
                      {item.price} <span className="text-xs text-white/40">DT</span>
                    </span>
                    <button className="px-5 py-2 bg-white text-black hover:bg-[#C49A6C] transition-all duration-300 text-xs uppercase tracking-widest font-semibold rounded-full">
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section id="about" className="py-32 bg-zinc-950/40 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C49A6C] font-semibold">Le Secret de la Recette</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight">
                Une Qualité <br />
                Sans Compromis
              </h2>
              <div className="w-12 h-[1px] bg-[#C49A6C]" />
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Le Crousty original de Tunisie trouve ses racines au cœur de Djerba Bourgo Mall. Nous croyons que la street-food mérite le plus haut niveau de savoir-faire culinaire.
              </p>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Nos filets de poulet sont marinés pendant 24 heures entières dans un mélange secret d'épices douces et d'aromates locaux, puis panés manuellement à la commande pour préserver une légèreté croustillante unique.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/burger.png" alt="Detail crousty burger" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/wrap.png" alt="Detail crousty wrap" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/rice-bowl.png" alt="Detail crousty rice" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/bucket-tenders.png" alt="Detail crousty bucket" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & MAP SECTION */}
      <section id="contact" className="py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C49A6C] font-semibold">Prendre Place</span>
              <h2 className="text-4xl md:text-5xl font-display uppercase">Djerba Bourgo Mall</h2>
              
              <div className="space-y-6 pt-6">
                <div className="flex gap-4">
                  <span className="text-[#C49A6C]">📍</span>
                  <div>
                    <h4 className="font-semibold text-white">Adresse</h4>
                    <p className="text-white/60 font-light mt-1">Djerba Bourgo Mall, Houmt Souk 4180, Tunisie</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-[#C49A6C]">🕐</span>
                  <div>
                    <h4 className="font-semibold text-white">Horaires de Service</h4>
                    <p className="text-white/60 font-light mt-1">Lundi au Dimanche — 11:00 à 23:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-[#C49A6C]">📞</span>
                  <div>
                    <h4 className="font-semibold text-white">Contact Direct</h4>
                    <a href="tel:+21675000000" className="text-white/60 font-light hover:text-[#C49A6C] transition-colors mt-1 block">+216 -- --- ---</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.2!2d10.9685483!3d33.8174831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabd70f532452b%3A0xadc053ace391adf1!2sCrousty%20Street%20Djerba!5e0!3m2!1sfr!2stn!4v1720000000000!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crousty Street Djerba Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-zinc-950/60 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <span className="font-display text-xl uppercase tracking-widest text-[#C49A6C] font-bold">Crousty Street</span>
            <p className="text-xs text-white/40 font-light">Le 1er Crousty de Tunisie © {new Date().getFullYear()} Djerba Bourgo Mall.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.tiktok.com/@croustystreetdjer" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C49A6C] text-xs uppercase tracking-widest transition-colors font-semibold">TikTok</a>
            <a href="https://www.instagram.com/croustystreetdjerba" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C49A6C] text-xs uppercase tracking-widest transition-colors font-semibold">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
