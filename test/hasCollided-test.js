const assert = require('chai').assert;
const hasCollided = require('../lib/hasCollided');
const Enemy = require('../lib/Enemy');
const Frogger = require('../lib/Frogger');

describe('This is going to collide', () => {
  it('should be a function', () => {
    assert.isFunction(hasCollided);
  });

  it('should collide', () => {
    const frogger = new Frogger(50, 50, 10, 10);
    const enemy = new Enemy(50, 50, 10, 10);

    assert.ok(hasCollided(frogger, [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should not collide', () => {
    const frogger = new Frogger(150, 50, 10, 10);
    const enemy = new Enemy(50, 50, 10, 10);
    
    assert.notOk(hasCollided(frogger, [enemy]));
    assert.equal(frogger.y, 50);
  });
});
