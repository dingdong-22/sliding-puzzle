function AutoPlay(props) {
  function moveTile(n, order, tileValue, tileIndex) {
    console.log("Moved");
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
  }

  function play() {
    let newOrder = [...props.order];
    let n = Math.sqrt(newOrder.length);
    for (let i = 0; i < props.answer.length; i++) {
      let tileValue = props.answer[i];
      let tileIndex = newOrder.indexOf(tileValue);
      setTimeout(moveTile(n, newOrder, tileValue, tileIndex), 1000 * i);
      // moveTile(n, newOrder, tileValue, tileIndex);
      console.log("before", props.order);
      props.setOrder(newOrder);
      console.log("after", props.order);
    }
  }
  if (props.answer.length > 0) {
    return (
      <div>
        <button className="play-solution-button" onClick={() => play()}>
          play solution
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
