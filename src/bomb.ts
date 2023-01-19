class Bomb {
    //ATTRIBUTE////////////////////////////
    // private color: string;
    private x = 0;
    private y = 0;
    private diameter = 50;

    //CONSTRUCTOR////////////////////////
    constructor(diameter: number){
        this.x = random((width / 2 - playScene.rectW / 2) + diameter, (width / 2 + playScene.rectW / 2) - diameter),
        this.y = random((height / 2 - playScene.rectH / 2 + playScene.offsetTop) + diameter, (height / 2 + playScene.rectH / 2 + playScene.offsetTop) - diameter)
    console.log(this.x)
    console.log(this.y)
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
    ellipse(this.x, this.y, this.diameter);
  }
}