"use strict";

import context from './context.js';


/**
 * 
 * @param {Number} x1 
 * @param {Number} y1 
 * @param {Number} x2 
 * @param {Number} y2 
 */

export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

//export function rgb(r, g, b) {
    let rgb ="rgb("+ r + "," + g + ","+ b +")";
    return rgb;
}