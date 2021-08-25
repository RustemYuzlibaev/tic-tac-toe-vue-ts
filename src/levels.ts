import { getWinner } from "./utils";

interface Score {
  X: number;
  O: number;
  draw: number;
}

const winTableForX: Score = {
  X: 10,
  O: -10,
  draw: 0,
};

const winTableForO: Score = {
  X: -10,
  O: 10,
  draw: 0,
};

function assertNever(x: never): never {
  throw new Error(`Unexpected value ${x}. Should have been never.`);
}

type Sign = "x" | "o";

const turnOver = (sign: Sign): Sign => {
  switch (sign) {
    case "x":
      return "o";
    case "o":
      return "x";
    default:
      return assertNever(sign);
  }
};

function nextMoveEasy(sign: Sign, board: string[]): number | undefined {
  let cellsAvailable = board.map((cell: string, index: number) => {
    if (cell === "") return index;
  });

  cellsAvailable = cellsAvailable.filter((cell) => cell !== undefined);

  const randomCell =
    cellsAvailable[Math.floor(Math.random() * cellsAvailable.length)];

  if (typeof randomCell === "number") {
    return randomCell;
  }
}

function nextMoveBest(sign: Sign, board: string[]): number {
  let bestScore = -Infinity;
  let move = -1;

  board.forEach((cell, idx, arr) => {
    if (cell === "") {
      arr[idx] = sign;
      const score = minimax(board, false, sign);
      arr[idx] = "";
      if (score > bestScore) {
        bestScore = score;
        move = idx;
      }
    }
  });

  return move;
}

function minimax(board: string[], isMaximazing: boolean, sign: Sign): number {
  const { xWin, oWin, draw } = getWinner(board);

  if (sign === "x") {
    if (xWin) return winTableForX["X"];
    if (oWin) return winTableForX["O"];
    if (draw) return winTableForX["draw"];
  }

  if (sign === "o") {
    if (xWin) return winTableForO["X"];
    if (oWin) return winTableForO["O"];
    if (draw) return winTableForO["draw"];
  }

  if (isMaximazing) {
    let bestScore = -Infinity;

    board.forEach((cell, idx, arr) => {
      if (cell === "") {
        arr[idx] = sign;
        const score = minimax(board, false, sign);
        arr[idx] = "";
        bestScore = Math.max(score, bestScore);
      }
    });

    return bestScore;
  } else {
    let bestScore = Infinity;

    board.forEach((cell, idx, arr) => {
      if (cell === "") {
        arr[idx] = turnOver(sign);
        const score = minimax(board, true, sign);
        arr[idx] = "";
        bestScore = Math.min(score, bestScore);
      }
    });

    return bestScore;
  }
}

export { nextMoveEasy, nextMoveBest, Sign };
