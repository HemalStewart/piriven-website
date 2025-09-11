import React from 'react';
import { Calendar } from 'lucide-react';

export const CalendarComponent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-500 hover:text-black border border-gray-300 hover:border-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          &lt; PREV
        </button>
        <h3 className="font-bold text-xl text-gray-800">
          SEPTEMBER 2025
        </h3>
        <button className="text-gray-500 hover:text-black border border-gray-300 hover:border-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
          NEXT &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 font-semibold mb-4">
        <span className="py-2">MO</span>
        <span className="py-2">TU</span>
        <span className="py-2">WE</span>
        <span className="py-2">TH</span>
        <span className="py-2">FR</span>
        <span className="py-2">SA</span>
        <span className="py-2">SU</span>
      </div>
      <div className="grid grid-cols-7 text-center text-sm gap-1">
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          const isToday = day === 10;
          return (
            <button
              key={day}
              className={`py-3 rounded-lg transition-all duration-300 hover:bg-blue-50 ${
                isToday 
                  ? 'bg-blue-500 text-white font-bold hover:bg-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
    <div className="border-l border-gray-200 pl-8">
      <h4 className="font-semibold text-gray-500 text-sm mb-6 uppercase tracking-wider">
        EVENTS FOR SEPTEMBER
      </h4>
      <div className="text-center text-gray-400 py-12">
        <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p className="text-lg">No Events</p>
      </div>
    </div>
  </div>
);
