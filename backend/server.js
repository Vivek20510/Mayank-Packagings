const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies
app.use(contactRoutes); // Use contact routes

mongoose.connect('mongodb://127.0.0.1:27017/mayank_packaging', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(5000, () => console.log('Server running on http://localhost:5000'));
    })
    .catch(err => console.log('MongoDB connection error:', err));
