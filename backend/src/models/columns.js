module.exports = (sequelize, DataTypes) => {
  const Columns = sequelize.define('Columns', {
    name: DataTypes.STRING,
  }, { paranoid: true });

  Columns.associate = function (models) {
    Columns.hasMany(models.Cards, {
      foreignKey: 'columnId',
      as: 'column',
    });
  };

  return Columns;
};
