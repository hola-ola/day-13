let x = 150;
let y = 150;
function draw() {
  console.log(`HELLO FROM DRAW`);
  clear();
  background("cyan");
  rect(x, y, 50, 150);
}
4;
function setup() {
  console.log(`HELLO FROM SETUP`);
  createCanvas(400, 400);
}

setInterval(() => {
  x -= 35;
  y += 35;
}, 500);
