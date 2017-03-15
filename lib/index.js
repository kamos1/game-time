var Frogger = require('./Frogger.js')
var Enemy = require('./Enemy.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var enemyArray = enemyArray || [];

var frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

requestAnimationFrame(function gameLoop () {

 context.clearRect(0, 0, canvas.width, canvas.height);
 frogger.draw(context);
 enemyArray.forEach(function(enemy) {
   enemy.draw(context).move({x: Math.random(), y:0});
 });

 enemyArray.forEach(function(enemy){
   if (frogger.x < enemy.x + enemy.width &&
     frogger.x + frogger.width > enemy.x &&
     frogger.y < enemy.y + enemy.height &&
     frogger.height + frogger.y > enemy.y){
       console.log ('collide!')
       alert('YOU LOSE!')
       frogger.y = 280;
     }
 });

  if (frogger.y === 0) {
    frogger.y = 280;
    alert('YOU WIN!')
  }
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

function generateEnemy() {
    var enemie2 = new Enemy(150, 150, 50, 20, "rgba(219, 63, 22,1)");
    var enemie3 = new Enemy(250, 250, 50, 20, "rgba(219, 63, 22,1)");
    enemyArray.push(enemie2, enemie3)
  return enemyArray;
}
generateEnemy()
