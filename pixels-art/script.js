const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const pixelBoard = document.querySelector('.pixel-board');
const palette = document.querySelector('.color-palette');
const pixelAll = document.getElementsByClassName('pixel');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = getRandomColor();
color3.style.backgroundColor = getRandomColor();
color4.style.backgroundColor = getRandomColor();

function selected(div) {
  div.classList.add('selected');
}
selected(color1);

palette.addEventListener('click', function (e) {
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});

pixelBoard.addEventListener('click', function (e) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = selectedColor;
});

const clear = document.querySelector('.clear-board');

function clearPixels() {
  for (let i = 0; i < pixelAll.length; i += 1) {
    pixelAll[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearPixels);
