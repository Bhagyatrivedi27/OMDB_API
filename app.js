const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const usersRouter = require('./routes/users').default;
const indexRouter = require('./routes/index');
var cors = require('cors')

const app = express();
app.use(cors())
//express middlewares
//rest call goes through a waterfall of functions
app.use(logger('dev')); // logging the request endpoint 
app.use(express.json()); //parse the body of the request
app.use(express.urlencoded({ extended: false })); //parse the url or the request
app.use(cookieParser()); //parse the cookie
app.use(express.static(path.join(__dirname, 'public'))); //static hosting



const omdbRouter = require('./routes/omdb');
app.use('/omdb',omdbRouter);

module.exports = app;
