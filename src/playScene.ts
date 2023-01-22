class PlayScene {
  //ATTRIBUTE////////////////////////////
  public goal: Goal;
  public scoreInterface: ScoreInterface;
  public player: Player;
  public playboard: Playboard;
  private bombs: Bomb[];
  private spawnTimeout: number;
  private removeTimeout: number;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.scoreInterface = new ScoreInterface();
    this.spawnTimeout = 0;
    this.removeTimeout = 6000;
    this.bombs = [];
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
    this.player.update();
    this.playboard.update();

    for (const bomb of this.bombs) {
      bomb.update(this.playboard.width, this.playboard.height);
    }
  }

  //Draw
  public draw() {
    this.goal.draw();
    this.scoreInterface.draw();
    this.player.draw();
    this.playboard.draw();

    this.spawnBombs();
    this.removeBombs();
    for (const bomb of this.bombs) {
      bomb.draw();
    }
  }
  
  
  private spawnBombs() {
    const playAreaLeftBorder = (width / 2 - this.playboard.width / 2)
    const playAreaRightBorder = (width / 2 + this.playboard.width / 2)
    const playAreaTopBorder = (height / 2 - this.playboard.height / 2 + this.playboard.offsetTop)
    const playAreaBottomBorder = (height / 2 + this.playboard.height / 2 + this.playboard.offsetTop)
    const diameter = 40;
    const bombRadius = diameter / 2;

      this.spawnTimeout -= deltaTime;
      if (this.spawnTimeout < 0) {
          const x = random(playAreaLeftBorder + bombRadius,
              playAreaRightBorder - bombRadius);
          const y = random(playAreaTopBorder + bombRadius,
              playAreaBottomBorder - bombRadius);

          this.bombs.push(new Bomb(diameter, x, y));
          this.spawnTimeout = 1000;
      }
  }

  private removeBombs() {
    this.removeTimeout -= deltaTime;
    if (this.removeTimeout < 0) {
        this.bombs.shift();
        this.removeTimeout = 1000;
    }
}


}
