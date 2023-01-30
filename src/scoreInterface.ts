class ScoreInterface {
  //ATTRIBUTE////////////////////////////
  private boardWidth: number;
  private boardHeight: number;

  //CONSTRUCTOR////////////////////////
  constructor(boardWidth: number, boardHeight: number) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw(
    scorePlayer1: number,
    scorePlayer2: number,
    gameTimeMin: number,
    gameTimeSec: number
  ) {
    // Drawing scoreboard
    noStroke();
    stroke("black");
    strokeWeight(7);
    fill(255, 255, 255, 50);
    rect(
      windowWidth / 2,
      height / 2 - this.boardHeight / 2 - 40,
      this.boardWidth,
      100
    );
    fill(255, 255, 255);
    textSize(32);
    // Score text
    push();
    drawingContext.shadowOffsetY = 10;
    drawingContext.shadowOffsetX = 10;
    drawingContext.shadowColor = "black";
    strokeWeight(7);
    text("SCORE", windowWidth / 2, height / 2 - this.boardHeight / 2 - 42);
    pop();

    // Player Scores
    push();
    push();
    fill("blue");
    drawingContext.shadowOffsetY = 10;
    drawingContext.shadowOffsetX = 10;
    drawingContext.shadowColor = "black";
    text(
      scorePlayer1,
      width / 2 - this.boardWidth / 4,
      height / 2 - this.boardHeight / 2 - 20
    );
    pop();
    push();
    fill("purple");
    drawingContext.shadowOffsetY = 10;
    drawingContext.shadowOffsetX = 10;
    drawingContext.shadowColor = "black";
    text(
      scorePlayer2,
      width / 2 + this.boardWidth / 4,
      height / 2 - this.boardHeight / 2 - 20
    );
    pop();

    // Game Time
    push();
    noStroke();
    stroke("black");
    strokeWeight(7);
    fill(255, 255, 255);
    textSize(28);
    text("0" + gameTimeMin, width / 2 - 40, height / 2 - this.boardHeight / 2);
    text(":", width / 2, height / 2 - this.boardHeight / 2);
    text(
      int(gameTimeSec / 1000),
      width / 2 + 40,
      height / 2 - this.boardHeight / 2
    );
    pop();
    pop();
  }
}
