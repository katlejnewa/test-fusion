module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Columns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Boards',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Columns');
  },
};
