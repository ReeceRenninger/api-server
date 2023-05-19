'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  
  return sequelizeDatabase.define('ingredient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

//exported as ingredientsModel 