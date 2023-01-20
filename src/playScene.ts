class PlayScene {
  //ATTRIBUTE////////////////////////////
  private goal: Goal;
  private scoreInterface: ScoreInterface;
  private bombs: Bomb[];
  private spawnTimeout: number;
  private removeTimeout: number;

  // Playground widht & height
  public rectW: number;
  public rectH: number;

  // Extra distance between the top & playground
  public offsetTop: number;
  // Border lines

  public neonBlur: number
  public offsetBlur: number
  public neonPink: string
  public neonBlue: string


  //CONSTRUCTOR////////////////////////
  constructor() {
    this.goal = new Goal();
    this.scoreInterface = new ScoreInterface();
    this.spawnTimeout = 0;
    this.removeTimeout = 6000;
    this.bombs = [];
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
    // this.goal.update();
    // this.scoreInterface.update();
    // player.update()
    for (const bomb of this.bombs) {
        bomb.update(this.rectW, this.rectH);
    }
  }

  //Draw
  public draw() {
    this.drawPlayboardRect();
    this.centerLine();
    this.borderLines();
    
    // this.scoreInterface.draw();
    // this.goal.draw();
    this.spawnBombs();
    this.removeBombs();
    for (const bomb of this.bombs) {
      bomb.draw();
    }
  }

  private spawnBombs() {
      this.spawnTimeout -= deltaTime;
      if (this.spawnTimeout < 0) {
          const diameter = 40;
          const x = random((width / 2 - this.rectW / 2) + diameter / 2,
            (width / 2 + this.rectW / 2) - diameter / 2);
          const y = random((height / 2 - this.rectH / 2 + this.offsetTop) + diameter / 2,
            (height / 2 + this.rectH / 2 + this.offsetTop) - diameter / 2);
          let id = this.bombs.length;
          this.bombs.push(new Bomb(diameter, x, y, id));
      this.spawnTimeout = 1000;
    }
  }

  private removeBombs() {
    this.removeTimeout -= deltaTime;
    if (this.removeTimeout < 0) {
        this.bombs.shift();
        let id = 0
        for (const bomb of this.bombs) {
            bomb.updateId(id);
            id = id + 1;
        }
        this.removeTimeout = 1000;
    }
}


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
