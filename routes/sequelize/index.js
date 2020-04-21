const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodetest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
  Sequelize,
  Model: Sequelize.Model,
};
