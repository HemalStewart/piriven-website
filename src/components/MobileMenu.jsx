'use client';

import React from 'react';
import { Home, Info, Download, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
      className={`md:hidden bg-white shadow-lg transform transition-all duration-500 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <ul className="flex flex-col items-center space-y-4 py-6">
        {navItems.map(({ href, label, Icon }, index) => {
          const active = pathname === href;

          return (
            <li
              key={href}
              className={`opacity-0 transform translate-y-3 transition-all duration-500 ${
                mobileMenuOpen
                  ? `opacity-100 translate-y-0 delay-[${index * 100}ms]`
                  : ''
              }`}
            >
              <Link
                href={href}
                className={`flex items-center space-x-2 font-medium text-base transition-all duration-300 ${
                  active
                    ? 'text-red-800 border-b-2 border-red-600 pb-1'
                    : 'text-gray-700 hover:text-red-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
