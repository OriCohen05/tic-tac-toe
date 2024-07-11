const {BOARD_GRID_COLUMNS, BOARD_GRID_ROWS} = require('../config/Constants');
const Cell = require('./Cell');
const Shape = require('./Shape');


class Board{
    constructor() {
        this.board = [];

        for (let i = 0; i < BOARD_GRID_COLUMNS; i++) {
          this.board[i] = [];
          for (let j = 0; j < BOARD_GRID_ROWS; j++) {
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

}

b = new Board();
console.log(b.isFull());

module.exports = Board;