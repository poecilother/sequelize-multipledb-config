const { readdirSync } = require('fs');

const getDirectories = source => 
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

let databases = {};
getDirectories('./configs/sequelize').forEach(database => {
  databases[database] = require(`./${ database }`);
});

databases.connection = async () => {
  Object.keys(databases).forEach(async db => {
    if(db !== 'connection') {
      try {
        await databases[db].authenticate();
        console.log(`Connection to ${ databases[db].config.database } has been established successfully.`);
        await databases[db].sync({ alter: true });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      };
    }
  });
}
module.exports = databases;
