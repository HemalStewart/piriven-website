'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Download, Mail } from 'lucide-react';

export const MainNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME', Icon: Home },
    { href: '/about', label: 'ABOUT US', Icon: Info },
    { href: '/downloads', label: 'DOWNLOADS', Icon: Download },
    { href: '/contact', label: 'CONTACT US', Icon: Mail },
  ];

  return (
    <nav className="bg-red-800 shadow-lg relative z-20">
      <div className="container mx-auto px-6">
        <ul className="hidden md:flex justify-center space-x-12">
          {navItems.map(({ href, label }) => {
            const active = pathname === href;

            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`flex items-center py-5 font-bold tracking-wider text-sm uppercase transition-colors duration-300 ${
                    active ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
                  }`}
                >
                  <span>{label}</span>
                </Link>

                {/* Elegant Underline with Yellow Accent */}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${
                    active
                      ? 'w-full bg-yellow-400'
                      : 'w-0 group-hover:w-full bg-yellow-400'
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};