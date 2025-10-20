const email = document.getElementById("email");
const form = document.getElementById("form");
const emailError = document.getElementById("email-error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
    }
    else {
        submitError();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!email.validity.valid) {
        submitError();
    }
    else {
        submitSuccess();
    }
});

function submitError() {
    console.log("Errorrrrr lawl");
    emailError.textContent = "Valid email required";
}

function submitSuccess() {
    console.log("Good work");
    document.getElementById("article__form").classList.add("hidden");
    document.getElementById("article__success-message").classList.remove("hidden");
}