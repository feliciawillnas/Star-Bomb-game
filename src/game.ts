class Game {
  //ATTRIBUTE////////////////////////////
  public playScene: PlayScene

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.playScene = new PlayScene()
  }

  //METHODS//////////////////////////

  //Update//////////////////////////
  public update() {

  }

  //Draw//////////////////////////
  public draw() {
    imageMode(CORNER)
    image(backgroundImg, 0, 0, windowWidth, windowHeight)

    
  }


}
