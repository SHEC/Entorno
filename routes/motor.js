var express = require('express');
var router = express.Router();
var models = require ("../models");

/* Motor up */
router.get('/up', function(req, res, next) {
  setInterval(function(){
    
  },3000);
});

/* Motor down */
router.get('/down', function(req, res, next) {
  console.log("baja");
  
});

/* Motor stop */
router.get('/stop', function(req, res, next) {
  console.log("para");
  
});

module.exports = router;