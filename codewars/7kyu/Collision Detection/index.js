function collision(x1, y1, radius1, x2, y2, radius2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= radius1 + radius2;
}



    console.log(collision(1, 1, 1, 1.1, 1.1, 0.1)); // true
    console.log(collision(-1, 1, 10, -10.1, 1.1, 1)); // true
    console.log(collision(-5, 5, 5.0001, 5, -5, 5*Math.sqrt(5))); // true

    console.log(collision(1, 1, 0.01, 1, 1.1, 0.01)); // false
    console.log(collision(-1, 1, 6, -10.1, 1.1, 1)); // false
    console.log(collision(-5, 5, 5.0001, 5, -5, 4*Math.sqrt(5))); // false
