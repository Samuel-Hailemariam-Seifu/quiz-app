import React, { useCallback } from "react";
import Quiz from "../components/Quiz";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which programming language is often used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    correctAnswer: "Da Vinci",
  },
  {
    id: 6,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    id: 7,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Silver", "Oxygen", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    id: 8,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    id: 9,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 10,
    question: "What is the main component of the Sun?",
    options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
    correctAnswer: "Hydrogen",
  }
];

function QuizPage() {
  const shuffledQuestions = useCallback(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Quiz questions={shuffledQuestions()} />
      </div>
    </div>
  );
}

export default QuizPage;
