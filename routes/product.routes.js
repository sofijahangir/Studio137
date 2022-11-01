const express = require('express');

const router = express.Router();
const { addProduct, getProducts } = require('../controllers/product');

// Auth middleware
const auth = require('../middleware/auth');

router.post('/product', auth, addProduct);
router.get('/products', auth, getProducts);

module.exports = router;
