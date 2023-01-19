class Game {
  //ATTRIBUTE////////////////////////////

  //CONSTRUCTOR////////////////////////
  constructor() {

  }

  //METHODS//////////////////////////
  //Update
  public update() {
    playScene.update();
    startScene.update();
  };

  //Draw
  public draw() {
    image(backgroundImg, width/2, height/2, windowWidth, windowHeight);
    
    if(playScene.scene == "playScene"){
      playScene.draw();
    }

    if (startScene.scene == "startScene"){
      startScene.draw();
    };
  };
};
