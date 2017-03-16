require('locus')
const assert = require('chai').assert
const hasCollided = require('../lib/hasCollided')
const Enemy = require('../lib/Enemy')
const Frogger = require('../lib/Frogger')

describe('This is going to collide', () => {

  it('should be a function', () => {
    assert.isFunction(hasCollided);
  });

  it('should be a function', () => {
    assert.isFunction(Enemy);
  });

  it('should be a function', () => {
    assert.isFunction(Frogger);
  });

  it('should create a frog', () => {
    var frogger = new Frogger(50,50);

    assert.isObject(frogger);
  });

  it('should create an enemy', () => {
    var car = new Enemy();

    assert.isObject(car);
  })

  it('should collide', () => {
    var frogger = new Frogger(50,50);
    var car = new Enemy(50,50);
    // eval(locus);
    assert.equal(hasCollided(frogger, [car]),true)
  })









})
