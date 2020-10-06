const express = require('express');
const boardsController = require('../controllers/boards');
const { wrapController } = require('../helpers/catchError');

const router = new express.Router();
const ctrl = wrapController(boardsController);

router.get('/', ctrl.getBoards);
router.post('/', ctrl.addBoard);
router.get('/:id', ctrl.getOneBoard);
router.delete('/:id', ctrl.deleteBoard);

module.exports = router;
