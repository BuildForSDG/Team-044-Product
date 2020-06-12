const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const user = require('../models/user');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      service: req.body.service,
      password: hash
    });
    const token = jwt.sign({ userId: user._id }, 'RANDOM_SECRET_KEY', {
      expiresIn: '24h'
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          token,
          user
        });
      })
      .catch(error => {
        res.status(500).json({
          error: error
        });
      });
  });
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect Password!')
            });
          }
          token = jwt.sign({ userId: user._id }, 'RANDOM_SECRET_KEY', {
            expiresIn: '24h'
          });
          res.status(201).json({
            token,
            user
          });
        })
        .catch(error => {
          res.status(500).json({
            error: error
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};

exports.edit = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.service = req.body.service;

      user.save().then(() => {
        res
          .status(202)
          .json({
            user
          })
          .end();
      });
    } else {
      res.status(403).redirect('/notfound');
    }
  });
};
exports.logout = (req, res, next) => {
  if (req.user) {
    res.session.destroy().then(() => {
      res.redirect('/home');
    });
  }
};
