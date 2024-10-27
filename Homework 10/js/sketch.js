// Variables for shapes moving along the x-axis
let x1 = 100, x2 = 325; // Initial x-coordinates for the circles
let y1 = 75, y2 = 75;   // Fixed y-coordinates for the circles
let speedX1 = 2, speedX2 = 1.5; // Different speeds for each circle

// Variables for shapes moving along the y-axis
let y3 = 350, y4 = 350; // Initial y-coordinates for the rectangles
let speedY1 = 1.2, speedY2 = 1.8; // Different speeds for each rectangle

// Variables for a shape moving diagonally
let diagX = 150, diagY = 325; // Initial coordinates for the triangle
let diagSpeedX = 1.3, diagSpeedY = 1.3; // Speeds for diagonal movement

// Variables for the title text size oscillation
let textSizeVar = 22;   // Initial text size
let textGrowing = true; // Flag to determine if text size is increasing or decreasing

function setup() {
  // Set up canvas dimensions
  createCanvas(500, 600);
}

function draw() {
  // Background color for the canvas
  background(150, 75, 200);

  // Title text with oscillating size
  textSize(textSizeVar); // Set text size
  fill(0);               // Set text color to black
  text("How I feel about Mondays...", 110, 590); // Draw the title text

  // Change text size to create oscillation effect
  if (textGrowing) {
    textSizeVar += 0.5; // Increase text size if growing
    if (textSizeVar >= 32) textGrowing = false; // Switch to shrinking at max size
  } else {
    textSizeVar -= 0.5; // Decrease text size if shrinking
    if (textSizeVar <= 22) textGrowing = true; // Switch to growing at min size
  }

  // First moving shape: circles that move along the x-axis
  fill(200, 100, 50); // Set color for the circles
  circle(x1, y1, 100); // Draw the first circle
  circle(x2, y2, 100); // Draw the second circle
  x1 += speedX1;       // Update x position of the first circle
  x2 += speedX2;       // Update x position of the second circle

  // Reverse direction when the circles reach canvas edges
  if (x1 > width - 50 || x1 < 50) speedX1 *= -1;
  if (x2 > width - 50 || x2 < 50) speedX2 *= -1;

  // Second moving shape: rectangles that move along the y-axis
  fill(255, 255, 255); // Set color for the rectangles
  rect(80, y3, 100, 150);  // Draw the first rectangle
  rect(300, y4, 100, 150); // Draw the second rectangle
  y3 += speedY1;           // Update y position of the first rectangle
  y4 += speedY2;           // Update y position of the second rectangle

  // Reverse direction when the rectangles reach top/bottom boundaries
  if (y3 > height - 200 || y3 < 200) speedY1 *= -1;
  if (y4 > height - 200 || y4 < 200) speedY2 *= -1;

  // Third moving shape: a triangle that moves diagonally
  fill(134, 76, 2); // Set color for the triangle
  triangle(diagX, diagY, diagX + 75, diagY - 125, diagX + 130, diagY + 120); // Draw the triangle
  diagX += diagSpeedX; // Update x position of the triangle
  diagY += diagSpeedY; // Update y position of the triangle

  // Reverse direction when the triangle reaches canvas edges
  if (diagX > width - 130 || diagX < 50) diagSpeedX *= -1;
  if (diagY > height - 200 || diagY < 100) diagSpeedY *= -1;

  // Static shapes and lines for the portrait background details
  strokeWeight(2); // Set line thickness for small lines
  line(100, 7, 175, 50);   // Draw a line
  line(200, 55, 400, 5);   // Draw another line

  strokeWeight(10); // Increase line thickness for larger points and lines
  point(100, 75);   // Draw first point
  point(325, 75);   // Draw second point
  point(250, 300);  // Draw third point
  point(200, 300);  // Draw fourth point
  line(400, 400, 100, 435); // Draw a thicker line

  // Static text: Name
  fill(0);          // Set color to black for the name text
  textSize(25);     // Set text size for name
  text("Chance Salois", 150, 550); // Draw the name text
}
