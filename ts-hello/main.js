"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('x:' + this.x + 'y:' + this.y);
    }
}
let point = new Point(1, 2);
point.draw();
