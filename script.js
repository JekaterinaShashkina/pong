import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById("ball"));
// const playerPaddle = new Paddle(document.getElementById("player-paddle"));
//const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const bottomPaddle = new Paddle(document.getElementById("bottom-paddle"));
let brick = { rows: 5, cols: 10, width: 100, height: 30 };
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
let brickField = [];
let lastTime;

function initBricks() {
  brickField = [];
  const topMargin = 50;
  const colors = ["blue", "yellow", "green", "red", "orange"];

  for (let row = 0; row < brick.rows; row++) {
    for (let col = 0; col < brick.cols; col++) {
      brickField.push({
        x: col * brick.width,
        y: row * brick.height + topMargin,
        height: brick.height,
        width: brick.width,
        color: colors[row],
        points: (5 - row) * 2,
        hitsLeft: row === 0 ? 2 : 1,
      });
    }
  }
}

initBricks();
const drawBricks = () => {
  for (let i = 0; i < brickField.length; i++) {
    const block = document.createElement("div");

    block.classList.add("block");
    block.height = brickField[i].height;
    block.width = brickField[i].width;
    block.style.backgroundColor = brickField[i].color;

    console.log(brickField[i]);
  }
};

drawBricks();
//* update loop
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    //*update code
    // ball.update(delta, [bottomPaddle.rect()]);
    // computerPaddle.update(delta, ball.y);
    initBricks();
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    );
    document.documentElement.style.setProperty("--hue", hue + delta * 0.01);

    if (isLose()) handleLose();
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

function isLose() {
  const rect = ball.rect();
  return rect.bottom >= window.innerHeight;
  //return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleLose() {
  // const rect = ball.rect();
  // if (rect.right >= window.innerWidth) {
  //   playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
  // } else {
  //   computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1;
  // }
  ball.reset();
  // computerPaddle.reset();
}

document.addEventListener("mousemove", (e) => {
  // console.log(e);
  bottomPaddle.position = (e.x / window.innerWidth) * 100;
  //playerPaddle.position = (e.y / window.innerHeight) * 100;
  // console.log(bottomPaddle.position);
});

window.requestAnimationFrame(update);
