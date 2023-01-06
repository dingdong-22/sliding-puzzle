function Board(props) {
  let boardItems = [];
  for (let i of props.order) {
    boardItems.push(<div className="tile">{i}</div>);
  }
  return boardItems;
}

export default Board;
