const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect(
    'mongodb://localhost:27017/team-044-product',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
    .then(() => {
      console.log('DB connection successful!');
    })
    .catch((err) => {
      console.log('an error occurred:  ', err);
    });
};

module.exports = dbConnect;
