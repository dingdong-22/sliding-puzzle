function Board(props) {
  let boardItems = [];

  let root = document.querySelector(":root");
  root.style.setProperty("--size", props.size);

  for (let i = 0; i < props.size ** 2; i++) {
    boardItems.push(<div className="tile">{i}</div>);
  }
  
  return boardItems;
}

export default Board;
