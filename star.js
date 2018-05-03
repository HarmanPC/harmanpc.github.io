class Star {
    constructor(x,  y,  radius1,  radius2,  points) {
        this.x = x;
        this.y = y;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.points = points;
    }
    show() {
        const angle = TWO_PI / this.points;
        const halfAngle = angle/2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = this.x + cos(a) * this.radius2;
            let sy = this.y + sin(a) * this.radius2;
            vertex(sx, sy);
            sx = this.x + cos(a+halfAngle) * this.radius1;
            sy = this.y + sin(a+halfAngle) * this.radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}
