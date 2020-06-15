const express = require('express');

const router = express.Router();

const doctorCtrl = require('../Controller/doctor');

router.post('/verify', doctorCtrl.verify);

module.exports = router;
