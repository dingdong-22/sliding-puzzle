function Lock(props) {
  if (props.order.length > 0) {
    return (
      <div>
        <button
          className="lock-button"
          onClick={() => {
            props.setLock(!props.lock);
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
