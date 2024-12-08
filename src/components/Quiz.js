import React, { useState, useCallback } from 'react';
import Question from './Question';
import Timer from './Timer';
import Results from './Results';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  
  const QUIZ_DURATION = 300;

  const handleAnswer = (selectedAnswer) => {
    const newAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleTimeUp = useCallback(() => {
    setIsQuizComplete(true);
  }, []);

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (isQuizComplete) {
    return (
      <Results 
        score={calculateScore()}
        totalQuestions={questions.length}
        answers={userAnswers}
        questions={questions}
      />
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <Timer 
          duration={QUIZ_DURATION} 
          onTimeUp={handleTimeUp} 
          className="w-10"
        />
        <span className="text-gray-600 font-medium mt-4 md:mt-0">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
