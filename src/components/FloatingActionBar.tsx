"use client";

import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";

interface FloatingBarProps {
  currentLang: "fr" | "en" | "ar";
  onOpenBooking: () => void;
}

export default function FloatingActionBar({ currentLang, onOpenBooking }: FloatingBarProps) {
  const t = {
    fr: { call: "Appeler", wa: "WhatsApp", book: "Réserver Table" },
    en: { call: "Call Us", wa: "WhatsApp", book: "Book Table" },
    ar: { call: "اتصل الآن", wa: "واتساب", book: "احجز طاولة" },
  }[currentLang];

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:hidden z-40">
      <div className="glass-panel p-2 rounded-2xl border-rose-500/40 shadow-2xl shadow-rose-950/60 flex items-center justify-between gap-2 backdrop-blur-xl">
        <a
          href="tel:+21623434328"
          className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-rose-400" />
          <span>{t.call}</span>
        </a>
        <a
          href="https://wa.me/21623434328"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>{t.wa}</span>
        </a>
        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/30 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-amber-200" />
          <span>{t.book}</span>
        </button>
      </div>
    </div>
  );
}
