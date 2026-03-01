'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RefreshCcw } from 'lucide-react';
import { flashcards } from './data';

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto w-full">
      <div className="flex justify-between items-center w-full mb-6 text-slate-500 font-medium">
        <span>Card {currentIndex + 1} of {flashcards.length}</span>
        <button 
          onClick={() => { setIsFlipped(false); setCurrentIndex(0); }}
          className="flex items-center hover:text-indigo-600 transition-colors"
        >
          <RefreshCcw className="w-4 h-4 mr-2" /> Reset
        </button>
      </div>

      <div 
        className="relative w-full aspect-[3/2] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-md border border-slate-100 flex flex-col items-center justify-center p-8 text-center">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-indigo-400">Question</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
              {flashcards[currentIndex].q}
            </h3>
            <p className="absolute bottom-6 text-sm text-slate-400">Click to flip</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-600 rounded-3xl shadow-md flex flex-col items-center justify-center p-8 text-center">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-indigo-200">Answer</span>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              {flashcards[currentIndex].a}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6 mt-10">
        <button 
          onClick={handlePrev}
          className="p-4 rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="p-4 rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
