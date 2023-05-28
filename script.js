var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('randomBtn');

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background +';' ;
}

function getRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function generateRandomColors() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomBtn.addEventListener('click', generateRandomColors);