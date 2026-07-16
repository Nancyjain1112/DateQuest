import { motion } from "framer-motion";
import { useState } from "react";

function FeatureCard({ emoji, title, description }) {
  const [hovered, setHovered] = useState(false);

  const ideas = {
    Food: ["🍣 Sushi", "🍔 Burger", "🍜 Ramen", "❤️ Food Date"],
    Movies: ["🎭 Comedy", "💕 Romance", "😱 Thriller", "🍿 Movie Night"],
    Games: ["🎳 Bowling", "🎯 Arcade", "♟ Board Games", "🎮 Fun Time"],
    Coffee: ["☕ Latte", "🧋 Bubble Tea", "🥐 Café", "🌇 Sunset Coffee"],
  };

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.06,
        y: -15,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="w-64 h-56 bg-white rounded-3xl shadow-xl cursor-pointer overflow-hidden relative"
    >
      {/* FRONT */}
      <motion.div
        animate={{
          opacity: hovered ? 0 : 1,
          scale: hovered ? 0.95 : 1,
        }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex flex-col justify-center items-center p-6"
      >
        <motion.div
          animate={{
            rotate: hovered ? [0, -10, 10, -10, 0] : 0,
            scale: hovered ? 1.25 : 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-6xl"
        >
          {emoji}
        </motion.div>

        <h2 className="text-3xl font-bold mt-4 text-gray-700">
          {title}
        </h2>

        <p className="text-gray-500 text-center mt-3">
          {description}
        </p>
      </motion.div>

      {/* BACK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 bg-pink-500 text-white flex flex-col justify-center items-center rounded-3xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          ❤️ Date Ideas
        </h2>

        {ideas[title].map((item, index) => (
          <motion.p
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={
              hovered
                ? { x: 0, opacity: 1 }
                : { x: -20, opacity: 0 }
            }
            transition={{
              delay: index * 0.08,
            }}
            className="mb-1"
          >
            {item}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default FeatureCard;