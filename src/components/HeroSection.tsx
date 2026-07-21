"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Compass, ArrowRight, ShieldCheck, Flame, UtensilsCrossed } from "lucide-react";

interface HeroSectionProps {
  currentLang: "fr" | "en" | "ar";
  onOpenBooking: () => void;
}

export default function HeroSection({ currentLang, onOpenBooking }: HeroSectionProps) {
  const t = {
    fr: {
      badge: "Zone Touristique Ghizen • Houmt Souk Djerba",
      titlePre: "Gastronomie & Sunset Lounge",
      titleMain: "L'Art de la Mer & des Saveurs Djerbiennes",
      subtitle:
        "Venez savourer des poissons frais du jour, notre Gargoulette djerbienne légendaire, des grillades au feu de bois et des cocktails signatures dans une atmosphère chic & décontractée.",
      bookBtn: "Réserver une Table",
      menuBtn: "Explorer notre Carte",
      statRating: "Note Avis Clients",
      statFresh: "Pêche Fraîche",
      statFreshDesc: "Sélection quotidienne",
      statAmbiance: "Sunset Terrasse",
      statAmbianceDesc: "Vue & Ambiance Chic",
    },
    en: {
      badge: "Ghizen Tourist Zone • Houmt Souk Djerba",
      titlePre: "Gastronomy & Sunset Lounge",
      titleMain: "The Art of Mediterranean & Djerbian Flavors",
      subtitle:
        "Taste daily fresh catch seafood, authentic Gargoulette, wood-fired grills, and signature sunset cocktails in a refined coastal atmosphere.",
      bookBtn: "Book a Table",
      menuBtn: "Explore Our Menu",
      statRating: "Guest Rating",
      statFresh: "Fresh Catch",
      statFreshDesc: "Daily local selection",
      statAmbiance: "Sunset Terrace",
      statAmbianceDesc: "Cosy & Elegant Vibe",
    },
    ar: {
      badge: "المنطقة السياحية غيزن • حومة السوق جربة",
      titlePre: "مأكولات فاخرة وجلسات ساحرة",
      titleMain: "فن الطهي البحري والنكهات الجربية الأصيلة",
      subtitle:
        "استمتع بأسماك اليوم الطازجة، وجبة القرقولة الجربية الشهيرة، والمشويات على الفحم مع الكوكتيلات المتميزة في أجواء راقية.",
      bookBtn: "احجز طاولتك الآن",
      menuBtn: "استكشف القائمة",
      statRating: "تقييم الزوار",
      statFresh: "صيد يومي طازج",
      statFreshDesc: "من صيادي جربة",
      statAmbiance: "تراس غروب الشمس",
      statAmbianceDesc: "إطلالة وأجواء راقية",
    },
  }[currentLang];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-radial-hero">
      {/* Background Hero Image with Blend Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Restaurant Flamant Rose Djerba Terrace"
          fill
          priority
          className="object-cover object-center opacity-30 scale-105 filter contrast-110 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-transparent to-[#0A0D14]"></div>
      </div>

      {/* Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-gold border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-xl animate-float">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>{t.badge}</span>
        </div>

        {/* Title */}
        <h2 className="text-rose-400 uppercase tracking-widest text-xs sm:text-sm font-semibold font-mono mb-2">
          {t.titlePre}
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif max-w-4xl">
          <span className="text-gradient-rose">{t.titleMain}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 text-white font-bold text-base shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            <UtensilsCrossed className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>{t.bookBtn}</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-gray-100 font-semibold text-base border-white/20 hover:border-rose-400 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 group"
          >
            <span>{t.menuBtn}</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Floating Quick Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
          {/* Card 1 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border-rose-500/20 hover:border-rose-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-white font-mono">4.8 / 5</span>
                <span className="text-xs text-amber-400 font-bold">★★★★★</span>
              </div>
              <p className="text-xs text-gray-400">{t.statRating} (Google & FB)</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-serif">{t.statFresh}</h3>
              <p className="text-xs text-gray-400">{t.statFreshDesc}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border-rose-500/20 hover:border-rose-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-serif">{t.statAmbiance}</h3>
              <p className="text-xs text-gray-400">{t.statAmbianceDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
