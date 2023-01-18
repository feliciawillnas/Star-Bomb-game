class ScoreInterface {
    //ATTRIBUTE////////////////////////////
    

    //CONSTRUCTOR////////////////////////
    constructor(){

    }
    //METHODS//////////////////////////
    
    //Update
    public update(){

    }
    //Draw
    public draw(){
        noStroke();
        fill(0, 0, 0, 100);
        rect(windowWidth / 2, 70, playScene.rectW, 100);
        fill(255, 255, 255);
        textSize(32);
        text("SCORE", windowWidth / 2, 90);
    }

}