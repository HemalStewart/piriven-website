'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Globe } from 'lucide-react';

export const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4">
        {/* ✅ Mobile Layout */}
        <div className="flex items-center justify-between md:hidden">
          {/* Left - Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-red-500 transition-colors duration-300 active:scale-95"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 transition-all duration-300 transform absolute ${
                  mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X
                className={`w-6 h-6 transition-all duration-300 transform absolute inset-0 ${
                  mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                }`}
              />
            </div>
          </button>

          {/* Center - Logo */}
          <div className="flex justify-center flex-1">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Ministry Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Right - Mobile Search */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-red-500 transition-colors duration-300 active:scale-95"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        
        {/* Mobile Search Input */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
            isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-800 border-gray-300 border rounded-lg text-sm focus:outline-none focus:border-red-500"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* ✅ Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Ministry Logo"
                className="h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Center - PDMS Title */}
          <div className="flex-1 px-8 text-center">
            <Link
              href="https://pdms.moe.gov.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-gray-800 hover:text-red-800 transition-colors duration-300"
            >
              PDMS
            </Link>
          </div>

          {/* Right - Language + Search */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center space-x-3 text-gray-600 font-medium">
              <Globe className="w-4 h-4 text-gray-500" />
              <button className="text-sm hover:text-red-500 transition-colors duration-200">
                සිංහල
              </button>
              <span className="text-gray-400">|</span>
              <button className="text-sm hover:text-red-500 transition-colors duration-200">
                English
              </button>
            </div>

            {/* Collapsible Search */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
                className={`border-b text-gray-800 border-gray-300 py-1 transition-all duration-300 text-sm focus:outline-none focus:border-red-500 ${
                  isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
                }`}
              />
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1 rounded-full text-gray-700 hover:text-red-500 transition-colors duration-300 active:scale-95"
              >
                <Search className="w-5 h-5" />
              </button>
              {isSearchOpen && searchValue && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-fade-in-down">
                  <div className="p-3">
                    <p className="text-gray-500 text-xs mb-2">Search suggestions</p>
                    <Link href={`/search?q=${searchValue}-pirivenas`}>
                      <div className="flex items-center space-x-2 p-2 hover:bg-red-50 rounded-lg cursor-pointer transition-colors duration-200">
                        <Search className="w-4 h-4 text-red-400" />
                        <span className="text-gray-700 text-sm">
                          {searchValue} - Pirivenas
                        </span>
                      </div>
                    </Link>
                    <Link href={`/search?q=${searchValue}-education`}>
                      <div className="flex items-center space-x-2 p-2 hover:bg-red-50 rounded-lg cursor-pointer transition-colors duration-200">
                        <Search className="w-4 h-4 text-red-400" />
                        <span className="text-gray-700 text-sm">
                          {searchValue} - Education
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};