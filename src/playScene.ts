class PlayScene {
  //ATTRIBUTE////////////////////////////
  private goal: Goal;
  private scoreInterface: ScoreInterface;
  private bomb: Bomb;
  private playboard: Playboard;
  public playerOne: Player;
  public playerTwo: Player;
  // private bombs: Bomb[];
  // private spawnTimeout: number;

  //CONSTRUCTOR////////////////////////
  constructor() {
    const offsetTop = 40;
    const boardWidth = 1000;
    const boardHeight = 500;
    const goalW = 150;
    const goalH = 220;
    const neonPink = '#F98CF3';
    const neonBlue = '#69B7C2';
    const neonBlur = 18;
    const offsetBlur = 5;

    const playerOne = 1;
    const playerTwo = 2;

    this.scoreInterface = new ScoreInterface(boardWidth, boardHeight);
    this.bomb = new Bomb(60, 400, 400, boardWidth, boardHeight);

    this.playboard = new Playboard(
      offsetTop,
      boardWidth,
      boardHeight,
      goalW,
      goalH,
      neonPink,
      neonBlue,
      neonBlur,
      offsetBlur
    );
    this.goal = new Goal(
      offsetTop,
      boardWidth,
      boardHeight,
      goalW,
      goalH,
      neonPink,
      neonBlue,
      neonBlur,
      offsetBlur
    );
    this.playerOne = new Player(playerOne, offsetTop, boardWidth, boardHeight);
    this.playerTwo = new Player(playerTwo, offsetTop, boardWidth, boardHeight);
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    this.playboard.update();
    this.scoreInterface.update();
    this.goal.update();
    this.bomb.update(10);
    this.playerOne.update();
    this.playerTwo.update();
    // const rightSide = width / 2 + this.rectW / 2;
    // for (const bomb of this.bombs) {
    //   bomb.update(rightSide);
    // }

    // this.spawnBombs();
  }
  //Draw
  public draw() {
    this.playboard.draw();
    this.scoreInterface.draw();
    this.goal.draw();
    this.bomb.draw();
    this.playerOne.draw();
    this.playerTwo.draw();

    // for (const bomb of this.bombs) {
    //   bomb.draw();
    // }
  }

  /** skapa nya bomber allt eftersom */
  // private spawnBombs() {
  //   this.spawnTimeout -= deltaTime;
  //   if (this.spawnTimeout < 0) {

  //     const diameter = 10;
  //     const x = random((width / 2 - this.rectW / 2) + diameter / 2,
  //       (width / 2 + this.rectW / 2) - diameter / 2);
  //     const y = random((height / 2 - this.rectH / 2 + this.offsetTop) + diameter / 2,
  //       (height / 2 + this.rectH / 2 + this.offsetTop) - diameter / 2);

  //     this.bombs.push(new Bomb(diameter, x, y));
  //     this.spawnTimeout = 2000;
  //   }
  // }
}
