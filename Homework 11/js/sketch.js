// Set up the canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Player object
const player = {
  x: 50,
  y: 50,
  size: 20,
  color: 'blue',
  speed: 5,
};

// Exit object
const exit = {
  x: canvas.width - 60,
  y: canvas.height - 60,
  size: 40,
  color: 'green',
};

// Obstacles array (moving obstacles)
const obstacles = [
  { x: 100, y: 150, size: 30, color: 'red', dx: 2, dy: 2 },
  { x: 200, y: 300, size: 50, color: 'purple', dx: -3, dy: 2 },
];

// Additional non-moving obstacle
let staticObstacle = null;

// Draw the player, obstacles, exit, and message
function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function drawObstacles() {
  obstacles.forEach(obstacle => {
    ctx.fillStyle = obstacle.color;
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
  });

  // Draw static obstacle if it exists
  if (staticObstacle) {
    ctx.fillStyle = staticObstacle.color;
    ctx.fillRect(staticObstacle.x, staticObstacle.y, staticObstacle.size, staticObstacle.size);
  }
}

function drawExit() {
  ctx.fillStyle = exit.color;
  ctx.fillRect(exit.x, exit.y, exit.size, exit.size);
}

function drawMessage(message) {
  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(message, canvas.width / 2 - 100, canvas.height / 2);
}

// Update player position based on key presses
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

function movePlayer() {
  if (keys.ArrowUp && player.y > 0) player.y -= player.speed;
  if (keys.ArrowDown && player.y < canvas.height - player.size) player.y += player.speed;
  if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
  if (keys.ArrowRight && player.x < canvas.width - player.size) player.x += player.speed;
}

// Update obstacle positions and wrap around screen edges
function moveObstacles() {
  obstacles.forEach(obstacle => {
    obstacle.x += obstacle.dx;
    obstacle.y += obstacle.dy;

    // Wrap around the canvas edges
    if (obstacle.x > canvas.width) obstacle.x = 0;
    else if (obstacle.x < 0) obstacle.x = canvas.width;

    if (obstacle.y > canvas.height) obstacle.y = 0;
    else if (obstacle.y < 0) obstacle.y = canvas.height;
  });
}

// Check if player reached the exit
function checkExit() {
  if (
    player.x + player.size > exit.x &&
    player.x < exit.x + exit.size &&
    player.y + player.size > exit.y &&
    player.y < exit.y + exit.size
  ) {
    drawMessage("You won!");
    return true;
  }
  return false;
}

// Main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayer();
  drawObstacles();
  drawExit();

  movePlayer();
  moveObstacles();

  if (!checkExit()) {
    requestAnimationFrame(gameLoop);
  }
}

// Event listeners
document.addEventListener('keydown', (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

canvas.addEventListener('click', (e) => {
  if (!staticObstacle) {
    staticObstacle = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop,
      size: 40,
      color: 'orange',
    };
  }
});

// Start the game
gameLoop();
