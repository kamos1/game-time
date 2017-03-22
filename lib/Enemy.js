const Block = require('../lib/Block');

class Enemy extends Block {
  constructor (x, y, width, height, color, speed) {
    super(x, y, width, height, color)
    this.speed = speed;
  }

  move() {
    this.x += this.speed;
    if (this.x > 300) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = 300;
    }
    return this;
  }
}

module.exports = Enemy;
