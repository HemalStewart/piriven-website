// components/heroSlider.jsx
import React, { useEffect, useState } from 'react';

export const HeroSlider = ({ mainSlides, currentSlide, setCurrentSlide }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden bg-gray-900">
      {mainSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPrev = index < currentSlide;
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              isActive 
                ? 'opacity-100 translate-x-0 scale-100' 
                : isPrev
                  ? 'opacity-0 -translate-x-full scale-95' 
                  : 'opacity-0 translate-x-full scale-95'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
              zIndex: isActive ? 10 : 1
            }}
          >
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
                  isActive ? 'scale-100' : 'scale-110'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                  filter: isActive ? 'brightness(0.8)' : 'brightness(0.6)'
                }}
              />
            </div>
            
            {/* Enhanced Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent transition-opacity duration-1000 ${
              isActive ? 'opacity-100' : 'opacity-70'
            }`}></div>
            
            {/* Animated Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl text-white">
                  
                  {/* Title Animation */}
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight overflow-hidden">
                    <span 
                      className={`inline-block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ease-out ${
                        isActive 
                          ? 'transform translate-y-0 opacity-100' 
                          : 'transform translate-y-16 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isActive ? '300ms' : '0ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {slide.title}
                    </span>
                  </h1>
                  
                  {/* Subtitle Animation */}
                  <div className="overflow-hidden mb-8">
                    <p 
                      className={`text-xl md:text-2xl text-gray-200 leading-relaxed transition-all duration-1000 ease-out ${
                        isActive 
                          ? 'transform translate-y-0 opacity-100' 
                          : 'transform translate-y-12 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isActive ? '500ms' : '0ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  {/* Interactive Button */}
                  <div className="overflow-hidden">
                    <button 
                      className={`group relative bg-red-800 hover:bg-red-900 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 ease-out transform focus:outline-none focus:ring-4 focus:ring-red-500/30 hover:shadow-2xl hover:shadow-red-900/30 active:scale-95 ${
                        isActive 
                          ? 'translate-y-0 opacity-100 hover:scale-100' 
                          : 'translate-y-10 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isActive ? '700ms' : '0ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onClick={() => console.log('Button clicked!')}
                    >
                      {/* Button Background Effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      
                      {/* Button Text with Arrow */}
                      <span className="relative flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        Discover More
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      
                      {/* Ripple Effect */}
                      <span className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 bg-white transition-opacity duration-200"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Enhanced Dot Navigation */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
        style={{ zIndex: 20 }}
      >
        {mainSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-2 h-2 rounded-full transition-all duration-400 ease-out transform focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-90 ${
              index === currentSlide 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white/40 hover:bg-white/70 hover:scale-105'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Active dot pulse effect */}
            {index === currentSlide && (
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30"></span>
            )}
            
            {/* Hover ripple effect */}
            <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 scale-150"></span>
          </button>
        ))}
      </div>
      
      {/* Side Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? mainSlides.length - 1 : currentSlide - 1)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
        style={{ zIndex: 20 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide(currentSlide === mainSlides.length - 1 ? 0 : currentSlide + 1)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
        style={{ zIndex: 20 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};