class Player {
  //ATTRIBUTE////////////////////////////
  //Player 1
  // private player: number
  private playerOneX: number;
  private playerOneY: number;
  private playerOneWidth: number;
  private playerOneHeight: number;
  private playerOneBoundingBox: number;
  private playerOneAngle: number;

  // Player 2
  private playerTwoX: number;
  private playerTwoY: number;
  private playerTwoWidth: number;
  private playerTwoHeight: number;
  private playerTwoBoundingBox: number;
  private playerTwoAngle: number;

  //CONSTRUCTOR////////////////////////
  constructor() {
    // player 1 | 2
    // if(player === 1) {
    // } else {
    // }
    this.playerOneX = width / 2 - playScene.rectW / 2.5;
    this.playerOneY = height / 2 + playScene.offsetTop;
    this.playerOneWidth = 37.5;
    this.playerOneHeight = 60;
    this.playerOneBoundingBox = this.playerOneHeight + 15;
    this.playerOneAngle = 90;

    this.playerTwoX = width / 2 + playScene.rectW / 2.5;
    this.playerTwoY = height / 2 + playScene.offsetTop;
    this.playerTwoWidth = 37.5;
    this.playerTwoHeight = 60;
    this.playerTwoBoundingBox = this.playerTwoHeight + 15;
    this.playerTwoAngle = -90;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    this.drawPlayerOne();
    this.drawPlayerTwo();
  }

  public drawPlayerOne() {
    stroke("blue");
    strokeWeight(4);
    noFill();
    circle(this.playerOneX, this.playerOneY, this.playerOneBoundingBox);
    push();
    translate(this.playerOneX, this.playerOneY);
    rotate(this.playerOneAngle);
    image(rocketImgBlue1, 0, 0, this.playerOneWidth, this.playerOneHeight);
    pop();
  }

  public drawPlayerTwo() {
    stroke("purple");
    strokeWeight(4);
    noFill();
    circle(this.playerTwoX, this.playerTwoY, this.playerTwoBoundingBox);
    push();
    translate(this.playerTwoX, this.playerTwoY);
    rotate(this.playerTwoAngle);
    image(rocketImgPink1, 0, 0, this.playerTwoWidth, this.playerTwoHeight);
    pop();
  }
}
