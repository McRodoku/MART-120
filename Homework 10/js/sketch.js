let x1 = 100, x2 = 325, y1 = 75, y2 = 75;
let speedX1 = random(1, 3), speedX2 = random(1, 3);
let y3 = 350, y4 = 350;
let speedY1 = random(1, 2), speedY2 = random(1, 2);
let diagX = 80, diagY = 200;
let diagSpeedX = random(1, 2), diagSpeedY = random(1, 2);
let textSizeVar = 22;
let textGrowing = true;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(150, 75, 200);

  // Title text with oscillating size
  textSize(textSizeVar);
  text("How I feel about Mondays...", 110, 590);
  if (textGrowing) {
    textSizeVar += 0.5;
    if (textSizeVar >= 32) textGrowing = false;
  } else {
    textSizeVar -= 0.5;
    if (textSizeVar <= 22) textGrowing = true;
  }

  // Shapes moving along x-axis
  fill(200, 100, 50);
  circle(x1, y1, 100);
  circle(x2, y2, 100);
  x1 += speedX1;
  x2 += speedX2;
  if (x1 > 400 || x1 < 100) speedX1 *= -1;
  if (x2 > 400 || x2 < 100) speedX2 *= -1;

  // Shapes moving along y-axis
  fill(255, 255, 255);
  rect(80, y3, 100, 150);
  rect(300, y4, 100, 150);
  y3 += speedY1;
  y4 += speedY2;
  if (y3 > 450 || y3 < 350) speedY1 *= -1;
  if (y4 > 450 || y4 < 350) speedY2 *= -1;

  // Shape moving diagonally
  fill(134, 76, 2);
  triangle(diagX, diagY, diagX + 75, diagY - 125, diagX + 130, diagY + 120);
  diagX += diagSpeedX;
  diagY += diagSpeedY;
  if (diagX > 300 || diagX < 80) diagSpeedX *= -1;
  if (diagY > 300 || diagY < 200) diagSpeedY *= -1;

  // Other static shapes and lines
  line(100, 7, 175, 50);
  line(200, 55, 400, 5);
  strokeWeight(10);
  fill(0);
  point(100, 75);
  point(325, 75);
  point(250, 300);
  point(200, 300);
  line(400, 400, 100, 435);

  // Name text
  fill(0);
  textSize(25);
  text("Chance Salois", 150, 550);
}
