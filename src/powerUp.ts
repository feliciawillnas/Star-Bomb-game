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
        ellipse(this.x, this.y, this.diameter)
    }
  
    // Update
    public update() {

    }
}