class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
    this.image;
  }
  moveUp() {
    this.row -= side;
    this.image = characterUp;
  }
  moveDown() {
    this.row += side;
    this.image = characterDown;
  }
  moveRight() {
    this.col += side;
    this.image = characterRight;
  }
  moveLeft() {
    this.col -= side;
    this.image = characterLeft;
  }
  playerScore() {
    this.score += 100;
    treasure.setRandomPosition();
    treasure.drawTreasure();
    console.log(this.score);
  }
  draw() {
    image(this.image || characterDown, this.col, this.row, side, side);
    if (this.col === treasure.col && this.row === treasure.row) {
      this.playerScore();
    }
  }
}
class Treasure {
  constructor() {
    this.row = 100;
    this.col = 200;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }
  drawTreasure() {
    image(treasureImg, this.col, this.row, side, side);
  }
}
let side = 100;
const player1 = new Player(0, 0);
const player2 = new Player(900, 900);
const treasure = new Treasure();

class Game {
  constructor() {
    this.firstPoint = 0;
    this.secondPoint = 1000;
    this.lines = 10;
    this.squareHeight = 100;
  }
  drawGrid() {
    let linePosition = 0;
    for (let i = 0; i <= this.lines; i++) {
      line(this.firstPoint, linePosition, this.secondPoint, linePosition);
      line(linePosition, this.firstPoint, linePosition, this.secondPoint);
      stroke("white");
      linePosition += this.squareHeight;
    }
  }
}

function keyPressed() {
  if (keyCode === 37 && player1.col > 0) {
    player1.moveLeft();
  } else if (keyCode === 39 && player1.col < 1000 - side) {
    player1.moveRight();
  } else if (keyCode === 40 && player1.row < 1000 - side) {
    player1.moveDown();
  } else if (keyCode === 38 && player1.row > 0) {
    player1.moveUp();
  }
  if (keyCode === 65 && player2.col > 0) {
    player2.moveLeft();
  } else if (keyCode === 68 && player2.col < 1000 - side) {
    player2.moveRight();
  } else if (keyCode === 83 && player2.row < 1000 - side) {
    player2.moveDown();
  } else if (keyCode === 87 && player2.row > 0) {
    player2.moveUp();
  }
}
