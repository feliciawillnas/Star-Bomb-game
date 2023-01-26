class EndScene {
    //ATTRIBUTE////////////////////////////

    protected gameTitle: string;
    protected creatorNames: string;
    protected game: IStartGame;
  
    //CONSTRUCTOR////////////////////////
    constructor(game: IStartGame) {
      this.gameTitle = "STAR  B MB";
      this.creatorNames = "LINUS, SIMON, MARCUS, JENNY, FELICIA, LUCAS";
      this.game = game;
    }

    //METHODS//////////////////////////
    //Update
    public update() {

    }

    //Draw
    public draw() {
    // Drawing endScene canvas rectangle 
     noStroke();
     stroke('black');
     strokeWeight(5);
     fill(255, 255, 255, 50);
     rect(750, 300, 600, 200);
     fill(255, 255, 255);

     // Winner score text
      push();
    //   drawingContext.shadowOffsetY = 10;
    //   drawingContext.shadowOffsetX = 10;
    //   drawingContext.shadowColor = 'black';
      strokeWeight(7);
      pop();

      // Drawing all text and images.
      push();
      fill("white");
      stroke("black");
      strokeWeight(10);

      //Game Title
      push();
      textSize(60);
      text(this.gameTitle, width / 2, height / 2 - 200);
    //   images.neonGreenBombBig.resize(123, 107);
      image(images.neonGreenBombBig, width / 2 + 163, height / 2 - 245);
      pop();

      // Winner score 
      ///
      ///
      ///
  
      //Text: "Press space to"
      push();
      textSize(15);
      text("PRESS SPACE TO ", width / 2, height / 2 + 120);
      pop();
  
      //Text: "START GAME"
      push();
      textSize(40);
      drawingContext.shadowOffsetY = 5;
      drawingContext.shadowBlur = 18;
      drawingContext.shadowColor = "#69B7C2";
      text("RESTART GAME", width / 2, height / 2 + 200);
      pop();
  
      //Pink rocket img
    //   push();
    //   images.rocketImgPink1.resize(120, 256);
    //   translate(width / 2 + 250, height / 2);
    // //   rotate(0);
    //   image(images.rocketImgPink1, 0, 0);
    //   pop();
  
    //   //Blue rocket img
    //   push();
    //   images.rocketImgBlue1.resize(120, 256);
    //   translate(width / 2 - 250, height / 2 + 150);
    // //   rotate(0);
    //   image(images.rocketImgBlue1, 0, 0);
    //   pop();
  
    //   //Player1/blue interaction instruction
    //   push();
    //   text(this.interactionInstructionW, width / 2 - 450, height / 2 + 80);
    //   text(this.interactionInstructionASD, width / 2 - 450, height / 2 + 100);
    //   pop();
  
    //   //Player2/pink interaction instruction
    //   push();
    //   textFont(symbolFont);
    //   text(this.interactionInstructionUP_A, width / 2 + 450, height / 2 + 80);
    //   text(this.interactionInstructionLDR_A, width / 2 + 450, height / 2 + 100);
    //   pop();
  
      //Creators
      push();
      text("LINUS, SIMON, MARCUS, JENNY, FELICIA, LUCAS", width / 2, height - 20);
      pop();
      pop();
    }
  }