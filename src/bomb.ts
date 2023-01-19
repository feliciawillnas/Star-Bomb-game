class Bomb {
    //ATTRIBUTE////////////////////////////
    // private color: string;
    private x = 0;
    private y = 0;

    //CONSTRUCTOR////////////////////////
    constructor(){
        this.x = random(width / 2 - playScene.rectW / 2, width / 2 + playScene.rectW / 2),
        this.y = random(height / 2 - playScene.rectH / 2 + playScene.offsetTop, height / 2 + playScene.rectH / 2 + playScene.offsetTop)
    }
    //METHODS//////////////////////////
    
    //Update
    public update(){

    }
    //Draw
    public draw(){
        bombs.display();
    }
    // let spring = 0.05;
    // let gravity = 0;
    // let friction = -0.5;
    // let balls = [];

display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 50, 50);
  }
}