class Treasure {
  constructor() {
    this.row = 100;
    this.col = 200;
    this.treasureImg;
  }
  preloadTreasure() {
    this.treasureImg = loadImage("assets/treasure.png");
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    this.row = Math.floor(Math.random() * 10) * SQUARE_SIDE;
  }
  drawTreasure() {
    image(this.treasureImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
