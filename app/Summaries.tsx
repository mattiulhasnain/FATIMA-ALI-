'use client';

import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { summaries } from './data';

export default function Summaries() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSummary = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl mb-8">
        <div className="flex items-center mb-2">
          <FileText className="w-6 h-6 text-indigo-600 mr-3" />
          <h3 className="text-xl font-bold text-indigo-900">Quick Review</h3>
        </div>
        <p className="text-indigo-800 leading-relaxed">
          These concise summaries provide a high-level overview of the key concepts covered in the Forensic DNA Analysis material. Use them for quick revision before a test or to refresh your memory.
        </p>
      </div>

      <div className="space-y-4">
        {summaries.map((summary, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleSummary(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <h4 className="text-lg font-semibold text-slate-800">{summary.title}</h4>
                <div className={`p-2 rounded-full ${isOpen ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {summary.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
