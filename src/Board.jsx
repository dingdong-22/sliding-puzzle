function Board(props) {
  let boardItems = [];
  console.log(props.play);
  for (let i of props.order) {
    if (!props.play) {
      boardItems.push(<div className="tile">{i}</div>);
    } else {
      boardItems.push(<button className="tile">{i}</button>);
    }
  }
  return boardItems;
}

export default Board;
