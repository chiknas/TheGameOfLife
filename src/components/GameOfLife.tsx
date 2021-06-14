import React, { useState } from "react";
import { Cell } from "./Cell";
import { shouldBeAlive } from "./gameOfLifeRules";
import "./Grid.css";
import { useInterval } from "./useInterval";

const width = 70;
const height = 40;

export type GameOfLifeProps = {
  gameSpeed: number;
  pause?: boolean;
};

export const GameOfLife: React.FunctionComponent<GameOfLifeProps> = ({
  gameSpeed,
  pause = false,
}) => {
  const [gameState, setGameState] = useState<boolean[]>(
    Array(height * width).fill(false)
  );

  const [frame, setFrame] = useState<JSX.Element[]>(
    Array(height * width).fill(
      <Cell
        gameState={gameState}
        setGameState={setGameState}
        isAlive={gameState[0]}
        index={0}
      />
    )
  );

  useInterval(() => {
    if (!pause) {
      draw();
    }
  }, gameSpeed);
  function draw() {
    // calculate the new life state for each cell
    const newState = gameState.map((value, index) => {
      return shouldBeAlive(index, gameState, width);
    });
    setGameState(newState);

    // generate the cells
    let customIndex = 0;
    const gridTable = Array(height * width).fill(0);
    for (let x = 0; x < gridTable.length; x++) {
      const newCell = (
        <Cell
          gameState={gameState}
          setGameState={setGameState}
          key={customIndex}
          isAlive={gameState[customIndex]}
          index={customIndex}
        />
      );
      customIndex++;
      gridTable[x] = newCell;
    }

    // split cells in columns
    let grid = [];
    for (let x = 0; x < gridTable.length; x = x + width) {
      grid.push(
        <div children={gridTable.slice(x, x + width)} className="row" />
      );
    }

    setFrame(grid);
  }

  return <div className="canvas">{frame}</div>;
};
