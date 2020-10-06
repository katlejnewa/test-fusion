module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define('Cards', {
    name: DataTypes.STRING,
  }, { paranoid: true });

  return Cards;
};
