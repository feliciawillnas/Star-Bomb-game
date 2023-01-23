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
    this.scoreInterface.draw();
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



