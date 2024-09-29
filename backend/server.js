const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware for parsing JSON data and handling CORS
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/contact', contactRoutes); // Contact form route

// Serve static files for frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Default route to serve frontend files
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
});

// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
