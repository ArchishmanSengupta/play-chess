/*

Using Konva FRAMEWORK:

Konva is an HTML5 Canvas JavaScript framework that extends the 2d context
by enabling canvas interactivity for desktop and mobile applications.

Konva enables high performance 

1.animations                2.transitions
3.node nesting              4.layering
5.filtering                 6.caching
7. event handling 

for desktop and mobile applications, and much more.

You can draw things onto the stage, add event listeners to them, move them,
scale them, and rotate them independently from other shapes to support high performance
animations, even if your application uses thousands of shapes.

*/ 

import React from 'react';
import {Image} from 'react-konva';


const Piece =(props) => {
    /**
     * imageURL of this piece
     * color
     * id
     * -color of player
     * -whether or not it's your turn
     * - if thisPlayer's turn, color of this player is the same as  the color of the piece,
     *      then make the piece movable/draggable.
    */
    return {
        <Image 
        draggable
        />

    }
}
export default Piece;