function AnswerDisplay(props) {
  function createDisplay() {
    let mapping = props.answer.map((x, i) => {
      return (
        <div className="answer-value" id={`pos${i}`} key={i}>
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
