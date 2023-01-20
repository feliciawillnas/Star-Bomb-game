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
        // Drawing scoreboard
        noStroke();
        stroke("black")
        strokeWeight(5)
        fill(255, 255, 255, 50);
        rect(
            windowWidth / 2,
            height / 2 - game.playScene.playboard.height / 2 - 40,
            game.playScene.playboard.width,
            100
        );
        fill(255, 255, 255);
        textSize(32);
        // Score text
        push()
        drawingContext.shadowOffsetY = 10;
        drawingContext.shadowOffsetX = 10
        drawingContext.shadowColor = 'black';
        strokeWeight(7)
        text(
            "SCORE",
            windowWidth / 2,
            height / 2 - game.playScene.playboard.height / 2 - 20
            );
        pop()
        
        // Player Scores
        push();
        text("30" /*player1Score*/, width/2 - game.playScene.playboard.width/4, height / 2 - game.playScene.playboard.height / 2 - 20)
        text("40" /*player2Score*/, width/2 + game.playScene.playboard.width/4, height / 2 - game.playScene.playboard.height / 2 - 20)
        pop();


    }

}