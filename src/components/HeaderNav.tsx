"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, Globe, Menu, X, MapPin, Sparkles } from "lucide-react";

interface HeaderProps {
  currentLang: "fr" | "en" | "ar";
  setLang: (lang: "fr" | "en" | "ar") => void;
  currency: "DT" | "EUR";
  setCurrency: (curr: "DT" | "EUR") => void;
  onOpenBooking: () => void;
}

export default function HeaderNav({
  currentLang,
  setLang,
  currency,
  setCurrency,
  onOpenBooking,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    fr: {
      story: "Notre Histoire",
      menu: "Carte & Menu",
      gallery: "Galerie",
      reviews: "Avis Clients",
      contact: "Accès & Contact",
      bookBtn: "Réserver une Table",
      tagline: "Zone Touristique Ghizen • Djerba",
    },
    en: {
      story: "Our Story",
      menu: "Menu & Cuisine",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Location & Contact",
      bookBtn: "Book a Table",
      tagline: "Ghizen Tourist Zone • Djerba",
    },
    ar: {
      story: "قصتنا",
      menu: "قائمة الطعام",
      gallery: "معرض الصور",
      reviews: "آراء العملاء",
      contact: "الموقع والاتصال",
      bookBtn: "حجز طاولة",
      tagline: "المنطقة السياحية غيزن • جربة",
    },
  }[currentLang];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#1A1918] text-white text-xs py-2 px-4 text-center flex items-center justify-between z-50 relative">
        <div className="hidden md:flex items-center gap-2 text-gray-300">
          <MapPin className="w-3.5 h-3.5 text-[#C84B31]" />
          <span>Zone Touristique Ghizen (Entre Le Grand Bleu & Athenee), Houmt Souk Djerba</span>
        </div>
        <div className="mx-auto md:mx-0 flex items-center gap-2 text-amber-300 font-medium">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span>Ouvert 7j/7 • Service Continu 12h00 – 00h00</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-300">
          <a
            href="tel:+21623434328"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-mono"
          >
            <Phone className="w-3 h-3 text-[#C84B31]" />
            <span>+216 23 434 328</span>
          </a>
        </div>
      </div>

      {/* Main Light Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav-light py-3 shadow-md"
            : "bg-[#FAF7F2] py-4 border-b border-[#EAE5DD]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#C84B31] via-[#E05A47] to-[#B89737] p-0.5 shadow-md shadow-[#C84B31]/15 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🦩</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1918] group-hover:text-[#C84B31] transition-colors">
                Flamant Rose
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-[#B89737] font-semibold">
                {content.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#1A1918]/80">
            <a
              href="#story"
              className="hover:text-[#C84B31] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C84B31] hover:after:w-full after:transition-all"
            >
              {content.story}
            </a>
            <a
              href="#menu"
              className="hover:text-[#C84B31] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C84B31] hover:after:w-full after:transition-all"
            >
              {content.menu}
            </a>
            <a
              href="#gallery"
              className="hover:text-[#C84B31] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C84B31] hover:after:w-full after:transition-all"
            >
              {content.gallery}
            </a>
            <a
              href="#reviews"
              className="hover:text-[#C84B31] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C84B31] hover:after:w-full after:transition-all"
            >
              {content.reviews}
            </a>
            <a
              href="#location"
              className="hover:text-[#C84B31] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C84B31] hover:after:w-full after:transition-all"
            >
              {content.contact}
            </a>
          </nav>

          {/* Toggles & Reservation CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Selector */}
            <div className="bg-[#EAE5DD]/60 border border-[#EAE5DD] rounded-xl p-0.5 flex text-xs font-semibold">
              <button
                onClick={() => setCurrency("DT")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  currency === "DT"
                    ? "bg-[#1A1918] text-white shadow-sm font-bold"
                    : "text-[#6E6A64] hover:text-[#1A1918]"
                }`}
              >
                DT
              </button>
              <button
                onClick={() => setCurrency("EUR")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  currency === "EUR"
                    ? "bg-[#1A1918] text-white shadow-sm font-bold"
                    : "text-[#6E6A64] hover:text-[#1A1918]"
                }`}
              >
                €
              </button>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#EAE5DD] text-xs font-semibold text-[#1A1918] hover:border-[#C84B31] transition-colors shadow-xs">
                <Globe className="w-3.5 h-3.5 text-[#C84B31]" />
                <span className="uppercase">{currentLang}</span>
              </button>
              <div className="absolute right-0 top-full mt-1.5 hidden group-hover:block bg-white border border-[#EAE5DD] rounded-2xl p-1.5 shadow-xl min-w-[120px] z-50">
                <button
                  onClick={() => setLang("fr")}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors flex items-center justify-between ${
                    currentLang === "fr" ? "bg-[#FDF2F0] text-[#C84B31] font-bold" : "text-[#1A1918] hover:bg-[#FAF7F2]"
                  }`}
                >
                  Français <span>🇫🇷</span>
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors flex items-center justify-between ${
                    currentLang === "en" ? "bg-[#FDF2F0] text-[#C84B31] font-bold" : "text-[#1A1918] hover:bg-[#FAF7F2]"
                  }`}
                >
                  English <span>🇬🇧</span>
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors flex items-center justify-between ${
                    currentLang === "ar" ? "bg-[#FDF2F0] text-[#C84B31] font-bold" : "text-[#1A1918] hover:bg-[#FAF7F2]"
                  }`}
                >
                  العربية <span>🇹🇳</span>
                </button>
              </div>
            </div>

            {/* Reservation Button */}
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-xl bg-[#C84B31] hover:bg-[#B33E26] text-white font-bold text-sm shadow-md shadow-[#C84B31]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>{content.bookBtn}</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-xl bg-[#C84B31] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{content.bookBtn}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#EAE5DD] text-[#1A1918]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C84B31]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#EAE5DD] px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between border-b border-[#EAE5DD] pb-3">
              {/* Currency */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6E6A64]">Devise:</span>
                <div className="bg-[#FAF7F2] rounded-lg p-0.5 flex text-xs">
                  <button
                    onClick={() => setCurrency("DT")}
                    className={`px-2 py-0.5 rounded ${currency === "DT" ? "bg-[#1A1918] text-white font-bold" : "text-[#6E6A64]"}`}
                  >
                    DT
                  </button>
                  <button
                    onClick={() => setCurrency("EUR")}
                    className={`px-2 py-0.5 rounded ${currency === "EUR" ? "bg-[#1A1918] text-white font-bold" : "text-[#6E6A64]"}`}
                  >
                    €
                  </button>
                </div>
              </div>
              {/* Language */}
              <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-lg text-xs">
                <button
                  onClick={() => setLang("fr")}
                  className={`px-2 py-0.5 rounded ${currentLang === "fr" ? "bg-[#C84B31] text-white font-bold" : "text-[#6E6A64]"}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-0.5 rounded ${currentLang === "en" ? "bg-[#C84B31] text-white font-bold" : "text-[#6E6A64]"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`px-2 py-0.5 rounded ${currentLang === "ar" ? "bg-[#C84B31] text-white font-bold" : "text-[#6E6A64]"}`}
                >
                  AR
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-3 font-semibold text-[#1A1918]">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C84B31] py-1.5 transition-colors border-b border-[#EAE5DD]/50"
              >
                {content.story}
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C84B31] py-1.5 transition-colors border-b border-[#EAE5DD]/50"
              >
                {content.menu}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C84B31] py-1.5 transition-colors border-b border-[#EAE5DD]/50"
              >
                {content.gallery}
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C84B31] py-1.5 transition-colors border-b border-[#EAE5DD]/50"
              >
                {content.reviews}
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C84B31] py-1.5 transition-colors"
              >
                {content.contact}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
