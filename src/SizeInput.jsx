import { useState } from "react";

function SizeInput(props) {
  let [size, setSize] = useState(3);
  let min = 3;
  let max = 15;
  function confirmSize() {
    let root = document.querySelector(":root");
    let body = document.querySelector("body");
    if (props.lock || size < min || size > max) {
      body.style.setProperty(
        "--clr-input-border",
        "var(--clr-input-border-invalid)"
      );
      body.style.setProperty(
        "--clr-input-background",
        "var(--clr-input-background-invalid)"
      );
      return;
    }

    root.style.setProperty("--size", size);
    body.style.setProperty(
      "--clr-input-border",
      "var(--clr-input-border-valid)"
    );
    body.style.setProperty(
      "--clr-input-background",
      "var(--clr-input-background-valid)"
    );

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
    <div className="size-input-container">
      <label htmlFor="size-input-box">Enter board size (3-15):</label>
      <div>
        <input
          id="size-input-box"
          type="text"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        ></input>
        <button className="size-button" onClick={confirmSize}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default SizeInput;
