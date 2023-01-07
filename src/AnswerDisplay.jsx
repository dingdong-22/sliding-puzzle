function AnswerDisplay(props) {
  function createDisplay() {
    let mapping = props.answer.map((x, i) => {
      return (
        <div id={`pos${i}`} className="answer-value">
          {x}
        </div>
      );
    });
    return mapping;
  }
  if (props.answer.length > 0) {
    return (
      <div>
        <p className="moves-left">Moves left {props.answer.length}</p>
        <div className="display-container">{createDisplay()}</div>
      </div>
    );
  }
}

export default AnswerDisplay;
