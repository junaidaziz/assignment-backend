'use strict';
module.exports = (sequelize, DataTypes) => {
  var Priority = sequelize.define('Priority', {
    name: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'priorities'
  });
  Priority.associate = function(models) {
    Priority.hasMany(models.Task)
  };
  return Priority;
};
