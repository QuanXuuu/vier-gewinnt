let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let gameBoard = document.getElementById("gameboard");
let playBtn = document.getElementsByClassName("playBtn");

const grid = [];

for (const column of Array.from(document.getElementsByClassName("column"))) {
  grid.push(Array.from(column.children));
}

console.log(grid[1][0]);

function handleClick() {
  let Player = document.getElementById("player");

  if (Player.innerText === "red") {
    Player.innerText = "yellow";
  } else {
    Player.innerText = "red";
  }
}
