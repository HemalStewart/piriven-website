'use client';

import React from 'react';
import { Home, Info, Download, Mail, Phone, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const MobileMenu = ({ mobileMenuOpen }) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME' }, // Removed Icon
    { href: '/about', label: 'ABOUT US' }, // Removed Icon
    { href: '/downloads', label: 'DOWNLOADS' }, // Removed Icon
    { href: '/contact', label: 'CONTACT US' }, // Removed Icon
  ];

  return (
    <div
      className={`fixed inset-0 top-16 z-40 md:hidden backdrop-blur-sm transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`bg-red-800 p-6 shadow-xl w-full h-full transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-2">
          {navItems.map(({ href, label }, index) => {
            const active = pathname === href;

            return (
              <li
                key={href}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
              >
                <Link
                  href={href}
                  className={`flex w-full items-center space-x-4 px-4 py-3 rounded-xl text-lg font-semibold transition-colors duration-300 ${
                    active
                      ? 'bg-red-900/50 text-yellow-300'
                      : 'text-white hover:bg-red-700/50 hover:text-yellow-300'
                  }`}
                >
                  {/* Icons are now removed from these links */}
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}

          {/* Separator */}
          <div className="h-px bg-red-700 my-4"></div>

          {/* Utility Links (these still have icons, as is the standard pattern) */}
          <li
            style={{ transitionDelay: `${navItems.length * 50}ms` }}
            className={`transform transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`}
          >
            <Link
              href="https://pdms.moe.gov.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center space-x-4 px-4 py-3 rounded-xl text-lg font-semibold transition-colors duration-300 bg-red-700/50 text-white hover:bg-red-600/50 hover:text-yellow-300"
            >
              <Phone className="w-6 h-6 text-white" />
              <span>PDMS</span>
            </Link>
          </li>

          {/* Language Switcher */}
          <li
            style={{ transitionDelay: `${(navItems.length + 1) * 50}ms` }}
            className={`transform transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="flex w-full items-center space-x-4 px-4 py-3 rounded-xl bg-red-700/50">
              <Globe className="w-6 h-6 text-white" />
              <div className="flex-1 flex justify-evenly">
                <button className="text-sm font-semibold text-white hover:text-yellow-300 transition-colors duration-300">
                  සිංහල
                </button>
                <div className="h-4 w-px bg-yellow-300"></div>
                <button className="text-sm font-semibold text-white hover:text-yellow-300 transition-colors duration-300">
                  English
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};