class StartScene {
    //ATTRIBUTE////////////////////////////
    public scene: string;
    protected gameTitle: string;
    protected interactionInstruction: string;
    protected creatorNames: string;
    protected game: IStartGame;

    //CONSTRUCTOR////////////////////////
    constructor(game: IStartGame){
        this.scene = "startScene";
        this.gameTitle = "STAR B MB";

        this.interactionInstruction = "W ASD"
        this.creatorNames = "LINUS, SIMON, MARCUS, JENNY, FELICIA, LUCAS"
        this.game = game
    }
    //METHODS//////////////////////////
    
    //Update
    public update(){

    }
    //Draw
    public draw(){
        image(backgroundImg, width/2, height/2, width, height)
    }

}
