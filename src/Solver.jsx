let moves = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function validMove(board, i, j) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }
  return true;
}

function distanceCalc(tileList, board, targetLocations) {
  let totalDist = 0;
  for (let tile of tileList) {
    let found = false;
    let tileCoord;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === tile) {
          tileCoord = [i, j];
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    let target = targetLocations[tile.toString()];
    totalDist +=
      (tileCoord[0] - target[0]) ** 2 + (tileCoord[1] - target[1]) ** 2;
  }
  return totalDist;
}

function moveZeroToTile(a, b) {
  let [aMoves, aDist, aZeroDist] = [a[2].length, a[4], a[6]];
  let [bMoves, bDist, bZeroDist] = [b[2].length, b[4], b[6]];
  return bZeroDist - aZeroDist;
}

function moveTileToTarget(a, b) {
  let [aMoves, aDist, aZeroDist] = [a[2].length, a[4], a[6]];
  let [bMoves, bDist, bZeroDist] = [b[2].length, b[4], b[6]];
  return bDist - aDist || bZeroDist - aZeroDist;
}

function twoTilesMoveToTarget(a, b) {
  let [aMoves, aDist, aZeroDist] = [a[2].length, a[4], a[6]];
  let [bMoves, bDist, bZeroDist] = [b[2].length, b[4], b[6]];
  return bMoves + bDist - (aMoves + aDist);
}

function zeroToTilesDist(zero, tiles) {
  let midpoint;
  if (tiles.length > 1) {
    midpoint = [
      (tiles[0][0] + tiles[1][0]) / 2,
      (tiles[0][1] + tiles[1][1]) / 2,
    ];
  } else {
    midpoint = [...tiles[0]];
  }

  return (midpoint[0] - zero[0]) ** 2 + (midpoint[1] - zero[1]) ** 2;
}

function tileFinder(board, tiles) {
  let tileCoords = new Array(tiles.length);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (tiles.includes(board[i][j])) {
        let idx = tiles.indexOf(board[i][j]);
        tileCoords[idx] = [i, j];
      }
    }
  }

  return tileCoords;
}

function convertToNestedArr(n, arr) {
  let board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(arr[i * n + j]);
    }
    board.push(row);
  }
  return board.map((x) => x.map((x) => x.toString()));
}

//insert props order and props answer
function slidePuzzle(order, correctOrder, setAnswer) {
  //convert to 2d matrix
  let n = Math.sqrt(order.length);
  let board = convertToNestedArr(n, order);

  //create a dictionary of the final locations of the tiles
  let targetLocations = new Object();
  for (let i = 1; i < board.length ** 2; i++) {
    let x = Math.ceil(i / board.length) - 1;
    let y = (i - 1) % board.length;
    targetLocations[i.toString()] = [x, y];
  }
  //create completedBoard
  let completedBoard = convertToNestedArr(n, correctOrder);
  //we solve by completing the first row, then first column, second row -> second column.. etc until we have a 2x3 left
  let solveOrder = [];
  for (let i = 0; i < board.length; i++) {
    //row
    for (let j = i; j < board.length; j++) {
      if (j === board.length - 2) {
        solveOrder.push([completedBoard[i][j], completedBoard[i][j + 1]]);
        break;
      } else {
        solveOrder.push([completedBoard[i][j]]);
      }
    }
    //col
    for (let j = i + 1; j < board.length; j++) {
      if (j === board.length - 2) {
        solveOrder.push([completedBoard[j][i], completedBoard[j + 1][i]]);
        break;
      } else {
        solveOrder.push([completedBoard[j][i]]);
      }
    }
  }
  solveOrder.pop();
  let lastChunk = [];
  for (let i = 0; i < 3; i++) {
    let temp = solveOrder.pop();
    if (typeof temp === "object") {
      lastChunk.push(...temp);
    } else {
      lastChunk.push(temp);
    }
  }
  solveOrder.push(lastChunk);

  //keep track of the location of zero
  let zero;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let num = board[i][j];
      if (num === "0") {
        zero = [i, j];
        continue;
      }
    }
  }

  let solveOrderIndex = -1;

  let frozen = new Set();
  let seenBoards = new Set();

  let reachedTile = false;

  let escorted = false;
  let twoTiles = false;
  let twoTilesIdx = 0;
  let tileset;
  let stack = [[board, zero, new Array(), solveOrderIndex, 0, [], 0]];
  while (stack.length > 0) {
    let [board, zero, seq, SOI, d, TF, ZTTD] = stack.pop();
    while (d === 0) {
      if (twoTiles) {
        stack = [];
        if (twoTilesIdx === 0) {
          twoTilesIdx++;
          tileset = [solveOrder[SOI][twoTilesIdx]];
          TF = tileFinder(board, tileset);
          ZTTD = zeroToTilesDist(zero, TF);
          d = distanceCalc(tileset, board, targetLocations);
          reachedTile = false;
          break;
        } else {
          tileset = solveOrder[SOI];
          TF = tileFinder(board, tileset);
          ZTTD = zeroToTilesDist(zero, TF);
          d = distanceCalc(tileset, board, targetLocations);
          twoTiles = false;
          escorted = true;
          break;
        }
      }

      reachedTile = false;
      escorted = false;
      twoTiles = false;
      if (SOI >= 0) {
        for (let t of solveOrder[SOI]) {
          frozen.add(t);
        }
      }

      SOI++;
      if (SOI === solveOrder.length) {
        console.log(
          "Answer:",
          seq.map((x) => parseInt(x))
        );
        setAnswer(seq.map((x) => parseInt(x)));
        return seq.map((x) => parseInt(x));
      }

      d = distanceCalc(solveOrder[SOI], board, targetLocations);

      if (d !== 0) {
        tileset = solveOrder[SOI];

        if (tileset.length > 1) {
          twoTiles = true;
          twoTilesIdx = 0;
          tileset = [solveOrder[SOI][twoTilesIdx]];
          d = distanceCalc(tileset, board, targetLocations);
        }
        TF = tileFinder(board, tileset);
        ZTTD = zeroToTilesDist(zero, TF);
        stack = [];
      }
    }

    seenBoards.add(board.toString());

    for (let [dx, dy] of moves) {
      let [i, j] = [zero[0] + dx, zero[1] + dy];
      if (!validMove(board, i, j)) {
        continue;
      }
      let value = board[i][j];
      if (frozen.has(value)) {
        continue;
      }

      let boardCopy = board.map((x) => [...x]);
      boardCopy[zero[0]][zero[1]] = value;
      boardCopy[i][j] = "0";

      let hash = boardCopy.toString();
      if (seenBoards.has(hash)) {
        continue;
      }
      seenBoards.add(hash);

      let TFCopy = TF.map((x) => [...x]);

      if (tileset.includes(value)) {
        let valueTargetLoc = targetLocations[value];
        let originalDistance =
          (i - valueTargetLoc[0]) ** 2 + (j - valueTargetLoc[1]) ** 2;
        let newDistance =
          (zero[0] - valueTargetLoc[0]) ** 2 +
          (zero[1] - valueTargetLoc[1]) ** 2;
        let idx = tileset.indexOf(value);

        let newD = d - originalDistance + newDistance;
        TFCopy[idx] = [zero[0], zero[1]];
        let ZTTD2 = zeroToTilesDist([i, j], TFCopy);

        if (ZTTD2 === 1 && !reachedTile) {
          reachedTile = true;
          seenBoards = new Set();
          stack = [];
        }
        if ((escorted || reachedTile) && ZTTD2 > 4) {
          continue;
        }

        stack.push([
          boardCopy,
          [i, j],
          [...seq, value],
          SOI,
          newD,
          TFCopy,
          ZTTD2,
        ]);
      } else {
        let ZTTD2 = zeroToTilesDist([i, j], TFCopy);
        if (ZTTD2 === 1 && !reachedTile) {
          reachedTile = true;
          seenBoards = new Set();
          stack = [];
        }
        if ((escorted || reachedTile) && ZTTD2 > 4) {
          continue;
        }

        stack.push([boardCopy, [i, j], [...seq, value], SOI, d, TFCopy, ZTTD2]);
      }
    }

    //single tile go straight to target
    if (reachedTile && TF.length === 1) {
      stack.sort((a, b) => moveTileToTarget(a, b));
    }
    //two tiles
    else if (escorted) {
      stack.sort((a, b) => twoTilesMoveToTarget(a, b));
    }
    //get the 0 tile to the target tile first
    else {
      stack.sort((a, b) => moveZeroToTile(a, b));
    }
  }
}

function Solver(props) {
  if (props.order.length > 0) {
    if (props.answer.length === 0) {
      return (
        <div>
          <button
            className="solver-button"
            onClick={() => {
              slidePuzzle(props.order, props.correctOrder, props.setAnswer);
            }}
          >
            Show Solution
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="solver-button"
            onClick={() => {
              props.setAnswer([]);
            }}
          >
            Hide Solution
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

export default Solver;

//save the solve order then play it
