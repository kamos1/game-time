const generateEnemy = (quantity, spacing) => {
  let start = 0;

  for (let i = 0; i<quantity; i++) {
    const enemy1 = new Enemy(start, 150, 50, 20, "rgba(219, 63, 22, 1)", 2);

    start += spacing;
    const enemy2 = new Enemy(start, 50, 100, 20, "rgba(219, 63, 22, 1)", 1);

    enemyArray.push(enemy1, enemy2);
  }
  return enemyArray;
};
