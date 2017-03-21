class Enemy {
  constructor (x, y, width, height, color, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
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
