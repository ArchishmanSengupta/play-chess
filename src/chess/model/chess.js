class Game{
    constructor(thisPlayerIsPlayingAsWhite){
        
        // IMPORTANT AS ALL THE CHESS LOGIC WILL HOVER AROUND THIS 
        this.thisPlayerIsPlayingAsWhite= thisPlayerIsPlayingAsWhite;
        this.chessBoard=makeStartingBoard();
    }

    //------------------METHODS-----------------
    
    // 1. MAKE STARTING BOAR METHOD
    makeStartingBoard(){
        // Make the board orientation for the current player

        if(thisPlayerIsPlayingAsWhite){
            // Make chess orientation for white
        }
        else{
            // Make chess orientation for black
        }
    }

    //2. MOVE PIECE METHOD-> When player decides to move
    movePiece(){
        //PieceID: string
        // to:[x,y]
    }

}