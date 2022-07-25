const textInput = document.querySelector("#validation-input");
const length = Number(textInput.dataset.length);
textInput.addEventListener("blur", checkValue);

function checkValue(element) {
    if (element.currentTarget.value.length === length) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
}


// В інтернеті ще на такий розв’язок натикнувся...


// document.getElementById("validation-input").onblur = function () {
//     if (this.getAttribute('data-length') > this.value.length) {
//         this.classList.remove('valid');
//         this.classList.add('invalid');
//     } else {
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//     }
// };