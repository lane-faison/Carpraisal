const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const index = require('./routes/index')
const user = require('./routes/user')
require('dotenv').config()
const passport = require('passport')
const cors = require('cors')
const app = express()

// view engine setup
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: 'shhhhhhhhh',
  saveUninitialized: true,
  resave: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', index)
app.use('/user', user)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
