interface IStartGame {
  startGame(): void;
}

class Game {
  //ATTRIBUTE////////////////////////////
  public scene: string;
  public playScene: PlayScene;
  private startScene: StartScene;
  private endScene: EndScene;

  //CONSTRUCTOR//////////////////////////
  constructor() {
    this.scene = "startScene"; //Ändra denna för att till startscene när vi är klara. "startScene"
    this.playScene = new PlayScene();
    this.startScene = new StartScene(game);
    this.endScene = new EndScene(game);
  }

  //METHODS//////////////////////////////
  //Update
  public update() {
    this.endGame();

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

    image(images.background, width / 2, height / 2, windowWidth, windowHeight);

    // BRYT UT TILL EGEN METOD
    if (this.scene == "playScene") {
      this.playScene.draw();
    }
    if (this.scene == "startScene") {
      this.startScene.draw();
      this.startSceneMusic();
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
    if (this.scene == "endScene") {
      this.endScene.draw();
    }
  }

  // Starts playScene when space-key is pressed. Also activates the gameMusic.
  public startGame() {
    if (keyIsDown(32)) {
      this.scene = "playScene";
      if (!sounds.gameMusic.isPlaying()) {
        sounds.gameMusic.loop();
      }
      sounds.startSceneLoop.stop();
    }
  }

  public endGame() {
    if (game.playScene.gameTime < 0 && this.scene == "playScene") {
      this.scene = "endScene";
    }
  }
}
