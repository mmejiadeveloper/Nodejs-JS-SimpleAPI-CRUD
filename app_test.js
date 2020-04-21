
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const flash = require('express-flash');
const session = require('express-session');
var bodyParser = require('body-parser');

const mysql = require('mysql');
const cors = require('cors');
const connection = require('./lib/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const customersRouter = require('./routes/customers');
const loginFunctionScope = require('./routes/loginFunctionScope');
const customersAPI = require('./routes/API/customers');

const app = express();
const passport = require('passport');
var bodyParser = require('body-parser');
const passportJwtServerData = require('./strategies/jwt');

passport.use(passportJwtServerData);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/login', loginFunctionScope);
app.use('/', indexRouter);
app.use('/users', cors(), usersRouter);
// app.use('/customers', customersRouter);
app.use('/customers', passport.authenticate('jwt', { session: false }), customersAPI);


// error handler

/* app.use(session({
	secret: '123456cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))

app.use(flash());
app.use(expressValidator());
app.use(function (req, res, next) {
	next(createError(404));
});

app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
}); */

module.exports = app;
