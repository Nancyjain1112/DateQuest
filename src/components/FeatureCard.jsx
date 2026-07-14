function FeatureCard({ emoji, title, description }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-3
      hover:scale-105
      px-8
      py-8
      w-64
      text-center
      cursor-pointer
      "
    >
      <div className="text-5xl">{emoji}</div>

      <h2 className="mt-4 text-2xl font-bold text-gray-700">
        {title}
      </h2>

      <p className="mt-4 text-gray-500">
        {description}
      </p>

      <p className="mt-6 text-pink-500 font-semibold">
        Explore →
      </p>
    </div>
  );
}

export default FeatureCard;