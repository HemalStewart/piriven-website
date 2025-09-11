'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { FileText, Users, Folder } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('Introduction');

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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <main className="container mx-auto px-6 py-12 flex-grow flex flex-col md:flex-row gap-8">
        {/* Left Side Menu (for larger screens) */}
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-28">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Folder className="w-6 h-6 mr-2 text-red-800" />
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
        <div className="flex-grow">
          <div className="text-center md:text-left mb-12">
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{aboutSections[selectedDoc].title}</h1>
          </div>
          <div className="prose lg:prose-lg text-gray-700">
            <p>{aboutSections[selectedDoc].content}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;