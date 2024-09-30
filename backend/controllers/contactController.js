const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure to load environment variables

// Function to send confirmation email
const sendConfirmationEmail = async (name, email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Change if you are using a different email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation of Your Message',
        text: `Hi ${name},\n\nThank you for reaching out to us! Your message has been received, and we will get back to you shortly.\n\nBest regards,\nMayank Packaging Solutions`,
    };

    return transporter.sendMail(mailOptions);
};

// Controller for handling contact form submissions
const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }

    // Optional: Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    try {
        // Create a new contact message
        const contact = new Contact({ name, email, message });
        await contact.save();

        // Send confirmation email
        await sendConfirmationEmail(name, email);

        res.status(201).json({ message: 'Contact message sent successfully', contact });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

module.exports = { createContact };
