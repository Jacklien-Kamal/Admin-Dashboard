import React, { useEffect, useState } from "react";

const CircularProgressSVG = ({ value }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0); // animate from 0%

  useEffect(() => {
    const animationDuration = 1000; // 1 second
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const percentage = Math.min(elapsed / animationDuration, 1);
      setProgress(percentage * value);
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const offset = circumference * (1 - progress / 100);

  return (
    <div className="relative w-28 h-28">
      <svg
        className="absolute top-0 left-0 w-full h-full transform -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="text-blue-500 transition-all duration-1000"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      <div className="absolute -top-7 flex items-center justify-center text-sm font-semibold">
      {Math.round(progress)}% attended
      </div>
    </div>
  );
};
export default CircularProgressSVG;