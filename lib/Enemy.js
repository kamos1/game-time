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
  return this;
};
module.exports = Enemy;
