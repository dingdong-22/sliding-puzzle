import { useState } from "react";

function BoardSizeInput(props) {
  let [size, setSize] = useState(0);

  function confirmSize() {
    let root = document.querySelector(":root");
    root.style.setProperty("--size", size);
    let defaultOrder = [];
    for (let i = 0; i < size ** 2; i++) {
      defaultOrder.push(i);
    }
    props.setOrder(defaultOrder);
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

export default BoardSizeInput;
