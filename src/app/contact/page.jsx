'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { MobileMenu } from '@/components/MobileMenu';
import Link from 'next/link';

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 🆕 Add state for scroll-based animations
  const [sectionsVisible, setSectionsVisible] = useState({});

  // 🆕 Add the useEffect hook for IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <main className="container mx-auto px-6 py-16">
        <section
          id="contact-header"
          data-animate
          className={`transition-all duration-1000 transform ${
            sectionsVisible['contact-header'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-slide-up">Contact Us</h1>
          <p className="text-lg text-gray-600 animate-slide-up animation-delay-200">
            This is the Contact Us page. Here you can find our contact details, location, and a contact form.
          </p>
        </section>
      </main>
      <Footer />
      {/* 🆕 Add the CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
};

export default ContactPage;