function ProgressBar({ step, total }) {
  const progress = ((step + 1) / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>Step {step + 1}</span>
        <span>{total} Steps</span>
      </div>

      <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-pink-500 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;