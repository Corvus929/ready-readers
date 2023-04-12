const express = require('express');
const router = express.Router();
const readingsCtrl = require('../controllers/readings');

router.get('/', readingsCtrl.index)

module.exports = router;