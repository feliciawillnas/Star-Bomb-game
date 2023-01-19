//---- GLOBAL VARIABLES ----//
//let explosion: p5.Image;
//let bomb : Bomb;
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
  neonGreenBomb: p5.Image;
}

interface Sounds {
  bang: p5.SoundFile;
  pop: p5.SoundFile;
  music: p5.SoundFile;
}

// let sound: p5.SoundFile
let gameFont: p5.Font;
/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
  images = {
    background: loadImage('../assets/images/background.jpg'),
    galaxGoal: loadImage('../assets/images/galax.jpg'),
    playboardBG: loadImage('../assets/images/playboardBackground.png'),
    rocketImgBlue1: loadImage('../assets/images/bluerocket1.png'),
    rocketImgPink1: loadImage('../assets/images/pinkrocket1.png'),
    rocketImgBlue2: loadImage('../assets/images/bluerocket2.png'),
    rocketImgPink2: loadImage('../assets/images/pinkrocket2.png'),
    neonGreenBomb: loadImage('../assets/images/neonGreenBomb.png')
  }
  gameFont = loadFont('../assets/fonts/PressStart2P-Regular.ttf');
  //explosion = loadImage('../assets/images/boom.png');
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

  imageMode(CENTER)
  rectMode(CENTER)
  textAlign(CENTER)
  angleMode(DEGREES)
  textFont(gameFont);
  //bomb = new Bomb();
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
