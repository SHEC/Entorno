//Session Model
'use strict';

module.exports =function(sequelize, DataTypes){
  var Session = sequelize.define('Session', {
    datesession: {
      type: DataTypes.DATE,
    }
  }, {
      timestamps: false,
      freezeTableName: true,
      classMethods:{
        associate:function(models){
          Session.belongsTo(models.User);
          Session.hasMany(models.RouteSess);
        }
      }
    });
    return Session;
}
