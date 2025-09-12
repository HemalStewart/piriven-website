'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

export const VideosSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);
  const videoPath = "/videos/video.mp4";
  const thumbnailPath = "/images/video-thumb.jpg";

  const openVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoOpen(false);
  };

  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay failed:", error);
      });
    }
  }, [isVideoOpen]);

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Videos</h2>
      <div className="space-y-6">
        {/* This is the clickable thumbnail */}
        <a onClick={openVideo} className="block relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img
            src={thumbnailPath}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 border-4 border-white/30">
              <Play className="text-black w-8 h-8 ml-1" />
            </div>
          </div>
        </a>
        
        {/* These elements are now separate */}
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
            <button onClick={closeVideo} className="absolute -top-10 right-0 p-2 text-white hover:text-white-800 transition-colors duration-200">
              <X className="w-8 h-8" />
            </button>
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              controls
              autoPlay
              className="rounded-xl shadow-2xl"
              poster={thumbnailPath}
            >
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};