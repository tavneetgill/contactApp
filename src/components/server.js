const express = require('express');
const mongoose = require('mongoose');

// Create the Express app
const app = express();

// Set up the MongoDB connection
const MONGODB_URI = 'mongodb+srv://gilltavneet:tavneet2@cluster0.1ij9jkd.mongodb.net/contactapp';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Set up routes
// ...

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


