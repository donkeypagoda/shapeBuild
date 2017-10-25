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

var numberOfSides = 6,
    size = 20,
    Xcenter = 25,
    Ycenter = 25;

cxt.beginPath();
cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
    cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

cxt.strokeStyle = "#000000";
cxt.lineWidth = 1;
cxt.stroke();
