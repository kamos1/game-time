var Frogger = require('./Frogger.js')
var Enemy = require('./Enemy.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");
var car = new Enemy(40, 250, 100, 20, "rgba(219, 63, 22,1)")

requestAnimationFrame(function gameLoop () {
 context.clearRect(0, 0, canvas.width, canvas.height);

 frogger.draw(context);
 car.draw(context);
 car.move({x: 4, y:0});

 requestAnimationFrame(gameLoop);
});


document.addEventListener('keydown', function(event){
  if (event.keyCode === 37 && frogger.x > 0) {
    frogger.move(-10,0);
 } else if (event.keyCode === 38 && frogger.y > 0) {
    frogger.move(0,-10);
  } else if (event.keyCode === 39 && frogger.x < canvas.width - 20) {
    frogger.move(10,0);
  } else if (event.keyCode === 40 && frogger.y < canvas.height - 20) {
    frogger.move(0,10)
  }
});
