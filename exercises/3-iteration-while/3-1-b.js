"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "whi";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i < 6) {
        let x = 65;
        let y = 65;
        Utils.drawLine(y*i, 50, y*i, 350);
        Utils.drawLine(50,x*i, 350, x*i);
        i++;
    }
}