interface IStartGame {
  //IGame
  startGame(): void;
}
interface IEndGame {
  endGame(): void;
}

class Game implements IStartGame, IEndGame {
  //ATTRIBUTE////////////////////////////
  public scene: string;
  public playScene: PlayScene;
  private startScene: StartScene;
  private endScene: EndScene;

  //CONSTRUCTOR//////////////////////////
  constructor() {
    this.scene = "startScene"; //Ändra denna för att till startscene när vi är klara. "startScene"
    this.playScene = new PlayScene();
    this.startScene = new StartScene(this);
    this.endScene = new EndScene(this);
  }

  //METHODS//////////////////////////////
  //Update
  public update() {
    this.startSceneMusic();
    this.endSceneMusic();

    if (this.scene == "playScene") {
      this.playScene.update();
    }
    if (this.scene == "startScene") {
      this.startScene.update();
    }
    if (this.scene == "endScene") {
      this.endScene.update();
    }
  }

  //Draw
  public draw() {
    this.startGame();
    this.endGame();
    this.restartGame();
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
      game.playScene.gameTimeMin < 0 &&
      game.playScene.gameTimeSec < 0 &&
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
