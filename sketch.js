let started = true;
const x = [];
const stars = [];
const y = [];
const Max = [];
const STARS_LENGTH = 10;
function setup() {
    createCanvas(500, 500);
    background(51);
    start();
}
function start() {
    for (let i = 0; i < width; i+=50) {
        x.push(i);
        y.push(i);
    }
    for (let i = 0; i < STARS_LENGTH; i++) { // All stars starts from wall or roof
        const r = parseInt(random(2));
        if (r == 0) x[i] = 0;
        else if (r == 1) y[i] = 0;
    }
}
function draw() {
    if (started) {
        stroke(200);
        fill(200);
        ellipse(50, 50, 50, 50);
        fill(200);
        stroke(50);
        for (let i = 0; i < STARS_LENGTH; i++) {
            stars[i] = new Star(x[i], y[i], 15, 2, 8);
            stars[i].show();
            x[i]++;
            y[i]++;
            if ((x[i] === height || y[i] === width) && Max.indexOf(i) === -1) {
                Max.push(i);
            }
            if (Max.length >= x.length) { // All stars fall
                clear();
                setup();
                background(51);
                fill(200);
                textSize(16);
                text(`All stars fall!`, 225, 225);
                noLoop();
                break;
            }
        }
    }
  }
