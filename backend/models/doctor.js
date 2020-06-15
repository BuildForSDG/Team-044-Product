const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const doctorSchema = mongoose.Schema({
  email: { type: String, require: true, unique: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  credentialUrl: { type: String, require: true },
  mcdnPortfolioNumber: { type: String, require: true },
  location: { type: String, require: true }
});

doctorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Doctor', doctorSchema);
