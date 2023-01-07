function Lock(props) {
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
        {props.lock ? "unlock" : "lock"}
      </button>
    </div>
  );
}

export default Lock;
