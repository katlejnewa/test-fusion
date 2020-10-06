module.exports = {
  getCards(req, res) {
    res.send('getColumns');
  },
  addCard(req, res) {
    res.send('addOneColumn');
  },
  deleteCard(req, res) {
    const { id } = req;
    res.send(`deleteColumn ${id}`);
  },
};
