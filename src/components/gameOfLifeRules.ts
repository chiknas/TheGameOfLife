export const shouldBeAlive = (
  index: number,
  gameState: boolean[],
  rowSize: number
) => {
  const gameSize = gameState.length;
  let aliveNeighbours = 0;

  // neighbours on top
  if (index > rowSize) {
    const topNeighbour = index - rowSize;
    if (gameState[topNeighbour]) {
      aliveNeighbours++;
    }

    const topLeftNeighbour = topNeighbour - 1;
    if (topLeftNeighbour >= 0 && gameState[topLeftNeighbour]) {
      aliveNeighbours++;
    }

    const topRightNeighbour = topNeighbour + 1;
    if (topRightNeighbour >= 0 && gameState[topRightNeighbour]) {
      aliveNeighbours++;
    }
  }

  // bottom neighbours
  if (gameSize - index > rowSize) {
    const bottomNeighbour = index + rowSize;
    if (bottomNeighbour < gameSize && gameState[bottomNeighbour]) {
      aliveNeighbours++;
    }

    const bottomLeftNeighbour = bottomNeighbour - 1;
    if (bottomLeftNeighbour < gameSize && gameState[bottomLeftNeighbour]) {
      aliveNeighbours++;
    }

    const bottomRightNeighbour = bottomNeighbour + 1;
    if (bottomRightNeighbour < gameSize && gameState[bottomRightNeighbour]) {
      aliveNeighbours++;
    }
  }

  // left neighbour
  const leftNeighbour = index - 1;
  if (leftNeighbour > 0 && gameState[leftNeighbour]) {
    aliveNeighbours++;
  }

  // right neighbour
  const rightNeighbour = index + 1;
  if (rightNeighbour > 0 && gameState[rightNeighbour]) {
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
