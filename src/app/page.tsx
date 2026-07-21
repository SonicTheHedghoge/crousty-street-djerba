"use client";

import React, { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationContactSection from "@/components/LocationContactSection";
import FloatingActionBar from "@/components/FloatingActionBar";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en" | "ar">("fr");
  const [currency, setCurrency] = useState<"DT" | "EUR">("DT");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A1918] selection:bg-[#C84B31] selection:text-white relative">
      {/* Navigation Bar */}
      <HeaderNav
        currentLang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        currentLang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Story & Philosophy */}
      <StorySection currentLang={lang} />

      {/* Gourmet Menu */}
      <MenuSection
        currentLang={lang}
        currency={currency}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Visual Photo Gallery */}
      <GallerySection currentLang={lang} />

      {/* Customer Reviews */}
      <ReviewsSection currentLang={lang} />

      {/* Location, Maps & Contact */}
      <LocationContactSection
        currentLang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Footer */}
      <Footer currentLang={lang} />

      {/* Mobile Quick Action Bar */}
      <FloatingActionBar
        currentLang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Reservation Engine Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={lang}
      />
    </main>
  );
}
