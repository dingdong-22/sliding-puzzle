import React, { useState } from "react";
import "./App.css";
import Solver from "./Solver";
import Board from "./Board";
import SizeInput from "./SizeInput.jsx";
import Lock from "./Lock";
import ScrambleBoard from "./ScrambleBoard.jsx";

function App() {
  let [order, setOrder] = useState([]); //keeps track of current tile order
  let [shuffled, setShuffled] = useState(false); //if true then can lock
  let [lock, setLock] = useState(false); //lock board to allow user input
  let [correctOrder, setCorrectOrder] = useState([]);
  let [answer, setAnswer] = useState([]);

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
          setAnswer={setAnswer} //may need to reset if user does not follow correctly
        />
      </div>
      <div className="temp-button-container">
        <ScrambleBoard
          order={order}
          setOrder={setOrder}
          setShuffled={setShuffled}
          lock={lock}
          setAnswer={setAnswer}
        />
        <Lock shuffled={shuffled} lock={lock} setLock={setLock} />
        <Solver
          order={order}
          setOrder={setOrder}
          correctOrder={correctOrder}
          answer={answer}
          setAnswer={setAnswer}
        />
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;

//add detect valid ending
//add auto Solverr
