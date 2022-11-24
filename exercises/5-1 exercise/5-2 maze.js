"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let spacing = 10;


drawMaze();

function drawMaze() {
    context.lineWidth = 5;
    context.lineCap = 'square';
    console.log('Checking up');

    context.fillStyle = 'blue';

    context.fillRect(0, 0, width, height);




    let horizontalAmaount = width / spacing;
    let verticalAmaount = height / spacing;
    for (let j = 0; j < verticalAmaount; j++) {
        for (let i = 0; i < horizontalAmaount; i++) {
            let randomColor = Math.random() * 360;
            context.strokeStyle = Utils.hsl(randomColor, 100, 50);
            let random = Math.floor(Math.random() * 2);
            if (random == 1) {
                Utils.drawLine(i * spacing, j * spacing, spacing + i * spacing, spacing + j * spacing);
            } else {
                Utils.drawLine(spacing + i * spacing, j * spacing, i * spacing, spacing + j * spacing);
            }

        }
    }

}