let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let gameBoard = document.getElementById("gameboard");
let playBtn = document.getElementsByClassName("playBtn");

const grid = [];
const bottomLine = [5, 5, 5, 5, 5, 5, 5];

for (const column of Array.from(document.getElementsByClassName("column"))) {
  grid.push(Array.from(column.children));
}

//Toggle player in Paragraph Element and put chips
function handleClick(column) {
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

  checkWinner(currentCircle, column);

  bottomLine[column] = bottomLine[column] - 1;
}

function checkWinner(currentCircle, column) {
  const winnerArray = [currentCircle];

  // Check horizontally
  let leftCircle;

  for (let i = column - 1; i >= 0; i--) {
    leftCircle = grid[i][bottomLine[column]];

    if (leftCircle.className == currentCircle.className) {
      winnerArray.unshift(leftCircle);
    } else {
      break;
    }
  }

  let rightCircle;

  for (let e = column + 1; e <= 5; e++) {
    rightCircle = grid[e][bottomLine[column]];

    if (rightCircle.className == currentCircle.className) {
      winnerArray.push(rightCircle);
    } else {
      break;
    }
  }

  if (winnerArray.length === 4) {
    alert("Congratulations! You are the winner !!!");
  }

  // Check below currentCircle
}
