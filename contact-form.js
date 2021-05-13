let contactForm = document.querySelector("form");
myButton = document.getElementById("myButton");

contactForm.addEventListener("submit", handleFormSubmission);

function handleFormSubmission(event) {
    event.preventDefault();
    alert("myButton");
    window.location.href="thankyou.html"
}

