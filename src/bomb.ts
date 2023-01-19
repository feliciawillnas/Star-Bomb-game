class Bomb {
    //ATTRIBUTE////////////////////////////
    // private color: string;
    private x = 0;
    private y = 0;
    private vx = 4;
    private diameter = 50;

    //CONSTRUCTOR////////////////////////
    constructor(diameter: number){
        this.x = random((width / 2 - playScene.rectW / 2) + diameter / 2,
        (width / 2 + playScene.rectW / 2) - diameter / 2);
        this.y = random((height / 2 - playScene.rectH / 2 + playScene.offsetTop) + diameter / 2,
        (height / 2 + playScene.rectH / 2 + playScene.offsetTop) - diameter / 2);
    }
    //METHODS//////////////////////////
    
    //Update
    public update(){

    }
    //Draw
    public draw(){
        bombs.display();
        bombs.move();
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

move() {
    this.x += this.vx
    if (this.x > (width / 2 + playScene.rectW / 2) - this.diameter / 2) {
        this.vx =- 4;
    } else if (this.x < (width / 2 - playScene.rectW / 2) + this.diameter / 2) {
        this.vx =+ 4;
    }
}}