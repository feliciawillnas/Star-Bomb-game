class Goal {
  //ATTRIBUTE////////////////////////////
  // Goal width & height
  public goalW: number;
  public goalH: number;

  //CONSTRUCTOR////////////////////////
  constructor() {
    // Goal width & height
    this.goalW = 150;
    this.goalH = 220;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    this.goals();
    this.leftGoalLines();
    this.rightGoalLines();
  }

  public goals() {
    // Player 1's Goal
    image(
      galaxGoalImg,
      width / 2 - playScene.rectW / 2 - this.goalW / 2,
      height / 2 + playScene.offsetTop,
      this.goalW,
      this.goalH
    );

    // Player 2's Goal
    image(
      galaxGoalImg,
      width / 2 + playScene.rectW / 2 + this.goalW / 2,
      height / 2 + playScene.offsetTop,
      this.goalW,
      this.goalH
    );
  }

  // Left goal lines
  public leftGoalLines() {
    stroke(249, 111, 243);
    strokeWeight(10);
    // Top line
    line(
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
      width / 2 - playScene.rectW / 2,
      height / 2 + playScene.offsetTop - this.goalH / 2
    );
    // Left line
    line(
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 + this.goalH / 2 + playScene.offsetTop 
    );
    // Bottom Line
    line (
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 + this.goalH / 2 + playScene.offsetTop, 
      width / 2 - playScene.rectW / 2,
      height / 2 + this.goalH / 2 + playScene.offsetTop
    )
  }

  // Right goal lines
  public rightGoalLines() {
    stroke(87, 151, 160);
    // Top line
    line(
      width / 2 + playScene.rectW / 2 + this.goalW,
      height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
      width / 2 + playScene.rectW / 2,
      height / 2 + playScene.offsetTop - this.goalH / 2
    );
    // Right line
    line(
        width / 2 + playScene.rectW / 2 + this.goalW,
        height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
        width / 2 + playScene.rectW / 2 + this.goalW,
        height / 2 + this.goalH / 2 + playScene.offsetTop 
      );

    // Bottom line
    line(
      width / 2 + playScene.rectW / 2 + this.goalW,
      height / 2 + this.goalH/2 + playScene.offsetTop,
      width / 2 + playScene.rectW / 2,
      height / 2 + this.goalH / 2 + playScene.offsetTop
    );
  }
}
