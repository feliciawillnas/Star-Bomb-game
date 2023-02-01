//---- GLOBAL VARIABLES ----//
/*Instances*/
let game: Game;
let images: Images;
let sounds: Sounds;
let slider: any;
let slider2: any;

interface Images {
  background: p5.Image;
  galaxGoal: p5.Image;
  playboardBG: p5.Image;
  rocketImgPink1: p5.Image;
  rocketImgBlue1: p5.Image;
  rocketImgPink2: p5.Image;
  rocketImgBlue2: p5.Image;
  neonGreenBombBig: p5.Image;
  rocketImgBlue1Big: p5.Image;
  rocketImgPink2Big: p5.Image;
  explosion: p5.Image;
  rocketImgBlue1gif: p5.Image;
  rocketImgPink1gif: p5.Image;
  redBomb: p5.Image;
  startSceneBlueRocket: p5.Image; 
  startScenePinkRocket: p5.Image;

  // neonGreenBomb: p5.Image;
  neonGreenBombStor: p5.Image;
  neonGreenBombClear: p5.Image;
  powerUpIconSlowDown: p5.Image;
  powerupIconReverseControls: p5.Image;
  powerUpIconGoalShield: p5.Image;
  powerUpIconSmallPlayer: p5.Image;
  powerUpIconBonusPoints: p5.Image;
}

interface Sounds {
  // bang: p5.SoundFile;
  // pop: p5.SoundFile;
  startSceneLoop: p5.SoundFile;
  gameMusic: p5.SoundFile;
  endSceneMusic: p5.SoundFile;
  bombExplosion: p5.SoundFile;
  goalSound: p5.SoundFile;
  powerUpSound: p5.SoundFile;
}

let gameFont: p5.Font;
let symbolFont: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // SOUNDS ///////////////////
  sounds = {
    startSceneLoop: loadSound("../assets/sounds/startscene_loop.mp3"),
    gameMusic: loadSound("../assets/sounds/star_rider.mp3"),
    endSceneMusic: loadSound("../assets/sounds/screenHeroes.mp3"),
    bombExplosion: loadSound("../assets/sounds/distant-explosion.mp3"),
    goalSound: loadSound("../assets/sounds/goal-sound.mp3"),
    powerUpSound: loadSound("../assets/sounds/powerup-sound.mp3"),
  };
  // IMGAES //////////////////
  images = {
    background: loadImage("../assets/images/background.jpg"),
    galaxGoal: loadImage("../assets/images/galax.jpg"),
    playboardBG: loadImage("../assets/images/playboardBackground.png"),
    rocketImgBlue1: loadImage("../assets/images/blueRocket1.png"),
    rocketImgPink1: loadImage("../assets/images/pinkRocket1.png"),
    rocketImgBlue2: loadImage("../assets/images/blueRocket2.png"),
    rocketImgPink2: loadImage("../assets/images/pinkRocket2.png"),
    rocketImgBlue1gif: loadImage("../assets/images/blueRocket.gif"),
    rocketImgPink1gif: loadImage("../assets/images/pinkRocket.gif"),

    redBomb: loadImage("../assets/images/neonGreenBombRed.png"),

    startSceneBlueRocket: loadImage("../assets/images/startscenerocket.png"),
    startScenePinkRocket: loadImage("../assets/images/startscenerocketpink.png"),


    // neonGreenBomb: loadImage("../assets/images/neonGreenBomb.png"),
    neonGreenBombBig: loadImage("../assets/images/neonGreenBombBig.png"),
    neonGreenBombStor: loadImage("../assets/images/neonGreenBombClear.png"),
    neonGreenBombClear: loadImage("../assets/images/neonGreenBombClear.png"),
    rocketImgBlue1Big: loadImage("../assets/images/blueRocket1big.png"),
    rocketImgPink2Big: loadImage("../assets/images/pinkRocket2big.png"),
    explosion: loadImage("../assets/images/explosion.png"),

    powerUpIconSlowDown: loadImage("../assets/images/slow-down-powerup.png"),
    powerupIconReverseControls: loadImage("../assets/images/reverse-controls-powerup.png"),
    powerUpIconGoalShield: loadImage("../assets/images/goal-shield-powerup.png"),
    powerUpIconSmallPlayer: loadImage("../assets/images/small-player-powerup.png"),
    powerUpIconBonusPoints: loadImage("../assets/images/bonus-points-powerup.png"),
  };

  // FONTS ////////////////////

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
  // MUSIC TURNED OFF DURING DEVELOPMENT!!!
  slider = createSlider(0, 1, 0.0, 0.01);
  slider.position(10, 25);
  slider.style("width", "80px");

    /** Second slider - sound effects **/
  slider2 = createSlider(0, 1, 0.0, 0.01);
  slider2.position(10, 65);

  slider2.style("width", "80px");

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
  /** First slider - music **/
  sounds.startSceneLoop.setVolume(slider.value());
  sounds.gameMusic.setVolume(slider.value());
  sounds.endSceneMusic.setVolume(slider.value());

  /** Second slider - sound effects **/
  sounds.bombExplosion.setVolume(slider2.value());
  sounds.powerUpSound.setVolume(slider2.value());

  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
