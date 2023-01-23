class PlayScene {
  //ATTRIBUTE////////////////////////////
  private goal: Goal;
  private scoreInterface: ScoreInterface;
  private bomb: Bomb;
  private playboard: Playboard;
  public playerOne: Player;
  public playerTwo: Player;
  
  private scorePlayer1: number
  private scorePlayer2: number

  private offsetTop: number
  private boardWidth: number
  private goalH: number
  // private bombs: Bomb[];
  // private spawnTimeout: number;
  
  //CONSTRUCTOR////////////////////////
  constructor() {
    this.offsetTop = 40;
    this.boardWidth = 1000;
    const boardHeight = 500;
    const goalW = 150;
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


    this.scoreInterface = new ScoreInterface(this.boardWidth, boardHeight);
    this.bomb = new Bomb(60, 400, 400, this.boardWidth, boardHeight);

    this.playboard = new Playboard(
      this.offsetTop,
      this.boardWidth,
      boardHeight,
      goalW,
      this.goalH,
      neonPink,
      neonBlue,
      neonBlur,
      offsetBlur
    );
    this.goal = new Goal(
      this.offsetTop,
      this.boardWidth,
      boardHeight,
      goalW,
      this.goalH,
      neonPink,
      neonBlue,
      neonBlur,
      offsetBlur,
    );
    this.playerOne = new Player(playerOne, this.offsetTop, this.boardWidth, boardHeight);
    this.playerTwo = new Player(playerTwo, this.offsetTop, this.boardWidth, boardHeight);
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
  }
  //Draw
  public draw() {
    this.playboard.draw();
    this.scoreInterface.draw(this.scorePlayer1, this.scorePlayer2);
    this.goal.draw();
    this.bomb.draw();
    this.playerOne.draw();
    this.playerTwo.draw();
    
    this.checkForGoal()
  }

  private checkForGoal(){
    
    // Spelare skapar ett nummer när den entrar mål.
    // Vänster mål
    
    if(game.playScene.playerOne.x <= width/2 - this.boardWidth/2 && game.playScene.playerOne.y <= height/2 + this.goalH/2 + this.offsetTop && game.playScene.playerOne.y >= height/2 - this.goalH/2 + this.offsetTop) {
      this.scorePlayer1 = this.scorePlayer1 + 10
      circle(width/2, height/2, 200)
    }
    // Höger mål
    if (game.playScene.playerOne.x >= width/2 + this.boardWidth/2 && game.playScene.playerOne.y <= height/2 + this.goalH/2 + this.offsetTop && game.playScene.playerOne.y >= height/2 - this.goalH/2 + this.offsetTop){
      push();
      fill('green')
      this.scorePlayer2 = this.scorePlayer2 + 10
      circle(width/2, height/2, 200)
      pop();
    }

    
    // Text som skriver "GOAL!!!"
    
  }
}






// const rightSide = width / 2 + this.rectW / 2;
// for (const bomb of this.bombs) {
//   bomb.update(rightSide);
// }

// this.spawnBombs();

// for (const bomb of this.bombs) {
//   bomb.draw();
// }
/** skapa nya bomber allt eftersom */
// private spawnBombs() {
  //   this.spawnTimeout -= deltaTime;
//   if (this.spawnTimeout < 0) {

  //     const diameter = 10;
//     const x = random((width / 2 - this.rectW / 2) + diameter / 2,
//       (width / 2 + this.rectW / 2) - diameter / 2);
//     const y = random((height / 2 - this.rectH / 2 + this.this.offsetTop) + diameter / 2,
//       (height / 2 + this.rectH / 2 + this.this.offsetTop) - diameter / 2);

//     this.bombs.push(new Bomb(diameter, x, y));
//     this.spawnTimeout = 2000;
//   }
// }
