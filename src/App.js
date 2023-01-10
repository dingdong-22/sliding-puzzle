import React, { useState } from "react";
import "./App.css";
import Solver from "./Solver";
import Board from "./Board";
import SizeInput from "./SizeInput.jsx";
import Lock from "./Lock";
import ScrambleBoard from "./ScrambleBoard.jsx";
import AutoPlay from "./AutoPlay";
import AnswerDisplay from "./AnswerDisplay";
import StatusDisplay from "./StatusDisplay";
import LightDarkButton from "./LightDarkButton";
import SpeedButtons from "./SpeedButtons";

function App() {
  let [order, setOrder] = useState([]);
  let [shuffled, setShuffled] = useState(false);
  let [lock, setLock] = useState(false);
  let [correctOrder, setCorrectOrder] = useState([]);
  let [answer, setAnswer] = useState([]);
  let [on, setOn] = useState(false);
  let [seconds, setSeconds] = useState(250);
  let [helped, setHelped] = useState(false);

  return (
    <div>
      <LightDarkButton />
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
      {lock ? (
        <StatusDisplay
          order={order}
          correctOrder={correctOrder}
          helped={helped}
        />
      ) : null}
      <div className="board">
        <Board
          order={order}
          setOrder={setOrder}
          lock={lock}
          correctOrder={correctOrder}
          answer={answer}
          setAnswer={setAnswer}
        />
      </div>
      <div className="functions-container">
        <ScrambleBoard
          order={order}
          setOrder={setOrder}
          setShuffled={setShuffled}
          lock={lock}
          setAnswer={setAnswer}
          setHelped={setHelped}
        />
        <Lock order={order} shuffled={shuffled} lock={lock} setLock={setLock} />
        <Solver
          order={order}
          setOrder={setOrder}
          shuffled={shuffled}
          correctOrder={correctOrder}
          answer={answer}
          setAnswer={setAnswer}
          setHelped={setHelped}
        />
        <AutoPlay
          order={order}
          setOrder={setOrder}
          answer={answer}
          setAnswer={setAnswer}
          on={on}
          setOn={setOn}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      </div>
      {answer.length > 0 ? (
        <SpeedButtons seconds={seconds} setSeconds={setSeconds} />
      ) : null}
      <div className="answer-container">
        <AnswerDisplay
          correctOrder={correctOrder}
          answer={answer}
          setAnswer={setAnswer}
        />
      </div>
    </div>
  );
}

export default App;
