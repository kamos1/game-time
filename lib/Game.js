const Frogger = require('../lib/Frogger');
const Lilypad = require('../lib/Lilypad');
const generateEnemy = require('../lib/generateEnemy');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas
    this.context = context;
    this.lives = 3;
    this.losses = 0;
    this.wins = 0
    this.enemyArray = [];
    this.lilyArray = [new Lilypad(70, 0, 25, 25, "#006400"), new Lilypad(210, 0, 25, 25, "#006400")];
    this.frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

    this.hasWon = this.hasWon.bind(this)
    this.hasLost = this.hasLost.bind(this)
    this.gameLoop = this.gameLoop.bind(this);

    generateEnemy(3, 150, this.enemyArray);
  }

  hasLost () {
    let frogger = this.frogger;

    return this.enemyArray.some((enemy) => {
      const truth = {
        righttoleft: frogger.x < enemy.x + enemy.width,
        lefttoright: frogger.x + frogger.width > enemy.x,
        toptobottom: frogger.y < enemy.y + enemy.height,
        bottomtotop: frogger.height + frogger.y > enemy.y
      };

      while (this.lives > 0) {
        if (truth.righttoleft &&
            truth.lefttoright &&
            truth.toptobottom &&
            truth.bottomtotop) {
          frogger.y = 280;
          this.lives--;
          this.losses++;
          document.getElementById('user-message').innerHTML = 'You Lose!';
          document.getElementById('track-losses').innerHTML = 'Collisions: ' + this.losses;
          this.enemyArray.forEach((enemy) => {
            enemy.speed > 1 ? enemy.speed-- : enemy.speed *=1;
          })
          return true;
        } else {
          return false
        }
      }
      // tell use game is over
    });
  }


  hasWon () {
    return this.lilyArray.some((lilypad) => {
      // let frogger = this.frogger;
      const truth = {
        righttoleft: this.frogger.x < lilypad.x + lilypad.width,
        lefttoright: this.frogger.x + this.frogger.width > lilypad.x,
        toptobottom: this.frogger.y < lilypad.y + lilypad.height,
        bottomtotop: this.frogger.height + this.frogger.y > lilypad.y
      };

      if (truth.righttoleft &&
          truth.lefttoright &&
          truth.toptobottom &&
          truth.bottomtotop) {
        this.frogger.y = 280;
        document.getElementById('user-message').innerHTML = 'You Win!';
        this.wins++
        document.getElementById('track-wins').innerHTML = 'Wins: ' + this.wins;
        this.enemyArray.forEach((enemy) => {
          enemy.speed++;
        })
        return true
      } else if (this.frogger.y === 0) {
        this.frogger.y = 280;
      } else {
        return false;
      }
    });
  }

  gameLoop() {
    let frogger = this.frogger;
    let enemyArray = this.enemyArray;
    let lilyArray = this.lilyArray;
    let hasWon = this.hasWon;
    let hasLost = this.hasLost;
    var context = this.context;
    let canvas = this.canvas;

    context.clearRect(0, 0, canvas.width, canvas.height);
    frogger.draw(context);

    enemyArray.forEach(function(enemy) {
      enemy.draw(context).move();
    });
    lilyArray.forEach(function(lilypad) {
      lilypad.draw(context);
    });

    hasLost();
    hasWon();
    requestAnimationFrame(this.gameLoop);
  }

  run() {
    requestAnimationFrame(this.gameLoop);
  }
}



module.exports = Game;
