const express = require('express');
const router = express.Router();
const readingsCtrl = require('../../controllers/api/readings');

//list page
// router.post('/', function(req, res) {
//     console.log('post function')
// })
router.post('/', readingsCtrl.create)

//detail
// router.get('/:id', readingsCtrl.show)
//form 
// router.get('/new', readingsCtrl.new)
//create from form
// router.post('/new', readingsCtrl.create)

module.exports = router;