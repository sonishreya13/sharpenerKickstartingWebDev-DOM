
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Store values in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
}
document.getElementById('my-form').addEventListener('submit', handleSubmit);

// On page load, populate form fields with stored data (if available)
window.onload = function() {
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');

    if (storedName) {
        document.getElementById('name').value = storedName;
    }

    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
    }
};