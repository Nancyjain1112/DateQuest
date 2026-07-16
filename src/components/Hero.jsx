import { useState } from "react";
import QuestionPage from "../pages/QuestionPage";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [started, setStarted] = useState(false);

  return (
    <AnimatePresence mode="wait">

      {!started ? (

        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.5 },
          }}
        >

          <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-4xl w-[90%] text-center">

              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-extrabold text-pink-600"
              >
                DateQuest ❤️
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-5 text-xl text-gray-600"
              >
                Every great story begins with one date.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-5 mt-10"
              >

                <FeatureCard
                  emoji="🍕"
                  title="Food"
                  description="From street food to fine dining."
                />

                <FeatureCard
                  emoji="🎬"
                  title="Movies"
                  description="Comedy, romance, or thriller?"
                />

                <FeatureCard
                  emoji="🎮"
                  title="Games"
                  description="Arcade, bowling, or board games?"
                />

                <FeatureCard
                  emoji="☕"
                  title="Coffee"
                  description="A cozy café or a sunset latte?"
                />

              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-12"
              >

                <Button
                  text="✨ Start Your Journey ❤️"
                  onClick={() => setStarted(true)}
                />

              </motion.div>

            </div>

          </div>

        </motion.div>

      ) : (

        <motion.div
          key="question"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <QuestionPage />
        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default Hero;