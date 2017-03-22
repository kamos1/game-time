const assert = require('chai').assert;
// const hasWon = require('../lib/hasWon');
const Lilypad = require('../lib/Lilypad');
const Enemy = require('../lib/Enemy');
const Frogger = require('../lib/Frogger');

describe('The frogger and lilypad are going to collide', () => {
  it('should be a function', () => {
    assert.isFunction(hasWon);
  });

  it('should collide if frogger hits bottom of lilypad', () => {
    const frogger = new Frogger(50, 130.1, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasWon(frogger, [lilypad], [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should collide if frogger hits top of lilypad', () => {
    const frogger = new Frogger(50, 169, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasWon(frogger, [lilypad], [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should collide if frogger hits left of lilypad', () => {
    const frogger = new Frogger(99, 150, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasWon(frogger, [lilypad], [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should collide if frogger hits right of lilypad', () => {
    const frogger = new Frogger(31, 150, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);
    const enemy = new Enemy(50, 150, 50, 20);

    assert.ok(hasWon(frogger, [lilypad], [enemy]));
    assert.equal(frogger.y, 280);
  });

  it('should not collide if frogger is just below lilypad', () => {
    const frogger = new Frogger(50, 130, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);

    assert.notOk(hasWon(frogger, [lilypad]));
  });

  it('should not collide if frogger is just above lilypad', () => {
    const frogger = new Frogger(50, 170, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);

    assert.notOk(hasWon(frogger, [lilypad]));
  });

  it('should not collide if frogger is just to left of lilypad', () => {
    const frogger = new Frogger(30, 150, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);

    assert.notOk(hasWon(frogger, [lilypad]));
  });

  it('should not collide if frogger is just to right of lilypad', () => {
    const frogger = new Frogger(100, 150, 20, 20);
    const lilypad = new Lilypad(50, 150, 50, 20);

    assert.notOk(hasWon(frogger, [lilypad]));
  });
});
