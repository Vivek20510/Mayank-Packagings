const express = require('express');
const { createContact } = require('../controllers/contactController');
const router = express.Router();

// Route for submitting contact form data
router.post('/', createContact);

module.exports = router;
