const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('status OK');
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
