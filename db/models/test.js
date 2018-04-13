'use strict';
module.exports = (sequelize, DataTypes) => {
  var Test = sequelize.define('Test', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    //freezeTableName : true;

  });

  Test.associate = function(models) {
    // associations can be defined here
  };

  return Test;
};
