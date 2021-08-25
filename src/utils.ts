function getWinner(board: string[]): Record<string, boolean> {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const xWin = combinations
    .map((combination) => isWinnerFound(combination, board) === "xWin")
    .some((value) => value);

  const oWin = combinations
    .map((combination) => isWinnerFound(combination, board) === "oWin")
    .some((value) => value);

  return { xWin, oWin, draw: isAllCellsFilled(board) };
}

function isWinnerFound(combination: number[], board: string[]): string | null {
  const first: string = board[combination[0]];
  const second: string = board[combination[1]];
  const third: string = board[combination[2]];

  const xWin = first === "x" && second === "x" && third === "x";
  const oWin = first === "o" && second === "o" && third === "o";

  if (xWin) return "xWin";
  if (oWin) return "oWin";

  return null;
}

const isAllCellsFilled = (board: string[]): boolean =>
  board.every((cell) => cell !== "");

export { getWinner };
