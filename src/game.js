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
    game.treasure.setRandomPosition();
    game.treasure.drawTreasure();
    console.log(this.score);
  }
  draw() {
    image(this.image || characterDown, this.col, this.row, side, side);
    if (this.col === game.treasure.col && this.row === game.treasure.row) {
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

class Game {
  constructor() {
    this.player1 = new Player(0, 0);
    this.player2 = new Player(900, 900);
    this.treasure = new Treasure();

    this.firstPoint = 0;
    this.secondPoint = WIDTH;
    this.lines = 10;
    this.squareSize = SQUARE_SIDE;
  }
  drawGrid() {
    let linePosition = 0;
    for (let i = 0; i <= this.lines; i++) {
      stroke("white");
      line(this.firstPoint, linePosition, this.secondPoint, linePosition);
      line(linePosition, this.firstPoint, linePosition, this.secondPoint);
      linePosition += this.squareSize;
    }
  }
}

let side = SQUARE_SIDE;
