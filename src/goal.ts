class Goal {
  /* ------------------
        ATTRIBUTES
  ------------------ */
  // Goal width & height
  private goalW: number;
  private goalH: number;
  private offsetTop: number;
  private boardWidth: number;
  private boardHeight: number;

  private neonPink: string;
  private neonBlue: string;
  private neonBlur: number;
  private offsetBlur: number;

  /* --------------------
        CONSTRUCTOR
  -------------------- */
  constructor(
    offsetTop: number,
    boardWidth: number,
    boardHeight: number,
    goalW: number,
    goalH: number,
    neonPink: string,
    neonBlue: string,
    neonBlur: number,
    offsetBlur: number
  ) {
    this.offsetTop = offsetTop;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    // Goal width & height
    this.goalW = goalW; //150
    this.goalH = goalH; //220
    this.neonPink = neonPink;
    this.neonBlue = neonBlue;
    this.neonBlur = neonBlur;
    this.offsetBlur = offsetBlur;
  }

  /* ------------------
        METHODS
  ------------------ */
  //Update
  public update() {}
  //Draw

  public draw() {
    this.goals();
    this.leftGoalLines();
    this.rightGoalLines();
  }

  private goals() {
    // Goal left
    let leftGoalX = width / 2 - this.boardWidth / 2 - this.goalW / 2;
    let leftGoalY = height / 2 + this.offsetTop;
    image(images.galaxGoal, leftGoalX, leftGoalY, this.goalW, this.goalH);

    // Goal right
    let rightGoalX = width / 2 + this.boardWidth / 2 + this.goalW / 2;
    let rightGoalY = height / 2 + this.offsetTop;
    image(images.galaxGoal, rightGoalX, rightGoalY, this.goalW, this.goalH);
  }

  private leftGoalLines() {
    push();
    stroke(this.neonPink);
    strokeWeight(10);

    // Top line
    push();
    drawingContext.shadowOffsetY = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;

    line(
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 - this.boardWidth / 2,
      height / 2 + this.offsetTop - this.goalH / 2
    );
    pop();

    // Left line
    push();
    drawingContext.shadowOffsetX = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();

    // Bottom Line
    push();
    drawingContext.shadowOffsetY = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 - this.boardWidth / 2 - this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop,
      width / 2 - this.boardWidth / 2,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();
    pop();
  }

  private rightGoalLines() {
    push();
    stroke(this.neonBlue);
    strokeWeight(10);

    // Top line
    push();
    drawingContext.shadowOffsetY = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 + this.boardWidth / 2,
      height / 2 + this.offsetTop - this.goalH / 2
    );
    pop();

    // Right line
    push();
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop,
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();

    // Bottom line
    push();
    drawingContext.shadowOffsetY = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 + this.boardWidth / 2 + this.goalW,
      height / 2 + this.goalH / 2 + this.offsetTop,
      width / 2 + this.boardWidth / 2,
      height / 2 + this.goalH / 2 + this.offsetTop
    );
    pop();
    pop();
  }
}
