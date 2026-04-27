import React, { useCallback } from "react";
import QUESTIONS from "../../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import QuizCompleted from "./QuizCompleted.jsx";
const TIMEOUT = 60000;

const Quiz = () => {
  const [userAnswers, setUserAnswers] = React.useState([]);
  const activeQuestion = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  if (userAnswers.length === QUESTIONS.length) {
    return <QuizCompleted />;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestion].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestion}
          timeOut={TIMEOUT}
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
