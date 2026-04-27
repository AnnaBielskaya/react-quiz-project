import React from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import Answer from "./Answer.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

const MAX_TIMEOUT = 60000;

const Quiz = () => {
  const [timeOut, setTimeOut] = React.useState(MAX_TIMEOUT);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const activeQuestion = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setTimeOut(3000);
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  };

  const quizCompleted = userAnswers.length === QUESTIONS.length;

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Quiz Completed" />
        <h2>Quiz Summary</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestion].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestion}
          timeOut={timeOut}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <p>Current question: {QUESTIONS[activeQuestion].text}</p>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <Answer
              key={answer}
              answer={answer}
              handleSelectAnswer={handleSelectAnswer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
