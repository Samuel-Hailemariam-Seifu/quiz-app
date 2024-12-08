import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">
            Welcome to QuizMaster
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Challenge yourself with our interactive quiz platform and test your knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2 bg-primary-100 rounded-lg">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-primary-900">How It Works</h2>
            </div>
            <ul className="space-y-4">
              {["10 challenging questions", "5 minutes to complete", "Instant results", "Review your answers"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2 bg-primary-100 rounded-lg">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-primary-900">Rules</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Choose one answer per question",
                "Can't go back to previous questions",
                "Timer can't be paused",
                "Results shown after completion"
              ].map((rule, index) => (
                <li key={index} className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span className="font-medium">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link to="/quiz">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <span className="relative">Start Quiz</span>
              <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
