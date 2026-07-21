"use client";

import React from "react";
import { Star, Quote, CheckCircle, ThumbsUp, Sparkles } from "lucide-react";

interface ReviewsProps {
  currentLang: "fr" | "en" | "ar";
}

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  avatarBg: string;
  text: { fr: string; en: string; ar: string };
  dishTag: { fr: string; en: string; ar: string };
  platform: "Google" | "Facebook";
}

export default function ReviewsSection({ currentLang }: ReviewsProps) {
  const reviews: Review[] = [
    {
      id: "1",
      name: "Antoine & Sophie M.",
      location: "Paris, France 🇫🇷",
      rating: 5,
      date: "Juillet 2026",
      avatarBg: "from-rose-500 to-amber-500",
      text: {
        fr: "Une expérience incontournable à Djerba ! Le plateau de poisson grillé frais était divin et la Gargoulette à l'agneau cuite dans la jarre cassée sous nos yeux est un pur délice. L'accueil du chef est d'une gentillesse rare.",
        en: "An unmissable culinary highlight in Djerba! The fresh grilled seafood platter was divine and the lamb Gargoulette cracked open at our table was absolute perfection.",
        ar: "تجربة لا تُنسى في جربة! طبق السمك المشوي الطازج كان رائعاً والقرقولة باللحم المطهوة في الفخار ممتازة جداً. استقبال الشيف كان دافئاً وكريماً.",
      },
      dishTag: { fr: "Plateau Royal & Gargoulette", en: "Royal Platter & Gargoulette", ar: "الطبق الملكي والقرقولة" },
      platform: "Google",
    },
    {
      id: "2",
      name: "Karim Ben Cheikh",
      location: "Tunis, Tunisie 🇹🇳",
      rating: 5,
      date: "Juin 2026",
      avatarBg: "from-amber-500 to-emerald-500",
      text: {
        fr: "Le meilleur restaurant de poisson de la zone touristique de Ghizen. Poisson super frais, salade méchouia parfaitement assaisonnée et thé à la menthe servi en terrasse. Rapport qualité/prix imbattable.",
        en: "The best seafood restaurant in Ghizen tourist zone. Super fresh fish, perfectly seasoned Mechouia salad, and mint tea on the terrace.",
        ar: "أفضل مطعم سمك في المنطقة السياحية غيزن. أسماك طازجة جداً، سلطة مشوية لديدة، وشاي بالنعناع في التراس.",
      },
      dishTag: { fr: "Daurade Sauvage & Ojja", en: "Wild Sea Bream & Ojja", ar: "الوراطة المشوية والعجة" },
      platform: "Facebook",
    },
    {
      id: "3",
      name: "Elena & David R.",
      location: "Milan, Italie 🇮🇹",
      rating: 5,
      date: "Mai 2026",
      avatarBg: "from-rose-600 to-pink-600",
      text: {
        fr: "Magnifique soirée en terrasse ! L'ambiance sunset avec la musique douce et les lumières tamisées crée une atmosphère magique. Les crevettes royales et la brick djerbienne sont à tomber.",
        en: "Beautiful evening on the terrace! The sunset vibe with soft music and warm lighting creates a magical atmosphere. The king prawns and brik are amazing.",
        ar: "أمسية رائعة في التراس! أجواء غروب الشمس مع الموسيقى الهادئة والإضاءة الدافئة تصنع أجواءً ساحرة. الجمبري والبريك كانا ممتازين.",
      },
      dishTag: { fr: "Crevettes & Brick Djerbienne", en: "Prawns & Djerbian Brik", ar: "الجمبري والبريك الجربي" },
      platform: "Google",
    },
  ];

  const t = {
    fr: {
      badge: "Témoignages & Avis Clients",
      title: "Ce que Nos Clients Disent de Nous",
      subtitle: "Certifié par plus de 500+ avis voyageurs et résidents à Djerba.",
      verifiedText: "Avis Vérifié",
    },
    en: {
      badge: "Guest Testimonials",
      title: "What Our Guests Say About Us",
      subtitle: "Certified by over 500+ reviews from travelers and Djerba locals.",
      verifiedText: "Verified Review",
    },
    ar: {
      badge: "آراء وشهادات الزوار",
      title: "ماذا يقول زوارنا عنا",
      subtitle: "موثق بأكثر من 500 تقييم من المسافرين وسكان جربة.",
      verifiedText: "تقييم موثق",
    },
  }[currentLang];

  return (
    <section id="reviews" className="py-24 relative bg-[#0A0D14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 text-base font-light">
            {t.subtitle}
          </p>

          {/* Rating Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl glass-panel-gold border-amber-500/30">
              <span className="text-lg font-bold text-white font-mono">4.8 / 5</span>
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <span className="text-xs text-gray-400">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl glass-panel border-rose-500/30">
              <span className="text-lg font-bold text-white font-mono">4.9 / 5</span>
              <div className="flex text-rose-400 text-xs">★★★★★</div>
              <span className="text-xs text-gray-400">Facebook Page</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel p-6 rounded-3xl border-white/10 hover:border-rose-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow`}
                    >
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">{rev.name}</h4>
                      <p className="text-[11px] text-gray-400">{rev.location}</p>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-bold font-mono">
                    {"★".repeat(rev.rating)}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-rose-500/20 absolute -top-2 -left-2" />
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed relative z-10 pl-3">
                    "{rev.text[currentLang]}"
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-rose-300 font-medium">
                  {rev.dishTag[currentLang]}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  {rev.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
