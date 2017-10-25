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

var numberOfSides = 5,
    size = 240,
    Xcenter = 0,
    Ycenter = 0;

context.beginPath();
context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
    context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

context.strokeStyle = "#000000";
context.lineWidth = 1;
context.stroke();
