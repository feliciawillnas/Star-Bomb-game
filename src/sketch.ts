//---- GLOBAL VARIABLES ----//
//let explosion: p5.Image;
//let bomb : Bomb;
let game: Game;
let playScene: PlayScene;
let goal: Goal;
let scoreInterface: ScoreInterface;
// let sound: p5.SoundFile
let backgroundImg: p5.Image;
let galaxGoalImg: p5.Image;
let playboardBGImg: p5.Image;
let gameFont: p5.Font;
/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
  backgroundImg = loadImage('../assets/images/background.jpg');
  galaxGoalImg = loadImage('../assets/images/galax.jpg')
  playboardBGImg = loadImage('../assets/images/playboardBackground.png')
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
  playScene = new PlayScene();
  goal = new Goal();
  scoreInterface = new ScoreInterface();
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
