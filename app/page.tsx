'use client';

import React, { useState } from 'react';
import { 
  Dna, 
  Search, 
  ShieldAlert, 
  Stethoscope, 
  UserX, 
  TestTube, 
  Droplet, 
  BriefcaseMedical,
  Menu,
  X,
  ChevronRight,
  Layers,
  CheckSquare,
  FileText,
  MessageSquare
} from 'lucide-react';
import { 
  topics, 
  humanGenome, 
  applications, 
  contamination, 
  medicoLegal, 
  sexualOffence, 
  biologicalMaterials, 
  dnaContent, 
  collectionTechniques 
} from './data';
import Flashcards from './Flashcards';
import Quiz from './Quiz';
import Summaries from './Summaries';
import AIAssistant from './AIAssistant';

const iconMap: Record<string, React.ElementType> = {
  Dna, Search, ShieldAlert, Stethoscope, UserX, TestTube, Droplet, BriefcaseMedical, Layers, CheckSquare, FileText, MessageSquare
};

export default function DNAAnalysisApp() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTopic) {
      case 'genome':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Human Genome</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Definition</h3>
              <p className="text-slate-600 leading-relaxed">{humanGenome.definition}</p>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Size</h3>
              <p className="text-slate-600 leading-relaxed">{humanGenome.size}</p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Chromosomes</h3>
              <ul className="space-y-2">
                {humanGenome.chromosomes.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Key Properties</h3>
              <ul className="space-y-2">
                {humanGenome.properties.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'applications':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Applications in Forensics Science</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-700 p-2 rounded-lg mr-3">Criminal Cases</span>
                </h3>
                <ul className="space-y-3">
                  {applications.criminal.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">Civil Cases</span>
                </h3>
                <ul className="space-y-3">
                  {applications.civil.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'contamination':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Avoid Contamination of Evidence</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-6">
              <p className="text-amber-800 font-medium">
                Very small amount of DNA sample can be used as evidence. Greater attention is essential when collecting and preserving DNA evidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Precautions to Follow</h3>
              <ul className="space-y-4">
                {contamination.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-slate-50 p-3 rounded-lg">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-sm font-bold mr-3 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'medico-legal':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">For Medico-Legal Experts</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-600 mb-6">
                Following precautions should be taken by the medico-legal experts during the collection and preservation of biological evidence for forensic DNA analysis:
              </p>
              <div className="space-y-4">
                {medicoLegal.map((item, idx) => (
                  <div key={idx} className="flex items-start border-l-2 border-indigo-200 pl-4 py-1">
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'sexual-offence':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Sample Collection (Sexual Offence)</h2>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Collection from Sexual Offence Victims</h3>
              <ul className="space-y-3">
                {sexualOffence.victims.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Collection of Reference (Control) Sample</h3>
              <ul className="space-y-3">
                {sexualOffence.reference.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'materials':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Biological Materials for DNA Profiling</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 font-semibold text-slate-800">Physical Evidence</th>
                      <th className="p-4 font-semibold text-slate-800">Places within the articles</th>
                      <th className="p-4 font-semibold text-slate-800">Source of DNA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {biologicalMaterials.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 text-slate-700 font-medium">{row.evidence}</td>
                        <td className="p-4 text-slate-600">{row.location}</td>
                        <td className="p-4 text-slate-600">{row.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'dna-content':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">DNA Content in Biological Samples</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden max-w-3xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 font-semibold text-slate-800">Samples</th>
                      <th className="p-4 font-semibold text-slate-800">DNA contain (approximately)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {dnaContent.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 text-slate-700 font-medium">{row.sample}</td>
                        <td className="p-4 text-slate-600 font-mono text-sm">{row.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'collection':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Collection of Biological Sample</h2>
            <div className="space-y-6">
              {collectionTechniques.map((tech, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{tech.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{tech.details}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'flashcards':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Flashcards</h2>
            <Flashcards />
          </div>
        );
      case 'quiz':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Interactive Quiz</h2>
            <Quiz />
          </div>
        );
      case 'summaries':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">Summaries</h2>
            <Summaries />
          </div>
        );
      case 'ai-assistant':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">AI Assistant</h2>
            <AIAssistant />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center space-x-2">
          <Dna className="w-6 h-6 text-indigo-600" />
          <h1 className="font-bold text-slate-800">Forensic DNA</h1>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-10 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 hidden md:flex items-center space-x-3 border-b border-slate-100">
          <div className="bg-indigo-100 p-2 rounded-xl">
            <Dna className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="font-bold text-xl text-slate-800 tracking-tight">Forensic DNA</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {topics.map((topic) => {
            const Icon = iconMap[topic.icon];
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  setActiveTopic(topic.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-medium shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 text-center">
            Educational App based on DNA Analysis in Forensics Science
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto w-full">
        <div className="max-w-5xl mx-auto p-6 md:p-10">
          {renderContent()}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-0 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
