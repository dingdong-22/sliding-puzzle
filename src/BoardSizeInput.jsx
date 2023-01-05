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
            console.log(props.size);
          }}
        ></input>
      </label>
    </div>
  );
}

export default BoardSizeInput;
