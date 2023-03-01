const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome to recallo api');
});

app.post('/signup', authController.signup)
app.post('/login', authController.login)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
