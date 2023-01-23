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
  
  private scorePlayer1: number
  private scorePlayer2: number

  private offsetTop: number
  private boardWidth: number
  private boardHeight: number
  private goalW: number
  private goalH: number
  // private bombs: Bomb[];
  // private spawnTimeout: number;
  
  //CONSTRUCTOR////////////////////////
  constructor() {
    this.offsetTop = 40;
    this.boardWidth = 1000;
    this.boardHeight = 500;
    this.goalW = 150;
    this.goalH = 220;
    const neonPink = '#F98CF3';
    const neonBlue = '#69B7C2';
    const neonBlur = 18;
    const offsetBlur = 5;
    
    const playerOne = 1;
    const playerTwo = 2;
    
    // let scorePlayer1 = 0;
    // let scorePlayer2 = 0;
    this.scorePlayer1 = 0
    this.scorePlayer2 = 0


    this.scoreInterface = new ScoreInterface(this.boardWidth, this.boardHeight);
    
    this.spawnTimeout = 0;
    this.removeTimeout = 16000;
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
      offsetBlur,
    );
    this.playerOne = new Player(playerOne, this.offsetTop, this.boardWidth, this.boardHeight);
    this.playerTwo = new Player(playerTwo, this.offsetTop, this.boardWidth, this.boardHeight);
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
  }

  //Draw
  public draw() {
    this.playboard.draw();
    this.scoreInterface.draw(this.scorePlayer1, this.scorePlayer2);
    this.goal.draw();
    this.playboard.draw();
    this.playerOne.draw();
    this.playerTwo.draw();
    
    this.checkForGoal()
  }

  private checkForGoal(){
    // LÄGG TILL TIMER FÖR POÄNGEN OVANFÖR MÅLEN

    // Vänster mål
    if(this.playerOne.x <= width/2 - this.boardWidth/2 && this.playerOne.y <= height/2 + this.goalH/2 + this.offsetTop && this.playerOne.y >= height/2 - this.goalH/2 + this.offsetTop) {
      this.scorePlayer1 = this.scorePlayer1 + 10
      // Poäng vid mål (visas ovanför målet) 
      text('+10', width/2 - this.boardWidth/ 2 - this.goalW/2, this.boardHeight / 2  )
    }

    // Höger mål
    if (this.playerOne.x >= width/2 + this.boardWidth/2 && this.playerOne.y <= height/2 + this.goalH/2 + this.offsetTop && this.playerOne.y >= height/2 - this.goalH/2 + this.offsetTop){
      this.scorePlayer2 = this.scorePlayer2 + 10
      // Poäng vid mål (visas ovanför målet) 
      text('+10', width/2 + this.boardWidth/ 2 + this.goalW/2, this.boardHeight / 2  )
    }
   

    this.spawnBombs();
    this.removeBombs();
    for (const bomb of this.bombs) {
      bomb.draw();
    }
  }
  
  //Spawn bombs
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

  // Remove bombs after set time
  private removeBombs() {
    this.removeTimeout -= deltaTime;
    if (this.removeTimeout < 0) {
        this.bombs.shift();
        this.removeTimeout = 1000;
    }
  }

  // Checks collision between players and bombs
  private checkCollision() {
      const allBombs = [...this.bombs]
      const players = [this.playerOne, this.playerTwo];
      for (const bomb of allBombs) {
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
      }
  }
}



