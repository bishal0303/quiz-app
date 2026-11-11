import { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(70);


  // timeLeft logic
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // time format logic
  const minute = Math.floor(timeLeft / 60).toString().padStart(2, "0")
  const second = Math.floor(timeLeft % 60).toString().padStart(2, "0")

  return (
    <div className="flex justify-center items-center w-full min-h-dvh bg-amber-200">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl bg-amber-100 py-20 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold">⏰ Time Left: <span className="bg-linear-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent">{minute}min : {second}sec</span></h1>
      </div>
    </div>
  );
};

export default Timer;
