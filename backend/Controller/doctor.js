const Doctor = require('../models/doctor');

exports.verify = (req, res, next) => {
  const doctor = new Doctor({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    credentialUrl: req.body.credentialUrl,
    mcdnPortfolioNumber: req.body.mcdnPortfolioNumber,
    location: req.body.location
  });

  doctor
    .save()
    .then(() => {
      res.status(201).json({
        doctor
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error
      });
    });
};
