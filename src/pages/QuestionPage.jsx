import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import EnvelopeAnimation from "../components/EnvelopeAnimation";
import SummaryPage from "./SummaryPage";

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

  const [error, setError] = useState("");

  const [showEnvelope, setShowEnvelope] = useState(false);

  const [showSummary, setShowSummary] = useState(false);

  // Build questions dynamically
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

  const currentQuestion = questions[step];

  // Save answer
  const handleAnswerChange = (value) => {
    setError("");

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  // Continue button
  const nextQuestion = () => {
    const currentAnswer = answers[currentQuestion.id];

    if (!currentAnswer) {
      setError("❤️ Please answer before continuing.");
      return;
    }

    setError("");

    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      // Last question
      setShowEnvelope(true);
    }
  };

  // Show envelope
  if (showEnvelope) {
    return (
      <EnvelopeAnimation
        onOpen={() => {
          setShowEnvelope(false);
          setShowSummary(true);
        }}
      />
    );
  }

  // Show invitation
  if (showSummary) {
    return (
      <SummaryPage
        answers={answers}
        onSend={() => {
          console.log("Invitation Sent ❤️");
        }}
      />
    );
  }

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
                setError("");
                setStep(step - 1);
              }
            }}
            disabled={step === 0}
            className={`px-8 py-3 rounded-full transition ${
              step === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400 text-gray-700"
            }`}
          >
            ← Back
          </button>

          <button
            onClick={nextQuestion}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition"
          >
            {step === questions.length - 1
              ? "💌 Create Invitation"
              : "Continue →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default QuestionPage;