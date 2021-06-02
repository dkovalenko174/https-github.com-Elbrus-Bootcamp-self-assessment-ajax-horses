const express = require('express');
const path = require('path');
const session = require('express-session');
const logger = require('morgan');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const horsesRouter = require('./routes/horse');

const app = express();
const PORT = 3000;

// Тут должно быть подключение к БД (загляни в './db/connect')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  key: 'user_sid',
  secret: 'anything here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use('/', indexRouter);
app.use('/horses', horsesRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
})

