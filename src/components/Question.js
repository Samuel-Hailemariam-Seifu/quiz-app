import React, { useState } from "react";

function Question({ question, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      onAnswer(option);
      setSelectedOption(null);
    }, 300);
  };

  if (!question) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {question.question}
      </h2>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
            className={`w-full p-4 text-left rounded-lg border-2 transition duration-200 flex items-center space-x-4
              ${selectedOption === option 
                ? 'bg-primary-600 text-white border-primary-600' 
                : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50'
              } ${selectedOption !== null ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
            `}
          >
            <span className="w-8 h-8 flex-shrink-0 rounded-full bg-white text-primary-600 font-semibold flex items-center justify-center border-2 border-current">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-grow">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
