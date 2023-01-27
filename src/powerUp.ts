class PowerUp {

    /* ------------------
          ATTRIBUTES
    ------------------ */ 
    public x: number;
    public y: number;
    public diameter: number;
    public powerUpType: string;
  
    /* --------------------
          CONSTRUCTOR
    -------------------- */ 
    constructor(diameter: number, x: number, y: number, powerUpType: string) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.powerUpType = powerUpType;
    }
  
    /* ------------------
          METHODS
    ------------------ */ 
    // Draw
    public draw() {

    }
  
    // Update
    public update() {
        
    }
}