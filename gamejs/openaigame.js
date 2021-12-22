var canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var ball = {
  x: 100,
  y: 100,
  vx: 2,
  vy: 2,
  radius: 10,
  color: '#00f'
};
var paddle = {
  x: 0,
  y: 0,
  width: 100,
  height: 20,
  color: '#00f'
};
var score = 0;
var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.fillStyle = paddle.color;
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = '#000';
  ctx.font = '16px Arial';
  ctx.fillText(score, 10, 20);
};
var update = function() {
  if (ball.x + ball.radius > canvas.width) {
    ball.vx = -ball.vx;
    score++;
  }
  if (ball.x - ball.radius < 0) {
    ball.vx = -ball.vx;
    score++;
  }
  if (ball.y + ball.radius > canvas.height) {
    ball.vy = -ball.vy;
  }
  if (ball.y - ball.radius < 0) {
    ball.vy = -ball.vy;
  }
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x + ball.radius > paddle.x && ball.x - ball.radius < paddle.x + paddle.width && ball.y + ball.radius > paddle.y && ball.y - ball.radius < paddle.y + paddle.height) {
    ball.vy = -ball.vy;
  }
};
var loop = function() {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();