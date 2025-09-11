// components/footer.jsx
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 className="font-bold text-xl mb-6 text-yellow-400">About Us</h4>
          <p className="text-gray-300 leading-relaxed">
            The State Ministry is dedicated to the development and administration of Dhamma Schools, Piriven, and Bhikku Education in Sri Lanka.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-yellow-400">Quick Links</h4>
          <ul className="space-y-3">
            {['Ministry of Education', 'Department of Examinations', 'NIE', 'UGC'].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-yellow-400">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Isurupaya, Battaramulla, Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">info@moe.gov.lk</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">+94 112 785 141</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-yellow-400">Location</h4>
          <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=200&fit=crop" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              alt="Map Location"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-400">
          © 2025 State Ministry of Dhamma School, Piriven & Bhikku Education. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);