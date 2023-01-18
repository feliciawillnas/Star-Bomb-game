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
    image(backgroundImg, width/2, height/2, windowWidth, windowHeight)
    
    playScene.draw()
  }

}
