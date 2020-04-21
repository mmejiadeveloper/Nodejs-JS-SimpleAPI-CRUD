
module.exports = (Sequelize, Model, sequelize) => {
  class Customer extends Model { }
  return Customer.init(
    {
      // attributes
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
    },
    {
      sequelize,
      modelName: 'customers',
      timestamps: false,
      // options
    },
  );
};
