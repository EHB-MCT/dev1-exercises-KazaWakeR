"use strict";

drawName();

function drawName() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Y

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(300,50);
   context.lineTo(400, 250);
   context.lineTo(500,50);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(300,450);
   context.lineTo(450,150);
   context.stroke();

   //U

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(450,450);
   context.lineTo(450,150);
   context.lineTo
   context.stroke();


}
   

   


