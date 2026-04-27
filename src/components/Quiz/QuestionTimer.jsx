import React, { useEffect, useRef } from "react";

const QuestionTimer = ({ timeOut, onTimeout }) => {
  const [remainingTime, setRemainingTime] = React.useState(timeOut);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 100;
        }
        clearInterval(interval);
        onTimeout();
        return 0;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeOut}></progress>
  );
};

export default QuestionTimer;
