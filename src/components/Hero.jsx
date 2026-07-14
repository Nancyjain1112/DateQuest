import { useState } from "react";
import QuestionPage from "../pages/QuestionPage";
import Button from "./Button";

function Hero() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started ? (
        <>
          <h1>Hello DateQuest ❤️</h1>

          <Button
            text="Start Date ❤️"
            onClick={() => setStarted(true)}
          />
        </>
      ) : (
        <QuestionPage />
      )}
    </div>
  );
}

export default Hero;