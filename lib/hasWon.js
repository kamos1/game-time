let wins = 0;
const hasWon = (frogger, lilyArray, enemyArray) => {
  return lilyArray.some(function(lilypad) {
    const truth = {
      righttoleft: frogger.x < lilypad.x + lilypad.width,
      lefttoright: frogger.x + frogger.width > lilypad.x,
      toptobottom: frogger.y < lilypad.y + lilypad.height,
      bottomtotop: frogger.height + frogger.y > lilypad.y
    };

    if (truth.righttoleft &&
        truth.lefttoright &&
        truth.toptobottom &&
        truth.bottomtotop) {
      frogger.y = 280;
      // document.getElementById('user-message').innerHTML = 'You Win!';
      wins++
      console.log(wins)
      // document.getElementById('track-wins').innerHTML = 'Wins: ' + wins;
      enemyArray.forEach(function(enemy) {
        enemy.speed++;
      })
      return true
    } else if (frogger.y === 0){
      frogger.y = 280;
    } else {
      return false;
    }
  });
};



module.exports = hasWon;
