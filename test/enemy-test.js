const assert = require('chai').assert;
const Enemy = require('../lib/Enemy');

describe('This will test the Enemy class functionality', () => {
  it('should be a function', () => {
    assert.isFunction(Enemy);
  });

  it('should create a new instance of Enemy', () => {
    let enemy1 = new Enemy();

    assert.isObject(enemy1);
  });

  it('should change enemy x value to 160', () => {
    let enemy1 = new Enemy(150, 50, 10, 10, 'green', 10);

    enemy1.move();
    assert.equal(enemy1.x, 160);
  });

  it('should change enemy x value to 0', () => {
    let enemy1 = new Enemy(290, 50, 10, 10, 'green', 11);

    enemy1.move();
    assert.equal(enemy1.x, 0);
  });

  it('should draw an enemy', () => {
    let enemy1 = new Enemy(290, 50, 10, 10, 'green', 11);
    
    enemy1.draw();
  });
});
