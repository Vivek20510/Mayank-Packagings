// JavaScript for form handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple client-side validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Create an object to hold the form data
    const formData = { name, email, message };

    // Send data to the backend server using the correct API endpoint
    fetch('https://mayank-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("response-message").textContent = "Your message has been sent successfully!";
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("response-message").textContent = "There was an error sending your message. Please try again later.";
    });
});
