import quizCompletedImg from "../../assets/quiz-complete.png";

import React from "react";

const QuizCompleted = () => {
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Quiz Completed" />
      <h2>Quiz Summary</h2>
    </div>
  );
};

export default QuizCompleted;
