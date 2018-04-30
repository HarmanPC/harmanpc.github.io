var shot = true;
var x = [];
var stars = [];
var y = [];
var Max = [];
function setup() {
    createCanvas(500, 500);
    background(51);
    reset();
}
function reset() {
    for (var i = 0; i < 30; i++) {
        x[i] = parseInt(random(width));
    }
    for (var i = 0; i < 30; i++) {
        y[i] = parseInt(random(width));
    }
}
function draw() {
    if (shot) {
        stroke(50);
        fill(200);
        for (var i = 0; i < 30; i++) {
            stars[i] = new Star(x[i], y[i], 15, 2, 8);
            stars[i].show();
            x[i]++;
            y[i]++;
            if (x[i] > height && Max.indexOf(i) == -1) {
                Max.push(i);
            }
            if (Max.length == x.length) {
                clear();
                setup();
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
