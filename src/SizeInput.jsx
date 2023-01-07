import { useState } from "react";

function SizeInput(props) {
  let [size, setSize] = useState(0);
  let min = 3;
  let max = 20;
  function confirmSize() {
    if (props.lock || size < min || size > max) {
      return;
    }
    let root = document.querySelector(":root");
    root.style.setProperty("--size", size);
    let defaultOrder = [];
    for (let i = 0; i < size ** 2; i++) {
      defaultOrder.push(i);
    }
    defaultOrder.push(defaultOrder.shift());

    props.setOrder(defaultOrder);
    props.setCorrectOrder(defaultOrder);
    props.setShuffled(false);
    props.setAnswer([]);
  }

  return (
    <div className="size-selector">
      <label htmlFor="size-input-box">
        Enter board size:
        <input
          id="size-input-box"
          type="number"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        ></input>
      </label>
      <button onClick={confirmSize}>Confirm</button>
    </div>
  );
}

export default SizeInput;