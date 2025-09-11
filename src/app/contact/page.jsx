'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { MobileMenu } from '@/components/MobileMenu';

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ← state lifted

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600">
          This is the Contact Us page. Here you can find our contact details, location, and a contact form.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
