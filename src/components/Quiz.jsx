import React from "react";
import QUESTIONS from "../questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = React.useState([]);
  const activeQuestion = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevState) => [...prevState, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <p>Current question: {QUESTIONS[activeQuestion].text}</p>
        <ul id="answers">
          {QUESTIONS[activeQuestion].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
