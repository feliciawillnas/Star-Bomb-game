class Game {
  /* ------------------
        ATTRIBUTES
  ------------------ */
  public scene: string;
  public playScene: PlayScene;
  private startScene: StartScene;
  private endScene: EndScene;

  /* --------------------
        CONSTRUCTOR
  -------------------- */
  constructor() {
    this.scene = "startScene"; // Activates the first scene of the game.
    this.playScene = new PlayScene();
    this.startScene = new StartScene();
    this.endScene = new EndScene(this.playScene);
  }

  /* ------------------
        METHODS
  ------------------ */
  //Update
  public update() {
    this.startSceneMusic();
    this.endSceneMusic();

    this.startGame();
    this.endGame();
    this.restartGame();

    if (this.scene == "playScene") {
      this.playScene.update();
    }
  }

  //Draw
  public draw() {
    image(images.background, width / 2, height / 2, windowWidth, windowHeight);

    if (this.scene == "playScene") {
      this.playScene.draw();
    }
    if (this.scene == "startScene") {
      this.startScene.draw();
    }
    if (this.scene == "endScene") {
      this.endScene.draw();
    }
  }

  // Loops the music during the start scene of the game.
  private startSceneMusic() {
    if (this.scene == "startScene") {
      if (!sounds.startSceneLoop.isPlaying()) {
        sounds.startSceneLoop.loop();
      }
    }
  }

  // Starts playScene when space-key is pressed. Also activates the gameMusic.
  public startGame() {
    if (this.scene == "startScene" && keyIsDown(32)) {
      sounds.startSceneLoop.stop();
      this.scene = "playScene";

      if (!sounds.gameMusic.isPlaying()) {
        sounds.gameMusic.loop();
      }
    }
  }

  public endGame() {
    if (
      this.playScene.gameTimeMin < 0 &&
      this.playScene.gameTimeSec < 0 &&
      this.scene == "playScene"
    ) {
      this.scene = "endScene";
    }
  }

  private endSceneMusic() {
    if (this.scene == "endScene") {
      sounds.gameMusic.stop();
      if (!sounds.endSceneMusic.isPlaying()) {
        sounds.endSceneMusic.loop();
      }
    }
  }

  private restartGame() {
    if (this.scene == "endScene" && keyIsDown(32)) {
      sounds.endSceneMusic.stop();
      this.scene = "playScene";
      sounds.gameMusic.loop();
      this.playScene = new PlayScene();
    }
  }
}
