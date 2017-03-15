var Frogger = require('./Frogger.js')
var Enemy = require('./Enemy.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");
var car1 = new Enemy(40, 250, 100, 20, "rgba(219, 63, 22,1)")
var car2 = new Enemy(240, 250, 50, 20, "rgba(219, 63, 22,1)")

requestAnimationFrame(function gameLoop () {
 context.clearRect(0, 0, canvas.width, canvas.height);

 frogger.draw(context);
 car1.draw(context);
 car1.move({x: 2, y:0});
 car2.draw(context)
 car2.move({x: 2, y:0});
 if (frogger.x < car2.x + car2.width &&
   frogger.x + frogger.width > car2.x &&
   frogger.y < car2.y + car2.height &&
   frogger.height + frogger.y > car2.y){
     console.log ('collide!')
     frogger.y = 280;
     car1.x = 40;
     car2.x = 240;
   }

  if (frogger.y === 0) {
    frogger.y = 280;
    car1.x = 40;
    car2.x = 240;
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
