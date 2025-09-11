import React from 'react';
import { Calendar } from 'lucide-react';

const noticeItems = [
  {
    title: "විභාග අපේක්ෂකයින්ගේ අනන්‍යතාවය තහවුරු කිරීමේ ක්‍රියාවලිය පිළිබඳ විශේෂ නිවේදනය",
    date: "April 5, 2024",
    image: "/images/notice1.jpg"
  },
  {
    title: "නව අධ්‍යයන වර්ෂය සඳහා අයදුම්පත් කැඳවීම",
    date: "March 28, 2024",
    image: "/images/notice2.jpg"
  },
  {
    title: "වාර්ෂික විද්‍යා ප්‍රදර්ශනය: 'අනාගතයට මග' 2024",
    date: "March 20, 2024",
    image: "/images/notice3.jpg"
  },
  {
    title: "විදුහල්පතිතුමාගේ විශේෂ පණිවිඩය",
    date: "March 15, 2024",
    image: "/images/notice4.jpg"
  },
  {
    title: "2024 ක්‍රීඩා උත්සවය පිළිබඳ නිවේදනය",
    date: "March 10, 2024",
    image: "/images/notice5.jpg"
  },
];

export const NoticeCard = () => (
  <div className="space-y-4">
    {noticeItems.map((notice, index) => (
      <div 
        key={index} 
        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
      >
        <div 
          className="w-16 h-12 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
        >
          <img 
            src={notice.image} 
            alt={notice.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div>
          <a href="#" className="text-gray-700 hover:text-red-800 font-semibold line-clamp-2 transition-colors duration-300">
            {notice.title}
          </a>
          <p className="text-sm text-gray-500 mt-2 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {notice.date}
          </p>
        </div>
      </div>
    ))}
  </div>
);