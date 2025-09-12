'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { FileText, Users, Folder } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('Introduction');
  // 🆕 Add state for scroll-based animations
  const [sectionsVisible, setSectionsVisible] = useState({});

  const aboutSections = {
    'Introduction': {
      title: 'Introduction',
      content: 'This is the introduction section about the ministry.'
    },
    'Hon. Minister of Education, Higher Education and Vocational Education': {
      title: 'Hon. Minister',
      content: 'Information about the Minister...'
    },
    'Hon. Deputy Minister (Education and Higher Education)': {
      title: 'Hon. Deputy Minister (Education)',
      content: 'Information about the Deputy Minister...'
    },
    'Hon. Deputy Minister (Vocational Education)': {
      title: 'Hon. Deputy Minister (Vocational Education)',
      content: 'Information about the Deputy Minister...'
    },
    'Secretary': {
      title: 'Secretary',
      content: 'Information about the Secretary...'
    },
    'Affiliated Institutions': {
      title: 'Affiliated Institutions',
      content: 'Details about affiliated institutions...'
    },
  };

  const menuItems = Object.keys(aboutSections);

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
  }, [selectedDoc]); // Rerun effect when selectedDoc changes to animate new content

  return (
    <div className="min-h-screen bg-white flex flex-col animate-fade-in">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <main className="container mx-auto px-6 py-12 flex-grow flex flex-col md:flex-row gap-8">
        {/* Left Side Menu (for larger screens) */}
        <div 
          id="about-menu"
          data-animate
          className={`md:w-64 flex-shrink-0 transition-all duration-1000 transform ${
            sectionsVisible['about-menu'] 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-10 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-28">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              Ministry Overview
            </h2>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedDoc(item)}
                  className={`relative flex items-center justify-start w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform ${
                    selectedDoc === item
                      ? 'text-red-800 font-extrabold scale-105'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex-grow text-left">{item}</span>
                  {selectedDoc === item && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-red-800 w-full animate-underline-grow"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div 
          id="about-content"
          data-animate
          className={`flex-grow transition-all duration-1000 transform ${
            sectionsVisible['about-content'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">{aboutSections[selectedDoc].title}</h1>
          </div>
          <div className="prose lg:prose-lg text-gray-700 animate-slide-up animation-delay-200">
            <p>{aboutSections[selectedDoc].content}</p>
          </div>
        </div>
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

        @keyframes slide-left {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from { 
            opacity: 0;
            transform: translateX(30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes underline-grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-underline-grow {
            animation: underline-grow 0.3s ease-in-out forwards;
        }

        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default AboutPage;