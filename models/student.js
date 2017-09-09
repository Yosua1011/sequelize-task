'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    full_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  })

  Student.prototype.get_full_name = function() {
    return this.first_name + ' ' + this.last_name
  }
  return Student;
};