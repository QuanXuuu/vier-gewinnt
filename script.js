let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let gameBoard = document.getElementById("gameboard");
let playBtn = document.getElementsByClassName("playBtn");

const grid = [];
const bottomLine = [5, 5, 5, 5, 5, 5, 5];

for (const column of Array.from(document.getElementsByClassName("column"))) {
  grid.push(Array.from(column.children));
}

function handleClick(column) {
  //Toggle player in Paragraph Element
  //Put chips

  let Player = document.getElementById("player");

  const currentCircle = grid[column][bottomLine[column]];

  if (Player.innerText === "red") {
    Player.innerText = "yellow";
    Player.style.color = "orange";
    currentCircle.classList.add("circleRed");
  } else {
    Player.innerText = "red";
    Player.style.color = "red";
    currentCircle.classList.add("circleYellow");
  }

  checkWinner();
  bottomLine[column] = bottomLine[column] - 1;
}

function checkWinner() {
  console.log("test");

  //window.alert("You are the Winner!!!");
}
