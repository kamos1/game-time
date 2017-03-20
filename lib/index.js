// require(locus);
var Frogger = require('./Frogger.js')
var Enemy = require('./Enemy.js')
var hasCollided = require('./hasCollided')
// debugger
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var enemyArray = enemyArray || [];
var frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

generateEnemy(3, 150)

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

document.addEventListener('keydown', function(event){
  if (event.keyCode === 37 && frogger.x > 0) {
    frogger.move(-10,0);
 } else if (event.keyCode === 38 && frogger.y > 0) {
    frogger.move(0,-20);
  } else if (event.keyCode === 39 && frogger.x < canvas.width - 20) {
    frogger.move(10,0);
  } else if (event.keyCode === 40 && frogger.y < canvas.height - 20) {
    frogger.move(0,10)
  }
});

function generateEnemy(quantity, spacing) {
  var start = 0;
  for (var i = 0; i<quantity; i++) {
    var enemy1 = new Enemy(start, 150, 50, 20, "rgba(219, 63, 22,1)", 2);
    start += spacing;
    // var enemy2 = new Enemy(start, 50, 100, 20, "rgba(219, 63, 22,1)", 1);
    enemyArray.push(enemy1)
  }
  return enemyArray;
}

// function hasCollided (frogger){
//   enemyArray.forEach(function(enemy){
//     if (frogger.x < enemy.x + enemy.width &&
//       frogger.x + frogger.width > enemy.x &&
//       frogger.y < enemy.y + enemy.height &&
//       frogger.height + frogger.y > enemy.y){
//         console.log ('collide!')
//         alert('YOU LOSE!')
//         frogger.y = 280;
//       }
//     })
//   }

function hasWon (frogger, enemyArray){
  if (frogger.y === 0) {
    frogger.y = 280;
    // alert('YOU WIN!')
    enemyArray.forEach(function(enemy){
      enemy.speed = 8;
    })
  }


}
