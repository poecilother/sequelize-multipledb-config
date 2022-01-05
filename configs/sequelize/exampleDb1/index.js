const { Sequelize } = require('sequelize');
const { association } = require('./association');

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false,
    timezone: "+01:00"
});

const modelDefiners = [
  // example
  require('../../../models/exampleDb1/example1'),
  require('../../../models/exampleDb1/example2'),
];

for(const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
};

association(sequelize);

module.exports = sequelize;
