class Playboard {
  //ATTRIBUTE////////////////////////////
  // Playground widht & height
  public width: number;
  public height: number;

  // Extra distance between the top & playground
  public offsetTop: number;
  // Border lines

  public neonBlur: number;
  public offsetBlur: number;
  public neonPink: string;
  public neonBlue: string;

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.width = 1000;
    this.height = 500;
    this.offsetTop = 40;
    this.neonBlur = 18;
    this.offsetBlur = 5;
    this.neonPink = "#F98CF3";
    this.neonBlue = "#69B7C2";
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    
  }
  //Draw
  public draw() {
    this.drawPlayboardRect();
    this.centerLine();
    this.borderLines();
  }

  private drawPlayboardRect() {
    push();
    fill("black");
    image(
      images.playboardBG,
      width / 2,
      height / 2 + this.offsetTop,
      this.width,
      this.height
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
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2,
      height / 2 + this.height / 2 + this.offsetTop
    );
    pop();
  }

  // Border Lines for playboard.
  private borderLines() {
    push();
    strokeWeight(10);
    stroke(this.neonBlue);

    // Top blue line blur effect
    push();
    drawingContext.shadowOffsetY = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue;
    // Top Blue Line
    line(
      width / 2 - this.width / 2,
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2 + this.width / 2,
      height / 2 - this.height / 2 + this.offsetTop
    );
    pop();

    // Left Blue Line
    push();
    // Left blue line blur effect
    drawingContext.shadowOffsetX = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 - this.width / 2,
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2 - this.width / 2,
      height / 2 + this.offsetTop - game.playScene.goal.goalH / 2
    );
    pop();

    // Right Blue Line
    push();
    // Right blue line blur effect
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 + this.width / 2,
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2 + this.width / 2,
      height / 2 + this.offsetTop - game.playScene.goal.goalH / 2
    );
    pop();

    stroke(this.neonPink);
    push();
    // Bottom Pink Line Blur Effect
    drawingContext.shadowOffsetY = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    // Bottom Pink Line
    line(
      width / 2 + this.width / 2,
      height / 2 + this.height / 2 + this.offsetTop,
      width / 2 - this.width / 2,
      height / 2 + this.height / 2 + this.offsetTop
    );
    pop();

    //Left Pink Line
    push();
    // Left Pink Line Blur Effect
    drawingContext.shadowOffsetX = -this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 - this.width / 2,
      height / 2 + this.height / 2 + this.offsetTop,
      width / 2 - this.width / 2,
      height / 2 + this.offsetTop + game.playScene.goal.goalH / 2
    );
    pop();

    //Right Pink Line
    push();
    // Right Pink Line Blur Effect
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowBlur = this.neonBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 + this.width / 2,
      height / 2 + this.height / 2 + this.offsetTop,
      width / 2 + this.width / 2,
      height / 2 + this.offsetTop + game.playScene.goal.goalH / 2
    );
    pop();
    pop();
  }
}
