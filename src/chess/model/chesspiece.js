class ChessPiece{
    constructor(name,id, isAttacked,color){

        // STRING
        this.name=name;
        // WHITE | BLACK
        this.color=color;
        // STRING
        this.id=id;
        // BOOLEAN
        this.isAttacked=isAttacked; 
    }

    // ------------------------METHODS------------------------

    // 1. SET SQAURE METHOD
    setSquare(){
        // TODO
        
        // a. assign this piece to a specific square
        // b. this.square=square
    }

    // 2. GET SQAURE METHOD
    getSquare(){
        // TODO

        // a. get the current square this piece is on.
        // b. undefined if this piece is not on the board

    }
}