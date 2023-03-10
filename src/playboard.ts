class Playboard {
  /* ------------------
        ATTRIBUTES
  ------------------ */
  // Playground width & height
  public width: number;
  public height: number;

  private goalH: number;

  // Extra distance between the top & playground
  public offsetTop: number;

  // Border lines
  private neonPink: string;
  private neonBlue: string;
  private neonBlur: number;
  private offsetBlur: number;

  /* --------------------
        CONSTRUCTOR
  -------------------- */
  constructor(
    offsetTop: number,
    width: number,
    height: number,
    goalH: number,
    neonPink: string,
    neonBlue: string,
    neonBlur: number,
    offsetBlur: number
  ) {
    this.width = width;
    this.height = height;
    this.offsetTop = offsetTop;
    this.neonPink = neonPink;
    this.neonBlue = neonBlue;
    this.neonBlur = neonBlur;
    this.offsetBlur = offsetBlur;
    this.goalH = goalH;
  }

  /* ------------------
        METHODS
  ------------------ */
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
    strokeWeight(5);
    line(
      width / 2,
      height / 2 - this.height / 2 + this.offsetTop,
      width / 2,
      height / 2 + this.height / 2 + this.offsetTop
    );
    pop();
  }

  // Border Lines for playboard
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

    // Left Pink Line
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

    // Right Pink Line
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
