const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Example2",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      example1Id: {
        type: DataTypes.INTEGER,
      }
    },
    { tableName: "example2" }
  );
};
