const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setGame();
}

function draw() {
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 37 && game.player1.col > 0) {
    game.player1.moveLeft();
  } else if (keyCode === 39 && game.player1.col < WIDTH - SQUARE_SIDE) {
    game.player1.moveRight();
  } else if (keyCode === 40 && game.player1.row < WIDTH - SQUARE_SIDE) {
    game.player1.moveDown();
  } else if (keyCode === 38 && game.player1.row > 0) {
    game.player1.moveUp();
  }
  if (keyCode === 65 && game.player2.col > 0) {
    game.player2.moveLeft();
  } else if (keyCode === 68 && game.player2.col < WIDTH - SQUARE_SIDE) {
    game.player2.moveRight();
  } else if (keyCode === 83 && game.player2.row < WIDTH - SQUARE_SIDE) {
    game.player2.moveDown();
  } else if (keyCode === 87 && game.player2.row > 0) {
    game.player2.moveUp();
  }
}
