const { Cards, Columns } = require('../models');

module.exports = {
  addColumn(name, boardId) {
    return Columns.create({ name, boardId });
  },
  deleteColumn(id) {
    return Columns.destroy({
      where: {
        id,
      },
      include: [
        {
          model: Cards,
          as: 'cards',
        },
      ],
    });
  },

};
