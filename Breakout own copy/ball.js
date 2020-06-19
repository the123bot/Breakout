function Ball(x, y, index) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.i = index;
    this.angle = Math.randomDec(- Math.PI, Math.PI);
    this.velocity = makeVector(Math.cos(this.angle), Math.sin(this.angle));
    this.out = function () {
        if (this.y - this.r > cnv.height) {
            return true;
        }
    }
    this.update = function () {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.y - this.r < 0) {
            this.velocity.y *= -1;
        }
        if (this.x + this.r > cnv.width || this.x - this.r < 0) {
            this.velocity.x *= -1;
        }
        if (this.x < player.x + player.w && this.x > player.x) {
            if (this.y + this.r >= player.y && this.y + this.r <= player.y + player.h) {
                this.velocity.y *= -1;
                this.angle = Math.randomDec(-5 * Math.PI / 4, -Math.PI / 4);
                this.velocity.x = Math.cos(this.angle);
                this.velocity.y = Math.sin(this.angle);
            };
        }
        if (this.y + this.r > cnv.height) {
            this.angle = Math.randomDec(- Math.PI, Math.PI);
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.x = cnv.width / 2;
            this.y = cnv.height / 2;
            setTimeout(() => {
                this.velocity = makeVector(Math.cos(this.angle), Math.sin(this.angle));
            }, 1000)
        }
    }

    this.reset = function () {
        this.angle = Math.randomDec(-5 * Math.PI / 4, -Math.PI / 4);
        this.velocity.x = 7 * Math.cos(this.angle);
        this.velocity.y = 7 * Math.sin(this.angle);
    }
    this.show = function () {
        ctx.fillStyle = "white";
        ctx.fillCircleXYR(this.x, this.y, this.r);
    }
}