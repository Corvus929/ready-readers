const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

// make reading
router.post('/', goalsCtrl.create)

//list page
router.get('/', goalsCtrl.index)

module.exports = router;