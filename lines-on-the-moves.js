function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}
var slant = 0
var slantSpeed = 10
var slantChangeX = slantSpeed

function draw() {
  background(255);

  for (var x = 50; x < 200; x = x + 20) {
    line(x, slant, slant, height/2-75);
  }
  
  slant = slant + slantChangeX
  
  if (slant >= width) {
    slantChangeX = -slantSpeed;
  }
  
  if (slant <= 0) {
    slantChangeX = slantSpeed;
}
}
