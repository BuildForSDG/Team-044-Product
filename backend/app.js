const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const paymentRoutes = require('./routes/paystack');
const productRoutes = require('./routes/productRoute');
const doctorRoutes = require('./routes/doctor');
const app = express();
const cors = require('cors');

mongoose
  .connect(
    //mongodb+srv://rasheed:APFwdlKB5DC8sqBB@cluster0-kdnyz.mongodb.net/test?retryWrites=true&w=majority
    'mongodb://localhost:27017/team-044-product',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Successfully connected to mongodb Atlas');
  })
  .catch((error) => {
    console.log('Unable to connect ask why!');
    console.error(error);
  });
app.use(cors());

app.use(bodyParser.json());

app.use('/auth', userRoutes);
app.use('/api', paymentRoutes);
app.use('/api', productRoutes);
app.use('/api', doctorRoutes);

module.exports = app;
