//Base de datos
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('shec');

//Objeto para manejo del modelo Usuario
userModel={};

//Funcion para crear la tabla usuario
userModel.createTable = function(){
  db.run("CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(55),password VARCHAR(55), edad INTEGER, sexo BOOLEAN)")
  console.log('Tabla usuarios creada con exito');
}

//Funcion obtener todos los usuarios
userModel.getUsers = function(callback){
  db.all("SELECT * FROM usuarios", function (err,res) {
    if(err)
      console.log('Error:' + err);
    callback(null,res);
  });
}

//Función de registro de usuarios
userModel.registerUser= function(userData, callback){
  var response;
  

}

module.exports = userModel;