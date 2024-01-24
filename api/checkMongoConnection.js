const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Extract MongoDB connection string from the environment variables
const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
  console.error('MongoDB connection string is not defined in the environment variables.');
  process.exit(1);
}

async function checkMongoConnection() {
  try {
    // Connect to MongoDB using the provided connection string
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  } finally {
    // Close the connection
    mongoose.disconnect();
  }
}

// Call the function to check the connection
checkMongoConnection();
