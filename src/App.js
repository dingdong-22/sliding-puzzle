import React, { useState } from "react";
import "./App.css";
import BoardSizeInput from "./BoardSizeInput.jsx";

function App() {
  let [size, setSize] = useState(0);

  return (
    <div>
      <div className="title">
        <h1>Sliding Puzzle Game</h1>
      </div>
      <BoardSizeInput size={size} setSize={setSize} />
    </div>
  );
}

export default App;
