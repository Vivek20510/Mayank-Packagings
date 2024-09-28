const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Make sure to use environment variables for sensitive data

exports.sendContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    try {
        // Save the contact message to the database
        await newContact.save();

        // Set up the transporter for nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address from environment variables
                pass: process.env.EMAIL_PASS  // Your email password from environment variables
            }
        });

        // Define email options
        const mailOptions = {
            from: email, // Sender's email
            to: process.env.RECEIVER_EMAIL, // Receiver email address from environment variables
            subject: `Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send the email using the transporter
        await transporter.sendMail(mailOptions);

        // Return a success response
        res.status(200).json({ message: 'Contact message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send contact message.' });
    }
};
