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
    <section id="gallery" className="py-24 relative bg-white border-t border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#C84B31]/30 text-[#C84B31] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1918] font-serif mb-4">
            {t.title}
          </h2>
          <p className="text-[#6E6A64] text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#C84B31] text-white shadow-sm"
                : "bg-[#FAF7F2] text-[#6E6A64] border border-[#EAE5DD] hover:text-[#1A1918]"
            }`}
          >
            {t.tabAll}
          </button>
          <button
            onClick={() => setActiveTab("terrace")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "terrace"
                ? "bg-[#C84B31] text-white shadow-sm"
                : "bg-[#FAF7F2] text-[#6E6A64] border border-[#EAE5DD] hover:text-[#1A1918]"
            }`}
          >
            {t.tabTerrace}
          </button>
          <button
            onClick={() => setActiveTab("dishes")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "dishes"
                ? "bg-[#C84B31] text-white shadow-sm"
                : "bg-[#FAF7F2] text-[#6E6A64] border border-[#EAE5DD] hover:text-[#1A1918]"
            }`}
          >
            {t.tabDishes}
          </button>
          <button
            onClick={() => setActiveTab("cocktails")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "cocktails"
                ? "bg-[#C84B31] text-white shadow-sm"
                : "bg-[#FAF7F2] text-[#6E6A64] border border-[#EAE5DD] hover:text-[#1A1918]"
            }`}
          >
            {t.tabCocktails}
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer card-luxury border-[#EAE5DD]"
            >
              <Image
                src={item.image}
                alt={item.title[currentLang]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/80 text-[#1A1918] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-white drop-shadow">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-[11px] text-amber-300 font-mono font-semibold uppercase tracking-wider mt-1">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-[#EAE5DD] p-2 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-[#1A1918] flex items-center justify-center hover:bg-[#C84B31] hover:text-white transition-colors shadow"
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
              <h3 className="text-xl font-serif font-bold text-[#1A1918]">
                {selectedImage.title[currentLang]}
              </h3>
              <p className="text-xs text-[#C84B31] font-mono mt-1">
                Zone Touristique Ghizen • Houmt Souk Djerba
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
