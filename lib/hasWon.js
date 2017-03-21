const hasWon = (frogger, enemyArray) => {
  if (frogger.y === 0) {
    frogger.y = 280;
    document.getElementById('user-message').innerHTML = 'You Win!';
    enemyArray.forEach(function(enemy) {
      enemy.speed++;
    })
  }
};

module.exports = hasWon;
