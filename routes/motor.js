var express = require('express');
var router = express.Router();
var models = require ("../models");

/* Motor up */
router.get('/up', function(req, res, next) {
  res.sendStatus(200, {data: "Sube"});
});

/* Motor down */
router.get('/down', function(req, res, next) {
  res.sendStatus(200, {data: "Baja"});
});

/* Motor stop */
router.get('/stop', function(req, res, next) {
  res.sendStatus(200, {data: "apaga"});
  
});

module.exports = router;