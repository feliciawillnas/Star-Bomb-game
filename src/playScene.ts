class PlayScene {
  //ATTRIBUTE////////////////////////////
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
    goal.update();
    scoreInterface.update();
    //bomb.update();
    // player.update()
  }
  //Draw
  public draw() {
    this.drawPlayboardRect();
    this.centerLine();
    this.borderLines();
    scoreInterface.draw();
    goal.draw();
    //bomb.draw();
  }

  public drawPlayboardRect() {
    fill("black");
    image(
      playboardBGImg,
      width / 2,
      height / 2 + this.offsetTop,
      this.rectW,
      this.rectH
    );
  }

  // Center Line
  public centerLine() {
    stroke("white");
    strokeWeight(10);
    line(
      width / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2,
      height / 2 + this.rectH / 2 + this.offsetTop
    );
  }

  // Border Lines for playboard. 
  public borderLines() {
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
      height / 2 + this.offsetTop - goal.goalH / 2
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
      height / 2 + this.offsetTop - goal.goalH / 2
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
      height / 2 + this.offsetTop + goal.goalH / 2
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
      height / 2 + this.offsetTop + goal.goalH / 2
    );
    pop()
  }
}
