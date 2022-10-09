"use strict";

drawName();

function drawName() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Y

   context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(300,50);
   context.lineTo(400, 250);
   context.lineTo(500,50);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(300,450);
   context.lineTo(450,150);
   context.stroke();

   //U

   context.lineWidth = 5;
   context.strokeStyle = 'lightblue';
   context.beginPath();
   context.moveTo(459,282);
   context.lineTo(459,160);
   context.moveTo(559,300);
   context.lineTo(456,280);
   context.moveTo(559,302);
   context.lineTo(559,160);
   context.stroke();

   //D//

   context.lineWidth = 5;
   context.strokeStyle = 'blue';
   context.beginPath();
   context.moveTo(579,302);
   context.lineTo(579,160);
   context.moveTo(576.8,160);
   context.lineTo(657,160);
   context.moveTo(655,280);
   context.lineTo(655,160);
   context.moveTo(657,280);
   context.lineTo(581,299);
   context.stroke();

   //J//
   context.lineWidth = 5;
   context.strokeStyle = 'cyan';
   context.beginPath();
   context.moveTo(675,290);
   context.lineTo(675,160);
   context.moveTo(677,289);
   context.lineTo(580,316);
   context.stroke();

   //I//
   context.lineWidth = 5;
   context.strokeStyle = 'yellow';
   context.beginPath();
   context.moveTo(740,280);
   context.lineTo(750,145);
   context.moveTo(777,270);
   context.lineTo(700,290);
   context.moveTo(777,135);
   context.lineTo(700,162);
   context.stroke();








}
   

   


