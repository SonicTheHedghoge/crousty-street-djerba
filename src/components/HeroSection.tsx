"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Compass, ArrowRight, Flame, UtensilsCrossed } from "lucide-react";

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
        "Venez savourer des poissons frais du jour, notre Gargoulette djerbienne légendaire, des grillades au feu de bois et des cocktails signatures dans une atmosphère lumineuse & chic.",
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
    <section className="relative min-h-[88vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-[#FAF7F2]">
      {/* Background Image with Light Gradient Blend */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Restaurant Flamant Rose Djerba Terrace"
          fill
          priority
          className="object-cover object-center opacity-15 filter saturate-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-transparent to-[#FAF7F2]"></div>
      </div>

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C84B31]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EAE5DD] text-[#B89737] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-xs animate-float">
          <MapPin className="w-4 h-4 text-[#C84B31]" />
          <span>{t.badge}</span>
        </div>

        {/* Title Tagline */}
        <h2 className="text-[#C84B31] uppercase tracking-widest text-xs sm:text-sm font-bold font-mono mb-2">
          {t.titlePre}
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1A1918] leading-[1.1] mb-6 font-serif max-w-4xl">
          <span className="text-gradient-terracotta">{t.titleMain}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#6E6A64] max-w-2xl font-normal leading-relaxed mb-10">
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C84B31] hover:bg-[#B33E26] text-white font-bold text-base shadow-xl shadow-[#C84B31]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            <UtensilsCrossed className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>{t.bookBtn}</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-[#EAE5DD] text-[#1A1918] font-bold text-base hover:border-[#C84B31] hover:text-[#C84B31] shadow-xs transition-all flex items-center justify-center gap-2 group"
          >
            <span>{t.menuBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#C84B31] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
          <div className="card-luxury p-5 rounded-2xl flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FAF3E0] border border-[#B89737]/30 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-[#B89737] fill-[#B89737]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-[#1A1918] font-mono">4.8 / 5</span>
                <span className="text-xs text-[#B89737] font-bold">★★★★★</span>
              </div>
              <p className="text-xs text-[#6E6A64]">{t.statRating} (Google & FB)</p>
            </div>
          </div>

          <div className="card-luxury p-5 rounded-2xl flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FDF2F0] border border-[#C84B31]/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#C84B31]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1918] font-serif">{t.statFresh}</h3>
              <p className="text-xs text-[#6E6A64]">{t.statFreshDesc}</p>
            </div>
          </div>

          <div className="card-luxury p-5 rounded-2xl flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FAF3E0] border border-[#B89737]/30 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#B89737]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1918] font-serif">{t.statAmbiance}</h3>
              <p className="text-xs text-[#6E6A64]">{t.statAmbianceDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
