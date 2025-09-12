'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { MobileMenu } from '@/components/MobileMenu';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BookOpen, Users, GraduationCap, Search } from 'lucide-react';

const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg"
];

const FullGallery = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState(null); 
    // 🆕 Add state for scroll-based animations
    const [sectionsVisible, setSectionsVisible] = useState({});

    // 🆕 Add the useEffect hook for IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSectionsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 animate-fade-in">
            <Header 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen} 
            />
            <MobileMenu mobileMenuOpen={mobileMenuOpen} />
            <MainNavigation />
      
            <main className="container mx-auto px-6 py-16">
                <section
                    id="gallery-header"
                    data-animate
                    className={`text-center mb-12 transition-all duration-1000 transform ${
                        sectionsVisible['gallery-header'] 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="block">Our Photo Gallery</span>
                    </h1>
                </section>

                <section
                    id="gallery-grid"
                    data-animate
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
                        sectionsVisible['gallery-grid'] 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    {galleryImages.map((image, index) => (
                        <div key={index} 
                             className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                             style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both'
                             }}
                             onClick={() => setFullScreenImage(image)} 
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>
                    ))}
                </section>

                <div className="text-center pt-10 animate-fade-in-up animation-delay-600">
                    <Link href="/">
                        <button className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl active:scale-95">
                            ← Back to Home
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />

            {fullScreenImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md"
                    onClick={() => setFullScreenImage(null)}
                >
                    <div className="relative max-w-7xl max-h-[90vh] overflow-hidden">
                        <img
                            src={fullScreenImage}
                            alt="Full screen view"
                            className="max-w-full max-h-[90vh] object-contain cursor-zoom-out"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-red-500 transition-colors"
                            onClick={() => setFullScreenImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* 🆕 Add the CSS animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slide-up {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }

                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-600 { animation-delay: 600ms; }
                .animation-delay-1000 { animation-delay: 1000ms; }
            `}</style>
        </div>
    );
};

export default FullGallery;