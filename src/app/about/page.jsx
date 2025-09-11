'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ← add this

  return (
    <div className="min-h-screen bg-gray-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
