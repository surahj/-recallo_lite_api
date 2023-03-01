const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');

const app = express();
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome to recallo api');
});

app.post('/signup', authController.signup)
app.post('/login', authController.login)


module.exports = app;
