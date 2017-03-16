var hasCollided =
function (frogger, enemyArray){
  enemyArray.forEach(function(enemy){
    var truth = {
      leftandright: frogger.x < enemy.x + enemy.width,
      rightandleft: frogger.x + frogger.width > enemy.x,
      upanddown: frogger.y < enemy.y + enemy.height,
      downandup: frogger.height + frogger.y > enemy.y
    }
    if (truth.leftandright &&
      truth.rightandleft && truth.upanddown
       && truth.downandup
      ){
        console.log ('collide!')
        alert('YOU LOSE!')
        frogger.y = 280;
        return true;
      } else {
        return false;
      }
    })

  }


module.exports = hasCollided;
