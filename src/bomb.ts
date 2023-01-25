class Bomb {
  //ATTRIBUTE////////////////////////////
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public diameter: number;
  public timeToLive: number; // Bombens levnadstid

  //CONSTRUCTOR////////////////////////
  constructor(diameter: number, x: number, y: number, timeToLive: number) {
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.timeToLive = timeToLive;
  }

  //METHODS//////////////////////////

  //Draw
  public draw() {
    noStroke();
    fill(0, 0, 0, 0);
    // images.neonGreenBomb.resize(103, 87)

    image(images.neonGreenBomb, this.x, this.y);
    // ellipse(this.x + -7, this.y + 7, this.diameter);
  }

  //Update
  public update(playboardWidth: number, playboardHeight: number) {
    this.moveBomb();
    this.checkCollision(playboardWidth, playboardHeight);
  }

  //Move bomb
  private moveBomb() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Check collision
  private checkCollision(playboardWidth: number, playboardHeight: number) {
    const playboardLeftBorder = width / 2 - playboardWidth / 2;
    const playboardRightBorder = width / 2 + playboardWidth / 2;
    const playboardTopBorder = height / 2 - playboardHeight / 2 + 40;
    const playboardBottomBorder = height / 2 + playboardHeight / 2 + 40;
    const bombRadius = this.diameter / 2;

    //Check collision with walls
    if (this.x > playboardRightBorder - bombRadius) {
      // if (this.y > playboardTopBorder + 140 && this.y < playboardBottomBorder - 140) {
      //     this.x = 4000;
      // } else {
      this.vx = -2;
      // }
    }
    if (this.x < playboardLeftBorder + bombRadius) {
      this.vx = +2;
    }

    if (this.y < playboardTopBorder + bombRadius) {
      this.vy = +2;
    } else if (this.y > playboardBottomBorder - bombRadius) {
      this.vy = -2;
    }

    //Check collision with other bombs
  }
}
