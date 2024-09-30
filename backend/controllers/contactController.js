const Contact = require('../models/Contact');

// Controller for handling contact form submissions
const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }

    try {
        // Create a new contact message and save it to the database
        const contact = new Contact({ name, email, message });
        await contact.save();

        // Return success response
        res.status(201).json({ message: 'Contact message sent successfully', contact });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

module.exports = { createContact };
