'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  // note that food WILL BE the name of the table created, pluralized ALWAYS
  // TODO: food will need IDs attach to the object
  return sequelizeDatabase.define('foods', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // food must be named

    },
  });
};