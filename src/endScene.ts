class EndScene {
  //ATTRIBUTE////////////////////////////
  protected gameTitle: string;
  protected creatorNames: string;
  protected game: Game;
  // constructor(game: IStartGame) { /kommenterat ut, ha kvar?

  //CONSTRUCTOR////////////////////////
  constructor(game: Game) {
    this.gameTitle = "STAR  B MB";
    this.creatorNames = "LINUS, SIMON, MARCUS, JENNY, FELICIA & LUCAS";
    this.game = game;
  }

  //METHODS//////////////////////////
  public update() {}

  public draw() {
    // Text: "Volume x%"
    push();
    noStroke();
    textSize(10);
    text("Music", 45, 20);
    text(int(slider.value() * 100) + "%", 120, 40);
    pop();

    // Text: "Sound effects x%"
    push();
    noStroke();
    textSize(10);
    text("Sound effects", 84, 60);
    text(int(slider2.value() * 100) + "%", 120, 80);
    pop();

    // Square that contains scoreboard
    noStroke();
    stroke("black");
    strokeWeight(5);
    rectMode(CENTER);
    fill(255, 255, 255, 50);
    rect(width / 2, height / 2 - 50, 590, 230);
    fill(255, 255, 255);

    // SCORE
    push();
    textSize(40);
    text("SCORE", width / 2, height / 2 - 100);
    strokeWeight(7);
    pop();

    // Dots between scores
    push();
    textSize(40);
    text(":", width / 2, height / 2 - 15);
    strokeWeight(7);
    pop();

    // Player 1 score // LÄGG TILL scorePlayer1 & scorePlayer2
    push();
    textSize(40);
    text(game.playScene.scorePlayer1, width / 2 - 100, height / 2 - 15);
    pop();

    // Player 2 score
    push();
    textSize(40);
    text(game.playScene.scorePlayer2, width / 2 + 100, height / 2 - 15);
    pop();

    // Drawing all text and images
    push();
    fill("white");
    stroke("black");
    strokeWeight(10);

    // Game title
    push();
    textSize(60);
    text(this.gameTitle, width / 2, height / 2 - 200);
    image(images.neonGreenBombBig, width / 2 + 163, height / 2 - 245);
    pop();

    //  "Press space to"
    push();
    textSize(15);
    text("PRESS SPACE TO ", width / 2, height / 2 + 170);
    pop();

    // Text: "START GAME"
    push();
    textSize(40);
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 18;
    drawingContext.shadowColor = "#69B7C2";
    text("RESTART GAME", width / 2, height / 2 + 250);
    pop();

    // Pink rocket img
    push();
    images.rocketImgPink2Big;
    translate(width / 2 + 240, height / 2 - 35);
    image(images.rocketImgPink2Big, 0, 0);
    pop();

    // Blue rocket img
    push();
    images.rocketImgBlue1Big;
    translate(width / 2 - 240, height / 2 - 35);
    image(images.rocketImgBlue1Big, 0, 0);
    pop();

    // Creators
    push();
    textSize(12);
    text(this.creatorNames, width / 2, height - 20);
    pop();
    pop();
  }
}
