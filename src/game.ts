class Game {
  //ATTRIBUTE////////////////////////////
  private playScene: PlayScene;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.playScene = new PlayScene();
  }

  //METHODS//////////////////////////
  //Update
  public update() {
    this.playScene.update()
  }

  //Draw
  public draw() {
    image(images.background, width/2, height/2, windowWidth, windowHeight)
    
    this.playScene.draw()
  }

}
