import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { episode1, episode2 } from "../shared/Questions";

function Quiz() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  //console.log(state);
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [lockAnswer, setLockAnswer] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentRemarks, setRemarks] = useState("");
  const [buttonText, setButtonText] = useState("Next Question");
  const [score, setScore] = useState(0);

  const optionAref = useRef();
  const optionBref = useRef();
  const optionCref = useRef();
  const optionDref = useRef();

  switch (state.number) {
    case 2:
      var questions = episode2;
      break;
    default:
      questions = episode1;
      break;
  }

  console.log(questions.length);

  // Helper Functions

  /* Resets the game back to default */
  const restartGame = () => {
    navigate("/grand-master-chess");
  };

  const checkAnswer = (answer) => {
    if (!lockAnswer) {
      //update score
      var add = 0;
      if (answer.isCorrect) {
        add = 1;
      } else if (answer.isPartiallyCorrect) {
        add = 0.5;
      }
      setScore(score + add);

      setRemarks(answer.comments); // add remarks
      setLockAnswer(true); //lock answer

      //color
      var correctOption = -1,
        clickedOption = -1;
      var options = [
        questions[currentQuestion].options[0],
        questions[currentQuestion].options[1],
        questions[currentQuestion].options[2],
        questions[currentQuestion].options[3],
      ];
      for (var i = 0; i < options.length; i++) {
        if (options[i].isCorrect) correctOption = i;
        if (options[i].id === answer.id) clickedOption = i;
      }
      var refs = [optionAref, optionBref, optionCref, optionDref];
      refs[correctOption].current.className = "option-button-green";

      if (answer.isPartiallyCorrect) {
        refs[clickedOption].current.className = "option-button-yellow";
      }
      if (!answer.isPartiallyCorrect && !answer.isCorrect) {
        refs[clickedOption].current.className = "option-button-red";
      }
    }
    setShowNextButton(true);
    if (currentQuestion + 1 >= questions.length) {
      setButtonText("Show Result");
    }
  };

  const showNextQuestion = () => {
    setShowNextButton(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setLockAnswer(false);
      setRemarks("");
      var refs = [optionAref, optionBref, optionCref, optionDref];
      refs.map((btn) => (btn.current.className = "option-button-default"));
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="App">
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="default-button" onClick={() => restartGame()}>
            Restart game
          </button>
        </div>
      ) : (
        <div>
          <div className="flex-container">
            <h1 className="flex-item-left">
              Question: {currentQuestion + 1} out of {questions.length}
            </h1>
            <h2 className="flex-item-right">Score: {score}</h2>
          </div>
          <div className="flex-container">
            <div className="flex-item-left">
              <img
                src={require(`../images/${questions[currentQuestion].image_path}.png`)}
                alt="Question"
              />
            </div>

            <div className="flex-item-right">
              <h2>{questions[currentQuestion].question}</h2>
              {/* Options */}
              <div className="button-row">
                <div className="option">
                  <button
                    ref={optionAref}
                    className="option-button-default"
                    onClick={() =>
                      checkAnswer(questions[currentQuestion].options[0])
                    }
                  >
                    {questions[currentQuestion].options[0].text}
                  </button>
                </div>

                <div className="option">
                  <button
                    ref={optionBref}
                    className="option-button-default"
                    onClick={() =>
                      checkAnswer(questions[currentQuestion].options[1])
                    }
                  >
                    {questions[currentQuestion].options[1].text}
                  </button>
                </div>
              </div>

              <div className="button-row">
                <div className="option">
                  <button
                    ref={optionCref}
                    className="option-button-default"
                    onClick={() =>
                      checkAnswer(questions[currentQuestion].options[2])
                    }
                  >
                    {questions[currentQuestion].options[2].text}
                  </button>
                </div>

                <div className="option">
                  <button
                    ref={optionDref}
                    className="option-button-default"
                    onClick={() =>
                      checkAnswer(questions[currentQuestion].options[3])
                    }
                  >
                    {questions[currentQuestion].options[3].text}
                  </button>
                </div>
              </div>
              <h3>{currentRemarks}</h3>
              <div>
                {showNextButton ? (
                  <button
                    className="default-button"
                    onClick={() => showNextQuestion()}
                  >
                    {buttonText}
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Match  */}
      <h1>{state.match}</h1>
    </div>
  );
}

export default Quiz;
