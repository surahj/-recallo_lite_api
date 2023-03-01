const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');

const app = express();
app.use(cors())
app.use(express.json())

const secret = process.env.JWT_SECRET;
const encodedSecret = () => Buffer.from(secret).toString('base64');

app.get('/', (req, res) => {
  res.send('status OK');
});

app.post('/signup', authController.signup)
app.post('/login', authController.login)


module.exports = app;
