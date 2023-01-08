import React, { useState } from "react";
import "./App.css";
import Solver from "./Solver";
import Board from "./Board";
import SizeInput from "./SizeInput.jsx";
import Lock from "./Lock";
import ScrambleBoard from "./ScrambleBoard.jsx";
import AutoPlay from "./AutoPlay";
import AnswerDisplay from "./AnswerDisplay";

function App() {
  //keeps track of current tile order
  let [order, setOrder] = useState([]);
  //if true then can lock
  let [shuffled, setShuffled] = useState(false);
  //lock board to allow user input
  let [lock, setLock] = useState(false);
  //used to compare current order to correct order
  let [correctOrder, setCorrectOrder] = useState([]);
  let [answer, setAnswer] = useState([]);

  //if locked and order === answer then display well done retry
  return (
    <div>
      <div className="title">
        <h1>Sliding Puzzle Game</h1>
      </div>
      <SizeInput
        order={order}
        setOrder={setOrder}
        setShuffled={setShuffled}
        lock={lock}
        setCorrectOrder={setCorrectOrder}
        setAnswer={setAnswer}
      />
      <div className="board">
        <Board
          order={order}
          setOrder={setOrder}
          lock={lock}
          correctOrder={correctOrder}
          answer={answer}
          setAnswer={setAnswer} //may need to reset if user does not follow correctly
        />
      </div>
      <div className="functions-container">
        <ScrambleBoard
          order={order}
          setOrder={setOrder}
          setShuffled={setShuffled}
          lock={lock}
          setAnswer={setAnswer}
        />
        <Lock order={order} shuffled={shuffled} lock={lock} setLock={setLock} />
        <Solver
          order={order}
          setOrder={setOrder}
          shuffled={shuffled}
          correctOrder={correctOrder}
          answer={answer}
          setAnswer={setAnswer}
        />
        <AutoPlay order={order} setOrder={setOrder} answer={answer} />
      </div>
      <div className="answer-container">
        <AnswerDisplay answer={answer} setAnswer={setAnswer} />
      </div>
    </div>
  );
}

export default App;
