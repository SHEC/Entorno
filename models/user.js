//User Model
'use strict';

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User',{
        username: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        age: {
          type: DataTypes.INTEGER
        }
    }, {
      timestamps: false,
      freezeTableName: true,
      classMethods:{
        associate: function(models){
          User.hasMany(models.Session)
        }
      }
    });
    return User;
}
