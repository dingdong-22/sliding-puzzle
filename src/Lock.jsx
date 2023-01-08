function Lock(props) {
  if (props.order.length > 0) {
    return (
      <div>
        <button
          className="lock-button"
          onClick={() => {
            if (!props.lock) {
              props.setLock(true);
            } else {
              props.setLock(false);
            }
          }}
        >
          {props.lock ? "Unlock" : "Lock"}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="blank-button"></button>
      </div>
    );
  }
}

export default Lock;
