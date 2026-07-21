"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Car, Wifi, Sunset, Flame } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className || "w-4 h-4"}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

interface LocationContactProps {
  currentLang: "fr" | "en" | "ar";
  onOpenBooking: () => void;
}

export default function LocationContactSection({ currentLang, onOpenBooking }: LocationContactProps) {
  const mapsUrl =
    "https://www.google.com/maps/place/Restaurant+Flamant+Rose/@33.8723508,10.9329577,15z/data=!4m6!3m5!1s0x13aaa31dcf957913:0x4aaf4d3e41ebb7d9!8m2!3d33.8723508!4d10.9329577!16s%2Fg%2F11g8_2f_tw?entry=ttu";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61553845032970";
  const phone = "+216 23 434 328";

  const t = {
    fr: {
      badge: "Localisation & Accès",
      title: "Nous Rendre Visite à Djerba",
      subtitle: "Idéalement situé dans la zone touristique de Ghizen, entre l'Hôtel Le Grand Bleu et l'Hôtel Athenee.",
      addressLabel: "Adresse:",
      addressValue: "Zone Touristique Ghizen, Houmt Souk 4180, Djerba, Tunisie",
      hoursLabel: "Horaires d'ouverture:",
      hoursValue: "Lundi – Dimanche: 12h00 – 00h00 (7j/7)",
      phoneLabel: "Téléphone & Réservations:",
      mapsBtn: "Google Maps",
      fbBtn: "Facebook",
      callBtn: "Appeler",
      waBtn: "WhatsApp",
      amenitiesTitle: "Services & Confort",
    },
    en: {
      badge: "Location & Contact",
      title: "Visit Us in Djerba",
      subtitle: "Conveniently located in Ghizen Tourist Zone, between Le Grand Bleu Hotel & Athenee Hotel.",
      addressLabel: "Address:",
      addressValue: "Ghizen Tourist Zone, Houmt Souk 4180, Djerba, Tunisia",
      hoursLabel: "Opening Hours:",
      hoursValue: "Monday – Sunday: 12:00 PM – 12:00 AM (7/7)",
      phoneLabel: "Phone & Reservations:",
      mapsBtn: "Google Maps",
      fbBtn: "Facebook",
      callBtn: "Call Us",
      waBtn: "WhatsApp",
      amenitiesTitle: "Amenities & Services",
    },
    ar: {
      badge: "الموقع والاتصال",
      title: "تفضلوا بزيارتنا في جربة",
      subtitle: "موقع مميز في المنطقة السياحية غيزن بحومة السوق، بين فندق لجران بلو وفندق أثيني.",
      addressLabel: "العنوان:",
      addressValue: "المنطقة السياحية غيزن، حومة السوق 4180، جربة، تونس",
      hoursLabel: "ساعات العمل:",
      hoursValue: "الإثنين – الأحد: 12:00 ظهراً – 12:00 ليلاً (7 أيام/7)",
      phoneLabel: "الهاتف والحجز:",
      mapsBtn: "خرائط جوجل",
      fbBtn: "فيسبوك",
      callBtn: "اتصل بنا",
      waBtn: "واتساب",
      amenitiesTitle: "الخدمات والمرافق",
    },
  }[currentLang];

  return (
    <section id="location" className="py-24 relative bg-white border-t border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#C84B31]/30 text-[#C84B31] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1918] font-serif mb-4">
            {t.title}
          </h2>
          <p className="text-[#6E6A64] text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#EAE5DD] space-y-6 shadow-xs">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FDF2F0] text-[#C84B31] border border-[#C84B31]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C84B31]">
                    {t.addressLabel}
                  </h4>
                  <p className="text-sm text-[#1A1918] font-medium mt-1 leading-snug">
                    {t.addressValue}
                  </p>
                  <p className="text-xs text-[#B89737] font-mono mt-1">
                    GPS: 33.8723508, 10.9329577
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF3E0] text-[#B89737] border border-[#B89737]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89737]">
                    {t.hoursLabel}
                  </h4>
                  <p className="text-sm text-[#1A1918] font-medium mt-1">
                    {t.hoursValue}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {t.phoneLabel}
                  </h4>
                  <a
                    href="tel:+21623434328"
                    className="text-base font-bold text-[#1A1918] hover:text-[#C84B31] font-mono mt-1 block transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-white border border-[#EAE5DD] hover:border-[#B89737] text-[#1A1918] font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#B89737]" />
                  <span>{t.mapsBtn}</span>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600" />
                  <span>{t.fbBtn}</span>
                </a>
                <a
                  href="tel:+21623434328"
                  className="py-3 px-4 rounded-xl bg-[#C84B31] hover:bg-[#B33E26] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#C84B31]/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.callBtn}</span>
                </a>
                <a
                  href="https://wa.me/21623434328"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.waBtn}</span>
                </a>
              </div>
            </div>

            {/* Amenities Badges */}
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EAE5DD] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C84B31]">
                {t.amenitiesTitle}
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-[#1A1918]">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DD] flex items-center gap-1.5 font-medium">
                  <Car className="w-3.5 h-3.5 text-[#B89737]" />
                  Parking Privé Gratuit
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DD] flex items-center gap-1.5 font-medium">
                  <Sunset className="w-3.5 h-3.5 text-[#C84B31]" />
                  Terrasse Sunset
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DD] flex items-center gap-1.5 font-medium">
                  <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                  Wi-Fi Haut Débit
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#EAE5DD] flex items-center gap-1.5 font-medium">
                  <Flame className="w-3.5 h-3.5 text-[#C84B31]" />
                  Espace Chicha Lounge
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-[#EAE5DD] shadow-xs relative min-h-[420px] flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.435!2d10.9329577!3d33.8723508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa31dcf957913%3A0x4aaf4d3e41ebb7d9!2sRestaurant%20Flamant%20Rose!5e0!3m2!1sfr!2stn!4v1700000000000!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-110 contrast-105"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
