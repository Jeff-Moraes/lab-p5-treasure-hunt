class Game {
  constructor() {
    this.player1 = new Player(0, 0);
    this.player2 = new Player(900, 900);
    this.treasure = new Treasure();
    this.background1;
  }
  preloadGame() {
    this.player1.preloadPlayer();
    this.player2.preloadPlayer();
    this.treasure.preloadTreasure();
    this.background1 = loadImage("assets/background.jpeg");
  }
  setGame() {
    this.treasure.setRandomPosition();
  }
  drawGrid() {
    let linePosition = 0;
    for (let i = 0; i <= 10; i++) {
      stroke("white");
      line(0, linePosition, WIDTH, linePosition);
      line(linePosition, 0, linePosition, WIDTH);
      linePosition += SQUARE_SIDE;
    }
  }
  drawGame() {
    clear();
    background(this.background1);
    this.drawGrid();
    this.treasure.drawTreasure();
    this.player1.draw();
    this.player2.draw();
  }
}
