let player;
let obstacles = [];
let exit;

// Setup function to initialize game elements
function setup() {
  createCanvas(800, 600);
  player = createPlayer();
  createObstacles();
  exit = createExit();
}

// Draw function to handle ongoing game rendering
function draw() {
  background(220);

  drawBorders();
  movePlayer();
  drawExit();
  displayWin();

  obstacles.forEach(obstacle => {
    moveObstacle(obstacle);
    displayObstacle(obstacle);
  });
  displayPlayer();
}

// Function to create the player
function createPlayer() {
  return {
    x: width / 2,
    y: height / 2,
    size: 20,
    speed: 5
  };
}

// Function to move the player with the keyboard
function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;
}

// Function to display the player
function displayPlayer() {
  fill(0, 255, 0);
  ellipse(player.x, player.y, player.size);
}

// Function to create an object at mouse press location
function mousePressed() {
  fill(100, 100, 255);
  ellipse(mouseX, mouseY, 30);
}

// Function to create multiple obstacles
function createObstacles() {
  obstacles.push(createObstacle(random(width), random(height), 30, color(255, 0, 0)));
  obstacles.push(createObstacle(random(width), random(height), 40, color(0, 0, 255)));
}

// Helper function to create a single obstacle
function createObstacle(x, y, size, col) {
  return { x, y, size, col, xSpeed: random(-2, 2), ySpeed: random(-2, 2) };
}

// Function to display an obstacle
function displayObstacle(obstacle) {
  fill(obstacle.col);
  ellipse(obstacle.x, obstacle.y, obstacle.size);
}

// Function to move obstacles randomly and wrap around screen
function moveObstacle(obstacle) {
  obstacle.x += obstacle.xSpeed;
  obstacle.y += obstacle.ySpeed;

  if (obstacle.x > width) obstacle.x = 0;
  if (obstacle.x < 0) obstacle.x = width;
  if (obstacle.y > height) obstacle.y = 0;
  if (obstacle.y < 0) obstacle.y = height;
}

// Function to draw borders around the screen
function drawBorders() {
  stroke(0);
  noFill();
  rect(0, 0, width, height);
}

// Function to create the exit
function createExit() {
  return { x: width - 50, y: height - 50, size: 30 };
}

// Function to draw the exit
function drawExit() {
  fill(255, 215, 0);
  rect(exit.x, exit.y, exit.size, exit.size);
}

// Function to display "You win" message when player reaches exit
function displayWin() {
  if (dist(player.x, player.y, exit.x + exit.size / 2, exit.y + exit.size / 2) < exit.size) {
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You win!", width / 2, height / 2);
    noLoop();
  }
}

