var express = require('express');
var router = express.Router();
var models = require ("../models");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHEC' });
});

/*asaaaaaaaaaaaaaaa*/
router.get('/:user_name', function(req, res, next) {
  models.User.findOne({
    where:{username: req.params.user_name}
  }).then(function(user){
    if(user){
      res.render('user-shec',{
        user: user
      });
    }
    else
      res.send("Bad!!!!");
  });
});

/*Log in*/
router.get('/login', function(req, res, next) {
  models.User.findOne({
    where:{
      username: req.body.username, 
      $and:[{password: req.body.password}] 
    }
  }).then(function(user){
    res.send(user);
  });
});



module.exports = router;
