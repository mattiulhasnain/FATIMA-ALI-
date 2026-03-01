'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCcw, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import { fullDocumentContext } from './data';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export default function Quiz() {
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuiz = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API Key is missing.");
      }
      
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a 5-question multiple choice quiz based on the following document context. Make the questions challenging but fair.
        
        DOCUMENT CONTEXT:
        ${fullDocumentContext}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING, description: "The quiz question" },
                options: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "Exactly 4 possible options"
                },
                answer: { type: Type.INTEGER, description: "The 0-based index of the correct option (0, 1, 2, or 3)" }
              },
              required: ["question", "options", "answer"]
            }
          },
          temperature: 0.7,
        }
      });

      const text = response.text;
      if (text) {
        const generatedQuizzes = JSON.parse(text);
        setQuizzes(generatedQuizzes);
        setCurrentQuestion(0);
        setSelectedOption(null);
        setShowResult(false);
        setScore(0);
      } else {
        throw new Error("Failed to generate quiz content.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate quiz. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    
    if (index === quizzes[currentQuestion].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizzes.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      // End of quiz
      setCurrentQuestion(quizzes.length);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
        <h3 className="text-xl font-semibold text-slate-800 flex items-center">
          <Sparkles className="w-5 h-5 text-indigo-500 mr-2" />
          AI is generating your quiz...
        </h3>
        <p className="text-slate-500 mt-2">Creating fresh questions from the document</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 text-center max-w-2xl mx-auto">
        <XCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-rose-800 mb-2">Oops!</h2>
        <p className="text-rose-600 mb-6">{error}</p>
        <button 
          onClick={generateQuiz}
          className="inline-flex items-center px-6 py-3 bg-rose-600 text-white font-medium rounded-xl hover:bg-rose-700 transition-colors"
        >
          <RefreshCcw className="w-5 h-5 mr-2" /> Try Again
        </button>
      </div>
    );
  }

  if (quizzes.length === 0) {
    return null;
  }

  if (currentQuestion >= quizzes.length) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Quiz Completed!</h2>
        <div className="w-32 h-32 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl font-bold text-indigo-600">{score}/{quizzes.length}</span>
        </div>
        <p className="text-slate-600 mb-8 text-lg">
          {score === quizzes.length ? 'Perfect score! You are a DNA expert.' : 
           score > quizzes.length / 2 ? 'Great job! You know your stuff.' : 
           'Keep studying! Review the material and try again.'}
        </p>
        <button 
          onClick={generateQuiz}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
        >
          <Sparkles className="w-5 h-5 mr-2" /> Generate New Quiz
        </button>
      </div>
    );
  }

  const q = quizzes[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">
          Question {currentQuestion + 1} of {quizzes.length}
        </span>
        <span className="text-sm font-medium text-slate-500">Score: {score}</span>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-8 leading-snug">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === q.answer;
            const showCorrect = showResult && isCorrect;
            const showIncorrect = showResult && isSelected && !isCorrect;

            let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ";
            
            if (!showResult) {
              buttonClass += "border-slate-100 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700";
            } else if (showCorrect) {
              buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-800 font-medium";
            } else if (showIncorrect) {
              buttonClass += "border-rose-500 bg-rose-50 text-rose-800";
            } else {
              buttonClass += "border-slate-100 bg-slate-50 text-slate-400 opacity-50";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={showResult}
                className={buttonClass}
              >
                <span className="text-lg">{option}</span>
                {showCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                {showIncorrect && <XCircle className="w-6 h-6 text-rose-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {showResult && (
        <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
          >
            {currentQuestion < quizzes.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}
