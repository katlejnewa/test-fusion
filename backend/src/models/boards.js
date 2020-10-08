module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define('Boards', {
    name: DataTypes.STRING,
  }, { paranoid: true });

  Boards.associate = function (models) {
    Boards.hasMany(models.Columns, {
      foreignKey: 'boardId',
      as: 'columns',
    });
  };

  return Boards;
};
