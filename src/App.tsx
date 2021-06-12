import React from "react";
import "./App.css";
import { GameOfLife } from "./components/GameOfLife";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <GameOfLife gameSpeed={300} canvasOptions={{ width: 50, height: 40 }} />
      </div>
    </div>
  );
}

export default App;
