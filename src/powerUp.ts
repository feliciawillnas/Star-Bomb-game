class PowerUp {

    /* ------------------
          ATTRIBUTES
    ------------------ */ 
    public x: number;
    public y: number;
    public diameter: number;
    public type: string;
  
    /* --------------------
          CONSTRUCTOR
    -------------------- */ 
    constructor(diameter: number, x: number, y: number, type: string) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.type = type;
    }
  
    /* ------------------
          METHODS
    ------------------ */ 
    // Draw
    public draw() {
        noStroke();
        if (this.type == "slow-down") {
            fill(255, 0, 0)
        }
        if (this.type == "reverse-controls") {
            fill(0, 255, 0)
        }
        if (this.type == "goal-shield") {
            fill(0, 0, 255)
        }
        if (this.type == "small-player") {
            fill(255, 255, 0)
        }
        if (this.type == "bonus-points") {
            fill(0, 255, 255)
        }
        ellipse(this.x, this.y, this.diameter)
    }
  
    // Update
    public update() {

    }
}