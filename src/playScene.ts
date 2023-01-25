class PlayScene {
  //ATTRIBUTE////////////////////////////
  public goal: Goal;
  public scoreInterface: ScoreInterface;
  // public player: Player;
  public playboard: Playboard;
  private bombs: Bomb[];
  private spawnTimeout: number;
  // private removeTimeout: number;

  public playerOne: Player;
  public playerTwo: Player;

  private scorePlayer1: number;
  private scorePlayer2: number;

  private offsetTop: number;
  private boardWidth: number;
  private boardHeight: number;
  private goalW: number;
  private goalH: number;
  // private bombs: Bomb[];
  // private spawnTimeout: number;

  private startTime: any;
  private showText: boolean;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.offsetTop = 40;
    this.boardWidth = 1000;
    this.boardHeight = 500;
    this.goalW = 150;
    this.goalH = 220;
    const neonPink = "#F98CF3";
    const neonBlue = "#69B7C2";
    const neonBlur = 18;
    const offsetBlur = 5;

    const playerOne = 1;
    const playerTwo = 2;

    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;

    this.scoreInterface = new ScoreInterface(this.boardWidth, this.boardHeight);

    this.spawnTimeout = 0;
    // this.removeTimeout = 16000;
    this.bombs = [];

    this.playboard = new Playboard(
      this.offsetTop,
      this.boardWidth,
      this.boardHeight,
      this.goalW,
      this.goalH,
      neonPink,
      neonBlue,
      neonBlur,
      offsetBlur
    );
    this.goal = new Goal(
      this.offsetTop,
      this.boardWidth,
      this.boardHeight,
      this.goalW,
      this.goalH,
      neonPink,
      neonBlue,
      neonBlur,
      offsetBlur
    );
    this.playerOne = new Player(
      playerOne,
      this.offsetTop,
      this.boardWidth,
      this.boardHeight
    );
    this.playerTwo = new Player(
      playerTwo,
      this.offsetTop,
      this.boardWidth,
      this.boardHeight
    );

    this.startTime = null;
    this.showText = false;
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    this.playboard.update();
    this.scoreInterface.update();
    this.goal.update();
    this.playboard.update();
    this.playerOne.update();
    this.playerTwo.update();

    for (const bomb of this.bombs) {
      bomb.update(this.playboard.width, this.playboard.height);
    }
    this.checkCollision();
    this.updateBombs(); // Spawn, updateTime, remove
  }

  //Draw
  public draw() {
    this.playboard.draw();
    this.scoreInterface.draw(this.scorePlayer1, this.scorePlayer2);
    this.goal.draw();
    this.playboard.draw();
    this.playerOne.draw();
    this.playerTwo.draw();

    for (const bomb of this.bombs) {
      bomb.draw();
    }
    this.checkForGoal();
    // if (this.showText) {
    //   textAlign(CENTER);
    //   textSize(30);
    //   fill(255);
    //   if (millis() - this.startTime < 2000) {
    //     text(
    //       "+10!",
    //       width / 2 + this.boardWidth / 2 + this.goalW / 2,
    //       this.boardHeight / 2
    //     );
    //   } else {
    //     this.showText = false;
    //   }
    // }
    this.displayPoints();
  }
  // KOLLAR OM EN BOMB HAMNAR I MÅL OCH GER POÄNG.////////////////////////////////////
  private checkForGoal() {
    // LÄGG TILL TIMER FÖR POÄNGEN OVANFÖR MÅLEN
    for (let i = 0; i < this.bombs.length; i++) {
      // Vänster mål
      if (
        this.bombs[i].x <=
          width / 2 - this.boardWidth / 2 + this.bombs[i].diameter / 2 &&
        this.bombs[i].y <= height / 2 + this.goalH / 2 + this.offsetTop &&
        this.bombs[i].y >= height / 2 - this.goalH / 2 + this.offsetTop
      ) {
        this.bombs.splice(i, 1);
        this.scorePlayer2 = this.scorePlayer2 + 10;
        // Give score to player
        this.startTime = millis();
        this.showText = true;
      }

      // Höger mål
      if (
        this.bombs[i].x >=
          width / 2 + this.boardWidth / 2 - this.bombs[i].diameter / 2 &&
        this.bombs[i].y <= height / 2 + this.goalH / 2 + this.offsetTop &&
        this.bombs[i].y >= height / 2 - this.goalH / 2 + this.offsetTop
      ) {
        this.bombs.splice(i, 1);
        this.scorePlayer1 = this.scorePlayer1 + 10;
        // Give score to player
        this.startTime = millis();
        this.showText = true;
      }
    }
  }

  private displayPoints() {
    if (this.showText) {
      textAlign(CENTER);
      textSize(30);
      fill(255);
      if (millis() - this.startTime < 2000) {
        text(
          "+10!",
          width / 2 + this.boardWidth / 2 + this.goalW / 2,
          this.boardHeight / 2
        );
      } else {
        this.showText = false;
      }
    }
  }

  //Spawn bombs
  private spawnBombs() {
    const playAreaLeftBorder = width / 2 - this.playboard.width / 2;
    const playAreaRightBorder = width / 2 + this.playboard.width / 2;
    const playAreaTopBorder =
      height / 2 - this.playboard.height / 2 + this.playboard.offsetTop;
    const playAreaBottomBorder =
      height / 2 + this.playboard.height / 2 + this.playboard.offsetTop;
    const diameter = 40;
    const bombRadius = diameter / 2;
    const x = random(
      playAreaLeftBorder + bombRadius + 300,
      playAreaRightBorder - bombRadius - 300
    );
    const y = random(
      playAreaTopBorder + bombRadius,
      playAreaBottomBorder - bombRadius
    );
    // Added timeToLive in class Bomb
    this.spawnTimeout -= deltaTime;
    if (this.spawnTimeout <= 0) {
      this.bombs.push(new Bomb(diameter, x, y));
      this.spawnTimeout = 1000;
    }
  }

  // Decreases each bombs timeToLive by one per second.
  private updateBombsTimeToLive() {
    let tmpArray = [];
    for (let i = 0; i < this.bombs.length; i++) {
      let bomb = this.bombs[i];
      bomb.timeToLive -= deltaTime;
      tmpArray.push(bomb);
    }
    this.bombs = tmpArray;
  }

  // Removes expired bombs.
  private removeDeadBombs() {
    let tmpArray = [];
    for (let i = 0; i < this.bombs.length; i++) {
      let bomb = this.bombs[i];
      if (bomb.timeToLive > 0) {
        tmpArray.push(bomb);
      }
    }
    this.bombs = tmpArray;
  }

  // A collaboration of all three funcitons regarding BOMBS lifetime from start to finish.
  private updateBombs() {
    this.spawnBombs();
    this.updateBombsTimeToLive();
    this.removeDeadBombs();
  }

  // Checks collision between players and bombs
  private checkCollision() {
    const allBombs = [...this.bombs];
    const players = [this.playerOne, this.playerTwo];

    for (const bomb of allBombs) {
      //BOMBER KOLLIDERAR MED BOMBER
      for (const otherBombs of allBombs) {
        if (bomb === otherBombs) continue;
        let spring = 0.05;

        let dx = otherBombs.x - bomb.x;
        let dy = otherBombs.y - bomb.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = otherBombs.diameter / 2 + bomb.diameter / 2;

        if (distance < minDist) {
          let angle = atan2(dy, dx);
          let targetX = bomb.x + cos(angle) * minDist;
          let targetY = bomb.y + sin(angle) * minDist;
          let ax = (targetX - otherBombs.x) * spring;
          let ay = (targetY - otherBombs.y) * spring;
          bomb.vx -= ax;
          bomb.vy -= ay;
          otherBombs.vx += ax;
          otherBombs.vy += ay;
        }
      }
      // SPELARE KOLLIDERAR MED BOMBER
      for (const player of players) {
        let spring = 0.05;

        let dx = player.x - bomb.x;
        let dy = player.y - bomb.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = player.diameter / 2 + bomb.diameter / 2;

        if (distance < minDist) {
          let angle = atan2(dy, dx);
          let targetX = bomb.x + cos(angle) * minDist;
          let targetY = bomb.y + sin(angle) * minDist;
          let ax = (targetX - player.x) * spring;
          let ay = (targetY - player.y) * spring;
          bomb.vx -= ax;
          bomb.vy -= ay;
        }
      }
      // SPELARE KOLLIDERAR MED SPELARE
      for (const player of players) {
        for (const otherPlayer of players) {
          if (player === otherPlayer) continue;

          let spring = 0.05;

          let dx = otherPlayer.x - player.x;
          let dy = otherPlayer.y - player.y;
          let distance = sqrt(dx * dx + dy * dy);
          let minDist = otherPlayer.diameter / 2 + player.diameter / 2;

          if (distance < minDist) {
            let angle = atan2(dy, dx);
            let targetX = player.x + cos(angle) * minDist;
            let targetY = player.y + sin(angle) * minDist;
            let ax = (targetX - player.x) * spring;
            let ay = (targetY - player.y) * spring;
            player.x -= ax;
            player.y -= ay;
          }
        }
      }
    }
  }
}
