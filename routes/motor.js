var express = require('express');
var router = express.Router();



/* Motor up */
router.get('/up', function(req, res, next) {
   if (req.xhr){
    var Cylon = require ('cylon');
    Cylon.robot({
      connections: {
        raspi: { adaptor: 'raspi' }
      },

      devices: {
        pRig: { driver: 'direct-pin', pin: 13 }, // (Num 6 contra J8) Jumper Verde de la placa ***PWM***
        pLef: { driver: 'direct-pin', pin: 15 }, // (Num 8 J8) Jumper Azul de la placa ***PWM*** 15
        pEna: { driver: 'direct-pin', pin: 11 }, // Enable (Num 6 J8)
        pLed: { driver: 'led', pin: 16 }, // Led (Num 8 contra J8)
        pSen: { driver: 'button', pin: 18 } // Sensor (Num 9 contra J8)
      },                                                                                                   

      work: function(my){

        var subir = function(){
          my.pRig.pwmWrite(0.02); //1 Subir
          my.pLef.pwmWrite(0);  //0 Subir
          my.pEna.digitalWrite(1);
          return console.log("Subir");
        };

        //Validaciones de Giro
        subir();
        var c = 0;
        my.pSen.on('release', function(){
          c++;
          console.log(c);
          my.pLed.turnOn();
          if(c == 25){
            my.pLed.turnOff();
            my.pEna.digitalWrite(0);
            after((1).second(), function() {
                process.exit();
            });
          }
        });
        //Fin Validaciones de Giro
      }
    }).start();
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
    Cylon.robot({
      connections: {
        raspi: { adaptor: 'raspi' }
      },

      devices: {
        pRig: { driver: 'direct-pin', pin: 13 }, // (Num 6 contra J8) Jumper Verde de la placa ***PWM***
        pLef: { driver: 'direct-pin', pin: 15 }, // (Num 8 J8) Jumper Azul de la placa ***PWM*** 15
        pEna: { driver: 'direct-pin', pin: 11 }, // Enable (Num 6 J8)
        pLed: { driver: 'led', pin: 16 }, // Led (Num 8 contra J8)
        pSen: { driver: 'button', pin: 18 } // Sensor (Num 9 contra J8)
      },                                                                                                   

      work: function(my){

        var subir = function(){
          my.pRig.pwmWrite(0.02); //1 Subir
          my.pLef.pwmWrite(0);  //0 Subir
          my.pEna.digitalWrite(1);
          return console.log("Subir");
        };

        //Validaciones de Giro
        subir();
        var c = 0;
        my.pSen.on('release', function(){
          c++;
          console.log(c);
          my.pLed.turnOn();
          if(c == 25){
            my.pLed.turnOff();
            my.pEna.digitalWrite(0);
            after((1).second(), function() {
                process.exit();
            });
          }
        });
        //Fin Validaciones de Giro
      }
    }).start();
    res.send("ok")
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
        pRig: { driver: 'direct-pin', pin: 13 }, // (Num 6 J8) Jumper Verde de la placa
        pLef: { driver: 'direct-pin', pin: 11 }, // (Num 7 J8) Jumper Azul de la placa
        pEna: { driver: 'direct-pin', pin: 15 }, // Enable (Num 8 J8)
        pLed: { driver: 'led', pin: 16}, // Led (Num 8 contra J8)
        pSen: { driver: 'button', pin: 18 } // Sensor (Num 9 contra J8)
      },                                                                                                   

      work: function(my){

        my.pLed.turnOff();
        my.pEna.digitalWrite(0);
        after((1).second(), function() {
          process.exit();
        });
        
      }
    }).start();
  }else{
    res.status(200)
  }
  
});

module.exports = router;