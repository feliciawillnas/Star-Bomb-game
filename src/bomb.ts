class Bomb {

    //ATTRIBUTE////////////////////////////
    public x = 0;
    public y = 0;
    public vx = 2;
    public vy = 2;
    public diameter = 50;

    //CONSTRUCTOR////////////////////////
    constructor(diameter: number, x: number, y: number) {
        this.diameter = diameter;
        this.x = x;
        this.y = y;
    }

    //METHODS//////////////////////////
    
    //Draw
    public draw() {
        noStroke();
        fill(0, 0, 0, 0);
        image(images.neonGreenBomb, this.x, this.y);
        ellipse(this.x, this.y, this.diameter);
    }

    //Update
    public update(playboardWidth: number, playboardHeight: number) {
        this.moveBomb();
        this.checkCollision(playboardWidth, playboardHeight);
    }

    //Move bomb
    private moveBomb() {
        this.x += this.vx
        this.y += this.vy
    }

    // Check collision
    private checkCollision(playboardWidth: number, playboardHeight: number) {
        const playboardLeftBorder = (width / 2 - playboardWidth / 2)
        const playboardRightBorder = (width / 2 + playboardWidth / 2)
        const playboardTopBorder = (height / 2 - playboardHeight / 2 + 40)
        const playboardBottomBorder = (height / 2 + playboardHeight / 2 + 40)
        const bombRadius = this.diameter / 2;

        //Check collision with walls
        if (this.x > playboardRightBorder - bombRadius) {
            // if (this.y > playboardTopBorder + 140 && this.y < playboardBottomBorder - 140) {
            //     this.x = 4000;
            // } else {
            this.vx =- 2;
            // }
        } if (this.x < playboardLeftBorder + bombRadius) {
            this.vx =+ 2;
        }

        if (this.y < playboardTopBorder + bombRadius) {
               this.vy =+ 2;
        } else if (this.y > playboardBottomBorder - bombRadius) {
               this.vy =- 2;
        }

        //Check collision with other bombs

  //ATTRIBUTE////////////////////////////
  // private color: string;
  private x = 0;
  private y = 0;
  private vx = 20;
  private vy = 20;
  private diameter = 50;
  private boardWidth: number;
  private boardHeight: number;

  //CONSTRUCTOR////////////////////////
  constructor(diameter: number, x: number, y: number, boardWidth: number, boardHeight: number) {
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
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
    } else if (this.x < width / 2 - this.boardWidth / 2 + this.diameter / 2) {
      this.vx = +10;
    }
    
}
