const express = require('express')
const router = express.Router()
// const models = require('../models')
const faker = require('faker')
const bodyParser = require('body-parser')
const session = require('express-session')
const expressValidator = require('express-validator')

router.use(bodyParser.urlencoded({extended: false}))
router.use(session({secret: 'syed', resave: false, saveUninitialized: true}))
router.use(expressValidator())


router.get('/', function(req, res){
  res.render('logIn')
})

router.get('/signup', function(req, res){
  res.render('signUp')
})

router.get('/home', function(req, res){
  res.render('home', {
    name: usersession
  })
})

router.get('/creategab', function(req, res){
  res.render('creategab')
})

var usersession
router.post('/home', function(request, response) {

if(request.body.username=='syed' && request.body.password=='donuts'){

  if(!request.session.username){
    usersession = request.session.user = {}
  }

usersession.username=request.body.username
response.render('home')
}
else{
  response.render('signup')
}
});


module.exports = router
