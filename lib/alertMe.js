// Block.js
function Block (x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Block.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

 Block.prototype.move = function (direction) {
   this.x += direction.x;

   return this;
};


module.exports = Block;
