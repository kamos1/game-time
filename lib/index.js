const Game = require('../lib/Game');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context)

game.run();

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37 && game.frogger.x > 0) {
    game.frogger.move(-10, 0);
  } else if (event.keyCode === 38 && game.frogger.y > 0) {
    game.frogger.move(0, -20);
  } else if (event.keyCode === 39 && game.frogger.x < canvas.width - 20) {
    game.frogger.move(10, 0);
  } else if (event.keyCode === 40 && game.frogger.y < canvas.height - 20) {
    game.frogger.move(0, 10);
  }
});
