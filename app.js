const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

const secret = process.env.JWT_SECRET;
const encodedSecret = () => Buffer.from(secret).toString('base64');

const crypto = require('crypto');

// Generate a random secret string of 32 bytes
const sec= crypto.randomBytes(32).toString('hex');

console.log(sec);

app.get('/', (req, res) => {
  res.send('status OK');
});

module.exports = app;
