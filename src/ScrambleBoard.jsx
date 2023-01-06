function shuffler(newOrder) {
  let randIdx;
  let holder;
  for (let curIdx = newOrder.length - 1; curIdx >= 0; curIdx--) {
    randIdx = Math.floor(Math.random() * curIdx);
    //destructuring assignment not working for some reason
    holder = newOrder[randIdx];
    newOrder[randIdx] = newOrder[curIdx];
    newOrder[curIdx] = holder;
  }

  return newOrder;
}

function solvable(newOrder, zeroRow) {
  let inversions = 0;
  let max = 1;
  for (let i = 0; i < newOrder.length; i++) {
    if (newOrder[i] === 0) {
      continue;
    }
    if (newOrder[i] > max) {
      max = newOrder[i];
    }
    if (newOrder[i] < max) {
      for (let j = 0; j < i; j++) {
        if (newOrder[j] > newOrder[i]) {
          inversions++;
        }
      }
    }
  }

  if (newOrder.length % 2 === 1) {
    if (inversions % 2 === 1) {
      return false;
    }
  } else {
    if ((inversions + zeroRow) % 2 !== 1) {
      return false;
    }
  }

  return true;
}

function ScrambleBoard(props) {
  function scramble() {
    let newOrder = [...props.order];
    let n = Math.sqrt(newOrder.length);
    while (newOrder.length > 0) {
      shuffler(newOrder);
      let zeroRow = Math.floor(newOrder.indexOf(0) / n);
      if (solvable(newOrder, zeroRow)) {
        break;
      }
    }
    props.setOrder(newOrder);
  }

  return (
    <div>
      <button className="scramble-button" onClick={scramble}>
        scramble
      </button>
    </div>
  );
}

export default ScrambleBoard;
