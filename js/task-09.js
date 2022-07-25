function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

const changeBodyColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};
btn.addEventListener("click", changeBodyColor);