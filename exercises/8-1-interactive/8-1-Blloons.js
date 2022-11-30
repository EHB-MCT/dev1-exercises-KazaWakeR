"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];


setup();

update();

function setup() {
    for (let i = 0; i < 25; i++) {
        let balloon = {
            x: Utils.randomNumber(0, width),
            y: height / 1,
            size: 42,
            hue: Utils.randomNumber(0, 48)
        };
        balloons[i] = balloon;
    }
    console.log(balloons);
}

function update() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++) {
        let balloon = balloons[i];
        balloon.x += Utils.randomNumber(2, -2);
        balloon.y += Utils.randomNumber(-1, Utils.randomNumber(3, -13));
        balloon.size += 14;
        drawBalloon(balloon);

    }

    requestAnimationFrame(update);
}

function drawBalloon(balloon) {
    context.strokeStyle = 'black';
    Utils.drawLine(balloon.x, balloon.y, balloon.x, balloon.y + 100);
    context.fillStyle = Utils.hsl(balloon.hue, 90, 50);
    Utils.fillEllipse(balloon.x, balloon.y, 20, 30);

}