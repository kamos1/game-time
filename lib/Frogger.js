const Block = require('../lib/Block');

class Frogger extends Block {
  constructor (x, y, width, height, color) {
    super (x, y, width, height, color)
  }

  move(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }
}

module.exports = Frogger;
