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
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.diameter = diameter;
    this.timeToLive = timeToLive; // Sets the detonation time.
  }

  //METHODS//////////////////////////

  //Draw
  public draw() {
    this.drawBombTimer();
    this.drawExplosion();
  }

  //Update
  public update(playboardWidth: number, playboardHeight: number) {
    this.moveBomb();
    this.checkCollision(playboardWidth, playboardHeight);
  }

  // Shows explosion image last 0.2 seconds of detonation time.
  private drawExplosion() {
    if (this.timeToLive > 200){
        image(images.neonGreenBombClear, this.x, this.y);
    }
    else {
      image(images.explosion, this.x, this.y, 40, 40);
    }
  }

  // Shows a countdown timer inside every bomb.
  private drawBombTimer() {
    // noStroke();
    fill("lime");
    textSize(8);
    let intTimeToLive = round(this.timeToLive / 1000);
    text(intTimeToLive, this.x, this.y + 5);
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
      if (this.vx > 0 && this.vx < 1) {
        this.vx = -1;
      } else if (this.vx > 1 && this.vx <= 2) {
        this.vx = -2;
      } else if (this.vx > 2 && this.vx <= 3) {
        this.vx = -3;
      } else if (this.vx > 3 && this.vx <= 4) {
        this.vx = -4;
      } else if (this.vx > 4) {
        this.vx = -5;
      }
    }
    if (this.x < playboardLeftBorder + bombRadius) {
      if (this.vx < 0 && this.vx > -1) {
        this.vx = 1;
      } else if (this.vx < -1 && this.vx >= -2) {
        this.vx = 2;
      } else if (this.vx < -2 && this.vx >= -3) {
        this.vx = 3;
      } else if (this.vx < -3 && this.vx >= -4) {
        this.vx = 4;
      } else if (this.vx < -4) {
        this.vx = 5;
      }
    }

    if (this.y < playboardTopBorder + bombRadius) {
      if (this.vy < 0 && this.vy > -1) {
        this.vy = 1;
      } else if (this.vy < -1 && this.vy >= -2) {
        this.vy = 2;
      } else if (this.vy < -2 && this.vy >= -3) {
        this.vy = 3;
      } else if (this.vy < -3 && this.vy >= -4) {
        this.vy = 4;
      } else if (this.vy < -4) {
        this.vy = 5;
      }
    }
    if (this.y > playboardBottomBorder - bombRadius) {
      if (this.vy > 0 && this.vy < 1) {
        this.vy = -1;
      } else if (this.vy > 1 && this.vy <= 2) {
        this.vy = -2;
      } else if (this.vy > 2 && this.vy <= 3) {
        this.vy = -3;
      } else if (this.vy > 3 && this.vy <= 4) {
        this.vy = -4;
      } else if (this.vy > 4) {
        this.vy = -5;
      }
    }
  }
}
