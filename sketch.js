let font;
let vehicles = [];
let biPink = [214,2,112];
let biBlue = [0,56,168];
let biPurple = [155,79,150];
wordLength = 6;

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
    let vColor;
    if (i < 252) {
        vColor = biPink;
    } else if (i > 253 && i < 528) {
        vColor = biPurple;
    } else {
        vColor = biBlue;
    }
    let vehicle = new Vehicle(pt.x, pt.y, vColor);
    vehicles.push(vehicle);
  }

  console.log(points.length);
  console.log(points.length/6);

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
