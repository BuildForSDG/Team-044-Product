/* eslint-disable consistent-return */
const express = require('express');

const router = express.Router();
const User = require('../models/user');
const ChatList = require('../models/chatList');


router.get('/', (req, res) => {
  res.send('Team-044-Backend');
});


router.get('/view', (req, res) => {
  User.find({}, (err, allUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(allUsers);
    }
  });
});

router.post('/register', (req, res) => {
  const { name } = req.body;
  const newUser = { name };
  User.create(newUser, (err, addUser) => {
    if (err) {
      console.log(err);
    } else {
      console.log(addUser);
      res.json({ name: addUser.name, id: addUser.id });
    }
  });
});

router.post('/chatlist', (req, res) => {
  const { chatlist } = req.body;
  const newUser = { chatlist };
  ChatList.create(newUser, (err, addUser) => {
    if (err) {
      console.log(err);
    } else {
      console.log(addUser);
      res.json({ chatlist: addUser.chatlist, id: addUser.id });
    }
  });
});

router.get('/chatlist', (req, res) => {
  ChatList.find({}, (err, allChat) => {
    if (err) {
      console.log(err);
    } else {
      res.json(allChat);
    }
  });
});

module.exports = router;
