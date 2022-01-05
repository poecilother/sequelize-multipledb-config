function association(sequelize) {
  const {
    // example
    Example1,
    Example2
  } = sequelize.models;

  // example
  Example1.hasMany(Example2, { foreignKey: 'example1Id' });
  Example2.belongsTo(Example1, { foreignKey: 'example1Id' });
};

module.exports = { association };
