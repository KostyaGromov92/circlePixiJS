let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

let lines = [];
let linesNumber = 4;

let vertices = 100;
let color = '#ff0429';

for (let i = 0; i < vertices; i++) {
  let point = {
    x: Math.cos(i / vertices * Math.PI * 2),
    y: Math.sin(i / vertices * Math.PI * 2)
  };
}

document.body.appendChild(canvas);

let width, height, halfX, halfY;

sizing();

function sizing() {
  width = window.innerWidth;
  height = window.innerHeight;

  halfX = width / 2;
  halfY = height / 2;

  canvas.height = height;
  canvas.width = width;
}


function update() {

}

function render() {

}

function raf() {

  update();
  render();

  window.requestAnimationFrame(raf);
}

raf();
