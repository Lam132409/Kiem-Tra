class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    renderCircle() {
        let c= (this.x  + this.y + this.radius );
    }
}
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(10, 10, 100, 0, 2 * Math.PI);
ctx.stroke();