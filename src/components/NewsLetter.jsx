import React from 'react';

export const NewsletterSection = () => (
  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Subscribe</h3>
      <h4 className="text-2xl font-semibold opacity-90">Our Newsletter</h4>
      <p className="text-blue-100">Stay updated with the latest news and announcements from our ministry.</p>
      <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
        Subscribe Now
      </button>
    </div>
  </div>
);
