class PlayScene {
  //ATTRIBUTE////////////////////////////
  public goal: Goal;
  public scoreInterface: ScoreInterface;
  public bomb: Bomb;
  public player: Player;
  public playboard: Playboard;
  // private bombs: Bomb[];
  // private spawnTimeout: number;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.scoreInterface = new ScoreInterface();
    this.bomb = new Bomb(60, 400, 400);

    const offsetTop = 40;
    const boardWidth = 1000;
    const boardHeight = 500;
    this.playboard = new Playboard(offsetTop, boardWidth, boardHeight);
    this.goal = new Goal(offsetTop, boardWidth, boardHeight);
    this.player = new Player();
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    this.goal.update();
    this.scoreInterface.update();
    this.bomb.update(10);
    this.player.update();
    this.playboard.update();
    // const rightSide = width / 2 + this.rectW / 2;
    // for (const bomb of this.bombs) {
    //   bomb.update(rightSide);
    // }

    // this.spawnBombs();
  }
  //Draw
  public draw() {
    this.goal.draw();
    this.scoreInterface.draw();
    this.bomb.draw();
    this.player.draw();
    this.playboard.draw();

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
