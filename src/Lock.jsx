function Lock(props) {
  if (props.shuffled) {
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
          lock
        </button>
      </div>
    );
  }
}

export default Lock;
