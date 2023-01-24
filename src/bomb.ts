class Bomb {

    //ATTRIBUTE////////////////////////////
    public x = 0;
    public y = 0;
    public vx = 2;
    public vy = 2;
    public diameter = 50;

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
        this.moveBomb();
        this.checkCollision(playboardWidth, playboardHeight);
    }

    //Move bomb
    private moveBomb() {
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

    //Check collision with walls
    if (this.x > playboardRightBorder - bombRadius) {
        if (this.vx > 0 && this.vx < 1) {
            this.vx = -1;
        } else if (this.vx > 1 && this.vx <= 2) {
            this.vx = -2;
        } else if (this.vx > 2 && this.vx <= 3) {
            this.vx = -3;
        } else if (this.vx > 3 && this.vx <= 4) {
            this.vx = -4;
        } else if (this.vx > 4) {
            this.vx = -5;
        }
    } if (this.x < playboardLeftBorder + bombRadius) {
        if (this.vx < 0 && this.vx > -1) {
            this.vx = 1;
        } else if (this.vx < -1 && this.vx >= -2) {
            this.vx = 2;
        } else if (this.vx < -2 && this.vx >= -3) {
            this.vx = 3;
        } else if (this.vx < -3 && this.vx >= -4) {
            this.vx = 4;
        } else if (this.vx < -4) {
            this.vx = 5;
        }
    }

    if (this.y < playboardTopBorder + bombRadius) {
        if (this.vy < 0 && this.vy > -1) {
            this.vy = 1;
        } else if (this.vy < -1 && this.vy >= -2) {
            this.vy = 2;
        } else if (this.vy < -2 && this.vy >= -3) {
            this.vy = 3;
        } else if (this.vy < -3 && this.vy >= -4) {
            this.vy = 4;
        } else if (this.vy < -4) {
            this.vy = 5;
        }
    } if (this.y > playboardBottomBorder - bombRadius) {
        if (this.vy > 0 && this.vy < 1) {
            this.vy = -1;
        } else if (this.vy > 1 && this.vy <= 2) {
            this.vy = -2;
        } else if (this.vy > 2 && this.vy <= 3) {
            this.vy = -3;
        } else if (this.vy > 3 && this.vy <= 4) {
            this.vy = -4;
        } else if (this.vy > 4) {
            this.vy = -5;
        }
    }
}
}