"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawWarpedEllipses();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawWarpedEllipses() {
    let i = 0;
    let step = 25;
    let colorStep = step*2;
    while (i< 7) {
        let gray = 255 - (i * colorStep);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        //This fillAndStrokeEllipse function does not exist yet!
        //Add it to the utils script:
        //The function draws the stroke of a circle AND fills it
        //and has the following parameters: x, y, rX, rY
        Utils.fillAndStrokeEllipse(200, 200, 25 + (i * step), 150 -(i * step));
        i++;
    }
}