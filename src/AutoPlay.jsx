import { useState } from "react";

function AutoPlay(props) {
  let [on, setOn] = useState(false);

  function play() {
    let n = Math.sqrt(props.order.length);
    let order = [...props.order];

    function moveTile(n, i) {
      let tileValue = props.answer[i];
      let tileIndex = order.indexOf(tileValue);
      let zeroIndex = order.indexOf(0);
      let zeroRow = Math.floor(zeroIndex / n);
      let tileRow = Math.floor(tileIndex / n);
      if (order[tileIndex - 1] === 0) {
        if (zeroRow === tileRow) {
          order[zeroIndex] = tileValue;
          order[tileIndex] = 0;
        }
      }
      if (order[tileIndex + 1] === 0) {
        if (zeroRow === tileRow) {
          order[zeroIndex] = tileValue;
          order[tileIndex] = 0;
        }
      }
      if (order[tileIndex - n] === 0) {
        order[zeroIndex] = tileValue;
        order[tileIndex] = 0;
      }
      if (order[tileIndex + n] === 0) {
        order[zeroIndex] = tileValue;
        order[tileIndex] = 0;
      }
      props.setOrder([...order]);
    }

    setOn(!on);

    for (let i = 0; i < props.answer.length; i++) {
      setTimeout(() => moveTile(n, i), 250 * i);
    }
  }

  if (props.answer.length > 0 && !on) {
    return (
      <div>
        <button className="play-solution-button" onClick={() => play()}>
          Play Solution
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="blank-button"></button>
      </div>
    );
  }
}

export default AutoPlay;
