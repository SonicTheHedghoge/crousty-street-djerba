"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── Scroll Reveal Hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── DATA ─── */
const MENU_ITEMS = [
  { name: "Riz Crousty XL", price: "18.900", image: "/rice-bowl.png", slug: "riz-crousty" },
  { name: "Crousty Burger", price: "14.500", image: "/burger.png", slug: "crousty-burger" },
  { name: "Bucket 12 Tenders", price: "29.900", image: "/bucket-tenders.png", slug: "bucket-tenders" },
];

const PRODUCTS = [
  { name: "TENDERS", image: "/hero-chicken.png" },
  { name: "BURGERS", image: "/burger.png" },
  { name: "WRAPS", image: "/wrap.png" },
  { name: "BUCKETS", image: "/bucket-tenders.png" },
];

const REVIEWS = [
  { name: "Ahmed B.", text: "Dès la première bouchée, j'ai su que Crousty Street était spécial. La sauce est incroyablement bonne, les buns sont parfaitement toastés. 10/10 !" },
  { name: "Fatma Z.", text: "Chaque commande est parfaite. Les tenders sont croustillants et addictifs, les burgers cuits à la perfection. Mon rendez-vous du weekend !" },
  { name: "Mohamed K.", text: "Le Riz Crousty XL est une explosion de saveurs ! Portions généreuses et qualité irréprochable. Crousty Street ne déçoit jamais." },
];

const DROP_TAGS = [
  { text: "CROUSTILLANT À SOUHAIT", rotate: "-8deg", delay: "0s" },
  { text: "SAUCES MAISON", rotate: "12deg", delay: "0.15s" },
  { text: "100% HALAL", rotate: "-3deg", delay: "0.3s" },
  { text: "POULET FRAIS DU JOUR", rotate: "6deg", delay: "0.45s" },
  { text: "FAIT À LA COMMANDE", rotate: "-10deg", delay: "0.6s" },
  { text: "PORTIONS GÉNÉREUSES", rotate: "15deg", delay: "0.75s" },
];

/* ─── COMPONENTS ─── */

function Topbar() {
  return (
    <div className="bg-red text-white text-center py-2.5 text-sm font-display font-medium tracking-wide">
      Le vendredi c&apos;est encore meilleur ! Profitez de -15% sur tout le menu chez Crousty Street ! 🍗
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-cream"}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <a href="#" className="font-display text-[28px] font-extrabold text-red italic">Crousty Street</a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Menu", href: "#menu" },
            { label: "À Propos", href: "#about" },
            { label: "Avis", href: "#reviews" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="group relative text-sm font-medium text-dark uppercase tracking-wide">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">{l.label}</span>
              <span className="absolute inset-0 block text-red translate-y-full transition-transform duration-300 group-hover:translate-y-0">{l.label}</span>
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden md:inline-flex px-6 py-2.5 text-xs">Contact</a>
        <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5" aria-label="Menu">
          <span className={`block h-0.5 w-full bg-dark transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-red transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-dark transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-6 pb-6 space-y-4">
          {["Menu", "À Propos", "Avis", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace("à propos", "about")}`} onClick={() => setOpen(false)} className="block font-display text-lg text-dark uppercase">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-0 md:min-h-[85vh] flex items-center">
      {/* Marquee Text Behind */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden z-0">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee-left 25s linear infinite" }}>
          {[...Array(4)].map((_, i) => (
            <h1 key={`a${i}`} className="text-[clamp(4rem,12vw,10rem)] font-display font-black uppercase text-red leading-none mx-4 shrink-0">
              Crousty Street – Tenders, Bites &amp; Vibes
            </h1>
          ))}
        </div>
        <div className="flex whitespace-nowrap mt-2" style={{ animation: "marquee-right 30s linear infinite" }}>
          {[...Array(4)].map((_, i) => (
            <h1 key={`b${i}`} className="text-[clamp(4rem,12vw,10rem)] font-display font-black uppercase text-stroke-red leading-none mx-4 shrink-0">
              Crousty Street – Tenders, Bites &amp; Vibes
            </h1>
          ))}
        </div>
      </div>
      {/* Center Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="relative w-[min(80vw,520px)] aspect-square">
          <Image src="/hero-burger.png" alt="Crousty Street Hero Burger" fill className="object-contain drop-shadow-2xl" priority sizes="(max-width:768px) 80vw, 520px" />
        </div>
        <a href="#menu" className="btn-primary px-10 py-4 text-sm mt-6">Explorer le Menu</a>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          <Image src="/about-restaurant.png" alt="Intérieur Crousty Street" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </div>
        {/* Content */}
        <div ref={ref} className="bg-dark text-white p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <h2
            className={`text-4xl md:text-5xl font-display font-bold leading-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            L&apos;endroit préféré de Djerba pour les bites irrésistibles.
          </h2>
          <p className={`mt-6 text-white/70 text-lg leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Crousty Street, c&apos;est là où vos envies explosent, vos cheat days deviennent légendaires et chaque bouchée est une explosion de saveur inoubliable. Croustillant, fondant, empilé à la perfection — ici, le goût, le fun et le plaisir se rencontrent dans chaque bouchée.
          </p>
          <div className={`mt-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <a href="#menu" className="btn-primary inline-flex px-8 py-3 text-xs">Voir le Menu</a>
          </div>
        </div>
      </div>
      {/* About marquee */}
      <div className="bg-red py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee-left 20s linear infinite" }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="text-3xl md:text-4xl font-hand text-white mx-4">C&apos;est l&apos;Heure Crousty</span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/50 mx-4 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="menu" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-red transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Les Favoris des Clients
            </h2>
            <p className={`mt-3 text-text-muted text-lg max-w-xl transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Croustillant, fondant, double-empilé. Crousty Street c&apos;est là où les envies deviennent folles et chaque bouchée est inoubliable.
            </p>
          </div>
          <a href="#menu" className={`btn-outline inline-flex px-7 py-3 text-xs shrink-0 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Explorer le Menu
          </a>
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, i) => (
            <div
              key={item.slug}
              className={`group bg-cream-dark rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-dark">{item.name}</h3>
                  <p className="text-red font-bold text-lg mt-1">{item.price} DT</p>
                </div>
                <a href="#" className="btn-primary px-5 py-2.5 text-[10px]">Détails</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-28 bg-cream" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className={`text-4xl md:text-5xl font-display font-bold text-red transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            La Bataille du Crousty
          </h2>
          <p className={`mt-3 text-text-muted text-lg max-w-xl mx-auto transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Chaque plat est une aventure de saveurs. Choisissez votre champion et vivez l&apos;expérience cheat-day ultime.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className={`group text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="relative mx-auto w-full aspect-square rounded-full overflow-hidden bg-cream-dark border-4 border-transparent group-hover:border-red transition-all duration-500 group-hover:shadow-lg">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="25vw" />
                <div className="absolute inset-0 rounded-full bg-red/0 group-hover:bg-red/10 transition-colors duration-500" />
              </div>
              <h3 className="mt-4 font-display font-bold text-xl md:text-2xl uppercase text-dark group-hover:text-red transition-colors">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className={`text-4xl md:text-5xl font-display font-bold text-red transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Ce qui rend Crousty unique ?
          </h2>
          <p className={`mt-3 text-text-muted text-lg max-w-xl mx-auto transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Chez Crousty Street, on ne fait pas juste des burgers — on crée des envies. Notre food est pensée pour être juteuse, audacieuse et impossible à oublier.
          </p>
        </div>
        {/* Annotated Image */}
        <div className={`relative max-w-3xl mx-auto transition-all duration-700 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          {/* Left annotations */}
          <div className="absolute left-0 top-[20%] -translate-x-[10%] hidden md:block">
            <p className="font-hand text-2xl text-red text-right">Tenders qui<br/>claquent fort</p>
            <svg className="ml-auto mt-1" width="80" height="40" viewBox="0 0 80 40" fill="none"><path d="M0 5C30 5 50 35 80 35" stroke="#C41E24" strokeWidth="2" strokeDasharray="6 4" /></svg>
          </div>
          <div className="absolute left-0 bottom-[20%] -translate-x-[10%] hidden md:block">
            <p className="font-hand text-2xl text-red text-right">Saveurs qui<br/>frappent sec</p>
            <svg className="ml-auto mt-1" width="80" height="40" viewBox="0 0 80 40" fill="none"><path d="M0 35C30 35 50 5 80 5" stroke="#C41E24" strokeWidth="2" strokeDasharray="6 4" /></svg>
          </div>
          {/* Right annotations */}
          <div className="absolute right-0 top-[20%] translate-x-[10%] hidden md:block">
            <p className="font-hand text-2xl text-red">Fondant,<br/>Croustillant,<br/>Légendaire</p>
            <svg className="mt-1" width="80" height="40" viewBox="0 0 80 40" fill="none"><path d="M80 5C50 5 30 35 0 35" stroke="#C41E24" strokeWidth="2" strokeDasharray="6 4" /></svg>
          </div>
          <div className="absolute right-0 bottom-[20%] translate-x-[10%] hidden md:block">
            <p className="font-hand text-2xl text-red">Zéro envie<br/>laissée derrière</p>
            <svg className="mt-1" width="80" height="40" viewBox="0 0 80 40" fill="none"><path d="M80 35C50 35 30 5 0 5" stroke="#C41E24" strokeWidth="2" strokeDasharray="6 4" /></svg>
          </div>
          {/* Center burger */}
          <div className="relative w-[min(70vw,400px)] aspect-square mx-auto">
            <Image src="/hero-burger.png" alt="Ce qui rend Crousty unique" fill className="object-contain drop-shadow-xl" sizes="400px" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DropsSection() {
  const { ref, visible } = useReveal(0.3);
  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/cta-burger.png" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Dropping Tags */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="relative min-h-[200px] mb-8 flex flex-wrap justify-center gap-3">
          {DROP_TAGS.map((tag) => (
            <span
              key={tag.text}
              className={`inline-block bg-white/90 text-dark rounded-full px-5 py-2 text-sm font-hand text-xl tracking-wide transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"}`}
              style={{
                transitionDelay: tag.delay,
                transform: visible ? `rotate(${tag.rotate})` : `translateY(-200px) rotate(${tag.rotate})`,
              }}
            >
              {tag.text}
            </span>
          ))}
        </div>
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-tight transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Certaines choses et pensées <span className="text-gold italic">prennent du temps</span>, mais la bouffe ne devrait pas en faire partie !
        </h2>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [active, setActive] = useState(1);
  const { ref, visible } = useReveal();
  return (
    <section id="reviews" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className={`text-4xl md:text-5xl font-display font-bold text-red transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Des bouchées dont on parle
          </h2>
          <p className={`mt-3 text-text-muted text-lg max-w-xl mx-auto transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Croustillant. Fondant. Légendaire. Découvrez ce que les vrais clients pensent de leur expérience Crousty Street.
          </p>
        </div>
        {/* Review cards */}
        <div className="relative flex items-center justify-center gap-6 overflow-hidden min-h-[350px]">
          {REVIEWS.map((r, i) => {
            const isActive = i === active;
            const offset = i - active;
            return (
              <div
                key={r.name}
                className={`absolute md:relative w-[min(100%,380px)] rounded-3xl p-8 transition-all duration-500 shrink-0 ${
                  isActive
                    ? "bg-red text-white scale-100 opacity-100 z-10 shadow-xl"
                    : "bg-cream-dark text-dark scale-90 opacity-50 z-0"
                }`}
                style={{ transform: `translateX(${offset * 120}%) scale(${isActive ? 1 : 0.9})` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-5 h-5 ${isActive ? "text-white" : "text-gold"}`} viewBox="0 0 29 27" fill="currentColor"><path d="M13.238.708C13.59-.082 14.712-.082 15.065.708l3.272 7.34a1.12 1.12 0 00.808.588l7.992.843c.86.09 1.208 1.158.565 1.737l-5.97 5.38a1.12 1.12 0 00-.148.95l1.668 7.862c.18.846-.728 1.506-1.477 1.073l-6.962-4.015a1.12 1.12 0 00-1 0l-6.961 4.015c-.75.433-1.658-.227-1.478-1.073l1.667-7.862a1.12 1.12 0 00-.148-.95l-5.97-5.38c-.643-.58-.296-1.647.565-1.737l7.992-.843a1.12 1.12 0 00.808-.588L13.238.708z" /></svg>
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-6 ${isActive ? "text-white/90" : "text-text-muted"}`}>{r.text}</p>
                <p className={`font-display font-bold ${isActive ? "text-white" : "text-dark"}`}>{r.name}</p>
              </div>
            );
          })}
        </div>
        {/* Nav dots */}
        <div className="flex justify-center gap-3 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                i === active ? "border-red bg-red text-white" : "border-text-muted/30 text-text-muted hover:border-red"
              }`}
              aria-label={`Review ${i + 1}`}
            >
              {i === active ? "›" : "›"}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image src="/cta-burger.png" alt="Crousty Street experience" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-red/80 via-red/30 to-transparent" />
      </div>
      {/* Marquee */}
      <div className="bg-red py-4 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee-left 18s linear infinite" }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-2xl md:text-3xl font-display font-bold uppercase text-white mx-6 shrink-0">
              Crousty Street – Djerba Bourgo Mall 🍗
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, visible } = useReveal();
  return (
    <section id="contact" className="py-20 md:py-28 bg-dark text-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-hand text-3xl text-gold">Venez Nous Voir</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Djerba Bourgo Mall</h2>
          <div className="mt-8 space-y-6">
            {[
              { icon: "📍", title: "Adresse", desc: "Djerba Bourgo Mall, Houmt Souk, Tunisie" },
              { icon: "🕐", title: "Horaires", desc: "Lundi — Dimanche • 11h00 – 23h00" },
              { icon: "📱", title: "Suivez-nous", desc: "@croustystreetdjerba", link: "https://www.tiktok.com/@croustystreetdjer" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 items-start">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <h4 className="font-display font-bold">{c.title}</h4>
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">{c.desc}</a>
                  ) : (
                    <p className="text-white/60">{c.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`rounded-3xl overflow-hidden border border-white/10 h-[350px] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.2!2d10.9685483!3d33.8174831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabd70f532452b%3A0xadc053ace391adf1!2sCrousty%20Street%20Djerba!5e0!3m2!1sfr!2stn!4v1720000000000!5m2!1sfr!2stn"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Crousty Street Djerba" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-soft text-white border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold italic text-red">Crousty Street</h3>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              Des saveurs audacieuses, des mains gourmandes et de bonnes vibes. Crousty Street apporte l&apos;expérience food ultime à chaque bouchée.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-display font-bold uppercase text-sm tracking-widest mb-2">Navigation</h4>
            {["Menu", "À Propos", "Avis", "Contact"].map((l) => (
              <a key={l} href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-display font-bold uppercase text-sm tracking-widest mb-2">Suivez-nous</h4>
            <div className="flex gap-3">
              <a href="https://www.tiktok.com/@croustystreetdjer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red flex items-center justify-center text-white hover:bg-red-dark transition-colors">🎵</a>
              <a href="https://www.instagram.com/croustystreetdjerba" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red flex items-center justify-center text-white hover:bg-red-dark transition-colors">📸</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Crousty Street Djerba. Le 1er Crousty de Tunisie 🇹🇳
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <ProductsSection />
      <DifferenceSection />
      <DropsSection />
      <ReviewsSection />
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
