class ScoreInterface {
  //ATTRIBUTE////////////////////////////
  private boardWidth: number;
  private boardHeight: number;
  private scorePlayer1: number;
  private scorePlayer2: number;
  //CONSTRUCTOR////////////////////////
  constructor(boardWidth: number, boardHeight: number, scorePlayer1: number, scorePlayer2: number) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.scorePlayer1 = scorePlayer1;
    this.scorePlayer2 = scorePlayer2;
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    
  }
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
      this.scorePlayer1,
      width / 2 - this.boardWidth / 4,
      height / 2 - this.boardHeight / 2 - 20
    );
    text(
      this.scorePlayer2,
      width / 2 + this.boardWidth / 4,
      height / 2 - this.boardHeight / 2 - 20
      );
      pop();
    }
    
}
