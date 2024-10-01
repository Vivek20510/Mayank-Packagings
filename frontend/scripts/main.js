require('dotenv').config();
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');

// MongoDB connection details from .env file
const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = 'mayank-packagings'; // Your actual database name
const COLLECTION_NAME = 'mayank-packagings.contacts'; // Your actual collection name

// Email credentials from .env file
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;

// Function to fetch data from MongoDB
async function fetchDataFromMongoDB() {
  try {
    const client = await MongoClient.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Fetch all data from the collection
    const data = await collection.find({}).toArray();
    await client.close();
    return data;
  } catch (error) {
    console.error('Failed to fetch data from MongoDB:', error);
    throw error;
  }
}

// Function to send email
async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // Prepare email content
  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_RECEIVER,
    subject: 'MongoDB Data Extraction',
    text: `Here is the extracted data:\n\n${JSON.stringify(data, null, 2)}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// Main function to run the script
(async () => {
  try {
    const data = await fetchDataFromMongoDB();
    await sendEmail(data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
