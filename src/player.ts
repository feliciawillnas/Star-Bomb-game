class Player {
  //ATTRIBUTE////////////////////////////
  //Player 1
  // private player: number
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private boundingBox: number;
  private angle: number;
  private color: string;
  private img: p5.Image;
  //   private imgX: number;
  //   private imgY: number;

  // Player 2
  //   private playerTwoX: number;
  //   private playerTwoY: number;
  //   private playerTwoWidth: number;
  //   private playerTwoHeight: number;
  //   private playerTwoBoundingBox: number;
  //   private playerTwoAngle: number;

  //CONSTRUCTOR////////////////////////
  constructor(player: number) {
    if (player === 1) {
      this.x = width / 2 - playScene.rectW / 2.5;
      this.y = height / 2 + playScene.offsetTop;
      this.width = 37.5;
      this.height = 60;
      this.boundingBox = this.height + 15;
      this.angle = 90;
      this.color = "blue";
      this.img = rocketImgBlue1;
      //   this.imgX = width / 2 - playScene.rectW / 2.5;
      //   this.imgY = height / 2 + playScene.offsetTop;
    } else {
      this.x = width / 2 + playScene.rectW / 2.5;
      this.y = height / 2 + playScene.offsetTop;
      this.width = 37.5;
      this.height = 60;
      this.boundingBox = this.height + 15;
      this.angle = -90;
      this.color = "purple";
      this.img = rocketImgPink1;
      //   this.imgX = width / 2 + playScene.rectW / 2.5;
      //   this.imgY = height / 2 + playScene.offsetTop;
    }

    // this.playerOneX = width / 2 - playScene.rectW / 2.5;
    // this.playerOneY = height / 2 + playScene.offsetTop;
    // this.playerOneWidth = 37.5;
    // this.playerOneHeight = 60;
    // this.playerOneBoundingBox = this.playerOneHeight + 15;
    // this.playerOneAngle = 90;

    // this.playerTwoX = width / 2 + playScene.rectW / 2.5;
    // this.playerTwoY = height / 2 + playScene.offsetTop;
    // this.playerTwoWidth = 37.5;
    // this.playerTwoHeight = 60;
    // this.playerTwoBoundingBox = this.playerTwoHeight + 15;
    // this.playerTwoAngle = -90;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    this.drawPlayer();
    // this.drawPlayerOne();
    // this.drawPlayerTwo();
  }

  public drawPlayer() {
    stroke(this.color);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, this.boundingBox);
    push();
    translate(this.y, this.y);
    rotate(this.angle);
    image(this.img, 0, 0, this.width, this.height);
    pop();
  }

  //   public drawPlayerOne() {
  //     stroke("blue");
  //     strokeWeight(4);
  //     noFill();
  //     circle(this.playerOneX, this.playerOneY, this.playerOneBoundingBox);
  //     push();
  //     translate(this.playerOneX, this.playerOneY);
  //     rotate(this.playerOneAngle);
  //     image(rocketImgBlue1, 0, 0, this.playerOneWidth, this.playerOneHeight);
  //     pop();
  //   }

  //   public drawPlayerTwo() {
  //     stroke("purple");
  //     strokeWeight(4);
  //     noFill();
  //     circle(this.playerTwoX, this.playerTwoY, this.playerTwoBoundingBox);
  //     push();
  //     translate(this.playerTwoX, this.playerTwoY);
  //     rotate(this.playerTwoAngle);
  //     image(rocketImgPink1, 0, 0, this.playerTwoWidth, this.playerTwoHeight);
  //     pop();
  //   }
}
