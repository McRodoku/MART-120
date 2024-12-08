// p5.js sketch
let ball = {
  x: 100,
  y: 100,
  xSpeed: 3,
  ySpeed: 2,
  size: 50,
  color: [255, 0, 0]
};

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(30);

  // Ball movement
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  // Ball color changes based on position
  if (ball.x < width / 2 && ball.y < height / 2) {
    ball.color = [255, 0, 0]; // Red in top-left quadrant
  } else if (ball.x >= width / 2 && ball.y < height / 2) {
    ball.color = [0, 255, 0]; // Green in top-right quadrant
  } else if (ball.x < width / 2 && ball.y >= height / 2) {
    ball.color = [0, 0, 255]; // Blue in bottom-left quadrant
  } else {
    ball.color = [255, 255, 0]; // Yellow in bottom-right quadrant
  }

  // Change direction on wall collision
  if (ball.x <= 0 || ball.x >= width) {
    ball.xSpeed *= -1;
  }
  if (ball.y <= 0 || ball.y >= height) {
    ball.ySpeed *= -1;
  }

  // Interaction: speed up ball if mouse is pressed
  if (mouseIsPressed) {
    ball.xSpeed = ball.xSpeed > 0 ? 5 : -5;
    ball.ySpeed = ball.ySpeed > 0 ? 5 : -5;
  } else {
    ball.xSpeed = ball.xSpeed > 0 ? 3 : -3;
    ball.ySpeed = ball.ySpeed > 0 ? 2 : -2;
  }

  // Draw ball
  fill(ball.color);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);

  // Display instructions
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Click to speed up the ball!", width / 2, height - 30);
}
