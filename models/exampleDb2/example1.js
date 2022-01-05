const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Example1",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { tableName: "example1" }
  );
};
