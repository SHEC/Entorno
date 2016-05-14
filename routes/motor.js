var express = require('express');
var router = express.Router();



/* Motor up */
router.get('/up', function(req, res, next) {
   if (req.xhr){
    var Cylon = require ('cylon');
	var cUp = 0;
    
  	Cylon.robot({
  		connections: {
  			raspi: { adaptor: 'raspi' }
  		},

  		devices: {
  			pRig: { driver: 'direct-pin', pin: 13 },	// (Num 7 J8) Jumper Morado de la placa ***PWM*** GPIO 27
  			pLef: { driver: 'direct-pin', pin: 15 },	// (Num 8 J8) Jumper Azul de la placa ***PWM*** GPIO 22
  			pEna: { driver: 'direct-pin', pin: 11 },	// Enable (Num 6 J8) GPIO 17
  			pLed: { driver: 'led', pin: 16 },			// Led (Num 8 contra J8) GPIO 23
  			pSen: { driver: 'button', pin: 18 }			// Sensor (Num 9 contra J8) GPIO 24
  		},                                                                                                   

  		work: function(my){

  			var subir = function(){
  				my.pRig.pwmWrite(0.7);	//1 Subir
  				my.pLef.pwmWrite(0);	//0 Subir
  				my.pEna.digitalWrite(1);
  				return console.log("Subir");
  			};

  			//Validaciones de Giro
  			subir();
  			cUp = 0;
  			my.pSen.on('release', function(){
  				cUp++;
  				//console.log(cUp);
  				my.pLed.turnOn();
  				if(cUp == 30){
  					my.pLed.turnOff();
  					my.pEna.digitalWrite(0);
  					/*after((1).second(), function() {
  						cUp = 0;
  					  	//process.exit();
  					});*/
  				}
  			});
  			//Fin Validaciones de Giro
  		}
  	}).start();
	cUp = 0;
    res.send("ok")
   }
   else{
    res.status(200)
   }
 });

/* Motor down */
router.get('/down', function(req, res, next) {
  if(req.xhr){
   var Cylon = require ('cylon');
	var cDown = 0; 

	Cylon.robot({
		connections: {
			raspi: { adaptor: 'raspi' }
		},

		devices: {
			pRig: { driver: 'direct-pin', pin: 13 },	// (Num 7 J8) Jumper Morado de la placa ***PWM*** GPIO 27
			pLef: { driver: 'direct-pin', pin: 15 },	// (Num 8 J8) Jumper Azul de la placa ***PWM*** GPIO 22
			pEna: { driver: 'direct-pin', pin: 11 },	// Enable (Num 6 J8) GPIO 17
			pLed: { driver: 'led', pin: 16 },			// Led (Num 8 contra J8) GPIO 23
			pSen: { driver: 'button', pin: 18 }			// Sensor (Num 9 contra J8) GPIO 24
		},                                                                                                   

		work: function(my){

			var bajar = function(){
				my.pRig.pwmWrite(0);	//0 Baja
				my.pLef.pwmWrite(0.7);	//1 Baja
				my.pEna.digitalWrite(1);
				return console.log("Bajar");
			};

			//Validaciones de Giro
			bajar();
			cDown = 0;
			my.pSen.on('release', function(){
				cDown++;
				//console.log(cDown);
				my.pLed.turnOn();
				if(cDown == 30){
					my.pLed.turnOff();
					my.pEna.digitalWrite(0);
					/*after((1).second(), function() {
						cDOwn = 0;
					  	//process.exit();
					})*/
				}
			});
			//Fin Validaciones de Giro
		}
	}).start();
	cDown = 0;
    res.send("ok")
  }else{
    res.status(200)
  }
  
});

/* Motor stop */
router.get('/straight', function(req, res, next) {
  if (req.xhr){
    console.log('straight');
    res.status(200)
  }else{
    res.status(200)
  }
  
});

/* Motor stop */
router.get('/stop', function(req, res, next) {
  if (req.xhr){
    var Cylon = require ('cylon');

	Cylon.robot({
		connections: {
			raspi: { adaptor: 'raspi' }
		},

		devices: {
			pEna: { driver: 'direct-pin', pin: 11 },	// Enable (Num 6 J8) GPIO 17
			pLed: { driver: 'led', pin: 16 },			// Led (Num 8 contra J8) GPIO 23
			pSen: { driver: 'button', pin: 18 }			// Sensor (Num 9 contra J8) GPIO 24
		},                                                                                                   

		work: function(my){

			my.pLed.turnOff();
			my.pEna.digitalWrite(0);
			after((1).second(), function() {
				//process.exit();
			});
		
		}
	}).start();
  res.status(200);  
  }else{
    res.status(200)
  }
  
});

module.exports = router;
