import React, { useEffect, useState } from "react";

const dead = "grey";
const alive = "green";

export type CellProps = {
  isAlive: boolean;
  gameState: boolean[];
  setGameState: (state: boolean[]) => void;
  index: number;
};

export const Cell: React.FunctionComponent<CellProps> = ({
  isAlive,
  gameState,
  setGameState,
  index,
}) => {
  const [color, setColor] = useState(dead);

  useEffect(() => {
    // change color if our life state changes
    if (isAlive) {
      setColor(alive);
    } else {
      setColor(dead);
    }
  }, [isAlive]);

  const onClick = () => {
    gameState[index] = !gameState[index];
    setGameState(gameState);
    setColor(gameState[index] ? alive : dead);
  };

  return (
    <div
      onClick={onClick}
      className="cell"
      style={{ backgroundColor: color }}
    />
  );
};
