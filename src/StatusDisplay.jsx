import { useState, useEffect } from "react";

function StatusDisplay(props) {
  let [time, setTime] = useState(0);

  function checkAnswer() {
    for (let i = 0; i < props.order.length; i++) {
      if (props.order[i] === props.correctOrder[i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (!props.helped) {
      let temp = setInterval(() => setTime(time + 1), 1000);
      return () => clearInterval(temp);
    }
  }, [time, props.helped]);

  if (!props.helped) {
    if (checkAnswer()) {
      return (
        <div className="status-display">Congratulations ! You took: {time}</div>
      );
    } else {
      return <div className="status-display">Time: {time}</div>;
    }
  }
}

export default StatusDisplay;
