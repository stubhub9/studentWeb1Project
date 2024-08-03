"use strict"

let win_width = window.innerWidth;
const container1 = document.getElementById("container1");
container1.style.width = (win_width >= 825) ? "750px" : "90%";



//WORKS:  let promptreturn = prompt("Here's your prompt, gimme chars:", "0123456789");

let btn1 = document.getElementById("btn1");
let text1 = "";
btn1.addEventListener("click", function(event) {
    let promptreturn = prompt("Here's your prompt, gimme chars:", "0123456789");
    //regexp at least one number, only numbers
   //text1 = promptreturn, pattern1 = /^\d+$/;
    if (promptreturn != null){
        document.getElementById("btn1").innerHTML = "Hello";
    }
    btn1.innerText = promptreturn;

});


//   Bouncing Balls    *****       Bouncing Balls    *****       Bouncing Balls    *****    
// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

//  End of Bouncing balls     ******      End of Bouncing balls     ******      End of Bouncing balls     ******    



const canvas1 = document.querySelector(".canvas1");

const ctx1 = canvas1.getContext("2d");

const width1 = (canvas1.width = (window.innerWidth * 0.8));
const height1 = (canvas1.height = window.innerHeight);
ctx1.fillStyle = "rgba(100, 50, 50, 1.0)";
ctx1.fillRect(0, 0, width, height);


ctx1.fillStyle = "rgba(90, 90, 200, 1.0)";
ctx1.fillRect(25, 25, 100, 100);
ctx1.clearRect(45, 45, 60, 60);
ctx1.strokeStyle =  randomRGB();
ctx1.strokeRect(50, 50, 50, 50);

//  triangle
ctx1.fillStyle =  randomRGB();
ctx1.beginPath();
ctx1.moveTo(150, 25);
ctx1.lineTo(250, 25);
ctx1.lineTo(150, 125);
ctx1.fill();

ctx1.fillStyle =  randomRGB();
ctx1.beginPath();
ctx1.moveTo(150, 145);
ctx1.lineTo(250, 45);
ctx1.lineTo(250, 145);
ctx1.closePath();
ctx1.stroke();

//  happy face
ctx1.beginPath();
ctx1.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx1.moveTo(110, 75);
ctx1.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx1.moveTo(65, 65);
ctx1.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx1.moveTo(95, 65);
ctx1.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx1.stroke();


for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx1.beginPath();
      const x1 = 300 + j * 50; // x coordinate
      const y1 = 25 + i * 50; // y coordinate
      const radius = 20; // Arc radius
      const startAngle = 0; // Starting point on circle
      const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

      ctx1.arc(x1, y1, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx1.fill();
      } else {
        ctx1.stroke();
      }
    }
  }

// End of series of arcs

/* 

ctx1.linewidth = 40;
ctx1.beginPath();
ctx1.lineTo(425,25)

  */

ctx1.moveTo(475, 25);
ctx1.quadraticCurveTo(425, 25, 425, 62.5);
ctx1.quadraticCurveTo(425, 100, 450, 100);
ctx1.quadraticCurveTo(450, 120, 430, 125);
ctx1.quadraticCurveTo(460, 120, 465, 100);
ctx1.quadraticCurveTo(525, 100, 525, 62.5);
ctx1.quadraticCurveTo(525, 25, 475, 25);
ctx1.stroke();



ctx1.linewidth = 40;
ctx1.beginPath();

ctx1.moveTo(575, 25);
ctx1.lineTo(575,155)
ctx1.stroke();


  //  vid on canvas     (((())))     vid on canvas     (((())))     vid on canvas     (((())))   
  var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas.getContext('2d');
var vid1 = document.getElementById('vid1');

// set canvas size = video size when known
/*vid1.addEventListener('loadedmetadata', function() {
  canvas3.width = vid1.videoWidth;
  canvas3.height = vid1.videoHeight;
});*/

vid1.addEventListener('play', function() {
  var $this = this; //cache
  (function loop() {
    if (!$this.paused && !$this.ended) {
      ctx3.drawImage($this, 0, 0);
      setTimeout(loop, 1000 / 30); // drawing at 30fps
    }
  })();
}, 0);