function Brick(x, y, color, w, row) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 15;
    this.color = color;
    this.velocity = makeVector(0);
    this.integrity = row;
    this.show = function () {
        if (!row) {
            ctx.fillStyle = this.color;
        } else {
            ctx.fillStyle = colors[this.integrity - 1];
        }
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    this.update = function () {
        this.x += this.velocity.x;
        if (this.x + this.w > cnv.width) {
            this.x = cnv.width - this.w;
        } else if (this.x < 0) {
            this.x = 0
        }
    }
}
let colors = ["red", "orange", "yellow", "#90ee90", "green"]