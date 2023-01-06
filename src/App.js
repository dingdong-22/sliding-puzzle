import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import BoardSizeInput from "./BoardSizeInput.jsx";
import ScrambleBoard from "./ScrambleBoard.jsx";

function App() {
  let [order, setOrder] = useState([]);

  return (
    <div>
      <div className="title">
        <h1>Sliding Puzzle Game</h1>
      </div>
      <BoardSizeInput
        order={order}
        setOrder={setOrder}
      />
      <div className="board">
        <Board order={order} />
      </div>
      <div className="scramble-button-container">
        {/* <ScrambleBoard size={size} order={order} setOrder={setOrder} /> */}
      </div>
    </div>
  );
}

export default App;
