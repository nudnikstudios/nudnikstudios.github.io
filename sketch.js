let font;
let vehicles = [];
let letterCount = 6;


function preload() {
  font = loadFont('Goldman-Bold.ttf');
}

function setup() {
    let canvas = createCanvas(800, 250);
    canvas.parent('sketch-holder');
    background(51);

  let points = font.textToPoints('nudnik', 50, 200, 192, {
    sampleFactor: 0.25
  });

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);   
  }
}

function draw() {
  background(51);
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}