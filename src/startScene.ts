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
    this.creatorNames = "LINUS, SIMON, MARCUS, JENNY, FELICIA & LUCAS";
    this.game = game;
  }

  //METHODS//////////////////////////

  public update() {}

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
    image(images.neonGreenBombBig, width / 2 + 163, height / 2 - 190);
    pop();

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
    images.startScenePinkRocket.resize(120, 256);
    translate(width / 2 + 450, height / 2);
    rotate(-45);
    image(images.startScenePinkRocket, 0, 0);
    pop();

    //Blue rocket img
    push();
    images.startSceneBlueRocket.resize(120, 256);
    translate(width / 2 - 450, height / 2 + 200);
    rotate(45);
    image(images.startSceneBlueRocket, 0, 0);
    pop();

    //Player1/blue interaction instruction
    push();
    text(this.interactionInstructionW, width / 2 - 450, height / 2 + 85);
    text(this.interactionInstructionASD, width / 2 - 450, height / 2 + 110);
    pop();

    //Player2/pink interaction instruction
    push();
    textFont(symbolFont);
    textSize(18);
    text(this.interactionInstructionUP_A, width / 2 + 450, height / 2 + 85);
    text(this.interactionInstructionLDR_A, width / 2 + 450, height / 2 + 110);
    pop();

    //Creators
    push();
    textSize(12);
    text(this.creatorNames, width / 2, height - 20);
    pop();
    pop();
  }
}
