class Game {
  //ATTRIBUTE////////////////////////////
  public scene: string;
  //CONSTRUCTOR////////////////////////
  constructor() {
    this.scene = "startScene";
  }

  //METHODS//////////////////////////
  //Update
  public update() {
    if(this.scene == "playScene"){
      playScene.update();
    }
    if (this.scene == "startScene"){
      startScene.update();
    };
  };

  //Draw
  public draw() {
    image(backgroundImg, width/2, height/2, windowWidth, windowHeight);
    
    if(this.scene == "playScene"){
      playScene.draw();
    }
    if (this.scene == "startScene"){
      startScene.draw();
    };
  };
};
