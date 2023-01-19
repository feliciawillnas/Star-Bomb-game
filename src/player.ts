class Player {
  //ATTRIBUTE////////////////////////////
  private playerOneX: number;
  private playerOneY: number;
  private playerOneWidth: number;
  private playerOneHeight: number;
  private playerOneBoundingBox: number;
  private playerOneAngle: number;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.playerOneX = width / 2 - playScene.rectW / 2.5;
    this.playerOneY = height / 2 + playScene.offsetTop;
    this.playerOneWidth = 50;
    this.playerOneHeight = 80;
    this.playerOneBoundingBox = this.playerOneHeight + 15;
    this.playerOneAngle = 90;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    this.drawPlayerOne();
  }

  public drawPlayerOne() {
    stroke("blue");
    strokeWeight(4);
    noFill();
    circle(this.playerOneX, this.playerOneY, this.playerOneBoundingBox);
    // rect(playerOneX, playerOneY, playerOneHeight, playerOneHeight);
    push();
    translate(this.playerOneX, this.playerOneY);
    rotate(this.playerOneAngle);
    image(rocketImgBlue1, 0, 0, this.playerOneWidth, this.playerOneHeight);
    pop();
  }
}
