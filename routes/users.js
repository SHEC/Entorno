var models = require ("../models");
var express = require('express');
var router = express.Router();

/* GET  All Users listing. */
router.get('/all', function(req, res) {
  models.User.findAll({
  }).then(function(users) {
    res.json(users);
  });
});


/* Create a new user!! */
router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username,
    password: req.body.password,
    age: req.body.age
  }).then(function() {
    res.redirect('/');
  });
});

/*Delete a User by his id*/
router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where:{
      id: req.params.user_id
    }
  }).then(function() {
    res.send('ok');
  });
});

module.exports = router;
