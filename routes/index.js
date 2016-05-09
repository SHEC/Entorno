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
      console.log('usuario encontrado: '+ user.username);
      res.render("user-shec",{
        user: user
        })
    }
    else{
      console.log("usuario no encontrado")
      res.redirect("/")
    }
  });
});


/*Create Performance route*/
router.get('/:user_name/create_performance', function(req, res, next) {
  models.User.findOne({
    where: {username: req.params.user_name},
  }).then(function(user){
    if(user){
      models.Session.create({
        datesession: new Date(),
        UserId: user.id
      }).then(function(){
        models.User.findOne({
          where: {username: req.params.user_name},
          include:[models.Session]
        }).then(function(){
          console.log("Sesión creada")
          res.redirect("/"+req.params.user_name+"/performance")
        });
      });
    }
    else{
      console.log("Error al crear la sesión creada")
      res.redirect("/")
    }
  });
});

/*Get Performance route*/
router.get('/:user_name/performance', function(req, res, next) {
  models.User.findOne({
    where: {username: req.params.user_name},
    include:[models.Session]
  })
  .then(function(user){
    if(user){
      console.log('usuario encontrado: '+ user.username+ " con la sesionID:"+ user.Sessions.id);
      res.render("performance", {user:user})
    }
    else{
      res.redirect("/")
    }
  });
});


module.exports = router;
