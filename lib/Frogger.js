class Frogger  {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }
}

module.exports = Frogger;
