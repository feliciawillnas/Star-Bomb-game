class PlayScene {
  /* ------------------
        ATTRIBUTES
  ------------------ */
  public goal: Goal;
  public scoreInterface: ScoreInterface;
  public playboard: Playboard;
  private bombs: Bomb[];
  private powerUps: PowerUp[];
  private spawnTimeout: number;
  private spawnTimeoutPowerUp: number;

  public playerOne: Player;
  public playerTwo: Player;

  private scorePlayer1: number;
  private scorePlayer2: number;
  private gameTime: number;
  public gameTimeMin: number;
  public gameTimeSec: number;

  private offsetTop: number;
  private boardWidth: number;
  private boardHeight: number;
  private goalW: number;
  private goalH: number;
  private rightGoalShieldTime: number
  private leftGoalShieldTime: number

  private startTimeGoalText: any;
  private showLeftGoalText: boolean;
  private showRightGoalText: boolean;

  /* --------------------
        CONSTRUCTOR
  -------------------- */
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
    this.gameTime = 180_999;
    this.gameTimeMin = 0;
    this.gameTimeSec = 0;

    this.startTimeGoalText = null;
    this.showLeftGoalText = false;
    this.showRightGoalText = false;

    this.scoreInterface = new ScoreInterface(this.boardWidth, this.boardHeight);

    this.spawnTimeout = 0;
    this.spawnTimeoutPowerUp = 5000;
    this.rightGoalShieldTime = 10;
    this.leftGoalShieldTime = 10;
    this.bombs = [];
    this.powerUps = [];

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

  /* ---------------------
        UPDATE & DRAW
  --------------------- */

  // Update
  public update() {
    this.playboard.update();
    this.scoreInterface.update();
    this.goal.update();
    this.playboard.update();
    this.playerOne.update();
    this.playerTwo.update();

    for (const powerUp of this.powerUps) {
      powerUp.update();
    }

    for (const bomb of this.bombs) {
      bomb.update();
    }

    this.checkCollisions();
    this.countdownGameTime();
    this.updateBombs(); // spawnBomb, updateBombsTimeToLive, removeDeadBombs
    this.spawnPowerUps()
  }

  // Draw
  public draw() {
    this.playboard.draw();
    this.scoreInterface.draw(
      this.scorePlayer1,
      this.scorePlayer2,
      this.gameTimeMin,
      this.gameTimeSec
    );
    this.goal.draw();
    this.playboard.draw();
    this.playerOne.draw();
    this.playerTwo.draw();

    for (const powerUp of this.powerUps) {
      powerUp.draw();
    }

    for (const bomb of this.bombs) {
      bomb.draw();
    }

    if (this.rightGoalShieldTime > 0) {
      push();
      stroke(255);
      strokeWeight(10);
      line(
        width / 2 + this.boardWidth / 2,
        height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop+10,
        width / 2 + this.boardWidth / 2,
        height / 2 + this.goalH / 2 + this.offsetTop - 10
      );
      pop();
    }
    
    if (this.leftGoalShieldTime > 0) {
      push();
      stroke(255);
      strokeWeight(10);
      line(
        width / 2 - this.boardWidth / 2,
        height / 2 - this.boardHeight / 2 + this.goalH - this.offsetTop+10,
        width / 2 - this.boardWidth / 2,
        height / 2 + this.goalH / 2 + this.offsetTop - 10
      );
      pop();
    }

    this.drawGoal();
    this.drawVolumeSlider();
  }

  // A collection of collision checking methods
  private checkCollisions() {
    this.checkBombAndPlayerCollision();
    this.checkBorderCollision();
    this.checkPowerUpCollision();
    this.checkForGoal();
  }

  // Text: "Volume: x%"
  private drawVolumeSlider() {
    push();
    noStroke();
    fill("white");
    textSize(10);
    text("Music:", 45, 20);
    text(int(slider.value() * 100) + "%", 120, 40);
    pop();

    push();
    noStroke();
    fill("white");
    textSize(10);
    text("Sound effect:", 80, 60);
    text(int(slider2.value() * 100) + "%", 120, 80);
    pop();
  }

  // GAME TIME

  private countdownGameTime() {
    this.gameTime -= deltaTime;

    this.gameTimeMin = floor(this.gameTime / 60_000);
    this.gameTimeSec = this.gameTime % 60_000;
  }

  /* -----------------------------
        GOAL-RELATED METHODS
  ----------------------------- */

  // If the bomb enters the left goal. Bomb in goal = true, not in goal = false.
  private inLeftGoal(bomb: Bomb): boolean {
    if (
      bomb.x <= width / 2 - this.boardWidth / 2
    ) {
      return true;
    }
    return false;
  }

  // If the bomb enters the right goal. Bomb in goal = true, not in goal = false.
  private inRightGoal(bomb: Bomb): boolean {
    if (
      bomb.x >= width / 2 + this.boardWidth / 2
    ) {
      return true;
    }
    return false;
  }

  // Give score to player 1.
  private player1Score(points: number) {
    this.scorePlayer1 += points;
    this.startTimeGoalText = millis();
    this.showRightGoalText = true;
  }
  // Give score to player 2.
  private player2Score(points: number) {
    this.scorePlayer2 += points;
    this.startTimeGoalText = millis();
    this.showLeftGoalText = true;
  }

  // Gives points if a goal is scored.
  private checkForGoal() {
    let bombs = [];
    for (let i = 0; i < this.bombs.length; i++) {
      let bomb = this.bombs[i];

      // Only score if bomb has not exploded
      if (bomb.timeToLive <= 200) {
        bombs.push(bomb);
        continue;
      }
      // Add amount of points of scored goal here.
      if (this.inLeftGoal(bomb)) {
        this.player2Score(10);
      } else if (this.inRightGoal(bomb)) {
        this.player1Score(10);
      } else {
        bombs.push(bomb);
      }
    }
    // Overwrites the old list. We don't want to iterate over the loop when we have updated the list.
    this.bombs = bombs;
  }

  private drawGoal() {
    this.drawMadeGoalP1();
    this.drawMadeGoalP2();
  }

  // Draws the text "GOAL!" over the left goal when a bomb crosses its goal line.
  private drawMadeGoalP2() {
    if (this.showLeftGoalText) {
      push();
      textAlign(CENTER);
      textSize(25);
      fill(255);
      if (millis() - this.startTimeGoalText < 1000) {
        text(
          "GOAL!",
          width / 2 - this.boardWidth / 2 - this.goalW / 2,
          height / 2 - this.goalH / 2,
        );
      } else {
        this.showLeftGoalText = false;
      }
      pop();
    }
  }

  // Draws the text "GOAL!" over the right goal when a bomb crosses its goal line.
  private drawMadeGoalP1() {
    if (this.showRightGoalText) {
      push();
      textAlign(CENTER);
      textSize(25);
      fill(255);
      if (millis() - this.startTimeGoalText < 1000) {
        text(
          "GOAL!",
          width / 2 + this.boardWidth / 2 + this.goalW / 2,
          height / 2 - this.goalH / 2
        );
      } else {
        this.showRightGoalText = false;
      }
      pop();
    }
  }

  /* -----------------------------
        BOMB-RELATED METHODS
  ----------------------------- */

  // A collection of all three funcitons regarding BOMBS lifetime from start to finish.
  private updateBombs() {
    this.spawnBombs();
    this.updateBombsTimeToLive();
    this.removeDeadBombs();
  }

  //Spawn bombs
  private spawnBombs() {
    const diameter = 40;
    const bombRadius = diameter / 2;
    const playAreaLeftBorder = width / 2 - this.playboard.width / 2;
    const playAreaRightBorder = width / 2 + this.playboard.width / 2;
    const playAreaTopBorder =
      height / 2 - this.playboard.height / 2 + this.playboard.offsetTop;
    const playAreaBottomBorder =
      height / 2 + this.playboard.height / 2 + this.playboard.offsetTop;
    const playAreaX1 = playAreaLeftBorder + bombRadius + 100;
    const playAreaX2 = playAreaRightBorder - bombRadius - 100;
    const playAreaY1 = playAreaTopBorder + bombRadius + 50;
    const playAreaY2 = playAreaBottomBorder - bombRadius - 50;
    let x = random(playAreaX1, playAreaX2);
    let y = random(playAreaY1, playAreaY2);
    const players = [this.playerOne, this.playerTwo];
    let unavailableSpacesX = [];
    let unavailableSpacesY = [];
    this.spawnTimeout -= deltaTime;
    let timeToLive = random(6000, 20000);

    if (this.spawnTimeout < 0) {
      // Kontrollerar om spelare existerar på x-axeln
      for (const player of players) {
        if (
          x > player.x - player.diameter / 2 - bombRadius - 50 &&
          x < player.x + player.diameter / 2 + bombRadius + 50
        ) {
          unavailableSpacesX.push(player.x);
        }
      }

      // Kontrollerar om spelare existerar på y-axeln
      for (const player of players) {
        if (
          y > player.y - player.diameter / 2 - bombRadius - 50 &&
          y < player.y + player.diameter / 2 + bombRadius + 50
        ) {
          unavailableSpacesY.push(player.y);
        }
      }

      // Kontrollerar om bomb existerar på x-axeln
      for (const bomb of this.bombs) {
        if (x > bomb.x - bomb.diameter - 5 && x < bomb.x + bomb.diameter + 5) {
          unavailableSpacesX.push(bomb.x);
        }
      }

      // Kontrollerar om bomb existerar på y-axeln
      for (const bomb of this.bombs) {
        if (y > bomb.y - bomb.diameter - 5 && y < bomb.y + bomb.diameter + 5) {
          unavailableSpacesY.push(bomb.y);
        }
      }

      // Lägger till bomb på spelplan om randomvärdet inte kolliderar med existerande bomber
      // eller spelare på x- eller y-axeln
      if (unavailableSpacesX.length === 0 || unavailableSpacesY.length === 0) {
        this.bombs.push(new Bomb(diameter, x, y, timeToLive));
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
      } else if (bomb.timeToLive < 0) {
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

  // Checks collision between players and bombs
  private checkBombAndPlayerCollision() {
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

  // Check collision with borders
  private checkBorderCollision() {
    const playboardLeftBorder = width / 2 - this.playboard.width / 2;
    const playboardRightBorder = width / 2 + this.playboard.width / 2;
    const playboardTopBorder = height / 2 - this.playboard.height / 2 + 40;
    const playboardBottomBorder = height / 2 + this.playboard.height / 2 + 40;
    const allBombs = [...this.bombs];
    this.rightGoalShieldTime -= deltaTime;
    this.leftGoalShieldTime -= deltaTime;
    
    for (const bomb of allBombs) {
      
      const bombRadius = bomb.diameter / 2;
    
      // Checks collision with right border
      // The if conditionals decides the bombs speed (vx) after collision
      if (
        (this.rightGoalShieldTime <= 0 && bomb.x > playboardRightBorder - bombRadius &&
        bomb.y < playboardTopBorder + 140 + bomb.diameter / 4)
        ||
        (this.rightGoalShieldTime <= 0 && bomb.x > playboardRightBorder - bombRadius &&
        bomb.y > playboardBottomBorder - 140 - bomb.diameter / 4)
        ||
        (this.rightGoalShieldTime > 0 && bomb.x > playboardRightBorder - bombRadius)
      ) {
      
        if (bomb.vx >= 0 && bomb.vx <= 1) {
          bomb.vx = -1;
        } else if (bomb.vx > 1) {
          bomb.vx = -2;
        }
      }

      // Checks collision with left border
      // The if conditionals decides the bombs speed (vx) after collision
      if (
        (this.leftGoalShieldTime <= 0 && bomb.x < playboardLeftBorder + bombRadius &&
        bomb.y< playboardTopBorder + 140 + bomb.diameter / 4) 
        ||
        (this.leftGoalShieldTime <= 0 && bomb.x < playboardLeftBorder + bombRadius &&
        bomb.y > playboardBottomBorder - 140 - bomb.diameter / 4)
        ||
        (this.leftGoalShieldTime > 0 && bomb.x < playboardLeftBorder + bombRadius)
      ) {
          if (bomb.vx < 0 && bomb.vx >= -1) {
            bomb.vx = 1;
          } else if (bomb.vx < -1) {
            bomb.vx = 2;
          }
      }
    
      // Checks collision with top border within play area and inside goals
      // The if conditionals decides the bombs speed (vy) after collision
      if (
        (bomb.y < playboardTopBorder + bombRadius)
        ||
        (bomb.x > playboardRightBorder - bombRadius && bomb.y < playboardTopBorder + 140 + bombRadius)
        || 
        (bomb.x < playboardLeftBorder + bombRadius && bomb.y < playboardTopBorder + 140 + bombRadius)
      ) {
        if (bomb.vy <= 0 && bomb.vy >= -1) {
          bomb.vy = 1;
        } else if (bomb.vy < -1 && bomb.vy >= -2) {
          bomb.vy = 2;
        } else if (bomb.vy < -2 && bomb.vy >= -3) {
          bomb.vy = 3;
        } else if (bomb.vy < -3 && bomb.vy >= -4) {
          bomb.vy = 4;
        } else if (bomb.vy < -4) {
          bomb.vy = 5;
        }
      }
    
      // Checks collision with bottom border within play areea and inside goals
      // The if conditionals decides the bombs speed (vy) after collision
      if (
        (bomb.y > playboardBottomBorder - bombRadius) 
        || 
        (bomb.x > playboardRightBorder - bombRadius && bomb.y > playboardBottomBorder - 140 - bombRadius)
        || 
        (bomb.x < playboardLeftBorder + bombRadius && bomb.y > playboardBottomBorder - 140 - bombRadius)
      ) {
        if (bomb.vy > 0 && bomb.vy <= 1) {
          bomb.vy = -1;
        } else if (bomb.vy > 1 && bomb.vy <= 2) {
          bomb.vy = -2;
        } else if (bomb.vy > 2 && bomb.vy <= 3) {
          bomb.vy = -3;
        } else if (bomb.vy > 3 && bomb.vy <= 4) {
          bomb.vy = -4;
        } else if (bomb.vy > 4) {
          bomb.vy = -5;
        }
      }
    }
  }

  /* -----------------------------
        POWERUP-RELATED METHODS
  ----------------------------- */ 

  // Spawns powerups
  private spawnPowerUps() {
      const diameter = 28;
      const powerUpRadius = diameter / 2;
      const playAreaLeftBorder = (width / 2 - this.playboard.width / 2)
      const playAreaRightBorder = (width / 2 + this.playboard.width / 2)
      const playAreaTopBorder = (height / 2 - this.playboard.height / 2 + this.playboard.offsetTop)
      const playAreaBottomBorder = (height / 2 + this.playboard.height / 2 + this.playboard.offsetTop)
      const playAreaX1 = playAreaLeftBorder + powerUpRadius + 400;
      const playAreaX2 = playAreaRightBorder - powerUpRadius - 400;
      const playAreaY1 = playAreaTopBorder + powerUpRadius + 50;
      const playAreaY2 = playAreaBottomBorder - powerUpRadius - 50;
      let x = random(playAreaX1, playAreaX2);
      let y = random(playAreaY1, playAreaY2)
      const players = [this.playerOne, this.playerTwo];
      let unavailableSpacesX = []
      let unavailableSpacesY = []
      let allTypesOfPowerUps = ["reverse-controls", "goal-shield", "slow-down", "small-player", "bonus-points"]
      this.spawnTimeoutPowerUp -= deltaTime;
        
      if (this.spawnTimeoutPowerUp < 0) {
  
          // Kontrollerar om spelare existerar på x-axeln
          for (const player of players) {
              if (x > (player.x - player.diameter / 2 - powerUpRadius - 50) &&
                  x < (player.x + player.diameter / 2 + powerUpRadius + 50)) {
                  unavailableSpacesX.push(player.x);
              }
          }
  
          // Kontrollerar om spelare existerar på y-axeln
          for (const player of players) {
              if (y > (player.y - player.diameter / 2 - powerUpRadius - 50) &&
                  y < (player.y + player.diameter / 2 + powerUpRadius + 50)) {
                  unavailableSpacesY.push(player.y);
              }
          }
  
          // Kontrollerar om powerup existerar på x-axeln
          for (const powerUp of this.powerUps) {
            if (x > (powerUp.x - powerUp.diameter - 5) && x < (powerUp.x + powerUp.diameter + 5)) {
                unavailableSpacesX.push(powerUp.x);
            }
          }

          // Kontrollerar om powerup existerar på y-axeln
          for (const powerUp of this.powerUps) {
              if (y > (powerUp.y - powerUp.diameter - 5) && y < (powerUp.y + powerUp.diameter + 5)) {
                  unavailableSpacesY.push(powerUp.y);
              }
          }

          // Lägger till powerup på spelplan om randomvärdet inte kolliderar med existerande powerups
          // eller spelare på x- eller y-axeln
          if (unavailableSpacesX.length === 0 || unavailableSpacesY.length === 0) {
              this.powerUps.push(new PowerUp(diameter, x, y, random(allTypesOfPowerUps)));
              this.spawnTimeoutPowerUp = random(7_000, 20_000);
          }
      }
  }

  // Checks collision between powerups and players and applies powerups
  private checkPowerUpCollision() {
    const players = [this.playerOne, this.playerTwo];

    for (let i = 0; i < this.powerUps.length; i++) {
      for (let p = 0; p < players.length; p++) {
        if (this.powerUps[i] !== undefined) {
          let dx = players[p].x - this.powerUps[i].x;
          let dy = players[p].y - this.powerUps[i].y;
          let distance = sqrt(dx * dx + dy * dy);
          let minDist = players[p].diameter / 2 + this.powerUps[i].diameter / 2;
  
          if (distance < minDist) {
            // Slow down powerup – red color
            if (this.powerUps[i].type == "slow-down") {
                if (p == 0) {
                  players[1].slowDownPlayer();
                } else {
                  players[0].slowDownPlayer();
                }
            }
            // Reverse control powerup – green color
            if (this.powerUps[i].type == "reverse-controls") {
              if (p == 0) {
                players[1].activateReverseControls();
              } else {
                players[0].activateReverseControls();
              }
            }
            // Goal shield powerup – blue color
            if (this.powerUps[i].type == "goal-shield") {
              if (p == 0) {
                this.leftGoalShieldTime = 6000;
              } else {
                this.rightGoalShieldTime = 6000;
              }
            }
            // Small player powerup – yellow color
            if (this.powerUps[i].type == "small-player") {
              if (p == 0) {
                players[1].makePlayerSmall();
              } else {
                players[0].makePlayerSmall();
              }
            }
            // Bonus powerup – cyan color
            if (this.powerUps[i].type == "bonus-points") {
              if (p == 0) {
                this.scorePlayer1 = this.scorePlayer1 + 20;
              } else {
                this.scorePlayer2 = this.scorePlayer2 + 20;
              }
            }
  
            this.powerUps.splice(i, 1);
          }
        }
      }
    }
  }
}
