var express = require('express');
var router = express.Router();
var models = require ("../models");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHEC' });
});

/* GET home page. */
router.get('/prueba', function(req, res, next) {
  
});


/*Get to an specific User!!*/
router.get('/:user_name', function(req, res, next) {
  models.User.findOne({
    where:{username: req.params.user_name}
  }).then(function(user){
    if(user){
      res.render("user-shec",{
        user: user
        })
    }
    else{
      res.redirect("/")
    }
  });
});


/*Performance route*/
router.get('/:user_name/performance', function(req, res, next) {
  models.User.findOne({
    where: {username: req.params.user_name},
  }).then(function(user){
    if(user){
      models.Session.create({
        datesession: Date(),
        UserId: user.id
      }).then(function(){
        models.User.findOne({
          where: {username: req.params.user_name},
          include:[models.Session]
        }).then(function(user){
          res.render("performance", {user:user})
        });
      });
    }
    else{
      res.redirect("/")
    }
  });
});

module.exports = router;
