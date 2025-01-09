const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://q767182288:123456yn@cluster0.3m8l5.mongodb.net/bloglist?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
