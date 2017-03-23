const assert = require('chai').assert;
const Game = require('../lib/Game');

describe('the game works', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const game = new Game (canvas, context);

  it('should be a function', () => {

    assert.isFunction(Game);
  });

  it('should create a new instance of Enemy', () => {

    assert.isObject(game);
  });

  it('hasWon() should run if frogger hits lilypad', () => {
    game.frogger.move(-70, -270)
    // console.log('test1', game);
    assert.isOk(game.hasWon());
  });

  it('has lost if frogger hits enemy', () => {
    game.frogger.move(80, -111)
    // console.log('test2', game);
    assert.isOk(game.hasLost());
  });
});
