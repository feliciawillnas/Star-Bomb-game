class PlayScene {
  //ATTRIBUTE////////////////////////////
  // Playground widht & height
  private rectW: number;
  private rectH: number;
  // Goal widht & height
  private goalW: number;
  private goalH: number;
  //CONSTRUCTOR////////////////////////
  constructor() {
    this.rectW = 650;
    this.rectH = 350;

    this.goalW = 100;
    this.goalH = 125;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    push();
    fill("black");
    rect(width / 2, height / 2 + 30, this.rectW, this.rectH);
    pop();

    push();
    stroke("white");
    // image(galaxGoalImg)
    rect(width/2 - this.rectW/2 - this.goalW/2, height / 2 + 30, this.goalW, this.goalH);
    pop();
  }
}
