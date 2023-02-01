class StartScene {

  /* ------------------
        ATTRIBUTES
  ------------------ */
  private gameTitle: string;
  private interactionInstructionW: string;
  private interactionInstructionASD: string;
  private interactionInstructionUP_A: string;
  private interactionInstructionLDR_A: string;
  private creatorNames: string;
  protected game: IStartGame;
  private infoText: string;

  /* --------------------
        CONSTRUCTOR
  -------------------- */
  constructor(game: IStartGame) {
    this.gameTitle = "STAR  B MB";

    this.interactionInstructionW = "W";
    this.interactionInstructionASD = "A S D";
    this.interactionInstructionUP_A = "\uf106";
    this.interactionInstructionLDR_A = "\uf104   \uf107   \uf105";
    this.creatorNames = "LINUS, SIMON, MARCUS, JENNY, FELICIA & LUCAS";
    this.game = game;

    this.infoText =
      "Move the bombs by hitting them with your spaceship's\n force field. You will get 3 points when a bomb \nexplodes on your opponent's half of the court and \n10 points if you manage to get a bomb in your \nopponent's galaxy goal.The player that manages to \ncollect the most points in 3 minutes wins the game!";
    }

  /* ------------------
        METHODS
  ------------------ */
  
  //Update

  public update() {}

  public draw() {
    this.drawStartScene();
    this.pressI();
  }
  
  private pressI() {
    push();
    push();
    textAlign(CENTER, CENTER);
    fill("white");
    stroke("black");
    strokeWeight(10);
    text('Press "i" for information', width / 2, height / 2 + 120);
    pop();
    
    this.informationBox();
    
    pop();
  }


  private informationBox(){
    if (keyIsDown(73)){
      // Box
      push();
      stroke("black")
      strokeWeight(10)
      fill("#31204A")
      rect(width / 2, height / 2, 600, 500 )
      pop();
      
      // Game Description - Topic
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(20);
      text("GAME DESCRIPTION", width / 2, height / 2 - 200)
      pop();

      //Game Description - Text
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      textLeading(16);
      text(this.infoText, width / 2, height / 2 - 170);
      pop();

      textAlign(LEFT)
      // Power Ups - Topic
       push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(20);
      text("Power Ups", width / 2 - 240, height / 2 - 40);
      pop();
      
      // Goal Protection - Text
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      image(images.powerUpIconGoalShield, width / 2 - 245, height/ 2 - 5)
      text("- Goal Protection", width / 2 - 220, height / 2);
      pop();
      
      // Reversed Controls - Text
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      image(images.powerupIconReverseControls, width / 2 - 245, height/ 2 + 35)
      text("- Reversed Controls", width / 2 - 220, height / 2 + 40);
      pop();
      
      // Extra Points - Text
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      image(images.powerUpIconBonusPoints, width / 2 - 245, height/ 2 + 75)
      text("- Extra Points", width / 2 - 220, height / 2 + 80);
      pop();
      
      // Shrink Opponent - Text
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      image(images.powerUpIconSmallPlayer, width / 2 - 245, height/ 2 + 115)
      text("- Shrink Opponent", width / 2 - 220, height / 2 + 120);
      pop();
      
      // Slow Down Opponent - Text
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      image(images.powerUpIconSlowDown, width / 2 - 245, height/ 2 + 155)
      text("- Slow Down Opponent", width / 2 - 220, height / 2 + 160);
      pop();

      // Middle Line
      push()
      stroke("white")
      strokeWeight(5)
      line(width/2, height/2 - 40, width/2, height/2 + 200)
      pop()

      
      // Controls - Topic
      push();
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(20);
      text("Controls", width / 2 + 70, height / 2 - 40);
      pop();

      // Player 1 - Text
      push()
      strokeWeight(4)
      stroke("black");
      fill("#69B7C2");
      textSize(10);
      text("PLAYER 1", width/2 + 30, height/2 + 40)
      pop()

      // Player 1 Controls - Text
      push()
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(10);
      text(this.interactionInstructionW, width/2 + 200, height/2 + 30)
      text(this.interactionInstructionASD, width/2 + 180, height/2 + 50)
      pop()
      
      // Player 2 - Text
      push()
      strokeWeight(4)
      stroke("black");
      fill("#F98CF3");
      textSize(10);
      text("PLAYER 2", width/2 + 30, height/2 + 120)
      pop()

      // Player 2 Controls - Text
      push()
      strokeWeight(4)
      stroke("black");
      fill("white");
      textSize(14);
      textFont(symbolFont);
      text(this.interactionInstructionUP_A, width/2 + 203, height/2 + 110)
      text(this.interactionInstructionLDR_A, width/2 + 180, height/2 + 130)
      pop()
      
    } 
  }

  private drawStartScene() {
    // Drawing all text and images.
    push();
    fill("white");
    stroke("black");
    strokeWeight(10);
    
    // Text: GameTitle
    push();
    textSize(60);
    text(this.gameTitle, width / 2, height / 2 - 160);
    image(images.neonGreenBombBig, width / 2 + 163, height / 2 - 210);
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
    text("PRESS SPACE TO", width / 2, height / 2 - 45);
    pop();

    //Text: "START GAME"
    push();
    textSize(40);
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 18;
    drawingContext.shadowColor = "#69B7C2";
    text("START GAME", width / 2, height / 2 + 20);
    pop();

    //Pink rocket img
    push();
    translate(width / 2 + 450, height / 2);
    rotate(-45);
    image(images.startScenePinkRocket, 0, 0);
    pop();

    //Blue rocket img
    push();
    translate(width / 2 - 450, height / 2 + 200);
    rotate(45);
    image(images.startSceneBlueRocket, 0, 0);
    pop();

    // //Player1/blue interaction instruction
    // push();
    // text(this.interactionInstructionW, width / 2 - 450, height / 2 + 85);
    // text(this.interactionInstructionASD, width / 2 - 450, height / 2 + 110);
    // pop();

    // //Player2/pink interaction instruction
    // push();
    // textFont(symbolFont);
    // textSize(18);
    // text(this.interactionInstructionUP_A, width / 2 + 450, height / 2 + 85);
    // text(this.interactionInstructionLDR_A, width / 2 + 450, height / 2 + 110);
    // pop();

    //Creators
    push();
    textSize(12);
    text(this.creatorNames, width / 2, height - 20);
    pop();
    pop();
  }
}
