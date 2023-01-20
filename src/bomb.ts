class Bomb {
    //ATTRIBUTE////////////////////////////
    //public timer = 10
    //explosionWidth =  50;
    //explosionHeight = 50;
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
        playScene.update();

    }
    //Draw
    public draw(){
<<<<<<< Updated upstream
        /*background(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        fill("white");
        if(this.timer > 0){
            text(this.timer, width/2, height/2);
        }
        if (frameCount % 60 == 0 && this.timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
            this.timer --;
        }
        if (this.timer == 0) {
            image(explosion, width/2, height/2, this.explosionWidth, this.explosionHeight);
            
        }
        */
=======
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