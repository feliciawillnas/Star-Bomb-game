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
    // Goal left
    image(
      galaxGoalImg,
      width / 2 - playScene.rectW / 2 - this.goalW / 2,
      height / 2 + playScene.offsetTop,
      this.goalW,
      this.goalH
    );

    // Goal right
    image(
      galaxGoalImg,
      width / 2 + playScene.rectW / 2 + this.goalW / 2,
      height / 2 + playScene.offsetTop,
      this.goalW,
      this.goalH
    );
  }

  public leftGoalLines() {
    stroke(playScene.neonPink);
    strokeWeight(10);

    // Top line
    push();
    drawingContext.shadowOffsetY = -playScene.offsetBlur;
    drawingContext.shadowBlur = playScene.neonBlur;
    drawingContext.shadowColor = playScene.neonPink;
    line(
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
      width / 2 - playScene.rectW / 2,
      height / 2 + playScene.offsetTop - this.goalH / 2
    );
    pop()

    // Left line
    push();
    drawingContext.shadowOffsetX = -playScene.offsetBlur;
    drawingContext.shadowBlur = playScene.neonBlur;
    drawingContext.shadowColor = playScene.neonPink;
    line(
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 + this.goalH / 2 + playScene.offsetTop 
    );
    pop()

    // Bottom Line
    push();
    drawingContext.shadowOffsetY = playScene.offsetBlur;
    drawingContext.shadowBlur = playScene.neonBlur;
    drawingContext.shadowColor = playScene.neonPink;
    line (
      width / 2 - playScene.rectW / 2 - this.goalW,
      height / 2 + this.goalH / 2 + playScene.offsetTop, 
      width / 2 - playScene.rectW / 2,
      height / 2 + this.goalH / 2 + playScene.offsetTop
    )
    pop()
  }

  public rightGoalLines() {
    stroke(playScene.neonBlue);

    // Top line
    push()
    drawingContext.shadowOffsetY = -playScene.offsetBlur;
    drawingContext.shadowBlur = playScene.neonBlur;
    drawingContext.shadowColor = playScene.neonBlue;
    line(
      width / 2 + playScene.rectW / 2 + this.goalW,
      height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
      width / 2 + playScene.rectW / 2,
      height / 2 + playScene.offsetTop - this.goalH / 2
    );
    pop();

    // Right line
    push()
    drawingContext.shadowOffsetX = playScene.offsetBlur;
    drawingContext.shadowBlur = playScene.neonBlur;
    drawingContext.shadowColor = playScene.neonBlue;
    line(
        width / 2 + playScene.rectW / 2 + this.goalW,
        height / 2 - playScene.rectH / 2 + this.goalH - playScene.offsetTop,
        width / 2 + playScene.rectW / 2 + this.goalW,
        height / 2 + this.goalH / 2 + playScene.offsetTop 
      );
      pop();

    // Bottom line
    push()
    drawingContext.shadowOffsetY = playScene.offsetBlur;
    drawingContext.shadowBlur = playScene.neonBlur;
    drawingContext.shadowColor = playScene.neonBlue;
    line(
      width / 2 + playScene.rectW / 2 + this.goalW,
      height / 2 + this.goalH/2 + playScene.offsetTop,
      width / 2 + playScene.rectW / 2,
      height / 2 + this.goalH / 2 + playScene.offsetTop
    );
    pop();
  }
}
