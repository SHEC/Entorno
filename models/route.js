'use strict';

module.exports = function(sequelize, DataTypes){
  var Route = sequelize.define("Route", {
    routename: {
      type: DataTypes.STRING
    },
    distance: {
      type: DataTypes.DECIMAL
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods:{
      associate: function(models){
        Route.hasMany(models.RouteSess);
      }
    }
  });
  return Route;
}
