var font;
var vehicles = [];

function preload() {
  font = loadFont('Goldman-Bold.ttf');
  
}

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('sketch-holder');
    background(51);

  var points = font.textToPoints('nudnik', 250, 200, 192, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);   
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}