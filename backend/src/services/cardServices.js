const { Cards } = require('../models');

module.exports = {
  addCard(name, columnId) {
    return Cards.create({ name, columnId });
  },
  deleteCard(id) {
    return Cards.destroy({
      where: {
        id,
      },
    });
  },

};
