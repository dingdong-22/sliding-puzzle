function SpeedButtons(props) {
  function increaseSpeed(inc) {
    if (inc) {
      if (1000 / props.seconds < 60) {
        props.setSeconds(props.seconds / 2);
      }
    } else {
      if (1000 / props.seconds > 0.3) {
        props.setSeconds(props.seconds * 2);
      }
    }
  }
  
  return (
    <div>
      <div className="speed-buttons-container">
        <button className="speed-button" onClick={() => increaseSpeed(false)}>
          {"<<"}
        </button>
        <button className="speed-button" onClick={() => increaseSpeed(true)}>
          {">>"}
        </button>
      </div>
      <div className="speed-display">
        Moves per second : {1000 / props.seconds}
      </div>
    </div>
  );
}

export default SpeedButtons;
