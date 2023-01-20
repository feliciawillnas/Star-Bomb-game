class Bomb {
    //ATTRIBUTE////////////////////////////
    // private color: string;
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
        fill(255);
        ellipse(this.x, this.y, this.diameter);
    }

    //Update
    public update(rectW: number, rectH: number) {
        this.move(rectW, rectH);
    }
    
    private move(rectW: number, rectH: number) {
        // let spring = 0.05;
        // let gravity = 0;
        // let friction = -0.5;
        // let balls = [];
        const playAreaLeftBorder = (width / 2 - rectW / 2)
        const playAreaRightBorder = (width / 2 + rectW / 2)
        const playAreaTopBorder = (height / 2 - rectH / 2 + 40)
        const playAreaBottomBorder = (height / 2 + rectH / 2 + 40)
        const bombRadius = this.diameter / 2;

        this.x += this.vx
        this.y += this.vy
        
        if (this.x > playAreaRightBorder - bombRadius) {
            this.vx =- 5;
        } else if (this.x < playAreaLeftBorder + bombRadius) {
            this.vx =+ 5;
        }

        if (this.y < playAreaTopBorder + bombRadius) {
               this.vy =+ 5;
        } else if (this.y > playAreaBottomBorder - bombRadius) {
               this.vy =- 5;
        }
    }
}