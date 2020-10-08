const express = require('express');
const cardsController = require('../controllers/cards');
const { wrapController } = require('../helpers/catchError');

const router = new express.Router();
const ctrl = wrapController(cardsController);

router.post('/', ctrl.addOneCard);
router.delete('/:id', ctrl.deleteCard);

module.exports = router;
