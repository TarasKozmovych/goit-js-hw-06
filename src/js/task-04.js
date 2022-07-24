const wrapButton = {
    btnIncr: document.querySelector("[data-action='increment']"),
    btnDecr: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    wrapper: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
    counterValue += 1;

    wrapButton.span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    wrapButton.span.textContent = counterValue;
};
wrapButton.btnIncr.addEventListener('click', increment);
wrapButton.btnDecr.addEventListener('click', decrement);