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
  private slowDownTime: number;
  private reverseControlsTime: number;
  private smallPlayerTime: number;

  private offsetTop: number;
  private boardWidth: number;
  private boardHeight: number;

  // Controls
  private rotateLeft: number;
  private rotateRight: number;
  private forward: number;
  private backwards: number;

  //CONSTRUCTOR////////////////////////
  constructor(
    player: number,
    offsetTop: number,
    boardWidth: number,
    boardHeight: number
  ) {
    this.offsetTop = offsetTop;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.move = 5;
    this.slowDownTime = 0;
    this.reverseControlsTime = 0;
    this.smallPlayerTime = 0;
    this.widthPlayer = 37.5;
    this.heightPlayer = 60;
    this.diameter = this.heightPlayer + 15;

    // Spelarnas startpositioner flyttas vid in- och utzoomning. Ska det vara så?
    if (player === 1) {
      this.x = width / 2 - this.boardWidth / 2.5;
      this.y = height / 2 + this.offsetTop;
      this.angle = 90;
      this.color = "blue";
      this.img = images.rocketImgBlue1gif;
      this.rotateLeft = 65;
      this.rotateRight = 68;
      this.forward = 87;
      this.backwards = 83;
    } else {
      this.x = width / 2 + this.boardWidth / 2.5;
      this.y = height / 2 + this.offsetTop;
      this.angle = -90;
      this.color = "purple";
      this.img = images.rocketImgPink1gif;
      this.rotateLeft = 37;
      this.rotateRight = 39;
      this.forward = 38;
      this.backwards = 40;
    }
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    this.controlPlayers();
    this.keepPlayersInsideScreen();
    this.checkActivatedPowerups();
  }
  //Draw
  public draw() {
    this.drawPlayer();
    this.drawPowerupEffect();
  }

  private drawPlayer() {
    push();
    stroke(this.color);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, this.diameter);
    translate(this.x, this.y);
    rotate(this.angle);

    // Draws image depending on if small player powerup is activated
    if (this.smallPlayerTime < 0) {
      image(this.img, 0, 0, this.widthPlayer, this.heightPlayer);
    } else {
      image(this.img, 0, 0, this.widthPlayer/3, this.heightPlayer/3);
    }
    pop();
  }

  private drawPowerupEffect() {
    // Draw reverse control effect on player while powerup is activated
    if (this.reverseControlsTime > 0 && this.slowDownTime <= 0) {
      push()
      strokeWeight(2);
       fill(0, 255, 0)
       ellipse(this.x+20, this.y-20, 10);
      pop()
    }

    // Draw slow down effect on player while powerup is activated
    if (this.slowDownTime > 0 && this.reverseControlsTime <= 0) {
      push()
      strokeWeight(2);
       fill(255, 0, 0);
       ellipse(this.x+20, this.y-20, 10);
      pop()
    }

    // Draw both reverse control and slowdown effect on player while both are active
    if (this.slowDownTime > 0 && this.reverseControlsTime > 0) {
      push()
      strokeWeight(1);
        fill(0, 255, 0)
        arc(this.x+20, this.y-20, 10, 10, 180, 360);
      pop()

      push()
        strokeWeight(1);
        fill(255, 0, 0)
        arc(this.x+20, this.y-20, 10, 10, 360, 180);
      pop()
    }
  }

  private controlPlayers() {
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
    if (
      this.y - this.diameter / 2 <=
      height / 2 - this.boardHeight / 2 + this.offsetTop
    ) {
      this.y = this.y + this.move * 2;
    }
    // can't leave screen on the lower side
    if (
      this.y + this.diameter / 2 >=
      height / 2 + this.boardHeight / 2 + this.offsetTop
    ) {
      this.y = this.y - this.move * 2;
    }
  }

  private checkActivatedPowerups() {
    // Slows down player while powerup is activated
    this.slowDownTime -= deltaTime;
    if (this.slowDownTime <= 0) {
        this.move = 5;
    }

    // Reverse controls for player while powerup is activated
    this.reverseControlsTime -= deltaTime;
    if (this.reverseControlsTime <= 0) {
        if (this.color === "blue") {
            this.rotateLeft = 65;
            this.rotateRight = 68;
        }
        if (this.color === "purple") {
            this.rotateLeft = 37;
            this.rotateRight = 39;
        }
    }

    // Makes player small while powerup is activated
    this.smallPlayerTime -= deltaTime;
    if (this.smallPlayerTime > 0 && this.diameter !>= 35) {
        this.diameter -= 10;
    } else if (this.smallPlayerTime <= 0 && this.diameter !<= 75) {
        this.diameter += 10;
    }
  }

  public slowDownPlayer() {
    this.move = 2;
    this.slowDownTime = 5000;
  }
  
  public makePlayerSmall() {
    this.smallPlayerTime = 10000;
  }
  
  public activateReverseControls() {
      if (this.color === "blue") {
          this.rotateLeft = 68;
          this.rotateRight = 65;
      } else if (this.color === "purple") {
          this.rotateLeft = 39;
          this.rotateRight = 37;
      }
          this.reverseControlsTime = 5000;
  }
}
