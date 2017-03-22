const assert = require('chai').assert;
const hasLost = require('../lib/hasLost');
const Enemy = require('../lib/Enemy');
const Frogger = require('../lib/Frogger');

describe('This is going to collide', () => {
  it('should be a function', () => {
    assert.isFunction(hasLost);
  });

  it('should collide if frogger hits bottom of enemy', () => {
    const frogger = new Frogger(50, 130.1, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasLost(frogger, [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should collide if frogger hits top of enemy', () => {
    const frogger = new Frogger(50, 169, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasLost(frogger, [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should collide if frogger hits left of enemy', () => {
    const frogger = new Frogger(99, 150, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasLost(frogger, [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should collide if frogger hits right of enemy', () => {
    const frogger = new Frogger(31, 150, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasLost(frogger, [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should not collide if frogger is just below enemy', () => {
    const frogger = new Frogger(50, 130, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.notOk(hasLost(frogger, [enemy]));
  });

  it('should not collide if frogger is just above enemy', () => {
    const frogger = new Frogger(50, 170, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.notOk(hasLost(frogger, [enemy]));
  });

  it('should not collide if frogger is just to left of enemy', () => {
    const frogger = new Frogger(30, 150, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.notOk(hasLost(frogger, [enemy]));
  });

  it('should not collide if frogger is just to right of enemy', () => {
    const frogger = new Frogger(100, 150, 20, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.notOk(hasLost(frogger, [enemy]));
  });
});
