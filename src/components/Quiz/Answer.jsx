import React from "react";

const Answer = ({ answer, handleSelectAnswer }) => {
  return (
    <li key={answer} className="answer">
      <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
    </li>
  );
};

export default Answer;
