'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider = ({ mainSlides, currentSlide, setCurrentSlide }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Create a ref to store the interval ID
  const intervalRef = useRef(null);

  // Mouse tracking for subtle parallax effect
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  // Auto-advance slides with proper cleanup using a ref
  useEffect(() => {
    // Clear any existing interval to prevent multiple timers
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % mainSlides.length);
    }, 10000); // 10-second interval

    // This is the cleanup function that clears the timer when the component unmounts or re-renders
    return () => clearInterval(intervalRef.current);
  }, [mainSlides.length, setCurrentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === mainSlides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? mainSlides.length - 1 : currentSlide - 1);
  };

  return (
    <section
      className="relative h-[600px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Slide Content */}
      {mainSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        const parallaxX = (mousePosition.x - 0.5) * 10;
        const parallaxY = (mousePosition.y - 0.5) * 10;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Parallax & Overlay */}
            <div
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                transform: isActive
                  ? `translate(${parallaxX}px, ${parallaxY}px) scale(1.05)`
                  : 'scale(1.05)',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.5) contrast(1.1)',
                }}
              />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/60 to-transparent">
              <div className="container mx-auto px-6">
                <div
                  className="max-w-4xl text-white"
                >

                  {/* Title */}
                  <div className="overflow-hidden mb-4">
                    <h1
                      className={`text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg transition-transform duration-1000 ease-in-out ${
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '300ms' }}
                    >
                      {slide.title}
                    </h1>
                  </div>

                  {/* Subtitle */}
                  <div className="overflow-hidden mb-8">
                    <p
                      className={`text-lg md:text-2xl text-gray-200 leading-relaxed transition-transform duration-1000 ease-in-out ${
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }`}
                      style={{ transitionDelay: '500ms' }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 bottom-8 flex justify-between px-6 z-20 md:px-12">
        <button
          onClick={prevSlide}
          className="group bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-colors duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="group bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-colors duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Modern Slide Counter & Dot Navigation */}
      <div
        className="absolute bottom-12 right-1/2 transform translate-x-1/2 flex items-center space-x-2 z-20"
      >
        <div className="text-white/80 font-semibold text-sm mr-4">
          <span className="text-xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(mainSlides.length).padStart(2, '0')}
        </div>

        {mainSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-90 ${
              index === currentSlide
                ? 'w-6 h-1 bg-white rounded-full'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70 rounded-full'
            }`}
          />
        ))}
      </div>
    </section>
  );
};