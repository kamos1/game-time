var hasCollided =
function (frogger, enemyArray){
  enemyArray.forEach(function(enemy){
    var truth = {
      righttoleft: frogger.x < enemy.x + enemy.width,
      lefttoright: frogger.x + frogger.width > enemy.x,
      toptobottom: frogger.y < enemy.y + enemy.height,
      bottomtotop: frogger.height + frogger.y > enemy.y
    }
    
    if (truth.righttoleft &&
      truth.lefttoright && truth.toptobottom
       && truth.bottomtotop
      ){
        alert('YOU LOSE!')
        frogger.y = 280;
        console.log ('collide!')
        return true;
      } else {
        return false;
      }
    })

  }


module.exports = hasCollided;