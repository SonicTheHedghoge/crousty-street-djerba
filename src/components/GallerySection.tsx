"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X } from "lucide-react";

interface GallerySectionProps {
  currentLang: "fr" | "en" | "ar";
}

interface GalleryItem {
  id: string;
  title: { fr: string; en: string; ar: string };
  category: "terrace" | "dishes" | "cocktails";
  image: string;
}

export default function GallerySection({ currentLang }: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const items: GalleryItem[] = [
    {
      id: "1",
      title: {
        fr: "Terrasse Sunset au Coucher de Soleil",
        en: "Sunset Terrace Ambient Glow",
        ar: "تراس الغروب الساحر",
      },
      category: "terrace",
      image: "/images/hero.jpg",
    },
    {
      id: "2",
      title: {
        fr: "Grand Plateau de Poissons Frais du Jour",
        en: "Grand Fresh Catch Seafood Platter",
        ar: "طبق الأسماك البحرية الطازجة",
      },
      category: "dishes",
      image: "/images/seafood.jpg",
    },
    {
      id: "3",
      title: {
        fr: "Agneau en Gargoulette Traditionnel",
        en: "Authentic Djerbian Clay Pot Gargoulette",
        ar: "قرقولة لحم الضأن الجربية الأصيلة",
      },
      category: "dishes",
      image: "/images/gargoulette.jpg",
    },
    {
      id: "4",
      title: {
        fr: "Lounge Nuit & Lumières Tamisées",
        en: "Night Lounge & Warm Lantern Light",
        ar: "أجواء الليل والإنارة الدافئة",
      },
      category: "terrace",
      image: "/images/terrace.jpg",
    },
    {
      id: "5",
      title: {
        fr: "Cocktail Tropical Signature 'Flamant Rose'",
        en: "Signature 'Flamant Rose' Tropical Cocktail",
        ar: "كوكتيل الفلامان روز المميز",
      },
      category: "cocktails",
      image: "/images/cocktail.jpg",
    },
  ];

  const filteredItems = activeTab === "all" ? items : items.filter((item) => item.category === activeTab);

  const t = {
    fr: {
      badge: "Immersion Visuelle",
      title: "Galerie & Ambiance Flamant Rose",
      subtitle: "Un aperçu photographique de nos tables, nos plats d'exception et notre terrasse illuminée.",
      tabAll: "Toutes les photos",
      tabTerrace: "Ambiance & Terrasse",
      tabDishes: "Plats & Pêche",
      tabCocktails: "Cocktails & Drinks",
    },
    en: {
      badge: "Visual Atmosphere",
      title: "Flamant Rose Gallery & Ambiance",
      subtitle: "A photographic look at our cozy seating, signature fresh catch, and illuminated sunset terrace.",
      tabAll: "All Photos",
      tabTerrace: "Ambience & Terrace",
      tabDishes: "Fresh Seafood",
      tabCocktails: "Cocktails & Bar",
    },
    ar: {
      badge: "معرض الصور والأجواء",
      title: "أجواء مطعم الفلامان روز",
      subtitle: "إطلالة مصورة على جلساتنا الراقية وأطباقنا الطازجة وتراس الغروب.",
      tabAll: "جميع الصور",
      tabTerrace: "الجلسات والتراس",
      tabDishes: "الأطباق والأسماك",
      tabCocktails: "الكوكتيلات والمشروبات",
    },
  }[currentLang];

  return (
    <section id="gallery" className="py-24 relative bg-[#0C101A] border-t border-rose-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 text-base font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            {t.tabAll}
          </button>
          <button
            onClick={() => setActiveTab("terrace")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "terrace"
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            {t.tabTerrace}
          </button>
          <button
            onClick={() => setActiveTab("dishes")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "dishes"
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            {t.tabDishes}
          </button>
          <button
            onClick={() => setActiveTab("cocktails")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "cocktails"
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            {t.tabCocktails}
          </button>
        </div>

        {/* Photo Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer glass-panel border-white/5 hover:border-rose-500/40 transition-all shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title[currentLang]}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-white group-hover:text-rose-300 transition-colors">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-[11px] text-amber-400 font-mono font-medium uppercase tracking-wider mt-1">
                    Restaurant Flamant Rose Djerba
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#121722] rounded-3xl overflow-hidden border border-rose-500/30 p-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-rose-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title[currentLang]}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-serif font-bold text-white">
                {selectedImage.title[currentLang]}
              </h3>
              <p className="text-xs text-rose-300 font-mono mt-1">
                Zone Touristique Ghizen • Houmt Souk Djerba
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
