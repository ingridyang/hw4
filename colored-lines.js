function setup() {
  createCanvas(400, 400);
  background(220);
  colorMode(HSB, x, 20, 400);
}
var x = 800;
function draw() {
  background(255);
  for (var x = 15; x < width-10; x = x + 10) {
    stroke(x);
    line(x, 20, mouseX, mouseY);
    
  }
}
