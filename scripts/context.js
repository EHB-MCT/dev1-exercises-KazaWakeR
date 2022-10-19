"use strict";

/** 
* @type {CanvasRenderingContext2D};
*/

let context;

setupCavasContext();

export default context;

function setupCavasContext(){
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}