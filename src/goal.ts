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
      width / 2 - game.playScene.playboard.width / 2 - this.goalW / 2,
      height / 2 + game.playScene.playboard.offsetTop,
      this.goalW,
      this.goalH
    );

    // Goal right
    image(
      images.galaxGoal,
      width / 2 + game.playScene.playboard.width / 2 + this.goalW / 2,
      height / 2 + game.playScene.playboard.offsetTop,
      this.goalW,
      this.goalH
    );
  }
  public getGoalSize() {
    return this.goalH, this.goalW;
  }
  
  public leftGoalLines() {
    stroke(game.playScene.playboard.neonPink);
    strokeWeight(10);

    // Top line
    push();
    drawingContext.shadowOffsetY = -game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonPink;
    line(
      width / 2 - game.playScene.playboard.width / 2 - this.goalW,
      height / 2 -
        game.playScene.playboard.height / 2 +
        this.goalH -
        game.playScene.playboard.offsetTop,
      width / 2 - game.playScene.playboard.width / 2,
      height / 2 + game.playScene.playboard.offsetTop - this.goalH / 2
    );
    pop();

    // Left line
    push();
    drawingContext.shadowOffsetX = -game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonPink;
    line(
      width / 2 - game.playScene.playboard.width / 2 - this.goalW,
      height / 2 -
        game.playScene.playboard.height / 2 +
        this.goalH -
        game.playScene.playboard.offsetTop,
      width / 2 - game.playScene.playboard.width / 2 - this.goalW,
      height / 2 + this.goalH / 2 + game.playScene.playboard.offsetTop
    );
    pop();

    // Bottom Line
    push();
    drawingContext.shadowOffsetY = game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonPink;
    line(
      width / 2 - game.playScene.playboard.width / 2 - this.goalW,
      height / 2 + this.goalH / 2 + game.playScene.playboard.offsetTop,
      width / 2 - game.playScene.playboard.width / 2,
      height / 2 + this.goalH / 2 + game.playScene.playboard.offsetTop
    );
    pop();
  }

  public rightGoalLines() {
    stroke(game.playScene.playboard.neonBlue);

    // Top line
    push();
    drawingContext.shadowOffsetY = -game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonBlue;
    line(
      width / 2 + game.playScene.playboard.width / 2 + this.goalW,
      height / 2 -
        game.playScene.playboard.height / 2 +
        this.goalH -
        game.playScene.playboard.offsetTop,
      width / 2 + game.playScene.playboard.width / 2,
      height / 2 + game.playScene.playboard.offsetTop - this.goalH / 2
    );
    pop();

    // Right line
    push();
    drawingContext.shadowOffsetX = game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonBlue;
    line(
      width / 2 + game.playScene.playboard.width / 2 + this.goalW,
      height / 2 -
        game.playScene.playboard.height / 2 +
        this.goalH -
        game.playScene.playboard.offsetTop,
      width / 2 + game.playScene.playboard.width / 2 + this.goalW,
      height / 2 + this.goalH / 2 + game.playScene.playboard.offsetTop
    );
    pop();

    // Bottom line
    push();
    drawingContext.shadowOffsetY = game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonBlue;
    line(
      width / 2 + game.playScene.playboard.width / 2 + this.goalW,
      height / 2 + this.goalH / 2 + game.playScene.playboard.offsetTop,
      width / 2 + game.playScene.playboard.width / 2,
      height / 2 + this.goalH / 2 + game.playScene.playboard.offsetTop
    );
    pop();
  }
}
