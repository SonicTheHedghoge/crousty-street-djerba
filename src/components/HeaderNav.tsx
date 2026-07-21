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
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-rose-950 via-[#130E19] to-amber-950 text-xs py-1.5 px-4 text-center border-b border-rose-900/30 flex items-center justify-between z-50 relative">
        <div className="hidden md:flex items-center gap-2 text-rose-300/80">
          <MapPin className="w-3.5 h-3.5 text-rose-400" />
          <span>Zone Touristique Ghizen (Entre Le Grand Bleu & Athenee), Houmt Souk Djerba</span>
        </div>
        <div className="mx-auto md:mx-0 flex items-center gap-2 text-amber-300 font-medium">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span>Ouvert 7j/7 • Service Continu 12h00 – 00h00</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-rose-200">
          <a
            href="tel:+21623434328"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-rose-400" />
            <span>+216 23 434 328</span>
          </a>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-2xl shadow-rose-950/20"
            : "bg-[#0A0D14]/90 py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 p-0.5 shadow-lg shadow-rose-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0A0D14] rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🦩</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-rose-300 transition-colors">
                Flamant Rose
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-amber-400/90 font-medium">
                {content.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
            <a
              href="#story"
              className="hover:text-rose-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
            >
              {content.story}
            </a>
            <a
              href="#menu"
              className="hover:text-rose-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
            >
              {content.menu}
            </a>
            <a
              href="#gallery"
              className="hover:text-rose-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
            >
              {content.gallery}
            </a>
            <a
              href="#reviews"
              className="hover:text-rose-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
            >
              {content.reviews}
            </a>
            <a
              href="#location"
              className="hover:text-rose-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
            >
              {content.contact}
            </a>
          </nav>

          {/* Toggles & Booking Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Selector */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-0.5 flex text-xs font-semibold">
              <button
                onClick={() => setCurrency("DT")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currency === "DT"
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                DT
              </button>
              <button
                onClick={() => setCurrency("EUR")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currency === "EUR"
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                €
              </button>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                <Globe className="w-3.5 h-3.5 text-rose-400" />
                <span className="uppercase">{currentLang}</span>
              </button>
              <div className="absolute right-0 top-full mt-1 hidden group-hover:block bg-[#121722] border border-rose-900/40 rounded-xl p-1.5 shadow-xl min-w-[110px] backdrop-blur-xl z-50">
                <button
                  onClick={() => setLang("fr")}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center justify-between ${
                    currentLang === "fr" ? "bg-rose-500/20 text-rose-300 font-bold" : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  Français <span>🇫🇷</span>
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center justify-between ${
                    currentLang === "en" ? "bg-rose-500/20 text-rose-300 font-bold" : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  English <span>🇬🇧</span>
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center justify-between ${
                    currentLang === "ar" ? "bg-rose-500/20 text-rose-300 font-bold" : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  العربية <span>🇹🇳</span>
                </button>
              </div>
            </div>

            {/* Reservation Button */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 p-[1px] shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition-all hover:scale-105 active:scale-95"
            >
              <div className="px-5 py-2 rounded-[11px] bg-[#0A0D14] group-hover:bg-transparent transition-colors flex items-center gap-2 text-sm font-semibold text-white">
                <Calendar className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
                <span>{content.bookBtn}</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-rose-500/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{content.bookBtn}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D111A] border-b border-rose-900/30 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              {/* Currency */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Devise:</span>
                <div className="bg-white/5 rounded-lg p-0.5 flex text-xs">
                  <button
                    onClick={() => setCurrency("DT")}
                    className={`px-2 py-0.5 rounded ${currency === "DT" ? "bg-rose-500 text-white font-bold" : "text-gray-400"}`}
                  >
                    DT
                  </button>
                  <button
                    onClick={() => setCurrency("EUR")}
                    className={`px-2 py-0.5 rounded ${currency === "EUR" ? "bg-rose-500 text-white font-bold" : "text-gray-400"}`}
                  >
                    €
                  </button>
                </div>
              </div>
              {/* Language */}
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg text-xs">
                <button
                  onClick={() => setLang("fr")}
                  className={`px-2 py-0.5 rounded ${currentLang === "fr" ? "bg-rose-500 text-white font-bold" : "text-gray-400"}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-0.5 rounded ${currentLang === "en" ? "bg-rose-500 text-white font-bold" : "text-gray-400"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`px-2 py-0.5 rounded ${currentLang === "ar" ? "bg-rose-500 text-white font-bold" : "text-gray-400"}`}
                >
                  AR
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-3 font-medium text-gray-200">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-400 py-1.5 transition-colors border-b border-white/5"
              >
                {content.story}
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-400 py-1.5 transition-colors border-b border-white/5"
              >
                {content.menu}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-400 py-1.5 transition-colors border-b border-white/5"
              >
                {content.gallery}
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-400 py-1.5 transition-colors border-b border-white/5"
              >
                {content.reviews}
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-400 py-1.5 transition-colors"
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
