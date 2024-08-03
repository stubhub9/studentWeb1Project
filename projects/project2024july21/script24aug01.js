"use strict"
const canvas1a = document.getElementById("canvas1");
const context1 = canvas1a.getContext("2d");
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


function draw2() {



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

function draw3() {
    
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
gradient1.addColorStop(1, "green");

// Set the fill style and draw a rectangle
context1.fillStyle = gradient1;
context1.fillRect(650, 2, 160, 160);

context1.strokeText("Conic Gradient   Radial Gradient", 485, 25);

//  roundRect(x, y, width, height, radii)
// Rounded rectangle with zero radius (specified as a number)
context1.strokeStyle = randomHSL();
context1.beginPath();
context1.roundRect(300, 165, 150, 90, 0);
context1.stroke();

// Rounded rectangle with 40px radius (single element list)
context1.strokeStyle = randomHSL();
context1.beginPath();
context1.roundRect(300, 165, 150, 90, [40]);
context1.stroke();





}
//  END of draw3



  






// function to generate random number

function random1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // function to generate random RGB color value

  function randomHSL() {
    return `hsl(${random1(0,359)}, 100%, 50%)`;
  }
  
  //  "hsl(200deg, 100%, 30%)"
  function randomRGB() {
    return `rgb(${random1(0, 255)},${random1(0, 255)},${random1(0, 255)})`;
  }
  
  