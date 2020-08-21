class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
    this.image;
  }
  preloadPlayer() {
    this.characterDown = loadImage("assets/character-down.png");
    this.characterLeft = loadImage("assets/character-left.png");
    this.characterRight = loadImage("assets/character-right.png");
    this.characterUp = loadImage("assets/character-up.png");
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
    this.image = this.characterUp;
  }
  moveDown() {
    this.row += SQUARE_SIDE;
    this.image = this.characterDown;
  }
  moveRight() {
    this.col += SQUARE_SIDE;
    this.image = this.characterRight;
  }
  moveLeft() {
    this.col -= SQUARE_SIDE;
    this.image = this.characterLeft;
  }
  playerScore() {
    this.score += 100;
    game.treasure.setRandomPosition();
  }
  draw() {
    image(
      this.image || this.characterDown,
      this.col,
      this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
    if (this.col === game.treasure.col && this.row === game.treasure.row) {
      this.playerScore();
    }
  }
}
