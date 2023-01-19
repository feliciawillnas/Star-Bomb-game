class PlayScene {
  //ATTRIBUTE////////////////////////////
  private goal: Goal;
  private scoreInterface: ScoreInterface;
  // private bombs: Bomb[];
  // private spawnTimeout: number;

  // Playground widht & height
  private rectW: number;
  private rectH: number;

  // Extra distance between the top & playground
  private offsetTop: number;
  // Border lines

  private neonBlur: number
  private offsetBlur: number
  private neonPink: string
  private neonBlue: string

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.goal = new Goal();
    this.scoreInterface = new ScoreInterface();
    // this.bombs = [];
    // this.spawnTimeout = 2000;

    this.rectW = 1000;
    this.rectH = 500;
    this.offsetTop = 40;
    this.neonBlur = 18;
    this.offsetBlur = 5;
    this.neonPink = '#F98CF3'
    this.neonBlue = '#69B7C2'
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    this.goal.update();
    this.scoreInterface.update();
    // player.update()
    
    // const rightSide = width / 2 + this.rectW / 2;
    // for (const bomb of this.bombs) {
    //   bomb.update(rightSide);
    // }

    // this.spawnBombs();
  }
  //Draw
  public draw() {
    this.drawPlayboardRect();
    this.centerLine();
    this.borderLines();
    this.scoreInterface.draw();
    this.goal.draw();
    
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


  private drawPlayboardRect() {
    push();
    fill("black");
    image(
      images.playboardBG,
      width / 2,
      height / 2 + this.offsetTop,
      this.rectW,
      this.rectH
    );
    pop();
  }

  // Center Line
  private centerLine() {
    push();
    stroke("white");
    strokeWeight(10);
    line(
      width / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2,
      height / 2 + this.rectH / 2 + this.offsetTop
      );
    pop();
  }

  // Border Lines for playboard. 
  private borderLines() {
    push();
    strokeWeight(10);
    stroke(this.neonBlue);

    // Top blue line blur effect 
    push()
    drawingContext.shadowOffsetY = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue; 
    // Top Blue Line
    line(
      width / 2 - this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2 + this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop
    );
    pop();

    // Left Blue Line
    push()
    // Left blue line blur effect 
    drawingContext.shadowOffsetX = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue; 
    line(
      width / 2 - this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2 - this.rectW / 2,
      height / 2 + this.offsetTop - this.goal.goalH / 2
    );
    pop();

    // Right Blue Line
    push()
    // Right blue line blur effect 
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue; 
    line(
      width / 2 + this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2 + this.rectW / 2,
      height / 2 + this.offsetTop - this.goal.goalH / 2
    );
    pop()
    
    stroke(this.neonPink);
    push()
    // Bottom Pink Line Blur Effect
    drawingContext.shadowOffsetY = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
     // Bottom Pink Line
    line(
      width / 2 + this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop,
      width / 2 - this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop
    );
    pop()

    //Left Pink Line
     push()
    // Left Pink Line Blur Effect
    drawingContext.shadowOffsetX = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 - this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop,
      width / 2 - this.rectW / 2,
      height / 2 + this.offsetTop + this.goal.goalH / 2
    );
    pop();

    //Right Pink Line
     push()
    // Right Pink Line Blur Effect
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 + this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop,
      width / 2 + this.rectW / 2,
      height / 2 + this.offsetTop + this.goal.goalH / 2
    );
    pop();
    pop();
  }
}
