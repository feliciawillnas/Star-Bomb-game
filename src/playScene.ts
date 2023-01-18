class PlayScene {
  //ATTRIBUTE////////////////////////////
  // Playground widht & height
  public rectW: number;
  public rectH: number;

  // Extra distance between the top & playground
  public offsetTop: number;
  // Border lines

  //CONSTRUCTOR////////////////////////
  constructor() {
    this.rectW = 1000;
    this.rectH = 500;
    this.offsetTop = 40;
  }
  //METHODS//////////////////////////

  //Update
  public update() {
    goal.update();
    scoreInterface.update();
    // bomb.update()
    // player.update()
  }
  //Draw
  public draw() {
    this.drawPlayboardRect();
    this.centerLine();
    this.borderLines();
    goal.draw();
    scoreInterface.draw();
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
    // rect(width / 2, height / 2 + this.offsetTop, this.rectW, this.rectH);
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
    push()
    // Top blue line blur effect 
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 18;
    drawingContext.shadowColor = '#69B7C2';
    strokeWeight(10);
    stroke(87, 151, 160);
    // Top Blue Line
    line(
      width / 2 - this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2 + this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop
    );
    // Left Blue Line
    line(
      width / 2 - this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2 - this.rectW / 2,
      height / 2 + this.offsetTop - goal.goalH / 2
    );
    // Right Blue Line
    line(
      width / 2 + this.rectW / 2,
      height / 2 - this.rectH / 2 + this.offsetTop,
      width / 2 + this.rectW / 2,
      height / 2 + this.offsetTop - goal.goalH / 2
    );
    pop()

    push()
    // Bottom Pink Line Blur Effect
    drawingContext.shadowOffsetX = -5;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 18;
    drawingContext.shadowColor = '#F98CF3';
     // Bottom Pink Line
    stroke(249, 111, 243);
    line(
      width / 2 + this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop,
      width / 2 - this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop
    );
    //Left Pink Line
    line(
      width / 2 - this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop,
      width / 2 - this.rectW / 2,
      height / 2 + this.offsetTop + goal.goalH / 2
    );
    //Right Pink Line
    line(
      width / 2 + this.rectW / 2,
      height / 2 + this.rectH / 2 + this.offsetTop,
      width / 2 + this.rectW / 2,
      height / 2 + this.offsetTop + goal.goalH / 2
    );
    pop()
  }
}
