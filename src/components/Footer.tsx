"use client";

import React, { useState } from "react";
import { MapPin, Phone, CheckCircle2, ArrowRight, Heart } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className || "w-4 h-4"}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

interface FooterProps {
  currentLang: "fr" | "en" | "ar";
}

export default function Footer({ currentLang }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const facebookUrl = "https://www.facebook.com/profile.php?id=61553845032970";
  const mapsUrl =
    "https://www.google.com/maps/place/Restaurant+Flamant+Rose/@33.8723508,10.9329577,15z/data=!4m6!3m5!1s0x13aaa31dcf957913:0x4aaf4d3e41ebb7d9!8m2!3d33.8723508!4d10.9329577!16s%2Fg%2F11g8_2f_tw?entry=ttu";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const t = {
    fr: {
      about:
        "Le Restaurant Flamant Rose est votre destination gastronomique incontournable à Djerba. Poissons frais, spécialités djerbiennes et ambiance sunset.",
      quickLinks: "Navigation",
      contactTitle: "Adresse & Contact",
      newsletterTitle: "Club Privilège Flamant Rose",
      newsletterSub: "Recevez nos suggestions du chef et offres spéciales pour vos soirées à Djerba.",
      subscribeBtn: "S'inscrire",
      subscribedSuccess: "Merci ! Vous êtes inscrit au Club Privilège Flamant Rose.",
      rights: "Tous droits réservés. Gastronomie & Sunset Lounge Djerba.",
    },
    en: {
      about:
        "Restaurant Flamant Rose is your premier seafood & gastronomy venue in Djerba. Fresh daily catch, Tunisian specialties, and sunset terrace vibes.",
      quickLinks: "Navigation",
      contactTitle: "Address & Contact",
      newsletterTitle: "Flamant Rose VIP Club",
      newsletterSub: "Get chef's recommendations and exclusive offers for your stay in Djerba.",
      subscribeBtn: "Subscribe",
      subscribedSuccess: "Thank you! You are now subscribed to Flamant Rose VIP Club.",
      rights: "All rights reserved. Fine Dining & Sunset Lounge Djerba.",
    },
    ar: {
      about:
        "مطعم الفلامان روز هو وجهتكم المفضلة للمأكولات البحرية والطهي التونسي الفاخر في جربة. أسماك طازجة وأجواء ساحرة.",
      quickLinks: "روابط سريعة",
      contactTitle: "العنوان والاتصال",
      newsletterTitle: "نادي الفلامان روز المميز",
      newsletterSub: "احصل على اقتراحات الشيف والعروض الخاصة لأمسياتك في جربة.",
      subscribeBtn: "اشتراك",
      subscribedSuccess: "شكراً لك! تم الاشتراك بنجاح في نادي الفلامان روز.",
      rights: "جميع الحقوق محفوظة. مطعم وتراس الفلامان روز جربة.",
    },
  }[currentLang];

  return (
    <footer className="bg-[#1A1918] text-gray-300 text-sm relative pt-16 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C84B31] to-[#B89737] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#1A1918] rounded-full flex items-center justify-center text-xl">
                  🦩
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Flamant Rose
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-[#B89737]">
                  Zone Touristique Ghizen • Djerba
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-normal leading-relaxed">
              {t.about}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#C84B31] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#B89737] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#B89737]" />
              </a>
              <a
                href="tel:+21623434328"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C84B31] font-mono">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Carte & Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galerie Photos
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Avis Clients
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Accès & Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C84B31] font-mono">
              {t.contactTitle}
            </h4>
            <div className="space-y-2 text-xs font-normal">
              <p className="text-gray-300">Zone Touristique Ghizen, Houmt Souk 4180, Djerba</p>
              <p className="text-[#B89737] font-mono font-bold">+216 23 434 328</p>
              <p className="text-gray-400">Ouvert 7j/7 de 12h00 à 00h00</p>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89737] font-mono">
              {t.newsletterTitle}
            </h4>
            <p className="text-xs text-gray-400 font-normal">
              {t.newsletterSub}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="w-full bg-[#0A0D14] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C84B31]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-[#C84B31] hover:bg-[#B33E26] text-white font-bold text-xs"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{t.subscribedSuccess}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Restaurant Flamant Rose Djerba. {t.rights}</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Fait avec</span>
            <Heart className="w-3 h-3 text-[#C84B31] fill-[#C84B31] inline" />
            <span>pour Djerba, Tunisie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
