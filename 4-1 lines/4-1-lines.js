"use strict";
import context from "../../scripts/context";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawLines();
function drawLines(){
    let step = 10;
    let amount = width/step; 
    
    for (let i = 0; i < 10; i++) {
        Utils.drawLine(step + (step * i), 0, width -(step * i), height); 
    }
}