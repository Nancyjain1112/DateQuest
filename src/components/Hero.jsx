import { useState } from "react";
import QuestionPage from "../pages/QuestionPage";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

function Hero() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started ? (
        <>
         <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">

  <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-4xl w-[90%] text-center">

    <h1 className="text-6xl font-extrabold text-pink-600">
      DateQuest ❤️
    </h1>

    <p className="mt-5 text-xl text-gray-600">
      Discover the perfect date,
      one adorable question at a time.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10">

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

    </div>

    <div className="mt-12">

      <Button
         text="✨ Start Your Journey ❤️"
        onClick={() => setStarted(true)}
      />

    </div>

  </div>

</div>
        </>
      ) : (
        <QuestionPage />
      )}
    </div>
  );
}

export default Hero;