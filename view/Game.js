//const { BOARD_GRID_COLUMNS, BOARD_GRID_ROWS } = require("../config/Constants");


const BOARD_GRID_COLUMNS = 3, BOARD_GRID_ROWS = 3;


document.addEventListener('DOMContentLoaded',() => {
  const ticTacToeContainer = document.getElementById("tic-tac-toe");

  for (let i = 0; i < BOARD_GRID_COLUMNS * BOARD_GRID_ROWS; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    ticTacToeContainer.appendChild(cell);
  }
});

