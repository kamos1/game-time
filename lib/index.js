const Frogger = require('../lib/Frogger');
const Lilypad = require('../lib/Lilypad');
const hasCollided = require('../lib/hasCollided');
const generateEnemy = require('../lib/generateEnemy');
const hasWon = require('../lib/hasWon');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
var enemyArray = enemyArray || [];
var lilyArray = [new Lilypad(70, 0, 25, 25, "#006400"), new Lilypad(210, 0, 25, 25, "#006400")];

const frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

generateEnemy(3, 150, enemyArray);

requestAnimationFrame(function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frogger.draw(context);

  enemyArray.forEach(function(enemy) {
    enemy.draw(context).move();
  });
  lilyArray.forEach(function(lilypad) {
    lilypad.draw(context);
  });

  hasCollided(frogger, enemyArray);
  hasWon(frogger, lilyArray, enemyArray);

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
