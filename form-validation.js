const email = document.getElementById("email");
const form = document.getElementById("form");
const emailError = document.getElementById("email-error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        email.classList.remove("invalid");
    }
    else if(!email.validity.valid || !email.value) {
        email.classList.add("invalid");
        submitError();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!email.validity.valid || !email.value) {
        submitError();
    }
    else {
        submitSuccess();
    }
});

function submitError() {
    emailError.textContent = "Valid email required";
    email.classList.add("invalid");
}

function submitSuccess() {
    email.classList.remove("invalid");
    document.getElementById("captured-email").textContent = email.value;
    document.getElementById("article__form").classList.add("hidden");
    document.getElementById("article__success-message").classList.remove("hidden");
}