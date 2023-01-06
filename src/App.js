import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import BoardSizeInput from "./BoardSizeInput.jsx";

function App() {
  let [size, setSize] = useState(0);
  let [board, setBoard] = useState([]);
  return (
    <div>
      <div className="title">
        <h1>Sliding Puzzle Game</h1>
      </div>
      <BoardSizeInput
        size={size}
        setSize={setSize}
        board={board}
        setBoard={setBoard}
      />
      <div className="board">
        <Board size={size} />
      </div>
    </div>
  );
}

export default App;
