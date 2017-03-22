let losses = 0;
const hasCollided = (frogger, enemyArray) => {
  return enemyArray.some(function(enemy) {
    const truth = {
      righttoleft: frogger.x < enemy.x + enemy.width,
      lefttoright: frogger.x + frogger.width > enemy.x,
      toptobottom: frogger.y < enemy.y + enemy.height,
      bottomtotop: frogger.height + frogger.y > enemy.y
    };

    if (truth.righttoleft &&
        truth.lefttoright &&
        truth.toptobottom &&
        truth.bottomtotop) {
      frogger.y = 280;
      losses++
      console.log(losses)
      document.getElementById('user-message').innerHTML = 'You Lose!';
      document.getElementById('track-losses').innerHTML = 'Collisions: ' + losses;
      enemyArray.forEach(function(enemy) {
        enemy.speed > 1 ? enemy.speed-- : enemy.speed *=1;
      })
      return true;
    } else {
      return false
    }
  });
};

module.exports = hasCollided;
