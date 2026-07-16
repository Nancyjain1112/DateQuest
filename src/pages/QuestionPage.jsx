import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

import {
  commonQuestions,
  foodQuestions,
  coffeeQuestions,
  movieQuestions,
  gameQuestions,
} from "../data/questions";

function QuestionPage() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState({});

  let questions = [...commonQuestions];

switch (answers.dateType) {
  case "Food":
    questions = [...commonQuestions, ...foodQuestions];
    break;

  case "Coffee":
    questions = [...commonQuestions, ...coffeeQuestions];
    break;

  case "Movies":
    questions = [...commonQuestions, ...movieQuestions];
    break;

  case "Games":
    questions = [...commonQuestions, ...gameQuestions];
    break;

  default:
    questions = [...commonQuestions];
}

  const [error, setError] = useState("");

  const handleAnswerChange = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[step].id]: value,
    }));
  };

  const nextQuestion = () => {
    const currentQuestion = questions[step];
    const currentAnswer = answers[currentQuestion.id];

    if (!currentAnswer) {
  setError("❤️ Please answer before continuing.");
  return;
}

setError("");
    // Dynamic branching
    
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const currentQuestion = questions[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90%] max-w-3xl">

        <ProgressBar
          step={step}
          total={questions.length}
        />

        <div className="mt-8">
          <QuestionCard
            question={currentQuestion}
            value={answers[currentQuestion.id] || ""}
            onChange={handleAnswerChange}
          />
          {error && (
  <p className="text-red-500 text-center mt-5 font-medium">
    {error}
  </p>
)}
        </div>

        <div className="flex justify-between mt-8">

  <button
    onClick={() => {
      if (step > 0) {
        setStep(step - 1);
      }
    }}
    className={`px-8 py-3 rounded-full transition ${
      step === 0
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-gray-300 hover:bg-gray-400 text-gray-700"
    }`}
    disabled={step === 0}
  >
    ← Back
  </button>

  <button
    onClick={nextQuestion}
    className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
  >
    Continue →
  </button>

</div>

      </div>
    </div>
  );
}

export default QuestionPage;