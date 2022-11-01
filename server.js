const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongodb = require('./config/db');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

const auth = require('./middleware/auth');

const app = express();
dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Database
mongodb();

app.use('/user', userRoutes);
app.use('/', productRoutes);

app.get('/welcome', auth, (req, res) => {
  res.status(200).send('Welcome 🙌 ');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
