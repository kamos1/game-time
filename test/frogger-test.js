const assert = require('chai').assert;
const Frogger = require('../lib/Frogger');

describe('This will test the Frogger class functionality', () => {
  it('should be a function', () => {
    assert.isFunction(Frogger);
  });

  it('should create a new instance of Frogger', () => {
    let frogger = new Frogger();

    assert.isObject(frogger);
  });

  it('should move frogger up to 270 ', () => {
    let frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

    frogger.move(0, -10);
    assert.equal(frogger.y, 270);
  });

  it('should move frogger down to 280 ', () => {
    let frogger = new Frogger(140, 270, 20, 20, "rgba(0, 255, 0 ,1)");

    frogger.move(0, 10);
    assert.equal(frogger.y, 280);
  });

  it('should move frogger left to 130 ', () => {
    let frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

    frogger.move(-10, 0);
    assert.equal(frogger.x, 130);
  });

  it('should move frogger up to 150 ', () => {
    let frogger = new Frogger(140, 280, 20, 20, "rgba(0, 255, 0 ,1)");

    frogger.move(10, 0);
    assert.equal(frogger.x, 150);
  });
});
