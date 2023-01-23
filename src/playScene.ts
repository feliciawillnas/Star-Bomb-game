class PlayScene {
  //ATTRIBUTE////////////////////////////
  public goal: Goal;
  public scoreInterface: ScoreInterface;
  // public player: Player;
  public playboard: Playboard;
  private bombs: Bomb[];
  private spawnTimeout: number;
  private removeTimeout: number;
  public playerOne: Player;
  public playerTwo: Player;

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
    
    this.spawnTimeout = 0;
    this.removeTimeout = 16000;
    this.bombs = [];

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
    this.goal.update();
    this.scoreInterface.update();
    this.playboard.update();
    this.playerOne.update();
    this.playerTwo.update();

    for (const bomb of this.bombs) {
      bomb.update(this.playboard.width, this.playboard.height);
    }
    this.checkCollision();
  }

  //Draw
  public draw() {
    this.goal.draw();
    this.scoreInterface.draw();
    this.playboard.draw();
    this.playerOne.draw();
    this.playerTwo.draw();

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
          const x = random(playAreaLeftBorder + bombRadius + 300,
              playAreaRightBorder - bombRadius - 300);
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

  private checkCollision() {
      const allEntities = [...this.bombs]
      for (const entity of allEntities) {
          for (const otherEntity of allEntities) {
              if (entity === otherEntity) continue;

              let spring = 0.05;

              let dx = otherEntity.x - entity.x;
              let dy = otherEntity.y - entity.y;
              let distance = sqrt(dx * dx + dy * dy);
              let minDist = otherEntity.diameter / 2 + entity.diameter / 2;

              if (distance < minDist) {
                    let angle = atan2(dy, dx);
                    let targetX = entity.x + cos(angle) * minDist;
                    let targetY = entity.y + sin(angle) * minDist;
                    let ax = (targetX - otherEntity.x) * spring;
                    let ay = (targetY - otherEntity.y) * spring;
                    entity.vx -= ax;
                    entity.vy -= ay;
                    otherEntity.vx += ax;
                    otherEntity.vy += ay;
              }

          }
      }
  }

}
