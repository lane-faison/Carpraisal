var express = require('express')
var router = express.Router()
require('dotenv').config()
var passport = require('../passport')

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('hello')
})

router.get('/login',
  function(req, res){
    res.render('login', { env: env })
})

router.get('/logout', function(req, res){
  req.logout()
  res.redirect('http://localhost:3000/home.html')
})

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: 'http://www.google.com' }),
  function(req, res) {
    console.log(req.user._json)
    const userEmail = req.user._json.email
    res.redirect('http://localhost:3000/user.html?email=' + userEmail)
})

module.exports = router
