const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const app = express();

mongoose
  .connect(
    //mongodb+srv://rasheed:APFwdlKB5DC8sqBB@cluster0-kdnyz.mongodb.net/test?retryWrites=true&w=majority
    'mongodb+srv://rasheed:APFwdlKB5DC8sqBB@cluster0-kdnyz.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Successfully connected to mongodb Atlas');
  })
  .catch((error) => {
    console.log('Unable to connect ask why!');
    console.error(error);
  });

app.use(bodyParser.json());

app.use('/auth', userRoutes);

module.exports = app;
