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
    if (this.type == "slow-down") {
      image(images.powerUpIconSlowDown, this.x, this.y);
    }
    if (this.type == "reverse-controls") {
      image(images.powerupIconReverseControls, this.x, this.y);
    }
    if (this.type == "goal-shield") {
      image(images.powerUpIconGoalShield, this.x, this.y);
    }
    if (this.type == "shrink-player") {
      image(images.powerUpIconShrinkPlayer, this.x, this.y);
    }
    if (this.type == "bonus-points") {
      image(images.powerUpIconBonusPoints, this.x, this.y);
    }
  }
}
