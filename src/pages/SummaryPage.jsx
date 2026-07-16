import { motion } from "framer-motion";
import { useState } from "react";
import downloadInvitation from "../utils/downloadInvitation";

function SummaryPage({ answers, onSend }) {
 const [showShareModal, setShowShareModal] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (time) => {
    if (!time) return "";

    const [hour, minute] = time.split(":");

    const d = new Date();

    d.setHours(hour);
    d.setMinutes(minute);

    return d.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const activity =
    answers.foodType ||
    answers.cafeType ||
    answers.genre ||
    answers.activity ||
    "a wonderful date";

  const location =
    answers.foodPlace ||
    answers.vibe ||
    answers.place ||
    "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-8">

      <motion.div
        
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative bg-white rounded-[40px] shadow-2xl max-w-3xl w-full overflow-hidden"
      >

        {/* Top Decorations */}

        <div className="absolute top-5 left-8 text-4xl">
          🌸
        </div>

        <div className="absolute top-5 right-8 text-4xl">
          💖
        </div>

        <div className="absolute bottom-6 left-8 text-3xl">
          ✨
        </div>

        <div className="absolute bottom-6 right-8 text-3xl">
          🌸
        </div>

        <div className="px-12 py-14">

          <p className="text-center uppercase tracking-[8px] text-pink-500 font-semibold">
            DateQuest
          </p>

          <h1 className="text-center text-5xl font-bold mt-5 text-gray-800">
            💌 You're Invited
          </h1>

          <p className="text-center text-gray-500 mt-5 text-lg">
            Every beautiful memory begins with a simple invitation.
          </p>

          <div className="mt-14 text-xl leading-10 text-gray-700 space-y-6">

            <p>
              <span className="font-bold text-pink-600">
                Dear {answers.name},
              </span>
            </p>

            <p>
              I'd love to invite you for

              <span className="font-bold text-pink-500">
                {" "}
                {activity}
              </span>

              {answers.foodPlace && (
                <>
                  {" "}
                  at a{" "}
                  <span className="font-bold text-pink-500">
                    {answers.foodPlace}
                  </span>
                  .
                </>
              )}

              {answers.vibe && (
                <>
                  {" "}
                  with a{" "}
                  <span className="font-bold text-pink-500">
                    {answers.vibe}
                  </span>{" "}
                  vibe.
                </>
              )}

              {answers.place && (
                <>
                  {" "}
                  in an{" "}
                  <span className="font-bold text-pink-500">
                    {answers.place}
                  </span>{" "}
                  setting.
                </>
              )}
            </p>

            <p>
              Life is made of moments, and I'd love to spend one of
              those moments with you. Let's laugh, talk, make memories,
              and enjoy a beautiful day together.
            </p>

          </div>

          <div className="mt-14 bg-pink-50 rounded-3xl p-8">
                        <div className="text-center">

              <div className="text-5xl mb-4">
                {answers.foodType
                  ? "🍽️"
                  : answers.cafeType
                  ? "☕"
                  : answers.genre
                  ? "🎬"
                  : "🎮"}
              </div>

              <h2 className="text-4xl font-bold text-pink-600">
                {activity}
              </h2>

              {location && (
                <p className="mt-3 text-xl text-gray-600">
                  📍 {location}
                </p>
              )}

              <p className="mt-5 text-lg text-gray-700">
                📅 {formatDate(answers.date)}
              </p>

              <p className="mt-2 text-lg text-gray-700">
                🕒 {formatTime(answers.time)}
              </p>

            </div>

          </div>

          <div className="mt-12">

            <p className="text-center text-pink-500 font-semibold text-xl">
              A little note for you 💖
            </p>

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="mt-5 bg-rose-50 rounded-3xl p-8 shadow-sm"
            >

              <p className="italic text-center text-gray-700 text-xl leading-9">
                "{answers.message}"
              </p>

            </motion.div>

          </div>

          <div className="mt-12 text-center">

            <p className="text-3xl">
              ❤️ Hope to see you ❤️
            </p>

            <p className="mt-3 text-gray-500">
              — Created with DateQuest —
            </p>

          </div>
        {/* Buttons */}

<div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">

  <button
    onClick={() => {
  downloadInvitation(answers);
  setShowShareModal(true);
}}
    className="px-8 py-4 rounded-full bg-white border-2 border-pink-500 text-pink-500 font-semibold hover:bg-pink-50 transition"
  >
    🖼 Download Image
  </button>

  <button
  onClick={() => setShowShareModal(true)}
  className="px-8 py-4 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
>
  📤 Share Invitation
</button>
</div>
        </div>

      </motion.div>
{showShareModal && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-[90%] text-center"
    >

      <div className="text-6xl mb-4">
        💖
      </div>

      <h2 className="text-3xl font-bold text-pink-500">
        Invitation Ready!
      </h2>

      <p className="mt-4 text-gray-600">
        Your invitation image is ready to share.
      </p>

      <p className="mt-2 text-gray-500 leading-7">
        Open WhatsApp, Instagram, Messenger, or any app you like,
        then attach the downloaded image and send it to your special
        someone. ❤️
      </p>

      <div className="flex flex-col gap-4 mt-8">

        <button
          onClick={() => downloadInvitation(answers)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold"
        >
          📥 Download Again
        </button>

        <button
          onClick={() => setShowShareModal(false)}
          className="border-2 border-pink-500 text-pink-500 py-3 rounded-full font-semibold hover:bg-pink-50"
        >
          ❤️ Close
        </button>

      </div>

    </motion.div>

  </div>
)}

      
    </div>
  );
}

export default SummaryPage;