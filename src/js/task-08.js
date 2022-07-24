const form = document.querySelector('.login-form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
        event.currentTarget.email.value === "" ||
        event.currentTarget.password.value === ""
    ) {
        alert("Всі поля форми повінні бути заповненими.")
    }
    else {
        const {
            elements: { email, password },
        } = event.currentTarget;
        const userDetails = { email: email.value, Password: password.value };

        console.log(userDetails);
        event.currentTarget.reset();
    }
});