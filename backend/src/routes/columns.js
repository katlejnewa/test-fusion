const express = require('express');
const columnsController = require('../controllers/columns');
const { wrapController } = require('../helpers/catchError');

const router = new express.Router();
const ctrl = wrapController(columnsController);

router.get('/', ctrl.getColumns);
router.post('/', ctrl.addOneColumn);
router.delete('/:id', ctrl.deleteColumn);

module.exports = router;
