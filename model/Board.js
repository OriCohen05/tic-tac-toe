//import { BOARD_GRID_COLUMNS, BOARD_GRID_ROWS } from "../config/Constants.js";
import Cell from "./Cell.js";

export default class Board {
  constructor() {
    this.board = [];
    for (let i = 0; i < 3; i++) {
      this.board[i] = [];
      for (let j = 0; j < 3; j++) {
        this.board[i][j] = new Cell(i,j);
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

  #CanPlay(row, column) {
    return this.board[row][column].emptyCell;
  }

  TryPlay(row, column, shape) {
    if (!this.#CanPlay(row, column)) return false;
    this.board[row][column].emptyCell = false;
    this.board[row][column].shape = shape;
    return true;
  }
}
