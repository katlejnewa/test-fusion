const HttpStatus = require('http-status-codes');
const boardsServices = require('../services/boardServices');
const { badRequest } = require('./http-error');

module.exports = {
  async getBoards(req, res) {
    const boards = await boardsServices.getBoards();
    res.status(HttpStatus.OK).send(boards);
  },
  async addBoard(req, res) {
    const { name } = req.body;
    if (!name || !name.trim()) {
      throw badRequest({ name: 'Данное поле не может быть пустым' });
    }
    const board = await boardsServices.addBoard(name);
    res.status(HttpStatus.OK).send(board);
  },
  async getOneBoard(req, res) {
    const { id } = req.params;
    if (!id) {
      throw badRequest({ id: 'Данное поле не может быть пустым' });
    }
    const board = await boardsServices.getBoard(id);
    res.status(HttpStatus.OK).send(board);
  },
  async deleteBoard(req, res) {
    const { id } = req.params;
    if (!id) {
      throw badRequest({ id: 'Данное поле не может быть пустым' });
    }
    await boardsServices.deleteBoard(id);
    res.status(HttpStatus.OK).send('OK');
  },
};
