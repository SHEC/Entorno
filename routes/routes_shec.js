var models = require ("../models");
var express = require('express');
var router = express.Router();

/* GET  All Routes listing. */
router.get('/all', function(req, res) {
  models.Route.findAll({
  }).then(function(users) {
    res.json(users);
  });
});

module.exports = router;
