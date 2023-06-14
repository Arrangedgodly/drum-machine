import { useState, useEffect } from "react";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    keyCode: 81,
    id: "Heater-1",
  },
  {
    key: "W",
    keyCode: 87,
    id: "Heater-2",
  },
  {
    key: "E",
    keyCode: 69,
    id: "Heater-3",
  },
  {
    key: "A",
    keyCode: 65,
    id: "Heater-4_1",
  },
  {
    key: "S",
    keyCode: 83,
    id: "Cev_H2",
  },
  {
    key: "D",
    keyCode: 68,
    id: "Dsc_Oh",
  },
  {
    key: "Z",
    keyCode: 90,
    id: "Kick_n_Hat",
  },
  {
    key: "X",
    keyCode: 88,
    id: "RP4_KICK_1",
  },
  {
    key: "C",
    keyCode: 67,
    id: "Heater-6",
  },
];

function App() {
  const [recentSound, setRecentSound] = useState("");

  const playSound = (audioId) => {
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
      audioElement.play();
    }
  };

  const handleKeyPress = (event) => {
    const pressedKeyCode = event.keyCode;
    const drumPad = drumPads.find((pad) => pad.keyCode === pressedKeyCode);
    if (drumPad) {
      setRecentSound(drumPad.id);
      playSound(drumPad.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <main className="main">
      <div className="drum-container" id="drum-machine">
        <div className="drums">
          {drumPads.map((drumPad) => (
            <button
              className="drum-pad"
              id={drumPad.id}
              key={drumPad.id}
              onClick={() => {
                setRecentSound(drumPad.id);
                playSound(drumPad.key);
              }}
            >
              <audio
                className="clip"
                id={drumPad.key}
                src={`https://s3.amazonaws.com/freecodecamp/drums/${drumPad.id}.mp3`}
              />
              {drumPad.key}
            </button>
          ))}
        </div>
        <div className="display" id="display">
          <h2 className="display-head">Recent Sound</h2>
          <div className="display-text">
            <p>{recentSound}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
