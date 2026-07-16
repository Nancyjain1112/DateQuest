import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import OptionCard from "./OptionCard";

function QuestionCard({
  question,
  value,
  onChange,
}) {

    const [showOtherInput, setShowOtherInput] = useState(false);
    useEffect(() => {
  setShowOtherInput(false);
}, [question.id]);

  return (

    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45 }}
      className="bg-white rounded-3xl shadow-xl p-10"
    >

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        {question.question}
      </h2>

      {/* TEXT */}

      {question.type === "text" && (

        <input
          type="text"
          value={value}
          placeholder={question.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border-2 border-pink-200 px-5 py-4 text-lg focus:outline-none focus:border-pink-500 transition"
        />

      )}

      {/* DATE */}

      {question.type === "date" && (

        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border-2 border-pink-200 px-5 py-4 text-lg focus:outline-none focus:border-pink-500 transition"
        />

      )}

      {/* TIME */}

      {question.type === "time" && (

        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border-2 border-pink-200 px-5 py-4 text-lg focus:outline-none focus:border-pink-500 transition"
        />

      )}

      {/* CHOICE */}

      {question.type === "choice" && (
  <>
    <div className="grid grid-cols-2 gap-5">

      {question.options.map((option) => (

        <OptionCard
          key={option.title}
          emoji={option.emoji}
          title={option.title}
          description={option.description}
          selected={value === option.title}
          onClick={() => {

            onChange(option.title);

            if (option.title === "Other") {
              setShowOtherInput(true);
            } else {
              setShowOtherInput(false);
            }

          }}
        />

      ))}

    </div>

    <AnimatePresence>

      {showOtherInput && (

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6"
        >

          <input
            type="text"
            placeholder="Tell us your idea..."
            className="w-full rounded-xl border-2 border-pink-300 px-5 py-4 focus:outline-none focus:border-pink-500"
          />

        </motion.div>

      )}

    </AnimatePresence>

  </>
)}

    </motion.div>

  );

}

export default QuestionCard;