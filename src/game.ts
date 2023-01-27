// interface IStartGame {
//   startGame(): void;
// }
// class Game implements IStartGame { //kommenterat ut pga fel, ska vi ha kvar?

class Game {
  //ATTRIBUTE////////////////////////////
  public scene: string;
  public playScene: PlayScene;
  private startScene: StartScene;
  private endScene: EndScene;

  //CONSTRUCTOR//////////////////////////
  constructor() {
    this.scene = "endScene"; //Ändra denna för att till startscene när vi är klara. "startScene"
    this.playScene = new PlayScene();
    this.startScene = new StartScene(game);
    this.endScene = new EndScene(game);
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
    if (this.scene == "endScene") {
      this.endScene.update();
    }  
  }
  
    public startGame() {
      if (keyIsDown(32)) {
        this.scene = "playScene";
      }
    }
    
  //Draw
  public draw() {
    // this.startGame();
    image(images.background, width / 2, height / 2, windowWidth, windowHeight);

    if (this.scene == "playScene") {
      this.playScene.draw();
    }
    if (this.scene == "startScene") {
      this.startScene.draw();
    }
    if (this.scene == "endScene") {
      this.endScene.draw();
    }  }
  }

