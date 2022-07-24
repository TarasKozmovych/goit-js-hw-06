const element = {
    textInput: document.querySelector("#name-input"),
    output: document.querySelector("#name-output")
};
element.textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        element.output.textContent = "Anonymous"
    } else {
        element.output.textContent = event.currentTarget.value;
    }
});