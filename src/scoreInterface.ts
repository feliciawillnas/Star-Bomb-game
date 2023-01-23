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
  public draw() {
    // Drawing scoreboard
    noStroke();
    stroke('black');
    strokeWeight(5);
    fill(255, 255, 255, 50);
    rect(windowWidth / 2, height / 2 - this.boardHeight / 2 - 40, this.boardWidth, 100);
    fill(255, 255, 255);
    textSize(32);
    // Score text
    push();
    drawingContext.shadowOffsetY = 10;
    drawingContext.shadowOffsetX = 10;
    drawingContext.shadowColor = 'black';
    strokeWeight(7);
    text('SCORE', windowWidth / 2, height / 2 - this.boardHeight / 2 - 20);
    pop();

    // Player Scores
    push();
    text(
      '30' /*player1Score*/,
      width / 2 - this.boardWidth / 4,
      height / 2 - this.boardHeight / 2 - 20
    );
    text(
      '40' /*player2Score*/,
      width / 2 + this.boardWidth / 4,
      height / 2 - this.boardHeight / 2 - 20
    );
    pop();
  }
}
