import { motion } from "framer-motion";

function OptionCard({
  emoji,
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-3xl
        p-6
        shadow-lg
        border-2
        transition-all
        duration-300
        
        ${
          selected
            ? "bg-pink-100 border-pink-500"
            : "bg-white border-gray-200 hover:border-pink-300"
        }
      `}
    >
      <motion.div
        animate={{
          rotate: selected ? [0, -8, 8, -8, 0] : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-5xl"
      >
        {emoji}
      </motion.div>

      <h2 className="text-2xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {description}
      </p>
    </motion.div>
  );
}

export default OptionCard;