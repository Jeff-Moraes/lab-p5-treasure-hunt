const game = new Game();

let characterDown;
let characterLeft;
let characterRight;
let characterUp;
let treasureImg;
let background1;
function preload() {
  characterDown = loadImage("assets/character-down.png");
  characterLeft = loadImage("assets/character-left.png");
  characterRight = loadImage("assets/character-right.png");
  characterUp = loadImage("assets/character-up.png");
  treasureImg = loadImage("assets/treasure.png");
  background1 = loadImage("assets/background.jpeg");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  background(background1);
  game.drawGrid();

  game.treasure.drawTreasure();
  game.player1.draw();
  game.player2.draw();
}

function keyPressed() {
  if (keyCode === 37 && game.player1.col > 0) {
    game.player1.moveLeft();
  } else if (keyCode === 39 && game.player1.col < 1000 - side) {
    game.player1.moveRight();
  } else if (keyCode === 40 && game.player1.row < 1000 - side) {
    game.player1.moveDown();
  } else if (keyCode === 38 && game.player1.row > 0) {
    game.player1.moveUp();
  }
  if (keyCode === 65 && game.player2.col > 0) {
    game.player2.moveLeft();
  } else if (keyCode === 68 && game.player2.col < 1000 - side) {
    game.player2.moveRight();
  } else if (keyCode === 83 && game.player2.row < 1000 - side) {
    game.player2.moveDown();
  } else if (keyCode === 87 && game.player2.row > 0) {
    game.player2.moveUp();
  }
}
