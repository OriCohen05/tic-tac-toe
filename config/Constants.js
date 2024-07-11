const Cell = require('../model/Cell.js');

const Constants = {
    BOARD_GRID_COLUMNS : 3,
    BOARD_GRID_ROWS : 3,
    EMPTY_CELL: new Cell(),
    GAME_STATUS: {
      IN_PROGRESS: 'IN_PROGRESS',
      DRAW: 'DRAW',
      WIN: 'WIN'
    }
  };
  
module.exports = Constants;