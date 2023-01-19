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
      images.galaxGoal,
      width / 2 - game.playScene.rectW / 2 - this.goalW / 2,
      height / 2 + game.playScene.offsetTop,
      this.goalW,
      this.goalH
    );

    // Goal right
    image(
      images.galaxGoal,
      width / 2 + game.playScene.rectW / 2 + this.goalW / 2,
      height / 2 + game.playScene.offsetTop,
      this.goalW,
      this.goalH
    );
  }

  public leftGoalLines() {
    stroke(game.playScene.neonPink);
    strokeWeight(10);

    // Top line
    push();
    drawingContext.shadowOffsetY = -game.playScene.offsetBlur;
    drawingContext.shadowBlur = game.playScene.neonBlur;
    drawingContext.shadowColor = game.playScene.neonPink;
    line(
      width / 2 - game.playScene.rectW / 2 - this.goalW,
      height / 2 - game.playScene.rectH / 2 + this.goalH - game.playScene.offsetTop,
      width / 2 - game.playScene.rectW / 2,
      height / 2 + game.playScene.offsetTop - this.goalH / 2
    );
    pop()

    // Left line
    push();
    drawingContext.shadowOffsetX = -game.playScene.offsetBlur;
    drawingContext.shadowBlur = game.playScene.neonBlur;
    drawingContext.shadowColor = game.playScene.neonPink;
    line(
      width / 2 - game.playScene.rectW / 2 - this.goalW,
      height / 2 - game.playScene.rectH / 2 + this.goalH - game.playScene.offsetTop,
      width / 2 - game.playScene.rectW / 2 - this.goalW,
      height / 2 + this.goalH / 2 + game.playScene.offsetTop 
    );
    pop()

    // Bottom Line
    push();
    drawingContext.shadowOffsetY = game.playScene.offsetBlur;
    drawingContext.shadowBlur = game.playScene.neonBlur;
    drawingContext.shadowColor = game.playScene.neonPink;
    line (
      width / 2 - game.playScene.rectW / 2 - this.goalW,
      height / 2 + this.goalH / 2 + game.playScene.offsetTop, 
      width / 2 - game.playScene.rectW / 2,
      height / 2 + this.goalH / 2 + game.playScene.offsetTop
    )
    pop()
  }

  public rightGoalLines() {
    stroke(game.playScene.neonBlue);

    // Top line
    push()
    drawingContext.shadowOffsetY = -game.playScene.offsetBlur;
    drawingContext.shadowBlur = game.playScene.neonBlur;
    drawingContext.shadowColor = game.playScene.neonBlue;
    line(
      width / 2 + game.playScene.rectW / 2 + this.goalW,
      height / 2 - game.playScene.rectH / 2 + this.goalH - game.playScene.offsetTop,
      width / 2 + game.playScene.rectW / 2,
      height / 2 + game.playScene.offsetTop - this.goalH / 2
    );
    pop();

    // Right line
    push()
    drawingContext.shadowOffsetX = game.playScene.offsetBlur;
    drawingContext.shadowBlur = game.playScene.neonBlur;
    drawingContext.shadowColor = game.playScene.neonBlue;
    line(
        width / 2 + game.playScene.rectW / 2 + this.goalW,
        height / 2 - game.playScene.rectH / 2 + this.goalH - game.playScene.offsetTop,
        width / 2 + game.playScene.rectW / 2 + this.goalW,
        height / 2 + this.goalH / 2 + game.playScene.offsetTop 
      );
      pop();

    // Bottom line
    push()
    drawingContext.shadowOffsetY = game.playScene.offsetBlur;
    drawingContext.shadowBlur = game.playScene.neonBlur;
    drawingContext.shadowColor = game.playScene.neonBlue;
    line(
      width / 2 + game.playScene.rectW / 2 + this.goalW,
      height / 2 + this.goalH/2 + game.playScene.offsetTop,
      width / 2 + game.playScene.rectW / 2,
      height / 2 + this.goalH / 2 + game.playScene.offsetTop
    );
    pop();
  }
}
