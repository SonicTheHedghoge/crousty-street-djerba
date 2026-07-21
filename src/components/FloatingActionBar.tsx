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
      <div className="bg-white/95 border border-[#EAE5DD] p-2 rounded-2xl shadow-xl shadow-black/10 flex items-center justify-between gap-2 backdrop-blur-xl">
        <a
          href="tel:+21623434328"
          className="flex-1 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE5DD] text-[#1A1918] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#C84B31]" />
          <span>{t.call}</span>
        </a>
        <a
          href="https://wa.me/21623434328"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>{t.wa}</span>
        </a>
        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 rounded-xl bg-[#C84B31] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#C84B31]/20 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-amber-200" />
          <span>{t.book}</span>
        </button>
      </div>
    </div>
  );
}
