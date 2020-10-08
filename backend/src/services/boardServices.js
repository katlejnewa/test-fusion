const { Boards, Cards, Columns } = require('../models');

module.exports = {
  getBoards() {
    return Boards.findAll();
  },
  getBoard(id) {
    return Boards.findOne({
      where: { id },
      include: [
        {
          model: Columns,
          as: 'columns',
          include: [
            {
              model: Cards,
              as: 'cards',
            },
          ],
        },
      ],
    });
  },
  addBoard(name) {
    return Boards.create({ name });
  },
  deleteBoard(id) {
    return Boards.destroy({
      where: {
        id,
      },
      include: [
        {
          model: Columns,
          as: 'columns',
          include: [
            {
              model: Cards,
              as: 'cards',
            },
          ],
        },
      ],
    });
  },

};
