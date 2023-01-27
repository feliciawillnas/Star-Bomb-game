class Player {
  //ATTRIBUTE////////////////////////////
  public x: number; //Ändra tillbaka till private När vi testat klart i goal.
  public y: number;
  private widthPlayer: number;
  private heightPlayer: number;
  public diameter: number;
  private angle: number;
  private color: string;
  private img: p5.Image;
  public move: number;

  private offsetTop: number;
  private boardWidth: number;
  private boardHeight: number;

  // Controls
  private rotateLeft: number;
  private rotateRight: number;
  private forward: number;
  private backwards: number;

  //CONSTRUCTOR////////////////////////
  constructor(player: number, offsetTop: number, boardWidth: number, boardHeight: number) {
    this.offsetTop = offsetTop;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.move = 5;

    // Spelarnas startpositioner flyttas vid in- och utzoomning. Ska det vara så?
    if (player === 1) {
      this.x = width / 2 - this.boardWidth / 2.5;
      this.y = height / 2 + this.offsetTop;
      this.widthPlayer = 37.5;
      this.heightPlayer = 60;
      this.diameter = this.heightPlayer + 15;
      this.angle = 90;
      this.color = 'blue';
      this.img = images.rocketImgBlue1;
      this.rotateLeft = 65;
      this.rotateRight = 68;
      this.forward = 87;
      this.backwards = 83;
    } else {
      this.x = width / 2 + this.boardWidth / 2.5;
      this.y = height / 2 + this.offsetTop;
      this.widthPlayer = 37.5;
      this.heightPlayer = 60;
      this.diameter = this.heightPlayer + 15;
      this.angle = -90;
      this.color = 'purple';
      this.img = images.rocketImgPink1;
      this.rotateLeft = 37;
      this.rotateRight = 39;
      this.forward = 38;
      this.backwards = 40;
    }
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    this.controlPlayerOne();
    this.controlPlayerTwo();
    this.keepPlayersInsideScreen();
  }
  //Draw
  public draw() {
    this.drawPlayer();
  }

  private drawPlayer() {
    push();
    stroke(this.color);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, this.diameter);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.img, 0, 0, this.widthPlayer, this.heightPlayer);
    pop();
  }
  private controlPlayerOne() {
    if (keyIsDown(this.rotateLeft)) {
      this.angle = this.angle - this.move;
    }
    if (keyIsDown(this.rotateRight)) {
      this.angle = this.angle + this.move;
    }
    if (keyIsDown(this.forward)) {
      this.x = this.x + this.move * sin(this.angle);
      this.y = this.y - this.move * cos(this.angle);
    }
    if (keyIsDown(this.backwards)) {
      this.x = this.x - this.move * sin(this.angle);
      this.y = this.y + this.move * cos(this.angle);
    }
  }

  private controlPlayerTwo() {
    if (keyIsDown(this.rotateLeft)) {
      this.angle = this.angle - this.move;
    }
    if (keyIsDown(this.rotateRight)) {
      this.angle = this.angle + this.move;
    }
    if (keyIsDown(this.forward)) {
      this.x = this.x + this.move * sin(this.angle);
      this.y = this.y - this.move * cos(this.angle);
    }
    if (keyIsDown(this.backwards)) {
      this.x = this.x - this.move * sin(this.angle);
      this.y = this.y + this.move * cos(this.angle);
    }
  }

  private keepPlayersInsideScreen() {
    // can't leave screen on the left side
    // May need to change diameter to diameter to make it work with bombs.
    if (this.x - this.diameter / 2 <= width / 2 - this.boardWidth / 2) {
      this.x = this.x + this.move * 2;
    }
    // can't leave screen on the right side
    if (this.x + this.diameter / 2 >= width / 2 + this.boardWidth / 2) {
      this.x = this.x - this.move * 2;
    }
    // can't leave screen on the upper side
    if (this.y - this.diameter / 2 <= height / 2 - this.boardHeight / 2 + this.offsetTop) {
      this.y = this.y + this.move * 2;
    }
    // can't leave screen on the lower side
    if (this.y + this.diameter / 2 >= height / 2 + this.boardHeight / 2 + this.offsetTop) {
      this.y = this.y - this.move * 2;
    }
  }
}
