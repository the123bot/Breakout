initGraphics(800, 600);
let brick = [];
let numrow = 5;
const BALL_SPEED = 6;
for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 5; row++) {
        brick.push(new Brick(col * 80 + 80, (row * 40) + 10, "rgb(0,147,224)", 50, numrow));
        numrow--;
    };
    numrow = 5;
};
let ball = new Ball(cnv.width / 2, cnv.height / 2, 1);
let player = new Brick((cnv.width / 2) - 35, cnv.height - 20, "blue", 80);
requestAnimationFrame(draw);
function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.fillText("Lives", cnv.width - 200, cnv.height - 36)
    for (let q = 0; q < BALL_SPEED; q++) {
        ball.update();
        for (let j = 0; j < brick.length; j++) {
            if (ctx.circleRectCollide(ball, brick[j]) && ball.y < cnv.height / 2) {
                ball.velocity.y *= -1;
                brick[j].integrity--;
                if (brick[j].integrity == 0) {
                    brick.splice(j, 1);
                }
            }
        }
    }
    for (let i = 0; i < brick.length; i++) {
        brick[i].show();
    }
    ball.show();
    player.show();
    player.update();
    requestAnimationFrame(draw);
}
document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyRelease);
function keyPress(event) {
    if (event.code == "ArrowRight") {
        player.velocity.x = 10;
    } else if (event.code == "ArrowLeft") {
        player.velocity.x = -10;
    }
}
function keyRelease(event) {
    if (event.code == "ArrowRight" || event.code == "ArrowLeft") {
        player.velocity.x = 0;
    }
}