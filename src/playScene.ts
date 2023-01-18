class PlayScene {
  //ATTRIBUTE////////////////////////////
  // Playground widht & height
  private rectW: number;
  private rectH: number;
  // Goal widht & height
  private goalW: number;
  private goalH: number;

  private offsetTop:number
  //CONSTRUCTOR////////////////////////
  constructor() {
    this.rectW = 1000;
    this.rectH = 500;
    
    this.goalW = 150;
    this.goalH = 220;

    this.offsetTop = 40
  }
  //METHODS//////////////////////////

  //Update
  public update() {}
  //Draw
  public draw() {
    
    this.drawPlayboardRect();
    this.drawGoal()
    
  }
  
  
  public drawPlayboardRect(){
    // console.log("hej")
    push();
    fill("black");
    image(playboardBGImg,width / 2, height / 2 + this.offsetTop, this.rectW, this.rectH)
    // rect(width / 2, height / 2 + this.offsetTop, this.rectW, this.rectH);
    pop();
  }
  
  public drawGoal() {
    // Player 1's Goal
    push();
    stroke("white");
    image(galaxGoalImg, width/2 - this.rectW/2 - this.goalW/2, height / 2 + this.offsetTop, this.goalW, this.goalH)
    pop(); 

    // Player 2's Goal
    push();
    stroke("white");
    image(galaxGoalImg, width/2 + this.rectW/2 + this.goalW/2, height / 2 + this.offsetTop, this.goalW, this.goalH)
    pop(); 
  }

}
