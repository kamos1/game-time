const Enemy = require('../lib/Enemy');

const generateEnemy = (quantity, spacing, enemyArray) => {
  let start = 0;

  for (let i = 0; i<quantity; i++) {
    const enemy1 = new Enemy(start, 150, 75, 20, "rgba(219, 63, 22, 1)", 2);

    start += spacing;
    const enemy2 = new Enemy(start, 50, 50, 20, "rgba(219, 63, 22, 1)", 1);

    enemyArray.push(enemy1, enemy2);
  }
  return enemyArray;
};

module.exports = generateEnemy;
