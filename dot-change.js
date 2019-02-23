function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var x = random(width);
  var y = random(height);

  stroke(x, y, 100);
  point(x, y);
  
  for (var i = 200; i < width-200; i = i + 200) {
}
}
