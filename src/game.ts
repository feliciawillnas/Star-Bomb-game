interface IStartGame {
  startGame(): void;
}

class Game implements IStartGame {
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
    this.endScene = new EndScene();
  }

  //METHODS//////////////////////////////
  //Update
  public update() {
    if (this.scene == "playScene") {
      this.playScene.update();
    }
    if (this.scene == "startScene") {
      this.startScene.update();
    }
  }

  //Draw
  public draw() {
    this.startGame();
    this.startSceneMusic();

    image(images.background, width / 2, height / 2, windowWidth, windowHeight);

    if (this.scene == "playScene") {
      this.playScene.draw();
    }
    if (this.scene == "startScene") {
      this.startScene.draw();
    }
  }

  private startSceneMusic() {
    if (this.scene == "startScene") {
      // sounds.startSceneMusic.loop();
      if (!sounds.startSceneLoop.isPlaying()) {
        sounds.startSceneLoop.loop();
        sounds.gameMusic.stop();
      }
    }
  }

  public startGame() {
    if (keyIsDown(32)) {
      this.scene = "playScene";
      sounds.gameMusic.loop();
      sounds.startSceneLoop.stop();
    }
  }
}
