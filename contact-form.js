let contactForm = document.querySelector("form");

contactForm.addEventListener("submit", handleFormSubmission);

function handleFormSubmission(event) {
    event.preventDefault();
    alert("Inskickat!");
    window.location.href = "thankyou.html";
}