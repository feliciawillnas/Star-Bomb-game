class Game {
  //ATTRIBUTE////////////////////////////
  public scene: string;
  private playScene: PlayScene;
  private startScene: StartScene;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.scene = "startScene";
    this.playScene = new PlayScene();
    this.startScene = new StartScene(game);
  }

  //METHODS//////////////////////////
  //Update
  public update() {
    this.playScene.update();
    if (this.scene == "playScene") {
      this.playScene.update();
    }
    if (this.scene == "startScene") {
      this.startScene.update();
    }
  }

  //Draw
  public draw() {
    image(images.background, width / 2, height / 2, windowWidth, windowHeight);

    this.playScene.draw();
    if (this.scene == "playScene") {
      this.playScene.draw();
    }
    if (this.scene == "startScene") {
      this.startScene.draw();
    }
  }
}
