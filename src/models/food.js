'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {

  return sequelizeDatabase.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // food must be named

    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};