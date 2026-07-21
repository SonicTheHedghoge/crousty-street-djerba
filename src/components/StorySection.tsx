"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Fish, HeartHandshake, Waves, Award } from "lucide-react";

interface StoryProps {
  currentLang: "fr" | "en" | "ar";
}

export default function StorySection({ currentLang }: StoryProps) {
  const t = {
    fr: {
      badge: "Notre Héritage Culinaire",
      title: "L'Esprit Flamant Rose • Djerba",
      p1: "Situé au cœur de la zone touristique de Ghizen à Houmt Souk, le Restaurant Flamant Rose est né d'une passion commune : offrir une expérience gastronomique authentique qui célèbre les trésors de l'île de Djerba et de la Méditerranée.",
      p2: "Chaque matin, nos chefs sélectionnent directement auprès des pêcheurs locaux les plus beaux poissons et fruits de mer de la côte djerbienne. Préparés à la minute, grillés au feu de bois ou mijotés selon les recettes traditionnelles tunisiennes, nos plats révèlent des saveurs intenses et délicates.",
      feature1Title: "Pêche Fraîche du Jour",
      feature1Desc: "Daurades, loups de mer, poulpes et crevettes royales arrivés chaque matin.",
      feature2Title: "Gastronomie Tunisienne & Gargoulette",
      feature2Desc: "Le fameux agneau mijoté en jarre d'argile et couscous traditionnel.",
      feature3Title: "Cadre Soigné & Terrasse Sunset",
      feature3Desc: "Ambiance chaleureuse, thé à la menthe et moments inoubliables en famille ou entre amis.",
    },
    en: {
      badge: "Culinary Heritage",
      title: "The Flamant Rose Spirit • Djerba",
      p1: "Located in the heart of the Ghizen tourist zone in Houmt Souk, Restaurant Flamant Rose was born out of a shared passion: offering an authentic gastronomic experience celebrating the natural riches of Djerba island and the Mediterranean.",
      p2: "Every morning, our chefs hand-pick the finest wild fish and seafood directly from local Djerbian fishermen. Grilled over wood fire or slow-cooked using ancestral Tunisian clay pot recipes, every dish is an invitation to culinary bliss.",
      feature1Title: "Daily Fresh Catch",
      feature1Desc: "Wild seabass, sea bream, octopus and king prawns sourced fresh every morning.",
      feature2Title: "Tunisian Heritage & Gargoulette",
      feature2Desc: "Signature lamb slow-cooked in traditional clay pots and fragrant couscous.",
      feature3Title: "Lounge Terrace & Sunset Vibes",
      feature3Desc: "Warm coastal ambient light, fresh mint tea, and cherished moments with loved ones.",
    },
    ar: {
      badge: "تراثنا في الطهي",
      title: "روح الفلامان روز • جربة",
      p1: "يقع مطعم الفلامان روز في قلب المنطقة السياحية غيزن بحومة السوق، وقد تأسس لشغف تقديم تجربة طهي أصيلة تحتفي بكنوز جزيرة جربة والبحر الأبيض المتوسط.",
      p2: "في كل صباح، يختار طهاتنا من الصيادين المحليين أفضل الأسماك والمأكولات البحرية الطازجة. نقوم بطهيها على الفحم أو في الأواني الفخارية التقليدية لتذوق أشهى النكهات.",
      feature1Title: "صيد يومي طازج",
      feature1Desc: "أسماك وجمبري وأخطبوط طازج يومياً من شواطئ جربة.",
      feature2Title: "مأكولات تونسية وقرقولة أصيلة",
      feature2Desc: "لحم الضأن المطهو في الجرة الفخارية والكسكسي التونسي الشهير.",
      feature3Title: "تراس وأجواء ساحرة",
      feature3Desc: "جلسات مريحة مع شاي بالنعناع وأجواء عائلية مميزة.",
    },
  }[currentLang];

  return (
    <section id="story" className="py-24 relative bg-[#0C101A] overflow-hidden border-t border-rose-900/20">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-rose-500/20 group">
              <Image
                src="/images/terrace.jpg"
                alt="Restaurant Flamant Rose Ambiance Terrace"
                width={650}
                height={480}
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border-rose-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif">Zone Touristique Ghizen</h4>
                    <p className="text-xs text-rose-300">Entre Le Grand Bleu & Hotel Athenee</p>
                  </div>
                </div>
                <span className="text-2xl">🦩</span>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-56 rounded-2xl overflow-hidden border-4 border-[#0C101A] shadow-2xl z-20 hover:scale-105 transition-transform">
              <Image
                src="/images/gargoulette.jpg"
                alt="Authentic Tunisian Gargoulette"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif leading-tight">
              {t.title}
            </h2>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              {t.p1}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {t.p2}
            </p>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-3.5 rounded-xl glass-panel border-white/5 hover:border-rose-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-rose-500/15 flex items-center justify-center shrink-0 text-rose-400">
                  <Fish className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-serif">{t.feature1Title}</h3>
                  <p className="text-xs text-gray-400">{t.feature1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl glass-panel border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0 text-amber-400">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-serif">{t.feature2Title}</h3>
                  <p className="text-xs text-gray-400">{t.feature2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl glass-panel border-white/5 hover:border-rose-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-rose-500/15 flex items-center justify-center shrink-0 text-rose-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-serif">{t.feature3Title}</h3>
                  <p className="text-xs text-gray-400">{t.feature3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
