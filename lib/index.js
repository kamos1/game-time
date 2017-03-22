const Frogger = require('../lib/Frogger');
const hasCollided = require('../lib/hasCollided');
const generateEnemy = require('../lib/generateEnemy');
const hasWon = require('../lib/hasWon');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
var enemyArray = enemyArray || [];

const frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

generateEnemy(3, 150, enemyArray);

requestAnimationFrame(function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frogger.draw(context);

  enemyArray.forEach(function(enemy) {
    enemy.draw(context).move();
  });

  hasCollided(frogger, enemyArray);
  hasWon(frogger, enemyArray);

  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37 && frogger.x > 0) {
    frogger.move(-10, 0);
  } else if (event.keyCode === 38 && frogger.y > 0) {
    frogger.move(0, -20);
  } else if (event.keyCode === 39 && frogger.x < canvas.width - 20) {
    frogger.move(10, 0);
  } else if (event.keyCode === 40 && frogger.y < canvas.height - 20) {
    frogger.move(0, 10);
  }
});
