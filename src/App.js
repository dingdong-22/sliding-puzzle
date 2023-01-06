import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import BoardSizeInput from "./BoardSizeInput.jsx";
import PlayButton from "./PlayButton";
import ScrambleBoard from "./ScrambleBoard.jsx";

function App() {
  //may need to add need to scramble fisetShuffledrst before play
  let [order, setOrder] = useState([]);
  let [shuffled, setShuffled] = useState([]);
  let [play, setPlay] = useState(false);
  return (
    <div>
      <div className="title">
        <h1>Sliding Puzzle Game</h1>
      </div>
      <BoardSizeInput
        order={order}
        setOrder={setOrder}
        setShuffled={setShuffled}
        play={play}
      />
      <div className="board">
        <Board order={order} setOrder={setOrder} play={play} />
      </div>
      <div className="temp-button-container">
        <ScrambleBoard
          order={order}
          setOrder={setOrder}
          setShuffled={setShuffled}
          play={play}
        />
        <PlayButton shuffled={shuffled} play={play} setPlay={setPlay} />
      </div>
    </div>
  );
}

export default App;
