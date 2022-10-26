"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
background();

function background() {
    context.fillStyle = "#ffbf00";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = 2;
}

drawLines();

function drawLines() {
    let step = 20;
    let amount = width / step;
    let amount1 = height / step;


    for (let i = 0; i < amount; i++) {
        Utils.drawLine(0 + (step * i), 0, width - (step * i), height);
    }
    for (let i = 0; i < amount1; i++) {
        Utils.drawLine(0, 0 + step * i, width, height - step * i);

    }

}