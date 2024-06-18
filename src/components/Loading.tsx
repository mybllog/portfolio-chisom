import React, { useState, useEffect } from "react";

const LoadingTimer: React.FC<{ duration: number }> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    if (timeLeft === 0) {
      // Handle completion, for example, stop loading
      clearInterval(timer);
    }
  }, [timeLeft]);

  return <div>{timeLeft} seconds remaining</div>;
};

export default LoadingTimer;
