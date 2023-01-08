function AutoPlay(props) {
  function play() {
    let n = Math.sqrt(props.order.length);
    let order = [...props.order];
    let answer = [...props.answer];
    function moveTile(n, i) {
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
      props.setAnswer(answer);
      props.setOrder([...order]);
      if (answer.length === 0) {
        props.setOn(false);
      }
    }

    props.setOn(!props.on);

    for (let i = 0; i < props.answer.length; i++) {
      setTimeout(() => moveTile(n, i), 350 * i);
    }
  }

  if (props.answer.length > 0 && !props.on) {
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
