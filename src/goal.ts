class Goal {
  //ATTRIBUTE////////////////////////////
  // Goal width & height
  public goalW: number;
  public goalH: number;
  private offsetTop: number;
  private boardWidth: number;
  private boardHeight: number;

  //CONSTRUCTOR////////////////////////
  constructor(offsetTop: number, boardWidth: number, boardHeight: number) {
    this.offsetTop = offsetTop;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
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

    let leftGoalX = width / 2 - this.boardWidth / 2 - this.goalW / 2;
    let leftGoalY = height / 2 + this.offsetTop;
    image(images.galaxGoal, leftGoalX, leftGoalY, this.goalW, this.goalH);

    // Goal right
    let rightGoalX = width / 2 + this.boardWidth / 2 + this.goalW / 2;
    let rightGoalY = height / 2 + this.offsetTop;
    image(images.galaxGoal, rightGoalX, rightGoalY, this.goalW, this.goalH);
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
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 - this.boardWidth / 2,
      height / 2 + this.offsetTop - this.goalH / 2
    );
    pop();

    // Left line
    push();
    drawingContext.shadowOffsetX = -game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonPink;
    line(
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();

    // Bottom Line
    push();
    drawingContext.shadowOffsetY = game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonPink;
    line(
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop,
      width / 2 - this.boardWidth / 2,
      height / 2 + this.goalH / 2 + this.offsetTop
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
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 + this.boardWidth / 2,
      height / 2 + this.offsetTop - this.goalH / 2
    );
    pop();

    // Right line
    push();
    drawingContext.shadowOffsetX = game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonBlue;
    line(
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();

    // Bottom line
    push();
    drawingContext.shadowOffsetY = game.playScene.playboard.offsetBlur;
    drawingContext.shadowBlur = game.playScene.playboard.neonBlur;
    drawingContext.shadowColor = game.playScene.playboard.neonBlue;
    line(
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop,
      width / 2 + this.boardWidth / 2,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();
  }
}
