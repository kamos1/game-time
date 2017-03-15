function Frogger(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Frogger.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height)
  return this;
};

Frogger.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
 return this;
}



module.exports = Frogger;
