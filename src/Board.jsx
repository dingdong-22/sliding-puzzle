function Board(props) {
  let boardItems = [];

  function moveTile(tileValue, tileIndex) {
    let newOrder = [...props.order];
    let n = Math.sqrt(newOrder.length);
    let zeroIndex = newOrder.indexOf(0);
    let zeroRow = Math.floor(zeroIndex / n);
    let tileRow = Math.floor(tileIndex / n);
    tileValue = parseInt(tileValue);
    tileIndex = parseInt(tileIndex);
    if (props.order[tileIndex - 1] === 0) {
      if (zeroRow === tileRow) {
        newOrder[zeroIndex] = tileValue;
        newOrder[tileIndex] = 0;
      }
    }
    if (props.order[tileIndex + 1] === 0) {
      if (zeroRow === tileRow) {
        newOrder[zeroIndex] = tileValue;
        newOrder[tileIndex] = 0;
      }
    }
    if (props.order[tileIndex - n] === 0) {
      newOrder[zeroIndex] = tileValue;
      newOrder[tileIndex] = 0;
    }
    if (props.order[tileIndex + n] === 0) {
      newOrder[zeroIndex] = tileValue;
      newOrder[tileIndex] = 0;
    }

    props.setOrder(newOrder);

    checkAnswer(newOrder);
  }

  function checkAnswer(order) {
    for (let i = 0; i < order.length; i++) {
      if (order[i] === props.correctOrder[i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < props.order.length; i++) {
    if (!props.lock) {
      boardItems.push(
        <div id={i} className="tile">
          {props.order[i]}
        </div>
      );
    } else {
      boardItems.push(
        <button
          id={i}
          className="tile"
          onClick={(e) => moveTile(e.target.innerText, e.target.id)}
          value="123"
        >
          {props.order[i]}
        </button>
      );
    }
  }
  return boardItems;
}

export default Board;
