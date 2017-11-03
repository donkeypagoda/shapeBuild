function Mallet() {
  this.r = 20;
  this.x = 0;
  this.y = 0;
};

function singleLine(context, point1, point2){
  context.beginPath();
  context.moveTo(point1.x, point1.y);
  context.lineTo(point2.x, point2.y);
  context.lineWidth = 1;
  context.stroke();
}

let canvas = document.getElementById("shapes");
let context = canvas.getContext("2d");

context.setTransform(1, 0, 0, 1, 0, 0);
context.clearRect(0, 0, canvas.width, canvas.height);
context.translate(350, 350);

context.beginPath();
context.arc(0, 0, 240, 0, Math.PI * 2, false);
context.lineWidth = 1;
context.stroke();

let triangleMallet1 = new Mallet();
triangleMallet1.x = 175;
triangleMallet1.y = 158;


let triangleMallet2 = new Mallet();
triangleMallet2.x = -175;
triangleMallet2.y = 158;


let triangleMallet3 = new Mallet();
triangleMallet3.x = -175;
triangleMallet3.y = -158;

let triangleMallet4 = new Mallet();
triangleMallet4.x = 175;
triangleMallet4.y = -158;

singleLine(context, triangleMallet1, triangleMallet2);
singleLine(context, triangleMallet2, triangleMallet3);
singleLine(context, triangleMallet3, triangleMallet4);
singleLine(context, triangleMallet4, triangleMallet1);

// draw the mallets
context.beginPath();
context.arc(triangleMallet1.x, triangleMallet1.y, triangleMallet1.r, 0, 2 * Math.PI, false);
context.stroke();
context.fill();

context.beginPath();
context.arc(triangleMallet2.x, triangleMallet2.y, triangleMallet2.r, 0, 2 * Math.PI, false);
context.stroke();
context.fill();

context.beginPath();
context.arc(triangleMallet3.x, triangleMallet3.y, triangleMallet3.r, 0, 2 * Math.PI, false);
context.stroke();
context.fill();

context.beginPath();
context.arc(triangleMallet4.x, triangleMallet4.y, triangleMallet4.r, 0, 2 * Math.PI, false);
context.stroke();
context.fill();

context.beginPath();
context.arc(0, 0, 240, 0, Math.PI * 2, false);
context.lineWidth = 1;
context.stroke();

var path = anime.path('#motionPath path');

var motionPath = anime({
  targets: '#motionPath .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});
