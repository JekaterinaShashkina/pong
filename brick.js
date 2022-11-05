export default class Brick {
  constructor(brickElem) {
    this.brickElem = brickElem;
  }
}
// function initBricks() {
//   let brickField = [];
//   const topMargin = 50;
//   const colors = ["blue", "yellow", "green", "red", "orange"];

//   for (let row = 0; row < brick.rows; row++) {
//     for (let col = 0; col < brick.cols; col++) {
//       brickField.push({
//         x: col * brick.width + 120,
//         y: row * brick.height + topMargin,
//         height: brick.height,
//         width: brick.width,
//         color: colors[row],
//         // points: (5 - row) * 2,
//         // hitsLeft: row === 0 ? 2 : 1,
//       });
//     }
//   }
// }
