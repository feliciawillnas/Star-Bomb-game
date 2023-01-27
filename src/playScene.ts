class PlayScene {
  //ATTRIBUTE////////////////////////////
  public goal: Goal;
  public scoreInterface: ScoreInterface;
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
  private showGoalTextP1: boolean;
  private showGoalTextP2: boolean;

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

    this.startTime = null;
    this.showGoalTextP1 = false;
    this.showGoalTextP2 = false;

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
    this.drawGoal();
  }
  // KOLLAR OM EN BOMB HAMNAR I MÅL OCH GER POÄNG.////////////////////////////////////
  private checkForGoal() {
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
        this.showGoalTextP1 = true;
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
        this.showGoalTextP2 = true;
      }
    }
  }

  private drawGoal() {
    this.drawMadeGoalP1();
    this.drawMadeGoalP2();
  }

  // Draws the text "GOAL!" over the left goal when a bomb crosses its goal line.
  private drawMadeGoalP1() {
    if (this.showGoalTextP1) {
      push();
      textAlign(CENTER);
      textSize(25);
      fill(255);
      if (millis() - this.startTime < 1000) {
        text(
          "GOAL!",
          width / 2 - this.boardWidth / 2 - this.goalW / 2,
          height/2 - this.goalH / 2
        );
      } else {
        this.showGoalTextP1 = false;
      }
      pop();
    }
  }

 // Draws the text "GOAL!" over the right goal when a bomb crosses its goal line.
  private drawMadeGoalP2() {
    if (this.showGoalTextP2) {
      push();
      textAlign(CENTER);
      textSize(25);
      fill(255);
      if (millis() - this.startTime < 1000) {
        text(
          "GOAL!",
          width / 2 + this.boardWidth / 2 + this.goalW / 2,
          height / 2 - this.goalH / 2 
        );
      } else {
        this.showGoalTextP2 = false;
      }
      pop();
    }
  }

    //Spawn bombs
    private spawnBombs() {
      const diameter = 40;
      const bombRadius = diameter / 2;
      const playAreaLeftBorder = (width / 2 - this.playboard.width / 2)
      const playAreaRightBorder = (width / 2 + this.playboard.width / 2)
      const playAreaTopBorder = (height / 2 - this.playboard.height / 2 + this.playboard.offsetTop)
      const playAreaBottomBorder = (height / 2 + this.playboard.height / 2 + this.playboard.offsetTop)
      const playAreaX1 = playAreaLeftBorder + bombRadius + 100;
      const playAreaX2 = playAreaRightBorder - bombRadius - 100;
      const playAreaY1 = playAreaTopBorder + bombRadius + 50;
      const playAreaY2 = playAreaBottomBorder - bombRadius - 50;
      let x = random(playAreaX1, playAreaX2);
      let y = random(playAreaY1, playAreaY2)
      const players = [this.playerOne, this.playerTwo];
      let unavailableSpacesX = []
      let unavailableSpacesY = []
      this.spawnTimeout -= deltaTime;
        
      if (this.spawnTimeout < 0) {
  
          // Kontrollerar om spelare existerar på x-axeln
          for (const player of players) {
              if (x > (player.x - player.diameter / 2 - bombRadius - 50) && x < (player.x + player.diameter / 2 + bombRadius + 50)) {
                  unavailableSpacesX.push(player.x);
              }
          }
  
          // Kontrollerar om spelare existerar på y-axeln
          for (const player of players) {
              if (y > (player.y - player.diameter / 2 - bombRadius - 50) && y < (player.y + player.diameter / 2 + bombRadius + 50)) {
                  unavailableSpacesY.push(player.y);
              }
          }
  
          // Kontrollerar om bomb existerar på x-axeln
          for (const bomb of this.bombs) {
              if (x > (bomb.x - bomb.diameter - 5) && x < (bomb.x + bomb.diameter + 5)) {
                unavailableSpacesX.push(bomb.x);
              }
          }
  
          // Kontrollerar om bomb existerar på y-axeln
          for (const bomb of this.bombs) {
              if (y > (bomb.y - bomb.diameter - 5) && y < (bomb.y + bomb.diameter + 5)) {
                  unavailableSpacesY.push(bomb.y);
              }
          }
  
          // Lägger till bomb på spelplan om randomvärdet inte kolliderar med existerande bomber
          // eller spelare på x- eller y-axeln
          if (unavailableSpacesX.length === 0 || unavailableSpacesY.length === 0) {
              this.bombs.push(new Bomb(diameter, x, y, 15_000));
              this.spawnTimeout = 1000;
          }
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
      else if (bomb.timeToLive < 0) {
        // If bomb timer is 0 give points to players.
        if (bomb.x > width / 2) {
          this.scorePlayer1 = this.scorePlayer1 + 2;
        }
        if (bomb.x < width / 2) {
          this.scorePlayer2 = this.scorePlayer2 + 2;
        }
      }
    }
    this.bombs = tmpArray;
  }

  // A collection of all three funcitons regarding BOMBS lifetime from start to finish.
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
        let spring = 0.15;

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
        let spring = 0.35;

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
            let ay = (targetY - player.y) * spring + 0.01;
            player.x -= ax;
            player.y -= ay;
          }
        }
      }
    }
  }

}
