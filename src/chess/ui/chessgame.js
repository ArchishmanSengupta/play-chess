import React from "react";
import Game from '../model/chess';

// Taking class instead of hooks
// Calculations,pixel coordinates
class ChessGame extends React.Component {

    state={
        // TODO
        gameState: new Game(this.props.isWhite),
        draggedPieceTargetId: "",
        playerTurnToMoveIsWhite=false,
        // check if white/black king is in check or not
        whiteKingCheck: false,
        blackKingCheck: false,
    }
    // 1. FOR RENDERING
    render(){
        return (
            /***
             * <div background=wood jpg>
             *  <stage>
             *      <layer for loop model and renders it>
             *</div>
             */
        )
    }
    // 2. USING PYTHAGOREAN THEOREM 
    move(selectedId, finalPosition){
        /**
         * TO CALCULATE THE distance between the final 
         *  position of the dragged chess piece for every single square on the board 
         * and it chooses the closest square (the shortest distance) and it then
         * assigns that chess piece to that square
         */
    }
}
export default class ChessGame