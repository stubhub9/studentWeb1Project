"use strict"
const canvas1a = document.getElementById("canvas1");
const context1 = canvas1a.getContext("2d");
const compcolor = "hsl(200deg, 100%, 30%)";
window.addEventListener("load", draw1);






function draw1() {
    const canvas1 = document.getElementById("canvas1");
      const ctx1 = canvas1.getContext("2d");
      ctx1.strokeStyle = "red";
      ctx1.lineWidth = 10;
      ctx1.lineJoin = "round";
  
      const rectangle1 = new Path2D();
      rectangle1.rect(10, 10, 50, 50);
  
      const circle1 = new Path2D();
      circle1.arc(100, 35, 25, 0, 2 * Math.PI);
  
      
      ctx1.strokeStyle = randomHSL();
      ctx1.stroke(rectangle1);
      ctx1.fill(circle1);
      ctx1.strokeStyle = "hsl(200deg, 100%, 30%)";
      ctx1.fillStyle = "rgb(244 188 9 / .2)";
      ctx1.fill(rectangle1);
      ctx1.stroke(circle1);

      //  Draw House
      // Set line width
ctx1.lineWidth = 10;
ctx1.lineJoin = "miter";
ctx1.font = "50px serif";
ctx1.textAlign = "left";

// Wall
    ctx1.strokeStyle = "rgb(0,250,150)";
ctx1.strokeRect(75, 140, 150, 110);

// Door
ctx1.fillRect(130, 190, 40, 60);

// Roof
ctx1.beginPath();
ctx1.moveTo(50, 140);
ctx1.lineTo(150, 60);
ctx1.strokeStyle = "blue";
ctx1.lineTo(250, 140);
ctx1.closePath();
ctx1.stroke();


ctx1.lineWidth = 2;
ctx1.strokeText("Hello You", 55, 120);
ctx1.font = "30px serif";
ctx1.fontStretch = "ultra-condensed";
ctx1.lineWidth = 1;
ctx1.strokeText("Hello You", 55, 190, 150);

draw2();
}

//  START  draw2    ******      START  draw2    ******      START  draw2    ******    
function draw2() {
    context1.fillStyle = compcolor;

const baselinesAboveAlphabetic = [
    "fontBoundingBoxAscent",
    "actualBoundingBoxAscent",
    "emHeightAscent",
    "hangingBaseline",
  ];
  const baselinesBelowAlphabetic = [
    "ideographicBaseline",
    "emHeightDescent",
    "actualBoundingBoxDescent",
    "fontBoundingBoxDescent",
  ];
  const baselines = [...baselinesAboveAlphabetic, ...baselinesBelowAlphabetic];
  context1.font = "20px verdana";
  context1.strokeStyle = "red";
  
  baselines.forEach((baseline, index) => {
    const text = `AbefghijkIl1O0p (${baseline})`;
    const textMetrics = context1.measureText(text);
    const y = 280 + index * 50;
    context1.beginPath();
    context1.fillText(text, 0, y);
  
    const baselineMetricValue = textMetrics[baseline];
    if (baselineMetricValue === undefined) {
      return;
    }
  
    const lineY = baselinesBelowAlphabetic.includes(baseline)
      ? y + Math.abs(baselineMetricValue)
      : y - Math.abs(baselineMetricValue);
      context1.moveTo(0, lineY);
      context1.lineTo(450, lineY);
      context1.stroke();
  });
  draw3();
  }

 //   START  draw3    ******     START  draw3    ******     START  draw3    ******    

function draw3() {
    context1.save();
    
//  Grn Yel Rd Box of boxes
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      context1.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * i)}
          ${Math.floor(255 - 42.5 * j)}
          0)`;
      context1.fillRect(((j * 25) + 300), i * 25 + 10, 25, 25);
    }
  }


// Create a conic gradient
//  createConicGradient(startAngle, x, y)

const gradient = context1.createConicGradient(0, 550, 50);

// Add five color stops
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");

// Set the fill style and draw a rectangle
context1.fillStyle = gradient;
context1.fillRect(500, 1, 100, 100);

//  createRadialGradient(x0, y0, r0, x1, y1, r1)

context1.strokeRect(650, 2, 160, 160);

// Create a radial gradient
// The inner circle is at x=110, y=90, with radius=30
// The outer circle is at x=100, y=100, with radius=70
const gradient1 = context1.createRadialGradient(730, 80, 30, 730, 80, 70);

// Add three color stops
gradient1.addColorStop(0, "pink");
gradient1.addColorStop(0.9, "white");
gradient1.addColorStop(1, randomHSL());

// Set the fill style and draw a rectangle
context1.fillStyle = gradient1;
context1.fillRect(650, 2, 160, 160);

context1.strokeText("Conic Gradient   Radial Gradient", 485, 25);

//  roundRect(x, y, width, height, radii)
// Rounded rectangle with zero radius (specified as a number)
context1.lineWidth = 3;
context1.strokeStyle = randomHSL();
context1.beginPath();
context1.roundRect(300, 165, 150, 90, 0);
context1.stroke();

// Rounded rectangle with 40px radius (single element list)
context1.lineWidth = 4;
context1.strokeStyle = randomHSL();
context1.beginPath();
context1.roundRect(303, 168, 144, 84, [40]);
context1.fill();
context1.stroke();
context1.filter = "blur(4px)";
context1.font = "48px serif";
context1.strokeStyle = randomHSL();
context1.strokeText("roundRect", 305, 180);

/*
const imagesource1 = document.getElementById("imagesource1");
imagesource1.addEventListener("load", (e) => {
    // Draw unfiltered image
    context1.drawImage(imagesource1, 0, 0, image.width * 0.6, image.height * 0.6);
  
    // Draw image with filter
    context1.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
    context1.drawImage(imagesource1, 400, 0, -imagesource1.width * 0.6, imagesource1.height * 0.6);
  });
*/

const image = document.getElementById("imagesource1");

//  image.addEventListener("load", (e) => {
  // Draw unfiltered image
  //context1.restore();
  context1.drawImage(image, 500, 110, image.width * 0.6, image.height * 0.6);

  // Draw image with filter
  context1.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
  context1.drawImage(image, 640, 110, -image.width * 0.6, image.height * 0.6);
//  });

context1.filter = "hue-rotate(180deg)";
context1.drawImage(image, 470, 180, image.width * 0.9, image.height * 0.9);


context1.filter = "invert(.99)";
context1.drawImage(image, 580, 180, image.width * 0.9, image.height * 0.9);

context1.filter = "sepia(99%)";
context1.drawImage(image, 690, 180, image.width * 0.9, image.height * 0.9);

context1.filter = "none";
context1.drawImage(image, 470, 280, image.width * 0.9, image.height * 0.9);

context1.filter = "hue-rotate(90deg)";
context1.drawImage(image, 580, 280, image.width * 0.9, image.height * 0.9);

context1.filter = "hue-rotate(-90deg)";
context1.drawImage(image, 690, 280, image.width * 0.9, image.height * 0.9);

context1.filter = "grayscale(.8)";
context1.drawImage(image, 470, 380, image.width * 0.9, image.height * 0.9);

context1.filter = "saturate(.2)";
context1.drawImage(image, 580, 380, image.width * 0.9, image.height * 0.9);

context1.filter = "contrast(.5)";
context1.drawImage(image, 690, 380, image.width * 0.9, image.height * 0.9);

context1.filter = "brightness(.5)";
context1.drawImage(image, 470, 480, image.width * 0.9, image.height * 0.9);

context1.filter = "opacity(.2)";
context1.drawImage(image, 580, 480, image.width * 0.9, image.height * 0.9);


context1.beginPath();
context1.moveTo(75, 40);
context1.bezierCurveTo(75, 37, 70, 25, 50, 25);
context1.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
context1.bezierCurveTo(20, 80, 40, 102, 75, 120);
context1.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
context1.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
context1.bezierCurveTo(85, 25, 75, 37, 75, 40);
context1.fill();


context1.restore();


context1.beginPath();

// Outer shape clockwise ⟳
context1.moveTo(0, 650);
context1.lineTo(150, 650);
context1.lineTo(75, 729.9);

// Inner shape anticlockwise ↺
context1.moveTo(75, 620);
context1.lineTo(50, 660);
context1.lineTo(100, 660);

context1.fill();



draw4();

}
//    draw4    ******       draw4    ******       draw4    ******       draw4    ******   

function draw4() {
    const canvas = document.getElementById("canvas2");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      roundedRect(ctx, 12, 12, 184, 168, 15);
      roundedRect(ctx, 19, 19, 170, 154, 9);
      roundedRect(ctx, 53, 53, 49, 33, 10);
      roundedRect(ctx, 53, 119, 49, 16, 6);
      roundedRect(ctx, 135, 53, 49, 33, 10);
      roundedRect(ctx, 135, 119, 25, 49, 10);
  
      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(31, 37);
      ctx.fill();
  
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
  
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
  
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }
  
      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();
  
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();
  
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  
  // A utility function to draw a rectangle with rounded corners.
  
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }
  


  






// function to generate random number

function random1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // function to generate random RGB color value

  function randomHSL() {
    const hue1 = random1(0,359);
    return `hsl(${hue1}, 100%, 50%)`;
  }

  /*
  function randomHSLplus() {
    const _hue = random1(0,359);

    const _comphue = (_hue >= 180) ? 
    (_hue - 180) : (_hue + 180);
    compcolor = "hsl(${_comphue}, 100%, 50%";
    return `hsl(${random1(0,359)}, 100%, 50%)`;
  }

*/


  
  //  "hsl(200deg, 100%, 30%)"
  function randomRGB() {
    return `rgb(${random1(0, 255)},${random1(0, 255)},${random1(0, 255)})`;
  }
  
  