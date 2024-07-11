import Board from "../model/Board.js";
import Shape from "../model/Shape.js";

const board = new Board();
const cells = [];

const BOARD_GRID_COLUMNS = 3,
  BOARD_GRID_ROWS = 3;

document.addEventListener("DOMContentLoaded", () => {
  const ticTacToeContainer = document.getElementById("tic-tac-toe");

  for (let i = 0; i < BOARD_GRID_COLUMNS * BOARD_GRID_ROWS; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    cell.dataset.row = Math.floor(i / BOARD_GRID_COLUMNS);
    cell.dataset.column = i % BOARD_GRID_COLUMNS;

    cell.addEventListener("click", () => handleClick(cell));

    cells.push(cell);
    ticTacToeContainer.appendChild(cell);
}
});

function handleClick(clickedCell) {
    const { row, column } = clickedCell.dataset;
    
    if (board.TryPlay(row, column, Shape.X)) {
        renderBoard();
        
        if (checkWin()) {
            displayMessage(`${Shape.X} wins!`);
            disableClicks();
        } else if (checkDraw()) {
            displayMessage(`It's a draw!`);
            disableClicks();
        } else {
            // Switch turns or perform any other game logic 
        }
    } else {
        displayMessage(`Invalid move!`);
    }
}

function renderBoard() {
    for (let row = 0; row < BOARD_GRID_ROWS; row++) {
        for (let column = 0; column < BOARD_GRID_COLUMNS; column++) {
            const cellIndex = row * BOARD_GRID_COLUMNS + column;
            const cellElement = cells[cellIndex];
            cellElement.textContent = board.board[row][column].shape;
        }
    }
}

function checkWin() {
    // Implement win condition logic here
}

function checkDraw() {
    // Implement draw condition logic here
}

function displayMessage(message) {
    const statusDisplay = document.getElementById('status');
    statusDisplay.textContent = message;
}

function disableClicks() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}