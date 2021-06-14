import React, { useState } from "react";
import "./App.css";
import { GameOfLife } from "./components/GameOfLife";

function App() {
  const [speed, setSpeed] = useState(5999);
  const [pause, setPause] = useState(false);
  return (
    <div className="App">
      <div className="App-header">
        <input
          id="speed"
          type="range"
          min="2500"
          max="5999"
          value={speed}
          onChange={(event) => setSpeed(parseInt(event.target.value))}
          step="1"
        />
        <button onClick={() => setPause(!pause)}>Pause</button>
        {speed}
        <GameOfLife gameSpeed={6000 - speed} pause={pause} />
      </div>
    </div>
  );
}

export default App;
