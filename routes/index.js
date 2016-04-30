var express = require('express');
var router = express.Router();
var models = require ("../models");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHEC' });
});

/*Get to an specific User!!*/
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

module.exports = router;
