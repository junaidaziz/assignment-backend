'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    PriorityId: {
      type: DataTypes.INTEGER,
      field: 'priority_id'
    },
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
    Task.belongsTo(models.Priority)
  };
  return Task;
};
