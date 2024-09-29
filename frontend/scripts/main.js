document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        // Send a POST request to your backend
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Get the response
        const result = await response.json();
        
        // Display success message
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = result.message; // Display the message from the server
        responseMessage.style.color = 'green'; // Change color to green for success

        // Clear the form fields
        document.getElementById('contact-form').reset();

    } catch (error) {
        console.error('Error:', error);
        
        // Display error message
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = 'Failed to send message. Please try again later.';
        responseMessage.style.color = 'red'; // Change color to red for error
    }
});
