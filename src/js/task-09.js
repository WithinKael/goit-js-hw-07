const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const newColor = getRandomHexColor();
  
  spanEl.textContent = `${newColor}`;
  body.style.backgroundColor = `${newColor}`;
  buttonEl.style.background = "linear-gradient(to right, purple, white)";
}

buttonEl.addEventListener('click', changeColor);

