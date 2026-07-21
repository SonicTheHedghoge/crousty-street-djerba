"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, Phone, MessageCircle } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: "fr" | "en" | "ar";
}

export default function ReservationModal({ isOpen, onClose, currentLang }: ReservationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState<string>("2026-07-22");
  const [time, setTime] = useState<string>("20:30");
  const [guests, setGuests] = useState<number>(2);
  const [seating, setSeating] = useState<string>("sunset");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [ticketRef, setTicketRef] = useState<string>("");

  if (!isOpen) return null;

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "FLAMANT-" + Math.floor(1000 + Math.random() * 9000);
    setTicketRef(randomRef);
    setConfirmed(true);
  };

  const t = {
    fr: {
      title: "Réservation de Table",
      subtitle: "Restaurant Flamant Rose • Zone Touristique Ghizen Djerba",
      step1: "1. Date & Horaires",
      step2: "2. Emplacement & Invités",
      step3: "3. Informations de Contact",
      guestsLabel: "Nombre de Couverts:",
      seatingLabel: "Ambiance Souhaitée:",
      seatingSunset: "Terrasse Sunset (Extérieur)",
      seatingLounge: "Lounge Palmier VIP (Intérieur)",
      seatingIndoor: "Salle Climatisée",
      nameLabel: "Nom & Prénom",
      phoneLabel: "Numéro de Téléphone / WhatsApp",
      notesLabel: "Demandes Particulières / Occasion (Anniversaire, Pêche du jour...)",
      submitBtn: "Confirmer la Réservation",
      successTitle: "Réservation Confirmée !",
      successDesc: "Votre table au Restaurant Flamant Rose Djerba est réservée avec succès.",
      refLabel: "Code de Réservation:",
      callText: "En cas de retard, veuillez nous contacter au +216 23 434 328.",
      closeBtn: "Fermer & Imprimer Ticket",
    },
    en: {
      title: "Table Booking",
      subtitle: "Restaurant Flamant Rose • Ghizen Tourist Zone Djerba",
      step1: "1. Date & Time",
      step2: "2. Seating & Guests",
      step3: "3. Contact Info",
      guestsLabel: "Number of Guests:",
      seatingLabel: "Seating Preference:",
      seatingSunset: "Sunset Terrace (Outdoor)",
      seatingLounge: "VIP Palm Lounge",
      seatingIndoor: "Air-Conditioned Hall",
      nameLabel: "Full Name",
      phoneLabel: "Phone Number / WhatsApp",
      notesLabel: "Special Requests (Birthday, Seafood catch preference...)",
      submitBtn: "Confirm Table Reservation",
      successTitle: "Reservation Confirmed!",
      successDesc: "Your table at Restaurant Flamant Rose Djerba has been successfully reserved.",
      refLabel: "Booking Reference:",
      callText: "For any delay, please call us at +216 23 434 328.",
      closeBtn: "Close & View Ticket",
    },
    ar: {
      title: "حجز طاولة",
      subtitle: "مطعم الفلامان روز • المنطقة السياحية غيزن جربة",
      step1: "1. التاريخ والوقت",
      step2: "2. المكان وعدد الأشخاص",
      step3: "3. البيانات الشخصية",
      guestsLabel: "عدد الضيوف:",
      seatingLabel: "المكان المفضل:",
      seatingSunset: "تراس الغروب (في الهواء الطلق)",
      seatingLounge: "صالة النخيل VIP",
      seatingIndoor: "الصالة المكيفة",
      nameLabel: "الاسم واللقب",
      phoneLabel: "رقم الهاتف / واتساب",
      notesLabel: "ملاحظات خاصة (عيد ميلاد، طلب أسماك معينة...)",
      submitBtn: "تأكيد الحجز الآن",
      successTitle: "تم تأكيد الحجز بنجاح!",
      successDesc: "طاولتك في مطعم الفلامان روز جربة محجوزة بنجاح.",
      refLabel: "رمز الحجز:",
      callText: "في حالة التأخير يرجى الاتصال بنا على +216 23 434 328.",
      closeBtn: "إغلاق والتأكيد",
    },
  }[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#121722] border border-rose-500/30 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
              <span>🦩</span>
              <span>{t.title}</span>
            </h3>
            <p className="text-xs text-rose-300 font-light">{t.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          /* Confirmation Ticket View */
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-bold font-serif text-white">{t.successTitle}</h4>
              <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">{t.successDesc}</p>
            </div>

            {/* Ticket Card */}
            <div className="glass-panel-gold rounded-2xl p-5 border-amber-500/40 text-left space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-2 text-xs">
                <span className="text-gray-400">{t.refLabel}</span>
                <span className="text-amber-400 font-bold text-base tracking-widest">{ticketRef}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-200">
                <div>
                  <span className="text-gray-400 block text-[10px]">Client:</span>
                  <span className="font-bold text-white">{name || "Invité Djerba"}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Téléphone:</span>
                  <span className="font-bold text-white">{phone || "+216 -- --- ---"}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Date & Heure:</span>
                  <span className="font-bold text-amber-300">{date} à {time}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Couverts:</span>
                  <span className="font-bold text-amber-300">{guests} Personne(s)</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 italic">{t.callText}</p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/21623434328?text=Bonjour,%20je%20souhaite%20confirmer%20ma%20réservation%20ref%20${ticketRef}%20pour%20${guests}%20personnes%20le%20${date}%20à%20${time}.`}
                target="_blank"
                rel="noreferrer"
                className="w-1/2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
              <button
                onClick={onClose}
                className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold text-xs"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleComplete} className="space-y-5">
            {/* Step Selector */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-gray-400 border-b border-white/5 pb-3">
              <span className={step >= 1 ? "text-rose-400 font-bold" : ""}>{t.step1}</span>
              <span className={step >= 2 ? "text-rose-400 font-bold" : ""}>{t.step2}</span>
              <span className={step >= 3 ? "text-rose-400 font-bold" : ""}>{t.step3}</span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    {t.guestsLabel}
                  </label>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`w-10 h-10 rounded-xl font-bold text-xs shrink-0 transition-all ${
                          guests === num
                            ? "bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-105"
                            : "bg-white/5 text-gray-300 border border-white/10 hover:border-rose-500/40"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Date de votre venue:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-rose-900/40 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>

                {/* Time slots */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Heure du Service:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["12:30", "13:30", "14:30", "19:30", "20:30", "21:30", "22:30"].map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          time === slot
                            ? "bg-amber-500 text-black shadow-md shadow-amber-500/30"
                            : "bg-white/5 text-gray-300 border border-white/10 hover:border-amber-500/40"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all mt-4"
                >
                  Suivant : Choisir l'Emplacement →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    {t.seatingLabel}
                  </label>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSeating("sunset")}
                      className={`w-full p-3.5 rounded-2xl text-left text-xs font-medium border flex items-center justify-between transition-all ${
                        seating === "sunset"
                          ? "bg-rose-500/20 border-rose-500 text-white"
                          : "bg-white/5 border-white/10 text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌅</span>
                        <div>
                          <p className="font-bold text-white">{t.seatingSunset}</p>
                          <p className="text-[10px] text-gray-400">Vue dégagée, brise marine et loupiotes romantiques</p>
                        </div>
                      </div>
                      {seating === "sunset" && <CheckCircle2 className="w-5 h-5 text-rose-400" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeating("lounge")}
                      className={`w-full p-3.5 rounded-2xl text-left text-xs font-medium border flex items-center justify-between transition-all ${
                        seating === "lounge"
                          ? "bg-rose-500/20 border-rose-500 text-white"
                          : "bg-white/5 border-white/10 text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌴</span>
                        <div>
                          <p className="font-bold text-white">{t.seatingLounge}</p>
                          <p className="text-[10px] text-gray-400">Banquettes moelleuses, lumière tamisée & chicha</p>
                        </div>
                      </div>
                      {seating === "lounge" && <CheckCircle2 className="w-5 h-5 text-rose-400" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeating("indoor")}
                      className={`w-full p-3.5 rounded-2xl text-left text-xs font-medium border flex items-center justify-between transition-all ${
                        seating === "indoor"
                          ? "bg-rose-500/20 border-rose-500 text-white"
                          : "bg-white/5 border-white/10 text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🏛️</span>
                        <div>
                          <p className="font-bold text-white">{t.seatingIndoor}</p>
                          <p className="text-[10px] text-gray-400">Espace intérieur climatisé & calme</p>
                        </div>
                      </div>
                      {seating === "indoor" && <CheckCircle2 className="w-5 h-5 text-rose-400" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 rounded-xl bg-white/5 text-gray-300 font-bold text-xs"
                  >
                    ← Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Suivant : Vos Coordonnées →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ex. Mohamed Ben Ali"
                    className="w-full bg-[#0A0D14] border border-rose-900/40 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {t.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+216 20 000 000"
                    className="w-full bg-[#0A0D14] border border-rose-900/40 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="ex. Table en bord de terrasse, fête d'anniversaire..."
                    className="w-full bg-[#0A0D14] border border-rose-900/40 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3 rounded-xl bg-white/5 text-gray-300 font-bold text-xs"
                  >
                    ← Retour
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30"
                  >
                    {t.submitBtn}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
