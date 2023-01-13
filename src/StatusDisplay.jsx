import { useState, useEffect } from "react";

function StatusDisplay(props) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    if (!props.finished) {
      let temp = setInterval(() => setTime(time + 1), 1000);
      return () => clearInterval(temp);
    }
  }, [time, props.helped, props.finished]);

  if (!props.helped) {
    if (props.finished) {
      return (
        <div className="status-display">
          Congratulations ! You took: {time} seconds !
        </div>
      );
    } else {
      return (
        <div className="status-display time">
          Moves: {props.moves} Time: {time}
        </div>
      );
    }
  }
}

export default StatusDisplay;
