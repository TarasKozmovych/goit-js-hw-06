const change = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
change.addEventListener("input", inputRange);
function inputRange(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}