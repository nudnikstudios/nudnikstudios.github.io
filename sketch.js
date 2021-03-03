let font;
let vehicles = [];
let pink = [214,2,112];
let blue = [0,56,168];
let purple = [155,79,150];
let colors = [pink,purple,blue];
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
    let color;
    for (j = 0; j <points.length; j++) {
        let count = points.length / 6;
        return points.length;
        return count;
    }
    let vehicle = new Vehicle(pt.x, pt.y, colors[0]);
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
