'use strict';

module.exports = function(sequelize, DataTypes){
  var RouteSess = sequelize.define("RouteSess", {}, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        RouteSess.belongsTo(models.Route);
        RouteSess.belongsTo(models.Session);
      }
    }
  });
  return RouteSess;
};
