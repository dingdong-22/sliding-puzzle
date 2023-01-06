function PlayButton(props) {
  return (
    <div>
      <button
        className="play-button"
        onClick={() => {
          if (!props.play) {
            props.setPlay(true);
          } else {
            props.setPlay(false);
          }
        }}
      >
        play
      </button>
    </div>
  );
}

export default PlayButton;
