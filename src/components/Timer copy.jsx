import { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(70);

  // timeLeft logic
  useEffect(() => {
    const intervalId = setInterval(() => {
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

  // timeFormat logic

const minute = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, 0)
      
      const second = Math.floor(timeLeft % 60)
      .toString()
      .padStart(2, 0)


  return (
    <div className="flex justify-center items-center w-full bg-amber-500 min-h-dvh">
      <div className="flex flex-col justify-center items-center w-full max-w-5xl min-h-dvh bg-amber-100">
        <h1 className="text-3xl text-center font-bold">
          ⏰ time left : {minute}min : {second}sec
        </h1>
      </div>
    </div>
  );
};

export default Timer;
