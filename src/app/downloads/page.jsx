'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { MobileMenu } from '@/components/MobileMenu';

const DownloadsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ← state here

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Downloads</h1>
        <p className="text-lg text-gray-600">
          This section contains various documents, forms, and publications available for download.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadsPage;
