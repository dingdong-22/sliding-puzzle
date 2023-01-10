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
    if (props.answer.length !== 0) {
      if (tileValue === props.answer[0]) {
        let newAnswer = [...props.answer];
        newAnswer.shift();
        props.setAnswer(newAnswer);
      } else {
        props.setAnswer([]);
      }
    }
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
      if (props.order[i] !== 0) {
        boardItems.push(
          <div className="tile" id={i} key={i}>
            {props.order[i]}
          </div>
        );
      } else {
        boardItems.push(
          <div className="zero-tile" id={i} key={i}>
            {props.order[i]}
          </div>
        );
      }
    } else {
      if (props.order[i] !== 0) {
        boardItems.push(
          <button
            className="locked-tile"
            id={i}
            key={i}
            onClick={(e) => moveTile(e.target.innerText, e.target.id)}
          >
            {props.order[i]}
          </button>
        );
      } else {
        boardItems.push(
          <button
            className="locked-zero-tile"
            id={i}
            key={i}
            onClick={(e) => moveTile(e.target.innerText, e.target.id)}
          >
            {props.order[i]}
          </button>
        );
      }
    }
  }
  return boardItems;
}

export default Board;
