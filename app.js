
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const cors = require('cors');

const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const loginFunctionScope = require('./routes/loginFunctionScope');
const customers = require('./routes/API/customers');


const passportJwtServerData = require('./strategies/jwt');

passport.use(passportJwtServerData);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.post('/login', loginFunctionScope.loginAndGenerateKey);
app.use('/APIcustomers', passport.authenticate('jwt', { session: false }), customers.router);

module.exports = app;
