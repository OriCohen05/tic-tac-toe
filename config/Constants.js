import Cell from '../model/Cell.js';

export default {
    BOARD_GRID_COLUMNS : 3,
    BOARD_GRID_ROWS : 3,
    EMPTY_CELL: new Cell(),
    GAME_STATUS: {
      IN_PROGRESS: 'IN_PROGRESS',
      DRAW: 'DRAW',
      WIN: 'WIN'
    }
  };

