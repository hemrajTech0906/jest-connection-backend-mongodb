// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3006;
//const MONGODB_URI = 'your-mongodb-connection-string';
const MONGODB_URI='mongodb://localhost:27017/Technostacks'

app.use(bodyParser.json());

mongoose.connect(MONGODB_URI, { })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes
