const assert = require('chai').assert;
const generateEnemy = require('../lib/generateEnemy');


describe('The generateEnemy will create enemies', () => {
  it('should be a function', () => {
    assert.isFunction(generateEnemy);
  });

  it('should create array of enemies with length 2', () => {
    let enemyArray = [];

    generateEnemy(1, 150, enemyArray);
    assert.equal(enemyArray.length, 2);
  });

  it('should create enemy with a x value of 0', () => {
    let enemyArray = [];

    generateEnemy(1, 150, enemyArray);
    assert.equal(enemyArray[0].x, 0);
  });

  it('should create enemy with a y value of 150', () => {
    let enemyArray = [];

    generateEnemy(1, 150, enemyArray);
    assert.equal(enemyArray[0].y, 150);
  });

  it('should create enemy with width of 75', () => {
    let enemyArray = [];

    generateEnemy(1, 150, enemyArray);
    assert.equal(enemyArray[0].width, 75);
  });

  it('should create enemy with height of 20', () => {
    let enemyArray = [];

    generateEnemy(1, 150, enemyArray);
    assert.equal(enemyArray[0].height, 20);
  });

  it('should create enemy with color red', () => {
    let enemyArray = [];

    generateEnemy(1, 150, enemyArray);
    assert.equal(enemyArray[0].color, "rgba(219, 63, 22, 1)");
  });
})
