class ScoreInterface {
  /* ------------------
        ATTRIBUTES
  ------------------ */
  private boardWidth: number;
  private boardHeight: number;

  /* --------------------
        CONSTRUCTOR
  -------------------- */
  constructor(boardWidth: number, boardHeight: number) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
  }

  /* ------------------
        METHODS
  ------------------ */
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

    // Game Timer
    push();
    noStroke();
    stroke("black");
    strokeWeight(7);
    fill(255, 255, 255);
    // Makes every even second < 11 to turn red.
    if (gameTimeMin <= 0 && gameTimeSec < 11_000) {
      if (int(gameTimeSec / 1000) % 2 == 0) {
        fill("red");
      }
    }
    textSize(28);
    text("0" + gameTimeMin, width / 2 - 40, height / 2 - this.boardHeight / 2);
    text(":", width / 2, height / 2 - this.boardHeight / 2);
    textAlign(RIGHT);
    text(
      int(gameTimeSec / 1000),
      width / 2 + 65,
      height / 2 - this.boardHeight / 2
    );
    //Adds a 0 before seconds below 10.
    if (gameTimeSec < 10_000) {
      text("0", width / 2 + 35, height / 2 - this.boardHeight / 2);
    }
    pop();
    pop();
  }
}
