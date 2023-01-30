//---- GLOBAL VARIABLES ----//
/*Instances*/
let game: Game;
let images: Images;
let sounds: Sounds;

interface Images {
  background: p5.Image;
  galaxGoal: p5.Image;
  playboardBG: p5.Image;
  rocketImgPink1: p5.Image;
  rocketImgBlue1: p5.Image;
  rocketImgPink2: p5.Image;
  rocketImgBlue2: p5.Image;
  // neonGreenBomb: p5.Image;
  neonGreenBombBig: p5.Image;
  rocketImgBlue1Big: p5.Image;
  rocketImgPink2Big: p5.Image;
  explosion: p5.Image;

  // neonGreenBomb: p5.Image;
  neonGreenBombStor: p5.Image;
  neonGreenBombClear: p5.Image;
}

interface Sounds {
  // bang: p5.SoundFile;
  // pop: p5.SoundFile;
  gameMusic: p5.SoundFile;
}

let gameFont: p5.Font;
let symbolFont: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
  sounds = {
    gameMusic: loadSound("../assets/sounds/star_rider.mp3"),
  };

  images = {
    background: loadImage("../assets/images/background.jpg"),
    galaxGoal: loadImage("../assets/images/galax.jpg"),
    playboardBG: loadImage("../assets/images/playboardBackground.png"),
    rocketImgBlue1: loadImage("../assets/images/blueRocket1.png"),
    rocketImgPink1: loadImage("../assets/images/pinkRocket1.png"),
    rocketImgBlue2: loadImage("../assets/images/blueRocket2.png"),
    rocketImgPink2: loadImage("../assets/images/pinkRocket2.png"),
    // neonGreenBomb: loadImage("../assets/images/neonGreenBomb.png"),
    neonGreenBombBig: loadImage("../assets/images/neonGreenBombBig.png"),
    neonGreenBombStor: loadImage("../assets/images/neonGreenBombClear.png"),
    neonGreenBombClear: loadImage("../assets/images/neonGreenBombClear.png"),
    rocketImgBlue1Big: loadImage("../assets/images/blueRocket1big.png"),
    rocketImgPink2Big: loadImage("../assets/images/pinkRocket2big.png"),
    explosion: loadImage("../assets/images/explosion.png"),
  };

  gameFont = loadFont("../assets/fonts/PressStart2P-Regular.ttf");
  symbolFont = loadFont("../assets/fonts/symbolerFont.otf");
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  angleMode(DEGREES);
  textFont(gameFont);

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
