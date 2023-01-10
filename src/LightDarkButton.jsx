import { useState } from "react";

function LightDarkButton() {
  let [mode, setMode] = useState(false);

  function switchModes() {
    document.body.classList.toggle("dark");
    setMode(!mode);
  }

  return (
    <div>
      {mode ? (
        <button className="mode-switch-button" onClick={() => switchModes()}>
          dark
        </button>
      ) : (
        <button className="mode-switch-button" onClick={() => switchModes()}>
          light
        </button>
      )}
    </div>
  );
}

export default LightDarkButton;
