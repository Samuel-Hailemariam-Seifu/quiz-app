import React from "react";
import { useNavigate } from "react-router-dom";
import confetti from 'canvas-confetti';

function Results({ score, totalQuestions, answers, questions }) {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);

  React.useEffect(() => {
    if (percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Quiz Completed!</h1>
      
      <div className="bg-primary-50 rounded-xl p-6 mb-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="w-24 h-24" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5EDFF"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#5850EC"
                strokeWidth="3"
                strokeDasharray={`${percentage}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-600">{percentage}%</span>
            </div>
          </div>
          <p className="text-base text-gray-600 mt-4">
            You got <span className="font-bold text-primary-600">{score}</span> out of <span className="font-bold">{totalQuestions}</span> questions correct
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Review Your Answers</h2>
        {questions.map((question, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border-l-4 ${
              answers[index] === question.correctAnswer 
                ? 'border-green-500 bg-green-50' 
                : 'border-red-500 bg-red-50'
            }`}
          >
            <p className="font-medium text-gray-800 mb-2">{question.question}</p>
            <p className="text-sm text-gray-600">Your answer: <span className="font-medium">{answers[index] || 'Not answered'}</span></p>
            <p className="text-sm text-gray-600">Correct answer: <span className="font-medium">{question.correctAnswer}</span></p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transform hover:scale-105 transition duration-300 shadow-lg"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Results;
