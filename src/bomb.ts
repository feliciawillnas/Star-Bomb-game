class Bomb {
  //ATTRIBUTE////////////////////////////
  // private color: string;
  private x = 0;
  private y = 0;
  private vx = 20;
  private vy = 20;
  private diameter = 50;

  //CONSTRUCTOR////////////////////////
  constructor(diameter: number, x: number, y: number) {
    this.diameter = diameter;
    this.x = x;
    this.y = y;
  }
  //METHODS//////////////////////////
  //Update
  public update(rightSideOfPlayScene: number) {
    this.move(rightSideOfPlayScene);
  }

  //Draw
  public draw() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.diameter);
  }

  private move(rightSideOfPlayScene: number) {
    // let spring = 0.05;
    // let gravity = 0;
    // let friction = -0.5;
    // let balls = [];
    this.x += this.vx;
    this.y += this.vy;
    const bombRadius = this.diameter / 2;
    if (this.x > rightSideOfPlayScene - bombRadius) {
      this.vx = -10;
    } else if (
      this.x <
      width / 2 - game.playScene.playboard.width / 2 + this.diameter / 2
    ) {
      this.vx = +10;
    }
    //    if (this.y > (height / 2 - playScene.rectH / 2 + playScene.offsetTop) + this.diameter / 2) {
    //        this.vy =- 10;
    //    } else if (this.y < (height / 2 + playScene.rectH / 2 + playScene.offsetTop) - this.diameter / 2) {
    //        this.vy =+ 10;
    //   }
  }
}
