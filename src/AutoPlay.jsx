import { useEffect } from "react";

function AutoPlay(props) {
  function play() {
    let n = Math.sqrt(props.order.length);
    let answer = [...props.answer];
    let order = [...props.order];
    let tileValue = answer.shift();
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
    props.setAnswer([...answer]);
    props.setOrder([...order]);
    if (answer.length === 0) {
      props.setOn(false);
    }
  }

  function toggle() {
    props.setOn(!props.on);
  }

  useEffect(() => {
    if (props.on) {
      let interval;
      interval = setInterval(() => {
        play();
      }, 200);

      return () => clearInterval(interval);
    }
  }, [props.on, props.answer]);

  if (props.answer.length > 0) {
    if (!props.on) {
      return (
        <div>
          <button className="play-solution-button" onClick={() => toggle()}>
            Play Solution
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="play-solution-button" onClick={() => toggle()}>
            Pause Solution
          </button>
        </div>
      );
    }
  } else {
    return (
      <div>
        <button className="blank-button"></button>
      </div>
    );
  }
}

export default AutoPlay;
