module.exports = {
  async getBoards(req, res) {
    res.send('getBoards');
  },
  addBoard(req, res) {
    res.send('addBoard');
  },
  getOneBoard(req, res) {
    const { id } = req;
    res.send(`getOneBoard ${id}`);
  },
  deleteBoard(req, res) {
    const { id } = req;
    res.send(`deleteBoard ${id}`);
  },
};
