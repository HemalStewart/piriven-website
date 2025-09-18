'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { ChevronLeft, ChevronRight, BookOpen, Users, GraduationCap, Search } from 'lucide-react';
import { Header } from './Header';
import { MobileMenu } from './MobileMenu';
import { HeroSlider } from './HeroSlider';
import { MainNavigation } from './MainNavigation';
import { StatCard } from './StatCard';
import { NewsCard } from './NewsCard';
import { GallerySlider } from './GallerySlider';
import { NoticeCard } from './NoticeCard';
import { RightSideLink } from './RightSideLink';
import { CalendarComponent } from './Calendar';
import { PublicationsSection } from './Publications';
import { VideosSection } from './Videos';
import { NewsletterSection } from './NewsLetter';
import { Footer } from './Footer';

const ModernMinistryWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [newsSlide, setNewsSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sectionsVisible, setSectionsVisible] = useState({});
  
  const mainSlides = [
    {
      image: "/images/HeroSlider1.jpg",
      title: "New Educational Initiatives",
      subtitle: "Empowering the future through traditional wisdom"
    },
    {
      image: "/images/HeroSlider2.jpg",
      title: "Empowering Future Generations",
      subtitle: "Building bridges between tradition and modernity"
    },
    {
      image: "/images/HeroSlider3.jpg",
      title: "Community & Cultural Events",
      subtitle: "Celebrating our rich heritage together"
    },
    {
      image: "/images/HeroSlider4.jpg",
      title: "Community & Cultural Events",
      subtitle: "Celebrating our rich heritage together"
    },
    {
      image: "/images/HeroSlider5.jpg",
      title: "Community & Cultural Events",
      subtitle: "Celebrating our rich heritage together"
    }
  ];

  const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg"
  ];

  const newsItems = [
    { date: "12 Dec, 2023", title: "2023 දෙසැම්බර් 12 වන දින...", time: "8:00 am - 6:00 pm", image: "/images/newsItem1.jpg" },
    { date: "05 Dec, 2023", title: "2023 දෙසැම්බර් 05 වන දින...", time: "8:00 am - 6:00 pm", image: "/images/newsItem2.jpg" },
    { date: "04 Dec, 2023", title: "2023 දෙසැම්බර් 04 වන දින...", time: "8:00 am - 6:00 pm", image: "/images/newsItem3.jpg" },
    { date: "01 Dec, 2023", title: "නව අධ්‍යාපන ප්‍රතිසංස්කරණ...", time: "9:00 am - 5:00 pm", image: "/images/newsItem4.jpg" },
    { date: "28 Nov, 2023", title: "වාර්ෂික ත්‍යාග ප්‍රදානෝත්සවය...", time: "10:00 am - 1:00 pm", image: "/images/newsItem5.jpg" },
    { date: "25 Nov, 2023", title: "පිරිවෙන් ගුරු පුහුණු වැඩමුළුව...", time: "8:30 am - 4:30 pm", image: "/images/newsItem6.jpg" }
  ];

  const stats = [
    { number: "825", label: "Total Number of Pirivenas", icon: <BookOpen className="w-12 h-12" /> },
    { number: "68,319", label: "Students Enrolled in Pirivenas", icon: <Users className="w-12 h-12" /> },
    { number: "17,012", label: "Total Number of Dhamma Schools", icon: <GraduationCap className="w-12 h-12" /> },
    { number: "2,864,286", label: "Students Enrolled in Dhamma Schools", icon: <Users className="w-12 h-12" /> }
  ];

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    const mainTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainSlides.length);
    }, 5000);
    
    const galleryTimer = setInterval(() => {
      setGallerySlide((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

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

    if (!isLoading) {
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach(section => observer.observe(section));
    }

    return () => {
      clearInterval(mainTimer);
      clearInterval(galleryTimer);
      clearTimeout(loadingTimer);
      observer.disconnect();
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />
      <HeroSlider mainSlides={mainSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      
      
      <main className="container mx-auto px-6 pt-24 pb-16 md:pt-32">
        {/* Welcome Section */}
        <section 
          id="welcome"
          data-animate
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 transition-all duration-1000 transform ${
            sectionsVisible.welcome 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-slide-up">
              <span className="block bg-gradient-to-r from-red-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x mt-2">
              Welcome to
              
                Piriven & Bhikkhu Education
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg animate-slide-up animation-delay-200">
              The Tripitaka literature states that the word Pirivena has been used since the time of the Buddha to refer to the monastery or hut where the monks lived. Pirivena is a traditional educational institution that has been operating in Sri Lanka for centuries, creating exemplary Bhikkhu leadership through disciplinary practices imposed by the Lord Buddha.
            </p>
            <div className="flex space-x-6 animate-slide-up animation-delay-400">
              <Link href="/full-explanation">
                <button className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:rotate-1 active:scale-95">
                  Read More
                </button>
              </Link>
              <button className="bg-orange-500 hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-rotate-1 active:scale-95">
                IT Test
              </button>
            </div>
          </div>
          <div className="animate-slide-up animation-delay-600">
            <GallerySlider galleryImages={galleryImages} gallerySlide={gallerySlide} setGallerySlide={setGallerySlide} />
          </div>
        </section>


        {/* Stats Section */}
        <section
          id="stats"
          data-animate
          className={`py-20 transition-all duration-1000 transform ${
            sectionsVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-6 py-16 rounded-3xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="animate-scale-up" style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}>
                  <StatCard stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section
          id="news"
          data-animate
          className={`grid grid-cols-1 lg:grid-cols-3 gap-16 py-20 transition-all duration-1000 transform ${
            sectionsVisible.news
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 animate-slide-up">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {newsItems.slice(newsSlide * 3, (newsSlide * 3) + 3).map((news, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <NewsCard news={news} />
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              {/* Previous Button - Matching HeroSlider Style */}
              <button
                onClick={() => setNewsSlide((prev) => Math.max(0, prev - 1))}
                className="group bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:hover:scale-100"
                disabled={newsSlide === 0}
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              {/* Next Button - Matching HeroSlider Style */}
              <button
                onClick={() => setNewsSlide((prev) => Math.min(Math.floor(newsItems.length / 3) - 1, prev + 1))}
                className="group bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:hover:scale-100"
                disabled={newsSlide >= Math.floor(newsItems.length / 3) - 1}
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="text-center mt-8">
              <button className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl active:scale-95">
                View All News
              </button>
            </div>
          </div>
          <div className="lg:col-span-1 animate-slide-up animation-delay-300">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Notices</h2>
            <div className="bg-white rounded-2xl p-6 shadow-lg h-96 overflow-y-auto hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="animate-slide-right"
                    style={{
                      animationDelay: `${index * 100 + 500}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <NoticeCard />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl active:scale-95">
                View All Notices
              </button>
            </div>
          </div>
        </section>

        {/* Publications and Videos Section */}
        <section 
          id="media"
          data-animate
          className={`py-20 transition-all duration-1000 transform ${
            sectionsVisible.media 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-slide-left">
              <PublicationsSection />
            </div>
            <div className="animate-slide-right animation-delay-300">
              <VideosSection />
            </div>
          </div>
        </section>

        {/* Calendar and Links Section */}
        <section 
          id="calendar"
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 -mx-6 px-6 transition-all duration-1000 transform ${
            sectionsVisible.calendar 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Calendar</h2>
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500">
                <CalendarComponent />
              </div>
            </div>
            <div className="lg:col-span-1 space-y-8 animate-slide-up animation-delay-300">
              <div className="space-y-6">
                {[
                  { icon: <Search className="text-white w-6 h-6" />, text: "FAQs Center" },
                  { icon: <BookOpen className="text-white w-6 h-6" />, text: "Media Gallery" },
                  { icon: <Users className="text-white w-6 h-6" />, text: "Contact Directory" }
                ].map((link, index) => (
                  <div
                    key={index}
                    className="animate-slide-right"
                    style={{
                      animationDelay: `${index * 150 + 600}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <RightSideLink icon={link.icon} text={link.text} />
                  </div>
                ))}
              </div>
              <div className="animate-fade-in animation-delay-1000">
                <NewsletterSection />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Custom CSS animations */}
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

        @keyframes slide-left {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from { 
            opacity: 0;
            transform: translateX(30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-up {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
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

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .animate-scale-up {
          animation: scale-up 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
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

export default ModernMinistryWebsite;