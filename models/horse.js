'use strict';
module.exports = (sequelize, DataTypes) => {
  const horse = sequelize.define('horse', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  horse.associate = function(models) {
    // associations can be defined here
  };
  return horse;
};