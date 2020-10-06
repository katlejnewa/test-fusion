const express = require('express');
const HttpStatus = require('http-status-codes');

const router = new express.Router();

const boardsRouter = require('./boards');
const columnsRouter = require('./columns');
const cardsRouter = require('./cards');

router.use('/boards', boardsRouter);
router.use('/columns', columnsRouter);
router.use('/cards', cardsRouter);

router.use((error, req, res, next) => {
  const message = error.data ? error.data : { serverError: error.message };

  res
    .status(error.code || HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ error: message });
});

module.exports = router;
