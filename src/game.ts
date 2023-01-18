class Game {
  //ATTRIBUTE////////////////////////////

  //CONSTRUCTOR////////////////////////
  constructor() {

  }

  //METHODS//////////////////////////
  //Update
  public update() {

    playScene.update()
  }

  //Draw
  public draw() {
    imageMode(CORNER)
    image(backgroundImg, 0, 0, windowWidth, windowHeight)

    playScene.draw()
  }


}
