const express = require('express');
const router = express.Router();
const readingsCtrl = require('../controllers/readings');

//list page
router.get('/', readingsCtrl.index)
//detail
router.get('/:id', readingsCtrl.show)
//form 
// router.get('/new', readingsCtrl.new)
//create from form
router.post('/new', readingsCtrl.create)

module.exports = router;