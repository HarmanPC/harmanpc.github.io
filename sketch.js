let started = true;
let x = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
let stars = [];
let y = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
let Max = [];
let j = 0;
const STARS_LENGTH = 10;
function setup() {
    createCanvas(500, 500);
    background(51);
    start();
}
function start() {
    for (var i = 0; i < STARS_LENGTH; i++) { // All stars starts from wall or roof
        var r = parseInt(random(2));
        if (r == 0) x[i] = 0;
        else if (r == 1) y[i] = 0;
    }
}
function draw() {
    if (started) {
        stroke(51);
        fill(200);
        ellipse(50, 50, 50, 50);
        fill(200);
        stroke(50);
        for (var i = 0; i < STARS_LENGTH; i++) {
            stars[i] = new Star(x[i], y[i], 15, 2, 8);
            stars[i].show();
            x[i]++;
            y[i]++;
            if ((x[i] === height || x[i] === width) && Max.indexOf(i) === -1) {
                Max.push(i);
            }
            if (Max.length >= x.length) { // All stars fall
                clear();
                setup();
                background(51);
                fill(200);
                textSize(16);
                text(`All stars fall!`, 225, 225);
                x = [];
                y = [];
                Max = [];
                stars = [];
                noLoop();
                break;
            }
        }
    }
}
