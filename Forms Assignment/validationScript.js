// JavaScript code for form validation
// Prevent form from submitting

document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    // Retrieve the input field value
    let inputValue = document.querySelector("input").value;

    // Regular expression pattern for alphanumeric input
    let pattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (pattern.test(inputValue)) {

        // Valid input: display confirmation and submit the form
        alert("Form submitted successfully.");

    } else {

        // Invalid input: display error message
        alert("Error: Input must be alphanumeric only.");
    }

});