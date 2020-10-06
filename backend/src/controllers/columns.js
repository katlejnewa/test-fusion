module.exports = {
  getColumns(req, res) {
    res.send('getColumns');
  },
  addOneColumn(req, res) {
    res.send('addOneColumn');
  },
  deleteColumn(req, res) {
    const { id } = req;
    res.send(`deleteColumn ${id}`);
  },
};
