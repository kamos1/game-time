const assert = require('chai').assert;
const Block = require('../lib/Block');

describe('This will test the Block class functionality', () => {
  //  const block1 = new Block({})

  it('should be a function', () => {
    assert.isFunction(Block);
  });

  it('should create a new instance of Block', () => {
    let block1 = new Block();

    assert.isObject(block1);
  });

  it('should have value 1 for x', () => {
    let block1 = new Block(1);

    assert.equal(block1.x, 1);
  });
  it('should have value 1 for y', () => {
    let block1 = new Block(1, 1);

    assert.equal(block1.y, 1);
  });
  it('should have value 10 for width', () => {
    let block1 = new Block(1, 1, 10);

    assert.equal(block1.width, 10);
  });
  it('should have value 10 for height', () => {
    let block1 = new Block(1, 1, 10, 10);

    assert.equal(block1.height, 10);
  });
  it('should have value green for color', () => {
    let block1 = new Block(1, 1, 10, 10, 'green');

    assert.equal(block1.color, 'green');
  });
});
