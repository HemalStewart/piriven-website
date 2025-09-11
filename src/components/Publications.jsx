import React from 'react';

export const PublicationsSection = () => (
  <div>
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Latest Publications</h2>
    <div className="flex space-x-6">
      <a href="#" className="block w-1/2 h-96 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
        <img 
          src="/images/publications1.jpg" 
          alt="Publication 1" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      <a href="#" className="block w-1/2 h-96 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
        <img 
          src="/images/publications2.jpg" 
          alt="Publication 2" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  </div>
);