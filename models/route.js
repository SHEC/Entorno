//Base de datos
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('shec');

//Objeto para manejo del modelo Usuario
routeModel={};

