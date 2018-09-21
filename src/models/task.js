'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    dueDate: {
      type: DataTypes.DATEONLY,
      field: 'due_date'
    },
    resolvedAt: {
      type: DataTypes.DATEONLY,
      field: 'resolved_at'
    },
  }, {
    underscored: true,
    tableName: 'tasks'
  });
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};
