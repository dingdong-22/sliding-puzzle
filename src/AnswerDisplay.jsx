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

  return <div className="display-container">{createDisplay()}</div>;
}

export default AnswerDisplay;
