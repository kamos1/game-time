let wins = 0;
const hasWon = (frogger, enemyArray) => {
  if (frogger.y === 0) {
    frogger.y = 280;
    document.getElementById('user-message').innerHTML = 'You Win!';
    wins++
    console.log(wins)
    document.getElementById('track-wins').innerHTML = 'Wins: ' + wins;
    enemyArray.forEach(function(enemy) {
      enemy.speed++;
    })
    return true
  } else {
    return false
  }

};



module.exports = hasWon;
