import { motion } from "framer-motion";

function EnvelopeAnimation({ onOpen }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.8,
          y: {
            repeat: Infinity,
            duration: 2,
          },
        }}
        className="text-center"
      >

        <div className="text-8xl">
          💌
        </div>

        <h1 className="text-4xl font-bold text-pink-600 mt-8">
          Your Invitation is Ready
        </h1>

        <p className="text-gray-600 mt-3">
          One click away from your perfect date...
        </p>

        <button
          onClick={onOpen}
          className="mt-10 bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-xl transition"
        >
          ✨ Open Invitation
        </button>

      </motion.div>

    </div>
  );
}

export default EnvelopeAnimation;