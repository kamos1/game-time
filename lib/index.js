const Frogger = require('./Frogger.js');
const Enemy = require('./Enemy.js');
const hasCollided = require('./hasCollided');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
var enemyArray = enemyArray || [];
const frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");



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

var generateEnemy = (quantity, spacing) => {
  let start = 0;

  for (let i = 0; i<quantity; i++) {
    const enemy1 = new Enemy(start, 150, 50, 20, "rgba(219, 63, 22, 1)", 2);

    start += spacing;
    const enemy2 = new Enemy(start, 50, 80, 20, "rgba(219, 63, 22, 1)", 1);

    enemyArray.push(enemy1, enemy2);
  }
  return enemyArray;
};

generateEnemy(3, 150);

const hasWon = (frogger, enemyArray) => {
  if (frogger.y === 0) {
    frogger.y = 280;
    document.getElementById('user-message').innerHTML = 'You Win!';
    enemyArray.forEach(function(enemy) {
      enemy.speed++;
    })
  } 
};
