const getLeftNeighbour = (index: number, rowSize: number) => {
  return index % rowSize === 0 ? index + rowSize - 1 : index - 1;
};

const getRightNeighbour = (index: number, rowSize: number) => {
  return index % rowSize === rowSize - 1 ? index - rowSize + 1 : index + 1;
};

export const shouldBeAlive = (
  index: number,
  gameState: boolean[],
  rowSize: number
) => {
  const gameSize = gameState.length;
  let aliveNeighbours = 0;

  // neighbours on top
  const topNeighbour =
    index < rowSize ? gameSize + index - rowSize : index - rowSize;
  if (gameState[topNeighbour]) {
    aliveNeighbours++;
  }

  const topLeftNeighbour = getLeftNeighbour(topNeighbour, rowSize);
  if (gameState[topLeftNeighbour]) {
    aliveNeighbours++;
  }

  const topRightNeighbour = getRightNeighbour(topNeighbour, rowSize);
  if (gameState[topRightNeighbour]) {
    aliveNeighbours++;
  }

  // bottom neighbours
  const bottomNeighbour =
    gameSize - index <= rowSize ? index % rowSize : index + rowSize;
  if (gameState[bottomNeighbour]) {
    aliveNeighbours++;
  }

  const bottomLeftNeighbour = getLeftNeighbour(bottomNeighbour, rowSize);
  if (gameState[bottomLeftNeighbour]) {
    aliveNeighbours++;
  }

  const bottomRightNeighbour = getRightNeighbour(bottomNeighbour, rowSize);
  if (gameState[bottomRightNeighbour]) {
    aliveNeighbours++;
  }

  // left neighbour
  const leftNeighbour = getLeftNeighbour(index, rowSize);
  if (gameState[leftNeighbour]) {
    aliveNeighbours++;
  }

  // right neighbour
  const rightNeighbour = getRightNeighbour(index, rowSize);
  if (gameState[rightNeighbour]) {
    aliveNeighbours++;
  }

  // Any live cell with two or three live neighbours survives else it dies.
  if (gameState[index]) {
    if (aliveNeighbours === 2 || aliveNeighbours === 3) {
      return true;
    } else {
      return false;
    }
  }
  // Any dead cell with three live neighbours becomes a live cell.
  if (!gameState[index] && aliveNeighbours === 3) {
    return true;
  }

  // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
  return gameState[index];
};
