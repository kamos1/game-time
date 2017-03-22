const assert = require('chai').assert;
const Lilypad = require('../lib/Lilypad');
const Enemy = require('../lib/Enemy');
const Frogger = require('../lib/Frogger');
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

  it('has won should run if frogger hits lilypad', () => {

    game.frogger.move(-70,-270)
    console.log('test1', game);
    assert.isOk(game.hasWon());
  });

  // it('has lost if frogger hits enemy', () => {
  //
  //   game.frogger.move()
  //   console.log('test2', game);
  //   assert.isOk(game.hasLost());
  // });
});
