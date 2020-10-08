const HttpStatus = require('http-status-codes');
const columnsServices = require('../services/columnServices');
const { badRequest } = require('./http-error');

module.exports = {
  async addOneColumn(req, res) {
    const { name, boardId } = req.body;
    if (!name || !name.trim()) {
      throw badRequest({ name: 'Данное поле не может быть пустым' });
    }
    if (!boardId || !boardId.trim()) {
      throw badRequest({ boardId: 'Данное поле не может быть пустым' });
    }
    const column = await columnsServices.addColumn(name, boardId);
    res.status(HttpStatus.OK).send(column);
  },

  async deleteColumn(req, res) {
    const { id } = req.params;
    if (!id) {
      throw badRequest({ id: 'Данное поле не может быть пустым' });
    }
    await columnsServices.deleteColumn(id);
    res.status(HttpStatus.OK).send('OK');
  },
};
