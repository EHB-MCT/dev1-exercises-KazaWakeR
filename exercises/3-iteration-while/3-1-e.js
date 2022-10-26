"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "purple";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 9) {
        let spacing = 16.5;
        let x = 50;
        let y = 50;
        Utils.drawLine(50+spacing*i, 200+spacing*i, 200+spacing*i, 50+spacing*i );
        Utils.drawLine( +spacing, 200+spacing*i, 200+spacing*i, 50+spacing*i);
        i++;
    }
}