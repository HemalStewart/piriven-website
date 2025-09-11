'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export const VideosSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/your-video-id"; // Replace with your YouTube video ID

  const openVideo = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Videos</h2>
      <div className="space-y-6">
        <a href="#" onClick={openVideo} className="block relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img
            src="/images/gallery-7.jpg"
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

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-4xl h-auto aspect-video">
            <button onClick={closeVideo} className="absolute -top-10 right-0 p-2 text-white hover:text-red-500 transition-colors duration-200">
              <X className="w-8 h-8" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`${videoUrl}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-2xl"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};