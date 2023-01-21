class Playboard {
  //ATTRIBUTE////////////////////////////
  // Playground width & height
  public width: number;
  public height: number;

  private goalW: number;
  private goalH: number;

  // Extra distance between the top & playground
  public offsetTop: number;
  // Border lines

  public neonBlur: number;
  public offsetBlur: number;
  public neonPink: string;
  public neonBlue: string;

  //CONSTRUCTOR////////////////////////
  constructor(
    offsetTop: number,
    width: number,
    height: number,
    goalW: number,
    goalH: number
  ) {
    this.width = width;
    this.height = height;
    this.offsetTop = offsetTop;
    this.neonBlur = 18;
    this.offsetBlur = 5;
    this.neonPink = "#F98CF3";
    this.neonBlue = "#69B7C2";
    this.goalW = goalW;
    this.goalH = goalH;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    this.drawPlayboardImage();
    this.centerLine();
    this.borderLines();
  }

  private drawPlayboardImage() {
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
    drawingContext.shadowBlur = this.neonBlur;

    // Top blue line blur effect
    push();
    drawingContext.shadowOffsetY = -this.offsetBlur;
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
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 - this.width / 2,
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2 - this.width / 2,
      height / 2 + this.offsetTop - this.goalH / 2
    );
    pop();

    // Right Blue Line
    push();
    // Right blue line blur effect
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowColor = this.neonBlue;
    line(
      width / 2 + this.width / 2,
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2 + this.width / 2,
      height / 2 + this.offsetTop - this.goalH / 2
    );
    pop();

    stroke(this.neonPink);
    push();
    // Bottom Pink Line Blur Effect
    drawingContext.shadowOffsetY = this.offsetBlur;
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
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 - this.width / 2,
      height / 2 + this.height / 2 + this.offsetTop,
      width / 2 - this.width / 2,
      height / 2 + this.offsetTop + this.goalH / 2
    );
    pop();

    //Right Pink Line
    push();
    // Right Pink Line Blur Effect
    drawingContext.shadowOffsetX = this.offsetBlur;
    drawingContext.shadowColor = this.neonPink;
    line(
      width / 2 + this.width / 2,
      height / 2 + this.height / 2 + this.offsetTop,
      width / 2 + this.width / 2,
      height / 2 + this.offsetTop + this.goalH / 2
    );
    pop();
    pop();
  }
}
