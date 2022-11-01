const express = require('express');
const path = require('path');

const router = express.Router();
const { signup, login } = require('../controllers/user.controller');

router.post('/register', signup);

router.post('/login', login);

// Extra routes

// get register page
router.get('/register', (req, res) => {
  // send login page from views folder
  res.sendFile(path.join(__dirname, '../views', 'register.html'));
});

// get login page
router.get('/login', (req, res) => {
  // send login page from views folder
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

module.exports = router;
