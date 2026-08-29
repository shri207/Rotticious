import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { SignatureFavorites } from './components/SignatureFavorites';
import { CafeExperience } from './components/CafeExperience';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem } from './types';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F2EC] relative selection:bg-[#F5F2EC] selection:text-[#0A0A0B]">
      {/* Sticky Header Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Layout */}
      <main>
        {/* Full-Screen Hero Section */}
        <Hero />

        {/* Split Screen Brand Story & Stats */}
        <BrandIntro />

        {/* Signature Favorites Section */}
        <SignatureFavorites
          onSelectMenuItem={(item) => setSelectedMenuItem(item)}
          onViewAllMenu={handleScrollToMenu}
        />

        {/* Wide Editorial Café Atmosphere Experience */}
        <CafeExperience />

        {/* Complete Menu Directory (Browsing only) */}
        <MenuSection
          onOpenReservation={handleOpenReservation}
          selectedItemModal={selectedMenuItem}
          setSelectedItemModal={setSelectedMenuItem}
        />

        {/* Asymmetrical Masonry Photo Gallery */}
        <GallerySection />

        {/* Verified Patron Reviews Section */}
        <ReviewsSection />

        {/* Location, Map & Opening Hours Section */}
        <LocationSection onOpenReservation={handleOpenReservation} />
      </main>

      {/* Dark Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Table Reservation Dialog Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </div>
  );
}
