"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
context.strokeStyle = "white";
context.lineWidth = 2;

background();

function background() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}

function drawBubbles() {
    Utils.fillAndStrokeEllipse {
        fill
    }

}