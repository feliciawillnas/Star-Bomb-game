class Bomb {

  /* ------------------
        ATTRIBUTES
  ------------------ */ 
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public diameter: number;
  public timeToLive: number; // The bombs lifetime

  /* --------------------
        CONSTRUCTOR
  -------------------- */ 
  constructor(diameter: number, x: number, y: number, timeToLive: number) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.diameter = diameter;
    this.timeToLive = timeToLive; // Sets the detonation time.
  }

  /* ------------------
        METHODS
  ------------------ */ 
  // Draw
  public draw() {
    this.drawBombTimer();
    this.drawBombImage();
  }

  // Update
  public update() {
    if (this.timeToLive > 200) {
        this.moveBomb();
    }
  }

  // Draws bomb image
  // When timer is under 5 seconds, draw a red bomb
  // When timer is under 0.2 seconds, draw an explosion
  private drawBombImage() {
    // Normal bomb image
    if (this.timeToLive > 5500){
        image(images.neonGreenBombClear, this.x, this.y);

    // Bomb blinks every half second
    } else if (this.timeToLive <= 5500 && this.timeToLive > 5000) {
        image(images.redBomb, this.x, this.y)
    } else if (this.timeToLive <= 5000 && this.timeToLive > 4500){
        image(images.neonGreenBombClear, this.x, this.y);
    } else if (this.timeToLive <= 4500 && this.timeToLive > 4000) {
        image(images.redBomb, this.x, this.y)
    } else if (this.timeToLive <= 4000 && this.timeToLive > 3500){
        image(images.neonGreenBombClear, this.x, this.y);

    // Bomb blinks every 0.25 second
    } else if (this.timeToLive <= 3500 && this.timeToLive > 3250){
        image(images.redBomb, this.x, this.y);
    } else if (this.timeToLive <= 3250 && this.timeToLive > 3000) {
        image(images.neonGreenBombClear, this.x, this.y)
    } else if (this.timeToLive <= 3000 && this.timeToLive > 2750){
        image(images.redBomb, this.x, this.y);
    } else if (this.timeToLive <= 2750 && this.timeToLive > 2500) {
        image(images.neonGreenBombClear, this.x, this.y)
    } else if (this.timeToLive <= 2500 && this.timeToLive > 2250){
        image(images.redBomb, this.x, this.y);
    } else if (this.timeToLive <= 2250 && this.timeToLive > 2000){
        image(images.neonGreenBombClear, this.x, this.y);
    } else if (this.timeToLive <= 2000 && this.timeToLive > 1750) {
        image(images.redBomb, this.x, this.y)
    } else if (this.timeToLive <= 1750 && this.timeToLive > 1500){
        image(images.neonGreenBombClear, this.x, this.y);

    // Bomb blinks every 0.1 second
    } else if (this.timeToLive <= 1500 && this.timeToLive > 1400) {
        image(images.redBomb, this.x, this.y)
    } else if (this.timeToLive <= 1400 && this.timeToLive > 1300){
        image(images.neonGreenBombClear, this.x, this.y);
    } else if (this.timeToLive <= 1300 && this.timeToLive > 1200) {
        image(images.redBomb, this.x, this.y)
    } else if (this.timeToLive <= 1200 && this.timeToLive > 1100){
        image(images.neonGreenBombClear, this.x, this.y);
    } else if (this.timeToLive <= 1100 && this.timeToLive > 1000) {
        image(images.redBomb, this.x, this.y)
    } else if (this.timeToLive <= 1000 && this.timeToLive > 900) {
        image(images.neonGreenBombClear, this.x, this.y)
    } else if (this.timeToLive <= 900 && this.timeToLive > 800){
        image(images.redBomb, this.x, this.y);
    } else if (this.timeToLive <= 800 && this.timeToLive > 700) {
        image(images.neonGreenBombClear, this.x, this.y)
    } else if (this.timeToLive <= 700 && this.timeToLive > 600){
        image(images.redBomb, this.x, this.y);
    } else if (this.timeToLive <= 600 && this.timeToLive > 500) {
        image(images.neonGreenBombClear, this.x, this.y)
    } else if (this.timeToLive <= 500 && this.timeToLive > 400){
        image(images.redBomb, this.x, this.y);
    } else if (this.timeToLive <= 400 && this.timeToLive > 300) {
        image(images.neonGreenBombClear, this.x, this.y)

    // Draws explosion image and adds an "explosion effect" that
    // pushes nearby bombs away
    } else{
        image(images.explosion, this.x, this.y, 40, 40);
        this.diameter += 10
    }
  }

  // Shows a countdown timer inside every bomb.
  private drawBombTimer() {
    // noStroke();
    fill("lime");
    textSize(8);
    let intTimeToLive = round(this.timeToLive / 1000);
    text(intTimeToLive, this.x, this.y + 5);
  }

  //Move bomb
  private moveBomb() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
