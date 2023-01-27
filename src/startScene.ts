class StartScene {
  //ATTRIBUTE////////////////////////////
  protected gameTitle: string;
  protected interactionInstructionW: string;
  protected interactionInstructionASD: string;
  protected interactionInstructionUP_A: string;
  protected interactionInstructionLDR_A: string;
  protected creatorNames: string;
  protected game: IStartGame;

  //CONSTRUCTOR////////////////////////
  constructor(game: IStartGame) {
    this.gameTitle = "STAR  B MB";

    this.interactionInstructionW = "W";
    this.interactionInstructionASD = "A S D";
    this.interactionInstructionUP_A = "\uf106";
    this.interactionInstructionLDR_A = "\uf104   \uf107   \uf105";
    this.creatorNames = "LINUS, SIMON, MARCUS, JENNY, FELICIA, LUCAS";
    this.game = game;
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    // Drawing all text and images.
    push();
    fill("white");
    stroke("black");
    strokeWeight(10);
    // Text: GameTitle
    push();
    textSize(60);
    text(this.gameTitle, width / 2, height / 2 - 140);
    images.neonGreenBombStor.resize(123, 107);
    image(images.neonGreenBombStor, width / 2 + 162, height / 2 - 190);
    pop();

    // Text: "Volume: x%"
    push();
    noStroke();
    textSize(10);
    text("Volume:", 50, 60);
    text(int(slider.value() * 100) + "%", 105, 60);
    pop();

    //Text: "Press space to"
    push();
    textSize(15);
    text("PRESS SPACE TO", width / 2, height / 2 - 25);
    pop();

    //Text: "START GAME"
    push();
    textSize(40);
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 18;
    drawingContext.shadowColor = "#69B7C2";
    text("START GAME", width / 2, height / 2 + 50);
    pop();

    //Pink rocket img
    push();
    images.rocketImgPink1.resize(120, 256);
    translate(width / 2 + 450, height / 2);
    rotate(-45);
    image(images.rocketImgPink1, 0, 0);
    pop();

    //Blue rocket img
    push();
    images.rocketImgBlue1.resize(120, 256);
    translate(width / 2 - 450, height / 2 + 200);
    rotate(45);
    image(images.rocketImgBlue1, 0, 0);
    pop();

    //Player1/blue interaction instruction
    push();
    text(this.interactionInstructionW, width / 2 - 450, height / 2 + 80);
    text(this.interactionInstructionASD, width / 2 - 450, height / 2 + 100);
    pop();

    //Player2/pink interaction instruction
    push();
    textFont(symbolFont);
    text(this.interactionInstructionUP_A, width / 2 + 450, height / 2 + 80);
    text(this.interactionInstructionLDR_A, width / 2 + 450, height / 2 + 100);
    pop();

    //Creators
    push();
    text("LINUS, SIMON, MARCUS, JENNY, FELICIA, LUCAS", width / 2, height - 20);
    pop();
    pop();
  }
}
