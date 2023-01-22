class Bomb {
    //ATTRIBUTE////////////////////////////
    private x = 0;
    private y = 0;
    private vx = 5;
    private vy = 5;
    private diameter = 50;

    //CONSTRUCTOR////////////////////////
    constructor(diameter: number, x: number, y: number) {
        this.diameter = diameter;
        this.x = x;
        this.y = y;
    }

    //METHODS//////////////////////////
    
    //Draw
    public draw() {
        noStroke();
        fill(0, 0, 0, 0);
        image(images.neonGreenBomb, this.x, this.y);
        ellipse(this.x, this.y, this.diameter);
    }

    //Update
    public update(playboardWidth: number, playboardHeight: number) {
        this.move();
        this.checkCollision(playboardWidth, playboardHeight);
    }

    //Move bomb
    private move() {
        this.x += this.vx
        this.y += this.vy
    }

    // Check collision
    private checkCollision(playboardWidth: number, playboardHeight: number) {
        const playboardLeftBorder = (width / 2 - playboardWidth / 2)
        const playboardRightBorder = (width / 2 + playboardWidth / 2)
        const playboardTopBorder = (height / 2 - playboardHeight / 2 + 40)
        const playboardBottomBorder = (height / 2 + playboardHeight / 2 + 40)
        const bombRadius = this.diameter / 2;

        if (this.x > playboardRightBorder - bombRadius) {
            this.vx =- 5;
        } else if (this.x < playboardLeftBorder + bombRadius) {
            this.vx =+ 5;
        }

        if (this.y < playboardTopBorder + bombRadius) {
               this.vy =+ 5;
        } else if (this.y > playboardBottomBorder - bombRadius) {
               this.vy =- 5;
        }
    }
    
}
