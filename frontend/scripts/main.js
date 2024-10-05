require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection details from .env file
const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = 'mayank-packagings'; // Your actual database name
const COLLECTION_NAME = 'contacts'; // Update this to just the collection name without database name

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

// Main function to run the script
(async () => {
  try {
    const data = await fetchDataFromMongoDB();
    console.log('Fetched Data:', data); // Log fetched data to the console
  } catch (error) {
    console.error('Error:', error);
  }
})();
