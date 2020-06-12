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

  treasure.drawTreasure();
  player1.draw();
  player2.draw();
}
