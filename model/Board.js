import Cell from "./Cell.js";

export default class Board {
  constructor(players) {
    if (!players || players.length !== 2) throw new Error("Invalid number of players");
    
    this.board = [];
    this.players = players;
    this.currentPlayerIndex = 0;

    for (let i = 0; i < 3; i++) {
      this.board[i] = [];
      for (let j = 0; j < 3; j++) {
        this.board[i][j] = new Cell(i, j);
      }
    }
  }

  isFull() {
    for (let row of this.board) {
      for (let cell of row) {
        if (cell.emptyCell) {
          return false;
        }
      }
    }
    return true;
  }

  #canPlay(row, column) {
    return this.board[row][column].emptyCell;
  }

  tryPlay(row, column) {
    if (!this.#canPlay(row, column)) return false;

    const currentPlayer = this.players[this.currentPlayerIndex];
    this.board[row][column].emptyCell = false;
    this.board[row][column].shape = currentPlayer.shape;
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;

    return true;
  }
}
