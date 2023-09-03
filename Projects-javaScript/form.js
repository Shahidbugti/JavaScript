const button = document.querySelector(".submit");
const form = document.querySelector(".form"); // Selecting the form with the class "form"

button.addEventListener("click", function () {
    form.classList.toggle("style"); // Adding the "style" class to the form when the button is clicked
});
