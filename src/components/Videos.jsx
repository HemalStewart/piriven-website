import React from 'react';
import { Play } from 'lucide-react';

export const VideosSection = () => (
  <div>
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Videos</h2>
    <div className="space-y-6">
      <a href="#" className="block relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" 
          alt="Video Thumbnail" 
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 border-4 border-white/30">
            <Play className="text-white w-8 h-8 ml-1" />
          </div>
        </div>
      </a>
      <h3 className="font-semibold text-gray-700 text-lg leading-relaxed">
        Basic Piriven Final Exam Candidate Student Attitude Skills Program - 2023
      </h3>
      <div className="text-center">
        <button className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Browse More
        </button>
      </div>
    </div>
  </div>
);
