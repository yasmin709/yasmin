let cor;
let ph;
let pv;

function setup() {
  createCanvas(400, 400);
  background(220);
  cor = color(random(0, 255), random(0, 255), random(0, 200));
  ph = 200;
  pv = 200;
}

function draw() {
  fill(cor);
  circle(ph, pv, 100);

  if (mouseX < ph) {
    ph = ph - 1;
  }
  if (mouseX > ph) {
    ph = ph + 1;
  }
  if (mouseY < pv) {
    pv = pv - 1;
  }
  if (mouseY > pv) {
    pv = pv +1;
  }
}
