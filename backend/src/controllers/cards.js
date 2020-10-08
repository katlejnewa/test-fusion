const HttpStatus = require('http-status-codes');
const cardServices = require('../services/cardServices');
const { badRequest } = require('./http-error');

module.exports = {
  async addOneCard(req, res) {
    const { name, columnId } = req.body;
    if (!name || !name.trim()) {
      throw badRequest({ name: 'Данное поле не может быть пустым' });
    }
    if (!columnId) {
      throw badRequest({ boardId: 'Данное поле не может быть пустым' });
    }
    const card = await cardServices.addCard(name, columnId);
    res.status(HttpStatus.OK).send(card);
  },

  async deleteCard(req, res) {
    const { id } = req.params;
    if (!id) {
      throw badRequest({ id: 'Данное поле не может быть пустым' });
    }
    await cardServices.deleteCard(id);
    res.status(HttpStatus.OK).send('OK');
  },
};
