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

  it('should have attribute of canvas', () => {

    assert.equal(game.canvas, canvas);
  });

  it('should have attribute of context', () => {

    assert.equal(game.context, context);
  });

  it('should have attribute of lives with default value of 3', () => {

    assert.equal(game.lives, 3);
  });

  it('should have attribute of losses with default value of 0', () => {

    assert.equal(game.losses, 0);
  });

  it('should have attribute of wins with default value of 0', () => {

    assert.equal(game.wins, 0);
  });

  it('should have attribute of enemyArray', () => {

    assert.equal(game.enemyArray.length, 6);
  });

  it('should have attribute of lilyArray that has a length of 2', () => {

    assert.equal(game.lilyArray.length, 2)
  });


  it('hasWon() should run if frogger hits bottom of lilypad', () => {
    game.frogger.y = 24;
    game.frogger.x = 70;

    assert.isOk(game.hasWon());
  });

  it('hasWon() should not run if frogger is just below bottom of lilypad', () => {
    game.frogger.y = 25;
    game.frogger.x = 70;

    assert.isNotOk(game.hasWon());
  });

  it('hasWon() should run if frogger hits left of lilypad', () => {
    game.frogger.y = 24;
    game.frogger.x = 94;

    assert.isOk(game.hasWon());
  });

  it('hasWon() should not run if frogger is just left of lilypad', () => {
    game.frogger.y = 24;
    game.frogger.x = 95;

    assert.isNotOk(game.hasWon());
  });

  it('hasWon() should run if frogger hits right of lilypad', () => {
    game.frogger.y = 24;
    game.frogger.x = 51;

    assert.isOk(game.hasWon());
  });

  it('hasWon() should not run if frogger is just right of lilypad', () => {
    game.frogger.y = 24;
    game.frogger.x = 50;

    assert.isNotOk(game.hasWon());
  });

  it('has lost if frogger hits bottom of enemy', () => {
    game.frogger.y = 131;
    game.frogger.x = 0;

    assert.isOk(game.hasLost());
  });

  it('has not lost if frogger is just below bottom of enemy', () => {
    game.frogger.y = 130;
    game.frogger.x = 0;

    assert.isNotOk(game.hasLost());
  });

  it('has lost if frogger hits top of enemy', () => {
    game.frogger.y = 169;
    game.frogger.x = 0;

    assert.isOk(game.hasLost());
  });

  it('has not lost if frogger is just above of enemy', () => {
    game.frogger.y = 170;
    game.frogger.x = 0;

    assert.isNotOk(game.hasLost());
  });

  it('has lost if frogger hits left side of enemy', () => {
    game.frogger.y = 150;
    game.frogger.x = 74;

    assert.isOk(game.hasLost());
  });

  it('has lost if frogger is just left of enemy', () => {
    game.frogger.y = 150;
    game.frogger.x = 75;

    assert.isNotOk(game.hasLost());
  });
});
