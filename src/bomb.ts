class Bomb {
    //ATTRIBUTE////////////////////////////
    // private color: string;
    private x = 0;
    private y = 0;
    private vx = 5;
    private vy = 5;
    private diameter = 50;
    private id = 0;


    //CONSTRUCTOR////////////////////////
    constructor(diameter: number, x: number, y: number, id: number) {
        this.diameter = diameter;
        this.x = x;
        this.y = y;
        this.id = id;
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
    public update(rectW: number, rectH: number) {
        this.move(rectW, rectH);
    }
    
    public updateId(id: number) {
        this.id = id;
        console.log(id);
    }

    private move(rectW: number, rectH: number) {

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