import Board from "./Board";

function BoardSizeInput(props) {
  return (
    <div className="size-selector">
      <label>
        Enter board size:
        <input
          type="number"
          value={props.size}
          onChange={(e) => {
            props.setSize(e.target.value);
            props.setBoard(Board(props));
          }}
        ></input>
      </label>
    </div>
  );
}

export default BoardSizeInput;
