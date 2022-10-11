let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let gameBoard = document.getElementById("gameboard");

let availableRow = 0;

const grid = [];

for (const column of Array.from(document.getElementsByClassName("column"))) {
  grid.push(Array.from(column.children));
}

console.log(grid);

grid[1][0].innerHTML = "red";
