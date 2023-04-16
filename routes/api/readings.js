const express = require('express');
const router = express.Router();
const readingsCtrl = require('../../controllers/api/readings');

// make reading
router.post('/', readingsCtrl.create)

//list page
router.get('/', readingsCtrl.index)

// detail
router.put('/:id', readingsCtrl.edit)

//delete
router.delete('/', readingsCtrl.delete)


module.exports = router;