const { BOARD_GRID_COLUMNS, BOARD_GRID_ROWS } = require("../config/Constants");
const Cell = require("./Cell");

class Board {
  constructor() {
    this.board = [];

    for (let i = 0; i < BOARD_GRID_ROWS; i++) {
      this.board[i] = [];
      for (let j = 0; j < BOARD_GRID_COLUMNS; j++) {
        this.board[i][j] = new Cell();
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

  #CanPlay(row, column){
    return this.board[row][column].emptyCell;
  }

  TryPlay(row, column, shape) {
    if(!this.#CanPlay(row, column)) return false;
    this.board[row][column].emptyCell = false;
    this.board[row][column].shape = shape;
    return true;
  }

  

}

module.exports = Board;
