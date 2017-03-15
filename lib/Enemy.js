function Enemy(x, y, width, height, color, direction) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.direction = direction;
}

Enemy.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height)
  return this;
};

Enemy.prototype.move = function (direction) {
  this.x += direction.x;
  this.y += direction.y
  if (this.x > 300){
    this.x = 0;
  }
  return this;
};
module.exports = Enemy;

// var Enemy = function(x,y) {
//     Sprite.call(this, x,y);
//     // The image/sprite for our enemies
//     this.sprite = 'images/enemy-bug.png';
//     // Randomly generated speed for the enemy
//     this.speed = Math.floor((Math.random() * 300) + 75);
// };
// Enemy.prototype = Object.create(Sprite.prototype);
// Enemy.constructor = Enemy;
// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // speed multiplied by dt parameter so game runs smoothly on all computers
//     this.x += (this.speed * dt);
//     if (this.x > 500) {
//         this.x = 0;
//         this.speed = Math.floor((Math.random() * 175) + 50);
//     }
// };
// Enemy.generateEnemies = function() {
//     var enemies = [];
//     enemies[0] = new Enemy(((Math.random() * 275) + 25), 140);
//     enemies[1] = new Enemy(((Math.random() * 275) + 25), 60);
//     enemies[2] = new Enemy(((Math.random() * 275) + 25), 225);
//     return enemies;
// };
