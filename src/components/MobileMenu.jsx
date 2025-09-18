'use client';

import React from 'react';
import { Home, Info, Download, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, Globe } from 'lucide-react';

export const MobileMenu = ({ mobileMenuOpen }) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME', Icon: Home },
    { href: '/about', label: 'ABOUT US', Icon: Info },
    { href: '/downloads', label: 'DOWNLOADS', Icon: Download },
    { href: '/contact', label: 'CONTACT US', Icon: Mail },
  ];

  return (
    <div
      className={`md:hidden bg-red-900 shadow-lg transform transition-all duration-500 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <ul className="flex flex-col space-y-2 p-4">
        {navItems.map(({ href, label, Icon }, index) => {
          const active = pathname === href;

          return (
            <li
              key={href}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transform transition-all duration-300 ${
                mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <Link
                href={href}
                className={`flex w-full items-center space-x-3 px-4 py-3 rounded-lg font-semibold tracking-wider uppercase text-sm transition-colors duration-300 ${
                  active
                    ? 'bg-red-700/50 text-yellow-300'
                    : 'text-white hover:bg-red-700/50 hover:text-yellow-300'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    active ? 'scale-110' : ''
                  }`}
                />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}

        {/* Divider before PDMS */}
        <li
          style={{ transitionDelay: `${navItems.length * 100}ms` }}
          className={`transform transition-all duration-300 ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="h-px bg-white/20"></div>
        </li>

        {/* PDMS Link - Now with same hover effect as others */}
        <li
          style={{ transitionDelay: `${(navItems.length + 1) * 100}ms` }}
          className={`transform transition-all duration-300 ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <a
            href="https://pdms.moe.gov.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center space-x-3 px-4 py-3 rounded-lg font-semibold tracking-wider uppercase text-sm transition-colors duration-300 text-white hover:bg-red-700/50 hover:text-yellow-300"
          >
            <Phone className="w-5 h-5" />
            <span>PDMS</span>
          </a>
        </li>

        {/* Divider between PDMS and Language Switcher */}
        <li
          style={{ transitionDelay: `${(navItems.length + 2) * 100}ms` }}
          className={`transform transition-all duration-300 ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="h-px bg-white/20"></div>
        </li>

        {/* Language Switcher */}
        <li
          style={{ transitionDelay: `${(navItems.length + 3) * 100}ms` }}
          className={`transform transition-all duration-300 ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex w-full items-center space-x-3 px-4 py-3 rounded-lg bg-red-700/50 transition-colors duration-300">
            <Globe className="w-5 h-5 text-white" />
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
  );
};